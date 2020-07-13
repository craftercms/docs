:is-up-to-date: True

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

To modify/view the permission mappings for your site in Studio, click on |siteConfig| at the bottom of the *Sidebar*, then click on **Configurations** and select **Permissions Mapping** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-permission-mappings.png
    :alt: Configurations - Open Permission Mappings
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/permission-mappings-config.xml*
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- permission-mappings-config.xml

      This files contains the permissions mappings for the roles defined in
      role-mappings-config.xml.

      Permissions are defined per:
      site > role > rule

      Rules have a regex expression that govern the scope of the permissions assigned.

      Permissions are:
      - add_remote
      - cancel_failed_pull
      - cancel_publish
      - Change Content Type
      - clone_content_cmis
      - commit_resolution
      - Create Content
      - Create Folder
      - Delete
      - delete_content
      - encryption_tool
      - get_publishing_queue
      - list_cmis
      - list_remotes
      - Publish
      - pull_from_remote
      - push_to_remote
      - Read
      - rebuild_database
      - remove_remote
      - resolve_conflict
      - S3 Read
      - S3 Write
      - search_cmis
      - site_diff_conflicted_file
      - site_status
      - upload_content_cmis
      - webdav_read
      - webdav_write
      - Write
      - write_configuration

      Absence of permissions means the permission is denied.

      For example, to grant the role component_author the ability to read/write
      components and read-only to everything else:

          <role name="author">
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

      A regex of "~DASHBOARD~" governs view access to the publishing workflow
      related dashboard widgets:
      - Items Waiting For Approval
      - Approved Scheduled Items
      - Recently Published

      To grant a role the ability to view these dashboard widgets, simple grant
      the role the permission Publish to the scope ~DASHBOARD~. For example:

          <rule regex="~DASHBOARD~">
            <allowed-permissions>
              <permission>Publish</permission>
            </allowed-permissions>
          </rule>

    -->
    permissions>
      <version>12</version>
      <role name="author">
        <rule regex="/site/website/.*">
          <allowed-permissions>
            <permission>Read</permission>
            <permission>Write</permission>
            <permission>Create Content</permission>
            <permission>Create Folder</permission>
            <permission>list_cmis</permission>
            <permission>search_cmis</permission>
            <permission>clone_content_cmis</permission>
            <permission>upload_content_cmis</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/site/components|/site/components/.*">
          <allowed-permissions>
            <permission>Read</permission>
            <permission>Write</permission>
            <permission>Create Content</permission>
            <permission>Create Folder</permission>
            <permission>list_cmis</permission>
            <permission>search_cmis</permission>
            <permission>clone_content_cmis</permission>
            <permission>upload_content_cmis</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/static-assets|/static-assets/.*">
          <allowed-permissions>
            <permission>Read</permission>
            <permission>Write</permission>
            <permission>Create Content</permission>
            <permission>Create Folder</permission>
            <permission>list_cmis</permission>
            <permission>search_cmis</permission>
            <permission>clone_content_cmis</permission>
            <permission>upload_content_cmis</permission>
          </allowed-permissions>
        </rule>
        <rule regex=".*">
          <allowed-permissions>
            <permission>S3 Read</permission>
            <permission>S3 Write</permission>
          </allowed-permissions>
        </rule>
      </role>
      <role name="publisher">
        <rule regex="/site/.*">
          <allowed-permissions>
            <permission>Read</permission>
            <permission>Write</permission>
            <permission>Create Content</permission>
            <permission>Create Folder</permission>
            <permission>Publish</permission>
            <permission>list_cmis</permission>
            <permission>search_cmis</permission>
            <permission>clone_content_cmis</permission>
            <permission>upload_content_cmis</permission>
          </allowed-permissions>
        </rule>
        <rule regex="^/site/(?!website/index\.xml)(.*)">
          <allowed-permissions>
            <permission>Delete</permission>
            <permission>delete_content</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/(static-assets|templates|scripts)/.*">
          <allowed-permissions>
            <permission>Read</permission>
            <permission>Write</permission>
            <permission>Delete</permission>
            <permission>Create Content</permission>
            <permission>Create Folder</permission>
            <permission>Publish</permission>
            <permission>list_cmis</permission>
            <permission>search_cmis</permission>
            <permission>clone_content_cmis</permission>
            <permission>upload_content_cmis</permission>
            <permission>delete_content</permission>
          </allowed-permissions>
        </rule>
        <rule regex="~DASHBOARD~">
          <allowed-permissions>
            <permission>Publish</permission>
          </allowed-permissions>
        </rule>
        <rule regex=".*">
          <allowed-permissions>
            <permission>S3 Read</permission>
            <permission>S3 Write</permission>
          </allowed-permissions>
        </rule>
      </role>
      <role name="developer">
        <rule regex="/.*">
          <allowed-permissions>
            <permission>Read</permission>
            <permission>Write</permission>
            <permission>Publish</permission>
            <permission>Create Folder</permission>
            <permission>Create Content</permission>
            <permission>Change Content Type</permission>
            <permission>list_cmis</permission>
            <permission>search_cmis</permission>
            <permission>clone_content_cmis</permission>
            <permission>upload_content_cmis</permission>
            <permission>write_configuration</permission>
            <permission>encryption_tool</permission>
          </allowed-permissions>
        </rule>
        <rule regex="^/(?!site/website/index\.xml)(.*)">
          <allowed-permissions>
            <permission>Delete</permission>
            <permission>delete_content</permission>
            <permission>write_configuration</permission>
          </allowed-permissions>
        </rule>
        <rule regex="~DASHBOARD~">
          <allowed-permissions>
            <permission>Publish</permission>
          </allowed-permissions>
        </rule>
        <rule regex=".*">
          <allowed-permissions>
            <permission>S3 Read</permission>
            <permission>S3 Write</permission>
          </allowed-permissions>
        </rule>
      </role>
      <role name="admin">
        <rule regex="/.*">
          <allowed-permissions>
            <permission>Read</permission>
            <permission>Write</permission>
            <permission>Publish</permission>
            <permission>Create Folder</permission>
            <permission>Create Content</permission>
            <permission>Change Content Type</permission>
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
            <permission>write_configuration</permission>
            <permission>site_status</permission>
            <permission>resolve_conflict</permission>
            <permission>site_diff_conflicted_file</permission>
            <permission>commit_resolution</permission>
            <permission>cancel_failed_pull</permission>
            <permission>encryption_tool</permission>
          </allowed-permissions>
        </rule>
        <rule regex="^/(?!site/website/index\.xml)(.*)">
          <allowed-permissions>
            <permission>Delete</permission>
          </allowed-permissions>
        </rule>
        <rule regex="~DASHBOARD~">
          <allowed-permissions>
            <permission>Publish</permission>
            <permission>add_remote</permission>
            <permission>list_remotes</permission>
            <permission>pull_from_remote</permission>
            <permission>push_to_remote</permission>
            <permission>rebuild_database</permission>
            <permission>remove_remote</permission>
            <permission>write_configuration</permission>
            <permission>site_status</permission>
            <permission>resolve_conflict</permission>
            <permission>site_diff_conflicted_file</permission>
            <permission>commit_resolution</permission>
            <permission>cancel_failed_pull</permission>
            <permission>encryption_tool</permission>
          </allowed-permissions>
        </rule>
        <rule regex=".*">
          <allowed-permissions>
            <permission>S3 Read</permission>
            <permission>S3 Write</permission>
          </allowed-permissions>
        </rule>
      </role>
      <role name="reviewer">
        <rule regex="/.*">
          <allowed-permissions>
            <permission>Read</permission>
            <permission>Publish</permission>
          </allowed-permissions>
        </rule>
        <rule regex="~DASHBOARD~">
          <allowed-permissions>
            <permission>Publish</permission>
          </allowed-permissions>
        </rule>
        <rule regex=".*">
          <allowed-permissions>
            <permission>S3 Read</permission>
          </allowed-permissions>
        </rule>
      </role>
      <role name="*">
        <rule regex="/.*">
          <allowed-permissions>
            <permission>Read</permission>
          </allowed-permissions>
        </rule>
        <rule regex=".*">
          <allowed-permissions>
            <permission>S3 Read</permission>
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
cancel_failed_pull         User is permitted to cancel a failed pull from a repository
cancel_publish             User is permitted to cancel a publish request
Change Content Type        User is permitted to change content type
clone_content_cmis         User is permitted to clone content from a CMIS repository
commit_resolution          User is permitted to commit resolution
Create Content             User is permitted to create new content
Create Folder              User is permitted to create new folder
Delete                     User is permitted to delete content
delete_content             User is permitted to delete content using API v2
encryption_tool            User is permitted to encrypt a text value
get_publishing_queue       User is permitted to get the list of packages in the publishing queue
list_cmis                  User is permitted to list files and folders in a CMIS repository with an optional range for pagination
list_remotes               User is permitted to list remote repositories for a site
Publish                    User is permitted to approve submitted content for publishing or publish content
pull_from_remote           User is permitted to pull content from remote repository to site content repository
push_to_remote             User is permitted to push content to remote repository from site content repository
Read                       User is permitted to read content
rebuild_database           User is permitted to rebuild Crafter Studio’s database and object state with the underlying repository
remove_remote              User is permitted to remove remote repository from site content repository
resolve_conflict           User is permitted to resolve a conflict for a file by accepting ours or theirs
S3 Read                    User is permitted to get a list of items from an S3 bucket
S3 Write                   User is permitted to upload a file to an S3 bucket
search_cmis                User is permitted to search files and folders in a CMIS repository with an optional range for pagination
site_diff_conflicted_file  User is permitted to get the difference between ``ours`` and ``theirs`` for a conflicted file for a site
site_status                User is permitted to get status of repository for a site
upload_content_cmis        User is permitted to upload an asset file to CMIS repository
webdav_read                User is permitted to get a list of items from a WebDAV server
webdav_write               User is permitted to upload a file to a WebDAV server
Write                      User is permitted to user is permitted to edit content
write_configuration        User is permitted to write configuration content for site
========================== ================================================================================


    ``/permissions/site/role@name``
        Role name
    ``/permissions/site/role/rule@regex``
        Regular expression to filter paths where permission is applied.
        The value regex="~DASHBOARD~" is a special regular expression applied for content displayed in dashboard widgets only
    ``/permissions/site/role/rule/allowed-permissions/permission``
        Allowed permission for role and rule (possible values given in the table above)
