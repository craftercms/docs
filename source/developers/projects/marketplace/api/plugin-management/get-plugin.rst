.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-marketplace-api-plugin-get:

==========
Get Plugin
==========

Returns the plugin information.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ```/api/1/plugin/get/:id``                                       |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || JSON                                                             |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+----------------------------------------+
|| Name                   || Type       || Required     || Description                           |
+=========================+=============+===============+========================================+
|| id                     || String     || |checkmark|  || The plugin ID                         |
+-------------------------+-------------+---------------+----------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/plugin/get/myplugin``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

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
      "images": [
        {
          "title": "Home Page",
          "description": "Screenshot of the homepage",
          "url": "https://craftercms.org/static-assets/blueprints/images/example/home.png"
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

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    || ``.../get/:id``               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 404    ||                               || ``{ "message" : "Plugin not found" }``             |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error:" }``       |
||        ||                               || ``ACTUAL_EXCEPTION" }``                            |
+---------+--------------------------------+-----------------------------------------------------+
