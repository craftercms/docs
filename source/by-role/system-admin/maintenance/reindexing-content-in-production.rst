:is-up-to-date: True
:last-updated: 4.1.8

.. _reindexing-content-in-production:

===========================================================
Reindexing Content Without Disrupting Service in Production
===========================================================
In some scenarios it's not possible or appropriate to delete a live index and wait for the index to rebuild in production.
Perhaps the index is driving dynamic features on the site that will break while the index is empty or being rebuilt.
In these scenarios you need a process for building the index without disrupting service in production.

^^^^^^^^^^^^^^^^^^^^^^
Step 1: Content freeze
^^^^^^^^^^^^^^^^^^^^^^
Once you are about to start a reindex you need to freeze your authoring/editing activity.  If content is being updated
in the live environment while you are rebuilding your indexes, you may miss updates.  Ask the authors not to publish
during your reindex process.

^^^^^^^^^^^^^^^^^^^^^^
Step 2: Recreate Index
^^^^^^^^^^^^^^^^^^^^^^
To simplify recreating an index of a site, CrafterCMS provides an API that recreates the underlying search index with the specified environment and site name.

``http://localhost:9191/api/1/target/recreate/{env}/{site_name}``

Simply call the API above with the required parameters to recreate your site index.

See the `recreateIndex API <../../../_static/api/deployer.html#tag/target/operation/recreateIndex>`__ for more information on the API.

^^^^^^^^^^^^^^^^^^^^^^^^
Step 3: Unfreeze Content
^^^^^^^^^^^^^^^^^^^^^^^^
Now that reindexing is done, notify your authors that they may start editing and publishing activity.