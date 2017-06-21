.. _reindex-search:
.. index:: Search; Solr; Reindex; Crafter Search; Dev Ops; System Administrators; 

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

    curl "http://{hostname}:{port}/solr/{siteId}/update/?commit=true" -H "Content-Type: text/xml" -d "<delete><query>crafterSite:{siteId}</query></delete>"

.. WARNING::
  This action will delete all content matching the query, review carefully the solr index & the site id before executing the command.

-------------------------------
Step 2: Invoke the reprocessing
-------------------------------
.. code-block:: xml

    curl "http://{hostname}:{port}/api/1/target/deploy/{environment}/{siteName}" -X -H "Content-Type: text/json" -d '{ "reprocess_all_files": true }'

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
| environment    | Target environment                            | preview                                        |
+----------------+-----------------------------------------------+------------------------------------------------+
| siteName       | The name of the site                          | my-site                                        |
+----------------+-----------------------------------------------+------------------------------------------------+

-------------------------
Step 3: Wait for indexing
-------------------------
You will see indexing activity in the deployment log as well as entries on the server(s) running Crafter Search and Solr.
Indexing activity time is dependant on the amount of content which must be re-processed.

--------------------------------
Step 4: Check deployment results
--------------------------------

When the deployer finishes the process it will return a response similar to this:

.. code-block:: json

  {
    "target": {
      "env": "preview",
      "site_name": "my-site",
      "id": "my-site-preview",
      "load_date": "2017-06-20T13:52:04.525-06:00"
    },
    "start": "2017-06-20T16:38:41.91-06:00",
    "end": "2017-06-20T16:38:45.18-06:00",
    "duration": 3270,
    "status": "SUCCESS",
    "change_set": {
      "created_files": [
        ...
      ],
      "updated_files": [],
      "deleted_files": []
    },
    "processor_executions": [
      ...
    ],
    "running": false
  }

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

