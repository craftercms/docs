.. _crafter-profile-api-profile-by_existing_attribute:

===============================
Get Profiles By Attribute Value
===============================

Returns the list of profiles that have the given attribute with the given value.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/by_existing_attribute``                         |
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
|| attributeName      || String     || |checkmark|  || The name of the attribute the profiles      |
||                    ||            ||              || must have                                   |
+---------------------+-------------+---------------+----------------------------------------------+
|| attributeName      || String     || |checkmark|  || The value of the attribute the profiles     |
||                    ||            ||              || must have                                   |
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

  GET .../api/1/profile/by_existing_attribute?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d&tenantName=sample-tenant&attributeName=lastName&attributeValue=Doe

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
  ]

---------
Responses
---------

+---------+----------------------------------------+---------------------------------------------+
|| Status || Location                              || Response Body                              |
+=========+========================================+=============================================+
|| 200    ||                                       || See example above.                         |
+---------+----------------------------------------+---------------------------------------------+
|| 500    ||                                       || ``{ "message" : "Internal server error" }``|
+---------+----------------------------------------+---------------------------------------------+
