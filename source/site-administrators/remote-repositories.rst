:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Remote Repositories

.. _remote-repositories:

===================
Remote Repositories
===================

The **Remote Repositories** under |siteConfig| allows the user to view remote repositories linked to the site and options to pull and push to the listed remote repositories.  It also allows the user to add a remote repository to the site.

Below, we have a site **mysweetdotcom** with a link to a remote repository in GitHub:

.. image:: /_static/images/developer/craftercms-github-remotes.png
    :alt: Developer How-Tos - Pushing and Pulling from the Remote Repository
    :width: 100 %
    :align: center

----------------
Add a Repository
----------------
To add a remote repository for your site, click on the **New Repository** button.  A **Create Repository** dialog will open where you'll need to fill in the required information then click on the **Create** button and you should see the new repository added in the **Repositories**

.. image:: /_static/images/site-admin/site-config-add-repo.png
    :alt: Remote Repositories - New Repository
	:align: center

--------------------
Pull from Repository
--------------------

To get updates from the remote repositories, click on the down arrow next to the remote repository you would like to pull changes from

.. image:: /_static/images/site-admin/site-config-pull-from-remote.png
    :alt: Remote Repositories - Pull from Remote Repository
	:align: center

In the **Pull** dialog, select the branch in the remote repository you'd like to pull changes from

.. image:: /_static/images/site-admin/site-config-pull-from-remote-options.png
    :alt: Remote Repositories - Pull from Remote Repository Options
    :align: center

------------------
Push to Repository
------------------

To push your changes in Studio to a remote repository, click on the up arrow next to the remote repository you would like to push changes to

.. image:: /_static/images/site-admin/site-config-push-to-remote.png
    :alt: Remote Repositories - Push to Remote Repository
	:align: center

In the **Push** dialog, select the branch in the remote repository you'd like to push changes to

.. image:: /_static/images/site-admin/site-config-push-to-remote-options.png
    :alt: Remote Repositories - Push to Remote Repository
	:align: center