:is-up-to-date: True
:last-updated: 4.1.2

.. index:: Studio Security

.. _studio-security:

===============
Studio Security
===============
.. contents::
    :local:
    :depth: 2

--------------
Authentication
--------------
Users are authenticated by Studio through the internal database by default. CrafterCMS can be configured so that users are authenticated using an external authentication protocol such as Lightweight Directory Access Protocol (LDAP), Security Assertion Markup Language (SAML), or integrate with any Single-Sign-On (SSO) solution that can provide headers to Studio to indicate successful authentication.

Here's a list of security providers supported by CrafterCMS for accessing the repository:

- :ref:`Studio SAML security <crafter-studio-configure-studio-saml>` |enterpriseOnly|
- :ref:`Header-Based (use when authenticating via headers) <crafter-studio-configure-header-based-auth>` |enterpriseOnly|
- :ref:`LDAP (users are imported from LDAP into the database) <crafter-studio-configure-ldap>` |enterpriseOnly|
- Internal database (users are stored in database)

To configure an external authentication method, please follow one of the guides below:

When using an external authentication method, user accounts are automatically created in the internal database upon each user's first successful login, using the attributes from the responses received. Users added to the internal database after the user's first successful login through external authentication are marked as **Externally Managed**.

.. _configure-authentication-chain:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Authentication Chain
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
CrafterCMS supports multiple security providers and allows configuration of multiple authentication providers in a chain that are then iterated through until either the user is authenticated and granted access or authentication fails and an HTTP 401 Unauthorized is returned to the user. This allows Studio to support multiple security providers that appears like a single authentication module to users.

The following authentication providers can be configured in a chain:

    - Headers
    - LDAP
    - Internal database

.. note:: SAML2 authentication cannot be configured in a chain. SAML2 authentication is a standalone authentication provider.

When an authentication chain is configured when a user logs in, Studio will try to authenticate the user using the first security provider in the chain as defined in the ``studio-config-override.yaml`` file. If authentication fails, it will then move on to the next authentication provider in the list and try to authenticate the user again. It will continue moving on to the next security provider in the chain until the user is authenticated or the authentication fails.

To set up the authentication chain, open the file ``studio-config-override.yaml`` under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension``. Another way to access the ``studio-config-override.yaml`` file is by clicking on the |mainMenu| **Navigation Menu** from the context nav in Studio, then clicking on ``Global Config``.

Below is a sample configuration for the authentication chain. There are four authentication providers in the example below: (1) Headers Authentication, (2) LDAP1, (3) LDAP2 (4) Internal Database.

.. code-block:: yaml
    :linenos:

      # Studio authentication chain configuration
      studio.authentication.chain:
      # Authentication provider type
      - provider: HEADERS
      # Authentication via headers enabled
        enabled: true
        # Authentication header for secure key
        secureKeyHeader: secure_key
        # Authentication headers secure key that is expected to match secure key value from headers
        # Typically this is placed in the header by the authentication agent
        secureKeyHeaderValue: secure
        # Authentication header for username
        usernameHeader: username
        # Authentication header for first name
        firstNameHeader: firstname
        # Authentication header for last name
        lastNameHeader: lastname
        # Authentication header for email
        emailHeader: email
        # Authentication header for groups: comma separated list of groups
        #   Example:
        #   site_author,site_xyz_developer
        groupsHeader: groups
        # Enable/disable logout for headers authenticated users (SSO)
        # logoutEnabled: false
        # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
        # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
        # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
        # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}
      # Authentication provider type
      - provider: LDAP
        # Authentication via LDAP enabled
        enabled: false
        # LDAP Server url
        ldapUrl: ldap://localhost:389
        # LDAP bind DN (user)
        ldapUsername: cn=Manager,dc=my-domain,dc=com
        # LDAP bind password
        ldapPassword: secret
        # LDAP base context (directory root)
        ldapBaseContext: dc=my-domain,dc=com
        # LDAP username attribute
        usernameLdapAttribute: uid
        # LDAP first name attribute
        firstNameLdapAttribute: cn
        # LDAP last name attribute
        lastNameLdapAttribute: sn
        # Authentication header for email
        emailLdapAttribute: mail
        # LDAP groups attribute
        groupNameLdapAttribute: crafterGroup
        # LDAP groups attribute name regex
        groupNameLdapAttributeRegex: .*
        # LDAP groups attribute match index
        groupNameLdapAttributeMatchIndex: 0
      # Authentication provider type
      - provider: LDAP
        # Authentication via LDAP enabled
        enabled: false
        # LDAP Server url
        ldapUrl: ldap://localhost:390
        # LDAP bind DN (user)
        ldapUsername: cn=Manager,dc=my-domain,dc=com
        # LDAP bind password
        ldapPassword: secret
        # LDAP base context (directory root)
        ldapBaseContext: dc=my-domain,dc=com
        # LDAP username attribute
        usernameLdapAttribute: uid
        # LDAP first name attribute
        firstNameLdapAttribute: cn
        # LDAP last name attribute
        lastNameLdapAttribute: sn
        # Authentication header for email
        emailLdapAttribute: mail
        # LDAP groups attribute
        groupNameLdapAttribute: crafterGroup
        # LDAP groups attribute name regex
        groupNameLdapAttributeRegex: .*
        # LDAP groups attribute match index
        groupNameLdapAttributeMatchIndex: 0
      # Authentication provider type
      - provider: DB
        # Authentication via DB enabled
        enabled: true

