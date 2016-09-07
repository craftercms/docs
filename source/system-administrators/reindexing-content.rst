============
Reindexing Content for Search and Queries
============

It is necessary from time to time to reindex content due to schema changes, migrations and other scenarios.
A bulk deployment will push all content to your index but involves several steps in addition to indexing which may not
be needed.  This article shows how to use the deployer to (re)index content that has already been deployed.

Reindexing the site content can be done using the reprocess feature in Crafter Deployer.

------
Step 1: Delete any existing content in the index
------
.. code-block:: xml

	curl http://hostname/solr-crafter/update/?commit=true -H "Content-Type: text/xml" -d "<delete><query>(crafterSite:"mysitename")</query></delete>"


------
Step 2: Invoke the reprocessing
------
.. code-block:: xml

    curl http://hostname:port/reprocess?password=(password)&target=(target-name)&processor=(processor local class / name no package)

+----------------+-----------------------------------------------+------------------------------------------------+
| Parameter Name | Description                                   | Example                                        |
+================+===============================================+================================================+
| hostname       | Deployer's hostname                           | localhost                                      |
+----------------+-----------------------------------------------+------------------------------------------------+
| port           | Deployer's port.                              | 9191                                           |
|                |                                               | default is 9191                                |
|                |                                               |                                                |
|                |                                               |                                                |
|                |                                               |                                                |
|                |                                               |                                                |
+----------------+-----------------------------------------------+------------------------------------------------+
| password       | Deployer password                             |                                                |
+----------------+-----------------------------------------------+------------------------------------------------+
| target         | The name property value of a target           | demodotcomprod                                 |
|                | bean in target context file.                  |                                                |
+----------------+-----------------------------------------------+------------------------------------------------+
| processor      | The class name of a processor. For reindexing,| DemoDotComProdSearchProcessor                  |
|                | it should be the bean name of a search update |                                                |
|                | post processor registered for a target bean in|                                                |
|                | target context file.                          |                                                |
|                | (e.g. SearchUpdateFlattenXmlProcessor)        |                                                |
+----------------+-----------------------------------------------+------------------------------------------------+

------
Step 3: Wait for indexing
------
You will see indexing activity in the deployment log as well as entries on the server(s) running Crafter Search and Solr.
Indexing activity time is dependant on the amount of content which must be re-processed.
