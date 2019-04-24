:is-up-to-date: True

.. _crafter-engine-api-site-cache-statistics:

==========
Statistics
==========

Get the statistics for all cache scopes for the current site context.

.. note::
  The result of this call can change based on the configuration of the system, for example when Crafter
  Engine is configured in preview mode the cache will be disabled and the result will always be an empty
  object. There could be also different statistics returned depending on the cache implementation that
  is being used.

--------------------
Resource Information
--------------------

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/site/cache/statistics``                                 |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``, ``XML``                                                |
+----------------------------+-------------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/cache/statistics``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "size": 17,
    "localHeapSize": 17,
    "localOffHeapSize": 0,
    "localDiskSize": 0,
    "cacheHitRatio": 1,
    "cacheHitCount": 4,
    "cacheMissCount": 25,
    "cacheMissExpiredCount": 0,
    "cacheMissNotFoundCount": 25
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
