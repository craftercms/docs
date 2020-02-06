:is-up-to-date: True

.. index:: Studio SAML

.. _crafter-studio-configure-studio-saml:

===========================================
Studio SAML2 Configuration |enterpriseOnly|
===========================================

.. warning::
   **This feature is still in beta**

Crafter Studio can be configured to support SAML2 SSO out of the box without using any additional plugin.

------------
Requirements
------------
* A SAML2 compatible Identity Provider properly configured, this configuration will not be covered here

* A Java KeyStore file containing all needed keys & certificates, this can be generated with the Java Keytool or any other compatible tool

* XML descriptors for the Identity Provider and the Service Provider

---------
Configure
---------

To configure Studio SAML2, in your Authoring installation, go to ``bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add the following lines to ``studio-config-override.yaml`` (of course, make any appropriate configuration changes according to your system):

.. code-block:: yaml
   :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
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
- ``studio.security.saml.keystore.alias``: Keystore entry identifier

The classpath is located in your Authoring installation, under ``bin/apache-tomcat/shared/classes``.  As shown in the example above, the identity provider metadata XML descriptor is located in your Authoring installation under ``bin/apache-tomcat/shared/classes/crafter/studio/extension/saml`` folder.

.. code-block:: yaml
   :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

   # IDP Metadata location (classpath resource)
   studio.security.saml.metadata.location.idp: "/crafter/studio/extension/saml/idp-metadata.xml"

|

Restart Studio after configuring the above.