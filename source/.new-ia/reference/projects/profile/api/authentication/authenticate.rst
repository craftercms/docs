:is-up-to-date: True

.. _crafter-profile-api-authentication-authenticate:

============
Authenticate
============

Authenticates the user, and returns a ticket identifying the authentication.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/authentication/authenticate``                           |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+-----------------------------------------+
|| Name                   || Type       || Required     || Description                            |
+=========================+=============+===============+=========================================+
|| accessTokenId          || String     || |checkmark|  || The access token ID of the application |
||                        ||            ||              || making the call                        |
+-------------------------+-------------+---------------+-----------------------------------------+
|| tentantName            || String     || |checkmark|  || The tenant's name                      |
+-------------------------+-------------+---------------+-----------------------------------------+
|| username               || String     || |checkmark|  || The username                           |
+-------------------------+-------------+---------------+-----------------------------------------+
|| password               || String     || |checkmark|  || The password                           |
+-------------------------+-------------+---------------+-----------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/authentication/authenticate

.. code-block:: none

  accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d
  tenantName=default
  username=admin
  password=admin

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "tenant": "default",
    "profileId": "5925a68def86951f895cf497",
    "lastRequestTime": 1495659198937,
    "id": "6b701758-cc0b-4858-8de0-3139a1d7bdc8"
  }

---------
Responses
---------

+---------+------------------------------------+-------------------------------------------------+
|| Status || Location                          || Response Body                                  |
+=========+====================================+=================================================+
|| 200    |                                    | See example above.                              |
+---------+------------------------------------+-------------------------------------------------+
|| 401    |                                    | .. code-block:: json                            |
||        |                                    |                                                 |
||        |                                    |   { "errorCode": "BAD_CREDENTIALS", "message":  |
||        |                                    |   "Invalid username and/or password"  }         |
+---------+------------------------------------+-------------------------------------------------+
|| 500    |                                    | ``{ "message" : "Internal server error" }``     |
+---------+------------------------------------+-------------------------------------------------+
