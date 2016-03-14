.. highlight:: xml

=====================
Preview Configuration
=====================

#.  Add the following two Spring context files to enable preview capabilities:

    .. code-block:: xml
        :caption: {ENGINE_INSTALL_DIR}/apache-tomcat/shared/classes/crafter/engine/extension/services-context.xml

        <?xml version="1.0" encoding="UTF-8"?>
            <beans xmlns="http://www.springframework.org/schema/beans"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
                xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
                <import resource="classpath*:crafter/engine/mode/preview/services-context.xml"/>
        </beans>

    .. code-block:: xml
        :caption: {ENGINE_INSTALL_DIR}/apache-tomcat/shared/classes/crafter/engine/extension/rendering-context.xml

        <?xml version="1.0" encoding="UTF-8"?>
            <beans xmlns="http://www.springframework.org/schema/beans"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
                xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
                <import resource="classpath*:crafter/engine/mode/preview/rendering-context.xml"/>
        </beans>

#.  The root folder path, as shown below, needs to be configured to include the substitution variable {siteName}. This variable is resolved
    dynamically on every request, depending on a site cookie value that Crafter Studio sets.  

    .. code-block:: properties
        :caption: {ENGINE_INSTALL_DIR}/apache-tomcat/shared/classes/crafter/engine/server-config.properties

        crafter.engine.site.default.rootFolder.path=file:/opt/crafter/{siteName}/content
