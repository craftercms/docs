.. _site-configuration:

##################
Site Configuration
##################

The site configuration file contains the primary configuration for Crafter Studio's behavior. Each site has its own site configuration file that controls its behavior indendently of other sites.

To modify the site configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Site Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-site-config.png
    :alt: Configurations - Open Site Configuration
    :width: 65 %
    :align: center

******
Sample
******

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/site-config.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- site-config.xml

        This contains the primary site configuration.

    -->
    <site-config>
        <wem-project>myawesomesite</wem-project>
        <display-name>myawesomesite</display-name>
        <default-timezone>EST5EDT</default-timezone>

        <published-repository>
            <enable-staging-environment>true</enable-staging-environment>
            <staging-environment>staging</staging-environment>
            <live-environment>live</live-environment>
        </published-repository>

        <repository rootPrefix="/site">

            <!-- default inheritance file name -->
            <level-descriptor>crafter-level-descriptor.level.xml</level-descriptor>

            <!-- The section below classifies items into folders for two dashboard widgets:
            - Items Waiting For Approval
            - Approved Scheduled Items

            Items that match the paths specified will be grouped together in the dashboard widget
            -->
            <folders>
                <folder name="Pages" path="/website" read-direct-children="false" attach-root-prefix="true"/>
                <folder name="Components" path="/components" read-direct-children="false" attach-root-prefix="true"/>
                <folder name="Assets" path="/static-assets" read-direct-children="false" attach-root-prefix="false"/>
                <folder name="Templates" path="/templates" read-direct-children="false" attach-root-prefix="false"/>
            </folders>

            <!-- Item Patterns -->
            <patterns>
                <!-- The section below helps determine the type of content based on regex. This shows up in two places:
                - The activity audit log.
                - The UI icon used for the item
                -->

                <pattern-group name="page">
                    <pattern>/site/website/([^&lt;]+)\.xml</pattern>
                </pattern-group>

                <pattern-group name="component">
                    <pattern>/site/components/([^&lt;]+)\.xml</pattern>
                    <pattern>/site/system/page-components/([^&lt;]+)\.xml</pattern>
                    <pattern>/site/component-bindings/([^&lt;]+)\.xml</pattern>
                    <pattern>/site/indexes/([^&lt;]+)\.xml</pattern>
                    <pattern>/site/resources/([^&lt;]+)\.xml</pattern>
                </pattern-group>

                <pattern-group name="asset">
                    <pattern>/static-assets/([^&lt;"'\)]+)</pattern>
                </pattern-group>

                <pattern-group name="rendering-template">
                    <pattern>/templates/([^&lt;"]+)\.ftl</pattern>
                </pattern-group>

                <!-- The section below enumerates the mime-types we can preview -->
                <pattern-group name="previewable-mimetypes">
                    <pattern>image/(.*)</pattern>
                    <pattern>application/pdf</pattern>
                    <pattern>video/(.*)</pattern>
                    <pattern>application/msword</pattern>
                    <pattern>application/vnd.openxmlformats-officedocument.wordprocessingml.document</pattern>
                    <pattern>application/vnd.ms-excel</pattern>
                    <pattern>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pattern>
                    <pattern>application/vnd.ms-powerpoint</pattern>
                </pattern-group>
            </patterns>

            <!-- The patterns below identify what is allowed to show up in the Dashboard widgets -->
            <display-in-widget-patterns>
                <display-in-widget-pattern>.*</display-in-widget-pattern>
            </display-in-widget-patterns>

        </repository>
    </site-config>
