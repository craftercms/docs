:is-up-to-date: True
:last-updated: 5.0.0
:orphan:

.. _breaking-changes-5-x:

================================
Breaking Changes in CrafterCMS 5
================================
This section covers changes that might affect your CrafterCMS projects, as well as other considerations
before upgrading. Please review the following and apply changes as required:

|hr|

.. _breaking-changes-in-craftercms-5-0-0:

------------------------------------
Breaking Changes in CrafterCMS 5.0.0
------------------------------------
- The Spring profile ``crafter_studio_externalDb`` has been removed in CrafterCMS version 5.0.0.

- The following APIs are removed from CrafterCMS 5.0.0:

  - /api/1/services/api/1/site/delete-site.json
  - /api/1/services/api/1/site/get-canned-message.json
  - /api/1/services/api/1/content/change-content-type.json
  - /api/1/services/api/1/content/get-item-versions.json
  - /api/1/services/api/1/content/write-content.json
  - /api/1/services/api/1/publish/commits.json
  - /api/1/services/api/1/publish/start.json
  - /api/1/services/api/1/publish/stop.json
  - /api/2/content/children_by_path
  - /api/2/publish/all
  - /api/2/publish/packages
  - /api/2/publish/package
  - /api/2/publish/cancel
  - /api/2/publish/status
  - /api/2/dashboard/content/pending_approval
  - /api/2/dashboard/content/pending_approval/{id}
  - /api/2/dashboard/publishing/scheduled
  - /api/2/dashboard/publishing/scheduled/{id}
  - /api/2/dashboard/publishing/history
  - /api/2/dashboard/publishing/history/{id}
  - /api/2/workflow/affected_paths
  - /api/2/workflow/request_publish
  - /api/2/workflow/publish
  - /api/2/workflow/approve
  - /api/2/workflow/reject
  - /api/2/workflow/packages
  - /api/2/workflow/packages/{id}
  - /api/2/workflow/packages/approve
  - /api/2/workflow/packages/reject
  - /api/1/services/api/1/deployment/bulk-golive.json
  - /api/1/services/api/1/preview/sync-site.json
  - /api/2/dependency/dependent_items

- Publishing blacklist configuration has been changed. |br|
  From a regex:

  .. code-block:: yaml
      :caption: *Old property for the publishing blacklist*

      studio.configuration.publishing.blacklist.regex: >-
          .*/\.keep

  To a git `pathspec <https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefpathspecapathspec>`__
  that is empty by default because ``.keep`` files are always excluded:

  .. code-block:: yaml
      :caption: *New property for the publishing blacklist*
      :emphasize-lines: 1

       studio.configuration.publishing.blacklist.pathspecs: ""

  See :ref:`publishing-blacklist` for more information.

- Content type controllers now use the new content lifecycle API |br|
  When upgrading to CrafterCMS version 5.0.0, the Upgrade Manager will compare ``controller.groovy`` to the
  default script from built-in blueprints. If they match, the script will be deleted.

  If they don't match, the entire file will be commented out and a ``logger.error`` statement will be added so admins
  can manually check and fix as required. Below is an example of a commented out controller script after upgrading to
  version 5.0. Notice the ``logger.error`` statement added:

  .. code-block:: groovy
      :caption: *Example controller script commented out when upgrading*
      :emphasize-lines: 37

      /*
        WARNING: This controller script was not updated automatically.
        Please review and update it manually to ensure compatibility with the new version of Crafter Studio.
        Original content commented out below
      */
      ///*
      // * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
      // *
      // * This program is free software: you can redistribute it and/or modify
      // * it under the terms of the GNU General Public License version 3 as published by
      // * the Free Software Foundation.
      // *
      // * This program is distributed in the hope that it will be useful,
      // * but WITHOUT ANY WARRANTY; without even the implied warranty of
      // * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      // * GNU General Public License for more details.
      // *
      // * You should have received a copy of the GNU General Public License
      // * along with this program.  If not, see <http://www.gnu.org/licenses/>.
      // */
      //
      //import scripts.libs.CommonLifecycleApi
      //
      //def contentLifecycleParams =[:]
      //contentLifecycleParams.site = site
      //contentLifecycleParams.path = path
      //contentLifecycleParams.user = user
      //contentLifecycleParams.contentType = contentType
      //contentLifecycleParams.contentLifecycleOperation = contentLifecycleOperation
      //contentLifecycleParams.contentLoader = contentLoader
      //contentLifecycleParams.applicationContext = applicationContext
      //
      //def controller = new CommonLifecycleApi(contentLifecycleParams)
      //controller.execute()
      //
      //System.out.println("Server side content lifecycle event : " + contentLifecycleOperation)
      logger.error('This controller is disabled. Please review and upgrade to use the 5.0 content lifecycle API')

  |

  Here's the output of the controller script above after the upgrade:

  .. code-block:: text
      :caption: *Controller script logger output when running the commented out controller script after an upgrade*

      [ERROR] 2025-10-16T16:15:24,277 [http-nio-8080-exec-5] [Lifecycle-edd-/page/article] | This controller is disabled. Please review and upgrade to use the 5.0 content lifecycle API

  |

  Please see :ref:`server-side-form-controllers` and :ref:`content-processors-configuration` for more information on
  content type controller scripts and content processors configuration.

- The following permissions are removed from CrafterCMS 5.0.0:

  - **cancel_publish**: replaced by **publish_cancel** for name consistency
  - **get_publishing_queue**: replaced by **publish_get_queue** for name consistency
  - **publish**: use the new **publish_approve** and **publish_request**
  - **publish_by_commits**: use the new **publish_approve** and **publish_request**
  - **publish_clear_lock**: removed

  See :ref:`permission-mappings` for more information on permissions for version 5.0.0

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
