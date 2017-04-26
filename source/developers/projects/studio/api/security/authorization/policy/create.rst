.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-studio-api-security-create:

=============
Create Policy
=============

Create a Crafter Studio security policy.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/2/security/policy/create``                                |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Global admin                                                     |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| Id           || String     || |checkmark|  || Policy ID, must be unique                       |
+---------------+-------------+---------------+--------------------------------------------------+
|| Version      || String     || |checkmark|  || Schema version, currently "2017-05-01"          |
+---------------+-------------+---------------+--------------------------------------------------+
|| Statement    || String     || |checkmark|  || Statement array specifying the policy, see REF  |
||              ||            ||              || for more information on policy statements.      |
+---------------+-------------+---------------+--------------------------------------------------+

.. todo:: add reference to policy schema

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST /api/2/security/policy/create``

.. code-block:: json

  {
    "Id": "cd3ad3d9-2776-4ef1-a904-4c229d1642ee",
    "Version": "2017-05-01",
    "Statement":
    [
      {
        "Effect": "Allow",
        "Action": [
          "studio:CreateContent",
          "studio:ReadContent",
          "studio:DeleteContent"
        ],
        "Resource": "crn:studio:myorg:project:mysite:*"
      },
      {
        "Effect": "Deny",
        "Action": [
          "studio:DeleteContent"
        ],
        "Resource": "crn:studio:myorg:project:mysite:/important-stuff/*"
      }
    ]
  }

^^^^^^^^
Response
^^^^^^^^

``Status 201 CREATED``

.. code-block:: json

  {
    "message" : "OK"
  }

---------
Responses
---------

+---------+---------------------------------------------------+-------------------------------------------+
|| Status || Response Body                                    || Headers                                  |
+=========+===================================================+===========================================+
|| 201    || See example above.                               || Location:                                |
||        ||                                                  || ``/api/2/security/policy/get/:id``       |
+---------+---------------------------------------------------+-------------------------------------------+
|| 400    || ``{ "message" : "Invalid parameter(s)" }``       ||                                          |
+---------+---------------------------------------------------+-------------------------------------------+
|| 401    || ``{ "message" : "Unauthorized" }``               ||                                          |
+---------+---------------------------------------------------+-------------------------------------------+
|| 409    || ``{ "message" : "Policy already exists" }``      || Location:                                |
||        ||                                                  || ``/api/2/security/policy/get/:id``       |
+---------+---------------------------------------------------+-------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        ||                                          |
||        || ``ACTUAL_EXCEPTION" }``                          ||                                          |
+---------+---------------------------------------------------+-------------------------------------------+
