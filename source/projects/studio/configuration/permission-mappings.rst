Permission Mappings
===================

Sample
------

.. code-block:: xml
    :caption: /cstudio/config/sites/SITENAME/permission-mappings.xml

    <?xml version="1.0" encoding="UTF-8"?>
    <permissions>
        <site id="SITENAME">
            <role name="admin">
                <rule regex="/.*">
                    <allowed-permissions>
                        <permission>Read</permission>
                        <permission>Write</permission>
                        <permission>Delete</permission>
                        <permission>Create Folder</permission>
                        <permission>Publish</permission>
                        <permission>Create Content</permission>
                        <permission>Change Content Type</permission>
                    </allowed-permissions>
                </rule>
                <rule regex="~DASHBOARD~">
                    <allowed-permissions>
                        <permission>Read</permission>
                        <permission>Write</permission>
                        <permission>Delete</permission>
                        <permission>Create Folder</permission>
                        <permission>Publish</permission>
                        <permission>Create Content</permission>
                        <permission>Change Content Type</permission>
                    </allowed-permissions>
                </rule>
            </role>
            <role name="author">
                <rule regex="/.*">
                    <allowed-permissions>
                        <permission>Read</permission>
                        <permission>Write</permission>
                    </allowed-permissions>
                </rule>
                <rule regex="~DASHBOARD~">
                    <allowed-permissions>
                        <permission>Read</permission>
                        <permission>Write</permission>
                    </allowed-permissions>
                </rule>
            </role>
            <role name="*">
                <rule regex="/.*">
                    <allowed-permissions>
                        <permission>Read</permission>
                    </allowed-permissions>
                </rule>
                <rule regex="~DASHBOARD~">
                    <allowed-permissions>
                        <permission>Read</permission>
                    </allowed-permissions>
                </rule>
            </role>
        </site>
    </permissions>

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
        Regular expression to filter paths where permission is applied
        Value regex="~DASHBOARD~" is special regular expression applied for content displayed in dashboard widgets only
    ``/permissions/site/role/rule/allowed-permissions/permission``
        Allowed permission for role and rule (possible values give in the table above)