:is-up-to-date: True

.. index:: Studio SAML

.. _crafter-studio-configure-studio-saml:

===========================================
Studio SAML2 Configuration |enterpriseOnly|
===========================================

Crafter Studio can be configured to support SAML2 SSO out of the box without using any additional plugin.

------------
Requirements
------------
#.  A SAML2 compatible Identity Provider properly configured, this configuration will not be covered here
#.  A Java KeyStore file containing all needed keys & certificates, this can be generated with the Java Keytool or any
    other compatible tool. For example:

    ``keytool -genkey -alias CREDENTIAL_NAME -keystore keystore.jks -storepass STORE_PASSWORD``

       .. note:: Some versions of the Keytool support a different password for the keystore and the key generated, you
          will be prompted for one or you can add the ``-keypass KEY_PASSWORD`` parameter.

    Take note of the values of the following options used to generate your keystore that will be used later for configuring Studio:

    * **alias**: The value used for this option wil be used in the ``studio.security.saml.keystore.alias`` property
    * **storepass**: The value used for this option will be used in the ``studio.security.saml.keystore.storePassword`` property
    * **keypass**: The value used for this option will be used in the ``studio.security.saml.keystore.keyPassword`` property

#.  XML descriptors for the Identity Provider and the Service Provider (Crafter Studio). The descriptor for Crafter
    Studio can be generated following these steps:

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

        |

        Replacing the following values:

        - **Entity ID**: Unique identifier for the service provider
        - **AuthnRequestsSigned**: indicates if the service provider will sign authentication requests
        - **WantAssertionsSigned**: indicates if the service provider requires signed assertions
        - **Certificate**: The content of the certificate obtained in the previous step
        - **Logout URL**: The full URL for the service provider logout endpoint (``STUDIO_URL/saml/logout``)
        - **SAML URL**: The full URL for the service provider SSO processing endpoint (``STUDIO_URL/saml/SSO``)

.. note::
  If Crafter Studio will be behind a load balancer or proxy server, the XML Service Provider descriptor needs to use
  the public URL for the Identity Provider to be able to communicate

---------
Configure
---------

To configure Studio SAML2, in your Authoring installation, we need to enable SAML security then we'll setup the required SAML configuration properties.

To enable SAML security, go to ``CRAFTER_HOME/bin``, open the ``crafter-setenv.sh`` file and uncomment the line ``export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity``:

.. code-block:: sh
   :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

   # -------------------- Spring Profiles --------------------
   ...
   # Uncomment to enable SAML security
   export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity
   # For multiple active spring profiles, create comma separated list

|

Next we'll setup SAML configuration properties.  Go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add the following lines to :ref:`studio-config-override.yaml <studio-configuration-files>` (of course, make any appropriate configuration changes according to your system):

