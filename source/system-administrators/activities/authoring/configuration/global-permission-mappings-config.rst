:is-up-to-date: True

:orphan:

.. index:: Global Permission Mappings Config

.. _global-permission-mappings-config:

=================================
Global Permission Mappings Config
=================================

The global permission mappings configuration file lets you configure the permissions to a role globally for the entire application

Permissions per site are managed within Crafter Studio's UI.  See :ref:`permission-mappings` for more information on site permissions.

Here's the default global permissions configuration.  It contains the permissions mappings for the roles defined in the :ref:`global role mappings configuration <global-role-mappings-config>` file.  To access the file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/`` then open the file ``global-permission-mappings-config.xml``.  Remember to restart Crafter so your changes to the file will take effect.

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/global/configuration/global-permission-mappings-config.xml*
   :linenos:

   <!--
      This file contains global permissions configuration for Crafter Studio. Permissions per site are managed
      within Crafter Studio's UI.

      The structure of this file is:
      <permissions>
        <site id="###GLOBAL###"> (global management)
          <role name="">
            <rule regex="/.*">
              <allowed-permissions>
                <permission>Read</permission>
                <permission>Write</permission>
                <permission>Delete</permission>
                <permission>Create Folder</permission>
                <permission>Publish</permission>
              </allowed-permissions>
            </rule>
          </role>
        </site>
      </permissions>

      This binds a set of permissions to a role globally for the entire application.
    -->

   <permissions>
     <role name="system_admin">
       <rule regex="/.*">
         <allowed-permissions>
           <permission>Read</permission>
           <permission>Write</permission>
           <permission>Delete</permission>
           <permission>Create Folder</permission>
           <permission>Publish</permission>
           <permission>create-site</permission>
           <permission>read_groups</permission>
           <permission>create_groups</permission>
           <permission>update_groups</permission>
           <permission>delete_groups</permission>
           <permission>read_users</permission>
           <permission>create_users</permission>
           <permission>update_users</permission>
           <permission>delete_users</permission>
           <permission>read_cluster</permission>
           <permission>create_cluster</permission>
           <permission>update_cluster</permission>
           <permission>delete_cluster</permission>
           <permission>audit_log</permission>
           <permission>read_logs</permission>
           <permission>list_cmis</permission>
           <permission>search_cmis</permission>
           <permission>clone_content_cmis</permission>
           <permission>upload_content_cmis</permission>
           <permission>add_remote</permission>
           <permission>list_remotes</permission>
           <permission>pull_from_remote</permission>
           <permission>push_to_remote</permission>
           <permission>rebuild_database</permission>
           <permission>remove_remote</permission>
           <permission>S3 Read</permission>
           <permission>S3 Write</permission>
           <permission>delete_content</permission>
           <permission>webdav_read</permission>
           <permission>webdav_write</permission>
           <permission>write_configuration</permission>
           <permission>write_global_configuration</permission>
           <permission>encryption_tool</permission>
          </allowed-permissions>
        </rule>
      </role>
    </permissions>

-----------
Description
-----------

List of available permissions

========================== ================================================================================
Permission                 Description
========================== ================================================================================
add_remote                 User is permitted to add a remote repository
audit_log                  User is permitted to access the :ref:`main-menu-tool-audit` from the Main Menu for viewing all the audit logs
cancel_failed_pull         User is permitted to cancel a failed pull from a repository
cancel_publish             User is permitted to cancel a publish request
Change Content Type        User is permitted to change content type
clone_content_cmis         User is permitted to clone content from a CMIS repository
commit_resolution          User is permitted to commit resolution
Create Content             User is permitted to create new content
Create Folder              User is permitted to create new folder
create_cluster             User is permitted to access the :ref:`main-menu-tool-cluster` from the Main Menu for managing clusters
create_groups              User is permitted to access the :ref:`main-menu-tool-groups` from the Main Menu for managing groups
create_users               User is permitted to access the :ref:`main-menu-tool-users` from the Main Menu for managing users
create-site                User is permitted to access the :ref:`main-menu-tool-sites` from the Main Menu for managing sites
Delete                     User is permitted to delete content
delete_cluster             User is permitted to delete a member of the cluster
delete_content             User is permitted to delete content using API v2
delete_groups              User is permitted to delete a group
delete_users               User is permitted to delete a user
encryption_tool            User is permitted to access the :ref:`main-menu-tool-encryption-tool` from the Main Menu to encrypt a text value
get_publishing_queue       User is permitted to get the list of packages in the publishing queue
list_cmis                  User is permitted to list files and folders in a CMIS repository with an optional range for pagination
list_remotes               User is permitted to list remote repositories for a site
Publish                    User is permitted to approve submitted content for publishing or publish content
pull_from_remote           User is permitted to pull content from remote repository to site content repository
push_to_remote             User is permitted to push content to remote repository from site content repository
Read                       User is permitted to read content
read_cluster               User is permitted to read all the members of the cluster
read_groups                User is permitted to get all groups
read_logs                  User is permitted to access the **Logging Levels** and **Log Console** tools from the Main Menu
read_users                 User is permitted to get all users
rebuild_database           User is permitted to rebuild Crafter Studio’s database and object state with the underlying repository
remove_remote              User is permitted to remove remote repository from site content repository
resolve_conflict           User is permitted to resolve a conflict for a file by accepting ours or theirs
S3 Read                    User is permitted to get a list of items from an S3 bucket
S3 Write                   User is permitted to upload a file to an S3 bucket
search_cmis                User is permitted to search files and folders in a CMIS repository with an optional range for pagination
site_diff_conflicted_file  User is permitted to get the difference between ``ours`` and ``theirs`` for a conflicted file for a site
site_status                User is permitted to get status of repository for a site
update_cluster             User is permitted to update the cluster
update_groups              User is permitted to update groups
update_users               User is permitted to update user
upload_content_cmis        User is permitted to upload an asset file to CMIS repository
webdav_read                User is permitted to get a list of items from a WebDAV server
webdav_write               User is permitted to upload a file to a WebDAV server
Write                      User is permitted to user is permitted to edit content
write_configuration        User is permitted to write configuration content for site
write_global_configuration User is permitted access to the :ref:`main-menu-tool-global-config` tool from the Main Menu
========================== ================================================================================
