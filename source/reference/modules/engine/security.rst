:is-up-to-date: True
:last-updated: 4.2.0

.. _engine-security:

===============
Engine Security
===============
.. contents::
    :local:
    :depth: 2

.. _engine-saml2-configuration:

-------------------------------------------
Engine SAML2 Configuration |enterpriseOnly|
-------------------------------------------
.. version_tag::
    :label: Since
    :version: 4.0.3

.. important::
   *This document only applies to* **CrafterCMS version 4.0.3 and later** |br|
   *Please see* :ref:`here <engine-saml2-configuration-up-to-4-0-2>` *for version 4.0.2 and earlier.*

.. note:: This guide includes SAML2 specific configuration only, for a general guide see
   :ref:`engine-project-security-guide`

|

Crafter Engine can be configured to support SAML2 SSO out of the box without using any additional plugin.

^^^^^^^^^^^^
Requirements
^^^^^^^^^^^^
#. A SAML2 compatible Identity Provider properly configured, this configuration will not be covered here
#. A private key and certificate. This can be generated like so:

    ``openssl req -newkey rsa:2048 -nodes -keyout rp-private.key -x509 -days 365 -out rp-certificate.crt``

    Take note of the values of the following options used to generate your key and certificate that will be
    used later for configuring Crafter Engine:

    * **keyout**: The value used for this option wil be used in the ``crafter.security.saml.rp.privateKey.location`` property
    * **out**: The value used for this option will be used in the ``crafter.security.saml.rp.certificate.location`` property

^^^^^^^^^^^^^^^^^^^^^^^^
Update the Configuration
^^^^^^^^^^^^^^^^^^^^^^^^
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

Next we'll setup SAML configuration properties. Go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension`` and add/uncomment the following lines to :ref:`server-config.properties <engine-config>` (of course, make any appropriate configuration changes according to your system):

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

*where:*

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

The classpath is located in your CrafterCMS installation, under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes``. As shown in the example above, the relying party private key is located in your CrafterCMS installation under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/saml`` folder.

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

.. TODO The following section can be put back in if we go back to supporting different SAML2 per project
    .. _saml2-multi-environment-support:

    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    SAML2 Multi-Environment Support |enterpriseOnly|
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    When configuring SAML2 in an environment-specific project configuration file (``/config/engine/site-config.xml``), since the
    SAML2 configuration folder sits outside the environment folder, you can point to environment-specific SAML2
    files in the SAML2 folder for the following path/file configuration of SAML2:

    +------------------------------------+-------------------------------------------+-------------------------------------+
    || Property                          || Description                              || Default Value                      |
    +====================================+===========================================+=====================================+
    |``keystore.path``                   |The path of the keystore file in the repo  |``/config/engine/saml2/keystore.jks``|
    +------------------------------------+-------------------------------------------+-------------------------------------+
    |``identityProviderDescriptor``      |The path of the identity provider metadata |``/config/engine/saml2/idp.xml``     |
    |                                    |XML descriptor in the repo                 |                                     |
    +------------------------------------+-------------------------------------------+-------------------------------------+
    |``serviceProviderDescriptor``       |The path of the service provider metadata  |``/config/engine/saml2/sp.xml``      |
    |                                    |XML descriptor in the repo                 |                                     |
    +------------------------------------+-------------------------------------------+-------------------------------------+

    Use the format ``/config/engine/saml2/saml2-path-file-config-{myCustomEnv}.***`` for naming your SAML2 environment
    specific configuration files where ``{myCustomEnv}`` is the name of your environment.

    """""""
    Example
    """""""
    Say we're setting up SAML2 files for an environment named ``dev``. Using the format mentioned above, our environment
    specific SAML2 files will be the following:

    - ``/config/engine/saml2/keystore-dev.jks``
    - ``/config/engine/saml2/idp-dev.xml``
    - ``/config/engine/saml2/sp-dev.xml``

    Below is the SAML2 configuration using the above files in the project configuration file:

    .. code-block:: xml
       :caption: *Example SAML2 configuration for a custom environment*
       :emphasize-lines: 5,15,17

       <saml2>
         ...
         <keystore>
           <defaultCredential>abc-crafter-saml</defaultCredential>
           <path>/config/engine/saml2/keystore-dev.jks</path>
           <password encrypted="true">${enc:value}</password>
           <credentials>
             <credential>
               <name>abc-crafter-saml</name>
               <password encrypted="true">${enc:value}</password>
             </credential>
           </credentials>
         </keystore>
         <identityProviderName>http://www.okta.com/abc</identityProviderName>
         <identityProviderDescriptor>/config/engine/saml2/idp-dev.xml</identityProviderDescriptor>
         <serviceProviderName>https://intranet.abc.org/saml/SSO</serviceProviderName>
         <serviceProviderDescription>/config/engine/saml2/sp-dev.xml</serviceProviderDescription>
       </saml2>

.. _engine-headers-authentication:

-------------------------------------------------------
Configure Headers Based Authentication |enterpriseOnly|
-------------------------------------------------------
Crafter Engine is able to integrate with any authentication system that sends custom HTTP headers containing
information that will be used to authenticate the user in Engine. This section details how to setup Engine for
headers based authentication.

To enable Engine headers based authentication:

- Set ``security.headers.standalone`` to ``true``
- Set the URLs requiring authentication

Additionally, optional role mappings are available that allows mapping names from the external authentication to
simple role names to use in the page or URL restrictions. Optional attribute mappings are also available which
allow exposing attributes from the external authentication authority.

To enable Engine headers based authentication, open the Engine project configuration file ``site-config.xml``.

