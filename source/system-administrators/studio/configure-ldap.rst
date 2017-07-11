.. _crafter-studio-configure-ldap:

=============================
Configure LDAP Authentication
=============================

Configuring LDAP authentication is very simple: in your Authoring installation, go to ``shared/classes/crafter/studio/extension`` and add the
following lines to ``studio-config-override.yaml`` (of course, make any appropriate configuration changes according to your LDAP system):

  .. code-block:: properties
    :linenos:

    # Defines security provider for accessing repository. Possible values:
    # db (users are stored in database)
    # ldap (users are imported from LDAP into the database)
    studio.security.type: db
    # LDAP Server url
    studio.security.ldap.serverUrl: ldap://localhost:389
    # LDAP bind DN (user)
    studio.security.ldap.bindDN: cn=admin,dc=nodomain
    # LDAP bind password
    studio.security.ldap.bindPassword: admin
    # LDAP base context (directory root)
    studio.security.ldap.baseContext: dc=nodomain
    # LDAP username attribute
    studio.security.ldap.userAttribute.username: uid
    # LDAP first name attribute
    studio.security.ldap.userAttribute.firstName: cn
    # LDAP last name attribute
    studio.security.ldap.userAttribute.lastName: sn
    # LDAP email attribute
    studio.security.ldap.userAttribute.email: mail

Some notes on the properties above:

- ``bindDN`` and ``bindPassword`` are basically the credentials used to connect initially to the LDAP server.
- ``baseContext`` is the LDAP tree root where the user entries can be located.

Studio will then do a query against the LDAP server whenever a user attempts to log in and the user is not yet in the DB. If there's a match in LDAP, the user is
created in the database with the imported LDAP attributes.
