:is-up-to-date: True

.. _reindexing-content:

=========================================
Reindexing Content for Search and Queries
=========================================

It is necessary from time to time to reindex content due to schema changes, migrations and other scenarios.
A bulk deployment will push all content to your index but involves several steps in addition to indexing which may not
be needed.  This article shows you how to use the deployer to (re)index content that has already been deployed.

Reindexing the site content can be done using the reprocess feature in Crafter Deployer.

.. NOTE::
  The following guide is intended for environments that can have downtime during the process, for live environments
  see :ref:`reindexing-content-in-prod`

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

Elasticsearch
"""""""""""""

.. code-block:: xml

  curl "http://{esHost}:{esPort}/{siteName}/_doc/_delete_by_query" -H "Content-Type: application/json" -d "{ "query": { "match_all": {} } }"

|

+----------------------+-------------------------------------------+----------------------------+
|| Parameter Name      || Description                              || Example                   |
+======================+===========================================+============================+
|| esHost              || Elasticsearch hostname                   || localhost                 |
+----------------------+-------------------------------------------+----------------------------+
|| esPort              || Elasticsearch port                       || 9201                      |
||                     ||                                          || (default is 9201)         |
+----------------------+-------------------------------------------+----------------------------+
|| siteName            || The name of the site                     || my-site                   |
+----------------------+-------------------------------------------+----------------------------+

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

|

Solr
""""

.. code-block:: xml

    curl "http://{solrHost}:{solrPort}/solr/{siteName}/update/?commit=true" -H "Content-Type: text/xml" -d "<delete><query>*:*</query></delete>"

|

+----------------------+-------------------------------------------+----------------------------+
|| Parameter Name      || Description                              || Example                   |
+======================+===========================================+============================+
|| solrHost            || Solr's hostname                          || localhost                 |
+----------------------+-------------------------------------------+----------------------------+
|| solrPort            || Solr's port.                             || 8694                      |
||                     ||                                          || (default is 8694)         |
+----------------------+-------------------------------------------+----------------------------+
|| siteName            || The name of the site                     || my-site                   |
+----------------------+-------------------------------------------+----------------------------+

.. WARNING::
  This action will delete all content matching the query, review carefully the Solr index & the site name before executing the command.

After sending the CURL command, you will then get a response like this:

.. code-block:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <response>
      <lst name="responseHeader"><int name="status">0</int><int name="QTime">1690</int></lst>
   </response>

|

^^^^^^^^^^^^^^^^^^
Delete index files
^^^^^^^^^^^^^^^^^^

To delete any existing content in the index by deleting the index files, do the following:

.. NOTE::
  It is not recommended to modify index files directly for Elasticsearch, specially in a clustered environment.

Solr
""""

#. Make sure Tomcat and Solr have been stopped.
#. Delete the index ``data`` folder for the site you are reindexing (*INSTALL_DIRECTORY/data/indexes/{siteName}/data/*).
#. Restart Tomcat/Solr

-------------------------------
Step 2: Invoke the reprocessing
-------------------------------

To start reindexing/reprocessing, send the following CURL command:

.. code-block:: xml

    curl "http://{deployerHost}:{deployerPort}/api/1/target/deploy/{environment}/{siteName}" -X POST -H "Content-Type: application/json" -d '{ "reprocess_all_files": true }'

|

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
|| siteName            || The name of the site                     || my-site                   |
+----------------------+-------------------------------------------+----------------------------+
|| reprocess_all_files || Indicates that all files should be       ||                           |
||                     || reprocessed (which also means reindexed) ||                           |
+----------------------+-------------------------------------------+----------------------------+

After sending the CURL command, you will get a response like this:

.. code-block:: json

   {"message":"OK"}

|

-------------------------
Step 3: Wait for indexing
-------------------------

You will see indexing activity in the deployment log located in ``INSTALL_DIRECTORY/logs/deployer/crafter-deployer.out``. Indexing activity time is dependent on the amount of content which must be re-processed. When the
deployment/indexing finishes you should see something like the following in the log:

.. code-block:: none

	2017-07-25 16:52:03.762  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------
	2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : Deployment for editorial-preview finished in 2.359 secs
	2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------

--------------------------------
Step 4: Check deployment results
--------------------------------

When the deployer finishes the process it will write in the ``INSTALL_DIRECTORY/logs/deployer/`` folder a CSV file named ``{siteName}-{environment}-deployments.csv`` with the final status of the deployment, similar to this:

.. image:: /_static/images/system-admin/deploy-results-csv.png
   :alt: Cook Books - Reindexing Deployment Results CSV File
   :width: 85 %
   :align: center
