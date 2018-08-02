.. _crafter-studio-api-content-get-item:

================
Get Content Item
================

Get content item.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/studio/api/1/services/api/1/content/get-item.json``           |
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

    GET .../api/1/services/api/1/content/get-item.json?site_id=mysite&path=/site/website/index.xml&edit=true

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
    :linenos:

    {
        "item":
            {
                "name":"index.xml",
                "internalName":"Home",
                "contentType":"/page/home",
                "uri":"/site/website/index.xml",
                "path":"/site/website",
                "browserUri":"",
                "navigation":false,
                "floating":true,
                "hideInAuthoring":false,
                "previewable":true,
                "lockOwner":"",
                "user":"admin",
                "userFirstName":"admin",
                "userLastName":"",
                "nodeRef":null,
                "metaDescription":null,
                "site":"documentation",
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
                "eventDate":"2017-07-05T21:32:02+02:00",
                "endpoint":null,
                "timezone":null,
                "numOfChildren":0,
                "scheduledDate":null,
                "publishedDate":null,
                "mandatoryParent":null,
                "isLevelDescriptor":false,
                "categoryRoot":null,
                "lastEditDate":"2017-07-05T21:32:02+02:00",
                "form":"/page/home",
                "formPagePath":"simple",
                "renderingTemplates":
                    [
                        {
                            "uri":"/templates/web/pages/home.ftl","name":"DEFAULT"
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
                            "disabled":null,
                            "order":-1.0,
                            "placeInNav":null
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
    }


---------
Responses
---------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+
