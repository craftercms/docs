:is-up-to-date: True
:last-updated: 4.2.2

.. index:: Audit, Users, Groups, User Management, Group Management, Cluster, Log Console, Logging Levels, Global Config, Encryption Tool, Navigation Menu

.. highlight:: xml

.. _studio-admin:

=====================
Studio Administration
=====================
Much of the administration of Crafter Studio can be done via the UI. This section describes how to perform these basic tasks.

.. _navigating-main-menu:

------------------------------
Navigating the Navigation Menu
------------------------------
In this section, we discuss the Navigation Menu tools available in Studio. To access, click the ``Navigation Menu`` icon from the top right of the browser

.. image:: /_static/images/system-admin/main-menu/open-main-menu.webp
    :alt: System Administrator - Open Navigation Menu
    :align: center
    :width: 100%

|

Here are the list of tools available when using an out of the box blueprint. The ``Navigation Menu`` tools described below are available to users belonging to the ``system_admin`` group.

.. image:: /_static/images/system-admin/main-menu/main-menu.webp
    :alt: System Administrator - Navigation Menu
    :align: center
    :width: 20%

|

The configuration files for the Navigation Menu is located in ``CRAFTER_HOME/data/repos/global/configuration/`` where:

* :ref:`global-menu-config.xml <global-menu-config>` lets you setup the list of tools available from the Navigation Menu sidebar
* :ref:`global-permission-mappings-config.xml <global-permission-mappings-config>` lets you configure the permissions to a role globally for the entire application
* :ref:`global-role-mappings-config.xml <global-role-mappings-config>` lets you configure the mapping between the group and the role

The tools available in the Navigation Menu is configured similar to how the Project Tools Sidebar is configured :ref:`here <project-tools-ui-configuration>` using the :ref:`global menu config <global-menu-config>` configuration file mentioned above.

.. _main-menu-tool-projects:

^^^^^^^^
Projects
^^^^^^^^
``Projects`` contains a list of all the projects the logged in user has access to. The section :ref:`author-screens` in ``Content Authors`` contains descriptions on some of the actions that can be performed from the Projects screen.  This also allows users with the system admin role to create new projects either from a :ref:`blueprint <your-first-editorial-project>`, a :ref:`remote repository <create-project-with-link-to-remote-repo>` or an :ref:`existing project <duplicate-project>`.

.. image:: /_static/images/system-admin/main-menu/main-menu-sites.webp
    :alt: System Administrator - Navigation Menu Projects
    :align: center
    :width: 85%

|

.. _users-management:

^^^^^
Users
^^^^^
A user is anybody who uses CrafterCMS. The ``Users`` management console lets the administrator manage who has access to
Crafter Studio.

For information on managing users and groups, see :ref:`user-group-management`.

"""""""""""
Description
"""""""""""
The ``Users`` management console allows you to control and set up who can access and manage the sites. All users are listed on
this console.

To find the ``Users`` management console follow the next instructions:

1. Click on the **Navigation Menu** |mainMenu| option located at the top right of the browser, then click on
   **Users** in the sidebar located on the left side of the browser:

   .. image:: /_static/images/users/users-manage-access.webp
       :alt: Users - Manage Access
       :align: center
       :width: 65%

   |

2. Here's the screen that will appear after clicking on **Users**

   .. image:: /_static/images/system-admin/main-menu/main-menu-users.webp
       :alt: Users Dialog
       :align: center
       :width: 65%

   |

"""""""
Actions
"""""""
You can list, search, add or delete users, as well as view specific information.

~~~~~~~~~~~~~
Listing Users
~~~~~~~~~~~~~
To see a list of all existing users, make sure that there are no search terms entered in the search bar. You can also change the number of users listed per page by selecting a different number in the dropdown box at the bottom right of the screen

.. image:: /_static/images/users/users-list-all.webp
    :alt: Users - List All
    :align: center
    :width: 65%

|

'''''''''''''''
Searching Users
'''''''''''''''
You can search for a specific user. To search users, click on the magnifying glass icon on the top right then go
to the search field and type user name, last name, user name or mail.
In the following example we typed "jane", we obtained only one related user: "Jane".

.. image:: /_static/images/users/users-search.webp
    :alt: Users - Search
    :align: center
    :width: 65%

|

.. _creating-a-user:

~~~~~~~~~~~~~~~~~~~
Creating a New User
~~~~~~~~~~~~~~~~~~~
To create a new user, please click on the "Create User" button at the top of the page.

.. image:: /_static/images/users/users-add-new.webp
    :alt: Users - Add New
    :align: center
    :width: 65%

|

A modal dialog will be displayed, please fill out all the fields and finally click on the "**Submit**" button.
If you do not want to create a new user, please click on the "**Cancel**" button.

.. image:: /_static/images/users/users-add.webp
    :alt: Users - Add
    :align: center
    :width: 65%

|

A notification will appear on the screen for a few seconds on successful creation of a new user

.. image:: /_static/images/users/users-create-notification.webp
    :alt: Users - Created Notification
    :align: center

|

