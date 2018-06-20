.. _crafter-studio-configure-headers-based-auth:

======================================
Configure Headers Based Authentication
======================================

Crafter Studio is able to integrate with SAML 2.0 providers and similar Single Sign-on (SSO) solutions.  Studio will look for configurable HTTP headers and will use those to authenticate the user.  This section details how to setup Studio for headers based authentication.

-------------------------------------------------
Configure Studio for Headers Based Authentication
-------------------------------------------------

Configuring Studio for headers based authentication is very simple: in your Authoring installation, go to ``shared/classes/crafter/studio/extension`` and add the following lines to ``studio-config-override.yaml`` (of course, make any appropriate configuration changes according to your system):

.. code-block:: properties
    :linenos:

    # Defines security provider for accessing repository. Possible values
    # - db (users are stored in database)
    # - ldap (users are imported from LDAP into the database)
    # - headers (use when authenticating via headers)
    studio.security.type: headers

    # Authentication via headers enabled
    studio.authentication.headers.enabled: true
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

From the above configuration, here are the attributes that Studio expects from the headers to be provided:

    - username
    - firstname
    - lastname
    - email
    - groups

The attribute ``secure_key`` is placed by the authentication agent, e.g. Apache mod_mellon, in the header.

.. note:: Users logged in to Studio through SSO should not be able to logout from Studio.  This functionality will be supported in a future release.  In the meantime, **Sign Out** can be removed by removing the ``logout`` menu item from ``contextual-navigation-config.xml``.  See :ref:`contextual-navigation-configuration` for more information on the configuration file.


---------------------
Setup mod_auth_mellon
---------------------

Let's take a look at an example setup for headers based authentication using SAML 2.0.  In this example, we will be configuring mod_auth_mellon (authentication module for Apache, https://github.com/UNINETT/mod_auth_mellon) on Ubuntu, so we can authenticate users against a SAML 2.0 Identity Provider (IdP) e.g. simplesamlphp setup as an IdP, to grant access to Studio through attributes received from the IdP.

1. Install mod_auth_mellon with dependencies

   .. code-block:: sh

       apt-get install apache2 apache2-dev openssl liblasso3 liblasso3-dev libapache2-mod-auth-mellon

2. Enable required modules

   .. code-block:: sh

       a2enmod auth_mellon headers proxy_ajp

3. Create the service provider metadata with the `mellon_create_metadata.sh <https://raw.githubusercontent.com/UNINETT/mod_auth_mellon/master/mellon_create_metadata.sh/>`_ script.

   Here's an example:

   .. code-block:: sh

       mellon_create_metadata.sh https://sp.example.org/studio https://sp.example.org/mellon

   This will create three files:

      * **.key** file which contains the private key in PEM format,
      * **.cert** file which contains the certificate in PEM format
      * **.xml** file which contains the metadata file for the Service Provider (SP).

   Save the files in some directory, e.g. ``/etc/apache2/mellon/``

4. Add the metadata for your IdP.  Your IdP metadata is an XML file.  Save the file somewhere accessible to the web server, e.g. ``/etc/apache2/mellon/idp-metadata.xml``.  Remember to ask your IdP administrators to have the following attributes for users, so that the users can login to Studio (attributes expected by Studio to login a user):

    - username
    - firstname
    - lastname
    - email

5. Add the auth_mellon configuration to the virtual host.  The configuration should be similar to this:

   .. code-block:: apacheconf
      :linenos:

      ProxyPass / ajp://localhost:8009/
      ProxyPassReverse / ajp://localhost:8009/

      # Mod Mellon Conf
      <Location />
          # This location will trigger an authentication request to the IdP.
          MellonEnable "auth"

          RequestHeader unset username
          RequestHeader unset email
          RequestHeader unset firstname
          RequestHeader unset lastname
          RequestHeader unset groups
          RequestHeader unset secure_key

          RequestHeader set username "%{MELLON_username}e" env=MELLON_username
          RequestHeader set email "%{MELLON_email}e" env=MELLON_email
          RequestHeader set firstname "%{MELLON_firstname}e" env=MELLON_firstname
          RequestHeader set lastname "%{MELLON_lastname}e" env=MELLON_lastname
          RequestHeader set groups "%{MELLON_groups}e" env=MELLON_groups
          RequestHeader set secure_key "secure"

          # Configure the SP metadata
          MellonSPPrivateKeyFile  /etc/apache2/mellon/https_sp.example.org_studio.key
          MellonSPCertFile        /etc/apache2/mellon/https_sp.example.org_studio.cert
          MellonSPMetadataFile    /etc/apache2/mellon/https_sp.example.org_studio.xml

          # IdP metadata. This should be the metadata file you got from the IdP.
          MellonIdPMetadataFile   /etc/apache2/mellon/idp-metadata.xml
      </Location>

   * The URL after **Location** will be the URL auth_mellon intercepts.  **MellonEnable "auth"** enables auth_mellon at the location.
   * The **RequestHeader unset** entries will make sure someone is not trying to forge the headers to authenticate as a user
   * The **RequestHeader set** entries create headers that are later sent to Studio.  You need to specify the **Mellon_username**, **Mellon_email**, **Mellon_firstname**, **Mellon_lastname** and **secure_key** headers, otherwise, the user will not be able to login to Studio.  It’s important to remember that the environment variables set by auth_mellon and used to create this headers depend on the IdP, so you’ll need to check first what the IdP is sending before defining the headers.
   * The last properties are the paths of each file generated by the mellon_create_metadata.sh script and the IdP metadata file retrieved from the IdP

6. Before the service provider (Studio) can communicate with the IdP, the IdP must have metadata for your SP installed.  Send the metadata you have generated to the administrators of the IdP.

Once a user has been authenticated, the user will be granted access to Studio.  If the user is not yet in the Studio database, the user will be created in the database with the attributes from the header, and also added to the groups of the site specified in the header.

.. note::

   The **secure_key** header value set in the ``auth_mellon configuration`` (Item number 5 above) should match the value listed in the ``studio-config-override.yaml`` for the property **studio.authentication.headers.secureKeyHeaderName**.  Also, remember to change the default values listed for the **secure_key** in the yaml file.

For more information on doing a generic setup of mod_auth_mellon, see: https://github.com/UNINETT/mod_auth_mellon/wiki/GenericSetup
