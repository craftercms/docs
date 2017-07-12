.. _crafter-profile-api-profile-by_ticket:

=====================
Get Profile By Ticket
=====================

Returns the profile for the specified ticket.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-profile/api/1/profile/by_ticket``                     |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------------+-------------+---------------+----------------------------------------------+
|| Name               || Type       || Required     || Description                                 |
+=====================+=============+===============+==============================================+
|| accessTokenId      || String     || |checkmark|  || The access token ID of the application      |
||                    ||            ||              || making the call                             |
+---------------------+-------------+---------------+----------------------------------------------+
|| ticketId           || String     || |checkmark|  || The ID ticket of the authenticated profile  |
+---------------------+-------------+---------------+----------------------------------------------+
|| attributesToReturn || String     ||              || The name of the attributes to return        |
||                    ||            ||              || (don't specify to return all)               |
+---------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  GET .../api/1/profile/one_by_query?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d&tenantName=sample-tenant&query=%7B%20%22username%22%3A%20%22john.doe%22%20%7D

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "username": "john.doe",
    "email": "john.doe@example.com",
    "verified": false,
    "enabled": true,
    "createdOn": 1495811673842,
    "lastModified": 1495816425048,
    "tenant": "sample-tenant",
    "roles": [
      "APP_TEST",
      "APP_REPORT"
    ],
    "attributes": {},
    "id": "59284659d4c650213cc2f3fc"
  }

---------
Responses
---------

+--------+--------------------------+------------------------------------------------------------+
|| Status|| Location                || Response Body                                             |
+========+==========================+============================================================+
|| 200   |                          | See example above.                                         |
+--------+--------------------------+------------------------------------------------------------+
|| 403   |                          | .. code-block:: json                                       |
||       |                          |                                                            |
||       |                          |   {"errorCode":"DISABLED_PROFILE", "message":"Profile      |
||       |                          |   \"59284659d4c650213cc2f3fc\" of tenant \"sample-tenant\" |
||       |                          |   is disabled"}                                            |
+--------+--------------------------+------------------------------------------------------------+
|| 500   |                          | ``{ "message" : "Internal server error" }``                |
+--------+--------------------------+------------------------------------------------------------+
