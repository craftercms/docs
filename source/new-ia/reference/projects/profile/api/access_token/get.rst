:is-up-to-date: True

.. _newIa-crafter-profile-api-access_token-get:

================
Get Access Token
================

Get the information for a specific access token.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/access_token/:id``                                      |
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

.. code-block:: none

  GET .../api/1/access_token/b4d44030-d0af-11e3-9c1a-0800200c9a66?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

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
  }

---------
Responses
---------

+---------+--------------------------+-----------------------------------------------------------+
|| Status || Location                || Response Body                                            |
+=========+==========================+===========================================================+
|| 200    |                          | See example above.                                        |
+---------+--------------------------+-----------------------------------------------------------+
|| 403    |                          | .. code-block:: json                                      |
||        |                          |                                                           |
||        |                          |   {"errorCode":"ACTION_DENIED", "message":"Current        |
||        |                          |   subject does not have permission to execute action      |
||        |                          |   \"READ_TOKEN\" on e8f5170c-877b-416f-b70f-4b09772f8e2d"}|
+---------+--------------------------+-----------------------------------------------------------+
|| 500    |                          | ``{ "message" : "Internal server error" }``               |
+---------+--------------------------+-----------------------------------------------------------+
