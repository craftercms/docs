:is-up-to-date: False
:last-updated: 4.0.3
:nosearch:

.. _newIa-system-admin-installation-and-configuration:

==============================
Installation and Configuration
==============================

This section describes various ways of installing and configuring up CrafterCMS.

First we'll take a look at the requirements and supported platform for installing/setting up CrafterCMS.

.. include:: /new-ia/includes/requirements.rst

------------
Installation
------------

CrafterCMS provides the following methods for installation depending on your environment. There are three main installation methods:
- Docker
- Kubernetes
- AWS AMI
- Binary Bundles
- Build from Source

We'll go through these one by one.

^^^^^^
Docker
^^^^^^

Run CrafterCMS in Docker.

.. TODO Vita to populate

^^^^^^^^^^
Kubernetes
^^^^^^^^^^

Deploying CrafterCMS in Kubernetes.

.. toctree::
  :maxdepth: 1

  kubernetes/index

^^^^^^^
AWS AMI
^^^^^^^

Setup CrafterCMS authoring and delivery using Crafter's AWS AMI.

.. toctree::
  :maxdepth: 1

  authoring/setup-authoring-using-aws-ami
  delivery/setup-delivery-using-aws-ami


^^^^^^^^^^^^^^
Binary Bundles
^^^^^^^^^^^^^^

CrafterCMS provides pre-built bundles for Linux, MacOS x86 and ARM. The guide below provides instructions on how to setup a production environment.

   .. toctree::
      :maxdepth: 2

      production-environment-setup

^^^^^^^^^^^^^^^^^
Build from Source
^^^^^^^^^^^^^^^^^

CrafterCMS is open source and you can always build and run it from source code.

.. TODO Vita to populate/link to the parent project.

-------------
Configuration
-------------

^^^^^^^^^^^^^^^^^^^^^
Securing Your Install
^^^^^^^^^^^^^^^^^^^^^
Remember to change the default values pre-configured when installing CrafterCMS for a secure installation.
See :ref:`newIa-securing-your-crafter-cms-install` for more information.

^^^^^^^^^
Authoring
^^^^^^^^^
Below you'll find instructions how to enhance the authoring environment performance and how to
setup various things for your authoring install

.. toctree::
   :maxdepth: 1

   authoring/change-hosts-ports-on-your-auth-install
   configuration/studio/navigating-main-menu
   configuration/studio/users-groups-management
   ../../common/staging

^^^^^^^^
Delivery
^^^^^^^^
Below you'll find instructions how to enhance the delivery environment performance and how to
setup various things for your delivery install

.. toctree::
   :maxdepth: 1

   delivery/change-hosts-ports-on-your-delivery-install
   delivery/setup-project-for-delivery
   delivery/setup-serverless-delivery

^^^^^^^^^^^^^^^^^^^^^^^^
Additional Configuration
^^^^^^^^^^^^^^^^^^^^^^^^
"""""""
Logging
"""""""
Learn more about :ref:`newIa-logging`.

"""""""""
Main Menu
"""""""""
.. TODO explain why would one want to edit this

:ref:`newIa-main-menu-config`

.. TODO Add configuration tasks below detailing how to accomplish that task with references to the relevant configuration files
