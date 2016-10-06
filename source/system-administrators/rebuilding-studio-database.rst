==========================
Rebuilding Studio Database
==========================

------------------------------------------
Step 0: Configure Rebuild Database Service
------------------------------------------

Update Studio configuration ``TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties`` to add/modify following properties

.. code-block:: properties
    :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

    # Preview content root path
    crafter.repository.previewRootPath=./crafter/data/repo
    # Rebuild Repository Metadata job batch size
    crafter.repository.rebuildMetadata.batchSize=100

---------------------------------------
Step 1: Invoke Rebuild Database Service
---------------------------------------

.. code-block:: sh

    curl http://hostname:port/studio/api/1/services/api/1/site/rebuild-repo-metadata.json?site=SITE_TO_REBUILD_DB

-----------------------------------------------------------
Step 2: Wait for rebuild database service to finish the job
-----------------------------------------------------------

Rebuild Database service is executed as background job that processes whole content divided in batches. Batch size is configured in Step 0. If job is interrupted before rebuild is completed (server restart or shutdown), when service is invoked again, it will continue with the batch that was interrupted.