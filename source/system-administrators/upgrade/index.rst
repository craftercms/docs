:is-up-to-date: True

.. index:: Upgrading CrafterCMS; Upgrading

.. _upgrading-craftercms:

====================
Upgrading CrafterCMS
====================

This section details the steps required to upgrade your CrafterCMS install.

    .. WARNING::
       * This guide assumes that you're trying to upgrade a site from a stock 3.1.x Studio and with some slight Studio configuration changes. If your site configuration is heavily customized or your Studio is a custom overlay you might need additional work that is not specified here.

       * If you are upgrading to 3.1.x from a previous 3.0.x version, the automatic upgrade scripts are not enabled and you will need to follow :ref:`these instructions<upgrade-to-3-1-0>` to upgrade manually.

       * If you are upgrading from an earlier release (2.5.x), you would need to upgrade to 3.0.x first before performing the upgrade steps here.  See the 3.0 release’s Upgrading CrafterCMS page here: https://craftercms.com/docs

|

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

