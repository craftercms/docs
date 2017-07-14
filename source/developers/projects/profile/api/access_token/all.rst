.. _crafter-profile-api-access_token-all:

======================
Get All  Access Tokens
======================

Get all existing access tokens.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-profile/api/1/access_token/all``                      |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+-----------------------------------------+
|| Name                   || Type       || Required     || Description                            |
+=========================+=============+===============+=========================================+
|| accessTokenId          || String     || |checkmark|  || The access token ID of the application |
||                        ||            ||              || making the call                        |
+-------------------------+-------------+---------------+-----------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/access_token/all?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  [
    {
      "application": "adminconsole",
      "master": true,
      "tenantPermissions": [
        {
          "allowedActions": [
            "*"
          ],
          "tenant": "*"
        }
      ],
      "expiresOn": 1704067200000,
      "id": "e8f5170c-877b-416f-b70f-4b09772f8e2d"
    },
    {
      "application": "crafterengine",
      "master": false,
      "tenantPermissions": [
        {
          "allowedActions": [
            "MANAGE_TICKETS",
            "READ_TENANT",
            "MANAGE_PROFILES"
          ],
          "tenant": "*"
        }
      ],
      "expiresOn": 1704067200000,
      "id": "b4d44030-d0af-11e3-9c1a-0800200c9a66"
    },
    {
      "application": "craftersocial",
      "master": false,
      "tenantPermissions": [
        {
          "allowedActions": [
            "MANAGE_TICKETS",
            "READ_TENANT",
            "MANAGE_PROFILES"
          ],
          "tenant": "*"
        }
      ],
      "expiresOn": 1704067200000,
      "id": "2ba3ac10-c43e-11e3-9c1a-0800200c9a66"
    }
  ]

---------
Responses
---------

+---------+---------------------------+----------------------------------------------------------+
|| Status || Location                 || Response Body                                           |
+=========+===========================+==========================================================+
|| 200    ||                          || See example above.                                      |
+---------+---------------------------+----------------------------------------------------------+
|| 403    ||                          | .. code-block:: json                                     |
||        ||                          |                                                          |
||        ||                          |  { "errorCode": "ACTION_DENIED", "message": "Current     |
||        ||                          |  subject doesnt have permission to execute global        |
||        ||                          |  action \"READ_TOKEN\"" }                                |
+---------+---------------------------+----------------------------------------------------------+
|| 500    ||                          || ``{ "message" : "Internal server error" }``             |
+---------+---------------------------+----------------------------------------------------------+
