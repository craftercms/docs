:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _debugging-search-solr:

===========================================
Debugging Search Issues with Crafter Search
===========================================

----------------------------
Overview of Search Mechanics
----------------------------

.. include:: /includes/how-search-works-solr.rst

--------------------------------------
Places Search Indexing Can Get Hung Up
--------------------------------------

* Communication Between Crafter Studio & Crafter Deployer

	* Crafter Studio will notify the Deployer when content has changed.
	* Ensure that the Deployer is pulling the changes.
	* If the Deployer is not receiving any changes, check network connectivity and ports.

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
|| Crafter Deployer || ``CRAFTER/logs/deployer/deployer.out``         |
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

---------------
Configure Ports
---------------

``CRAFTER/bin/crafter-setenv.sh``

.. code-block:: bash

  export DEPLOYER_PORT=${DEPLOYER_PORT:="9191"}
  export SOLR_HOST=${SOLR_HOST:="localhost"}
  export SOLR_PORT=${SOLR_PORT:="8694"}
  export TOMCAT_HOST=${TOMCAT_HOST:="localhost"}
  export TOMCAT_HTTP_PORT=${TOMCAT_HTTP_PORT:="8080"}

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

