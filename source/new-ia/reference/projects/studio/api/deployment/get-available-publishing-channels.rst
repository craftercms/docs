:is-up-to-date: True

.. _newIa-crafter-studio-api-deployment-get-available-publishing-channels:

=================================
Get available publishing channels
=================================

Get available publishing channels.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/deployment/``                            |
||                           || ``get-available-publishing-channels.json``                       |
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

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

    GET .../api/1/services/api/1/deployment/get-available-publishing-channels.json?site_id=mysite

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
    :linenos:

    {
        "availableUpdateStatusChannels":[ ],
        "availablePublishChannels":
            [
                {
                    "name":"Live",
                    "publish":true,
                    "updateStatus":false,
                    "order":2147483647
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
