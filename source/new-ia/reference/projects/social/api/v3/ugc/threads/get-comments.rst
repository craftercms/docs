:is-up-to-date: True

.. _newIa-crafter-social-api-ugc-threads-get-comments:

===================
Get Thread Comments
===================

Returns all comments from the given thread.

--------------------
Resource Information
--------------------

.. include:: /includes/social-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/3/threads/:id/comments``                                  |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+----------------+----------+---------------+--------------------------------------------+
|| Name          || Type    || Required     || Description                               |
+================+==========+===============+============================================+
|| context       || String  || |checkmark|  || The ID of the Social Context              |
+----------------+----------+---------------+--------------------------------------------+
|| id            || String  || |checkmark|  || The ID of the thread                      |
+----------------+----------+---------------+--------------------------------------------+
|| recursive     || Integer ||              || Levels of comments to return              |
+----------------+----------+---------------+--------------------------------------------+
|| pageNumber    || Integer ||              || Page number to return                     |
+----------------+----------+---------------+--------------------------------------------+
|| pageSize      || Integer ||              || Comments per page                         |
+----------------+----------+---------------+--------------------------------------------+
|| childrenCount || Integer ||              || Amount of children to return              |
+----------------+----------+---------------+--------------------------------------------+
|| sortBy        || List    ||              || List of fields to order by                |
+----------------+----------+---------------+--------------------------------------------+
|| sortOrder     || List    ||              || List of sort orders for each field        |
+----------------+----------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  GET .../api/3/threads/Welcome/comments?context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "total": 1,
    "pageSize": 666,
    "pageNumber": 0,
    "watched": false,
    "comments": [
      {
        "ancestors": [],
        "targetId": "Welcome",
        "subject": "",
        "body": "This was the first comment in the site!",
        "createdBy": "59667e8abd4787992596ba6b",
        "lastModifiedBy": "59667e8abd4787992596ba6b",
        "createdDate": "2017-07-13T09:09Z",
        "lastModifiedDate": "2017-07-13T11:06Z",
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
        "moderationStatus": "UNMODERATED",
        "votesUp": [],
        "votesDown": [],
        "flags": [],
        "_id": "59678d3f300426156e21df50"
      }
    ]
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
