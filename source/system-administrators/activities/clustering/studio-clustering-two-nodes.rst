:is-up-to-date: True

.. index:: Setup a Two Node Cluster with Studio, Clustering with Studio Example

.. _setup-a-two-node-cluster-with-studio:

=====================================================
Setup a Two Node Cluster with Studio |enterpriseOnly|
=====================================================

Let's take a look at an example of how to setup a two node cluster with Studio.

To setup a two node cluster with Studio we'll need to do the following:

#. Configure Nodes in the Cluster
#. Start the Nodes in the Cluster

------------
Requirements
------------

* At least 2 servers running Linux (Remember that Studio's cluster runs only in Linux)
* Enterprise version of Crafter CMS
* If using an enterprise Crafter CMS installed from a binary archive, ``Git`` is required by
  Crafter CMS and may need to be installed if not already installed in the server.
* Studio's clustering requires the ``libssl1.0.0`` (or ``libssl1.0.2``) shared library.
  Some Linux distros does not come with the library pre-installed and may need to be installed.

--------------------------------
Configuring Nodes in the Cluster
--------------------------------

#. Install the Enterprise version of Crafter CMS on all the nodes
#. Configure the Git **repository clustering** for all nodes by configuring the following settings in the
   :ref:`studio-config-override.yaml <studio-configuration-files>` file.

   .. code-block:: yaml
      :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

      # Cluster Git URL format for synching members.
      # - Typical SSH URL format: ssh://{username}@{localAddress}{absolutePath}
      # - Typical HTTPS URL format: https://{localAddress}/repos/sites
      studio.clustering.sync.urlFormat: ssh://{username}@{localAddress}{absolutePath}

      # Cluster Syncers
      # Cluster member after heartbeat stale for amount of minutes will be declared inactive
      studio.clustering.heartbeatStale.timeLimit: 5
      # Cluster member after being inactive for amount of minutes will be removed from cluster
      studio.clustering.inactivity.timeLimit: 5

      # Cluster member registration, this registers *this* server into the pool
      # Cluster node registration data, remember to uncomment the next line
      studio.clustering.node.registration:
      #  This server's local address (reachable to other cluster members). You can also specify a different port by
      #  attaching :PORT to the adddress (e.g 192.168.1.200:2222)
      #  localAddress: ${env:CLUSTER_NODE_ADDRESS}
      #  Authentication type to access this server's local repository
      #  possible values
      #   - none (no authentication needed)
      #   - basic (username/password authentication)
      #   - key (ssh authentication)
       authenticationType: none
      #  Username to access this server's local repository
      #  username: user
      #  Password to access this server's local repository
      #  password: SuperSecurePassword
      #  Private key to access this server's local repository (multiline string)
      #  privateKey: |
      #    -----BEGIN PRIVATE KEY-----
      #    privateKey
      #    -----END PRIVATE KEY-----

   |

   Uncomment and leave the value of  **studio.clustering.node.registration.localAddress** as
   ``${env:CLUSTER_NODE_ADDRESS}`` (you will configure the node address in a later step), then configure the
   repository authentication:

   - **studio.clustering.node.registration.authenticationType**: authentication type to access this server's local
     repository
   - **studio.clustering.node.registration.username**: username to access this server's local repository
   - **studio.clustering.node.registration.password**: password to access this server's local repository
   - **studio.clustering.node.registration.privateKey**: private key to access this server's local repository
     (multiline string) when  using ``key`` as authentication type to access this server's local repository

   |

      .. note::
         You can use the node's default SSH keys, located in ``~/.ssh/id_rsa`` and ``~/.ssh/id_rsa.pub``, if you set
         the ``authenticationType`` to ``none``. You can also use ``~/.ssh/config`` if you need to configure certain
         aspects of SSH authentication, like ``StrictHostKeyChecking``. For example, you can disable
         ``StrictHostKeyChecking`` for hostnames with ``*.hostnamespace`` so that you don't need to validate the SSH host
         keys before running Studio:

         .. code-block:: none

            Host *.hostnamespace
                StrictHostKeyChecking no

   |
   |

   Configure the Hazelcast configuration file location in Studio, by uncommenting ``studio.hazelcast.config.location``.  You will create the Hazelcast configuration file in a later step.

   .. code-block:: yaml
      :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

      ##################################################
      ##                 Hazelcast                    ##
      ##################################################
      # Location of the Hazelcast config path (must be in YAML format)
      studio.hazelcast.config.location: classpath:crafter/studio/extension/hazelcast-config.yaml

   |
   |

   Configure the following times and locations. Leave the environment variables, e.g. ``${env:MARIADB_CLUSTER_NAME}``.  You can see the configuration of the environment variables in a later step.

   .. code-block:: yaml
      :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

      ##################################################
      ##                Studio DB Cluster             ##
      ##################################################
      # DB cluster library location
      # studio.db.cluster.lib.location: ${env:CRAFTER_BIN_DIR}/dbms/libs/galera/libgalera_smm.so
      # The path where the grastate.dat file resides
      studio.db.cluster.grastate.location: ${studio.db.dataPath}/grastate.dat
      # DB cluster name
      studio.db.cluster.name: ${env:MARIADB_CLUSTER_NAME}
      # Count for the number of Studio cluster members
      studio.db.cluster.nodes.count: ${env:MARIADB_CLUSTER_NODE_COUNT}
      # DB cluster address of the local node (which will be seen by other members of the cluster)
      studio.db.cluster.nodes.local.address: ${env:MARIADB_CLUSTER_NODE_ADDRESS}
      # DB cluster name of the local node (which will be seen by other members of the cluster)
      studio.db.cluster.nodes.local.name: ${env:MARIADB_CLUSTER_NODE_NAME}
      # Time in seconds when each Studio member of the DB cluster should report its status
      studio.db.cluster.nodes.status.report.period: 30
      # Time in seconds when each report of a DB member should expire (needs to be higher than the report period)
      studio.db.cluster.nodes.status.report.ttl: 60
      # Time in seconds before giving up on waiting for all cluster members to appear online on startup
      studio.db.cluster.nodes.startup.wait.timeout: 300
      #Time in seconds before giving up on waiting for cluster bootstrap to complete (at least a node is active,
      # which means the node is synced AND its Studio has finished starting up)
      studio.db.cluster.bootrap.wait.timeout: 180
      # Time in seconds before giving up on the local node to finish synching with the cluster
      studio.db.cluster.nodes.local.synced.wait.timeout: 180

   |


#. Configure the environment variables for the nodes in the ``crafter-setenv.sh`` file.

   .. code-block:: sh
      :caption: *bin/crafter-setenv.sh*

      # Uncomment to enable primary/replica clustering
      export SPRING_PROFILES_ACTIVE=crafter.studio.dbClusterPrimaryReplica
      ...

      # -------------------- Cluster variables -------------------
      export CLUSTER_NODE_ADDRESS=${CLUSTER_NODE_ADDRESS:="$(hostname -i)"}

      # -------------------- MariaDB Cluster variables --------------------
      export MARIADB_CLUSTER_NAME=${MARIADB_CLUSTER_NAME:="studio_db_cluster"}
      export MARIADB_CLUSTER_NODE_COUNT=${MARIADB_CLUSTER_NODE_COUNT:="2"}
      export MARIADB_CLUSTER_NODE_ADDRESS=${MARIADB_CLUSTER_NODE_ADDRESS:="$(hostname -i)"}
      export MARIADB_CLUSTER_NODE_NAME=${MARIADB_CLUSTER_NODE_NAME:="$(hostname)"}
      # Uncomment to enable primary/replica clustering
      # CRAFTER_DB_CLUSTER_SERVER_ID must have different value across cluster nodes. Value is numeric with range 1 to 4294967295

      IP="$CLUSTER_NODE_ADDRESS"

      OCTET_0=`expr match "$IP" '\([0-9]\+\)\..*'`
      OCTET_1=`expr match "$IP" '[0-9]\+\.\([0-9]\+\)\..*'`
      OCTET_2=`expr match "$IP" '[0-9]\+\.[0-9]\+\.\([0-9]\+\)\..*'`
      OCTET_3=`expr match "$IP" '[0-9]\+\.[0-9]\+\.[0-9]\+\.\([0-9]\+\)'`


      BIN=$(($((OCTET_0 * $((256**3))))+$((OCTET_1 * $((256**2))))+$((OCTET_2 * 256))+$((OCTET_3 * 1))))

      # CRAFTER_DB_CLUSTER_SERVER_ID must have different value across cluster nodes. Value is numeric with range 1 to 4294967295
      export CRAFTER_DB_CLUSTER_SERVER_ID=${CRAFTER_DB_CLUSTER_SERVER_ID:="$BIN"}
      # Cluster bin log base name for primary replica replication
      export CRAFTER_DB_CLUSTER_LOG_BASENAME=${CRAFTER_DB_CLUSTER_LOG_BASENAME:="crafter_cluster"}
      # Cluster wait interval for replica to be ready on startup
      export CRAFTER_DB_CLUSTER_REPLICA_READY_WAIT_INTERVAL=${CRAFTER_DB_CLUSTER_REPLICA_READY_WAIT_INTERVAL:="30000"}


   |

   where:

   - **SPRING_PROFILES_ACTIVE**: with the value ``crafter.studio.dbClusterPrimaryReplica``, enables primary/replica clustering
   - **CLUSTER_NODE_ADDRESS**: hostname or IP of the local node to be registered in the Git repository cluster, should
     be reachable to other cluster members.
   - **MARIADB_CLUSTER_NAME**: name of the MariaDB cluster.
   - **MARIADB_CLUSTER_NODE_COUNT**: the number of Studio nodes in the cluster.
   - **MARIADB_CLUSTER_NODE_ADDRESS**: hostname of IP of the local node to be registered to the MariaDB cluster, should
     be reachable to other cluster members.
   - **MARIADB_CLUSTER_NODE_NAME**: name of cluster node to be registered to the MariaDB cluster.

   |

#. Create a Hazelcast configuration file in ``shared/classes/crafter/studio/extension/hazelcast-config.yaml``.

   Studio uses Hazelcast as the in-memory distributed data store to orchestrate the bootstrapping of the MariaDB cluster.
   You can find more about Hazelcast in `<https://hazelcast.org/>`_ and its configuration in
   `<https://docs.hazelcast.org/docs/latest/manual/html-single/#understanding-configuration>`_.
   In this configuration file you specify the way the nodes discover each other in the Hazelcast cluster.

   We recommend you create a simple configuration in each node with the list of addresses of the cluster nodes:

   .. code-block:: yaml
      :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/hazelcast-config.yaml*

      hazelcast:
        network:
          join:
            multicast:
              enabled: false
            tcp-ip:
              enabled: true
              member-list:
                - 192.168.56.1
                - 192.168.56.114

   |

   If using Kubernetes, Studio also supports configuration through the
   `Kubernetes Hazelcast Plugin  <https://github.com/hazelcast/hazelcast-kubernetes>`_:

   .. code-block:: yaml
      :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/hazelcast-config.yaml*

      hazelcast:
        network:
          join:
            multicast:
              enabled: false
            kubernetes:
              enabled: true
              namespace: default
              service-name: authoring-service-headless
              resolve-not-ready-addresses: true

   |

      .. note::
         Please apply the ``rbac.yaml`` mentioned in the
         `Kubernetes Hazelcast Plugin  <https://github.com/hazelcast/hazelcast-kubernetes>`_ documentation
         in your Kubernetes cluster, before even starting any Studio pods.


---------------------------------
Starting the Nodes in the Cluster
---------------------------------

After finishing the node configurations, we are now ready to start the cluster. Please start the cluster nodes
in close succession, one after the other. If you take more than 5 minutes to start all the cluster nodes then
the nodes already running will timeout while trying to synchronize for bootstrapping (you can configure this
timeout in :ref:`studio-config-override.yaml <studio-configuration-files>`, under the property ``studio.db.cluster.nodes.startup.wait.timeout``).

To check that the cluster is up, you can inspect the ``$CRAFTER_HOME/logs/tomcat/catalina.out`` of the nodes for
the following entries:

- Primary starting up (one of the nodes):

  .. code-block:: none

    [INFO] 2022-01-28T18:07:54,009 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | Synchronizing startup of node 192.168.56.1 with DB cluster 'studio_db_cluster'
    28-Jan-2022 18:07:54.016 INFO [main] com.hazelcast.internal.partition.impl.PartitionStateManager.null [192.168.56.1]:5701 [dev] [4.2.4] Initializing cluster partition table arrangement...
    [INFO] 2022-01-28T18:07:54,178 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | Waiting for initial report of all 2 DB cluster members...

    ...

    [INFO] 2022-01-28T18:08:24,237 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | Waiting for initial report of all 2 DB cluster members...
    [INFO] 2022-01-28T18:08:54,241 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | All 2 DB cluster members have started up
    [ERROR] 2022-01-28T18:08:54,242 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] |

    DbPrimaryReplicaClusterMember {address='192.168.56.1', port='33306', name='192.168.56.1', status='null', timestamp=1643389674007, primary=false, file='null', position=0, replica=false, ioRunning='null', sqlRunning='null', secondsBehindMaster=9223372036854775807}


    [INFO] 2022-01-28T18:08:54,251 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | Local DB cluster node will start primary.
    [INFO] 2022-01-28T18:08:54,252 [main] [mariadb4j.DB] | Starting up the database...

  |

