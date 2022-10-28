:is-up-to-date: True
:last-updated: 4.0.3
:nosearch:
:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Plugin Management

.. _newIa-plugin-management:

=================
Plugin Management
=================

Project plugins extend Crafter Studio (authoring) and Crafter Engine and the site/web application (delivery).  It adds new features/functionality without adding code to CrafterCMS.

This section details how to manage plugins from the |projectTools| Plugin Management module.

----------
Installing
----------

Once a project plugin is published to the Crafter Marketplace it can be installed using the Crafter Studio user interface
or the REST API:

   .. note::
      To access the Plugin Management tool or use the install plugin REST API your user needs to have the following
      permissions:

      - ``list_plugins``
      - ``install_plugins``

As mentioned above, there are two ways to install plugins from the Crafter Marketplace:

* Using the Studio ``Plugin Management`` Project Tool
* Using the install plugin REST API

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin using the Studio ``Plugin Management`` Project Tool
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Login to Crafter Studio
#. Open the left sidebar by clicking on the Crafter logo with the hamburger icon next to it at the top left of your screen

   .. figure:: /_static/images/developer/plugins/project-plugins/plugins-sidebar.webp
      :align: center
      :alt: Crafter Studio open the sidebar
      :width: 80%

   |
   |

#. Open |projectTools|

   .. figure:: /_static/images/developer/plugins/project-plugins/plugins-project-tools.webp
      :align: center
      :alt: Crafter Studio Project Tools
      :width: 80%

   |
   |

#. Or, you can also open |projectTools| by clicking on the ``Navigation Menu`` at the top right of the screen then click on |projectTools|

   .. figure:: /_static/images/developer/plugins/project-plugins/plugins-open-project-tools.webp
      :align: center
      :alt: Crafter Studio Open Project Tools
      :width: 80%

   |
   |

#. Open ``Plugin Management``

   .. figure:: /_static/images/developer/plugins/project-plugins/plugins-management.webp
      :align: center
      :alt: Crafter Studio Plugin Management
      :width: 80%

   |
   |

#. Click ``Search & install``

   .. figure:: /_static/images/developer/plugins/project-plugins/plugins-search.webp
      :align: center
      :alt: Crafter Studio Search Plugins
      :width: 80%

   |
   |

#. Install the desired plugins by clicking on the ``Install`` button

   .. figure:: /_static/images/developer/plugins/project-plugins/plugins-install.webp
      :align: center
      :alt: Crafter Studio Install Plugins
      :width: 80%

   |
   |

   A notification informing the user of the plugin installation status (success/failure/etc.) will appear on the bottom left of the screen

   .. figure:: /_static/images/developer/plugins/project-plugins/plugins-snackbar.webp
      :align: center
      :width: 80%
      :alt: Crafter Studio Install Plugins Successful

   |
   |

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin using the install plugin REST API
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Another way to install a plugin from the Crafter Marketplace is by using the install plugin REST API.

For more information on the API, see :studio_swagger_url:`#/marketplace/installPlugin`


--------------------------
Managing Installed Plugins
--------------------------

^^^^^^^^^^^^^^^^^^^^^^
View Installed Plugins
^^^^^^^^^^^^^^^^^^^^^^
To view the installed plugins in your project, click on the ``Navigation Menu`` at the top right then click on |projectTools| then finally click on ``Plugin Management``.

.. figure:: /_static/images/developer/plugins/project-plugins/plugins-installed.webp
   :align: center
   :alt: Crafter Studio Installed Plugins
   :width: 80%

|

^^^^^^^^^^^^^^^^^
Uninstall Plugins
^^^^^^^^^^^^^^^^^

To uninstall plugins in your project, open the ``Plugin Management`` dialog.  Click on the trash can icon next to the plugin you want to uninstall.  A dialog will open to confirm the plugin to be uninstalled and a list of where the plugin is being used if applicable

.. figure:: /_static/images/developer/plugins/project-plugins/plugin-uninstall-no-deps.webp
   :align: center
   :alt: Crafter Studio Uninstall Plugin Dialog No Dependencies
   :width: 80%

|

.. figure:: /_static/images/developer/plugins/project-plugins/plugins-uninstall.webp
   :align: center
   :alt: Crafter Studio Uninstall Plugin Dialog with Dependencies
   :width: 80%

|

For plugins with dependencies like the above, take note of the items in the list in the uninstall dialog.  These dependencies will need to be removed by the user before or after uninstalling the plugin.

After clicking on the ``Uninstall`` button, a notification will appear at the bottom left of the screen informing the user of the plugin uninstall status (success/failure/etc.).

.. figure:: /_static/images/developer/plugins/project-plugins/plugins-snackbar-uninstalled.webp
   :align: center
   :alt: Crafter Studio Uninstall Plugin Dialog No Dependencies
   :width: 80%

|

Remember to clean up (remove) references to the uninstalled plugin in your project if not already done, after the plugin is successfully uninstalled.