:is-up-to-date: True

.. _crafter-profile-api-tenant-get:

==========
Get Tenant
==========

Returns a tenant.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/tenant/:name``                                          |
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

``GET .../api/1/tenant/sample-tenant?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d``

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
    "id": "5926ee77d4c6ad51e5e44f45"
  }

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