.. _editing-a-user:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Viewing and Editing an Existing User
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To view/edit a specific user, please click on the row of the name you want to edit:

.. image:: /_static/images/users/users-view-btn.webp
    :alt: Users - Click on Name to View Details
    :align: center

|

A modal dialog will be displayed with the user information. To finish viewing, click on the "**X**" (close icon) button.

.. image:: /_static/images/users/users-view.webp
    :alt: Users - View User Info
    :align: center
    :width: 65%

|

Once the dialog is displayed, to edit a specific user, simply click on the field that you want to change.
In the above dialog the **Externally Managed** label is displayed which indicates that the user is externally
managed such as the case in LDAP. Notice that since the user is externally managed, the only change that
can be made for the user is the group membership.

For the user dialog displayed below, since the user is not externally managed, all the fields can be changed
for the user. In this dialog, you can modify the user information such as email, first name, last name and
user name, group membership, reset the user's password and delete the user. You can also activate/de-activate
the user currently being viewed by clicking on the slider labeled **Enabled**. Edit the fields you
want to change and then click on the "**Save**" button. If you do not want to edit the user, please click
on the "Cancel" button.

.. image:: /_static/images/users/users-edit.webp
    :alt: Users - Edit
    :align: center
    :width: 65%

|

'''''''''''''''''''''''''''''''''''''
Resetting an Existing User's Password
'''''''''''''''''''''''''''''''''''''
To reset the password of a specific user, please click on the key icon in the user modal dialog as shown in
the following example.

.. image:: /_static/images/users/users-reset-btn.webp
    :alt: Users - Reset Password Icon
    :width: 65%
    :align: center

|

A modal dialog will be displayed, where the admin can reset the users password. Click on ``Save`` to reset the password.

.. image:: /_static/images/users/users-reset.webp
    :alt: Users - Reset Password
    :align: center
    :width: 55%

|

.. _deleting-a-user:

'''''''''''''''''''''''''
Removing an Existing User
'''''''''''''''''''''''''
To remove a specific user, please click on the trash can icon located in the user modal dialog as shown in
the following example.

.. image:: /_static/images/users/users-remove-btn.webp
    :alt: Users - Remove Icon
    :align: center
    :width: 65%

|

A confirmation pop up will be displayed, please click on "**Yes**" to remove the user and click on "**No**" if you do not want to remove it.

.. image:: /_static/images/users/users-remove.webp
    :alt: Users - Remove
    :align: center
    :width: 50%

|

A notification will appear on the screen for a few seconds on successful deletion of a user

.. image:: /_static/images/users/users-delete-notification.webp
    :alt: Users - Deleted Notification
    :align: center

|

.. important::
   When a user is deleted, the deleted user cannot be re-created. Instead of deleting a user,
   we recommend disabling the user, which prevents them from connecting to the system.

   To disable a user, simply click the ``Enabled`` slider to turn it off and a notification snack
   bar at the bottom will appear informing you that the user has been disabled successfully.

   .. image:: /_static/images/users/user-disabled-notification.webp
      :alt: Users - Deleted Notification
      :width: 25%
      :align: center

   |

.. _groups-management:

^^^^^^
Groups
^^^^^^
A group consists of a collection of users. The ``Groups`` management console lets the administrator manage groups,
members belonging to a group, etc.

For information on managing users and groups, see :ref:`user-group-management`.

"""""""""""
Description
"""""""""""
The ``Groups`` management console allows you to administrate the groups created on CrafterCMS. You can add, remove,
edit, and manage the users that will belong to the groups and you can also add and remove groups.

Here's a list of predefined groups and roles in CrafterCMS:

+---------------------+------------------------+----------------+
|| Group              || Description           || Role          |
+=====================+========================+================+
|| system_admin       || System administrator  || system_admin  |
+---------------------+------------------------+----------------+
|| site_admin         || Site administrator    || admin         |
+---------------------+------------------------+----------------+
|| site_author        || Site author           || author        |
+---------------------+------------------------+----------------+
|| site_developer     || Site developer        || developer     |
+---------------------+------------------------+----------------+
|| site_reviewer      || Site reviewer         || reviewer      |
+---------------------+------------------------+----------------+
|| site_publisher     || Site publisher        || publisher     |
+---------------------+------------------------+----------------+

You can add more groups defined whenever needed. The list above is just a starting point for when you first
create your project. The following sections will give you more details on users and groups. The next sections,
Permission Mappings and Role Mappings describes how to setup/assign permissions and roles.

To find this section through studio follow the next instructions:

#. Click on ``Navigation Menu`` |mainMenu| at the top right of your browser.
#. Click on **Groups** from the main menu on the left side of your browser.

.. image:: /_static/images/system-admin/main-menu/main-menu-groups.webp
    :width: 70%
    :alt: Groups Management
    :align: center

|

""""""""""""""""
Searching Groups
""""""""""""""""
You can search for groups by their properties (Display Name, Description), simply enter your search term
into the search bar by clicking on the magnifying glass icon on the top right and it will show results
that match your search term.

