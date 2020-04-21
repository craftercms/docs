:is-up-to-date: True

:orphan:

.. _access-to-services:

==================
Access to Services
==================

When developing templates or scripts only a small list of services are available to use, you can expose other
services with the following steps.

-------------
Site Services
-------------

If your site includes includes a custom application context with services, you can make them available updating the
site configuration:

.. code-block:: xml

  <site>
    <publicBeans>
      <bean>userService</bean> <!-- Indicate a specific bean name -->
      <bean>blog.+</bean>      <!-- Indicate a pattern for the bean name -->
    </publicBeans>
  </site>

---------------
System Services
---------------

.. warning:: This setting will apply to all sites

System objects can't be exposed by adding them to a list, instead you will need to change the following configuration:

.. code-block:: none

  # Expose all system services
  crafter.engine.disableVariableRestrictions=true
