:is-up-to-date: True

.. index:: Override Logging Levels

.. _override-logging-levels:

=========================
Overriding Logging Levels
=========================

There are times when you'd like to see more log details, say when there are problems, so you can narrow down what is happening and address it.  Overriding the logging levels allows you to see more or less details in your installation depending on your needs.

Crafter CMS comes with classes and packages set to logging level INFO out of the box.  To change the logging levels of your Crafter CMS installation, you can do one of the following:

------------------------------
Temporarily Set Logging Levels
------------------------------

To temporarily set the logging levels for specific classes through the |siteConfig| panel:

* Open your **Sidebar**
* Click on **Site Config**
* Click on **Logging Levels**
* Find the class/package you want to change the log level, then set the level by clicking on the desired log level.

.. figure:: /_static/images/site-admin/logs-logging-levels.png
    :alt: Crafter Studio Logging Levels
    :align: center

.. note:: Remember that changes to the logging levels through Studio only live from one restart of the application to the next.

------------------------------
Permanently Set Logging Levels
------------------------------

To permanently change the logging levels you will need to update some configuration in your installation on the server. Ultimately Crafter CMS's Studio application uses Log4J to capture and direct log messages. To make changes, you're going to add/modify the log4j configuration.

Step 1: Identify the package/class you want to modify logging levels for
     The first step is identifying the package or class you want to change the levels for.  Specifying the logging level at the package granularity e.g.: ``org.craftercms.studio.impl.v1.service.deployment``, will modify all classes under that package.  Specifying logging levels at the class granularity, e.g.: ``org.craftercms.studio.impl.v1.service.deployment.job.DeployContentToEnvironmentStore``, modifies only the levels for that specific class.

Step 2: Set up the Log4J override
     Copy the following file: ``apache-tomcat/webapps/studio/WEB-INF/classes/log4j.xml`` to ``apache-tomcat/shared/classes/crafter/studio/extension/log4j-override.xml``

     .. code-block:: bash

         cp bin/apache-tomcat/webapps/studio/WEB-INF/classes/log4j.xml bin/apache-tomcat/shared/classes/crafter/studio/extension/log4j-override.xml

     .. note:: Note that the name of the file (log4j-override.xml) is changed in the new location.

Step 3: Add the override configuration you require
     Available logging levels are debug, info, warn, error.  Debug is the lowest logging level and Error is the highest.  The lower your logging levels are set, the more verbose your logs will be.

     To set a specific class to a higher log level (giving us less detail in the logs), add the following lines:

     .. code-block:: xml

         <logger name="org.craftercms.studio.impl.v1.service.deployment.job.DeployContentToEnvironmentStore">
           <level value="error" />
         </logger>

     |

     To set an entire package:

     .. code-block:: xml

          <logger name="org.craftercms.studio.impl.v1.service.deployment">
            <level value="error" />
          </logger>

     |

Step 4: Restart Studio to pick up changes
     By default Crafter Studio picks up its logging levels when the Tomcat service starts


To learn more about the log levels defined in Crafter, see: :ref:`studio-log-console`