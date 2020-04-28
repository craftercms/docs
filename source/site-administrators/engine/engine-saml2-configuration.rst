:is-up-to-date: True

.. index:: Engine SAML2 Configuration

.. _engine-saml2-configuration:

===========================================
Engine SAML2 Configuration |enterpriseOnly|
===========================================

.. note:: This guide includes SAML2 specific configuration only, for a general guide see 
          :ref:`engine-site-security-guide`

Crafter Engine can be configured to support SAML2 SSO out of the box without using any additional plugin.

------------
Requirements
------------

#.  A SAML2 compatible Identity Provider properly configured, this configuration will not be covered here
#.  A Java KeyStore file containing all needed keys & certificates, this can be generated with the Java Keytool or any 
    other compatible tool. For example:
    
    ``keytool -genkey -alias CREDENTIAL_NAME -keystore keystore.jks -storepass STORE_PASSWORD``
    
#.  XML descriptors for the Identity Provider and the Service Provider (Crafter Engine). The descriptor for Crafter
    Engine can be generated following these steps:
    
    #.  Export the X509 certificate from the key store file:
    
        ``keytool -export -alias CREDENTIAL_NAME -keystore keystore.jks -rfc -file CREDENTIAL_NAME.cer``
    
    #.  Create the XML descriptor, either using a `third party tool <https://www.samltool.com/sp_metadata.php>`_ or
        manually. The descriptor should look like this:
       
        .. code-block:: xml
          :caption: Example SAML 2.0 Service Provider Metadata
          :emphasize-lines: 2,3,7,14,18,20
       
          <?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="<Entity ID>">
            <md:SPSSODescriptor AuthnRequestsSigned="true" WantAssertionsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
              <md:KeyDescriptor use="signing">
                <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                  <ds:X509Data>
                    <ds:X509Certificate><Certificate></ds:X509Certificate>
                  </ds:X509Data>
                </ds:KeyInfo>
              </md:KeyDescriptor>
              <md:KeyDescriptor use="encryption">
                <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                  <ds:X509Data>
                    <ds:X509Certificate><Certificate></ds:X509Certificate>
                  </ds:X509Data>
                </ds:KeyInfo>
              </md:KeyDescriptor>
              <md:SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="<Logout URL>"/>
              <md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</md:NameIDFormat>
              <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="<SAML URL>" index="0" isDefault="true"/>
            </md:SPSSODescriptor>
          </md:EntityDescriptor>
        
        Replacing the following values:
        
        - **Entity ID**: Unique identifier for the service provider
        - **AuthnRequestsSigned**: indicates if the service provider will sign authentication requests
        - **WantAssertionsSigned**: indicates if the service provider requires signed assertions
        - **Certificate**: The content of the certificate obtained in the previous step
        - **Logout URL**: The full URL for the service provider logout endpoint (``ENGINE_URL/saml/logout``)
        - **SAML URL**: The full URL for the service provider SSO processing endpoint (``ENGINE_URL/saml/SSO``)

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
        <attributes>
          <mappings>
            <mapping>
              <name>DisplayName</name>
              <attribute>fullName</attribute>
            </mapping>
          </mappings>
        </attributes>
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
|``attributes.mappings.mapping``    |List of mappings to apply for attributes,  |                                     |
|                                   |every attribute sent by the IDP will be    |                                     |
|                                   |compared against this list and will be     |                                     |
|                                   |available as described in                  |                                     |
|                                   |:ref:`engine-security-access-attributes`   |                                     |
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
