:is-up-to-date: False
:last-updated: 4.0.0

.. _newIa-system-admin-installation:

============
Installation
============

.. 6.2.1 Tuning Authoring
   6.2.2 Tuning Delivery
   6.2.3 Clustering

This section describes various ways of installing/setting up CrafterCMS and how to tune CrafterCMS


First we'll take a look at the requirements and supported platform for installing/setting up Crafter CMS

.. toctree::
   :maxdepth: 2

   /system-administrators/requirements-supported-platforms

Remember to change the default values pre-configured when installing Crafter CMS for a secure installation.
See :ref:`newIa-securing-your-crafter-cms-install` for more information.

CrafterCMS provides the following methods for setting up CrafterCMS depending on your environment
and in addition, instructions on setting up CrafterCMS using Crafter's AWS AMI,  clustering  and
deploying CrafterCMS in Kubernetes:


#. Development Environment

   The quick start guide provides instructions on setting up a development environment by installing Crafter CMS from the prebuilt binaries

   * :ref:`newIa-getting-started`

   To learn more about the developer workflow, see :ref:`newIa-devOps-workflow`.

#. Production Environment

   The guide below provides instructions on how to setup a production environment

   .. toctree::
      :maxdepth: 2

      production-environment-setup

#. Using Crafter's AWS AMI

   Setup Crafter CMS authoring and delivery using Crafter's AWS AMI.

   .. toctree::
      :maxdepth: 1

      authoring/setup-authoring-using-aws-ami
      delivery/setup-delivery-using-aws-ami

#. Clustering

   Setup Crafter Studio for high-availability via clustering

   * :ref:`newIa-clustering`

#. Deploying CrafterCMS in Kubernetes

   .. toctree::
      :maxdepth: 1

      kubernetes/index

----------------
Tuning Authoring
----------------
Below you'll find instructions how to enhance the authoring environment performance and how to
setup various things for your authoring install

.. toctree::
   :maxdepth: 1

   authoring/authoring-env-performance-tuning
   authoring/navigating-main-menu
   authoring/users-groups-management
   authoring/change-hosts-ports-on-your-auth-install
   authoring/staging
   authoring/sync-studio-database-with-repo

---------------
Tuning Delivery
---------------
Below you'll find instructions how to enhance the delivery environment performance and how to
setup various things for your delivery install

.. toctree::
   :maxdepth: 1

   delivery/delivery-env-performance-tuning
   delivery/change-hosts-ports-on-your-delivery-install
   delivery/configure-apache-vhost
   delivery/setup-site-for-delivery
   delivery/setup-serverless-site
   delivery/setup-serverless-delivery

----------
Clustering
----------

Here's some more information on setting up and configuring your cluster

.. toctree::
   :maxdepth: 1

   clustering/clustering
   clustering/changing-git-url-format-in-cluster
   clustering/studio-clustering-two-nodes



