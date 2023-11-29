:is-up-to-date: True
:since-version: 4.0.3

.. index:: Apache HTTPd, Configure Reverse Proxy

.. _reverse-proxy-configuration:

===========================
Reverse Proxy Configuration
===========================

.. version_tag::
   :label: Since
   :version: 4.0.3

In this section, we show an example on how to configure a reverse proxy using NGINX and Apache 2 HTTPd vhost configuration
for authoring and delivery.

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
``http://localhost:9080/`` for your delivery install.  The ``ProxyPassReverse`` distinguishes your configuration
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
        listen 80;
        server_name example.com;
        # Remember to change {path_to_craftercms_home} to CrafterCMS installation home
        # Remember to change {myproject} to your actual project name
        # Path to your CrafterCMS project
        root /{path_to_craftercms_home}/data/repos/sites/{myproject};
        location /static-assets/ {
            # Serve static assets directly from NGINX
            # Adjust the path as needed based on your setup
            alias /{path_to_craftercms_home}/data/repos/sites/{myproject}/static-assets/;
        }
        location / {
            rewrite ^/(.*)$ /$1?crafterSite={myproject} break;
            # Block outside access to management services
            rewrite ^/api/1/cache / break;
            rewrite ^/api/1/site/mappings / break;
            rewrite ^/api/1/site/cache / break;
            rewrite ^/api/1/site/context/destroy / break;
            rewrite ^/api/1/site/context/rebuild / break;
            # Take all inbound URLs and lower case them before proxying to Crafter Engine
            # Crafter Studio enforces lower-case URLs.
            # Using the rewrite rule below, the URL the user sees can be mixed-case,
            # however, what's sent to CrafterCMS is always lower-case.
            if ($request_uri !~ ^/static-assets/.*$ ) {
                if ($request_uri !~ ^/api/.*$ ) {
                    rewrite ^/(.*)$ /${lc:$1} break;
                }
            }
            proxy_pass http://localhost:9080/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
        # Configure the log files
        error_log ${NGINX_LOG_DIR}/crafter-engine-error.log;
        access_log ${NGINX_LOG_DIR}/crafter-engine-access.log combined;
    }

Depending on your setup, the following CrafterCMS properties may need to be setup:

- ``reverseProxy`` property when configuring :ref:`Engine SAML2 <engine-saml2-configuration>`
- ``crafter.engine.forwarded.headers.enabled`` property under :ref:`engine-forwarded-headers` in :ref:`engine-saml2-configuration`
- ``studio-config-forwarded-headers`` property under :ref:`studio-config-forwarded-headers` in :ref:`studio-config-override`
- ``studio.security.saml.reverseProxy`` properties as describe in :ref:`crafter-studio-configure-studio-saml`

