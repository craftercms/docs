.. highlight:: xml

===========================
Drag and Drop Configuration
===========================

Drag and Drop configuration file defines the categories and their corresponding components for the drag and drop panel.

To find this configuration xml through studio follow the next instructions:

#. Click on Console Admin located in the Site Content.
#. Choose Configuration from the menu.
#. Select Preview Components Configurations.

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

.. todo:: Description

.. todo:: Browse Functionality


