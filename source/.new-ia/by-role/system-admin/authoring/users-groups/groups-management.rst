:is-up-to-date: True

.. index:: Groups Management

.. _newIa-groups-management:

=================
Groups Management
=================

Groups Management allows you to administrate the groups created on CrafterCMS. You can add, remove,
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

You can add more groups defined whenever needed.  The list above is just a starting point for when you first create your site.  The following sections will give you more details on users and groups.  The next sections, Permission Mappings and Role Mappings describes how to setup/assign permissions and roles.

To find this section through studio follow the next instructions:

#. Click on ``Main Menu`` |mainMenu| at the top right of your browser.
#. Click on **Groups** from the main menu on the left side of your browser.

.. image:: /_static/images/system-admin/main-menu/main-menu-groups.png
    :width: 70%
    :alt: Groups Management
    :align: center

----------------
Searching Groups
----------------

You can search for groups by their properties (Display Name, Description), simply enter your search term into the search bar and it will show results that match your search term.

.. image:: /_static/images/groups/site-config-groups-search.png
    :width: 60%
    :alt: Groups Management Search
    :align: center

.. _newIa-create-a-new-group:

------------------
Adding a New Group
------------------

To create a new group, you just need to click on the "**New Group**" button,

.. image:: /_static/images/groups/site-config-groups-new-btn.png
    :width: 60%
    :alt: Site Config - Groups New
    :align: center

then, a modal dialog will show up with the required fields for the group creation.  Enter a display name and a short description for the new group.
After filling the form, click on **Create**, and the new group will show in the groups table.

.. image:: /_static/images/groups/site-config-groups-create.png
    :width: 60%
    :alt: Site Config - Groups Create Dialog
    :align: center

A notification of successful group creation will pop up for a few seconds after clicking on the **Create** button.

.. image:: /_static/images/groups/site-config-groups-created-notification.png
   :width: 40%
   :alt: Site Config - Groups Created Notification
   :align: center

----------------
Removing a Group
----------------

To remove a group, select a group from the list and click on the trash can icon to the right of the group you would like to remove.

.. image:: /_static/images/groups/site-config-groups-remove-icon.png
   :width: 60%
   :alt: Site Config - Groups Remove Icon
   :align: center

A confirmation dialog will appear asking you if you want to delete the group.  Click on **Yes** to remove the group.

.. image:: /_static/images/groups/site-config-groups-remove-confirm.png
   :width: 40%
   :alt: Site Config - Groups Remove Confirmation
   :align: center

On successful removal of the group, a notification will appear for a few seconds that the group has been deleted.

.. image:: /_static/images/groups/site-config-groups-removed-notification.png
   :width: 40%
   :alt: Site Config - Groups Removed Notification
   :align: center

-------------------------
Editing an Existing Group
-------------------------

To edit a group, click on the pencil located at the right side of the group on the list,

.. image:: /_static/images/groups/site-config-groups-edit-btn.png
    :width: 80%
    :alt: Site Config - Groups Edit Icon
    :align: center

then, a modal dialog will show up. In this dialog, you can modify the group name and description, just click on the **Save** button after making your changes to either group name or description.  You can also add/remove users from the group.  Finally, you'll see a list of all users that belong to the group.  To return to the list of all groups in your site, click on **Back to groups** at the top right of the dialog.

.. image:: /_static/images/groups/site-config-groups-edit.png
    :width: 60%
    :alt: Site Config - Groups Edit
    :align: center

.. _newIa-adding-users-to-a-group:

-----------------------
Adding Users to a Group
-----------------------

To add a user to a group, pick the group you want to add users, then click the pencil to the right of the group name, the same as the instructions listed above for editing a group, then click in the search box labeled **Add new members** and type in the name, username or email of the user you want to add to the group.

.. image:: /_static/images/groups/site-config-groups-add-user-search.png
    :width: 60%
    :alt: Site Config - Groups Add User Search
    :align: center

Notice that it will give you a list of matching users, select the user you want to add and if you want to add some more users to the group, just type in the names, then click on the **Add members** button.

.. image:: /_static/images/groups/site-config-groups-add-members.png
    :width: 60%
    :alt: Site Config - Groups Add Members
    :align: center

It will then give you a notification that the users has been successfully added to the group.  Notice that the added user is now listed in the member list at the bottom of the page.

.. image:: /_static/images/groups/site-config-groups-users-added-notification.png
    :width: 40%
    :alt: Site Config - Groups Members Added Notification
    :align: center

---------------------------
Removing Users from a Group
---------------------------

To remove a user from the group, click on the trash can icon to the right of the user.

.. image:: /_static/images/groups/site-config-groups-remove-user.png
    :width: 60%
    :alt: Site Config - Groups Remove Members
    :align: center

It will then ask you for confirmation if you want to delete the user from the group, click on **Yes** to delete the user from the group.

.. image:: /_static/images/groups/site-config-groups-delete-user-confirm.png
    :width: 40%
    :alt: Site Config - Groups Remove Members Confirmation
    :align: center
