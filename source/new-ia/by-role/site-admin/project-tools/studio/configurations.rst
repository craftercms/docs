:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Configurations

.. highlight:: xml

.. _newIa-project-config-configuration:

==============
Configurations
==============

The Configurations configuration file allows you to specify which items can be accessed from the dropdown list in **Project Tools** -> **Configuration**.

To find this configuration xml through studio follow the next instructions:

#. Click on |projectTools| located in the Sidebar.
#. Choose **Configuration** from the menu.
#. Select **Configurations**.

.. image:: /_static/images/site-admin/configuration.jpg
    :alt: Configurations - Open Configurations
    :width: 55 %
    :align: center

|

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
     - module: CrafterCMS module
     - path: the path to the file. This path is rooted in /config/<module> off the base of the site/blueprint
     - title: the title of this file. This should be a key into the string-table in Studio's localization string table
       "base.js", if no entry is found, Studio will use the string you have here as is
     - description: the description of this file.  This should be a key into the string-table in Studio's localization
       string table "base.js", if no entry is found, Studio will use the string you have here as is
     - samplePath: the path to a sample file to help the user update the file
    -->
    <config>
      <version>4.0.1</version>
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
          <title>confTabEngineUrlRewriteConf</title>
          <description>confTabEngineUrlRewriteConfDesc</description>
          <samplePath>sample-urlrewrite.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>dependency/resolver-config.xml</path>
          <title>confTabDependencyResolverConf</title>
          <description>confTabDependencyResolverConfDesc</description>
          <samplePath>sample-resolver-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>aws/aws.xml</path>
          <title>confTabAWSProfiles</title>
          <description>confTabAWSProfilesDesc</description>
          <samplePath>sample-aws.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>box/box.xml</path>
          <title>confTabBoxProfiles</title>
          <description>confTabBoxProfilesDesc</description>
          <samplePath>sample-box.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>webdav/webdav.xml</path>
          <title>confTabWebDAVProfiles</title>
          <description>confTabWebDAVProfilesDesc</description>
          <samplePath>sample-webdav.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>asset-processing/asset-processing-config.xml</path>
          <title>confTabAssetProcessing</title>
          <description>confTabAssetProcessingDesc</description>
          <samplePath>sample-asset-processing-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>blob-stores-config.xml</path>
          <title>confTabBlobStores</title>
          <description>confTabBlobStoresDesc</description>
          <samplePath>sample-blob-stores-config.xml</samplePath>
        </file>
        <file>
          <module>engine</module>
          <path>proxy-config.xml</path>
          <title>confTabProxyConfig</title>
          <description>confTabProxyConfigDesc</description>
          <samplePath>sample-proxy-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>translation-config.xml</path>
          <title>confTabTranslationConf</title>
          <description>confTabTranslationConfDesc</description>
          <samplePath>sample-translation-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>site-policy-config.xml</path>
          <title>confTabSitePolicyConf</title>
          <description>confTabSitePolicyConfDesc</description>
          <samplePath>sample-site-policy-config.xml</samplePath>
        </file>
        <file>
          <module>studio</module>
          <path>ui.xml</path>
          <title>confTabUiConf</title>
          <description>confTabUiConfDesc</description>
          <samplePath>sample-ui.xml</samplePath>
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

|


-------------------------------
Adding a new configuration file
-------------------------------

To add a new configuration file please follow the steps below.

#. Add file tags to the ``Configurations`` list xml file (config-list.xml).

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

   |

#. Click on the **Save** button

    .. image:: /_static/images/site-admin/basic-configuration-step2.jpg
        :align: center
        :alt: Basic Configuration Step 2

    |

#. Go to ``Configuration``, then finally look for your new configuration file

    .. image:: /_static/images/site-admin/basic-configuration-step3.jpg
        :width: 70%
        :align: center
        :alt: Basic Configuration Step 3

    |