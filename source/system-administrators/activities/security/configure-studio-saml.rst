:is-up-to-date: True
:since-version: 4.0.3

.. index:: Studio SAML2 Configuration, Studio SAML2

.. _crafter-studio-configure-studio-saml:

===========================================
Studio SAML2 Configuration |enterpriseOnly|
===========================================
.. version_tag::
   :label: Since
   :version: 4.0.3

Crafter Studio can be configured to support SAML2 SSO out of the box without using any additional plugin.

.. important::
   *This document only applies to* **CrafterCMS version 4.0.3 and later** |br|
   *Please see* :ref:`here <crafter-studio-configure-studio-saml-up-to-4-0-2>` *for version 4.0.2 and earlier.*

------------
Requirements
------------
#.  A SAML2 compatible Identity Provider (IdP) properly configured, this configuration will not be covered here
#.  A private key and certificate.  This can be generated like so:

    ``openssl req -newkey rsa:2048 -nodes -keyout rp-private.key -x509 -days 365 -out rp-certificate.crt``

    Take note of the values of the following options used to generate your key and certificate that will be used later for configuring Studio:

    * **keyout**: The value used for this option wil be used in the ``studio.security.saml.rp.privateKey.location`` property
    * **out**: The value used for this option will be used in the ``studio.security.saml.rp.certificate.location`` property

---------
Configure
---------

To configure Studio SAML2, in your Authoring installation, we need to enable SAML security then we'll setup the required SAML configuration properties.

To enable SAML security, go to ``CRAFTER_HOME/bin``, open the ``crafter-setenv.sh`` file and uncomment the line ``export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity``:

.. code-block:: sh
   :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

   # -------------------- Spring Profiles --------------------
   ...
   # Uncomment to enable Crafter Studio SAML2 security
   export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity
   # For multiple active spring profiles, create comma separated list

|

Next we'll setup SAML configuration properties.  Go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add/uncomment the following lines to :ref:`studio-config-override.yaml <studio-configuration-files>` (of course, make any appropriate configuration changes according to your system):

.. code-block:: yaml
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
   :linenos:

   ###############################################################
   ##               SAML Security                               ##
   ###############################################################
   # SAML attribute name for email
   # studio.security.saml.attributeName.email: email
   # SAML attribute name for first name
   # studio.security.saml.attributeName.firstName: givenName
   # SAML attribute name for last name
   # studio.security.saml.attributeName.lastName: surname
   # SAML attribute name for group
   # studio.security.saml.attributeName.group: Role
   ###############################################################
   ##         SAML Security Relying Party (SP) configuration    ##
   ###############################################################
   # {baseUrl} and {registrationId} are pre-defined macros and should not be modified
   # SAML relying party (SP) registration ID. {registrationId} macro will be replaced with this value
   # studio.security.saml.rp.registration.id: SSO
   # SAML relying party (SP) entity ID
   # studio.security.saml.rp.entity.id: "{baseUrl}/saml/metadata"
   # SAML relying party (SP) login processing url. Must end with {registrationId}
   # studio.security.saml.rp.loginProcessingUrl: "/saml/{registrationId}"
   # SAML relying party (SP) assertion consumer service location. Must end with {registrationId}
   # studio.security.saml.rp.assertion.consumer.service.location: "{baseUrl}/saml/{registrationId}"
   # SAML relying party (SP) assertion consumer service biding (POST or REDIRECT)
   # studio.security.saml.rp.assertion.consumer.service.binding: POST
   # SAML logout URL without prefix /studio
   # studio.security.saml.rp.logoutUrl: /saml/logout
   # SAML relying party (SP) single logout service location
   # studio.security.saml.rp.logout.service.location: "{baseUrl}/saml/logout"
   # SAML relying party (SP) logout service binding (POST or REDIRECT)
   # studio.security.saml.rp.logout.service.binding: POST
   # SAML relying party (SP) metadata endpoint
   # studio.security.saml.rp.metadata.endpoint: /saml/metadata
   # SAML relying party (SP) private key location
   # studio.security.saml.rp.privateKey.location: classpath:crafter/studio/extension/saml/rp-private.key
   # SAML relying party (SP) certificate location
   # studio.security.saml.rp.certificate.location: classpath:crafter/studio/extension/saml/rp-certificate.crt
   ###############################################################
   ##      SAML Security Asserting Party (IdP) configuration    ##
   ###############################################################
   # SAML asserting party (IdP) entity ID:
   # studio.security.saml.ap.entityId: https://ap.example.org/ap-entity-id
   # SAML asserting party (IdP) single sign on service location
   # studio.security.saml.ap.single.signOn.service.location: https://ap.example.org/sso/saml
   # SAML asserting party (IdP) single sign on service binding (POST or REDIRECT)
   # studio.security.saml.ap.single.signOn.service.binding: POST
   # SAML asserting party (IdP) logout service location
   # studio.security.saml.ap.single.logout.service.location: https://ap.example.org/slo/saml
   # SAML asserting party (IdP) logout service binding (POST or REDIRECT)
   # studio.security.saml.ap.single.logout.service.binding: POST
   # SAML asserting party (IdP) want authn request signed
   # studio.security.saml.ap.want.authn.request.signed: false
   # SAML asserting party (IdP) certificate location
   # studio.security.saml.ap.certificate.location: classpath:crafter/studio/extension/saml/idp-certificate.crt
   ###############################################################
   ##            SAML Security other configuration              ##
   ###############################################################
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

- ``studio.security.saml.rp.privateKey.location``: The path of the relying party (SP) private key in the classpath
- ``studio.security.saml.rp.certificate.location``: The path of the relying party (SP) certificate in the classpath
- ``studio.security.saml.ap.entityId``: The asserting party (IdP) entity ID
- ``studio.security.saml.ap.single.signOn.service.location``: The asserting party (IdP) single sign on URL
- ``studio.security.saml.ap.single.logout.service.location``: The asserting party (IdP) single logout URL
- ``studio.security.saml.ap.certificate.location``:  The path of the asserting party (IdP) certificate in the classpath
- ``studio.security.saml.webSSOProfileOptions.passive``: Indicates if user is authenticated silently
- ``studio.security.saml.webSSOProfileOptions.forceAuthn``: Indicates if user will be forced to re-authenticate

The classpath is located in your Authoring installation, under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes``.  As shown in the example above, the relying party private key is located in your Authoring installation under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/saml`` folder.

.. code-block:: yaml
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

   # SAML relying party (SP) private key location
   studio.security.saml.rp.privateKey.location: classpath:crafter/studio/extension/saml/rp-private.key

|

Restart your Authoring installation after configuring the above.