:is-up-to-date: False


.. _configuring-engine-security:

===========================
Configuring Engine Security
===========================

-------------------------------------------------------
Configure Headers Based Authentication |enterpriseOnly|
-------------------------------------------------------
.. TODO Fix below to map to Engine not Studio

Crafter Studio is able to integrate with any authentication system that sends custom HTTP headers containing information that will be used to authenticate the user in Studio.  This section details how to setup Studio for headers based authentication.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Studio for Headers Based Authentication
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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


""""""""""""""""""
Configuring Logout
""""""""""""""""""

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


.. _setup-cloudfront-signed-cookies-in-crafter:

------------------------------------------------------
Setup CloudFront Signed Cookies in CrafterCMS Delivery
------------------------------------------------------

One way to provide access to restricted content through AWS CloudFront is to use signed cookies.
This section details how to setup CloudFront signed cookies for CrafterCMS with SSO.

From the  `AWS documentation <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html>`__

   .. code-block:: text

      CloudFront signed cookies allow you to control who can access your content when you don't want to change your current URLs or when you want to provide access to multiple restricted files, for example, all of the files in the subscribers' area of a website.

   |

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
