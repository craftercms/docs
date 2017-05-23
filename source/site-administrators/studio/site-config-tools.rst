=================
Site Config Tools
=================

The Site Config tools configuration file defines what modules are available for administration use when clicking on |siteConfig| from the Sidebar. This configuration is unique in that a configuration file exists in the following location of each site: ``SITENAME/config/studio/administration/tools.xml``

.. image:: /_static/images/configuration-tool-config.png
    :align: center
    :alt: Site Config Tools

.. |siteConfig| image:: /_static/images/configuration-site-config-icon.png
             :width: 15%

------
Sample
------
Here is a sample tools configuration file.

.. code-block:: xml
    :caption: SITENAME/config/studio/administration/tools.xml

    <config>
        <tools>
            <tool>
                <name>content-types</name>
                <label>Content Types</label>
                <controls>
                    <control>input</control>
                    <control>textarea</control>
                    <control>rte</control>
                    <control>dropdown</control>
                    <control>date-time</control>
                    <control>checkbox</control>
                    <control>checkbox-group</control>
                    <control>node-selector</control>
                    <control>image-picker</control>
                    <control>video-picker</control>
                    <control>label</control>
                    <control>page-nav-order</control>
                    <control>file-name</control>
                    <control>auto-filename</control>
                </controls>
                <datasources>
                    <datasource>child-content</datasource>
                    <datasource>img-desktop-upload</datasource>
                    <datasource>img-repository-upload</datasource>
                    <datasource>file-desktop-upload</datasource>
                    <datasource>file-browse-repo</datasource>
                    <datasource>video-desktop-upload</datasource>
                    <datasource>video-browse-repo</datasource>
                    <datasource>key-value-list</datasource>
                    <datasource>site-component</datasource>
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
            <tool><name>admin-configurations</name><label>Configuration</label></tool>
            <tool><name>bulkoperations</name><label>Bulk Operations</label></tool>
            <tool><name>workflow-jobs</name><label>Workflow Jobs</label></tool>
            <tool><name>workflow-states</name><label>Workflow States</label></tool>
            <tool><name>logging</name><label>Logging Levels</label></tool>
            <tool><name>log-view</name><label>Log Console</label></tool>
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

==================== ===========
Tool                 Description
==================== ===========
admin-configurations
bulkoperations
comment-moderation
content-types
deployment-tools
find-replace
log-view
logging
site-profiles
socialmention
taxonomies
workflow-jobs
workflow-states
==================== ===========

List of available content type form controls
--------------------------------------------

.. include:: /developers/form-controls/list-form-controls.rst

List of available datasources
-----------------------------

.. include:: /developers/form-sources/list-form-sources.rst