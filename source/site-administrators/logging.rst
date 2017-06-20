.. _logging:

=========================
Logging and Audit Logging
=========================

Log files from several sources are created when running Crafter CMS.  These log files are useful for checking the status of Crafter CMS, for example, the success of actions/requests, warnings and error messages.  These logs can be used to provide more information about potential issues in the system or for debugging errors.  The log files can be found in ``$CRAFTER_DIR/crafter-auth-env/logs/`` or in ``$CRAFTER_DIR/crafter-delivery-env/logs/`` depending on which environment you are running.  Effective use of these logs is an important part of maintaining your sites and are useful for keeping track of your system performance.

Crafter CMS ships with a Tomcat Application Server, Solr, and MongoDb included in the bundle.  There are four folders used by Crafter CMS for the log files,

    - tomcat
    - solr
    - deployer
    - mongodb

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Tailing Log Files From a shell/Command Line
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The most recent messages from the log files may be displayed by tailing the log files.  Here are the log files and locations of the log files:

+------------------------------+-----------------------------------------------------------------+
|| Log File                    || Location                                                       |
+==============================+=================================================================+
|| Tomcat log file             || ``$CRAFTER_LOGS_DIR/tomcat/catalina.out``                      |
+------------------------------+-----------------------------------------------------------------+
|| Tomcat historical log files || ``$CRAFTER_LOGS_DIR/tomcat/catalina.%Y-%M-%D.log``             |
+------------------------------+-----------------------------------------------------------------+
|| Solr Search log files       || ``$CRAFTER_LOGS_DIR/solr/``                                    |
+------------------------------+-----------------------------------------------------------------+
|| Crafter Deployer log file   || ``$CRAFTER_LOGS_DIR/deployer/crafter-deployer.out``            |
+------------------------------+-----------------------------------------------------------------+
|| Crafter Deployer            || ``$CRAFTER_LOGS_DIR/deployer/%SITE-preview.log``               |
||     sites log files         ||                                                                |
+------------------------------+-----------------------------------------------------------------+

For the Authoring environment:

    ``$CRAFTER_LOGS_DIR = $CRAFTER_DIR/crafter-auth-env/logs``

For the Delivery environment:

    ``$CRAFTER_LOGS_DIR = $CRAFTER_DIR/crafter-delivery-env/logs``


Log file descriptions
^^^^^^^^^^^^^^^^^^^^^

**Tomcat Log Files**

File: catalina.out

This log file contains all messages pertaining to all java packages run by Crafter CMS.  It is used for tracking the success of requests/actions and logging helpful warning and error messages.  You'll also notice that in the same folder are the catalina historical log files, which are useful for checking logs for a certain date.  There are other log files created in the same folder that may be of interest to you depending on what you are investigating/debugging, but, the log file **catalina.out** is the one we usually look at to check the status of our system.

To tail the catalina log file in the authoring environment:

.. code-block:: bash

    tail -f crafter-auth-env/logs/tomcat/catalina.out

To tail the catalina log file in the delivery environment:

.. code-block:: bash

    tail -f crafter-delivery-env/logs/tomcat/catalina.out

**Deployer Log Files**

File: crafter-deployer.out

This log file contains all messages pertaining to Crafter Deployer.  In the same folder where the **crafter-deployer.out** log file is, you will find all the site specific deployer logs as described in the table above.

To tail the log file in the authoring environment:

.. code-block:: bash

    tail -f crafter-auth-env/logs/deployer/crafter-deployer.out

To tail the log file in the delivery environment:

.. code-block:: bash

    tail -f ./crafter-delivery-env/logs/deployer/crafter-deployer.out

**Solr Log Files**

File: solr.log

This log file contains all messages pertaining to Crafter Search.  It records errors and warnings related to Search indexing and features.  In the same folder where **solr.log** is found, you'll find other solr logs and archived log files that may be of interest depending on what you're investigating/debugging.



^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Viewing Logs Through Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Audit Logs
^^^^^^^^^^

To view audit logs through Crafter Studio, from the **Sidebar**, click on **Site Config**, then click on **Audit**

.. figure:: /_static/images/logs-audit.png
    :alt: Crafter Studio Audit Logs
	:align: center


Log Console
^^^^^^^^^^^
To view logs in Crafter Studio, click on **Site Config** from the **Sidebar**, then click on **Log Console**.  Before we look inside the **Log Console**, we need to setup what messages we want to display.  The messages displayed in the **Log Console** depends on what levels are set for the Java packages being run in Crafter CMS.  To see the loggers available for setting log levels to, click on **Site Config** -> **Logging Levels**.  Find the Java package you would like to view the logs of and set the desired log level.

There are 4 log levels defined in Crafter CMS.  These levels determines what messages will be displayed in the **Logging Console**.  Below are the 4 log levels available:

- debug
- info
- warn
- error

.. figure:: /_static/images/logs-logging-levels.png
    :alt: Crafter Studio Logging Levels
	:align: center

After setting up the log levels desired, we'll now go to the **Log Console** to start viewing the logs.  From the **Sidebar**, click on **Site Config** -> **Log Console**.  To start viewing the logs, click on **Play/Pause** at the top to start viewing the log files

.. figure:: /_static/images/logs-log-console.png
    :alt: Crafter Studio Log Console
	:align: center

