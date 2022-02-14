:is-up-to-date: True

.. index:: Putting it all together - Users, Groups, Roles and Permissions

.. _newIa-putting-it-all-together:

==============================================================
Putting it all together - Users, Groups, Roles and Permissions
==============================================================

In this section, we'll see how users, groups, roles and permissions work together in giving users access to certain folders in a site.

We'll create a new role, group and user, add permissions for the new role and finally assign the newly created user to the new group setup.

In preparation for our example, we will be using the Website_editorial blueprint.  We'll add a **news** folder under **Home**, by navigating to **Pages** -> **Home**, then right click on **Home** and select **New Folder**.  Enter *news* in the **Folder Name** field.  We will be using the **news** folder for our example in setting up permissions to folders based on roles.  Users assigned to the **newseditor** role will then have access to publish and add/edit content in the **news** folder.

------------------
Create a new group
------------------

Let's begin by creating a new group.

#. To create a new group, click on |mainMenu| **Main Menu** from the top right, then click on **Groups**.
#. Click on the **New Group** button.
#. Enter a name for the new group being created in the **Display Name** field.
#. Enter a description of the new group being created in the **Description** field.
#. Click on the **Create** button. A notification will appear that your new group has been created.

Below are the information used to create a new group:

.. image:: /_static/images/site-admin/new-group.png
     :alt: Group - Create a New Group
     :width: 100%
     :align: center

For more information on adding a new group to a site, please see :ref:`newIa-create-a-new-group`

-----------------
Create a new role
-----------------

We'll now create a new role for the new group we just created.

#. To create a new role, click on |siteTools| from the **Sidebar**, then click on **Configuration**.
#. From the dropdown box, select **Role Mappings**
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

For more information about role mappings, please see: :ref:`newIa-role-mappings`

------------------
Adding permissions
------------------

#. To add permissions to the new role we just created, click on |siteTools| from the **Sidebar**, then click on **Configuration**.
#. From the dropdown box, select **Permissions Mappings**
#. Add in the permissions that you would like to give to the new role that we just created.  For our example below, we are giving the role **newseditor** permission to publish from the dashboard and the following permissions for the **news** folder and **assets** folder:

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
             <permission>Read</permission>
             <permission>Write</permission>
             <permission>Create Content</permission>
             <permission>Create Folder</permission>
             <permission>Publish</permission>
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

#. Click on the **Save** button to save your changes.

For more information about permission mappings, please see: :ref:`newIa-permission-mappings`

------------------------
Adding users to the role
------------------------

We can now add users to the role by adding the users to the group mapped to the role.  In the role mappings configuration file, we mapped the role **newseditor** to the group NewsEditor.  To add users to the group NewsEditor,

#. Click on |mainMenu| from the top right of Studio, then select **Groups** on the left hand side
#. Click on the pencil (edit icon) next to the group name you want to edit.  In our example, the group **NewsEditor**
#. Click on the box for the field **Add new members**, enter the users you'd like to add, then click on the **Add members** button.

For more information about adding users to a group, please see: :ref:`newIa-adding-users-to-a-group`

Your new role with users and permissions assigned are now ready!