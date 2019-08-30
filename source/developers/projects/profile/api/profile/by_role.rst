:is-up-to-date: True

.. _crafter-profile-api-profile-by_role:

====================
Get Profiles By Role
====================

Returns a list of profiles for a specific role and tenant.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/by_role``                                       |
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
|| tenantName         || String     || |checkmark|  || The tenant's name                           |
+---------------------+-------------+---------------+----------------------------------------------+
|| role               || String     || |checkmark|  || The role's name                             |
+---------------------+-------------+---------------+----------------------------------------------+
|| sortBy             || String     ||              || Profile attribute to sort the list by       |
+---------------------+-------------+---------------+----------------------------------------------+
|| sortOrder          || String     ||              || The sort order (either ASC or DESC)         |
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

  GET .../api/1/profile/by_role?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d&tenantName=sample-tenant&role=APP_TEST

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  [
    {
      "username": "john.doe",
      "email": "john.doe@example.com",
      "verified": false,
      "enabled": false,
      "createdOn": 1495811673842,
      "lastModified": 1495812397986,
      "tenant": "sample-tenant",
      "roles": [
        "APP_TEST",
        "APP_REPORT"
      ],
      "attributes": {},
      "id": "59284659d4c650213cc2f3fc"
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
