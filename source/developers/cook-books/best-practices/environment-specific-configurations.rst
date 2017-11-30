.. _environment-specific-configurations:

===================================
Environment Specific Configurations
===================================

This section explains how to configure sites depending on the environment where they are deployed,
this is useful for managing values such as paths or database connections without the need to change
any code directly in the servers.

------------------------------
Using Site Configuration Files
------------------------------

This is the preferred way to manage configurations because changes only require to publish the
files from Crafter Studio to take effect.

The perfect example is how to manage a database connection that will change depending on the server
where the site is deployed: for example the address, name or port of the database could change
for the staging and production servers. Crafter Engine provides a feature to easily include the
configurations for all environments in the site repository.

.. note::
  In order to use this feature all Crafter Engine servers need to set a proper value for the
  ``crafter.engine.environment`` property.

For this example assume the following values:

+-------------------+---------------+------------------------------------------------------+
|| Server           || Environment  || Configuration Files                                 |
+===================+===============+======================================================+
| Local Development || ``dev``      || ``/config/engine/dev-site-config.xml``              |
|                   ||              || ``/config/engine/dev-application-context.xml``      |
+-------------------+---------------+------------------------------------------------------+
| Authoring         || ``auth``     || ``/config/engine/auth-site-config.xml``             |
|                   ||              || ``/config/engine/auth-application-context.xml``     |
+-------------------+---------------+------------------------------------------------------+
| Delivery          || ``delivery`` || ``/config/engine/delivery-site-config.xml``         |
|                   ||              || ``/config/engine/delivery-application-context.xml`` |
+-------------------+---------------+------------------------------------------------------+

In this case the developers can include the appropriate connection string for each environment
and Crafter Engine will read the right file:

.. code-block:: xml
  :caption: Local Development Configuration: /config/engine/dev-site-config.xml
  :linenos:
  
  <?xml version="1.0" encoding="UTF-8"?>
  <site>
    <db>
      <uri>mongodb://localhost:27017/mydb?maxPoolSize=1&amp;minPoolSize=0&amp;maxIdleTimeMS=10000</uri>
    </db>
  </site>


.. code-block:: xml
  :caption: Authoring Configuration: /config/engine/auth-site-config.xml
  :linenos:
  
  <?xml version="1.0" encoding="UTF-8"?>
  <site>
    <db>
      <uri>mongodb://localhost:27020/mydb?maxPoolSize=5&amp;minPoolSize=2&amp;maxIdleTimeMS=10000</uri>
    </db>
  </site>


.. code-block:: xml
  :caption: Delivery Configuration: /config/engine/delivery-site-config.xml
  :linenos:
  
  <?xml version="1.0" encoding="UTF-8"?>
  <site>
    <db>
      <uri>mongodb://delivery-db-server:27020/delivery-db?maxPoolSize=10&amp;minPoolSize=5&amp;maxIdleTimeMS=1000</uri>
    </db>
  </site>

When using this approach the code is completely independent of the environment so we only need one
bean that will always connect to the right database:

.. code-block:: xml
  :caption: Default Application Context: /config/engine/application-context.xml (shared by all environments)
  :linenos:
  
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean class="org.springframework.context.support.PropertySourcesPlaceholderConfigurer" parent="crafter.properties"/>

    <bean id="mongoUri" class="com.mongodb.MongoClientURI">
      <constructor-arg value="${db.uri}"/>
    </bean>

    <bean id="mongoClient" class="com.gmongo.GMongoClient">
      <constructor-arg ref="mongoUri"/>
    </bean>

  </beans>

--------------------------------
Using Server Configuration Files
--------------------------------

This option is less flexible than using the site configuration files because any change will require
a server restart to take effect.

Crafter Engine allows to override site configuration using files outside of the repository, usually
these will be managed by the system administrator instead of the developers and will add some
complexity to the setup process and keeping all environments updated.

~~~~~~~~~~~~~~~~~~
Site Configuration
~~~~~~~~~~~~~~~~~~

For each site you can provide an external set of configuration files in the shared folder of the
application server:

``TOMCAT/shared/classes/crafter/engine/extension/sites/{siteName}/site-config.xml``
``TOMCAT/shared/classes/crafter/engine/extension/sites/{siteName}/application-context.xml``

~~~~~~~~~~~~~~~~~~~~
Global Configuration
~~~~~~~~~~~~~~~~~~~~

One last option is to include your property as part of the global Crafter Engine configuration, the
only advantage of this approach is that the property will be available to all sites and the value
doesn't need to be repeated if it is needed by more than one site.

``TOMCAT/shared/classes/crafter/engine/extension/server-config.properties``

.. code-block:: properties
  :caption: Crafter Engine Global Configuration (shared by all sites deployed in the server)
  :linenos:
  
  db.uri=mongodb://delivery-db:27020/deliverydb?maxPoolSize=10&minPoolSize=5&maxIdleTimeMS=1000

