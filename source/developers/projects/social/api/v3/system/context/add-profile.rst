:is-up-to-date: True

.. _crafter-social-api-context-add-profile:

=============================
Add Profile To Social Context
=============================

Updates the ``socialContext`` attribute in the given profile to include the Social Context ID and
the list of roles assigned for that context.

--------------------
Resource Information
--------------------

.. include:: /includes/social-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/3/system/context/:id/:profileId``                         |
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
|| id                 || String     || |checkmark|  || The ID of the Social Context to add       |
+---------------------+-------------+---------------+--------------------------------------------+
|| profileId          || String     || |checkmark|  || The ID of the profile to update           |
+---------------------+-------------+---------------+--------------------------------------------+
|| roles              || String     || |checkmark|  || The list of roles to assign               |
+---------------------+-------------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/3/system/context/e41e7273-b504-4d50-9edd-3b215eff6464/596683c030047dc279c21d27

.. code-block:: guess

  context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9
  roles=SOCIAL_USER

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
    "lastModified": "2017-07-12T14:37Z",
    "tenant": "sample-tenant",
    "roles": [],
    "attributes": {
      "firstName": "John",
      "lastName": "Doe",
      "socialContexts": [
        {
          "roles": [
            "SOCIAL_USER"
          ],
          "name": "site1",
          "id": "e41e7273-b504-4d50-9edd-3b215eff6464"
        }
      ]
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
|| 400    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "SOCIAL_SUPERADMIN is not a         |
||        ||                               |   valid role" }                                     |
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
