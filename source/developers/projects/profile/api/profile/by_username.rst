.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-profile-api-profile-by_username:

=======================
Get Profile By Username
=======================

Returns the user for the specified tenant and username.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/crafter-profile/api/1/profile/by_username``                   |
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
|| tenantName         || String     || |checkmark|  || The tenant's name                           |
+---------------------+-------------+---------------+----------------------------------------------+
|| username           || String     || |checkmark|  || The profile's username                      |
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

  GET .../api/1/profile/by_username?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d&tenantName=sample-tenant&username=john.doe

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
  	"username": "john.doe",
  	"email": "john.doe@example.com",
  	"verified": false,
  	"enabled": false,
  	"createdOn": 1495748091232,
  	"lastModified": 1495748091232,
  	"tenant": "sample-tenant",
  	"roles": [],
  	"attributes": {},
  	"id": "59274dfbd4c650e226b03b65"
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
