.. index:: Single Tenant, Configuration; Crafter Engine Single Tenant

.. _engine-site-configuration-single-tenant:

=================================
Configure Single Tenant in Engine
=================================

For most deployments, an instance of Crafter Engine handles a single site (single tenant).
This guide explains how to setup Crafter Engine for single tenant.

-------------------------------
Crafter Engine Extension Folder
-------------------------------

The default Crafter Engine binary (ROOT.war) is built to support single tenant.
In a single tenant deployment, folder ``TOMCAT/shared/classes/crafter/engine/extension``
must contain one and only one file: ``server-config.properties``.

-------------------------------
Sample server-config.properties
-------------------------------

This example configures a site named ``mysite``. Tomcat is listening to port 9080,
and it also runs ``crafter-search.war`` and ``crafter-profile.war``:

.. code-block:: properties
  :caption: TOMCAT/shared/classes/crafter/engine/extension/server-config.properties

  # The default site name, when not in preview or multi-tenant modes
  crafter.engine.site.default.name=mysite
  # Content root folder. The {siteName} variable will be automatically replaced. This is a file URL, even in Windows forward
  # slashes (/) should be used, e.g. file:/C:/crafter/data/repos/sites/{siteName}/sandbox
  crafter.engine.site.default.rootFolder.path=file:../data/repos/sites/mysite
  # The URL of Crafter Search
  crafter.engine.search.server.url=http://localhost:9080/crafter-search
  # The URL of Crafter Profile
  crafter.profile.rest.client.url.base=http://localhost:9080/crafter-profile
  # If the Security Provider is enabled
  crafter.security.enabled=true
  # environments (local, dev, prod)
  crafter.engine.environment=dev

.. NOTE::

- Placeholder ``TOMCAT`` above refers to the Tomcat folder in Crafter Engine
  deployment, and it usually is ``bin/apache-tomcat`` under the Crafter Engine
  root folder.
- Additional changes to ``bin/apache-tomcat/conf/server.xml`` and ``bin/crafter-setenv.sh``
  are required to change the default port number from 8080 to 9080.
