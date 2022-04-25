:is-up-to-date: False

.. index:: Configuration; Crafter Studio

.. _studio-configuration:

====================
Studio Configuration
====================

This section details how to configure settings managed through Crafter Studio.

To access the configuration settings in Crafter Studio, click on |projectTools| in the Sidebar,

.. image:: /_static/images/site-admin/configuration-access.png
    :align: center
    :alt: Open Configuration

then click on **Configuration**.  After clicking on **Configuration**, you will see a list where you can select which configuration file you'd like to view/modify.  Below is one of the configuration files available to be viewed/modified.

.. image:: /_static/images/site-admin/basic-configuration.jpg
    :align: center
    :alt: Basic Configuration

|

The following items are noted in the image above:

    #. This is the list that contains all the configurations that can be viewed/modified for your site.
    #. This is a short description of the current selected configuration file from the dropdown list.
    #. These are the available actions that can be selected for the current selected configuration file.
    #. This allows the user to encrypt access keys, passwords and other sensitive information required by the current selected configuration file.  For more information on how to encrypt sensitive information in a configuration file through Studio, see :ref:`encrypting-text-in-a-configuration-file`
    #. This allows the user to view the selected configuration's history

Here are the settings that can be configured through Crafter Studio:

.. toctree::
   :maxdepth: 1

   studio/asset-processing-config
   studio/aws-profiles-configuration
   studio/blob-stores
   studio/box-profiles-configuration
   studio/cmis-configuration
   studio/configure-notifications
   studio/content-monitoring
   studio/dependency-resolver
   studio/permission-mappings
   studio/project-configuration
   studio/project-policy-configuration
   studio/project-config-configuration
   studio/rte-configuration
   studio/role-mappings
   studio/user-interface-configuration
   studio/webdav-profiles-configuration


Crafter Studio supports creating multiple environments with different configuration files for each environment.  To setup an environment follow the guide below:

.. toctree::
   :maxdepth: 1

   studio/multi-environment-configurations


CrafterCMS supports managing assets in external storage through workflow and publishing mechanics.  For more information, see below:

.. toctree::
   :maxdepth: 1

   studio/publishing-assets-in-external-storage
