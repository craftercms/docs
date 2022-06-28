:is-up-to-date: True

:orphan:

.. _newIa-access-to-services:

==================
Access to Services
==================

When developing templates or scripts only a small list of services are available to use. You can expose other
services with the following steps.

-------------------
CrafterCMS Services
-------------------

If your site includes a custom application context with services, you can make them available by adding them to the
comma-separated list in the :ref:`server-config.properties <newIa-engine-configuration-files>` configuration file:

.. code-block:: none
  :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``

  # Patterns for beans that should be accessible from the site application context
  crafter.engine.defaultPublicBeans=crafter\\.(targetIdManager|targetedUrlStrategy),someOtherBean

.. note:: The value from the configuration is used as a regular expression, if the value contains special
          characters you will need to escape them with backslashes ``\\``.

---------------
System Services
---------------

.. warning:: This setting will disable restrictions for all sites

|

System objects like ``servletContext`` cannot be exposed by adding them to a list, instead you will need to change
the following configuration in the :ref:`server-config.properties <newIa-engine-configuration-files>` file:

.. code-block:: none
  :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``

  # Expose all services
  crafter.engine.disableVariableRestrictions=true
