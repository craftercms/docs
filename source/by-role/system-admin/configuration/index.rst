:is-up-to-date: True
:last-updated: 4.1.2

.. index:: Configuration, Ports, Hostnames, Apache HTTPd, Configure Reverse Proxy

.. _system-admin-configuration:

=============
Configuration
=============
.. contents::
    :local:
    :depth: 3

This section describes how to configure CrafterCMS.

.. TODO
    General configuration topics that span all modules. Examples
        - [x] How to configure Security
        - [x] How to set up a project/site for delivery
        - [x] How to configure Ports and Hostnames
        - [x] How to configure logging
        - [x] How to configure the reverse proxy
    Module-specific configuration topics. Examples
        - [x] How to configure Studio
        - [x] How to configure Engine
        - [x] How to configure Deployer
        - [x] How to configure Profile
        - How to configure Social

---------------------
General Configuration
---------------------
^^^^^^^^
Security
^^^^^^^^
To secure your CrafterCMS install, please see :ref:`system-admin-security`.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Setup Project for a Delivery Environment
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Setting up a project or site for delivery can be done for traditional deployments or serverless deployments. Furthermore, a project or site can be set up as ``staging`` or ``live``.

For traditional delivery, follow the article :ref:`setup-project-for-delivery`, and for serverless delivery, follow the article :ref:`setup-serverless-delivery`.

^^^^^^^^^^^^^^^^^^^
Ports and Hostnames
^^^^^^^^^^^^^^^^^^^
"""""""""""""""""""""""""""
Default Ports and Hostnames
"""""""""""""""""""""""""""
CrafterCMS uses the following default ports and hostnames:

.. list-table::
    :header-rows: 1

    * - Module
      - Port
      - Hostname
    * - Studio
      - 8080 |br| 33306 |br| 5701
      - localhost
    * - Engine
      - 8080 |br| 9080
      - localhost
    * - Deployer
      - 9191 |br| 9192
      - localhost
    * - Search
      - 9201 |br| 9202
      - localhost
    * - Profile
      - 8080 |br| 9080
      - localhost
    * - Social
      - 8080 |br| 9080
      - localhost

.. _change-ports-and-hostnames:

""""""""""""""""""""""""""
Change Ports and Hostnames
""""""""""""""""""""""""""
There are times when you need to change the ports and/or hostnames in your CrafterCMS installation.
Changes to the ports and/or hostnames may be required in the following cases:

- If you need to change the port that an application in the current installation binds to. |br|
  To change the port, update the respective port variable.
- If you need the applications in the current installation to communicate with another application that's in a
  different host and/or port |br|
  To change the hostname (and port as required), update the hostname (and port) variable of the external application.

.. _authoring-environment-ports-and-hostnames:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Authoring Environment Ports and Hostnames
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
You can change all the hostnames and ports used for communication by the CrafterCMS authoring applications in
``AUTHORING_INSTALL_DIR/bin/crafter-setenv.sh``:

.. code-block:: bash
    :caption: *AUTHORING_INSTALL_DIR/bin/crafter-setenv.sh hostnames and ports with defaults*
    :linenos:

    export MAIL_HOST=${MAIL_HOST:="localhost"}
    export MAIL_PORT=${MAIL_PORT:="25"}
    export SEARCH_HOST=${SEARCH_HOST:="localhost"}
    export SEARCH_PORT=${SEARCH_PORT:="9201"}
    export DEPLOYER_HOST=${DEPLOYER_HOST:="localhost"}
    export DEPLOYER_PORT=${DEPLOYER_PORT:="9191"}
    export MONGODB_HOST=${MONGODB_HOST:="localhost"}
    export MONGODB_PORT=${MONGODB_PORT:="27020"}
    export MARIADB_HOST=${MARIADB_HOST:="127.0.0.1"}
    export MARIADB_PORT=${MARIADB_PORT:="33306"}
    export TOMCAT_HOST=${TOMCAT_HOST:="localhost"}
    export TOMCAT_HTTP_PORT=${TOMCAT_HTTP_PORT:="8080"}
    export TOMCAT_HTTPS_PORT=${TOMCAT_HTTPS_PORT:="8443"}
    export TOMCAT_AJP_PORT=${TOMCAT_AJP_PORT:="8009"}
    export TOMCAT_SHUTDOWN_PORT=${TOMCAT_SHUTDOWN_PORT:="8005"}
    export TOMCAT_DEBUG_PORT=${TOMCAT_DEBUG_PORT:="8000"}

