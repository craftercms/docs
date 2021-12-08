:is-up-to-date: True

.. _system-administrators:

#####################
System Administrators
#####################

This guide is intended to provide system administrators with the information and access to the tools they need to install and maintain Crafter CMS components.

*******************
System Requirements
*******************
+------------------+-----------------------------------+---------------------------------------------+
|| Parameter Name  || Description                      || Prerequisites                              |
+==================+===================================+=============================================+
|| Crafter Studio  || Content authoring server         || Java 1.8                                   |
||                 ||                                  || 4+ Gig of memory to JVM                    |
+------------------+-----------------------------------+---------------------------------------------+
|| Crafter Engine  || Content delivery server          || Java 1.8                                   |
||                 ||                                  || 2+ Gig of memory to JVM                    |
+------------------+-----------------------------------+---------------------------------------------+
|| Crafter Profile || User profile and attribute store || Java 1.8                                   |
||                 || (Optional component)             || MongoDB 3+ (included in the binary archive)|
||                 ||                                  || 1+ Gig of memory to JVM                    |
+------------------+-----------------------------------+---------------------------------------------+
|| Crafter Social  || User Generated Content server    || Java 1.8                                   |
||                 || (Optional component)             || MongoDB 3+ (included in the binary archive)|
||                 ||                                  || 1+ Gig of memory to JVM                    |
+------------------+-----------------------------------+---------------------------------------------+

* See :ref:`supported platforms<requirements_supported_platforms>` for a detailed list and description of supported components.

**********
Activities
**********

.. toctree::
   :maxdepth: 1
   :titlesonly:

   activities/installing.rst
   activities/backup-and-recovery.rst
   activities/clustering.rst
   devcontentops-toolkit/index.rst
   activities/logging.rst
   activities/production-environment-setup.rst
   activities/reindexing-content.rst
   activities/reindexing-content-in-prod.rst
   activities/troubleshooting.rst
   activities/security/randomize-admin-passwd.rst
   activities/security/configure-studio-security.rst
   activities/security/configure-ssl-tls.rst
   activities/security/setup-cloudfront-signed-cookies-in-crafter.rst
   activities/kubernetes/index.rst
   activities/language-support/add-new-language.rst
   activities/encrypting-configuration-properties.rst
   activities/management-token.rst

*********************
Upgrading Crafter CMS
*********************

.. toctree::
   :maxdepth: 1
   :titlesonly:

   upgrade/index.rst

*********
Authoring
*********

.. toctree::
   :maxdepth: 1
   :titlesonly:

   activities/authoring/authoring-env-performance-tuning.rst
   activities/authoring/change-hosts-ports-on-your-auth-install.rst
   activities/authoring/staging.rst
   activities/authoring/setup-authoring-using-aws-ami.rst
   activities/sync-studio-database-with-repo.rst
   activities/authoring/navigating-main-menu.rst
   activities/authoring/users-groups-management.rst

********
Delivery
********

.. toctree::
   :maxdepth: 1
   :titlesonly:

   activities/delivery/change-hosts-ports-on-your-delivery-install.rst
   activities/delivery/configure-apache-vhost.rst
   activities/delivery/delivery-env-performance-tuning.rst
   activities/delivery/setup-site-for-delivery.rst
   activities/delivery/setup-serverless-delivery.rst
   activities/delivery/setup-delivery-using-aws-ami.rst

*************************
Subsystems Administration
*************************

===============
Crafter Commons
===============

.. toctree::
   :maxdepth: 1
   :titlesonly:

   commons/encryption-tool.rst


================
Crafter Deployer
================

.. toctree::
   :maxdepth: 1
   :titlesonly:

   deployer/admin-guide.rst
   deployer/processors-guide.rst
   deployer/templates-guide.rst
   deployer/debugging-deployer-issues.rst
   deployer/elasticsearch-configuration-guide.rst


==============
Crafter Engine
==============

.. toctree::
   :maxdepth: 1
   :titlesonly:

   engine/configure-engine-multi-tenancy.rst
   engine/configure-engine-single-tenant.rst
   engine/turning-off-show-error.rst
   engine/engine-configuration-overrides.rst


===============
Crafter Profile
===============

.. toctree::
   :maxdepth: 1
   :titlesonly:

   profile/index.rst
   profile/admin/index.rst


==============
Crafter Search
==============

.. toctree::
   :maxdepth: 1
   :titlesonly:

   search/index.rst


==============
Crafter Social
==============

.. toctree::
   :maxdepth: 1
   :titlesonly:

   social/index.rst
   social/admin/index.rst


==============
Crafter Studio
==============

.. toctree::
   :maxdepth: 1
   :titlesonly:

   studio/studio-configuration-overrides.rst
   studio/debugging-publishing-issues.rst
   studio/debugging-upgrade-issues.rst
   studio/create-site-with-link-to-remote-repo.rst
   studio/session-timeout-settings.rst
   studio/publishing-blacklist.rst

|

  .. include:: /includes/scripts-templates-security.rst
