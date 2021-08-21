:is-up-to-date: True

.. _crafter-deployer-elasticsearch-configuration-guide:

=================================
Elasticsearch Configuration Guide
=================================

Crafter Deployer provides two ways to use Elasticsearch:

----------------------------
Single Elasticsearch Cluster
----------------------------

This is the most common configuration used, all operations will be performed on a single Elasticsearch cluster:

.. code-block:: yaml
  :linenos:
  :caption: Target configuration for a single Elasticsearch cluster

    target:
      search:
        elasticsearch:
          # Single cluster
          urls:
            - 'http://es-cluster-node-1:9200'
            - 'http://es-cluster-node-2:9200'

-------------------------------
Multiple Elasticsearch Clusters
-------------------------------

Using this configuration all read operations will be performed on one Elasticsearch cluster but write operations will
be performed on multiple Elasticsearch clusters:

.. code-block:: yaml
  :linenos:
  :caption: Target configuration for multiple Elasticsearch clusters

    target:
      search:
        elasticsearch:
          # Global auth, used for all clusters
          username: elastic
          password: passw0rd
          # Cluster for read operations
          readCluster:
            urls:
              - 'http://read-cluster-node-1:9200'
              - 'http://read-cluster-node-2:9200'
              # This cluster will use the global auth
          # Clusters for write operations
          writeClusters:
            - urls:
              - 'http://write-cluster-1-node-1:9200'
              - 'http://write-cluster-1-node-2:9200'
              # This cluster will use the global auth
            - urls:
              - 'http://write-cluster-2-node-1:9200'
              - 'http://write-cluster-2-node-2:9200'
              # Override the global auth for this cluster
              username: elastic2
              password: passw0rd2

-------------------
Configuration Files
-------------------

The Elasticsearch configuration can be changed in two places:

#.  Global configuration file ``$CRAFTER_HOME/bin/crafter-deployer/config/base-target.yaml``, this will be applied to
    all targets loaded.

#.  Individual target configuration file ``$CRAFTER_HOME/data/deployer/targets/{siteName}-{environment}.yaml``
