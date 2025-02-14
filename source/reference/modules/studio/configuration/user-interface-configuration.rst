:is-up-to-date: True
:last-updated: 4.1.1

.. _user-interface-configuration:

============================
User Interface Configuration
============================
.. contents::
   :local:

The user interface configuration file defines the widgets shown in the user interface. It allows the user to configure
the items available for interaction in Studio.

It shows different projections of the content in addition to other tools to assist in content authoring
and site administration.

The UI is made up of configurable widgets and can be extended or modified by adding/removing/configuring widgets.
Plugins can make use of this by adding themselves to the UI where required. See :ref:`CrafterCMS Plugin Descriptor <plugin-descriptor-file>` for more information on how a plugin can be wired in the user interface configuration.

Here's a screenshot of Studio showing some of the widgets in the UI in red circles that are defined in the user interface configuration.

.. image:: /_static/images/site-admin/ui-config-widgets.webp
   :alt: Configurations - User Interface Configuration Widgets
   :width: 85 %
   :align: center

|

Here's an annotated version of some of the widgets in the user interface shown in the image above.

.. code-block:: xml
   :linenos:

   <siteUI>
     <widget id="craftercms.components.ToolsPanel">...</widget>     Sidebar widget
     <widget id="craftercms.components.ICEToolsPanel">...</widget>  Experience Builder widget
     <widget id="craftercms.components.Launcher">...</widget>       Navigation Menu widget
     <widget id="craftercms.components.PreviewToolbar">...</widget> Toolbar widget
     <widget id="craftercms.components.Dashboard">...</widget>      Dashboard widget
     <widget id="craftercms.components.TinyMCE">...</widget>        TinyMCE widget
     <references>
        <reference id="craftercms.siteTools">...</reference>
        <reference id="craftercms.freemarkerCodeSnippets">...</reference>
        <reference id="craftercms.groovyCodeSnippets">...</reference>
     </references>
   </siteUI>

|

.. _sidebar-widget:

Let's take a look at the sidebar widget as an example. The Sidebar widget is a panel located on the left
side of Studio. The Sidebar contains, the ``Dashboard``, various path navigators and path navigator trees
such as ``Pages``, ``Components``, etc., and the ``Project Tools``, which are also widgets.
Here's the configuration:

.. code-block:: xml
   :linenos:
   :emphasize-lines: 4-6,11-14, 39-45

   <widget id="craftercms.components.ToolsPanel">
     <configuration>
       <widgets>
         <widget id="craftercms.components.ToolsPanelEmbeddedAppViewButton">
           <configuration>
             <title id="words.dashboard" defaultMessage="Dashboard"/>
             <icon id="@mui/icons-material/DashboardRounded"/>
             <widget id="craftercms.components.SiteDashboard"/>
           </configuration>
         </widget>
         <widget id="craftercms.components.PathNavigator">
           <configuration>
             <id>Pages</id>
             <label>Pages</label>
             <icon id="@mui/icons-material/DescriptionOutlined"/>
             <rootPath>/site/website</rootPath>
             <locale>en</locale>
           </configuration>
         </widget>
         <widget id="craftercms.components.PathNavigator">
           <configuration>
             <id>Components</id>
             <label>Components</label>
             <icon id="craftercms.icons.Component"/>
             <rootPath>/site/components</rootPath>
             <locale>en</locale>
           </configuration>
         </widget>
         <widget id="craftercms.components.PathNavigator">
           <configuration>
             <id>Taxonomy</id>
             <label>Taxonomy</label>
             <icon id="@mui/icons-material/LocalOfferOutlined"/>
             <rootPath>/site/taxonomy</rootPath>
             <locale>en</locale>
           </configuration>
         </widget>
         ...
         <widget id="craftercms.components.ToolsPanelEmbeddedAppViewButton">
           <permittedRoles>
             <role>admin</role>
             <role>developer</role>
           </permittedRoles>
           <configuration>
             <title id="siteTools.title" defaultMessage="Project Tools"/>
             <icon id="@mui/icons-material/ConstructionRounded"/>
             <widget id="craftercms.components.EmbeddedSiteTools"/>
           </configuration>
         </widget>
       </widgets>
     </configuration>
   </widget>
   ...

|

