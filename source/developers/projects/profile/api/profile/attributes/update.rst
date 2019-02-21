.. _crafter-profile-api-profile-attributes-update:

=================
Update Attributes
=================

Updates the attributes of a profile.

.. NOTE::
  The specified attributes will be merged with existing attributes.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/:id/attributes/update``                         |
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
|| id                 || String     || |checkmark|  || The profile's ID                            |
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

  POST .../api/1/profile/592715d4d4c650e226b03b62/roles/add?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d&role=APP_TEST,APP_REPORT

.. code-block:: json

  {
    "avatarLink": "/static-assets/images/avatar.png"
  }

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
    "lastModified": 1495829274842,
    "tenant": "sample-tenant",
    "roles": [
      "APP_TEST",
      "APP_REPORT"
    ],
    "attributes": {
      "firstName": "John",
      "lastName": "Doe",
      "avatarLink": "/static-assets/images/avatar.png"
    },
    "id": "592887d7d4c650213cc2f400"
  }

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
