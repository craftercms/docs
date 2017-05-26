
.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-tenant-attributes-remove:

=================
Remove Attributes
=================

Removes the given attribute definitions from the specified tenant.

--------------------
Resource Information
--------------------

+----------------------------+----------------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                                      |
+----------------------------+----------------------------------------------------------------------------+
|| URL                       || ``/api/1/crafter-profile/api/1/tenant/:name/attribute_definitions/remove``|
+----------------------------+----------------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                                  |
+----------------------------+----------------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+-----------------------------------------------------------------+
|| Name                   || Type       || Required     || Description                                                    |
+=========================+=============+===============+=================================================================+
|| accessTokenId          || String     || |checkmark|  || The ID of the application access token                         |
+-------------------------+-------------+---------------+-----------------------------------------------------------------+
|| name                   || String     || |checkmark|  || The tenant's name                                              |
+-------------------------+-------------+---------------+-----------------------------------------------------------------+
|| attributeName          || String     || |checkmark|  || The name of the attributes whose definitions should be removed |
+-------------------------+-------------+---------------+-----------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST ...crafter-profile/api/1/tenant/sample-tenant/attribute_definitions/remove?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d&attributeName=nickname

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

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

+---------+----------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|| Status || Location                                          || Response Body                                                                                                                                                     |
+=========+====================================================+====================================================================================================================================================================+
|| 200    || ``.../tenant/:name/attribute_definitions/remove`` || See example above.                                                                                                                                                |
+---------+----------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|| 400    ||                                                   || ``{ "errorCode": "NO_SUCH_TENANT", "message": "No tenant with name \"test\" found" }``                                                                            |
+---------+----------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|| 500    ||                                                   || ``{ "message" : "Internal server error" }``                                                                                                                       |
+---------+----------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
