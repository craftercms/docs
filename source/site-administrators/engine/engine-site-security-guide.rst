:is-up-to-date: True

.. index:: Engine Site Security Guide

.. highlight:: groovy
   :linenothreshold: 5

.. _engine-site-security-guide:

==========================
Engine Site Security Guide
==========================

The following guide will help you configure Crafter Engine to:

#. Add SAML 2.0 authentication for your website.
#. Add authorization so that access to certain pages and URLs of your site are restricted.

------------------
Add Authentication
------------------
There are a couple of ways to setup authentication:

#. **Using the Engine Site Configuration**

   To configure Engine SAML 2.0 in your site, follow the instructions::ref:`engine-saml2-configuration`

#. **Using Crafter Profile**

   To configure authentication via Crafter Profile, follow the instructions: :ref:`using-crafter-profile-site-security`

-----------------
Add Authorization
-----------------

Adding authorization allows restricted access to certain pages and URLs of your site depending on what is setup.

Restrict Pages
==============

You can restrict pages based on whether a user is authenticated or has a certain role. To do this, you need to follow 
the next steps to create in the page content type a Repeating Group with a text Input for the roles:

#.  In Studio, click on |siteConfig|.
#.  Click on **Content Types** then **Open Existing Type** and select the content type for the pages that you want to
    restrict.
#.  On Controls, select the Repeating Group and add it to any Form Section (you can even create an Authorization 
    section just for these fields).
#.  In the Repeating Group properties, set the **Title** field to "Authorized Roles" and the **Name / Variable Name** 
    field to "authorizedRoles."

    .. image:: /_static/images/site-admin/authorized_roles_properties.png
        :alt: Engine Site Security Guide - Authorized Roles Properties

    .. warning::
        The UI autofills the **Name/ Variable Name** field and adds postfixes as you're typing in the **Title** field.  Remember to remove the postfix ``_o``, as ``authorizedRoles`` is a reserved variable name used by Crafter CMS.  For a list of variable names used by Crafter CMS, see :ref:`form-control-variable-names` for more information

#.  Add an Input control inside the Repeating Group, with the **Title** field set to "Role" and the **Name / Variable
    Name** field set to "role". Make this Input required by checking the checkbox under **Constraints** in the 
    **Required** field in the **Properties Explorer**.

    .. image:: /_static/images/site-admin/role_properties.png
        :alt: Engine Site Security Guide - Role Properties

    .. warning::
        The UI autofills the **Name/ Variable Name** field and adds postfixes as you're typing in the **Title** field.  Remember to remove the postfix ``_o``, as the ``role`` variable name is used by Crafter CMS for enforcing access to a page.  For a list of variable names used by Crafter CMS, see :ref:`form-control-variable-names` for more information


#.  Save the changes. The added fields should look like this:

    .. image:: /_static/images/site-admin/authorization_section.png
        :alt: Engine Site Security Guide - Authorization Section

    |

With these changes, now you or any other content author can go to any page of this content type and add the roles that
are required to access the page. Two special roles which indicate authentication state can be used besides the roles
that are included in user profiles: ``Anonymous`` and ``Authenticated``. The complete access check algorithm executed 
by Crafter Engine is described below:

#.  If the page doesn't contain any role, no authentication is needed.
#.  If the page has the role ``Anonymous``, no authentication is needed.
#.  If the page has the role ``Authenticated``, just authentication is needed.
#.  If the page has any other roles, the user needs to be authenticated and have any of those roles.

Restrict URLs
=============

Sometimes it is not enough to restrict a single page. Sometimes you need to restrict an entire site subtree, or 
restrict several static assets. For this, Crafter CMS provides configuration parameters that allow you to restrict 
access based on URL patterns. You just need to add configuration similar to the following in Config > Engine Site Configuration:

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

The ``<urlRestrictions>`` can contain any number of ``<restriction>`` elements. Each restriction is formed by an 
Ant-style path pattern (``<url>``) and a Spring EL expression (``<expression>``) executed against the current profile.
If a request matches the URL, and the expression evaluates to false, access is denied. The following expressions can 
be used:

*   ``isAnonymous()``
*   ``isAuthenticated()``
*   ``hasRole('role'})``
*   ``hasAnyRole({'role1', 'role2'})``
*   ``permitAll()``
*   ``denyAll()``


.. _using-crafter-profile-site-security:

--------------------------------------
Enhanced Features with Crafter Profile
--------------------------------------

Your site can also integrate all authentication and authorization features previously described with Crafter Profile.

Crafter Engine needs access tokens to use Crafter Profile's API. Each site must have it's own access token. Follow the
next steps to create one:

