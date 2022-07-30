:is-up-to-date: True

.. index:: Create a Project Plugin, Plugin

.. _project-plugin:

==========
Extensions
==========

Extensions are CrafterCMS plugins that can extend both authoring and delivery. Through extensions, you can:

**Extend Crafter Studio (Authoring)**

  * Add *widgets* that can be used throughout Studio UI (like in the sidebars, toolbars or other places)
  * Add embedded applications that render in their own page within Studio (see :ref:`Plugin Host page <plugin-host-page>`)
  * Add Form Engine extensions like data sources and controls
  * Add server-side code like services

**Extend the CrafterCMS project (Delivery)**

  * Add new content types along with their Groovy controllers, Freemarker templates, JavaScript, etc.
  * Add REST APIs and/or server-side code
  * Add third party integrations to your web app

.. _simple-plugin-structure:

At its simplest, an extension can be a single file — like a JavaScript or HTML file that when loaded,
exports functions or components, or renders a UI — but they can grow to contain multiple authoring and delivery
plugins in a single package.

Plugins live at the ``{projectSandbox}/config/studio/plugins`` directory where you create intermediate
*category* directories to finally place your plugin directory with its sources.

.. code-block::

    {projectSandbox}/config/studio/plugins/   <== Plugins root directory
      apps/                                   <== Category directory
        bulk-edit/                            <== Plugin root directory
          static/
            javascript/
              index.js
            css/
              index.css
            index.html
      /datasources                            <== Category directory
        /s3                                   <== Plugin root directory
          index.js
          aws-logo.svg
        /dropbox                              <== Plugin root directory
          index.js
          dropbox-logo.svg
      /controls                               <== Category directory
        /color-picker                         <== Plugin directory
          index.js
          index.css

You can adopt this simple structure if your case matches the following criteria:

* You don't plan to publish to the :ref:`Crafter Marketplace <marketplace>`
* You don't need the :ref:`CLI <crafter-cli-commands>` to install or manage it

  * Your plugin contains authoring-side UI-only extensions (i.e. ui components and/or standalone apps).
  * Your plugin doesn't add any Engine features (i.e. FreeMarker templates, Groovy scripts, Content
    Types or delivery components) — if it does, you'll need the CLI and should follow the setup below.

