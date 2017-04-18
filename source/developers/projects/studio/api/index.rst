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

	user/create
	user/get
	user/get-all
	user/get-per-org
	user/get-per-project
	user/update
	user/delete
	user/enable
	user/disable
	user/status
	user/forgot-password
	user/validate-token
	user/set-password
	user/change-password
	user/reset-password

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

	security/validate-session

.. todo:: Current coverage is limited to version 3.x new features, will need to extend converage to all API calls
