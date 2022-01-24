:is-up-to-date: False

.. index:: Plugin Management

.. Section Outline
   5.7.1 What are plugins
   5.7.2 How to install
   5.7.3 How to uninstall
   5.7.4 How to update

.. _newIa-plugin-management:

=================
Plugin Management
=================

Site plugins extend Crafter Studio (authoring) and Crafter Engine and the site/web application (delivery).  It adds new features/functionality without adding code to CrafterCMS.

This section details how to manage plugins from the |siteConfig| Plugin Management module.

----------
Installing
----------

Once a site plugin is published to the CrafterCMS Marketplace it can be installed using the
Crafter Studio user interface or the REST API:

   .. note::
      To access the Plugin Management tool or use the install plugin REST API your user needs to have
      the following permissions:

      - ``list_plugins``
      - ``install_plugins``

As mentioned above, there are two ways to install plugins from the CrafterCMS Marketplace:

* Using the Studio ``Plugin Management`` Site Tool
* Using the install plugin REST API

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin using the Studio ``Plugin Management`` Site Tool
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Login to Crafter Studio
#. Open the left sidebar by clicking on the Crafter logo with the hamburger icon next to it at the
   top left of your screen

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-sidebar.jpg
      :align: center
      :alt: Crafter Studio open the sidebar
      :width: 80%

   |
   |

#. Open |siteConfig|

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-site-tools.jpg
      :align: center
      :alt: Crafter Studio Site Tools
      :width: 80%

   |
   |

#. Or, you can also open |siteConfig| by clicking on the ``Navigation Menu`` at the top right of
   the screen then click on |siteConfig|

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-open-site-tools.jpg
      :align: center
      :alt: Crafter Studio Open Site Tools
      :width: 80%

   |
   |

#. Open ``Plugin Management``

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-management.jpg
      :align: center
      :alt: Crafter Studio Plugin Management
      :width: 80%

   |
   |

#. Click ``Search & install``

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-search.png
      :align: center
      :alt: Crafter Studio Search Plugins
      :width: 80%

   |
   |

#. Install the desired plugins by clicking on the ``Install`` button

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-install.jpg
      :align: center
      :alt: Crafter Studio Install Plugins
      :width: 80%

   |
   |

   A notification informing the user of the plugin installation status (success/failure/etc.)
   will appear on the bottom left of the screen

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-snackbar.jpg
      :align: center
      :width: 80%
      :alt: Crafter Studio Install Plugins Successful

   |
   |

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin using the install plugin REST API
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Another way to install a plugin from the CrafterCMS marketplace is by using the install plugin REST API.

For more information on the API, see :studio_swagger_url:`#/marketplace/installPlugin`


--------------------------
Managing Installed Plugins
--------------------------

^^^^^^^^^^^^^^^^^^^^^^
View Installed Plugins
^^^^^^^^^^^^^^^^^^^^^^
To view the installed plugins in your site, click on the ``Navigation Menu`` at the top right then
click on |siteConfig| then finally click on ``Plugin Management``.

.. figure:: /_static/images/developer/plugins/site-plugins/plugins-installed.jpg
   :align: center
   :alt: Crafter Studio Installed Plugins
   :width: 80%

|

^^^^^^^^^^^^^^^^^
Uninstall Plugins
^^^^^^^^^^^^^^^^^

To uninstall plugins in your site, open the ``Plugin Management`` dialog.  Click on the trash can
icon next to the plugin you want to uninstall.  A dialog will open to confirm the plugin to be
uninstalled and a list of where the plugin is being used if applicable

.. figure:: /_static/images/developer/plugins/site-plugins/plugin-uninstall-no-deps.png
   :align: center
   :alt: Crafter Studio Uninstall Plugin Dialog No Dependencies
   :width: 80%

|

.. figure:: /_static/images/developer/plugins/site-plugins/plugins-uninstall.jpg
   :align: center
   :alt: Crafter Studio Uninstall Plugin Dialog with Dependencies
   :width: 80%

|

For plugins with dependencies like the above, take note of the items in the list in the uninstall dialog.
These dependencies will need to be removed by the user before or after uninstalling the plugin.

After clicking on the ``Uninstall`` button, a notification will appear at the bottom left of the screen
informing the user of the plugin uninstall status (success/failure/etc.).

.. figure:: /_static/images/developer/plugins/site-plugins/plugins-snackbar-uninstalled.jpg
   :align: center
   :alt: Crafter Studio Uninstall Plugin Dialog No Dependencies
   :width: 80%

|

Remember to clean up (remove) references to the uninstalled plugin in your site if not already done,
after the plugin is successfully uninstalled.

^^^^^^^^^^^^^^
Update Plugins
^^^^^^^^^^^^^^

.. todo:: Add text/screens on how to update plugins
