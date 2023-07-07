:is-up-to-date: False
:last-updated: 4.1.0


.. index:: Permission Mappings

.. _permission-mappings:

===================
Permission Mappings
===================

The permission mappings configuration file allows you to assign permissions to folders and objects in a project/site giving specific Roles rights to the object. The permission mappings config file contains the permissions mappings for the roles defined in the role mappings config file. When applying permissions to Roles, rights are granted by adding permissions inside the tag ``<allowed-permissions>``. Absence of permissions means the permission is denied. Rules have a regex expression that govern the scope of the permissions assigned. A list of available permissions that can be granted to Roles is available after the sample configuration file.

Permissions are defined per:
    project/site > role > rule

For example, to grant the role component_author the ability to read/write
components and read-only to everything else:

.. code-block:: xml
      :linenos:

      <role name="component_author">
        <rule regex="/site/website/.*">
          <allowed-permissions>
            <permission>content_read</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/site/components/.*">
          <allowed-permissions>
            <permission>content_read</permission>
            <permission>content_write</permission>
            <permission>content_create</permission>
            <permission>folder_create</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/static-assets/.*">
          <allowed-permissions>
            <permission>content_read</permission>
          </allowed-permissions>
        </rule>
      </role>

|

To modify/view the permission mappings for your project/site in Studio, click on |projectTools| at the bottom of the *Sidebar*, then click on **Configurations** and select **Permissions Mapping** from the list.

.. image:: /_static/images/site-admin/config-open-permission-mappings.webp
    :alt: Configurations - Open Permission Mappings
    :width: 45 %
    :align: center

------
Sample
------

Here's a sample Permission Mappings Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "permission-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-permission-mappings-config.xml
       :language: xml
       :linenos:


.. raw:: html

   </details>

|
|

-----------
Description
-----------

.. include:: /includes/available-permissions.rst