To modify the user interface configuration, click on |projectTools| from the *Sidebar*, then click on **Configuration**
and select **User Interface Configuration** from the list.

.. image:: /_static/images/site-admin/config-open-user-interface-config.webp
   :alt: Configurations - Open User Interface Configuration
   :width: 85 %
   :align: center

|

|hr|

------
Sample
------
Here's a sample User Interface Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "ui.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/support/4.1.x/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-ui.xml
      :language: xml
      :linenos:


.. raw:: html

   </details>

|
|

|hr|

.. _widget-permissions:

------------------
Widget Permissions
------------------
Limiting who can access a widget via roles is through ``permittedRoles`` in the user interface configuration.
Simply add the following to the widget you want available only to users with the permitted role(s)

.. code-block:: xml
   :linenos:

   <permittedRoles>
     <role>ALLOWED_ROLE</role>
     ...
   </permittedRoles>

|

where ALLOWED ROLE is a role defined in Studio that is allowed to access the widget. See :ref:`roles-and-permissions` for a list of default roles in Crafter Studio

Let's take a look at an example in the configuration where access to the ``Project Tools`` widget is limited to users with the roles ``admin`` and ``developer``.

.. code-block:: xml
   :linenos:
   :emphasize-lines: 2-5

   <widget id="craftercms.components.ToolsPanelPageButton">
     <permittedRoles>
       <role>admin</role>
       <role>developer</role>
     </permittedRoles>
     <configuration>
       <title id="siteTools.title" defaultMessage="Site Tools"/>
       <icon id="@mui/icons-material/TuneRounded"/>
       <widgets>
         <widget id="craftercms.components.SiteToolsPanel"/>
       </widgets>
     </configuration>
   </widget>

|

Here's the sidebar when a user with role ``admin`` is logged in. Notice that ``Project Tools`` is available in the sidebar

.. image:: /_static/images/site-admin/ui-config-permitted-roles-admin.webp
   :alt: Configurations - User Interface Configuration Permitted Roles Admin
   :width: 20 %
   :align: center

|

Here's the sidebar when a user with role ``author`` is logged in. Notice that ``Project Tools`` is not available in the sidebar

.. image:: /_static/images/site-admin/ui-config-permitted-roles-author.webp
   :alt: Configurations - User Interface Configuration Permitted Roles Admin
   :width: 20 %
   :align: center

|

|hr|

.. _sidebar-excludes:

----------------
Sidebar Excludes
----------------
To hide items (exclude) in the Sidebar such as path navigators and path navigator trees, use

.. code-block:: xml
   :force:

      ...
      <excludes>
        <exclude PATTERN_TO_EXCLUDE/>
        ...
      </excludes>

|

where:

* PATTERN_TO_EXCLUDE is a prefix of items to hide from the Sidebar

Let's take a look at an example using a project created from the Website Editorial blueprint, to hide the folder ``/site/website/articles/2021/3``.

Here's the Sidebar before the ``2021/3`` folder is hidden

.. image:: /_static/images/site-admin/ui-folders.webp
   :alt: Configurations - User Interface Configuration Folder Structure
   :width: 30 %
   :align: center

|

Here's the configuration to hide the folder:

.. code-block:: xml
   :linenos:
   :emphasize-lines: 8-10

   <widget id="craftercms.components.PathNavigator">
     <configuration>
       <id>Pages</id>
       <label>Pages</label>
       <icon id="@mui/icons-material/DescriptionOutlined"/>
       <rootPath>/site/website</rootPath>
       <locale>en</locale>
       <excludes>
         <exclude>/site/website/articles/2021/3</exclude>
       </excludes>
     </configuration>
   </widget>

|

Here's the Sidebar with the folder ``2021/3`` hidden:

.. image:: /_static/images/site-admin/ui-folder-hidden.webp
   :alt: Configurations - User Interface Configuration Folder Hidden
   :width: 30 %
   :align: center

|

|hr|

.. _sidebar-widget-icon-colors:

---------------------------------
Navigator Widgets Styling Options
---------------------------------
Several styling options are available for the navigator widgets. Both the widget's container element
and the icon element can receive CSS classes and targeted base styles, collapsed styles and expanded styles.
Custom css style sheets may be loaded into Studio via :ref:`plugins`.

