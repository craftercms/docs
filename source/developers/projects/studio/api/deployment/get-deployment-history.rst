.. _crafter-studio-api-deployment-get-deployment-history:

======================
Get Deployment History
======================

Get deployment history.

--------------------
Resource Information
--------------------

+----------------------+-------------------------------------------------------------------------+
|| HTTP Verb           || GET                                                                    |
+----------------------+-------------------------------------------------------------------------+
|| URL                 || ``/api/1/services/api/1/deployment/get-deployment-history.json``       |
+----------------------+-------------------------------------------------------------------------+
|| Response Formats    || ``JSON``                                                               |
+----------------------+-------------------------------------------------------------------------+
|| Required Role       || N/A                                                                    |
+----------------------+-------------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site_id      || String     || |checkmark|  || Site to use                                     |
+---------------+-------------+---------------+--------------------------------------------------+
|| days         || String     || |checkmark|  || Number of days for history                      |
+---------------+-------------+---------------+--------------------------------------------------+
|| num          || String     || |checkmark|  || Number of items to display                      |
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

    GET .../api/1/services/api/1/deployment/get-deployment-history.json?site_id=mysite&days=30&num=10&filterType=all

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
    :linenos:

    {
        "total":1,
        "documents":
            [
                {
                    "internalName":"07/17",
                    "numOfChildren":1,
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
                                "scheduled":false,
                                "published":false,
                                "deleted":false,
                                "inProgress":false,
                                "live":true,
                                "inFlight":false,
                                "isDisabled":false,
                                "isSavedAsDraft":false,
                                "isInProgress":false,
                                "isLive":true,
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
                                "eventDate":"2017-07-17T19:57:26+02:00",
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
                    "endpoint":null
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
