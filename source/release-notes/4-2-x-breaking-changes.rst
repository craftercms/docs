:is-up-to-date: True
:last-updated: 4.2.2
:orphan:

.. _breaking-changes-4-2-x:

====================================
Breaking Changes in CrafterCMS 4.2.x
====================================
This section covers changes that might affect your CrafterCMS projects, as well as other considerations
before upgrading. Please review the following and apply changes as required:

- CrafterCMS 4.2.x requires Java 21. |br| See :ref:`Requirements <requirements_supported_platforms>` for more
  information on CrafterCMS requirements.

- CrafterCMS 4.2.x now uses Jakarta EE. |br| The ``jakarta.*`` namespace is now used instead of ``javax.*``.
  To update your project, find and replace ``javax`` with ``jakarta`` in your Groovy code or Java if you are
  bringing in jars with Grab.

- CrafterCMS 4.2.x has upgraded the AWS client library to version 2. |br| This may contain breaking changes that impact custom Java and
  Groovy code. See https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/migration.html for more information
  on the changes in the library that may affect your project/s.

|hr|

------------------------------------
Breaking Changes in CrafterCMS 4.2.2
------------------------------------
CrafterCMS uses TinyMCE version 7 for the RTE control.
The following properties were removed from the RTE control in CrafterCMS version 4.2.2:

- ``Force Root Block p Tag``

  This property uses the ``forced_root_block`` option in TinyMCE to set it to a ``true``/``false`` value. Starting in
  `TinyMCE version 6 <https://www.tiny.cloud/docs/tinymce/5/6.0-upcoming-changes/#options>`__, this option no-longer
  accepts the ``false`` value or an empty string value. Setting ``forced_root_block`` to ``false`` is not compatible
  with Real-time Collaboration and also blocks various editor functions from working correctly and causes non-semantic
  HTML to be generated. Newer options are now available for handling line breaks and paragraphs, like the
  `newline_behavior <https://www.tiny.cloud/docs/tinymce/latest/content-behavior-options/#newline_behavior>`__.
- ``Force br New Lines``

  This property uses the ``force_br_newlines`` option in TinyMCE version 3 and 4. Starting with TinyMCE 5.x, the handling
  of line breaks and paragraphs became more standardized, and newer options like
  `newline_behavior <https://www.tiny.cloud/docs/tinymce/latest/content-behavior-options/#newline_behavior>`__ were
  introduced to provide greater flexibility for managing line breaks. The ``force_br_newlines`` option is no longer
  actively recommended in newer versions due to potential issues with content formatting and compatibility with modern
  HTML standards, hence the removal of the ``Force br New Lines`` property.

To customise the new behaviours mentioned above, use the :ref:`TinyMCE config <rte-configuration>` in the
:ref:`User Interface Configuration <user-interface-configuration>` ``ui.xml``

|hr|

------------------------------------
Breaking Changes in CrafterCMS 4.2.0
------------------------------------
The following APIs are removed from CrafterCMS 4.1 to 4.2:

-  ``/api/1/services/api/1/publish/publish-items.json``
-  ``/api/1/services/api/1/publish/reset-staging.json``
-  ``/api/1/services/api/1/dependency/calculate-dependencies.json``
-  ``/api/1/services/api/1/content/content-exists.json``

Below are the APIs that are now removed from CrafterCMS 4.2. Note that most of the APIs in the list has been deprecated
in previous versions:

