:is-up-to-date: True
:since-version: 4.0.3

.. index:: Configuring Apache Virtual Host for Authoring, Configuring Apache vhost

.. _configure-apache-vhost-for-authoring:

=============================================
Configuring Apache Virtual Host for Authoring
=============================================

.. version_tag::
   :label: Since
   :version: 4.0.3

This section will show you a sample Apache virtual host configuration for your CrafterCMS project in authoring.

Here's the sample configuration for setting up a vhost for Studio:

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

For more information on Apache Virtual Host, see: http://httpd.apache.org/docs/current/vhosts/index.html
