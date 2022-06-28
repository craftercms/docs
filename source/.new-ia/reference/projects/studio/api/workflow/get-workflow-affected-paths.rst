:is-up-to-date: True

.. _newIa-crafter-studio-api-workflow-get-workflow-affected-paths:

========================================
Get Workflow Affected Paths (deprecated)
========================================

Get workflow affected paths.

.. important::
   This API is deprecated and provided only as a reference.  Please see :studio_swagger_url:`#/workflow/getWorkflowAffectedPaths` for the current version.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+--------------------+----------------------------------------------------------------------------+
|| HTTP Verb         || GET                                                                       |
+--------------------+----------------------------------------------------------------------------+
|| URL               || ``/api/1/services/api/1/workflow/get-workflow-affected-paths.json``       |
+--------------------+----------------------------------------------------------------------------+
|| Response Formats  || ``JSON``                                                                  |
+--------------------+----------------------------------------------------------------------------+
|| Required Role     || N/A                                                                       |
+--------------------+----------------------------------------------------------------------------+

----------
Parameters
----------

+--------------------+-------------+---------------+--------------------------------------------------+
|| Name              || Type       || Required     || Description                                     |
+====================+=============+===============+==================================================+
|| site_id           || String     || |checkmark|  || Site to use                                     |
+--------------------+-------------+---------------+--------------------------------------------------+
|| path              || String     || |checkmark|  || Path of the content                             |
+--------------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

    GET .../api/1/services/api/1/workflow/get-workflow-affected-paths.json?site_id=mysite&path=/site/website/index.xml

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: none
    :linenos:

    {
        items: [
            {
                path: "/site/website/index.xml",
                browserUri: "",
                name: "Home"
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
