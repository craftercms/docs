:is-up-to-date: True

.. index:: Single Tenant, Configuration; Crafter Engine Single Tenant

.. _newIa-engine-site-configuration-single-tenant:

==================================
Configure Single-Tenancy in Engine
==================================

.. note:: *This guide applies only to the* **delivery environment** *of CrafterCMS*

Crafter Engine by default is setup for multi-tenancy (multiple sites handled by a single Crafter Engine).  There are instances where the deployment is for a single site.
This guide explains how to setup Crafter Engine for single tenancy.

Assume we have a website in Crafter Studio named ``editorial``, to be deployed on Crafter Engine.  To setup single tenancy, follow the instructions listed below.

--------------------------
Configure the Default Name
--------------------------

The default name, as shown below, needs to be configured with the name of the site to be deployed (site name is ``editorial`` for our example), by adding the following lines in the :ref:`server-config.properties <newIa-engine-configuration-files>` file:

.. code-block:: properties
  :caption: *{delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

      # The default site name, when not in preview or multi-tenant modes
      crafter.engine.site.default.name=editorial

|

--------------------------------------------
Change Simple Multi-Tenancy to Single-Tenant
--------------------------------------------

As mentioned above, Crafter Engine is setup for multi-tenancy by default.  To change it to single tenant, comment out the import line in your :ref:`Crafter Engine configuration files <newIa-engine-configuration-files>` ``services-context.xml`` and ``rendering-context.xml`` file like so:

.. code-block:: xml
    :caption: *{delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/services-context.xml*

        <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                               http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
           <!--
           <import resource="classpath*:crafter/engine/mode/multi-tenant/simple/services-context.xml"/>
           -->
        </beans>

|

.. code-block:: xml
    :caption: *{delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/rendering-context.xml*

        <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                               http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
           <!--
           <import resource="classpath*:crafter/engine/mode/multi-tenant/simple/rendering-context.xml"/>
           -->
        </beans>

|

After making your changes and reloading, your Crafter Engine in delivery is now setup for single tenancy.