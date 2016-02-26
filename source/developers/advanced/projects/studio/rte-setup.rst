================
Rich Text Editor (RTE) Setup 
================
RTEs are more effective/productive for athors  when they are configured properly for the specific type of content the author is managing.  A properly effectively configured RTE has the right styles, menu options and so on.
Every RTE in the system can have a differnt look  and feel, differnt editing/menu options, available styles, components and other configurations.  You can also SHARE setups between similar RTEs in your project.  This document will help you understand how to configure RTE's in Crafter Studio

-------------------------------
Common configurations for effective RTEs
-------------------------------
#. The rich text editor's width should be set to the same width as the region it is intendd to edit
#. Site style sheet is imported
#. Site stles are being applied appropriately to the markup in the RTE.  Not that sometimes styles in CSS are so aggressively specified that the RTE cannot pick them up.
#. Formats and styles are configure to match the part of the site being edited
#. Toolbar is configured with only what is required for th specific use case (reducing options makes it easier for editors)
#. If plugins like insert component, insert smart table and so on are enabled the should be fully configured.

-------------------------------
What out of the box functionality does Crafter Studio's RTE support?
-------------------------------
Our RTE is based on TinyMCE (https://www.tinymce.com/) and can leverage all configurations and plugins designed for the TinyMCE editor.  You can find the documentation for these configurations and settings here: https://www.tinymce.com/docs/configure

Crafter Studio specific extensions
=====

+----------------------------+------------------------------------------------------------------+--------------+
| Attribute Name             | Description                                                      | Configure it |
+============================+======================================+===========================+==============+
| HTML Code Editor           | Adds syntax highligted HTML code editing to Crafter Studio.      |    TODO LINK |
|                            | (Replaces out of the box code plugin)                            |              |
+----------------------------+------------------------------------------------------------------+--------------+
| Channel Selector           | Give the user a dropdown of channels.  Changes the RTE size and  | TODO LINK    |
|                            | Style sheets to match the given channel.                         |              |
+----------------------------+------------------------------------------------------------------+--------------+
| Insert Image               | Enable the user to insert and image from 1 or more datasources.  |   TODO LINK  |
|                            | (Replaces out of the box image plugin)                           |              |
+----------------------------+------------------------------------------------------------------+--------------+
| Edit Image                 | DESCRIBE ME                                                      |   TODO LINK  |
|                            |                                                                  |              |
+----------------------------+------------------------------------------------------------------+--------------+
| Insert Linked CMS Object   | Enable user to browse for and insert a link for an object in the |   TODO LINK  |
|                            | CMS                                                              |              |
+----------------------------+------------------------------------------------------------------+--------------+
| Insert Component           | Enable user to insert full fledged Crafter component in to RTE   |   TODO LINK  |
|                            |                                                                  |              |
+----------------------------+------------------------------------------------------------------+--------------+
| Insert HTML Stub           | Enable the user to insert canned markup in to the RTE. This is   |   TODO LINK  |
|                            | useful when a component is too heavy weight.                     |              |
+----------------------------+------------------------------------------------------------------+--------------+
| Insert Layout              | Allows user to insert markup designed to act as a layout in to   |   TODO LINK  |
|                            | the RTE.                                                         |              |
+----------------------------+------------------------------------------------------------------+--------------+
| Insert Smart Table         | Allows user to insert table markup that holds its styles as rows |   TODO LINK  |
|                            | and columns are added.                                           |              |
+----------------------------+------------------------------------------------------------------+--------------+


---------------------------
RTE Specific configurations vs RTE Setups (Shared Configurations)
---------------------------
EXPLAIN control properties vs leveraging shared configuration

---------------------------
Attaching a RTE in a form to an RTE Setup
---------------------------
EXPLAIN

-----------------------------
Creating an RTE Setup
-----------------------------
EXPLAIN XML FILE

EXAMPLES!


