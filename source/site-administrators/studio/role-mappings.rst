=============
Role Mappings
=============

Users only sees the items that they have been granted access to based on the permissions granted to the Role they have been assigned to.  The role mappings configuration file defines the mapping between the group that the user belongs to and studio authoring role.  To modify the role mappings, click on **Site Config** from the bottom of the *Sidebar*, then click on **Configuration** and select **Role Mappings** from the dropdown list.

.. image:: /_static/images/config-open-role-mappings.png
    :alt: Configurations - Open Role Mappings
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: /cstudio/config/sites/SITENAME/role-mappings.xml

    <?xml version="1.0" encoding="UTF-8"?>
    <role-mappings>
        <groups>
            <group name="crafter-admin">
                <role>admin</role>
            </group>
            <group name="crafter-author">
                <role>author</role>
            </group>

            <group name="crafter_SITENAME_admin">
                <role>admin</role>
            </group>
            <group name="crafter_SITENAME_author">
                <role>author</role>
            </group>
            <group name="crafter_SITENAME_viewer">
                <role>viewer</role>
            </group>
        </groups>
    </role-mappings>

-----------
Description
-----------

    ``/role-mappings/groups/group@name``
        Name of the user group

    ``/role-mappings/groups/role``
        Name of authoring role that group will map to
