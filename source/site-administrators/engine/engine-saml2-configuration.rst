:is-up-to-date: True
:since-version: 4.0.3

.. index:: Engine SAML2 Configuration

.. _engine-saml2-configuration:

===========================================
Engine SAML2 Configuration |enterpriseOnly|
===========================================
.. version_tag::
   :label: Since
   :version: 4.0.3

.. important::
   *This document only applies to* **CrafterCMS version 4.0.3 and later** |br|
   *Please see* :ref:`here <engine-saml2-configuration-up-to-4-0-2>` *for version 4.0.2 and earlier.*

.. note:: This guide includes SAML2 specific configuration only, for a general guide see
   :ref:`engine-project-security-guide`

|
|

Crafter Engine can be configured to support SAML2 SSO out of the box without using any additional plugin.


------------
Requirements
------------

#.  A SAML2 compatible Identity Provider properly configured, this configuration will not be covered here
#.  A private key and certificate.  This can be generated like so:

    ``openssl req -newkey rsa:2048 -nodes -keyout rp-private.key -x509 -days 365 -out rp-certificate.crt``

    Take note of the values of the following options used to generate your key and certificate that will be
    used later for configuring Crafter Engine:

    * **keyout**: The value used for this option wil be used in the ``crafter.security.saml.rp.privateKey.location`` property
    * **out**: The value used for this option will be used in the ``crafter.security.saml.rp.certificate.location`` property

--------------------------------
Update the Project Configuration
--------------------------------
To configure Engine SAML2, in your Delivery installation, we need to enable SAML security then we'll setup the required SAML configuration properties.

To enable SAML security, go to ``CRAFTER_HOME/bin``, open the ``crafter-setenv.sh`` file and uncomment the line ``export SPRING_PROFILES_ACTIVE=crafter.engine.samlSecurity``:

.. code-block:: sh
   :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

   # -------------------- Spring Profiles --------------------
   ...
   # Uncomment to enable SAML security
   export SPRING_PROFILES_ACTIVE=crafter.engine.samlSecurity
   # For multiple active spring profiles, create comma separated list

|

Next we'll setup SAML configuration properties.  Go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension`` and add/uncomment the following lines to :ref:`server-config.properties <engine-config-override>` (of course, make any appropriate configuration changes according to your system):

