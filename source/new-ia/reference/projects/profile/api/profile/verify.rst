:is-up-to-date: True

.. _newIa-crafter-profile-api-profile-verify:

==============
Verify Profile
==============

Sets the profile as verified if the verification token is valid.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/verify``                                        |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+----------------------+---------+---------------+-------------------------------------------+
|| Name                || Type   || Required     || Description                              |
+======================+=========+===============+===========================================+
|| accessTokenId       || String || |checkmark|  || The access token ID of the application   |
||                     ||        ||              || making the call                          |
+----------------------+---------+---------------+-------------------------------------------+
|| verificationTokenId || String || |checkmark|  || The verification token ID                |
+----------------------+---------+---------------+-------------------------------------------+
|| attributesToReturn  || String ||              || The name of the attributes to return     |
||                     ||        ||              || (don't specify to return all)            |
+----------------------+---------+---------------+-------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/profile/verify

.. code-block:: none

  accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d
  verificationTokenId=055d58c4-fabb-44da-96eb-261e24e1d0c9

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "username": "john.doe",
    "email": "john.doe@example.com",
    "verified": true,
    "enabled": true,
    "createdOn": 1495733716728,
    "lastModified": 1495746467551,
    "tenant": "sample-tenant",
    "roles": [],
    "attributes": {},
    "id": "592715d4d4c650e226b03b62"
  }

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