.. code-block:: yaml
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
   :linenos:

   ###############################################################
   ##               SAML Security                               ##
   ###############################################################
   # SAML security enabled
   studio.security.saml.enabled: true
   # SAML attribute name for email
   studio.security.saml.attributeName.email: email
   # SAML attribute name for first name
   studio.security.saml.attributeName.firstName: givenName
   # SAML attribute name for last name
   studio.security.saml.attributeName.lastName: surname
   # SAML attribute name for group
   studio.security.saml.attributeName.group: Role
   # Service Provider Metadata location (classpath resource)
   studio.security.saml.metadata.location.serviceProvider: "/crafter/studio/extension/saml/sp-metadata.xml"
   # IDP Metadata location (classpath resource)
   studio.security.saml.metadata.location.idp: "/crafter/studio/extension/saml/idp-metadata.xml"
   # SAML keystore location
   studio.security.saml.keystore.location: classpath:crafter/studio/extension/saml/keystore.jks
   # SAML keystore store password
   studio.security.saml.keystore.storePassword: crafterstore
   # SAML keystore key password
   studio.security.saml.keystore.keyPassword: crafterkey
   # SAML keystore alias
   studio.security.saml.keystore.alias: crafterstudio
   # SAML logout URL
   studio.security.saml.logoutUrl: /studio/saml/logout
   # Enable SAML configuration used when Studio is behind a reverse proxy or load balancer
   # studio.security.saml.reverseProxy.enabled: false
   # The header name that contains the public URL (matching the SAML SP URL) hostname
   # studio.security.saml.reverseProxy.forwardedHostHeaderName: X-Forwarded-Host
   # The header name that contains the public URL (matching the SAML SP URL) port
   # studio.security.saml.reverseProxy.forwardedPortHeaderName: X-Forwarded-Port
   # The header name that contains the public URL (matching the SAML SP URL) protocol
   # studio.security.saml.reverseProxy.forwardedProtoHeaderName: X-Forwarded-Proto
   # The scheme or protocol of the public URL (matching the SAML SP URL). Use if you want to overwrite the forwarded header
   # studio.security.saml.reverseProxy.scheme:
   # The server name or hostname of the public URL (matching the SAML SP URL). Use if you want to overwrite the forwarded header
   # studio.security.saml.reverseProxy.serverName:
   # The port of the public URL (matching the SAML SP URL). Use if you want to overwrite the forwarded header
   # studio.security.saml.reverseProxy.serverPort: 0
   # The context path of the public URL (matching the SAML SP URL)
   # studio.security.saml.reverseProxy.contextPath:
   # SAML Web SSO profile options: authenticate the user silently
   # studio.security.saml.webSSOProfileOptions.passive: false
   # SAML Web SSO profile options: force user to re-authenticate
   # studio.security.saml.webSSOProfileOptions.forceAuthn: false

   |

where

- ``studio.security.saml.enabled``: Indicates if SAML2 is enabled or not
- The following are attributes that Studio expects from the Identity Provider:

     - ``studio.security.saml.attributeName.email``
     - ``studio.security.saml.attributeName.firstName``
     - ``studio.security.saml.attributeName.lastName``
     - ``studio.security.saml.attributeName.group``

- ``studio.security.saml.metadata.location.serviceProvider``: The path of the service provider metadata XML descriptor in the classpath
- ``studio.security.saml.metadata.location.idp``: The path of the identity provider metadata XML descriptor in the classpath
- ``studio.security.saml.keystore.location``: The path of the keystore file in the classpath
- ``studio.security.saml.keystore.storePassword``: The password of the keystore file
- ``studio.security.saml.keystore.keyPassword``: The password of the key
- ``studio.security.saml.keystore.alias``: Keystore entry identifier (unique string to identify the key entry)
- ``studio.security.saml.reverseProxy.enabled``: Indicates if SAML configuration used when Studio is behind a reverse proxy or load balancer is enabled or not
- ``studio.security.saml.reverseProxy.forwardedHostHeaderName``: The header name that contains the public URL (matching the SAML SP URL) hostname
- ``studio.security.saml.reverseProxy.forwardedPortHeaderName``: The header name that contains the public URL (matching the SAML SP URL) port
- ``studio.security.saml.reverseProxy.forwardedProtoHeaderName``:  The header name that contains the public URL (matching the SAML SP URL) protocol
- ``studio.security.saml.reverseProxy.scheme``: The scheme or protocol of the public URL (matching the SAML SP URL). Use if you want to overwrite the forwarded header
- ``studio.security.saml.reverseProxy.serverName``: The server name or hostname of the public URL (matching the SAML SP URL). Use if you want to overwrite the forwarded header
- ``studio.security.saml.reverseProxy.serverPort``: The port of the public URL (matching the SAML SP URL). Use if you want to overwrite the forwarded header
- ``studio.security.saml.reverseProxy.contextPath``: The context path of the public URL (matching the SAML SP URL)
- ``studio.security.saml.webSSOProfileOptions.passive``: Indicates if user is authenticated silently
- ``studio.security.saml.webSSOProfileOptions.forceAuthn``: Indicates if user will be forced to re-authenticate

The classpath is located in your Authoring installation, under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes``.  As shown in the example above, the identity provider metadata XML descriptor is located in your Authoring installation under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/saml`` folder.

.. code-block:: yaml
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

   # IDP Metadata location (classpath resource)
   studio.security.saml.metadata.location.idp: "/crafter/studio/extension/saml/idp-metadata.xml"

|

Restart your Authoring installation after configuring the above.