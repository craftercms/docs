:is-up-to-date: True

.. _crafter-studio-api-content-get-item-orders:

===============
Get Item Orders
===============

Get item orders.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/content/get-item-orders.json``           |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || N/A                                                              |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site_id      || String     || |checkmark|  || Site to use                                     |
+---------------+-------------+---------------+--------------------------------------------------+
|| path         || String     || |checkmark|  || Path of the content                             |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

    GET .../api/1/services/api/1/content/get-item-orders.json?site_id=mysite&path=/site/website/style/index.xml&edit=true

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
    :linenos:

    {
        "order":
            [
                {
                    "name":"Style",
                    "id":"/site/website/style/index.xml",
                    "disabled":"false",
                    "order":8000.0,
                    "placeInNav":"true"
                },
                {
                    "name":"Health",
                    "id":"/site/website/health/index.xml",
                    "disabled":"false",
                    "order":9000.0,
                    "placeInNav":"true"
                },
                {
                    "name":"Entertainment",
                    "id":"/site/website/entertainment/index.xml",
                    "disabled":"false",
                    "order":10000.0,
                    "placeInNav":"true"
                },
                {
                    "name":"Technology",
                    "id":"/site/website/technology/index.xml",
                    "disabled":"false",
                    "order":11000.0,
                    "placeInNav":"true"
                }
            ]
    }


---------
Responses
---------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+
