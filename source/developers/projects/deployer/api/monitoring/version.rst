:is-up-to-date: True

.. _crafter-deployer-api-monitor-version:

=======
Version
=======

Get a Crafter Deployer's version details.

--------------------
Resource Information
--------------------

.. include:: /includes/deployer-api-url-prefix.rst

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

``GET .../api/1/monitor/version?token=defaultManagementToken``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "packageName": "Crafter Deployer",
    "packageVersion": "3.2.0-SNAPSHOT",
    "packageBuild": "bafd216ffff61b64fba1f2a8917e2b596b0a950a",
    "packageBuildDate": "2020-10-05T20:40:50.580Z",
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
|| 500    ||                 || ``{ "message" : "Internal server error.``                         |
||        ||                 || ``ACTUAL_EXCEPTION" }``                                           |
+---------+------------------+--------------------------------------------------------------------+
