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

-------------------------------------------------------
Configure Headers Based Authentication |enterpriseOnly|
-------------------------------------------------------
Crafter Engine is able to authenticate users via headers. For more information on how to setup Engine
for headers based authentication see :ref:`engine-headers-authentication`

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

.. Start content from /includes/engine-project-security-guide
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
