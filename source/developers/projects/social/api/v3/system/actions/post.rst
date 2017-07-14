.. _crafter-social-api-actions-post:

==============
Update Actions
==============

Updates the given action name with the Roles.

.. WARNING::
  Notice that this is not a partial update of roles, this will replace the current action
  Roles with the new ones

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-social/api/3/system/actions``                         |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------------+-------------+---------------+--------------------------------------------+
|| Name               || Type       || Required     || Description                               |
+=====================+=============+===============+============================================+
|| context            || String     || |checkmark|  || The ID of the Social Context              |
+---------------------+-------------+---------------+--------------------------------------------+
|| actionName         || String     || |checkmark|  || The name of the action to update          |
+---------------------+-------------+---------------+--------------------------------------------+
|| roles              || String     || |checkmark|  || List of roles to assign to the action     |
+---------------------+-------------+---------------+--------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/3/system/actions?context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9&actionName=ugc.moderate&roles=CUSTOM_MODERATOR,SOCIAL_SUPERADMIN,SOCIAL_ADMIN,SOCIAL_MODERATOR

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "actionName": "ugc.moderate",
    "roles": [
      "SOCIAL_SUPERADMIN",
      "CUSTOM_MODERATOR",
      "SOCIAL_ADMIN",
      "SOCIAL_MODERATOR"
    ],
    "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
    "_id": "59663b4be61296e1be35358c"
  }

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 400    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "System Actions can't be            |
||        ||                               |   changed" }                                        |
+---------+--------------------------------+-----------------------------------------------------+
|| 401    ||                               || ``{ "message" : "User must be logged in" }``       |
+---------+--------------------------------+-----------------------------------------------------+
|| 403    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "Current subject doesnt have        |
||        ||                               |   permission to execute global action ..." }        |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
