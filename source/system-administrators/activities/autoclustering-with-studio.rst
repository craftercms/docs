:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Auto-Clustering with Studio, Studio's Embedded Database Multi-master Cluster

.. _autoclustering-with-studio:

============================================
Auto-Clustering with Studio |enterpriseOnly|
============================================

.. warning::
   **This feature is still in beta**

In this section, we'll learn how to setup auto-clustering with Studio.

Crafter CMS supports auto-clustering using Studio's embedded database.

.. image:: /_static/images/system-admin/studio-autoclustering.png
    :alt: Crafter CMS Auto-clustering of Studio Enterprise
    :width: 100%
    :align: center

When setting up a Studio's embedded database multi-master cluster, a specific node needs to be started first as a reference point, then the rest of the nodes can join and form the cluster. This is known as cluster bootstrapping. Bootstrapping is the first step to introduce a database node as Primary Component, which others will see as a reference point to sync up with.

The Primary Component is a central concept on how to ensure that there is no opportunity for database inconsistency or divergence between the nodes in case of a network split.  The Primary Component is a set of nodes that communicate with each other over the network and contains majority of the nodes.  There's no Primary Component yet when starting up a cluster, hence the need to bootstap a node first.  The other nodes will then look for an existing Primary Component to join when started using a normal start.

There is no upper limit to the number of nodes that can be put in the cluster.  It's recommended that the cluster have at least three nodes, and have an odd number of nodes in the cluster to prevent the split brain problem.

Resources can sometimes be limited and the cluster will need to run with just two nodes.  The solution is to setup an arbitrator, which Crafter CMS provides using the ``Studio Arbiter``.  This arbitrator functions as an odd node, to avoid split-brain situations and it can also request a consistent application state snapshot, which is useful in making backups.

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
* If using an enterprise bundle Crafter CMS, ``Git`` is required by Crafter CMS and may need to be installed if not already installed in the server.
* Studio's embedded DB multi-master cluster requires the ``libssl1.0.0`` (or ``libssl1.0.2``) shared library.  Some Linux distros does not come with the library pre-installed and may need to be installed.

--------------------------------
Configuring Nodes in the Cluster
--------------------------------

#. Install the Enterprise build/bundle of Crafter CMS on all the nodes
#. Configure **repository clustering** for all nodes by configuring the following settings in the ``studio-config-overrides.yaml`` file

      .. code-block:: yaml
         :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

         # Cluster member registration, this registers *this* server into the pool
         # Cluster node registration data, remember to uncomment the next line
         studio.clustering.node.registration:
         #  This server's local address (reachable to other cluster members). You can also specify a different port by
         #  attaching :PORT to the adddress (e.g 192.168.1.200:2222)
           localAddress: ${env:CLUSTER_NODE_ADDRESS}
         #  Authentication type to access this server's local repository
         #  possible values
         #   - none (no authentication needed)
         #   - basic (username/password authentication)
         #   - key (ssh authentication)
           authenticationType: basic
         #  Username to access this server's local repository
           username: user
         #  Password to access this server's local repository
           password: SuperSecurePassword
         #  Private key to access this server's local repository (multiline string)
         #  privateKey: |
         #    -----BEGIN PRIVATE KEY-----
         #    privateKey
         #    -----END PRIVATE KEY-----

      |

   where:

   - **studio.clustering.node.registration.localAddress**: this server's local address (address reachable to other cluster members)
   - **studio.clustering.node.registration.authenticationType**: authentication type to access this server's local repository
   - **studio.clustering.node.registration.username**: username to access this server's local repository
   - **studio.clustering.node.registration.password**: password to access this server's local repository
   - **studio.clustering.node.registration.privateKey**: private key to access this server's local repository (multiline string) when using ``key`` as authentication type to access this server's local repository

   |

   Modify the values as shown above in the clustering section of your ``studio-config-overrides.yaml`` file with values from your setup and save the file.  You can also change the clustering section from the |mainMenu| **Main Menu** in Studio under ``Global Config``


