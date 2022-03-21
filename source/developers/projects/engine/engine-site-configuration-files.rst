:is-up-to-date: True

:orphan:

.. _engine-site-configuration-files:

Engine Project Configuration Files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The main configuration files related to Crafter Engine for a project are the following:

+----------------------------------------------+---------------------------------------------------+
| Configuration File                           | Description                                       |
+==============================================+===================================================+
|| Engine Project Configuration                | Contains project properties used by Crafter Engine|
|| ``site-config.xml``                         |                                                   |
+----------------------------------------------+---------------------------------------------------+
|| Engine Project Application Context          | Contains bean definitions for the project context |
|| ``application-context.xml``                 | associated with the webapp                        |
+----------------------------------------------+---------------------------------------------------+
|| Engine URL Rewrite Configuration (XML Style)| Contains URL rewrite rules                        |
|| ``urlrewrite.xml``                          |                                                   |
+----------------------------------------------+---------------------------------------------------+

These projecct configuration files are located under ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine`` where ``CRAFTER_HOME`` is the install directory of your CrafterCMS and ``SITENAME`` is the name of the project being configured.

These files can be accessed by navigating from the Studio Sidebar to |projectTools| ➜ ``Configuration``, then selecting the desired Engine configuration option from the dropdown.

For more information on how to configure project settings related to Crafter Engine see :ref:`engine_configuration`
