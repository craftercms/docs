.. .. include:: /includes/unicode-checkmark.rst

.. _profile-admin-profiles:

===================
Profiles Management
===================

Profiles hold data for each user of the site or application, each profile needs to be related to
a tenant because it will inherit the attribute definitions and available roles.

-------------
List & Search
-------------

You can list all existing profiles for a given tenant by clicking the ``List Profiles`` link in the
left sidebar.

.. figure:: /_static/images/profile-admin/profiles-list.png
  :align: center

Once the page is loaded you can select the desired tenant by using the dropdown below
the page title.

You can also search for a specific username by using the filter next to the tenant dropdown. The
filter can be removed using the ``Reset`` button.

From this page you can also delete profiles.

------------------
Create New Profile
------------------

To create a new profile you can click the ``New Profile`` link in the left sidebar.

.. figure:: /_static/images/profile-admin/profiles-new.png
  :align: center

^^^^^^
Fields
^^^^^^

+-----------------------+-------------+---------+------------------------------------------------+
| Field                 | Required    | Type    |  Description                                   |
+=======================+=============+=========+================================================+
| Username              | |checkmark| | String  || Unique username for the new profile           |
+-----------------------+-------------+---------+------------------------------------------------+
| Tenant                | |checkmark| | String  || Tenant to which the new profile will belong   |
+-----------------------+-------------+---------+------------------------------------------------+
| Email                 | |checkmark| | String  || Email for the new profile                     |
+-----------------------+-------------+---------+------------------------------------------------+
| Password              | |checkmark| | String  || Password for the new profile                  |
+-----------------------+-------------+---------+------------------------------------------------+
| Enabled               |             | Boolean || If set to `false` the authentication for the  |
|                       |             |         || new profile will always fail                  |
+-----------------------+-------------+---------+------------------------------------------------+
| Roles                 |             | List    || List of roles that will be assigned to the    |
|                       |             |         || new profile                                   |
+-----------------------+-------------+---------+------------------------------------------------+

^^^^^^^^^^^^^
Custom Fields
^^^^^^^^^^^^^

Crafter Profile Admin Console will display an additional field for each one of the attribute
definition in the selected tenant. The input will change depending on the attribute type.

.. NOTE::
  Custom Fields are always optional, if no default value is set in the tenant they will remain empty
  
  Some attribute types such as ``Complex`` can only be changed using the API, those fields will
  appear to be disabled in the Admin Console.

--------------
Update Profile
--------------

From the list page you can click the ID of a profile to open the update page:

.. figure:: /_static/images/profile-admin/profiles-update.png
  :align: center

When updating an existing profile the username and tenant are not editable.

^^^^^^^^^^^^^^^^^
Additional Fields
^^^^^^^^^^^^^^^^^

These fields are not shown in the new profile form because the values are always assigned
automatically by Crafter Profile.

+------------------+---------+-------------------------------------------------------------------+
| Field            | Type    |  Description                                                      |
+==================+=========+===================================================================+
| Verified         | Boolean || Indicates if the verification process has been completed by the  |
|                  |         || user                                                             |
+------------------+---------+-------------------------------------------------------------------+
| Created On       | Date    || Date when the profile was created                                |
+------------------+---------+-------------------------------------------------------------------+
| Last Modified On | Date    || Date when the profile was last updated                           |
+------------------+---------+-------------------------------------------------------------------+

