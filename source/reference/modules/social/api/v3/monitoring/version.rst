:is-up-to-date: True
:last-updated: 4.0.0



.. _crafter-social-api-monitoring-version:

===========
Get Version
===========

Returns the Crafter Social JVM version details.

--------------------
Resource Information
--------------------

.. include:: /includes/social-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/3/monitoring/version``                                    |
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

``GET .../api/3/monitoring/version.json?token=defaultManagementToken``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "packageName": "Crafter Social",
    "packageVersion": "3.2.0-SNAPSHOT",
    "packageBuild": "a68f1ff7ad84d5ecbeaa008f392e4cef0ca02f41",
    "packageBuildDate": "2020-03-07T21:03:05.422Z",
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
|| 400    ||                 || {"error":"Required String parameter 'token' is not present",      |
||        ||                 ||  "message":"Required String parameter 'token' is not present"}    |
+---------+------------------+--------------------------------------------------------------------+
|| 401    ||                 || {"error":"Management authorization failed, invalid token.",       |
||        ||                 ||  "message":"Management authorization failed, invalid token."}     |
+---------+------------------+--------------------------------------------------------------------+
|| 500    ||                 || ``{ "message" : "Internal server error" }``                       |
+---------+------------------+--------------------------------------------------------------------+
