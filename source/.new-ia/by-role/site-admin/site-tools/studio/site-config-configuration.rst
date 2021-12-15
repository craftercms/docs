:is-up-to-date: False

.. index:: Site Tools Configuration

.. highlight:: xml

.. _newIa-site-tools-configuration:

========================
Site Tools Configuration
========================

The Site Tools Configuration file allows you to specify which items can be accessed from the dropdown list in **Site Tools** -> **Configuration**.

To find this configuration xml through studio follow the next instructions:

#. Click on |siteConfig| located in the Sidebar.
#. Choose **Configuration** from the menu.
#. Select **Configurations**.

.. image:: /_static/images/site-admin/configuration.png
    :alt: Configurations - Open Configurations
    :width: 65 %
    :align: center

------
Sample
------

Here's a sample config-list.xml file:

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/administration/config-list.xml*
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
      This file configures the list of configurations available in the SiteConfig section for this site/blueprint.

      For every configuration you'd like to make editable, you need:
        <file>
          <module />
          <path />
          <title />
          <description />
          <samplePath />
        </file>

      The elements are:
      - module: Crafter CMS module
      - path: the path to the file. This path is rooted in /config/<module> off the base of the site/blueprint
      - title: the title of this file. This should be a key into the string-table in Studio's localization string table
          "base.js", if no entry is found, Studio will use the string you have here as is
      - description: the description of this file.  This should be a key into the string-table in Studio's localization
          string table "base.js", if no entry is found, Studio will use the string you have here as is
      - samplePath: the path to a sample file to help the user update the file
    -->
    <config>
      <version>8</version>
      <files>
        <file>
          <module>studio</module>
          <path>site-config.xml</path>
          <title>confTabSiteConfiguration</title>
          <description>confTabSiteConfigurationDesc</description>
          <samplePath>sample-site-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>context-nav/sidebar.xml</path>
          <title>confTabSidebarConf</title>
          <description>confTabSidebarConfDesc</description>
          <samplePath>sample-sidebar.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>form-control-config/rte/rte-setup.xml</path>
          <title>confTabRTEConf</title>
          <description>confTabRTEConfDesc</description>
          <samplePath>sample-form-control-rte-setup.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>form-control-config/rte/rte-setup-tinymce5.xml</path>
          <title>confTabRTEtMCE5Conf</title>
          <description>confTabRTEtMCE5ConfDesc</description>
          <samplePath>sample-form-control-rte-setup-tinymce5.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>code-editor-config.xml</path>
          <title>confTabCodeEditorConf</title>
          <description>confTabCodeEditorConfDesc</description>
          <samplePath>sample-code-editor-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>preview-tools/components-config.xml</path>
          <title>confTabPreviewComponentsConf</title>
          <description>confTabPreviewComponentsConfDesc</description>
          <samplePath>sample-preview-components-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>targeting/targeting-config.xml</path>
          <title>confTabTargetingConfiguration</title>
          <description>confTabTargetingConfigurationDesc</description>
          <samplePath>sample-targeting-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>preview-tools/panel.xml</path>
          <title>confTabPreviewPanelConf</title>
          <description>confTabconfTabPreviewPanelConfDesc</description>
          <samplePath>sample-preview-panel.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>workflow/notification-config.xml</path>
          <title>confTabNotificationConf</title>
          <description>confTabNotificationConfDesc</description>
          <samplePath>sample-notification-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>permission-mappings-config.xml</path>
          <title>confTabPermissionsMappings</title>
          <description>confTabPermissionsMappingsDesc</description>
          <samplePath>sample-permission-mappings-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>role-mappings-config.xml</path>
          <title>confTabRoleMappings</title>
          <description>confTabRoleMappingsDesc</description>
          <samplePath>sample-role-mappings-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>data-sources/cmis-config.xml</path>
          <title>confTabCMISConfiguration</title>
          <description>confTabCMISConfigurationDesc</description>
          <samplePath>sample-cmis-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>context-nav/contextual-nav.xml</path>
          <title>confTabContextualNavigationConf</title>
          <description>confTabContextualNavigationConfDesc</description>
          <samplePath>sample-contextual-nav.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>administration/site-config-tools.xml</path>
          <title>confTabSiteConf</title>
          <description>confTabSiteConfDesc</description>
          <samplePath>sample-site-config-tools.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>administration/config-list.xml</path>
          <title>confTabConfigurations</title>
          <description>confTabConfDesc</description>
          <samplePath>sample-config-list.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>mime-type.xml</path>
          <title>Mime Types</title>
          <description>mime Types</description>
          <samplePath>sample-mime-type.xml</samplePath>
        </file>
        <file>
          <module>engine</module>
          <path>site-config.xml</path>
          <title>confTabEngineSiteConfiguration</title>
          <description>confTabEngineSiteConfigurationDesc</description>
          <samplePath>sample-engine-site-config.xml</samplePath>
        </file>
        <file>
          <module>engine</module>
          <path>application-context.xml</path>
          <title>confTabEngineSiteAppContextConfiguration</title>
          <description>confTabEngineSiteAppContextConfigurationDesc</description>
          <samplePath>sample-engine-application-context.xml</samplePath>
        </file>
        <file>
          <module>engine</module>
          <path>urlrewrite.xml</path>
          <title>Engine URL Rewrite Configuration (XML Style)</title>
          <description>Engine URL Rewrite Configuration (XML Style)</description>
          <samplePath>sample-urlrewrite.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>dependency/resolver-config.xml</path>
          <title>Dependency Resolver Configuration</title>
          <description>Dependency Resolver Configuration</description>
          <samplePath>sample-resolver-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>aws/aws.xml</path>
          <title>AWS Profiles</title>
          <description>AWS Profiles</description>
          <samplePath>sample-aws.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>box/box.xml</path>
          <title>Box Profiles</title>
          <description>Box Profiles</description>
          <samplePath>sample-box.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>webdav/webdav.xml</path>
          <title>WebDAV Profiles</title>
          <description>WebDAV Profiles</description>
          <samplePath>sample-webdav.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>asset-processing/asset-processing-config.xml</path>
          <title>Asset Processing</title>
          <description>Asset Processing</description>
          <samplePath>sample-asset-processing-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>blob-stores-config.xml</path>
          <title>Blob Stores</title>
          <description>Blob Stores</description>
          <samplePath>sample-blob-stores-config.xml</samplePath>
        </file>
        <file>
          <module>engine</module>
          <path>proxy-config.xml</path>
          <title>Proxy Config</title>
          <description>Proxy Config</description>
          <samplePath>sample-blob-stores-config.xml</samplePath>
        </file>
       </files>
    </config>


