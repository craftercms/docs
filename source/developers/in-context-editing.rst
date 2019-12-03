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
The macro ``<@studio.iceAttr/>`` adds a pencil to open a form for the path

<@studio.iceAttr/> Tag Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
+----------------+------------------------------------+-------------------------------------------+
| Attribute Name | Required                           | Expected Value                            |
+================+====================================+===========================================+
|| iceGroup      || No (unless path is not supplied)  || the label/id assigned to iceGroup on     |
||               ||                                   || fields in your content model.            |
+----------------+------------------------------------+-------------------------------------------+
|| path          || No                                || the path of the item. This is typically  |
||               || (unless iceGroup is not supplied) || just mode.storeUrl.                      |
||               ||                                   ||                                          |
||               ||                                   || If path is not supplied the system       |
||               ||                                   || will assume the outermost object e.g.    |
||               ||                                   || the page as the path.                    |
+----------------+------------------------------------+-------------------------------------------+
|| label         || No (but it's a best practice)     || UI will use label if it exists. Otherwise|
||               ||                                   || the iceGroup or path will be used.       |
+----------------+------------------------------------+-------------------------------------------+
|| component     || No                                || a |SiteItem| object                      |
+----------------+------------------------------------+-------------------------------------------+

|

^^^^^^^^^^^^^^^^^^^
Drag and Drop Zones
^^^^^^^^^^^^^^^^^^^
The macro ``<@studio.componentContainerAttr/>`` defines a drop zone for components

<@studio.componentContainerAttr/> Tag Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
+----------------+------------------------------+------------------------------------------------+
| Attribute Name | Required                     | Expected Value                                 |
+================+==============================+================================================+
|| target        || Yes                         || The name of the field in the parent model     |
||               ||                             || where component references will be stored.    |
||               ||                             ||                                               |
||               ||                             || This is typically an item selector field type.|
+----------------+------------------------------+------------------------------------------------+
|| component     || Yes                         || a |SiteItem| object                           |
+----------------+------------------------------+------------------------------------------------+

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Rendering components from the target inside the container
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The macro ``<@renderComponent/>`` renders components

<@renderComponent/> Tag Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
+----------------+------------------------------+------------------------------------------------+
| Attribute Name | Required                     | Expected Value                                 |
+================+==============================+================================================+
|| parent        || No                          || a |SiteItem| object                           |
||               ||                             || Required if the component to be rendered is   |
||               ||                             || not the current item                          |
+----------------+------------------------------+------------------------------------------------+
|| component     || Yes                         || a |SiteItem| object                           |
+----------------+------------------------------+------------------------------------------------+

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Identifying components in the template
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The macro ``<@studio.componentAttr/>`` identifies a component

<@studio.componentAttr/> Tag Attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
+----------------+------------------------------+-------------------------------------------------+
| Attribute Name | Required                     | Expected Value                                  |
+================+==============================+=================================================+
|| path          || Yes                         || the path to the component. Typically this is   |
||               ||                             || simply contentModel.storeUrl                   |
+----------------+------------------------------+-------------------------------------------------+
|| ice           || No                          || true or false. If true the component will      |
||               ||                             || automatically render ICE (in context editing)  |
||               ||                             || controls for you. This is helpful on simple    |
||               ||                             || components. Larger components may be so complex|
||               ||                             || that multiple ice elements make sense. In the  |
||               ||                             || latter case omit this attribute or set it to   |
||               ||                             || false and manually add your own ICE attributes |
||               ||                             || to the component template                      |
+----------------+------------------------------+-------------------------------------------------+
|| iceGroup      || No (unless path is not      || the label/id assigned to iceGroup on           |
||               || supplied)                   || fields in your content model.                  |
+----------------+------------------------------+-------------------------------------------------+
|| component     || No                          || a |SiteItem| object                            |
+----------------+------------------------------+-------------------------------------------------+

Take a look at :ref:`in-context-editing-ftl` for more details and examples on how to use the tag attributes for enabling in-context editing in Freemarker templates.


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

^^^^^^^^^^
Drop Zones
^^^^^^^^^^
The following attributes identifies an element as a drop zone.

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


