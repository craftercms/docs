:is-up-to-date: True

.. index:: Studio Configuration Files

.. _studio-configuration-files:

Studio Configuration Files
^^^^^^^^^^^^^^^^^^^^^^^^^^
The core configuration file for Crafter Studio ``studio-config.yaml`` contains pre-configured settings and is located in your Authoring installation under ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/classes/crafter/studio``.  See :ref:`studio-core-configuration` for more information.

We do not recommend making changes to the core configuration file ``studio-config.yaml``.  There are two override files available to make changes to the pre-configured settings in the core configuration file for Crafter Studio:

* Studio Configuration Override file **studio-config-override.yaml** located under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` can be accessed by opening the file using your favorite editor

  See :ref:`studio-config-override` for more information
* Global Studio Configuration Override file **studio-config-override.yaml** located under ``CRAFTER_HOME/data/repos/global/configuration`` can be accessed from Studio from the ``Navigation Menu`` under ``Global Config``

  See :ref:`nav-menu-global-config` for more information

Properties will be overridden according to the order the files are loaded which is the same as the list above: core configuration file studio-config.yaml, Studio configuration override file studio-config-override.yaml, global Studio configuration override file studio-config-override.yaml.   If the same property is present in all files, the value from the global Studio configuration file will be used.

Any changes made to any of the override files listed above will require a restart of Crafter Studio for the changes to take effect.
