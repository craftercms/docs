:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Auto-Clustering with Studio, Studio's Embedded Database Multi-master Cluster

.. _autoclustering-with-studio:

============================================
Auto-Clustering with Studio |enterpriseOnly|
============================================


In this section, we'll learn how to setup auto-clustering with Studio.

Crafter CMS supports auto-clustering using Studio's embedded database.

.. image:: /_static/images/system-admin/studio-autoclustering.png
   :alt: Crafter CMS Auto-clustering of Studio Enterprise
   :width: 100%
   :align: center

When setting up a Studio's embedded database multi-master cluster, a specific node needs to be started first as a 
reference point, then the rest of the nodes can join and form the cluster. This is known as cluster bootstrapping. 
Bootstrapping is the first step to introduce a database node as Primary Component, which others will see as a reference 
point to sync up with.

The Primary Component is a central concept on how to ensure that there is no opportunity for database inconsistency or 
divergence between the nodes in case of a network split. The Primary Component is a set of nodes that communicate 
with each other over the network and contains the majority of the nodes. There's no Primary Component yet when starting 
up a cluster, hence the need of the first node to bootstrap the Component. The other nodes will then look for the 
existing Primary Component to join.

.. note:: 
   Studio nodes use an in-memory distributed data store to orchestrate the bootstrapping of the Primary Component, so 
   you don't need to do it. Basically, when the cluster is started, the nodes synchronize through the data store to 
   decide which one does the bootstrapping, and then the rest join the Primary Component.

|

There is no upper limit to the number of nodes that can be put in the cluster. It's recommended that the cluster have 
at least three nodes, and have an odd number of nodes in the cluster to prevent the split brain problem.

Resources can sometimes be limited and the cluster will need to run with just two nodes. The solution is to setup an 
arbitrator, which Crafter CMS provides using the ``Studio Arbiter``. This arbitrator functions as an odd node, to 
avoid split-brain situations and it can also request a consistent application state snapshot, which is useful in 
making backups.

Let's take a look at an example of how to setup a two node cluster with Studio and a Studio Arbiter.

To setup a two node cluster with Studio's embedded DB we'll need to do the following:

#. Configure Nodes in the Cluster
#. Start the Nodes in the Cluster
#. Setup and Run the Studio Arbiter

------------
Requirements
------------

