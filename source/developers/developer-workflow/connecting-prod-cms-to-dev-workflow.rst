:is-up-to-date: True

.. index:: Connecting the Production CMS to the Development Workflow, Development Workflow

.. _connecting-the-production-CMS-to-the-development-workflow:

=========================================================
Connecting the Production CMS to the Development Workflow
=========================================================

In this section we’re going to illustrate how the production CMS is “connected with” and participates in the development workflow to support CrafterCMS' DevContentOps process.

The Production CMS instance is connected to the development workflow at the repository level.  Crafter CMS’s authoring components sit on top of CrafterCMS' Git-based repository.  Git is a distributed repository -- and we leverage this fact to support the movement of code and content between production and the development process.

-----------------------------------------------------
The Link Between Production Authoring and Development
-----------------------------------------------------

Typically a development  process is supported by a Git repository with workflow and tooling on top of it.  Organizations use a wide variety of solutions both on-prem and in the cloud including BitBucket, GitHub, GitLab and others.  It’s the **Master** branch that serves as the root of the DevOps workflow. For further reference we’ll call this Master branch in this repository the Production Code repository.  It’s worth noting that any Git-based repository will work. That said, a Git repository that has a Web UI and integration hooks on top of it (like the examples mentioned) is ideal.

At a very high level, the project for your site (e.g., my.com) in your Production Crafter CMS' authoring server Crafter Studio is configured to be “connected” with your production code repository.

Said more simply, your Production Content repository and process is connected with your Production Code repository and process (as shown in the figure below).  In effect they are one, distributed repository.


.. image:: /_static/images/developer/workflow/Gitflow-Crafter-Page3.png
      :alt: Connecting the Production CMS to the Developer Workflow - Crafter Gitflow
      :width: 50 %
      :align: center

|

--------------------------------
Content Authoring and Publishing
--------------------------------

The first thing to understand in the process is how content is published to the Production delivery servers.

.. image:: /_static/images/developer/workflow/craftercms-CMS-Meets-DevOps-Sandbox-Published-768x470.jpg
      :alt: Developer Workflow - Authors work in Sandbox. Delivery nodes pull from Published
      :width: 60 %
      :align: center

The illustration above illustrates the production environment and shows both authoring and delivery components.  Note that when authors create content they are working in a safe, version controlled “sandbox”.  Every change they make through the UI is tracked and versioned for them in a Crafter Studio managed, local (to Studio) repository called **Sandbox**.

When the author publishes content via the UI, Crafter CMS moves content from the local **Sandbox** repository to a local **Published** repository.  Once content is committed in **Published** it is considered to be published.

Remote delivery nodes (or deployment depots) run a Crafter Deployment agent called Crafter Deployer.  The deployer updates the local content on it’s server by either a duty cycle or on an API invocation.  Crafter Deployer creates and manages a remote clone of the **Published** repository from the Authoring server.  A clone is a local Git repository with an upstream relationship with a remote repository (typically on another server and addressed via HTTPS or SSH.)  In most cases SSH is used by the delivery server to talk to the Authoring server and access the **Published** Git repository.

-----------------------------------------------------------
Connecting Content Authoring to Developer Workflow / DevOps
-----------------------------------------------------------

The next thing to understand is exactly how your Production content repository and authoring process is “connected” with your Production code repository and DevOps process.  As previously indicated, the primary point of integration is via the distributed repository.

Now that we’ve got a bit more content on the repository architecture for a site under Studio we can better illustrate the relationship between Studio’s repositories and the Production code repository.

.. image:: /_static/images/developer/workflow/craftercms-CMS-Meets-DevOps-flow-1-768x496.png
     :alt: Developer Workflow - Create upstream repository
     :width: 70 %
     :align: center

In the figure above you see that it is the **Sandbox** repository for the site that is directly “connected” with the production code repository.  Studio’s sandbox repository (in production), the Production content repository, is “connected” with the project’s master branch, the Production code repository, in GitHub.

Remote Repositories
-------------------
The term “connected” is a simplification.  In Git parlance, the real terminology, and the terminology we’ll use going forward in the documentation is “remote.”  The repository in GitHub is configured as a “remote” of the Sandbox repository under Crafter Studio.  Remote repositories are Git’s way of relating one repository to another.  A repository can have many remotes.  Remotes are given names that describe their purpose and relationship.  Typically the type of relationship Studio’s Sandbox repository has with the production Code repository in GitHub is called an upstream and is typically labeled “origin”

There are two mechanisms for configuring a remote repository:
    * At creation time of the project in Crafter Studio

       * You can create a new project based on a blueprint project and configure a remote (that has a bare/empty repository) to push the content to.
       * You can create a new project based on existing code and content in a remote.

    * At a later time via Studio API

Syncing the Content Repository and the Code Repository
------------------------------------------------------

Once your remote is configured in Crafter Studio such that the Production Code repository is considered the upstream remote “origin”, you can can now flow code and content between the two repositories -- they are essentially one, distributed repository.

Syncing the two repositories is done in two steps.

#. First you pull the remote (the code) repository updates to you.

     #. Given our workflow described above, unless there is an approved release waiting to move forward the pull will contain no updates.
     #. If there are updates they will be merged with the Production content
     #. If process has been violated and code has been modified in Studio or content has been modified in the code repository a conflict may occur.  These should not happen unless a process violation has occurred. Any conflicts will need to be resolved.  Conflicts are resolved through standard Git conflict resolution activities and mechanics.

#. Second you push the merged, unconflicted repository back to the remote.  This makes content from the authoring process available to the development process.

Syncing (pull / push) the repositories is triggered via two distinct API calls (one to pull from a remote and the other to push to a remote.)   It’s possible to trigger these activities manually or on a schedule.  The frequency of triggering the sync depends on how often the development process needs the production content.  The APIs are most often triggered via DevOps automation platforms like Jenkins, Travis, Bamboo and so on.

.. image:: /_static/images/developer/workflow/syncing-content-repo.jpg
     :alt: Developer Workflow - Syncing the Content Repository and the Code Repository
     :width: 80 %
     :align: center

|

Common Questions About Studio and Remote Repositories
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* **If I have configured a remote repository, does that mean that Studio will automatically sync up with the remote?**

    * Answer: No.  Syncing with a remote repository is triggered by an API call.  This gives you full control over when Studio syncs with the remote.

* **Is there a chance I can get a merge conflict when syncing the content repository and the code repository?**

    * Answer: Yes, that’s possible.  That said, If code and config changes are made via the development workflow and in the code repository and content changes are made via Studio a merge conflict is unlikely.

* **What do I do if I get a merge conflict?**

    * Answer: You must resolve the merge conflict on the authoring server and then resync.

* **Do my delivery servers then retrieve content from the remote repository?**

    * Answer: No.  Delivery servers retrieve content from Crafter Studio’s Published repository (each site has a Published repository)


Publishing Code Updates
-----------------------

As you can see from the figures above, the Authoring server’s Sandbox is the Content repository for the project.  It’s the Sandbox that is synced with the remote Code repository.  Once code has moved forward from the Code repository to the Sandbox on the authoring server it’s still not “live” on the delivery servers. Delivery and depot servers running Crafter Deployer are syncing with the project Published repository.  To promote code updates to Live we must inform Crafter Studio to publish them.  Publishing a code update is done via a Studio API (Publish Commits) that will publish one or more commit IDs.  Typically only a single commit ID is required.  Once the API is called Studio will publish the code to the live delivery servers just as it publishes content.

.. image:: /_static/images/developer/workflow/publishing-code-updates.jpg
     :alt: Developer Workflow - Publishing Code Updates
     :width: 80 %
     :align: center
