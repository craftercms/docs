.. index:: How to change ports on your Crafter CMS Delivery install; How to change ports

.. _how-to-change-ports-on-your-crafter-delivery-install:

=============================================================================
How To Change the Ports on Your Crafter CMS Delivery Environment Installation
=============================================================================

Crafter CMS when installed using the zip bundles has default ports setup.  The default ports for the delivery environment are listed :ref:`here<delivery-default-ports>`.  This section details how to change the ports of an already installed Crafter CMS delivery environment.

To generate an environment/bundle with your desired ports instead of default ports when you install Crafter CMS, we'll use ``gradle``.  To learn more on how to generate an environment with your desired ports, please see :ref:`common-task-properties`

Let's take a look at a standard development installation - which consists of the following microservices: Crafter Engine, Crafter Search, Solr and Crafter Deployer

.. image:: /_static/images/developer/crafter-cms-ports-delivery.png
     :alt: Crafter CMS Ports
     :width: 70%
     :align: center

In the image above, note the black arrows between components.  These are HTTP connection to (typically) localhost and the port specified on the target component.  The connections are as follows:

* A\. Consumer goes to Crafter Engine for rendering.
* B\. When rendering, Crafter Engine can leverage Crafter Search to perform content queries and searches.
* C\. Crafter Search applies platform-specific business rules and makes query requests to Solr via connection **C**
* D\. Crafter Deployer indexes deployed changes through Crafter Search


---------------------------------------------------
Configuration for Delivery Environment Tomcat Ports
---------------------------------------------------

The default Tomcat port is 9080.  There are a few places that we need to update to change the Tomcat ports.

First, we'll need to change the ports for Crafter Studio, Crafter Engine, and Crafter Search.
Open the file ``DELIVERY_INSTALL_DIR/bin/apache-tomcat/conf/server.xml``.  Notice that there are several ports listed in this XML file:

    * 9005 (shutdown port),
    * 9080 (HTTP connector)
    * 9443 (HTTPS connector)
    * 9009 (AJP connector)

Change the HTTP connector port to your desired port.

In your ``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh / crafter-setenv.bat``, change the following to your desired port:

    * Linux/OS X: export TOMCAT_HTTP_PORT=9080
    * Windows: SET TOMCAT_HTTP_PORT=9080

After changing the Tomcat ports, we need to update the configuration for the communication between the microservices to Crafter Search.

To update Crafter engine, open the file ``DELIVERY_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties`` and update the Crafter Search port:

    * crafter.engine.search.server.url

To  update Crafter Deployer, open the file ``DELIVERY_INSTALL_DIR/bin/crafter-deployer/config/base-target.yaml`` and update the Crafter Search port:

    * target:search:serverUrl

If you are working with both the delivery and the authoring environment, when you update the delivery tomcat port, you will have to update the ports in site specific environment configurations in your authoring installation.  To update the environment configurations in your authoring installation, for each existing site, open the file ``AUTHORING_INSTALL_DIR/data/repos/sites/SITENAME/sandbox/config/studio/environment/environment-config.xml`` and update the port in the ``live-server-url`` to the desired port:

    * <live-server-url>http://localhost:9080/?crafterSite={siteName}</live-server-url>

Finally, we'll also need to update ports in the existing deployer targets.  To update the port in existing deployer targets, open the file ``DELIVERY_INSTALL_DIR/data/deployer/targets/SITENAME-preview.yaml`` and update the ``engineUrl`` to the desired port:

    * engineUrl: http://localhost:8080

-----------------------------------------
Configuration for Delivery Deployer Ports
-----------------------------------------

The default Deployer port is 9192.  There are a few places that we need to update to change the Deployer ports.

First, we'll configure the ports for the Deployer that affects your Studio.  Open the file ``DELIVERY_INSTALL_DIR/bin/crafter-deployer/config/application.yaml`` and change the configured ports to the desired port by adding the following lines with your desired port number:

    .. code-block:: guess

        server:
            port: 9192

|

In your ``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh / crafter-setenv.bat``, change the following to your desired port:

    * OS X/Linux: export SET DEPLOYER_PORT=9192
    * Windows: export DEPLOYER_PORT=9192


-------------------------------------
Configuration for Delivery Solr Ports
-------------------------------------

The default Solr port is 8695.  There are a couple of places that we need to update to change the Solr ports.

We'll update Crafter Search's communication with Solr.

In your ``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh / crafter-setenv.bat``, change the following to your desired port:

    * OS X/Linux: export SOLR_PORT=8695
    * Windows: SET SOLR_PORT=8695

Next, open the file ``DELIVERY_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/search/extension/server-config.properties``, and change the configured port to the desired port for the following:

    * crafter.search.solr.server.url
