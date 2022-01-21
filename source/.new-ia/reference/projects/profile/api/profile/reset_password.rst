:is-up-to-date: True

.. _crafter-profile-api-profile-reset_password:

==============
Reset Password
==============

Sends an email to the profile's user to indicate that the password needs to be reset.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/:id/reset_password``                            |
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
|| id                 || String     || |checkmark|  || The profile's ID                            |
+---------------------+-------------+---------------+----------------------------------------------+
|| resetPasswordUrl   || String     || |checkmark|  || The base URL to use to build the final URL  |
||                    ||            ||              || the profile will use to reset their password|
+---------------------+-------------+---------------+----------------------------------------------+
|| attributesToReturn || String     ||              || The name of the attributes to return        |
||                    ||            ||              || (don't specify to return all)               |
+---------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/1/profile/59284659d4c650213cc2f3fc/reset_password

.. code-block:: none

  accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d
  resetPasswordUrl=http://example.com

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "username": "john.doe",
    "email": "john.doe@example.com",
    "verified": false,
    "enabled": false,
    "createdOn": 1495811673842,
    "lastModified": 1495812397986,
    "tenant": "sample-tenant",
    "roles": [
      "APP_TEST",
      "APP_REPORT"
    ],
    "attributes": {},
    "id": "59284659d4c650213cc2f3fc"
  }

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    || ``.../profile/:id/enable``    || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
