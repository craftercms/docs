==========================================
Adding Crafter Studio Support to Templates
==========================================

--------------
Studio Support
--------------

Studio support adds authoring tools to your template.  It's important to understand that these macros ONLY RENDER IN PREVIEW and DO NOT add additional structure to your markup.  A minimal amount of Javascript/css is injected in to your page to facilitate editing tool integration with your page.  

The previous template markup for Studio support still works however the new markup generates cleaner code and exposes new features.

--------------------------
Enabling Authoring Support
--------------------------

At the top of your page or component (whatever it is you are rendering, include the following) import:

.. code-block:: html

	<#import "/templates/system/common/cstudio-support.ftl" as studio/>

At the bottom of your template insert the following: (Note the example shows a traditional HTML page however other formats/levels of granularity are supported

.. code-block:: html

			<@studio.toolSupport/>
		</body>
	</html>

------------------
In-context Editing
------------------

In context editing renders pencils on the screen that invoke editing controls when clicked.  This allows authors to quickly/visually identify editable content and make changes.

.. image:: /_static/images/ice-example.png

To enable in-context editing simply add the following attribute to the container/element where you want to place the editing control

.. code-block:: html

	<@studio.iceAttr iceGroup="author"/>

Tag Attributes
--------------

+----------------+--------------------------------------+------------------------------------------------+
| Attribute Name | Required                             | Expected Value                                 |
+================+======================================+================================================+
| iceGroup       | No (unless path is not supplied)     | the label/id assigned to iceGroup on fields    |
|                |                                      | in your content model.                         |
+----------------+--------------------------------------+------------------------------------------------+
| path           | No (unless iceGroup is not supplied) | the path of the item. This is typically just   |
|                |                                      | mode.storeUrl.                                 |
|                |                                      |                                                |
|                |                                      | If path is not supplied the                    |
|                |                                      | system will assume the outermost object e.g.   |
|                |                                      | the page as the path.                          |
+----------------+--------------------------------------+------------------------------------------------+

Example: 

.. code-block:: html

	<img <@studio.iceAttr iceGroup="image" /> src="${model.image!""}" alt="${model.alttext!""}"/>``

----------------------------
Component Drag and Drop Zone
----------------------------

Drag and drop makes it easy for authors to visually assemble pages.  Authors simply choose a component from a pre-defined list of components/widgets, drag them on to the screen, place them where they want (in defined drop zones, and then configure them.  Authors may also move components from one zone to another or remove components.

.. image:: /_static/images/dropzone.png

To define a drop zone for components simply add the following attribute to the container element where you want your components to render

.. code-block:: html

	<@studio.componentContainerAttr target="bottomPromos" />

Tag Attributes
--------------

+----------------+--------------------------------------+------------------------------------------------+
| Attribute Name | Required                             | Expected Value                                 |
+================+======================================+================================================+
| target         | Yes                                  | The name of the field in the parent model      |
|                |                                      | where component references will be stored.     |
|                |                                      |                                                |
|                |                                      | This is typically an item selector field type. |
+----------------+--------------------------------------+------------------------------------------------+

Example:

.. code-block:: html

	<div class="span4 mb10" <@studio.componentContainerAttr target="bottomPromos" /> >
		...
	<div> 

Rendering components from the target inside the container
---------------------------------------------------------

The template needs to render the components that are referenced. The basic code to do this looks like:

.. code-block:: html

	<#if model.bottomPromos?? && model.bottomPromos.item??>
		<#list model.bottomPromos1.item as module>
			<@renderComponent component=module />
		</#list>
	</#if>

Note that the code is simply iterating over the collection of objects and calling render component.  NO markup is being inserted in this example.  The component template is rendering itself.  It's up to you if you want to insert markup around sub-components.
Full example of typical component drop zone

.. code-block:: html

	<div class="span4 mb10" <@studio.componentContainerAttr target="bottomPromos" /> >
		<#if model.bottomPromos?? && model.bottomPromos.item??>
			<#list model.bottomPromos.item as module>
				<@renderComponent component=module />
			</#list>
		</#if>
	</div>

Identifying components in the template
--------------------------------------

In order for authors to interact with components, to drag them around the screen for example the templating system must know how to identify them.  To identify a component simply add the following attribute to the outer most element in the component template's markup

.. code-block:: html

	<@studio.componentAttr path=model.storeUrl />

Tag Attributes
--------------

+----------------+--------------------------------------+------------------------------------------------+
| Attribute Name | Required                             | Expected Value                                 |
+================+======================================+================================================+
| path           | Yes                                  | the path to the component. Typically this is   |
|                |                                      | simply model.storeUrl                          |
+----------------+--------------------------------------+------------------------------------------------+
| ice            | No                                   | true or false. If true the component will      |
|                |                                      | automatically render ICE (in context editing)  |
|                |                                      | controls for you. This is helpful on simple    |
|                |                                      | components. Larger components may be so complex|
|                |                                      | that multiple ice elements make sense. In the  |
|                |                                      | latter case omit this attribute or set it to   |
|                |                                      | false and manually add your own ICE attributes |
|                |                                      | to the component template                      |
+----------------+--------------------------------------+------------------------------------------------+

Example

.. code-block:: html

	<img <@studio.componentAttr path=model.storeUrl ice=true /> src="${model.image!""}" alt="${model.alttext!""}" />

--------------
Engine Support
--------------

At the top of your page or component (whatever it is you are rendering, include the following) import:

.. code-block:: html

	<#import "/templates/system/common/crafter-support.ftl" as crafter/>

Components
----------

Render Component
----------------

Need to render a sub component of some kind? 

.. code-block:: html

	<@renderComponent component=module />

Render Components
-----------------

Need to iterate through a list of components and render them WITHOUT any additional markup?


.. code-block:: html

	<@crafter.renderComponents componentList=model.bottomPromos />

Render RTE (Rich Text Editor Components)
----------------------------------------

Have components that are inserted in to the rich text editor and need to render them?

.. code-block:: html

	<@crafter.renderRTEComponents />
