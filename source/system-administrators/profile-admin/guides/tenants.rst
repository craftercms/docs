.. .. include:: /includes/unicode-checkmark.rst

.. _profile-admin-tenants:

==================
Tenants Management
==================

Tenants can be used to organize profiles separating them by company or department or site, this
allows a better control over data access by the applications.

After the installation there is only one tenant named ``default``, it will include the roles and
attributes used by the Crafter Profile Admin Console and Crafter Profile. You are free to change
it or create a new one to replace it.

--------
List All
--------

To view all existing tenants you can click the ``List Tenants`` link in the left sidebar.

.. figure:: /_static/images/profile-admin/tenants-list.png
  :align: center

In this page you can se the names of the tenants and delete them if needed.

.. WARNING::
  When you delete a tenant, all profiles created under it will be also deleted and there is no
  way to recover the data.

-----------------
Create New Tenant
-----------------

You can create a new tenant by clicking the ``New Tenant`` link in the left sidebar.

.. figure:: /_static/images/profile-admin/tenants-new.png
  :align: center

^^^^^^
Fields
^^^^^^

+-----------------------+-------------+---------+------------------------------------------------+
| Field                 | Required    | Type    |  Description                                   |
+=======================+=============+=========+================================================+
| Name                  | |checkmark| | String  || Unique name for the tenant                    |
+-----------------------+-------------+---------+------------------------------------------------+
| Verify Profiles       |             | Boolean || If set to `true` new profiles created for     |
|                       |             |         || this tenant will not be available until the   |
|                       |             |         || verification process is completed             |
+-----------------------+-------------+---------+------------------------------------------------+
| Enable Single Sign-On |             | Boolean || If set to `true` Crafter Profile will enable  |
|                       |             |         || authentication using Apache                   |
|                       |             |         || mod_auth_mellon                               |
+-----------------------+-------------+---------+------------------------------------------------+
| Available Roles       |             | List    || List of roles that profiles can have          |
+-----------------------+-------------+---------+------------------------------------------------+
| Attribute Definitions |             | List    || List of attributes that profiles can have     |
+-----------------------+-------------+---------+------------------------------------------------+

^^^^^
Roles
^^^^^

Roles are simple strings used to differentiate users for business logic, in your site or
application you can check if a profile has certain roles to choose what content they can see
or change.

Crafter Profile Admin Console uses the following roles:

- PROFILE_SUPERADMIN
- PROFILE_TENANT_ADMIN
- PROFILE_ADMIN

If you are going to have multiple users using the Admin Console you can change the roles to
make sure only the appropiate users are able to change sensitive content.

^^^^^^^^^^^^^^^^^^^^^
Attribute Definitions
^^^^^^^^^^^^^^^^^^^^^

A tenant can have any number of custom attributes according to the needs of each site or
application, the attributes are used to store meta data used in the business logic.
When a new profile is created you can set a value for each one of the attributes defined in the
tenant.

.. figure:: /_static/images/profile-admin/tenants-update-attr.png
  :align: center

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
|                       |             |         || will change depeding on each attribute        |
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

All fields can be changed except for the name.

.. WARNING::
  Changes for the roles and attribute definitions will only affect new profiles, existing ones
  will not be updated automatically.
