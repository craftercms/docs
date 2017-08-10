
=================
Site Config Tools
=================

The Site Config tools configuration file defines what modules are available for administration use when clicking on |siteConfig| from the Sidebar. This configuration is unique in that a configuration file exists in the following location of each site: ``SITENAME/config/studio/administration/tools.xml``

.. image:: /_static/images/configuration-tool-config.png
    :align: center
    :alt: Site Config Tools


------
Sample
------
Here is a sample tools configuration file.

.. code-block:: xml
    :caption: SITENAME/config/studio/administration/tools.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
        Site Configuration Tools

        This file helps configure the Site Config section with tools. The tools specified here appear on the left-
        hand-side of the Site Config section.

        The file has the the following structure:
        <config>
            <tools>
                <tool>
                    <name>sync-from-repository</name>
                    <label>Sync From Repository</label>
                    <icon>          (Optional icon configuration)
                        <styles>    ( Change default icon styles - using css rules )
                            <color>#409a00</color>
                            <font-size>16px</font-size>
                            <font-width>bold</font-width>
                        </styles>
                    </icon>
                    <... tool specific configuration ../>
                </tool>
            </tools>
        </config>
    -->
    <config>
        <tools>
            <tool>
                <name>content-types</name>
                <label>Content Types</label>
                <formSection>
                    <icon>
                        <class>fa-object-group</class>
                    </icon>
                </formSection>
                <repeatSection>
                    <icon>
                        <class>fa-repeat</class>
                    </icon>
                </repeatSection>
                <controls>
                    <control>
                        <name>input</name>
                        <icon>
                            <class>fa-pencil-square-o</class>
                        </icon>
                    </control>
                    <control>
                        <name>textarea</name>
                        <icon>
                            <class>fa-paragraph</class>
                        </icon>
                    </control>
                    <control>
                        <name>rte</name>
                        <icon>
                            <class>fa-code</class>
                        </icon>
                    </control>
                    <control>
                        <name>dropdown</name>
                        <icon>
                            <class>fa-sort-desc</class>
                        </icon>
                    </control>
                    <control>
                        <name>date-time</name>
                        <icon>
                            <class>fa-calendar</class>
                            <stackedclass>fa-clock-o</stackedclass>
                        </icon>
                    </control>
                    <control>
                        <name>checkbox</name>
                        <icon>
                            <class>fa-check-square-o</class>
                        </icon>
                    </control>
                    <control>
                        <name>checkbox-group</name>
                        <icon>
                            <class>fa-check-square-o</class>
                        </icon>
                    </control>
                    <control>
                        <name>node-selector</name>
                        <icon>
                            <class>fa-crosshairs</class>
                        </icon>
                    </control>
                    <control>
                        <name>image-picker</name>
                        <icon>
                            <class>fa-picture-o</class>
                            <styles>
                                <color>#7e9dbb</color>
                            </styles>
                        </icon>
                    </control>
                    <control>
                        <name>video-picker</name>
                        <icon>
                            <class>fa-video-camera</class>
                        </icon>
                    </control>
                    <control>
                        <name>label</name>
                        <icon>
                            <class>fa-tag</class>
                        </icon>
                    </control>
                    <control>
                        <name>page-nav-order</name>
                        <icon>
                            <class>fa-sort</class>
                        </icon>
                    </control>
                    <control>
                        <name>file-name</name>
                        <icon>
                            <class>fa-file-o</class>
                        </icon>
                    </control>
                    <control>
                        <name>auto-filename</name>
                        <icon>
                            <class>fa-file-o</class>
                            <stackedclass>fa-magic</stackedclass>
                        </icon>
                    </control>
                </controls>
                <datasources>
                    <datasource>
                        <name>child-content</name>
                        <icon>
                            <class>fa-child</class>
                        </icon>
                    </datasource>
                    <datasource>
                        <name>img-desktop-upload</name>
                        <icon>
                            <class>fa-picture-o</class>
                        </icon>
                    </datasource>
                    <datasource>
                        <name>img-repository-upload</name>
                        <icon>
                            <class>fa-file-image-o</class>
                        </icon>
                    </datasource>
                    <datasource>
                        <name>file-desktop-upload</name>
                        <icon>
                            <class>fa-upload</class>
                        </icon>
                    </datasource>
                    <datasource>
                        <name>file-browse-repo</name>
                        <icon>
                            <class>fa-hand-o-up</class>
                        </icon>
                    </datasource>
                    <datasource>
                        <name>video-desktop-upload</name>
                        <icon>
                            <class>fa-video-camera</class>
                        </icon>
                    </datasource>
                    <datasource>
                        <name>video-browse-repo</name>
                        <icon>
                            <class>fa-file-video-o</class>
                        </icon>
                    </datasource>
                    <datasource>
                        <name>key-value-list</name>
                        <icon>
                            <class>fa-key</class>
                        </icon>
                    </datasource>
                    <datasource>
                        <name>site-component</name>
                        <icon>
                            <class>fa-puzzle-piece</class>
                        </icon>
                    </datasource>
                </datasources>
                <objectTypes>
                    <type>
                        <label>Page</label>
                        <name>page</name>
                        <properties>
                            <property>
                                <name>display-template</name>
                                <label>Display Template</label>
                                <value></value>
                                <type>template</type>
                            </property>
                            <property>
                                <name>merge-strategy</name>
                                <label>Merge Strategy</label>
                                <value>inherit-levels</value>
                                <type>string</type>
                            </property>
                        </properties>
                    </type>
                    <type>
                        <label>Component</label>
                        <name>component</name>
                        <properties>
                            <property>
                                <name>display-template</name>
                                <label>Display Template</label>
                                <value></value>
                                <type>template</type>
                            </property>
                            <property>
                                <name>merge-strategy</name>
                                <label>Merge Strategy</label>
                                <value>inherit-levels</value>
                                <type>string</type>
                            </property>
                        </properties>
                    </type>

                </objectTypes>
            </tool>
            <tool>
                <name>admin-configurations</name>
                <label>Configuration</label>
            </tool>
            <tool>
                <name>groups</name>
                <label>Groups</label>
            </tool>
            <tool>
                <name>audit</name>
                <label>Audit</label>
            </tool>
            <tool>
                <name>bulkoperations</name>
                <label>Bulk Operations</label>
            </tool>
            <tool>
                <name>workflow-states</name>
                <label>Workflow States</label>
            </tool>
            <tool>
                <name>logging</name>
                <label>Logging Levels</label>
            </tool>
            <tool>
                <name>log-view</name>
                <label>Log Console</label>
            </tool>
            <tool>
                <name>preview-sync</name>
                <label>Preview Sync</label>
            </tool>
            <tool>
                <name>sync-from-repository</name>
                <label>Sync From Repository</label>
            </tool>
        </tools>
    </config>

