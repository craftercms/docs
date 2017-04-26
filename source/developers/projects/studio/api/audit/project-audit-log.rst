.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-studio-api-audit-get-project:

=====================
Get Project Audit Log
=====================

Get audit log for a project.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/2/audit/get_by_project/:org_name/:project_name``          |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Global admin, project admin, read audit in project.              |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| project_name || String     || |checkmark|  || Project to use                                  |
+---------------+-------------+---------------+--------------------------------------------------+
|| start        || Integer    ||              || Start offset                                    |
+---------------+-------------+---------------+--------------------------------------------------+
|| number       || Integer    ||              || Number of records to retrieve                   |
+---------------+-------------+---------------+--------------------------------------------------+
|| user         || String     ||              || Username to filter by                           |
+---------------+-------------+---------------+--------------------------------------------------+
|| path         || String     ||              || Path patterns to filter by                      |
+---------------+-------------+---------------+--------------------------------------------------+
|| type         || String     ||              || Content types to filter by                      |
+---------------+-------------+---------------+--------------------------------------------------+
|| operations   || String     ||              || Actions to filter by                            |
+---------------+-------------+---------------+--------------------------------------------------+

.. todo:: operations

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET /api/2/audit/get_by_project/global_enterprise/myproj?start=0&number=25``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "total": 2
    "items":
    [
      {
        "project_name": "myproj",
        "username": "joe.bloggs",
        "modified_date": "01/31/2017 15:25:12",
        "creation_date": "01/31/2017 15:25:12",
        "summary": "User created file",
        "summary_format": "json",
        "content_id": "/project/website/index.xml",
        "content_type": "page",
        "type": "CREATED",
      },
      {
        "project_name": "myproj",
        "username": "joe.bloggs",
        "modified_date": "01/31/2017 17:33:46",
        "creation_date": "01/31/2017 15:25:12",
        "summary": "User saved file",
        "summary_format": "json",
        "content_id": "/project/website/about/index.xml",
        "content_type": "page",
        "type": "UPDATED",
      }
    ]
  }

---------
Responses
---------

+---------+---------------------------------------------------+
|| Status || Response Body                                    |
+=========+===================================================+
|| 200    || See example above.                               |
+---------+---------------------------------------------------+
|| 400    || ``{ "message" : "Invalid parameter(s)" }``       |
+---------+---------------------------------------------------+
|| 401    || ``{ "message" : "Unauthorized" }``               |
+---------+---------------------------------------------------+
|| 404    || ``{ "message" : "Organization not found" }``     |
+---------+---------------------------------------------------+
|| 404    || ``{ "message" : "Project not found" }``          |
+---------+---------------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+