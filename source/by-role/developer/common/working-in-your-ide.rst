:is-up-to-date: True
:last-updated: 4.1.0

.. _working-in-your-ide:

===================
Working in Your IDE
===================

While Crafter Studio can help with basic code development, it's not an IDE. It's possible and encouraged for developers to work in their own IDEs against a local git repository, and upon a commit or merge, Crafter Studio will pick up the changes and sync up with the developer's work that was done in the IDE.

Please review the :ref:`devcontentops` article for best practices on that.

--------------------------
Studio-Git Synchronization
--------------------------

Sometimes the Git repository and the Studio database can become out of sync, for example, if you pull code and content from
another environment. Upon a pull, Studio will sync its internal database with the git repository automatically and you're all set.

The time it takes to finish synchronizing from the repository depends on how much data needs to be synced. To find out when the system has finished synchronizing from the repository, tail the catalina log and look for the message that says: ``Done syncing database with repository for site:{site_name}``. Below is an example message in the log indicating it is done syncing from the repository::

    [INFO] 2017-11-30 11:59:36,111 [studioSchedulerFactoryBean_Worker-4] [site.SiteServiceImpl] | Syncing database with repository for site: myawesomesite   fromCommitId = deffff55157664a0895f495f472c73fbaab50f02
    [INFO] 2017-11-30 11:59:36,172 [studioSchedulerFactoryBean_Worker-4] [site.SiteServiceImpl] | Done syncing database with repository for site: myawesomesite fromCommitId = deffff55157664a0895f495f472c73fbaab50f02 with a final result of: true

