.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-profile-one_by_query:

====================
Get Profile By Query
====================

Returns the single profile that matches the specified query.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-profile/api/1/profile/one_by_query``                  |
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
+---------------------+---------+---------------+--------------------------------------------------+
|| query              || String     || |checkmark|  || The Mongo query used to search for the      |
||                    ||            ||              || profiles.                                   |
+---------------------+-------------+---------------+----------------------------------------------+
|| attributesToReturn || String     ||              || The name of the attributes to return        |
||                    ||            ||              || (don't specify to return all)               |
+---------------------+-------------+---------------+----------------------------------------------+

.. WARNING::
  The query must not contain the ``$where`` operator, the tenant's name (already specified) or any non-readable attribute by the application

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

  {
    "username": "john.doe",
    "email": "john.doe@example.com",
    "verified": false,
    "enabled": false,
    "createdOn": 1495748091232,
    "lastModified": 1495748091232,
    "tenant": "sample-tenant",
    "roles": [],
    "attributes": {},
    "id": "59274dfbd4c650e226b03b65"
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
