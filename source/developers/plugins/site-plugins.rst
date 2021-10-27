:is-up-to-date: True

.. index:: Create a Site Plugin, Plugin

.. _create-a-site-plugin:

============
Site Plugins
============

----------------------
What are site plugins?
----------------------

A site plugin can contain one or more extensions for Crafter CMS in a single package. These extensions can:

* **Extend Crafter Studio (authoring)**

  * Add Studio authoring widgets that drive the Sidebar and other UI elements
  * Add new Form Engine extensions including data sources and components
  * Add server-side code and services that drive the Studio UI extensions

* **Extend Crafter Engine and the site/web application (delivery)**

  * Add new content types along with their Groovy controllers and FreeMarker templates
  * Add REST APIs and/or server-side code
  * Add 3rd party integrations to your web app

Site plugins allows the user to easily add/extend functionality and features of a Web experience (site, mobile app) or the content authoring experience (authoring tools) or both.
Examples of features/functionalities a user may want to add to their Web app may be a contact form, a chat bot or Website analytics.

.. _how-do-i-make-my-own-site-plugin:

---------------------------------
How Do I Make My Own Site Plugin?
---------------------------------

^^^^^^^^^^^^
Requirements
^^^^^^^^^^^^
You'll need the following for creating your plugin:

* A plugin descriptor file, ``craftercms-plugin.yaml``
* Your plugin files

The ``craftercms-plugin.yaml`` file contains information about your plugin, such as the license, the versions of Crafter CMS supported, and other configurations and metadata.

See :ref:`craftercms-plugin-yaml-file` for more information on what's inside the plugin descriptor.

Your plugin files/folders could be JavaScript files, XML files, Groovy scripts, images, CSS files, and more depending on the plugin type you're creating.

^^^^^^^^^^^^^^^^^^^
Directory Structure
^^^^^^^^^^^^^^^^^^^

A site plugin consist of a group of files that are copied to the site repository when installed.  To create your own
site plugin, your files/folders needs to go in the corresponding type of plugin folder, following the structure below:


- ``craftercms-plugin.yaml``: the plugin descriptor, see :ref:`craftercms-plugin-yaml-file` for details

- ``.crafter``

  - ``screenshots``

    - ``default.png`` : the default representative image of the plugin placed under the default path ``.crafter/screenshots/``

- ``authoring``: contains all files related to Crafter Studio extensions

  - ``content-types``

    - ``component``: contains configuration files for components, see :ref:`below <example-component-plugin>` for an example
    - ``page``: contains configuration files for pages

  - ``js``: contains files for Studio UI plugins, see :ref:`studio-plugins` for details
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

An easy way to develop new plugins is to start with an empty site and when all the files are ready copy them to a new
repository following the given structure. However all references should be updated to match the final destination of
the file:

