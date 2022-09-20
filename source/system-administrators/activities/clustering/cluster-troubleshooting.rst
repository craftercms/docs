:is-up-to-date: False
:last-updated: 4.0.2

:nosearch:

.. index:: Troubleshooting, Studio Clustering, Cluster Troubleshooting

.. _cluster-troubleshooting:

========================================
Cluster Troubleshooting |enterpriseOnly|
========================================

.. Remove :nosearch: and to set up-to-date to true above once the document is finalized

Whenever your cluster has a Git or DB sync failure, the following logs may appear:

.. _cluster-troubleshooting-git-sync-fail-log:

.. code-block:: text
   :caption: *Sample log for a cluster Git sync failure*

   <add sample log of failed Git sync>

.. _cluster-troubleshooting-db-sync-fail-log:

.. code-block:: text
   :caption: *Sample log for a cluster DB sync failure*

   <add sample log of failed DB sync>

An email will also be sent to configured recipients to inform them of the failure.

This section discusses how to fix the sync failure in your cluster.


.. raw:: html

   <hr>


The first thing to do when a sync failure happens is to figure out whether the sync failure is in the DB or Git.
The email sent to configured recipients when the sync failure happened will indicate whether it's a DB or a Git
sync failure.  From the logs, you can also determine if it was a DB or a Git sync failure.

---------------
DB sync failure
---------------

For a DB sync failure, the logs will contain a message like :ref:`this <cluster-troubleshooting-git-sync-fail-log>`
as seen above and the following email will be sent:

.. image:: /_static/images/system-admin/cluster-db-sync-fail.webp
   :alt: CrafterCMS - Studio Enterprise Clustering DB sync failure email
   :width: 35%
   :align: center

|

The workaround can be any valid intervention on the database


----------------
Git sync failure
----------------

For a Git sync failure, the logs will contain a message like :ref:`this <cluster-troubleshooting-db-sync-fail-log>`
as seen above and the following email will be sent:

.. image:: /_static/images/system-admin/cluster-git-sync-fail.webp
   :alt: CrafterCMS - Studio Enterprise Clustering Git sync failure email
   :width: 35%
   :align: center

|

If there is any divergent history, the node will fail to startup and the admins would need to remove any commits
"ahead" of primary branch.  That would apply for all repositories (global, site sandbox, site published).
There are a few ways to go about fixing the sync problem:

- Manually remove the extra commits, do a ``git reset --hard``
- Manually move the extra commits into the primary corresponding repository
- Shutdown new primary and start the failing one as primary
