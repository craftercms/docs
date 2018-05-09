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

  [
    {
      "46b0f2effb636293234e10749dd9f5a4": {
        "size": 147,
        "localHeapSize": 147,
        "localOffHeapSize": 0,
        "localDiskSize": 0,
        "remoteSize": 0,
        "writerQueueLength": 0,
      }
    }
  ]

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