Colors, background colors, borders (css properties) etc can be added to widgets in the Sidebar when expanding/collapsing a widget via the ``icon`` and ``container`` properties.

Let's take a look at an example of putting a red border when ``Taxonomy`` is expanded and for ``Templates``, a red font color when expanded and a blue font color when collapsed

Here's the default colors of widgets in the Sidebar

.. image:: /_static/images/site-admin/ui-widget-default-colors.webp
   :alt: Configurations - User Interface Configuration Widget Default Colors
   :width: 25 %
   :align: center

|

Here's the configuration for putting a red border when ``Taxonomy`` is expanded and for ``Templates``, a red font color when expanded and a blue font color when collapsed

.. code-block:: xml
   :linenos:
   :emphasize-lines: 6-11, 19-26

   <widget id="craftercms.components.PathNavigator">
     <configuration>
       <id>Taxonomy</id>
       <label>Taxonomy</label>
       <icon id="@mui/icons-material/LocalOfferOutlined"/>
       <container>
         <expandedStyle>
           <border>solid</border>
           <borderColor>red</borderColor>
         </expandedStyle>
       </container>
       <rootPath>/site/taxonomy</rootPath>
       <locale>en</locale>
     </configuration>
   </widget>
   <widget id="craftercms.components.PathNavigatorTree">
     <configuration>
       <label>Templates</label>
       <icon id="@mui/icons-material/InsertDriveFileOutlined">
         <expandedStyle>
           <color>red</color>
         </expandedStyle>
         <collapsedStyle>
           <color>blue</color>
         </collapsedStyle>
       </icon>
       <rootPath>/templates</rootPath>
       <locale>en</locale>
     </configuration>
   </widget>
   ...

|

Remember that children of ``expandedStyle`` & ``collapsedStyle`` should be camelCased standard css properties.

Here's the Sidebar with the colors and border added:

.. image:: /_static/images/site-admin/ui-widget-color-added.webp
   :alt: Configurations - User Interface Configuration Widget Border and Colors Added
   :width: 25 %

.. image:: /_static/images/content-author/preview-page-components-space.webp
   :width: 5 %

.. image:: /_static/images/site-admin/ui-widget-template-color.webp
   :alt: Configurations - User Interface Configuration Widget Default Colors
   :width: 25 %

|

^^^^^^^^^^^^^^^^^
Container Options
^^^^^^^^^^^^^^^^^

- ``baseClass``: a class name (string) applied to the container regardless of state
- ``expandedClass``: a class name (string) applied to the container when expanded
- ``collapsedClass``: a class name (string) applied to the container when collapsed
- ``baseStyle``: a set of CSS rules applied to the container regardless of state (e.g. ``<baseStyles><backgroundColor>red</backgroundColor></baseStyles>``)
- ``expandedStyle``: a set of CSS rules applied to the container when expanded
- ``collapsedStyle``: a set of CSS rules applied to the container when collapsed

^^^^^^^^^^^^
Icon Options
^^^^^^^^^^^^

- ``class``: a class name (string) applied to the icon regardless of state
- ``style``: a set of CSS rules applied to the icon regardless of state  (e.g. ``<baseStyles><backgroundColor>red</backgroundColor></baseStyles>``)
- ``content``: inner content of the icon to use in case you're using a font icon library that uses content to render the icon
- ``expandedStyle``: a set of CSS rules applied to the icon when expanded
- ``collapsedStyle``: a set of CSS rules applied to the icon when collapsed

|hr|

.. _spa-sources-sidebar-cabinet:

---------------------------
SPA Sources Sidebar Cabinet
---------------------------
Users may want to manage (edit/view) SPA sources in their projects through Studio.
To view/edit SPA sources, simply add another ``PathNavigatorTree`` or ``PathNavigator`` widget, named ``sources``,
in the Sidebar widget like below:

.. code-block:: xml
   :caption: **SPA sources - ui.xml**
   :linenos:
   :emphasize-lines: 6-14

   <siteUI>
     <widget id="craftercms.components.ToolsPanel">
       <configuration>
         <widgets>
           ...
           <widget id="craftercms.components.PathNavigatorTree">
             <configuration>
               <id>Sources</id>
               <label>Sources</label>
               <icon id="@mui/icons-material/InsertDriveFileOutlined"/>
               <rootPath>/sources/</rootPath>
               <locale>en</locale>
             </configuration>
           </widget>
           ...


