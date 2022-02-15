:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _reindex-content-for-3-1-10-to-3-1-17:

--------------------------------------------------------------------------------
Reindexing Content Using Elasticsearch for CrafterCMS versions 3.1.10 to 3.1.17
--------------------------------------------------------------------------------

The steps listed below for reindexing content without disrupting service in production using Elasticsearch applies only to CrafterCMS versions 3.1.10 to 3.1.17

^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 1: Create a new index
^^^^^^^^^^^^^^^^^^^^^^^^^^

The first step is to create a new index on Elasticsearch where you can index the content:

#. Check the next version for the index name, you can find the current name using the following command:

   .. code-block:: bash
      :linenos:

          curl -s http://ES_HOST:ES_PORT/_cat/aliases | grep SITE_NAME

      # Example result

      SITE_NAME-ENV   SITE_NAME-ENV_v1   - - -

#. Download the Elasticsearch mappings appropriate for the index. If the index is an authoring index (it has an
   -authoring suffix), then use ``authoring-mapping.json``. If it's any other index (it has a -preview suffix
   or no suffix), then use ``default-mapping.json``. The latest version of the mappings can be found
   `here <https://github.com/craftercms/search/tree/v3.1.17/crafter-search-elasticsearch/src/main/resources/crafter/elasticsearch>`_

#. Use the Elasticsearch API `create index <https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html>`_ to create a new index (e.g. SITE_NAME-ENV_v2) and create the request based on the  mappings downloaded from the previous step


^^^^^^^^^^^^^^^^^^^^^^
Step 2: Content freeze
^^^^^^^^^^^^^^^^^^^^^^

Once you are about to start a reindex you need to freeze your authoring/editing activity.  If content is being updated
in the live environment while you are rebuilding your indexes, you may miss updates.  Ask the authors not to publish
during your reindex process.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 3: Set up a new temporary target
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The next step is to create a temporary deployment target that is basically a copy of the production target, but with a
different ID. The easiest way to do this is to:

#. Go to the ``CRAFTER/deployer/targets`` folder.
#. Copy and paste the target's YAML to somewhere temporary outside the ``targets`` folder (to avoid the Deployer from
   picking the new target while you're modifying it).
#. Replace the original environment from the YAML file name with anything different than the original (e.g.
   ``SITE_NAME-ENV-temp.yaml``).
#. Change the ``siteName`` property value inside the YAML to a new name (e.g. SITE_NAME_v2) and change the index name by adding ``indexId:NEW_INDEX`` where the ``NEW_INDEX`` property value is the name of the new index created in the previous step (e.g. SITIE_NAME-ENV_v2), right after the line ``- processorName: authoringElasticsearchIndexingProcessor``

   .. code-block:: yaml
      :emphasize-lines: 12

      version: '1.7'
      target:
      env: preview
      siteName: SITE_NAME_v2
      ...
      deployment:
        scheduling:
          enabled: false
        pipeline:
          - processorName: gitDiffProcessor
          - processorName: elasticsearchIndexingProcessor
            indexId: SITE_NAME-ENV_v2
      ...

   |

#. Copy the YAML file back to the ``targets`` folder.

^^^^^^^^^^^^^^^
Step 4: Reindex
^^^^^^^^^^^^^^^

On a live environment, the Deployer will execute the deployment of a target on schedule every minute by default, so
after creating the new temporary target the Deployer should pick it up automatically and start reindexing. If the
Deployer is not working on a schedule, you can follow the process in :ref:`reindexing-content`, starting in
``Step 2: Invoke the reprocessing`` and using the site name you set in the temporary target YAML (e.g. SITE_NAME_v2).

^^^^^^^^^^^^
Step 5: Wait
^^^^^^^^^^^^

You will see indexing activity in the deployment log located in ``INSTALL_DIRECTORY/logs/deployer/crafter-deployer.out``.
Indexing activity time is dependent on the amount of content which must be re-processed. When the deployment/indexing
finishes you should see something like the following in the log:

.. code-block:: none

  2017-07-25 16:52:03.762  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------
  2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : Deployment for SITE_NAME_v2-ENV finished in 2.359 secs
  2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------

^^^^^^^^^^^^^^^^^^^^
Step 6: Swap indexes
^^^^^^^^^^^^^^^^^^^^

Now that indexing is complete you need to load the reindexed content. Execute the following command:

.. code-block:: bash
  :linenos:

      curl -s -X POST 'http://ES_HOST:ES_PORT/_aliases' -H 'Content-Type: application/json' -d '
      {
        "actions": [
          { "remove": { "index": "SITE_NAME-ENV_v1", "alias": "SITE_NAME-ENV" } },
          { "add": { "index": "SITE_NAME-ENV_v2", "alias": "SITE_NAME-ENV" } }
        ]
      }
      '

^^^^^^^^^^^^^^^^^^^^^^^^
Step 7: Unfreeze Content
^^^^^^^^^^^^^^^^^^^^^^^^

Now that you are certain everything is working as it should, notify your authors that they may start editing and
publishing activity.

^^^^^^^^^^^^^^^^
Step 8: Clean up
^^^^^^^^^^^^^^^^

Now that your process is complete you can clean up some of the artifacts created by the process.

* The old index for the site
* The temporary target YAML file

