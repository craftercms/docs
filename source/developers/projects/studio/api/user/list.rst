.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-studio-api-user-list:

==========
List Users
==========

List all Crafter Studio users with an optional range for pagination.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/2/user/list``                                             |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Global admin, read users globally                                |
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

^^^^^^^
Request
^^^^^^^

``GET /api/2/user/list``

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
        "externally_managed" : "false",
        "organizations" :
        [
          {
            "org_name" : "global_enterprise",
            "org_desc" : "Super nice organization.",
            "org_groups" :
            [
              {
                "group_name" : "us-employees",
                "group_desc" : "All USA Employees."
              },
              {
                "group_name" : "us-developers",
                "group_desc" : "USA-based developers."
              }
            ],
            "projects" :
            [
              {
                "project_name" : "Android Magic App",
                "project_desc" : "Super nice project.",
                "project_roles" :
                [
                  {
                    "role_name" : "developer"
                  }
                ]
              },
              {
                "project_name" : "iOS Magic App",
                "project_desc" : "Super nice project.",
                "project_roles" :
                [
                  {
                    "role_name" : "developer"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "username" : "joe.bloggs",
        "first_name" : "Joe",
        "last_name" : "Bloggs",
        "email" : "joe@example.com",
        "externally_managed" : "false",
        "organizations" :
        [
          {
            "org_name" : "global_enterprise",
            "org_desc" : "Super nice organization.",
            "org_groups" :
            [
              {
                "group_name" : "us-employees",
                "group_desc" : "All USA Employees."
              },
              {
                "group_name" : "us-developers",
                "group_desc" : "USA-based developers."
              }
            ],
            "projects" :
            [
              {
                "project_name" : "Android Magic App",
                "project_desc" : "Super nice project.",
                "project_roles" :
                [
                  {
                    "role_name" : "developer"
                  }
                ]
              }
            ]
          }
        ]
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
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
