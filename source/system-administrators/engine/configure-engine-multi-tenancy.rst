:is-up-to-date: True

.. index:: Multi-Tenancy, Configuration; Crafter Engine Multi-Tenancy

.. _engine-site-configuration-multi-tenancy:

=================================
Configure Multi-Tenancy in Engine
=================================

.. note:: *This guide applies only to the* **delivery environment** *of Crafter CMS*

One instance of Crafter Engine can handle multiple sites (multi-tenancy). This guide explains how
to setup Crafter Engine for multi-tenancy.

Assume we have two websites in Crafter Studio that are to be deployed on a single Crafter Engine
instance: site1 and site2. To enable multi-tenancy capabilities you need to add the right
configuration using the Spring context files.

------------------------------
Configure the Root Folder Path
------------------------------

The root folder path, as shown below, needs to be configured to include a substitution variable ``{siteName}``

.. code-block:: properties
  :caption: {delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties

  crafter.engine.site.default.rootFolder.path=file:/opt/crafter/data/site-content/{siteName}/content

|

This variable will be resolved by Crafter Engine for each request. There are two possible
configurations to resolve this value.

------------------------------
Configure Simple Multi-Tenancy
------------------------------

Using this mode you can easily support multiple sites without any additional configuration in
external components.

To enable this mode you need to change the following files:

.. code-block:: xml
    :caption: {delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/services-context.xml

    <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                               http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
        
           <import resource="classpath*:crafter/engine/mode/multi-tenant/simple/services-context.xml"/>
        
        </beans>

|

.. code-block:: xml
    :caption: {delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/rendering-context.xml

    <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                               http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
        
           <import resource="classpath*:crafter/engine/mode/multi-tenant/simple/rendering-context.xml"/>
        
        </beans>

|

After you have made the required changes and reloaded the ROOT.war file, each request will resolve
the site using either a cookie or a query parameter. This will allow you to easily change the
current site from the URL.

  ``HOST:PORT/?crafterSite=site1`` will render the home page for ``site1``
  
  ``HOST:PORT/?crafterSite=site2`` will render the home page for ``site2``

.. WARNING::
  Using this configuration you need to be sure that the first request includes the ``crafterSite``
  parameter so that the site value is set in the cookie for the next requests.

------------------------------
Configure Mapped Multi-Tenancy
------------------------------

This is the recommended approach for production environments because this configuration will
guarantee that all requests will be able to resolve the right site.

To enable this mode you need to change the following files:

.. code-block:: xml
    :caption: TOMCAT/shared/classes/crafter/engine/extension/services-context.xml

    <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                               http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
        
        <import resource="classpath*:crafter/engine/mode/multi-tenant/mapped/services-context.xml"/>
        
    </beans>

|

.. code-block:: xml
    :caption: TOMCAT/shared/classes/crafter/engine/extension/rendering-context.xml

    <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                               http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
        
        <import resource="classpath*:crafter/engine/mode/multi-tenant/mapped/rendering-context.xml"/>
        
    </beans>

|

You also need to define a mapping from domain names to site names in a properties file:

.. code-block:: properties
    :caption: TOMCAT/shared/classes/crafter/engine/extension/site-mappings.properties

    site1.com=site1
    www.site1.com=site1
    site2.com=site2
    www.site2.com=site2

|

After you have made the required changes and reloaded the ROOT.war file, each request will resolve
the site using the domain name of the server. For example a request to 
\http://www.site1.com/foo/bar will look for a file ``/foo/bar/index.xml`` in ``site1``.

.. NOTE::
  Using this configuration it is not possible to access a site using internal addresses like
  ``localhost`` or ``127.0.0.1``. You will need to change the hostname for the server or manage
  virtual hosts using an HTTP server.
