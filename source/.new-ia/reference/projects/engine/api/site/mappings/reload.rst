:is-up-to-date: True

.. _newIa-crafter-engine-api-site-mappings-reload:

===============
Reload Mappings
===============

Reload the mappings used to resolve sites by Crafter Engine. This endpoint is only available when
Crafter Engine is in mapped multi-tenant mode.

--------------------
Resource Information
--------------------

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/site/mappings/reload``                                  |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/mappings/reload``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  { "message": "Mappings reloaded" }

---------
Responses
---------

+--------+------------------------------+--------------------------------------------------------+
|| Status|| Location                    || Response Body                                         |
+========+==============================+========================================================+
|| 200   ||                             || See example above.                                    |
+--------+------------------------------+--------------------------------------------------------+
|| 400   ||                             | .. code-block:: json                                   |
||       ||                             |                                                        |
||       ||                             |   { "message" : "The current resolver is not a         |
||       ||                             |   ReloadableMappingsSiteResolver. No mappings to       |
||       ||                             |   reload" }                                            |
+--------+------------------------------+--------------------------------------------------------+
