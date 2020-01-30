:is-up-to-date: True

.. _crafter-profile-api-profile-create:

==============
Create Profile
==============

Creates a new profile for a specific tenant.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/create``                                        |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+------------------+---------+--------------+-----------------------------------------------------+
|| Name            || Type   || Required    || Description                                        |
+==================+=========+==============+=====================================================+
|| accessTokenId   || String || |checkmark| || The access token ID of the application             |
||                 ||        ||             || making the call                                    |
+------------------+---------+--------------+-----------------------------------------------------+
|| tenantName      || String || |checkmark| || The name of the tenant to add the profile to       |
+------------------+---------+--------------+-----------------------------------------------------+
|| username        || String || |checkmark| || The profile's username                             |
+------------------+---------+--------------+-----------------------------------------------------+
|| password        || String ||             || The profile's password                             |
+------------------+---------+--------------+-----------------------------------------------------+
|| email           || String || |checkmark| || The profile's email                                |
+------------------+---------+--------------+-----------------------------------------------------+
|| enabled         || String || |checkmark| || If the profile should be enabled or not            |
+------------------+---------+--------------+-----------------------------------------------------+
|| role            || String ||             || The profile's roles                                |
+------------------+---------+--------------+-----------------------------------------------------+
|| attributes      || String ||             || The additional attributes to add to the profile    |
||                 ||        ||             || (specify a JSON string)                            |
+------------------+---------+--------------+-----------------------------------------------------+
|| verificationUrl || String ||             || The URL (sans token) the user needs to go in case  |
||                 ||        ||             || it needs to verify the created profile             |
||                 ||        ||             || (verification depends on tenant)                   |
+------------------+---------+--------------+-----------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/profile/create

.. code-block:: none
  :linenos:

  accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d
  tenantName=sample-tenant
  username=john.doe
  password=passw0rd
  email=john.doe@example.com
  enabled=false
  attributes={"firstName":"John","lastName":"Doe"}
  verificationUrl

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
    "createdOn": 1495733716728,
    "lastModified": 1495733716728,
    "tenant": "sample-tenant",
    "roles": [],
    "attributes": {},
    "id": "592715d4d4c650e226b03b62"
  }

---------
Responses
---------

+---------+------------------------+-------------------------------------------------------------+
|| Status || Location              || Response Body                                              |
+=========+========================+=============================================================+
|| 200    ||                       |  See example above.                                         |
+---------+------------------------+-------------------------------------------------------------+
|| 400    ||                       |  .. code-block:: json                                       |
||        ||                       |                                                             |
||        ||                       |    {"errorCode":"PROFILE_EXISTS", "message":"A profile with |
||        ||                       |    name \"john.doe\" already exists"}                       |
+---------+------------------------+-------------------------------------------------------------+
|| 500    ||                       |  ``{ "message" : "Internal server error" }``                |
+---------+------------------------+-------------------------------------------------------------+
