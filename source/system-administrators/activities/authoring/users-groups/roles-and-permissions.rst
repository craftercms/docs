:is-up-to-date: True

.. index:: Roles and Permissions

.. _roles-and-permissions:

=====================
Roles and Permissions
=====================

To access Crafter CMS, a user must be allowed access rights to certain areas of the site (access rights/ permissions).  For example, if a user wants to create, edit or submit content, the user needs to have those specific permissions.  Here, we see that the user requires multiple permissions.  For simplicity, permissions are grouped together into **roles**.  A role is a set of allowed actions/activities.  An **author** role, for example, has access to create, edit and submit content.

To define permissions for users, they need to be a member of a group.  A group is a collection of users with a role assigned.  Groups are used to simplify management as changes made to the rights of the group applies to all the users belonging to that group.  For our example above of a user that wants to create, edit or submit content, the user should be assigned to a group with the **author** role.

Out of the box, Crafter CMS supports the following roles/groups:

============== ================= =========================================================
Role           Group             Description
============== ================= =========================================================
system_admin   system_admin      Has access to everything in the CMS, such as all the sites, users, groups, etc. in addition to the admin role
admin          site_admin        Has access to everything in the site such as site configurations, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to the publisher role
author         site_author       Has access to create, edit or submit content in a site
developer      site_developer    Has access to access to creating/editing layouts, templates, taxonomies, content types, scripts, etc., site configurations in addition to the publisher role in a site
reviewer       site_reviewer     Has the ability to approve and reject workflow, but don't have access to the author role in a site
publisher      site_publisher    Has the ability to approve and reject workflow, in addition to the author role in a site
============== ================= =========================================================

Permissions and roles can be setup for each site, and for the entire application itself.  Note that the ``system_admin`` role applies to the entire application and the rest of the default roles applies to a site.

See :ref:`groups-management` for more information on administrating groups.

-----
Sites
-----

To edit permissions for a site role, in Studio, from the *Sidebar*, click on |siteConfig| -> *Configuration* -> *Permission Mapping*.  See :ref:`permission-mappings` for more information on permissions and the default permissions assigned to roles.

To add/edit a role for a site, in Studio, from the *Sidebar*, click on |siteConfig| -> *Configuration* -> *Role Mapping*. See :ref:`role-mappings` for more information.

The items for interaction/tools available from the **Sidebar** depending on the user role can be configured in Studio, from the *Sidebar*, click on |siteConfig| -> *Configuration* -> *Sidebar Configuration*. See :ref:`sidebar-configuration` for more information.

------
Global
------

To add/edit a global role/group, see :ref:`global-role-mappings-config` for more information.

To add/edit global permissions for a role, see :ref:`global-permission-mappings-config` for more information.

The items for interaction/tools available from the |mainMenu| *Main Menu* depending on the user role can be configured by opening the :ref:`global-menu-config.xml <global-menu-config>` file under ``CRAFTER_HOME/data/repos/global/configuration`` using your favorite editor.


