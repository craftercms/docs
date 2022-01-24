:is-up-to-date: True

.. _newIa-crafter-studio-api-workflow-go-delete:

=========
Go Delete
=========

Go delete workflow.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/workflow/go-delete.json``                |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || N/A                                                              |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+--------------------+-------------+---------------+--------------------------------------------------+
|| Name              || Type       || Required     || Description                                     |
+====================+=============+===============+==================================================+
|| site_id           || String     || |checkmark|  || Site to use                                     |
+--------------------+-------------+---------------+--------------------------------------------------+
|| items             || String     || |checkmark|  || Array of paths to delete                        |
+--------------------+-------------+---------------+--------------------------------------------------+
|| submissionComment || String     ||              || submission comment                              |
+--------------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

    POST ../api/1/services/api/1/workflow/go-delete.json?deletedep=true&site_id=mysite

.. code-block:: json
    :linenos:

    {
        "items" : [
            "/site/website/technology/index.xml"
        ],
        "submissionComment": "my submission comment"
    }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

    {
        "status" : 200,
        "commitId" : null,
        "message" : "Item(s) has been pushed for delete. It will be deleted shortly.",
        "item" : null,
        "success" : true,
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
