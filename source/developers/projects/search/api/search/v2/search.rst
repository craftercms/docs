.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-search-api-search-v2-search:

================
Search Documents
================

Returns the result for a given query.

--------------------
Resource Information
--------------------

+----------------------------+-----------------------------------------------------+
|| HTTP Verb                 || GET                                                |
+----------------------------+-----------------------------------------------------+
|| URL                       || ``/api/2/search``                                  |
+----------------------------+-----------------------------------------------------+
|| Response Formats          || ``JSON``                                           |
+----------------------------+-----------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+----------------------------------------+
|| Name                   || Type       || Required     || Description                           |
+=========================+=============+===============+========================================+
|| index_id               || String     ||              || The index ID                          |
+-------------------------+-------------+---------------+----------------------------------------+

^^^^^^^^^^^^^^^^^^^^^
Solr Query Parameters
^^^^^^^^^^^^^^^^^^^^^

.. NOTE::
  This table includes the most often used parameters, but the request may include
  any valid Solr parameter.

+---------------+---------------------------------------------------------------+
|| Name         ||  Description                                                 |
+===============+===============================================================+
|| q            || Main query to search documents, must follow Solr syntax      |
+---------------+---------------------------------------------------------------+
|| fq           || Additional filter queries, must follow Solr syntax           |
+---------------+---------------------------------------------------------------+
|| fl           || List of fields to return for the matched documents           |
+---------------+---------------------------------------------------------------+
|| hl           || Enable text highlight                                        |
+---------------+---------------------------------------------------------------+
|| hl.fl        || List of fields to apply text highlight                       |
+---------------+---------------------------------------------------------------+
|| hl.snippets  || Maximum number of highlighted snippeds for each field        |
+---------------+---------------------------------------------------------------+
|| hl.fragsize  || Approximate number of characters to include in each snippet  |
+---------------+---------------------------------------------------------------+
|| start        || Offset for the list of matched documents                     |
+---------------+---------------------------------------------------------------+
|| rows         || Number of matched documents to return                        |
+---------------+---------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

  GET .../api/2/search/search?index_id=editorial&q=*&fq=content-type%3A%22page%2Farticle%22&rows=2&fl=localId

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
  "responseHeader": {
    "status": 0,
    "QTime": 1,
    "params": {
      "q": "*",
      "fl": "localId",
      "fq": [
        "content-type:\"page/article\"",
        "-disabled:\"true\"",
        "-expired_dt:[* TO NOW]"
      ],
      "index_id": "editorial",
      "rows": "2",
      "wt": "javabin",
      "version": "2"
    }
  },
  "response": {
    "start": 0,
    "maxScore": null,
    "numFound": 9,
    "documents": [
      {
        "localId": "/site/website/articles/2017/1/men-styles-for-winter/index.xml"
      },
      {
        "localId": "/site/website/articles/2017/1/women-styles-for-winter/index.xml"
      }
    ]
  }
  }

---------
Responses
---------

+---------+-------------------------------------+------------------------------------------------+
|| Status || Location                           || Response Body                                 |
+=========+=====================================+================================================+
|| 200    || ``.../api/2/search/search``        || See example above.                            |
+---------+-------------------------------------+------------------------------------------------+
|| 500    ||                                    || ``{ "message" : "Internal server error" }``   |
+---------+-------------------------------------+------------------------------------------------+
