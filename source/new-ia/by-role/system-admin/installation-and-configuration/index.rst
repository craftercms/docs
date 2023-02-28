:is-up-to-date: False
:last-updated: 4.0.3
:nosearch:

.. _newIa-system-admin-installation-and-configuration:

============
Installation
============

This section describes various ways of installing and configuring up CrafterCMS.

First we'll take a look at the requirements and supported platform for installing/setting up CrafterCMS

------------
Requirements
------------

To run CrafterCMS, the following are required:

    - Java 11
    - 8+ Gig of memory to JVM (additional memory may be required depending on the size and number of your web experiences)
    - Git 2.20.1 and later

Please note that CrafterCMS does not require any external databases for the core system to run and deliver fully dynamic experiences.  MongoDB is used by Crafter Profile and Crafter Social which are optional components that provide user management and social features.

-------------------
Supported Platforms
-------------------

^^^^^^^^^^^^^^^^^^^
OS (All components)
^^^^^^^^^^^^^^^^^^^

The following Operating Systems are supported (64Bit only for all OSs)

    - Linux (Ubuntu, RHEL)
    - macOS (10.12 and later)
    - Windows via WSL

^^^^^^^^^^^^^^^^^^^^^
JVMs (All components)
^^^^^^^^^^^^^^^^^^^^^

The following JVMs are supported:

    - OpenJDK 11
    - Oracle JDK (HotSpot) 11

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Browsers (Crafter Studio & Crafter Social/Profile Admin Consoles)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The following browsers are supported:

    - Chrome and Chromium-based Browsers
    - Firefox
    - MS Edge

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

=============
Configuration
=============

---------------------
Securing Your Install
---------------------
Remember to change the default values pre-configured when installing CrafterCMS for a secure installation.
See :ref:`newIa-securing-your-crafter-cms-install` for more information.

---------
Authoring
---------
Below you'll find instructions how to enhance the authoring environment performance and how to
setup various things for your authoring install

.. toctree::
   :maxdepth: 1

   authoring/change-hosts-ports-on-your-auth-install
   configuration/studio/navigating-main-menu
   configuration/studio/users-groups-management
   ../../common/staging

--------
Delivery
--------
Below you'll find instructions how to enhance the delivery environment performance and how to
setup various things for your delivery install

.. toctree::
   :maxdepth: 1

   delivery/change-hosts-ports-on-your-delivery-install
   delivery/setup-project-for-delivery
   delivery/setup-serverless-delivery

------------------------
Additional Configuration
------------------------
^^^^^^^
Logging
^^^^^^^
"""""""""""""""""
Change Log Levels
"""""""""""""""""
:ref:`newIa-override-logging-levels`

"""""""""""""""""""
Change Log Location
"""""""""""""""""""
:ref:`newIa-change-log-data-folder-location`

^^^^^^^^^
Main Menu
^^^^^^^^^
.. TODO explain why would one want to edit this
:ref:`newIa-main-menu-config`

.. TODO Add configuration tasks below detailing how to accomplish that task with references to the relevant configuration files
