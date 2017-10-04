.. _studio-logging:

===================================
Viewing Logs Through Crafter Studio
===================================

Various log files are created when running Crafter CMS.  This section details the logs available for viewing through Crafter Studio.

----------
Audit Logs
----------
Crafter CMS tracks the date, time, user and action performed to content through an audit log.

To view the audit logs, from the **Sidebar**, click on |siteConfig|, then click on **Audit**

.. figure:: /_static/images/site-admin/logs-audit.png
    :alt: Crafter Studio Audit Logs
	:align: center

-----------
Log Console
-----------
Crafter CMS has a **Log Console** that allows you to view messages depending on what what log levels and what Java packages you'd like to track.

To view logs in Crafter Studio, click on |siteConfig| from the **Sidebar**, then click on **Log Console**.  Before we look inside the **Log Console**, we need to setup what messages we want to display.  The messages displayed in the **Log Console** depends on what levels are set for the Java packages being run in Crafter CMS.  To see the loggers available for setting log levels to, click on |siteConfig| then **Logging Levels**.  Find the Java package you would like to view the logs of and set the desired log level.

There are 4 log levels defined in Crafter CMS.  These levels determines what messages will be displayed in the **Logging Console**.  Below are the 4 log levels available:

    - debug: displays things useful for debugging
    - info: displays informational messages like progress of the application, etc
    - warn: displays potentially harmful situations that might cause problems
    - error: displays anything that may be fatal to the operation/causes a problem

.. figure:: /_static/images/site-admin/logs-logging-levels.png
    :alt: Crafter Studio Logging Levels
	:align: center

After setting up the log levels desired, we'll now go to the **Log Console** to start viewing the logs.  From the **Sidebar**, click on |siteConfig| -> **Log Console**.  To start viewing the logs, click on **Play/Pause** at the top to start viewing the log files

.. figure:: /_static/images/site-admin/logs-log-console.png
    :alt: Crafter Studio Log Console
	:align: center

