
.. _create-site-with-link-to-remote-repo:

======================================
Site Creation with Remote Repositories
======================================

Crafter Studio supports site creation with remote repositories and provides two options:

- Create site based on a remote git repository
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

To create a site based on a remote git repository, fill in the required items once **Link to upstream remote Git repository** has been expanded:

.. image:: /_static/images/system-admin/link-to-remote-git-repo-filled.png
   :alt: System Administrator - Create Site based on remote Git repository"
   :width: 65 %
   :align: center

See :ref:`exporting-importing-site` for an example and more information on how to use the option to create a site based on a remote repository.
