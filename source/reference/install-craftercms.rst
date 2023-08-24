:is-up-to-date: False
:since-version: 4.1.0
:orphan:

.. TODO Move this article to the sys admin section and merge it with the installation guide

.. _install-craftercms:

==================
Install CrafterCMS
==================

CrafterCMS can be easily launched as a SaaS, on AWS, on Docker, or installed on your own server.

----
SaaS
----
You can sign up for `Crafter Cloud <https://craftercms.com/products/crafter-cloud>`_.

|hr|

---
AWS
---

Follow the :ref:`run-using-aws-ami` to setup CrafterCMS authoring and delivery using Crafter's AWS AMIs.

|hr|

--------------------------------------------------------
Installing and Running CrafterCMS on a Server or Locally
--------------------------------------------------------

First, let's make sure we have all the requirements.

.. include:: /includes/requirements.rst

|hr|

.. TODO Continue fixing below


Installing and running CrafterCMS is easy. You have a number of choices:

.. _running-craftercms-in-docker:

--------------
Docker Compose
--------------

.. include:: /includes/docker-compose.rst

|hr|

.. _install-craftercms-via-binary-bundles:

------------------------
Pre-built Binary Bundles
------------------------

^^^^^^^^^^^^
Requirements
^^^^^^^^^^^^

.. include:: /includes/requirements.rst

^^^^^^^^^^^^^^^^^^^
Download the Bundle
^^^^^^^^^^^^^^^^^^^
Download CrafterCMS binary bundle from https://craftercms.org/downloads

Select ``crafter-cms-authoring-*.tar.gz`` for authoring, and ``crafter-cms-delivery*.tar.gz`` for delivery. The ``.tar.gz`` file will install a fully functional authoring/delivery instance. Out of the box, the authoring instance uses a local directory as the repository and an embedded database, which allows a quick and easy set up for local development.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Extract the CrafterCMS binaries
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Extract the contents in the desired directory.

.. code-block:: sh

  tar -zxvf crafter-cms-authoring*.tar.gz -C /tmp/target-unzip-directory/

|

   The extracted files should look like this:

   .. code-block:: none

      {target-unzip-directory}
      |--crafter/
         |--LICENSE
         |--README.txt
         |--bin/

   |

You can then do the same for the delivery bundle.

^^^^^^^^^^^^^^^^
Start CrafterCMS
^^^^^^^^^^^^^^^^

.. include:: /includes/start-craftercms.rst

^^^^^^^^^^^^^^^
Stop CrafterCMS
^^^^^^^^^^^^^^^

.. include:: /includes/stop-craftercms.rst

^^^^^^^^^^^^^^^^^^^^^^^
Login to Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^

.. include:: /includes/accessing-crafter-studio.rst


After logging in, you should be redirected to the ``Projects`` screen, and you're now ready to create your first experience!