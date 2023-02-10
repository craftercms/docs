:is-up-to-date: True
:nosearch:

.. index:: Project Creation with Remote Repositories, Remote Repositories

.. _newIa-create-project-with-link-to-remote-repo:

=========================================
Project Creation with Remote Repositories
=========================================

Crafter Studio supports project creation with remote repositories and provides two options:

- Create project based on remote Git repository
- Create project based on a blueprint then add a remote Git repository

To start creating a project with a remote repository, from the **Projects** screen, click on the **Create Project** button.
A **Create Project** dialog will be launched.  For both options, there will be a screen where the **Remote Git Repository Name** and **Remote Git Repository URL** needs to be filled out and the rest is optional and only needs to be filled out if required by the remote git repository being used.

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
    - **Username & Password** - for this method, you will be asked for a **Remote Git Repository Username** and a **Remote Git Repository Password**.  Supply your username and password
    - **Token** - for this method, you will be asked for a **Remote Git Repository Username** (if required) and a **Remote Git Repository Token**.  This method is usually used when two-factor authentication is configured on the remote repository to be accessed. Supply your username if required and token.
    - **Private Key** - for this method, you will be asked for a **Remote Git Repository Private Key**.  This method is a key-based authentication.  Supply your private key.

#. In the **Git Branch** field, you can supply a branch name, but can be left blank, which in turn would default to the ``master`` branch.
#. In the **Git Remote Name** field you want to provide a repository name that makes sense. It’s common to use “origin” or “upstream.”

-------------------------------------------------------------------------
Create project based on a blueprint then add a remote bare Git repository
-------------------------------------------------------------------------


To create a project based on a blueprint then add a remote bare git repository, click on **Create Site** from **Sites**, then select the blueprint you would like to use

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-1.webp
    :alt: Create Site Dialog in Crafter Studio, select a blueprint
    :width: 70 %
    :align: center

|

The next step is to fill in the **Project ID** and **Project Name**, then click on the **Review** button, then finally  click on the **Create Project** button to create your project.  Your project should be created in a short while.

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-2.webp
    :alt: Create Site Dialog in Crafter Studio, fill in Site ID
    :width: 70 %
    :align: center

|

Once your project is created, the next step is to add a remote repository to your newly created project.  Open the **Sidebar** then click on **Site Config** -> **Remote Repositories**, then click on the **New Repository** on the top right.
This will open up a dialog where we can fill in all the information for our remote repository as described above.  Click on the **Create** button after filling in the required information.

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-3.webp
    :alt: Create Repository dialog to fill in information of remote repository being added to the project
    :width: 70 %
    :align: center

|

Your project should now have a remote repository listed in the **Remotes** screen

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-4.webp
    :alt: Remotes screen displaying newly added remote repository to project
    :width: 70 %
    :align: center

Remember that the remote repository needs to be a bare git repository, since we are pushing our newly created project to the remote repository.  To push our newly create project to the remote repository, click on the ``Push`` button (button with the up arrow) next to the remote repository

-----------------------------------------------
Create project based on a remote Git repository
-----------------------------------------------

Creating a project based on a remote Git repository is basically exporting a project from one Studio and importing it into another one.

To create a project based on remote Git repository, after clicking on **Create Project**, Click on **Remote Git Repository** in the **Private Blueprints** tab create project screen

.. figure:: /_static/images/developer/dev-cloud-platforms/create-project-based-on-remote-1.webp
    :alt: Developer How Tos - Setting up to work locally against the upstream
    :width: 70 %
    :align: center

|

Click on the **Site ID** field where you'll need to give your project an ID.  Scroll down to see where you can fill in all the information for the remote repository we are importing.  The ``Git Repo URL`` is the import project's sandbox repository git url (the project you want to bring over to your Studio). Below are sample urls for the project being imported:

Here is a sample Git url from GitHub:
`https://github.com/username/hello-test.git`
Here is a sample Git url using ssh:
`ssh://[user@]host.xz[:port]/path/to/repo/`
or alternatively for ssh:
`[user@]host.xz:path/to/repo/`

.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-1.webp
   :alt: Developer How Tos - Setting up to work locally against the upstream
   :width: 70 %
   :align: center

|

Click on the **Review** button, then finally, the **Create Site** button.


.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-2.webp
   :alt: Developer How Tos - Setting up to work locally against the upstream review entries
   :width: 50 %
   :align: center

|

After a short while, your project will be imported.

In case you want to publish the entire project, follow these optional steps:
----------------------------------------------------------------------------

#. In the project you just imported, click on **Project Tools**, then click on **Publishing**

   .. image:: /_static/images/system-admin/publishing.webp
      :alt: System Administrator - Bulk Publishing"
      :width: 20 %
      :align: center

#. In the **Publishing** screen, scroll down to ``Publish on Demand`` then click on the **Publish Entire Project**
   button to publish the whole project.

   .. image:: /_static/images/system-admin/bulk-publish-project.webp
      :alt: System Administrator - Bulk Publish the whole project filled in"
      :width: 65 %
      :align: center