|

In the configuration above, when a user tries to authenticate, the user's credentials will be passed first to the headers authentication provider. If the authentication succeeds, the processing in the chain is done and the user is allowed to proceed. If the authentication fails, the user credentials will then be passed to LDAP1. If authentication is successful, processing in the chain is done, otherwise, the user credentials are then passed on to LDAP2. LDAP2 will then try to authenticate user. If successful, processing in the chain is done, otherwise, the user credentials are then passed to the final provider in the chain, the internal database. The final provider in the chain then determines whether the user is successfully authenticated or rejected and sent an HTTP 401 Unauthorized message. Below is a diagram showing the authentication chain process using the above configuration:

.. image:: /_static/images/system-admin/auth-chain-example.webp
    :alt: Static Assets - Example Authentication Chain Process
    :width: 55%
    :align: center

.. _crafter-studio-configure-studio-saml:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Studio SAML2 Configuration |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.0.3

Crafter Studio can be configured to support SAML2 SSO out of the box without using any additional plugins.

.. important::
   *This document only applies to* **CrafterCMS version 4.0.3 and later** |br|
   *Please see* :ref:`here <crafter-studio-configure-studio-saml-up-to-4-0-2>` *for version 4.0.2 and earlier.*

""""""""""""
Requirements
""""""""""""
#. A SAML2-compatible Identity Provider (IdP) properly configured; this configuration will not be covered here
#. A private key and certificate. This can be generated like so:

    ``openssl req -newkey rsa:2048 -nodes -keyout rp-private.key -x509 -days 365 -out rp-certificate.crt``

    Take note of the values of the following options used to generate your key and certificate that will be used later for configuring Studio:

    * **keyout**: The value used for this option wil be used in the ``studio.security.saml.rp.privateKey.location`` property
    * **out**: The value used for this option will be used in the ``studio.security.saml.rp.certificate.location`` property

.. note::
   ``IdP`` is the asserting party and ``SP`` is the relying party (Studio)

"""""""""
Configure
"""""""""
To configure Studio SAML2, in your Authoring installation, we need to enable SAML security then we'll setup the required SAML configuration properties.

To enable SAML security, go to ``CRAFTER_HOME/bin``, open the ``crafter-setenv.sh`` file, and uncomment the line ``export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity``:

.. code-block:: sh
   :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

   # -------------------- Spring Profiles --------------------
   ...
   # Uncomment to enable Crafter Studio SAML2 security
   export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity
   # For multiple active spring profiles, create comma separated list

|

Next, we'll set up SAML configuration properties. Go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add/uncomment the following lines to ``studio-config-override.yaml`` (of course, make any appropriate configuration changes according to your system):

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

The classpath is located in your Authoring installation, under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes``. As shown in the example above, the relying party private key is located in your Authoring installation under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/saml`` folder.

.. code-block:: yaml
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

   # SAML relying party (SP) private key location
   studio.security.saml.rp.privateKey.location: classpath:crafter/studio/extension/saml/rp-private.key

|

Restart your Authoring installation after configuring the above.

|hr|

