.. .. include:: /includes/unicode-checkmark.rst

.. _crafter-engine-api-site-context-destroy:

===============
Destroy Context
===============

Destroy the site context resolved for the current request. Destroying the context involves
clearing the cache, destroying any loaded configuration and Spring beans for the site, and
destroying the Groovy classloader for the site.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/site/context/destroy``                                  |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/context/destroy``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  { "message": "Site context for 'sample' destroyed. Will be recreated on next request" }

---------
Responses
---------

+---------+--------------------------------+-----------------------------------------------------+
|| Status || Location                      || Response Body                                      |
+=========+================================+=====================================================+
|| 200    ||                               || See example above.                                 |
+---------+--------------------------------+-----------------------------------------------------+
|| 500    ||                               || ``{ "message" : "Internal server error" }``        |
+---------+--------------------------------+-----------------------------------------------------+
