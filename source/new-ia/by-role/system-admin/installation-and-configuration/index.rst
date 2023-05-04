:is-up-to-date: False
:last-updated: 4.0.3
:nosearch:

.. _newIa-system-admin-installation-and-configuration:

==============================
Installation and Configuration
==============================

This section describes various ways of installing and configuring CrafterCMS.

First we'll take a look at the requirements and supported platform for installing/setting up CrafterCMS.

.. _newia-requirements_supported_platforms:

.. include:: /new-ia/includes/requirements.rst

.. raw:: html

   <hr>

.. _newIa-installation:

------------
Installation
------------

CrafterCMS provides the following methods for installation depending on your environment. There are various installation methods:

- Docker
- Kubernetes
- AWS AMI
- Binary Bundles
- Build from Source

We'll go through these one by one.

^^^^^^
Docker
^^^^^^

Run CrafterCMS in :ref:`Docker <newIa-running-craftercms-in-docker>`.

^^^^^^^^^^
Kubernetes
^^^^^^^^^^

Deploy CrafterCMS in Kubernetes.

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

CrafterCMS is open source and you can always build and run it from source code `here <https://github.com/craftercms/craftercms>`__

.. raw:: html

   <hr>

-------------
Configuration
-------------

Credentials may be required in some configurations. For more information on how to manage/encode your secrets such as
AWS credentials, please see :ref:`newIa-managing-secrets`

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

:ref:`newIa-nav-menu-global-config`

.. TODO Add configuration tasks below detailing how to accomplish that task with references to the relevant configuration files
