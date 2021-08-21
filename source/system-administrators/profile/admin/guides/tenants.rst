:is-up-to-date: True

.. _profile-admin-tenants:

==================
Tenants Management
==================

Tenants can be used to organize profiles separating them by company or department or site.  This
allows better control over data access by the applications.

After the installation there is only one tenant named ``default``, it will include the roles and
attributes used by the Crafter Profile Admin Console and Crafter Profile. You are free to change
it or create a new one to replace it.

--------
List All
--------

To view all existing tenants you can click the ``List Tenants`` link in the left sidebar.

.. figure:: /_static/images/profile-admin/tenants-list.png
  :align: center
  :alt: Crafter Profile admin tenants list

In this page you can see the names of the tenants and delete them if needed.

.. WARNING::
  When you delete a tenant, all profiles created under it will be also deleted and there is no
  way to recover the data.

-----------------
Create New Tenant
-----------------

You can create a new tenant by clicking the ``New Tenant`` link in the left sidebar.

.. figure:: /_static/images/profile-admin/tenants-new.png
  :align: center
  :alt: Crafter Profile admin new tenant

^^^^^^
Fields
^^^^^^

+-----------------------+-------------+---------+------------------------------------------------+
| Field                 | Required    | Type    |  Description                                   |
+=======================+=============+=========+================================================+
| Name                  | |checkmark| | String  || Unique name for the tenant                    |
+-----------------------+-------------+---------+------------------------------------------------+
| Verify Profiles       |             | Boolean || If set to ``true`` new profiles created for   |
|                       |             |         || this tenant will not be available until the   |
|                       |             |         || verification process is completed             |
+-----------------------+-------------+---------+------------------------------------------------+
| Enable Single Sign-On |             | Boolean || If set to ``true`` Crafter Profile will enable|
|                       |             |         || SSO security by looking for two properties in |
|                       |             |         || HTTP headers:                                 |
|                       |             |         ||    CRAFTER_username and CRAFTER_email         |
|                       |             |         || these names can be changed by changing Crafter|
|                       |             |         || Profile security provider configuration. SSO  |
|                       |             |         || is typically implemented using SAML2 and      |
|                       |             |         || Apache mod_auth_mellon.                       |
+-----------------------+-------------+---------+------------------------------------------------+
| Cleanse Attributes    |             | Boolean || If set to ``true``, escape HTML tags in       |
|                       |             |         || values for attributes of type ``TEXT``,       |
|                       |             |         || ``LARGE TEXT`` and ``STRING LIST``            |
+-----------------------+-------------+---------+------------------------------------------------+
| Available Roles       |             | List    || List of roles that profiles can have          |
+-----------------------+-------------+---------+------------------------------------------------+
| Attribute Definitions |             | List    || List of attributes that profiles can have     |
+-----------------------+-------------+---------+------------------------------------------------+

   .. note::
      For Crafter CMS versions prior to 3.1.14, the prefix for the headers is ``MELLON_`` instead of ``CRAFTER_`` and can't be changed via site configuration.

^^^^^^^^^^^^^^^^^^^^
Profile Verification
^^^^^^^^^^^^^^^^^^^^

If your site or application will be open to the general public, it is a good idea to avoid spam by
enabling the profile verification feature. When a tenant has this feature enabled and you
include the ``crafter.profile.management.profile.verificationUrl`` property in the configuration,
all new users will receive a verification email and the profile will be enabled only when the
process is completed.

.. figure:: /_static/images/profile-admin/verification-mail.png
  :align: center
  :alt: Crafter Profile admin verification mail

  Example verification mail using ``http://www.example.com`` as the `verificationUrl`

.. NOTE::
  You can change the email sender, subject and body template in the Crafter Profile configuration.

^^^^^
Roles
^^^^^

Roles are simple strings used to differentiate users for business logic.  In your site or
application you can check if a profile has certain roles to choose what content they can see
or change.

Crafter Profile Admin Console uses the following roles:

- PROFILE_SUPERADMIN
- PROFILE_TENANT_ADMIN
- PROFILE_ADMIN

If you are going to have multiple users using the Profile Admin Console you can change the roles to
make sure only the appropriate users are able to change sensitive content.

^^^^^^^^^^^^^^^^^^^^^
Attribute Definitions
^^^^^^^^^^^^^^^^^^^^^

A tenant can have any number of custom attributes according to the needs of each site or
application.  The attributes are used to store meta data used in the business logic.
When a new profile is created you can set a value for each one of the attributes defined in the
tenant.

.. figure:: /_static/images/profile-admin/tenants-update-attr.png
  :align: center
  :alt: Crafter Profile update tenants attributes

|

+-----------------------+-------------+---------+------------------------------------------------+
| Field                 | Required    | Type    |  Description                                   |
+=======================+=============+=========+================================================+
| Name                  | |checkmark| | String  || Unique name for the attribute                 |
+-----------------------+-------------+---------+------------------------------------------------+
| Label                 | |checkmark| | String  || Label shown in the Admin Console only         |
+-----------------------+-------------+---------+------------------------------------------------+
| Type                  | |checkmark| | String  || Type of value for the attribute               |
|                       |             |         || - Text                                        |
|                       |             |         || - Large Text                                  |
|                       |             |         || - Number                                      |
|                       |             |         || - Boolean                                     |
|                       |             |         || - String List                                 |
|                       |             |         || - Complex                                     |
+-----------------------+-------------+---------+------------------------------------------------+
| Default Value         |             |         || Initial value if none is provided, the type   |
|                       |             |         || will change depending on each attribute       |
+-----------------------+-------------+---------+------------------------------------------------+
| Display Order         | |checkmark| | Integer || Used by the Admin Console to sort the         |
|                       |             |         || attributes in the view/update form            |
+-----------------------+-------------+---------+------------------------------------------------+
| Attribute Permissions | |checkmark| | List    || List of applications with the permissions for |
|                       |             |         || each one                                      |
+-----------------------+-------------+---------+------------------------------------------------+

-------------
Update Tenant
-------------

From the list page you can click the name of a tenant to open the update page:

.. figure:: /_static/images/profile-admin/tenants-update.png
  :align: center
  :alt: Crafter Profile update tenants

|

All fields can be changed except for the name.

.. WARNING::
  Changes for the roles and attribute definitions will only affect new profiles, existing ones
  will not be updated automatically.
