
.. _create-site-with-link-to-remote-repo:

======================================
Site Creation with Remote Repositories
======================================

Crafter Studio supports site creation with remote repositories and provides two options:

- Create site based on remote git repository
- Create site based on a blueprint then push to remote bare git repository

To start creating a site with remote repository, from the **Sites** screen, click on the **Create Site** button.
A **Create Site** dialog will be launched.  In the **Create Site** dialog, click on **Link to upstream remote Git repository**

.. image:: /_static/images/system-admin/link-to-remote-git-repo.png
   :alt: System Administrator - Create Site "Link to upstream remote Git repository"
   :width: 65 %
   :align: center

Once the link is expanded, as mentioned above, there are two options provided for site creation with remote repositories.  For each option, the **Remote Git Repository Name** and **Remote Git Repository URL** needs to be filled out and the rest is optional and only needs to be filled out if required by the remote git repository being used.

------------------------------------------------------------------------
Create site based on a blueprint then push to remote bare git repository
------------------------------------------------------------------------

To create a site based on a blueprint then push to a remote bare git repository, fill in the required items once **Link to upstream remote Git repository** has been expanded:

.. image:: /_static/images/system-admin/create-site-then-push-to-remote.png
   :alt: System Administrator - Create Site based on a blueprint then push to remote Git repository"
   :width: 65 %
   :align: center

Click on the **Create** button, your site should be created in a short while, and then pushed on to the remote bare git repository specified in the field **Remote Git Repository URL**.  Remember that the remote repository needs to be a bare git repository, otherwise the site creation will fail.

--------------------------------------------
Create site based on a remote git repository
--------------------------------------------

Creating a site based on a remote git repository is basically exporting a site from one Studio and importing it into another one.

To create a site based on remote git repository, fill in the required items once **Link to upstream remote Git repository** has been expanded. The ``Remote Git Respository URL`` is the import site's sandbox repository git url (the site you want to bring over to your Studio). Below are sample urls for the site being imported:

Here is a sample git url from github:
`https://github.com/username/hello-test.git`
Here is a sample git url using ssh:
`ssh://[user@]host.xz[:port]/path/to/repo/`
or alternatively for ssh:
`[user@]host.xz:path/to/repo/`

.. image:: /_static/images/system-admin/link-to-remote-git-repo-filled.png
   :alt: System Administrator - Create Site based on remote Git repository
   :width: 65 %
   :align: center

Under **Options**, select **Create site based on remote git repository**, then click on the **Create** button.  After a short while, your site will be imported.

**In case you want to publish the entire site, follow these optional steps:**

#. In the site you just imported, click on |siteConfig|, then click on **Publishing**

   .. image:: /_static/images/system-admin/publishing.png
      :alt: System Administrator - Bulk Publishing"
      :width: 30 %
      :align: center

#. In the **Publishing** screen, click on the **Bulk Publish** tab, and in the **Path to Publish** field, just enter ``/``, then click on the **Publish**   button to publish the whole site.

   .. image:: /_static/images/system-admin/bulk-publish-site.png
      :alt: System Administrator - Bulk Publish the whole site filled in"
      :width: 75 %
      :align: center
