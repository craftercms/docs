.. _permission-mappings

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

To modify/view the permission mappings for your site in Studio, click on **Site Config** at the bottom of the *Sidebar*, then click on **Configurations** and select **Permissions Mapping** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-permission-mappings.png
    :alt: Configurations - Open Permission Mappings
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/permission-mappings-config.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- permission-mappings-config.xml

      This files contains the permissions mappings for the roles defined in
      role-mappings-config.xml.

      Permissions are defined per:
      site > role > rule

      Rules have a regex expression that govern the scope of the permissions assigned.

      Permissions are:
      - Read
      - Write
      - Create Content
      - Create Folder
      - Create Content Type
      - Publish

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
    <permissions>
      <site id="myawesomesite">
        <role name="author">
          <rule regex="/site/website/.*">
            <allowed-permissions>
              <permission>Read</permission>
              <permission>Write</permission>
              <permission>Create Content</permission>
              <permission>Create Folder</permission>
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
              <permission>Write</permission>
              <permission>Create Content</permission>
              <permission>Create Folder</permission>
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
            </allowed-permissions>
          </rule>
          <rule regex="^/site/(?!website/index\.xml)(.*)">
            <allowed-permissions>
              <permission>Delete</permission>
            </allowed-permissions>
          </rule>
          <rule regex="/static-assets/.*">
            <allowed-permissions>
              <permission>Read</permission>
              <permission>Write</permission>
              <permission>Delete</permission>
              <permission>Create Content</permission>
              <permission>Create Folder</permission>
              <permission>Publish</permission>
            </allowed-permissions>
          </rule>
          <rule regex="~DASHBOARD~">
            <allowed-permissions>
              <permission>Publish</permission>
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
        </role>
        <role name="*">
          <rule regex="/.*">
            <allowed-permissions>
              <permission>Read</permission>
            </allowed-permissions>
          </rule>
        </role>
      </site>
    </permissions>


-----------
Description
-----------

List of available permissions

=================== ================================================================================
Permission          Description
=================== ================================================================================
Read                User is permitted to read content
Write               User is permitted to edit content
Delete              Users is permitted to delete content
Request Delete      User is permitted to submit content for deletion (request delete from approver)
Create Folder       User is permitted to create new folder
Publish             User is permitted to approve submitted content for publishing or publish content
Create Content      User is permitted to create new content
Change Content Type User is permitted to change content type
=================== ================================================================================

    ``/permissions/site@id``
        Site id
    ``/permissions/site/role@name``
        Role name
    ``/permissions/site/role/rule@regex``
        Regular expression to filter paths where permission is applied.
        The value regex="~DASHBOARD~" is a special regular expression applied for content displayed in dashboard widgets only
    ``/permissions/site/role/rule/allowed-permissions/permission``
        Allowed permission for role and rule (possible values give in the table above)
