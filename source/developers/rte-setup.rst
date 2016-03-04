============================
Rich Text Editor (RTE) Setup 
============================

RTEs are more effective/productive for athors  when they are configured properly for the specific type of content the author is managing.  A properly effectively configured RTE has the right styles, menu options and so on.
Every RTE in the system can have a differnt look  and feel, differnt editing/menu options, available styles, components and other configurations.  You can also SHARE setups between similar RTEs in your project.  This document will help you understand how to configure RTE's in Crafter Studio

----------------------------------------
Common Configurations for Effective RTEs
----------------------------------------

#. The rich text editor's width should be set to the same width as the region it is intendd to edit
#. Site style sheet is imported
#. Site stles are being applied appropriately to the markup in the RTE.  Not that sometimes styles in CSS are so aggressively specified that the RTE cannot pick them up.
#. Formats and styles are configure to match the part of the site being edited
#. Toolbar is configured with only what is required for th specific use case (reducing options makes it easier for editors)
#. If plugins like insert component, insert smart table and so on are enabled the should be fully configured.

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
| HTML Code      | | Adds syntax highligted HTML code editing  | TODO LINK       |
| Editor         | | to Crafter Studio.                        |                 |
|                | | (Replaces out of the box code plugin)     |                 |
+----------------+---------------------------------------------+-----------------+
| Channel        | | Give the user a dropdown of channels.     | TODO LINK       |
| Selector       | | Changes the RTE size and Style Sheets to  |                 |
|                | | match the given channel.                  |                 |
+----------------+---------------------------------------------+-----------------+
| Insert Image   | | Enable the user to insert and image from  |                 |
|                | | 1 or more datasources.                    | TODO LINK       |
|                | | (Replaces out of the box image plugin)    |                 |
+----------------+---------------------------------------------+-----------------+
| Edit Image     | | todo                                      | TODO LINK       |
|                | |                                           |                 |
+----------------+---------------------------------------------+-----------------+
| Insert Linked  | | Enable user to browse for and insert a    | TODO LINK       |
|                | | link for an object in                     |                 |
| CMS Object     | | the CMS.                                  |                 |
+----------------+---------------------------------------------+-----------------+
| Insert         | | Enable user to insert full fledged        | TODO LINK       |
| Component      | | Crafter component in to RTE.              |                 |
+----------------+---------------------------------------------+-----------------+
| Insert HTML    | | Enable the user to insert canned markup   | TODO LINK       |
|                | | in to the RTE. This is useful when a      |                 |
| Stub           | | component is too heavy weight.            |                 |
+----------------+---------------------------------------------+-----------------+
| Insert Layout  | | Allows user to insert markup designed to  | TODO LINK       |
|                | | act as a layout in to the RTE.            |                 |
+----------------+---------------------------------------------+-----------------+
| Insert Smart   | | Allows user to insert table markup that   | TODO LINK       |
| Table          | | holds its styles as rows and columns are  |                 |
|                | | added.                                    |                 |
+----------------+---------------------------------------------+-----------------+


-----------------------------------------------------------------
RTE Specific Configurations vs RTE Setups (Shared Configurations)
-----------------------------------------------------------------

.. todo:: EXPLAIN control properties vs leveraging shared configuration

-----------------------------------------
Attaching a RTE in a Form to an RTE Setup
-----------------------------------------

.. todo:: EXPLAIN

---------------------
Creating an RTE Setup
---------------------

.. todo:: EXPLAIN EXPLAIN XML FILE


.. todo:: EXPLAIN EXAMPLES!


