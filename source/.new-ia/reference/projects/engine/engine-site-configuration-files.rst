:is-up-to-date: True

:orphan:

.. _newIa-engine-site-configuration-files:

Engine Site Configuration Files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The main configuration files related to Crafter Engine for a site are the following:

+----------------------------------------------+--------------------------------------------------+
| Configuration File                           | Description                                      |
+==============================================+==================================================+
|| Engine Site Configuration                   | Contains site properties used by Crafter Engine  |
|| ``site-config.xml``                         |                                                  |
+----------------------------------------------+--------------------------------------------------+
|| Engine Site Application Context             | Contains bean definitions for the site context   |
|| ``application-context.xml``                 | associated with the webapp                       |
+----------------------------------------------+--------------------------------------------------+
|| Engine URL Rewrite Configuration (XML Style)| Contains URL rewrite rules                       |
|| ``urlrewrite.xml``                          |                                                  |
+----------------------------------------------+--------------------------------------------------+

These site configuration files are located under ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine`` where ``CRAFTER_HOME`` is the install directory of your CrafterCMS and ``SITENAME`` is the name of the site being configured.

These files can be accessed by navigating from the Studio Sidebar to |siteTools| ➜ ``Configuration``, then selecting the desired Engine configuration option from the dropdown.

For more information on how to configure site settings related to Crafter Engine see :ref:`newIa-engine_configuration`
