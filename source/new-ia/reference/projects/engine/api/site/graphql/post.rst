:is-up-to-date: True

.. _newIa-crafter-engine-api-site-graphql-query-post:

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
          title
          author(filter:{matches:$author})
          date_dt
        }
      }
    }",
    "variables": "{
      \"author\": \"Jane\"
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
        "total": 9,
        "items": [
          {
            "title": "New ACME Phone Released Today",
            "author": "John Doe",
            "date_dt": "2016-07-03T04:00:00Z"
          },
          {
            "title": "Top Clubs In Virginia",
            "author": "John Doe",
            "date_dt": "2017-03-05T05:00:00Z"
          },
          {
            "title": "Coffee is Good for Your Health",
            "author": "John Doe",
            "date_dt": "2016-06-14T04:00:00Z"
          },
          {
            "title": "5 Popular Diets for Women",
            "author": "Jane Doe",
            "date_dt": "2017-03-14T04:00:00Z"
          },
          {
            "title": "Top Romantic Valentine Movies",
            "author": "Jane Doe",
            "date_dt": "2017-02-14T05:00:00Z"
          },
          {
            "title": "10 Tips to Get a Six Pack",
            "author": "John Doe",
            "date_dt": "2017-02-08T05:00:00Z"
          },
          {
            "title": "Women Styles for Winter",
            "author": "Jane Doe",
            "date_dt": "2017-01-03T05:00:00Z"
          },
          {
            "title": "Men Styles For Winter",
            "author": "John Doe",
            "date_dt": "2017-01-05T05:00:00Z"
          },
          {
            "title": "Top Books For Young Women",
            "author": "Jane Doe",
            "date_dt": "2016-12-28T05:00:00Z"
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
