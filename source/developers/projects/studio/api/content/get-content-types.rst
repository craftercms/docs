.. _crafter-studio-api-content-get-content-types:

=================
Get Content Types
=================

Get content types allowed for given path.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/content/get-content-types.json``         |
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
|| path         || String     || |checkmark|  || Path to get content types for                   |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: none

    GET .../api/1/services/api/1/content/get-content-type.jsons?site_id=mysite&type=/site/website

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
    :linenos:

    [
        {
            "name":"/component/level-descriptor",
            "label":"Section Defaults",
            "form":"/component/level-descriptor",
            "formPath":"simple",
            "type":"component",
            "contentAsFolder":false,
            "useRoundedFolder":false,
            "modelInstancePath":"NOT-USED-BY-SIMPLE-FORM-ENGINE",
            "allowedRoles":[ ],
            "lastUpdated":"2017-07-07T20:51:22+02:00",
            "copyDepedencyPattern":[ ],
            "imageThumbnail":"section-defaults.png",
            "noThumbnail":false,
            "pathIncludes":
                [
                    "^/site/website/.*"
                ],
            "pathExcludes":[ ],
            "nodeRef":null,
            "deleteDependencyPattern":[ ],
            "previewable":false
        },
        {
            "name":"/page/category-landing",
            "label":"Page - Category Landing",
            "form":"/page/category-landing",
            "formPath":"simple",
            "type":"page",
            "contentAsFolder":true,
            "useRoundedFolder":false,
            "modelInstancePath":"NOT-USED-BY-SIMPLE-FORM-ENGINE",
            "allowedRoles":[ ],
            "lastUpdated":"2017-07-07T20:51:22+02:00",
            "copyDepedencyPattern":[ ],
            "imageThumbnail":"page-category-landing.png",
            "noThumbnail":false,
            "pathIncludes":
                [
                    "^/site/website/(?!articles/)(.*)"
                ],
            "pathExcludes":[ ],
            "nodeRef":null,
            "deleteDependencyPattern":[ ],
            "previewable":true
        }
    ]


---------
Responses
---------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+
