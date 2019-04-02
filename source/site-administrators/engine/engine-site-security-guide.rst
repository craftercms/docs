.. highlight:: groovy
   :linenothreshold: 5

.. _engine-site-security-guide:

==========================
Engine Site Security Guide
==========================

The following guide will help you configure Crafter Engine and Crafter Profile to:

#.  Enable security for your website.
#.  Add authentication to your site, including Facebook login and Single Sign-On.
#.  Add authorization so that access to certain pages and URLs of your site are restricted.
#.  Add standalone authentication to your site

---------------
Enable Security
---------------

Crafter Engine needs access tokens to use Crafter Profile's API. Each site must have it's own access token. Follow the next steps to
create one:

#.  Login to Crafter Profile Admin Console as a PROFILE_SUPERADMIN (by default the admin user has this role).
#.  Click on New Access Token in the navigation. Enter your site's name on Application, leave the Master checkbox unselected, pick a
    proper Expiration Date (10 years from the current date is ok) and on Tenant Permissions add your tenant's name to the input and
    click on add. By default the admin console auto-selects the 3 actions mentioned before. If you're using the same access token as
    another environment (e.g. you want to use the same access token in dev and prod), copy the same access token ID from the other
    environment, and enter the same field values for Application, Master and Expiration Date. Finally, click on Accept.

    .. image:: /_static/images/new_access_token.png

