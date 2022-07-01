:is-up-to-date: True

.. _newIa-crafter-studio-api-publish-status:

==============
Publish Status
==============

Get a Crafter Studio's publishing status for a site.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/publish/status.json``                    |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Read access to the site.                                         |
+----------------------------+-------------------------------------------------------------------+


----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site_id      || String     || |checkmark|  || Site ID to use                                  |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/publish/status.json?site_id=my-site``

^^^^^^^^
Response
^^^^^^^^

Never Published Before
^^^^^^^^^^^^^^^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "status" : "ready",
    "message" : "Ready"
  }

Queued for Publishing
^^^^^^^^^^^^^^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "status" : "queued",
    "message" : "Items queued for publishing"
  }

After Publishing
^^^^^^^^^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "status" : "ready",
    "message" : "Last successful publish was for package: {package_id} on {datetime} with {package_size} items"
  }

During Publishing - Busy
^^^^^^^^^^^^^^^^^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "status" : "busy",
    "message" : "Currently publishing item: {item_path} on {datetime}"
  }

During Publishing
^^^^^^^^^^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "status" : "publishing",
    "message" : "Currently publishing package: {package_id} on {datetime}"
  }

Publishing Failed
^^^^^^^^^^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "status" : "stopped",
    "message" : "Stopped while trying to publish item: {item_path} on {datetime}"
  }

Publishing Stopped
^^^^^^^^^^^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "status" : "stopped",
    "message" : "User {username} disabled publishing for site on {datetime}"
  }

Publishing Started
^^^^^^^^^^^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "status" : "started",
    "message" : "User {username} enabled publishing for site on {datetime}"
  }

---------
Responses
---------

+---------+---------------------------------------------------+
|| Status || Response Body                                    |
+=========+===================================================+
|| 200    || See example above.                               |
+---------+---------------------------------------------------+
|| 400    || ``{ "message" : "Invalid parameter(s)" }``       |
+---------+---------------------------------------------------+
|| 401    || ``{ "message" : "Unauthorized" }``               |
+---------+---------------------------------------------------+
|| 404    || ``{ "message" : "Site not found" }``             |
+---------+---------------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