.. _crafter-studio-configure-header-based-auth:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Header-Based Authentication |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio can integrate with any authentication system that sends custom HTTP headers containing information that will be used to authenticate the user in Studio. This section details how to set up Studio for header-based authentication.

""""""""""""""""""""""""""""""""""""""""""""""""
Configure Studio for Header-Based Authentication
""""""""""""""""""""""""""""""""""""""""""""""""
Configuring Studio for header-based authentication is very simple: in your Authoring installation, go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add the following lines to ``studio-config-override.yaml`` (of course, make any appropriate configuration changes according to your system):

.. code-block:: properties
    :linenos:
    :emphasize-lines: 6,8,13,15,17,19,23,25

    # Studio authentication chain configuration
    # studio.authentication.chain:
      # Authentication provider type
      # - provider: HEADERS
        # Authentication via headers enabled
        # enabled: true
        # Authentication header for secure key
        # secureKeyHeader: secure_key
        # Authentication headers secure key that is expected to match secure key value from headers
        # Typically this is placed in the header by the authentication agent
        # secureKeyHeaderValue: secure
        # Authentication header for username
        # usernameHeader: username
        # Authentication header for first name
        # firstNameHeader: firstname
        # Authentication header for last name
        # lastNameHeader: lastname
        # Authentication header for email
        # emailHeader: email
        # Authentication header for groups: comma separated list of sites and groups
        #   Example:
        #   site_author,site_xyz_developer
        # groupsHeader: groups
        # (Optional) All authentication header values are in this JWT header's claims.
        # jwtAuthTokenHeader: x-crafter-oidc-data
        # Enable/disable logout for headers authenticated users (SSO)
        # logoutEnabled: false
        # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
        # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
        # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
        # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}

The attribute ``enabled`` enables/disables headers authentication; make sure this is set to **true** for header-based authentication |br|

The ``secure_key`` attribute is a secret shared between the authentication agent and Studio via this header. Note that this ``secure_key`` is
**required** and header-based authentication will not proceed unless the ``secure_key`` sent to Studio matches this configuration.

Upon matching the ``secure_key`` header, Studio will then look for the principal. This can come in one of two formats:

#. A set of loose headers indicate the principal's attributes: ``username``, ``firstname``, ``lastname``, ``email``, and ``groups``; or
#. A JWT-wrapped principal's attributes as specified by ``x-crafter-oidc-data``

Depending on your authentication agent, configure Studio to look for either the loose attributes or JWT.

~~~~~~~~~~~~~~~~~~
Configuring Logout
~~~~~~~~~~~~~~~~~~
The **Sign out** button link is disabled/hidden by default when header-based authentication is enabled.

To enable **Sign out** for users signed in using header-based authentication, change the following lines (as described from the above configuration) in your ``studio-config-override.yaml`` file (of course, make any appropriate configuration changes according to your system):

.. code-block:: yaml

    # Enable/disable logout for headers authenticated users (SSO)
    # logoutEnabled: false
    # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
    # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
    # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
    # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}

|

|hr|

.. _crafter-studio-configure-ldap:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure LDAP Authentication |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To configure LDAP authentication, in your Authoring installation, go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and uncomment the
following lines to the ``studio-config-override.yaml`` file.

.. note:: The values for the parameters listed below are just examples. Remember to make any appropriate configuration changes according to your directory service in use.

.. code-block:: properties
    :linenos:
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

    # Studio authentication chain configuration
    studio.authentication.chain:
      # Authentication provider type
      - provider: LDAP
        # Authentication via LDAP enabled
        enabled: true
        # LDAP Server url
        ldapUrl: ldap://localhost:389
        # LDAP bind DN (user)
        ldapUsername: cn=Manager,dc=my-domain,dc=com
        # LDAP bind password
        ldapPassword: secret
        # LDAP base context (directory root)
        ldapBaseContext: dc=my-domain,dc=com
        # LDAP username attribute
        usernameLdapAttribute: uid
        # LDAP first name attribute
        firstNameLdapAttribute: cn
        # LDAP last name attribute
        lastNameLdapAttribute: sn
        # LDAP email attribute
        emailLdapAttribute: mail
        # LDAP groups attribute
        groupNameLdapAttribute: crafterGroup
        # LDAP groups attribute name regex
        groupNameLdapAttributeRegex: .*
        # LDAP groups attribute match index
        groupNameLdapAttributeMatchIndex: 0