#.  Now that you have created the access token, you need to "tell" Engine to use it in your site. In Admin Console, click on
    List Access Tokens in the navigation menu and copy the ID of the token you just created. Then, depending on the mode Engine
    is running, add one of the following configurations (preview is ignored because normally predefined Personas are used, so
    there's no need to access the Crafter Profile app).

    *   **Multi-tenant:** You need to add the access token ID to the Config > site.xml in Studio, and deploy the file to Engine:

        .. code-block:: xml

            <profile>
                <api>
                    <accessTokenId>6604d59a-fe1b-4cb3-a76f-bdb1eb61e8c2</accessTokenId>
                </api>
            </profile>

    *   **Single tenant:** In the Tomcat where Engine is installed, go to shared/classes/crafter/engine/extension and add the access
        token ID as the following property:

        .. code-block:: properties

            crafter.profile.rest.client.accessToken.id=6604d59a-fe1b-4cb3-a76f-bdb1eb61e8c2

------------------
Add Authentication
------------------

Add Registration
================

Normally, to add registration or sign up you just need to:

#.  Create a page with an HTML form that captures the user information for registration:

    .. code-block:: html

        <form action="/registration" method="post">
            Email: <input type="text" name="email"></input><br/>
            First Name: <input type="text" name="firstname"></input><br/>
            Last Name: <input type="text" name="lastname"></input><br/>
            Password: <input type="password" name="password"></input><br/>
            <button type="submit">Submit</button>
        </form>

#.  Create a controller script that receives the information and creates the respective profile. Assuming the controller should be
    under /registration, you need to create a script under Scripts > controllers > registration.post.groovy, with code similar to
    the following:
    ::

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

#.  Create also a MailHelper.groovy file under Classes > groovy > utils, with the following code:
    ::

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

#.  Create the Freemarker template that will be used to send the verification emails to the users, under Templates > mail >
    verify-account.ftl:

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

#.  Finally, add the controller that will perform the profile verification when the user clicks on the link included in the email and
    is redirected. If we used the code above, the script should be put in Scripts > controllers > verifyacct.get.groovy:
    ::

        import org.craftercms.engine.exception.HttpStatusCodeException

        def token = params.token
        if (token) {
            profileService.verifyProfile(token)

            return "/templates/web/account-verified.ftl"
        } else {
            throw new HttpStatusCodeException(400, "Bad request: token param is missing")
        }

Add Login
=========

To add a login page:

#.  In Crafter Studio, create a Home > Login page.
#.  The page template should contain a form that POSTs to /crafter-security-login, sending the username, password and rememberMe
    parameters, like in the following snippet:

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

Add Logout
==========

To add logout, just add a link in the global header that points to /crafter-security-logout:

.. code-block:: html

    <a href="/crafter-security-logout">Log Out</a>

Add Facebook Login
==================

#.  Be sure there's a connections attribute of Complex type defined for the site's Crafter Profile Tenant. This attribute is needed to
    store the Facebook connection info. To add this attribute to the Tenant, go to Crafter Profile Admin Console, select the Tenant and
    then add the attribute.

    .. image:: /_static/images/connections_attribute.png

#.  Add the Facebook appSecret and appKey to your site's config (in Studio, Config > site.xml), like this:

    .. code-block:: xml
        :linenos:

        <socialConnections>
            <facebookConnectionFactory>
                <appId>000000000000000</appId>
                <appSecret>c852cb30cda311e488300800200c9a66</appSecret>
            </facebookConnectionFactory>
        </socialConnections>

#.  Add a JS method that is triggered when the user clicks on the "Login with Facebook" button, that displays the FB login popup when the
    user clicks on "Connect with Facebook":

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

#.  Add a controller script under Scripts > controllers > connect > facebook_dialog.get.groovy, that will redirect to the actual
    Facebook login when the popup appears. The whole FB login process can be done with the help of the ``providerLoginSupport``,
    provided automatically to all scripts. The ``start(tenant, providerId, request, additionalParams, connectSupport)`` method is used
    to create the proper Facebook redirect URL. Also, by creating a custom ``ConnectSupport`` with a callbackUrl you can tell Facebook
    the URL to redirect to after the user has logged in.
    ::

        import org.springframework.social.connect.web.ConnectSupport
        import org.springframework.util.LinkedMultiValueMap

        def connectSupport = new ConnectSupport()
            connectSupport.callbackUrl = urlTransformationService.transform("toFullUrl", "/connect/facebook")

        def additionalParams = new LinkedMultiValueMap<String, String>()
            additionalParams.add("scope", "email,public_profile")
            additionalParams.add("display", "popup")

        return "redirect:" + providerLoginSupport.start(siteContext.siteName, "facebook", request, additionalParams, connectSupport)

#.  Under Scripts > controllers > connect > facebook.get.groovy, add the script to complete the Facebook connection. By calling
    ``providerLoginSupport.complete(tenant, providerId, request)``, the login process will automatically be completed for you, and a
    new user will be created if there wasn't a previous one with the Facebook provided username or email.
    ::

        providerLoginSupport.complete(siteContext.siteName, "facebook", request)

        return "/templates/web/fb-login-done.ftl"

Add Single Sign-On
==================

Crafter Profile's Security Provider is able to integrate with SAML 2.0 providers and similar SSO solutions. Crafter Profile Security
Provider will look for configurable HTTP headers and will use those to authenticate the user. An example is Apache mod_auth_mellon
(https://github.com/UNINETT/mod_auth_mellon). By using mod_auth_mellon, the user can be authenticated against a SAML 2.0 IdP, and
headers with the user's information can be sent to the Security Provider enabled applications, like Crafter Engine and Crafter Social,
so that the user can be automatically signed in with Crafter Profile. The example steps below demonstrate the install of mod_auth_mellon
on Ubuntu and how to configure it so the correct headers are sent to the applications:

#.  Install Apache 2 (``apt-get install apache2 and apt-get install apache2-dev``).
#.  Install openssl (``apt-get install openssl``).
#.  Install liblasso3 and liblasso3-dev (``apt-get install liblasso3 and apt-get install liblasso3-dev``).
#.  Install libcurl4-openssl-dev (``apt-get install libcurl4-openssl-dev``).
#.  Download mod_auth_mellon from https://github.com/UNINETT/mod_auth_mellon/releases.
#.  Execute the following commands:

    .. code-block:: bash

        ./configure
        make
        sudo make install

#.  Add the ``LoadModule auth_mellon_module /usr/lib/apache2/modules/mod_auth_mellon.so`` entry to
    /etc/apache2/mods-available/auth_mellon.load.
#.  Enable mod_auth_mellon (``a2enmod auth_mellon``).
#.  Enable mod_headers (``a2enmod headers``).
#.  Enable mod_proxy_ajp (``a2enmod proxy_ajp``).
#.  Create the Service Provider metadata with the mellon_create_metadata.sh script in the directory where you unzipped the mod_auth_mellon
    code, passing  the Entity ID (a URN, can be the site URL) and the Endpoint URL (the URL root where mellon can handle SAML requests,
    by default {SITE_URL}/mellon), as parameters. Eg: ``./mellon_create_metadata.sh urn:craftercms:test http://127.0.0.1/mellon``.
#.  Copy the generated files to somewhere like /etc/apache2/saml/conf/sps/test.
#.  Copy the IDP metadata to somewhere like /etc/apache2/saml/conf/idps.
#.  Add the auth_mellon configuration to the virtual host. The configuration should be similar to this:

    .. code-block:: apacheconf
        :linenos:

        ProxyPass / ajp://localhost:8009/
        ProxyPassReverse / ajp://localhost:8009/

        # Mod Mellon Conf
        <Location />
            MellonEnable "auth"

            RequestHeader unset MELLON_username
            RequestHeader unset MELLON_email
            RequestHeader unset MELLON_firstName
            RequestHeader unset MELLON_lastName
            RequestHeader unset MELLON_displayName

            RequestHeader set MELLON_username "%{MELLON_uid}e" env=MELLON_uid
            RequestHeader set MELLON_email "%{MELLON_mail}e" env=MELLON_mail
            RequestHeader set MELLON_firstName "%{MELLON_givenName}e" env=MELLON_givenName
            RequestHeader set MELLON_lastName "%{MELLON_sn}e" env=MELLON_sn
            RequestHeader set MELLON_displayName "%{MELLON_cn}e" env=MELLON_cn

            MellonSPPrivateKeyFile  /etc/apache2/saml/conf/sps/urn_craftercms_test.key
            MellonSPCertFile        /etc/apache2/saml/conf/sps/urn_craftercms_test.cert
            MellonSPMetadataFile    /etc/apache2/saml/conf/sps/urn_craftercms_test.xml

            MellonIdPMetadataFile   /etc/apache2/saml/conf/idps/openidp_feide_no.xml
        </Location>

    *   The URL after ``Location`` will be the URL auth_mellon intercepts. MellonEnable "auth" enables auth_mellon at the location.
    *   The ``RequestHeader set`` entries create headers that are later sent to the Tomcat webapps with the user info. You need at least
        to specify the ``MELLON_username`` and ``MELLON_email`` headers, the other ones are optional and are directly mapped, without the
        ``MELLON_`` prefix, to the attributes you defined in the Crafter Profile tenant, when a new user needs to be created. So the
        configuration above will cause the Security Provider to create a user with firstName, lastName and displayName attributes. It's
        important to remember that the environment variables set by auth_mellon and used to create this headers depend in the IdP, so
        you'll need to check first what the IdP is sending before defining the headers.
    *   The ``RequestHeader unset`` will make sure someone is not trying to forge the headers to authenticate as a user.
    *   The last properties are the paths of each file generated by the mellon_create_metadata.sh script, and the IdP metadata file
        retrieved from the IdP.
#.  In Crafter Profile Admin Console, make sure that the Single sign-on enabled checkbox is selected in the tenant page.

    .. image:: /_static/images/sso_enabled.png

-----------------
Add Authorization
-----------------

Restrict Pages
==============

You can restrict pages based on whether a user is authenticated or has a certain role. To do this, you need to follow the next steps
to create in the page content type a Repeating Group with a text Input for the roles:

#.  In Studio, click on |siteConfig|.
#.  Click on **Content Types** then **Open Existing Type** and select the content type for the pages that you want to restrict.
#.  On Controls, select the Repeating Group and add it to any Form Section (you can even create an Authorization section just for these
    fields).
#.  In the Repeating Group properties, set the **Title** field to "Authorized Roles" and the **Name / Variable Name** field to "authorizedRoles."

    .. image:: /_static/images/site-admin/authorized_roles_properties.png
        :alt: Engine Site Security Guide - Authorized Roles Properties

#.  Add an Input control inside the Repeating Group, with the **Title** field set to "Role" and the **Name / Variable Name** field set to "role". Make this Input required by checking the checkbox under **Constraints** in the **Required** field in the **Properties Explorer**.

    .. image:: /_static/images/site-admin/role_properties.png
        :alt: Engine Site Security Guide - Role Properties

#.  Save the changes. The added fields should look like this:

    .. image:: /_static/images/site-admin/authorization_section.png
        :alt: Engine Site Security Guide - Authorization Section

With these changes, now you or any other content author can go to any page of this content type and add the roles that are required to
access the page. Two special roles which indicate authentication state can be used besides the roles that are included in user profiles:
``Anonymous`` and ``Authenticated``. The complete access check algorithm executed by Crafter Engine is described bellow:

#.  If the page doesn't contain any role, no authentication is needed.
#.  If the page has the role ``Anonymous``, no authentication is needed.
#.  If the page has the role ``Authenticated``, just authentication is needed.
#.  If the page has any other the roles, the user needs to be authenticated and have any of those roles.

Restrict URLs
=============

Sometimes it is not enough to restrict a single page. Sometimes you need to restrict an entire site subtree, or restrict several static
assets. For this, Crafter CMS provides configuration parameters that allow you to restrict access based on URL patterns. You just need
to add configuration similar to the following in Config > site.xml:

.. code-block:: xml
    :linenos:

    <security>
        <urlRestrictions>
            <restriction>
                <url>/user/*</url>
                <expression>hasAnyRole({'user', 'admin'})</expression>
            </restriction>
        </urlRestrictions>
    </security>

The ``<urlRestrictions>`` can contain any number of ``<restriction>`` elements. Each restriction is formed by an Ant-style path pattern
(``<url>``) and a Spring EL expression (``<expression>``) executed against the current profile. If a request matches the URL, and the
expression evaluates to false, access is denied. The following expressions can be used:

*   ``isAnonymous()``
*   ``isAuthenticated()``
*   ``hasRole('role'})``
*   ``hasAnyRole({'role1', 'role2'})``
*   ``permitAll()``
*   ``denyAll()``

-------------------------
Standalone Authentication
-------------------------

You can also integrate SAML 2.0 authentication without using Crafter Profile, in this case the requests will still use
the headers to obtain the user's information but it will not execute any additional authentication.

For setting up the standalone authentication you can follow the previous steps to configure ``mod_mellon`` to set
the needed headers and then enable it in your site configuration (in Studio, Config > site.xml) add or update the 
security elements as needed:

.. code-block:: xml
  :linenos:

  <security>
    <saml>
      <token>SOME_SECRET_TOKEN</token>
      <groups>
        <group>
          <name>GROUP_PAID</name>
          <role>paidUser</role>
        </group>
      </groups>
      <attributes>
        <attribute>
          <name>givenName</name>
          <field>firstName</field>
        </attribute>
      </attributes>
    </saml>
  ...
  </security>

**SAML Properties:**

* ``security.saml.token`` (required): The expected value for the ``secure_key`` request header, if the value does not 
  match the request will not be considered as authenticated even if all other headers are present.
* ``security.saml.groups`` (optional): List of mappings to apply when setting the roles of the user based on the
  request header, if there is no mapping for a group the value will be copied without any change.
* ``security.saml.attributes`` (optional): List of mappings to apply when setting the attributes of the user based on
  the request headers, the value of each header will be available as an attribute using the provided name.