.. image:: /_static/images/groups/groups-search.webp
    :width: 60%
    :alt: Groups Management Search
    :align: center

|

.. _create-a-new-group:

""""""""""""""""""
Adding a New Group
""""""""""""""""""
To create a new group, you just need to click on the "**Create Group**" button,

.. image:: /_static/images/groups/groups-new-btn.webp
    :width: 60%
    :alt: Main Menu - Groups New
    :align: center

|

then, a modal dialog will show up with the required fields for the group creation.
Enter a display name and a short description for the new group.
After filling the form, click on **Save**, and the new group will show in the groups table.

.. image:: /_static/images/groups/groups-create.webp
    :width: 60%
    :alt: Main Menu - Groups Create Dialog
    :align: center

|

A notification of successful group creation will pop up for a few seconds after clicking on the **Create** button.

.. image:: /_static/images/groups/groups-created-notification.webp
   :width: 40%
   :alt: Main Menu - Groups Created Notification
   :align: center

|

.. _deleting-a-group:

""""""""""""""""
Removing a Group
""""""""""""""""
To remove a group, select a group from the list which will open a dialog for the selected group.
Click on the trash can icon on the top right of the group dialog.

.. image:: /_static/images/groups/groups-remove-icon.webp
   :width: 60%
   :alt: Main Menu - Groups Remove Icon
   :align: center

|

A confirmation popup will appear asking you if you want to delete the group, as seen above.
Click on **Yes** to remove the group.

On successful removal of the group, a notification will appear for a few seconds that the group has been deleted.

.. image:: /_static/images/groups/groups-removed-notification.webp
   :width: 40%
   :alt: Main Menu - Groups Removed Notification
   :align: center

|

"""""""""""""""""""""""""
Editing an Existing Group
"""""""""""""""""""""""""
To edit a group, select a group from the list which will open a dialog for the selected group.
In this dialog, you can modify the group description, just click on the **Save** button after making your
changes. You can also add/remove users from the group. Finally, you'll see a list of all users that belong to the group. To return to the list of all groups in your project, click on the **X** at the top right of the dialog.

.. image:: /_static/images/groups/groups-edit.webp
    :width: 60%
    :alt: Main Menu - Groups Edit
    :align: center

|

.. _adding-users-to-a-group:

"""""""""""""""""""""""
Adding Users to a Group
"""""""""""""""""""""""
To add a user to a group, click on the group you want to add users. In the ``Users`` column found on the left
in the ``Edit Group Members`` section, you can click on the search box then type in the name, username or
email of the user you want to add to the group.

.. image:: /_static/images/groups/groups-add-user-search.webp
    :width: 60%
    :alt: Main Menu - Groups Add User Search
    :align: center

|

Notice that it will give you a list of matching users, select the user you want to add by clicking on the
checkbox next to it, and if you want to add some more users to the group, just type in the names, and put
a checkmark next to them, then click on the **>** (greater than icon) button.

.. image:: /_static/images/groups/groups-add-members.webp
    :width: 60%
    :alt: Main Menu - Groups Add Members
    :align: center

|

It will then give you a notification that the user(s) has been successfully added to the group.

.. image:: /_static/images/groups/groups-users-added-notification.webp
    :width: 30%
    :alt: Main Menu - Groups Members Added Notification
    :align: center

|

"""""""""""""""""""""""""""
Removing Users from a Group
"""""""""""""""""""""""""""
To remove a user from a group, click on the group you want to remove users. In the ``Members`` column
found on the right in the ``Edit Group Members`` section, you can click on the search box then type in
the name, username or email of the user you want to remove from the group. Select the user you want to
remove from the group by clicking on the checkbox next to it, and if you want to remove some more users
from the group, just type in the names and put a checkmark next to them, then click on
the **<** (less than icon) button.

.. image:: /_static/images/groups/groups-remove-user.webp
    :width: 60%
    :alt: Main Menu - Groups Remove Members
    :align: center

|

It will then give you a notification that the user(s) has been successfully deleted from the group.

.. image:: /_static/images/groups/groups-remove-user-confirm.webp
    :width: 30%
    :alt: Main Menu - Groups Members Removed Notification
    :align: center

|

.. _main-menu-tool-cluster:

^^^^^^^^^^^^^^^^^^^^^^^^
Cluster |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^
``Cluster`` lets the administrator manage Studio clusters. See :ref:`studio-clustering` for more information on how to setup clustering and available actions from ``Cluster`` from the Main Menu

.. image:: /_static/images/system-admin/main-menu/main-menu-cluster.webp
    :alt: System Administrator - Navigation Menu Cluster
    :align: center
    :width: 85%

|

.. _nav-menu-audit:

^^^^^
Audit
^^^^^
Audit logs displays the date, time, user and action performed to content in all the projects available as well as actions
performed in Studio such as logins/logouts, user removal, group addition, etc.

"""""""""""
Description
"""""""""""
CrafterCMS tracks the date, time, user and action performed to content and the system through an audit log.

To view the audit logs, from the top right of your browser, click on the ``Navigation Menu`` icon, then click on ``Audit``.

