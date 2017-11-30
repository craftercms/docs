.. _sync_studio_database_with_repo:

===========================================
Synchronize Studio Database With Repository
===========================================

Sometimes the Git repository and the Studio database can become out of sync, for example, if you import content into the repository from
another environment. This is fixed by synchronizing the Studio database with the repository which is done automatically by Studio.

The time it takes to finish synchronizing from the repository depends on how much data needs to be synced.  To find out when the system has finished synchronizing from the repository, tail the catalina log and look for the message that says: ``Done syncing database with repository for site:{site_name}``.  Below is an example message in the log indicating it is done syncing from the repository::

    [INFO] 2017-11-30 11:59:36,111 [studioSchedulerFactoryBean_Worker-4] [site.SiteServiceImpl] | Syncing database with repository for site: myawesomesite   fromCommitId = deffff55157664a0895f495f472c73fbaab50f02
    [INFO] 2017-11-30 11:59:36,172 [studioSchedulerFactoryBean_Worker-4] [site.SiteServiceImpl] | Done syncing database with repository for site: myawesomesite fromCommitId = deffff55157664a0895f495f472c73fbaab50f02 with a final result of: true