|

.. _delivery-environment-ports-and-hostnames:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Delivery Environment Ports and Hostnames
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
You can change all the hostnames and ports used for communication by the CrafterCMS delivery applications in
``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh``:

.. code-block:: bash
    :caption: *DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh hostnames and ports with defaults*
    :linenos:

    # -------------------- hostnames and ports --------------------
    export MAIL_HOST=${MAIL_HOST:="localhost"}
    export MAIL_PORT=${MAIL_PORT:="25"}
    export SEARCH_HOST=${SEARCH_HOST:="localhost"}
    export SEARCH_PORT=${SEARCH_PORT:="9202"}
    export DEPLOYER_HOST=${DEPLOYER_HOST:="localhost"}
    export DEPLOYER_PORT=${DEPLOYER_PORT:="9192"}
    export MONGODB_HOST=${MONGODB_HOST:="localhost"}
    export MONGODB_PORT=${MONGODB_PORT:="28020"}
    export TOMCAT_HOST=${TOMCAT_HOST:="localhost"}
    export TOMCAT_HTTP_PORT=${TOMCAT_HTTP_PORT:="9080"}
    export TOMCAT_HTTPS_PORT=${TOMCAT_HTTPS_PORT:="9443"}
    export TOMCAT_AJP_PORT=${TOMCAT_AJP_PORT:="9009"}
    export TOMCAT_SHUTDOWN_PORT=${TOMCAT_SHUTDOWN_PORT:="9005"}
    export TOMCAT_DEBUG_PORT=${TOMCAT_DEBUG_PORT:="9000"}

|

^^^^^^^
Logging
^^^^^^^
Learn more about how to configure CrafterCMS :ref:`logging`.

.. _reverse-proxy-configuration:

^^^^^^^^^^^^^
Reverse Proxy
^^^^^^^^^^^^^
It's often times desirable to use a reverse proxy or a CDN to front the CrafterCMS Studio and Engine web applications. This can be helpful for faster serving of static assets, caching, and SSL termination among other benefits. In this section, we discuss how to configure a reverse proxy using Apache 2 HTTPd vhost configuration
for authoring and delivery. A similar approach can be used for other HTTPd servers.

Below are the directives used for setting up a reverse proxy with Apache:

.. _configure-reverse-proxy-for-authoring:

.. code-block:: apache
   :caption: *Authoring Configuration*

   <VirtualHost *:80>
        ServerName authoring.example.com

        ProxyPreserveHost On

        # Proxy Authoring and Preview (Crafter Studio and Engine Preview)
        ProxyPassMatch ^/(studio/events)$  ws://localhost:8080/$1
        ProxyPass / http://localhost:8080/
        ProxyPassReverse / http://localhost:8080/

        # Configure the log files
        ErrorLog ${APACHE_LOG_DIR}/crafter-studio-error.log
        CustomLog ${APACHE_LOG_DIR}/crafter-studio-access.log combined
   </VirtualHost>

.. _configure-reverse-proxy-for-delivery:

