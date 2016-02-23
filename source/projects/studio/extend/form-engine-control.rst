===================
Form Engine Control
===================

-------------------------
Create a New Form Control
-------------------------

^^^^^^^^^^^^^^^^^
What is a Control
^^^^^^^^^^^^^^^^^

A form control is a UX element to help authors capture and edit content and metadata properties.
Crafter Studio form controls should be written in a way that makes them independent of the data they allow the user to select so that they can be (re)used across a wide range of data sets.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The anatomy of a Control Plugin
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Data Sources consist of (at a minimum)

* A single javascript file which implements the control interface.
	* The file name of the control is important as the system uses a convention whereby the JS file name and the control name in the configuration must be the same.
	* The module name must also be the same as the control name with "cstudio-forms-controls-" prepended to the front of it Ex: "cstudio-forms-controls-configured-list."
* Configuration in a Crafter Studio project to make that data source available for use

^^^^^^^^^^^^^^^^^
Control Interface
^^^^^^^^^^^^^^^^^

.. code-block:: html

	/** 
	 * Constructor: Where .X is substituted with your class name
	 * ID is the variable name
	 * FORM is the form object
	 * OWNER is the parent section/form
	 * PROPERTIES is the collection of configured property values
	 * CONSTRAINTS is the collection of configured constraint values
	 * READONLY is a true/false flag indicating re-only mode
	 */
	CStudioForms.Controls.X = CStudioForms.Controls.X ||  
	function(id, form, owner, properties, constraints, readonly)  { }

	YAHOO.extend(CStudioForms.Controls.X, CStudioForms.CStudioFormField, {

	    /**
	     * Return a user friendly name for the control (will show up in content type builder UX)
	     */
	    getLabel: function() { },

	    /**
	     * method is called by the engine when the value of the control is changed
	     */
	    _onChange: function(evt, obj) { },
	 
	    /**
	     * method is called by the engine to invoke the control to render.  The control is responsible for creating and managing its own HTML.
	     * CONFIG is a structure containing the form definition and other control configuration
	     * CONTAINER EL is the containing element the control is to render in to.
	     */
	    render: function(config, containerEl) { },

	    /**
	     * returns the current value of the control
	     */
	    getValue: function() { },

	    /**
	     * sets the value of the control
	     */	  
	    setValue: function(value) { },

	    /**
	     * return a string that represents the kind of control (this is the same as the file name)
	     */
	    getName: function() {  },
		
	    /**
	     * return a list of properties supported by the control.
	     * properties is an array of objects with the following structure { label: "", name: "", type: "" }
	     */    
	    getSupportedProperties: function() { },

	    /**
	     * return a list of constraints supported by the control.
	     * constraints is an array of objects with the following structure { label: "", name: "", type: "" }
	     */    
	    getSupportedConstraints: function() { }
	});