.. image:: /_static/images/system-admin/main-menu/main-menu-audit.webp
    :alt: System Administrator - Main Menu Audit
    :align: center
    :width: 85%

|

You can filter the logs displayed based on the following:

"""""""""""""""""""""""""
Audit Logs Project Filter
"""""""""""""""""""""""""
``Project`` filters the log by project . Clicking on ``Project`` gives you a list of all the projects in Studio and the option to see system logs or logs for all the projects.

.. image:: /_static/images/system-admin/main-menu/audit-site-filter.webp
    :alt: System Administrator - Main Menu Audit Project Filter
    :align: center
    :width: 65%

|

""""""""""""""""""""""
Audit Logs User Filter
""""""""""""""""""""""
``Username`` filters the log by username. Clicking on ``Username`` gives you a list of all the users in Studio and the option to see logs for all users.

.. image:: /_static/images/system-admin/main-menu/audit-user-filter.webp
    :alt: System Administrator - Main Menu Audit User Filter
    :align: center
    :width: 65%

|

""""""""""""""""""""""""""""
Audit Logs Operations Filter
""""""""""""""""""""""""""""
``Operation`` filters the log by operations. Clicking on ``Operation`` gives you a list of all operations logged.

.. image:: /_static/images/system-admin/main-menu/audit-operations-filter.webp
    :alt: System Administrator - Main Menu Audit Operations Filter
    :align: center
    :width: 65%

|

"""""""""""""""""""""""""""
Audit Logs Timestamp Filter
"""""""""""""""""""""""""""
``Timestamp`` filters the log based on date range

.. image:: /_static/images/system-admin/main-menu/audit-options-filter.webp
    :alt: System Administrator - Main Menu Audit Timestamp Filter
    :align: center
    :width: 65%

|

.. _main-menu-tool-logging-levels:

^^^^^^^^^^^^^^
Logging Levels
^^^^^^^^^^^^^^
There are 6 log levels defined in CrafterCMS. These levels determine what messages will be logged and displayed in the **Logging Console**.

.. image:: /_static/images/site-admin/logs-logging-levels.webp
    :alt: System Administrator - Navigation Menu Logging Levels
    :align: center
    :width: 85%

|

For more information on logging levels, see :ref:`override-logging-levels`

.. _main-menu-tool-log-console:

^^^^^^^^^^^
Log Console
^^^^^^^^^^^
The ``Log Console`` allows the user to view messages depending on what log levels and what Java packages have been set for tracking.

.. image:: /_static/images/system-admin/main-menu/main-menu-log-console.webp
    :alt: System Administrator - Navigation Menu Log Console
    :align: center
    :width: 85%

|

:ref:`override-logging-levels` contains more information on how to track Java packages with the corresponding log levels desired.

The ``Log Console`` here in the Main Menu is similar to a project ``Log Console`` described :ref:`here <studio-log-console>`. The difference is the ``Log Console`` from the Main Menu can display logs for all the projects inside Studio, not just one project.

.. _nav-menu-global-config:

