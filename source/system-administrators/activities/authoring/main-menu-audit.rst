:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now


.. index:: Main Menu Audit
.. _main-menu-audit:

===============
Main Menu Audit
===============

Crafter CMS tracks the date, time, user and action performed to content and the system through an audit log.

To view the audit logs, from the top right of your browser, click on the ``Main Menu`` icon |mainMenu|, then click on ``Audit`` from the ``Main Menu`` sidebar.

.. image:: /_static/images/system-admin/main-menu/main-menu-audit.png
    :alt: System Administrator - Main Menu Audit
    :align: center
    :width: 85%

You can filter the logs displayed based on the following:


----------------------
Audit Logs Site Filter
----------------------
``Site`` filters the log by site .  Clicking on ``Site`` gives you a list of all the sites in Studio and the option to see system logs or logs for all the sites.

.. image:: /_static/images/system-admin/main-menu/audit-site-filter.png
    :alt: System Administrator - Main Menu Audit Site Filter
    :align: center
    :width: 85%

----------------------
Audit Logs User Filter
----------------------
``User`` filters the log by user name.  Clicking on ``User`` gives you a list of all the users in Studio and the option to see logs for all users.

.. image:: /_static/images/system-admin/main-menu/audit-user-filter.png
    :alt: System Administrator - Main Menu Audit User Filter
    :align: center
    :width: 85%

----------------------------
Audit Logs Operations Filter
----------------------------
``Operations`` filters the log by operations.  Clicking on ``Operations`` gives you a list of all operations logged.

.. image:: /_static/images/system-admin/main-menu/audit-operations-filter.png
    :alt: System Administrator - Main Menu Audit Operations Filter
    :align: center
    :width: 85%

Here are the operations available for filtering:

* Login
* Login Failed
* Logout
* Create
* Update
* Delete
* Move
* Revert
* Enable
* Disable
* Add User to Group
* Remove User from Group
* Add Remote
* Remove Remote
* Push to Remote
* Pull from Remote
* Request Publish
* Approve
* Approve Scheduled
* Reject
* Publish
* Stop Publisher
* Start Publisher
* Remove Cluster Node


-------------------------
Audit Logs Options Filter
-------------------------

``Options`` filters the log based on date range, cluster node id, origins (Git or API) or path.

.. image:: /_static/images/system-admin/main-menu/audit-options-filter.png
    :alt: System Administrator - Main Menu Audit Options Filter
    :align: center
    :width: 85%
