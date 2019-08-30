:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Publishing and Status, Bulk Publish, Publish by Commit Id

.. _publishing-and-status:

=====================
Publishing and Status
=====================

The **Publishing** under |siteConfig| allows the user to view the publishing status, perform a bulk publish and to publish commits from sandbox repository by commit id.

------
Status
------

The **Status** tab allows the user to view the publishing status, such as the following:

- User status: User {username} disabled publishing for site on {datetime}
- User status: User {username} enabled publishing for site on {datetime}
- Error status: Stopped while trying to publish item: {item_path} on {datetime}
- Publishing status: Currently publishing package: {package_id} on {datetime}

It also allows the user to **Start** or **Stop** Studio publishing

.. image:: /_static/images/site-admin/site-config-publish-status.png
    :alt: Site Config Publishing - Status
	:align: center


---------------
Bulk Publishing
---------------

The **Bulk Publishing** tab allows the user to publish multiple items under the specified path.  For example, using the Website Editorial blueprint, to publish all the articles in the year 2017, in the **Path to Publish** field, enter ``/site/website/articles/2017``.  To publish everything in your site, the user will enter ``/`` in the **Path to Publish** field

.. image:: /_static/images/site-admin/site-config-publish-bulk.png
    :alt: Site Config Publishing - Bulk Publishing
	:align: center

-----------------------
Publish by Commit ID(s)
-----------------------

Crafter Studio also allows the user to publish commits from sandbox repository by commit id.

.. image:: /_static/images/site-admin/site-config-publish-commit-id.png
    :alt: Site Config Publishing - Publish by Commit ID(s)
	:align: center

To publish by commit id, let's use a site created using the Website Editorial blueprint and follow the steps below:

- Edit the Home page (/site/website/index.xm) from the command line or anywhere other than Studio
- From the command line, commit your changes

  .. code-block:: guess

     $ cd crafter-authoring/data/repos/sites/mysite/sandbox/site/website
     $ git add .
     $ git commit

- Get the commit id after doing the above step

  .. code-block:: guess

     $ git log
     commit f47c9a5bae4184e7b5ff2cb03b90b8ff86adec37 (HEAD -> master)
     Author: myuser <myuser@example.com>
     Date:   Fri Mar 15 10:09:57 2019 -0400

         edited home page outside of studio

     commit 1121d1b90d7b3131025932b6a0f0269d918caa11
     Author: admin admin <evaladmin@example.com>
     Date:   Fri Mar 15 09:31:57 2019 -0400

  The commit id we want to publish by commit id is ``f47c9a5bae4184e7b5ff2cb03b90b8ff86adec37``

- Go back to Studio and click on |siteConfig| -> Publishing
- Click on the ``Publish by Commit ID(s)`` tab
- Paste the commit id from the step where we got the commit id, then click on the ``Publish`` button
