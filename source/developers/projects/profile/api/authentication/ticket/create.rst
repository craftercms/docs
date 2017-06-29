.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-authentication-ticket-create:

=============
Create Ticket
=============

Creates a new ticket for the specified profile.

.. NOTE::
  This method should only be used when actual authentication is done through other means
  (like when authenticating through Facebook or Twitter) different than profile.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-profile/api/1/authentication/ticket/create``          |
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
|| profileId              || String     || |checkmark|  || The ID of the profile                  |
+-------------------------+-------------+---------------+-----------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/authentication/ticket/2e911e0b-ac47-423e-9174-4e8896f1b387

.. code-block:: none

  accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "tenant": "default",
    "profileId": "5925a68def86951f895cf497",
    "lastRequestTime": 1495660441508,
    "id": "7f036af3-1ab9-4791-b615-ecaece3f0010"
  }

---------
Responses
---------

+--------+------------------------------------+--------------------------------------------------+
|| Status|| Location                          || Response Body                                   |
+========+====================================+==================================================+
| 200    |                                    | See example above.                               |
+--------+------------------------------------+--------------------------------------------------+
| 403    |                                    | .. code-block:: json                             |
|        |                                    |                                                  |
|        |                                    |   { "errorCode": "NO_SUCH_ACCESS_TOKEN_ID",      |
|        |                                    |   "message": "No access token found for ID       |
|        |                                    |   \"e8f5170c-877b-416f-b70f-4b09772f8e2d\"" }    |
+--------+------------------------------------+--------------------------------------------------+
| 500    |                                    | ``{ "message" : "Internal server error" }``      |
+--------+------------------------------------+--------------------------------------------------+
