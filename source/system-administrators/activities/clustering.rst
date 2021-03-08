:is-up-to-date: True

.. index:: Studio Clustering, Clustering, Auto-Clustering with Studio, Studio's Embedded Database Multi-master Cluster

.. _clustering:

==================================
Studio Clustering |enterpriseOnly|
==================================

Crafter Studio can be clustered for high-availability by having two Crafter Studio instances act like a single Crafter Studio to the end users. This requires the help of a Crafter Studio Arbiter.

.. image:: /_static/images/system-admin/studio-autoclustering.png
   :alt: Crafter CMS Auto-clustering of Studio Enterprise
   :width: 100%
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

* A load balancer with sticky session support enabled

-----------------------------
Configuring Studio Clustering
-----------------------------

First, we'll take a look at an example of how to setup a two node cluster with Studio and a Studio Arbiter step by step, then, we'll take a look at an example of setting up Studio clustering using a Kubernetes deployment

.. toctree::
   :maxdepth: 1

   studio-clustering-two-nodes-with-arbiter
   kubernetes/studio-clustering-with-kubernetes-deployment
