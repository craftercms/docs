:is-up-to-date: True
:nosearch:

.. index:: Upgrading CrafterCMS; Upgrading

.. _newIa-upgrading-craftercms:

.. TODO Update to the latest 4

====================
Upgrading CrafterCMS
====================

This section details the steps required to upgrade your CrafterCMS install.

.. WARNING::
   * This guide assumes that you're trying to upgrade from a stock 3.1.x Studio and with some slight Studio configuration changes. If your site configuration is heavily customized or your Studio is a custom overlay you might need additional work that is not specified here.

   * The following release versions are able to upgrade to 4.

     - 3.1.9
     - 3.1.12
     - 3.1.13
     - 3.1.17 and later versions

     If you are upgrading from a version other than the ones listed above, you will need to upgrade to one of the above listed supported upgrade paths release version first before upgrading to 4.  See the Upgrading CrafterCMS page for 3.1 here: https://docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html

|

Here are the instructions for upgrading CrafterCMS based on how it was installed (on a server or via Kubernetes/Docker Compose):

.. toctree::
   :maxdepth: 1
   :titlesonly:

   upgrading-server.rst
   upgrading-container.rst

==============================
Troubleshooting Upgrade Issues
==============================

When upgrading your Studio install fails, the first thing to do is to inspect data from the logs and figure out which statement failed when completing the upgrade.  Using the results of the inspection, we then have to recover the database manually.

-----------------------------
Failure Executing a Statement
-----------------------------
Let's take a look at an example log:

.. code-block:: bash
    :caption: Failed statement during upgrade
    :linenos:

    Caused by: org.craftercms.studio.api.v2.exception.UpgradeException: Error executing sql script upgrade-3.1.0.6-to-3.1.0.7.sql
    	at org.craftercms.studio.impl.v2.upgrade.operations.DbScriptUpgradeOperation.execute(DbScriptUpgradeOperation.java:122)
    	at org.craftercms.studio.impl.v2.upgrade.pipeline.DefaultUpgradePipelineImpl.execute(DefaultUpgradePipelineImpl.java:67)
    	at org.craftercms.studio.api.v2.upgrade.UpgradePipeline.execute(UpgradePipeline.java:42)
    	at org.craftercms.studio.impl.v2.upgrade.DefaultUpgradeManagerImpl.upgradeDatabaseAndConfiguration(DefaultUpgradeManagerImpl.java:87)
    	at org.craftercms.studio.impl.v2.upgrade.DefaultUpgradeManagerImpl.init(DefaultUpgradeManagerImpl.java:182)
    	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
    	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
    	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
    	at java.lang.reflect.Method.invoke(Method.java:498)
    	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeCustomInitMethod(AbstractAutowireCapableBeanFactory.java:1763)
    	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1700)
    	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1630)
    	... 45 more
    Caused by: org.apache.ibatis.jdbc.RuntimeSqlException: Error executing: ALTER TABLE `cluster` ADD UNIQUE IF NOT EXISTS `uq_cl_git_remote_name` (`git_remote_name`).  Cause: java.sql.SQLIntegrityConstraintViolationException: (conn:12) Duplicate entry '' for key 'uq_cl_git_remote_name'

|

Looking at the log above, we can see that the upgrade failed when trying to execute a statement because of a duplicate entry: `Error executing: ALTER TABLE \`cluster\` ADD UNIQUE IF NOT EXISTS \`uq_cl_git_remote_name\` (\`git_remote_name\`)`

Here, the upgrade failed because of a special case with existing data in a table that needed to be changed as part of the upgrade.

For this case, the solution would be to manually set unique values for the existing rows in the table and then execute the remaining statements in the script.

---------------------
Upgrade Not Supported
---------------------
When the system is in an undefined state between two versions, you may see the following message in the logs:

.. code-block:: text
    :caption: System in an undefined state between two versions

    Caused by: org.craftercms.studio.api.v2.exception.UpgradeNotSupportedException: The current database version can't be upgraded
	    at org.craftercms.studio.impl.v2.upgrade.operations.DbScriptUpgradeOperation.execute(DbScriptUpgradeOperation.java:105)
	    at org.craftercms.studio.impl.v2.upgrade.pipeline.DefaultUpgradePipelineImpl.execute(DefaultUpgradePipelineImpl.java:67)
	    at org.craftercms.studio.api.v2.upgrade.UpgradePipeline.execute(UpgradePipeline.java:42)

|

The above message may occur, if you had an error upgrading because of a failed statement, then you restarted the system again.  Because the script was not executed completely, the system is in an undefined state between the two versions.  So, the next time the system is restarted, the upgrade will be attempted again resulting in a different message in the logs as seen above.  The solution here would be to look some more in the logs for the failed statement before the system was restarted and manually recover, like the previous example.
