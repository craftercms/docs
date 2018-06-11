.. _crafter-studio-api-deployment-get-scheduled-items:

===================
Get Scheduled Items
===================

Get scheduled items for deployment.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/deployment/get-scheduled-items.json``    |
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
|| sort         || String     || |checkmark|  || Sort results by field                           |
+---------------+-------------+---------------+--------------------------------------------------+
|| ascending    || String     || |checkmark|  || Ascending or descending order                   |
+---------------+-------------+---------------+--------------------------------------------------+
|| filterType   || String     || |checkmark|  || Filter result set by filter type                |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: guess

    GET .../api/1/services/api/1/deployment/get-scheduled-items.json?site_id=mysite&sort=eventDate&ascending=false&filterType=all

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
    :linenos:

    {
        "total":1,
        "sortedBy":"eventDate",
        "ascending":false,
        "documents":
            [
                {
                    "name":"07/20 10:21PM",
                    "internalName":"07/20 10:21PM",
                    "contentType":null,
                    "uri":null,
                    "path":null,
                    "browserUri":null,
                    "navigation":false,
                    "floating":false,
                    "hideInAuthoring":false,
                    "previewable":false,
                    "lockOwner":null,
                    "user":null,
                    "userFirstName":null,
                    "userLastName":null,
                    "nodeRef":null,
                    "metaDescription":null,
                    "site":null,
                    "page":false,
                    "component":false,
                    "document":false,
                    "asset":false,
                    "isContainer":false,
                    "container":false,
                    "disabled":false,
                    "savedAsDraft":false,
                    "submitted":false,
                    "submittedForDeletion":false,
                    "scheduled":false,
                    "published":false,
                    "deleted":false,
                    "inProgress":false,
                    "live":false,
                    "inFlight":false,
                    "isDisabled":false,
                    "isSavedAsDraft":false,
                    "isInProgress":false,
                    "isLive":false,
                    "isSubmittedForDeletion":false,
                    "isScheduled":false,
                    "isPublished":false,
                    "isNavigation":false,
                    "isDeleted":false,
                    "isNew":false,
                    "isSubmitted":false,
                    "isFloating":false,
                    "isPage":false,
                    "isPreviewable":false,
                    "isComponent":false,
                    "isDocument":false,
                    "isAsset":false,
                    "isInFlight":false,
                    "eventDate":"2017-07-21T04:21:00+02:00",
                    "endpoint":null,
                    "timezone":"EST5EDT",
                    "numOfChildren":1,
                    "scheduledDate":"2017-07-21T04:21:00+02:00",
                    "publishedDate":null,
                    "mandatoryParent":null,
                    "isLevelDescriptor":false,
                    "categoryRoot":null,
                    "lastEditDate":null,
                    "form":null,
                    "formPagePath":null,
                    "renderingTemplates":[ ],
                    "folder":false,
                    "submissionComment":null,
                    "components":null,
                    "documents":null,
                    "levelDescriptors":null,
                    "pages":null,
                    "parentPath":null,
                    "orders":null,
                    "children":
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
                                "isContainer":false,
                                "container":false,
                                "disabled":false,
                                "savedAsDraft":false,
                                "submitted":false,
                                "submittedForDeletion":false,
                                "scheduled":true,
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
                                "isScheduled":true,
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
                                "eventDate":"2017-07-17T22:21:44+02:00",
                                "endpoint":null,
                                "timezone":null,
                                "numOfChildren":0,
                                "scheduledDate":"2017-07-21T04:21:00+02:00",
                                "publishedDate":null,
                                "mandatoryParent":null,
                                "isLevelDescriptor":false,
                                "categoryRoot":null,
                                "lastEditDate":"2017-07-17T22:21:44+02:00",
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
                                "pages":null,
                                "parentPath":null,
                                "orders":
                                    [
                                        {
                                            "name":null,
                                            "id":"default",
                                            "placeInNav":null,
                                            "disabled":null,
                                            "order":8000.0
                                        }
                                    ],
                                "children":[ ],
                                "size":0.0,
                                "sizeUnit":null,
                                "mimeType":"application/xml",
                                "levelDescriptor":false,
                                "newFile":false,
                                "new":false,
                                "reference":false
                            }
                        ],
                    "size":0.0,
                    "sizeUnit":null,
                    "mimeType":null,
                    "levelDescriptor":false,
                    "newFile":false,
                    "new":false,
                    "reference":false
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