^^^^^^^^^^^^^
Global Config
^^^^^^^^^^^^^
CrafterCMS allows the user to edit the system settings for Studio without access to the physical server through ``Global Config`` under the ``Navigation Menu`` in Studio.
This global configuration file overrides the core configuration of Crafter Studio, ``studio-config.yaml``,  found in your Authoring installation, under ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/classes/crafter/studio``, and the Studio configuration override file ``studio-config-override.yaml`` under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` in your Authoring installation (for more information on this file, see :ref:`studio-config`.

Changes made to this file will spread to all nodes in a Studio cluster automatically. Please note that not all changes to this file can/will take effect without a restart, so expect to have to **restart Studio for most changes to take effect**. If in a cluster, you'll need a rolling restart for all nodes to pick up the changes.

To access the Global Config, click on the ``Navigation Menu`` icon at the top right corner, then click on ``Global Config`` in the Global panel

.. image:: /_static/images/system-admin/main-menu/main-menu-global-config.webp
    :alt: System Administrator - Navigation Menu Global Config
    :align: center
    :width: 100%

|

To find out more on what you can configure from the Global Config, see :ref:`studio-config`.


.. _main-menu-tool-encryption-tool:

^^^^^^^^^^^^^^^
Encryption Tool
^^^^^^^^^^^^^^^
The ``Encryption Tool`` allows the user to encrypt sensitive data such as access keys and passwords, that shouldn't be publicly available to anyone but developers and administrators

.. image:: /_static/images/system-admin/main-menu/main-menu-encryption-tool.webp
    :alt: System Administrator - Navigation Menu Encryption Tool
    :align: center
    :width: 100%

|

For more information on how to use the encryption tool, see :ref:`studio-encryption-tool`.

.. _nav-menu-token-management:

^^^^^^^^^^^^^^^^
Token Management
^^^^^^^^^^^^^^^^
The ``Token Management Tool`` allows the user to manage access tokens used to make API requests on behalf of the user and
create tokens for accessing a project/site in Preview.

.. image:: /_static/images/system-admin/main-menu/main-menu-token-management.webp
    :alt: System Administrator - Navigation Menu Token Management Tool
    :align: center
    :width: 70%

|

"""""""""
API Token
"""""""""
API tokens authorize the user to access APIs as a particular user with a particular role.

To create a new API access token, click on ``Token Management`` from the Main Menu, then click on the ``API Token`` button.
The only required field for the access token is the label to identify it, however, it is also recommended to set
an expiration date to minimize the risk of lost or stolen tokens being used without being noticed.

.. figure:: /_static/images/jwt/create-token.webp
    :width: 70%
    :alt: Crafter Studio - Create API Access Token
    :align: center

|

Once the expiration date is reached the access token will stop working automatically. Click on the ``Submit`` button to
create the token.

.. figure:: /_static/images/jwt/create-token-2.webp
    :width: 70%
    :alt: Crafter Studio - Access Token Expiration
    :align: center

|

The next step is to copy the value of the access token. The value of the access token will not be stored on the server,
so it needs to be stored by the user in a safe place as it is impossible to recover it after it is created.

.. figure:: /_static/images/system-admin/main-menu/access-token-created.webp
    :width: 70%
    :alt: Crafter Studio - Access Token Created
    :align: center

|

If an access token is lost or exposed in any way it should be disabled or completely deleted to avoid any
possible use. To delete a token, simply click on the trash can icon to the right of the token you want to delete.

.. figure:: /_static/images/system-admin/main-menu/delete-token-1.webp
    :width: 70%
    :alt: Crafter Studio - Delete a Token
    :align: center

|

You can also delete multiple tokens at once by placing a checkmark on the tokens you want to delete, then clicking on
``Delete Selected``.

.. figure:: /_static/images/system-admin/main-menu/delete-token-2.webp
    :width: 70%
    :alt: Crafter Studio - Delete Multiple Tokens
    :align: center

|

To disable/enable a token, simply click on the slider on the right side of the token next to the trash can icon.

.. figure:: /_static/images/system-admin/main-menu/token-disable.webp
    :width: 70%
    :alt: Crafter Studio - Disable/Enable Token
    :align: center

|

For an example of how to use the generated API token, see :ref:`crafter-cli`.

.. note:: Users needs the ``manage_access_token`` permission to create access tokens

.. _preview-token:

"""""""""""""
Preview Token
"""""""""""""
.. version_tag::
    :label: Since
    :version: 4.2.0

Preview tokens allow preview applications to access delivery APIs in preview mode from within the authoring environment.
This extra layer of security is required in authoring because the environment contains unpublished projects and content.

To create a Preview Token, click on ``Token Management`` from the Main Menu, then click on the ``Preview Token`` button.

.. figure:: /_static/images/system-admin/main-menu/create-preview-token.webp
    :width: 70%
    :alt: Crafter Studio - Create Preview Access Token
    :align: center

|

The only required fields for the preview token is the dropdown for selecting projects to grant preview access, and the
date/time fields to set an expiration date for the token, which is pre-populated to a date in the near future. The expiration
date is set to minimize the risk of lost or stolen tokens being used without being noticed. Click on the ``Generate``
button to create the token.

.. figure:: /_static/images/system-admin/main-menu/create-preview-token-2.webp
    :width: 70%
    :alt: Crafter Studio - Create Preview Access Token
    :align: center

|

The next step is to copy the value of the preview token. The value of the preview token is not stored on the server,
so it needs to be stored by the user in a safe place as it is impossible to recover it after it is created.

.. figure:: /_static/images/system-admin/main-menu/preview-token-created.webp
    :width: 70%
    :alt: Crafter Studio - Create Preview Access Token
    :align: center

|

You can now use the preview token in one of the following ways:

- Set a header with the name X-Crafter-Preview, or
- Add a query string argument with the name crafterPreview, or
- Set a cookie with the name crafterPreview

Here's an example of using the token with Curl, where ``{Generated-Preview-Token}`` is the token just created:

.. code-block:: bash

    curl --header "cookie: crafterPreview={Generated-Preview-Token};" "http://localhost:8080/api/1/site/content_store/item.json?url=/site/website/index.xml&crafterSite=ed"


The dialog above that shows the preview token generated also shows other examples on how to use the preview token.

^^^^^^^
Account
^^^^^^^
The ``Account Tool`` allows the user to change the user's personal Crafter Studio settings like language or to change the user's password or to clear your Studio UI preferences from the browser cache.

.. image:: /_static/images/system-admin/main-menu/main-menu-account.webp
    :alt: System Administrator - Navigation Menu Account Tool
    :align: center
    :width: 100%

|

For more information on how to use the Account tool, see :ref:`account-management`.

|hr|

.. _user-group-management:

---------------------
User/Group Management
---------------------
This section describes managing user accounts and groups.

A user is anybody who uses CrafterCMS. A user account holds a user name and password. A group consists of a collection of users. Users can be assigned to a group for a project/site. Through the groups, roles are assigned to users to certain areas of the site (access rights/ permissions). Each role represents a set of activities allowed. Groups are  used to simplify management as changes made to the rights of the group applies to all the users belonging to that group.

When you work in Crafter Studio, you need to login as a user. Your CrafterCMS administrator sets up user accounts, group memberships, roles and permissions. The sections below goes into more detail on how users, groups, permissions and roles are administered/setup.


.. _roles-and-permissions:

^^^^^^^^^^^^^^^^^^^^^
Roles and Permissions
^^^^^^^^^^^^^^^^^^^^^
To access CrafterCMS, a user must be allowed access rights to certain areas of the project (access rights/ permissions). For example, if a user wants to create, edit or submit content, the user needs to have those specific permissions. Here, we see that the user requires multiple permissions. For simplicity, permissions are grouped together into **roles**. A role is a set of allowed actions/activities. An **author** role, for example, has access to create, edit and submit content.

To define permissions for users, they need to be a member of a group. A group is a collection of users with a role assigned. Groups are used to simplify management as changes made to the rights of the group applies to all the users belonging to that group. For our example above of a user that wants to create, edit or submit content, the user should be assigned to a group with the **author** role.

Out of the box, CrafterCMS supports the following roles/groups:

============== ================= =========================================================
Role           Group             Description
============== ================= =========================================================
system_admin   system_admin      Has access to everything in the CMS, such as all the projects, users, groups, etc. in addition to the admin role
admin          site_admin        Has access to everything in the project such as project configurations, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to the publisher role
author         site_author       Has access to create, edit or submit content in a project
developer      site_developer    Has access to access to creating/editing layouts, templates, taxonomies, content types, scripts, etc., project configurations in addition to the publisher role in a project
reviewer       site_reviewer     Has the ability to approve and reject workflow, but don't have access to the author role in a project
publisher      site_publisher    Has the ability to approve and reject workflow, in addition to the author role in a project
============== ================= =========================================================

Permissions and roles can be setup for each project, and for the entire application itself. Note that the ``system_admin`` role applies to the entire application and the rest of the default roles applies to a project.

See :ref:`groups-management` for more information on administrating groups.

""""""""
Projects
""""""""
To edit permissions for a project role, in Studio, from the *Sidebar*, click on |projectTools| -> *Configuration* -> *Permission Mapping*. See :ref:`permission-mappings` for more information on permissions and the default permissions assigned to roles.

To add/edit a role for a project, in Studio, from the *Sidebar*, click on |projectTools| -> *Configuration* -> *Role Mapping*. See :ref:`project-role-mappings` for more information.

The items for interaction/tools available from the **Sidebar** depending on the user role can be configured in Studio, from the *Sidebar*, click on |projectTools| -> *Configuration* -> *User Interface Configuration*. See :ref:`user-interface-configuration` for more information.

""""""
Global
""""""
To add/edit a global role/group, see :ref:`global-role-mappings-config` for more information.

To add/edit global permissions for a role, see :ref:`global-permission-mappings-config` for more information.

The items for interaction/tools available from the |mainMenu| *Main Menu* depending on the user role can be configured by opening the :ref:`global-menu-config.xml <global-menu-config>` file under ``CRAFTER_HOME/data/repos/global/configuration`` using your favorite editor.

.. _putting-it-all-together:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Putting it all together - Users, Groups, Roles and Permissions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
In this section, we'll see how users, groups, roles and permissions work together in giving users access to
certain folders in a project.

We'll create a new role, group and user, add permissions for the new role and finally assign the newly
created user to the new group setup.

In preparation for our example, we will be using the Website editorial blueprint. We'll add a **news** folder
under **Home**, by navigating to **Pages** -> **Home**, then right click on **Home** and select **New Folder**.
Enter *news* in the **Folder Name** field. We will be using the **news** folder for our example in setting up
permissions to folders based on roles. Users assigned to the **newseditor** role will then have access to
publish and add/edit content in the **news** folder.

""""""""""""""""""
Create a new group
""""""""""""""""""
Let's begin by creating a new group.

#. To create a new group, click on |mainMenu| **Navigation Menu** from the top right, then click on **Groups**.
#. Click on the **Create Group** button.
#. Enter a name for the new group being created in the **Display Name** field.
#. Enter a description of the new group being created in the **Description** field.
#. Click on the **Save** button. A notification will appear that your new group has been created.

Below are the information used to create a new group:

.. image:: /_static/images/site-admin/new-group.webp
     :alt: Group - Create a New Group
     :width: 65%
     :align: center

|

For more information on adding a new group to a project, please see :ref:`create-a-new-group`

"""""""""""""""""
Create a new role
"""""""""""""""""
We'll now create a new role for the new group we just created.

#. To create a new role, click on |projectTools| from the **Sidebar**, then click on **Configuration**.
#. From the list, select **Role Mappings**
#. Add your new group and role in the editor

   .. code-block:: xml
       :linenos:
       :emphasize-lines: 18,19,20

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
           <group name="NewsEditor">
               <role>newseditor</role>
           </group>
         </groups>
       </role-mappings>

#. Click on the **Save** button.

For more information about role mappings, please see: :ref:`project-role-mappings`

""""""""""""""""""
Adding permissions
""""""""""""""""""
#. To add permissions to the new role we just created, click on |projectTools| from the **Sidebar**, then click on **Configuration**.
#. From the dropdown box, select **Permissions Mappings**
#. Add in the permissions that you would like to give to the new role that we just created. For our example below, we are giving the role **newseditor** permission to publish from the dashboard and the following permissions for the **news** folder and **assets** folder:

      - read
      - write
      - create content
      - create folder
      - publish

   .. code-block:: xml
      :linenos:

      <role name="newseditor">
         <rule regex="/site/website/news/.*">
           <allowed-permissions>
             <permission>content_read</permission>
             <permission>content_write</permission>
             <permission>content_create</permission>
             <permission>folder_create</permission>
             <permission>publish</permission>
           </allowed-permissions>
         </rule>
         <rule regex="/static-assets/.*">
           <allowed-permissions>
             <permission>content_read</permission>
             <permission>content_write</permission>
             <permission>content_create</permission>
             <permission>folder_create</permission>
             <permission>publish</permission>
           </allowed-permissions>
         </rule>
       </role>

#. Click on the **Save** button to save your changes.

For more information about permission mappings, please see: :ref:`permission-mappings`

""""""""""""""""""""""""
Adding users to the role
""""""""""""""""""""""""
We can now add users to the role by adding the users to the group mapped to the role. In the role mappings configuration file, we mapped the role **newseditor** to the group NewsEditor. To add users to the group NewsEditor,

#. Click on |mainMenu| from the top right of Studio, then select **Groups** on the left hand side
#. Click on the pencil (edit icon) next to the group name you want to edit. In our example, the group **NewsEditor**
#. Click on the box for the field **Add new members**, enter the users you'd like to add, then click on the **Add members** button.

For more information about adding users to a group, please see: :ref:`adding-users-to-a-group`

Your new role with users and permissions assigned are now ready!

.. _user-passwords:

^^^^^^^^^^^^^^
User passwords
^^^^^^^^^^^^^^
""""""""""""""""""""""
Changing Your Password
""""""""""""""""""""""
Every user logged in to CrafterCMS can change their own password.

#. To change your own password, click on the **Navigation Menu** |mainMenu| option at the top right of Studio,
   then select **Account**

   .. image:: /_static/images/users/your-passwd-open.webp
       :alt: Users - Open Dialog with User Name
       :width: 65%
       :align: center

   |

#. In the **Change Password** section of the dialog, enter your current password in the **Current Password** field.

   .. image:: /_static/images/users/your-passwd-change.webp
       :alt: Users - User Settings Dialog to Change Password
       :width: 50%
       :align: center

   |

#. Next, enter the new password into the **New Password** field.
#. Re-enter the new password into the **Confirm Password** field.
#. Click on the **Save** button. A notification will appear that the profile has been updated.

   .. image:: /_static/images/users/change-passwd-notification.webp
       :alt: Users - Password Change Notification
       :width: 30%
       :align: center

   |

After changing your password, you will be logged out of the system and will have to log back in using the new password you set before continuing your work in Studio.

""""""""""""""""""""""""
Changing a User Password
""""""""""""""""""""""""
The Crafter admin can change passwords for other users.

#. To change a user's password, login as crafter admin in Studio.
#. Click on **Users** at the top right of Studio
#. Click on the pencil (edit icon) next to the user you would like to change/reset the password.
#. Enter a new password in the **Reset Password** field.
#. Click on the **Save** button. A notification will appear that the user has been edited.

For more information on editing a user, see :ref:`editing-a-user`

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Setting a User's Initial Password
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The Crafter admin must set an initial password when creating a new user. To create a new user, please see :ref:`creating-a-user`

|hr|

.. _create-project-with-link-to-remote-repo:

-----------------------------------------
Project Creation with Remote Repositories
-----------------------------------------
Crafter Studio supports project creation with remote repositories and provides two options:

- Create project based on remote Git repository
- Create project based on a blueprint then add a remote Git repository

To start creating a project with a remote repository, from the **Projects** screen, click on the **Create Project** button.
A **Create Project** dialog will be launched. For both options, there will be a screen where the **Remote Git Repository Name** and **Remote Git Repository URL** needs to be filled out and the rest is optional and only needs to be filled out if required by the remote git repository being used.

Let's take a look at the fields where the remote repository details needs to be filled in:

.. image:: /_static/images/system-admin/remote-repo-info.webp
   :alt: System Administrator - Remote Repository Details
   :width: 55 %
   :align: center

|

#. In the **Git Repo URL** field you must provide the link to the Git repository you would like to use
#. In the **Authentication** field you must select the authentication method to be used to access the Git repository in the previous field.

   CrafterCMS supports the following authentication types to use to access remote repository:

   - **Authentication not required (Public URL)** - no credentials needed to access remote repository
   - **Username & Password** - for this method, you will be asked for a **Remote Git Repository Username** and a **Remote Git Repository Password**. Supply your username and password
   - **Token** - for this method, you will be asked for a **Remote Git Repository Username** (if required) and a **Remote Git Repository Token**. This method is usually used when two-factor authentication is configured on the remote repository to be accessed. Supply your username if required and token.
   - **Private Key** - for this method, you will be asked for a **Remote Git Repository Private Key**. This method is a key-based authentication. Supply your private key.

#. In the **Git Branch** field, you can supply a branch name, but can be left blank, which in turn would default to the ``master`` branch.
#. In the **Git Remote Name** field you want to provide a repository name that makes sense. It’s common to use “origin” or “upstream.”

.. _create-project-based-on-a-blueprint-then-add-a-remote-bare-git-repository:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Create project based on a blueprint then add a remote bare Git repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To create a project based on a blueprint then add a remote bare git repository, click on **Create Project** from
**Projects**, then select the blueprint you would like to use

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-1.webp
    :alt: Create Project Dialog in Crafter Studio, select a blueprint
    :width: 65 %
    :align: center

|

The next step is to fill in the **Project ID** and **Project Name**, then click on the **Review** button, then finally  click on the **Create Project** button to create your project. Your project should be created in a short while.

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-2.webp
    :alt: Create Project Dialog in Crafter Studio, fill in Site ID
    :width: 65 %
    :align: center

|

Once your project is created, the next step is to add a remote repository to your newly created project. Open the
**Sidebar** then click on **Project Tools** -> **Git**, then click on the **New Remote** on the top.
This will open up a dialog where we can fill in all the information for our remote repository as described above.
Click on the **Create** button after filling in the required information.

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-3.webp
    :alt: Create Repository dialog to fill in information of remote repository being added to the project
    :width: 65 %
    :align: center

|

Your project should now have a remote repository listed in the **Remote Repositories** tab

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-4.webp
    :alt: Remotes screen displaying newly added remote repository to project
    :width: 65 %
    :align: center

|

Remember that the remote repository needs to be a bare git repository, since we are pushing our newly created project to the remote repository. To push our newly create project to the remote repository, click on the ``Push`` button (button with the up arrow) next to the remote repository

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Create project based on a remote Git repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Creating a project based on a remote Git repository is basically exporting a project from one Studio and importing it into another one.

To create a project based on remote Git repository, after clicking on **Create Project**, Click on **Remote Git Repository** in the create project screen

.. figure:: /_static/images/first-project/create-project-choose-bp.webp
    :alt: Developer How Tos - Setting up to work locally against the upstream
    :width: 65 %
    :align: center

|

Click on the **Site ID** field where you'll need to give your project an ID. Scroll down to see where you can fill in all the information for the remote repository we are importing. The ``Git Repo URL`` is the import project's sandbox repository git url (the project you want to bring over to your Studio). Below are sample urls for the project being imported:

Here is a sample Git url from GitHub:
`https://github.com/username/hello-test.git`
Here is a sample Git url using ssh:
`ssh://[user@]host.xz[:port]/path/to/repo/`
or alternatively for ssh:
`[user@]host.xz:path/to/repo/`

