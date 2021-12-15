:is-up-to-date: False

.. index::  Studio Logging, Viewing Logs Through Crafter Studio

.. _newIa-studio-logging:

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

.. _newIa-studio-log-console:

-----------
Log Console
-----------
Crafter CMS has a **Log Console** that allows you to view messages depending on what log levels and what Java packages have been set for tracking.

To view logs in Crafter Studio, click on |siteConfig| from the **Sidebar**, then click on **Log Console**.  Looking inside the **Log Console**, messages we want to display are setup beforehand.  The messages displayed in the **Log Console** depends on what levels are set for the Java packages being run in Crafter CMS.

There are 4 log levels defined in Crafter CMS.  These levels determine what messages will be logged and displayed in the **Logging Console**.  Below are the 4 log levels available from the lowest to the highest:

    - debug: displays things useful for debugging
    - info: displays informational messages like progress of the application, etc
    - warn: displays potentially harmful situations that might cause problems
    - error: displays anything that may be fatal to the operation/causes a problem

The lower your logging levels are set, the more verbose your logs will be.

We'll now go to the **Log Console** to start viewing the logs.  From the **Sidebar**, click on |siteConfig| -> **Log Console**.  To start viewing the logs, click on **Play/Pause** at the top to start viewing the log files

.. figure:: /_static/images/site-admin/logs-log-console.png
    :alt: Crafter Studio Log Console
	:align: center

For more information on logging levels, see :ref:`override-logging-levels`
