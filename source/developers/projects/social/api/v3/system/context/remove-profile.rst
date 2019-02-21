.. _crafter-social-api-context-remove-profile:

==================================
Remove Profile from Social Context
==================================

Updates the ``socialContext`` attribute in the given profile to remove the Social Context ID.

--------------------
Resource Information
--------------------

.. include:: /includes/social-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/3/system/context/:id/:profileId/delete``                  |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------------+-------------+---------------+--------------------------------------------+
|| Name               || Type       || Required     || Description                               |
+=====================+=============+===============+============================================+
|| context            || String     || |checkmark|  || The ID of the Social Context              |
+---------------------+-------------+---------------+--------------------------------------------+
|| id                 || String     || |checkmark|  || The ID of the Social Context to remove    |
+---------------------+-------------+---------------+--------------------------------------------+
|| profileId          || String     || |checkmark|  || The ID of the profile to update           |
+---------------------+-------------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/3/system/context/e41e7273-b504-4d50-9edd-3b215eff6464/596683c030047dc279c21d27/delete

.. code-block:: guess

  context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9

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
    "createdOn": "2017-07-12T14:17Z",
    "lastModified": "2017-07-12T14:43Z",
    "tenant": "sample-tenant",
    "roles": [],
    "attributes": {
      "firstName": "John",
      "lastName": "Doe",
      "socialContexts": []
    },
    "id": "596683c030047dc279c21d27"
  }

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 401    ||                               || ``{ "message" : "User must be logged in" }``       |
+---------+--------------------------------+-----------------------------------------------------+
|| 403    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "Current subject does not have      |
||        ||                               |   permission to execute global action ..." }        |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
