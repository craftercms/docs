.. .. include:: /includes/unicode-checkmark.rst

.. _profile-admin-access-tokens:

========================
Access Tokens Management
========================

All applications need an Access Token in order to make requests for the :ref:`crafter-profile-api`,
by default three tokens will be created:

+----------------+-----------------------------------------------------------------------------+
| Application    | Description                                                                 |
+================+=============================================================================+
| adminconsole   || Used by the Admin Console web application for all operations on tenants    |
|                || and profiles.                                                              |
+----------------+-----------------------------------------------------------------------------+
| crafterengine  || Used by Crafter Engine for authenticating and getting profiles.            |
+----------------+-----------------------------------------------------------------------------+
| craftersocial  || Used by Crafter Social for getting profiles.                               |
+----------------+-----------------------------------------------------------------------------+

--------
List All
--------

To view all existing Access Tokens you can click the ``List Access Tokens`` link in the left sidebar.

.. figure:: /_static/images/profile-admin/access-tokens-list.png
  :align: center

From this page you can view the general information about the tokens and delete them if needed.

.. WARNING::
  When you delete an Access Token all applications that are configured to use it will be unable to
  access the API immediately.

------------
View Details
------------

From the List Access Tokens page you can click the ID of an existing record to display the details:

.. figure:: /_static/images/profile-admin/access-tokens-view.png
  :align: center

.. NOTE::
  Access Tokens are immutable, if you need to change the permissions for an existing token you need
  to delete it and create a new one using the same value for the ID.

--------------------------
Create a New Access Ticket
--------------------------

To create a new Access Token you can click the ``New Access Token`` link in the left sidebar.

.. figure:: /_static/images/profile-admin/access-tokens-new.png

^^^^^^
Fields
^^^^^^
+--------------------+-------------+---------+---------------------------------------------------+
| Field              | Required    | Type    |  Description                                      |
+====================+=============+=========+===================================================+
| ID                 | |checkmark| | String  || This field needs to be unique, applications need |
|                    |             |         || to be configured to include it in the requests   |
+--------------------+-------------+---------+---------------------------------------------------+
| Application        | |checkmark| | String  || Arbitrary name used to describe the application  |
|                    |             |         || that will use this token                         |
+--------------------+-------------+---------+---------------------------------------------------+
| Master             |             | Boolean || If set to `true` the application using the token |
|                    |             |         || will be allowed to perform operations on other   |
|                    |             |         || Access Tokens                                    |
+--------------------+-------------+---------+---------------------------------------------------+
| Expires On         | |checkmark| | Date    || All request using a token after the `Expired On` |
|                    |             |         || date will fail                                   |
+--------------------+-------------+---------+---------------------------------------------------+
| Tenant Permissions |             | List    || List of tenants with allowed permissions for     |
|                    |             |         || each one                                         |
+--------------------+-------------+---------+---------------------------------------------------+

^^^^^^^^^^^^^^^^^^^^^^^^^^
Example Tenant Permissions
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: /_static/images/profile-admin/access-tokens-permissions.png
  :align: center

An application using an Access Token with these permissions will be able to:

  - Query data from both tenants ``site1`` and ``site2``
  - Update only tenant ``site2``
  - Query, create, update and delete profiles for both ``site1`` and ``site2``

