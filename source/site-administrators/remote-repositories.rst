:is-up-to-date: True

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

.. image:: /_static/images/developer/dev-cloud-platforms/craftercms-github-remotes.png
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

|

   .. note::
      For more information on errors that a user may encounter when using ssh keys with CrafterCMS, see :ref:`debugging_ssh_issues`

--------------------
Pull from Repository
--------------------

To get updates from the remote repositories, click on the down arrow next to the remote repository you would like to pull changes from

.. image:: /_static/images/site-admin/site-config-pull-from-remote.png
    :alt: Remote Repositories - Pull from Remote Repository
	:align: center

You will then be given some options when Studio pulls from the remote repository:

.. image:: /_static/images/site-admin/site-config-pull-from-remote-options.png
    :alt: Remote Repositories - Pull from Remote Repository Options
    :align: center

- Accept Ours: Accept the local's version of the site and overwrite the remote version if different
- Accept Theirs: Accept the remote's version of the site and overwrite the local version if different
- None: Studio will try to merge the remote version with the local version

^^^^^^^^^^^^^^^^^^^
Conflict Resolution
^^^^^^^^^^^^^^^^^^^
When performing a pull from remote repository, Git is usually able to merge changes from the remote repository to your local files.  Sometimes, a line you edited in a file may have also been edited on the remote repository which will result in a merge conflict when you pull from the remote repository.  In this case, you will have to step in and tell Git what to do.  Crafter Studio supports resolving the conflict from the ``Remote Repositories`` dashboard.

   .. note::
      Remember not to use Studio as a git merge and conflict resolution platform. All merge conflicts should be resolved upstream before getting pulled into Studio.

When you perform a pull from repository, and there's a conflict between your local files and the remote repository files, the message ``Pull from remote failed`` will appear:

.. image:: /_static/images/site-admin/site-config-pull-from-remote-error.png
    :alt: Remote Repositories - Pull from Remote Repository Error
    :align: center

After closing the error message by clicking the ``Ok`` button, you will then be presented with options on how to resolve the conflict

.. image:: /_static/images/site-admin/site-config-pull-from-remote-fix.png
    :alt: Remote Repositories - Pull from Remote Repository Error Resolution Screen
    :align: center

In the next screen, you will be given the option to cancel the pull operation:

.. image:: /_static/images/site-admin/site-config-cancel-pull.png
    :alt: Remote Repositories - Cancel Pull From Remote Repository
    :align: center
    :width: 50 %


You will also be presented with options to resolve the conflict:

* **Accept Remote**: accept the changes from the remote repository and discard your local changes

  .. image:: /_static/images/site-admin/site-config-accept-remote.png
      :alt: Remote Repositories - Pull from Remote Repository Conflict Resolution Accept Remote
      :align: center
      :width: 50 %

* **Keep Local**: keep your local changes and discard changes from the remote repository

  .. image:: /_static/images/site-admin/site-config-keep-local.png
      :alt: Remote Repositories - Pull from Remote Repository Conflict Resolution Keep Local
      :align: center
      :width: 40 %

* **Diff**: let's you view the differences between your local files and the files in the remote repository.  Crafter Studio let's you view the differences a couple of ways:

  .. image:: /_static/images/site-admin/site-config-conflict-diff-stacked.jpg
      :alt: Remote Repositories - Pull from Remote Repository Conflict Resolution Keep Local
      :align: center
      :width: 70 %

  |

  .. image:: /_static/images/site-admin/site-config-conflict-diff-split.jpg
      :alt: Remote Repositories - Pull from Remote Repository Conflict Resolution Keep Local
      :align: center
      :width: 70 %

Select the appropriate button for your case, ``Keep Local`` or ``Accept Remote`` then click on ``Confirm``.  You will then be directed to commit the changes done to your local or cancel the pull operation.

.. image:: /_static/images/site-admin/site-config-commit-res-btn.png
    :alt: Remote Repositories - Pull from Remote Repository Conflict Resolution Keep Local
    :align: center

When committing your changes, you will then be asked to supply a message for the repository history log and you're done resolving the conflict

.. image:: /_static/images/site-admin/site-config-commit-res.png
    :alt: Remote Repositories - Pull from Remote Repository Conflict Resolution Keep Local
    :align: center
    :width: 60 %


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