-----------
Description
-----------

List of available configuration tags

+-----------------+-------------------------------------------------------------------------------+
|| Tag            || Description                                                                  |
+=================+===============================================================================+
|| files          || This tag contains each  file.                                                |
+-----------------+-------------------------------------------------------------------------------+
|| file           || This tag contains the configuration of each file.                            |
+-----------------+-------------------------------------------------------------------------------+
|| path           || Path where the system will find the specific xml file                        |
+-----------------+-------------------------------------------------------------------------------+
|| title          || This tag refers to file title. It will be showed in the configuration        |
||                || dropdown at the top of the page. See #1 in the image above                   |
+-----------------+-------------------------------------------------------------------------------+
|| description    || This tag refers to file description. It will be showed to explain the file   |
||                || functionality. See #2 in the image above                                     |
+-----------------+-------------------------------------------------------------------------------+
|| samplePath     || Path where the system will find an example of the specific xml.              |
||                || See #3 in the image above                                                    |
+-----------------+-------------------------------------------------------------------------------+

-----------
Sample File
-----------

You can click on the **View Sample** button to see a configuration file example.

.. image:: /_static/images/site-admin/basic-configuration-sample.jpg
    :align: center
    :alt: Basic Configuration Sample


-------------------------------
Adding a new configuration file
-------------------------------

To add a new configuration file please follow the steps below.

#. Add file tags to the configuration list xml file (config-list.xml).

   .. code-block:: xml
      :caption: *CRAFTER_HOME/data/repos/sites/sandbox/SITENAME/sandbox/config/studio/administration/config-list.xml*

      <file>
        <module>studio</module>
        <path>/workflow-config.xml</path>
        <title>Workflow Configuration</title>
        <description>Defines workflows available in the system</description>
        <samplePath>/administration/samples/sample-workflow-config.xml</samplePath>
      </file>


   .. image:: /_static/images/site-admin/basic-configuration-step1.jpg
            :align: center
            :alt: Basic Configuration Step 1

#. Click on the **Save** button

    .. image:: /_static/images/site-admin/basic-configuration-step2.jpg
        :align: center
        :alt: Basic Configuration Step 2

#. Go to configuration tab, then open the dropdown and finally look for your new configuration file

    .. image:: /_static/images/site-admin/basic-configuration-step3.png
        :width: 70%
        :align: center
        :alt: Basic Configuration Step 3