- Rest of the nodes:

  .. code-block:: none

    [INFO] 2022-01-28T18:08:28,078 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | Synchronizing startup of node 192.168.56.114 with DB cluster 'studio_db_cluster'
    [INFO] 2022-01-28T18:08:28,153 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | Waiting for initial report of all 2 DB cluster members...
    [INFO] 2022-01-28T18:08:58,167 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | All 2 DB cluster members have started up
    [ERROR] 2022-01-28T18:08:58,169 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] |

    DbPrimaryReplicaClusterMember {address='192.168.56.114', port='33306', name='192.168.56.114', status='null', timestamp=1643389708075, primary=false, file='null', position=0, replica=false, ioRunning='null', sqlRunning='null', secondsBehindMaster=9223372036854775807}


    [INFO] 2022-01-28T18:08:58,183 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | Waiting for primary to start...
    [INFO] 2022-01-28T18:09:28,195 [main] [cluster.DbPrimaryReplicaClusterSynchronizationServiceImpl] | primary started
    [INFO] 2022-01-28T18:09:28,202 [main] [mariadb4j.DB] | Starting up the database...

  |

You can also check that the cluster is working by logging into MariaDB with the ``mysql`` client from one of the Studio
nodes and verifying that your cluster size is 2:

#. From the command line in the server, go to ``$CRAFTER_HOME/bin/dbms/bin`` and run the ``mysql`` program

   .. code-block:: bash

      ./mysql -S /tmp/MariaDB4j.33306.sock

   |

#. Inside the MySQL client, run ``show status like 'wsrep_cluster_size'``:

   .. code-block:: none

      MariaDB [(none)]> show status like 'wsrep_cluster_size';
      +--------------------+-------+
      | Variable_name      | Value |
      +--------------------+-------+
      | wsrep_cluster_size | 2     |
      +--------------------+-------+
      1 row in set (0.001 sec)

   |
