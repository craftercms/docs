:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _reindex-content-prior-to-3-1-10:

-------------------------------------------------------------------------------
Reindexing Content Using Elasticsearch for Crafter CMS versions prior to 3.1.10
-------------------------------------------------------------------------------

The steps listed below for reindexing content without disrupting service in production using Elasticsearch applies only to Crafter CMS versions prior to 3.1.10

^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 1: Create a new index
^^^^^^^^^^^^^^^^^^^^^^^^^^

The first step is to create a new index on Elasticsearch where you can index the content:

#. Check the next version for the index name, you can find the current name using the following command:

   .. code-block:: bash
      :linenos:

          curl -s http://ES_HOST:ES_PORT/_cat/aliases | grep SITE_NAME

      # Example result

      SITE_NAME   SITE_NAME_v1   - - -

#. Download the Elasticsearch settings appropriate for the index. If the index is an authoring index (it has an
   -authoring suffix), then use ``authoring-index-settings.json``. If it's any other index (it has a -preview suffix
   or no suffix), then use ``default-index-settings.json``. The latest version of the settings can be found
   `here <https://github.com/craftercms/search/tree/v3.1.9/crafter-search-elasticsearch/src/main/resources/crafter/elasticsearch>`_

#. Create the new index using the next version and the settings file:

   .. code-block:: bash
      :linenos:

      curl -s -X PUT http://ES_HOST:ES_PORT/SITE_NAME_v2 -H 'Content-Type: application/json' -d '@default-index-settings.json'


^^^^^^^^^^^^^^^^^^^^^^
Step 2: Content freeze
^^^^^^^^^^^^^^^^^^^^^^

Once you are about to start a re-index you need to freeze your authoring/editing activity.  If content is being updated
in the live environment while you are rebuilding your indexes, you may miss updates.  Ask the authors not to publish
during your re-index process.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Step 3: Set up a new temporary target
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The next step is to create a temporary deployment target that is basically a copy of the production target, but with a
different ID. The easiest way to do this is to:

#. Go to the ``CRAFTER/deployer/targets`` folder.
#. Copy and paste the target's YAML to somewhere temporary outside the ``targets`` folder (to avoid the Deployer from
   picking the new target while you're modifying it).
#. Replace the original environment from the YAML file name with anything different than the original (e.g.
   ``SITE_NAME-temp.yaml``).
#. Change the ``siteName`` property value inside the YAML to the name of the new index (e.g. ``SITE_NAME_v2``).
#. Copy the the YAML file back to the ``targets`` folder.

^^^^^^^^^^^^^^^^
Step 4: Re-index
^^^^^^^^^^^^^^^^

On a live environment, the Deployer will execute the deployment of a target on schedule every minute by default, so
after creating the new temporary target the Deployer should pick it up automatically and start re-indexing. If the
Deployer is not working on a schedule, you can follow the process in :ref:`reindexing-content`, starting in
``Step 2: Invoke the reprocessing`` and using the ``siteName`` you set in the temporary target YAML.

^^^^^^^^^^^^
Step 5: Wait
^^^^^^^^^^^^

You will see indexing activity in the deployment log located in ``INSTALL_DIRECTORY/logs/deployer/crafter-deployer.out``.
Indexing activity time is dependent on the amount of content which must be re-processed. When the deployment/indexing
finishes you should see something like the following in the log:

.. code-block:: none

  2017-07-25 16:52:03.762  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------
  2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : Deployment for SITE_NAME_v2 finished in 2.359 secs
  2017-07-25 16:52:03.763  INFO 21896 --- [pool-2-thread-1] org.craftercms.deployer.impl.TargetImpl  : ------------------------------------------------------------

^^^^^^^^^^^^^^^^^^^^
Step 6: Swap indexes
^^^^^^^^^^^^^^^^^^^^

Now that indexing is complete you need to load the re-indexed content. Execute the following command:

.. code-block:: bash
  :linenos:

      curl -s -X POST 'http://ES_HOST:ES_PORT/_aliases' -H 'Content-Type: application/json' -d '
      {
        "actions": [
          { "remove": { "index": "SITE_NAME_v1", "alias": "SITE_NAME" } },
          { "add": { "index": "SITE_NAME_v2", "alias": "SITE_NAME" } }
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

