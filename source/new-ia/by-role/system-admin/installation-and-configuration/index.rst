:is-up-to-date: False
:last-updated: 4.0.3
:nosearch:

.. _newIa-system-admin-installation:

==========================
Installation and Upgrading
==========================

This section describes various ways of installing/setting up CrafterCMS


First we'll take a look at the requirements and supported platform for installing/setting up CrafterCMS

.. toctree::
   :maxdepth: 2

   requirements-supported-platforms

Remember to change the default values pre-configured when installing CrafterCMS for a secure installation.
See :ref:`newIa-securing-your-crafter-cms-install` for more information.

CrafterCMS provides the following methods for setting up CrafterCMS depending on your environment
and in addition, instructions on setting up CrafterCMS using Crafter's AWS AMI,  clustering  and
deploying CrafterCMS in Kubernetes:

The quick start guide provides instructions on setting up a development environment by installing CrafterCMS from the prebuilt binaries

* :ref:`newIa-getting-started`

To learn more about the developer workflow, see :ref:`newIa-devContentOps`.

#. Using CrafterCMS bundles

   The guide below provides instructions on how to setup a production environment

   .. toctree::
      :maxdepth: 2

      production-environment-setup

#. Using Crafter's AWS AMI

   Setup CrafterCMS authoring and delivery using Crafter's AWS AMI.

   .. toctree::
      :maxdepth: 1

      authoring/setup-authoring-using-aws-ami
      delivery/setup-delivery-using-aws-ami

#. Deploying CrafterCMS in Kubernetes

   .. toctree::
      :maxdepth: 1

      kubernetes/index

.. configuration section

----------------
Tuning Authoring
----------------
Below you'll find instructions how to enhance the authoring environment performance and how to
setup various things for your authoring install

.. toctree::
   :maxdepth: 1

   ../performance-and-scaling/authoring-env-performance-tuning
   configuration/studio/navigating-main-menu
   configuration/studio/users-groups-management
   authoring/change-hosts-ports-on-your-auth-install
   configuration/studio/staging
   ../../developer/common/working-in-your-ide

---------------
Tuning Delivery
---------------
Below you'll find instructions how to enhance the delivery environment performance and how to
setup various things for your delivery install

.. toctree::
   :maxdepth: 1

   ../performance-and-scaling/delivery-env-performance-tuning
   delivery/change-hosts-ports-on-your-delivery-install
   delivery/setup-project-for-delivery
   delivery/setup-serverless-delivery

