:is-up-to-date: True

.. _crafter-studio-api-site-get:

========
Get Site
========

Get a Crafter Studio site.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/site/get.json``                          |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Admin, member in the site                                        |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site_id      || String     || |checkmark|  || Site ID to use                                  |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

.. code-block:: none

	GET .../api/1/services/api/1/site/get.json?site_id=my-site

.. code-block:: json

  {
    "id":4,
    "siteUuid":"9f41ea2d-e8a0-4c05-8b91-a2a2eb9ee746",
    "siteId":"my-site",
    "name":"my-site",
    "description":"My very first site!",
    "deleted":0,
    "liveUrl":null,
    "lastCommitId":
    "d2302a5753205afe0043e8380dd0fe20e1064334",
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
    "siteDeleted":false,
    "sitePublishedRepoCreated":false
  }

--------
Response
--------

+---------+------------------------------------------+---------------------------------------------------+
|| Status || Location                                || Response Body                                    |
+=========+==========================================+===================================================+
|| 200    || ``.../site/get.json?site_id=my-site``   || See example above.                               |
+---------+------------------------------------------+---------------------------------------------------+
|| 400    ||                                         || ``{ "message" : "Invalid parameter(s)" }``       |
+---------+------------------------------------------+---------------------------------------------------+
|| 401    ||                                         || ``{ "message" : "Unauthorized" }``               |
+---------+------------------------------------------+---------------------------------------------------+
|| 404    ||                                         || ``{ "message" : "Site not found" }``             |
+---------+------------------------------------------+---------------------------------------------------+
|| 500    ||                                         || ``{ "message" : "Internal server error" }``      |
+---------+------------------------------------------+---------------------------------------------------+
