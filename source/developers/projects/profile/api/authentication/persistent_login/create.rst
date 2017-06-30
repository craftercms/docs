.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-authentication-persistent_login-create:

=======================
Create Persistent Login
=======================

Creates a persistent login, used for remember me functionality.

--------------------
Resource Information
--------------------

+------------------------------------------------------------------------------------------------+
|| HTTP Verb         | POST                                                                      |
+------------------------------------------------------------------------------------------------+
|| URL               | ``/crafter-profile/api/1/authentication//persistent_login/create``        |
+------------------------------------------------------------------------------------------------+
|| Response Formats  | ``JSON``                                                                  |
+------------------------------------------------------------------------------------------------+

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

  POST .../api/1/authentication/persistent_login/create

.. code-block:: none

  accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d
  profileId=5925a68def86951f895cf497

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "tenant": "default",
    "profileId": "5925a68def86951f895cf497",
    "token": "adf88dca-4960-474c-be63-c8c5e3bedaa7",
    "timestamp": 1495665332589,
    "id": "b68c0013-d7b2-4004-8463-d7ba03e15d94"
  }

---------
Responses
---------

+---------+---------------------------------+----------------------------------------------------+
|| Status || Location                       || Response Body                                     |
+=========+=================================+====================================================+
|| 200    ||                                || See example above.                                |
+---------+---------------------------------+----------------------------------------------------+
|| 500    ||                                || ``{ "message" : "Internal server error" }``       |
+---------+---------------------------------+----------------------------------------------------+