Set ``security.headers.standalone`` to ``true``

   .. code-block:: xml
      :caption: *Engine Project Configuration  - Enable headers authentication*
      :emphasize-lines: 4

      <security>
        ...
        <headers>
          <standalone>true</standalone>
        </headers>
      </security>

   |

Next, configure the URLs you require authentication by setting ``url`` to desired value and ``expression`` to
``isAuthenticated()`` like below:

   .. code-block:: xml
      :caption: *Engine Project Configuration  - setup url restrictions*
      :emphasize-lines: 3-6

      <security>
        <urlRestrictions>
          <restriction>
            <url>/**</url>
            <expression>isAuthenticated()</expression>
          </restriction>
        </urlRestrictions>
        ...
      </security>

   |

See :ref:`engine-project-security-guide-restrict-urls` for more information on expressions that can be used.

From the above configuration, here are the headers that Engine expects to be provided:

- ``CRAFTER_secure_key`` (required)
- ``CRAFTER_username`` (required)
- ``CRAFTER_email`` (required)
- ``CRAFTER_groups``
- ``CRAFTER_*``

It is also possible to change the prefix and names for the headers:

.. code-block:: xml
   :caption: *Engine Project Configuration  - change default header names*
   :linenos:

   <security>
     <headers>
       ...
       <names>
        <!-- Prefix that will be used for all headers, defaults to 'CRAFTER_' -->
        <prefix>MY_APP_</prefix>

        <!-- Name for the header containing the username, defaults to 'username' -->
        <username>user</username>

        <!-- Name for the header containing the email, defaults to 'email' -->
        <email>address</email>

        <!-- Name for the header containing the groups, defaults to 'groups' -->
        <groups>roles</groups>

        <!-- Name for the header containing the token, defaults to 'secure_key' -->
        <token>verification</token>

       </names>
       ...
     </headers>
   </security>

|

   .. note::
      For CrafterCMS versions prior to 3.1.14, the prefix for the headers is ``MELLON_`` and can't be changed via project configuration


The default value of the token is ``my_secure_token``. Remember to replace the default value by setting
``security.headers.token`` to secure your installation. In the example below, the token is now set to
``CHANGE_MY_TOKEN_VALUE``

   .. code-block:: xml
      :caption: *Engine Project Configuration  - Change the default value of the token*
      :emphasize-lines: 4

      <security>
      ...
        <headers>
          <token>CHANGE_MY_TOKEN_VALUE</token>
        </headers>
      </security>

^^^^^^^^^^^^^^^^^^^^^^
Optional Role Mappings
^^^^^^^^^^^^^^^^^^^^^^
To add optional role mappings, add the following inside the ``<headers>`` tag:

   .. code-block:: xml
      :caption: *Engine Project Configuration  - setup optional role mappings in header*
      :emphasize-lines: 5-8

      <security>
        <headers>
          ...
          <groups>
            <group>
              <name>APP_GROUP_NAME</name>    <!-- The name of the group in the header -->
              <role>ROLE_name_of_role</role> <!-- The name of the role in the authentication object -->
            </group>
          </groups>
          ...
        </headers>
      </security>


*where:*

* **name**: The name of the group in the header. The ``APP_`` prefix shown above is just an example and could be
  anything.
* **role**: The name of the role in the authentication object. Remember to add **ROLE_** to the name of the role in
  the authentication object. So, if mapping the role ``user``, it will be ``<role>ROLE_user</role>``

^^^^^^^^^^^^^^^^^^^
Optional Attributes
^^^^^^^^^^^^^^^^^^^
To add optional attributes, add the following inside the ``<headers>`` tag:

   .. code-block:: xml
      :caption: *Engine Project Configuration  - setup optional attributes in header*
      :linenos:
      :emphasize-lines: 5-10

      <security>
        <headers>
          ...
          <!-- Optional attribute mappings, allows to expose attributes from the external auth -->
          <attributes>
            <attribute>
              <name>APP_ATTRIBUTE_NAME</name>   <!-- The name of the attribute in the header, excluding the prefix -->
              <field>name</field>               <!-- The name of the attribute in the authentication object -->
            </attribute>
          </attributes>
          ...
        </headers>
      </security>


*where:*

* **name**: The name of the attribute in the header, with the prefix removed. (if your prefix is ``CRAFTER_`` then the
  header value would be ``CRAFTER_APP_ATTRIBUTE_NAME``, and you should enter ``APP_ATTRIBUTE_NAME`` in this tag.)
* **field**: The name of the attribute that will be created in the authentication object.

To get the value of the attribute passed in the header, use the following ``authToken.principal.attributes.name``,
 where ``name`` is the name of the attribute in the authentication object.

^^^^^^^
Example
^^^^^^^
Let's take a look at an example of setting up Engine headers authentication using a project created using the Website
Editorial blueprint named ``My Editorial``. We will also change the default value for the token header. We'll then take a
look at an example of setting up Engine headers authentication with optional role mappings and attribute.

"""""""""""""""""""""""""""""""""""""""""""""""""""""""
Simple Example Setting Up Engine Headers Authentication
"""""""""""""""""""""""""""""""""""""""""""""""""""""""
Open the Engine ``site-config.xml`` file in Studio, by navigating from the ``Sidebar`` to
``Project Tools`` > ``Configuration``, and finally picking up the ``Engine Project Configuration`` option from the list.

You can also access the ``site-config.xml`` using your favorite editor under
``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/site-config.xml``

Add the following, where we are enabling Engine headers authentication and requiring authentication for all URLs in the
project in addition to changing the default value for the token to ``my_updated_token``. :

   .. code-block:: xml
      :caption: *Engine Project Configuration  - Example enabling headers authentication*

      <?xml version="1.0" encoding="UTF-8"?>
      <site>
        <version>2</version>
        <security>
          <urlRestrictions>
            <restriction>
              <url>/**</url>
              <expression>isAuthenticated()</expression>
            </restriction>
          </urlRestrictions>
          <headers>
            <standalone>true</standalone>
            <token>my_updated_token</token>
          </headers>
        </security>
      </site>

Save your changes and remember to publish the file ``/config/engine/site-config.xml`` to see the Engine headers
authentication in action in delivery.

Now, try viewing the Home page without the header attributes required, by entering in your browser
``localhost:9080?crafterSite=my-editorial``. The Home page will not be displayed without the required header attributes.

.. image:: /_static/images/site-admin/engine-headers-delivery-not-sent.webp
   :align: center
   :width: 75%
   :alt: Website Editorial Home Page view without the headers sent

|

This time, try viewing the Home page with the following header attributes and values:

- ``CRAFTER_secure_key``: my_updated_token
- ``CRAFTER_username``: jsmith
- ``CRAFTER_email``: jsmith@example.com

You should now see the Home page displayed

.. image:: /_static/images/site-admin/engine-headers-delivery-sent.webp
   :align: center
   :width: 75%
   :alt: Website Editorial Home Page view with the headers sent

|

See :ref:`engine-config` for more information on how to access the ``site-config.xml`` file.

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Example Setting Up Engine Headers Authentication with Optional Role Mappings and Attributes
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
We'll now take a look at another example where we setup optional role mappings and attributes.

We'll setup the ``admin`` and the ``user`` roles and add the attribute ``APP_FULL_NAME``. We'll try to restrict
access to ``/articles/**`` for users with the ``user`` or ``admin`` role, then we'll try to display the
``APP_FULL_NAME`` value passed from the headers in our project. Remember that the ``ROLE_`` prefix is required

Open the Engine ``site-config.xml`` file in Studio, by navigating from the ``Sidebar`` to
``Project Tools`` > ``Configuration``, and finally picking up the ``Engine Project Configuration`` option from the dropdown.

Add the following to setup the ``admin`` and ``user`` role, and the attribute ``APP_FULL_NAME``:

   .. code-block:: xml
      :caption: *Engine Project Configuration  - Example Engine headers authentication with optional role mappings and attribute*
      :linenos:
      :emphasize-lines: 5, 13-22, 24-29

      <security>
        <urlRestrictions>
          <restriction>
            <url>/articles/**</url>
            <expression>hasAnyRole('user'\,'admin')</expression>
          </restriction>
        </urlRestrictions>
        <headers>
          <standalone>true</standalone>
          <token>my_updated_token</token>
          <!-- Optional role mappings, allows to map names from the external auth to simple role names to use in the page or url restrictions -->
          <!-- The APP_ prefix is just an example, the values can be anything -->
          <!-- The ROLE_ prefix is is required for the name of the role -->
          <groups>
            <group>
              <name>APP_ADMIN</name> <!-- The name of the group in the header -->
              <role>ROLE_admin</role>     <!-- The name of the role in the authentication object -->
            </group>
            <group>
              <name>APP_USER</name> <!-- The name of the group in the header -->
              <role>ROLE_user</role>     <!-- The name of the role in the authentication object -->
            </group>
          </groups>
          <!-- Optional attribute mappings, allows to expose attributes from the external auth -->
          <attributes>
            <attribute>
              <name>APP_FULL_NAME</name> <!-- The name of the attribute in the header -->
              <field>name</field>        <!-- The name of the attribute in the authentication object -->
            </attribute>
          </attributes>
        </headers>
      </security>

   |

For the ``expression`` in the URL restriction, remember to escape the comma as shown above
``<expression>hasAnyRole('user'\,'admin')</expression>``

When we send the following headers:

- ``CRAFTER_secure_key``: my_updated_token
- ``CRAFTER_username``: jsmith
- ``CRAFTER_email``: jsmith@example.com

Notice that when we try to view an article, since the user does not have either ``admin`` or ``user`` role, the page
is not available and will display the following message: ``The user doesn't have enough rights to access the page.``
In our example below, we tried previewing the article ``Top Books For Young Women`` with the headers listed above and
is shown the message below:

.. image:: /_static/images/site-admin/engine-headers-no-role.webp
   :align: center
   :width: 75%
   :alt: Website Editorial Article Page view without the proper role for the user

|


Let's now try sending the headers again, but this time with the role ``APP_USER`` for our user

- ``CRAFTER_secure_key``: my_updated_token
- ``CRAFTER_username``: jsmith
- ``CRAFTER_email``: jsmith@example.com
- ``CRAFTER_groups``: APP_USER

Notice that this time, we are able to preview the article correctly

.. image:: /_static/images/site-admin/engine-headers-w-role.webp
   :align: center
   :width: 75%
   :alt: Website Editorial Article Page view without the proper role for the user

|


The website editorial blueprint displays the value of the attribute with field ``name`` out of the box in the page
header. You can take a look at the ``header.ftl`` file on how the attribute is displayed. Open the ``Sidebar`` in
Studio, then navigate to ``/templates/web/components/`` then right click on ``header.ftl`` and select ``Edit``.
The ``authToken.principal.attributes.name`` contains the value passed for ``APP_FULL_NAME`` in the header

   .. code-block:: text
      :emphasize-lines: 5-6
      :caption: */templates/web/components/header.ftl*
      :linenos:

      <#import "/templates/system/common/cstudio-support.ftl" as studio />
      <header id="header" <@studio.componentAttr component=contentModel ice=true iceGroup="header"/>>
        <a href="/" class="logo"><img border="0" alt="${contentModel.logo_text_t!""}" src="${contentModel.logo_s!""}">
          <#if (authToken.principal)??>
            <#assign name = authToken.principal.attributes.name!"stranger" />
          <#else>
            <#assign name = "stranger" />
          </#if>

          Howdy, ${name}

         </a>
         ...
      </header>

