.. _crafter-studio-api-publish-status:

==============
Publish Status
==============

Get a Crafter Studio's publishing status for a site.

--------------------
Resource Information
--------------------

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

``Status 200 OK``

.. code-block:: json

  {
    "status" : "idle",
    "message" : "Last successful publish was for item: {item_path} on {yyyy-MM-dd'T'HH:mm'Z'}"
  }

``Status 200 OK``

.. code-block:: json

  {
    "status" : "busy",
    "message" : "Currently publishing item: {item_path} on {yyyy-MM-dd'T'HH:mm'Z'}"
  }

``Status 200 OK``

.. code-block:: json

  {
    "status" : "stopped",
    "message" : "Failed while trying to publish item: {item_path} on {yyyy-MM-dd'T'HH:mm'Z'}"
  }

.. code-block:: json

  {
    "status" : "stopped",
    "message" : "User {username} stopped the site on {yyyy-MM-dd'T'HH:mm'Z'}"
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
