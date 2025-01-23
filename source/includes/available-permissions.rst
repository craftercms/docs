
.. list-table:: Available Permissions
    :header-rows: 1
    :widths: 25 15 60

    * - Permission
      - Scope
      - Description
    * - add_remote
      - Project
      - User is permitted to add a remote repository to the project. |br|
        Required for using the :ref:`Git project tool <project-tools-git>` to add a repository in a project using the
        ``New Remote`` button which uses the :base_url:`Add remote repository <_static/api/studio.html#tag/repository/operation/addRemoteRepository>` API.
    * - cancel_failed_pull
      - Project
      - User is permitted to cancel a failed pull from a repository. |br|
        Required for using the :ref:`Git project tool <project-tools-git>` to cancel a failed pull in the UI via
        the API :base_url:`Cancel failed pull <_static/api/studio.html#tag/repository/operation/cancelFailedPull>`
    * - commit_resolution
      - Project
      - User is permitted to commit resolution |br|
        Required for using the :ref:`Git project tool <project-tools-git>` to commit resolution in the UI via
        the API :base_url:`Commit resolution <_static/api/studio.html#tag/repository/operation/commitResolution>`
    * - list_remotes
      - Project
      - User is permitted to list remote repositories for a project |br|
        Required for using the :ref:`Git project tool <project-tools-git>` to list remote repositories for a project in
        the UI via the API :base_url:`List remote repositories <_static/api/studio.html#tag/repository/operation/listRemoteRepositories>`
    * - pull_from_remote
      - Project
      - User is permitted to pull content from remote repository to project content repository |br|
        Required for using the :ref:`Git project tool <project-tools-git>` to pull content from remote repository in the UI via
        the API :base_url:`Pull from remote repository <_static/api/studio.html#tag/repository/operation/pullFromRemoteRepository>`
    * - push_to_remote
      - Project
      - User is permitted to push content to remote repository from project content repository |br|
        Required for using the :ref:`Git project tool <project-tools-git>` to push content to remote repository in the UI via
        the API :base_url:`Push to remote repository <_static/api/studio.html#tag/repository/operation/pushToRemoteRepository>`
    * - remove_remote
      - Project
      - User is permitted to remove remote repository from project content repository |br|
        Required for using the :ref:`Git project tool <project-tools-git>` to remove remote repository from project in the UI via
        the API :base_url:`Remove remote repository <../../../_static/api/studio.html#tag/repository/operation/removeRemoteRepository>`
    * - repair_repository
      - Project
      - User is permitted to repair the repository
    * - resolve_conflict
      - Project
      - User is permitted to resolve a conflict for a file by accepting ours or theirs |br|
        Required for using the :ref:`Git project tool <project-tools-git>` to resolve a conflict for a file in the UI via
        the API :base_url:`Resolve conflict <_static/api/studio.html#tag/repository/operation/resolveConflict>`
    * - site_diff_conflicted_file
      - Project
      - User is permitted to get the difference between ``ours`` and ``theirs`` for a conflicted file for a project |br|
        Required for using the :ref:`Git project tool <project-tools-git>` to get the difference between ``ours`` and
        ``theirs`` for a conflicted file in the UI or via the API :base_url:`Diff conflicted file <_static/api/studio.html#tag/repository/operation/diffConflictedFile>`
    * -
      -
      -
    * - cancel_publish
      - Project
      - User is permitted to cancel a publish request from the :ref:`UI <publishing-and-status>`
        or via the API :base_url:`Cancel publishing packages <_static/api/studio.html#tag/publishing/operation/cancelPublishingPackages>`
    * - get_publishing_queue
      - Project
      - User is permitted to get the list of packages in the publishing queue from the :ref:`UI <publishing-and-status>`
        or via the API :base_url:`Publishing packages <_static/api/studio.html#tag/publishing/operation/PublishingPackages>` |br|
        Also required by the API :base_url:`Get package details <_static/api/studio.html#tag/publishing/operation/getPublishingPackageDetails>`
    * - publish
      - Project
      - User is permitted to approve submitted content for publishing or publish content from the :ref:`UI <publishing-and-status>`
        or via the API :base_url:`Publish items <_static/api/studio.html#tag/publishing/operation/publishItems>`
    * - publish_status
      - Project
      - User is permitted to get the publishing status from the :ref:`UI <publishing-and-status>`
        or via the API :base_url:`Get publishing status <_static/api/studio.html#tag/publishing/operation/getPublishingStatus>`
    * - publish_clear_lock
      - Project
      - User is permitted to clear publishing locks from the :ref:`UI <publishing-and-status>`
        or via the API :base_url:`Clear publishing lock <_static/api/studio.html#tag/publishing/operation/clearPublishingLock>`
    * - start_stop_publisher
      - Project
      - User is permitted to start/stop the publisher from the :ref:`UI <publishing-and-status>`
    * -
      -
      -
    * - configure_log_levels
      - System
      - User is permitted to configure log levels from the :ref:`UI <override-logging-levels>`
        or via the API :base_url:`Loggers update level <_static/api/studio.html#tag/loggers/operation/loggersUpdateLevel>`
    * - view_logs
      - System, Project
      - User is permitted to view logs from the :ref:`project tools UI <studio-log-console>` or
        :ref:`Main Menu UI <main-menu-tool-log-console>` depending on where the permission is configured (project or global/system)
    * - view_log_levels
      - System
      - User is permitted to view log levels from the :ref:`Main Menu UI <override-logging-levels>`
        or via the API :base_url:`Loggers get all <_static/api/studio.html#tag/loggers/operation/loggersGetAll>`
    * - audit_log
      - System, Project
      - User is permitted to access the audit logs in the UI from the :ref:`main menu <nav-menu-audit>` or the
        :ref:`project tools <studio-logging>` via the API :base_url:`Get audit log <_static/api/studio.html#tag/audit/operation/getAuditLog>`
    * - read_logs
      - System
      - User is permitted to read logs from the :ref:`Main Menu UI <main-menu-tool-log-console>`
    * -
      -
      -
    * - change_content_type
      - Path
      - User is permitted to change content type from the UI :ref:`Sidebar <sidebar>` or the :ref:`Toolbar <toolbar>` options
    * - content_copy
      - Path
      - User is permitted to copy content from the UI :ref:`Sidebar <sidebar>` or the :ref:`Toolbar <toolbar>` options
    * - content_create
      - Path
      - User is permitted to create new content from the UI :ref:`Sidebar <sidebar>` or the :ref:`Toolbar <toolbar>` options
    * - content_delete
      - Path
      - User is permitted to delete content from the UI :ref:`Sidebar <sidebar>` or the :ref:`Toolbar <toolbar>` options
        or via the API :base_url:`Delete content <_static/api/studio.html#tag/content/operation/getDeletePackage>`
    * - content_read
      - Path
      - User is permitted to read content from the UI or use various APIs e.g. getting the history for a content item
        via the API :base_url:`Get item history <_static/api/studio.html#tag/content/operation/getItemHistory>`,
        getting the preview image of a given content type via the API
        :base_url:`Get content type preview image <_static/api/studio.html#tag/content/operation/getContentTypePreviewImage>`, etc.
    * - content_search
      - Path
      - User is permitted to search for content from the UI
    * - content_write
      - Path
      - User is permitted to edit content in the UI or use various APIs e.g. renaming content
        via the API :base_url:`Rename content <_static/api/studio.html#tag/content/operation/contentRename>`, etc.
    * - folder_create
      - Path
      - User is permitted to create new folder
    * - s3_read
      - Path
      - User is permitted to get a list of items from an S3 bucket defined in the :ref:`AWS S3 profile <aws-profile-configuration>`
        configured.|br| This is required when using the API to :base_url:`Get a list of items from an S3 bucket <_static/api/studio.html#tag/aws/operation/listItems>`
    * - s3_write
      - Path
      - User is permitted to upload a file to an S3 bucket defined in the :ref:`AWS S3 profile <aws-profile-configuration>`
        configured.|br| This is required when using the API to :base_url:`Upload a file to an S3 bucket <_static/api/studio.html#tag/aws/operation/uploadItems>`, etc.
    * - webdav_read
      - Path
      - User is permitted to get a list of items from a WebDAV server configured in the :ref:`WebDAV profiles <webdav-profiles-configuration>`
        configuration file. |br| This is required when using the API to :base_url:`Get a list of items from a WebDAV server <_static/api/studio.html#tag/webdav/operation/listItemsWebdav>`
    * - webdav_write
      - Path
      - User is permitted to upload a file to a WebDAV server configured in the :ref:`WebDAV profiles <webdav-profiles-configuration>`
        configuration file. |br| This is required when using the API to :base_url:`Upload a file to a WebDAV server <_static/api/studio.html#tag/webdav/operation/uploadItemsWebdav>`
    * -
      -
      -
    * - duplicate_site
      - System
      - User is permitted to :ref:`duplicate a project <duplicate-project>`
    * - create_site
      - System
      - User is permitted to :ref:`create projects <your-first-editorial-project>`
    * - delete_site
      - System
      - User is permitted to delete projects |br|
        This is required when using the API to :base_url:`Delete a project <_static/api/studio.html#tag/sites/operation/deleteSite>`
    * - edit_site
      - System
      - User is permitted to edit sites |br|
        Required when using the following APIs:

        - :base_url:`Update the name and description for a given site <_static/api/studio.html#tag/sites/operation/updateSite>`
        - :base_url:`Unlock a site locked with state LOCKED <_static/api/studio.html#tag/sites/operation/unlockSite>`
    * - create_groups
      - System
      - User is permitted to :ref:`create new groups <create-a-new-group>` |br|
        Required when using the API to :base_url:`Create group <_static/api/studio.html#tag/groups/operation/createGroup>`
    * - read_groups
      - System
      - User is permitted to read groups |br|
        Used for :ref:`administering groups <groups-management>`
        Required when using the following APIs:

        - :base_url:`Get all groups <_static/api/studio.html#tag/groups/operation/getGroups>`
        - :base_url:`Get group by ID <_static/api/studio.html#tag/groups/operation/getGroup>`
        - :base_url:`Get all the members of the specified group <_static/api/studio.html#tag/groups/operation/getGroupMembers>`
    * - update_groups
      - System
      - User is permitted to update groups |br|
        Used for :ref:`administering groups <groups-management>`
        Required when using the following APIs:

        - :base_url:`Update group <_static/api/studio.html#tag/groups/operation/updateGroups>`
        - :base_url:`Add member(s) to the specified group <_static/api/studio.html#tag/groups/operation/addGroupMembers>`
    * - delete_groups
      - System
      - User is permitted to :ref:`delete groups <deleting-a-group>` |br|
        Required when using the following APIs:

        - :base_url:`Delete group <_static/api/studio.html#tag/groups/operation/deleteGroup>`
        - :base_url:`Remove member(s) from the specified group <_static/api/studio.html#tag/groups/operation/removeGroupMembers>`
    * - create_users
      - System
      - User is permitted to :ref:`create new users <creating-a-user>` |br|
        Required when using the API to :base_url:`Create user <_static/api/studio.html#tag/users/operation/createUser>`
    * - delete_users
      - System
      - User is permitted to :ref:`delete users <deleting-a-user>` |br|
        Required when using the API to :base_url:`Create user <_static/api/studio.html#tag/users/operation/deleteUser>`
    * - encryption_tool
      - System, Project
      - User is permitted to access the :ref:`encryption tool <studio-encryption-tool>` |br|
        Required when using the API to :base_url:`Encrypt a text value <_static/api/studio.html#tag/security/operation/encrypt>`
    * - get_children
      - System
      - User is permitted to call getChildren* APIs for browsing project content |br|
        Required when using the following APIs:

        - :base_url:`Get list of children for given item paths <_static/api/studio.html#tag/content/operation/getChildrenByPaths>`
        - :base_url:`Get item details for given an item path <_static/api/studio.html#tag/content/operation/getDetailedItemByPath>`
        - :base_url:`Get list of items for given item paths <_static/api/studio.html#tag/content/operation/getSandboxItemsByPath>`
    * - install_plugins
      - System, Project
      - User is permitted to :ref:`install plugins <plugin-management>` |br|
        Required when using the following APIs:

        - :base_url:`Install plugin <_static/api/studio.html#tag/marketplace/operation/installPlugin>`
        - :base_url:`Copy local plugin <_static/api/studio.html#tag/marketplace/operation/copyPlugin>`
    * - list_plugins
      - System, Project
      - User is permitted to list installed plugins |br|
        Required when using the API to :base_url:`get the list of marketplace plugins installed in the given site <_static/api/studio.html#tag/marketplace/operation/getInstalledPlugins>`
    * - item_unlock
      - Path
      - User is permitted to unlock items |br|
        Required when using the API to :base_url:`unlock item by path <_static/api/studio.html#tag/content/operation/itemUnlockByPath>`
    * - manage_access_token
      - System
      - User is permitted to :ref:`manage the access tokens <nav-menu-token-management>` |br|
        Required when using the following APIs:

        - :base_url:`Get access tokens <_static/api/studio.html#tag/security/operation/getAccessTokens>`
        - :base_url:`Create access token <_static/api/studio.html#tag/security/operation/createAccessToken>`
        - :base_url:`Update access token <_static/api/studio.html#tag/security/operation/updateAccessToken>`
        - :base_url:`Delete access token <_static/api/studio.html#tag/security/operation/deleteAccessToken>`
    * - read_users
      - System
      - User is permitted to read users. Used in the :ref:`Users Management Console <users-management>` |br|
        Required when using the following APIs:

        - :base_url:`Get users <_static/api/studio.html#tag/users/operation/getUsers>`
        - :base_url:`Get user <_static/api/studio.html#tag/users/operation/getUser>`
        - :base_url:`Get user sites <_static/api/studio.html#tag/users/operation/getUserSites>`
        - :base_url:`Get user site roles <_static/api/studio.html#tag/users/operation/getUserSiteRoles>`
    * - update_users
      - System
      - User is permitted to update users. Used in the :ref:`Users Management Console <users-management>` |br|
        Required when using the following APIs:

        - :base_url:`Update user <_static/api/studio.html#tag/users/operation/updateUser>`
        - :base_url:`Enable user <_static/api/studio.html#tag/users/operation/enableUser>`
        - :base_url:`Disable user <_static/api/studio.html#tag/users/operation/disableUser>`
        - :base_url:`Reset user password <_static/api/studio.html#tag/users/operation/resetUserPassword>`
    * - rebuild_database
      - Project
      - User is permitted to rebuild Crafter Studio’s database and object state with the underlying repository
    * - remove_plugins
      - Project
      - User is permitted to :ref:`remove installed plugins <plugin-management>` |br|
        Required when using the following APIs:

        - :base_url:`Remove plugin <_static/api/studio.html#tag/marketplace/operation/removePlugin>`
        - :base_url:`Plugin usage <_static/api/studio.html#tag/marketplace/operation/pluginUsage>`
    * - search_plugins
      - Project
      - User is permitted to :ref:`search for plugins <plugin-management>`
    * - set_item_states
      - Project
      - User is permitted to set item states |br|
        Required when using the following APIs:

        - :base_url:`Set item states <_static/api/studio.html#tag/workflow/operation/setItemStates>`
        - :base_url:`Update item states <_static/api/studio.html#tag/workflow/operation/updateItemStates>`
    * - site_status
      - Project
      - User is permitted to :ref:`get status of repository for a project <project-tools-git>` |br|
        Required when using the API :base_url:`Repository status <_static/api/studio.html#tag/repository/operation/repositoryStatus>`
    * - unlock_repository
      - Project
      - User is permitted to unlock the repository
    * - update_cluster |enterpriseOnly|
      - System
      - User is permitted to update cluster
    * - read_cluster |enterpriseOnly|
      - System
      - User is permitted to read cluster |br|
        Required when using the following APIs:

        - :base_url:`Get the local Studio instance cluster mode <_static/api/studio.html#tag/cluster/operation/getClusterMode>`
        - :base_url:`Get all the members of the cluster <_static/api/studio.html#tag/cluster/operation/getClusterMembers>`
    * - create_cluster |enterpriseOnly|
      - System
      - User is permitted to create cluster
    * - delete_cluster |enterpriseOnly|
      - System
      - User is permitted to delete clusters
    * - read_configuration
      - Project
      - User is permitted to read configuration content for project |br|
        Required when using the following APIs:

        - :base_url:`Get all model definitions for site <_static/api/studio.html#tag/model/operation/getAllModelDefinitions>`
        - :base_url:`Get configuration content for site and configuration location <_static/api/studio.html#tag/configuration/operation/getConfiguration>`
        - :base_url:`Get configuration history for site and configuration location <_static/api/studio.html#tag/configuration/operation/getConfigurationHistory>`
    * - write_configuration
      - Project, System
      - User is permitted to write configuration content for project |br|
        Required when using the following APIs:

        - :base_url:`Write configuration content for site <_static/api/studio.html#tag/configuration/operation/writeConfiguration>`
        - :base_url:`Write configuration content a given site and plugin <_static/api/studio.html#tag/configuration/operation/writePluginConfiguration>`
        - :base_url:`Clear all configuration cache for a given site <_static/api/studio.html#tag/configuration/operation/clearConfigurationCache>`
        - :base_url:`Delete files related to a given content-type <_static/api/studio.html#tag/configuration/operation/deleteContentType>`
    * - write_global_configuration
      - System
      - User is permitted to write global configuration content for Studio
