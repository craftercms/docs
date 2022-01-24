:is-up-to-date: True

.. _newIa-crafter-studio-configure-headers-based-auth:

======================================
Configure Headers Based Authentication
======================================

Crafter Studio is able to integrate with any authentication system that sends custom HTTP headers containing information that will be used to authenticate the user in Studio.  This section details how to setup Studio for headers based authentication.


-------------------------------------------------
Configure Studio for Headers Based Authentication
-------------------------------------------------

Configuring Studio for headers based authentication is very simple: in your Authoring installation, go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add the following lines to :ref:`studio-config-override.yaml <studio-configuration-files>` (of course, make any appropriate configuration changes according to your system):

.. code-block:: properties
    :linenos:

    # Studio authentication chain configuration
    # studio.authentication.chain:
      # Authentication provider type
      # - provider: HEADERS
        # Authentication via headers enabled
        # enabled: false
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
        # Enable/disable logout for headers authenticated users (SSO)
        # logoutEnabled: false
        # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
        # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
        # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
        # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}


From the above configuration, here are the attributes that Studio expects from the headers to be provided:

- username
- firstname
- lastname
- email
- groups

The attribute ``secure_key`` is placed by the authentication agent in the header.
The attribute ``enabled`` enables/disables headers authentication, make sure this is set to **true** for headers authentication

Configuring Logout
------------------

The **Sign out** button link is disabled/hidden by default when headers based authentication is enabled.

To enable **Sign out** for users signed in using headers based authentication, change the following lines (as described from the above configuration) in your :ref:`studio-config-override.yaml <studio-configuration-files>` (of course, make any appropriate configuration changes according to your system):

.. code-block:: yaml

    # Enable/disable logout for headers authenticated users (SSO)
    # logoutEnabled: false
    # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
    # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
    # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
    # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}

|

