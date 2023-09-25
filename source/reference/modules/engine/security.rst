:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Engine Security

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

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Update the Project Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

^^^^^^^^^^^^^^^^^^^^^^^^^
Multi-Environment Support
^^^^^^^^^^^^^^^^^^^^^^^^^
It's often the case that lower environments will require their own authentication configuration. Crafter Engine supports that by allowing you to configure multiple SAML2 configurations, and then specify which configuration to use for each environment. See the article :ref:`saml2-multi-environment-support` for more information.


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

- CRAFTER_secure_key (required)
- CRAFTER_username (required)
- CRAFTER_email (required)
- CRAFTER_groups
- CRAFTER_*

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


where:

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


where:

* **name**: The name of the attribute in the header, with the prefix removed. (if your prefix is ``CRAFTER_`` then the
  header value would be ``CRAFTER_APP_ATTRIBUTE_NAME``, and you should enter ``APP_ATTRIBUTE_NAME`` in this tag.)
* **field**: The name of the attribute that will be created in the authentication object.

To get the value of the attribute passed in the header, use the following ``authToken.principal.attributes.name``,
 where ``name`` is the name of the attribute in the authentication object.

-------
Example
-------

Let's take a look at an example of setting up Engine headers authentication using a project created using the Website
Editorial blueprint named ``My Editorial``. We will also change the default value for the token header. We'll then take a
look at an example of setting up Engine headers authentication with optional role mappings and attribute.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Simple Example Setting Up Engine Headers Authentication
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

- CRAFTER_secure_key : my_updated_token
- CRAFTER_username : jsmith
- CRAFTER_email : jsmith@example.com

You should now see the Home page displayed

.. image:: /_static/images/site-admin/engine-headers-delivery-sent.webp
   :align: center
   :width: 75%
   :alt: Website Editorial Home Page view with the headers sent

|

See :ref:`engine-config` for more information on how to access the ``site-config.xml`` file.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Example Setting Up Engine Headers Authentication with Optional Role Mappings and Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

- CRAFTER_secure_key : my_updated_token
- CRAFTER_username : jsmith
- CRAFTER_email : jsmith@example.com

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

- CRAFTER_secure_key : my_updated_token
- CRAFTER_username : jsmith
- CRAFTER_email : jsmith@example.com
- CRAFTER_groups: APP_USER

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

- CRAFTER_secure_key : my_updated_token
- CRAFTER_username : jsmith
- CRAFTER_email : jsmith@example.com
- CRAFTER_groups: APP_USER
- CRAFTER_APP_FULL_NAME: John Smith

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

  For the *hasAnyRole* expression, remember to escape the comma ``,`` separating the roles inside the expression as shown above.

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
