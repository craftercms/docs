:is-up-to-date: True

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

.. include:: /includes/tomcat-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/site/context/destroy``                                  |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+-------------------------+-------------+---------------+--------------------------------------+
|| Name                   || Type       || Required     || Description                         |
+=========================+=============+===============+======================================+
|| token                  || String     || |checkmark|  || The authorization token             |
+-------------------------+-------------+---------------+--------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

``GET .../api/1/site/context/destroy?token=defaultManagementToken``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

  { "message": "Site context for 'sample' destroyed. Will be recreated on next request" }

---------
Responses
---------

+---------+------------------+--------------------------------------------------------------------+
|| Status || Location        || Response Body                                                     |
+=========+==================+====================================================================+
|| 200    ||                 || See example above.                                                |
+---------+------------------+--------------------------------------------------------------------+
|| 400    ||                 || ``{"message":"Required String parameter 'token' is not present"}``|
+---------+------------------+--------------------------------------------------------------------+
|| 500    ||                 || ``{ "message" : "Internal server error" }``                       |
+---------+------------------+--------------------------------------------------------------------+
