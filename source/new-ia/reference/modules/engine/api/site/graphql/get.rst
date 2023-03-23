:is-up-to-date: True
:last-updated: 4.0.3

:nosearch:

.. _newIa-crafter-engine-api-site-graphql-query-get:

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
|| HTTP Verb                 || GET                                                        |
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

``GET .../api/1/site/graphql.json?query={page_article{items{title_t}}}``

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
            "title_t": "New ACME Phone Released Today"
          },
          {
            "title_t": "Top Clubs In Virginia"
          },
          {
            "title_t": "Coffee is Good for Your Health"
          },
          {
            "title_t": "5 Popular Diets for Women"
          },
          {
            "title_t": "Top Romantic Valentine Movies"
          },
          {
            "title_t": "10 Tips to Get a Six Pack"
          },
          {
            "title_t": "Women Styles for Winter"
          },
          {
            "title_t": "Men Styles For Winter"
          },
          {
            "title_t": "Top Books For Young Women"
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
