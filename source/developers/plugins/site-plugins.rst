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

----------
Installing
----------

Once a site plugin is published to the Crafter CMS Marketplace it can be installed using Crafter Studio user interface
or the REST API:

   .. note::
      To access the Plugin Management tool or use the install plugin REST API your user needs to have the following
      permissions:

      - ``list_plugins``
      - ``install_plugins``



#. Login to Crafter Studio
#. Open the left sidebar by clicking on the Crafter logo with the hamburger icon next to it at the top left of your screen

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-sidebar.jpg
      :align: center
      :alt: Crafter Studio open the sidebar

   |

#. Open Site Tools

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-site-tools.jpg
      :align: center
      :alt: Crafter Studio Site Tools

   |

#. Open Plugin Management

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-management.jpg
      :align: center
      :alt: Crafter Studio Plugin Management

   |

#. Click ``Search & install``

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-search.png
      :align: center
      :alt: Crafter Studio Search Plugins

   |

#. Install the desired plugins by clicking on the ``Install`` button

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-install.png
      :align: center
      :alt: Crafter Studio Install Plugins

   |

   A snack bar informing the user of the plugin installation status (success/failure/etc.) will appear on the top right

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-snackbar.png
      :align: center
      :width: 40%
      :alt: Crafter Studio Install Plugins Successful

   |

--------------------------
Managing Installed Plugins
--------------------------

To view the installed plugins in your site, open the ``Sidebar``.  Click on ``Site Tools``, then ``Plugin Management``.

.. figure:: /_static/images/developer/plugins/site-plugins/plugins-installed.jpg
   :align: center
   :alt: Crafter Studio Installed Plugins

|

.. _how-do-i-make-my-own-site-plugin:

---------------------------------
How do I make my own site plugin?
---------------------------------

^^^^^^^^^^^^
Requirements
^^^^^^^^^^^^
You'll need the following for creating your plugin:

* A plugin descriptor file, ``craftercms-plugin.yaml``
* Your plugin files

The ``craftercms-plugin.yaml`` file contains information about your plugin, such as what license your plugin supports,
which versions of Crafter CMS is supported, which editions of Crafter CMS is supported, etc.

See :ref:`craftercms-plugin-yaml-file` for more information on what's inside the plugin descriptor.

Your plugin files/folders could be JavaScript files, XML files, etc. depending on the plugin type you're creating.

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



----------
Publishing
----------

To publish a plugin in the Crafter CMS Marketplace you can follow the instructions in :ref:`marketplace_create_plugins`

