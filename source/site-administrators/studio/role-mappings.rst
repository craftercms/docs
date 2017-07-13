.. _role-mappings

=============
Role Mappings
=============

Users only sees the items that they have been granted access to based on the permissions granted to the Role they have been assigned to.  The role mappings configuration file defines the mapping between the group that the user belongs to and the studio authoring role.  To modify the role mappings, click on **Site Config** from the bottom of the *Sidebar*, then click on **Configuration** and select **Role Mappings** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-role-mappings.png
    :alt: Configurations - Open Role Mappings
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: /cstudio/config/sites/SITENAME/role-mappings.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- role-mappings-config.xml

        This file maps groups to roles.

        The structure of this file:

        <role-mappings>
            <groups>
                <group name="Admin">
                    <role>admin</role>
                </group>
                <group name="Developer">
                    <role>developer</role>
                </group>
                <group name="Author">
                    <role>author</role>
                </group>
                <group name="Publisher">
                    <role>publisher</role>
                </group>
                <group name="Reviewer">
                    <role>reviewer</role>
                </group>
            </groups>
        </role-mappings>


        Please note that by default, sites are created with the groups and roles above. However, if LDAP authentication
        is configured, additional groups will be automatically created for the site as site members sign in via LDAP.
        Those new groups can then be mapped to roles in this file. This then allows LDAP managed users to automatically
        get roles within a site based on their LDAP group membership.

    -->
    <role-mappings>
        <groups>
            <group name="Admin">
                <role>admin</role>
            </group>
            <group name="Developer">
                <role>developer</role>
            </group>
            <group name="Author">
                <role>author</role>
            </group>
            <group name="Publisher">
                <role>publisher</role>
            </group>
            <group name="Reviewer">
                <role>reviewer</role>
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
