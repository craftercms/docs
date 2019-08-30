:is-up-to-date: True

.. index:: Configuring Studio Security; Studio Security; Security

.. _configuring-studio-security:

===========================
Configuring Studio Security
===========================

Users are authenticated by Studio through the internal database by default.  Crafter CMS can be configured so that users are authenticated using an external authentication protocol such as Lightweight Directory Access Protocol (LDAP) or Security Assertion Markup Language (SAML).

Here's a list of security providers supported by Crafter CMS for accessing the repository:

- headers (use when authenticating via headers)
- ldap (users are imported from LDAP into the database)
- internal database (users are stored in database)

To configure an external authentication method, please follow one of the guides below:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   configure-ldap.rst
   configure-headers-based-auth.rst

When using an external authentication method, user accounts are automatically created in the internal database upon each user's first successful login, using the attributes from the responses received.  Users added to the internal database after the user's first successful login through external authentication are marked as **Externally Managed**.

-----------------------
Authentication Chaining
-----------------------

As mentioned above, Crafter CMS supports multiple security providers.  Crafter CMS allows configuration of multiple authentication providers in a chain that are then iterated through until either the user is authenticated and granted access or authentication fails and an HTTP 401 Unauthorized is returned to the user.  This allows Studio to support multiple security providers that appears like a single authentication module to users.

.. image:: /_static/images/system-admin/authentication-chain.png
    :alt: Static Assets - Authentication Chaining
    :width: 70 %
    :align: center

|

When an authentication chain is configured, when a user logs in, Studio will try to authenticate the user using the first security provider in the chain as defined in the ``studio-config-override.yaml`` file.  If authentication fails, it will then move on to the next authentication provider in the list and try to authenticate the user again.  It will continue moving on to the next security provider in the chain until the user is authenticated or the authentication fails.

To setup the authentication chain, open the file ``studio-config-override.yaml`` under ``shared/classes/crafter/studio/extension``.  Below is a sample configuration for the authentication chain.  There are four authentication providers in the example below: (1) Headers Authentication (2) LDAP1 (3) LDAP2 (4) Internal database

.. code-block:: properties
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
        # Typically this is placed in the header by the authentication agent, e.g. Apache mod_mellon
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
        # logoutUrl: /mellon/logout?ReturnTo={baseUrl}
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
