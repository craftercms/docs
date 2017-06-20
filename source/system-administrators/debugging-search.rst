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

* In preview, Crafter Studio sends content a deployment engine on write.  Ensure that the preview context is receiving content.
	* If the deployement agent is not receiving content, check network connectivity, ports, and the password for the target.
* The deployment agent has a target with a Search Processor. Ensure that the processor is configured to the proper HOST, PORT for Crafter Search.
* Crafter Search is configured to talk to a Solr index.  Ensure that Crafter Search is configured to the proper HOST, PORT for Solr
* Crafter Engine is configure to talk to Crafter Search. Ensure that Crafter Engine is configured to the proper HOST, PORT for Crafter Search.

----------------------------------------------------------------------------
Configure Crafter Deployer: Configure Hostname, ports and Crafter Search URL
----------------------------------------------------------------------------

	CRAFTER/crafter-deployer/conf/preview-context.xml

--------------------------------------------------------------------------
Configure Crafter Engine: Configure Hostname, ports and Crafter Search URL
--------------------------------------------------------------------------

	TOMCAT/shared/classes/crafter/engine/extension/server-config.properties 

----------------------------------------------------------------
Configure Crafter Search: Configure Hostname, ports and Solr URL
----------------------------------------------------------------

	TOMCAT/shared/classes/crafter/search/extension/server-config.properties
