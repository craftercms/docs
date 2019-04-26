.. _crafter-social-api-ugc-comments-create:

==============
Create Comment
==============

Creates a new comment and creates a new thread if needed.

--------------------
Resource Information
--------------------

.. include:: /includes/social-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/3/comments``                                              |
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
|| body       || String  || |checkmark|  || The body of the new comment               |
+-------------+----------+---------------+--------------------------------------------+
|| thread     || String  || |checkmark|  || Id of the thread to attach this comment   |
+-------------+----------+---------------+--------------------------------------------+
|| parent     || String  ||              || Id of the parent for the new comment      |
+-------------+----------+---------------+--------------------------------------------+
|| anonymous  || Boolean ||              || Should the comment be posted as           |
|             |          |               || anonymous                                 |
+-------------+----------+---------------+--------------------------------------------+
|| subject    || String  ||              || Subject of the comment to be created      |
+-------------+----------+---------------+--------------------------------------------+
|| attributes || String  ||              || JSON string representing any extra        |
|             |          |               || attributes of the comment to create       |
+-------------+----------+---------------+--------------------------------------------+
|| attachment || Binary  ||              || Binary file to include in the comment     |
+-------------+----------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/3/comments

.. code-block:: guess

  context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9
  body=This is the first comment!
  thread=Welcome

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
    "body": "This is the first comment!",
    "createdBy": "59667e8abd4787992596ba6b",
    "lastModifiedBy": "59667e8abd4787992596ba6b",
    "createdDate": "2017-07-13T09:09Z",
    "lastModifiedDate": "2017-07-13T09:09Z",
    "anonymousFlag": false,
    "attributes": {
      "baseUrl": "http://localhost:8080/crafter-social"
    },
    "attachments": [],
    "moderationStatus": "UNMODERATED",
    "votesUp": [],
    "votesDown": [],
    "flags": [],
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
|| 400    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "Maximum upload size of ...         |
||        ||                               |   bytes exceeded" }                                 |
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
