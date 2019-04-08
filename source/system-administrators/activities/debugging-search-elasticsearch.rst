.. index:: Debugging Search; Search

.. _debugging-search:

=======================
Debugging Search Issues
=======================

----------------
How Search Works
----------------

.. include:: /includes/how-search-works-es.rst

.. note::
   Elasticsearch is the default search engine used by Crafter CMS.  If you are using Crafter Search as your search engine, visit :ref:`debugging-search-solr`

--------------------------------------
Places Search Indexing Can Get Hung Up
--------------------------------------

* Communication Between Crafter Studio & Crafter Deployer

	* Crafter Studio will notify the Deployer when content has changed.
	* Ensure that the Deployer is pulling the changes.
	* If the Deployer is not receiving any changes, check network connectivity and ports.

* Communication Between Crafter Deployer & Elasticsearch

	* The Deployer has a target with a Search Processor.
	* Ensure that the processor is configured to the proper HOST, PORT for Elasticsearch.

* Communication Between Crafter Engine & Elasticsearch

	* Crafter Engine is configured to talk to Elasticsearch
	* Ensure that Crafter Engine is configured to the proper HOST, PORT for Elasticsearch.

-------------------
Reviewing Log Files
-------------------

In order to discard the possible failures described in the previous section you should review the
following log files for each one of the components:

+-------------------+---------------------------------------------------+
|| Component        || Log Files                                        |
+===================+===================================================+
|| Crafter Studio   || ``CRAFTER/logs/tomcat/catalina.out``             |
+-------------------+---------------------------------------------------+
|| Crafter Deployer || ``CRAFTER/logs/deployer/deployer.out``           |
||                  || ``CRAFTER/logs/deployer/deployer-general.log``   |
||                  || ``CRAFTER/logs/deployer/{target}-{env}.log``     |
+-------------------+---------------------------------------------------+
|| Elasticsearch    || ``CRAFTER/logs/elasticsearch/elasticsearch.log`` |
+-------------------+---------------------------------------------------+
|| Crafter Engine   || ``CRAFTER/logs/tomcat/catalina.out``             |
+-------------------+---------------------------------------------------+


--------------------------------------------
Configure Deployer Port & Elasticsearch Port
--------------------------------------------

``CRAFTER/bin/crafter-setenv.sh``

.. code-block:: bash

  export DEPLOYER_PORT=${DEPLOYER_PORT:="9191"}

  export ES_HOST=${ES_HOST:="localhost"}
  export ES_PORT=${ES_PORT:="9201"}

|

----------------------------------------------
Configure Crafter Studio: Crafter Deployer URL
----------------------------------------------

``$CATALINA_HOME/shared/classes/crafter/studio/extension/studio-config-override.yaml``

.. code-block:: yaml

  ############################################################
  ##                    Preview Deployer                    ##
  ############################################################
  # Default preview deployer URL (can be overridden per site)
  studio.preview.defaultPreviewDeployerUrl: http://HOST:PORT/api/1/target/deploy/{siteEnv}/{siteName}
  # Default preview create target URL (can be overridden per site)
  studio.preview.createTargetUrl: http://HOST:PORT/api/1/target/upsert
  # Default preview delete target URL (can be overridden per site)
  studio.preview.deleteTargetUrl: http://HOST:PORT/api/1/target/delete-if-exists/{siteEnv}/{siteName}

|



