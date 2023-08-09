:is-up-to-date: False
:last-updated: 4.0.0
:orphan:

.. index:: Multi-Tenancy, Configuration; Crafter Engine Multi-Tenancy

.. _configure-multi-tenancy-in-engine:

=================================
Configure Multi-Tenancy in Engine
=================================

  .. note:: *This guide applies only to the* **delivery environment** *of CrafterCMS*

One instance of Crafter Engine can handle multiple sites (multi-tenancy). This guide explains how
to setup Crafter Engine for multi-tenancy.

Assume we have two websites in Crafter Studio that are to be deployed on a single Crafter Engine
instance: site1 and site2. To enable multi-tenancy capabilities you need to add the right
configuration using the Spring context files.

------------------------------
Configure the Root Folder Path
------------------------------

The root folder path, as shown below, needs to be configured to include a substitution variable ``{siteName}`` in the :ref:`server-config.properties <engine-configuration-files>` file:

.. code-block:: properties
  :caption: *{delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

  crafter.engine.site.default.rootFolder.path=file:/opt/crafter/data/site-content/{siteName}/content

|

This variable will be resolved by Crafter Engine for each request. To resolve this value, simply configure
simple multi-tenancy, with an Apache HTTP server, NGINX, or CDN proxying Crafter Engine.

------------------------------
Configure Simple Multi-Tenancy
------------------------------

Using this mode you can easily support multiple sites without any additional configuration in
external components.

To enable this mode you need to change the following :ref:`Crafter Engine configuration files <engine-configuration-files>`:

.. code-block:: xml
    :caption: *{delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/services-context.xml*

    <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                               http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
        
           <import resource="classpath*:crafter/engine/mode/multi-tenant/simple/services-context.xml"/>
        
        </beans>

|

.. code-block:: xml
    :caption: *{delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/rendering-context.xml*

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

|

Aside from the ``crafterSite`` parameter, a header can be sent to specify the site name, called
``X-Crafter-Site`` for changing the current site. This is very useful when Crafter Engine is used
together with CDNs that can send headers, like AWS CloudFront

  .. WARNING::
    Using this configuration you need to be sure that the first request specifies the site name by
    including the ``crafterSite`` parameter (or the ``X-Crafter-Site`` header) so that the site value
    is set in the cookie for the next requests.

|

  .. note::

     .. include:: /includes/project-identification-precedence.rst
