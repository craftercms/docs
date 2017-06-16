.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-studio-api-cmis-search:

===========
Search CMIS
===========

Search files and folders in a CMIS repository with an optional range for pagination.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/cmis/search.json``                       |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Read access to site                                              |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site_id      || String     || |checkmark|  || Site ID to use                                  |
+---------------+-------------+---------------+--------------------------------------------------+
|| cmis_repo_id || String     || |checkmark|  || CMIS repository ID as specified in Site Config  |
||              ||            ||              || CMIS Config (cmis-config.xml)                   |
+---------------+-------------+---------------+--------------------------------------------------+
|| search_term  || String     || |checkmark|  || CMIS search term to use                         |
+---------------+-------------+---------------+--------------------------------------------------+
|| path         || String     ||              || Path to look under. Note this will be under     |
||              ||            ||              || the `base path` specified in cmis-config.xml    |
+---------------+-------------+---------------+--------------------------------------------------+
|| start        || Integer    ||              || Start offset                                    |
+---------------+-------------+---------------+--------------------------------------------------+
|| number       || Integer    ||              || Number of records to retrieve                   |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET /api/1/services/api/1/cmis/search.json?site_id=mySite&cmis_repo_id=repo1&search_term=*&path=/assets```

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  {
    "total": 2
    "items" :
    [
      {
        "item_id" : "a872bd88-fbda-4dd6-93b2-df6d1e9d5791",
        "item_name" : "presentation.pdf",
        "mime_type" : "application/pdf",
        "size" : "23068672"
      },
      {
        "item_id" : "a872bd98-fbda-4dd6-93b2-df6d1e9d5f82",
        "item_name" : "image.png",
        "mime_type" : "image/png",
        "size" : "327680"
      }
    ]
  }

---------
Responses
---------

+---------+---------------------------------------------------+
|| Status || Response Body                                    |
+=========+===================================================+
|| 200    || See example above.                               |
+---------+---------------------------------------------------+
|| 400    || ``{ "message" : "Invalid parameter(s)" }``       |
+---------+---------------------------------------------------+
|| 401    || ``{ "message" : "Unauthorized" }``               |
+---------+---------------------------------------------------+
|| 401    || ``{ "message" : "CMIS Unauthorized.``            |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
|| 408    || ``{ "message" : "CMIS Timeout.``                 |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
|| 503    || ``{ "message" : "CMIS Unavailable.``             |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
