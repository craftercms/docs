:is-up-to-date: False

.. index:: Engine Site Security Guide

.. highlight:: groovy
   :linenothreshold: 5

.. _newIa-engine-site-security-guide:

==========================
Engine Site Security Guide
==========================

The following guide will help you configure Crafter Engine to:

#. Add authentication for your website.
#. Add authorization so that access to certain pages and URLs of your site are restricted.

Crafter Engine is able to integrate with multiple authentication providers:

#. **Using SAML2**

   To configure SAML 2.0, follow the instructions: :ref:`engine-saml2-configuration`

#. **Using Crafter Profile**

   To configure Crafter Profile, follow the instructions: :ref:`engine-crafter-profile-configuration`

------------------
Add Authentication
------------------

Add Login
=========

To add a login page:

#.  In Crafter Studio, create a Home > Login page.
#.  The page template should contain a form that POSTs to /crafter-security-login, sending the ``username``, 
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

Add Logout
==========

To add logout, just add a link in the global header that points to /crafter-security-logout:

.. code-block:: html
 :linenos:

 <a href="/crafter-security-logout">Log Out</a>

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

    |

       .. warning::
           The UI autofills the **Name/ Variable Name** field and adds postfixes as you're typing in the **Title** field.  Remember to remove the postfix ``_o``, as ``authorizedRoles`` is a reserved variable name used by Crafter CMS.  For a list of variable names used by Crafter CMS, see :ref:`form-control-variable-names` for more information

           The ``ROLE_`` prefix is optional for values in ``authorizedRoles``

#.  Add an Input control inside the Repeating Group, with the **Title** field set to "Role" and the **Name / Variable
    Name** field set to "role". Make this Input required by checking the checkbox under **Constraints** in the 
    **Required** field in the **Properties Explorer**.

    .. image:: /_static/images/site-admin/role_properties.png
        :alt: Engine Site Security Guide - Role Properties

    |

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

.. _newIa-engine-site-security-guide-restrict-urls:

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
   For the ``<url>`` Ant-style path pattern, ``<url>/*</url>`` indicates just one level of the URL and ``<url>/**</url>`` indicates all urls.  For more information on Ant-style path pattern matching, see https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html

  For the *hasAnyRole* expression, remember to escape the comma ``,`` separating the roles inside the expression as shown above.

.. _newIa-engine-security-access-attributes:

----------------------
Access User Attributes 
----------------------

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

Migrating from Crafter Profile
==============================

Prior to version ``3.1.5`` Crafter Profile was the only security provider available, all sites created in previous
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
