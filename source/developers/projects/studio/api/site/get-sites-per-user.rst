:is-up-to-date: True

.. _crafter-studio-api-site-get-per-user:

==================
Get Sites per User
==================

Get Crafter Studio sites available to current user with an optional range for pagination.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/site/get-per-user.json``                 |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Admin, self                                                      |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| start        || Integer    ||              || Start offset                                    |
+---------------+-------------+---------------+--------------------------------------------------+
|| number       || Integer    ||              || Number of records to retrieve                   |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

.. code-block:: none

	GET .../api/1/services/api/1/site/get-per-user.json

.. code-block:: json
  :linenos:

  {
    "sites": [
      {
        "id": 2,
        "siteUuid": "acbf5459-c5ab-4be1-be1a-a12571db9b7f",
        "siteId": "myeditorial",
        "name": "myeditorial",
        "description": null,
        "status": null,
        "deleted": 0,
        "liveUrl": null,
        "lastCommitId": "ef874be1b167d229163dee4e70f1fa73a1f66401",
        "publishingEnabled": 1,
        "publishingStatusMessage": "ready|Ready",
        "lastVerifiedGitlogCommitId": "ef874be1b167d229163dee4e70f1fa73a1f66401",
        "sandboxBranch": "master",
        "searchEngine": "Elasticsearch",
        "publishedRepoCreated": 0,
        "publishingLockOwner": "localhost/127.0.0.1",
        "publishingLockHeartbeat": "2020-11-10T14:49:02-05:00",
        "sitePublishedRepoCreated": false,
        "siteDeleted": false
      },
      {
        "id": 3,
        "siteUuid": "b918ee26-a672-4363-989d-2743eeff4c43",
        "siteId": "mysite",
        "name": "mysite",
        "description": null,
        "status": null,
        "deleted": 0,
        "liveUrl": null,
        "lastCommitId": "75f6057714737be8c9929bdb769fcb172ee769a8",
        "publishingEnabled": 1,
        "publishingStatusMessage": "ready|Ready",
        "lastVerifiedGitlogCommitId": "75f6057714737be8c9929bdb769fcb172ee769a8",
        "sandboxBranch": "master",
        "searchEngine": "Elasticsearch",
        "publishedRepoCreated": 0,
        "publishingLockOwner": "localhost/127.0.0.1",
        "publishingLockHeartbeat": "2020-11-10T14:49:01-05:00",
        "sitePublishedRepoCreated": false,
        "siteDeleted": false
      }
    ],
    "total": 2
    }

--------
Response
--------

+---------+---------------------------------------------+---------------------------------------------------+
|| Status || Location                                   || Response Body                                    |
+=========+=============================================+===================================================+
|| 200    || ``.../site/get-per-user.json..``           || See example above.                               |
+---------+---------------------------------------------+---------------------------------------------------+
|| 400    ||                                            || ``{ "message" : "Invalid parameter(s)" }``       |
+---------+---------------------------------------------+---------------------------------------------------+
|| 401    ||                                            || ``{ "message" : "Unauthorized" }``               |
+---------+---------------------------------------------+---------------------------------------------------+
|| 404    ||                                            || ``{ "message" : "User not found"}``              |
+---------+---------------------------------------------+---------------------------------------------------+
|| 500    ||                                            || ``{ "message" : "Internal server error" }``      |
+---------+---------------------------------------------+---------------------------------------------------+
