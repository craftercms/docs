.. _reindex-search:
.. index:: Search; Solr; Reindex; Crafter Search; Dev Ops; System Administrators;

=========================================
Reindexing Content for Search and Queries
=========================================

It is necessary from time to time to reindex content due to schema changes, migrations and other scenarios.
A bulk deployment will push all content to your index but involves several steps in addition to indexing which may not
be needed.  This article shows you how to use the deployer to (re)index content that has already been deployed.

Reindexing the site content can be done using the reprocess feature in Crafter Deployer.

------------------------------------------------
Step 1: Delete any existing content in the index
------------------------------------------------

There are two ways to clear the index of a site:

^^^^^^^^^^^^^^^^^^^^^^^
Clear index through API
^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: xml

    curl "http://{hostname}:{port}/solr/{siteName}/update/?commit=true" -H "Content-Type: text/xml" -d "<delete><query>*:*</query></delete>"

.. WARNING::
  This action will delete all content matching the query, review carefully the Solr index & the site id before executing the command.

^^^^^^^^^^^^^^^^^^
Delete index files
^^^^^^^^^^^^^^^^^^

#. Make sure Tomcat and Solr have been stopped.
#. Inside your Crafter installation, go to ``data/indexes/{siteName}``.
#. Delete the ``data`` folder under there.
#. Restart Tomcat/Solr

-------------------------------
Step 2: Invoke the reprocessing
-------------------------------

.. code-block:: xml

    curl "http://{hostname}:{port}/api/1/target/deploy/{environment}/{siteName}" -X POST -H "Content-Type: application/json" -d '{ "reprocess_all_files": true }'

+----------------------+-------------------------------------------+----------------------------+
|| Parameter Name      || Description                              || Example                   |
+======================+===========================================+============================+
|| hostname            || Deployer's hostname                      || localhost                 |
+----------------------+-------------------------------------------+----------------------------+
|| port                || Deployer's port.                         || 9191                      |
||                     ||                                          || default is 9191           |
||                     ||                                          ||                           |
||                     ||                                          ||                           |
||                     ||                                          ||                           |
||                     ||                                          ||                           |
+----------------------+-------------------------------------------+----------------------------+
|| environment         || Target environment                       || preview                   |
+----------------------+-------------------------------------------+----------------------------+
|| siteName            || The name of the site                     || my-site                   |
+----------------------+-------------------------------------------+----------------------------+
|| reprocess_all_files || Indicates that all files should be       ||                           |
||                     || reprocessed (which also means reindexed) ||                           |
+----------------------+-------------------------------------------+----------------------------+

-------------------------
Step 3: Wait for indexing
-------------------------

You will see indexing activity in the deployment log. Indexing activity time is dependent on the amount of content which must be re-processed. When
the deployment/indexing finishes you should see something like the following in the log:

.. code-block:: guess

	2017-07-25 16:52:03.762  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------
	2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : Deployment for editorial-preview finished in 2.359 secs
	2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------

--------------------------------
Step 4: Check deployment results
--------------------------------

When the deployer finishes the process it will write in the ``logs`` folder a JSON file with the final status of the deployment, similar to this:

.. code-block:: guess

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

In some scenarios it's not possible/appropriate to delete a live index and wait for the index to rebuild in production.  Perhaps the index is
driving dynamic features on the site that will break while the index is empty or being rebuilt.  In these scenarios you need a process for building
the index off line and swapping it in.

-------------------------------
Step 1: Prepare a re-index core
-------------------------------

The first step is to prepare an additional empty core on Solr where you can index the content.

-------------------------------------
Step 2: Set up a new temporary target
-------------------------------------

The next step is to create a temporary deployment target that is basically a copy of the production target, but with a different ID. The easiest way to do this
is to go to the ``CRAFTER/deployer/targets`` folder and duplicate the target YAML file. Make sure the file name is different and change the ``siteName`` property
value inside the YAML file` to any other value so the site names don't collide.

----------------------
Step 3: Content freeze
----------------------

Once you are about to start a re-index you need to freeze your authoring/editing activity.  If content is being updated in the live environment while you are
rebuilding your indexes, you may miss updates.  Ask the authors not to publish during your re-index process.

----------------
Step 4: Re-index
----------------

Follow the process above, "Reindexing Content for Search and Queries", for re-indexing content you want to invoke a reprocess action against your new
deployment target.

------------
Step 5: Wait
------------

You will see indexing activity in the deployment log. Indexing activity time is dependent on the amount of content which must be re-processed. When
the deployment/indexing finishes you should see something like the following in the log:

.. code-block:: guess

	2017-07-25 16:52:03.762  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------
	2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : Deployment for editorial-preview finished in 2.359 secs
	2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------

--------------------
Step 6: Swap indexes
--------------------

Now that indexing is complete you need to load the re-indexed content.  Follow these steps:

#. In the Solr console, under the Core Admin, click Swap Cores to swap from the production core to the temporary core.
#. Once the core has reloaded, move the original core to backup.
#. Consider creating a copy of the re-indexed core with the original name and swapping again to preserve file/folder names:

	#. Go to the ``CRAFTER/data/indexes`` and delete the original core folder (should have the same name as the site, e.g. ``editorial``).
	#. Copy the swapped core folder (``editorial2``) to the path of the original core folder (``editorial``).
	#. Swap the cores again.

------------------------
Step 7: Unfreeze Content
------------------------

Now that you are certain everything is working as it should, notify your authors that they may start editing and publishing activity.

----------------
Step 8: Clean up
----------------

Now that your process is complete you can clean up some of the artifacts created by the process.

* The re-index core if swapped out
* The temporary target YAML file