If you're using this simple structure, you're free to manage your plugin sources and compiled output
(if there's any) inside its directory as you please.

If you do plan to publish or wish to manage via the cli, you'll need to follow the
:ref:`marketplace plugin structure <marketplace-plugin-structure>`.

.. note:: If you started with the simple structure, you're always able to migrate into the full package structure at a later stage.

.. raw:: html

   <hr>

.. _plugins-authoring-extensions:

------
Authoring Extensions
------

Authoring extensions are those that allow extending Crafter Studio through UI widgets, applications,
and backend services.

^^^^^^^^^^^
UI Widgets and Standalone Apps
^^^^^^^^^^^

There are two types of UI extensions

- UI widgets to be used around the different plugable sections of Studio UI
- Standalone apps that run in the :ref:`Plugin Host page <plugin-host-page>`

Plugins can access Studio client-side components (React), services and utilities through two main mechanisms:

- When using ``npm``, you can ``yarn add`` or ``npm i`` the ``@craftercms/studio-ui`` package
- In the Studio browser runtime, the ``window.craftercms`` global

  - The following namespaces are available through ``window.craftercms``

      - ``libs`` allows access to the published third party techs that power Studio UI

        - React
        - ReactDOM/Client
        - MaterialUI
        - ReactRedux
        - ReactIntl
        - createEmotion
        - ReduxToolkit (createAction)
        - RxJS
        - Emotion (createEmotion)

      - ``components`` contains Studio UI components
      - ``icons`` contains custom Studio UI icons
      - ``utils`` contains utilities for issuing AJAX requests, manipulation objects, arrays, strings, paths, content types, and much more
      - ``services`` contains functions to invoke Studio APIs categorized by module (e.g. users, groups, sites, auth, content types, etc.)
      - ``getStore`` returns the Redux store that powers the UI

.. TODO: This next paragraph is here and in plugin-host-page.rst. Is there a way of creating a fragment?

We recommend using `React <https://reactjs.org>`_ and `Material UI <https://mui.com>`_ to develop your
apps and widgets since these will provide the most coherent integration and seamless experience for the
end user provided that CrafterCMS' UI is developed in those technologies. This will also allow you to
leverage all of Studio UI components, utilities and apis. See examples below for sample apps developed
using these technologies.

Examples of UI Extensions are

* `CRA Standalone <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-cra>`_: illustrates a standalone app using a dev toolchain with dev server
* `Vanilla Standalone <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-vanilla>`_: illustrates a simple standalone app with single JS entry point without transpilation or anything special
* `Component library <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-component-library>`_: illustrates the creation of a library of widgets that can be rendered throughout Studio UI

^^^^^^^^
Services
^^^^^^^^

Through authoring extensions you can add your own service API rest scripts.

For example, you may want to create an API to connect and/or monitor AWS services and create a
`UI extension <UI Widgets and Standalone Apps_>`_ to consume your APIs.

.. _plugins-delivery-extensions:

-------------------
Delivery Extensions
-------------------

Delivery extensions allow you to extend the CrafterCMS project by adding content types (and all
content types involve) and REST APIs.

^^^^^^^^^^^^^
Content Types
^^^^^^^^^^^^^

You can add Content Types including their definition, Groovy controller, Freemarker templates and accompanying
assets.

For example, a delivery extension may be a YouTube video component. The extension would have the
content type definition, its freemarker template and some JavaScript and CSS to render the content type
when used. When the extension containing the content type is installed, authors would be able to make
use of the YouTube video component adding videos to their content.

^^^^^^^
Scripts
^^^^^^^

Scripts allow you to add APIs to you CrafterCMS project application.

^^^^^^^^^
Templates
^^^^^^^^^

Through delivery extensions, you can add Freemarker templates to your project. Templates could be
the rendering template of a content type or a hook template (explained below). So, in summary,
you can add templates to render your extension content types or to add functionality to pages
via the hook templates.

.. _plugins-using-freemarker-templates:

~~~~~~~~~~~~~~
Hook Templates
~~~~~~~~~~~~~~

CrafterCMS provides a set of Freemarker "hooks" for including markup and defining macros. These
hook templates will be automatically included in the project whenever the extension contains them.

* **definitions.ftl**: can be used to define macros for the plugin
* **head.ftl**: can be used to add markup in the HTML <head> element
* **body_top.ftl**: can be used to add markup at the beginning of the HTML <body> element
* **body_bottom.ftl**: can be used to add markup at the end of the HTML <body> element

You don't need to create all of these, only those that you need for your particular plugin. You must
place the template/s at the ``{your_plugin}/delivery/templates`` directory.

For example, the `Google Analytics plugin <https://marketplace.craftercms.org/plugins/org.craftercms.plugin.google.analytics>`_
for CrafterCMS available from the `marketplace <https://marketplace.craftercms.org>`_ uses
`head.ftl <https://github.com/craftercms/google-analytics-plugin/blob/master/delivery/templates/plugins/org/craftercms/plugin/google/analytics/head.ftl>`_
to add the necessary JavaScripts to HTML ``<head>`` element.

.. raw:: html

   <hr>

.. TODO: consolidate these two
.. _how-do-i-make-my-own-project-plugin:
.. _project-plugins-create-your-plugin:

-----------------------------
How Do I Create An Extension?
-----------------------------

Once you understand the capabilities described in this document and know what you wish to build,
start by cloning `this git repository <https://github.com/craftercms/craftercms-marketplace-plugin-template>`_.
Clean out anything you don't need and you're all set.

Alternatively, if you are creating UI-only widgets or apps for extending Studio (authoring) — i.e. you're
not adding any backend code, content types, Freemarker, etc — and you don't need the :ref:`Crafter CLI <crafter-cli-commands>`
to install and wire your plugin for you, can use the :ref:`simple plugin structure <simple-plugin-structure>` described above,
which is a great way of getting started quickly. If you start here, you can always move to the structure
above as your plugin grows. `This repo <https://github.com/craftercms/authoring-ui-plugin-examples>`_
is a great starting point for examples and setup.

.. raw:: html

   <hr>

---------------------------------
Publishing To Crafter Marketplace
---------------------------------

To publish a plugin to the CrafterCMS Marketplace you can follow the instructions in :ref:`marketplace_create_plugins`

.. raw:: html

   <hr>

---------------------------
Retrieving Extension Assets
---------------------------

.. TODO: can we change the link to swagger URL to an abbreviated text?

At the low level, Crafter Studio APIs provide an endpoint that gets a file for a given plugin, (i.e.
:studio_swagger_url:`#/plugin/getPluginFile`). This API takes care of setting all the right headers
for whatever kind of asset you're retrieving (JavaScript, CSS, image, etc). There are also higher level
mechanisms for developers to load and use plugins like the :ref:`Plugin host page <plugin-host-page>`
or through the :ref:`Crafter CLI <crafter-cli-commands>`.

If you need to *manually* load assets from your plugin (e.g set the ``src`` of a ``<script />``,
set the ``href`` of a ``<link />``, set the ``src`` of an ``<img />``, etc.), you should use the following URL

``/studio/1/plugin/file?siteId={siteId}&type={yourPluginType}&name={yourPluginName}&file={fileName}``

If your extensions is nested on a plugin id directory, you should also include the ``pluginId`` argument.

``/studio/1/plugin/file?siteId={siteId}&pluginId={yourPluginId}&type={yourPluginType}&name={yourPluginName}&file={fileName}``

.. raw:: html

   <hr>

-----------------------
Installing an Extension
-----------------------

Extensions may be installed from local disk or directly from the CrafterCMS Marketplace.

After installing, certain files would be copied into the following locations:

.. TODO: Is the first line true? Aren't plugins copied to `/config/studio/plugins` i.e. no static-assets

* ``{projectSandbox}/config/studio/static-assets/plugins/{yourPluginId}/{yourPluginType}/{yourPluginName}/``
* ``{projectSandbox}/config/studio/content-types/component/{yourPluginType}/{yourPluginName}/``
* ``{projectSandbox}/config/studio/content-types/page/{yourPluginType}/{yourPluginName}/``
* ``{projectSandbox}/templates/{yourPluginId}/{yourPluginType}/{yourPluginName}``
* ``{projectSandbox}/static-assets/{yourPluginId}/{yourPluginType}/{yourPluginName}``
* ``{projectSandbox}/scripts/{yourScriptType}/{yourPluginId}/{yourPluginType}/{yourPluginName}``

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin from the CrafterCMS Marketplace
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Once a plugin is published to the CrafterCMS Marketplace it can be installed using the Crafter Studio
user interface or the REST API:

   .. note::
      To access the Plugin Management tool or use the install plugin REST API your user needs to have the following
      permissions:

      - ``list_plugins``
      - ``install_plugins``


For more information on installing plugins from the CrafterCMS Marketplace using Crafter Studio, see :ref:`plugin-management`

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin in development from a Studio local folder
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

For developers who want to test out their plugins before submitting to the CrafterCMS Marketplace, CrafterCMS provides a CLI command ``copy-plugin`` for installing a plugin from a Studio local folder into a project using the ``crafter-cli``.

Let's take a look at an example to show how to install a plugin using the CrafterCMS cli ``copy-plugin`` command.
We'll use a project named ``myeditorial`` where we will be installing the plugin, and the plugin we want to install located in ``/Users/myuser/plugins/sidebar-plugin``

To install the plugin ``sidebar-plugin`` to our project ``myeditorial``, we'll run the ``copy-plugin`` command like below:

.. code-block:: bash

      ➜  ./crafter-cli copy-plugin -e local -s myeditorial --path /users/myuser/plugins/sidebar-plugin
      OK

Remember that the connection to CrafterCMS needs to be setup via the ``add-environment`` command before using any of the ``crafter-cli`` commands.

See :ref:`crafter-cli-copy-plugin` for more information on the ``copy-plugin`` command.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Reusing libraries written in Java in your plugin
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Some users may have some libraries written in Java that they may want to reuse in their plugin.
To reuse those libraries, do the following:

* Publish your JARs to Maven Central
* Pull the JARs from Maven in a small Groovy script in your plugin via Grapes

  If the JAR is available in Maven Central

  .. code-block:: groovy
     :caption: *Pull JAR available in Maven Central via Grapes*

     @Grab(value='com.example:my-java-plugin:1.0.0', initClass=false)
     import com.example.java.Plugin // This class is made up, it can be anything

  |

  If the JAR is in a private Maven Repo

  .. code-block:: groovy
     :caption: *Pull JAR available in private Maven Repo via Grapes*

     @GrabResolver(name='my-repo', root='https://maven.example.com/')
     @Grab(value='com.example:my-java-plugin:1.0.0', initClass=false)
     import com.example.java.Plugin // This class is made up, it can be anything

--------------------
Examples & Resources
--------------------

^^^^^^^^^^^^
Guides
^^^^^^^^^^^^

.. TODO:
     Many of the guides below are very much the same article with the only distinction that the widget
     of the example is placed in a different portion of the UI. We should get rid of all but one. In that
     one, illustrate the process (same for all) and simply add sections for how to position in the different
     available places in the UI.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   resources/add-component-content-type
   resources/plugin-sidebar-example
   resources/plugin-experience-builder-example
   resources/plugin-toolbar-example
   resources/plugin-dashboard-example
   resources/plugin-projecttools-example
   resources/plugin-navmenu-example
   resources/form-control-plugins
   resources/form-data-source-plugins
   resources/plugin-host-page-examples

^^^^^^^^^^^^
Example Extensions
^^^^^^^^^^^^

* `Cliengo plugin <https://github.com/craftercms/chatbot-plugin/tree/cliengo>`__ to add Cliengo to a project
* `Image Carousel plugin <https://github.com/craftercms/carousel-plugin>`__ to add a highly configurable carousel plugin based on `Tiny Slider <https://github.com/ganlanyuan/tiny-slider/tree/v2.9.3>`__
* `Contact Form plugin <https://github.com/craftercms/contact-form-plugin>`__ to add one or more contact forms to your project
* `Google Analytics plugin <https://github.com/craftercms/google-analytics-plugin>`__ to add Google Analytics to your project
* `Google Maps plugin <https://github.com/craftercms/googlemaps-plugin>`__ to add Google Maps to your project
* `Google Tag Manager plugin <https://github.com/craftercms/google-tag-manager-plugin>`__ to add Google Tag Manager to your project
* `Sitemap plugin <https://github.com/craftercms/sitemap-plugin>`__ to generate a sitemap for your project
* `YouTube plugin <https://github.com/craftercms/youtube-plugin>`__ to add YouTube videos to your project
* `Redirect plugin <https://github.com/craftercms/redirect-plugin>`__ to add file-based redirects in your project
* `CRA Standalone <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-cra>`_: illustrates a standalone app using a dev toolchain with dev server
* `Vanilla Standalone <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-vanilla>`_: illustrates a simple standalone app with single JS entry point without transpilation or anything special
* `Component library <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-component-library>`_: illustrates the creation of a library of widgets that can be rendered throughout Studio UI
