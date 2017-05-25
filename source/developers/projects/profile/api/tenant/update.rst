.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-tenant-update:

=============
Update Tenant
=============

Updates the given tenant.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/crafter-profile/api/1/tenant/update``                   |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+-----------------------------------------+
|| Name                   || Type       || Required     || Description                            |
+=========================+=============+===============+=========================================+
|| accessTokenId          || String     || |checkmark|  || The ID of the application access token |
+-------------------------+-------------+---------------+-----------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST .../api/1/tenant/update?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d``

.. code-block:: json

  {
      "name" : "sample-tenant",
      "verifyNewProfiles" : true,
  		"ssoEnabled": true,
      "availableRoles" : [ 
  			"APP_ADMIN",
  			"APP_USER"
      ],
      "attributeDefinitions" : [ 
          {
              "name" : "firstName",
              "metadata" : {
                  "label" : "First Name",
                  "type" : "TEXT",
                  "displayOrder" : 0.0
              },
              "permissions" : [ 
                  {
                      "application" : "*",
                      "allowedActions" : [ 
                          "*"
                      ]
                  }
              ]
          }, 
          {
              "name" : "lastName",
              "metadata" : {
                  "label" : "Last Name",
                  "type" : "TEXT",
                  "displayOrder" : 1.0
              },
              "permissions" : [ 
                  {
                      "application" : "*",
                      "allowedActions" : [ 
                          "*"
                      ]
                  }
              ]
          }, 
          {
              "name" : "avatarLink",
              "metadata" : {
                  "label" : "Avatar Link",
                  "type" : "TEXT",
                  "displayOrder" : 3.0
              },
              "permissions" : [ 
                  {
                      "application" : "*",
                      "allowedActions" : [ 
                          "*"
                      ]
                  }
              ]
          }
      ]
  }

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
    "ssoEnabled": true,
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
    "id": "5926f218d4c6ad51e5e44f47"
  }

---------
Responses
---------

+---------+--------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|| Status || Location                      || Response Body                                                                                                                                                     |
+=========+================================+====================================================================================================================================================================+
|| 200    || ``.../tenant/update``         || See example above.                                                                                                                                                |
+---------+--------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|| 400    ||                               || ``{ "errorCode": "NO_SUCH_TENANT", "message": "No tenant with name \"sample-tenant\" found" }``                                                                            |
+---------+--------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``                                                                                                                       |
+---------+--------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
