.. _crafter-studio-api-monitor-memory:

======
Memory
======

Get a Crafter Studio's memory details.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/monitor/memory.json``                    |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Anonymous                                                        |
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

``GET .../api/1/monitor/memory.json``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :force:
  :linenos:

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
