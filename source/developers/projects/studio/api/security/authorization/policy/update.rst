.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-studio-api-security-update:

=============
Update Policy
=============

Update a Crafter Studio security policy.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/2/security/policy/update/:id``                            |
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
|| Id           || String     || |checkmark|  || Policy ID                                       |
+---------------+-------------+---------------+--------------------------------------------------+
|| Version      || String     || |checkmark|  || Schema version, currently "2017-05-01"          |
+---------------+-------------+---------------+--------------------------------------------------+
|| Statement    || String     || |checkmark|  || Statement array specifying the policy, see REF  |
||              ||            ||              || for more information on policy statements.      |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST /api/2/security/policy/update/269096bb-3269-4f2b-90c6-b2a0172bd066``

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

``Status 200 OK``

---------
Responses
---------

+---------+---------------------------------------------------+
|| Status || Response Body                                    |
+=========+===================================================+
|| 200    || ``{ "message" : "OK" }``                         |
+---------+---------------------------------------------------+
|| 400    || ``{ "message" : "Invalid parameter(s)" }``       |
+---------+---------------------------------------------------+
|| 401    || ``{ "message" : "Unauthorized" }``               |
+---------+---------------------------------------------------+
|| 404    || ``{ "message" : "Policy not found" }``           |
+---------+---------------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+