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
#. Site styles are being applied appropriately to the markup in the RTE.  Note that sometimes styles in CSS are so aggressively specified that the RTE cannot pick them up.
#. Formats and styles are configured to match the part of the site being edited
#. Toolbar is configured with only what is required for the specific use case (reducing options makes it easier for editors)
#. If plugins like ``insert component``, ``insert layout`` and so on are enabled it should be fully configured.

--------------------------------------------------------------------
What Out-of-the-Box Functionality Does Crafter Studio's RTE Support?
--------------------------------------------------------------------

Our RTE is based on TinyMCE (https://www.tinymce.com/) and can leverage all configurations and plugins designed for the TinyMCE editor.   You can find the documentation for these TinyMCE configurations and settings here: https://www.tinymce.com/docs/configure

.. _tiny-mce-plugins:

^^^^^^^^^^^^^^^
TinyMCE plugins
^^^^^^^^^^^^^^^
Crafter Studio uses standard TinyMCE plugins.  Here's a list of available TinyMCE plugins in Crafter Studio:

+-----------------------+---------------------+---------------------------------------------------+
|| Plugin Name          || Button Name(s)     || Description                                      |
||                      || (where applicable) ||                                                  |
+=======================+=====================+===================================================+
|| advhr                || advhr              || Advanced hr dialog that supports noshade, width  |
||                      ||                    || and size                                         |
+-----------------------+---------------------+---------------------------------------------------+
|| advimage             ||                    || Advanced image dialog that supports mouseover/out|
||                      ||                    || image swapping                                   |
+-----------------------+---------------------+---------------------------------------------------+
|| advlink              ||                    || Advanced link dialog that supports popup windows |
||                      ||                    || and targets                                      |
+-----------------------+---------------------+---------------------------------------------------+
|| advlist              ||                    || Advanced list dialog that provides options to the|
||                      ||                    || ordered and unordered list buttons               |
+-----------------------+---------------------+---------------------------------------------------+
|| autolink             ||                    || Normalizes behaviour with IE that produces links |
||                      ||                    || when you simply type links in the content window |
+-----------------------+---------------------+---------------------------------------------------+
|| autoresize           ||                    || Automatically resizes the editor to the content  |
||                      ||                    || inside it.                                       |
+-----------------------+---------------------+---------------------------------------------------+
|| bbcode               ||                    || Makes it possible for TinyMCE to edit BBCode in  |
||                      ||                    || WYSIWYG way by converting tags like [b] into     |
||                      ||                    || and then back to [b] when the user submits the   |
||                      ||                    || content                                          |
+-----------------------+---------------------+---------------------------------------------------+
|| contextmenu          ||                    || Provides context (right-click) menu capability   |
+-----------------------+---------------------+---------------------------------------------------+
|| directionality       || ltr,               || Adds directionality icons to TinyMCE that enables|
||                      || rtl                || TinyMCE to better handle languages that is       |
||                      ||                    || written from right to left.                      |
+-----------------------+---------------------+---------------------------------------------------+
|| emotions             || emotions           || Insert smiley images in the editable area        |
+-----------------------+---------------------+---------------------------------------------------+
|| fullpage             || fullpage           || Enables you to edit whole documents with both    |
||                      ||                    || head and body.                                   |
+-----------------------+---------------------+---------------------------------------------------+
|| fullscreen           || fullscreen         || Adds fullscreen editing mode                     |
+-----------------------+---------------------+---------------------------------------------------+
|| iespell              || iespell            || Provides spell check for IE browsers             |
+-----------------------+---------------------+---------------------------------------------------+
|| inlinepopups         ||                    || Make all dialogs to open as floating DIV layers  |
||                      ||                    || instead of popup windows.                        |
+-----------------------+---------------------+---------------------------------------------------+
|| insertdatetime       || insertdate,        || Insert customized date and time strings          |
||                      || inserttime         ||                                                  |
+-----------------------+---------------------+---------------------------------------------------+
|| layer                || insertlayer,       || Adds support to create/remove and z-index block  |
||                      || moveforward,       || elements                                         |
||                      || movebackward,      ||                                                  |
||                      || absolute           ||                                                  |
+-----------------------+---------------------+---------------------------------------------------+
|| legacyoutput         ||                    || Maintain compatibility for font, b, i, u,        |
||                      ||                    || strike, etc                                      |
+-----------------------+---------------------+---------------------------------------------------+
|| lists                ||                    || Normalizes list behaviour between browsers       |
+-----------------------+---------------------+---------------------------------------------------+
|| media                || media              || Handles embedded media such as QuickTime, Flash, |
||                      ||                    || ShockWave, RealPlayer and Windows Media Player   |
+-----------------------+---------------------+---------------------------------------------------+
|| nonbreaking          || nonbreaking        || Adds a button for inserting nonbreaking space    |
||                      ||                    || entities at the current caret location           |
+-----------------------+---------------------+---------------------------------------------------+
|| noneditable          ||                    || Adds non editable elements support for MSIE and  |
||                      ||                    || Mozilla/FF                                       |
+-----------------------+---------------------+---------------------------------------------------+
|| pagebreak            ||                    || Adds pagebreak support.  Enables you to use a    |
||                      ||                    || special separator to break contents into pages   |
+-----------------------+---------------------+---------------------------------------------------+
|| paste                || pastetext,         || "Cleans" content pasted from clipboard; useful   |
||                      || pasteword,         || when pasting from MS Office                      |
||                      || selectall          ||                                                  |
+-----------------------+---------------------+---------------------------------------------------+
|| preview              || preview            || Opens a popup showing the current content        |
+-----------------------+---------------------+---------------------------------------------------+
|| print                || print              || Adds a print button                              |
+-----------------------+---------------------+---------------------------------------------------+
|| save                 || save               || Adds a save button                               |
+-----------------------+---------------------+---------------------------------------------------+
|| searchreplace        || search,            || Adds search/replace dialogs                      |
||                      || replace            ||                                                  |
+-----------------------+---------------------+---------------------------------------------------+
|| spellchecker         ||                    || Adds spellchecker functionality by providing a   |
||                      ||                    || new button that performs a AJAX call to a backend|
||                      ||                    || PHP page that uses PSpell/ASpell or Google       |
||                      ||                    || spellchecker.                                    |
+-----------------------+---------------------+---------------------------------------------------+
|| style                || styleprops         || Adds CSS style editing support                   |
+-----------------------+---------------------+---------------------------------------------------+
|| tabfocus             ||                    || Adds the possibility to tab in/out               |
+-----------------------+---------------------+---------------------------------------------------+
|| table                || tablecontrols,     || Adds table management functionality              |
||                      || table,             ||                                                  |
||                      || row_props,         ||                                                  |
||                      || cell_props,        ||                                                  |
||                      || delete_col,        ||                                                  |
||                      || delete_row,        ||                                                  |
||                      || delete_table,      ||                                                  |
||                      || col_after,         ||                                                  |
||                      || col_before,        ||                                                  |
||                      || row_after,         ||                                                  |
||                      || row_before,        ||                                                  |
||                      || split_cells,       ||                                                  |
||                      || merge_cells        ||                                                  |
+-----------------------+---------------------+---------------------------------------------------+
|| template             ||                    || Adds support for custom templates                |
+-----------------------+---------------------+---------------------------------------------------+
|| visualblocks         || visualblocks       || Adds support for show/hide block elements        |
||                      ||                    || (to see block elements)                          |
+-----------------------+---------------------+---------------------------------------------------+
|| visualchars          || visualchars        || Adds the possibility to see invisible characters |
+-----------------------+---------------------+---------------------------------------------------+
|| wordcount            ||                    || Adds word count functionality placing a counter  |
||                      ||                    || on the right edge of the status bar.             |
+-----------------------+---------------------+---------------------------------------------------+
|| xhtmlxtras           || cite, ins, del,    || Adds support for some XHTML elements these       |
||                      || abbr, acronym,     || include cite, ins, del, abbr, and acronym        |
||                      || attribs            ||                                                  |
+-----------------------+---------------------+---------------------------------------------------+

.. |rteMediaBtn| image:: /_static/images/site-admin/rte-media-button.png
                     :width: 4%

To use the TinyMCE plugins, add the **Button Name(s)** to one of the toolbarItem tags: ``<toolbarItems1>``, ``<toolbarItems2>``, ``<toolbarItems3>`` or ``<toolbarItems4>``.

TinyMCE Plugin Example
^^^^^^^^^^^^^^^^^^^^^^
Let's take a look at an example of using one of the TinyMCE plugins.

To be able to embed a YouTube video in the RTE, do the following:

1. Add the button name **media** to one of the toolbarItem tags: ``<toolbarItems1>``.  An **Insert/Edit Embedded Media** button |rteMediaBtn| will now be available for users of the RTE.
2. Click on the |rteMediaBtn| button to add the link to the YouTube video you'd like to embed in the RTE and to setup other parameters. In the **General** tab, select ``iframe`` in the **Type** field, then fill in the **File/URL** field with the URL of the YouTube video you'd like to embed and finally, fill in the **Dimensions** field to the size desired.  Click on the **Insert** button.

   .. figure:: /_static/images/site-admin/rte-media-config.png
      :alt: RTE Setup - Insert/Edit Embedded Media Example
      :width: 65%
      :align: center

|

3. Save your changes, and your video should now be embedded in your page

   .. figure:: /_static/images/site-admin/rte-media-preview.png
      :alt: RTE Setup - YouTube video embedded in page, inserted through the RTE
      :width: 65%
      :align: center

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio Specific Extensions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Here's a list of Crafter Studio Specific Extensions:

+--------------------------+---------------------+------------------------------------------------+
|| RTE Module Name         || Button Name        || Description                                   |
||                         || (where applicable) ||                                               |
+==========================+=====================+================================================+
|| channel                 || channels           || Gives the user a dropdown of channels.        |
||                         ||                    || Changes the RTE size and Style Sheets to      |
||                         ||                    || match the given channel.                      |
+--------------------------+---------------------+------------------------------------------------+
|| edit-html               || edithtml           || Adds syntax highligted HTML code editing      |
||                         ||                    || to Crafter Studio.                            |
||                         ||                    || (Replaces out of the box code plugin)         |
+--------------------------+---------------------+------------------------------------------------+
|| edit-image              ||                    || Allows the user to edit an image in the RTE   |
+--------------------------+---------------------+------------------------------------------------+
|| insert-component        || insertComponent    || Enable user to insert full fledged            |
||                         ||                    || Crafter component in to RTE.                  |
+--------------------------+---------------------+------------------------------------------------+
|| insert-image            || managedImage       || Enable the user to insert an image from       |
||                         ||                    || 1 or more datasources.                        |
||                         ||                    || (Replaces out of the box image plugin)        |
+--------------------------+---------------------+------------------------------------------------+
|| insert-layout           || insertLayout       || Allows user to insert markup designed to      |
||                         ||                    || act as a layout in to the RTE.                |
+--------------------------+---------------------+------------------------------------------------+
|| insert-predefined-table || predefinedTable    || Allows the user to insert a predefined table  |
+--------------------------+---------------------+------------------------------------------------+
|| insert-stub             || insertStub         || Enable the user to insert canned markup       |
||                         ||                    || in to the RTE. This is useful when a          |
||                         ||                    || component is too heavy weight.                |
+--------------------------+---------------------+------------------------------------------------+

To use the extensions, add the **RTE Module Name** inside the tags ``<rteModules>`` like this:

.. code-block:: xml

    <rteModules>
        <module>RTE Module Name<module>
        <module>RTE Module Name<module>
    </rteModules>

|

If a button for the toolbar is applicable for the extension you are using, add the **Button Name** inside one of the toolbarItem tag:  ``<toolbarItems1>``

Some extensions also require some more items to be setup.  Crafter Studio specific extensions are available in `Crafter Studio-ui's Git repo <https://github.com/craftercms/studio-ui/tree/master/static-assets/components/cstudio-forms/controls/rte-plugins>`_.

Let's take a look at some examples on how to use some of the Crafter Studio specific extensions.

Inserting an Image
^^^^^^^^^^^^^^^^^^

The out of the box blueprints Empty and Website_Editorial uses the **Insert Image** specific extensions which enables the user to insert an image from 1 or more data sources, which replaces the TinyMCE out of the box image plugin.

In the blueprints, in order to use the **Insert Image** extension, add **managedImage** inside the tag ``<toolbarItems1>``.  Inside the tags ``<rteModules>``, insert **<module>insert-image</module>**.  (See the sample RTE Setup configuration file below.)

Once the RTE Setup is attached to an RTE in a form, you can now specify multiple data sources for the image.  To specify data sources for the image, open the **Content Type** containing the RTE you would like to be able to insert an image, from |siteConfig|.  Add a data source for images, then select the RTE.   In the **Properties-Explorer**, go to the **Image Manager** field, where you should be able to see the data sources for image you setup earlier.  Put a checkmark on the image sources you want available for your RTE.

In the image below, we have two data sources enabled for the RTE image insert.

.. figure:: /_static/images/rte-setup-extension-example-insert-img.png
    :alt: RTE Setup - Insert Image Extension Example
	:align: center

|

Inserting HTML stubs
^^^^^^^^^^^^^^^^^^^^

To add the ability to insert HTML stubs in your RTE configuration, do the following:

#. Add the **insert-stub** module in the ``<rteModules>``.
#. Add **insertStub** to one of the toolbars: ``<toolbarItems1>``
#. Add the stubs you'd like to be able to insert when using the RTE inside the tags ``<rteStubs>`` and for each stub, put it inside the ``<stub>`` tags.  Here is an example:

   .. code-block:: xml
      :linenos:

      <rteStubs>
        <stub>
            <name>Service Tout</name>
            <description>Promo Tout</description>
            <thumbnail>pathgoes.gif</thumbnail>
            <stylesheet></stylesheet>
            <prototype><![CDATA[<div class="centered service">
              <div class="circle-border zoom-in"><img class="img-circle" src="/static-assets/images/1-gear.png" alt="service 3" /></div>
              <h3>HEADER</h3>
              <p>DESCRIPTION</p>
              </div>]]>
            </prototype>
        </stub>

        <stub>
            <name>Customer Quote</name>
            <description>Quote</description>
            <thumbnail>pathgoes.gif</thumbnail>
            <stylesheet></stylesheet>
            <prototype><![CDATA[<div class="testimonial" style="width: 400px; margin: 10px; color: white;">
                <p>"QUOTE"</p>
                <div class="whopic">
                   <div class="arrow"><br /></div>
                   <img class="centered" src="/static-assets/images/1-gear.png" alt="client 2" />
                   <strong>PERSON QUOTED<br /><small>ORG NAME</small> </strong>
                   </div>
               </div>]]>
            </prototype>
        </stub>
      </rteStubs>

|

Inserting Layouts
^^^^^^^^^^^^^^^^^

To add the ability to insert layouts in your RTE configuration, do the following:

#. Add the **insert-layout** module in the ``<rteModules>``.
#. Add **insertLayout** to one of the toolbars: ``<toolbarItems1>``
#. Add the layouts you'd like to be able to insert when using the RTE, inside the tags ``<rteLayouts>`` and for each layout, put it inside the ``<layout>`` tags.  Here is an example:

   .. code-block:: xml
      :linenos:

      <rteLayouts>
        <layout>
            <name>Four Column Layout</name>
            <description>Four column layout</description>
            <thumbnail>pathgoes.gif</thumbnail>
            <stylesheet>/table.css</stylesheet>
            <prototype><![CDATA[
                <table  width="100%"><tr><td>
                <div class="layoutWrapper4col">
                    <div class="layoutColumn4">Column 1</div>
                    <div class="layoutColumn4">Column 2</div>
                    <div class="layoutColumn4">Column 3</div>
                    <div class="layoutColumn4">Column 4</div>
                </div>
                </td></tr></table>]]></prototype>
        </layout>
        <layout>
            <name>Three Column Layout</name>
            <description>Three Column Layout</description>
            <thumbnail>pathgoes.gif</thumbnail>
            <stylesheet>/table.css</stylesheet>
            <prototype><![CDATA[
                <table  width="100%"><tr><td>
                <div class="layoutWrappe3ecol">
                    <div class="layoutColumn3">Column 1</div>
                    <div class="layoutColumn3">Column 2</div>
                    <div class="layoutColumn3">Column 3</div>
                </div>
                </td></tr></table>]]></prototype>
        </layout>
        <layout>
            <name>Two Column Layout</name>
            <description>Two Column Layout</description>
            <thumbnail>pathgoes.gif</thumbnail>
            <stylesheet>/table.css</stylesheet>
            <prototype><![CDATA[
                <table  width="100%"><tr><td>
                <div class="layoutWrapper2col">
                    <div class="layoutColumn">Column 1</div>
                    <div class="layoutColumn">Column 2</div>
                </div>
                </td></tr></table>]]></prototype>
        </layout>
      </rteLayouts>

|

Notice in the configuration example below, that you can setup the looks of your layouts inside the ``<rteStyleOverride>`` tags, where the looks for  layoutColumn, layoutColumn3 and layoutColumn4 is setup.

.. _inserting-crafter-components:

Inserting Crafter Components
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To add the ability to insert Crafter Components in your RTE configuration, do the following:

#. Add the **insert-component** module in the ``<rteModules>``.
#. Add **insertComponent** to one of the toolbars: ``<toolbarItems1>``
#. Add the Crafter components you'd like to be able to insert when using the RTE inside the tags ``<rteWidgets>`` and for each component, put it inside the ``<widget>`` tags.  Here is an example:

   .. code-block:: xml
       :linenos:

       <rteWidgets>
         <widget>
           <name>Contact</name>
           <description>Contact</description>
           <contentIdField>entityId</contentIdField>
           <contentIdType>path</contentIdType>
           <contentPath>/site/components/greeting</contentPath>
           <contentType>/component/component-greeting</contentType>
           <includeJs />
           <includeCss />
         </widget>
       </rteWidgets>

|

Follow the instructions here: :ref:`using-components-in-rte` to setup the components you wish to insert through the RTE.

.. commented for now until channel is fixed
.. Selecting Channels
.. ^^^^^^^^^^^^^^^^^^

.. To add the ability to view the RTE in the context of different channels supported, do the following:

.. #. Add the **channel** module in the ``<rteModules>``.
.. #. Add **channel** to one of the toolbars: ``<toolbarItems1>``
.. #. Once the RTE Setup is attached to an RTE in a form, you can now specify different channels.  To specify the channels, open the **Content Type** containing the RTE you would like to be able to select a channel, from |siteConfig|.  In the **Properties-Explorer**, go to the **Supported Channels** field, where you should be able to input the channels available.


Inserting Smart Tables
^^^^^^^^^^^^^^^^^^^^^^

Crafter CMS provides a plugin for inserting a table that holds its formatting as the user adds rows and columns. To turn on table controls in the RTE, do the following:

#. Add the **insert-predefined-table** module in the ``<rteModules>``.
#. Add **predefinedTable** and **tablecontrols** to one of the toolbars: ``<toolbarItems1>``
#. Add the tables you'd like to be able to insert when using the RTE, inside the tags ``<rteTables>`` and for each table, put it inside the ``<table>`` tags.  Here is an example:

   .. code-block:: xml
       :linenos:

       <rteTables>
          <table>
             <name>Sample Table</name>
             <description>Sample Table</description>
             <thumbnail>sample-table.jpg</thumbnail>
             <stylesheet>/sample-table.css</stylesheet>
             <prototype>
                <![CDATA[
                   <table class="cstudioTableLayout" data-smart-table="true" data-smart-table-style="altrowstable">
                      <tr bgcolor="#d7deee">
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                      </tr>
                      <tr class="odd">
                        <td >content</td>
                        <td >content</td>
                        <td >content</td>
                      </tr>
                      <tr class="even">
                        <td class="eddrowcolor">content</td>
                        <td class="eddrowcolor">content</td>
                        <td class="eddrowcolor">content</td>
                      </tr>
                      <tr class="odd">
                        <td >content</td>
                        <td >content</td>
                        <td >content</td>
                      </tr>
                   </table>
                ]]>
             </prototype>
          </table>
       </rteTables>

   |

#. Define the style script associated to the table.  Inside of the tag ``rteTablestyles`` add the following, if the tag doesn't exist, create it

   .. code-block:: xml

       <style-name>
          <![CDATA[
             /* some script */
          ]]>
       </style-name>

   |

   Here's an example:

   .. code-block:: xml
       :linenos:

       <rteTablestyles>
       <!--Simple script to set the corresponding class to each row-->
          <altrowstable><![CDATA[
             var rows = currentTable.rows;
             var row = null;
             for (i = 0; i < rows.length; i++) {
                row = rows[i];
                if(i % 2 != 0){
                   dom.removeClass(row,"even");
                   dom.addClass(row,"odd");
                }else{
                   dom.removeClass(row,"odd");
                   dom.addClass(row,"even");
                }
             }]]>
          </altrowstable>
       </rteTablestyles>

   |

   Notice the classes we are using in the script, add the classes to your style sheet.  Here's an example:

   .. code-block:: xml

       .odd{
          background-color:#d4e3e5;
       }
       .even{
          background-color:#c3dde0;
       }

   |

   Make sure you are calling the style sheet to your RTE

   .. code-block:: xml

      <rteStylesheets>
         <link>
            <loadFromPreview>true</loadFromPreview>
            <url>/static-assets/css/main.css</url>
         </link>
         ....
      </rteStylesheets>

   |

   Or declaring the styles as override

   .. code-block:: xml

      <rteStyleOverride>
         .odd{
             background-color:#d4e3e5;
         }
         .even{
             background-color:#c3dde0;
         }
         ...
      </rteStyleOverride>


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
                .layoutColumn { border: 1px solid gray; float: left; width: 50%}
                .layoutColumn3 { border: 1px solid gray; float: left; width: 33.33%}
                .layoutColumn4 { border: 1px solid gray; float: left; width: 25%}

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
    :width: 60%

|

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
    * ``<toolbarItems1>`` and similar contain the toolbar buttons in the RTE. You can specify any plugin as named in `Tiny MCE Plugins List <https://www.tinymce.com/docs/plugins/>`_.  We have provided :ref:`above<tiny-mce-plugins>` a list of plugins.  They will be featured in the same order as specified here, and separators can be specified with ``|``.
    * ``<rteModules>`` is used to specify which external plugins to include, the list of which is available in `Crafter Studio's Git repo <https://github.com/craftercms/studio2-ui/tree/master/static-assets/components/cstudio-forms/controls/rte-plugins>`_.

For example, to use the ``edit-html`` editor, you'll have to add ``<module>edit-html</module>`` to ``<rteModules>`` and place ``edithtml`` somewhere in a toolbar ``<toolbarItems1>`` similar to this ``link,unlink,anchor,|,edithtml,|,undo,redo</toolbarItems1>``


------------------------------------------
Attaching an RTE in a Form to an RTE Setup
------------------------------------------

To attach an RTE setup to an RTE in a form, open the content type that you want to add an RTE to, then go to the **Properties Explorer** and click on RTE Configuration and type in an RTE setup name.

.. figure:: /_static/images/rte-setup-form.png
    :alt: RTE Setup - Add an RTE in the Form
	:align: center

|

In the image below, the RTE setup name used is **generic**.  Please see the section above on how to create an RTE Setup, where the example shows an RTE Setup named **generic**.

.. figure:: /_static/images/rte-setup-attach-config.png
    :alt: RTE Setup - Attach an RTE in a Form to an RTE Setup
	:align: center

