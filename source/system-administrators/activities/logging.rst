:is-up-to-date: True

.. _logging:

=======
Logging
=======

Log files from several sources are created when running Crafter CMS.  These log files are useful for checking the status of Crafter CMS, for example, the success of actions/requests, warnings and error messages.  These logs can be used to provide more information about potential issues in the system or for debugging errors.  The log files can be found in ``$CRAFTER_DIR/crafter-authoring/logs/`` or in ``$CRAFTER_DIR/crafter-delivery/logs/`` depending on which environment you are running.  Effective use of these logs is an important part of maintaining your sites and are useful for keeping track of your system performance.  To that end, please make sure that you rotate the logs.

Crafter CMS ships with a Tomcat Application Server, Elasticsearch, and MongoDB included in the binary.  There are five folders used by Crafter CMS for the log files,

    - tomcat
    - elasticsearch
    - deployer
    - mongodb

-------------------------------------------
Tailing Log Files From a shell/Command Line
-------------------------------------------
The most recent messages from the log files may be displayed by tailing the log files.  Here are the log files and locations of the log files:

+------------------------------+-----------------------------------------------------------------+
|| Log File                    || Location                                                       |
+==============================+=================================================================+
|| Tomcat log file             || ``$CRAFTER_LOGS_DIR/tomcat/catalina.out``                      |
+------------------------------+-----------------------------------------------------------------+
|| Tomcat historical log files || ``$CRAFTER_LOGS_DIR/tomcat/catalina.%Y-%M-%D.log``             |
+------------------------------+-----------------------------------------------------------------+
|| Elasticsearch log files     || ``$CRAFTER_LOGS_DIR/elasticsearch/``                           |
+------------------------------+-----------------------------------------------------------------+
|| Crafter Deployer log file   || ``$CRAFTER_LOGS_DIR/deployer/crafter-deployer.out``            |
+------------------------------+-----------------------------------------------------------------+
|| Crafter Deployer            || ``$CRAFTER_LOGS_DIR/deployer/%SITE-preview.log``               |
||     sites log files         ||                                                                |
+------------------------------+-----------------------------------------------------------------+
|| MongoDB log files           || ``$CRAFTER_LOGS_DIR/mongodb/``                                 |
+------------------------------+-----------------------------------------------------------------+

For the Authoring environment:

    ``$CRAFTER_LOGS_DIR = $CRAFTER_DIR/crafter-authoring/logs``

For the Delivery environment:

    ``$CRAFTER_LOGS_DIR = $CRAFTER_DIR/crafter-delivery/logs``

^^^^^^^^^^^^^^^^^^^^^
Log file descriptions
^^^^^^^^^^^^^^^^^^^^^

Tomcat Log Files
^^^^^^^^^^^^^^^^

File: catalina.out

This log file contains all messages pertaining to all java packages run by Crafter CMS.  It is used for tracking the success of requests/actions and logging helpful warning and error messages.  You'll also notice that in the same folder are the catalina historical log files, which are useful for checking logs for a certain date.  There are other log files created in the same folder that may be of interest to you depending on what you are investigating/debugging, but, the log file **catalina.out** is the one we usually look at to check the status of our system.

To tail the catalina log file in the authoring environment:

.. code-block:: bash

    tail -f crafter-authoring/logs/tomcat/catalina.out

To tail the catalina log file in the delivery environment:

.. code-block:: bash

    tail -f crafter-delivery/logs/tomcat/catalina.out

Deployer Log Files
^^^^^^^^^^^^^^^^^^

File: crafter-deployer.out

This log file contains all messages pertaining to Crafter Deployer.  In the same folder where the **crafter-deployer.out** log file is, you will find all the site specific deployer logs as described in the table above.

To tail the log file in the authoring environment:

.. code-block:: bash

    tail -f crafter-authoring/logs/deployer/crafter-deployer.out

To tail the log file in the delivery environment:

.. code-block:: bash

    tail -f ./crafter-delivery/logs/deployer/crafter-deployer.out

Elasticsearch Log Files
^^^^^^^^^^^^^^^^^^^^^^^

File: elasticsearch.log

This log file contains all messages pertaining to Elasticsearch.

----------------------
Using custom appenders
----------------------

All Crafter CMS components use Apache Log4j2 for logging and you can easily include custom configurations to change
the logging behavior. If you want to use any of the built-in appenders from Log4j2 such as the JDBC or SMTP appenders
you only need to add them in the appropriate configuration file. For more details on the provided appenders you can
visit the `official documentation <https://logging.apache.org/log4j/2.x/manual/appenders.html>`_.

^^^^^^^^^^^^^^^^^^^^^^
Logging configurations
^^^^^^^^^^^^^^^^^^^^^^

You can update the logging configuration depending on the Crafter CMS component that you need to change:

* Crafter Engine: ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/logging.xml``
* Crafter Studio: ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/studio/extension/logging.xml``
* Crafter Search: ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/search/extension/logging.xml``
* Crafter Profile: ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/profile/extension/logging.xml``
* Crafter Social: ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/social/extension/logging.xml``
* Crafter Deployer: ``INSTALL_DIR/bin/crafter-deployer/logging.xml``

.. warning::
  It is highly recommended to only add new appenders or do small changes to existing ones, if existing appenders are
  removed or the configuration is broken some Crafter CMS components could stop working.

^^^^^^^^^^^^^^^^^^^^^
Add a custom appender
^^^^^^^^^^^^^^^^^^^^^

To add a custom appender you can follow these steps:

#. Place the required JAR files in the appropriate location:
   
   * for Engine, Studio, Search, Profile or Social use ``INSTALL_DIR/bin/apache-tomcat/shared/lib``
   * for Deployer use ``INSTALL_DIR/bin/crafter-deployer/lib``
#. Update the required logging configuration to add the custom appender, for example if the custom appender name is
   ``AwesomeAppender`` and the class is under the package ``com.custom.logging`` the configuration will be like this:
   
  .. code-block:: xml
  
    <Configuration packages="com.custom.logging">
      <Appenders>
        <!-- existing appenders -->
        <AwesomeAppender name="AwesomeAppender" someConfig="true" otherParam="5"/>
      </Appenders>
      <Loggers>
        <!-- existing loggers -->
        <Root level="info">
          <!-- existing refs -->
          <AppenderRef ref="AwesomeAppender" />
        </Root>
      </Loggers>
    </Configuration>

.. note::
  In order for custom appenders to be loaded properly all dependencies should be included in the JAR file or also
  copy the required JARs along. Most of the time you will need to copy the ``log4j-api-{version}.jar`` and
  ``log4j-core-{version}.jar`` too.

.. warning::
  Because Log4j2 only loads classes during initialization if there is a change in the custom appender JAR those will 
  not be caught by the reconfiguration feature and you must restart the app context or tomcat.
