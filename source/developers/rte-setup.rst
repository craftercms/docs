.. _rte-setup:

============================
Rich Text Editor (RTE) Setup 
============================

RTEs are more effective/productive for authors  when they are configured properly for the specific type of content the author is managing.  A properly and effectively configured RTE has the right styles, menu options and so on.
Every RTE in the system can have a different look  and feel, different editing/menu options, available styles, components and other configurations.  You can also SHARE setups between similar RTEs in your project.  This document will help you understand how to configure RTEs in Crafter Studio.

----------------------------------------
Common Configurations for Effective RTEs
----------------------------------------

#. The rich text editor's width should be set to the same width as the region it is intended to edit
#. Site style sheet is imported
#. Site styles are being applied appropriately to the markup in the RTE.  Not that sometimes styles in CSS are so aggressively specified that the RTE cannot pick them up.
#. Formats and styles are configured to match the part of the site being edited
#. Toolbar is configured with only what is required for the specific use case (reducing options makes it easier for editors)
#. If plugins like insert component, insert smart table and so on are enabled it should be fully configured.

--------------------------------------------------------------------
What Out-of-the-Box Functionality Does Crafter Studio's RTE Support?
--------------------------------------------------------------------

Our RTE is based on TinyMCE (https://www.tinymce.com/) and can leverage all configurations and plugins designed for the TinyMCE editor.  You can find the documentation for these configurations and settings here: https://www.tinymce.com/docs/configure

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio Specific Extensions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

+----------------+---------------------------------------------+-----------------+
| Attribute Name | Description                                 | Configure       |
+================+=============================================+=================+
| HTML Code      | | Add syntax highlighted HTML code editing  | TODO LINK       |
| Editor         | | to Crafter Studio.                        |                 |
|                | | (Replaces out of the box code plugin)     |                 |
+----------------+---------------------------------------------+-----------------+
| Channel        | | Give the user a dropdown list of channels.| TODO LINK       |
| Selector       | | Changes the RTE size and Style Sheets to  |                 |
|                | | match the given channel.                  |                 |
+----------------+---------------------------------------------+-----------------+
| Insert Image   | | Enable the user to insert and image       |                 |
|                | | from 1 or more datasources.               | TODO LINK       |
|                | | (Replaces out of the box image plugin)    |                 |
+----------------+---------------------------------------------+-----------------+
| Edit Image     | | todo                                      | TODO LINK       |
|                |                                             |                 |
+----------------+---------------------------------------------+-----------------+
| Insert Linked  | | Enable the user to browse for and insert  | TODO LINK       |
|                | | a link for an object in                   |                 |
| CMS Object     | | the CMS.                                  |                 |
+----------------+---------------------------------------------+-----------------+
| Insert         | | Enable the  user to insert a full fledged | TODO LINK       |
| Component      | | Crafter component in to the RTE.          |                 |
+----------------+---------------------------------------------+-----------------+
| Insert HTML    | | Enable the user to insert a canned markup | TODO LINK       |
|                | | in to the RTE. This is useful when a      |                 |
| Stub           | | component is too heavy weight.            |                 |
+----------------+---------------------------------------------+-----------------+
| Insert Layout  | | Allow the user to insert markup designed  | TODO LINK       |
|                | | to act as a layout in to the RTE.         |                 |
+----------------+---------------------------------------------+-----------------+
| Insert Smart   | | Allow the user to insert a table markup   | TODO LINK       |
| Table          | | that holds its styles as rows and columns |                 |
|                | | are added.                                |                 |
+----------------+---------------------------------------------+-----------------+


-----------------------------------------------------------------
RTE Specific Configurations vs RTE Setups (Shared Configurations)
-----------------------------------------------------------------

.. todo:: EXPLAIN control properties vs leveraging shared configuration

------------------------------------------
Attaching an RTE in a Form to an RTE Setup
------------------------------------------

.. todo:: EXPLAIN

---------------------
Creating an RTE Setup
---------------------

.. todo:: EXPLAIN EXPLAIN XML FILE

The RTE's configuration file looks like this:

.. code-block:: xml

    <config>
        <setup>
            <id>generic</id>	 
            <rteStylesheets>
                <link>
                    <loadFromPreview>true</loadFromPreview>
                    <url>/static-assets/css/style.css</url>         
                </link>

                <link>
                    <appliesToChannel>iphonev,iphoneh</appliesToChannel>
                    <loadFromPreview>true</loadFromPreview>
                    <url>/static-assets/mobile/css/libs/jquery.mobile-1.0.min.css</url>         
                </link>
            </rteStylesheets>
            
            <toolbarItems1>formatselect,|,bold,italic,underline,strikethrough,|,sub,sup,charmap,|,outdent,indent,blockquote,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,managedImage,link,unlink,anchor,|,code,|,undo,redo</toolbarItems1>
            <toolbarItems2></toolbarItems2>
            <toolbarItems3></toolbarItems3>
            <toolbarItems4></toolbarItems4>
            
            <rteLinkStyles>
                <style>
                    <name>Standard</name>
                    <value>standard</value>
                </style>
                <style>
                    <name>Hidden</name>
                    <value>hidden</value>
                </style>
                <style>
                    <name>Button</name>
                    <value>mediumButton</value>			
                </style>		
            </rteLinkStyles>
                
            <!-- widgets -->
            <rteWidgets>
            </rteWidgets>    
            
            <rteModules>
                <module>insert-image</module>		
                <module>channel</module>
            </rteModules>
        </setup>
    </config>

You can find it in Configuration, in the Site Config, as ``RTE Configuration``. Inside the ``<config>`` tag, there can be multiple ``<setup>`` tags. Each represents a possible RTE configuration that can be specified to be used by a RTE control. Each contains:

    * An ``<id>`` tag with the name that must be specified for an RTE control to use this configuration.
    * ``<rteStylesheets>`` tag that contains multiple ``<link>`` tags. Each link tag represents a link to a CSS stylesheet that will be used so that the RTE matches the look and feel of the site.

      .. code-block:: xml

        <link>
         	<appliesToChannel>iphonev,iphoneh</appliesToChannel>
			<loadFromPreview>true</loadFromPreview>
			<url>/static-assets/mobile/css/libs/jquery.mobile-1.0.min.css</url>         
        </link>

      * ``<appliesToChannel>`` is optional. If it's missing, it will apply to every channel.
    * ``<toolbarItems1>`` and similar contain the toolbar buttons in the RTE. You can specify any plugin as named in `Tiny MCE Plugins List <https://www.tinymce.com/docs/plugins/>`_. They will be featured in the same order as specified here, and separators can be specified with ``|``.
    * ``<rteModules>`` is used to specify which external plugins to include, the list of which is available in `Crafter Studio's git repo <https://github.com/craftercms/studio2-ui/tree/master/static-assets/components/cstudio-forms/controls/rte-plugins>`_.

For example, to use the ``edit-html`` editor, you'll have to add ``<module>edit-html</module>`` to ``<rteModules>`` and place ``edithtml`` somewhere in a toolbar ``<toolbarItems1>`` similar to this ``link,unlink,anchor,|,edithtml,|,undo,redo</toolbarItems1>``

.. todo:: EXPLAIN EXAMPLES!


