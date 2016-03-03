================
Content Modeling
================

Every content object in Crafter CMS is an object associated with a Content Model. Content Models allow you to add structure to your content and facilitate consumption via various visual representations or via APIs. One of the great things about Crafter CMS content models is that your content can be semi-structured which allows content authors the freedom to be as creative as they'd like to be, but provide the template/UI and API developers enough structure to produce solid multi-channel renditions of the content. This section will walk you through Content Type management in Crafter Studio to help you create the models that best fit your requirements.

-------------------------------
Content Types in Crafter Studio
-------------------------------

Content Type Management in Crafter Studio is located in the Admin Console.

.. image:: /_static/images/admin-console-link.png
	:height: 200px
	:width: 400 px
	:scale: 50 %
	:alt: Admin Console Link
	:align: right

Content Types are limited to two core types: Pages and Components. Both are made up of three ingredients:
# Model: The content pieces that will be captured from the content authors for the page or component
# View: The view template that will render the content, typically to HTML markup
# Controller: The controller that handles the incoming request for the page or component

^^^^^
Pages
^^^^^

Pages are top-level container types. Pages hold content, and optionally components. Content within pages is made up of various types, for example content can be a date, an image, or a rich text field.

^^^^^^^^^^
Components
^^^^^^^^^^

Components only differ from pages in that they can't render by themselves, instead, they must render within a container page or another component.

-----------------------------
Content Type Model Definition
-----------------------------
Content models are defined via Crafter Studio's graphical modeling tool under Content Types:

.. image:: /_static/images/content-type-management.png
	:height: 200px
	:width: 400 px
	:scale: 50 %
	:alt: Admin Console Link
	:align: right

You can now either create a new content type or open an existing type. Creating a new content type brings up a dialog that requests some basic content type information.

.. image:: /_static/images/create-content-type-1.png
	:height: 200px
	:width: 400 px
	:scale: 50 %
	:alt: Admin Console Link
	:align: right

You now specify:

* Display Label: The name of your new content type as you'll see it in Crafter Studio.
* Content Type Name: The low-level system name of your content type, this field will be automatically generated for you. Modify this only if you know what you're doing.
* Type: Choose if you're defining a Page or a Component.

.. note:: Content Type Name will be removed in a future release in favor of full automation of name generation with collision resolution mechanics.

^^^^^^^^^^^^^^^^^^^
Form Builder Basics
^^^^^^^^^^^^^^^^^^^

.. figure:: /_static/images/create-content-type-2.png
	:height: 900px
	:width: 900 px
	:scale: 100 %
	:alt: Content Type Editor
	:align: left

	Crafter Studio's Form Builder

	+-------+------------------------------------------------------------------------------------------------+
	| Label | Description                                                                                    |
	+=======+================================================================================================+
	| 1     | | Content Type Actions: Open Existing Content Type or Create a New Type.                       |
	+-------+------------------------------------------------------------------------------------------------+
	| 2     | | Form Builder: The begining of the form builder and it's headed by the name of currently open |
	|       | | Content Type. Click here to explore the global properties of the type in the Properties      |
	|       | | Explorer, #3.                                                                                |
	+-------+------------------------------------------------------------------------------------------------+
	| 3     | | Properties Explorer: Helps configure the properties of the currently selected item.          |
	|       | | Clicking on an item on the left side of the screen, like #2 or #7 will populate this control |
	|       | | and allow you to modify the selected item.                                                   |
	+-------+------------------------------------------------------------------------------------------------+
	| 4     | | Form Controls: This is a list of available form controls for you to build your form with.    |
	|       | | Note that the list has a scrollbar for many types of useful controls. Controls can be        |
	|       | | dragged from the controls list onto the form builder.                                        |
	+-------+------------------------------------------------------------------------------------------------+
	| 5     | | Data Sources: Shows the list of available data sources that can be attached to this content  |
	|       | | type such that the content authors can pull content and incorporate it into pages or         |
	|       | | components. Data Sources can be dragged over to the form builder and configured as needed.   |
	|       | | The content author will then use the control to pull data from that data source into the     |
	|       | | content object.                                                                              |
	+-------+------------------------------------------------------------------------------------------------+
	| 6     | | Form Section: Form sections help cluster a number of controls together to make it easier for |
	|       | | content authors. Click on the form section to edit its properties in the Properties Explorer.|
	+-------+------------------------------------------------------------------------------------------------+
	| 7     | | Form Canvas: Actual controls that have been placed on this form. Clicking on a control will  |
	|       | | allow you to configure this control in the Properties Explorer.                              |
	+-------+------------------------------------------------------------------------------------------------+
	| 8     | | Data Source: The data sources configured for this content type. To configure a data source,  |
	|       | | click on it and then edit the properties in the Properties Explorer.                         |
	+-------+------------------------------------------------------------------------------------------------+
	| 9     | | Save or Cancel the changes to the Content Type.                                              |
	+-------+------------------------------------------------------------------------------------------------+

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Properties of Content Types
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Let's select the content type itself, by clicking on the content type name at the top of the Form Builder and explore its properties.

