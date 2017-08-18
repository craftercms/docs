.. _crafter-studio-api-clipboard-copy-item:

=========
Copy Item
=========

Copy item to clipboard.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/clipboard/copy-item.json``               |
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
|| site         || String     || |checkmark|  || Site to use                                     |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: guess

    POST .../api/1/services/api/1/clipboard/copy-item.json?site=mysite

.. code-block:: json
    :linenos:

    {
      "item":
        [
          {
            "uri":"/site/website/articles",
            "children":
              [
                {
                  "uri":"/site/website/articles/crafter-level-descriptor.level.xml"
                },
                {
                  "uri":"/site/website/articles/2016",
                  "children":
                    [
                      {
                        "uri":"/site/website/articles/2016/12",
                        "children":
                          [
                            {
                              "uri":"/site/website/articles/2016/12/top-books-for-young-women/index.xml"
                            }
                          ]
                      },
                      {
                        "uri":"/site/website/articles/2016/6",
                        "children":
                          [
                            {
                              "uri":"/site/website/articles/2016/6/coffee-is-good-for-your-health/index.xml"
                            }
                          ]
                      },
                      {
                        "uri":"/site/website/articles/2016/7",
                        "children":
                          [
                            {
                              "uri":"/site/website/articles/2016/7/new-acme-phone-released-today/index.xml"
                            }
                          ]
                      }
                    ]
                },
                {
                  "uri":"/site/website/articles/2017",
                  "children":
                    [
                      {
                        "uri":"/site/website/articles/2017/1",
                        "children":
                          [
                            {
                              "uri":"/site/website/articles/2017/1/men-styles-for-winter/index.xml"
                            },
                            {
                              "uri":"/site/website/articles/2017/1/women-styles-for-winter/index.xml"
                            }
                          ]
                      },
                      {
                        "uri":"/site/website/articles/2017/2",
                        "children":
                          [
                            {
                              "uri":"/site/website/articles/2017/2/10-tips-to-get-a-six-pack/index.xml"
                            },
                            {
                              "uri":"/site/website/articles/2017/2/top-romantic-valentine-movies/index.xml"
                            }
                          ]
                      },
                      {
                        "uri":"/site/website/articles/2017/3",
                        "children":
                          [
                            {
                              "uri":"/site/website/articles/2017/3/5-popular-diets-for-women/index.xml"
                            },
                            {
                              "uri":"/site/website/articles/2017/3/top-clubs-in-virginia/index.xml"
                            }
                          ]
                      }
                    ]
                }
              ]
          }
        ]
    }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

    { "success" : true }


---------
Responses
---------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+
|| 400    ||                                          || ``{ "message" : "Bad Request" }``                |
+---------+-------------------------------------------+---------------------------------------------------+