.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-1.webp
   :alt: Developer How Tos - Setting up to work locally against the upstream
   :width: 65 %
   :align: center

|

Click on the **Review** button, then finally, the **Create Project** button.


.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-2.webp
   :alt: Developer How Tos - Setting up to work locally against the upstream review entries
   :width: 65 %
   :align: center

|

After a short while, your project will be imported.

**In case you want to publish the entire project**, follow these optional steps:

#. In the project you just imported, click on **Project Tools**, then click on **Publishing**

   .. image:: /_static/images/system-admin/publishing.webp
      :alt: System Administrator - Bulk Publishing"
      :width: 20 %
      :align: center

   |

#. In the **Publishing** screen, scroll down to ``Publish on Demand`` then click on the **Publish Entire Project**
   button to publish the whole project.

   .. image:: /_static/images/system-admin/bulk-publish-project.webp
      :alt: System Administrator - Bulk Publish the whole project filled in"
      :width: 65 %
      :align: center

   |

|hr|

.. _duplicate-project:

---------------------
Duplicating a Project
---------------------
Crafter Studio supports creating a new project by duplicating an existing project.
To duplicate a project, from ``Projects``, click on the ``Create Project`` button.

.. image:: /_static/images/first-project/create-project-choose-bp.webp
   :width: 65 %
   :align: center
   :alt: Studio Administration - Create Project

|

Next, click on ``Duplicate Project``. It will then prompt you to select the project to be duplicated by clicking
on the dropdown arrow in the ``Project`` field.  Give it a good ``Project Name`` and ``Project ID``, then click on the
``Review`` button

.. image:: /_static/images/system-admin/duplicate-project-screen.webp
   :width: 65 %
   :align: center
   :alt: Studio Administration - Duplicate Project Screen

|

When duplicating a project that uses S3 buckets (blob stores), the S3 buckets may be copied over to the new project and the
configuration updated if separate S3 buckets from the source project are required.

|hr|

