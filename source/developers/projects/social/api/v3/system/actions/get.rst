.. _crafter-social-api-actions-get:

===================
Get Current Actions
===================

Gets all Security Actions for current context.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
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

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  GET .../api/3/system/actions?context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  [
    {
      "actionName": "ugc.update",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "OWNER",
        "SOCIAL_ADMIN",
        "SOCIAL_MODERATOR"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be35358b"
    },
    {
      "actionName": "ugc.moderate",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN",
        "SOCIAL_MODERATOR"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be35358c"
    },
    {
      "actionName": "ugc.unflag",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN",
        "SOCIAL_MODERATOR"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be35358d"
    },
    {
      "actionName": "ugc.flag",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN",
        "SOCIAL_MODERATOR",
        "SOCIAL_USER"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be35358e"
    },
    {
      "actionName": "ugc.create",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN",
        "SOCIAL_MODERATOR",
        "SOCIAL_USER"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be35358f"
    },
    {
      "actionName": "ugc.delete",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "OWNER",
        "SOCIAL_ADMIN",
        "SOCIAL_MODERATOR"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be353590"
    },
    {
      "actionName": "ugc.read",
      "roles": [
        "ANONYMOUS",
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN",
        "SOCIAL_MODERATOR",
        "SOCIAL_USER"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be353591"
    },
    {
      "actionName": "system.securityActions.read",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be353592"
    },
    {
      "actionName": "system.securityActions.update",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be353593"
    },
    {
      "actionName": "system.socialctx.all",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be353594"
    },
    {
      "actionName": "system.socialctx.create",
      "roles": [
        "SOCIAL_SUPERADMIN"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be353595"
    },
    {
      "actionName": "system.socialctx.addProfile",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be353596"
    },
    {
      "actionName": "system.socialctx.removeProfile",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be353597"
    },
    {
      "actionName": "system.notification.changeTemplate",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be3535ab"
    },
    {
      "actionName": "ugc.voting",
      "roles": [
        "SOCIAL_SUPERADMIN",
        "SOCIAL_ADMIN",
        "SOCIAL_MODERATOR",
        "SOCIAL_USER"
      ],
      "contextId": "f5b143c2-f1c0-4a10-b56e-f485f00d3fe9",
      "_id": "59663b4be61296e1be3535ca"
    }
  ]

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 401    ||                               || ``{ "message" : "User must be logged in" }``       |
+---------+--------------------------------+-----------------------------------------------------+
|| 403    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "Current subject does not have      |
||        ||                               |   permission to execute global action ..." }        |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
