*********************
System Administrators
*********************

This guide is intended to provide system administrators with the information and access to the tools they need to install and maintain Crafter CMS components.

-------------------
System Requirements
-------------------
+-----------------+-----------------------------------------------+------------------------------------------------+
| Parameter Name  | Description                                   | Prerequisites                                  |
+=================+===============================================+================================================+
| Crafter Studio  | Content authoring server                      | Java 1.7+                                      |
|                 |                                               | RDBMS (MySQL, Oracle, etc)                     |
|                 |                                               | 1+ Gig of memory to JVM                        |
+-----------------+-----------------------------------------------+------------------------------------------------+
| Crafter Engine  | Content delivery server                       | Java 1.7+                                      |
|                 |                                               | Apache HTTPD (optional/recommended)            |
|                 |                                               | 1+ Gig of memory to JVM                        |
|                 |                                               |                                                |
|                 |                                               |                                                |
|                 |                                               |                                                |
+-----------------+-----------------------------------------------+------------------------------------------------+
| Crafter Profile | User profile and attribute store              | Java 1.7+                                      |
|                 | (Optional component)                          | MongoDb 3+                                     |
|                 |                                               | 1+ Gig of memory to JVM                        |
+-----------------+-----------------------------------------------+------------------------------------------------+
| Crafter Social  | User Generated Content server                 | Java 1.7+                                      |
|                 | (Optional component)                          | MongoDb 3+                                     |
|                 |                                               | 1+ Gig of memory to JVM                        |
+-----------------+-----------------------------------------------+------------------------------------------------+

* See supported platforms for detailed list and description of supported components.

-----------------------
Development Environment
-----------------------

.. toctree::
	:maxdepth: 2
	:titlesonly:

	dev-environment/install-from-zip

-------------------------
QA/Production Environment
-------------------------

.. toctree::
	:maxdepth: 2
	:titlesonly:

    	prod-environment/*
    	prod-environment/supported-platforms.rst
    	prod-environment/install-studio.rst
    	prod-environment/configure-studio-with-alfresco.rst
    	prod-environment/install-engine.rst
    	prod-environment/configure-engine-multi-tenancy.rst
    	prod-environment/configure-solr-replication.rst


----------------
Other Activities
----------------
.. toctree::
	:maxdepth: 2
	:titlesonly:

    	reindexing-content.rst
        debugging-deployment.rst
        debugging-search.rst
        changing-the-studio-logo.rst