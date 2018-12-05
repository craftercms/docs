.. _crafter-studio-configure-ldap:

=============================
Configure LDAP Authentication
=============================

To configure LDAP authentication, in your Authoring installation, go to ``shared/classes/crafter/studio/extension`` and add the
following lines to the ``studio-config-override.yaml`` file.

.. note:: The values for the parameters listed below are just examples.  Remember to make any appropriate configuration changes according to your directory service in use.

|

.. code-block:: properties
      :linenos:
      :caption: shared/classes/crafter/studio/extension/studio-config-override.yaml

      # Defines security provider for accessing repository. Possible values:
      # db (users are stored in database)
      # ldap (users are imported from LDAP into the database)
      studio.security.type: ldap
      # LDAP Server url
      studio.security.ldap.serverUrl: ldap://localhost:389
      # LDAP bind DN (user)
      studio.security.ldap.bindDN: cn=Manager,dc=my-domain,dc=com
      # LDAP bind password
      studio.security.ldap.bindPassword: secret
      # LDAP base context (directory root)
      studio.security.ldap.baseContext: dc=my-domain,dc=com
      # LDAP username attribute
      studio.security.ldap.userAttribute.username: uid
      # LDAP first name attribute
      studio.security.ldap.userAttribute.firstName: cn
      # LDAP last name attribute
      studio.security.ldap.userAttribute.lastName: sn
      # LDAP email attribute
      studio.security.ldap.userAttribute.email: mail
      # LDAP site ID attribute
      studio.security.ldap.userAttribute.siteId: crafterSite
      # LDAP groups attribute
      studio.security.ldap.userAttribute.groupName: crafterGroup
      # LDAP groups attribute name regex
      studio.security.ldap.userAttribute.groupName.regex: cn=Crafter_([a-zAZ]+),.*
      # LDAP groups attribute match index
      studio.security.ldap.userAttribute.groupName.matchIndex: 1
      # LDAP default site if site ID attribute not found
      studio.security.ldap.defaultSiteId: default

|

Some notes on the properties above:

- ``serverUrl`` is just the URL where the LDAP server is listening for requests.
- ``bindDN`` and ``bindPassword`` are basically the credentials used to connect initially to the LDAP server.
- ``baseContext`` is the LDAP tree root where the user entries can be located.
- ``username``, ``firstName``, ``lastName`` and ``email`` are basic user attributes.
- ``siteId`` indicates the sites the user has access to (can have multiple values).
- ``groupName`` indicates the groups inside the site the user belongs to (can have multiple values)  You can specify a regex to extract the group name of a user.

Studio will then do a query against the LDAP server whenever a user attempts to log in and the user is not yet in the DB. If there's a match in LDAP, the user is
created in the database with the imported LDAP attributes, and finally added to the groups of the site specified in LDAP.

Also, please note that Studio needs all the attributes listed in the config to be present in the LDAP user's attributes, otherwise, Studio is not able to authenticate the user.  When an attribute is missing, an error message will be displayed in the login screen: ``A system error has occurred.  Please wait a few minutes or contact an administrator``.  Please look at the tomcat log to check which attribute was not found.  Here's an example log:

.. code-block:: guess

    [WARN] 2017-10-11 12:42:57,487 [http-nio-8080-exec-2] [security.DbWithLdapExtensionSecurityProvider] | No LDAP attribute crafterGroup found for username cbrunato

|

Here are a few things to take note of when configuring LDAP authentication in Studio:

Make sure that at least one of the **groupName** attribute of the LDAP user exists in Studio and has Roles and Permission setup.  If there is no **groupName** attribute setup in Studio with Roles and Permissions, please make sure that the system administrator assigns a role to at least one group in Studio so the user can access the site, otherwise, once the user gets into the **Sites** screen and tries to Preview the site or view the dashboard, the user will get a notification that the site is invalid.

    .. image:: /_static/images/system-admin/ldap-user-group-no-role-assigned.png
        :alt: System Admin LDAP Config - LDAP user group attribute not assigned to a role
        :width: 35 %
        :align: center

|

To assign a role to a group, please follow the guide :ref:`role-mappings`.  To assign permissions to a role, please see :ref:`permission-mappings`


