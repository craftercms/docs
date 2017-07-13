.. _crafter-social-api-ugc-comments-get-flagged:

====================
Get Flagged Comments
====================

Returns all the comments with at least one flag.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-social/api/3/comments/flagged``                       |
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
|| pageNumber || Integer ||              || Page number to return                     |
+-------------+----------+---------------+--------------------------------------------+
|| pageSize   || Integer ||              || Comments per page                         |
+-------------+----------+---------------+--------------------------------------------+
|| sortBy     || List    ||              || List of fields to order by                |
+-------------+----------+---------------+--------------------------------------------+
|| sortOrder  || List    ||              || List of sort orders for each field        |
+-------------+----------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  GET .../api/3/comments/flagged?context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9

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
      "body": "This was the first comment in he site!",
      "createdBy": "59667e8abd4787992596ba6b",
      "lastModifiedBy": "59667e8abd4787992596ba6b",
      "createdDate": "2017-07-13T09:09Z",
      "lastModifiedDate": "2017-07-13T15:34Z",
      "anonymousFlag": false,
      "attributes": {},
      "children": [],
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
          "_id": "5967e783300426156e21df59"
        }
      ],
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
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
