:is-up-to-date: True
:last-updated: 4.0.3

.. _crafter-engine-api-site-graphql-query-post:

============
Query (POST)
============

Performs a query in the GraphQL instance of the current site resolved for the request.

.. note::
	The ``query`` string must be a valid GraphQL query as described in the 
	`official docs <https://graphql.org/learn/queries>`_

--------------------
Resource Information
--------------------

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------+
|| HTTP Verb                 || POST                                                       |
+----------------------------+-------------------------------------------------------------+
|| URL                       || ``/api/1/site/graphql``                                    |
+----------------------------+-------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                   |
+----------------------------+-------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST .../api/1/site/graphql.json``

.. code-block:: json
  :linenos:

  {
    "query": "query ArticlesByAuthor($author:String) {
      page_article {
        total
        items {
          title_t
          author_s(filter:{equals:$author})
          date_dt
        }
      }
    }",
    "variables": "{
      \"author\": \"Jane Doe\"
    }"
  }
  

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "data": {
      "page_article": {
        "total": 4,
        "items": [
          {
            "title_t": "Women Styles for Winter",
            "author_s": "Jane Doe",
            "date_dt": "2021-01-03T05:00:00Z"
          },
          {
            "title_t": "Top Books For Young Women",
            "author_s": "Jane Doe",
            "date_dt": "2020-12-28T05:00:00Z"
          },
          {
            "title_t": "5 Popular Diets for Women",
            "author_s": "Jane Doe",
            "date_dt": "2021-03-14T04:00:00Z"
          },
          {
            "title_t": "Top Romantic Valentine Movies",
            "author_s": "Jane Doe",
            "date_dt": "2021-02-14T05:00:00Z"
          }
        ]
      }
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