-----------
Description
-----------

    ``/config/tools/tool``
        Site Config tool definition
    ``/config/tools/tool/name``
        Tool name (javascript module name)
    ``/config/tools/tool/label``
        Display label in admin console navigation menu

Content Type Specific tool configuration
----------------------------------------

    ``/config/tools/tool/controls``
        List of available content type form controls
    ``/config/tools/tool/controls/control``
        Control name (javascript control module name)
    ``/config/tools/tool/datasources``
        List of available datasources for content type form controls
    ``/config/tools/tool/datasources/datasource``
        Datasource name (javascript datasource module name)
    ``/config/tools/tool/objectTypes``
        List of available object types
    ``/config/tools/tool/objectTypes/type``
        Type configuration (Page or Component) - name, label, properties

List of available tools
-----------------------

Here's a list of available tools defined in the Website_Editorial blueprint.

==================== =====================================================================
Tool                 Description
==================== =====================================================================
content-types        Allows you to create/modify content types
admin-configurations Contains all the configuration files managed through Crafter Studio
groups               Allows you to manage site groups and group membership
audit                Allows you to view your site activity log
bulkoperations       Allows you to publish multiple items at once
workflow-states      Contains a list of all files in the site with its corresponding state
log-view             Allows you to tail logs depending on what logging levels are set
logging              Allows you to set logging levels for the log console
preview-sync         Allows you to initiate the preview server synchronization
sync-from-repository Allows you to initiate synchronization from the repository
==================== =====================================================================

List of available content type form controls
--------------------------------------------

.. include:: /developers/form-controls/list-form-controls.rst

List of available content type data sources
-------------------------------------------

.. include:: /developers/form-sources/list-form-sources.rst