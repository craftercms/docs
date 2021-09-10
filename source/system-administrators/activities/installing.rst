:is-up-to-date: True

.. index:: Prerequisites, Verifying Prerequisites, Installing Prerequisites

.. _installing:

==========
Installing
==========

This section describes various ways of installing/setting up Crafter CMS.


First we'll take a look at the requirements and supported platform for installing/setting up Crafter CMS

.. toctree::
   :maxdepth: 2

   /system-administrators/requirements-supported-platforms

Remember to change the default values pre-configured when installing Crafter CMS for a secure installation.  See :ref:`securing-your-crafter-cms-install` for more information.

-----------------------
Development Environment
-----------------------

The quick start guide provides instructions on setting up a development environment by installing Crafter CMS from the archive download or installing Crafter CMS from archive built by the Gradle environment builder

* :ref:`installing-crafter-cms-from-archive-download`
* :ref:`installing-craftercms-from-gradle`

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