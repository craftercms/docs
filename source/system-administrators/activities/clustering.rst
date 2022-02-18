:is-up-to-date: True

.. index:: Studio Clustering, Clustering

.. _clustering:

==================================
Studio Clustering |enterpriseOnly|
==================================

Crafter Studio can be clustered for high-availability. Two Crafter Studio instances are clustered as primary and secondary along with a Crafter Studio Arbiter to act as arbitrator.

.. image:: /_static/images/system-admin/studio-enterprise-clustering.png
   :alt: CrafterCMS - Studio Enterprise Clustering
   :width: 60%
   :align: center

|

When setting up a Studio cluster, a specific node needs to be started first as a
reference point, then the other nodes (Studio and/or Arbiter) can join and form the cluster. This is known as cluster bootstrapping.
Bootstrapping is the first step to introduce a node as Primary Component, which others will see as a reference
point to sync up with.

The Primary Component is a central concept on how to ensure that there is no opportunity for database inconsistency or
divergence between the nodes in case of a network split. The Primary Component is a set of nodes that communicate
with each other over the network and contains the majority of the nodes. There's no Primary Component yet when starting
up a cluster, hence the need of the first node to bootstrap the Component. The other nodes will then look for the
existing Primary Component to join.

   .. note::
      Studio nodes use an in-memory distributed data store to orchestrate the bootstrapping of the Primary Component, so
      you don't need to do it. When the cluster is started, the nodes synchronize through the data store to
      decide which one does the bootstrapping, and then the rest join the Primary Component.

The cluster must have three nodes, two Studios and one ``Studio Arbiter``. This arbitrator functions as an odd node, to
avoid split-brain situations and it can also provide a consistent application state snapshot, which is useful in
making backups.

------------
Requirements
------------

Before we begin configuring Studio for clustering, the following must be setup:

* A DNS server directing traffic to the primary node, and can failover to the secondary node if the primary is not healthy

-----------------------------
Configuring Studio Clustering
-----------------------------

First, we'll take a look at an example of how to setup a two node cluster with Studio and a Studio Arbiter step by step, then, we'll take a look at an example of setting up Studio clustering using a Kubernetes deployment

.. toctree::
   :maxdepth: 1

   clustering/studio-clustering-two-nodes-with-arbiter
   kubernetes/studio-clustering-with-kubernetes-deployment


-------
How-tos
-------

.. toctree::
   :maxdepth: 1

   clustering/changing-git-url-format-in-cluster
