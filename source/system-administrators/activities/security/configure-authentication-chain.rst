:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now


.. index:: Configure Authentication Chain;

.. _configure-authentication-chain:

==============================
Configure Authentication Chain
==============================

Crafter CMS supports multiple security providers and allows configuration of multiple authentication providers in a chain that are then iterated through until either the user is authenticated and granted access or authentication fails and an HTTP 401 Unauthorized is returned to the user.  This allows Studio to support multiple security providers that appears like a single authentication module to users.

.. image:: /_static/images/system-admin/authentication-chain.png
    :alt: Static Assets - Authentication Chaining
    :width: 70 %
    :align: center

|

The following authentication providers can be configured in a chain:

    - LDAP
    - headers
    - internal database

When an authentication chain is configured, when a user logs in, Studio will try to authenticate the user using the first security provider in the chain as defined in the ``studio-config-override.yaml`` file.  If authentication fails, it will then move on to the next authentication provider in the list and try to authenticate the user again.  It will continue moving on to the next security provider in the chain until the user is authenticated or the authentication fails.

To setup the authentication chain, open the file ``studio-config-override.yaml`` under ``shared/classes/crafter/studio/extension``.  Another way to access the ``studio-config-override.yaml`` file is by clicking on the |mainMenu| **Main Menu** from the context nav in Studio, then clicking on ``Global Config``.

Below is a sample configuration for the authentication chain.  There are four authentication providers in the example below: (1) Headers Authentication (2) LDAP1 (3) LDAP2 (4) Internal database

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

In the configuration above, when a user tries to authenticate, the user's credentials will be passed first to the headers authentication provider.  If the authentication succeeds, the processing in the chain is done and the user is allowed to proceed.  If the authentication fails, the user credentials will then be passed to LDAP1.  If authentication is successful, processing in the chain is done, otherwise, the user credentials are then passed on to LDAP2.  LDAP2 will then try to authenticate user.  If successful, processing in the chain is done, otherwise, the user credentials are then passed to the final provider in the chain, the internal database.  The final provider in the chain then determines whether the user is successfully authenticated or rejected and sent an HTTP 401 Unauthorized message.  Below is a diagram showing the authentication chain process using the above configuration:

.. image:: /_static/images/system-admin/auth-chain-example.png
    :alt: Static Assets - Example Authentication Chain Process
    :width: 80 %
    :align: center
