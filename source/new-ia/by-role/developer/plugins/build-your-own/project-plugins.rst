:is-up-to-date: True
:last-updated: 4.0.0

:nosearch:

.. index:: Create a Project Plugin, Plugin

.. _newIa-project-plugin:

===============
Project Plugins
===============

-------------------------
What are project plugins?
-------------------------

A project plugin can contain one or more extensions for CrafterCMS in a single package. These extensions can:

* **Extend Crafter Studio (authoring)**

  * Add Studio authoring widgets that drive the Sidebar and other UI elements
  * Add new Form Engine extensions including data sources and components
  * Add server-side code and services that drive the Studio UI extensions

* **Extend Crafter Engine and the project/web application (delivery)**

  * Add new content types along with their Groovy controllers and FreeMarker templates
  * Add REST APIs and/or server-side code
  * Add 3rd party integrations to your web app

Project plugins allows the user to easily add/extend functionality and features of a Web experience
(site, mobile app) or the content authoring experience (authoring tools) or both.
Examples of features/functionalities a user may want to add to their Web app may be a contact form,
a chat bot or Website analytics.

.. _newIa-how-do-i-make-my-own-project-plugin:

------------------------------------
How Do I Make My Own Project Plugin?
------------------------------------

^^^^^^^^^^^^
Requirements
^^^^^^^^^^^^
You'll need the following for creating your plugin:

* A plugin descriptor file, ``craftercms-plugin.yaml``
* Your plugin files

The ``craftercms-plugin.yaml`` file contains information about your plugin, such as the license,
the versions of CrafterCMS supported, and other configurations and metadata.

See :ref:`newIa-craftercms-plugin-yaml-file` for more information on what's inside the plugin descriptor.

Your plugin files/folders could be JavaScript files, XML files, Groovy scripts, images, CSS files,
and more depending on the plugin type you're creating.

^^^^^^^^^^^^^^^^^^^
Directory Structure
^^^^^^^^^^^^^^^^^^^

A project plugin consist of a group of files that are copied to the project repository when installed.
To create your own project plugin, your files/folders needs to go in the corresponding type of
plugin folder, following the structure below:


- ``craftercms-plugin.yaml``: the plugin descriptor, see :ref:`newIa-craftercms-plugin-yaml-file` for details

- ``.crafter``

  - ``screenshots``

    - ``default.png`` : the default representative image of the plugin placed under the default path ``.crafter/screenshots/``

- ``authoring``: contains all files related to Crafter Studio extensions

  - ``content-types``

    - ``component``: contains configuration files for components, see :ref:`below <newIa-example-component-plugin>` for an example
    - ``page``: contains configuration files for pages

  - ``static-assets``: contains files for Studio UI plugins, see :ref:`newIa-studio-plugins` for details
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
copy them to a new repository following the given structure. However all references should be updated
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

Here's an example directory structure for a project plugin:

   .. code-block:: text
      :linenos:

      {your_plugin_folder}/
        craftercms-plugin.yaml
        .crafter/
          screenshots/
            default.png
        authoring/
          static-assets/
            plugins/
              {yourPluginId}/
                {yourPluginType}/
                  {yourPluginName}/
                    {yourPluginFilesAndFolders}
        delivery/
          {yourPluginFilesAndFolders}

       |

where:

- **yourPluginType** : Type of plugin, e.g. control, datasource, sidebar, app, etc.
- **yourPluginName** : Name of  plugin
- **yourPluginFilesAndFolders** : JavaScript, Freemarker, Groovy, binary and/or plugin build output files/folders containing the plugin implementation

.. _newIa-plugins-using-freemarker-templates:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Plugins using Freemarker Templates
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
CrafterCMS provides a mechanism (a "hook") for adding markup/defining macros for plugins via
Freemarker templates.  These templates, when the plugin has one of them will be automatically
included in the project.

Here are the supported templates:

* **definitions.ftl**: can be used to define macros for the plugin
* **head.ftl**: can be used to add markup in the HTML <head> element
* **body_top.ftl**: can be used to add markup at the beginning of the HTML <body> element
* **body_bottom.ftl**: can be used to add markup at the end of the HTML <body> element

Place the template/s in the following location in your plugin:

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

|

The Google Analytics plugin for CrafterCMS available from the `marketplace <https://marketplace.craftercms.org>`__
uses a Freemarker template (*google-analytics-plugin/delivery/templates/plugins/org/craftercms/plugin/google/analytics/head.ftl*) to add markup in the HTML <head> element.

