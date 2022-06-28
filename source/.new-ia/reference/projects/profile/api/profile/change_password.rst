:is-up-to-date: True

.. _newIa-crafter-profile-api-profile-change_password:

===============
Change Password
===============

Resets a profile's password.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/change_password``                               |
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
|| resetTokenId       || String     || |checkmark|  || The reset token ID                          |
+---------------------+-------------+---------------+----------------------------------------------+
|| newPassword        || String     || |checkmark|  || The new password                            |
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

  POST .../api/1/profile/change_password
  
.. code-block:: none

  accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d
  resetTokenId=a2be0e86-7c71-4edf-aed9-6b00c0c60c33
  newPassword=test123
  

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
    "lastModified": 1495815997208,
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

+---------+---------------------------------+----------------------------------------------------+
|| Status || Location                       || Response Body                                     |
+=========+=================================+====================================================+
|| 200    || ``.../profile/change_password``|| See example above.                                |
+---------+---------------------------------+----------------------------------------------------+
|| 500    ||                                || ``{ "message" : "Internal server error" }``       |
+---------+---------------------------------+----------------------------------------------------+
