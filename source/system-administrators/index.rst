.. _system-administrators:

*********************
System Administrators
*********************

This guide is intended to provide system administrators with the information and access to the tools they need to install and maintain Crafter CMS components.

===================
System Requirements
===================
+------------------+-----------------------------------+-----------------------------------------+
|| Parameter Name  || Description                      || Prerequisites                          |
+==================+===================================+=========================================+
|| Crafter Studio  || Content authoring server         || Java 1.8+                              |
||                 ||                                  || 4+ Gig of memory to JVM                |
+------------------+-----------------------------------+-----------------------------------------+
|| Crafter Engine  || Content delivery server          || Java 1.8+                              |
||                 ||                                  || 2+ Gig of memory to JVM                |
+------------------+-----------------------------------+-----------------------------------------+
|| Crafter Profile || User profile and attribute store || Java 1.8+                              |
||                 || (Optional component)             || MongoDB 3+ (included in the bundle)    |
||                 ||                                  || 1+ Gig of memory to JVM                |
+------------------+-----------------------------------+-----------------------------------------+
|| Crafter Social  || User Generated Content server    || Java 1.8+                              |
||                 || (Optional component)             || MongoDB 3+ (included in the bundle)    |
||                 ||                                  || 1+ Gig of memory to JVM                |
+------------------+-----------------------------------+-----------------------------------------+

* See :ref:`supported platforms<requirements_supported_platforms>` for a detailed list and description of supported components.

.. note:: Crafter CMS is not yet compatible with Java 1.9. We are working on updating our code to make sure we are 100% compatible with the newest Java version.

--------------------------------------
Installing and verifying prerequisites
--------------------------------------

.. include:: /includes/installing-and-verifying-prerequisites.rst

------------------------------------
To Install a Development Environment
------------------------------------

To install a development environment, see the section on installing Crafter CMS from the zip download or the section on installing Crafter CMS from archive built by the Gradle environment builder in the :ref:`quick_start_guide`.

==========
Activities
==========

.. toctree::
   :maxdepth: 1
   :titlesonly:

   backup-and-recovery.rst
   logging.rst
   reindexing-content.rst
   setup-site-for-delivery
   sync-studio-database-with-repo.rst
   troubleshooting.rst
   upgrade/index.rst

==============
Crafter Studio
==============

.. toctree::
   :maxdepth: 1
   :titlesonly:

   studio/configure-ldap.rst
   studio/configure-headers-based-auth.rst
   studio/changing-the-studio-logo.rst
   studio/studio-configuration-overrides.rst
   studio/debugging-publishing-issues.rst
   studio/exporting-importing-site.rst

==============
Crafter Engine
==============

.. toctree::
   :maxdepth: 1
   :titlesonly:

   engine/configure-engine-multi-tenancy.rst
   engine/turning-off-show-error.rst

================
Crafter Deployer
================

.. toctree::
  :maxdepth: 1
  :titlesonly:

  deployer/admin-guide.rst

==============
Crafter Search
==============

.. toctree::
  :maxdepth: 1
  :titlesonly:

  search/index.rst


===============
Crafter Profile
===============

.. toctree::
   :maxdepth: 1
   :titlesonly:

   profile/index.rst
   profile/admin/index.rst

==============
Crafter Social
==============

.. toctree::
  :maxdepth: 1
  :titlesonly:

  social/index.rst
  social/admin/index.rst

===============
Crafter Commons
===============

.. toctree::
    :maxdepth: 1
    :titlesonly:

    commons/encryption-tool.rst

================
Crafter Security
================

.. toctree::
    :maxdepth: 1
    :titlesonly:

    security/randomize-admin-passwd.rst