|

Let's now try sending the headers again, but this time with the attribute ``APP_FULL_NAME``

- ``CRAFTER_secure_key``: my_updated_token
- ``CRAFTER_username``: jsmith
- ``CRAFTER_email``: jsmith@example.com
- ``CRAFTER_groups``: APP_USER
- ``CRAFTER_APP_FULL_NAME``: John Smith

Note that when sending the attribute ``APP_FULL_NAME`` in the header, the header prefix must be added as shown above.

When we preview a page, the value in the custom header is displayed:

.. image:: /_static/images/site-admin/engine-headers-APP-USER-NAME-displayed.webp
   :align: center
   :width: 75%
   :alt: Website Editorial Article Page view with the value of APP_USER_NAME displayed

|

|hr|

.. _setup-cloudfront-signed-cookies-in-crafter:

------------------------------------------------------
Setup CloudFront Signed Cookies in CrafterCMS Delivery
------------------------------------------------------
One way to provide access to restricted content through AWS CloudFront is to use signed cookies.
This section details how to setup CloudFront signed cookies for CrafterCMS with SSO.

From the  `AWS documentation <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html>`__

.. code-block:: text

      CloudFront signed cookies allow you to control who can access your content when you don't want to change your
      current URLs or when you want to provide access to multiple restricted files, for example, all of the files
      in the subscribers' area of a website.

