:is-up-to-date: True

.. _newIa-crafter-cms-upgrade-manager:

==========================
CrafterCMS Upgrade Manager
==========================

CrafterCMS has an upgrade manager that automatically upgrades the system, some configuration files and blueprints.
It uses a pipeline of handlers to upgrade various subsystemsas.

Here’s a list of items auto handled by the upgrade manager when you start CrafterCMS

#. System Components (database, global repo, ...)
#. Blueprints
#. Site Repositories
#. Managed configuration files

   CrafterCMS tracks an individual version for some configurations files
   in order to keep them up to date.  These configuration files are auto updated by the upgrade manager

   .. note::

       These upgrades can also be disabled by setting the version to a random string, just like the site version.

   .. important::

      If one of the files do not contain a version tag then all existing upgrades will be applied.



CrafterCMS will use a special file studio_version.xml to track the version of each site and automatically apply upgrades for future releases.  The studio_version.xml file is auto installed and looks like this:

   .. code-block:: xml
       :caption: /config/studio/studio_version.xml

               <?xml version="1.0" encoding="UTF-8"?>
               <studio>
                   <version>3.1.0</version>
               </studio>

   .. note::

       If your site is heavily customized and you would like to prevent CrafterCMS from trying to upgrade it in the future you can set the version value to any random string, for example <version>DISABLED</version>.


:ref:`newIa-add-to-upgrade-scripts`

