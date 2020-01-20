:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Studio Clustering with an External Database

.. _clustering-with-external-db:

===========================================
Studio Clustering with an External Database
===========================================

This section describes how to configure Crafter Studio for clustering with an external shared database.  The configuration setup for one node or multiple nodes is the same.


.. image:: /_static/images/system-admin/studio-cluster.png
    :alt: Crafter CMS Authoring Clustering
    :width: 100%
    :align: center

In a Crafter Studio cluster, content is automatically synced to all the nodes registered.  This means that any node in the cluster will contain the same content as all the other nodes.  The nodes communicate with each other using a Git URL format configured in the ``studio-config-override.yaml`` file.  It is therefore a must to configure every node to announce itself to the cluster using the configuration files mentioned below to help the other nodes reach it and pull the content.

Please note that when a new node announces itself to the cluster, the new node will need some time to sync with the existing nodes.  Please allow time for all the nodes to sync, this can take a while for very large sites.

------------
Requirements
------------

Before we begin configuring Studio for clustering, the following must be setup:

#. An external `MariaDB <https://mariadb.org/>`_ database, such as `Amazon RDS for MariaDB <https://aws.amazon.com/rds/mariadb>`_ , `Azure Database for MariaDB <https://azure.microsoft.com/en-us/services/mariadb/>`_ or setup a server with MariaDB which can be downloaded `here <https://downloads.mariadb.org/>`_.  Crafter Studio only supports MariaDB 10.4 for the shared database when clustering, so remember to use the MariaDB 10.4 Series
#. A load balancer with sticky session support enabled

----------------
Clustering Setup
----------------

To setup your Crafter Studio to be part of a cluster, open the ``studio-config-overrides.yaml`` file (found in your Authoring installation, under ``bin/apache-tomcat/shared/classes/crafter/studio/extension``)

Below is a sample configuration containing the parameters used to setup a server with Crafter Studio installed for clustering with the MariaDB database on 192.168.1.1 and the Crafter Studio being added to the cluster on 192.168.1.18:


.. code-block:: yaml
    :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ##################################################
    ##                   Database                   ##
    ##################################################
    # Crafter Studio uses an embedded MariaDB by default
    # Crafter DB connection string
    studio.db.url: jdbc:mariadb://${env:MARIADB_HOST}:${env:MARIADB_PORT}/crafter?user=${env:MARIADB_USER}&password=${env:MARIADB_PASSWD}
    # Connection string used to initialize database. This creates the `crafter` schema, the `crafter` user and/or upgrades the database
    studio.db.initializer.url: jdbc:mariadb://${env:MARIADB_HOST}:${env:MARIADB_PORT}?user=${env:MARIADB_ROOT_USER}&password=${env:MARIADB_ROOT_PASSWD}
    # Connection string if using a database with an already created schema and user (like AWS RDS)
    # studio.db.initializer.url: ${studio.db.url}

    ...

    ##################################################
    ##                 Clustering                   ##
    ##################################################
    #-----------------------------------------------------------------------------
    # IMPORTANT: When enabling clustering, please specify the environment variable
    # SPRING_PROFILES_ACTIVE=crafter.studio.externalDb in your crafter-setenv.sh
    # (or Docker/Kubernetes env variables). This will stop studio from starting
    # its embedded DB.
    # -----------------------------------------------------------------------------

    # Cluster Git URL format for synching members.
    # - Typical SSH URL format: ssh://{username}@{localAddress}{absolutePath}
    # - Typical HTTPS URL format: https://{localAddress}/repos/sites
    studio.clustering.sync.urlFormat: https://{localAddress}/repos/sites

    # Cluster Syncers
    # Sandbox Sync Job interval in milliseconds which is how often to sync the work-area
    studio.clustering.sandboxSyncJob.interval: 2000
    # Published Sync Job interval in milliseconds which is how often to sync the published repos
    studio.clustering.publishedSyncJob.interval: 60000
    # Cluster member after heartbeat stale for amount of minutes will be declared inactive
    studio.clustering.heartbeatStale.timeLimit: 5
    # Cluster member after being inactive for amount of minutes will be removed from cluster
    studio.clustering.inactivity.timeLimit: 5

    # Cluster member registration, this registers *this* server into the pool
    # Cluster node registration data, remember to uncomment the next line
    studio.clustering.node.registration:
    #  this server's local address (reachable to other cluster members)
      localAddress: ${env:CLUSTER_NODE_ADDRESS}
    #  authentication type to access this server's local repository
    #  possible values
    #   - none (no authentication needed)
    #   - basic (username/password authentication)
    #   - key (ssh authentication)
      authenticationType: basic
    #  username to access this server's local repository
      username: user
    #  password to access this server's local repository
      password: SuperSecurePassword
    #  private key to access this server's local repository (multiline string)
    #  privateKey: |
    #    -----BEGIN PRIVATE KEY-----
    #    privateKey
    #    -----END PRIVATE KEY-----

