:is-up-to-date: True
:last-updated: 4.0.2

.. index:: Troubleshooting, Studio Clustering, Authoring Cluster Troubleshooting

.. _authoring-cluster-troubleshooting:

==================================================
Authoring-Cluster Troubleshooting |enterpriseOnly|
==================================================

Whenever your authoring cluster has a Git or DB sync failure, the following logs may appear:

.. _authoring-cluster-troubleshooting-git-sync-fail-log:

.. code-block:: text
   :caption: *Sample log for an authoring cluster Git sync startup failure*

   [ERROR] 2022-10-19T17:22:24,358 [main] [validation.ReplicaNodeRepositoryCheck] | Branch 'master' in repository '/opt/crafter/cluster/crafter/data/repos/sites/ed123/sandbox/.git' has commits ahead of the primary node at '172.31.70.118'
   [ERROR] 2022-10-19T17:22:24,359 [main] [validation.NodeStateCheckerImpl] | Failed to start Crafter Studio cluster node due to start-up conflicts. Please review the logs and resolve the conflicts.
   [ERROR] 2022-10-19T17:22:24,598 [main] [cluster.StudioClusterUtils] | Error notification email has been sent
   ...

.. _authoring-cluster-troubleshooting-db-sync-fail-log:

.. code-block:: text
   :caption: *Sample log for an authoring cluster DB sync startup failure*

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
:ref:`failure notification properties <authoring-cluster-startup-failure-notification-config>` section
for more information on how to configure the list of recipients to be informed in case of a
startup failure in the authoring cluster.

This section discusses how to fix the sync failure in your authoring cluster.


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

as seen :ref:`above <authoring-cluster-troubleshooting-git-sync-fail-log>` and the following email will be sent if configured:

.. image:: /_static/images/system-admin/cluster-db-sync-fail.webp
   :alt: CrafterCMS - Studio Enterprise Clustering DB sync failure email
   :width: 35%

|

After reviewing the node states (logs and the database), the fix can be any valid intervention on the database.
Before performing any valid intervention on the database, it will need to be started first, then the user needs to login.

#. The first thing that needs to be done is to start the database.  To start the database, run the following:

   .. code-block:: bash

      CRAFTER_HOME/bin/dbms/bin/mysqld --no-defaults --console --basedir=CRAFTER_HOME/bin/dbms --datadir=CRAFTER_HOME/data/db --port=33306 --socket=/tmp/MariaDB4j.33306.sock --max_allowed_packet=128M --max-connections=500

   This is the output when running the command above:

   .. code-block:: bash

      /opt/crafter/bin/dbms/bin/mysqld --no-defaults --console --basedir=/opt/crafter/bin/dbms --datadir=/opt/crafter/data/db --port=33306 --socket=/tmp/MariaDB4j.33306.sock --max_allowed_packet=128M --max-connections=500
      2022-10-20 19:49:22 0 [Note] ./mysqld (mysqld 10.4.20-MariaDB) starting as process 8862 ...
      2022-10-20 19:49:23 0 [Note] InnoDB: Using Linux native AIO
      2022-10-20 19:49:23 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
      2022-10-20 19:49:23 0 [Note] InnoDB: Uses event mutexes
      2022-10-20 19:49:23 0 [Note] InnoDB: Compressed tables use zlib 1.2.11
      2022-10-20 19:49:23 0 [Note] InnoDB: Number of pools: 1
      2022-10-20 19:49:23 0 [Note] InnoDB: Using SSE2 crc32 instructions
      2022-10-20 19:49:23 0 [Note] InnoDB: Initializing buffer pool, total size = 128M, instances = 1, chunk size = 128M
      2022-10-20 19:49:23 0 [Note] InnoDB: Completed initialization of buffer pool
      2022-10-20 19:49:23 0 [Note] InnoDB: If the mysqld execution user is authorized, page cleaner thread priority can be changed. See the man page of setpriority().
      2022-10-20 19:49:23 0 [Note] InnoDB: 128 out of 128 rollback segments are active.
      2022-10-20 19:49:23 0 [Note] InnoDB: Creating shared tablespace for temporary tables
      2022-10-20 19:49:23 0 [Note] InnoDB: Setting file './ibtmp1' size to 12 MB. Physically writing the file full; Please wait ...
      2022-10-20 19:49:23 0 [Note] InnoDB: File './ibtmp1' size is now 12 MB.
      2022-10-20 19:49:23 0 [Note] InnoDB: Waiting for purge to start
      2022-10-20 19:49:23 0 [Note] InnoDB: 10.4.20 started; log sequence number 1389822; transaction id 407
      2022-10-20 19:49:23 0 [Note] InnoDB: Loading buffer pool(s) from /opt/crafter/data/db/ib_buffer_pool
      2022-10-20 19:49:23 0 [Note] Plugin 'FEEDBACK' is disabled.
      2022-10-20 19:49:23 0 [Note] Server socket created on IP: '::'.
      2022-10-20 19:49:23 0 [Note] InnoDB: Buffer pool(s) load completed at 221020 19:49:23
      2022-10-20 19:49:23 0 [Note] Reading of all Master_info entries succeeded
      2022-10-20 19:49:23 0 [Note] Added new Master_info '' to hash table
      2022-10-20 19:49:23 0 [Note] ./mysqld: ready for connections.
      Version: '10.4.20-MariaDB'  socket: '/tmp/MariaDB4j.33306.sock'  port: 33306  MariaDB Server

#. Login to the database by running the following command then entering the database root password:

   .. code-block:: bash

      CRAFTER_HOME/bin/dbms/bin/mysql -u <db_root_user> -p --socket=/tmp/MariaDB4j.33306.sock

   |

   The <db_root_user> by default is ``root`` with password set to ``root`` or empty.  Remember to replace
   <db_root_user> with the actual ``root`` user (MARIADB_ROOT_USER) value and enter the actual password
   (MARIADB_ROOT_PASSWD) value used in your system, which can be found in the ``crafter-setenv.sh`` file
   under the ``CRAFTER_HOME/bin`` folder.

   In the sample run below, the default root user ``root`` is used and the corresponding password:

   .. code-block:: text

      ./mysql -u root -p --socket=/tmp/MariaDB4j.33306.sock
      Enter password:
      Welcome to the MariaDB monitor.  Commands end with ; or \g.
      Your MariaDB connection id is 8
      Server version: 10.4.20-MariaDB MariaDB Server

      Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

      Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

      MariaDB [(none)]>


The intervention on the database may now be performed once the admin is logged in to the database.
After performing the fix, stop the database then restart the node.

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

as seen :ref:`above <authoring-cluster-troubleshooting-git-sync-fail-log>` and the following email will be sent if configured:

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

