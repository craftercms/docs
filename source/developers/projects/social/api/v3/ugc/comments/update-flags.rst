.. _crafter-social-api-ugc-comments-update-flags:

====================
Update Comment Flags
====================

Adds a flag to the given comment.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-social/api/3/comments/:id/flags``                     |
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
|| id         || String  || |checkmark|  || The ID of the comment to update           |
+-------------+----------+---------------+--------------------------------------------+
|| reason     || String  || |checkmark|  || Reason why the comment is been flagged    |
+-------------+----------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/3/comments/59678d3f300426156e21df50/flags?context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9

.. code-block:: guess

  reason=Contains offensive language

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "ancestors": [],
    "targetId": "Welcome",
    "subject": "",
    "body": "This was the first comment in he site!",
    "createdBy": "59667e8abd4787992596ba6b",
    "lastModifiedBy": "59667e8abd4787992596ba6b",
    "createdDate": "2017-07-13T09:09Z",
    "lastModifiedDate": "2017-07-13T15:17Z",
    "anonymousFlag": false,
    "attributes": {},
    "attachments": [
      {
        "md5": "c86b6b1607621afff04b6a9b9048e87b",
        "fileId": "5967c9dd300426156e21df53",
        "contentType": "image/png",
        "fileSize": "144.5 KB",
        "storeName": "/f5b143c2-f1c0-4a10-b56e-f485f00d3fe9/59678d3f300426156e21df50/person1.png",
        "fileName": "person1.png",
        "savedDate": "2017-07-13T13:28Z",
        "fileSizeBytes": 147970,
        "attributes": {
          "owner": "59678d3f300426156e21df50"
        }
      }
    ],
    "moderationStatus": "APPROVED",
    "votesUp": [],
    "votesDown": [],
    "flags": [
      {
        "reason": "Contains offensive language",
        "userId": "59667e8abd4787992596ba6b",
        "_id": "5967e35f300426156e21df58"
      }
    ],
    "_id": "59678d3f300426156e21df50"
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
||        ||                               |   { "message" : "Current subject doesnt have        |
||        ||                               |   permission to execute global action ..." }        |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
