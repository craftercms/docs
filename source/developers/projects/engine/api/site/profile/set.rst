:is-up-to-date: True

.. _crafter-engine-api-site-profile-set:

===========
Set Profile
===========

Set the current user's profile, all parameters are added to the profile and stored in the session.
Only use it in conjunction with Studio's Personas.

.. note::
  Any parameter included in the request will be added as a property for the user profile, if the
  request is made without any parameter then profile will be cleared.

--------------------
Resource Information
--------------------

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/profile/set``                                           |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/profile/set.json?username=john&lastname=doe&age=30``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  { "username" : "john" }

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
