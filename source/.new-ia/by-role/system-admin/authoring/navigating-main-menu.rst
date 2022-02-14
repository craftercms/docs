:is-up-to-date: True

.. index:: Navigating the Main Menu

.. _newIa-navigating-main-menu:

==============================
Navigating the Navigation Menu
==============================

In this section, we discuss the Navigation Menu tools available in Studio.  To access, click the ``Navigation Menu`` icon from the top right of the browser

.. image:: /_static/images/system-admin/main-menu/open-main-menu.png
    :alt: System Administrator - Open Navigation Menu
    :align: center
    :width: 100%

|

Here are the list of tools available when using an out of the box blueprint.  The ``Navigation Menu`` tools described below are available to users belonging to the ``system_admin`` group.

.. image:: /_static/images/system-admin/main-menu/main-menu.png
    :alt: System Administrator - Navigation Menu
    :align: center
    :width: 20%

The configuration files for the Main Menu is located in ``CRAFTER_HOME/data/repos/global/configuration/`` where:

* :ref:`global-menu-config.xml <newIa-global-menu-config>` lets you setup the list of tools available from the Main Menu sidebar
* :ref:`global-permission-mappings-config.xml <newIa-global-permission-mappings-config>` lets you configure the permissions to a role globally for the entire application
* :ref:`global-role-mappings-config.xml <newIa-global-role-mappings-config>` lets you configure the mapping between the group and the role

The tools available in the Main Menu is configured similar to how the Site Config Sidebar is configured :ref:`here<newIa-site-config-tools>` using the :ref:`global menu config <global-menu-config>` configuration file mentioned above.

.. _newIa-main-menu-tool-sites:

-----
Sites
-----
``Sites`` contains a list of all the sites the logged in user has access to. The section :ref:`newIa-content-authors-navigating-studio` in ``Content Authors`` contains descriptions on some of the actions that can be performed from the Sites screen.

.. image:: /_static/images/system-admin/main-menu/main-menu-sites.png
    :alt: System Administrator - Navigation Menu Sites
    :align: center
    :width: 85%

.. _newIa-main-menu-tool-users:

-----
Users
-----
A user is anybody who uses CrafterCMS.  ``Users`` lets the administrator manage who has access to Crafter Studio.  See :ref:`newIa-users-management` for more information on ``Users``

.. image:: /_static/images/system-admin/main-menu/main-menu-users.png
    :alt: System Administrator - Navigation Menu Users
    :align: center
    :width: 85%

|

:ref:`newIa-users-group-management` contains more information on managing users and groups.

.. _newIa-main-menu-tool-groups:

------
Groups
------
A group consists of a collection of users.  ``Groups`` lets the administrator manage groups, members belonging to a group, etc.  For more information on groups, see :ref:`newIa-groups-management`

.. image:: /_static/images/system-admin/main-menu/main-menu-groups.png
    :alt: System Administrator - Navigation Menu Groups
    :align: center
    :width: 85%

|

:ref:`newIa-users-group-management` contains more information on managing users and groups.

.. _newIa-main-menu-tool-cluster:

-------
Cluster
-------
``Cluster`` lets the administrator manage Studio clusters.  See :ref:`newIa-clustering` for more information on how to setup clustering and available actions from ``Cluster`` from the Main Menu

.. image:: /_static/images/system-admin/main-menu/main-menu-cluster.png
    :alt: System Administrator - Navigation Menu Cluster
    :align: center
    :width: 85%

.. _newIa-main-menu-tool-audit:

-----
Audit
-----
Audit logs displays the date, time, user and action performed to content in all the sites available as well as actions performed in Studio such as logins/logouts, user removal, group addition, etc.

.. image:: /_static/images/system-admin/main-menu/main-menu-audit.jpg
    :alt: System Administrator - Navigation Menu Audit
    :align: center
    :width: 85%

See :ref:`newIa-nav-menu-audit` for more details on the audit logs

.. _newIa-main-menu-tool-logging-levels:

--------------
Logging Levels
--------------

There are 4 log levels defined in CrafterCMS.  These levels determine what messages will be logged and displayed in the **Logging Console**.  Below are the 4 log levels available from the lowest to the highest:

    - debug: displays things useful for debugging
    - info: displays informational messages like progress of the application, etc
    - warn: displays potentially harmful situations that might cause problems
    - error: displays anything that may be fatal to the operation/causes a problem

The lower your logging levels are set, the more verbose your logs will be.

.. image:: /_static/images/system-admin/main-menu/main-menu-logging-levels.jpg
    :alt: System Administrator - Navigation Menu Logging Levels
    :align: center
    :width: 85%

For more information on logging levels, see :ref:`newIa-override-logging-levels`

.. _newIa-main-menu-tool-log-console:

-----------
Log Console
-----------

The ``Log Console`` allows the user to view messages depending on what log levels and what Java packages have been set for tracking.

.. image:: /_static/images/system-admin/main-menu/main-menu-log-console.png
    :alt: System Administrator - Navigation Menu Log Console
    :align: center
    :width: 75%

:ref:`newIa-override-logging-levels` contains more information on how to track Java packages with the corresponding log levels desired.

The ``Log Console`` here in the Main Menu is similar to a site ``Log Console`` described :ref:`here<newIa-studio-log-console>`.  The difference is the ``Log Console`` from the Main Menu can display logs for all the sites inside Studio, not just one site.

.. _newIa-main-menu-tool-global-config:

-------------
Global Config
-------------

The ``Global Config`` allows the user to edit the system settings for Studio without access to the physical server.

.. image:: /_static/images/system-admin/main-menu/main-menu-global-config.jpg
    :alt: System Administrator - Navigation Menu Global Config
    :align: center
    :width: 100%

When making changes here, not all changes can/will take effect without a restart, so expect to have to **restart Studio** for most changes to take effect

For more information on what you can configure from the ``Global Config``, see :ref:`newIa-nav-menu-global-config`

.. _newIa-main-menu-tool-encryption-tool:

---------------
Encryption Tool
---------------

The ``Encryption Tool`` allows the user to encrypt sensitive data such as access keys and passwords, that shouldn't be publicly available to anyone but developers and administrators

.. image:: /_static/images/system-admin/main-menu/main-menu-encryption-tool.png
    :alt: System Administrator - Navigation Menu Encryption Tool
    :align: center
    :width: 100%

For more information on how to use the encryption tool, see :ref:`newIa-nav-menu-encryption-tool`.

----------------
Token Management
----------------

The ``Token Management Tool`` allows the user to manage access tokens used to make API requests on behalf of the user

.. image:: /_static/images/system-admin/main-menu/main-menu-token-management.png
    :alt: System Administrator - Navigation Menu Token Management Tool
    :align: center
    :width: 100%

For more information on how to use the Token Management tool, see :ref:`newIa-working-with-crafter-studios-api`.

-------
Account
-------
The ``Account Tool`` allows the user to change the user's personal Crafter Studio settings like language or to change the user's password.

.. image:: /_static/images/system-admin/main-menu/main-menu-account.jpg
    :alt: System Administrator - Navigation Menu Account Tool
    :align: center
    :width: 100%

For more information on how to use the Account tool, see :ref:`newIa-account-management`.

