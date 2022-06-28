:is-up-to-date: True
:last-updated: 4.0.0

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Publishing and Status, Bulk Publish, Publish by Commit Id

.. _newIa-publishing-and-status:

=====================
Publishing and Status
=====================

The **Publishing Dashboard** under |projectTools| allows the user to view the publishing status,
publish multiple items from a specified path, publish commits from sandbox repository by commit id or tag and
view the publishing queue.

.. _newIa-publishing-status:

------
Status
------

The **Status** section allows the user to view the publishing status, such as the following:

- The publisher was stopped by an administrator.
- The publisher was stopped due to an error.
- Preparing items for publishing. {numberOfItems} out of {totalItems} processed so far.

It also allows the user to **Start** or **Stop** Studio publishing

.. image:: /_static/images/site-admin/project-tools-publish-status.png
    :alt: Project Tools Publishing - Status
	:align: center

|

Publishing is locked when content is being published.  From the Status tab, you can unlock publishing by clicking on the ``unlock`` button that is displayed during content publishing.

.. image:: /_static/images/site-admin/project-tools-unlock-publish.png
    :alt: Project Tools Publishing - Unlock icon
 	:align: center

|

After clicking on the ``unlock`` button, the user will be prompted to confirm the action:

.. todo: check if image below needs to be updated

.. image:: /_static/images/site-admin/site-config-unlock-publish-confirm.png
    :alt: Project Tools Publishing - Unlock icon
    :width: 50%
    :align: center

|

-----------------
Publish on demand
-----------------

The **Publish on Demand** section allows the user to publish changes made in Studio via the UI and
to publish commits from sandbox repository by commit id.

.. image:: /_static/images/site-admin/project-tools-publish-on-demand.png
    :alt: Project Tools Publishing - Publish on Demand
	:align: center

|

Publish by path
---------------

The **Publish changes made in Studio via the UI** selection allows the user to publish multiple items under a specified path.  This should be used to publish changes made in Studio via the UI.

For example, using the Website Editorial blueprint, to publish all the articles in the year 2021, in the **Path to Publish** field, enter ``/site/website/articles/2021``.  To publish everything in your project, the user will enter ``/`` in the **Path to Publish** field

.. image:: /_static/images/site-admin/project-tools-publish-bulk.png
    :alt: Project Tools Publishing - Publish changes made in Studio via the UI
	:align: center

|

Publish by Commit/tag ID(s)
---------------------------

The **Publish changes made via direct git actions against the repository or pulled from a remote repository** allows the user to publish by tags or commits ids

.. image:: /_static/images/site-admin/project-tools-publish-commit-id.png
    :alt: Project Tools Publishing - Publish by Commit ID(s)
	:align: center

|

   .. include:: /includes/git-changes-note.rst

|

To publish by commit id, let's use a project created using the Website Editorial blueprint and follow the steps below:

- Edit the Home page (/site/website/index.xm) from the command line or anywhere other than Studio
- From the command line, commit your changes

  .. code-block:: bash

     $ cd crafter-authoring/data/repos/sites/my-editorial/sandbox/site/website
     $ git add .
     $ git commit

- Get the commit id after doing the above step

  .. code-block:: bash

     $ git log
     commit f47c9a5bae4184e7b5ff2cb03b90b8ff86adec37 (HEAD -> master)
     Author: myuser <myuser@example.com>
     Date:   Fri Mar 15 10:09:57 2021 -0400

         edited home page outside of studio

     commit 1121d1b90d7b3131025932b6a0f0269d918caa11
     Author: admin admin <evaladmin@example.com>
     Date:   Fri Mar 15 09:31:57 2021 -0400

  The commit id we want to publish by commit id is ``f47c9a5bae4184e7b5ff2cb03b90b8ff86adec37``

- Go back to Studio and click on |projectTools| -> Publishing
- Scroll down to the ``Publish on Demand`` section
- Select the ``Publish changes made via direct git actions against the repository or pulled from a remote repository`` radio button
- Paste the commit id from the step where we got the commit id, then click on the ``Publish`` button

.. _newIa-publishing-queue:

----------------
Publishing Queue
----------------

The **Publishing Queue** tab allows the user to see the items(publishing packages) that are in the queue for publishing.

.. image:: /_static/images/site-admin/project-tools-publish-queue.png
    :alt: Project Tools Publishing - Publishing Queue
	:align: center

|

**Publishing packages** contains the following information:

* An ``id`` for the publishing package
* The ``target`` item is published to/to be published
* ``Username`` that sent/requested publishing package
* ``Submission comment``
* ``State`` of the publishing package
* ``Scheduled Date`` for publishing the package
* A list of file(s) contained in the publishing package with the following information:

    * The ``content type``
    * The ``content path``


.. image:: /_static/images/site-admin/project-tools-publishing-package.png
    :alt: Project Tools Publishing - Publishing Package
	:align: center

|

You can filter the publishing queue displayed, based on the following:

* ``Path Expression`` (e.g. simple regex ``/SOME/PATH/*``)
* ``Publishing Target`` (a list of all available targets)
* ``State`` of the publishing packages

  The following are the applicable states to publishing packages.

    * **All**
    * **Ready for Live**: Item is scheduled and waiting in the queue to be published
    * **Processing**: Item is being published
    * **Completed**: Item has been published
    * **Cancelled**: Item has been removed from the queue (publishing was cancelled)
    * **Blocked**: Item is blocking the publishing queue


.. image:: /_static/images/site-admin/project-tools-publish-queue-filter.png
    :alt: Project Tools Publishing - Publishing Queue Filters
    :width: 35 %
    :align: center

|

Filtering shows packages where one or more items in the package match.  The default filter is set for items that are in State ``READY_FOR_LIVE`` and Publishing Target ``All``  which will show a list of packages that are ready to go live.

Below, we have the filter set to display items in the ``COMPLETED`` state

.. image:: /_static/images/site-admin/project-tools-publish-queue-filter-completed.png
    :alt: Project Tools Publishing - Publishing Queue Filter Completed
    :align: center

|

Packages in the ``READY_FOR_LIVE`` state can be selected and the publishing package cancelled.  In the image below, we have two publishing packages selected with the ``Cancel Selected`` button clicked and confirming if the user wants to set the state of the selected publishing packages to state ``CANCELLED``

.. image:: /_static/images/site-admin/project-tools-publish-queue-filter-cancel.png
    :alt: Project Tools Publishing - Publishing Queue Filter Completed
    :align: center

