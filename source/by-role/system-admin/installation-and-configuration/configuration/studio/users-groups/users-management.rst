:is-up-to-date: True
:last-updated: 4.0.3


.. index:: Users Management
.. highlight:: xml

.. _users-management:

================
Users Management
================

-----------
Description
-----------

User Management allows you to control and set up who can access and manage the sites. All users are listed on
the User Management page.

To find the Users Management console follow the next instructions:

1. Click on the **Navigation Menu** |mainMenu| option located at the top right of the browser, then click on
**Users** in the sidebar located on the left side of the browser:

   .. image:: /_static/images/users/users-manage-access.webp
       :alt: Users - Manage Access
       :align: center

2. Here's the screen that will appear after clicking on **Users**

   .. image:: /_static/images/system-admin/main-menu/main-menu-users.webp
       :alt: Users Dialog
       :align: center

-------
Actions
-------

You can list, search, add or delete users, as well as view specific information.

^^^^^^^^^^^^^
Listing Users
^^^^^^^^^^^^^

To see a list of all existing users, make sure that there are no search terms entered in the search bar.  You can also change the number of users listed per page by selecting a different number in the dropdown box at the bottom right of the screen

.. image:: /_static/images/users/users-list-all.webp
    :alt: Users - List All
    :align: center
    :width: 75%


Searching Users
^^^^^^^^^^^^^^^

You can search for a specific user. To search users, click on the magnifying glass icon on the top right then go
to the search field and type user name, last name, user name or mail.
In the following example we typed "jane", we obtained only one related user: "Jane".

.. image:: /_static/images/users/users-search.webp
    :alt: Users - Search
    :align: center

.. _creating-a-user:

^^^^^^^^^^^^^^^^^^^
Creating a New User
^^^^^^^^^^^^^^^^^^^

To create a new user, please click on the "Create User" button at the top of the page.

.. image:: /_static/images/users/users-add-new.webp
    :alt: Users - Add New
    :align: center

A modal dialog will be displayed, please fill out all the fields and finally click on the "**Submit**" button.
If you do not want to create a new user, please click on the "**Cancel**" button.

.. image:: /_static/images/users/users-add.webp
    :alt: Users - Add
    :align: center

A notification will appear on the screen for a few seconds on successful creation of a new user
<image below needs to be updated>

.. image:: /_static/images/users/users-create-notification.webp
    :alt: Users - Created Notification
    :align: center

.. _editing-a-user:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Viewing and Editing an Existing User
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To view/edit a specific user, please click on the row of the name you want to edit:

.. image:: /_static/images/users/users-view-btn.webp
    :alt: Users - Click on Name to View Details
    :align: center

A modal dialog will be displayed with the user information. To finish viewing, click on the "**X**" (close icon) button.

.. image:: /_static/images/users/users-view.webp
    :alt: Users - View User Info
    :align: center
    :width: 75%

Once the dialog is displayed, to edit a specific user, simply click on the field that you want to change.
In the above dialog the **Externally Managed** label is displayed which indicates that the user is externally
managed such as the case in LDAP.  Notice that since the user is externally managed, the only change that
can be made for the user is the group membership.

For the user dialog displayed below, since the user is not externally managed, all the fields can be changed
for the user.  In this dialog, you can modify the user information such as email, first name, last name and
user name, group membership, reset the user's password and delete the user.  You can also activate/de-activate
the user currently being viewed by clicking on the slider labeled **Enabled**.  Edit the fields you
want to change and then click on the "**Save**" button.  If you do not want to edit the user, please click
on the "Cancel" button.

.. image:: /_static/images/users/users-edit.webp
    :alt: Users - Edit
    :align: center
    :width: 75%


Resetting an Existing User's Password
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To reset the password of a specific user, please click on the key icon in the user modal dialog as shown in
the following example.

.. image:: /_static/images/users/users-reset-btn.webp
    :alt: Users - Reset Password Icon
    :align: center

A modal dialog will be displayed, where the admin can reset the users password.  Click on ``Save`` to reset the password.

.. image:: /_static/images/users/users-reset.webp
    :alt: Users - Reset Password
    :align: center
    :width: 55%


Removing an Existing User
^^^^^^^^^^^^^^^^^^^^^^^^^

To remove a specific user, please click on the trash can icon located in the user modal dialog as shown in
the following example.

.. image:: /_static/images/users/users-remove-btn.webp
    :alt: Users - Remove Icon
    :align: center
    :width: 80%

A confirmation pop up will be displayed, please click on "**Yes**" to remove the user and click on "**No**" if you do not want to remove it.

.. image:: /_static/images/users/users-remove.webp
    :alt: Users - Remove
    :align: center
    :width: 50%

A notification will appear on the screen for a few seconds on successful deletion of a user

.. image:: /_static/images/users/users-delete-notification.webp
    :alt: Users - Deleted Notification
    :align: center

.. important::
   When a user is deleted, the deleted user cannot be re-created. Instead of deleting a user,
   we recommend disabling the user, which prevents them from connecting to the system.

   To disable a user, simply click the ``Enabled`` slider to turn it off and a notification snack
   bar at the bottom will appear informing you that the user has been disabled successfully.

   .. image:: /_static/images/users/user-disabled-notification.webp
      :alt: Users - Deleted Notification
      :width: 30%
      :align: center
