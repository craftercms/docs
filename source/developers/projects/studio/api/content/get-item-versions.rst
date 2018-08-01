.. _crafter-studio-api-content-get-item-versions:

=================
Get Item Versions
=================

Get content item version history.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/studio/api/1/services/api/1/content/get-item-versions.json``  |
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
|| path         || String     || |checkmark|  || Path of the content                             |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------

^^^^^^^
Request
^^^^^^^

.. code-block:: guess

    GET .../api/1/services/api/1/content/get-item-versions.json?site_id=mysite&path=/site/website/index.xml

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
    :linenos:

    {
        "item":
            {
                "name": "index.xml",
                "internalName": "Home",
                "contentType": "/page/home",
                "uri": "/site/website/index.xml",
                "path": "/site/website",
                "browserUri": "",
                "navigation": false,
                "floating": true,
                "hideInAuthoring": false,
                "previewable": true,
                "lockOwner": "",
                "user": "admin",
                "userFirstName": "admin",
                "userLastName": "",
                "nodeRef": null,
                "metaDescription": null,
                "site": "documentation",
                "page": true,
                "component": false,
                "document": false,
                "asset": false,
                "isContainer": false,
                "container": false,
                "disabled": false,
                "savedAsDraft": false,
                "submitted": false,
                "submittedForDeletion": false,
                "scheduled": false,
                "published": false,
                "deleted": false,
                "inProgress": true,
                "live": false,
                "inFlight": false,
                "isDisabled": false,
                "isSavedAsDraft": false,
                "isInProgress": true,
                "isLive": false,
                "isSubmittedForDeletion": false,
                "isScheduled": false,
                "isPublished": false,
                "isNavigation": false,
                "isDeleted": false,
                "isNew": false,
                "isSubmitted": false,
                "isFloating": false,
                "isPage": true,
                "isPreviewable": true,
                "isComponent": false,
                "isDocument": false,
                "isAsset": false,
                "isInFlight": false,
                "eventDate": "2017-07-05T21:32:02+02:00",
                "endpoint": null,
                "timezone": null,
                "numOfChildren": 0,
                "scheduledDate": null,
                "publishedDate": null,
                "mandatoryParent": null,
                "isLevelDescriptor": false,
                "categoryRoot": null,
                "lastEditDate": "2017-07-05T21:32:02+02:00",
                "form": "/page/home",
                "formPagePath": "simple",
                "renderingTemplates":
                    [
                        {
                            "uri": "/templates/web/pages/home.ftl",
                            "name": "DEFAULT"
                        }
                    ],
                "folder": false,
                "submissionComment": null,
                "components": null,
                "documents": null,
                "levelDescriptors": null,
                "pages": null,
                "parentPath": null,
                "orders":
                    [
                        {
                            "name": null,
                            "id": "default",
                            "disabled": null,
                            "placeInNav": null,
                            "order": -1
                        }
                    ],
                "children": [ ],
                "size": 0,
                "sizeUnit": null,
                "mimeType": "application/xml",
                "levelDescriptor": false,
                "newFile": false,
                "reference": false,
                "new": false
            },
        "versions":
            [
                {
                    "lastModifiedDate": "2017-07-05T19:32:02Z",
                    "lastModifier": "admin admin",
                    "versionNumber": "5a32289a6e564898e318238a01fa94095ea5b1e9",
                    "contentItem": null,
                    "comment": "Wrote content /site/website/index.xml"
                },
                {
                    "lastModifiedDate": "2017-07-05T19:29:03Z",
                    "lastModifier": "admin admin",
                    "versionNumber": "42e4cf3955ddd83f7018838a33020bcb7f0d6cb6",
                    "contentItem": null,
                    "comment": "Initial commit."
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
