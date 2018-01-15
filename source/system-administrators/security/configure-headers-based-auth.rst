.. _crafter-studio-configure-headers-based-auth:

======================================
Configure Headers Based Authentication
======================================

Configuring Studio for headers based authentication is very simple: in your Authoring installation, go to ``shared/classes/crafter/studio/extension`` and add the following lines to ``studio-config-override.yaml`` (of course, make any appropriate configuration changes according to your system):

.. code-block:: properties
    :linenos:

    # Defines security provider for accessing repository. Possible values
    # - db (users are stored in database)
    # - ldap (users are imported from LDAP into the database)
    # - headers (use when authenticating via headers)
    studio.security.type: headers

    # Authentication via headers enabled
    studio.authentication.headers.enabled: false
    # Authentication header for secure key
    studio.authentication.headers.secureKeyHeaderName: secure_key
    # Authentication headers secure key that is expected to match secure key value from headers
    # Typically this is placed in the header by the authentication agent, e.g. Apache mod_mellon
    studio.authentication.headers.secureKeyHeaderValue: secure
    # Authentication header for username
    studio.authentication.headers.username: username
    # Authentication header for first name
    studio.authentication.headers.firstName: firstname
    # Authentication header for last name
    studio.authentication.headers.lastName: lastname
    # Authentication header for email
    studio.authentication.headers.email: email
    # Authentication header for groups: comma separated list of sites and groups
    #   Example:
    #   craftercms1645,Author,anothersite,Author
    studio.authentication.headers.groups: groups

