:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-0-19:

==============================================================================
Instructions for Upgrading to Crafter CMS 3.0.19 from a previous 3.0.x version
==============================================================================

If using the upgrade script ``upgrade-target.sh/bat``, please note that the option ``full`` has been deprecated in Crafter CMS 3.0.19 and a full upgrade is always executed.

|
|

After upgrading your Crafter CMS install, please take note of the following changes:

- ``CRAFTER_HOME`` env variable has been renamed to ``CRAFTER_BIN_DIR`` (the bin directory of your installation) and ``CRAFTER_ROOT`` to ``CRAFTER_HOME`` (your installation directory)
- There are 2 new environment variables in **crafter-setenv.sh** and **crafter-setenv.bat**: ``CRAFTER_LOGS_DIR`` and ``CRAFTER_DATA_DIR``
- All references to ``$CRAFTER_HOME/data`` have been changed to ``CRAFTER_DATA_DIR`` in shell/batch scripts
- All references to ``$CRAFTER_HOME/logs`` have been changed to ``CRAFTER_LOGS_DIR`` in shell/batch scripts
- The following Engine ``server-config.properties`` have changed to contain the new variables:

  - **crafter.engine.site.default.rootFolder.path=file:${crafter.data.dir}/repos/sites/{siteName}/sandbox/**
- The following Studio ``studio-config-override.yaml`` properties have changed to contain the new variables:

  - **studio.repo.basePath: ${sys:crafter.data.dir}/repos**
  - **studio.preview.repoUrl: ${sys:crafter.data.dir}/repos/sites/{siteName}/sandbox**
  - **studio.db.dataPath: ${sys:crafter.data.dir}/db**
