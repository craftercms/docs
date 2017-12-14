.. _how-to-change-ports-on-your-crafter-install:

========================================================
How To Change the Ports on Your Crafter CMS Installation
========================================================

Crafter CMS when installed using the zip bundles has default ports setup.  The default ports are listed :ref:`here<authoring-default-ports>`.  This section details how to change the ports of an already installed Crafter CMS.

To generate an environment/bundle with your desired ports instead of default ports when you install Crafter CMS, we'll use ``gradle``.  To learn more on how to generate an environment with your desired ports, please see :ref:`common-task-properties`

Let's take a look at a standard development installation - which consists of the following microservices: Crafter Studio, Crafter Engine, Crafter Search, Solr and Crafter Deployer

.. image:: /_static/images/developer/crafter-cms-ports.jpg
     :alt: Crafter CMS Ports
     :width: 100%
     :align: center

In the image above, note the black arrows between components.  These are HTTP connection to (typically) localhost and the port specified on the target component.  The connections are as follows:

* A\. Developer/consumer goes to Crafter Studio application (/studio).  Crafter Studio IFrames Crafter Engine rendering.
* B\. Crafter Studio queries Crafter Search when users do a search inside the CMS
* C\. When rendering, Crafter Engine can leverage Crafter Search to perform content queries and searches.
* D\. Crafter Search applies platform-specific business rules and makes query requests to Solr via connection **D**
* E\. When content, code or configuration is saved via Crafter Studio or directly via Git, it is picked up by the preview deployer and published to Crafter Search.  Crafter search performs inserts, updates and deletes on Solr via connection **D**
* F\. Crafter Studio maintains/caches project/user and operational metadata (workflow state, dependencies) about content locally in an embedded MariaDB.

------------------------------
Configuration for Tomcat Ports
------------------------------

The default Tomcat port is 8080.  There are a few places that we need to update to change the Tomcat ports.

First, we'll need to change the ports for Crafter Studio, Crafter Engine, and Crafter Search.
Open the file ``INSTALL_DIR/bin/apache-tomcat/conf/server.xml``.  Notice that there are several ports listed in this XML file:

    * 8005 (shutdown port),
    * 8080 (HTTP connector)
    * 8443 (HTTPS connector)
    * 8009 (AJP connector)

Change the HTTP connector port to your desired port.

In your ``INSTALL_DIR/bin/crafter-setenv.sh / crafter-setenv.bat``, change the following to your desired port:

    * Linux/OS X: export TOMCAT_HTTP_PORT=8080
    * Windows: SET TOMCAT_HTTP_PORT=8080

After changing the Tomcat ports, we need to update the configuration for the communication between the microservices to Crafter Search.

To update Crafter Studio Connections, open the file ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml`` and change the following Tomcat connector ports to the desired port:

    * studio.preview.engineUrl
    * studio.preview.search.createUrl
    * studio.preview.search.deleteUrl

To update Crafter engine, open the file ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties`` and update the Crafter Search port:

    * crafter.engine.search.server.url

To  update Crafter Deployer, open the file ``INSTALL_DIR/bin/crafter-deployer/config/base-target.yaml`` and update the Crafter Search port:

    * target:search:serverUrl


--------------------------------
Configuration for Deployer Ports
--------------------------------

The default Deployer port is 9191.  There are a few places that we need to update to change the Deployer ports.

First, we'll configure the ports for the Deployer that affects your Studio.  Open the file ``INSTALL_DIR/bin/crafter-deployer/config/application.yaml`` and change the configured ports to the desired port by adding the following lines with your desired port number:

    .. code-block:: guess

        server:
            port: 9191


In your ``INSTALL_DIR/bin/crafter-setenv.sh / crafter-setenv.bat``, change the following to your desired port:

    * OS X/Linux: export SET DEPLOYER_PORT=9191
    * Windows: export DEPLOYER_PORT=9191

After changing the Deployer ports, we need to update the configuration for the communication between Crafter Studio and the Deployer.

To update Crafter Studio's communication with the Deployer, open the file ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml`` and change the following deployer ports to the desired port:

    * studio.preview.defaultPreviewDeployerUrl
    * studio.preview.createTargetUrl
    * studio.preview.deleteTargetUrl


----------------------------
Configuration for Solr Ports
----------------------------

The default Solr port is 8694.  There are a couple of places that we need to update to change the Solr ports.

We'll update Crafter Search's communication with Solr.

In your ``INSTALL_DIR/bin/crafter-setenv.sh / crafter-setenv.bat``, change the following to your desired port:

    * OS X/Linux: export SOLR_PORT=8694
    * Windows: SET SOLR_PORT=8694

Next, open the file ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/studio/extension/server-config.properties``, and change the configured port to the desired port for the following:

    * crafter.search.solr.server.url

-------------------------------
Configuration for MariaDB Ports
-------------------------------

Crafter CMS has an embedded MariaDB in the installation with a default port of 33306.  There are a couple of places that we need to update to change the MariaDB port.

Open your ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``
change the port to the desired port listed in the following:

    * studio.db.url
    * studio.db.initializer.url
    * studio.db.port

Next, in your ``INSTALL_DIR/bin/crafter-setenv.sh / crafter-setenv.bat``, change the following to your desired port:

    * OS X/Linux: export MARIADB_PORT=33306
    * Windows: SET MARIADB_PORT=33306
