.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-studio-api-user-get:

========
Get User
========

Get a Crafter Studio user.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/2/user/get/:username``                                    |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Admin, self, read user details in organization or project        |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

None.

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET /api/2/user/get/jane.doe``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "username" : "jane.doe",
    "first_name" : "Jane",
    "last_name" : "Doe",
    "email" : "jane@example.com",
    "externally_managed" : "false",
    "organizations" :
    [
      {
        "org_name" : "Global Enterprise",
        "org_desc" : "Super nice orgnization.",
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
  }

---------
Responses
---------

+---------+------------------------------------------+---------------------------------------------------+
|| Status || Location                                || Response Body                                    |
+=========+==========================================+===================================================+
|| 200    || ``/api/2/user/get/jane.doe``            || See example above.                               |
+---------+------------------------------------------+---------------------------------------------------+
|| 400    ||                                         || ``{ "message" : "Invalid parameter(s)" }``       |
+---------+------------------------------------------+---------------------------------------------------+
|| 401    ||                                         || ``{ "message" : "Unauthorized" }``               |
+---------+------------------------------------------+---------------------------------------------------+
|| 404    ||                                         || ``{ "message" : "User not found" }``             |
+---------+------------------------------------------+---------------------------------------------------+
|| 500    ||                                         || ``{ "message" : "Internal server error.``        |
||        ||                                         || ``ACTUAL_EXCEPTION" }``                          |
+---------+------------------------------------------+---------------------------------------------------+
