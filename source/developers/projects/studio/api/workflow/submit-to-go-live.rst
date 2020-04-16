.. _crafter-studio-api-workflow-submit-to-go-live:

==================
Request Publishing
==================

Request publishing workflow.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/workflow/submit-to-go-live.json``        |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             || N/A                                                              |
+----------------------------+-------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+----------------------------------------------------+
|| Name         || Type       || Required     || Description                                       |
+===============+=============+===============+====================================================+
|| site_id      || String     || |checkmark|  || Site to use                                       |
+---------------+-------------+---------------+----------------------------------------------------+
|| user         || String     || |checkmark|  || User requesting publishing                        |
+---------------+-------------+---------------+----------------------------------------------------+
|| sendEmail    || String     || |checkmark|  || True to send email notifications, otherwise false |
+---------------+-------------+---------------+----------------------------------------------------+


-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

    POST .../api/1/services/api/1/workflow/submit-to-go-live.json?site_id=mysite&user=author

.. code-block:: json
    :linenos:

    {
        "sendEmail" : true,
        "schedule" : "now",
        "submissionComment" : "",
        "environment" : "live"
        "items" : [
            "/site/website/index.xml"
        ]
    }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

    {
        "status" : 200,
        "commitId" : null,
        "message" : "An email notification has been sent to the team. Your content will be reviewed and (if approved) pushed live between 4PM EST and 6PM EST of the business day that the request was received. If this request is sent after business hours, it will be reviewed and (if approved) pushed live as soon as possible, the next business day.<br/><br/>If you need to make further revisions to this item, please re-submit this publish request after making them.<br/><br/>If this request needs immediate attention, please email the administrator.",
        "item" : null,
        "success" : true,
        "invalidateCache" : false
    }


---------
Responses
---------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+