* At least 3 servers running Linux (Remember that Studio's embedded DB multi-master cluster runs only in Linux)
* Enterprise build/bundle of Crafter CMS
* If using an enterprise bundle Crafter CMS, ``Git`` is required by Crafter CMS and may need to be installed if not 
  already installed in the server.
* Studio's embedded DB multi-master cluster requires the ``libssl1.0.0`` (or ``libssl1.0.2``) shared library. 
  Some Linux distros does not come with the library pre-installed and may need to be installed.

--------------------------------
Configuring Nodes in the Cluster
--------------------------------

#. Install the Enterprise build/bundle of Crafter CMS on all the nodes
#. Configure the Git **repository clustering** for all nodes by configuring the following settings in the 
   ``studio-config-overrides.yaml`` file.

   .. code-block:: yaml
      :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

      # Cluster member registration, this registers *this* server into the pool
      # Cluster node registration data, remember to uncomment the next line
      # studio.clustering.node.registration:
      #  This server's local address (reachable to other cluster members). You can also specify a different port by 
      #  attaching :PORT to the adddress (e.g 192.168.1.200:2222)
      #  localAddress: ${env:CLUSTER_NODE_ADDRESS}
      #  Authentication type to access this server's local repository
      #  possible values
      #   - none (no authentication needed)
      #   - basic (username/password authentication)
      #   - key (ssh authentication)
      #  authenticationType: none
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

#. Configure the environment variables for the nodes in the ``crafter-setenv.sh`` file.

   .. code-block:: sh
      :caption: *bin/crafter-setenv.sh*

      export SPRING_PROFILES_ACTIVE=crafter.studio.dbCluster

      ...

      export CLUSTER_NODE_ADDRESS=${CLUSTER_NODE_ADDRESS:="192.168.1.100"}

      # --------------------------------- MariaDB Cluster variables --------------------------------
      export MARIADB_CLUSTER_NAME=${MARIADB_CLUSTER_NAME:="studio_db_cluster"}
      export MARIADB_CLUSTER_NODE_COUNT=${MARIADB_CLUSTER_NODE_COUNT:="2"}
      export MARIADB_CLUSTER_NODE_ADDRESS=${MARIADB_CLUSTER_NODE_ADDRESS:="192.168.1.100"}
      export MARIADB_CLUSTER_NODE_NAME=${MARIADB_CLUSTER_NODE_NAME:="node1"}

   |

   where:

   - **SPRING_PROFILES_ACTIVE**: with the value ``crafter.studio.dbCluster``, enables auto clustering of the embedded 
     database.
   - **CLUSTER_NODE_ADDRESS**: hostname or IP of the local node to be registered in the Git repository cluster, should 
     be reachable to other cluster members.
   - **MARIADB_CLUSTER_NAME**: name of the MariaDB cluster.
   - **MARIADB_CLUSTER_NODE_COUNT**: the number of Studio nodes in the cluster. The Studio Arbiter node is not included
     in the count.
   - **MARIADB_CLUSTER_NODE_ADDRESS**: hostname of IP of the local node to be registered to the MariaDB cluster, should 
     be reachable to other cluster members.
   - **MARIADB_CLUSTER_NODE_NAME**: name of cluster node to be registered to the MariaDB cluster.

   |

#. Create a Hazelcast configuration file in ``shared/classes/crafter/studio/extension/hazelcast-config.yaml``. Studio
   uses Hazelcast as the in-memory distributed data store to orchestrate the bootstrapping of the MariaDB cluster. 
   You can find more about Hazelcast in `<https://hazelcast.org/>`_ and its configuration in
   `<https://docs.hazelcast.org/docs/latest/manual/html-single/#understanding-configuration>`_,
   but basically in this configuration file you specify the way the nodes discover each other in the Hazelcast cluster.
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
                - 192.168.1.100
                - 192.168.1.101

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

   |

---------------------------------
Starting the Nodes in the Cluster
---------------------------------

After finishing the node configurations, we are now ready to start the cluster. Please start the cluster nodes
in close succession, one after the other. If you take more than 5 minutes to start all the cluster nodes then
the nodes already running will timeout while trying to synchronize for bootstrapping (you can configure this
timeout in ``studio-config-override.yaml``, under the property ``studio.db.cluster.nodes.startup.wait.timeout``).

To check that the cluster is up, you can inspect the ``$CRFATER_HOME/logs/tomcat/catalina.out`` of the nodes for 
the following entries:

- Bootstrap of the DB cluster (one of the nodes):

  .. code-block:: none

    [INFO] 2020-04-08T18:00:06,140 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Synchronizing startup of node 192.168.28.251 with DB cluster 'studio_db_cluster' 
    [INFO] 2020-04-08T18:00:06,192 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | All 2 DB cluster members have started up 
    [INFO] 2020-04-08T18:00:06,218 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | DB cluster is new. This node will bootstrap the cluster 
    [INFO] 2020-04-08T18:00:06,220 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Local DB cluster node will bootstrap cluster

    ...

    [INFO] 2020-04-08T18:00:06,524 [localhost-startStop-1] [mariadb4j.DB] | Database startup complete. 
    [INFO] 2020-04-08T18:00:06,615 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Local DB cluster node is synced

    ...
  
    [INFO] 2020-04-08T18:00:11,915 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Context refreshed. Status of DB cluster node will switch to 'Active'

  |

- Rest of the nodes joining the cluster:

  .. code-block:: none

    [INFO] 2020-04-08T17:59:59,026 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Synchronizing startup of node 192.168.10.29 with DB cluster 'studio_db_cluster'
    [INFO] 2020-04-08T17:59:59,459 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Waiting for initial report of all 2 DB cluster members... 
    [INFO] 2020-04-08T18:00:29,466 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | All 2 DB cluster members have started up 
    [INFO] 2020-04-08T18:00:29,492 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | This DB cluster node is new, and cluster is already being bootstrapped by another node 
    [INFO] 2020-04-08T18:00:29,495 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Waiting for DB cluster to bootstrap... 
    [INFO] 2020-04-08T18:00:59,499 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | DB cluster bootstrapped 
    [INFO] 2020-04-08T18:00:59,501 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Local DB cluster node will join cluster gcomm://192.168.28.251 

    ...

    [INFO] 2020-04-08T18:01:04,063 [localhost-startStop-1] [mariadb4j.DB] | Database startup complete. 
    [INFO] 2020-04-08T18:01:04,165 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Local DB cluster node is synced 

    ...
  
    [INFO] 2020-04-08T18:01:09,266 [localhost-startStop-1] [cluster.DbClusterSynchronizationServiceImpl] | Context refreshed. Status of DB cluster node will switch to 'Active' 

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

------------------------
Setup the Studio Arbiter
------------------------

Whenever the number of Studios in the cluster is an even number, the Studio Arbiter needs to be started.
To setup the Studio Arbiter:

.. note:: Studio Arbiter can't run on any authoring server because it needs to use the same ports that Studio uses.
          |

#. Copy the Studio Arbiter executable to a new server, the file is located at:

   ``$CRAFTER_HOME/bin/studio-arbiter/studio-arbiter.jar``

#. Configure the Arbiter by setting the following environment variables:

   - ``CLUSTER_NAME``: The name of the cluster to join
   - ``CLUSTER_ADDRESS``: The address of the cluster to join (comma-separated list of IP or hostnames)
   
   |

   .. code-block:: bash
      :caption: Example configuration for the Studio Arbiter

      # Studio Arbiter configuration
      export CLUSTER_NAME=studio_db_cluster
      export CLUSTER_ADDRESS=192.168.1.100,192.168.1.101
      
   |

#. Run the arbiter ``java -jar studio-arbiter.jar``. To check that the arbiter is running and part of the 
   cluster, you can check the cluster size by logging into MariaDB from one of the Studio nodes and verify 
   that your cluster size is now 3:

   #. From the command line in the server, go to ``$CRAFTER_HOME/bin/dbms/bin`` and run the ``mysql`` program

   .. code-block:: bash

      ./mysql -S /tmp/MariaDB4j.33306.sock

   |

   #. Inside the MySQL client, run ``show status like 'wsrep_cluster_size'``:

   .. code-block:: none

      MariaDB [(none)]> show status like 'wsrep_cluster_size';
      +---------------------+-------+
      | Variable_name       | Value |
      +---------------------+-------+
      | wsrep_cluster_size  | 3     |
      +---------------------+-------+
      1 row in set (0.000 sec)

   |
