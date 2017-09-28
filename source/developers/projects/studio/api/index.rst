.. index:: API; Crafter Studio

.. _crafter-studio-api:

==================
Crafter Studio API
==================

---------------
User Management
---------------

.. toctree::
   :maxdepth: 1

   user-management/create-user
   user-management/get-user
   user-management/get-users
   user-management/get-users-per-site
   user-management/update-user
   user-management/delete-user
   user-management/enable-user
   user-management/disable-user
   user-management/get-user-status
   user-management/forgot-password
   user-management/validate-token
   user-management/set-password
   user-management/change-password
   user-management/reset-password

----------------
Group Management
----------------

.. toctree::
   :maxdepth: 1

   group-management/create-group
   group-management/get-group
   group-management/get-groups
   group-management/get-groups-per-site
   group-management/get-users
   group-management/update-group
   group-management/delete-group
   group-management/add-user
   group-management/remove-user

---------------
Site Management
---------------

.. toctree::
   :maxdepth: 1

   site/clear-configuration-cache
   site/create-site
   site/delete-site
   site/exists
   site/get-site
   site/get-sites-per-user

---------------
Repo Management
---------------

.. toctree::
   :maxdepth: 1

   repo/sync-from-repo
   repo/rebuild-database

-----
Audit
-----

.. toctree::
   :maxdepth: 1

   audit/get-audit-log

--------
Security
--------

.. toctree::
   :maxdepth: 1

   security/login
   security/logout
   security/validate-session
   security/get-user-permissions
   security/get-user-roles


----------
Monitoring
----------

.. toctree::
   :maxdepth: 1

   monitor/version
   monitor/status
   monitor/memory

----
CMIS
----

.. toctree::
   :maxdepth: 1

   cmis/list
   cmis/search
   cmis/clone

-------
Publish
-------

.. toctree::
   :maxdepth: 1

   publish/commits
   publish/status
   publish/start
   publish/stop

--------
Activity
--------

.. toctree::
   :maxdepth: 1

   activity/get-user-activity
   activity/post-activity

---------
Clipboard
---------

.. toctree::
   :maxdepth: 1

   clipboard/copy-item
   clipboard/cut-item
   clipboard/get-items
   clipboard/paste-item

----------
Dependency
----------
.. toctree::
   :maxdepth: 1

   dependency/get-dependant
   dependency/get-dependencies

----------
Deployment
----------
.. toctree::
   :maxdepth: 1

   deployment/bulk-golive
   deployment/get-available-publishing-channels
   deployment/get-deployment-history
   deployment/get-scheduled-items

-------
Preview
-------
.. toctree::
   :maxdepth: 1

   preview/sync-site

---------------
Content / Asset
---------------

.. toctree::
   :maxdepth: 1

   content/change-content-type
   content/content-exists
   content/create-folder
   content/delete-content
   content/get-content
   content/get-content-at-path
   content/get-content-type
   content/get-content-types
   content/get-item
   content/get-item-orders
   content/get-item-states
   content/get-item-versions
   content/get-items-tree
   content/reorder-items
   content/revert-content
   content/unlock-content

------
Server
------
.. toctree::
   :maxdepth: 1

   server/get-available-languages
   server/get-loggers
   server/get-ui-resource-override
   server/set-logger-state
