:is-up-to-date: False
:last-updated: 4.1.0

.. _project-security:

===========================
Project Security (Delivery)
===========================
.. contents::

Securing CrafterCMS projects/site is a very important aspect of the platform. CrafterCMS provides a number of security features that can be used to secure a project/site. This section will cover the following topics:

- Authentication Mechanics
- Authorization Mechanics
- Securing an Entire Project
- Securing Sections or Individual Content Items

.. - Securing Some Static Assets

------------------------
Authentication Mechanics
------------------------
CrafterCMS supports a number of authentication mechanisms. The following are supported out of the box:

- SAML2 |enterpriseOnly|
- Headers-based Authentication |enterpriseOnly|

-----------------------
Authorization Mechanics
-----------------------
Authorization is handled by the project/site's configuration and implementation. CrafterCMS provides a number of features that can be used to implement authorization.

^^^^^^^^^^^^^^^^^^^^^^^^
Role-based Authorization
^^^^^^^^^^^^^^^^^^^^^^^^
Role-based authorization is the most common authorization mechanism used in CrafterCMS. Roles can be attached to content items, or entire sections, and users will only be able to see these items or section if they're in a group that has that role.

.. note::
    Users that arrive a at URL for which they do not have access will receive an HTTP 404 error, which is handled by Crafter Engine. If a custom 404 page is configured, the user will be redirected to that page. If no custom 404 page is configured, the user will see the default 404 page.

^^^^^^^^^^^^^^^^^^^^^^^^
Update the Content Model
^^^^^^^^^^^^^^^^^^^^^^^^
To attach roles to items, add the ``authorizedRoles`` model to the item's content type definition. Learn more about content modeling in :ref:`content-modeling`.

Begin by editing the content type definition of the content item, and from the Controls list on the right, select ``Repeating Group`` and add it to the ``Metadata`` Form Section.
In the ``Repeating Group`` properties, set the Title field to “Authorized Roles” and the Name/Variable Name field to “authorizedRoles.”

.. image:: /_static/images/site-admin/authorized_roles_properties.webp
   :alt: Engine Site Security Guide - Authorized Roles Properties

|

   .. warning::
      The UI autofills the **Name/Variable Name** field and adds postfixes as you're typing in the **Title** field.  Remember to remove the postfix ``_o``, as ``authorizedRoles`` is a reserved variable name used by CrafterCMS.  For a list of variable names used by CrafterCMS, see :ref:`form-control-variable-names` for more information

      The ``ROLE_`` prefix is optional for values in ``authorizedRoles``

Add an Input control inside the Repeating Group, with the **Title** field set to "Role" and the **Name/Variable
Name** field set to "role". Make this Input required by checking the checkbox under **Constraints** in the
**Required** field in the **Properties Explorer**.

.. image:: /_static/images/site-admin/role_properties.webp
   :alt: Engine Site Security Guide - Role Properties

|

    .. warning::
       The UI autofills the **Name/Variable Name** field and adds postfixes as you're typing in the **Title** field.  Remember to remove the postfix ``_s``, as the ``role`` variable name is used by CrafterCMS for enforcing access to a page.  For a list of variable names used by CrafterCMS, see :ref:`form-control-variable-names` for more information

""""""""""""""""""""""""""
Update the Content Item(s)
""""""""""""""""""""""""""
Adding the ``authorizedRoles`` model to the content type definition will not automatically update the content items. Those content instances must be updated manually, or by script to add the ``authorizedRoles`` model to the content item and specify the actual roles that are allowed to access the content item. For new content items, the ``authorizedRoles`` model will be available for content authors to populate.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Role-based Authorization for Sections
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Role-based authorization can also be applied to entire sections. This is done by adding the ``authorizedRoles`` model to the ``crafter-level-descriptor.level.xml`` file in the section's folder. This will limit access to the entire section to only users that are in the specified roles. Learn more about content inheritance in :ref:`content-inheritance`.
Bear in mind that the ``crafter-level-descriptor.level.xml`` file is not created by default. It must be created manually. Also, individual content items can override the ``authorizedRoles`` model specified in the ``crafter-level-descriptor.level.xml`` file.

---------------------------
Securing the Entire Project
---------------------------
The easiest way to secure a project is by wrapping the entire delivery tier with an authentication layer that blocks access to _all_ content unless the user is authenticated.

.. TODO:
- SAML in Engine
- CDN based security with SAML/etc + headers to Engine

---------------------------------------------
Securing Sections or Individual Content Items
---------------------------------------------

.. TODO: Link to :ref:`saml2-multi-environment-support` for SAML2 configuration


.. TODO Do we need to discuss Signed URLs here?

.. TODO is this section needed?
    ----------------------
    Securing Static Assets
    ----------------------
