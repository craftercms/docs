:is-up-to-date: True

.. _add-to-upgrade-scripts:

=====================================================
How to Add to Upgrade Scripts for Your Customizations
=====================================================

When a change is made to Crafter Studio's configuration or database, the Pull Request (PR) that makes that change should include the required upgrades to make sure that sites created in previous versions will get upgraded automatically to work according with the changes introduced. The upgrade system provides four different pipelines to help with this.


All pipelines are configured in the same file, ``studio/src/main/resources/crafter/studio/upgrade/pipelines.yaml``

----------
Blueprints
----------
In the current version of the upgrade system any change made to the blueprints in this repository, ``studio/src/main/webapp/repo-bootstrap/global/blueprints/``, will be automatically copied to the local global repository when Studio boots.

In the future this will change to follow the same approach used for the other components.

------------------------
Database & Configuration
------------------------
When there is a change in the database (structure or content) there are two requirements:

#. Update the SQL create script ``studio/src/main/resources/crafter/studio/database/createDDL.sql``
#. Add an SQL upgrade script in the database folder ``studio/src/main/resources/crafter/studio/database/``

The upgrade script can perform any change in the database such as adding/changing or deleting tables and columns. **Keep in mind these changes will be done on existing systems with real data.**

A simple SQL upgrade script could look like this:

.. code-block:: mysql

    CREATE TABLE IF NOT EXISTS new_feature_table (...) ;

    ALTER TABLE `existing_table` DROP COLUMN IF EXISTS `unused_column` ;

    UPDATE _meta SET version = '3.1.0.5' ;

|

After completing the upgrade script a new version needs to be added to the upgrade pipeline:

.. code-block:: yaml

    pipelines:
      system:
        ...
          - currentVersion: 3.1.0.4
            nextVersion: 3.1.0.5
            operations:
              - type: dbScriptUpgrader
                filename: upgrade-3.1.0.4-to-3.1.0.5.sql
		    ...

.. note:: *Every SQL script in the system pipeline must update the version in the _meta table.*

Global configurations files can be added or updated from this repository to the local global repository:

.. code-block:: yaml

     - type: globalRepoUpgrader
          files:
            - configuration/global-menu-config.xml
            - configuration/global-permission-mappings-config.xml
            - configuration/global-role-mappings-config.xml

|

^^^^^^^^^^^^^^
Site Structure
^^^^^^^^^^^^^^
When there is a change in the structure of sites like adding, renaming, moving or deleting folders or files a new version needs to be added to the upgrade pipeline:

.. code-block:: yaml

    pipelines:
      site:
        ...
        - currentVersion 3.1.0
          nextVersion: 3.1.0.1
          operations:
            - type: addFileUpgrader
              path: /config/engine/new-file.xml
              file: crafter/studio/upgrade/3.1.0.1/new-file.xml
        ...

^^^^^^^^^^^^
Site Content
^^^^^^^^^^^^
When there is a change that breaks existing sites like the format of a field in the descriptors or the name of a 
service in the Groovy scripts a new operation should be added to make the necessary changes in the repository. Any
operation of this kind should extend the `AbstractContentUpgradeOperation <https://github.com/craftercms/studio/tree/develop/src/main/java/org/craftercms/studio/impl/v2/upgrade/operations/AbstractContentUpgradeOperation.java>`_
which handles committing the changes in the repository. Implementations of this 
class
only need to concern about finding the files that need to be updated (by using path patterns, content-types 
xpath selectors or any other condition) and changing the files in the file system (without committing to git)

Example:

.. code-block:: yaml

  pipelines:
    site:
      ...
      - currentVersion: 3.1.0
        nextVersion: 3.1.0.1
        operations:
          - type: findAndReplaceUpgrader
            includedPaths: /?site/scripts/.*
            pattern: mockService\((.*))
            replacement: mockService2(mockService2.someConstant, $1)
            commitDetails: Update uses of mockService in all scripts
      ...

.. note:: *Every version in the site pipeline must include the versionFileUpgrader operation.*

^^^^^^^^^^^^^^^^^^
Site Configuration
^^^^^^^^^^^^^^^^^^
When the structure or content of a configuration file needs to be changed a new version needs to be added to the upgrade pipeline, unlike the previous examples configuration files have individual pipelines and the versioning schema doesn't follow the same of Crafter Studio.

If the file is not present in the configuration a new pipeline needs to be added:

.. code-block:: yaml

    configurations:
      <name of the file>:
        path: <path of the file in the site repository>
        pipeline:
          <list of versions>

|

If the file is already present in the configuration only a new version needs to be added:

.. code-block:: yaml

    configurations:
      role-mappings-config:
        path: &role-mappings-config '/config/studio/role-mappings-config.xml'
        pipeline:
          ...
          - currentVersion: 1.1
            nextVersion: 1.2
            operations:
              - type: xsltFileUpgrader
                path: *role-mappings-config
                template: crafter/studio/upgrade/role-mappings-config-1.2.xslt
              - type: xsltFileUpgrader
                path: *role-mappings-config
                template: crafter/studio/upgrade/update-version.xslt
          ...

.. note:: *Every version in the site pipeline must include the xsltFileUpgrader operation with the update-version.xslt template.*
