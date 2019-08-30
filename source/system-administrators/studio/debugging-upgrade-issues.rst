:is-up-to-date: True

.. index:: Debugging Upgrade Issues; Troubleshooting

.. _debugging-upgrade-issues:

========================
Debugging Upgrade Issues
========================

When upgrading your Studio install fails, the first thing to do is to inspect data from the logs and figure out which statement failed when completing the upgrade.  Using the results of the inspection, we then have to recover the database manually.

-----------------------------
Failure Executing a Statement
-----------------------------
Let's take a look at an example log:

.. code-block:: guess
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

.. code-block:: guess
    :caption: System in an undefined state between two versions

    Caused by: org.craftercms.studio.api.v2.exception.UpgradeNotSupportedException: The current database version can't be upgraded
	    at org.craftercms.studio.impl.v2.upgrade.operations.DbScriptUpgradeOperation.execute(DbScriptUpgradeOperation.java:105)
	    at org.craftercms.studio.impl.v2.upgrade.pipeline.DefaultUpgradePipelineImpl.execute(DefaultUpgradePipelineImpl.java:67)
	    at org.craftercms.studio.api.v2.upgrade.UpgradePipeline.execute(UpgradePipeline.java:42)

|

The above message may occur, if you had an error upgrading because of a failed statement, then you restarted the system again.  Because the script was not executed completely, the system is in an undefined state between the two versions.  So, the next time the system is restarted, the upgrade will be attempted again resulting in a different message in the logs as seen above.  The solution here would be to look some more in the logs for the failed statement before the system was restarted and manually recover, like the previous example.
