:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:
:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Project Tools Git

.. _project-tools-git:

===
Git
===

The **Git** under |projectTools| allows the user to perform Git operations such as viewing remote repositories linked to the project and options to pull and push to the listed remote repositories.  It also allows the user to add a remote repository to the project.

Below, we have a site **mysweetdotcom** with a link to a remote repository in GitHub:

.. .. image:: /_static/images/developer/dev-cloud-platforms/craftercms-github-remotes.webp
    :alt: Developer How-Tos - Pushing and Pulling from the Remote Repository
    :width: 100 %
    :align: center

.. image:: /_static/images/site-admin/craftercms-github-remotes.webp
    :alt: Developer How-Tos - Pushing and Pulling from the Remote Repository
    :width: 100 %
    :align: center

|

----------------
Add a Repository
----------------
To add a remote repository for your site, click on the **New Remote** button.  A **Create Repository** dialog will open where you'll need to fill in the required information then click on the **Create** button and you should see the new repository added in the **Remote Repositories**

.. image:: /_static/images/site-admin/project-tools-add-repo.webp
    :alt: Git - New Repository
	:align: center

|

   .. note::
      For more information on errors that a user may encounter when using ssh keys with CrafterCMS, see :ref:`debugging_ssh_issues`

--------------------
Pull from Repository
--------------------

To get updates from the remote repositories, click on the down arrow next to the remote repository you would like to pull changes from

.. image:: /_static/images/site-admin/project-tools-pull-from-remote.webp
    :alt: Git - Pull from Remote Repository
    :align: center

|

You will then be given some options when Studio pulls from the remote repository:

.. image:: /_static/images/site-admin/project-tools-pull-from-remote-options.webp
    :alt: Git - Pull from Remote Repository Options
    :align: center

|

- Accept Ours: Accept the local's version of the site and overwrite the remote version if different
- Accept Theirs: Accept the remote's version of the site and overwrite the local version if different
- None: Studio will try to merge the remote version with the local version

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Successful Pull From Repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
   :label: Since
   :version: 4.0.0

After making your selection, a notification at the bottom left of the screen will appear notifying the user of the successful pull, along with the merge commit id being copied to the clipboard and an option to publish it:

.. image:: /_static/images/site-admin/project-tools-successful-pull.webp
    :alt: Git - Pull Successful Notification
    :align: center

|

If the user opts to publish the commit id from the successful pull, open ``Publishing`` under
|projectTools|, then scroll down to the ``Publish on Demand`` section and select the publish by
tags/commit id radio button, then pasting the commit id copied to the clipboard from the successful pull.


Another way of publishing the commitd id from the successful pull is to click ``Yes`` on the notification on the bottom left, then the ``Publish Commit`` dialog will open

.. image:: /_static/images/site-admin/project-tools-publish-commit-from-pull.webp
    :alt: Git - Publish Commit Id from Successful Pull
    :align: center

|


^^^^^^^^^^^^^^^^^^^
Conflict Resolution
^^^^^^^^^^^^^^^^^^^
When performing a pull from remote repository, Git is usually able to merge changes from the remote repository to your local files.  Sometimes, a line you edited in a file may have also been edited on the remote repository which will result in a merge conflict when you pull from the remote repository.  In this case, you will have to step in and tell Git what to do.  Crafter Studio supports resolving the conflict from the ``Git`` dashboard.

   .. note::
      Remember not to use Studio as a git merge and conflict resolution platform. All merge conflicts should be resolved upstream before getting pulled into Studio.

When you perform a pull from repository, and there's a conflict between your local files and the remote repository files, the message ``Pull from remote repository resulted in conflict`` will appear on the bottom left of the screen:

.. image:: /_static/images/site-admin/project-tools-pull-from-remote-error.webp
    :alt: Git - Pull from Remote Repository Error
    :align: center

|

After the conflict message appears on the bottom left, to resolve the conflict, click on the ``Repository Status`` tab.  Here, you will then be presented with options on how to resolve the conflict

.. image:: /_static/images/site-admin/project-tools-pull-from-remote-fix.webp
    :alt: Git - Pull from Remote Repository Error Resolution Screen
    :align: center

|

To cancel the pull operation, click on the ``Revert All`` button:

.. image:: /_static/images/site-admin/project-tools-cancel-pull.webp
    :alt: Git - Cancel Pull From Remote Repository
    :align: center
    :width: 80 %

|

To resolve the conflict, you are given two options:

* **Accept Remote**: accept the changes from the remote repository and discard your local changes

  .. image:: /_static/images/site-admin/project-tools-accept-remote.webp
      :alt: Git - Pull from Remote Repository Conflict Resolution Accept Remote
      :align: center
      :width: 30 %

  |

* **Keep Local**: keep your local changes and discard changes from the remote repository

  .. image:: /_static/images/site-admin/project-tools-keep-local.webp
      :alt: Git - Pull from Remote Repository Conflict Resolution Keep Local
      :align: center
      :width: 30 %

  |

* **Diff**: let's you view the differences between your local files and the files in the remote repository.  Crafter Studio let's you view the differences a couple of ways:

  .. image:: /_static/images/site-admin/project-tools-conflict-diff-stacked.webp
      :alt: Git - Pull from Remote Repository Conflict Resolution Diff Stacked
      :align: center
      :width: 70 %

  |

  .. image:: /_static/images/site-admin/project-tools-conflict-diff-split.webp
      :alt: Git - Pull from Remote Repository Conflict Resolution Diff Split
      :align: center
      :width: 70 %

  |

Select the appropriate button for your case, ``Keep Local`` or ``Accept Remote`` then click on ``Confirm``.  You will then be directed to commit the changes done to your local or cancel the pull operation.

.. image:: /_static/images/site-admin/project-tools-commit-res-btn.webp
    :alt: Git - Pull from Remote Repository Conflict Resolution
    :align: center

|

When committing your changes, you will then be asked to supply a message for the repository history log then click on the ``Commit Resolution`` button and you're done resolving the conflict

.. image:: /_static/images/site-admin/project-tools-commit-res.webp
    :alt: Git - Pull from Remote Repository Conflict Resolution Commit
    :align: center
    :width: 60 %

|

------------------
Push to Repository
------------------

To push your changes in Studio to a remote repository, click on the up arrow next to the remote repository you would like to push changes to

.. image:: /_static/images/site-admin/project-tools-push-to-remote.webp
    :alt: Remote Repositories - Push to Remote Repository
	:align: center

|

In the **Push** dialog, select the branch in the remote repository you'd like to push changes to

.. image:: /_static/images/site-admin/project-tools-push-to-remote-options.webp
    :alt: Remote Repositories - Push to Remote Repository
	:align: center

|