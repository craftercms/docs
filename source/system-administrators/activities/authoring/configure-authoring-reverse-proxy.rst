:is-up-to-date: True
:since-version: 4.0.3

.. index:: Configuring Apache HTTPd for Authoring, Configure Reverse Proxy

.. _configure-reverse-proxy-for-authoring:

=========================================
Configuring a Reverse Proxy for Authoring
=========================================

.. version_tag::
   :label: Since
   :version: 4.0.3

This section will show you an example reverse proxy using Apache 2 HTTPd vhost configuration for Crafter Studio.

.. code-block:: apache
    :linenos:

    <VirtualHost *:80>
        ServerName authoring.example.com

        ProxyPreserveHost On

        # Authoring and Preview
        ProxyPassMatch ^/(studio/events)$  ws://localhost:8080/$1
        ProxyPass / http://localhost:8080/
        ProxyPassReverse / http://localhost:8080/

        # This is where errors related to this virtual host are stored
        ErrorLog ${APACHE_LOG_DIR}/studio-error.log
        # This is where access logs are stored
        CustomLog ${APACHE_LOG_DIR}/studio-access.log combined
    </VirtualHost>

|

For more information on Apache HTTPd, see: http://httpd.apache.org/docs/current/vhosts/index.html
