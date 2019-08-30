:is-up-to-date: True

.. _crafter-studio-api-dependency-calculate-dependencies:

======================
Calculate Dependencies
======================

Calculate and return dependencies for one or more items.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+-----------------------+-------------------------------------------------------------------------+
|| HTTP Verb            || POST                                                                   |
+-----------------------+-------------------------------------------------------------------------+
|| URL                  || `/api/1/services/api/1/dependency/calculate-dependencies.json``        |
+-----------------------+-------------------------------------------------------------------------+
|| Response Formats     || ``JSON``                                                               |
+-----------------------+-------------------------------------------------------------------------+
|| Required Role        || Site member                                                            |
+-----------------------+-------------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site_id      || String     || |checkmark|  || Site to use                                     |
+---------------+-------------+---------------+--------------------------------------------------+
|| item         || String     || |checkmark|  || Path to the item(s)                             |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

.. code-block:: guess

	POST .../api/1/services/api/1/dependency/calculate-dependencies.json?site_id=mysite

.. code-block:: json
    :linenos:

    {
        "entities" : [
            {
                "item" : "/path/to/item1.xml",
            },
            {
                "item" : "/path/to/item2.xml",
            }
        ]
    }

--------
Response
--------

.. code-block:: json
    :linenos:

    {
        "result" : {
            "entities" : [
                {
                    "item" : "/path/to/item1.xml",
                    "dependencies" : [
                        {
                            "item" : "/path/to/dep1.xml"
                        },
                        {
                            "item" : "/path/to/dep2.xml"
                        }
                    ]
                },
                {
                    "item" : "/path/to/item2.xml",
                    "dependencies" : [
                        {
                            "item" : "/path/to/dep1.xml"
                        },
                        {
                            "item" : "/path/to/dep2.xml"
                        }
                    ]
                },
            ]
        }
    }

---------
Responses
---------

+---------+---------------------------------------------------+
|| Status || Response Body                                    |
+=========+===================================================+
|| 200    || ``{ "message" : "OK" }``                         |
+---------+---------------------------------------------------+
|| 400    || ``{ "message" : "Invalid parameter(s)" }``       |
+---------+---------------------------------------------------+
|| 400    || ``{ "message" : "Bad Request" }``                |
+---------+---------------------------------------------------+
|| 401    || ``{ "message" : "Unauthorized" }``               |
+---------+---------------------------------------------------+
|| 404    || ``{ "message" : "Site not found" }``             |
+---------+---------------------------------------------------+
|| 500    || ``{ "message" : "Internal server error.``        |
||        || ``ACTUAL_EXCEPTION" }``                          |
+---------+---------------------------------------------------+
