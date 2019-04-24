:is-up-to-date: True

.. _crafter-social-api-context-preferences-update:

==========================
Update Context Preferences
==========================

Updates the preferences for a given Social Context.

--------------------
Resource Information
--------------------

.. include:: /includes/social-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/3/system/context/updatePreference``                       |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------------+-------------+---------------+--------------------------------------------+
|| Name               || Type       || Required     || Description                               |
+=====================+=============+===============+============================================+
|| context            || String     || |checkmark|  || The ID of the Social Context              |
+---------------------+-------------+---------------+--------------------------------------------+

.. NOTE::
  Any additional parameter included in the request will be saved to the preferences, there is no
  validation on names or values to support custom preferences. For more information about the
  available preferences see :ref:`social-admin-tenant-preferences`

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  POST .../api/3/system/context/updatePreference

.. code-block:: guess

  context=f5b143c2-f1c0-4a10-b56e-f485f00d3fe9
  moderateByMailEnable=true

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  true

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 401    ||                               || ``{ "message" : "User must be logged in" }``       |
+---------+--------------------------------+-----------------------------------------------------+
|| 403    ||                               | .. code-block:: json                                |
||        ||                               |                                                     |
||        ||                               |   { "message" : "Current subject does not have      |
||        ||                               |   permission to execute global action ..." }        |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
