.. _rte-setup:

============================
Rich Text Editor (RTE) Setup 
============================

RTEs are more effective/productive for authors  when they are configured properly for the specific type of content the author is managing.  A properly and effectively configured RTE has the right styles, menu options and so on.
Every RTE in the system can have a different look  and feel, different editing/menu options, available styles, components and other configurations.  You can also SHARE setups between similar RTEs in your project.  This document will help you understand how to configure RTEs in Crafter Studio.

----------------------------------------
Common Configurations for Effective RTEs
----------------------------------------
Here are some things to consider for setting up effective RTEs:

#. The rich text editor's width should be set to the same width as the region it is intended to edit
#. Site style sheet of your site is imported so it can be applied to the RTE
#. Site styles are being applied appropriately to the markup in the RTE.  Not that sometimes styles in CSS are so aggressively specified that the RTE cannot pick them up.
#. Formats and styles are configured to match the part of the site being edited
#. Toolbar is configured with only what is required for the specific use case (reducing options makes it easier for editors)
#. If plugins like ``insert component``, ``insert smart table`` and so on are enabled it should be fully configured.

--------------------------------------------------------------------
What Out-of-the-Box Functionality Does Crafter Studio's RTE Support?
--------------------------------------------------------------------

Our RTE is based on TinyMCE (https://www.tinymce.com/) and can leverage all configurations and plugins designed for the TinyMCE editor.  You can find the documentation for these configurations and settings here: https://www.tinymce.com/docs/configure

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio Specific Extensions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The list of Crafter Studio specific extensions is available in `Crafter Studio's git repo <https://github.com/craftercms/studio2-ui/tree/master/static-assets/components/cstudio-forms/controls/rte-plugins>`_.

To see an example, the out of the box blueprints Empty and Website_Editorial uses the **Insert Image** specific extensions which enables the user to insert an image from 1 or more data sources, which replaces the TinyMCE out of the box image plugin.

In the blueprints, in order to use the **Insert Image** extension, add **managedImage** inside the tag ``<toolbarItems1>``.  Inside the tags ``<rteModules>``, insert ``<module>insert-image</module>``.  (See the sample RTE Setup configuration file in the section below.)

Once the RTE Setup is attached to an RTE in a form, you can now specify  multiple data sources for the image.  In the image below, we have two data sources enabled for the RTE image insert.

.. figure:: /_static/images/rte-setup-extension-example-insert-img.png
    :alt: RTE Setup - Insert Image Extension Example
	:align: center

---------------------
Creating an RTE Setup
---------------------

The RTE's configuration file looks like this:

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/form-control-config/rte/rte-setup.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <!--
    	This file configures Studio's Rich Text Editor (RTE), and it supports several configuration profiles, where the
    	content model selects which profile to use for which RTE field in the forms.
    -->
    <config>
        <setup>
            <id>generic</id> <!-- This starts a profile configuration -->
            <rteStylesheets> <!-- This informs the RTE to use the CSS files -->
                <link>
                    <loadFromPreview>true</loadFromPreview>
                    <url>/static-assets/css/main.css</url>
                </link>

                <link>
                    <appliesToChannel>iphonev,iphoneh</appliesToChannel>
                    <loadFromPreview>true</loadFromPreview>
                    <url>/static-assets/mobile/css/iphone.css</url>
                </link>
                <link>
                    <appliesToChannel>iphonev,iphoneh</appliesToChannel>
                    <loadFromPreview>true</loadFromPreview>
                    <url>/static-assets/mobile/css/libs/jquery.mobile-1.0.min.css</url>
                </link>
            </rteStylesheets>

            <rteStyleOverride>
                body { background: none; background-color: white; padding: 10px; }
                .layoutColumn { border: 1px solid gray; }
                .layoutColumn3 { border: 1px solid gray; }
                .layoutColumn4 { border: 1px solid gray; }

                h1 {
                color:rgb(61, 68, 73);
                font-family:'Roboto Slab';
                font-size:44px;
                font-weight:bold;
                }

                h3 {
                color:rgb(61, 68, 73);
                font-family:'Roboto Slab';
                font-size:18px;
                }

                p {
                font-size:14px;
                }

            </rteStyleOverride>

            <toolbarItems1>
                formatselect,|,bold,italic,underline,strikethrough,|,sub,sup,charmap,|,outdent,indent,blockquote,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,managedImage,link,unlink,anchor,|,edithtml,|,undo,redo
        </toolbarItems1>
        <toolbarItems2></toolbarItems2>
        <toolbarItems3></toolbarItems3>
        <toolbarItems4></toolbarItems4>

            <rteLinkStyles> <!-- configures HTTP link styles within the RTE (double click a link in the RTE and select the
						`Class` field. -->
                <style>
                    <!-- first row is the title -->
                    <name>Link Styles</name>
                    <value>Link Styles</value>
                </style>
                <style>
                    <name>Standard</name>
                    <value>standard</value>
                </style>
                <style>
                    <name>Single</name>
                    <value>single</value>
                </style>
                <style>
                    <name>Hidden</name>
                    <value>hidden</value>
                </style>
                <style>
                    <name>Title link</name>
                    <value>titleLink</value>
                </style>
                <style>
                    <name>Button</name>
                    <value>mediumButton</value>
                </style>
            </rteLinkStyles>

            <!-- Widgets: These are Crafter components that can be dragged and dropped in the RTE -->
            <rteWidgets>
                <!--
                <widget>
                    <name />
                    <description />
                    <contentIdField />
                    <contentIdType />
                    <contentPath />
                    <contentType />
                    <includeJs />
                    <includeCss />
                </widget>
                -->
            </rteWidgets>

            <!-- Modules: -->
            <rteModules>
                <module>insert-image</module>
                <module>channel</module>
                <module>edit-html</module>
            </rteModules>
        </setup>
    </config>

You can access the ``RTE Configuration`` file by going to the **Sidebar** then clicking on  |siteConfig|.  In the **Site Config**, click on **Configuration**, then from the dropdown list, select ``RTE Configuration``

.. figure:: /_static/images/rte-setup-config-file-access.png
    :alt: RTE Setup - Open RTE Configuration File in Studio
	:align: center


Inside the ``<config>`` tag, there can be multiple ``<setup>`` tags. Each represents a possible RTE configuration that can be specified to be used by a RTE control. Each possible RTE configuration contains:

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


------------------------------------------
Attaching an RTE in a Form to an RTE Setup
------------------------------------------

To attach an RTE setup to an RTE in a form, open the content type that you want to add an RTE to, then go to the **Properties Explorer** and click on RTE Configuration and type in an RTE setup name.

.. figure:: /_static/images/rte-setup-form.png
    :alt: RTE Setup - Add an RTE in the Form
	:align: center

In the image below, the RTE setup name used is **generic**.  Please see the section above on how to create an RTE Setup, where the example shows an RTE Setup named **generic**.

.. figure:: /_static/images/rte-setup-attach-config.png
    :alt: RTE Setup - Attach an RTE in a Form to an RTE Setup
	:align: center

