:is-up-to-date: True

.. _newIa-crafter-studio-api-site-get-per-user:

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
      "sites":[
        {
          "id":4,
          "siteUuid":"9f41ea2d-e8a0-4c05-8b91-a2a2eb9ee746",
          "siteId":"hello",
          "name":"hello",
          "description":null,
          "deleted":0,
          "liveUrl":null,
          "lastCommitId":"d2302a5753205afe0043e8380dd0fe20e1064334",
          "publishingEnabled":1,
          "publishingStatus":"ready",
          "publishingStatusMessage":"Ready",
          "lastVerifiedGitlogCommitId":"d2302a5753205afe0043e8380dd0fe20e1064334",
          "sandboxBranch":"master",
          "publishedRepoCreated":0,
          "publishingLockOwner":null,
          "publishingLockHeartbeat":null,
          "state":"READY",
          "lastSyncedGitlogCommitId":"d2302a5753205afe0043e8380dd0fe20e1064334",
          "siteDeleted":false,"sitePublishedRepoCreated":false
        },
        {
           "id":2,
           "siteUuid":"a59df951-cf4d-45e3-8103-50ef1db9d51b",
           "siteId":"my-site",
           "name":"My Site",
           "description":null,
           "deleted":0,
           "liveUrl":null,
           "lastCommitId":"2421c262edaec6f9b75647cbb54e0b38ecf4462f",
           "publishingEnabled":1,
           "publishingStatus":"queued",
           "publishingStatusMessage":"Items are queued for publishing",
           "lastVerifiedGitlogCommitId":"2421c262edaec6f9b75647cbb54e0b38ecf4462f",
           "sandboxBranch":"master",
           "publishedRepoCreated":1,
           "publishingLockOwner":null,
           "publishingLockHeartbeat":null,
           "state":"READY",
           "lastSyncedGitlogCommitId":"2421c262edaec6f9b75647cbb54e0b38ecf4462f",
           "siteDeleted":false,
           "sitePublishedRepoCreated":true
        }
      ],
      "total":2
    }

--------
Response
--------

+---------+---------------------------------------------+---------------------------------------------------+
|| Status || Location                                   || Response Body                                    |
+=========+=============================================+===================================================+
|| 200    || ``.../site/get-per-user.json...``          || See example above.                               |
+---------+---------------------------------------------+---------------------------------------------------+
|| 400    ||                                            || ``{ "message" : "Invalid parameter(s)" }``       |
+---------+---------------------------------------------+---------------------------------------------------+
|| 401    ||                                            || ``{ "message" : "Unauthorized" }``               |
+---------+---------------------------------------------+---------------------------------------------------+
|| 404    ||                                            || ``{ "message" : "User not found"}``              |
+---------+---------------------------------------------+---------------------------------------------------+
|| 500    ||                                            || ``{ "message" : "Internal server error" }``      |
+---------+---------------------------------------------+---------------------------------------------------+
