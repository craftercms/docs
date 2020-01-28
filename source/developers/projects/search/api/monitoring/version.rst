:is-up-to-date: True

.. _crafter-search-api-monitoring-version:

===========
Get Version
===========

Returns the Crafter Search JVM version details.

--------------------
Resource Information
--------------------

.. include:: /includes/search-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/monitoring/version``                                    |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+--------------------------------------+
|| Name                   || Type       || Required     || Description                         |
+=========================+=============+===============+======================================+
|| token                  || String     || |checkmark|  || The authorization token             |
+-------------------------+-------------+---------------+--------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/monitoring/version.json?token=defaultManagementToken``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "packageName": "Crafter Search",
    "packageVersion": "3.1.0-SNAPSHOT",
    "packageBuild": "a68f1ff7ad84d5ecbeaa008f392e4cef0ca02f41",
    "packageBuildDate": "2019-03-07T21:03:05.422Z",
    "osName": "Mac OS X",
    "osVersion": "10.13.6",
    "osArch": "x86_64",
    "javaVersion": "1.8",
    "javaVendor": "Oracle Corporation",
    "javaVm": "Java HotSpot(TM) 64-Bit Server VM",
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
