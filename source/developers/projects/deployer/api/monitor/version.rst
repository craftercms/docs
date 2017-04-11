.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-deployer-api-monitor-version:

=======
Version
=======

Get a Crafter Deployer's version details.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/monitor/version``                                       |
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

``GET .../api/1/monitor/version``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "name" : "deployer",
    "version" : "3.0.0-SNAPSHOT",
    "build" : "7630f6bbaaa86977896bfda00e70a397964d9826",
    "build_datetime" : "yyyy-MM-dd'T'HH:mm'Z'",
    "java_version" : "1.8.0_102",
    "java_vendor" : "Oracle Corporation",
    "jvm_version" : "1.8",
    "jvm_vendor" : "Oracle Corporation",
    "jvm_implementation_version" : "25.102-b14",
    "java_runtime" : "Java(TM) SE Runtime Environment",
    "java_vm" : "Java HotSpot(TM) 64-Bit Server VM",
    "System Encoding" : "UTF-8",
    "operating_system" : "Linux 3.13.0.103-generic",
    "os_architecture" : "amd64",
    "application_server_container" : "Apache Tomcat/8.0.33",
    "jvm_input_arguments" : "-Xms8092m -Xmx8092m -Duser.timezone=EDT",
    "datetime" : "yyyy-MM-dd'T'HH:mm'Z'"
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
