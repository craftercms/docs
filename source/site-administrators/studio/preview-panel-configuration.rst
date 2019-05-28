:is-up-to-date: True

.. index:: Preview Panel Configuration

.. _preview-panel-configuration:

###########################
Preview Panel Configuration
###########################

The preview panel configuration file configures the Preview Tools panel on the right side of Studio.
To modify the preview panel configuration, click on |siteConfig| from the bottom of the *Sidebar*, then click on **Configuration** and select **Preview Panel Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-preview-panel-config.png
    :alt: Configurations - Open Preview Panel Configuration
    :width: 65 %
    :align: center

******
Sample
******

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/preview-tools/panel.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
        This file configures the Preview Tools right panel. The structure of this file follows:

        <panel>
            <modules>
                <module>
                    <moduleName />
                    <title />
                    <config>
                        (module specific configuration)
                    </config>
                </module>
            </modules>
        </panel>

        For the module: Medium Panel (aka Publishing Channel), the configuration follows:
        <channels>
            <channel>      (target device)
                <title />
                <value />  (this is the browser's UserAgent)
                <width />  (width in pixels)
                <height /> (height in pixels)
            </channel>
        </channels>
    -->
    <panel>
        <modules>
            <module>
                <moduleName>ice-tools-panel</moduleName>
                <title>inContextEditing</title>
            </module>

            <module>
                <moduleName>component-panel</moduleName>
                <title>pageComponents</title>
            </module>

            <module>
                <moduleName>medium-panel</moduleName>
                <title>publishingChannel</title>
                <config>
                    <channels>
                        <channel>
                            <title>desktop</title>
                            <value>browser</value>
                            <width></width>
                            <height></height>
                        </channel>
                        <channel>
                            <title>smartPhone</title>
                            <value>iphone</value>
                            <width>375</width>
                            <height>667</height>
                        </channel>
                        <channel>
                            <title>tablet</title>
                            <value>ipad</value>
                            <width>768</width>
                            <height>1024</height>
                        </channel>
                    </channels>
                </config>
            </module>
        </modules>
    </panel>
