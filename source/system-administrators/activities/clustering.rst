:is-up-to-date: True

.. index:: Studio Clustering, Clustering

.. _clustering:

=================
Studio Clustering
=================

Any number of Crafter Studio instances can be clustered, where multiple servers, each with their own Crafter Studio installed, act like a single Crafter Studio to the end users.

------------
Requirements
------------

Before we begin configuring Studio for clustering, the following must be setup:

* A load balancer with sticky session support enabled

-----------------------------
Configuring Studio Clustering
-----------------------------

Crafter CMS provides two ways of setting up Studio clustering:

* :ref:`Crafter CMS Auto-clustering of Studio Enterprise<autoclustering-with-studio-and-galera>`
* :ref:`Crafter CMS Studio clustering using an external database<clustering-with-external-db>`