See https://github.com/craftercms/google-analytics-plugin/blob/master/delivery/templates/plugins/org/craftercms/plugin/google/analytics/head.ftl for an example on what can be in included in the template.



.. _newIa-project-plugins-create-your-plugin:

^^^^^^^^^^^^^^^^^^
Create your plugin
^^^^^^^^^^^^^^^^^^

To create a plugin, a descriptor file  ``craftercms-plugin.yaml`` is required. Below is an example project plugin descriptor file.

  .. code-block:: yaml
     :linenos:
     :caption: *Example craftercms-plugin.yaml file for a project plugin*

     # This file describes a plugin for use in CrafterCMS

     # The version of the format for this file
     descriptorVersion: 2

     # Describe the plugin
     plugin:
       type: site
       id: org.craftercms.plugin.test
       name: Project Plugin Example
       tags:
         - test
       version:
         major: 3
         minor: 0
         patch: 1
       description: A simple example for project plugins
       documentation: "https://raw.githubusercontent.com/craftercms/site-plugin-example/master/readme.md"
       website:
         name: Project Plugin Example
         url: https://github.com/craftercms/site-plugins-example
       media:
         screenshots:
           - title: CrafterCMS
             description: CrafterCMS Example Plugin
             url: "https://raw.githubusercontent.com/craftercms/site-plugin-example/master/.crafter/screenshots/default.png"
       developer:
         company:
           name: CrafterCMS
           email: info@craftercms.com
           url: https://craftercms.com
       license:
         name: MIT
         url: https://opensource.org/licenses/MIT
       crafterCmsVersions:
         - major: 4
           minor: 0
           patch: 0
       crafterCmsEditions:
         - community
         - enterprise

  |

Here are some things to note in the descriptor file:

* ``plugin.type`` should be set to ``site`` for project plugins
* ``plugin.id`` is a unique Id that is meaningful/recognizable to people who will be using the project plugin
* ``plugin.name`` is the name displayed in the CrafterCMS Marketplace.  Pick a unique name for your plugin.  You can check in the CrafterCMS Marketplace if the name you picked does not exist yet.  It's also a best practice to provide a name for your plugin that is meaningful or recognizable to users.  The name can be multiple words such as ``Project Plugin Example``
* ``plugin.version`` is a version number for the project plugin
* ``plugin.description`` should contain a short description of the plugin and is displayed underneath the plugin name in the CrafterCMS Marketplace
* ``plugin.documentation`` serves as the help block for the plugin. It contains a URL to the plugin's documentation file (must be in Markdown) containing information on how to use/configure the plugin. The documentation will appear alongside the plugin in Crafter Studio and the CrafterCMS Marketplace
* ``plugin.website.url`` can be a page for more information on your project plugin or for announcing updates, reporting bugs, etc. from your user community.
* ``plugin.media.url`` is the path to look for a representative image of the project plugin.
* ``plugin.license`` is the license supported by the plugin
* ``plugin.crafterCmsVersions`` contains the CrafterCMS version/s that the plugin is compatible with (look in the :ref:`newIa-release-notes` section for the versions available), and you'll need to keep this up to date

|
|

The next requirement for creating your project plugin are the plugin files.
Depending on the plugin type you are creating, this could be a JavaScript file, Freemarker template files,
Groovy file, XML file, etc.  The plugin file/s should then be placed in a directory structure as described
above depending on the project plugin created.  For example, say your plugin is a component content type, your
plugin files should be placed under the directory  ``authoring/content-types/component``

  .. code-block:: text
     :caption: *Example directory structure for a component content type project plugin*
     :emphasize-lines: 4-7

     authoring/
       content-types/
         component/
           <your_component_name>/
             config.xml
             controller.groovy
             form-definition.xml


CrafterCMS uses a default path for CrafterCMS to look for a default representative image of a plugin, the url ``../.crafter/screenshots/``.  Here's a sample plugin files/directory with a default image to represent the plugin:

  .. code-block:: text
     :caption: *Example directory structure for a component content type project plugin with a default representative image*
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

|
|

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

  |

------------------------------
Publishing Your Project Plugin
------------------------------

To publish a plugin in the CrafterCMS Marketplace you can follow the instructions in :ref:`newIa-marketplace_create_plugins`

|
|

---------------------------
Installing a Project Plugin
---------------------------

Plugins may be installed a couple of ways depending on where the plugins are located:

* Install a plugin from the CrafterCMS Marketplace
* Install a plugin in development from a Studio local folder

After installing a project plugin, depending on the plugin you created, the project plugin will be be installed under the:

* {siteRoot}/config/studio/static-assets/plugins/{yourPluginId}/{yourPluginType}/{yourPluginName}/
* {siteRoot}/config/studio/content-types/component/{yourPluginType}/{yourPluginName}/
* {siteRoot}/config/studio/content-types/page/{yourPluginType}/{yourPluginName}/
* {siteRoot}/templates/{yourPluginId}/{yourPluginType}/{yourPluginName}
* {siteRoot}/static-assets/{yourPluginId}/{yourPluginType}/{yourPluginName}
* {siteRoot}/scripts/{yourScriptType}/{yourPluginId}/{yourPluginType}/{yourPluginName}

|
|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin from the CrafterCMS Marketplace
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Once a project plugin is published to the CrafterCMS Marketplace it can be installed using the Crafter Studio user interface
or the REST API:

   .. note::
      To access the Plugin Management tool or use the install plugin REST API your user needs to have the following
      permissions:

      - ``list_plugins``
      - ``install_plugins``


For more information on installing plugins from the CrafterCMS Marketplace using Crafter Studio, see :ref:`newIa-plugin-management`

|
|

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

|

Remember that the connection to CrafterCMS needs to be setup via the ``add-environment`` command before using any of the ``crafter-cli`` commands.

See :ref:`newIa-crafter-cli-copy-plugin` for more information on the ``copy-plugin`` command.

.. _newIa-example-component-plugin:

---------------------------------
Example Creating a Project Plugin
---------------------------------

Let's take a look at an example of creating a component content type plugin named ``My Component``

First, we'll configure the descriptor file ``craftercms-plugin.yaml`` file for our plugin

.. literalinclude:: /_static/code/developer/plugins/component-content-type/craftercms-plugin.yaml
   :language: yaml
   :caption: *Descriptor file for the example component content type plugin*
   :linenos:

|

We'll then create the directory structure for a component content type plugin ``authoring/content-types/component/*``, to place our plugin files in,

   .. code-block:: text
      :caption: *Directory structure for component content type project plugin My Component*
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


The plugin is now ready to be tested.  We'll install our plugin located  under ``/users/myuser/component-plugin`` using the ``crafter-cli`` command ``copy-plugin`` to test it out to a project named editorial

.. code-block:: bash

   ➜ ./crafter-cli copy-plugin -e local -s editorial --path /users/myuser/component-plugin
   OK

|

After installing our plugin, we can now verify that our component plugin is available in |projectTools| Content Types

.. figure:: /_static/images/developer/plugins/project-plugins/plugins-sample-component.jpg
   :align: center
   :alt: Example component content type plugin now available in project editorial
   :width: 80%

|

---------------------------------
Some More Project Plugin Examples
---------------------------------

For more authoring examples of creating project plugins, see :ref:`newIa-studio-plugins`

CrafterCMS also provides various project plugin examples available from the `marketplace <https://marketplace.craftercms.org>`__ to help you create your own plugins.  These project plugins can be installed to your project using ``Plugin Management`` in |projectTools| through the Studio UI.  See :ref:`newIa-plugin-management` for more information on installing project plugins from the CrafterCMS Marketplace.

* `Cliengo plugin <https://github.com/craftercms/chatbot-plugin/tree/cliengo>`__ to add Cliengo to a project
* `Image Carousel plugin <https://github.com/craftercms/carousel-plugin>`__ to add a highly configurable carousel plugin based on `Tiny Slider <https://github.com/ganlanyuan/tiny-slider/tree/v2.9.3>`__
* `Contact Form plugin <https://github.com/craftercms/contact-form-plugin>`__ to add one or more contact forms to your project
* `Google Analytics plugin <https://github.com/craftercms/google-analytics-plugin>`__ to add Google Analytics to your project
* `Google Maps plugin <https://github.com/craftercms/googlemaps-plugin>`__ to add Google Maps to your project
* `Google Tag Manager plugin <https://github.com/craftercms/google-tag-manager-plugin>`__ to add Google Tag Manager to your project
* `Sitemap plugin <https://github.com/craftercms/sitemap-plugin>`__ to generate a sitemap for your project
* `YouTube plugin <https://github.com/craftercms/youtube-plugin>`__ to add YouTube videos to your project
* `Redirect plugin <https://github.com/craftercms/redirect-plugin>`__ to add file-based redirects in your project