|

Some notes on the properties above:

- ``enabled`` enables/disables LDAP authentication, make sure this is set to **true** for LDAP authentication
- ``serverUrl`` is just the URL where the LDAP server is listening for requests.
- ``bindDN`` and ``bindPassword`` are basically the credentials used to connect initially to the LDAP server.
- ``baseContext`` is the LDAP tree root where the user entries can be located.
- ``username``, ``firstName``, ``lastName`` and ``email`` are basic user attributes.
- ``groupName`` indicates the groups the user belongs to (can have multiple values). You can specify a regex to extract the group name of a user.

Studio will then do a query against the LDAP server whenever a user attempts to log in and the user is not yet in the DB. If there's a match in LDAP, the user is
created in the database with the imported LDAP attributes, and finally added to the groups specified in LDAP.

Also, please note that Studio needs all the attributes listed in the config to be present in the LDAP user's attributes, otherwise, Studio is not able to authenticate the user. When an attribute is missing, an error message will be displayed in the login screen: ``A system error has occurred. Please wait a few minutes or contact an administrator``. Please look at the tomcat log to check which attribute was not found. Here's an example log:

.. code-block:: none

    [WARN] 2017-10-11 12:42:57,487 [http-nio-8080-exec-2] [security.DbWithLdapExtensionSecurityProvider] | No LDAP attribute crafterGroup found for username jbloggs

|

Here are a few things to take note of when configuring LDAP authentication in Studio:

Make sure that at least one of the **groupName** attribute of the LDAP user exists in Studio and has Roles and Permission setup. If there is no **groupName** attribute setup in Studio with Roles and Permissions, please make sure that the system administrator assigns a role to at least one group in Studio so the user can access the site, otherwise, once the user gets into the **Sites** screen and tries to Preview the site or view the dashboard, the user will get a notification that the site is invalid.

    .. image:: /_static/images/system-admin/ldap-user-group-no-role-assigned.webp
        :alt: System Admin LDAP Config - LDAP user group attribute not assigned to a role
        :width: 25%
        :align: center

|

To assign a role to a group, please follow the guide :ref:`project-role-mappings`. To assign permissions to a role, please see :ref:`permission-mappings`

For an example of setting up LDAP, see :ref:`setting-up-simple-ldap-server`

|hr|

-------------
Authorization
-------------
.. _project-role-mappings:

^^^^^^^^^^^^^
Role Mappings
^^^^^^^^^^^^^
Users only see the items that they have been granted access to based on the permissions granted to the Role they have been assigned to. The role mappings configuration file defines the mapping between the group that the user belongs to and the studio authoring role. To modify the role mappings, click on |projectTools| from the bottom of the *Sidebar*, then click on **Configuration** and select **Role Mappings** from the list.

.. image:: /_static/images/site-admin/config-open-role-mappings.webp
    :alt: Configurations - Open Role Mappings
    :width: 40%
    :align: center

""""""
Sample
""""""
Here's a sample Role Mappings Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample role mappings configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-role-mappings-config.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/role-mappings-config.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|

"""""""""""
Description
"""""""""""
    ``/role-mappings/groups/group@name``
        Name of the user group

    ``/role-mappings/groups/role``
        Name of authoring role that the group will map to

"""""""""""""""""""""
Default Project Roles
"""""""""""""""""""""
CrafterCMS comes with predefined roles out of the box for projects.
Here's a list of predefined roles for projects:

* **admin**: Users with the ``admin`` role have access to project configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow

* **developer**: Users with the ``developer`` role have access to project configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow

* **reviewer**: Users with the ``reviewer`` role have the ability to approve and reject workflow. They also have access to a number of actions in the dashboard that are not available to content contributors (users with the role ``author``), including ``Pending Approval`` and ``Scheduled Publish``. They do not have access to edit content.

* **publisher**: Users with the ``publisher`` role have the ability to approve and reject workflow. They also have access to a number of actions in the dashboard that are not available to content contributors (users with the role ``author``), including ``Pending Approval`` and ``Scheduled Publish``. In addition, they also have access to create, edit, and submit content like the ``author`` role.

* **author**: Users with the role ``author`` have access to create, edit and submit content

See :ref:`permission-mappings` for more information on all items accessible for each role in a project.

