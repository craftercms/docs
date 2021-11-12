:is-up-to-date: True

.. _crafter-engine-api-site-elasticsearch-search:

======
Search
======

Performs a search operation in the Elasticsearch index of the current site resolved for the request and optional other indexes.
See :ref:`search-elasticsearch-multi-index-query` for more information on performing a multiple index search.

.. note::
	The request body must be a valid Elasticsearch JSON query as described in the 
	`official docs <https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html>`_

--------------------
Resource Information
--------------------

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------+
|| HTTP Verb                 || POST                                                       |
+----------------------------+-------------------------------------------------------------+
|| URL                       || ``/api/1/site/elasticsearch/search``                       |
+----------------------------+-------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                   |
+----------------------------+-------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+---------------------------------------+
|| Name                   || Type       || Required     || Description                          |
+=========================+=============+===============+=======================================+
|| index                  || String     ||              || Comma separated list of index names  |
||                        ||            ||              || to be searched in addition to the    |
||                        ||            ||              || current site                         |
+-------------------------+-------------+---------------+---------------------------------------+

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
    "size": 1,
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
    "took": 41,
    "timed_out": false,
    "_shards": {
      "total": 5,
      "successful": 5,
      "skipped": 0,
      "failed": 0
    },
    "hits": {
      "total": 28,
      "max_score": 1.0,
      "hits": [
        {
          "_index": "editorial-preview_v1",
          "_type": "_doc",
          "_id": "f4a1af43fed0b4e246abb3a8c7d7323d",
          "_score": 1.0,
          "_source": {
            "localId": "/site/components/articles-widget/latest-articles-widget.xml"
          }
        }
      ]
    }
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
