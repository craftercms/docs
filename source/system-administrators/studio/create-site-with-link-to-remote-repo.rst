:is-up-to-date: True

.. index:: Site Creation with Remote Repositories, Remote Repositories

.. _create-site-with-link-to-remote-repo:

======================================
Site Creation with Remote Repositories
======================================

Crafter Studio supports site creation with remote repositories and provides two options:

- Create site based on remote Git repository
- Create site based on a blueprint then add a remote Git repository

To start creating a site with remote repository, from the **Sites** screen, click on the **Create Site** button.
A **Create Site** dialog will be launched.  For both options, there will be a screen where the **Remote Git Repository Name** and **Remote Git Repository URL** needs to be filled out and the rest is optional and only needs to be filled out if required by the remote git repository being used.

Let's take a look at the fields where the remote repository details needs to be filled in:

.. image:: /_static/images/system-admin/remote-repo-info.jpg
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

----------------------------------------------------------------------
Create site based on a blueprint then add a remote bare Git repository
----------------------------------------------------------------------


To create a site based on a blueprint then add a remote bare git repository, click on **Create Site** from **Sites**, then select the blueprint you would like to use

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-1.jpg
    :alt: Create Site Dialog in Crafter Studio, select a blueprint
    :width: 70 %
    :align: center

|

The next step is to fill in the **Site ID** and **Site Name**, then click on the **Review** button, then finally  click on the **Create Site** button to create your site.  Your site should be created in a short while.

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-2.png
    :alt: Create Site Dialog in Crafter Studio, fill in Site ID
    :width: 70 %
    :align: center

|

Once your site is created, the next step is to add a remote repository to your newly created site.  Open the **Sidebar** then click on **Site Config** -> **Remote Repositories**, then click on the **New Repository** on the top right.
This will open up a dialog where we can fill in all the information for our remote repository as described above.  Click on the **Create** button after filling in the required information.

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-3.png
    :alt: Create Repository dialog to fill in information of remote repository being added to the site
    :width: 70 %
    :align: center

|

Your site should now have a remote repository listed in the **Remotes** screen

.. image:: /_static/images/developer/dev-cloud-platforms/create-site-then-push-4.png
    :alt: Remotes screen displaying newly added remote repository to site
    :width: 70 %
    :align: center

Remember that the remote repository needs to be a bare git repository, since we are pushing our newly created site to the remote repository.  To push our newly create site to the remote repository, click on the ``Push`` button (button with the up arrow) next to the remote repository

--------------------------------------------
Create site based on a remote Git repository
--------------------------------------------

Creating a site based on a remote Git repository is basically exporting a site from one Studio and importing it into another one.

To create a site based on remote Git repository, after clicking on **Create Site**, Click on **Remote Git Repository** in the **Private Blueprints** tab create site screen

.. figure:: /_static/images/developer/dev-cloud-platforms/create-site-based-on-remote-1.jpg
    :alt: Developer How Tos - Setting up to work locally against the upstream
    :width: 70 %
    :align: center

|

Click on the **Site ID** field where you'll need to give your site an ID.  Scroll down to see where you can fill in all the information for the remote repository we are importing.  The ``Git Repo URL`` is the import site's sandbox repository git url (the site you want to bring over to your Studio). Below are sample urls for the site being imported:

Here is a sample Git url from GitHub:
`https://github.com/username/hello-test.git`
Here is a sample Git url using ssh:
`ssh://[user@]host.xz[:port]/path/to/repo/`
or alternatively for ssh:
`[user@]host.xz:path/to/repo/`

.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-1.jpg
   :alt: Developer How Tos - Setting up to work locally against the upstream
   :width: 70 %
   :align: center

|

Click on the **Review** button, then finally, the **Create Site** button.


.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-2.jpg
   :alt: Developer How Tos - Setting up to work locally against the upstream review entries
   :width: 50 %
   :align: center

|

After a short while, your site will be imported.

In case you want to publish the entire site, follow these optional steps:
-------------------------------------------------------------------------

#. In the site you just imported, click on **Site Tools**, then click on **Publishing**

   .. image:: /_static/images/system-admin/publishing.png
      :alt: System Administrator - Bulk Publishing"
      :width: 20 %
      :align: center

#. In the **Publishing** screen, click on the **Bulk Publish** tab, and in the **Path to Publish** field, just enter ``/``, then click on the **Publish**   button to publish the whole site.

   .. image:: /_static/images/system-admin/bulk-publish-site.png
      :alt: System Administrator - Bulk Publish the whole site filled in"
      :width: 65 %
      :align: center

