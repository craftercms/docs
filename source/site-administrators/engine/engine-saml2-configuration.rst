:is-up-to-date: True

.. index:: Engine SAML2 Configuration

.. _engine-saml2-configuration:

===========================================
Engine SAML2 Configuration |enterpriseOnly|
===========================================

Crafter Engine can be configured to support SAML2 SSO out of the box without using any additional plugin.

------------
Requirements
------------

#. A SAML2 compatible Identity Provider properly configured, this configuration will not be covered here
#. A Java KeyStore file containing all needed keys & certificates, this can be generated with the Java Keytool or any 
   other compatible tool
#. XML descriptors for the Identity Provider and the Service Provider (Crafter Engine)

.. note::
  If Crafter Engine will be behind a load balancer or proxy server, the XML Service Provider descriptor needs to use
  the public URL for the Identity Provider to be able to communicate

-----------------------------
Update the Site Configuration
-----------------------------

SAML2 authentication can be enabled by updating the site configuration to include the following properties:

.. code-block:: xml
  :linenos:
  :caption: Example SAML2 configuration

  <security>
     <saml2>
        <enable>true</enable>
        <attributes>DisplayName</attributes>
        <role>
           <mappings>
              <mapping>
                 <name>editor</name>
                 <role>ROLE_EDITOR</role>
              </mapping>
           </mappings>
        </role>
        <keystore>
           <defaultCredential>my-site</defaultCredential>
           <password>superSecretPassword</password>
           <credentials>
              <credential>
                 <name>my-site</name>
                 <password>anotherSecretPassword</password>
              </credential>
           </credentials>
        </keystore>
        <identityProviderName>My IDP</identityProviderName>
        <serviceProviderName>Crafter Engine</serviceProviderName>
     </saml2>
  </security>

^^^^^^^^^^^^^^^^^^
Properties Details
^^^^^^^^^^^^^^^^^^
+-----------------------------------+-------------------------------------------+-------------------------------------+
|| Property                         || Description                              || Default Value                      |
+===================================+===========================================+=====================================+
|``enable``                         |Indicates if SAML2 is enabled or not       |``false``                            |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``attributes``                     |Comma separated list of the custom         |                                     |
|                                   |attributes sent by the IDP                 |                                     |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``role.key``                       |Name of the role attribute sent by the IDP |``Role``                             |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``role.mappings.mapping``          |List of mappings to apply for roles, every |                                     |
|                                   |role sent by the IDP will be compared      |                                     |
|                                   |against this list                          |                                     |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``keystore.defaultCredential``     |The name of the default credential to use  |                                     |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``keystore.path``                  |The path of the keystore file in the repo  |``/config/engine/saml2/keystore.jks``|
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``keystore.password``              |The password of the keystore file          |                                     |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``keystore.credentials.credential``|List of credentials in the keystore        |                                     |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``identityProviderName``           |The name of the identity provider to use   |                                     |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``identityProviderDescriptor``     |The path of the identity provider metadata |``/config/engine/saml2/idp.xml``     |
|                                   |XML descriptor in the repo                 |                                     |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``serviceProviderName``            |The name of the service provider to use    |                                     |
+-----------------------------------+-------------------------------------------+-------------------------------------+
|``serviceProviderDescriptor``      |The path of the service provider metadata  |``/config/engine/saml2/sp.xml``      |
|                                   |XML descriptor in the repo                 |                                     |
+-----------------------------------+-------------------------------------------+-------------------------------------+

-------------------------
Commit the required files
-------------------------

You will need to add & commit the keystore and descriptor files manually to the site repository, the location will
depend on the configuration used. The following example uses the default locations:

.. code-block:: bash
  :linenos:
  :caption: Adding the SAML2 files

  cd <PATH TO SITE REPOSITORY>
  mkdir config/engine/saml2
  cp ~/keystore.jks config/engine/saml2/
  cp ~/idp.xml config/engine/saml2/
  cp ~/sp.xml config/engine/saml2
  git add .
  git commit -m "Add SAML2 config files"

After completing those steps you should be able to test the SAML2 authentication, if there are no configuration or
communication errors you will be redirected to the SSO login page when trying to access a secured page and then 
automatically return to your site in Crafter Engine.

.. note::
  If you are configuring SAML2 authentication in an authoring environment, you need to make sure that your IDP is
  configured to allow the login to be displayed in an ``iframe`` element by setting the right values for the 
  ``Content-Security-Policy`` header. You can find more information 
  `here <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy>`_.
