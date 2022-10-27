:is-up-to-date: True
:last-updated: 4.0.1

.. index:: Create a Plugin, Plugins

.. _newIa-plugins:

=======
Plugins
=======

-----------------
What are plugins?
-----------------

A plugin can contain one or more extensions for CrafterCMS in a single package. These extensions can:

* **Extend Crafter Studio (authoring)**

  * Add Studio authoring widgets that drive the Sidebar and other UI elements
  * Add embedded applications that render in their own page within Studio (see :ref:`Plugin Host <newIa-plugin-host>`)
  * Add new Form Engine extensions including data sources and components
  * Add server-side code and services that drive the Studio UI extensions

* **Extend Crafter Engine and the project/web application (delivery)**

  * Add new content types along with their Groovy controllers and FreeMarker templates
  * Add REST APIs and/or server-side code
  * Add 3rd party integrations to your web app

Plugins allows the user to easily add/extend functionality and features of a Web experience
(site, mobile app) or the content authoring experience (authoring tools) or both.
Examples of features/functionalities a user may want to add to their Web app may be a contact form,
a chat bot or Website analytics.

.. _newIa-plugins-authoring:

^^^^^^^^^^^^^^^^^
Authoring Plugins
^^^^^^^^^^^^^^^^^

Authoring plugins are those that allow extending Crafter Studio through UI widgets, applications,
and backend services.

UI Widgets and Standalone Apps
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

There are two types of UI plugins

- UI widgets to be used around the different plugable sections of Studio UI
- Standalone apps that run in the :ref:`Plugin Host page <newIa-plugin-host>`

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

.. include:: /includes/plugin-dev-recommendations.rst

Examples of UI Plugins are

* `CRA Standalone <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-cra>`_: illustrates a standalone app using a dev toolchain with dev server
* `Vanilla Standalone <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-vanilla>`_: illustrates a simple standalone app with single JS entry point without transpilation or anything special
* `Component library <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-component-library>`_: illustrates the creation of a library of widgets that can be rendered throughout Studio UI

Services
^^^^^^^^

Through authoring plugins you can add your own service API rest scripts.

For example, you may want to create an API to connect and/or monitor AWS services and create a
`UI extension <UI Widgets and Standalone Apps_>`_ to consume your APIs.

.. _newIa-plugins-delivery:

^^^^^^^^^^^^^^^^
Delivery Plugins
^^^^^^^^^^^^^^^^

Delivery plugins allow you to extend the CrafterCMS project by adding content types (and all
content types involve) and REST APIs.


Content Types
^^^^^^^^^^^^^

You can add Content Types including their definition, Groovy controller, Freemarker templates and accompanying
assets.

For example, a delivery plugin may be a YouTube video component. The plugin would have the
content type definition, its freemarker template and some JavaScript and CSS to render the content type
when used. When the extension containing the content type is installed, authors would be able to make
use of the YouTube video component adding videos to their content.


Scripts
^^^^^^^

Scripts allow you to add APIs to you CrafterCMS project application.


Templates
^^^^^^^^^

Through delivery plugins, you can add Freemarker templates to your project. Templates could be
the rendering template of a content type or a Freemarker template hook (explained below). So, in summary,
you can add templates to render your extension content types or to add functionality to pages
via the Freemarker template hooks.

.. _newIa-plugins-using-freemarker-templates:

^^^^^^^^^^^^^^^^^^^^^^^^^
Freemarker Template Hooks
^^^^^^^^^^^^^^^^^^^^^^^^^
CrafterCMS provides a mechanism (a "hook") for adding markup and defining macros for plugins via
Freemarker templates.  These templates, when the plugin has one of them will be automatically
included in the project.

Here are the supported templates:

* **definitions.ftl**: can be used to define macros for the plugin
* **head.ftl**: can be used to add markup in the HTML <head> element
* **body_top.ftl**: can be used to add markup at the beginning of the HTML <body> element
* **body_bottom.ftl**: can be used to add markup at the end of the HTML <body> element

Place the template/s in the ``{your_plugin_folder}/delivery/templates`` directory location in your plugin
like below:

