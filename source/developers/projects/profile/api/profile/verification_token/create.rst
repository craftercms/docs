.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-profile-verification_token-create:

=========================
Create Verification Token
=========================

Creates a token that can be sent to the user in an email as a link.

.. NOTE::
  After the user clicks the link, the token then can be passed to ``/verify``
  or ``/change_password`` to verify that the user agrees.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-profile/api/1/profile/:id/verification_token/create`` |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+--------+--------------+--------------------------------------------------------+
|| Name         || Type  || Required    || Description                                           |
+===============+========+==============+========================================================+
|| accessTokenId|| String|| |checkmark| || The ID of the application access token                |
+---------------+--------+--------------+--------------------------------------------------------+
|| id           || String|| |checkmark| || The profile ID of the user that needs to be contacted |
+---------------+--------+--------------+--------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: guess

  POST .../api/1/profile/592715d4d4c650e226b03b62/verification_token/create?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d
.. code-block:: json

  {
    "username": "john.doe",
    "email": "john.doe@example.com",
    "verified": false,
    "enabled": false,
    "createdOn": 1495733716728,
    "lastModified": 1495733716728,
    "tenant": "sample-tenant",
    "roles": [],
    "attributes": {},
    "id": "592715d4d4c650e226b03b62"
  }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  
  {
    "tenant": "sample-tenant",
    "profileId": "592715d4d4c650e226b03b62",
    "timestamp": 1495746285875,
    "id": "055d58c4-fabb-44da-96eb-261e24e1d0c9"
  }

---------
Responses
---------

+---------+----------------------------------------------+--------------------------------------------+
|| Status || Location                                    || Response Body                             |
+=========+==============================================+============================================+
|| 200    | ``.../profile/:id/verification_token/create``| See example above.                         |
+---------+----------------------------------------------+--------------------------------------------+
|| 500    |                                              | ``{ "message" : "Internal server error" }``|
+---------+----------------------------------------------+--------------------------------------------+
