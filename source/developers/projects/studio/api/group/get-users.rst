.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-studio-api-group-users:

===================
Get Users per Group
===================

Get all Crafter Studio users for a group within an organization with an optional range for pagination.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/2/group/:org_name/:group_name/users``                     |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Global admin, organization admin, read users by group            |
||                           || in organization.                                                 |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| org_name     || String     || |checkmark|  || Organization name                               |
+---------------+-------------+---------------+--------------------------------------------------+
|| group_name   || String     || |checkmark|  || Group name to use                               |
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

``GET /api/2/group/global_enterprise/us-employees/users

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "total": 2
    "users" :
    [
      {
        "username" : "jane.doe",
        "first_name" : "Jane",
        "last_name" : "Doe",
        "email" : "jane@example.com",
        "externally_managed" : "false"
      },
      {
        "username" : "joe.bloggs",
        "first_name" : "Joe",
        "last_name" : "Bloggs",
        "email" : "joe@example.com",
        "externally_managed" : "false"
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
|| 404    || ``{ "message" : "Group not found" }``            |
+---------+---------------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
