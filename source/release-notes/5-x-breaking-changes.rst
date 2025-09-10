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
