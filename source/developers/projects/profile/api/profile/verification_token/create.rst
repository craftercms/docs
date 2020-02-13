.. _crafter-profile-api-profile-verification_token-create:

=========================
Create Verification Token
=========================

Creates a token that can be sent to the user in an email as a link.

.. NOTE::
  After the user clicks the link, the token then can be passed to ``/verify``
  or ``/change_password`` to verify user requesting the token.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/:id/verification_token/create``                 |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------------+-------------+---------------+----------------------------------------------+
|| Name               || Type       || Required     || Description                                 |
+=====================+=============+===============+==============================================+
|| accessTokenId      || String     || |checkmark|  || The access token ID of the application      |
||                    ||            ||              || making the call                             |
+---------------------+-------------+---------------+----------------------------------------------+
|| id                 || String     || |checkmark|  || The profile ID of the user                  |
+---------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: text

  POST .../api/1/profile/592715d4d4c650e226b03b62/verification_token/create?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d

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

+---------+----------------------------------------------+----------------------------------------------+
|| Status || Location                                    || Response Body                               |
+=========+==============================================+==============================================+
|| 200    || See example above.                          ||                                             |
+---------+----------------------------------------------+----------------------------------------------+
|| 500    ||                                             || ``{ "message" : "Internal server error" }`` |
+---------+----------------------------------------------+----------------------------------------------+