Here are the steps:

1. Configure CloudFront to use signed cookies following this guide: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html
2. Add the Groovy class to your site's classes.

   .. literalinclude:: /_static/code/system-admin/CloudFrontUtils.groovy
      :language: groovy
      :caption: CloudFrontUtils.groovy
      :linenos:

3. Create a Groovy filter that checks for current user authentication/authorization on the requests that need it, and then calls the class method: ``CloudFrontUtils.setSignedCookies(request, response, siteConfig)``
4. Add the following config to Engine's site-config.xml:

   .. code-block:: xml
      :linenos:

      <aws>
        <cloudFront>
          <signedCookies>
            <domain><!--- Site's domain name, used by CloudFront --></domain>
            <resourcePath>static-assets/*</resourcePath>
            <keyPairId encrypted=""><!-- ID of the key pair created in step 1, recommended to be encrypted with Encrypt Marked from the UI  --></keyPairId>
            <privateKey encrypted=""><!-- Content of the private key created in step 1, recommended to be encrypted with Encrypt Marked from the UI</privateKey>
            <cloudFrontTimeToExpire><!--Time in minutes after which CloudFront will not allow access to the content using the cookie --></cloudFrontTimeToExpire>
            <cookieMaxAge><!-- Time in minutes after which the browser will consider the cookie expired --></cookieMaxAge>
          </signedCookies>
        </cloudFront>
      </aws>

   |

5. Configure an Error Page HTML in CloudFront for 403 errors, that will redirect to Engine using JS so that the SSO flow is started. It can be like the following:

   .. code-block:: html

      <!DOCTYPE html>
      <!-- saved from url=(0014)about:internet -->
      <html lang="en">
        <head>
          ...
          <script>
            if(document.location.hash.indexOf("dlink") == -1) {
              document.location = "/auth-asset?a=" + document.location.pathname + "#dlink";
            }
          </script>
          ...
        </head>
        <main id="main-content">
          <!-- PAGE CONTENT -->
          <script>
            if(document.location.hash.indexOf("dlink") != -1) {
              document.getElementById("headline").innerHTML = "403";
              document.getElementById("message").innerHTML = "You do not have permissions to access the requested resource. You will be redirected to the home page momentarily.";
              setTimeout(function(){ document.location = "/" }, 5000);
            }
          </script>
      </body></html>

   |

6. Create a ``/auth-asset`` page in your site with a Groovy script that only redirects back to the asset (the auth and cookie should have been already setup by filters):

   .. code-block::

      if(params.a) {
        response.sendRedirect(params.a)
      }

.. _engine-project-security-guide:

-----------------------------
Engine Project Security Guide
-----------------------------
The following guide will help you configure Crafter Engine to:

#. Add authentication for your project.
#. Add authorization so that access to certain pages and URLs of your project are restricted.

Crafter Engine is able to integrate with multiple authentication providers:

#. **Using SAML2**

   To configure SAML 2.0, follow the instructions: :ref:`engine-saml2-configuration`

#. **Using Crafter Profile**

   To configure Crafter Profile, follow the instructions: :ref:`engine-crafter-profile-configuration`

^^^^^^^^^^^^^^^^^^
Add Authentication
^^^^^^^^^^^^^^^^^^
"""""""""
Add Login
"""""""""
To add a login page:

#. In Crafter Studio, create a Home > Login page.
#. The page template should contain a form that POSTs to /crafter-security-login, sending the ``username``,
    ``password`` and ``rememberMe`` parameters, like in the following snippet:

   .. code-block:: html
     :linenos:

     <form action="/crafter-security-login" method="post">
         <label for="username">Username: </label>
         <input type="text" name="username"/>
         <br/>
         <label for="password">Password: </label>
         <input type="password" name="password"/>
         <br/>
         <input type="checkbox" name="rememberMe" value="true">Remember Me</input>
         <br/>
         <button type="submit">Sign in</button>
     </form>

""""""""""
Add Logout
""""""""""
To add logout, just add a link in the global header that points to /crafter-security-logout:

.. code-block:: html
 :linenos:

 <a href="/crafter-security-logout">Log Out</a>

^^^^^^^^^^^^^^^^^
Add Authorization
^^^^^^^^^^^^^^^^^
Adding authorization allows restricted access to certain pages and URLs of your project depending on what is setup.

""""""""""""""
Restrict Pages
""""""""""""""
You can restrict pages based on whether a user is authenticated or has a certain role. To do this, you need to follow
the next steps to create in the page content type a Repeating Group with a text Input for the roles:

#. In Studio, click on |projectTools|.
#. Click on **Content Types** then **Open Existing Type** and select the content type for the pages that you want to restrict.
#. On Controls, select the Repeating Group and add it to any Form Section (you can even create an Authorization section just for these fields).
#. In the Repeating Group properties, set the **Title** field to "Authorized Roles" and the **Name / Variable Name** field to "authorizedRoles."

    .. image:: /_static/images/site-admin/authorized_roles_properties.webp
        :alt: Engine Project Security Guide - Authorized Roles Properties

    |

       .. warning::
           The UI autofills the **Name/ Variable Name** field and adds postfixes as you're typing in the **Title** field. Remember to remove the postfix ``_o``, as ``authorizedRoles`` is a reserved variable name used by CrafterCMS. For a list of variable names used by CrafterCMS, see :ref:`form-control-variable-names` for more information

           The ``ROLE_`` prefix is optional for values in ``authorizedRoles``

#. Add an Input control inside the Repeating Group, with the **Title** field set to "Role" and the **Name / Variable Name** field set to "role". Make this Input required by checking the checkbox under **Constraints** in the **Required** field in the **Properties Explorer**.

    .. image:: /_static/images/site-admin/role_properties.webp
        :alt: Engine Project Security Guide - Role Properties

    |

       .. warning::
           The UI autofills the **Name / Variable Name** field and adds postfixes as you're typing in the **Title** field. Remember to remove the postfix ``_o``, as the ``role`` variable name is used by CrafterCMS for enforcing access to a page. For a list of variable names used by CrafterCMS, see :ref:`form-control-variable-names` for more information


#. Save the changes. The added fields should look like this:

    .. image:: /_static/images/site-admin/authorization_section.webp
        :alt: Engine Project Security Guide - Authorization Section

    |

With these changes, now you or any other content author can go to any page of this content type and add the roles that
are required to access the page. Two special roles which indicate authentication state can be used besides the roles
that are included in user profiles: ``Anonymous`` and ``Authenticated``. The complete access check algorithm executed
by Crafter Engine is described below:

#. If the page doesn't contain any role, no authentication is needed.
#. If the page has the role ``Anonymous``, no authentication is needed.
#. If the page has the role ``Authenticated``, just authentication is needed.
#. If the page has any other roles, the user needs to be authenticated and have any of those roles.

.. _engine-project-security-guide-restrict-urls:

"""""""""""""
Restrict URLs
"""""""""""""
Sometimes it is not enough to restrict a single page. Sometimes you need to restrict an entire project subtree, or
restrict several static assets. For this, CrafterCMS provides configuration parameters that allow you to restrict
access based on URL patterns. You just need to add configuration similar to the following in Config > Engine Project Configuration:

.. code-block:: xml
    :linenos:

    <security>
        <urlRestrictions>
            <restriction>
                <url>/user/*</url>
                <expression>hasAnyRole({'user'\, 'admin'})</expression>
            </restriction>
        </urlRestrictions>
    </security>

The ``<urlRestrictions>`` can contain any number of ``<restriction>`` elements. Each restriction is formed by an
Ant-style path pattern (``<url>``) and a Spring EL expression (``<expression>``) executed against the current profile.
If a request matches the URL, and the expression evaluates to false, access is denied. The following expressions can
be used:

*   ``isAnonymous()``
*   ``isAuthenticated()``
*   ``hasRole('role')``
*   ``hasAnyRole({'role1'\, 'role2'})``
*   ``permitAll()``
*   ``denyAll()``

.. note::
   For the ``<url>`` Ant-style path pattern, ``<url>/*</url>`` indicates just one level of the URL and ``<url>/**</url>`` indicates all urls. For more information on Ant-style path pattern matching, see https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html

   For the ``hasAnyRole`` expression, remember to escape the comma ``,`` separating the roles inside the expression as shown above.

   For more information, check
   :javadoc_base_url:`UrlAccessRestrictionCheckingProcessor.java <profile/org/craftercms/security/processors/impl/UrlAccessRestrictionCheckingProcessor.html>`
   and :javadoc_base_url:`AccessRestrictionExpressionRoot.java <profile/org/craftercms/security/utils/spring/el/AccessRestrictionExpressionRoot.html>`

.. _engine-security-access-attributes:

^^^^^^^^^^^^^^^^^^^^^^
Access User Attributes
^^^^^^^^^^^^^^^^^^^^^^
Once the authentication and authorization configurations are completed you can use the ``authToken`` object in
templates and scripts to access the current user attributes. The class of the object will change depending of the
authentication provider used, but you can always obtain an instance of |CustomUser| using the ``principal`` property.

.. code-block:: none
  :caption: Displaying the first name of the current user in Freemarker

  <#if authToken??>
    Hello ${authToken.principal.attributes.firstName}!
  <#else>
    <#-- show login button -->
  </#if>

.. note:: You can find more details about the ``authToken`` variable in :ref:`templating-api` or :ref:`groovy-api`

|

""""""""""""""""""""""""""""""
Migrating from Crafter Profile
""""""""""""""""""""""""""""""
Prior to version ``3.1.5`` Crafter Profile was the only security provider available, all projects created in previous
versions will continue to work without any changes, however if you need to migrate to a different provider like SAML2
you will need to replace all uses of the ``profile`` and ``authentication`` variables, both have been replaced with
``authToken``.

In templates and scripts you can replace all uses of ``profile`` with ``authToken`` and ``profile.attributes`` with
``authToken.principal.attributes``.

   .. note:: Some advanced uses like custom security filters will need to be updated to integrate with Spring Security


|

   .. important::
      **The variables** ``profile`` **and** ``authentication`` **will be null in most cases and should not be used anymore**


.. |CustomUser| replace:: :javadoc_base_url:`CustomUser <engine/org/craftercms/engine/util/spring/security/CustomUser.html>`

|hr|

.. _engine-crafter-profile-configuration:

------------------------------------
Engine Crafter Profile Configuration
------------------------------------
.. note:: This guide includes Crafter Profile specific configuration only, for a general guide see
          :ref:`engine-project-security-guide`

Crafter Engine needs access tokens to use Crafter Profile's API. Each project must have it's own access token. Follow the
next steps to create one:

#. Login to Crafter Profile Admin Console as a ``PROFILE_SUPERADMIN`` (by default the admin user has this role). *See* :ref:`here <crafter-profile-admin-console>` *for more information on the Crafter Profile Admin Console UI.*
#. Click on **New Access Token** in the navigation. Enter your project's name on **Application**, leave the **Master** checkbox
   unselected, pick a proper Expiration Date (10 years from the current date is ok) and on **Tenant Permissions** add
   your tenant's name to the input (*Remember that your tenant's name has to have the same name as your project. See the note below*) and click on **Add**. By default the admin console auto-selects the 3 actions
   mentioned before. If you're using the same access token as another environment (e.g. you want to use the same
   access token in dev and prod), copy the same access token ID from the other environment, and enter the same field
   values for Application, Master and Expiration Date. Finally, click on **Accept**.

   .. note::
       Authentication by default is done against a tenant with the same name as your project. See :ref:`profile-admin-tenants` for more information on creating a tenant.

   .. image:: /_static/images/new_access_token.webp
       :alt: Engine Crafter Profile Configuration - New Access Token
       :width: 65%

   |

#. Now that you have created the access token, you need to "tell" Engine to use it in your project. In Admin Console,
    click on **List Access Tokens** in the navigation menu and copy the ID of the token you just created. Then, depending
    on the mode Engine is running, add one of the following configurations (preview is ignored because normally
    predefined Personas are used, so there's no need to access the Crafter Profile app).

    .. code-block:: xml
      :linenos:

      <profile>
          <api>
              <accessTokenId>6604d59a-fe1b-4cb3-a76f-bdb1eb61e8c2</accessTokenId>
          </api>
      </profile>

.. TODO Discuss and see if it's safe to remove the section below
    """"""""""""""""""
    Add Authentication
    """"""""""""""""""
    ~~~~~~~~~~~~~~~~
    Add Registration
    ~~~~~~~~~~~~~~~~
    Normally, to add registration or sign up you just need to:

    #. Create a page with an HTML form that captures the user information for registration:

        .. code-block:: html
          :linenos:

          <form action="/registration" method="post">
              Email: <input type="text" name="email"></input><br/>
              First Name: <input type="text" name="firstname"></input><br/>
              Last Name: <input type="text" name="lastname"></input><br/>
              Password: <input type="password" name="password"></input><br/>
              <button type="submit">Submit</button>
          </form>

    #. Create a controller script that receives the information and creates the respective profile. Assuming the
        controller should be under /registration, you need to create a script under Scripts > controllers >
        registration.post.groovy, with code similar to the following:

        .. code-block:: groovy
          :linenos:

          import utils.MailHelper

          import org.craftercms.engine.exception.HttpStatusCodeException
          import org.craftercms.profile.api.Profile
          import org.craftercms.security.utils.SecurityUtils

          def sendVerificationEmail(mailHelper, profile) {
              def token = profileService.createVerificationToken(profile.id.toString())
              def verificationUrl = urlTransformationService.transform("toFullUrl", "/verifyacct?token=${token.id}")
              def model = [:]
                  model.profile = profile
                  model.verificationUrl = verificationUrl

              mailHelper.sendEmail("noreply@example.com", profile.email, "Verify Account", "/templates/mail/verify-account.ftl", model)
          }

          def email = params.email
          def firstName = params.firstname
          def lastName = params.lastname
          def password = params.password

          if (!email) {
              throw new HttpStatusCodeException(400, "Bad request: missing email")
          } else if (!firstName) {
              throw new HttpStatusCodeException(400, "Bad request: missing first name")
          } else if (!lastName) {
              throw new HttpStatusCodeException(400, "Bad request: missing last name")
          } else if (!password) {
              throw new HttpStatusCodeException(400, "Bad request: missing password")
          }

          def profile = profileService.getProfileByUsername(siteContext.siteName, email)
          if (profile == null) {
              def attributes = [:]
                  attributes.firstName = firstName
                  attributes.lastName = lastName

              profile = profileService.createProfile(siteContext.siteName, email, password, email, false, null, attributes, null)

              sendVerificationEmail(new MailHelper(siteContext.freeMarkerConfig.configuration), profile)

              return "redirect:/"
          } else {
              throw new HttpStatusCodeException(400, "User '${email}' already exists")
          }

    #. Create also a MailHelper.groovy file under Classes > groovy > utils, with the following code:

        .. code-block:: groovy
          :linenos:

          package utils

          import java.util.Properties

          import org.craftercms.commons.mail.impl.EmailFactoryImpl
          import org.craftercms.engine.exception.HttpStatusCodeException
          import org.springframework.mail.javamail.JavaMailSenderImpl

          class MailHelper {

              def emailFactory

              def MailHelper(freeMarkerConfig) {
                  def javaMailProperties = new Properties()
                      javaMailProperties["mail.smtp.auth"] = "false"
                    javaMailProperties["mail.smtp.starttls.enable"] = "false"

                  def mailSender = new JavaMailSenderImpl()
                      mailSender.host = "localhost"
                      mailSender.port = 25
                      mailSender.protocol = "smtp"
                      mailSender.defaultEncoding = "UTF-8"
                      mailSender.javaMailProperties = javaMailProperties

                  emailFactory = new EmailFactoryImpl()
                  emailFactory.mailSender = mailSender
                  emailFactory.freeMarkerConfig = freeMarkerConfig
              }

              def sendEmail(from, to, subject, templateName, templateModel) {
                  emailFactory.getEmail(from, (String[])[ to ], null, null, subject, templateName, templateModel, true).send()
              }

          }

    #. Create the Freemarker template that will be used to send the verification emails to the users, under Templates >
        mail > verify-account.ftl:

        .. code-block:: html
          :linenos:

          <p>Hi ${profile.attributes.firstName}!</p>

          <p>
              Thanks for joining MySite.com. To verify your new account, click or copy the link below in your browser:<br/>
              <a href="${verificationUrl}">${verificationUrl}</a>
          </p>

          <p>
              Thanks,<br/>
              The MySite.com Team
          </p>

    #. Finally, add the controller that will perform the profile verification when the user clicks on the link included
        in the email and is redirected. If we used the code above, the script should be put in Scripts > controllers >
        verifyacct.get.groovy:

        .. code-block:: groovy
          :linenos:

          import org.craftercms.engine.exception.HttpStatusCodeException

          def token = params.token
          if (token) {
              profileService.verifyProfile(token)

              return "/templates/web/account-verified.ftl"
          } else {
              throw new HttpStatusCodeException(400, "Bad request: token param is missing")
          }

    ~~~~~~~~~~~~~~~~~~
    Add Single Sign-On
    ~~~~~~~~~~~~~~~~~~
    Configure SSO headers with at least a CRAFTER_secure_key, CRAFTER_username, CRAFTER_email and CRAFTER_groups (which must be a comma separated list of string) in the header, then check in Crafter Profile Admin Console to make sure
    that the Single sign-on enabled checkbox is selected in the tenant page.

    .. image:: /_static/images/sso_enabled.webp

    All headers with the ``CRAFTER_`` prefix will be mapped, without the prefix, to the attributes you defined in the
    Crafter Profile tenant, when a new user needs to be created. So the configuration above will cause the Security
    Provider to create a user with firstName, lastName and displayName attributes.

       .. note::
          For CrafterCMS versions prior to 3.1.14, the prefix for the headers is ``MELLON_`` instead of ``CRAFTER_`` and can't be changed via project configuration.

    ~~~~~~~~~~~~~~~~~~
    Add Facebook Login
    ~~~~~~~~~~~~~~~~~~
    #. Be sure there's a connections attribute of Complex type defined for the project's Crafter Profile Tenant. This
        attribute is needed to store the Facebook connection info. To add this attribute to the Tenant, go to Crafter
        Profile Admin Console, select the Tenant and then add the attribute.

        .. image:: /_static/images/connections_attribute.webp

    #. Add the Facebook appSecret and appKey to your project's config (in Studio, Config > Engine Project Configuration), like this:

        .. code-block:: xml
          :linenos:

          <socialConnections>
              <facebookConnectionFactory>
                  <appId>YOUR_APP_ID</appId>
                  <appSecret>YOUR_APP_SECRET</appSecret>
              </facebookConnectionFactory>
          </socialConnections>

    #. Add a JS method that is triggered when the user clicks on the "Login with Facebook" button, that displays the FB
        login popup when the user clicks on "Connect with Facebook":

        .. code-block:: javascript
          :linenos:

          $("#connect").click(function() {
              try {
                  var top = (screen.height / 2) - (300/ 2);
                  var left = (screen.width / 2) - (500 / 2);
                  var fbDialog = window.open('/connect/facebook_dialog', 'fbDialog', 'width=500, height=300, top=' + top + ', left=' + left);
                  var interval = setInterval(function() {
                      if (fbDialog == null || fbDialog.closed) {
                          clearInterval(interval);

                          location.reload();
                      }
                  }, 1000);
              } catch(e) {}
          }

    #. Add a controller script under Scripts > controllers > connect > facebook_dialog.get.groovy, that will redirect to
        the actual Facebook login when the popup appears. The whole FB login process can be done with the help of the
        ``providerLoginSupport``, provided automatically to all scripts. The ``start(tenant, providerId, request,
        additionalParams, connectSupport)`` method is used to create the proper Facebook redirect URL. Also, by creating
        a custom ``ConnectSupport`` with a callbackUrl you can tell Facebook the URL to redirect to after the user has
        logged in.

        .. code-block:: groovy
          :linenos:

          import org.springframework.social.connect.web.ConnectSupport
          import org.springframework.util.LinkedMultiValueMap

          def connectSupport = new ConnectSupport()
              connectSupport.callbackUrl = urlTransformationService.transform("toFullUrl", "/connect/facebook")

          def additionalParams = new LinkedMultiValueMap<String, String>()
              additionalParams.add("scope", "email,public_profile")
              additionalParams.add("display", "popup")

          return "redirect:" + providerLoginSupport.start(siteContext.siteName, "facebook", request, additionalParams, connectSupport)

    #. Under Scripts > controllers > connect > facebook.get.groovy, add the script to complete the Facebook connection.
        By calling ``providerLoginSupport.complete(tenant, providerId, request)``, the login process will automatically
        be completed for you, and a new user will be created if there wasn't a previous one with the Facebook provided
        username or email.

        .. code-block:: groovy
          :linenos:

          providerLoginSupport.complete(siteContext.siteName, "facebook", request)

          return "/templates/web/fb-login-done.ftl"

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Accessing Crafter Profile REST API
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following property allows you to configure the access token required to call Profile REST APIs:

* ``profile.api.accessToken``: The access token to use for the Profile REST calls.

|

|hr|

.. TODO review this and remember SAML is per instance
    * **security.saml.token:** The expected value for the secure key request header
    * **security.saml.groups:** Contains any number of ``<group>`` elements. Each ``<group>`` element contains a ``<name>`` element (The name of the group from the request header) and a ``<role>`` element (The value to use for the role in the profile).
    * **security.saml.attributes:** Contains any number of ``<attribute>`` elements. Each ``<attribute>`` element contains a ``<name>`` element (The name of the request header for the attribute) and a ``<field>`` element (The name of the field to use in the profile).

----
URLs
----
^^^^^
Login
^^^^^
The following properties allows you to configure various Login URLs:

* The ``security.login.formUrl`` property allows you to configure the URL of the login form page. The default is ``/login``.
* The ``security.login.defaultSuccessUrl`` property allows you to configure the URL to redirect to if the login was
  successful and the user couldn't be redirected to the previous page. The default is ``/``.
* The ``security.login.alwaysUseDefaultSuccessUrl`` property allows you to configure whether to always redirect to the
  default success URL. The default is ``false``.
* The ``security.login.failureUrl`` property allows you to configure the URL to redirect to if the login fails.
  The default is ``/login?login_error=true``.

.. code-block:: xml
    :caption: */config/engine/site-config.xml*

    <security>
      <login>
        <formUrl /> (The URL of the login form page)
        <defaultSuccessUrl /> (The URL to redirect to if the login was successful and the user could not be redirected to the previous page)
        <alwaysUseDefaultSuccessUrl /> (Sets whether to always redirect to the default success URL after a successful login)
        <failureUrl /> (The URL to redirect to if the login fails)
      </login>
    </security>


