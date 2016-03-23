.. highlight:: xml

===========================
Multi Tenancy Configuration
===========================

Assume we have two websites in Crafter Studio that are to be deployed on a single Crafter Engine instance: site1 and site2. This document
describes how to configure this scenario.

#.  Add the following two Spring context files and site mappings property file to enable multi-tenant capabilities. The site mappings file
    should contain host name to site name mappings:

    .. code-block:: xml
        :caption: {ENGINE_INSTALL_DIR}/apache-tomcat/shared/classes/crafter/engine/extension/services-context.xml

        <?xml version="1.0" encoding="UTF-8"?>
            <beans xmlns="http://www.springframework.org/schema/beans"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
                xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
                <import resource="classpath*:crafter/engine/mode/multi-tenant/services-context.xml"/>
        </beans>

    .. code-block:: xml
        :caption: {ENGINE_INSTALL_DIR}/apache-tomcat/shared/classes/crafter/engine/extension/rendering-context.xml

        <?xml version="1.0" encoding="UTF-8"?>
            <beans xmlns="http://www.springframework.org/schema/beans"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
                xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
                <import resource="classpath*:crafter/engine/mode/multi-tenant/rendering-context.xml"/>
        </beans>

    .. code-block:: properties
        :caption: {ENGINE_INSTALL_DIR}/apache-tomcat/shared/classes/crafter/engine/extension/site-mappings.properties

        site1.com=site1
        www.site1.com=site1
        site2.com=site2
        www.site2.com=site2

#.  The root folder path, as shown below, needs to be configured to include the substitution variable {siteName}. This variable is resolved
    dynamically on every request, depending on the request's host name, which would be mapped to a site name. With the setting below, a
	request to http://www.site1.com/foo/bar will make the engine look for files inside /opt/crafter/site1/content.

    .. code-block:: properties
        :caption: {ENGINE_INSTALL_DIR}/apache-tomcat/shared/classes/crafter/engine/server-config.properties

        crafter.engine.site.default.rootFolder.path=file:/opt/crafter/{siteName}/content
