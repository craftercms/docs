.. _crafter-studio-api-dependency-get-dependencies:

================
Get dependencies
================

Get dependencies

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/dependency/get-dependencies.json``       |
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
|| uri          || String     || |checkmark|  || Path of the content                             |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

.. code-block:: none

	POST .../api/1/services/api/1/dependency/get-dependencies.json?site_id=mysite

.. code-block:: json
    :force:

    [
        {
            uri:"/site/website/style/index.xml"
        }
    ]

--------
Response
--------

.. code-block:: json
    :linenos:

    {
        "submissionComment":"",
        "items":
            [
                {
                    "name":"index.xml",
                    "internalName":"Style",
                    "contentType":"/page/category-landing",
                    "uri":"/site/website/style/index.xml",
                    "path":"/site/website/style",
                    "browserUri":"/style",
                    "navigation":true,
                    "floating":false,
                    "hideInAuthoring":false,
                    "previewable":true,
                    "lockOwner":"",
                    "user":"admin",
                    "userFirstName":"admin",
                    "userLastName":"",
                    "nodeRef":null,
                    "metaDescription":null,
                    "site":"mysite",
                    "page":true,
                    "component":false,
                    "document":false,
                    "asset":false,
                    "isContainer":true,
                    "container":true,
                    "disabled":false,
                    "savedAsDraft":false,
                    "submitted":false,
                    "submittedForDeletion":false,
                    "scheduled":false,
                    "published":false,
                    "deleted":false,
                    "inProgress":true,
                    "live":false,
                    "inFlight":false,
                    "isDisabled":false,
                    "isSavedAsDraft":false,
                    "isInProgress":true,
                    "isLive":false,
                    "isSubmittedForDeletion":false,
                    "isScheduled":false,
                    "isPublished":false,
                    "isNavigation":false,
                    "isDeleted":false,
                    "isNew":false,
                    "isSubmitted":false,
                    "isFloating":false,
                    "isPage":true,
                    "isPreviewable":true,
                    "isComponent":false,
                    "isDocument":false,
                    "isAsset":false,
                    "isInFlight":false,
                    "eventDate":"2017-07-14T20:53:31+02:00",
                    "endpoint":null,
                    "timezone":null,
                    "numOfChildren":0,
                    "scheduledDate":null,
                    "publishedDate":null,
                    "mandatoryParent":null,
                    "isLevelDescriptor":false,
                    "categoryRoot":null,
                    "lastEditDate":"2017-07-14T20:53:31+02:00",
                    "form":"/page/category-landing",
                    "formPagePath":"simple",
                    "renderingTemplates":
                        [
                            {
                                "uri":"/templates/web/pages/category-landing.ftl",
                                "name":"DEFAULT"
                            }
                        ],
                    "folder":false,
                    "submissionComment":null,
                    "components":null,
                    "documents":null,
                    "levelDescriptors":null,
                    "pages":[ ],
                    "parentPath":null,
                    "orders":
                        [
                            {
                                "name":null,
                                "id":"default",
                                "placeInNav":null,
                                "order":8000.0,
                                "disabled":null
                            }
                        ],
                    "children":[ ],
                    "size":0.0,
                    "sizeUnit":null,
                    "mimeType":"application/xml",
                    "levelDescriptor":false,
                    "newFile":false,
                    "reference":false,
                    "new":false
                }
            ],
        "dependencies":[ ]
    }

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+

