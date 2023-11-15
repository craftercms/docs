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

---------------------
General Configuration
---------------------
^^^^^^^^
Security
^^^^^^^^
To secure your CrafterCMS install, please see the article :ref:`system-admin-security`.

|hr|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Setup Project in a Delivery Environment
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Setting up a project or site for delivery can be done for traditional deployments or serverless deployments. Furthermore, a project or site can be set up as ``staging`` or ``live``.

For traditional delivery, follow the article :ref:`setup-project-for-delivery`, and for serverless delivery, follow the article :ref:`setup-serverless-delivery`.

|hr|

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

- If you need to change the port that an application in the current installation binds to.
- If you need the applications in the current installation to communicate with another application that's in a different host and/or port.

All the hostnames and ports used for communication by CrafterCMS applications are defined in
``CRAFTER_HOME/bin/crafter-setenv.sh``. You can either modify the file directly or set the environment variables (which is much cleaner). The environment variables are noted in the file, for example, ``MAIL_HOST`` and ``MAIL_PORT`` are used to set the hostname and port for the mail server and CrafterCMS will use those environment variables if present before using the defaults.

.. _authoring-environment-ports-and-hostnames:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Authoring Environment Ports and Hostnames
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The following is an example of the default values for the hostnames and ports used by the CrafterCMS authoring applications ``AUTHORING_INSTALL_DIR/bin/crafter-setenv.sh``

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

.. _delivery-environment-ports-and-hostnames:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Delivery Environment Ports and Hostnames
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The following is an example of the default values for the hostnames and ports used by the CrafterCMS delivery applications ``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh``:

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

|hr|

^^^^^^^
Logging
^^^^^^^
Learn more about how to configure CrafterCMS :ref:`logging`.

|hr|

.. _reverse-proxy-configuration:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Reverse Proxy (Apache HTTPd / NGINX)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
It's often times desirable to use a reverse proxy like Apache HTTPd, NGINX, or a CDN to front the CrafterCMS Studio and Engine web applications. This can be helpful for faster serving of static assets, caching, and SSL termination among other benefits. In this section, we discuss how to configure a reverse proxy using Apache 2 HTTPd vhost configuration
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

Below are the directives used for setting up a reverse proxy with NGINX:

.. _configure-reverse-proxy-for-authoring-nginx:

.. code-block:: nginx
    :caption: *NGINX Authoring Configuration*

    server {
        listen 80;
        server_name authoring.example.com;

        # Proxy Authoring and Preview (Crafter Studio and Engine Preview)
        location ~ ^/(studio/events)$ {
            proxy_pass http://localhost:8080;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }

        location / {
            proxy_pass http://localhost:8080;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Configure the log files
        error_log ${NGINX_LOG_DIR}/crafter-studio-error.log;
        access_log ${NGINX_LOG_DIR}/crafter-studio-access.log combined;
    }

.. _configure-reverse-proxy-for-delivery-nginx:

.. code-block:: nginx
    :caption: *NGINX Delivery Configuration*

    server {
        listen example.com:80;
        server_name  example.com;

        # Remember to change {path_to_craftercms_home} to CrafterCMS installation home
        # Remember to change {myproject} to your actual project name

        location / {
            # Path to your CrafterCMS project
            root /{path_to_craftercms_home}/data/repos/sites/{myproject};

            # Assign CrafterCMS project for this vhost
            rewrite (.*) $1?crafterSite={myproject}

            # Proxy to Crafter Engine
            proxy_set_header X-Forwarded-Host $host:$server_port;
            proxy_set_header X-Forwarded-Server $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://localhost:9080;
        }

        # Configure the log files
        error_log ${NGINX_LOG_DIR}/crafter-engine-error.log;
        access_log ${NGINX_LOG_DIR}/crafter-engine-access.log combined;
    }

Depending on your setup, the following CrafterCMS properties may need to be setup:

- ``crafter.engine.forwarded.headers.enabled`` property under :ref:`engine-forwarded-headers` in the ``server-config.properties`` file
- ``studio-config-forwarded-headers`` property under :ref:`studio-forwarded-headers` in the ``studio-config-override.yaml`` file

|hr|

------
Studio
------
Crafter Studio helps create and manage content and code in a project/site. Learn more about Crafter Studio configuration and administration in the articles :ref:`Studio Configuration <studio-config>` and :ref:`Studio Administration <studio-admin>`.

|hr|

------
Engine
------
Crafter Engine delivers the content to consumers/users. Learn more about Crafter Engine configuration and administration in the article :ref:`Engine Configuration <engine-config>`.

|hr|

--------
Deployer
--------
Crafter Deployer ties Studio and Engine together and is responsible for publishing content from Studio to Engine. Learn more about Crafter Deployer configuration and administration in :ref:`Deployer Administration and Configuration <crafter-deployer-administration>`.

|hr|

-------
Profile
-------
Crafter Profile provides a user identity augmentation capability. It allows the project/site developers to add metadata to existing identity (managed in LDAP for example) and add arbitrary metadata to it, or, it can manage the identity entirely if desired. Learn more about Crafter Profile configuration and administration in :ref:`Profile Configuration and Administration <crafter-profile-admin>`.

|hr|

-------
Social
-------
Crafter Social provides a user generated content management system. It allows the project/site developers to handle all actions related to user-generated content (UGC), including the creation, updating and moderation of content. Learn more about Crafter Social configuration and administration in :ref:`Social Configuration and Administration <crafter-social-admin>`.