.. index:: Search; Solr; Reindex; Crafter Search; Dev Ops; System Administrators;
.. _reindex-search:

=========================================
Reindexing Content for Search and Queries
=========================================

It is necessary from time to time to reindex content due to schema changes, migrations and other scenarios.
A bulk deployment will push all content to your index but involves several steps in addition to indexing which may not
be needed.  This article shows how to use the deployer to (re)index content that has already been deployed.

Reindexing the site content can be done using the reprocess feature in Crafter Deployer.

------------------------------------------------
Step 1: Delete any existing content in the index
------------------------------------------------
.. code-block:: xml

	curl "http://hostname/solr-crafter/update/?commit=true" -H "Content-Type: text/xml" -d "<delete><query>crafterSite:MYSITENAME</query></delete>"


-------------------------------
Step 2: Invoke the reprocessing
-------------------------------
.. code-block:: guess

    curl http://hostname:port/reprocess?password=MYPASSWORD&target=MYTARGET&processor=MyBeanName

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
| processor      | The bean  name of a processor. For reindexing,| DemoDotComProdSearchProcessor                  |
|                | it should be the bean name of a search update |                                                |
|                | post processor registered for a target bean in|                                                |
|                | target context file.                          |                                                |
|                | (e.g. SearchUpdateFlattenXmlProcessor)        |                                                |
+----------------+-----------------------------------------------+------------------------------------------------+

-------------------------
Step 3: Wait for indexing
-------------------------
You will see indexing activity in the deployment log as well as entries on the server(s) running Crafter Search and Solr.
Indexing activity time is dependant on the amount of content which must be re-processed.

===========================================================
Reindexing Content Without Disrupting Service in Production
===========================================================
In some scenarios it's not possible/appropriate to delete a live index and wait for the index to rebuild in production.  Perhaps the index is driving dyanamic features on the site that will break while the index is empty or being rebuilt.  In these scenarios you need a process for building the index off line and swapping it in.  

-------------------------------
Step 1: Prepare a re-index core
-------------------------------
The first step is to prepare an additional empty core on Solr where you can index the content.

-------------------------------------------------------------------
Step 2: Set up a new deployment context that points to the new core
-------------------------------------------------------------------
The next step is to create a new deployment context that mimics/is a copy of the production deployment context but that points to the "re-index" core. Note that you must restart the deployer in order for the new context to be detected.

----------------------
Step 3: Content freeze
----------------------
Once you are about to start a re-index you need to freeze your authoring/editing activity.  If Content is being updated in the live environment while you are rebuilding your indexes, you may miss updates.  Ask you authors not to publish during your re-index process.

----------------
Step 4: Re-index
----------------
Following the process above "Reindexing Content for Search and Queries" for re-indexing content you want to invoke a reprocess action against your new deployment context.

------------
Step 5: Wait
------------
You will see indexing activity in the deployment log as well as entries on the server(s) running Crafter Search and Solr.
Indexing activity time is dependant on the amount of content which must be re-processed.

--------------------
Step 6: Swap indexes
--------------------
Now that indexing is complete you need to load the re-indexed content.  Follow these steps
* In the solr console for the core administration click swap cores and provide the paths to the new index.
* Once the core has reloaded, move the original core to backup
* Consider createing a copy of the re-indexed core with the original name and swapping again to preserve file/folder names.

------------------------
Step 7: Unfreeze Content
------------------------
Now that you are cetain everything is working as it should, notify your authors that they may start editing and publishing activitiy.

----------------
Step 8: Clean up
----------------
Now that your process is complete you can clean up some of the artificats created by the process.
* The re-index core if swapped out
* The new deployment context

