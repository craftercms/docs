:is-up-to-date: True

.. index:: In-Context Editing

.. _in-context-editing:

==================
In-Context Editing
==================

.. |SiteItem| replace:: :javadoc_base_url:`SiteItem <engine/org/craftercms/engine/model/SiteItem.html>`

In-context editing (ICE) allows authors to edit/update content in place through editable regions.  This makes it easier for the content authors to find and edit their content.

Crafter Studio supports enabling in-context editing for content authors through macros/tag attributes for freemarker templates and HTML5 attributes for HTML5 applications.


---------------------------------------------------
Enabling In-Context Editing in Freemarker Templates
---------------------------------------------------

Here's a summary of macros and corresponding tag attributes used for enabling in-context editing in freemarker templates

^^^^^^^^^^^^^^^^^^^^^^^^^^
In-context Editing Pencils
^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter provides macros for enabling in-context editing pencils.  The macro ``<@crafter.ELEMENT/>`` adds all the necessary markup to the tag for the in-context editing engine to pick up the field and allow authors to edit inline, and such, like so:

<@crafter.ELEMENT $model=MODEL $field=CONTENT_TYPE_FIELD $index=INDEX [$label=YOUR_LABEL]>

where: ELEMENT is the macro name which corresponds to most of the HTML elements.

