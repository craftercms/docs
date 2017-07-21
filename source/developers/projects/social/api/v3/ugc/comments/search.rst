.. _crafter-social-api-ugc-comments-search:

===============
Search Comments
===============

Returns all comments that match the ``search`` parameter.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-social/api/3/comments/search``                        |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------+----------+---------------+--------------------------------------------+
|| Name       || Type    || Required     || Description                               |
+=============+==========+===============+============================================+
|| context    || String  || |checkmark|  || The ID of the Social Context              |
+-------------+----------+---------------+--------------------------------------------+
|| search     || String  || |checkmark|  || MongoDB query (except $where)             |
+-------------+----------+---------------+--------------------------------------------+
|| sortBy     || String  || |checkmark|  || MongoDB sort string                       |
+-------------+----------+---------------+--------------------------------------------+
|| start      || Integer || |checkmark|  || Starting position for pagination          |
+-------------+----------+---------------+--------------------------------------------+
|| limit      || Integer || |checkmark|  || Final positiion for pagination            |
+-------------+----------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/3/comments/search

.. code-block:: guess

  context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9
  search={ targetId: "Welcome" }
  sortBy={ lastModifiedDate: 1 }
  start=0
  limit=5

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  [
    {
      "ancestors": [],
      "targetId": "Welcome",
      "subject": "",
      "body": "This was the first comment in the site!",
      "createdBy": "59667e8abd4787992596ba6b",
      "lastModifiedBy": "59667e8abd4787992596ba6b",
      "createdDate": "2017-07-13T09:09Z",
      "lastModifiedDate": "2017-07-13T09:30Z",
      "anonymousFlag": false,
      "attributes": {},
      "children": [],
      "attachments": [],
      "moderationStatus": "UNMODERATED",
      "votesUp": [],
      "votesDown": [],
      "flags": [],
      "_id": "59678d3f300426156e21df50"
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
|| 401    ||                               || ``{ "message" : "User must be logged in" }``       |
+---------+--------------------------------+-----------------------------------------------------+
|| 403    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "Current subject doesnt have        |
||        ||                               |   permission to execute global action ..." }        |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
