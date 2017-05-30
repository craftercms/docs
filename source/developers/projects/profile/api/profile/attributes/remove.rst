.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-profile-attributes-remove:

=================
Remove Attributes
=================

Removes a list of attributes of a profile.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-profile/api/1/profile/:id/attributes/remove``         |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------+-------------+---------------+----------------------------------------------+
|| Name             || Type       || Required     || Description                                 |
+===================+=============+===============+==============================================+
|| accessTokenId    || String     || |checkmark|  || The ID of the application access token      |
+-------------------+-------------+---------------+----------------------------------------------+
|| id               || String     || |checkmark|  || The profile's ID                            |
+-------------------+-------------+---------------+----------------------------------------------+
|| attributeName    || String     || |checkmark|  || The name of the attributes to remove        |
+-------------------+-------------+---------------+----------------------------------------------+
|| attributeToReturn|| String     ||              || The name of the attributes to return        |
||                  ||            ||              || (don't specify to return all)               |
+-------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/profile/592887d7d4c650213cc2f400/attributes/remove?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d&attributeName=avatarLink

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
    "createdOn": 1495828439317,
    "lastModified": 1495829514251,
    "tenant": "sample-tenant",
    "roles": [
      "APP_TEST",
      "APP_REPORT"
    ],
    "attributes": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "id": "592887d7d4c650213cc2f400"
  }

---------
Responses
---------

+---------+----------------------------------------+---------------------------------------------+
|| Status || Location                              || Response Body                              |
+=========+========================================+=============================================+
|| 200    || ``.../profile/:id/attributes/remove`` || See example above.                         |
+---------+----------------------------------------+---------------------------------------------+
|| 500    ||                                       || ``{ "message" : "Internal server error" }``|
+---------+----------------------------------------+---------------------------------------------+
