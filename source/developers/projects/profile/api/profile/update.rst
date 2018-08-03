.. _crafter-profile-api-profile-update:

==============
Update Profile
==============

Updates the profile's info.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/:id/update``                                    |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------------+---------+---------------+---------------------------------------------------+
|| Name               || Type   || Required     || Description                                      |
+=====================+=========+===============+===================================================+
|| accessTokenId      || String || |checkmark|  || The access token ID of the application           |
||                    ||        ||              || making the call                                  |
+---------------------+---------+---------------+---------------------------------------------------+
|| id                 || String || |checkmark|  || The profile's ID                                 |
+---------------------+---------+---------------+---------------------------------------------------+
|| username           || String || |checkmark|  || The new username for the profile                 |
+---------------------+---------+---------------+---------------------------------------------------+
|| password           || String ||              || The new password for the profile                 |
+---------------------+---------+---------------+---------------------------------------------------+
|| email              || String || |checkmark|  || The new email for the profile                    |
+---------------------+---------+---------------+---------------------------------------------------+
|| enabled            || String || |checkmark|  || If the profile should be enabled or not          |
+---------------------+---------+---------------+---------------------------------------------------+
|| role               || String ||              || The new roles for the profile                    |
+---------------------+---------+---------------+---------------------------------------------------+
|| attributes         || String ||              || The attributes to update (specify a JSON string) |
+---------------------+---------+---------------+---------------------------------------------------+
|| attributesToReturn || String ||              || The name of the attributes to return             |
||                    ||        ||              || (don't specify to return all)                    |
+---------------------+---------+---------------+---------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/profile/592887d7d4c650213cc2f400/update

.. code-block:: none

  accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d
  username=john.doe
  password=passw0rd
  email=john.doe@example.com
  enabled=false
  role=APP_TEST,APP_REPORT

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
    "enabled": false,
    "createdOn": 1495828439317,
    "lastModified": 1495828570508,
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

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
