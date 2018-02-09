.. _exporting-importing-site:

==========================
Exporting/Importing a Site
==========================

Exporting a site from one Studio and importing it into another one is very easy if you follow these steps:

#. In the Crafter Studio installation where you want to import your site, from the **Sites** screen, click on **Create Site**
#. In the **Create Site** dialog, fill in the **Site Id** and **Description**, then, click on **Link to upstream remote Git repository**

   .. image:: /_static/images/system-admin/link-to-remote-git-repo.png
      :alt: System Administrator - Create Site "Link to upstream remote Git repository"
      :width: 65 %
      :align: center

#. Fill in the required fields for linking to an upstream remote Git repository. The ``Remote Git Respository URL`` is the import site's sandbox repository git url (the site you want to bring over to your Studio). Below are sample urls for the site being imported:

   Here is a sample git url from github:
   `https://github.com/username/hello-test.git`
   Here is a sample git url using ssh:
   `ssh://[user@]host.xz[:port]/path/to/repo/`
   or alternatively for ssh:
   `[user@]host.xz:path/to/repo/`

   .. image:: /_static/images/system-admin/link-to-remote-git-repo-filled.png
      :alt: System Administrator - Create Site "Link to upstream remote Git repository"
      :width: 65 %
      :align: center

   Under **Options**, select **Create site based on a remote git repository**, then click on the **Create** button.  Your site has now been imported.

**In case you want to publish the entire site, follow these optional steps:**

#. In the site you just imported, click on |siteConfig|, then click on **Publishing**

   .. image:: /_static/images/system-admin/publishing.png
      :alt: System Administrator - Bulk Publishing"
      :width: 30 %
      :align: center

#. In the **Publishing** screen, click on the **Bulk Publish** tab, and in the **Path to Publish** field, just enter ``/``, then click on the **Publish** button to publish the whole site.

   .. image:: /_static/images/system-admin/bulk-publish-site.png
      :alt: System Administrator - Bulk Publish the whole site filled in"
      :width: 75 %
      :align: center

