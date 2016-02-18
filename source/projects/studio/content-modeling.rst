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

Pages
=====

Pages are top-level container types. Pages hold content, and optionally components. Content within pages is made up of various types, for example content can be a date, an image, or a rich text field.

Components
==========

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

The next screen shows the form builder:

.. image:: /_static/images/create-content-type-2.png
	:height: 800px
	:width: 800 px
	:scale: 75 %
	:alt: Content Type Editor
	:align: center

Let's start by exploring the various controls on this screen:

1. Open Existing Content Type or Create a New Type

2. The begining of the formm builder and it's headed by the name of currently open Content Type. Click here to explore the global properties of the type in the Properties Explorer, #3.
3. Properties Explorer helps configure the properties of the currently selected item. Clicking on an item on the left side of the screen, like #2 or #7 will populate this control and allow you to modify the selected item.

4. This is a list of available form controls for you to build your form with. Note that the list has a scrollbar for many types of useful controls. Controls can be dragged from the controls list onto the form builder.




---------------------------
Content Type View Templates
---------------------------

----------------------------------
Content Type Controller Definition
----------------------------------