.. Note:: Adding SPA sources in top folders other than ``/sources`` is not supported.  Also note that
   items under ``/sources`` are excluded from search.

The ``Video Center`` blueprint from the marketplace contains an example of SPA sources managed in Studio
(``/sources`` added to the sidebar).

.. image:: /_static/images/site-admin/sources-folder-sidebar-ex.webp
   :alt: Configurations - User Interface Configuration Sources Widget in Sidebar
   :width: 90 %
   :align: center

|hr|

--------------------------------------------------
PathNavigatorTree and PathNavigator Sidebar Widget
--------------------------------------------------
The ``PathNavigatorTree`` sidebar widget allows the display of trees with the ability to expand/collapse containers. It shows elements (children) in a level and allows the container children to be further expanded without navigating to the child, allowing many children to be open at the same time. Also, each container child allows filtering/searching via keywords allowing users to find items faster.

.. figure:: /_static/images/site-admin/ui-pathnavigatortree-widget.webp
   :alt: Configurations - PathNavigatorTree Widget in Sidebar

   *PathNavigatorTree widget*

The ``PathNavigator`` sidebar widget shows elements (children) of a level and allows filtering/searching via keywords allowing users to find items faster.  It doesn't provide an overview like the ``PathNavigatorTree``, but, the ``PathNavigator`` is the recommended widget if your project contains thousands of pages where a tree becomes unresponsive due to painting a massive number of items.

.. figure:: /_static/images/site-admin/ui-pathnavigator-widget.webp
   :alt: Configurations - PathNavigator Widget in Sidebar

   *PathNavigator widget*

Here are some options on displaying elements (children) of navigator widgets:

^^^^^
Limit
^^^^^
The number of children displayed at a time when expanding a container can be limited via the ``limit`` property like below:

.. code-block:: xml
    :caption: *PathNavigatorTree sidebar widget limit configuration*
    :emphasize-lines: 8

    <widget id="craftercms.components.PathNavigatorTree">
      <configuration>
        <id>StaticAssets</id>
        <label>Static Assets</label>
        <icon id="@mui/icons-material/ImageOutlined"/>
        <rootPath>/static-assets</rootPath>
        <locale>en</locale>
        <limit>5</limit>
      </configuration>
    </widget>

In the example above, the ``Static Assets`` path navigator tree limits the children displayed to 5 items when opening
a container like in the image  on the left below:

.. image:: /_static/images/site-admin/ui-widget-pathnavtree-limit.webp
   :alt: Configurations - User Interface Configuration PathNavigatorTree Widget Limit
   :width: 25 %

.. image:: /_static/images/site-admin/ui-widget-image-spacer.webp
   :width: 5 %

.. image:: /_static/images/site-admin/ui-widget-pathnavtree-limit-more.webp
   :alt: Configurations - User Interface Configuration PathNavigatorTree Widget Limit Expanded
   :width: 25 %


Notice also that when the user clicks on ``10 more items`` displayed on the image on the left, an additional 5 more
items will be displayed as shown on the image on the right.

Remember to do a refresh of your browser after making the limit changes and saving your configuration in order to see
the changes you've made in action.

^^^^^^^
Sorting
^^^^^^^
The order of children displayed may be sorted via the ``sortStrategy`` and ``order`` property like below:

.. code-block:: xml
    :caption: *Sidebar Widget Sorting Configuration Example*
    :emphasize-lines: 8-9

    <widget id="craftercms.components.PathNavigatorTree">
      <configuration>
        <id>Pages</id>
        <label>Pages</label>
        <icon id="@mui/icons-material/DescriptionOutlined"/>
        <rootPath>/site/website/index.xml</rootPath>
        <locale>en</locale>
        <sortStrategy>lastUpdate</sortStrategy>
        <order>DESC</order>
      </configuration>
    </widget>

The following ``sortStrategy`` property options are available:

- ``alphabetical``: sort in alphabetical order
- ``foldersFirst``: sort in alphabetical order, listing folders first
- ``lastUpdate``: sort using the last modified date

The following ``order`` property options are available:

