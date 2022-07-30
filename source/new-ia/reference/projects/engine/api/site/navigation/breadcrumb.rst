:is-up-to-date: True
:nosearch:

.. _newIa-crafter-engine-api-site-navigation-breadcrumb:

==========
Breadcrumb
==========

Returns the navigation items that form the breadcrumb for the specified store URL.

--------------------
Resource Information
--------------------

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------+
|| HTTP Verb                 || GET                                                        |
+----------------------------+-------------------------------------------------------------+
|| URL                       || ``/api/1/site/navigation/breadcrumb``                      |
+----------------------------+-------------------------------------------------------------+
|| Response Formats          || ``JSON``, ``XML``                                          |
+----------------------------+-------------------------------------------------------------+

----------
Parameters
----------

+-------------------+-------------+---------------+----------------------------------------------+
|| Name             || Type       || Required     || Description                                 |
+===================+=============+===============+==============================================+
|| url              || String     || |checkmark|  || The URL used to build the breadcrumb        |
+-------------------+-------------+---------------+----------------------------------------------+
|| root             || String     ||              || The starting point of the breadcrumb        |
+-------------------+-------------+---------------+----------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/navigation/breadcrumb.json?url=/site/website/style&root=/site/website``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
  :linenos:

  [
    {
      "label": "Home",
      "url": "/",
      "active": false,
      "subItems": null,
    },
    {
      "label": "Style",
      "url": "/style",
      "active": false,
      "subItems": null,
    }
  ]

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
