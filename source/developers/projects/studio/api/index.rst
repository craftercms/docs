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

	site/create-site
	site/get-site
	site/get-sites-per-user

---------------
Repo Management
---------------

.. toctree::
	:maxdepth: 1

	repo/sync-from-repo

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

-------
Publish
-------

.. toctree::
	:maxdepth: 1

	publish/status
	publish/start
	publish/stop

----------
Legacy API
----------

^^^^^^^^
Activity
^^^^^^^^

.. toctree::
	:maxdepth: 1

    activity/get-user-activity
    activity/post-activity

.. todo:: Current coverage is limited to version 3.x new features, will need to extend converage to all API calls
