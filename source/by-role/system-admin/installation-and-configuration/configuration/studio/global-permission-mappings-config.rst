:is-up-to-date: False
:last-updated: 4.0.3

:orphan:

.. index:: Global Permission Mappings Config

.. _global-permission-mappings-config:

=================================
Global Permission Mappings Config
=================================

The global permission mappings configuration file lets you configure the permissions to a role globally for the entire application

Permissions per project are managed within Crafter Studio's UI. See :ref:`permission-mappings` for more information on project permissions.

Here's the default global permissions configuration. It contains the permissions mappings for the roles defined in the :ref:`global role mappings configuration <global-role-mappings-config>` file. To access the file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/`` then open the file ``global-permission-mappings-config.xml``. Remember to restart CrafterCMS so your changes to the file will take effect.

.. raw:: html

   <details>
   <summary><a>Sample "permission-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/global-permission-mappings-config.xml
       :language: xml
       :linenos:


.. raw:: html

   </details>

-----------
Description
-----------

.. include:: /includes/available-permissions.rst