
^^^^^^^^^^^^^^^^^^^^
Spring Configuration
^^^^^^^^^^^^^^^^^^^^
Each project can also have it's own Spring application context. Just as with site-config.xml, beans
can be overwritten using the following locations:

Spring Configuration Files
 - ``/config/engine/application-context.xml`` (This file can be accessed easily from any project created
   through the out-of-the-box blueprints, by navigating from the Studio sidebar to ``Project Tools``
   > ``Configuration``, and finally picking up the ``Engine Project Application Context`` option from the dropdown).

	 .. image:: /_static/images/site-admin/engine-project-application-context.webp
			 :alt: Engine Project Application Context

 - ``/config/engine/{crafterEnv}-application-context.xml``
 - ``$TOMCAT/shared/classes/crafter/engine/extension/sites/{siteName}/application-context.xml``

The application context inherits from Engine's own service-context.xml, and any class in Engine's
classpath can be used, including Groovy classes declared under ``/scripts/classes/*``.

As an example, assuming you have defined a Groovy class under ``/scripts/classes/mypackage/MyClass.groovy``,
you can define a bean like this:

.. code-block:: xml
  :caption: application-context.xml
  :linenos:

	<?xml version="1.0" encoding="UTF-8"?>
	<beans xmlns="http://www.springframework.org/schema/beans"
	       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean class="org.springframework.context.support.PropertySourcesPlaceholderConfigurer" parent="crafter.properties"/>

    <bean id="greeting" class="mypackage.MyClass">
      <property name="myproperty" value="${myvalue}"/>
    </bean>

  </beans>

A ``org.springframework.context.support.PropertySourcesPlaceholderConfigurer`` (like above) can be
specified in the context so that the properties of ``site-config.xml`` can be used as placeholders,
like ``${myvalue}``. By making the placeholder configurer inherit from crafter.properties, you'll
also have access to Engine's global properties (like ``crafter.engine.preview``).

.. note::
    Crafter Engine will not be able to load your Project Context if your context file contains invalid XML,
    incorrect configuration or if your beans do not properly handle their own errors on initialization.
