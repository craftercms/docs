.. _crafter-studio-api-site-get-available-blueprints:

========================
Get Available Blueprints
========================

Get available site blueprints to create new site.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/site/get-available-blueprints.json``     |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             ||                                                                  |
+----------------------------+-------------------------------------------------------------------+

-------
Example
-------

.. code-block:: guess

	GET .../api/1/services/api/1/site/get-available-blueprints.json

.. code-block:: json

    [
        {
            "id" : "empty",
            "label" : "Empty",
            "description" : "",
            "screenshots" : null
        },
        {
            "id" : "headless_blog",
            "label" : "Headless_blog",
            "description" : "",
            "screenshots" : null
        },
        {
            "id" : "headless_store",
            "label" : "Headless_store",
            "description" : "",
            "screenshots" : null
        },
        {
            "id" : "website_editorial",
            "label" : "Website_editorial",
            "description" : "",
            "screenshots" : null
        }
    ]

--------
Response
--------

+---------+------------------------------------------+---------------------------------------------------+
|| Status || Location                                || Response Body                                    |
+=========+==========================================+===================================================+
|| 200    ||                                         || See example above.                               |
+---------+------------------------------------------+---------------------------------------------------+
