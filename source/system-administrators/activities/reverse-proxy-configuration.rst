:is-up-to-date: True
:since-version: 4.0.3

.. index:: Reverse Proxy Configuration, Configuring Apache Virtual Host, Configuring Apache vhost

.. _reverse-proxy-configuration:

===========================
Reverse Proxy Configuration
===========================

.. version_tag::
   :label: Since
   :version: 4.0.3

In this section, we discuss how to configure a reverse proxy for Apache for your
CrafterCMS authoring and delivery installs.

Below are the directives used for setting up a reverse proxy with Apache:

.. code-block:: apache
   :caption: *Authoring Configuration*

   <VirtualHost *:80>
     ProxyPreserveHost On

     # Authoring and Preview
     ProxyPassMatch ^/(studio/events)$  ws://localhost:8080/$1
     ProxyPass / http://localhost:8080/
     ProxyPassReverse / http://localhost:8080/

     ErrorLog ${APACHE_LOG_DIR}/crafter-studio-error.log
     CustomLog ${APACHE_LOG_DIR}/crafter-studio-access.log combined
   </VirtualHost>


.. code-block:: apache
   :caption: *Delivery Configuration*

   <VirtualHost *:80>
     ServerName example.com
     ProxyPreserveHost On

     # Delivery
     ProxyPass / http://localhost:9080/
     ProxyPassReverse / http://localhost:9080/

     ErrorLog ${APACHE_LOG_DIR}/crafter-engine-error.log
     CustomLog ${APACHE_LOG_DIR}/crafter-engine-access.log combined
   </VirtualHost>

The ``ProxyPreserveHost`` directive indicates whether it uses incoming Host HTTP request header for proxy request

The ``ProxyPass`` and ``ProxyPassReverse`` directives in the above example specify that traffic to the server name
specified in your config should be proxied to ``http://localhost:8080/`` for your authoring install and
``http://localhost:9080/`` for your delivery install.  The ``ProxyPassReverse`` distinguishes your configuration
as a reverse proxy setup.

Depending on your setup, the following CrafterCMS properties may need to be setup:

- ``reverseProxy`` property when configuring :ref:`Engine SAML2 <engine-saml2-configuration>`
- ``crafter.engine.forwarded.headers.enabled`` property under :ref:`engine-forwarded-headers` in :ref:`engine-saml2-configuration`
- ``studio-config-forwarded-headers`` property under :ref:`studio-config-forwarded-headers` in :ref:`studio-config-override`
- ``studio.security.saml.reverseProxy`` properties as describe in :ref:`crafter-studio-configure-studio-saml`

The following examples show how to configure a reverse proxy with Apache for your CrafterCMS authoring and delivery installs:

- :ref:`Authoring install <configure-apache-vhost-for-authoring>`
- :ref:`Delivery install <configure-apache-vhost-for-production>`