+------------------------------------------+---------------------------------------------------------------+
| Location in the plugin repository        | Location in the site repository                               |
+==========================================+===============================================================+
| ``authoring/content-types/component/*``  | ``/config/studio/content-types/component/<plugin id path>/*`` |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/content-types/page/*``       | ``/config/studio/content-types/page/<plugin id path>/*``      |
+------------------------------------------+---------------------------------------------------------------+
| ``authoring/js/*``                       | ``/config/studio/plugins/js/<plugin id path>/*``              |
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

Here's an example directory structure for a site plugin:

   .. code-block:: text
      :linenos:

      {your_plugin_folder}/
        craftercms-plugin.yaml
        .crafter/
          screenshots/
            default.png
        authoring/
          js/
            {yourPluginType}/
              {yourPluginName}/
                {yourPluginFilesAndFolders}
        delivery/
          {yourPluginFilesAndFolders}

       |

where:

- **yourPluginFilesAndFolders** : Freemarker, Groovy and binary files/folders containing the plugin implementation
- **yourPluginType** : Type of plugin, e.g. control, datasource, sidebar, app, etc.
- **yourPluginName** : Name of  plugin
- **yourPluginFilesAndFolders** : JavaScript and/or plugin build output files/folders containing the plugin implementation


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Plugins using Freemarker Templates
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter CMS provides a mechanism (a "hook") for adding markup/defining macros for plugins via Freemarker templates.  These templates, when the plugin has one of them will be automatically included in the site.

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

The Google Analytics plugin for Crafter CMS available from the `marketplace <https://marketplace.craftercms.org>`__
uses a Freemarker template (*google--analytics-plugin/delivery/templates/head.ftl*) to add markup in the HTML <head> element.

See https://github.com/craftercms/google-analytics-plugin/blob/master/delivery/templates/head.ftl for an example on what can be in included in the template.



.. _site-plugins-create-your-plugin:

^^^^^^^^^^^^^^^^^^
Create your plugin
^^^^^^^^^^^^^^^^^^

To create a plugin, a descriptor file  ``craftercms-plugin.yaml`` is required. Below is an example site plugin descriptor file.

  .. code-block:: yaml
     :linenos:
     :caption: *Example craftercms-plugin.yaml file for a site plugin*

     # This file describes a plugin for use in Crafter CMS

     # The version of the format for this file
     descriptorVersion: 2

     # Describe the plugin
     plugin:
       type: site
       id: org.craftercms.plugin.test
       name: Site Plugin Example
       tags:
         - test
       version:
         major: 3
         minor: 0
         patch: 1
       description: A simple example for site plugins
       documentation: "https://raw.githubusercontent.com/craftercms/site-plugin-example/master/readme.md"
       website:
         name: Site Plugin Example
         url: https://github.com/craftercms/site-plugins-example
       media:
         screenshots:
           - title: Crafter CMS
             description: Crafter CMS Example Plugin
             url: "https://raw.githubusercontent.com/craftercms/site-plugin-example/master/.crafter/screenshots/default.png"
       developer:
         company:
           name: Crafter Software
           email: info@craftersoftware.com
           url: https://craftersoftware.com
       build:
         id: 0220b902bff5cd22749e8ac46ec80eed314c3d67
         date: 2021-03-18T00:00:00Z
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

* ``plugin.type`` should be set to ``site`` for site plugins
* ``plugin.id`` is a unique Id that is meaningful/recognizable to people who will be using the site plugin
* ``plugin.name`` is the name displayed in the Crafter CMS Marketplace.  Pick a unique name for your plugin.  You can check in the Crafter CMS Marketplace if the name you picked does not exist yet.  It's also a best practice to provide a name for your plugin that is meaningful or recognizable to users.  The name can be multiple words such as ``Site Plugin Example``
* ``plugin.version`` is a version number for the site plugin
* ``plugin.description`` should contain a short description of the plugin and is displayed underneath the plugin name in the Crafter CMS Marketplace
* ``plugin.documentation`` serves as the help block for the plugin. It contains a URL to the plugin's documentation file (must be in Markdown) containing information on how to use/configure the plugin. The documentation will appear alongside the plugin in Crafter Studio and the Crafter CMS Marketplace
* ``plugin.website.url`` can be a page for more information on your site plugin or for announcing updates, reporting bugs, etc. from your user community.
* ``plugin.media.url`` is the path to look for a representative image of the site plugin.
* ``plugin.license`` is the license supported by the plugin
* ``plugin.crafterCmsVersions`` contains the Crafter CMS version/s that the plugin is compatible with (look in the :ref:`release-notes` section for the versions available), and you'll need to keep this up to date

|
|

The next requirement for creating your site plugin are the plugin files.
Depending on the plugin type you are creating, this could be a JavaScript file, Freemarker template files,
Groovy file, XML file, etc.  The plugin file/s should then be placed in a directory structure as described
above depending on the site plugin created.  For example, say your plugin is a component content type, your
plugin files should be placed under the directory  ``authoring/content-types/component``

  .. code-block:: text
     :caption: *Example directory structure for a component content type site plugin*
     :emphasize-lines: 4-7

     authoring/
       content-types/
         component/
           <your_component_name>/
             config.xml
             controller.groovy
             form-definition.xml


Crafter CMS uses a default path for Crafter CMS to look for a default representative image of a plugin, the url ``../.crafter/screenshots/``.  Here's a sample plugin files/directory with a default image to represent the plugin:

  .. code-block:: text
     :caption: *Example directory structure for a component content type site plugin with a default representative image*
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

---------------------------
Publishing Your Site Plugin
---------------------------

To publish a plugin in the Crafter CMS Marketplace you can follow the instructions in :ref:`marketplace_create_plugins`

|
|

------------------------
Installing a Site Plugin
------------------------

Plugins may be installed a couple of ways depending on where the plugins are located:

* Install a plugin from the Crafter CMS Marketplace
* Install a plugin in development from a Studio local folder

After installing a site plugin, depending on the plugin you created, the site plugin will be be installed under the:

* {siteRoot}/config/studio/plugins/js/{yourPluginId}/{yourPluginType}/{yourPluginName}/
* {siteRoot}/config/studio/content-types/component/{yourPluginType}/{yourPluginName}/
* {siteRoot}/config/studio/content-types/page/{yourPluginType}/{yourPluginName}/
* {siteRoot}/templates/{yourPluginId}/{yourPluginType}/{yourPluginName}
* {siteRoot}/static-assets/{yourPluginId}/{yourPluginType}/{yourPluginName}
* {siteRoot}/scripts/{yourScriptType}/{yourPluginId}/{yourPluginType}/{yourPluginName}

|
|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin from the Crafter CMS Marketplace
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Once a site plugin is published to the Crafter CMS Marketplace it can be installed using the Crafter Studio user interface
or the REST API:

   .. note::
      To access the Plugin Management tool or use the install plugin REST API your user needs to have the following
      permissions:

      - ``list_plugins``
      - ``install_plugins``


For more information on installing plugins from the Crafter CMS Marketplace using Crafter Studio, see :ref:`plugin-management`

|
|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin in development from a Studio local folder
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
For developers who want to test out their plugins before submitting to the Crafter CMS Marketplace, Crafter CMS provides a CLI command ``copy-plugin`` for installing a plugin from a Studio local folder into a site using the ``crafter-cli``.

Let's take a look at an example to show how to install a plugin using the Crafter CMS cli ``copy-plugin`` command.
We'll use a site named ``mysite`` where we will be installing the plugin, and the plugin we want to install located in ``/Users/myuser/plugins/sidebar-plugin``

To install the plugin ``sidebar-plugin`` to our site ``mysite``, we'll run the ``copy-plugin`` command like below:

.. code-block:: bash

      ➜  ./crafter-cli copy-plugin -e local -s editorial --path /users/myuser/plugins/sidebar-plugin
      OK

|

Remember that the connection to Crafter CMS needs to be setup via the ``add-environment`` command before using any of the ``crafter-cli`` commands.

See :ref:`crafter-cli-copy-plugin` for more information on the ``copy-plugin`` command.

.. _example-component-plugin:

------------------------------
Example Creating a Site Plugin
------------------------------

Let's take a look at an example of creating a component content type plugin named ``My Component``

First, we'll configure the descriptor file ``craftercms-plugin.yaml`` file for our plugin

.. literalinclude:: /_static/code/developer/plugins/component-content-type/craftercms-plugin.yaml
   :language: yaml
   :caption: *Descriptor file for the example component content type plugin*
   :linenos:

|

We'll then create the directory structure for a component content type plugin ``authoring/content-types/component/*``, to place our plugin files in,

   .. code-block:: text
      :caption: *Directory structure for component content type site plugin My Component*
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


The plugin is now ready to be tested.  We'll install our plugin located  under ``/users/myuser/component-plugin`` using the ``crafter-cli`` command ``copy-plugin`` to test it out to a site named editorial

.. code-block:: bash

   ➜ ./crafter-cli copy-plugin -e local -s editorial --path /users/myuser/component-plugin
   OK

|

After installing our plugin, we can now verify that our component plugin is available in |siteConfig| Content Types

.. figure:: /_static/images/developer/plugins/site-plugins/plugins-sample-component.jpg
   :align: center
   :alt: Example component content type plugin now available in site editorial
   :width: 80%

|

------------------------------
Some More Site Plugin Examples
------------------------------

For more authoring examples of creating site plugins, see :ref:`studio-plugins`

Crafter CMS also provides various site plugin examples available from the `marketplace <https://marketplace.craftercms.org>`__ to help you create your own plugins.  These site plugins can be installed to your site using ``Plugin Management`` in |siteConfig| through the Studio UI.  See :ref:`plugin-management` for more information on installing site plugins from the Crafter CMS Marketplace.

* `Cliengo plugin <https://github.com/craftercms/chatbot-plugin/tree/cliengo>`__ to add Cliengo to a site
* `Image Carousel plugin <https://github.com/craftercms/carousel-plugin>`__ to add a highly configurable carousel plugin based on `Tiny Slider <https://github.com/ganlanyuan/tiny-slider/tree/v2.9.3>`__
* `Contact Form plugin <https://github.com/craftercms/contact-form-plugin>`__ to add one or more contact forms to your site
* `Google Analytics plugin <https://github.com/craftercms/google-analytics-plugin>`__ to add Google Analytics to your site
* `Google Maps plugin <https://github.com/craftercms/googlemaps-plugin>`__ to add Google Maps to your site
* `Google Tag Manager plugin <https://github.com/craftercms/google-tag-manager-plugin>`__ to add Google Tag Manager to your site
* `Sitemap plugin <https://github.com/craftercms/sitemap-plugin>`__ to generate a sitemap for your site
* `YouTube plugin <https://github.com/craftercms/youtube-plugin>`__ to add YouTube videos to your site
* `Redirect plugin <https://github.com/craftercms/redirect-plugin>`__ to add file-based redirects in your site
