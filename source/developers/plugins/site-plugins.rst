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
- ``authoring``: contains all files related to Crafter Studio extensions

  - ``content-types``

    - ``component``: contains configuration files for components
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
       website:
         name: Site Plugin Example
         url: https://github.com/craftercms/site-plugins-example
       media:
         screenshots:
           - title: Crafter CMS
             description: Crafter CMS Example Plugin
             url: "https://raw.githubusercontent.com/craftercms/site-plugin-example/master/static-assets/.crafter/screenshots/default.png"
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
* ``plugin.website.url`` can be a page for more information on your site plugin or for announcing updates, reporting bugs, etc. from your user community.
* ``plugin.media.url`` is the path to look for a representative image of the site plugin.
* ``plugin.license`` is the license supported by the plugin
* ``plugin.crafterCmsVersions`` contains the Crafter CMS version/s that the plugin is compatible with (look in the :ref:`release-notes` section for the versions available), and you'll need to keep this up to date

The next requirement for creating your site plugin are the plugin files.
Depending on the plugin type you are creating, this could be a JavaScript file, Freemarker template files, Groovy file, XML file, etc.  The plugin file/s should then be placed in a directory structure as described above depending on the site plugin created.  For example, say your plugin is a component content type, your plugin files should be placed under the directory  ``authoring/content-types/component``

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


---------------------------
Publishing Your Site Plugin
---------------------------

To publish a plugin in the Crafter CMS Marketplace you can follow the instructions in :ref:`marketplace_create_plugins`

------------------------
Installing a Site Plugin
------------------------

Plugins may be installed a couple of ways depending on where the plugins are located:

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


See :ref:`crafter-cli-copy-plugin` for more information on the ``copy-plugin`` command.

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

.. literalinclude:: /_static/code/developer/plugins/component-content-type/config.xml
   :language: xml
   :caption: *authoring/content-types/component/mycomponent/config.xml*
   :linenos:

|

.. literalinclude:: /_static/code/developer/plugins/component-content-type/form-definition.xml
   :language: xml
   :caption: *authoring/content-types/component/mycomponent/form-definition.xml*
   :linenos:



.. literalinclude:: /_static/code/developer/plugins/component-content-type/controller.groovy
   :language: groovy
   :caption: *authoring/content-types/component/mycomponent/controller.groovy*
   :linenos:

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

-------------------
Site Plugin Example
-------------------

Crafter CMS provides a site plugin example available here: https://github.com/craftercms/site-plugin-example

This plugin demonstrates a Site plugin with authoring and delivery code. It extends Crafter Studio with an API, a UI for content authors, and extends the delivery Site (in Crafter Engine) with an MVC (Model View Controller) with a content type (model), a FreeMarker template (view)

It is published in the Crafter CMS Marketplace and can be installed to your site using ``Plugin Management`` in |siteConfig| through the Studio UI.  See :ref:`plugin-management` for more information on installing site plugins from the Crafter CMS Market[lace.
