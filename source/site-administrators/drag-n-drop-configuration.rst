.. highlight:: xml

===========================
Drag and Drop Configuration
===========================

Drag and Drop configuration file defines the categories and their corresponding components for the drag and drop panel.

To find this configuration xml through studio follow the next instructions:

#. Click on Console Admin located in the Site Content.
#. Choose Configuration from the menu.
#. Select "Preview Components Configuration".

.. image:: /_static/images/dnd-configuration.png

------
Sample
------

.. code-block:: xml
    :caption: /cstudio/config/sites/SITENAME/preview-tools/components-config.xml

    <config>
	   <category>
	      <label>General</label>
	      <component>
	                <label>Rich Text Section</label>
	                <type>/component/rich-text-section</type>
	                <path>/site/components/page</path>
	      </component>
	      <component>
	                <label>Rich Text Section 2</label>
	                <type>/component/rich-text-section</type>
	                <path>/site/components/page</path>
	      </component>
	   </category>
	   <category>
	      <label>Targeted</label>
	      <component>
	                <label>Nearest Office Location</label>
	                <type>/component/closest-store</type>
	                <path>/site/components/page/closest-store</path>
	      </component>
	      <component>
	                <label>Suggested Services</label>
	                <type>/component/rich-text-section</type>
	                <path>/site/components/page</path>
	      </component>
		  <component>
	                <label>3 Col Drag and Drop</label>
	                <type>/component/three-col-drag-drop</type>
	                <path>/site/components/page/droptest</path>
	      </component>      
	   </category>
	   <browse>
	     <label>site components</label>
	     <path>/site/components</path>
	   </browse>
	   <browse>
	     <label>specific components</label>
	     <path>/site/components/page</path>
	   </browse>
	</config>

-----------
Description
-----------

^^^^^^^^
Category
^^^^^^^^

List of available category tags

=================== =========================================================================================================================
Tag                 Description
=================== =========================================================================================================================
Category            This tag contains each category of the panel. See #1 in the image above.
Label               Each ``<category>`` element must contain a <label> element that specifies the category name. See #2 in the image above.
Component           This tag refers to the component which the user can drag and drop into the preview page selected. See #3 in the image above.
Label               Each ``<component>`` element must contain a <label> element that specifies the component name. See #4 in the image above.
Type                Content-Type assigned to create the new component.
Path                Path where the new component will be created.
=================== =========================================================================================================================

.. image:: /_static/images/dnd-config1.png
		:align: center
		:scale: 50 %
		:width: 800 px
		:alt: DnD Panel

^^^^^^
Browse
^^^^^^

The Browse functionality is useful when the user wants to drag and drop an existing component.

List of available browse tags

=================== ============================================================================================================================================
Tag                 Description
=================== ============================================================================================================================================
Browse              This tag contains each browse of the panel. See #1 in the image above.
Label               Each ``<browse>`` element must contain a <label> element that specifies the browse label to display in the panel. See #2 in the image above.
Path                Path where the user will select the component to drag and drop into the preview page selected.
=================== ============================================================================================================================================

.. image:: /_static/images/dnd-config2.png
		:align: center
		:scale: 50 %
		:width: 800 px
		:alt: DnD Panel
