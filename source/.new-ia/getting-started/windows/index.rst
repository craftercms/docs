:is-up-to-date: False

.. Section Outline
   14.1.1 Prereq
   14.1.2 WSL2
   14.1.2.1 Enable WSL2
   14.1.2.2 Install via Bundle
   14.1.3 Docker
   14.1.3.1 Docker Desktop

.. index:: Installing CrafterCMS on Windows

.. _newIa-installing-craftercms-on-windows:

================================
Installing CrafterCMS on Windows
================================

This section describes in detail how to install/setup CrafterCMS on Windows.

-------------
Prerequisites
-------------

First, we need to install Windows Subsystem for Linux (WSL) by following the instructions
`here <https://docs.microsoft.com/en-us/windows/wsl/install>`__ which will enable the required
optional components, download the latest Linux kernel, set WSL 2 as your default, and install
Ubuntu Linux for you.

---------------------
Installing CrafterCMS
---------------------

There are a couple of ways to install/run CrafterCMS on Windows

.. toctree::
   :maxdepth: 2

   running-crafter-in-wsl
   running-crafter-in-docker

Note that the preferred method of installing and running CrafterCMS is via the binary archive through WSL as described :ref:`here <newIa-installing-craftercms-on-wsl>`.
