:is-up-to-date: True

.. _crafter-engine-api-site-graphql-query-get:

===========
Query (GET)
===========

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

----------
Parameters
----------

+----------------+----------+---------------+----------------------------------------------------+
|| Name          || Type    || Required     || Description                                       |
+================+==========+===============+====================================================+
|| query         || String  || |checkmark|  || The GraphQL query                                 |
+----------------+----------+---------------+----------------------------------------------------+
|| operationName || String  ||              || The GraphQL operation name                        |
+----------------+----------+---------------+----------------------------------------------------+
|| variables     || String  ||              || A JSON object containing variables for the query  |
+----------------+----------+---------------+----------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/graphql.json?query={page_article{items{title}}}``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "data": {
      "page_article": {
        "items": [
          {
            "title": "New ACME Phone Released Today"
          },
          {
            "title": "Top Clubs In Virginia"
          },
          {
            "title": "Coffee is Good for Your Health"
          },
          {
            "title": "5 Popular Diets for Women"
          },
          {
            "title": "Top Romantic Valentine Movies"
          },
          {
            "title": "10 Tips to Get a Six Pack"
          },
          {
            "title": "Women Styles for Winter"
          },
          {
            "title": "Men Styles For Winter"
          },
          {
            "title": "Top Books For Young Women"
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