.. code-block:: apache
   :caption: *Delivery Configuration*

   <VirtualHost *:80>
        ServerName example.com

        # Remember to change {path_to_craftercms_home} to CrafterCMS installation home
        # Remember to change {myproject} to your actual project name

        # Path to your CrafterCMS project
        DocumentRoot /{path_to_craftercms_home}/data/repos/sites/{myproject}

        RewriteEngine On
        # Assign CrafterCMS project for this vhost

        RewriteRule (.*) $1?crafterSite={myproject} [QSA,PT]

        # Block outside access to management services
        RewriteRule ^/api/1/cache / [NC,PT,L]
        RewriteRule ^/api/1/site/mappings / [NC,PT,L]
        RewriteRule ^/api/1/site/cache / [NC,PT,L]
        RewriteRule ^/api/1/site/context/destroy / [NC,PT,L]
        RewriteRule ^/api/1/site/context/rebuild / [NC,PT,L]

        # Take all inbound URLs and lower case them before proxying to Crafter Engine
        # Crafter Studio enforces lower-case URLs.
        # Using the rewrite rule below, the URL the user sees can be mixed-case,
        # however, what's sent to CrafterCMS is always lower-case.
        RewriteCond %{REQUEST_URI} !^/static-assets/.*$ [NC]
        RewriteCond %{REQUEST_URI} !^/api/.*$ [NC]
        RewriteMap lc int:tolower
        RewriteRule ^/(.*)$ /${lc:$1}

        ProxyPreserveHost On

        # Don't proxy static-asset, instead, serve directly from HTTPd
        ProxyPass /static-assets !

        # Proxy the rest to Crafter Engine
        ProxyPass / http://localhost:9080/
        ProxyPassReverse / http://localhost:9080/

        # Configure the log files
        ErrorLog ${APACHE_LOG_DIR}/crafter-engine-error.log
        CustomLog ${APACHE_LOG_DIR}/crafter-engine-access.log combined
    </VirtualHost>

The ``ProxyPreserveHost`` directive indicates whether it uses incoming Host HTTP request header for proxy request

The ``ProxyPass`` and ``ProxyPassReverse`` directives in the above example specify that traffic to the server name
specified in your config should be proxied to ``http://localhost:8080/`` for your authoring install and
``http://localhost:9080/`` for your delivery install. The ``ProxyPassReverse`` distinguishes your configuration
as a reverse proxy setup.

Depending on your setup, the following CrafterCMS properties may need to be setup:

- ``reverseProxy`` property when configuring :ref:`Engine SAML2 <engine-saml2-configuration>`
- ``crafter.engine.forwarded.headers.enabled`` property under :ref:`engine-forwarded-headers` in :ref:`engine-saml2-configuration`
- ``studio-config-forwarded-headers`` property under :ref:`studio-config-forwarded-headers` in :ref:`studio-config-override`
- ``studio.security.saml.reverseProxy`` properties as describe in :ref:`crafter-studio-configure-studio-saml`


------
Studio
------
Crafter Studio helps create and manage content and code in a project/site. Learn more about Crafter Studio configuration and administration in the article :ref:`Studio Configuration <studio-configuration>`.

------
Engine
------
Crafter Engine delivers the content to consumers/users. Learn more about Crafter Engine configuration and administration in the article :ref:`Engine Configuration <engine-configuration>`.

--------
Deployer
--------
Crafter Deployer ties Studio and Engine together and is responsible for publishing content from Studio to Engine. Learn more about Crafter Deployer configuration and administration in :ref:`Deployer Administration and Configuration <crafter-deployer-administration>`.

-------
Profile
-------
Crafter Profile provides a user identity augmentation capability. It allows the project/site developers to add metadata to existing identity (managed in LDAP for example) and add arbitrary metadata to it, or, it can manage the identity entirely if desired. Learn more about Crafter Profile configuration and administration in :ref:`Profile Configuration and Administration <crafter-profile-admin>`.

.. toctree::
    :hidden:

    crafter-profile-admin

.. TODO
    """""""""
    Main Menu
    """""""""
    .. TODO explain why would one want to edit this
    :ref:`nav-menu-global-config`
    .. TODO Add configuration tasks below detailing how to accomplish that task with references to the relevant configuration files

.. .. toctree::
    :maxdepth: 1

..  studio/studio-configuration
    studio/session-timeout-settings
    studio/publishing-blacklist

..  engine/configure-engine-multi-tenancy
    engine/engine-configuration-overrides
    engine/turning-off-show-error

..  deployer/admin-guide
    deployer/processors-guide
    deployer/templates-guide
    deployer/elasticsearch-configuration-guide

..  profile/index
    profile/admin/index

..  social/index
    social/admin/index

