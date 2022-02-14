:is-up-to-date: False

.. _newIa-system-admin-installation:

============
Installation
============

.. 6.2.1 Tuning Authoring
   6.2.2 Tuning Delivery
   6.2.3 Clustering

This section describes various ways of installing/setting up Crafter CMS,


First we'll take a look at the requirements and supported platform for installing/setting up Crafter CMS

.. toctree::
   :maxdepth: 2

   /system-administrators/requirements-supported-platforms

Remember to change the default values pre-configured when installing Crafter CMS for a secure installation.  See :ref:`newIa-securing-your-crafter-cms-install` for more information.

-----------------------
Development Environment
-----------------------

The quick start guide provides instructions on setting up a development environment by installing Crafter CMS from the prebuilt binaries

* :ref:`installing-crafter-cms-from-prebuilt-binaries`

To learn more about the developer workflow, see :ref:`devOps-workflow`.

----------------------
Production Environment
----------------------

The guide below provides instructions on how to setup a production environment

.. toctree::
   :maxdepth: 2

   production-environment-setup

-----------------------
Using Crafter's AWS AMI
-----------------------

Setup Crafter CMS authoring and delivery using Crafter's AWS AMI.

.. toctree::
   :maxdepth: 1

   authoring/setup-authoring-using-aws-ami
   delivery/setup-delivery-using-aws-ami