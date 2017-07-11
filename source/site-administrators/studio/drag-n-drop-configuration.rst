.. highlight:: xml

===========================
Drag and Drop Configuration
===========================

The drag and drop configuration file defines the categories and their corresponding components for the drag and drop panel.

To find this configuration xml through studio follow the next instructions:

#. Click on **Site Config** located in the **Sidebar**.
#. Choose **Configuration** from the menu.
#. Select **Preview Components Configuration**.

.. image:: /_static/images/site-admin/dnd-configuration.png

------
Sample
------

.. code-block:: xml
    :caption: {REPOSITORY_ROOT}/sites/SITENAME/config/studio/preview-tools/components-config.xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
	<!--
	    This file configures the drag-and-drop components available in the Preview Tools. Those components can then
	    be dragged and dropped on a drop-zone within a page.

	    The structure of this file is:

	    <config>
	        <category> (list of components that can be created on the fly during the drag and drop)
	            <label />
	            <component>
	                <label />
	                <type /> (reference content type of the component)
	                <path /> (where to store these components)
	            </component>
	        </category>
	        <browse> (list of browse paths of where to find ready components to be dragged/dropped)
	            <label />
	            <path /> (where to look for)
	        </browse>
	    </config>
	-->
	<config>
	    <category>
	        <label>General</label>
	        <component>
	            <label>Feature</label>
	            <type>/component/feature</type>
	            <path>/site/components/features</path>
	        </component>
	    </category>
	    <browse>
	        <label>Features</label>
	        <path>/site/components/features</path>
	    </browse>
	</config>

-----------
Description
-----------

^^^^^^^^
Category
^^^^^^^^

List of available category tags

+-----------------+------------------------------------------------------------------------------+
|| Tag            || Description                                                                 |
+=================+==============================================================================+
|| Category       || This tag contains each category of the panel. See #1 in the image below.    |
+-----------------+------------------------------------------------------------------------------+
|| Label          || Each ``<category>`` element must contain a <label> element that specifies   |
||                || the category name. See #2 in the image below.                               |
+-----------------+------------------------------------------------------------------------------+
|| Component      || This tag refers to the component which the user can drag and drop into the  |
||                || preview page selected. See #3 in the image below.                           |
+-----------------+------------------------------------------------------------------------------+
|| Label          || Each ``<component>`` element must contain a <label> element that specifies  |
||                || the component name. See #4 in the image below.                              |
+-----------------+------------------------------------------------------------------------------+
|| Type           || Content-Type assigned to create the new component.                          |
+-----------------+------------------------------------------------------------------------------+
|| Path           || Path where the new component will be created.                               |
+-----------------+------------------------------------------------------------------------------+


.. image:: /_static/images/site-admin/dnd-config1.png
		:align: center
		:scale: 50 %
		:width: 800 px
		:alt: DnD Panel

^^^^^^
Browse
^^^^^^

The Browse functionality is useful when the user wants to drag and drop an existing component.

List of available browse tags

+---------------+--------------------------------------------------------------------------------+
|| Tag          || Description                                                                   |
+===============+================================================================================+
|| Browse       || This tag contains each browse section in the panel. See #1 in the image below.|
+---------------+--------------------------------------------------------------------------------+
|| Label        || Each ``<browse>`` element must contain a <label> element that specifies the   |
||              || browse label to display in the panel. See #2 in the image below.              |
+---------------+--------------------------------------------------------------------------------+
|| Path         || Path where the user will select the component to drag and drop into the       |
||              || preview page selected.                                                        |
+---------------+--------------------------------------------------------------------------------+


.. image:: /_static/images/site-admin/dnd-config2.png
		:align: center
		:scale: 50 %
		:width: 800 px
		:alt: DnD Panel
