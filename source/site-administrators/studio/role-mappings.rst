:is-up-to-date: True

.. index:: Role Mappings

.. _role-mappings:

=============
Role Mappings
=============

Users only sees the items that they have been granted access to based on the permissions granted to the Role they have been assigned to.  The role mappings configuration file defines the mapping between the group that the user belongs to and the studio authoring role.  To modify the role mappings, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Role Mappings** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-role-mappings.png
    :alt: Configurations - Open Role Mappings
    :width: 65 %
    :align: center

------
Sample
------

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/sandbox/SITENAME/sandbox/config/studio/role-mappings-config.xml*
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- role-mappings-config.xml

        This file maps groups to roles.

        The structure of this file:

        <role-mappings>
            <groups>
                <group name="site_admin">
                    <role>admin</role>
                </group>
                <group name="site_developer">
                    <role>developer</role>
                </group>
                <group name="site_author">
                    <role>author</role>
                </group>
                <group name="site_publisher">
                    <role>publisher</role>
                </group>
                <group name="site_reviewer">
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
        <version>2</version>
        <groups>
            <group name="site_admin">
                <role>admin</role>
            </group>
            <group name="site_developer">
                <role>developer</role>
            </group>
            <group name="site_author">
                <role>author</role>
            </group>
            <group name="site_publisher">
                <role>publisher</role>
            </group>
            <group name="site_reviewer">
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

------------------
Default Site Roles
------------------

Crafter CMS comes with predefined roles out of the box for sites.
Here's a list of predefined roles for sites:

* **admin**: Users with the ``admin`` role have access to site configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow

* **developer**: Users with the ``developer`` role have access to site configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow

* **reviewer**: Users with the ``reviewer`` role have the ability to approve and reject workflow. They also have access to a number of dashboards which are not available to content contributors (users with role ``author``) including ``Recently Published`` and ``Approved Scheduled Items``.  They do not have access to edit content.

* **publisher**: Users with the ``publisher`` role have the ability to approve and reject workflow. They also have access to a number of dashboards which are not available to content contributors (users with role ``author``) including ``Recently Published`` and ``Approved Scheduled Items``.  In addition, they also have access to create, edit and submit content like the ``author`` role.

* **author**: Users with the role ``author`` have access to create, edit and submit content

See :ref:`permission-mappings` for more information on all items accessible for each role in a site.