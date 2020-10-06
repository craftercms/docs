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
    "packageVersion": "3.2.0-SNAPSHOT",
    "packageBuild": "8bcdc32ee7e58bd27c485ac1e5f353ece2b60aea",
    "packageBuildDate": "2020-10-05T20:40:24.798Z",
    "osName": "Mac OS X",
    "osVersion": "10.15.6",
    "osArch": "x86_64",
    "javaVersion": "11",
    "javaVendor": "Oracle Corporation",
    "javaVm": "OpenJDK 64-Bit Server VM",
  }

---------
Responses
---------

+---------+------------------+--------------------------------------------------------------------+
|| Status || Location        || Response Body                                                     |
+=========+==================+====================================================================+
|| 200    ||                 || See example above.                                                |
+---------+------------------+--------------------------------------------------------------------+
|| 400    ||                 || ``{"message":"Required String parameter 'token' is not present"}``|
+---------+------------------+--------------------------------------------------------------------+
|| 401    ||                 || ``{"message":"Management authorization failed, invalid token."}`` |
+---------+------------------+--------------------------------------------------------------------+
|| 500    ||                 || ``{ "message" : "Internal server error" }``                       |
+---------+------------------+--------------------------------------------------------------------+
