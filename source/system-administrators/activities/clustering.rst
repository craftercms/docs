:is-up-to-date: True

.. index:: Clustering

.. _clustering:

=================
Studio Clustering
=================

Any number of Crafter Studio instances can be clustered, where multiple servers, each with their own Crafter Studio installed, act like a single Crafter Studio to the end users.

Crafter Studio by default is not configured for clustering.  This section describes how to configure Crafter Studio for clustering.  The configuration setup for one node or multiple nodes is the same.


.. image:: /_static/images/system-admin/studio-cluster.png
    :alt: Crafter CMS Authoring Clustering
    :width: 100%
    :align: center


------------
Requirements
------------

Before we begin configuring Studio for clustering, the following must be setup:

#. An external `MariaDB <https://mariadb.org/>`_ database, such as `Amazon RDS for MariaDB <https://aws.amazon.com/rds/mariadb>`_ , `Azure Database for MariaDB <https://azure.microsoft.com/en-us/services/mariadb/>`_ or setup a server with MariaDB which can be downloaded `here <https://downloads.mariadb.org/>`_.  Crafter Studio only supports MariaDB 10.1 for the shared database when clustering, so remember to use the MariaDB 10.1 Series
#. A load balancer with sticky session support enabled

----------------
Clustering Setup
----------------

To setup your Crafter Studio to be part of a cluster, open the ``studio-config-overrides.yaml`` file (found in your Authoring installation, under ``bin/apache-tomcat/shared/classes/crafter/studio/extension``)

Below is a sample configuration to setup a server with Crafter Studio installed for clustering with the MariaDB database on 192.168.1.1 and the Crafter Studio being added to the cluster on 192.168.1.18:



.. code-block:: yaml
    :caption: bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml
    :linenos:

    ##################################################
    ##                 Clustering                   ##
    ##################################################
    #-----------------------------------------------------------------------------
    # IMPORTANT: When enabling clustering, please specify the environment variable
    # SPRING_PROFILES_ACTIVE=crafter.studio.externalDb in your crafter-setenv.sh
    # (or Docker/Kubernetes env variables). This will stop studio from starting
    # its embedded DB.
    # -----------------------------------------------------------------------------
    # Clustering requires an external (not embedded) database, configure it below
    # External MariaDB database connection string
    studio.db.url: jdbc:mariadb://${env:MARIADB_HOST}:${env:MARIADB_PORT}/crafter?user=${env:MARIADB_USER}&password=${env:MARIADB_PASSWD}
    # External MariaDB database connection string used to initialize database
    # - If using a database with an already created schema and user (like AWS RDS):
    # studio.db.initializer.url: ${studio.db.url}
    # - If using a an empty database with root access to it:
    studio.db.initializer.url: jdbc:mariadb://${env:MARIADB_HOST}:${env:MARIADB_PORT}?user=root&password=${env:MARIADB_ROOT_PASSWD}

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

Modify the values in the clustering section of your ``studio-config-overrides.yaml`` file with values from your setup and save the file.

Notice the environment variables used in the configuration above.  The next step is to setup those environment variables above.  To setup the environment variables, open the ``crafter-setenv.sh`` file (found in your Authoring installation, under ``bin``) and modify the values of the variables listed below with values from your setup and save the file.  Remember to uncomment the ``SPRING_PROFILES_ACTIVE`` environment variable since we are using an external database.

.. code-block:: sh
   :caption: bin/crafter-setenv.sh
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
   export MARIADB_ROOT_PASSWD=

   # -------------------- Clustering variables --------------------
   export MARIADB_USER="crafter"
   export MARIADB_PASSWD="crafter"
   export CLUSTER_NODE_ADDRESS=${CLUSTER_NODE_ADDRESS:="192.168.1.18"}

|

After making all the necessary modifications, start Studio.


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