^^^^^^
Logout
^^^^^^
The ``security.logout.successUrl`` property allows you to configure the URL to redirect to after a successful logout.
The default is ``/``.

.. code-block:: xml
    :caption: */config/engine/site-config.xml*

    <security>
      <logout>
        <successUrl /> (The URL to redirect after a successful logout)
      </logout>
    </security>

^^^^^^^^^^^^^
Access Denied
^^^^^^^^^^^^^
The ``security.accessDenied.errorPageUrl`` property allows you to configure the URL of the page to show when
access has been denied to a user to a certain resource. The default is ``/access-denied``.

.. code-block:: xml
    :caption: */config/engine/site-config.xml*

    <security>
      <accessDenied>
        <errorPageUrl /> (The URL of the page to show when access has been denied to a user to a certain resource)
      </accessDenied>
    </security>

^^^^^^^^^^^^^^^^
URL Restrictions
^^^^^^^^^^^^^^^^
The **security.urlRestrictions:** property allows you to configure URL restrictions. It contains any number of
restriction elements. Each restriction is formed by an Ant-style path pattern (``<url>``) and a Spring EL
expression (``<expression>``) executed against the current profile. If a request matches the URL, and the
expression evaluates to false, access is denied. For more information, check
:javadoc_base_url:`UrlAccessRestrictionCheckingProcessor.java <profile/org/craftercms/security/processors/impl/UrlAccessRestrictionCheckingProcessor.html>`
and :javadoc_base_url:`AccessRestrictionExpressionRoot.java <profile/org/craftercms/security/utils/spring/el/AccessRestrictionExpressionRoot.html>`

