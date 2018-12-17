:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-from-3-0-17:

=============================================================
Instructions for Upgrading Crafter CMS from 3.0.17 on Windows
=============================================================

For Crafter CMS installed from a bundle, before starting the upgrade process from 3.0.17, we need to download the updated scripts for the Crafter CMS environment we want to upgrade here:

    * Authoring environment: `authoring file fixes <https://downloads.craftercms.org/patch/3.0.17/authoring-3.0.17-batch-file-fixes.zip/>`_
    * Delivery environment: `delivery file fixes <https://downloads.craftercms.org/patch/3.0.17/delivery-3.0.17-batch-file-fixes.zip/>`_

Next, unzip the file we just downloaded ``ENV-3.0.17-batch-file-fixes.zip`` and copy the files under ``$CRAFTER_INSTALL\bin``.  Please note that the ``crafter-setenv.bat`` in these file fixes contains the default port. If you made changes to the ports you also need to make the same changes in the updated ``crafter-setenv.bat`` file.

Finally, follow the instructions here: :ref:`running-upgrade-script-from-current-install` to continue and finish your upgrade

