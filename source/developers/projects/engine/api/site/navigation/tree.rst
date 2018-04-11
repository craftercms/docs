.. _crafter-engine-api-site-navigation-tree:

====
Tree
====

Returns the navigation tree with the specified depth for the specified store URL.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------+
|| HTTP Verb                 || GET                                                        |
+----------------------------+-------------------------------------------------------------+
|| URL                       || ``/api/1/site/navigation/tree``                            |
+----------------------------+-------------------------------------------------------------+
|| Response Formats          || ``JSON``, ``XML``                                          |
+----------------------------+-------------------------------------------------------------+

----------
Parameters
----------

+-------------------+-------------+---------------+----------------------------------------------+
|| Name             || Type       || Required     || Description                                 |
+===================+=============+===============+==============================================+
|| url              || String     || |checkmark|  || The root folder of the tree                 |
+-------------------+-------------+---------------+----------------------------------------------+
|| depth            || Integer    ||              || The depth of the tree (defaults to 1)       |
+-------------------+-------------+---------------+----------------------------------------------+
|| currentPageUrl   || String     ||              || The URL of the current page                 |
+-------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/navigation/tree.json?url=/site/website&depth=2``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  {
    "label":"Home",
    "url":"/",
    "active":false,
    "subItems":[
      {
        "label":"Style",
        "url":"/style",
        "active":false,
        "subItems":[]
      },
      {
        "label":"Health",
        "url":"/health",
        "active":false,
        "subItems":[]
      },
      {
        "label":"Entertainment",
        "url":"/entertainment",
        "active":false,
        "subItems":[]
      },
      {
        "label":"Technology",
        "url":"/technology",
        "active":false,
        "subItems":[]
      }
    ]
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
