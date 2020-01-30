:is-up-to-date: True

.. _crafter-studio-api-workflow-go-live:

=======
Go Live
=======

Go live workflow.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/workflow/go-live.json``                  |
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

    POST .../api/1/services/api/1/workflow/go-live.json?site_id=mysite

.. code-block:: json
    :linenos:

    {
        "schedule":"now",
        "submissionComment":" ",
        "publishOptionComment":"",
        "publishChannel":"Live",
        "items":[
            "/site/website/style/index.xml"
        ]
    }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

    {
        "status":200,
        "message":"Item(s) has been pushed live. It will be visible on the live site shortly.",
        "success":true,
        "item":null,
        "invalidateCache":false
    }


---------
Responses
---------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+