#. Configure the environment variables for the nodes.  Pick a node to serve as the bootstrap node.  The address of the boostrap node will be the address of the *MARIADB_CLUSTER_ADDRESS*.

   **Configuration for the First Node**

   The next step is to configure a node for bootstrapping the cluster.  Pick a node for bootstrapping and configure the following environment variables in the ``crafter-setenv.sh`` file.

      .. code-block:: sh
          :caption: *bin/crafter-setenv.sh*

          export SPRING_PROFILES_ACTIVE=crafter.studio.studioDbNewCluster

          ...

          export CLUSTER_NODE_ADDRESS=${CLUSTER_NODE_ADDRESS:="192.168.1.100"}

          # -------------------- MariaDB Cluster variables --------------------
          export MARIADB_CLUSTER_ADDRESS=${MARIADB_CLUSTER_ADDRESS:="192.168.1.100"}
          export MARIADB_CLUSTER_NAME=${MARIADB_CLUSTER_NAME:="studiodb_cluster"}
          export MARIADB_CLUSTER_NODE_ADDRESS=${MARIADB_CLUSTER_NODE_ADDRESS:="192.168.1.100"}
          export MARIADB_CLUSTER_NODE_NAME=${MARIADB_CLUSTER_NODE_NAME:="studio_node_1"}

      |

   where:

   - **SPRING_PROFILES_ACTIVE**: enables auto clustering of embedded database, indicates whether this node is the bootstrap node
   - **CLUSTER_NODE_ADDRESS**: address of Studio to be registered to the pool, address reachable to other cluster members (this server's local address)
   - **MARIADB_CLUSTER_ADDRESS**: address where the MariaDB cluster is located
   - **MARIADB_CLUSTER_NAME**: name of the MariaDB cluster
   - **MARIADB_CLUSTER_NODE_ADDRESS**: address of cluster node to be registered to the MariaDB cluster
   - **MARIADB_CLUSTER_NODE_NAME**: name of cluster node to be registered to the MariaDB cluster

   |

   **Configuration for Additional Nodes**

   After configuring the bootstrap node, configure the following environment variables in the ``crafter-setenv.sh`` file of the remaining nodes.  Notice that for the rest of the nodes, the value of *SPRING_PROFILES_ACTIVE* is ``crafter.studio.studioDbClusterNode``.  For our example, we are setting up a two node cluster, so we'll only need to configure one node.

      .. code-block:: sh
          :caption: *bin/crafter-setenv.sh*

          export SPRING_PROFILES_ACTIVE=crafter.studio.studioDbClusterNode

          ...

          export CLUSTER_NODE_ADDRESS=${CLUSTER_NODE_ADDRESS:="192.168.1.103"}

          # -------------------- MariaDB Cluster variables --------------------
          export MARIADB_CLUSTER_ADDRESS=${MARIADB_CLUSTER_ADDRESS:="192.168.1.100"}
          export MARIADB_CLUSTER_NAME=${MARIADB_CLUSTER_NAME:="studiodb_cluster"}
          export MARIADB_CLUSTER_NODE_ADDRESS=${MARIADB_CLUSTER_NODE_ADDRESS:="192.168.1.103"}
          export MARIADB_CLUSTER_NODE_NAME=${MARIADB_CLUSTER_NODE_NAME:="studio_node_2"}

      |

   where:

   - **SPRING_PROFILES_ACTIVE**: enables clustering of embedded database, indicates whether this node is the bootstrap node
   - **CLUSTER_NODE_ADDRESS**: address of Studio to be registered to the pool, address reachable to other cluster members (this server's local address)
   - **MARIADB_CLUSTER_ADDRESS**: address where the MariaDB cluster is located
   - **MARIADB_CLUSTER_NAME**: name of the MariaDB cluster
   - **MARIADB_CLUSTER_NODE_ADDRESS**: address of cluster node to be registered to the MariaDB cluster
   - **MARIADB_CLUSTER_NODE_NAME**: name of cluster node to be registered to the MariaDB cluster

---------------------------------
Starting the Nodes in the Cluster
---------------------------------

After finishing the node configurations, we are now ready to start the cluster.

We'll need to start the node we selected for bootstrapping first to start the Primary Component.  From the above configurations, we will start the node with address ``192.168.1.100``, which is our bootstrap node, by running the startup script ``./gradlew start`` or ``./startup.sh`` depending on if you're using a Crafter CMS build or a bundle.  We'll need to wait until the node is up and running.

To check that your cluster is up, log into Studio's embedded database monitor and check the cluster size by running the following command:

   .. code-block:: mysql

      show status like 'wsrep_cluster_size';

   |

The output should show that there's one cluster:

   .. code-block:: none

      > show status like 'wsrep_cluster_size';
      +---------------------+-------+
      | Variable_name       | Value |
      +---------------------+-------+
      | wsrep_cluster_size  | 1     |
      +---------------------+-------+
      1 row in set (0.027 sec)

Once the bootstrap node is up and running, we can start the rest of the nodes by running the startup script ``./gradlew start`` or ``./startup.sh`` depending on if you're using a Crafter CMS build or a bundle.  For our example, we will be starting the node with address ``192.168.1.103``.   Once the second node is up, you can check the cluster size by logging into Studio's embedded database monitor and verify that your cluster size is now 2

   .. code-block:: none

      > show status like 'wsrep_cluster_size';
      +---------------------+-------+
      | Variable_name       | Value |
      +---------------------+-------+
      | wsrep_cluster_size  | 2     |
      +---------------------+-------+
      1 row in set (0.018 sec)

   |

You can also verify from Studio that there are two nodes in the cluster by clicking on the |mainMenu| then clicking on ``Cluster``

.. image:: /_static/images/system-admin/studio-auto-cluster-2node.png
    :alt: Crafter CMS Authoring Studio's Embedded DB Multi-master Cluster with Two Nodes
    :width: 100%
    :align: center

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
   - ``CLUSTER_ADDRESS``: The address of the cluster to join
   
   |

   .. code-block:: bash
      :caption: Example configuration for the Studio Arbiter

      # Studio Arbiter configuration
      export CLUSTER_NAME=studiodb_cluster
      export CLUSTER_ADDRESS=192.168.1.100
      
   |

#. Run the arbiter ``java -jar studio-arbiter.jar``.  To check that the arbiter is running and part of the 
   cluster, you can check the cluster size by logging into the MariaDB monitor of one of the Studio nodes and verify 
   that your cluster size is now 3

   .. code-block:: none

      > show status like 'wsrep_cluster_size';
      +---------------------+-------+
      | Variable_name       | Value |
      +---------------------+-------+
      | wsrep_cluster_size  | 3     |
      +---------------------+-------+
      1 row in set (0.027 sec)

   |
