:is-up-to-date: True

:orphan:

.. index:: Global Role Mappings Config

.. _newIa-global-role-mappings-config:

===========================
Global Role Mappings Config
===========================

The global role mappings config contains the role mappings for groups created in CrafterCMS that needs global permissions.  For more information on groups, see :ref:`newIa-groups-management`

To access the global role mappings config file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/`` then open the file ``global-role-mappings-config.xml``.  Remember to restart Crafter so your changes to the file will take effect.

.. code-block:: xml
   :caption: *CRAFTER_HOME/data/repos/global/configuration/global-role-mappings-config.xml*
   :linenos:

   <role-mappings>
     <groups>
       <group name="system_admin">
         <role>system_admin</role>
       </group>
      </groups>
   </role-mappings>

-------------------
Default Global Role
-------------------

CrafterCMS comes with a predefined global role ``system_admin`` out of the box.

Users with the ``system_admin`` role have access to everything in the CMS such as all the modules in the Main Menu for managing users, groups, etc., all the sites and configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow.

See :ref:`newIa-global-permission-mappings-config` for more information on all items accessible for the ``system_admin`` role.


