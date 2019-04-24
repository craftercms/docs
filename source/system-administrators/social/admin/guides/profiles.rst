:is-up-to-date: True

.. _social-admin-profiles:

===================
Profiles Management
===================

---------------
Search Profiles
---------------

To find a specific profile you can click the ``Search Profiles`` link in the left sidebar.

.. figure:: /_static/images/social-admin/profiles.png
  :align: center
  :alt: Crafter Social search profiles

In the search page you need to select the right tenant from the dropdown, indicate the username
of the profile and then press the search button.

In this page you can find basic information and manage the social roles for the profiles, if you
need to change anything else in the profile you need to use the :ref:`profile-admin-console`.

------------
Update Roles
------------

From the search page you can click the ID of the profile to see the details:

.. figure:: /_static/images/social-admin/profile.png
  :align: center
  :alt: Crafter Social profile

To change the roles you need to select the right Context from the dropdown and indicate *all* the
roles you want to set for the user.

^^^^^^^^^^^^
Social Roles
^^^^^^^^^^^^

+-------------------+----------------------------------------------------------------------------+
| Role              | Description                                                                |
+===================+============================================================================+
| SOCIAL_SUPERADMIN || This is the only role allowed to create new Social Contexts               |
+-------------------+----------------------------------------------------------------------------+
| SOCIAL_ADMIN      || Provides complete access to manage data in Crafter Social                 |
+-------------------+----------------------------------------------------------------------------+
| SOCIAL_MODERATOR  || Provides access to view and manage the new content that needs             |
|                   || moderation                                                                |
+-------------------+----------------------------------------------------------------------------+
| SOCIAL_APPROVER   || Users with this role will receive emails when the Email Moderation        |
|                   || feature is enabled                                                        |
+-------------------+----------------------------------------------------------------------------+
| SOCIAL_USER       || Provides access to create and update new content                          |
+-------------------+----------------------------------------------------------------------------+
| ANONYMOUS         || Special role used in request when no user has logged in and there is      |
|                   || no profile available                                                      |
+-------------------+----------------------------------------------------------------------------+
