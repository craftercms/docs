.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-access_token-create:

===================
Create Access Token
===================

Creates a new access token.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-profile/api/1/access_token/create``                   |
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

``POST .../api/1/access_token/create?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d``

.. code-block:: json

  {
    "application": "sample-app",
    "master": false,
    "tenantPermissions": [
      {
        "allowedActions": [
          "MANAGE_TICKETS",
          "READ_TENANT",
          "MANAGE_PROFILES"
        ],
        "tenant": "sample-tenant"
      }
    ],
    "expiresOn": 1704067200000
  }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "application": "sample-app",
    "master": false,
    "tenantPermissions": [
      {
        "allowedActions": [
          "MANAGE_TICKETS",
          "READ_TENANT",
          "MANAGE_PROFILES"
        ],
        "tenant": "sample-tenant"
      }
    ],
    "expiresOn": 1704067200000,
    "id": "a3f1a69c-3a7d-4b28-a944-61a7dc6877b8"
  }

---------
Responses
---------

+---------+----------------------------+---------------------------------------------------------+
|| Status || Location                  || Response Body                                          |
+=========+============================+=========================================================+
|| 200    | ``.../access_token/create``| See example above.                                      |
+---------+----------------------------+---------------------------------------------------------+
|| 403    |                            | .. code-block:: json                                    |
||        |                            |                                                         |
||        |                            |   {"errorCode":"ACTION_DENIED", "message":"Current      |
||        |                            |   subject doesnt have permission to execute global      |
||        |                            |   action \"CREATE_TOKEN\""}                             |
+---------+----------------------------+---------------------------------------------------------+
|| 500    |                            | ``{ "message" : "Internal server error" }``             |
+---------+----------------------------+---------------------------------------------------------+