|hr|

.. _permission-mappings:

^^^^^^^^^^^^^^^^^^^
Permission Mappings
^^^^^^^^^^^^^^^^^^^
The permission mappings configuration file allows you to assign permissions to folders and objects in a project/site giving specific Roles rights to the object. The permission mappings config file contains the permissions mappings for the roles defined in the role mappings config file. When applying permissions to Roles, rights are granted by adding permissions inside the tag ``<allowed-permissions>``. The absence of permissions means the permission is denied. Rules have a regex expression that governs the scope of the permissions assigned. A list of available permissions that can be granted to Roles is available after the sample configuration file.

Permissions are defined per:
    project/site > role > rule

For example, to grant the role component_author the ability to read/write
components and read-only to everything else:

.. code-block:: xml
      :linenos:

      <role name="component_author">
        <rule regex="/site/website/.*">
          <allowed-permissions>
            <permission>content_read</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/site/components/.*">
          <allowed-permissions>
            <permission>content_read</permission>
            <permission>content_write</permission>
            <permission>content_create</permission>
            <permission>folder_create</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/static-assets/.*">
          <allowed-permissions>
            <permission>content_read</permission>
          </allowed-permissions>
        </rule>
      </role>

|

To modify/view the permission mappings for your project/site in Studio, click on |projectTools| at the bottom of the *Sidebar*, then click on **Configurations** and select **Permissions Mapping** from the list.

.. image:: /_static/images/site-admin/config-open-permission-mappings.webp
    :alt: Configurations - Open Permission Mappings
    :width: 40%
    :align: center

""""""
Sample
""""""
Here's a sample Permission Mappings Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "permission-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-permission-mappings-config.xml
       :language: xml
       :linenos:


.. raw:: html

   </details>

|

"""""""""""
Description
"""""""""""
.. include:: /includes/available-permissions.rst

|hr|

----------------------------
Other Security Configuration
----------------------------
.. _studio-password-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Studio Password Requirements
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Password requirements validation allows the admin to setup rules that ensures users create passwords based on an organization’s password security policy.

Crafter Studio uses `zxcvbn <https://github.com/dropbox/zxcvbn>`__ for password strength management.

.. version_tag::
    :label: Since
    :version: 4.0.3

|

The password strength configured here is displayed to the user when resetting a password or creating a user.

.. image:: /_static/images/system-admin/password-requirements.webp
   :alt: System Administrator - Password Requirements Display
   :align: center
   :width: 55%

|

To configure the password strength, click on |mainMenu| **Main Menu** then click on ``Global Config``.
Scroll to the section ``Security`` and change the value of ``studio.security.passwordRequirements.minimumComplexity``
to desired minimum password complexity required:

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   # Password requirements minimum complexity
   # This is based on https://github.com/dropbox/zxcvbn
   # The minimum complexity corresponds to the password score
   # You can try this out here https://lowe.github.io/tryzxcvbn/
   #  score      # Integer from 0-4 (useful for implementing a strength bar)
   #  0 # too guessable: risky password. (guesses < 10^3)
   #  1 # very guessable: protection from throttled online attacks. (guesses < 10^6)
   #  2 # somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
   #  3 # safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
   #  4 # very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
   # The default value is 3
   studio.security.passwordRequirements.minimumComplexity: 3

|

Crafter Studio's default minimum password complexity required is set to 3 (which translate to a score
of 80 in the UI), and until the user setting/changing the password has met the minimum required,
the ``Submit`` button will not be enabled. Also, once the minimum password strength score has been
reached, the score will be displayed in green.

.. image:: /_static/images/system-admin/password-reqts-80-score.webp
    :alt: System Administrator - Password Requirements Display Score 80
    :align: center
    :width: 35%

|

Below, are some of the messages displayed as a user is inputting a new password:

.. image:: /_static/images/system-admin/password-reqts-20-score.webp
    :alt: System Administrator - Password Requirements Display Score 20
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-40-score.webp
    :alt: System Administrator - Password Requirements Display Score 40
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-60-score.webp
    :alt: System Administrator - Password Requirements Display Score 60
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-100-score.webp
    :alt: System Administrator - Password Requirements Display Score 100
    :align: center
    :width: 35%

|

|hr|

