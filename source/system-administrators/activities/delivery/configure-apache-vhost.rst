.. index:: Configuring Apache Virtual Host for Production, Configuring Apache vhost
.. _configure-apache-vhost-for-production:

==============================================
Configuring Apache Virtual Host for Production
==============================================

This section will show you a sample Apache virtual host configuration for your Crafter CMS site.

Here's the sample configuration for setting up a vhost for production:

.. code-block:: apache
    :linenos:

    <VirtualHost *:80>
        ServerName example.com

        # Path where your actual Crafter CMS site resides on the server
        DocumentRoot /path_to_crafter/crafter/data/repos/sites/mysite

        RewriteEngine On

        # Assign crafter site/tenant for this vhost
        # Remember to change mysite to your actual site name
        RewriteRule (.*) $1?crafterSite=mysite [QSA,PT]

        # Block outside access to management services
        RewriteRule ^/api/1/cache / [NC,PT,L]
        RewriteRule ^/api/1/site/mappings / [NC,PT,L]
        RewriteRule ^/api/1/site/cache / [NC,PT,L]
        RewriteRule ^/api/1/site/context/destroy / [NC,PT,L]
        RewriteRule ^/api/1/site/context/rebuild / [NC,PT,L]

        # Take all inbound URLs and lower case them before proxying to Crafter Engine
        #     Crafter Studio forces all URL path names to be lower case to have a consistent naming pattern on the server for the files
        #     Using the rewrite rule below, the URL the user sees can be any (upper and/or lower) case
        RewriteCond %{REQUEST_URI} !^/static-assets/.*$ [NC]
        RewriteCond %{REQUEST_URI} !^/api/.*$ [NC]
        RewriteMap lc int:tolower
        RewriteRule ^/(.*)$ /${lc:$1}

        ProxyPreserveHost On

        # Don't send static asset requests to Engine
        ProxyPass /static-assets !

        # Send requests to Engine's Tomcat
        ProxyPass / ajp://localhost:8009/
        ProxyPassReverse / ajp://localhost:8009/

        # This is where errors related to this virtual host are stored
        ErrorLog ${APACHE_LOG_DIR}/mysite-error.log
        # This is where access logs are stored
        CustomLog ${APACHE_LOG_DIR}/mysite-access.log combined
    </VirtualHost>

|

For more information on Apache Virtual Host, see: http://httpd.apache.org/docs/current/vhosts/index.html