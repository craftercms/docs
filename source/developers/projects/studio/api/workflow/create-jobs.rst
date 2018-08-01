.. _crafter-studio-api-workflow-create-jobs:

===========
Create Jobs
===========

Create workflow jobs.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/studio/api/1/services/api/1/workflow/create-jobs.json``       |
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
|| user         || String     || |checkmark|  || User executing request                          |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: guess

    POST .../api/1/services/api/1/workflow/create-jobs.json?site_id=mysite&user=test

.. code-block:: json
    :linenos:

    {
        "sendEmail":true,
        "schedule":"now",
        "submissionComment":"",
        "items":[
            "/site/website/index.xml"
        ]
    }

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json

    {
        "status":200,
        "message":"An email notification has been sent to the team. Your content will be reviewed and (if approved) pushed live between 4PM EST and 6PM EST of the business day that the request was received. If this request is sent after business hours, it will be reviewed and (if approved) pushed live as soon as possible, the next business day.<br/><br/>If you need to make further revisions to this item, please re-submit this publish request after making them.<br/><br/>If this request needs immediate attention, please email the administrator.",
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