|

where:

- **studio.clustering.sync.urlFormat**: Cluster Git URL format for syncing members (node communication)
                                        - Typical SSH URL format: ssh://{username}@{localAddress}{absolutePath}
                                        - Typical HTTPS URL format: https://{localAddress}/repos/sites
- **studio.clustering.node.registration.localAddress**: this server's local address (address reachable to other cluster members)
- **studio.clustering.node.registration.authenticationType**: authentication type to access this server's local repository
- **studio.clustering.node.registration.username**: username to access this server's local repository
- **studio.clustering.node.registration.password**: password to access this server's local repository
- **studio.clustering.node.registration.privateKey**: private key to access this server's local repository (multiline string) when using ``key`` as authentication type to access this server's local repository

Modify the values in the clustering section of your ``studio-config-overrides.yaml`` file with values from your setup and save the file.  You can also change the clustering section from the |mainMenu| **Main Menu** in Studio under ``Global Config``

Notice the environment variables used in the configuration above.  The next step is to setup those environment variables used above.  To setup the environment variables, open the ``crafter-setenv.sh`` file (found in your Authoring installation, under ``bin``) and modify the values of the variables listed below with values from your setup and save the file.  Remember to uncomment the ``SPRING_PROFILES_ACTIVE`` environment variable since we are using an external database.

.. code-block:: sh
   :caption: *bin/crafter-setenv.sh*
   :linenos:

   # -------------------- Spring Profiles --------------------
   # Uncomment to enable an external DB for Studio and stop the embedded DB
   export SPRING_PROFILES_ACTIVE=crafter.studio.externalDb

   .
   .
   .
   # -------------------- Hosts and ports --------------------
   export MARIADB_HOST=${MARIADB_HOST:="192.168.1.1"}
   export MARIADB_PORT=${MARIADB_PORT:="3306"}

   # -------------------- MariaDB variables ------------------
   export MARIADB_ROOT_PASSWD=${MARIADB_ROOT_PASSWD:=""}
   export MARIADB_USER=${MARIADB_USER:="crafter"}
   export MARIADB_PASSWD=${MARIADB_PASSWD:="crafter"}


   # -------------------- Clustering variables --------------------
   export CLUSTER_NODE_ADDRESS=${CLUSTER_NODE_ADDRESS:="192.168.1.18"}

|

where:

- **SPRING_PROFILES_ACTIVE**: stops the embedded DB and enables an external DB for Studio
- **MARIADB_HOST**: address where the external database used by the cluster is located
- **MARIADB_PORT**: port used for external database access
- **CLUSTER_NODE_ADDRESS**: address of Studio to be registered to the pool, address reachable to other cluster members (this server's local address)

After making all the necessary modifications, start Studio.  If there are existing nodes in the cluster, please allow some time for the newly setup node to sync with the other nodes in the cluster.


------------
Cluster Menu
------------

To view nodes in the cluster in your browser, click on **Main Menu** on the top right, then click on **Cluster** from the menu on the left.  In the image below, we have one node in the cluster with local address 192.168.1.18 and authentication type used is basic:

.. image:: /_static/images/system-admin/studio-cluster-1node.png
    :alt: Crafter CMS Authoring Cluster with One Node
    :width: 100%
    :align: center

As you start up new Crafter Studio nodes, they will automatically join the cluster, the **Cluster** menu will list them like below:

.. image:: /_static/images/system-admin/studio-cluster-2node.png
    :alt: Crafter CMS Authoring Cluster with Two Node
    :width: 100%
    :align: center

In the cluster screen, it also gives an indication whether a node is **ACTIVE** (healthy) or **INACTIVE** (not healthy).  When a node is **INACTIVE**, the user is given an option to delete the node from the cluster immediately, or it will be automatically removed in time.

.. image:: /_static/images/system-admin/studio-cluster-inactive-node.png
    :alt: Crafter CMS Authoring Cluster with an Inactive Node
    :width: 100%
    :align: center
