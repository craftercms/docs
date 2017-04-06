.. include:: /includes/unicode-checkmark.rst

.. _crafter-deployer-api-monitor-memory:

======
Memory
======

Get a Crafter Deployer's memory details.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/monitor/memory``                                        |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

None.

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/monitor/memory``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    [
      {
        "name" : "Heap Memory",
        "init" : "128mb",
        "used" : "512mb",
        "committed" : "256mb",
        "max" : "1GB",
      },
      {
        "name" : "Non Heap Memory",
        "init" : "128mb",
        "used" : "512mb",
        "committed" : "256mb",
        "max" : "1GB",
      },
      {
        "name" : "Code Cache",
        "init" : "128mb",
        "used" : "512mb",
        "committed" : "256mb",
        "max" : "1GB",
      },
      {
        "name" : "MetaSpace",
        "init" : "128mb",
        "used" : "512mb",
        "committed" : "256mb",
        "max" : "1GB",
      },
      {
        "name" : "Compressed Class Space",
        "init" : "128mb",
        "used" : "512mb",
        "committed" : "256mb",
        "max" : "1GB",
      },
      {
        "name" : "PS Eden Space",
        "init" : "128mb",
        "used" : "512mb",
        "committed" : "256mb",
        "max" : "1GB",
      }, 
      {
        "name" : "PS Survivor Space",
        "init" : "128mb",
        "used" : "512mb",
        "committed" : "256mb",
        "max" : "1GB",
      },
      {
        "name" : "PS Old Gen",
        "init" : "128mb",
        "used" : "512mb",
        "committed" : "256mb",
        "max" : "1GB",
      },
    ]
  }

---------
Responses
---------

+---------+-------------------------------------+-------------------------------------------------------+
|| Status || Location                           || Response Body                                        |
+=========+=====================================+=======================================================+
|| 200    ||                                    || See example above.                                   |
+---------+-------------------------------------+-------------------------------------------------------+
|| 500    ||                                    || ``{ "message" : "Internal server error.``            |
||        ||                                    || ``ACTUAL_EXCEPTION" }``                              |
+---------+-------------------------------------+-------------------------------------------------------+
