:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Debugging Search; Search

.. _debugging-search:

=============================
Troubleshooting Search Issues
=============================

----------------
How Search Works
----------------

.. include:: /includes/how-search-works.rst

--------------------------------------
Places Search Indexing Can Get Hung Up
--------------------------------------

* Communication Between Crafter Studio & Crafter Deployer

	* Crafter Studio will notify the Deployer when content has changed.
	* Ensure that the Deployer is pulling the changes.
	* If the Deployer is not receiving any changes, check network connectivity and ports.

* Communication Between Crafter Deployer & OpenSearch

	* The Deployer has a target with a Search Processor.
	* Ensure that the processor is configured to the proper HOST, PORT for OpenSearch.

* Communication Between Crafter Engine & OpenSearch

	* Crafter Engine is configured to talk to OpenSearch
	* Ensure that Crafter Engine is configured to the proper HOST, PORT for OpenSearch.

-------------------
Reviewing Log Files
-------------------

In order to figure out which of the possible failures described in the previous section happened,
you should review the following log files for each one of the components:

+-------------------+---------------------------------------------------+
|| Component        || Log Files                                        |
+===================+===================================================+
|| Crafter Studio   || ``CRAFTER/logs/tomcat/catalina.out``             |
+-------------------+---------------------------------------------------+
|| Crafter Deployer || ``CRAFTER/logs/deployer/deployer.out``           |
||                  || ``CRAFTER/logs/deployer/deployer-general.log``   |
||                  || ``CRAFTER/logs/deployer/{target}-{env}.log``     |
+-------------------+---------------------------------------------------+
|| Crafter Engine   || ``CRAFTER/logs/tomcat/catalina.out``             |
+-------------------+---------------------------------------------------+


-------------------------------------
Configure Deployer Port & Search Port
-------------------------------------

``CRAFTER/bin/crafter-setenv.sh``

.. code-block:: bash

  export DEPLOYER_PORT=${DEPLOYER_PORT:="9191"}

  export SEARCH_HOST=${SEARCH_HOST:="localhost"}
  export SEARCH_PORT=${SEARCH_PORT:="9201"}


|

