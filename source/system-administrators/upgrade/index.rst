:is-up-to-date: True

.. index:: Upgrading CrafterCMS; Upgrading

.. _upgrading-craftercms:

====================
Upgrading CrafterCMS
====================

This section details the steps required to upgrade your CrafterCMS install.

.. WARNING::
   * This guide assumes that you're trying to upgrade a project from a stock 3.1.x Studio and with some slight Studio configuration changes. If your project configuration is heavily customized or your Studio is a custom overlay you might need additional work that is not specified here.

   * The following release versions are able to upgrade to 4.0.0

     - 3.1.9
     - 3.1.12
     - 3.1.13
     - 3.1.17 and later versions

     If you are upgrading from a version other than the ones listed above, you will need to upgrade to one of the above listed supported upgrade paths release version first before upgrading to 4.0.0.  See the 3.1 release’s Upgrading CrafterCMS page here: https://docs.craftercms.org

|

---------------------
Verifying the Upgrade
---------------------
.. important::
    CrafterCMS will attempt to upgrade your project (site), which includes your configuration, code, and other assets. After the upgrade, perform a `git diff` on your project to see exactly what changed. This will help you identify any undesired upgrades that the system made and revert them if needed.

|

----------------------------
Upgrade by Installation Type
----------------------------
Here are the instructions for upgrading CrafterCMS based on how it was installed:

.. important::

   Remember to read the release notes for the version you're upgrading to and all other release notes in between the
   version you currently have and the version you are upgrading to, as it contains information on all the changes that
   have occurred and steps you might have to take when upgrading to a specific version.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   upgrading-crafter.rst
   docker/index.rst

---------------
MongoDB Upgrade
---------------
Crafter Profile and Social version 4.0.0 and later uses MongoDB v4.0.28.
Please follow the article :ref:`upgrading-mongodb` to learn all about upgrading MongoDB in your Crafter Profile and Social version 3.1.x install.

.. toctree::
    :hidden:

    upgrading-mongodb