.. figure:: /_static/images/create-content-type-3.png
	:height: 400px
	:width: 400 px
	:scale: 100 %
	:alt: Properties Explorer
	:align: left

	The fields available at this level are:

	+-------------------+------------------------------------------------------------------------------------+
	| Field             | Description                                                                        |
	+===================+====================================================================================+
	| Title             | | Content Type's friendly name                                                     |
	+-------------------+------------------------------------------------------------------------------------+
	| Description       | | Description of the Content Type                                                  |
	+-------------------+------------------------------------------------------------------------------------+
	| Object Type       | | Page or Component (read only)                                                    |
	+-------------------+------------------------------------------------------------------------------------+
	| Content Type      | |  System name and path of this content type (read only)                           |
	+-------------------+------------------------------------------------------------------------------------+
	| Display Template  | | View template to use when rendering this content                                 |
	+-------------------+------------------------------------------------------------------------------------+
	| Merge Strategy    | | The inheritance pattern to use with content of this type, please see Content     |
	|                   | | Inheritance for more detail on this feature :ref:`content-inheritance`.          |
	+-------------------+------------------------------------------------------------------------------------+

The 2 key properties are: the display template (:ref:`content-view-templates`) which is the HTML template that renders the final Web page; the content inheritance (:ref:`content-inheritance`) which determines how this content type will inherit from parent XML files in the system.

^^^^^^^^^^^^^
Form Controls
^^^^^^^^^^^^^

Form Controls are data input controls that, once placed on a form, will capture that input from the content authors and store it in the content object. Crafter CMS ships with a number of out-of-the-box controls and you can also create your own by reading :ref:`form-engine-control`.

.. figure:: /_static/images/form-engine-controls.png
	:height: 400px
	:width: 400 px
	:scale: 100 %
	:alt: Form Engine Controls
	:align: left

	Form Engine Controls (please use the scrollbar to see more controls)

	+-------------------+------------------------------------------------------------------------------------+
	| Control           | Description                                                                        |
	+===================+====================================================================================+
	| Form Section      | | Create a new section in the form, this is to help the content authors by         |
	|                   | | by segmenting a form into sections of similar concern.                           |
	+-------------------+------------------------------------------------------------------------------------+
	| Repeating Group   | | Repeating groups are used when the form has one or several controls that repeat  |
	|                   | | to capture the same data as records. For example: a list of images in a carousel,|
	|                   | | or a list of widgets on a page.                                                  |
	+-------------------+------------------------------------------------------------------------------------+
	| Input             | | A simple textual input line.                                                     |
	+-------------------+------------------------------------------------------------------------------------+
	| Text Area         | | A simple block of plain text.                                                    |
	+-------------------+------------------------------------------------------------------------------------+
	| Rich Text Editor  | | A block of HTML.                                                                 |
	+-------------------+------------------------------------------------------------------------------------+
	| Dropdown          | |                                                                                  |
	+-------------------+------------------------------------------------------------------------------------+
	| Date/Time         | |                                                                                  |
	+-------------------+------------------------------------------------------------------------------------+
	|                   | |                                                                                  |
	+-------------------+------------------------------------------------------------------------------------+
	|                   | |                                                                                  |
	+-------------------+------------------------------------------------------------------------------------+
	|                   | |                                                                                  |
	+-------------------+------------------------------------------------------------------------------------+
	|                   | |                                                                                  |
	+-------------------+------------------------------------------------------------------------------------+
	|                   | |                                                                                  |
	+-------------------+------------------------------------------------------------------------------------+
	|                   | |                                                                                  |
	+-------------------+------------------------------------------------------------------------------------+


^^^^^^^^^^^^
Data Sources
^^^^^^^^^^^^


^^^^^^^^^^^
Form Canvas
^^^^^^^^^^^

The canvas is where the form actually gets built. The building process is perfomed by simply dragging the controls from the Form Controls over to the canvas, rearranging the controls in the order you'd like to present to the content authors, and configure the controls individually.





.. _content-view-templates:

---------------------------
Content Type View Templates
---------------------------

----------------------------------
Content Type Controller Definition
----------------------------------
