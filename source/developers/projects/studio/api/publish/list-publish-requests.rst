:is-up-to-date: True

.. _crafter-studio-api-list-publish-requests:

=====================
List Publish Requests
=====================

List publish requests status for a site.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+--------------------------+---------------------------------------------------------------------+
|| HTTP Verb               || GET                                                                |
+--------------------------+---------------------------------------------------------------------+
|| URL                     || ``/api/1/services/api/1/publish/list-publish-requests.json``       |
+--------------------------+---------------------------------------------------------------------+
|| Response Formats        || ``JSON``                                                           |
+--------------------------+---------------------------------------------------------------------+
|| Required Role           || Site admin, or has publish permission in this site                 |
+--------------------------+---------------------------------------------------------------------+


----------
Parameters
----------

+---------------------+-------------+---------------+--------------------------------------------------+
|| Name               || Type       || Required     || Description                                     |
+=====================+=============+===============+==================================================+
|| site_id            || String     || |checkmark|  || Site to use                                     |
+---------------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

.. code-block:: guess

	GET .../api/1/services/api/1/publish/list-publish-requests.json?site_id=mysite



--------
Response
--------

.. code-block:: guess
    :linenos:

    {
        "site_id" : "mysite",
        "publish_requests" : [
            "publish_request" : {
                "package_id" : "b13f714d-b533-4828-a1dc-5fd1c972fabb",
                "environment" : "live",
                "scheduled_date" : ""2018-07-17T19:57:26+02:00"
                "paths" : [
                    "/site/website/index.xml",
                    "/site/website/about/index.xml",
                    "/site/website/search/index.xml"
                ]
            },
            "publish_request" : {
                "package_id" : "cac0cd99-beaa-4b00-b3b3-f2829cace70a",
                "environment" : "live",
                "scheduled_date" : ""2018-07-20T11:24:58+02:00"
                "paths" : [
                    "/site/website/privacy/index.xml",
                    "/site/website/contact/index.xml"
                ]
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
|| 404    || ``{ "message" : "Site not found" }``             |
+---------+---------------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