<@crafter.ELEMENT/> Tag Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table:: Macros for enabling in-context editing pencils
   :widths: 20 30 50
   :header-rows: 1

   * - Attribute Name
     - Required
     - Expected Value
   * - model
     - No (defaulted to the active ``contentModel`` and not required in most cases)
     - The model
   * - field
     - Yes
     - The id of the field on the content type
   * - index
     - Must be specified when working with collections, namely item selectors or repeat groups
     - The index
   * - label
     - No (but it's a best practice)
     - The system tooltip will show this custom label instead of the default one which is the name of the field in the content type definition

See :ref:`in-context-editing-pencils` for a list of available macros used for enabling in-context editing

.. _rendering-components-ice:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Rendering components from the target inside the container
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The macro ``<@renderComponentCollection/>`` and ``<@renderRepeatCollection/>`` renders components

<@renderComponentCollection/> Tag Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table:: <@renderComponentCollection/> Tag Attributes
   :widths: 20 30 50
   :header-rows: 1

   * - Attribute Name
     - Required
     - Expected Value
   * - field
     - Yes
     - The id of the field on the content type
   * - tag
     - No (defaulted to ``div`` and not required in most cases)
     - Tag for the collection
   * - itemTag
     - No (defaulted to ``div`` and not required in most cases)
     - Tag for item in collection
   * - model
     - No (defaulted to the active ``contentModel`` and not required in most cases)
     - The model
   * - attrs
     - No
     - Component collection attributes
   * - itemAttrs
     - No
     - Attributes of a component
   * - arguments
     - No
     - values passed to macro
   * - attrs
     - No
     - Additional attributes


<@renderRepeatCollection/> Tag Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table:: <@renderRepeatCollection/> Tag Attributes
   :widths: 20 30 50
   :header-rows: 1

   * - Attribute Name
     - Required
     - Expected Value
   * - field
     - Yes
     - The id of the field on the content type
   * - model
     - No (defaulted to the active ``contentModel`` and not required in most cases)
     - The model
   * - containerTag
     - No (defaulted to ``ul`` and not required in most cases)
     - Tag for the repeat collection
   * - containerAttributes
     - Yes
     - Attributes of container
   * - itemTag
     - No (defaulted to ``li`` and not required in most cases)
     - Tag for an item in the repeat collection
   * - itemAttributes
     - No
     - Attributes of an item in repeat collection

Take a look at :ref:`in-context-editing-ftl` for more details and examples on enabling in-context editing in Freemarker templates.


-------------------------------------------------
Enabling In-Context Editing in HTML5 Applications
-------------------------------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^^
In-context Editing Pencils
^^^^^^^^^^^^^^^^^^^^^^^^^^
The following attributes adds a pencil to open a form for the path (and ICE id combination if set):

+-------------------------------+---------------------+-------------------------------------------+
| Attribute Name                | Required            | Expected Value                            |
+===============================+=====================+===========================================+
|| data-studio-ice              ||                    || Marks the element as the container for   |
||                              ||                    || in-context editing. No value is required.|
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-ice-path         ||                    || Path of the content object.              |
||                              ||                    || Example: “/site/products/a-component.xml”|
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-ice-label        || No (but it's a best|| UI will use label if it exists. Otherwise|
||                              || practice)          || the path will be used.                   |
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-embedded-item-id || No (only required  || Object Id of embedded component          |
||                              || when component is  ||                                          |
||                              || of embedded type   ||                                          |
+-------------------------------+---------------------+-------------------------------------------+

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Identifying Drag n Drop Components
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following attributes identifies the outer div of a component:

+-------------------------------+---------------------+-------------------------------------------+
| Attribute Name                | Required            | Expected Value                            |
+===============================+=====================+===========================================+
|| data-studio-component        ||                    || Content type name.                       |
||                              ||                    || Example: “/component/product”            |
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-component-path   ||                    || Path of the content object.              |
||                              ||                    || Example: “/site/products/a-component.xml”|
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-embedded-item-id || No (only required  || Object Id of embedded component          |
||                              || when component is  ||                                          |
||                              || of embedded type   ||                                          |
+-------------------------------+---------------------+-------------------------------------------+

|

.. _identifying-drag-n-drop-with-pencil:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Identifying Drag n Drop Components with a Pencil
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following attributes identifies the outer div of a component and adds a pencil to open a form for the path (and ICE id combination if set)

+-------------------------------+---------------------+-------------------------------------------+
| Attribute Name                | Required            | Expected Value                            |
+===============================+=====================+===========================================+
|| data-studio-ice              ||                    || Marks the element as the container for   |
||                              ||                    || in-context editing. No value is required.|
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-ice-path         ||                    || Path of the content object.              |
||                              ||                    || Example: “/site/products/a-component.xml”|
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-ice-label        || No (but it's a best|| UI will use label if it exists. Otherwise|
||                              || practice)          || the path will be used.                   |
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-component        ||                    || Content type name.                       |
||                              ||                    || Example: “/component/product”            |
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-component-path   ||                    || Path of the content object.              |
||                              ||                    || Example: “/site/products/a-component.xml”|
+-------------------------------+---------------------+-------------------------------------------+
|| data-studio-embedded-item-id || No (only required  || Object Id of embedded component          |
||                              || when component is  ||                                          |
||                              || of embedded type   ||                                          |
+-------------------------------+---------------------+-------------------------------------------+

|

^^^^^^^^^^^
Drop Target
^^^^^^^^^^^
The following attributes identifies an element as a drop target.

+---------------------------------+---------------------+-------------------------------------------+
| Attribute Name                  | Required            | Expected Value                            |
+=================================+=====================+===========================================+
|| data-studio-components-target  || Yes                || The name of the field in the parent model|
||                                ||                    || where component references will be stored|
||                                ||                    ||                                          |
||                                ||                    || This is typically an                     |
||                                ||                    || item selector field type.                |
+---------------------------------+---------------------+-------------------------------------------+
|| data-studio-components-objectid||                    || a |SiteItem| object                      |
+---------------------------------+---------------------+-------------------------------------------+
|| data-studio-zone-content-type  ||                    || Content type id/path of the component.   |
||                                ||                    || Example: “/component/product”            |
+---------------------------------+---------------------+-------------------------------------------+

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Some Notes on HTML5 Applications In-Context Editing Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* You can (and typically do) combine drag and drop component attributes and pencils attributes in the same tag, as described :ref:`here <identifying-drag-n-drop-with-pencil>`
* You **cannot** combine drop zone attributes with ICE or drag n drop component attributes. They must be in their own tag.


