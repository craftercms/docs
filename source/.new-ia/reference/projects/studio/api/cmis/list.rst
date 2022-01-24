:is-up-to-date: True

.. _newIa-crafter-studio-api-cmis-list:

========================================
List CMIS Files and Folders (deprecated)
========================================

List files and folders in a CMIS repository with an optional range for pagination.

.. important::
    This API is deprecated and provided only as a reference.  Please see :studio_swagger_url:`#/cmis/cmisList` for the current version.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/cmis/list.json``                         |
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

``GET /api/1/services/api/1/cmis/list.json?site_id=my-site&cmis_repo_id=repo1&path=/assets```

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

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
|| 400    || ``{ "message" : "Invalid CMIS parameter(s).``    |
||        || ``Invalid CMIS data source configuration``       |
||        || ``(hostname, port number, etc.), please contact``|
||        || ``your site administrator.``                     |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
|| 401    || ``{ "message" : "Unauthorized" }``               |
+---------+---------------------------------------------------+
|| 401    || ``{ "message" : "CMIS Unauthorized:``            |
||        || ``Invalid username or password in CMIS``         |
||        || ``data source configuration, please contact``    |
||        || ``your site administrator.``                     |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
|| 404    || ``{ "message" : "CMIS Path Not Found.``          |
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