#.  Login to Crafter Profile Admin Console as a ``PROFILE_SUPERADMIN`` (by default the admin user has this role).
#.  Click on New Access Token in the navigation. Enter your site's name on Application, leave the Master checkbox 
    unselected, pick a proper Expiration Date (10 years from the current date is ok) and on Tenant Permissions add 
    your tenant's name to the input and click on add. By default the admin console auto-selects the 3 actions 
    mentioned before. If you're using the same access token as another environment (e.g. you want to use the same 
    access token in dev and prod), copy the same access token ID from the other environment, and enter the same field 
    values for Application, Master and Expiration Date. Finally, click on Accept.

    .. image:: /_static/images/new_access_token.png

#.  Now that you have created the access token, you need to "tell" Engine to use it in your site. In Admin Console, 
    click on List Access Tokens in the navigation menu and copy the ID of the token you just created. Then, depending 
    on the mode Engine is running, add one of the following configurations (preview is ignored because normally 
    predefined Personas are used, so there's no need to access the Crafter Profile app).

    *   **Multi-tenant:** You need to add the access token ID to the Config > Engine Site Configuration in Studio, and deploy the file
        to Engine:

        .. code-block:: xml
          :linenos:

          <profile>
              <api>
                  <accessTokenId>6604d59a-fe1b-4cb3-a76f-bdb1eb61e8c2</accessTokenId>
              </api>
          </profile>

    *   **Single tenant:** In the Tomcat where Engine is installed, go to shared/classes/crafter/engine/extension and
        add the access token ID as the following property:

        .. code-block:: properties
          :linenos:

          crafter.profile.rest.client.accessToken.id=6604d59a-fe1b-4cb3-a76f-bdb1eb61e8c2

------------------
Add Authentication
------------------

Add Registration
================

Normally, to add registration or sign up you just need to:

#.  Create a page with an HTML form that captures the user information for registration:

    .. code-block:: html
      :linenos:

      <form action="/registration" method="post">
          Email: <input type="text" name="email"></input><br/>
          First Name: <input type="text" name="firstname"></input><br/>
          Last Name: <input type="text" name="lastname"></input><br/>
          Password: <input type="password" name="password"></input><br/>
          <button type="submit">Submit</button>
      </form>

#.  Create a controller script that receives the information and creates the respective profile. Assuming the 
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

#.  Create also a MailHelper.groovy file under Classes > groovy > utils, with the following code:
    
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

#.  Create the Freemarker template that will be used to send the verification emails to the users, under Templates > 
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

#.  Finally, add the controller that will perform the profile verification when the user clicks on the link included 
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

Add Login
=========

To add a login page:

#.  In Crafter Studio, create a Home > Login page.
#.  The page template should contain a form that POSTs to /crafter-security-login, sending the username, password and 
    rememberMe parameters, like in the following snippet:

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
  :linenos:

  <a href="/crafter-security-logout">Log Out</a>

Add Single Sign-On
==================

After configuring SSO headers, check in Crafter Profile Admin Console to make sure
that the Single sign-on enabled checkbox is selected in the tenant page.

.. image:: /_static/images/sso_enabled.png

All headers with the ``MELLON_`` prefix will be mapped, without the prefix, to the attributes you defined in the 
Crafter Profile tenant, when a new user needs to be created. So the configuration above will cause the Security 
Provider to create a user with firstName, lastName and displayName attributes.

Add Facebook Login
==================

#.  Be sure there's a connections attribute of Complex type defined for the site's Crafter Profile Tenant. This 
    attribute is needed to store the Facebook connection info. To add this attribute to the Tenant, go to Crafter 
    Profile Admin Console, select the Tenant and then add the attribute.

    .. image:: /_static/images/connections_attribute.png

#.  Add the Facebook appSecret and appKey to your site's config (in Studio, Config > Engine Site Configuration), like this:

    .. code-block:: xml
      :linenos:

      <socialConnections>
          <facebookConnectionFactory>
              <appId>000000000000000</appId>
              <appSecret>c852cb30cda311e488300800200c9a66</appSecret>
          </facebookConnectionFactory>
      </socialConnections>

#.  Add a JS method that is triggered when the user clicks on the "Login with Facebook" button, that displays the FB 
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

#.  Add a controller script under Scripts > controllers > connect > facebook_dialog.get.groovy, that will redirect to 
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

#.  Under Scripts > controllers > connect > facebook.get.groovy, add the script to complete the Facebook connection. 
    By calling ``providerLoginSupport.complete(tenant, providerId, request)``, the login process will automatically 
    be completed for you, and a new user will be created if there wasn't a previous one with the Facebook provided 
    username or email.
    
    .. code-block:: groovy
      :linenos:

      providerLoginSupport.complete(siteContext.siteName, "facebook", request)

      return "/templates/web/fb-login-done.ftl"
