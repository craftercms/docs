:is-up-to-date: False
:last-updated: 4.0.0

:orphan:

.. index:: Role Mappings

.. _role-mappings:

=============
Role Mappings
=============

Users only sees the items that they have been granted access to based on the permissions granted to the Role they have been assigned to. The role mappings configuration file defines the mapping between the group that the user belongs to and the studio authoring role. To modify the role mappings, click on |projectTools| from the bottom of the *Sidebar*, then click on **Configuration** and select **Role Mappings** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-role-mappings.webp
    :alt: Configurations - Open Role Mappings
    :width: 55 %
    :align: center

------
Sample
------

Here's a sample Role Mappings Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample role mappings configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-role-mappings-config.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/role-mappings-config.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|
|


-----------
Description
-----------

    ``/role-mappings/groups/group@name``
        Name of the user group

    ``/role-mappings/groups/role``
        Name of authoring role that group will map to

---------------------
Default Project Roles
---------------------

CrafterCMS comes with predefined roles out of the box for projects.
Here's a list of predefined roles for projects:

* **admin**: Users with the ``admin`` role have access to project configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow

* **developer**: Users with the ``developer`` role have access to project configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow

* **reviewer**: Users with the ``reviewer`` role have the ability to approve and reject workflow. They also have access to a number of actions in the dashboard which are not available to content contributors (users with role ``author``) including ``Pending Approval`` and ``Scheduled Publish``. They do not have access to edit content.

* **publisher**: Users with the ``publisher`` role have the ability to approve and reject workflow. They also have access to a number of actions in the dashboard which are not available to content contributors (users with role ``author``) including ``Pending Approval`` and ``Scheduled Publish``. In addition, they also have access to create, edit and submit content like the ``author`` role.

* **author**: Users with the role ``author`` have access to create, edit and submit content

See :ref:`permission-mappings` for more information on all items accessible for each role in a project.