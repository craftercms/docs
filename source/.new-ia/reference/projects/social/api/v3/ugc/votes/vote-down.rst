:is-up-to-date: True

.. _crafter-social-api-ugc-votes-down:

=========
Vote Down
=========

Toggles a vote down in the given comment from the currently logged user.

--------------------
Resource Information
--------------------

.. include:: /includes/social-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/3/comments/:id/votes/down``                               |
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

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  PUT .../api/3/comments/59678d3f300426156e21df50/votes/down

.. code-block:: none

  context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9

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
    "body": "This was the first comment in the site!",
    "createdBy": "59667e8abd4787992596ba6b",
    "lastModifiedBy": "59667e8abd4787992596ba6b",
    "createdDate": "2017-07-13T09:09Z",
    "lastModifiedDate": "2017-07-13T11:02Z",
    "anonymousFlag": false,
    "attributes": {},
    "attachments": [],
    "moderationStatus": "UNMODERATED",
    "votesUp": [],
    "votesDown": [
      "59667e8abd4787992596ba6b"
    ],
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
|| 401    ||                               || ``{ "message" : "User must be logged in" }``       |
+---------+--------------------------------+-----------------------------------------------------+
|| 403    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "Current subject does not have      |
||        ||                               |   permission to execute global action ..." }        |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