.. code-block:: properties
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
   :linenos:

   #############################
   # SAML2 Security Properties #
   #############################
   # SAML attributes mapping
   crafter.security.saml.attributes.mappings=DisplayName:fullname,Avatar:profilePicture
   # SAML roles mapping
   crafter.security.saml.roles.mappings=editor:ROLE_EDITOR
   # SAML attribute role key
   crafter.security.saml.attributeName.role=Role
   ###############################################################
   ##         SAML Security Relying Party (SP) configuration    ##
   ###############################################################
   # {baseUrl} and {registrationId} are pre-defined macros and should not be modified
   # SAML relying party (SP) registration ID. {registrationId} macro will be replaced with this value
   crafter.security.saml.rp.registration.id=SSO
   # SAML relying party (SP) entity ID and metadata endpoint
   crafter.security.saml.rp.entity.id={baseUrl}/saml/metadata
   # SAML relying party (SP) login processing url. Must end with {registrationId}
   crafter.security.saml.rp.loginProcessingUrl=/saml/{registrationId}
   # SAML relying party (SP) assertion consumer service location. Must end with {registrationId}
   crafter.security.saml.rp.assertion.consumer.service.location={baseUrl}/saml/{registrationId}
   # SAML relying party (SP) assertion consumer service biding (POST or REDIRECT)
   crafter.security.saml.rp.assertion.consumer.service.binding=POST
   # SAML relying party (SP) logout URL
   crafter.security.saml.rp.logoutUrl=/saml/logout
   # SAML relying party (SP) single logout service location
   crafter.security.saml.rp.logout.service.location={baseUrl}/saml/logout
   # SAML relying party (SP) logout service binding (POST or REDIRECT)
   crafter.security.saml.rp.logout.service.binding=POST
   # SAML relying party (SP) metadata endpoint
   crafter.security.saml.rp.metadata.endpoint=/saml/metadata
   # SAML relying party (SP) private key location
   crafter.security.saml.rp.privateKey.location=classpath:crafter/engine/extension/saml/rp-private.key
   # SAML relying party (SP) certificate location
   crafter.security.saml.rp.certificate.location=classpath:crafter/engine/extension/saml/rp-certificate.crt
   ###############################################################
   ##      SAML Security Asserting Party (IdP) configuration    ##
   ###############################################################
   # SAML asserting party (IdP) entity ID:
   crafter.security.saml.ap.entityId=https://ap.example.org/ap-entity-id
   # SAML asserting party (IdP) single sign on service location
   crafter.security.saml.ap.single.signOn.service.location=https://ap.example.org/sso/saml
   # SAML asserting party (IdP) single sign on service binding (POST or REDIRECT)
   crafter.security.saml.ap.single.signOn.service.binding=POST
   # SAML asserting party (IdP) logout service location
   crafter.security.saml.ap.single.logout.service.location=https://ap.example.org/slo/saml
   # SAML asserting party (IdP) logout service binding (POST or REDIRECT)
   crafter.security.saml.ap.single.logout.service.binding=POST
   # SAML asserting party (IdP) want authn request signed
   crafter.security.saml.ap.want.authn.request.signed=false
   # SAML asserting party (IdP) certificate location
   crafter.security.saml.ap.certificate.location=classpath:crafter/engine/extension/saml/idp-certificate.crt
   ###############################################################
   ##            SAML Security other configuration              ##
   ###############################################################
   # SAML Web SSO profile options: authenticate the user silently
   crafter.security.saml.webSSOProfileOptions.passive=false
   # SAML Web SSO profile options: force user to re-authenticate
   crafter.security.saml.webSSOProfileOptions.forceAuthn=false

|

where

- ``crafter.security.saml.attributes.mappings``: List of mappings to apply for attributes, every attribute sent
  by the IDP will be compared against this list and will be available as described in Access User Attributes.
  Each mapping is comprised of the original name of the attribute, sent by the IDP, and attribute which will
  be the new name of the attribute in Engine
- ``crafter.security.saml.roles.mappings``:List of mappings to apply for roles, every role sent by the IDP will
  be compared against this list. Each mapping is comprised of the original name of the role, sent by the IDP,
  and role which will be the new name of the role in Engine
- ``crafter.security.saml.rp.privateKey.location``: The path of the relying party (SP) private key in the classpath
- ``crafter.security.saml.rp.certificate.location``: The path of the relying party (SP) certificate in the classpath
- ``crafter.security.saml.ap.entityId``: The asserting party (IdP) entity ID
- ``crafter.security.saml.ap.single.signOn.service.location``: The asserting party (IdP) single sign on URL
- ``crafter.security.saml.ap.single.logout.service.location``: The asserting party (IdP) single logout URL
- ``crafter.security.saml.ap.certificate.location``:  The path of the asserting party (IdP) certificate in the classpath
- ``crafter.security.saml.webSSOProfileOptions.passive``: Indicates if user is authenticated silently
- ``crafter.security.saml.webSSOProfileOptions.forceAuthn``: Indicates if user will be forced to re-authenticate

The classpath is located in your CrafterCMS installation, under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes``.  As shown in the example above, the relying party private key is located in your CrafterCMS installation under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/saml`` folder.

.. code-block:: properties
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # SAML relying party (SP) private key location
   crafter.security.saml.rp.privateKey.location=classpath:crafter/engine/extension/saml/rp-private.key

|

Restart your installation after configuring the above.

You should now be able to test the SAML2 authentication and if there are no configuration or
communication errors you will be redirected to the SSO login page when trying to access a
secured page and then automatically return to your project in Crafter Engine.

.. note::
  If you are configuring SAML2 authentication in an authoring environment, you need to make sure that your IDP is
  configured to allow the login to be displayed in an ``iframe`` element by setting the right values for the 
  ``Content-Security-Policy`` header. You can find more information 
  `here <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy>`_.
