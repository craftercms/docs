.. _crafter-engine-api-site-elasticsearch-search:

======
Search
======

Performs a search operation in the ElasticSearch index of the current site resolved for the request.

.. note::
	The request body must be a valid ElasticSearch JSON query as described in the 
	`official docs <https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html>`_

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------+
|| HTTP Verb                 || POST                                                       |
+----------------------------+-------------------------------------------------------------+
|| URL                       || ``/api/1/site/elasticsearch/search``                       |
+----------------------------+-------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                   |
+----------------------------+-------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST .../api/1/site/elasticsearch/search.json``

.. code-block:: json
  :linenos:

  {
    "_source": "localId",
    "query" : {
      "match_all" : {}
    }
  }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "scrollId": null,
    "totalShards": 5,
    "successfulShards": 5,
    "skippedShards": 0,
    "shardFailures": [],
    "clusters": {
        "total": 0,
        "successful": 0,
        "skipped": 0,
        "fragment": true
    },
    "hits": {
        "hits": [
            {
                "score": 1,
                "id": "f4a1af43fed0b4e246abb3a8c7d7323d",
                "type": "_doc",
                "nestedIdentity": null,
                "version": -1,
                "fields": {},
                "highlightFields": {},
                "sortValues": [],
                "matchedQueries": [],
                "explanation": null,
                "shard": null,
                "index": "editorial",
                "clusterAlias": null,
                "sourceAsMap": {
                    "localId": "/site/components/articles-widget/latest-articles-widget.xml"
                },
                "innerHits": null,
                "sourceRef": {
                    "childResources": [],
                    "fragment": true
                },
                "sourceAsString": "{\"localId\":\"/site/components/articles-widget/latest-articles-widget.xml\"}",
                "fragment": false
            }
        ],
        "totalHits": 31,
        "maxScore": 1,
        "fragment": true
    },
    "aggregations": null,
    "suggest": null,
    "terminatedEarly": null,
    "numReducePhases": 1,
    "took": {
        "micros": 3000,
        "microsFrac": 3000,
        "millisFrac": 3,
        "secondsFrac": 0.003,
        "minutesFrac": 0.00005,
        "hoursFrac": 8.333333333333333e-7,
        "daysFrac": 3.472222222222222e-8,
        "days": 0,
        "stringRep": "3ms",
        "nanos": 3000000,
        "hours": 0,
        "minutes": 0,
        "seconds": 0,
        "millis": 3
    },
    "failedShards": 0,
    "profileResults": {},
    "timedOut": false,
    "fragment": false
  }

---------
Responses
---------

+---------+----------------------------------+---------------------------------------------------+
|| Status || Location                        || Response Body                                    |
+=========+==================================+===================================================+
|| 200    ||                                 || See example above.                               |
+---------+----------------------------------+---------------------------------------------------+
|| 500    ||                                 || ``"Internal server error"``                      |
+---------+----------------------------------+---------------------------------------------------+
