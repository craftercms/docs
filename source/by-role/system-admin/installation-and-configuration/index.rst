:is-up-to-date: False
:last-updated: 4.0.3

.. _system-admin-installation-and-configuration:

==============================
Installation and Configuration
==============================
.. contents::
    :local:
    :depth: 2

This section describes the various ways of installing and configuring CrafterCMS.

First we'll take a look at the requirements and supported platform for installing and setting up CrafterCMS.

.. _requirements_supported_platforms:

.. include:: /includes/requirements.rst

|hr|

.. _installation:

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

Run CrafterCMS in :ref:`Docker <running-craftercms-in-docker>`.

^^^^^^^^^^
Kubernetes
^^^^^^^^^^
Follow the :ref:`deploying-craftercms-in-kubernetes` article to learn how CrafterCMS deploys in Kubernetes.

^^^^^^^
AWS AMI
^^^^^^^
Follow the :ref:`run-using-aws-ami` to setup CrafterCMS authoring and delivery using Crafter's AWS AMIs.

^^^^^^^^^^^^^^
Binary Bundles
^^^^^^^^^^^^^^
CrafterCMS provides pre-built bundles for Linux, MacOS x86 and ARM. The guide below provides instructions on how to setup a production environment.

   .. toctree::
      :maxdepth: 2

      install-from-bundle

^^^^^^^^^^^^^^^^^
Build from Source
^^^^^^^^^^^^^^^^^

CrafterCMS is open source and you can always build and run it from source code `here <https://github.com/craftercms/craftercms>`__

|hr|

-------------
Configuration
-------------

Credentials may be required in some configurations. For more information on how to manage/encode your secrets such as
AWS credentials, please see :ref:`managing-secrets`

^^^^^^^^^^^^^^^^^^^^^
Securing Your Install
^^^^^^^^^^^^^^^^^^^^^
Remember to change the default values pre-configured when installing CrafterCMS for a secure installation.
See :ref:`change-the-defaults` for more information.

^^^^^^^^^
Authoring
^^^^^^^^^
In this section you'll find instructions how to enhance the authoring environment performance and how to
setup various things for your authoring install.

To change hosts and ports in your authoring install, see :ref:`authoring-environment-installation-hosts-and-ports`

.. toctree::
   :maxdepth: 1

   configuration/studio/navigating-main-menu
   configuration/studio/users-groups-management
   ../../common/staging

^^^^^^^^
Delivery
^^^^^^^^
In this section you'll find instructions how to enhance the delivery environment performance and how to
setup various things for your delivery install.

To change hosts and ports in your delivery install, see :ref:`delivery-environment-installation-hosts-and-ports`

.. toctree::
   :maxdepth: 1

   delivery/setup-project-for-delivery
   delivery/setup-serverless-delivery

^^^^^^^^^^^^^^^^^^^^^^^^
Additional Configuration
^^^^^^^^^^^^^^^^^^^^^^^^
"""""""
Logging
"""""""
Learn more about :ref:`logging`.

"""""""""
Main Menu
"""""""""
.. TODO explain why would one want to edit this

:ref:`nav-menu-global-config`

.. TODO Add configuration tasks below detailing how to accomplish that task with references to the relevant configuration files
