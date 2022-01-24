:is-up-to-date: True

.. _newIa-crafter-studio-api-cmis-upload:

===========================================
Upload an asset File into CMIS (deprecated)
===========================================

Upload an asset file to CMIS repository.

.. important::
    This API is deprecated and provided only as a reference.  Please see :studio_swagger_url:`#/cmis/cmisUpload` for the current version.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+--------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                              |
+----------------------------+--------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/cmis/upload.json``                        |
+----------------------------+--------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                          |
+----------------------------+--------------------------------------------------------------------+
|| Required Role             || Admin, write access to the site.                                  |
+----------------------------+--------------------------------------------------------------------+

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
|| cmis_path    || String     || |checkmark|  || Path to read the asset from CMIS repo (source). |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``POST /api/1/services/api/1/cmis/clone.json```


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
|| 408    || ``{ "message" : "CMIS Timeout.``                 |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
|| 503    || ``{ "message" : "CMIS Unavailable.``             |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
