.. _crafter-studio-api-activity-get-user-activities:

=================
Get User Activity
=================

Get user activity for a site (My recent activity dashboard).

--------------------
Resource Information
--------------------

.. include:: /includes/studio-api-url-prefix.rst

+----------------------------+--------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                               |
+----------------------------+--------------------------------------------------------------------+
|| URL                       || ``/api/1/services/api/1/activity/get-user-activities.json``       |
+----------------------------+--------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                          |
+----------------------------+--------------------------------------------------------------------+
|| Required Role             || member of site                                                    |
+----------------------------+--------------------------------------------------------------------+

----------
Parameters
----------

+---------------+-------------+---------------+--------------------------------------------------+
|| Name         || Type       || Required     || Description                                     |
+===============+=============+===============+==================================================+
|| site_id      || String     || |checkmark|  || Site to use                                     |
+---------------+-------------+---------------+--------------------------------------------------+
|| user         || String     || |checkmark|  || Username to filter by                           |
+---------------+-------------+---------------+--------------------------------------------------+
|| num          || Integer    || |checkmark|  || Number of records to retrieve                   |
+---------------+-------------+---------------+--------------------------------------------------+
|| excludeLive  || Boolean    || |checkmark|  || Exclude live items from result set              |
+---------------+-------------+---------------+--------------------------------------------------+
|| filterType   || String     || |checkmark|  || Filter type                                     |
+---------------+-------------+---------------+--------------------------------------------------+

-------
Example
-------
^^^^^^^
Request
^^^^^^^

.. code-block:: guess

    GET .../api/1/services/api/1/activity/get-user-activities.json?site_id=mysite&user=jane.doe&num=10&excludeLive=false&filterType=all``

^^^^^^^^
Response
^^^^^^^^

``Status 200 OK``

.. code-block:: guess
  :linenos:

  {
    total: 1,
    sortedBy: "eventDate",
    ascending: "false",
    documents:
      [
        {
          name: "index.xml",
          internalName: "Home",
          contentType: "/page/home",
          uri: "/site/website/index.xml",
          path: "/site/website",
          browserUri: "",
          navigation: false,
          floating: true,
          hideInAuthoring: false,
          previewable: true,
          lockOwner: "",
          user: "admin",
          userFirstName: "admin",
          userLastName: "",
          nodeRef: null,
          metaDescription: null,
          site: "documentation",
          page: true,
          component: false,
          document: false,
          asset: false,
          isContainer: false,
          container: false,
          disabled: false,
          savedAsDraft: false,
          submitted: false,
          submittedForDeletion: false,
          scheduled: false,
          published: true,
          deleted: false,
          inProgress: true,
          live: false,
          inFlight: false,
          isDisabled: false,
          isSavedAsDraft: false,
          isInProgress: true,
          isLive: false,
          isSubmittedForDeletion: false,
          isScheduled: false,
          isPublished: false,
          isNavigation: false,
          isDeleted: false,
          isNew: false,
          isSubmitted: false,
          isFloating: false,
          isPage: true,
          isPreviewable: true,
          isComponent: false,
          isDocument: false,
          isAsset: false,
          isInFlight: false,
          eventDate: "2017-07-05T21:32:02+02:00",
          endpoint: null,
          timezone: null,
          numOfChildren: 0,
          scheduledDate: null,
          publishedDate: "2017-07-05T21:29:08+02:00",
          mandatoryParent: null,
          isLevelDescriptor: false,
          categoryRoot: null,
          lastEditDate: "2017-07-05T21:32:02+02:00",
          form: "/page/home",
          formPagePath: "simple",
          renderingTemplates:
            [
              {
                uri: "/templates/web/pages/home.ftl",
                name: "DEFAULT"
              }
            ],
          folder: false,
          submissionComment: null,
          components: null,
          documents: null,
          levelDescriptors: null,
          pages: null,
          parentPath: null,
          orders:
            [
              {
                name: null,
                id: "default",
                disabled: null,
                placeInNav: null,
                order: -1
              }
            ],
          children: [ ],
          size: 0,
          sizeUnit: null,
          mimeType: "application/xml",
          newFile: false,
          levelDescriptor: false,
          reference: false,
          new: false
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
