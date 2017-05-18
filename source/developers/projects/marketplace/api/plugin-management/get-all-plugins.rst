.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-marketplace-api-plugin-get-all:

===============
Get All Plugins
===============

Returns the information of all plugins.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/plugin/get-all``                                        |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || JSON                                                             |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

None

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/plugin/get-all``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  [
    {
      "id": "craftercms-blueprint-example",
      "type": "blueprint",
      "name": "Example Blueprint",
      "version": "1.0.0",
      "description": "Simple example blueprint",
      "website": {
        "name": "Example Blueprint",
        "url": "https://craftercms.org/blueprints/example/"
      },
      "media": {
        "screenshots": [
          {
            "title": "Home Page",
            "description": "Screenshot of the homepage",
            "url": "https://craftercms.org/static-assets/blueprints/screenshots/example/home.png"
          }
        ],
        "videos": [
          {
            "title": "Tour of the Example Blueprint",
            "description": "Video giving an overview of the blueprint",
            "url": "https://craftercms.org/static-assets/blueprints/videos/example/tour.mpeg"
          }
        ]
      },
      "organization": {
        "name": "Crafter Software",
        "email": "info@craftersoftware.com",
        "website": "https://craftersoftware.com"
      },
      "developers": [
        {
          "name": "John Doe",
          "email": "john.doe@craftersoftware.com"
        }
      ],
      "license": {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
      },
      "price": {
        "amount": "0",
        "currency": "US Dollars"
      },
      "crafter_versions_supported": {
        "min": "3.0.0",
        "max": "3.1.0"
      }
    }
  ]

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    || ``.../plugin/get_all``        || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error:" }``       |
||        ||                               || ``ACTUAL_EXCEPTION" }``                            |
+---------+--------------------------------+-----------------------------------------------------+
