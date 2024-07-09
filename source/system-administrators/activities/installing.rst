:is-up-to-date: True

.. index:: Prerequisites, Verifying Prerequisites, Installing Prerequisites

.. _installing:

==========
Installing
==========

This section describes various ways of installing/setting up CrafterCMS.


First we'll take a look at the requirements and supported platform for installing/setting up CrafterCMS

.. toctree::
   :maxdepth: 2

   /system-administrators/requirements-supported-platforms

Remember to change the default values pre-configured when installing CrafterCMS for a secure installation.  See :ref:`securing-your-crafter-cms-install` for more information.

-----------------------
Development Environment
-----------------------

The quick start guide provides instructions on setting up a development environment by installing CrafterCMS from the prebuilt binaries

* :ref:`installing-crafter-cms-from-prebuilt-binaries`

To learn more about the developer workflow, see :ref:`devcontentops`.

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

Setup CrafterCMS authoring and delivery using Crafter's AWS AMI.

.. toctree::
   :maxdepth: 1

   authoring/setup-authoring-using-aws-ami
   delivery/setup-delivery-using-aws-ami

------------
Using Docker
------------
^^^^^^^^^^^^^^
Docker Compose
^^^^^^^^^^^^^^
Follow the instructions :ref:`here <running-craftercms-in-docker>` to run CrafterCMS in a Docker container

^^^^^^
Images
^^^^^^
CrafterCMS provides Docker images on `dockerhub <https://hub.docker.com/u/craftercms>`__ for the latest release versions
and snapshots of versions in development. The CrafterCMS Docker images may be pulled by using the tag for a release
version, e.g. ``craftercms/authoring_tomcat:4.0.7``, the latest release, e.g. ``craftercms/authoring_tomcat:latest``
or the tag for a snapshot of a version in development, e.g. ``craftercms/authoring_tomcat:4.0.7-SNAPSHOT``

As mentioned, CrafterCMS is open source and you can always build Docker images from source code `here <https://github.com/craftercms/craftercms>`__
