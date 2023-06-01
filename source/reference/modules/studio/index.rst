:is-up-to-date: False
:last-updated: 4.1.0


.. index:: Modules; Crafter Studio

.. _crafter-studio:

==============
Crafter Studio
==============

.. figure:: /_static/images/architecture/crafter-studio.webp
    :alt: Crafter Studio
    :width: 60 %
    :align: center

|

Crafter Studio provides all the content management services and integrates with repositories like Git, Alfresco and other CMIS based platforms to enable authoring, management, and publishing of all content.

.. _studio-configuration:

-------------
Configuration
-------------

This section details how to configure settings managed through Crafter Studio.

To access the configuration settings in Crafter Studio, click on |projectTools| in the Sidebar,

.. image:: /_static/images/site-admin/configuration-access.webp
    :align: center
    :width: 25%
    :alt: Open Configuration

then click on **Configuration**. After clicking on **Configuration**, you will see a list where
you can select which configuration file you'd like to view/modify. Below is one of the configuration
files available to be viewed/modified.

.. image:: /_static/images/site-admin/basic-configuration.webp
    :align: center
    :alt: Basic Configuration

|

The following items are noted in the image above:

    #. This is the list that contains all the configurations that can be viewed/modified for your project.
    #. This is a short description of the current selected configuration file from the dropdown list.
    #. These are the available actions that can be selected for the current selected configuration file.
    #. This allows the user to encrypt access keys, passwords and other sensitive information required by the current selected configuration file. For more information on how to encrypt sensitive information in a configuration file through Studio, see :ref:`encrypting-text-in-a-configuration-file`
    #. This allows the user to view the selected configuration's history

Here are the settings that can be configured through Crafter Studio:

.. TODO: Turn this into a table with name, description, and link to the sample configuration file or article

.. TODO: Does the Proxy config below here or in Engine? (it configures engine, but configures it for Preview)

.. list-table:: Studio Configuration Files
    :header-rows: 1

    * - Configuration File
      - Description
      - More Information
    * - Project Configuration (``config/studio/site-config.xml``)
      - Defines the general project configuration
      -
    * - Notification Configuration (``config/studio/workflow/notification-config.xml``)
      - Defines a list of UI messages to use in notifications
      -
    * - Permissions Mapping (``config/studio/permission-mappings-config.xml``)
      - Defines user access permissions to the project
      -
    * - Role Mappings (``config/studio/role-mappings-config.xml``)
      - Maps users and groups to roles within the project
      -
    * - Content Type Editor Config (``config/studio/administration/site-config-tools.xml``)
      - Defines controls, data sources, and content types for content authoring
      -
    * - Configurations (``config/studio/administration/config-list.xml``)
      - Configure this list of configuration files
      -
    * - Dependency Resolver Configuration (``config/studio/dependency/resolver-config.xml``)
      - Configures the dependency resolver
      -
    * - AWS Profiles (``config/studio/aws/aws.xml``)
      - Configures the project's AWS profiles
      -
    * - Box Profiles (``config/studio/box/box.xml``)
      - Configures the project's Box profiles
      -
    * - WebDAV Profiles (``config/studio/webdav/webdav.xml``)
      - Configures the project's WebDAV profiles
      -
    * - Asset Processing Configuration (``config/studio/asset-processing/asset-processing-config.xml``)
      - Configures the project's asset processing
      -
    * - Blob Stores (``config/studio/blob-stores-config.xml``)
      - Configures the project's blob stores
      -
    * - Proxy Config (``config/engine/proxy-config.xml``)
      - Configures the proxy servers for preview
      -
    * - Translation Configuration (``config/studio/translation-config.xml``)
      - Configures the translation service
      -
    * - Project Policy Configuration (``config/studio/site-policy-config.xml``)
      - Configures the project policy
      -
    * - User Interface Configuration (``config/studio/ui.xml``)
      - Configures the user interface
      -

.. TODO Remove the toctree below once the links are moved up to the table

.. .. toctree::
      :maxdepth: 1

..   studio/asset-processing-config
      studio/aws-profiles-configuration
      studio/blob-stores
      studio/box-profiles-configuration
      studio/configurations
      studio/content-monitoring
      studio/content-type-editor-config
      studio/dependency-resolver
      studio/notification-configuration
      studio/permission-mappings
      studio/project-configuration
      studio/project-policy-configuration
      studio/role-mappings
      studio/rte-configuration
      studio/user-interface-configuration
      studio/webdav-profiles-configuration


Crafter Studio supports creating multiple environments with different configuration files for each environment. To setup an environment follow the guide :ref:`here <multi-environment-configurations>`

CrafterCMS supports managing assets in external storage through workflow and publishing mechanics. For more information, see :ref:`blob-stores`.

|hr|

--------
REST API
--------

To view the Crafter Studio REST APIs:

.. open_iframe_modal_button::
   :label: Open here
   :url: ../../../_static/api/studio.html
   :title: Studio API

.. raw:: html

    or <a href="../../../_static/api/studio.html" target="_blank">in a new tab</a>

|

|hr|

-----------
Source Code
-----------

Crafter Studio's source code is managed in GitHub: https://github.com/craftercms/studio
