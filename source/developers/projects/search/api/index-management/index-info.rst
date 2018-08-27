.. _crafter-search-api-index-info:

==============
Get Index Info
==============

Returns information about an index. The information returned depends on the search engine used
(currently just Solr).

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/2/admin/index/info/:id``                                  |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+----------------------------------------+
|| Name                   || Type       || Required     || Description                           |
+=========================+=============+===============+========================================+
|| id                     || String     || |checkmark|  || The index ID.                         |
+-------------------------+-------------+---------------+----------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/2/admin/index/info/mysite``

^^^^^^^^^^^^^^^
Response (Solr)
^^^^^^^^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "name": "mysite",
    "instanceDir": "/opt/solr/solr-6.4.0/server/solr/configsets/crafter_configs",
    "dataDir": "/opt/solr/solr-6.4.0/server/solr/mysite/data/",
    "config": "solrconfig.xml",
    "schema": "managed-schema",
    "startTime": 1487112987142,
    "uptime": 3239865,
    "index": {
      "numDocs": 0,
      "maxDoc": 0,
      "deletedDocs": 0,
      "indexHeapUsageBytes": 0,
      "version": 2,
      "segmentCount": 0,
      "current": true,
      "hasDeletions": false,
      "directory": "org.apache.solr.core.MetricsDirectoryFactory$MetricsDirectory:MetricsDirectory(NRTCachingDirectory(MMapDirectory@/opt/solr/solr-6.4.0/server/solr/test/data/index lockFactory=org.apache.lucene.store.NativeFSLockFactory@3622a183; maxCacheMB=48.0 maxMergeSizeMB=4.0))",
      "segmentsFile": "segments_1",
      "segmentsFileSizeInBytes": 71,
      "userData": {},
      "sizeInBytes": 71,
      "size": "71 bytes"
    }
  }

---------
Responses
---------

+---------+-------------------------------------+--------------------------------------------------------------------+
|| Status || Location                           || Response Body                                                     |
+=========+=====================================+====================================================================+
|| 200    ||                                    || See example above.                                                |
+---------+-------------------------------------+--------------------------------------------------------------------+
|| 404    ||                                    || ``{ "message" : "Index not found" }``                             |
+---------+-------------------------------------+--------------------------------------------------------------------+
|| 500    ||                                    || ``{ "message" : "Internal server error" }``                       |
+---------+-------------------------------------+--------------------------------------------------------------------+
|| 503    ||                                    || ``{ "message" : "Service unavailable, please try again later" }`` |
+---------+-------------------------------------+--------------------------------------------------------------------+
