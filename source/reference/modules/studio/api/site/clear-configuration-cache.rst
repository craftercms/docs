:is-up-to-date: True


.. _crafter-studio-api-site-clear-configuration-cache:

======================================
Clear Configuration Cache (deprecated)
======================================

Clear configuration cache for site.

.. important::
   This API is deprecated and provided only as a reference.  Please see :base_url:`clearConfigurationCache <_static/api/studio.html#tag/configuration/operation/clearConfigurationCache>` for the current version.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+--------------------------+----------------------------------------------------------------------+
|| HTTP Verb               || GET                                                                 |
+--------------------------+----------------------------------------------------------------------+
|| URL                     || ``/api/1/services/api/1/site/clear-configuration-cache.json``       |
+--------------------------+----------------------------------------------------------------------+
|| Response Formats        || ``JSON``                                                            |
+--------------------------+----------------------------------------------------------------------+
|| Required Role           ||                                                                     |
+--------------------------+----------------------------------------------------------------------+


-------
Example
-------

.. code-block:: none

	GET .../api/1/services/api/1/site/clear-configuration-cache.json?site_id=mysite


--------
Response
--------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          ||                                                  |
+---------+-------------------------------------------+---------------------------------------------------+
