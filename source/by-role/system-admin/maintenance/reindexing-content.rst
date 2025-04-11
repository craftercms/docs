:is-up-to-date: True
:last-updated: 4.1.8

.. _reindexing-content:

=========================================
Reindexing Content for Search and Queries
=========================================
It is necessary from time to time to reindex content due to schema changes, migrations and other scenarios.
A bulk deployment will push all content to your index but involves several steps in addition to indexing which may not
be needed.  This article shows you how to use the Deployer to (re)index content that has already been deployed.

Reindexing the site content can be done using the reprocess feature in Crafter Deployer.

.. NOTE::
  The following guide is intended for environments that can have downtime during the process, for live environments
  see :ref:`reindexing-content-in-production`

.. toctree::
    :hidden:

    reindexing-content-in-production

------------------------------------------------
Step 1: Delete any existing content in the index
------------------------------------------------
There are two ways to clear the index of a site:

* Clear index through API
* Delete index files

^^^^^^^^^^^^^^^^^^^^^^^
Clear index through API
^^^^^^^^^^^^^^^^^^^^^^^
To delete any existing content in the index through API, send the following CURL command:

.. WARNING::
  This action will delete all content matching the query, review carefully the index & the site name before executing
  the command.

.. code-block:: xml

  curl -X POST "http://{searchHost}:{searchPort}/{siteName}/_delete_by_query?pretty" -H 'Content-Type: application/json' -d'{ "query": { "match_all": {} } }'


where:

+----------------------+-------------------------------------------+----------------------------+
|| Parameter Name      || Description                              || Example                   |
+======================+===========================================+============================+
|| searchHost          || Search hostname                          || localhost                 |
+----------------------+-------------------------------------------+----------------------------+
|| searchPort          || Search port                              || 9201                      |
||                     ||                                          || (default is 9201)         |
+----------------------+-------------------------------------------+----------------------------+
|| siteName            || For Delivery, the name of the site       || editorial                 |
||                     +-------------------------------------------+----------------------------+
||                     || For Authoring, there are two indexes per || editorial-authoring       |
||                     || site with the suffix of ``-preview`` and || editorial-preview         |
||                     || ``-authoring``                           ||                           |
+----------------------+-------------------------------------------+----------------------------+

Using the examples in the table above for the authoring preview, your CURL command should look like this:

.. code-block:: xml

  curl -X POST "http://localhost:9201/editorial-preview/_delete_by_query?pretty" -H 'Content-Type: application/json' -d'{ "query": { "match_all": {} } }'



After sending the CURL command, you will then get a response like this:

.. code-block:: json

  {
    "took":34,
    "timed_out":false,
    "total":31,
    "deleted":31,
    "batches":1,
    "version_conflicts":0,
    "noops":0,
    "retries":{
      "bulk":0,
      "search":0
    },
    "throttled_millis":0,
    "requests_per_second":-1.0,
    "throttled_until_millis":0,
    "failures":[]
  }


-------------------------------
Step 2: Invoke the reprocessing
-------------------------------
To start reindexing/reprocessing, send the following CURL command:

.. code-block:: xml

    curl "http://{deployerHost}:{deployerPort}/api/1/target/deploy/{environment}/{siteName}" -X POST -H "Content-Type: application/json" -d '{ "reprocess_all_files": true }'


where:

+----------------------+-------------------------------------------+----------------------------+
|| Parameter Name      || Description                              || Example                   |
+======================+===========================================+============================+
|| deployerHost        || Deployer's hostname                      || localhost                 |
+----------------------+-------------------------------------------+----------------------------+
|| deployerPort        || Deployer's port.                         || 9191                      |
||                     ||                                          || (default is 9191)         |
+----------------------+-------------------------------------------+----------------------------+
|| environment         || Target environment                       || preview                   |
+----------------------+-------------------------------------------+----------------------------+
|| siteName            || The name of the site                     || editorial                 |
+----------------------+-------------------------------------------+----------------------------+
|| reprocess_all_files || Indicates that all files should be       ||                           |
||                     || reprocessed (which also means reindex)   ||                           |
+----------------------+-------------------------------------------+----------------------------+

Using the examples in the table above for the authoring preview, your CURL command should look like this:

.. code-block:: xml

  curl "http://{localhost}:{9201}/api/1/target/deploy/{preview}/{editorial}" -X POST -H "Content-Type: application/json" -d '{ "reprocess_all_files": true }'


After sending the CURL command, you will get a response like this:

.. code-block:: json

   {"message":"OK"}


See the  :base_url:`deployTarget API <_static/api/deployer.html#tag/target/operation/deployTarget>` for more information on the API.

-------------------------
Step 3: Wait for indexing
-------------------------
You will see indexing activity in the deployment log located in ``INSTALL_DIRECTORY/logs/deployer/crafter-deployer.out``. Indexing activity time is dependent on the amount of content which must be reprocessed. When the
deployment/indexing finishes you should see something like the following in the log:

.. code-block:: none

    2024-10-18 10:40:30.675  INFO 46179 --- [deployment-3] org.craftercms.deployer.impl.TargetImpl  : ============================================================
    2024-10-18 10:40:30.675  INFO 46179 --- [deployment-3] org.craftercms.deployer.impl.TargetImpl  : Deployment for editorial-preview finished in 2.780 secs
    2024-10-18 10:40:30.675  INFO 46179 --- [deployment-3] org.craftercms.deployer.impl.TargetImpl  : ============================================================

--------------------------------
Step 4: Check deployment results
--------------------------------

When the deployer finishes the process it will write in the ``INSTALL_DIRECTORY/logs/deployer/`` folder a CSV file named ``{siteName}-{environment}-deployments.csv`` with the final status of the deployment, similar to this:

.. image:: /_static/images/system-admin/deploy-results-csv.webp
   :alt: Cook Books - Reindexing Deployment Results CSV File
   :width: 85 %
   :align: center
