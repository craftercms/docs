:is-up-to-date: True

.. _crafter-studio-api-site-monitor-content:

===============
Monitor Content
===============

Get all sites' content monitors

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/site/monitor-content.json``              |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || N/A                                                              |
+----------------------------+-------------------------------------------------------------------+


-------
Example
-------

.. code-block:: none

	GET .../api/1/services/api/1/site/monitor-content.json

.. code-block:: json
   :force:

   [
     {
       site_id: "myawesomesite",
       contentMonitoring: {
         monitors: [ ]
       }
     },
     {
       site_id: "hello",
       contentMonitoring: {
         monitors: [ ]
       }
     },
     {
       site_id: "blog",
       contentMonitoring: {
       monitors: [ ]
       }
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
