*********************
System Administrators
*********************

This guide is intended to provide system administrators with the information and access to the tools they need to install and maintain Crafter CMS components.

-------------------
System Requirements
-------------------
+------------------+-----------------------------------+-----------------------------------------+
|| Parameter Name  || Description                      || Prerequisites                          |
+==================+===================================+=========================================+
|| Crafter Studio  || Content authoring server         || Java 1.8+                              |
||                 ||                                  || 1+ Gig of memory to JVM                |
+------------------+-----------------------------------+-----------------------------------------+
|| Crafter Engine  || Content delivery server          || Java 1.8+                              |
||                 ||                                  || 1+ Gig of memory to JVM                |
+------------------+-----------------------------------+-----------------------------------------+
|| Crafter Profile || User profile and attribute store || Java 1.8+                              |
||                 || (Optional component)             || MongoDb 3+                             |
||                 ||                                  || 1+ Gig of memory to JVM                |
+------------------+-----------------------------------+-----------------------------------------+
|| Crafter Social  || User Generated Content server    || Java 1.8+                              |
||                 || (Optional component)             || MongoDb 3+                             |
||                 ||                                  || 1+ Gig of memory to JVM                |
+------------------+-----------------------------------+-----------------------------------------+

* See :ref:`supported platforms<requirements_supported_platforms>` for a detailed list and description of supported components.

-----------------------
Development Environment
-----------------------

    :ref:`quick_start_guide`

-------------------------
QA/Production Environment
-------------------------

.. toctree::
   :maxdepth: 2
   :titlesonly:

   prod-environment/install-studio.rst
   prod-environment/turning-off-show-error.rst
   prod-environment/configure-engine-multi-tenancy.rst
   prod-environment/backup-and-recovery.rst

.. prod-environment/install-engine.rst

---------------
Crafter Profile
---------------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   profile-admin/index.rst

----------------
Other Activities
----------------

.. toctree::
   :maxdepth: 2
   :titlesonly:

   rebuilding-studio-database.rst
   debugging-search.rst
   reindexing-content.rst
   debugging-search.rst
   understanding-studio-environment-overrides.rst
   changing-the-studio-logo.rst
