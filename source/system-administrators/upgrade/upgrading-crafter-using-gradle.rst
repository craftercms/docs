:is-up-to-date: True

.. index:: Upgrading Crafter CMS installed using Gradle, Upgrading

============================================
Upgrading Crafter CMS installed using gradle
============================================

This section details how to upgrade Crafter CMS installed using gradle

----------------
Before Upgrading
----------------

Before starting your upgrade:

#. **Review the** :ref:`release notes<release-notes>` **for the version you are upgrading to**.

   It contains specific information on the changes that have been made and how it may affect you when upgrading to that specific version.

#. **Backup Crafter CMS** just in case something goes wrong with the upgrade.

   See :ref:`backup-and-recovery` for details on how to perform the backup of Crafter CMS

#. **Manually shut down Crafter CMS**

   To shutdown Crafter CMS installed using gradle, run ``./gradlew stop``

-------
Upgrade
-------

If you installed Crafter CMS using gradle, you can upgrade your install by following the steps below:

#. Stop your Crafter CMS
     `./gradlew stop`
#. Perform a ``selfupdate`` to check if there has been updates to the Crafter CMS project
     `./gradlew selfupdate`
#. Upgrade the installed Tomcat version, etc., update all the Crafter CMS components then build and deploy by performing an ``upgrade``
     `./gradlew upgrade`
#. Restart your Crafter CMS
     `./gradlew start`

---------------------
Crafter CMS Restarted
---------------------

After performing the steps listed above, Crafter CMS is restarted.

Once you start up Crafter CMS, in the logs, notice the lines mentioning ``Checking upgrades for the...`` like below:

   .. code-block:: text

      [INFO] 2020-10-05T13:53:23,033 [localhost-startStop-1] [upgrade.DefaultUpgradeManagerImpl] | Checking upgrades for the blueprints
      ...
      [INFO] 2020-10-05T13:53:25,509 [localhost-startStop-1] [upgrade.DefaultUpgradeManagerImpl] | Checking upgrades for the database and configuration
      [INFO] 2020-10-05T13:53:25,665 [localhost-startStop-1] [upgrade.DefaultUpgradeManagerImpl] | Checking upgrades for site mysite
      [INFO] 2020-10-05T13:53:25,719 [localhost-startStop-1] [upgrade.DefaultUpgradeManagerImpl] | Checking upgrades for configuration in site mysite
      ...

   |

Crafter CMS has an upgrade manager that automatically upgrades the system, some configuration files and blueprints on startup.  It uses a pipeline of handlers to upgrade various subsystems.

Note that the Elasticsearch index will be automatically updated by the Crafter CMS upgrade manager whenever the Elasticsearch index settings are updated, for example, a new field has been added for a release.
The updated index containing the new settings will be named the current index version name incremented by 1, e.g. let’s say the current index is ``mysite-authoring_v1``, after the upgrade, the new index will now be ``mysite-authoring_v2``.

To learn more about the upgrade manager and how to add upgrade scripts for your customizations, see :ref:`here <add-to-upgrade-scripts>`
