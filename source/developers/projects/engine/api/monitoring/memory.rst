.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-engine-api-monitoring-memory:

================
Get Memory Stats
================

Returns the Crafter Engine JVM memory details.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/monitoring/memory``                                     |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/monitoring/memory.json``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  [
    {
      "name":"Heap MemoryMonitor",
      "init":"1 GB",
      "used":"1 GB",
      "committed":"2 GB",
      "max":"3 GB"
    },
    {
      "name":"Non Heap MemoryMonitor",
      "init":"2 MB",
      "used":"273 MB",
      "committed":"277 MB",
      "max":"-1 bytes"
    },
    {
      "name":"Code Cache",
      "init":"2 MB",
      "used":"84 MB",
      "committed":"84 MB",
      "max":"240 MB"
    },
    {
      "name":"Metaspace",
      "init":"0 bytes",
      "used":"168 MB",
      "committed":"171 MB",
      "max":"-1 bytes"
    },
    {
      "name":"Compressed Class Space",
      "init":"0 bytes",
      "used":"20 MB",
      "committed":"21 MB",
      "max":"1 GB"
    },
    {
      "name":"PS Eden Space",
      "init":"256 MB",
      "used":"886 MB",
      "committed":"1 GB",
      "max":"1 GB"
    },
    {
      "name":"PS Survivor Space",
      "init":"42 MB",
      "used":"38 MB",
      "committed":"39 MB",
      "max":"39 MB"
    },
    {
      "name":"PS Old Gen",
      "init":"683 MB",
      "used":"206 MB",
      "committed":"1 GB",
      "max":"2 GB"
    }
  ]

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
