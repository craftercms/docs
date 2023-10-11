List of available permissions

========================== ================================================================================
Permission                 Description
========================== ================================================================================
add_remote                 User is permitted to add a remote repository
audit_log                  User is permitted to access the audit log
cancel_failed_pull         User is permitted to cancel a failed pull from a repository
cancel_publish             User is permitted to cancel a publish request
change_content_type        User is permitted to change content type
commit_resolution          User is permitted to commit resolution
configure_log_levels       User is permitted to configure log levels
content_copy               User is permitted to copy content
content_create             User is permitted to create new content
content_delete             User is permitted to delete content
content_read               User is permitted to read content
content_search             User is permitted to search for content
content_write              User is permitted to edit content
duplicate_site             User is permitted to duplicate a project
folder_create              User is permitted to create new folder
create_cluster             User is permitted to create cluster
create_groups              User is permitted to create new groups
create_users               User is permitted to create new users
create_site                User is permitted to create projects
delete_site                User is permitted to delete projects
delete_cluster             User is permitted to delete clusters
delete_groups              User is permitted to delete groups
delete_users               User is permitted to delete users
edit_site                  User is permitted to edit sites
encryption_tool            User is permitted to access the encryption tool
get_children               User is permitted to call getChildren* APIs for browsing project content
get_publishing_queue       User is permitted to get the list of packages in the publishing queue
install_plugins            User is permitted to install plugins
item_unlock                User is permitted to unlock items
list_plugins               User is permitted to list installed plugins
list_remotes               User is permitted to list remote repositories for a project
manage_access_token        User is permitted to manage the access tokens
publish                    User is permitted to approve submitted content for publishing or publish content
publish_status             User is permitted to get the publishing status
publish_clear_lock         User is permitted to clear publishing locks
pull_from_remote           User is permitted to pull content from remote repository to project content repository
push_to_remote             User is permitted to push content to remote repository from project content repository
read_configuration         user is permitted to read configuration content for project
read_cluster               User is permitted to read cluster
read_groups                User is permitted to read groups
read_logs                  User is permitted to read logs
read_users                 User is permitted to read users
rebuild_database           User is permitted to rebuild Crafter Studio’s database and object state with the underlying repository
remove_plugins             User is permitted to remove installed plugins
remove_remote              User is permitted to remove remote repository from project content repository
repair_repository          User is permitted to repair the repository
resolve_conflict           User is permitted to resolve a conflict for a file by accepting ours or theirs
s3_read                    User is permitted to get a list of items from an S3 bucket
s3_write                   User is permitted to upload a file to an S3 bucket
search_plugins             User is permitted to search for plugins
set_item_states            User is permitted to set item states
site_diff_conflicted_file  User is permitted to get the difference between ``ours`` and ``theirs`` for a conflicted file for a project
site_status                User is permitted to get status of repository for a project
start_stop_publisher       User is permitted to start/stop the publisher
unlock_repository          User is permitted to unlock the repository
update_cluster             User is permitted to update cluster
update_groups              User is permitted to update groups
update_users               User is permitted to update users
view_logs                  User is permitted to view logs
view_log_levels            User is permitted to view log levels
webdav_read                User is permitted to get a list of items from a WebDAV server
webdav_write               User is permitted to upload a file to a WebDAV server
write_configuration        User is permitted to write configuration content for project
write_global_configuration User is permitted to write global configuration content for Studio
========================== ================================================================================

where:

- ``/permissions/site/role@name``
  Role name
- ``/permissions/site/role/rule@regex``
  Regular expression to filter paths where permission is applied.
  The value ``regex="~DASHBOARD~"`` is a special regular expression applied for content displayed in dashboard widgets only
- ``/permissions/site/role/rule/allowed-permissions/permission``
  Allowed permission for role and rule (possible values given in the table above)
