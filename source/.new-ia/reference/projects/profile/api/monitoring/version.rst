:is-up-to-date: True

.. _crafter-profile-api-monitoring-version:

===========
Get Version
===========

Returns the Crafter Profile JVM version details.

--------------------
Resource Information
--------------------

.. include:: /includes/profile-api-url-prefix.rst

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
    "packageName": "Crafter Profile",
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

+---------+------------------+--------------------------------------------------------------------+
|| Status || Location        || Response Body                                                     |
+=========+==================+====================================================================+
|| 200    ||                 || See example above.                                                |
+---------+------------------+--------------------------------------------------------------------+
|| 400    ||                 || {"errorCode":"OTHER",                                             |
||        ||                 ||  "message":"Required String parameter 'token' is not present"}    |
+---------+------------------+--------------------------------------------------------------------+
|| 401    ||                 || {"errorCode":"ACCESS_DENIED",                                     |
||        ||                 ||  "message":"Management authorization failed, invalid token."}     |
+---------+------------------+--------------------------------------------------------------------+
|| 500    ||                 || ``{ "message" : "Internal server error" }``                       |
+---------+------------------+--------------------------------------------------------------------+
