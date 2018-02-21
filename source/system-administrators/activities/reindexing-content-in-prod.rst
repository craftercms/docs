
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
