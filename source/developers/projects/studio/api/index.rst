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
	user/list
	user/list-by-org
	user/list-by-project
	user/update
	user/delete
	user/enable
	user/disable
	user/status

----------------
Group Management
----------------

.. toctree::
	:maxdepth: 1

	group/create
	group/get
	group/get-by-org
	group/get-users
	group/update
	group/delete
	group/add-user
	group/remove-user

---------------
Role Management
---------------

.. toctree::
	:maxdepth: 1

	role/create
	role/get
	role/get-by-project
	role/get-users
	role/update
	role/delete
	role/add-user
	role/remove-user

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


--------
Security
--------

^^^^^^^^^^^^^^
Authentication
^^^^^^^^^^^^^^

.. toctree::
	:maxdepth: 1

	security/authentication/login
	security/authentication/logout
	security/authentication/validate-session
	security/authentication/forgot-password
	security/authentication/validate-token
	security/authentication/set-password
	security/authentication/change-password
	security/authentication/reset-password

^^^^^^^^^^^^^
Authorization
^^^^^^^^^^^^^

Policy
^^^^^^

.. toctree::
	:maxdepth: 1

	security/authorization/policy/create
	security/authorization/policy/get
	security/authorization/policy/list
	security/authorization/policy/list-by-org
	security/authorization/policy/list-users
	security/authorization/policy/update
	security/authorization/policy/delete


-----
Audit
-----

.. toctree::
	:maxdepth: 1

	audit/system
	audit/organization
	audit/project
