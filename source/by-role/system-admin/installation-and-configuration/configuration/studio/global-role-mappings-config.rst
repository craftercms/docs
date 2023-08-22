:is-up-to-date: True
:last-updated: 4.1.2

:orphan:

.. index:: Global Role Mappings Config

.. _global-role-mappings-config:

===========================
Global Role Mappings Config
===========================
The global role mappings config contains the role mappings for groups created in CrafterCMS that needs global permissions. For more information on groups, see :ref:`groups-management`

To access the global role mappings config file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/`` then open the file ``global-role-mappings-config.xml``. Remember to restart Crafter so your changes to the file will take effect.

Here's the default global role mappings configuration (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "global-role-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/global-role-mappings-config.xml
       :language: xml
       :caption: *CRAFTER_HOME/data/repos/global/configuration/global-role-mappings-config.xml*
       :linenos:


.. raw:: html

   </details>


-------------------
Default Global Role
-------------------
CrafterCMS comes with a predefined global role ``system_admin`` out of the box.

Users with the ``system_admin`` role have access to everything in the CMS such as all the modules in the Main Menu for managing users, groups, etc., all the sites and configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow.

See :ref:`global-permission-mappings-config` for more information on all items accessible for the ``system_admin`` role.


