:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Plugin Management

.. _plugin-management:

=================
Plugin Management
=================

Site plugins extend Crafter Studio (authoring) and Crafter Engine and the site/web application (delivery).  It adds new features/functionality without adding code to Crafter CMS.

This section details how to manage plugins from the |siteConfig| Plugin Management module.

----------
Installing
----------

Once a site plugin is published to the Crafter CMS Marketplace it can be installed using the Crafter Studio user interface
or the REST API:

   .. note::
      To access the Plugin Management tool or use the install plugin REST API your user needs to have the following
      permissions:

      - ``list_plugins``
      - ``install_plugins``

As mentioned above, there are two ways to install plugins from the Crafter CMS Marketplace:

* Using the Studio ``Plugin Management`` Site Tool
* Using the install plugin REST API

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin using the Studio ``Plugin Management`` Site Tool
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Login to Crafter Studio
#. Open the left sidebar by clicking on the Crafter logo with the hamburger icon next to it at the top left of your screen

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

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-install.png
      :align: center
      :alt: Crafter Studio Install Plugins
      :width: 80%

   |
   |

   A snack bar informing the user of the plugin installation status (success/failure/etc.) will appear on the top right

   .. figure:: /_static/images/developer/plugins/site-plugins/plugins-snackbar.png
      :align: center
      :width: 40%
      :alt: Crafter Studio Install Plugins Successful

   |
   |

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Install a plugin using the install plugin REST API
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Another way to install a plugin from the Crafter CMS marketplace is by using the install plugin REST API.

For more information on the API, see :studio_swagger_url:`#/marketplace/installPlugin`


--------------------------
Managing Installed Plugins
--------------------------

To view the installed plugins in your site, open the ``Sidebar``.  Click on ``Site Tools``, then ``Plugin Management``.

.. figure:: /_static/images/developer/plugins/site-plugins/plugins-installed.jpg
   :align: center
   :alt: Crafter Studio Installed Plugins
   :width: 80%

|
