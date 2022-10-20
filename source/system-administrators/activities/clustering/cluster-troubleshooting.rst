:is-up-to-date: True
:last-updated: 4.0.2

.. index:: Troubleshooting, Studio Clustering, Cluster Troubleshooting

.. _cluster-troubleshooting:

========================================
Cluster Troubleshooting |enterpriseOnly|
========================================

Whenever your cluster has a Git or DB sync failure, the following logs may appear:

.. _cluster-troubleshooting-git-sync-fail-log:

.. code-block:: text
   :caption: *Sample log for a cluster Git sync startup failure*

   [ERROR] 2022-10-19T17:22:24,358 [main] [validation.ReplicaNodeRepositoryCheck] | Branch 'master' in repository '/opt/crafter/cluster/crafter/data/repos/sites/ed123/sandbox/.git' has commits ahead of the primary node at '172.31.70.118'
   [ERROR] 2022-10-19T17:22:24,359 [main] [validation.NodeStateCheckerImpl] | Failed to start Crafter Studio cluster node due to start-up conflicts. Please review the logs and resolve the conflicts.
   [ERROR] 2022-10-19T17:22:24,598 [main] [cluster.StudioClusterUtils] | Error notification email has been sent
   ...

.. _cluster-troubleshooting-db-sync-fail-log:

.. code-block:: text
   :caption: *Sample log for a cluster DB sync startup failure*

   Caused by: org.craftercms.studio.api.v2.exception.DbClusterStartupException: Failed to start DB replica: Error 'Duplicate entry '4' for key 'PRIMARY'' on query. Default database: 'crafter'. Query: 'INSERT INTO audit (organization_id, site_id, operation, operation_timestamp, origin, primary_target_id,
        primary_target_type, primary_target_subtype, primary_target_value, actor_id, actor_details, cluster_node_id)
        VALUES (1, 1, 'LOGIN', IFNULL(NULL, CURRENT_TIMESTAMP), 'API',
        'admin', 'User', NULL, 'admin', 'admin',
        NULL, '172.31.70.118')'
	    at org.craftercms.studio.impl.v2.dal.cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl.checkForErrors(DbPrimaryReplicaClusterSynchronizationServiceImpl.java:598) ~[classes/:4.0.2-SNAPSHOT]
	    at org.craftercms.studio.impl.v2.dal.cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl.waitForLocalReplicaToSync(DbPrimaryReplicaClusterSynchronizationServiceImpl.java:571) ~[classes/:4.0.2-SNAPSHOT]
	    at org.craftercms.studio.impl.v2.dal.cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl.synchronizeStartup(DbPrimaryReplicaClusterSynchronizationServiceImpl.java:270) ~[classes/:4.0.2-SNAPSHOT]
	    at org.craftercms.studio.impl.v2.dal.cluster.DbPrimaryReplicaClusterAwareMariaDB4jSpringService.start(DbPrimaryReplicaClusterAwareMariaDB4jSpringService.java:51) ~[classes/:4.0.2-SNAPSHOT]
	    at ch.vorburger.mariadb4j.MariaDB4jService.postConstruct(MariaDB4jService.java:64) ~[mariaDB4j-core-2.5.3.jar:?]
	    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:?]
        ...

An email will also be sent to the configured list of recipients to inform them of the failure.

See the :ref:`setup-a-two-node-cluster-with-studio` article then scroll to the
:ref:`failure notification properties <cluster-startup-failure-notification-config>` section
for more information on how to configure the list of recipients to be informed in case of a
startup failure in the cluster.

This section discusses how to fix the sync failure in your cluster.


.. raw:: html

   <hr>

-----------------------
Fixing the Sync Failure
-----------------------

The first thing to do when a sync failure happens is to figure out whether the sync failure is in the DB or Git.
The email sent to configured recipients when the sync failure happened will indicate whether it's a DB or a Git
sync failure.  From the logs, you can also determine if it was a DB or a Git sync failure.

^^^^^^^^^^^^^^^
DB sync failure
^^^^^^^^^^^^^^^

For a DB sync failure, the logs will contain a message like below:

.. code-block:: text

   ...
   Failed to start DB replica:
   ...

as seen :ref:`above <cluster-troubleshooting-git-sync-fail-log>` and the following email will be sent if configured:

.. image:: /_static/images/system-admin/cluster-db-sync-fail.webp
   :alt: CrafterCMS - Studio Enterprise Clustering DB sync failure email
   :width: 35%

|

After reviewing the node states (logs and the database), the fix can be any valid intervention on the database.
After fixing the database, the node may then be restarted.

If an admin reviews the node states and thinks everything is fine but still receives DB sync errors, the admin
may decide if MariaDB should ignore those errors and continue. To ignore the errors, a manual intervention is
required and may be done by following the instructions `here <https://mariadb.com/kb/en/set-global-sql_slave_skip_counter/>`__

^^^^^^^^^^^^^^^^
Git sync failure
^^^^^^^^^^^^^^^^

For a Git sync failure, the logs will contain a message like below:

.. code-block:: text

   ...
   Branch 'master' in repository '/opt/crafter/data/repos/sites/ed123/sandbox/.git' has commits ahead of the primary node
   ...

as seen :ref:`above <cluster-troubleshooting-git-sync-fail-log>` and the following email will be sent if configured:

.. image:: /_static/images/system-admin/cluster-git-sync-fail.webp
   :alt: CrafterCMS - Studio Enterprise Clustering Git sync failure email
   :width: 35%

|

If there is any divergent history, the node will fail to startup and the admins would need to remove any commits
"ahead" of primary branch.  That would apply for all repositories (global, site sandbox, site published).

After reviewing the logs (tomcat logs and git log), there are a few ways to go about fixing the sync problem:

- Manually remove the extra commits, do a ``git reset --hard``
- Manually move the extra commits into the primary corresponding repository
- Shutdown new primary and start the failing one as primary