.. list-table::
    :header-rows: 1

    * - API
      - URL
      - New API
    * - Clear Configuration Cache
      - ``/api/1/services/api/1/site/clear-configuration-cache.json``
      - `clearConfigurationCache <../_static/api/studio.html#tag/configuration/operation/clearConfigurationCache>`__
    * - Get Available Blueprints
      - ``/api/1/services/api/1/site/get-available-blueprints.json``
      - `availableBlueprints <../_static/api/studio.html#tag/sites/operation/availableBlueprints>`__
    * - Get Configuration
      - ``/api/1/services/api/1/site/get-configuration.json``
      - `getConfiguration <../_static/api/studio.html#tag/configuration/operation/getConfiguration>`__
    * - Write Configuration
      - ``/api/1/services/api/1/site/write-configuration.json``
      - `writeConfiguration <../_static/api/studio.html#tag/configuration/operation/writeConfiguration>`__
    * - Add Remote
      - ``/api/1/services/api/1/repo/add-remote.json``
      - `addRemoteRepository <../_static/api/studio.html#tag/repository/operation/addRemoteRepository>`__
    * - List Remote Repositories
      - ``/api/1/services/api/1/repo/list-remote.json``
      - `listRemoteRepositories <../_static/api/studio.html#tag/repository/operation/listRemoteRepositories>`__
    * - Pull From Remote
      - ``/api/1/services/api/1/repo/pull-from-remote.json``
      - `pullFromRemoteRepository <../_static/api/studio.html#tag/repository/operation/pullFromRemoteRepository>`__
    * - Push To Remote
      - ``/api/1/services/api/1/repo/push-to-remote.json``
      - `pushToRemoteRepository <../_static/api/studio.html#tag/repository/operation/pushToRemoteRepository>`__
    * - Rebuild Database
      - ``/api/1/services/api/1/repo/rebuild-database.json``
      - `syncFromRepo <../_static/api/studio.html#tag/repository/operation/syncFromRepo>`__
    * - Remove Remote
      - ``/api/1/services/api/1/repo/remove-remote.json``
      - `removeRemoteRepository <../_static/api/studio.html#tag/repository/operation/removeRemoteRepository>`__
    * - Get Audit
      - ``/api/1/services/api/1/audit/get.json``
      - `getAuditLog <../_static/api/studio.html#tag/audit/operation/getAuditLog>`__
    * - Publish Items
      - ``/api/1/services/api/1/publish/publish-items.json``
      - `operation/workflowPublish <../_static/api/studio.html#tag/workflow/operation/workflowPublish>`__
    * - Publish Status
      - ``/api/1/services/api/1/publish/status.json``
      - `getPublishingStatus <../_static/api/studio.html#tag/publishing/operation/getPublishingStatus>`__
    * - Reset Staging Publishing Target
      - ``/api/1/services/api/1/publish/reset-staging.json``
      -
    * - Get dependencies
      - ``/api/1/services/api/1/dependency/get-dependencies.json``
      - `getSimpleDependencies <../_static/api/studio.html#tag/dependency/operation/getSimpleDependencies>`__
    * - Get Deployment History
      - ``/api/1/services/api/1/deployment/get-deployment-history.json``
      - `getDashboardPublishingHistory <../_static/api/studio.html#tag/dashboard/operation/getDashboardPublishingHistory>`__
    * - Get Scheduled Items
      - ``/api/1/services/api/1/deployment/get-scheduled-items.json``
      - `getPublishingScheduled <../_static/api/studio.html#tag/dashboard/operation/getPublishingScheduled>`__
    * - Crop Image
      - ``/api/1/services/api/1/content/crop-image.json``
      -
    * - Set Item State
      - ``/api/1/services/api/1/content/set-item-state.json``
      - `setItemStates <../_static/api/studio.html#tag/workflow/operation/setItemStates>`__
    * - Unlock Content Item
      - ``/api/1/services/api/1/content/unlock-content.json``
      - `itemUnlockByPath <../_static/api/studio.html#tag/content/operation/itemUnlockByPath>`__
    * - Content Exists
      - ``/api/1/services/api/1/content/content-exists.json``
      - `contentExists <../_static/api/studio.html#tag/content/operation/contentExists>`__
    * - Get UI Resource Override
      - ``/api/1/services/api/1/server/get-ui-resource-override.json``
      -
    * - Transcode
      - ``/api/1/services/api/1/aws/elastictranscoder/transcode.json``
      -
    * - AWS S3 Upload
      - ``/api/1/services/api/1/aws/s3/upload.json``
      - `uploadItem <../_static/api/studio.html#tag/aws/operation/uploadItem>`__
    * - MediaConvert
      - ``/api/1/services/api/1/aws/mediaconvert/upload.json``
      - `uploadVideo <../_static/api/studio.html#tag/aws/operation/uploadVideo>`__
    * - Get User Activity
      - ``/api/1/services/api/1/activity/get-user-activities.json``
      - `getDashboardMyActivities <../_static/api/studio.html#tag/dashboard/operation/getDashboardMyActivities>`__
    * - Post Activity
      - ``/api/1/services/api/1/activity/post-activity.json``
      -
    * - Copy Item
      - ``/api/1/services/api/1/clipboard/copy-item.json``
      -
    * - Cut Item
      - ``/api/1/services/api/1/clipboard/cut-item.json``
      -
    * - Get Items
      - ``/api/1/services/api/1/clipboard/get-items.json``
      -
    * - Paste Item
      - ``/api/1/services/api/1/clipboard/paste-item.json``
      -
    * - Get User Roles
      - ``/api/1/services/api/1/security/get-user-roles.json``
      - `getUserSiteRoles <../_static/api/studio.html#tag/users/operation/getUserSiteRoles>`__
    * - Get user permissions for project/site and space (path)
      - ``/api/1/services/api/1/security/get-user-permissions.json``
      -
    * - Login
      - ``/api/1/services/api/1/security/login.json``
      -
    * - Logout
      - ``/api/1/services/api/1/security/logout.json``
      -
    * - List WebDAV
      - ``/api/1/services/api/1/webdav/list.json``
      -
    * - Upload to WebDAV
      - ``/api/1/services/api/1/webdav/upload.json``
      -
    * - Create Jobs
      - ``/api/1/services/api/1/workflow/create-jobs.json``
      - `workflowCreatePackage <../_static/api/studio.html#tag/workflow/operation/workflowCreatePackage>`__
    * - Get Go Live Items
      - ``/api/1/services/api/1/workflow/get-go-live-items.json``
      - `getDashboardContentPendingApprovalDetail <../_static/api/studio.html#tag/dashboard/operation/getDashboardContentPendingApprovalDetail>`__
    * - Get Workflow Affected Paths
      - ``/api/1/services/api/1/workflow/get-workflow-affected-paths.json``
      - `getWorkflowAffectedPaths <../_static/api/studio.html#tag/workflow/operation/getWorkflowAffectedPaths>`__
    * - Go Delete
      - ``/api/1/services/api/1/workflow/go-delete.json``
      - `contentDelete <../_static/api/studio.html#tag/content/operation/contentDelete>`__
    * - Go Live
      - ``/api/1/services/api/1/workflow/go-live.json``
      - `bulkGoLive <../_static/api/studio.html#tag/deployment/operation/bulkGoLive>`__
    * - Reject
      - ``/api/1/services/api/1/workflow/reject.json``
      - `workflowReject <../_static/api/studio.html#tag/workflow/operation/workflowReject>`__
    * - Request Publishing
      - ``/api/1/services/api/1/workflow/submit-to-go-live.json``
      - `workflowRequestPublish <../_static/api/studio.html#tag/workflow/operation/workflowRequestPublish>`__
    * - Calculate Dependencies
      - ``/api/1/services/api/1/dependency/calculate-dependencies.json``
      -

|hr|

.. _compatibility-with-3.1.x:

---------------------
Upgrading 3.1.x Sites
---------------------

  - MongoDB in CrafterCMS Social and Profile has been updated. To upgrade MongoDB in your installation, see
    :ref:`upgrading-mongodb`

  - CrafterCMS 4.1.x onward requires Git. |br| See :ref:`Requirements <requirements_supported_platforms>` for more
    information on CrafterCMS requirements.

  - CrafterCMS 4.1.x onward has a new Studio UI. To get the same Sidebar you're used to, update
    the :ref:`user-interface-configuration`

  - Update ICE to move to :ref:`XB <experience-builder>`

  - Studio and Engine SAML configuration now uses a key and certificate for configuration instead of using keystore. |br|
    See :ref:`engine-saml2-configuration` and :ref:`crafter-studio-configure-studio-saml` for more information.
