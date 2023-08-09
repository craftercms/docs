
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
