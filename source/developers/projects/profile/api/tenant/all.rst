.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-tenant-all:

===============
Get All Tenants
===============

Returns a list with all the tenants.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-profile/api/1/tenant/all``                            |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+------------------------+-------------+---------------+-----------------------------------------+
|| Name                  || Type       || Required     || Description                            |
+========================+=============+===============+=========================================+
|| accessTokenId         || String     || |checkmark|  || The access token ID of the application |
||                       ||            ||              || making the call                        |
+------------------------+-------------+---------------+-----------------------------------------+
|| name                  || String     || |checkmark|  || The tenant's name                      |
+------------------------+-------------+---------------+-----------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/tenant/all?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  [
    {
      "name": "default",
      "verifyNewProfiles": false,
      "availableRoles": [
        "SOCIAL_SUPERADMIN",
        "PROFILE_ADMIN",
        "PROFILE_SUPERADMIN",
        "PROFILE_TENANT_ADMIN"
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
          "name": "displayName",
          "metadata": {
            "label": "Display Name",
            "type": "TEXT",
            "displayOrder": 2.0
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
          "name": "socialContexts",
          "metadata": {
            "label": "Social Contexts",
            "type": "COMPLEX",
            "displayOrder": 4.0
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
          "name": "connections",
          "metadata": {
            "label": "Connections",
            "type": "COMPLEX",
            "displayOrder": 5.0
          },
          "defaultValue": null
        }
      ],
      "id": "5926f6c524d9aaad9804a401"
    },
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
  ]

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