.. code-block:: text
       :linenos:
       :emphasize-lines: 8-11

       {your_plugin_folder}/
         craftercms-plugin.yaml
         .crafter/
           screenshots/
             default.png
         delivery/
           templates/
             definitions.ftl
             head.ftl
             body_top.ftl
             body_bottom.ftl


The Google Analytics plugin for CrafterCMS available from the `marketplace <https://craftercms.com/marketplace>`__
uses a Freemarker template (*google-analytics-plugin/delivery/templates/plugins/org/craftercms/plugin/google/analytics/head.ftl*) to add markup in the HTML <head> element.

See https://github.com/craftercms/google-analytics-plugin/blob/master/delivery/templates/plugins/org/craftercms/plugin/google/analytics/head.ftl for an example on what can be in included in the template.



.. raw:: html

   <hr>

.. _newIa-how-do-i-make-my-own-plugin:

----------------------------
How Do I Make My Own Plugin?
----------------------------

^^^^^^^^^^^^
Requirements
^^^^^^^^^^^^
You'll need the following for creating your plugin:

* A plugin descriptor file, ``craftercms-plugin.yaml``
* Your plugin files

The ``craftercms-plugin.yaml`` file contains information about your plugin, such as the license,
the versions of CrafterCMS supported, and other configurations and metadata.

See :ref:`newIa-plugin-descriptor-file` for more information on what's inside the plugin descriptor.

Your plugin files/folders could be JavaScript files, XML files, Groovy scripts, images, CSS files,
and more depending on the plugin type you're creating.

^^^^^^^^^^^^^^^^^^^
Directory Structure
^^^^^^^^^^^^^^^^^^^

A plugin consist of a group of files that are copied to the project repository when installed.
To create your own plugin, your files/folders needs to go in the corresponding type of
plugin folder, following the structure below:


- ``craftercms-plugin.yaml``: the plugin descriptor, see :ref:`newIa-plugin-descriptor-file` for details

- ``.crafter``

  - ``screenshots``

    - ``default.png`` : the default representative image of the plugin placed under the default path ``.crafter/screenshots/``

- ``authoring``: contains all files related to Crafter Studio extensions

  - ``content-types``

    - ``component``: contains configuration files for components, see :ref:`below <newIa-example-component-plugin>` for an example
    - ``page``: contains configuration files for pages

  - ``static-assets``: contains files for Studio UI plugins
  - ``scripts``

    - ``classes``: contains Groovy classes
    - ``rest``: contains REST Groovy scripts

- ``delivery``: contains all files related to Crafter Engine extensions

  - ``templates``: contains Freemarker templates
  - ``static-assets``: contains binary files
  - ``scripts``

    - ``classes``: contains Groovy classes
    - ``components``: contains Groovy scripts for components
    - ``controllers``: contains Groovy controllers
    - ``filters``: contains Groovy filters
    - ``pages``: contains Groovy scripts for pages
    - ``rest``: contains Groovy REST scripts

An easy way to develop new plugins is to start with an empty project and when all the files are ready
copy them to a new repository following the given structure.  However all references should be updated
to match the final destination of the file:

