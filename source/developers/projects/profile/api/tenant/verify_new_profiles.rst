.. _crafter-profile-api-tenant-verifiy_new_profiles:

===================
Verify New Profiles
===================

Sets if new profiles for the specified tenant should be verified or not.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/tenant/:name/verify_new_profiles``                      |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+----------------+---------+--------------+------------------------------------------------------+
|| Name          || Type   || Required    || Description                                         |
+================+=========+==============+======================================================+
|| accessTokenId || String || |checkmark| || The access token ID of the application              |
||               ||        ||             || making the call                                     |
+----------------+---------+--------------+------------------------------------------------------+
|| name          || String || |checkmark| || The tenant's name                                   |
+----------------+---------+--------------+------------------------------------------------------+
|| verify        || String || |checkmark| || True to verify new profiles through email,          |
||               ||        ||             || false otherwise                                     |
+----------------+---------+--------------+------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/tenant/sample-tenant/verify_new_profiles

.. code-block:: none

  accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d
  verify=true


^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "name": "sample-tenant",
    "verifyNewProfiles": true,
    "availableRoles": [
      "APP_ADMIN",
      "APP_USER"
    ],
    "ssoEnabled": false,
    "attributeDefinitions": [
      {
        "permissions": [
          {
            "allowedActions": [
              "*"
            ],
            "application": "*"
          }
        ],
        "name": "firstName",
        "metadata": {
          "label": "First Name",
          "type": "TEXT",
          "displayOrder": 0.0
        },
        "defaultValue": null
      },
      {
        "permissions": [
          {
            "allowedActions": [
              "*"
            ],
            "application": "*"
          }
        ],
        "name": "lastName",
        "metadata": {
          "label": "Last Name",
          "type": "TEXT",
          "displayOrder": 1.0
        },
        "defaultValue": null
      },
      {
        "permissions": [
          {
            "allowedActions": [
              "*"
            ],
            "application": "*"
          }
        ],
        "name": "avatarLink",
        "metadata": {
          "label": "Avatar Link",
          "type": "TEXT",
          "displayOrder": 3.0
        },
        "defaultValue": null
      }
    ],
    "id": "5926f6d9d4c650e226b03b61"
  }

---------
Responses
---------

+---------+---------------------------------+----------------------------------------------------+
|| Status || Location                       || Response Body                                     |
+=========+=================================+====================================================+
|| 200    ||                                || See example above.                                |
+---------+---------------------------------+----------------------------------------------------+
|| 500    ||                                || ``{ "message" : "Internal server error" }``       |
+---------+---------------------------------+----------------------------------------------------+
