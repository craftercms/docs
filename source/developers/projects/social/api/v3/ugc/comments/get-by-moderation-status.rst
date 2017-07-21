.. _crafter-social-api-ugc-comments-get-by-moderation-status:

=================================
Get Comments By Moderation Status
=================================

Returns all the comments with a given moderation status.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-social/api/3/comments/moderation/:status``            |
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
|| status     || String  || |checkmark|  || The moderation status to search           |
+-------------+----------+---------------+--------------------------------------------+
|| thread     || String  ||              || The ID of the thread to search            |
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

  GET .../api/3/comments/moderation/APPROVED?context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9&sortBy=lastModifiedDate&sortOrder=ASC

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
      "lastModifiedDate": "2017-07-13T14:44Z",
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
