.. index:: API; Crafter Profile

.. _crafter-profile-api:

===================
Crafter Profile API
===================

.. NOTE::
  All endpoints in this API require an ``accessTokenId`` parameter that needs
  to be known by  the client prior to any request. This value needs to be
  obtained from the  system administrator or maintainer. See :ref:`profile-admin-access-tokens`

-----------------------
Access Token Management
-----------------------

.. toctree::
  :maxdepth: 1
  :titlesonly:

  access_token/create
  access_token/get
  access_token/all
  access_token/delete

-----------------
Tenant Management
-----------------

.. toctree::
  :maxdepth: 1
  :titlesonly:

  tenant/create
  tenant/get
  tenant/update
  tenant/delete
  tenant/count
  tenant/all
  tenant/verify_new_profiles
  tenant/roles/add
  tenant/roles/remove
  tenant/attributes/add
  tenant/attributes/update
  tenant/attributes/remove

------------------
Profile Management
------------------

.. toctree::
  :maxdepth: 1
  :titlesonly:

  profile/create
  profile/update
  profile/verify
  profile/enable
  profile/disable
  profile/roles/add
  profile/roles/remove
  profile/attributes/get
  profile/attributes/update
  profile/attributes/remove
  profile/delete
  profile/one_by_query
  profile/get
  profile/by_username
  profile/by_ticket
  profile/count
  profile/count_by_query
  profile/by_query
  profile/by_ids
  profile/range
  profile/by_role
  profile/by_existing_attribute
  profile/reset_password
  profile/change_password
  profile/verification_token/create
  profile/verification_token/get
  profile/verification_token/delete
  profile/attachment/upload
  profile/attachment/get
  profile/attachment/all
  profile/attachment/details

--------------
Authentication
--------------

.. toctree::
  :maxdepth: 1
  :titlesonly:

  authentication/authenticate
  authentication/ticket/create
  authentication/ticket/get
  authentication/ticket/invalidate
  authentication/persistent_login/create
  authentication/persistent_login/get
  authentication/persistent_login/refresh_token
  authentication/persistent_login/delete