.. _randomize-admin-password:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Randomize Authoring's "admin" Password for CrafterCMS Fresh Install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
CrafterCMS gives you the option to randomize the **admin** password on a fresh install. To randomize the **admin** password, before starting CrafterCMS for the very first time, in your Authoring installation, go to  the following folder: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/`` and add the following to the ``studio-config-override.yaml`` file:

.. code-block:: yaml
       :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
       :linenos:

       ##################################################
       ##                   Security                   ##
       ##################################################
       # Enable random admin password generation
       studio.db.initializer.randomAdminPassword.enabled: false
       # Random admin password length
       studio.db.initializer.randomAdminPassword.length: 16
       # Random admin password allowed chars
       studio.db.initializer.randomAdminPassword.chars: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_=+-/

To enable the random admin password generation, just set ``studio.db.initializer.randomAdminPassword.enabled`` to ``true`` and specify your desired password length and allowed characters for the password. Save the file after making your changes.

After saving the ``studio-config-override.yaml`` file, start CrafterCMS. You'll then need to look at the authoring tomcat log, and search for the following string to get the random password generated for user **admin**: `*** Admin Account Password:`

Here's a sample password generated for the admin as listed in the Tomcat log:

    ``INFO: *** Admin Account Password: "WXOIK$O$yGixio2h" ***``

You can now log in as the user **admin** using the randomly generated password listed in the Tomcat log.

|hr|

.. _studio-timeout:

^^^^^^^^^^^^^^^
Studio Timeouts
^^^^^^^^^^^^^^^
.. _changing-session-timeout:

""""""""""""""""""""""""""""
Changing the Session Timeout
""""""""""""""""""""""""""""
CrafterCMS has configurable timeouts for session lifetime and session inactivity.

Session lifetime timeout is the amount of time a session is valid before requiring the user to re-authenticate.

Session inactivity timeout is the amount of time of user inactivity before requiring the user to re-authenticate.

In some cases, some operations in CrafterCMS may last longer than the user session inactivity timeout settings.
For this scenario, the session inactivity timeout will need to be modified to allow the operation to finish
without the session timing out. Also, you may want to change the timeouts from the default settings.

Here's a summary of the session timeouts available in CrafterCMS:

.. list-table::
   :widths: 1 1 8
   :header-rows: 1

   * - Timeout Name
     - Default Value |br|
       *(in minutes)*
     - Description
   * - ``sessionTimeout``
     - 480
     - **Studio session lifetime timeout** |br|
       *Location:* |br|
       *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml* |br| |br|
       The amount of time a session is valid counting from when a user is logged in. |br|
       After this amount of time,a session timeout will be forced in the application layer even if the user is active.
   * - ``inactivityTimeout``
     - 30
     - **Studio session inactivity timeout** |br|
       *Location:* |br|
       *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml* |br| |br|
       The amount of time of user inactivity, tracked by Studio, before requiring the user to re-authenticate. |br|
       Remember to set the ``inactivityTimeout`` value less than the ``session-timeout`` value in the ``web.xml`` file. |br|
       The session inactivity time tracked by Studio is different from the session inactivity time tracked by Tomcat. |br|
       This is because there are some API calls that are not tracked as active by Studio.
   * - ``session-timeout``
     - 30
     - **Tomcat session timeout** |br|
       *Location:* |br|
       *CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml* |br| |br|
       The amount of time of user inactivity, tracked by Tomcat, before requiring the user to re-authenticate. |br|
       This value must be greater than or equal to ``inactivityTimeout`` since that timeout can and does kick in |br|
       before this one.

"""""""""""""""""""""""""""""""
Change Session Lifetime Timeout
"""""""""""""""""""""""""""""""
To change the session lifetime timeout, in your
``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``,
change the value for ``studio.security.sessionTimeout`` to desired amount of time the session is valid
in minutes for users.

.. code-block:: properties

   # Time in minutes after which active users will be required to login again
   # studio.security.sessionTimeout: 480

|

Make sure to stop and **restart Studio** after making your changes.

"""""""""""""""""""""""""""""""""
Change Session Inactivity Timeout
"""""""""""""""""""""""""""""""""
There are two timeouts you can configure for the session inactivity timeout as described in the above table.

- ``session-timeout`` in the Tomcat ``web.xml`` file
  This is the default Tomcat timeout for handling idle connections (inactive)
