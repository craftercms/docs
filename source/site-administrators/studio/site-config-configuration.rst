.. highlight:: xml

=========================
Site Config Configuration
=========================

The Site Config configuration file allows you to specify which items can be accessed from the dropdown list in **Site Config** -> **Configuration**.

To find this configuration xml through studio follow the next instructions:

#. Click on **Site Config** located in the Sidebar.
#. Choose **Configuration** from the menu.
#. Select **Configurations**.

.. image:: /_static/images/site-admin/configuration.png

------
Sample
------

Here's a sample config-list.xml file:

.. code-block:: xml
    :caption: SITENAME/config/studio/administration/config-list.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
        This file configures the list of configurations available in the SiteConfig section for this site/blueprint.

        For every configuration you'd like to make editable, you need:
            <file>
                <path />
                <title />
                <description />
                <samplePath />
            </file>

        The elements are:
        - path: the path to the file. This path is rooted in /config off the base of the site/blueprint
        - title: the title of this file. This should be a key into the string-table in Studio's localization string table
            "base.js", if no entry is found, Studio will use the string you have here as is
        - description: the description of this file.  This should be a key into the string-table in Studio's localization
            string table "base.js", if no entry is found, Studio will use the string you have here as is
        - samplePath: the path to a sample file to help the user update the file
    -->
    <config>
        <files>
            <file>
                <path>/studio/site-config.xml</path>
                <title>confTabSiteConfiguration</title>
                <description>confTabSiteConfigurationDesc</description>
                <samplePath>/studio/administration/samples/sample-site-config.xml</samplePath>
            </file>
            <file>
                <path>/studio/context-nav/sidebar.xml</path>
                <title>confTabSidebarConf</title>
                <description>confTabSidebarConfDesc</description>
                <samplePath>/studio/administration/samples/sample-sidebar.xml</samplePath>
            </file>
            <file>
                <path>/studio/form-control-config/rte/rte-setup.xml</path>
                <title>confTabRTEConf</title>
                <description>confTabRTEConfDesc</description>
                <samplePath>/studio/administration/samples/sample-form-control-rte-setup.xml</samplePath>
            </file>
            <file>
                <path>/studio/preview-tools/components-config.xml</path>
                <title>confTabPreviewComponentsConf</title>
                <description>confTabPreviewComponentsConfDesc</description>
                <samplePath>/studio/administration/samples/sample-preview-components-config.xml</samplePath>
            </file>
            <file>
                <path>/studio/targeting/targeting-config.xml</path>
                <title>confTabTargetingConfiguration</title>
                <description>confTabTargetingConfigurationDesc</description>
                <samplePath>/studio/administration/samples/sample-targeting-config.xml</samplePath>
            </file>
            <file>
                <path>/studio/preview-tools/panel.xml</path>
                <title>confTabPreviewPanelConf</title>
                <description>confTabconfTabPreviewPanelConfDesc</description>
                <samplePath>/studio/administration/samples/sample-preview-panel.xml</samplePath>
            </file>
            <file>
                <path>/studio/workflow/notification-config.xml</path>
                <title>confTabNotificationConf</title>
                <description>confTabNotificationConfDesc</description>
                <samplePath>/studio/administration/samples/sample-notification-config.xml</samplePath>
            </file>
            <file>
                <path>/studio/permission-mappings-config.xml</path>
                <title>confTabPermissionsMappings</title>
                <description>confTabPermissionsMappingsDesc</description>
                <samplePath>/studio/administration/samples/sample-permission-mappings-config.xml</samplePath>
            </file>
            <file>
                <path>/studio/role-mappings-config.xml</path>
                <title>confTabRoleMappings</title>
                <description>confTabRoleMappingsDesc</description>
                <samplePath>/studio/administration/samples/sample-role-mappings-config.xml</samplePath>
            </file>
            <file>
                <path>/studio/environment/environment-config.xml</path>
                <title>confTabEnvironmentConfiguration</title>
                <description>confTabEnvironmentConfigurationDesc</description>
                <samplePath>/studio/administration/samples/sample-environment-config.xml</samplePath>
            </file>
            <file>
                <path>/studio/data-sources/cmis-config.xml</path>
                <title>confTabCMISConfiguration</title>
                <description>confTabCMISConfigurationDesc</description>
                <samplePath>/studio/administration/samples/sample-cmis-config.xml</samplePath>
            </file>
            <file>
                <path>/studio/context-nav/contextual-nav.xml</path>
                <title>confTabContextualNavigationConf</title>
                <description>confTabContextualNavigationConfDesc</description>
                <samplePath>/studio/administration/samples/sample-contextual-nav.xml</samplePath>
            </file>
            <file>
                <path>/studio/administration/site-config-tools.xml</path>
                <title>confTabSiteConf</title>
                <description>confTabSiteConfDesc</description>
                <samplePath>/studio/administration/samples/sample-site-config-tools.xml</samplePath>
            </file>
            <file>
                <path>/studio/administration/config-list.xml</path>
                <title>confTabConfigurations</title>
                <description>confTabConfDesc</description>
                <samplePath>/studio/administration/samples/sample-config-list.xml</samplePath>
            </file>
            <file>
                <path>/studio/mime-type.xml</path>
                <title>Mime Types</title>
                <description>mime Types</description>
                <samplePath>/studio/administration/samples/sample-mime-type.xml</samplePath>
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

.. image:: /_static/images/site-admin/basic-configuration-sample.png
    :align: center
    :alt: Basic Configuration Sample


-------------------------------
Adding a new configuration file
-------------------------------

To add a new configuration file please follow the steps below.

#. Add file tags to the configuration list xml file (config-list.xml).

	.. code-block:: xml
	    :caption: SITENAME/config/studio/administration/config-list.xml

    	   	<file>
    			<path>/workflow-config.xml</path>
    			<title>Workflow Configuration</title>
    			<description>Defines workflows available in the system</description>
    			<samplePath>/administration/samples/sample-workflow-config.xml</samplePath>
    		</file>

    	.. image:: /_static/images/site-admin/basic-configuration-step1.png
            :align: center
            :alt: Basic Configuration Step 1

#. Click on the **Save** button

    .. image:: /_static/images/site-admin/basic-configuration-step2.png
        :align: center
        :alt: Basic Configuration Step 2

#. Go to configuration tab, then open the dropdown and finally look for your new configuration file

    .. image:: /_static/images/site-admin/basic-configuration-step3.png
        :width: 70%
        :align: center
        :alt: Basic Configuration Step 3

