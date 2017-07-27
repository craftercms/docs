.. _sync_studio_database_with_repo:

===========================================
Synchronize Studio Database With Repository
===========================================

Sometimes the Git repository and the Studio database can become out of sync, for example, if you import content into the repository from
another environment. To fix this, open the **Sidebar**, and click on **Site Config**. In the **Site Config**, click on **Sync From Repository**.

.. image:: /_static/images/system-admin/sys-ad-sync-from-repo.png
    :width: 50 %
    :align: center
    :alt: System Administration - Sync From Repository

A notification will appear that synchronization with the repository has been initiated.

.. image:: /_static/images/system-admin/sys-add-sync-from-repo-notification.png
    :width: 60 %
    :align: center
    :alt: System Administration - Sync From Repository Notification

The time it takes to finish synchronizing from the repository depends on how much data needs to be synced.  To find out when the system has finished synchronizing from the repository, tail the catalina log and look for the message that says: ``Done syncing database with repository for site:{site_name}``.  Below is an example message in the log indicating it is done syncing from the repository::

    [INFO] 2017-07-25 00:25:52,274 [studioTaskExecutor-1] [site.SiteServiceImpl] | Syncing database with repository for site: myawesomesite fromCommitId = 6c0d16efb227c5652ec46693d2b53b97aa292147
    [INFO] 2017-07-25 00:25:52,283 [studioTaskExecutor-1] [site.SiteServiceImpl] | Done syncing operations with a result of: true
    [INFO] 2017-07-25 00:25:52,283 [studioTaskExecutor-1] [site.SiteServiceImpl] | Syncing database lastCommitId for site: myawesomesite
    [INFO] 2017-07-25 00:25:52,315 [studioTaskExecutor-1] [site.SiteServiceImpl] | Done syncing database with repository for site: myawesomesite fromCommitId = 6c0d16efb227c5652ec46693d2b53b97aa292147 with a final result of: true