.. note::
    For the ``<url>`` Ant-style path pattern, ``<url>/*</url>`` indicates just one level of the URL and ``<url>/**</url>`` indicates all urls. For more information on Ant-style path pattern matching, see https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html

.. code-block:: xml
    :caption: */config/engine/site-config.xml*

    <security>
      <urlRestrictions> (Contains any number of restriction elements)
        <restriction> (Restriction element, access is denied if a request matches the URL, and the expression evaluates to false)
          <url /> (URL pattern)
          <expression /> (Spring EL expression)
        </restriction>
      </urlRestrictions>
    </security>

|hr|

----------------------------
Other Security Configuration
----------------------------
.. _engine-security-preview-mode:

^^^^^^^^^^^^
Preview Mode
^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.2.0

In preview mode, CrafterCMS provides a security filter that can be enabled to intercept all requests and validates the following:

- ``crafterPreview`` cookie exists
- ``crafterPreview`` cookie decrypted value contains a site name and an expiration timestamp
- Site name matches the one from ``SiteContextResolver``
- Expiration timestamp is in the future

To enable the Engine Preview Mode security filters, set ``crafter.security.preview.enabled`` to true.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    #######################
    # Security Properties #
    #######################
    # If the preview security filters should be enabled
    crafter.security.preview.enabled=true

There may be some URLs that may not need filtering in Preview mode by the security filter when it is enabled.
To exclude a URL from being intercepted and validated by the security filter, add the URL to the
``crafter.security.preview.urlsToExclude`` property:

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    # The URLs to be excluded from preview security checks
    crafter.security.preview.urlsToExclude=\
      /api/1/monitoring/**,\
      /api/1/site/context/**,\
      /api/1/site/cache/**

Enabling the security filter in Preview Mode requires the configuration encryption configurations (which are shared
between Studio and Engine) and admins will need to update the default configurations for the encryption key and salt in
:ref:`Studio <studio-cipher-configuration>` and in :ref:`Engine <engine-configuration-properties-encryption>`.

.. _engine-configuration-properties-encryption:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuration Properties Encryption
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    # The key used for encryption of configuration properties
    crafter.security.encryption.key=${CRAFTER_ENCRYPTION_KEY}
    # The salt used for encryption of configuration properties
    crafter.security.encryption.salt=${CRAFTER_ENCRYPTION_SALT}