- ``inactivityTimeout`` in the Studio override configuration file
  This is the Studio session inactivity timeout

To change the session inactivity timeout, follow the instructions below:

#. In your ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``,
   change the value for ``studio.security.inactivityTimeout`` to set the amount of time in minutes the amount of
   time a user can be inactive before the user's session times out.

   .. code-block:: properties

      # Time in minutes after which inactive users will be required to login again
      # studio.security.inactivityTimeout: 30

   |

#. In your ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml`` file, change the value in
   between the ``session-timeout`` tags to desired amount of time the session will exist in minutes:

   .. code-block:: xml

      <session-config>
        <session-timeout>30</session-timeout>
        <tracking-mode>COOKIE</tracking-mode>
	  </session-config>

   |


Remember to keep the Studio session inactivity timeout ``inactivityTimeout`` from the ``studio-config-override.yaml`` file less than the Tomcat ``session-timeout`` from the ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml`` file.

Make sure to stop and **restart Studio after making your changes**.

You can also change the Studio session timeouts from the |mainMenu| **Main Menu** in Studio under ``Global Config``

|

|hr|

^^^^^^^^^^^^^^^^^^^^
Cipher Configuration
^^^^^^^^^^^^^^^^^^^^
.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ##################################################
    ##                   Security                   ##
    ##################################################
    # Time in minutes after which active users will be required to login again
    # studio.security.sessionTimeout: 480
    # Time in minutes after which inactive users will be required to login again
    # studio.security.inactivityTimeout: 30
    #
    # Salt for encrypting
    studio.security.cipher.salt: ${env:CRAFTER_SYSTEM_ENCRYPTION_SALT}
    # Key for encrypting
    studio.security.cipher.key: ${env:CRAFTER_SYSTEM_ENCRYPTION_KEY}

    # The key used for encryption of configuration properties
    studio.security.encryption.key: ${env:CRAFTER_ENCRYPTION_KEY}
    # The salt used for encryption of configuration properties
    studio.security.encryption.salt: ${env:CRAFTER_ENCRYPTION_SALT}

    # The path of the folder used for the SSH configuration
    studio.security.ssh.config: ${env:CRAFTER_SSH_CONFIG}

    # Defines name used for environment specific configuration. It is used for environment overrides in studio. Default value is default.
    studio.configuration.environment.active: ${env:CRAFTER_ENVIRONMENT}

|

|hr|

.. _studio-access-tokens:

^^^^^^^^^^^^^
Access Tokens
^^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.0.0

The following section of Studio's configuration overrides allows you to configure settings for the Studio access tokens. Access tokens can then be used to invoke `Crafter Studio's REST APIs <../../../_static/api/studio.html>`_, or used in :ref:`crafter-cli` to perform operations on Studio.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ##################################################
    ##               Access Tokens                  ##
    ##################################################

    # Issuer for the generated access tokens
    studio.security.token.issuer: ${env:STUDIO_TOKEN_ISSUER}
    # List of accepted issuers for validation of access tokens (separated by commas)
    studio.security.token.validIssuers: ${env:STUDIO_TOKEN_VALID_ISSUERS}
    # The audience for generation and validation of access tokens (if empty the instance id will be used)
    studio.security.token.audience: ${env:STUDIO_TOKEN_AUDIENCE}
    # Time in minutes for the expiration of the access tokens
    studio.security.token.timeout: ${env:STUDIO_TOKEN_TIMEOUT}
    # Password for signing the access tokens (needs to be equal or greater than 512 bits in length)
    studio.security.token.password.sign: ${env:STUDIO_TOKEN_SIGN_PASSWORD}
    # Password for encrypting the access tokens
    studio.security.token.password.encrypt: ${env:STUDIO_TOKEN_ENCRYPT_PASSWORD}
    # Name of the cookie to store the refresh token
    studio.security.token.cookie.name: ${env:STUDIO_REFRESH_TOKEN_NAME}
    # Time in seconds for the expiration of the refresh token cookie
    studio.security.token.cookie.maxAge: ${env:STUDIO_REFRESH_TOKEN_MAX_AGE}
    # Indicates if the refresh token cookie should be secure (should be true for production environments behind HTTPS)
    studio.security.token.cookie.secure: ${env:STUDIO_REFRESH_TOKEN_SECURE}

|

|hr|
