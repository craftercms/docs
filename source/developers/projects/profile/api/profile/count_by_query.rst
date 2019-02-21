.. _crafter-profile-api-profile-count_by_query:

==========================
Get Profile Count By Query
==========================

Returns the number of profiles that match the query for the specified tenant.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/count_by_query``                                |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+----------------+----------+---------------+----------------------------------------------------+
|| Name          || Type    || Required     || Description                                       |
+================+==========+===============+====================================================+
|| accessTokenId || String  || |checkmark|  || The access token ID of the application            |
||               ||         ||              || making the call                                   |
+----------------+----------+---------------+----------------------------------------------------+
|| tenantName    || String  || |checkmark|  || The tenant's name                                 |
+----------------+----------+---------------+----------------------------------------------------+
|| query         || String  || |checkmark|  || The Mongo query used to search for the profiles.  |
+----------------+----------+---------------+----------------------------------------------------+

.. WARNING::
  The query must not contain the ``$where`` operator, the tenant's name (already specified) or any non-readable attribute by the application

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  GET .../api/1/profile/count_by_query?accessTokenId=e8f5170c-877b-416f-b70f-4b09772f8e2d&tenantName=sample-tenant&query=%7B%20%22username%22%3A%20%22john.doe%22%20%7D

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  1

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