- ``ASC``: display children in ascending order
- ``DESC``: display children in descending order

In the example configuration above, the children of the ``Pages`` folder will be sorted using the last modified
date in descending order. Let's take a look on how the example configuration above affects the order of children
displayed in the ``Pages`` folder.  The image on the left is a baseline screenshot of the ``/articles/2021/3`` folder
under ``Pages`` for our example. The image on the right is a screenshot of the the same folder after editing and saving
changes to the ``Top Books For Young Women`` article, where we expect our edited article to be the first one listed:

.. image:: /_static/images/site-admin/ui-widget-children-sorting-before.webp
   :alt: Configurations - User Interface Configuration widget sorting screenshot of /articles/2021/3 folder children
   :width: 25 %

.. image:: /_static/images/site-admin/ui-widget-children-sorting-spacer.webp
   :width: 5 %

.. image:: /_static/images/site-admin/ui-widget-children-sorting-after-updates-to-a-child.webp
   :alt: Configurations - User Interface Configuration widget sorting screenshot of /articles/2021/3 folder after modifying a child
   :width: 25 %

|hr|

.. _targeting-configuration:

------------------
Audience Targeting
------------------
Audience Targeting allows an author to see what the project would look like if it were being browsed
by a user with a given set of attributes.

.. image:: /_static/images/page/page-targeting-open.webp
    :width: 80 %
    :align: center

|

Here's the  ``Audience Targeting`` configuration out of the box for a project created using the Website Editorial blueprint:

.. code-block:: xml
   :caption: **Audience Targeting - ui.xml**
   :linenos:

   <widget id="craftercms.components.ICEToolsPanel">
     <configuration>
       <widgets>
         <widget id="craftercms.components.ToolsPanelPageButton">
         ...
         <widget id="craftercms.components.ToolsPanelPageButton">
           <configuration>
             <target id="icePanel"/>
             <title id="previewAudiencesPanel.title" defaultMessage="Audience Targeting"/>
             <icon id="@mui/icons-material/EmojiPeopleRounded"/>
             <widgets>
               <widget id="craftercms.components.PreviewAudiencesPanel">
                 <configuration>
                   <fields>
                     <segment>
                       <id>segment</id>
                       <name>Segment</name>
                       <description>User segment.</description>
                       <type>dropdown</type>
                       <defaultValue>anonymous</defaultValue>
                       <values>
                         <value>
                           <label>Guy</label>
                           <value>guy</value>
                         </value>
                         <value>
                           <label>Gal</label>
                           <value>gal</value>
                         </value>
                         <value>
                           <label>Anonymous</label>
                           <value>anonymous</value>
                         </value>
                       </values>
                       <helpText>Setting the segment will change content targeting to the audience selected.</helpText>
                     </segment>
                     <name>
                       <id>name</id>
                       <name>Name</name>
                       <description>User's first and last name.</description>
                       <type>input</type>
                       <helpText>Enter user's first and last name.</helpText>
                     </name>
                   </fields>
                 </configuration>
               </widget>
               ...

|

Here's how the above configuration looks like in the Experience Builder Panel in Studio:

.. image:: /_static/images/page/page-targeting-curr-attributes.webp
    :width: 30 %
    :align: center

|

See :ref:`targeting` for more information on configuring the targeting system of Crafter Studio to help provide Crafter Engine with fake user properties that help drive the targeting system, such as configuring targeting based on roles, etc. and :ref:`audience-targeting` for more information on how content authors use the audience targeting system configured.

|hr|

.. _rte-config:

-----------------
RTE Configuration
-----------------
There are two ways of editing content in Studio: (1) form-based editing and (2) In-context editing (ICE). Form-based editing is done by clicking on ``Options`` (three dots next to the preview address bar at the top of the page, or the three dots next to the page in the Sidebar), then selecting ``Edit``. In-context editing is done by enabling the ``Edit mode`` by clicking on the pencil at the top right of the page (which turns green when enabled), then clicking on the section of the page you want to edit.

To configure the RTE, add/edit the widget ``craftercms.components.TinyMCE``:

