:is-up-to-date: False
:since-version: 4.1.0


..  _getting-started:

===============
Getting Started
===============

This section lets you get started quickly on using CrafterCMS.

-----------
Quick Start
-----------

If you have `Docker <https://www.docker.com/>`_ installed, you can get started with CrafterCMS in a few minutes. Simply run the following command:

.. code-block:: bash

    docker run -p 8080:8080 craftercms/authoring_local:latest

Then point your browser to http://localhost:8080/studio and you will be presented with the Crafter Studio login page. The default username is ``admin`` and the default password is ``admin``.

---------------------------------------------
Installing and Running CrafterCMS on a Server
---------------------------------------------

First, let's make sure we have all the requirements.

.. include:: /includes/requirements.rst

|hr|

.. TODO Continue fixing below


Installing and running CrafterCMS is easy. You have a number of choices:

--------------
Docker Compose
--------------
You can use :ref:`Docker <running-craftercms-in-docker>`.

.. toctree::
   :hidden:
   :maxdepth: 2

   docker

|hr|

-------
Bundles
-------
^^^^^^^^^^^^
Linux System
^^^^^^^^^^^^
You can use the :ref:`Linux <installing-craftercms-on-linux>` bundles

.. toctree::
   :hidden:
   :maxdepth: 2

   linux

|hr|

^^^^^^^^^^
Mac System
^^^^^^^^^^
You can use :ref:`Mac <installing-craftercms-on-macos>` bundles

.. toctree::
   :hidden:
   :maxdepth: 2

   mac

|hr|

^^^^^^^
Windows
^^^^^^^
You can use :ref:`WSL <installing-craftercms-on-wsl>`

Note that the preferred method of installing and running CrafterCMS is via the binary archive through WSL as described :ref:`here <installing-craftercms-on-wsl>`.

.. toctree::
   :hidden:
   :maxdepth: 2

   wsl

|hr|

---
AWS
---
You can use a `prebuilt AMI <https://aws.amazon.com/marketplace/seller-profile?id=6d75ffca-9630-44bd-90b4-ac0e99058995>`_ from the AWS marketplace.

|hr|

----
SaaS
----
You can sign up for `Crafter Cloud <https://craftercms.com/products/crafter-cloud>`_.

|hr|

How do I start crafting my experiences?

.. toctree::
   :maxdepth: 2

   your-first-project/headless.rst
   your-first-project/templated.rst

Once you have CrafterCMS up and running, proceed to learn more about CrafterCMS by reviewing the documentation based on your role or interest :ref:`here <by-role>`.