+------------------------------------------+---------------------------------------------------------------+
| Location in the plugin repository        | Location in the project repository                            |
+==========================================+===============================================================+
| ``authoring/content-types/component/*``  | ``/config/studio/content-types/component/<plugin id path>/*`` |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/content-types/page/*``       | ``/config/studio/content-types/page/<plugin id path>/*``      |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/static-assets/*``            | ``/config/studio/static-assets/plugins/<plugin id path>/*``   |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/scripts/classes/*``          | ``/config/studio/plugins/scripts/classes/<plugin id path>/*`` |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/scripts/rest/*``             | ``/config/studio/plugins/scripts/rest/<plugin id path>/*``    |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/templates/*``                 | ``/templates/<plugin id path>/*``                             |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/static-assets/*``             | ``/static-assets/<plugin id path>/*``                         |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/classes/*``           | ``/scripts/classes/<plugin id path>/*``                       |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/components/*``        | ``/scripts/components/<plugin id path>/*``                    |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/controllers/*``       | ``/scripts/controllers/<plugin id path>/*``                   |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/filters/*``           | ``/scripts/filters/<plugin id path>/*``                       |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/pages/*``             | ``/scripts/pages/<plugin id path>/*``                         |
+------------------------------------------+---------------------------------------------------------------+
| ``delivery/scripts/rest/*``              | ``/scripts/rest/<plugin id path>/*``                          |
+------------------------------------------+---------------------------------------------------------------+

Your plugin is installed in a project via the :ref:`marketplace <newIa-plugin-install-from-marketplace>`
or via :ref:`copy-plugin <newIa-crafter-cli-copy-plugin>` CLI command, your plugin descriptor containing the
directory structure will be read and corresponding plugin files copied to the project.

.. _newIa-ui-plugin-directory-structure:

UI Plugin Directory Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Authoring plugins should use the following directory structure:

``{PLUGIN_DIRECTORY}/authoring/static-assets/{ID}/{CATEGORY}/{NAME}/``

where:

- **ID**: A directory named after the plugin id (e.g. ``org.craftercms.sample``)
- **CATEGORY**: A directory named after the `type` of plugin (e.g. control, datasource, sidebar, app, lib, etc.)
- **NAME**: A directory named after the plugin name

  - Plugin sources and/or build output of the plugin would be placed here.

Example Directory Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Here's an example directory structure for a plugin with the *pluginId* value set to ``org.craftercms.sample`` :

.. code-block:: text
      :linenos:
      :caption:  *Directory structure example*

      {your_plugin_folder}/
        craftercms-plugin.yaml
        .crafter/
          screenshots/
            default.png
        authoring/
          static-assets/
            plugins/
              org/
                craftercms/
                  sample/
                    controls/
                      color-picker/
                        main.js
                        style.css
        delivery/
          scripts/
            rest/
              org/
                craftercms/
                  sample/
                    hello.groovy
          templates/
            org/
              craftercms/
                sample/
                  head.ftl

The repository `here <https://github.com/craftercms/craftercms-marketplace-plugin-template>`__ contains
a skeleton plugin directory structure for your use.  You can use the repository to help you start
create your plugin.  Simply fill in the plugin descriptor file ``craftercms-plugin.yaml`` file and
remove items you don't need

.. _newIa-plugins-create-your-plugin-files:

^^^^^^^^^^^^^^^^^^
Create your plugin
^^^^^^^^^^^^^^^^^^
To create a plugin, a descriptor file ``craftercms-plugin.yaml`` is required.
:ref:`This <newIa-plugin-descriptor-file>` article contains more information on what's in the file and
an example file.

The next requirement for creating your plugin are the plugin files.
Depending on the plugin type you are creating, this could be a JavaScript file, Freemarker template files,
Groovy file, XML file, etc.  The plugin file/s should then be placed in a directory structure as described
above depending on the plugin created.  For example, say your plugin is a component content type, your
plugin files should be placed under the directory  ``authoring/content-types/component``

  .. code-block:: text
     :caption: *Example directory structure for a component content type plugin*
     :emphasize-lines: 4-7

     authoring/
       content-types/
         component/
           <your_component_name>/
             config.xml
             controller.groovy
             form-definition.xml


CrafterCMS uses a default path to look for a default representative image of a plugin, the url ``../.crafter/screenshots/``.  Here's a sample plugin files/directory with a default image to represent the plugin:

  .. code-block:: text
     :caption: *Example directory structure for a component content type plugin with a default representative image*
     :emphasize-lines: 1-3

     .crafter/
       screenshots/
         default.png
     authoring/
       content-types/
         component/
           <your_component_name>/
             config.xml
             controller.groovy
             form-definition.xml


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


.. raw:: html

   <hr>

----------------------
Publishing Your Plugin
----------------------

To publish a plugin in the CrafterCMS Marketplace you can follow the instructions in :ref:`newIa-marketplace-create-extensions`

.. raw:: html

   <hr>

---------------------------
Retrieving Extension Assets
---------------------------

.. TODO: can we change the link to swagger URL to an abbreviated text?

At the low level, Crafter Studio APIs provide an endpoint that gets a file for a given plugin, (i.e.
:studio_swagger_url:`#/plugin/getPluginFile`). This API takes care of setting all the right headers
for whatever kind of asset you're retrieving (JavaScript, CSS, image, etc). There are also higher level
mechanisms for developers to load and use plugins like the :ref:`Plugin host <newIa-plugin-host>`
or through the :ref:`Crafter CLI <newIa-crafter-cli-commands>`.

If you need to *manually* load assets from your plugin (e.g set the ``src`` of a ``<script />``,
set the ``href`` of a ``<link />``, set the ``src`` of an ``<img />``, etc.), you should use the following URL

``/studio/1/plugin/file?siteId={siteId}&type={yourPluginType}&name={yourPluginName}&file={fileName}``

If your extensions is nested on a plugin id directory, you should also include the ``pluginId`` argument.

``/studio/1/plugin/file?siteId={siteId}&pluginId={yourPluginId}&type={yourPluginType}&name={yourPluginName}&file={fileName}``

.. raw:: html

   <hr>

-------------------
Installing a Plugin
-------------------

Plugins may be installed a couple of ways depending on where the plugins are located:

* :ref:`newIa-plugin-install-from-marketplace`
* :ref:`newIa-plugin-install-from-local-folder`

After installing a plugin, depending on the plugin you created, the plugin will be be installed under the:

* {siteRoot}/config/studio/static-assets/plugins/{yourPluginId}/{yourPluginType}/{yourPluginName}/
* {siteRoot}/config/studio/content-types/component/{yourPluginType}/{yourPluginName}/
* {siteRoot}/config/studio/content-types/page/{yourPluginType}/{yourPluginName}/
* {siteRoot}/templates/{yourPluginId}/{yourPluginType}/{yourPluginName}
* {siteRoot}/static-assets/{yourPluginId}/{yourPluginType}/{yourPluginName}
* {siteRoot}/scripts/{yourScriptType}/{yourPluginId}/{yourPluginType}/{yourPluginName}


.. _newIa-plugin-install-from-marketplace:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin from the CrafterCMS Marketplace
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Once a plugin is published to the CrafterCMS Marketplace it can be installed using the Crafter Studio user interface
or the REST API:

   .. note::
      To access the Plugin Management tool or use the install plugin REST API your user needs to have the following
      permissions:

      - ``list_plugins``
      - ``install_plugins``


For more information on installing plugins from the CrafterCMS Marketplace using Crafter Studio, see :ref:`newIa-plugin-management`

.. _newIa-plugin-install-from-local-folder:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin in development from a Studio local folder
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
For developers who want to test out their plugins before submitting to the CrafterCMS Marketplace, CrafterCMS
provides a CLI command ``copy-plugin`` for installing a plugin from a Studio local folder into a project using
the ``crafter-cli``.

Let's take a look at an example to show how to install a plugin using the CrafterCMS cli ``copy-plugin`` command.
We'll use a project named ``myeditorial`` where we will be installing the plugin, and the plugin we want to
install located in ``/Users/myuser/plugins/sidebar-plugin``

To install the plugin ``sidebar-plugin`` to our project ``myeditorial``, we'll run the ``copy-plugin`` command
like below:

.. code-block:: console

      ./crafter-cli copy-plugin -e local -s myeditorial --path /users/myuser/plugins/sidebar-plugin


Remember that the connection to CrafterCMS needs to be setup via the ``add-environment`` command before
using any of the ``crafter-cli`` commands.

See :ref:`newIa-crafter-cli-copy-plugin` for more information on the ``copy-plugin`` command.

.. raw:: html

   <hr>

.. _newIa-example-component-plugin:

-------------------------
Example Creating a Plugin
-------------------------

Let's take a look at an example of creating a component content type plugin named ``My Component``

First, we'll configure the descriptor file ``craftercms-plugin.yaml`` file for our plugin

.. literalinclude:: /_static/code/developer/plugins/component-content-type/craftercms-plugin.yaml
   :language: yaml
   :caption: *Descriptor file for the example component content type plugin*
   :linenos:

|

We'll then create the directory structure for a component content type plugin ``authoring/content-types/component/*``,
to place our plugin files in,

   .. code-block:: text
      :caption: *Directory structure for component content type plugin My Component*
      :emphasize-lines: 4-7

      authoring/
        content-types/
          component/
            mycomponent/
              config.xml
              controller.groovy
              form-definition.xml

|

Here are the plugin files:

.. raw:: html

   <details>
   <summary><a>authoring/content-types/component/mycomponent/config.xml</a></summary>

.. literalinclude:: /_static/code/developer/plugins/component-content-type/config.xml
   :language: xml
   :linenos:

.. raw:: html

   </details>


.. raw:: html

   <details>
   <summary><a>authoring/content-types/component/mycomponent/form-definition.xml</a></summary>

.. literalinclude:: /_static/code/developer/plugins/component-content-type/form-definition.xml
   :language: xml
   :linenos:

.. raw:: html

   </details>


.. raw:: html

   <details>
   <summary><a>authoring/content-types/component/mycomponent/controller.groovy</a></summary>

.. literalinclude:: /_static/code/developer/plugins/component-content-type/controller.groovy
   :language: groovy
   :linenos:

.. raw:: html

   </details>

|


The plugin is now ready to be tested.  We'll install our plugin located  under ``/users/myuser/component-plugin``
using the ``crafter-cli`` command ``copy-plugin`` to test it out to a project named editorial

.. code-block:: console

   ./crafter-cli copy-plugin -e local -s editorial --path /users/myuser/component-plugin

|

After installing our plugin, we can now verify that our component plugin is available in |projectTools| Content Types

.. figure:: /_static/images/developer/plugins/project-plugins/plugins-sample-component.webp
   :align: center
   :alt: Example component content type plugin now available in project editorial
   :width: 80%

|

------------------------------
Some More Examples & Resources
------------------------------

Here are some more examples and resources to help you create your plugins

.. _newIa-plugins-authoring-guides:

^^^^^^
Guides
^^^^^^

Below are more authoring examples of creating plugins:

.. TODO:
   Many of the guides below are very much the same article with the only distinction that the widget
   of the example is placed in a different portion of the UI. We should get rid of all but one. In that
   one, illustrate the process (same for all) and simply add sections for how to position in the different
   available places in the UI.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   resources/plugin-sidebar-example
   resources/plugin-experience-builder-example
   resources/plugin-toolbar-example
   resources/plugin-dashboard-example
   resources/plugin-projecttools-example
   resources/plugin-navmenu-example
   resources/form-control-plugins
   resources/form-data-source-plugins
   resources/full-screen-plugin-example


^^^^^^^^^^^^^^^
Example Plugins
^^^^^^^^^^^^^^^

CrafterCMS also provides various plugin examples available from the `marketplace <https://craftercms.com/marketplace>`__ to help you create your own plugins.  These plugins can be installed to your project using ``Plugin Management`` in |projectTools| through the Studio UI.  See :ref:`newIa-plugin-management` for more information on installing plugins from the CrafterCMS Marketplace.

* `Cliengo plugin <https://github.com/craftercms/chatbot-plugin/tree/cliengo>`__ to add Cliengo to a project
* `Image Carousel plugin <https://github.com/craftercms/carousel-plugin>`__ to add a highly configurable carousel plugin based on `Tiny Slider <https://github.com/ganlanyuan/tiny-slider/tree/v2.9.3>`__
* `Contact Form plugin <https://github.com/craftercms/contact-form-plugin>`__ to add one or more contact forms to your project
* `Google Analytics plugin <https://github.com/craftercms/google-analytics-plugin>`__ to add Google Analytics to your project
* `Google Maps plugin <https://github.com/craftercms/googlemaps-plugin>`__ to add Google Maps to your project
* `Google Tag Manager plugin <https://github.com/craftercms/google-tag-manager-plugin>`__ to add Google Tag Manager to your project
* `Sitemap plugin <https://github.com/craftercms/sitemap-plugin>`__ to generate a sitemap for your project
* `YouTube plugin <https://github.com/craftercms/youtube-plugin>`__ to add YouTube videos to your project
* `Redirect plugin <https://github.com/craftercms/redirect-plugin>`__ to add file-based redirects in your project
