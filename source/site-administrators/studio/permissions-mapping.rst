:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Permission Mappings

.. _permission-mappings:

===================
Permission Mappings
===================

The permission mappings configuration file allows you to assign permissions to folders and objects in a Site giving specific Roles rights to the object.  The permission mappings config file contains the permissions mappings for the roles defined in the role mappings config file.  When applying permissions to Roles, rights are granted by adding permissions inside the tag ``<allowed-permissions>``.  Absence of permissions means the permission is denied.  Rules have a regex expression that govern the scope of the permissions assigned.  A list of available permissions that can be granted to Roles is available after the sample configuration file.

Permissions are defined per:
    site > role > rule

For example, to grant the role component_author the ability to read/write
components and read-only to everything else:

.. code-block:: xml
      :linenos:

      <role name="component_author">
        <rule regex="/site/website/.*">
          <allowed-permissions>
            <permission>Read</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/site/components/.*">
          <allowed-permissions>
            <permission>Read</permission>
            <permission>Write</permission>
            <permission>Create Content</permission>
            <permission>Create Folder</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/static-assets/.*">
          <allowed-permissions>
            <permission>Read</permission>
          </allowed-permissions>
        </rule>
      </role>

A regex of "~DASHBOARD~" governs view access to the publishing workflow related dashboard widgets:

- Items Waiting For Approval
- Approved Scheduled Items
- Recently Published

To grant a role the ability to view these dashboard widgets, simply grant
the role the permission **Publish** to the scope ~DASHBOARD~. For example:

.. code-block:: xml

      <rule regex="~DASHBOARD~">
        <allowed-permissions>
          <permission>Publish</permission>
        </allowed-permissions>
      </rule>

To modify/view the permission mappings for your site in Studio, click on |projectTools| at the bottom of the *Sidebar*, then click on **Configurations** and select **Permissions Mapping** from the list.

.. image:: /_static/images/site-admin/config-open-permission-mappings.jpg
    :alt: Configurations - Open Permission Mappings
    :width: 45 %
    :align: center

------
Sample
------

Here's a sample Permission Mappings Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "permission-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-permission-mappings-config.xml
   :language: xml
   :linenos:


.. raw:: html

   </details>

|
|

-----------
Description
-----------

List of available permissions

========================== ================================================================================
Permission                 Description
========================== ================================================================================
add_remote                 User is permitted to add a remote repository
audit_log                  User is permitted to access the audit log
cancel_failed_pull         User is permitted to cancel a failed pull from a repository
cancel_publish             User is permitted to cancel a publish request
change content type        User is permitted to change content type
clone_content_cmis         User is permitted to clone content from a CMIS repository
commit_resolution          User is permitted to commit resolution
content_create             User is permitted to create new content
folder_create              User is permitted to create new folder
create_cluster             User is permitted to create cluster
create_groups              User is permitted to create new groups
create_users               User is permitted to create new users
create-site                User is permitted to create projects
delete_cluster             User is permitted to delete clusters
content_delete             User is permitted to delete content
delete_groups              User is permitted to delete groups
delete_users               User is permitted to delete users
edit_site                  User is permitted to edit sites
encryption_tool            User is permitted to access the encryption tool
get_children               User is permitted to call getChildren* APIs for browsing project content
get_publishing_queue       User is permitted to get the list of packages in the publishing queue
list_cmis                  User is permitted to list files and folders in a CMIS repository with an optional range for pagination
list_remotes               User is permitted to list remote repositories for a project
publish                    User is permitted to approve submitted content for publishing or publish content
pull_from_remote           User is permitted to pull content from remote repository to project content repository
push_to_remote             User is permitted to push content to remote repository from project content repository
content_read               User is permitted to read content
read_cluster               User is permitted to read cluster
read_groups                User is permitted to read groups
read_logs                  User is permitted to read logs
read_users                 User is permitted to read users
rebuild_database           User is permitted to rebuild Crafter Studio’s database and object state with the underlying repository
remove_remote              User is permitted to remove remote repository from project content repository
resolve_conflict           User is permitted to resolve a conflict for a file by accepting ours or theirs
s3 read                    User is permitted to get a list of items from an S3 bucket
s3 write                   User is permitted to upload a file to an S3 bucket
search_cmis                User is permitted to search files and folders in a CMIS repository with an optional range for pagination
site_diff_conflicted_file  User is permitted to get the difference between ``ours`` and ``theirs`` for a conflicted file for a project
site_status                User is permitted to get status of repository for a project
update_cluster             User is permitted to update cluster
update_groups              User is permitted to update groups
update_users               User is permitted to update users
upload_content_cmis        User is permitted to upload an asset file to CMIS repository
webdav_read                User is permitted to get a list of items from a WebDAV server
webdav_write               User is permitted to upload a file to a WebDAV server
content_write              User is permitted to edit content
write_configuration        User is permitted to write configuration content for project
write_global_configuration User is permitted to write global configuration content for Studio
list_plugins               User is permitted to list installed plugins
install_plugins            User is permitted to install plugins
========================== ================================================================================

    ``/permissions/site/role@name``
        Role name
    ``/permissions/site/role/rule@regex``
        Regular expression to filter paths where permission is applied.
        The value regex="~DASHBOARD~" is a special regular expression applied for content displayed in dashboard widgets only
    ``/permissions/site/role/rule/allowed-permissions/permission``
        Allowed permission for role and rule (possible values given in the table above)
