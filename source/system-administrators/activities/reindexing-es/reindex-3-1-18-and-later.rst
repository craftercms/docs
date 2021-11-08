:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _reindex-content-3-1-18-and-later:

--------------------------------------------------------------------------------
Reindexing Content Using Elasticsearch for Crafter CMS versions 3.1.18 and later
--------------------------------------------------------------------------------

The steps listed below for reindexing content without disrupting service in production using Elasticsearch applies only to Crafter CMS versions 3.1.18 and later

^^^^^^^^^^^^^^^^^^^^^^
Step 1: Content freeze
^^^^^^^^^^^^^^^^^^^^^^

Once you are about to start a reindex you need to freeze your authoring/editing activity.  If content is being updated
in the live environment while you are rebuilding your indexes, you may miss updates.  Ask the authors not to publish
during your reindex process.

^^^^^^^^^^^^^^^^^^^^^^
Step 2: Recreate Index
^^^^^^^^^^^^^^^^^^^^^^

To simplify recreating an index of a site using Elasticsearch, Crafter CMS provides an API that recreates the underlying Elasticsearch index with the specified environment and site name.

``http://localhost:9191/api/1/target/recreate/{env}/{site_name}``

Simply call the API above with the required parameters to recreate your site index.

See :ref:`here <crafter-deployer-api-target-recreate>` for more information on the API.


^^^^^^^^^^^^^^^^^^^^^^^^
Step 3: Unfreeze Content
^^^^^^^^^^^^^^^^^^^^^^^^

Now that reindexing is done, notify your authors that they may start editing and
publishing activity.

