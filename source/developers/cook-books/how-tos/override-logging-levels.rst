:is-up-to-date: True

.. index:: Override Logging Levels

.. _override-logging-levels:

=========================
Overriding Logging Levels
=========================

There are times when you'd like to see more log details, say when there are problems, so you can narrow down what is happening and address it.  Overriding the logging levels allows you to see more or less details in your installation depending on your needs.

CrafterCMS comes with classes and packages set to logging level INFO out of the box.  To change the logging levels of your CrafterCMS installation, you can do one of the following:

------------------------------
Temporarily Set Logging Levels
------------------------------

To temporarily set the logging levels for specific classes through the Main Menu panel:

* From the Global menu, click on **Logging Levels**
* Find the class/package you want to change the log level, then set the level by selecting from the dropdown the desired log level.

.. figure:: /_static/images/site-admin/logs-logging-levels.jpg
    :alt: Crafter Studio Logging Levels
    :width: 65%
    :align: center

.. note:: Remember that changes to the logging levels through Studio only live from one restart of the application to the next.

------------------------------
Permanently Set Logging Levels
------------------------------

To permanently change the logging levels you will need to update some configuration in your installation on the server. To make changes, you're going to add/modify the logging configuration file ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/logging.xml``.

Step 1: Identify the package/class you want to modify logging levels for
     The first step is identifying the package or class you want to change the levels for.  Specifying the logging level at the package granularity e.g.: ``org.craftercms.studio.api.v1.dal.DependencyMapper``, will modify all classes under that package.  Specifying logging levels at the class granularity, e.g.: ``org.craftercms.studio.api.v1.dal.DependencyMapper.calculatePublishingDependenciesForList``, modifies only the levels for that specific class.

Step 2: Add the override configuration you require to the logging configuration file ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/logging.xml``.
     Available logging levels are debug, info, warn, error.  Debug is the lowest logging level and Error is the highest.  The lower your logging levels are set, the more verbose your logs will be.

     To set a specific class to a higher log level (giving us less detail in the logs), add the following lines:

     .. code-block:: xml
        :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/logging.xml*

        <Logger name="org.craftercms.studio.api.v1.dal.DependencyMapper.calculatePublishingDependenciesForList" level="debug"/>

     |

     To set an entire package:

     .. code-block:: xml
        :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/logging.xml*

        <Logger name="org.craftercms.studio.api.v1.dal.DependencyMapper" level="debug"/>

     |

Step 3: Your changes to logging levels are now set
     Changes in the logging configuration file is automatically applied after a few seconds.


To learn more about the log levels defined in Crafter, see: :ref:`studio-log-console`