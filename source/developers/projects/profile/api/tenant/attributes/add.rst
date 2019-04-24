:is-up-to-date: True

.. _crafter-profile-api-tenant-attributes-add:

==============
Add Attributes
==============

Adds the given attribute definitions to the specified tenant.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+-------------------------+----------------------------------------------------------------------+
|| HTTP Verb              || POST                                                                |
+-------------------------+----------------------------------------------------------------------+
|| URL                    || ``/api/1/tenant/:name/attribute_definitions/add``                   |
+-------------------------+----------------------------------------------------------------------+
|| Response Formats       || ``JSON``                                                            |
+-------------------------+----------------------------------------------------------------------+

----------
Parameters
----------

+---------------------+-------------+---------------+--------------------------------------------+
|| Name               || Type       || Required     || Description                               |
+=====================+=============+===============+============================================+
|| accessTokenId      || String     || |checkmark|  || The access token ID of the application    |
||                    ||            ||              || making the call                           |
+---------------------+-------------+---------------+--------------------------------------------+
|| name               || String     || |checkmark|  || The tenant's name                         |
+---------------------+-------------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/tenant/sample-tenant/attribute_definitions/add?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d

.. code-block:: json
  :linenos:

  [
    {
      "permissions": [
        {
          "allowedActions": [
            "*"
          ],
          "application": "*"
        }
      ],
      "name": "nickname",
      "metadata": {
        "label": "Nickname",
        "type": "TEXT",
        "displayOrder": 1.0
      },
      "defaultValue": null
    }
  ]

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "name": "sample-tenant",
    "verifyNewProfiles": false,
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
          "displayOrder": 0
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
          "displayOrder": 1
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
          "displayOrder": 3
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
        "name": "nickname",
        "metadata": {
          "label": "Nickname",
          "type": "TEXT",
          "displayOrder": 1.0
        },
        "defaultValue": null
      }
    ],
    "id": "59284656d4c650213cc2f3fb"
  }

---------
Responses
---------

+--------+----------------------------------------------+----------------------------------------+
|| Status|| Location                                    || Response Body                         |
+========+==============================================+========================================+
|| 200   |                                              | See example above.                     |
+--------+----------------------------------------------+----------------------------------------+
|| 400   |                                              | .. code-block:: json                   |
||       |                                              |                                        |
||       |                                              |   {"errorCode":"NO_SUCH_TENANT",       |
||       |                                              |   "message": "No tenant with name      |
||       |                                              |   \"test\" found"}                     |
+--------+----------------------------------------------+----------------------------------------+
|| 500   |                                              | ``{"message":"Internal server error"}``|
+--------+----------------------------------------------+----------------------------------------+
