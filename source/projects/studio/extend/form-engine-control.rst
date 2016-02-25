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

.. code-block:: xml

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

----------------------
Coding the an example
----------------------

Our example is a grouped checkbox that allows the author to select one or more items from a set of checkboxes. The control relies on a data source for the set of possible values which allows it to be used for a wide range of data capture.

^^^^^^^^^^^^
Control Code
^^^^^^^^^^^^

Location /CSTUDIO-WAR/components/cstudio-forms/controls/checkbox-group.js

.. code-block:: xml

	CStudioForms.Controls.CheckBoxGroup = CStudioForms.Controls.CheckBoxGroup ||  
	function(id, form, owner, properties, constraints, readonly)  {
		this.owner = owner;
		this.owner.registerField(this);
		this.errors = []; 
		this.properties = properties;
		this.constraints = constraints;
		this.inputEl = null;
		this.countEl = null;
		this.required = false;
		this.value = "_not-set";
		this.form = form;
		this.id = id;
		this.readonly = readonly;
		this.minSize = 0;
		
		return this;
	}

	YAHOO.extend(CStudioForms.Controls.CheckBoxGroup, CStudioForms.CStudioFormField, {

	    getLabel: function() {
	        return "Grouped Checkboxes";
	    },

		getRequirementCount: function() {
	      		var count = 0;

	            if(this.minSize > 0){
		            count++;
	            }
	      		
	      		return count;
	    },

		render: function(config, containerEl) {
			this.containerEl = containerEl;
			this.config = config;
			
			var _self = this;
			var datasource = null;
			
			for(var i=0;i<config.constraints.length;i++){
				var constraint = config.constraints[i];
				
				if(constraint.name == "minSize" && constraint.value != ""){
					this.minSize = parseInt(constraint.value);
				}
			}

			for(var i=0; i<config.properties.length; i++) {
				var prop = config.properties[i];

				if(prop.name == "datasource") {
					if(prop.value && prop.value != "") {
						var datasourceName = prop.value;
						datasource = this.form.datasourceMap[datasourceName];	
					}
				}
				
				if(prop.name == "readonly" && prop.value == "true"){
					this.readonly = true;
				}
			}

			var cb = {
				success: function(list) {
					var keyValueList = list;
					
					containerEl.innerHTML = "";
					var titleEl = document.createElement("span");
			  		    YAHOO.util.Dom.addClass(titleEl, 'cstudio-form-field-title');
						titleEl.innerHTML = config.title;
					
					var controlWidgetContainerEl = document.createElement("div");
					YAHOO.util.Dom.addClass(controlWidgetContainerEl, 'cstudio-form-control-input-container');
			
					var validEl = document.createElement("span");
						YAHOO.util.Dom.addClass(validEl, 'cstudio-form-control-validation');
						controlWidgetContainerEl.appendChild(validEl);
			
					var groupEl = document.createElement("div");
					YAHOO.util.Dom.addClass(groupEl, 'cstudio-form-control-checkbox-group');
					controlWidgetContainerEl.appendChild(groupEl);
			
					if(this.value === "_not-set" || this.value === "") {
						this.value = [];
					}
					
					for(var j=0; j<keyValueList.length; j++) {
						var item = keyValueList[j];
			
						var rowEl = document.createElement("div");
						YAHOO.util.Dom.addClass(rowEl, 'cstudio-form-control-checkbox-container');
						groupEl.appendChild(rowEl);
			
						var inputEl = document.createElement("input");
						YAHOO.util.Dom.addClass(inputEl, 'cstudio-form-control-checkbox-input');
						inputEl.type = "checkbox";
						inputEl.checked = _self.isSelected(item.key);
						rowEl.appendChild(inputEl);
						
						if(this.readonly == true){
							inputEl.disabled = true;
						}
			
						var labelEl = document.createElement("div");
						YAHOO.util.Dom.addClass(labelEl, 'cstudio-form-control-checkbox-label');
						labelEl.innerHTML = item.value;
						rowEl.appendChild(labelEl);
			
						YAHOO.util.Event.on(inputEl, 'focus', function(evt, context) { context.form.setFocusedField(context) }, this);
						YAHOO.util.Event.on(inputEl, 'change', _self.onChange, inputEl);
						inputEl.context = _self;
						inputEl.item = item;
					}
					
					var descriptionEl = document.createElement("span");
						YAHOO.util.Dom.addClass(descriptionEl, 'cstudio-form-field-description');
						descriptionEl.innerHTML = config.description;
			
					var helpEl = document.createElement("span");
						YAHOO.util.Dom.addClass(helpEl, 'cstudio-form-field-help');
						helpEl.innerHTML = config.help;
					
					containerEl.appendChild(titleEl);
					containerEl.appendChild(controlWidgetContainerEl);
					containerEl.appendChild(descriptionEl);
					containerEl.appendChild(helpEl);

				}
			}
			
			datasource.getList(cb);
		},

		_onChange: function(evt, obj){
			if(obj.minSize > 0) {
				if(obj.value.length < obj.minSize) {
					obj.setError("minCount", "# items are required");
					obj.renderValidation(true, false);
				}
				else {
					obj.clearError("minCount");
					obj.renderValidation(true, true);
				}
			}
			else {
				obj.renderValidation(false, true);
			}

			obj.owner.notifyValidation();
			obj.form.updateModel(obj.id, obj.getValue());
		},
		
		onChange: function(evt, obj) {
			var checked = (obj.checked);
			
			if(checked) {
				obj.context.selectItem(obj.item.key, obj.item.value);
			}
			else {
				obj.context.unselectItem(obj.item.key);
			}

			obj.context._onChange(evt, obj.context);
		},

		isSelected: function(key) {
			var selected = false;
			var values = this.getValue();
			
			for(var i=0; i<values.length; i++) {
				if(values[i].key == key) {
					selected = true;
					break;
				}
			}
			
			return selected;
		},

		getIndex: function(key) {
			var index = -1;
			var values = this.getValue();
			
			for(var i=0; i<values.length; i++) {
				if(values[i].key == key) {
					index = i;
					break;
				}
			}
			
			return index;
		},
		
		selectItem: function(key, value) {
			if(!this.isSelected(key)) {
				this.value[this.value.length] = { key: key, value: value };
			}
		},
		
		unselectItem: function(key) {
			var index = this.getIndex(key);
			
			if(index != -1) {
				this.value.splice(index, 1);
			}		
		},
		
		getValue: function() {
			return this.value;
		},
		
		setValue: function(value) {
			if(value === "") {
				value = [];
			}
			
			this.value = value;
			this.render(this.config, this.containerEl);
			this._onChange(null,this);
		},
			
		getName: function() {
			return "checkbox-group";
		},
		
		getSupportedProperties: function() {
			return [
				{ label: "Data Source", name: "datasource", type: "datasource:item" },
				{ label: "Readonly", name: "readonly", type: "boolean" },
	        ];
		},

		getSupportedConstraints: function() {
			return [
				{ label: "Minimum Selection", name:"minSize", type: "int"},
			];
		}

	});

	CStudioAuthoring.Module.moduleLoaded("cstudio-forms-controls-checkbox-group", CStudioForms.Controls.CheckBoxGroup);


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring the Control to show up in Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Add the control's name to the list of controls in the content type editor configuration

Location (In Repository) /company-home/cstudio/config/sites/SITENAME/administration/tools.xml

.. code-block:: xml

	<config>
		<tools>
			<tool>
				<name>content-types</name>
				<label>Content Types</label>
				<controls>
					<control>checkbox-group</control>
				</controls>
				<datasources>
					...
	                                <datasource>video-desktop-upload</datasource>
					<datasource>configured-list</datasource>
				</datasources>
	                        ...		
	                       </tool>
			<!--tool>...</tool -->
		</tools>
	</config>
