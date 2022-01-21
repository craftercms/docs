:is-up-to-date: True

.. _crafter-studio-api-cmis-clone:

==========================================
Clone a CMIS File into Studio (deprecated)
==========================================

Clone a file from a CMIS repository to Studio provided paths.

.. important::
    This API is deprecated and provided only as a reference.  Please see :studio_swagger_url:`#/cmis/cmisClone` for the current version.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/cmis/clone.json``                        |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || Admin, write access to the site.                                 |
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
|| cmis_path    || String     ||              || Path to read the asset from CMIS repo (source). |
+---------------+-------------+---------------+--------------------------------------------------+
|| studio_path  || String     ||              || Path to save the asset in Studio (destination). |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST /api/1/services/api/1/cmis/clone.json```

.. code-block:: json
  :linenos:

  {
        "site_id" : "my-site",
	"cmis_repo_id" : "myCMISRepo",
	"cmis_path" : "...",
	"studio_path" : "..."
  }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
        "message" : "OK"
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
|| 400    || ``{ "message" : "Bad Request" }``                |
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
|| 404    || ``{ "message" : "Studio path not found.``        |
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
