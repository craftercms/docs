.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-engine-api-monitoring-version:

===========
Get Version
===========

Returns the Crafter Engine JVM version details.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/monitoring/version``                                    |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/monitoring/version.json``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "name":"Sun Java System Application Server",
    "packageVersion":"1.1",
    "build":null,
    "build_date":"1969-12-31T18:00:00-0600",
    "java_version":"1.8",
    "java_vendor":"Oracle Corporation",
    "java_runtime":"Java Virtual Machine Specification",
    "java_vm":"Java HotSpot(TM) 64-Bit Server VM",
    "system_encoding":"UTF-8",
    "operating_system":"Mac OS X-10.11.6",
    "os_architecture":"x86_64",
    "application_server_container":"",
    "jvm_input_arguments":"[-Djava.util.logging.config.file=..., -Xss1024K, -Xms1G, -Xmx4G, ...]",
    "datetime":"2017-06-07T15:38:47-0600",
    "jvm_version":"1.8",
    "jvm_vendor":"Oracle Corporation",
    "jvm_implementation_version":"25.77-b03"
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
