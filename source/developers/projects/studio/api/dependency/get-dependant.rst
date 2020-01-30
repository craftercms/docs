:is-up-to-date: True

.. _crafter-studio-api-dependency-get-dependant:

===================
Get Dependant Items
===================

Get dependant content items.

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || POST                                                             |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/dependency/get-dependant.json``          |
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

.. code-block:: none

    POST .../api/1/services/api/1/dependency/get-dependant.json?site_id=mysite&path=/templates/web/pages/home.ftl

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: json
    :linenos:

    [
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
      "user": "",
      "userFirstName": "",
      "userLastName": "",
      "nodeRef": null,
      "metaDescription": null,
      "site": "mysite",
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
      "inProgress": false,
      "live": true,
      "inFlight": false,
      "isDisabled": false,
      "isSavedAsDraft": false,
      "isInProgress": false,
      "isLive": true,
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
      "eventDate": null,
      "endpoint": null,
      "timezone": null,
      "numOfChildren": 0,
      "scheduledDate": null,
      "publishedDate": null,
      "mandatoryParent": null,
      "isLevelDescriptor": false,
      "categoryRoot": null,
      "lastEditDate": null,
      "form": "/page/home",
      "formPagePath": "simple",
      "renderingTemplates": [
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
      "orders": [
        {
        "name": null,
        "id": "default",
        "order": -1,
        "disabled": null,
        "placeInNav": null
        }
      ],
      "children": [],
      "size": 0,
      "sizeUnit": null,
      "mimeType": "application/xml",
      "reference": false,
      "new": false,
      "newFile": false,
      "levelDescriptor": false
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
