.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-studio-api-project-list-by-user:

=====================
List Projects by User
=====================

List Crafter Studio projects available to a user given an organization and username with an optional range for
pagination.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/2/project/list-by-user/:org_name/:username``              |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Global admin, organization admin, list projects by user in       |
||                           || organization.                                                    |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| org_name     || String     || |checkmark|  || Organization to use                             |
+---------------+-------------+---------------+--------------------------------------------------+
|| username     || String     || |checkmark|  || User for whom to find permitted sites           |
+---------------+-------------+---------------+--------------------------------------------------+
|| start        || Integer    ||              || Start offset                                    |
+---------------+-------------+---------------+--------------------------------------------------+
|| number       || Integer    ||              || Number of records to retrieve                   |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET /api/2/project/list-by-user/global_enterprise/jane.doe``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "total": 2
    "projects" :
    [
      {
        "project_name" : "mySite1",
        "description" : "My nice site 1."
      },
      {
        "project_name" : "mySite2",
        "description" : "My nice site 2."
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
|| 404    || ``{ "message" : "User not found" }``             |
+---------+---------------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
