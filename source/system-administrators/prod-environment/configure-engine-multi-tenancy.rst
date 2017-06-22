.. index:: Multi-Tenancy, Configuration; Crafter Engine Multi-Tenancy

.. _engine-site-configuration-multi-tenancy:

=================================
Configure Multi-Tenancy in Engine
=================================

.. todo:: Article needs to be updated for 3.0

One instance of Crafter Engine can handle multiple sites (multi-tenancy). This guide explains how to setup Crafter Engine for multi-tenancy.

--------------------
Enable Multi-Tenancy
--------------------

Assume we have two websites in Crafter Studio that are to be deployed on a single Crafter Engine instance: site1 and site2. Add the
following two Spring context files and site mappings property file to enable multi-tenant capabilities. The site mappings file should
contain domain name to site name mappings:

.. code-block:: xml
    :caption: TOMCAT/shared/classes/crafter/engine/extension/services-context.xml

    <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                               http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
        <import resource="classpath*:crafter/engine/mode/multi-tenant/services-context.xml"/>
    </beans>

.. code-block:: xml
    :caption: TOMCAT/shared/classes/crafter/engine/extension/rendering-context.xml

    <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                               http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
        <import resource="classpath*:crafter/engine/mode/multi-tenant/rendering-context.xml"/>
    </beans>

.. code-block:: properties
    :caption: TOMCAT/shared/classes/crafter/engine/extension/site-mappings.properties

    site1.com=site1
    www.site1.com=site1
    site2.com=site2
    www.site2.com=site2

------------------------------
Configure the Root Folder Path
------------------------------

The root folder path, as shown below, needs to be configured to include the substitution variable {siteName}. This variable is resolved
by mapping the domain name of the request to a site name based on the site-mappings.properties, so a request to
http://www.site1.com/foo/bar will make the engine look for files inside /opt/crafter/site1/content.

.. code-block:: properties
    :caption: TOMCAT/shared/classes/crafter/engine/extension/server-config.properties

    crafter.engine.site.default.rootFolder.path=file:/opt/crafter/data/site-content/{siteName}/content
