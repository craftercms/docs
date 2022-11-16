:is-up-to-date: True
:since-version: 4.0.3
:nosearch:

.. index:: Apache HTTPd, Configure Reverse Proxy

.. _newIa-reverse-proxy-configuration:

===========================
Reverse Proxy Configuration
===========================

.. version_tag::
   :label: Since
   :version: 4.0.3

In this section, we discuss how to configure a reverse proxy using Apache 2 HTTPd vhost configuration
for authoring and delivery.

Below are the directives used for setting up a reverse proxy with Apache:

.. _newIa-configure-reverse-proxy-for-authoring:

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

.. _newIa-configure-reverse-proxy-for-delivery:

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

Depending on your setup, the following CrafterCMS properties may need to be setup:

- ``reverseProxy`` property when configuring :ref:`Engine SAML2 <newIa-engine-saml2-configuration>`
- ``crafter.engine.forwarded.headers.enabled`` property under :ref:`newIa-engine-forwarded-headers` in :ref:`newIa-engine-saml2-configuration`
- ``studio-config-forwarded-headers`` property under :ref:`newIa-studio-config-forwarded-headers` in :ref:`newIa-studio-config-override`
- ``studio.security.saml.reverseProxy`` properties as describe in :ref:`newIa-crafter-studio-configure-studio-saml`
