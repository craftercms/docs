.. _debugging_search:

=======================
Debugging Search Issues
=======================

----------------------------
Overview of Search Mechanics
----------------------------

.. include:: /includes/how-search-works.rst

--------------------------------------
Places Search Indexing Can Get Hung Up
--------------------------------------

* Communication Between Crafter Studio & Crafter Deployer

	* Crafter Studio will notify the Deployer when content has changed.
	* Ensure that the Deployer is pulling the changes.
	* If the deployment agent is not receiving any changes, check network connectivity and ports.

* Communication Between Crafter Deployer & Crafter Search

	* The Deployer has a target with a Search Processor.
	* Ensure that the processor is configured to the proper HOST, PORT for Crafter Search.
	* Ensure that the processor is not failing before sending the changes to Solr.

* Communication Between Crafter Search & Solr

	* Crafter Search is configured to talk to a Solr index.
	* Ensure that Crafter Search is configured to the proper HOST, PORT for Solr.
	* Ensure that the Solr index is configured properly.

* Communication Between Crafter Engine & Crafter Search

	* Crafter Engine is configured to talk to Crafter Search.
	* Ensure that Crafter Engine is configured to the proper HOST, PORT for Crafter Search.

-------------------
Reviewing Log Files
-------------------

In order to discard the possible failures described in the previous section you should review the
following log files for each one of the components:

+-------------------+-------------------------------------------------+
|| Component        || Log Files                                      |
+===================+=================================================+
|| Crafter Studio   || ``CRAFTER/logs/tomcat/catalina.out``           |
+-------------------+-------------------------------------------------+
|| Crafter Deployer || ``CRAFTER/logs/deployer/crafter-deployer.out`` |
||                  || ``CRAFTER/logs/deployer/deployer-general.log`` |
||                  || ``CRAFTER/logs/deployer/{target}-{env}.log``   |
+-------------------+-------------------------------------------------+
|| Crafter Search   || ``CRAFTER/logs/tomcat/catalina.out``           |
+-------------------+-------------------------------------------------+
|| Solr             || ``CRAFTER/logs/solr/solr.log``                 |
+-------------------+-------------------------------------------------+
|| Crafter Engine   || ``CRAFTER/logs/tomcat/catalina.out``           |
+-------------------+-------------------------------------------------+

----------------------
Debugging Solr Queries
----------------------

If all components are able to communicate correctly but end users are still missing content in the site
you should use the Solr Admin Console to debug the query used by Crafter Engine to search documents.

	``http://SOLR_HOST:SOLR_PORT/solr/#/SITE_NAME/query``

More information about Solr Admin Console & query syntax can be found `here <http://lucene.apache.org/solr/6_6_0/quickstart.html#searching>`_.

--------------------------------------------------------------
Configure Crafter Deployer: Deployer Port & Crafter Search URL
--------------------------------------------------------------

``CRAFTER/bin/crafter-deployer/config/application.yaml``

.. code-block:: yaml

  server:
    port: 9191

``CRAFTER/bin/crafter-deployer/config/base-target.yaml``

.. code-block:: yaml

  search:
    serverUrl: http://HOST:PORT/crafter-search

----------------------------------------------
Configure Crafter Studio: Crafter Deployer URL
----------------------------------------------

``TOMCAT/shared/classes/crafter/studio/extension/studio-config-override.yaml``

.. code-block:: yaml

  studio:
    preview:
      defaultPreviewDeployerUrl: http://HOST:PORT/api/1/target/deploy/preview/{siteName}
      createTargetUrl: http://HOST:PORT/api/1/target/create
      deleteTargetUrl: http://HOST:PORT/api/1/target/delete/{siteEnv}/{siteName}

--------------------------------------------
Configure Crafter Engine: Crafter Search URL
--------------------------------------------

``TOMCAT/shared/classes/crafter/engine/extension/server-config.properties``

.. code-block:: guess

  crafter.engine.search.server.url=http://HOST:PORT/crafter-search

----------------------------------
Configure Crafter Search: Solr URL
----------------------------------

``TOMCAT/shared/classes/crafter/search/extension/server-config.properties``

.. code-block:: guess

  crafter.search.solr.server.url=http://HOST:PORT/solr