.. code-block:: xml
   :caption: *Example RTE configuration*
   :linenos:

   <widget id="craftercms.components.TinyMCE">
     <configuration>
       <setups>
         <setup id="generic">
           <!-- Configuration options: https://www.tiny.cloud/docs/configure/ -->
           <!-- Plugins: https://www.tiny.cloud/docs/plugins/opensource/ -->
           <tinymceOptions>{
             "menubar": true,
             "theme": "silver",
             "plugins": "print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern help acecode paste editform",
             "extended_valid_elements": "",
             "valid_children": "",
             "toolbar1": "formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | editform",
             "code_editor_wrap": false,
             "toolbar_sticky": true,
             "image_advtab": true,
             "encoding": "xml",
             "relative_urls": false,
             "remove_script_host": false,
             "convert_urls": false,
             "remove_trailing_brs": false,
             "media_live_embeds": true,
             "autoresize_on_init": false,
             "autoresize_bottom_margin": 0,
             "menu": { "tools": { "title": "Tools", "items": "tinymcespellchecker code acecode wordcount" } },
             "automatic_uploads": true,
             "file_picker_types": "image media file",
             "paste_data_images": true,
             "templates": [],
             "content_css": [],
             "content_style": "body {}",
             "contextmenu": false }
           </tinymceOptions>
         </setup>
       </setups>
     </configuration>
   </widget>

|

Our RTE is based on TinyMCE (https://www.tiny.cloud/) and can leverage all configurations and plugins designed for the TinyMCE editor.

To learn more about configuring the RTE, see :ref:`here <rte-configuration>`

|hr|

.. _project-tools-ui-configuration:

---------------------------
Project Tools Configuration
---------------------------
The Project Config tools configuration section defines what modules are available for administration use when
clicking on |projectTools| from the Sidebar.

.. code-block:: xml
   :linenos:

   <references>
   		<reference id="craftercms.siteTools">
   			<tools>
   				<tool>
   					<title id="dropTargetsMessages.contentTypes" defaultMessage="Content Types"/>
   					<icon id="@mui/icons-material/WidgetsOutlined"/>
   					<url>content-types</url>
   					<widget id="craftercms.components.ContentTypeManagement"/>
   				</tool>
   				<tool>
   					<title id="GlobalMenu.EncryptionToolEntryLabel"
   					       defaultMessage="Encryption Tool"/>
   					<icon id="@mui/icons-material/LockOutlined"/>
   					<url>encrypt-tool</url>
   					<widget id="craftercms.components.SiteEncryptTool"/>
   				</tool>
   				<tool>
   					<title id="words.configuration" defaultMessage="Configuration"/>
   					<icon id="@mui/icons-material/SettingsApplicationsOutlined"/>
   					<url>configuration</url>
   					<widget id="craftercms.components.SiteConfigurationManagement"/>
   				</tool>
   				...

|

^^^^^^^^^^^^^^^^^^^^^^^
List of available tools
^^^^^^^^^^^^^^^^^^^^^^^
Here's a list of available tools defined in the Website_Editorial blueprint.

==================== =====================================================================
Tool                 Description
==================== =====================================================================
Content Types        Allows you to create/modify content types
Encryption Tool      Allows the user to encrypt sensitive data such as access keys and passwords
Configuration        Contains all the configuration files managed through Crafter Studio
Audit                Allows you to view your project activity log
Workflow States      Contains a list of all files in the project with its corresponding state
Log Console          Allows you to tail logs depending on what logging levels are set
Publishing           Allows the user to view the publishing status, perform a bulk publish or to publish content using commit ID(s)
Git                  Allows the user to perform Git operations
GraphQL              Allows the user run GraphQL queries and explore the schema documentation for a project without the need of any other tool
Plugin Management    Allows the user to install and to view currently installed, project plugins
==================== =====================================================================

See :ref:`navigating-project-tools` for more information on the available tools in ``Project Tools``.

|hr|

.. _preview-edit-mode-defaults:

--------------------------
Preview Edit Mode Defaults
--------------------------
.. version_tag::
    :label: Since
    :version: 4.1.2

To configure defaults for Preview edit mode, set the following attributes of the
``craftercms.components.Preview`` widget:

.. code-block:: xml
    :linenos:

    <widget
            id="craftercms.components.Preview"
            initialEditModeOn="true"
            initialHighlightMode="all"
            xbDetectionTimeoutMs="5000"
    />