:is-up-to-date: True

:orphan:

.. _engine-configuration-files:

Engine Configuration Files
^^^^^^^^^^^^^^^^^^^^^^^^^^

The main files for configuring Crafter Engine are the following:

+-------------------------------+----------------------------------------------------------------+
| File                          | Description                                                    |
+===============================+================================================================+
| services-context.xml          | Contains the bean definition for services layer                |
+-------------------------------+----------------------------------------------------------------+
| server-config.properties      | Contains server configurable parameters such as urls,          |
|                               | paths, etc.                                                    |
+-------------------------------+----------------------------------------------------------------+
| rendering-context.xml         | Contains the bean definition for rendering                     |
+-------------------------------+----------------------------------------------------------------+
| logging.xml                   | Contains loggers, appenders, etc.                              |
+-------------------------------+----------------------------------------------------------------+

These configuration files for Crafter Engine is located under  ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension``, where ``CRAFTER_HOME`` is the install directory of your Crafter CMS authoring or delivery environment.

The files can be accessed by opening the files using your favorite editor.  Any changes made to any of the files listed above will require a restart of Crafter.

