.. _form-engine-control:

===========================
Build a Form Engine Control
===========================

-----------------
What is a Control
-----------------

A form control is a UX element to help authors capture and edit content and metadata properties.
Crafter Studio form controls should be written in a way that makes them independent of the data they allow the user to select so that they can be (re)used across a wide range of data sets.

.. image:: /_static/images/content-model/create-content-type-2.png
        :height: 800px
        :width: 800 px
        :scale: 75 %
        :alt: Content Type Editor
        :align: center

Form Engine controls are #4 in the image above.

Out of the box data sources are:

.. include:: ../form-controls/list-form-controls.rst

-------------------------------
The anatomy of a Control Plugin
-------------------------------

Form Engine Control consist of (at a minimum)

* A single javascript file which implements the control interface.

	* The file name of the control is important as the system uses a convention whereby the JS file name and the control name in the configuration must be the same.
	* The module name must also be the same as the control name with "cstudio-forms-controls-" prepended to the front of it Ex: "cstudio-forms-controls-checkbox-group."

* Configuration in a Crafter Studio project to make that control available for use

-----------------
Control Interface
-----------------

.. code-block:: javascript
    :linenos:

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

------------------
Coding an example
------------------

Our example is a grouped checkbox that allows the author to select one or more items from a set of checkboxes. The control relies on a data source for the set of possible values which allows it to be used for a wide range of data capture.

^^^^^^^^^^^^
Control Code
^^^^^^^^^^^^
.. image:: /_static/images/form-engine-control-example.png
	:height: 500px
	:width: 432 px
	:scale: 50 %
	:alt: Form Engine Control Example

**Location /STUDIO-WAR/default-site/static-assets/components/cstudio-forms/controls/checkbox-group.js**

.. code-block:: javascript
    :linenos:

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
	    this.hiddenEl = null;
	    // Stores the type of data the control is now working with (this value is fetched from the datasource controller)
	    this.dataType = null;

	    amplify.subscribe("/datasource/loaded", this, this.onDatasourceLoaded);

	    return this;
	}

	YAHOO.extend(CStudioForms.Controls.CheckBoxGroup, CStudioForms.CStudioFormField, {

	    /**
	    * Return a user friendly name for the control (will show up in content type builder UX)
	    */
	    getLabel: function() {
	        return CMgs.format(langBundle, "groupedCheckboxes");
	    },

	    getRequirementCount: function() {
	        var count = 0;

	        if(this.minSize > 0){
	            count++;
	        }

	        return count;
	    },

	    /**
	    * validates the supported constraints of the control
	    */
	    validate : function () {
	        if(this.minSize > 0) {
	            if(this.value.length < this.minSize) {
	                this.setError("minCount", "# items are required");
	                this.renderValidation(true, false);
	            }
	            else {
	                this.clearError("minCount");
	                this.renderValidation(true, true);
	            }
	        }
	        else {
	            this.renderValidation(false, true);
	        }
	        this.owner.notifyValidation();
	    },

	    /**
	    * sets "edited" property as true. This property will be verified when the engine form is canceled
	    */
	    _onChangeVal: function(evt, obj) {
	        obj.edited = true;
	    },

	    /**
	    * method is called when datasource is loaded
	    */
	    onDatasourceLoaded: function ( data ) {
	        if (this.datasourceName === data.name && !this.datasource) {
	            var datasource = this.form.datasourceMap[this.datasourceName];
	            this.datasource = datasource;
	            this.dataType = datasource.getDataType();
	            if (!this.dataType.match(/^value$/)) {
	                this.dataType += "mv";
	            }
	            datasource.getList(this.callback);
	        }
	    },

	    /**
	     * method is called by the engine to invoke the control to render.  The control is responsible for creating and managing its own HTML.
	     * CONFIG is a structure containing the form definition and other control configuration
	     * CONTAINER EL is the containing element the control is to render in to.
	     */
	    render: function(config, containerEl, isValueSet) {
	        containerEl.id = this.id;
	        this.containerEl = containerEl;
	        this.config = config;

	        var _self = this,
	            datasource = null;

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
	                    this.datasourceName = (Array.isArray(prop.value)) ? prop.value[0] : prop.value;
	                    this.datasourceName = this.datasourceName.replace("[\"","").replace("\"]","");
	                }
	            }

	            if(prop.name == "selectAll" && prop.value == "true"){
	                this.selectAll = true;
	            }

	            if(prop.name == "readonly" && prop.value == "true"){
	                this.readonly = true;
	            }
	        }

	        if(this.value === "_not-set" || this.value === "") {
	            this.value = [];
	        }

	        var cb = {
	            success: function(list) {
	                var keyValueList = list,

	                // setValue will provide an array with the values that were checked last time the form was saved (datasource A).
	                // If someone decides to tie this control to a different datasource (datasource B): none, some or all of values
	                // from datasource A may be present in datasource B. If there were values checked in datasource A and they are
	                // also found in datasource B, then they will remain checked. However, if there were values checked in
	                // datasource A that are no longer found in datasource B, these need to be removed from the control's value.
	                    newValue = [],
	                    rowEl, textEl, inputEl;

	                containerEl.innerHTML = "";
	                var titleEl = document.createElement("span");

	                YAHOO.util.Dom.addClass(titleEl, 'cstudio-form-field-title');
	                titleEl.innerHTML = config.title;

	                var controlWidgetContainerEl = document.createElement("div");
	                YAHOO.util.Dom.addClass(controlWidgetContainerEl, 'cstudio-form-control-input-container');

	                var validEl = document.createElement("span");
	                YAHOO.util.Dom.addClass(validEl, 'validation-hint');
	                YAHOO.util.Dom.addClass(validEl, 'cstudio-form-control-validation');
	                controlWidgetContainerEl.appendChild(validEl);

	                var hiddenEl = document.createElement("input");
	                hiddenEl.type = "hidden";
	                YAHOO.util.Dom.addClass(hiddenEl, 'datum');
	                controlWidgetContainerEl.appendChild(hiddenEl);
	                _self.hiddenEl = hiddenEl;

	                var groupEl = document.createElement("div");
	                groupEl.className = "checkbox-group";

	                if (_self.selectAll && !_self.readonly) {
	                    rowEl = document.createElement("label");
	                    rowEl.className = "checkbox select-all";
	                    rowEl.setAttribute("for", _self.id + "-all");

	                    textEl = document.createElement("span");
	                    textEl.innerHTML = "Select All";

	                    inputEl = document.createElement("input");
	                    inputEl.type = "checkbox";
	                    inputEl.checked = false;
	                    inputEl.id = _self.id + "-all";

	                    YAHOO.util.Event.on(inputEl, 'focus', function(evt, context) { context.form.setFocusedField(context) }, _self);
	                    YAHOO.util.Event.on(inputEl, 'change', _self.toggleAll, inputEl, _self);

	                    rowEl.appendChild(inputEl);
	                    rowEl.appendChild(textEl);
	                    groupEl.appendChild(rowEl);
	                }

	                controlWidgetContainerEl.appendChild(groupEl);

	                for(var j=0; j<keyValueList.length; j++) {
	                    var item = keyValueList[j];

	                    rowEl = document.createElement("label");
	                    rowEl.className = "checkbox";
	                    rowEl.setAttribute("for", _self.id + "-" + item.key);

	                    textEl = document.createElement("span");
	                    // TODO:
	                    // we might need to create something on the datasource
	                    // to get the value based on the list of possible value holding properties
	                    // using datasource.getSupportedProperties
	                    textEl.innerHTML = item.value || item.value_f || item.value_smv || item.value_imv
	                        || item.value_fmv || item.value_dtmv || item.value_htmlmv;

	                    inputEl = document.createElement("input");
	                    inputEl.type = "checkbox";

	                    if (_self.isSelected(item.key)) {
	                        newValue.push(_self.updateDataType(item));
	                        inputEl.checked = true;
	                    } else {
	                        inputEl.checked = false;
	                    }

	                    inputEl.id = _self.id + "-" + item.key;

	                    if(_self.readonly == true){
	                        inputEl.disabled = true;
	                    }

	                    YAHOO.util.Event.on(inputEl, 'focus', function(evt, context) { context.form.setFocusedField(context) }, _self);
	                    YAHOO.util.Event.on(inputEl, 'change', _self.onChange, inputEl, _self);
	                    inputEl.context = _self;
	                    inputEl.item = item;

	                    rowEl.appendChild(inputEl);
	                    rowEl.appendChild(textEl);
	                    groupEl.appendChild(rowEl);
	                }
	                _self.value = newValue;
	                _self.form.updateModel(_self.id, _self.getValue());

	                var helpContainerEl = document.createElement("div");
	                YAHOO.util.Dom.addClass(helpContainerEl, 'cstudio-form-field-help-container');
	                controlWidgetContainerEl.appendChild(helpContainerEl);

	                _self.renderHelp(config, helpContainerEl);

	                var descriptionEl = document.createElement("span");
	                YAHOO.util.Dom.addClass(descriptionEl, 'description');
	                YAHOO.util.Dom.addClass(descriptionEl, 'cstudio-form-field-description');
	                descriptionEl.innerHTML = config.description;

	                containerEl.appendChild(titleEl);
	                containerEl.appendChild(controlWidgetContainerEl);
	                containerEl.appendChild(descriptionEl);

	                // Check if the value loaded is valid or not
	                _self.validate();
	            }
	        }

	        if(isValueSet) {

	            var datasource = this.form.datasourceMap[this.datasourceName];
	            // This render method is currently being called twice (on initialization and on the setValue).
	            // We need the value to know which checkboxes should be checked or not so restrict the rendering to only
	            // after the value has been set.
	            if(datasource){
	                this.datasource = datasource;
	                this.dataType = datasource.getDataType() || "value";	// Set default value for dataType (for backwards compatibility)
	                if (!this.dataType.match(/^value$/)) {
	                    this.dataType += "mv";
	                }
	                datasource.getList(cb);
	            }else{
	                this.callback = cb;
	            }
	        }
	    },

	    /**
	     * selects/unselects all checkboxes inside the control
	     */
	    toggleAll: function (evt, el) {
	        var ancestor = YAHOO.util.Dom.getAncestorByClassName(el, "checkbox-group"),
	            checkboxes = YAHOO.util.Selector.query('.checkbox input[type="checkbox"]', ancestor),
	            _self = this;

	        this.value = [];
	        this.value.length = 0;
	        if (el.checked) {
	            // select all
	            checkboxes.forEach( function (el) {
	                var valObj = {}

	                el.checked = true;
	                if (el.item) {
	                    // the select/deselect toggle button doesn't have an item attribute
	                    valObj.key = el.item.key;
	                    valObj[_self.dataType] = el.item.value || el.item[_self.dataType];
	                    _self.value.push(valObj);
	                }
	            });
	        } else {
	            // unselect all
	            checkboxes.forEach( function (el) {
	                el.checked = false;
	            });
	        }
	        this.form.updateModel(this.id, this.getValue());
	        this.hiddenEl.value = this.valueToString();
	        this.validate();
	        this._onChangeVal(evt, this);
	    },

	    /**
	     * method is called by the engine when the value of the control is changed
	     */
	    onChange: function(evt, el) {
	        var checked = (el.checked);

	        if(checked) {
	            this.selectItem(el.item.key, el.item.value || el.item[this.dataType]);
	        }
	        else {
	            this.unselectItem(el.item.key);
	        }
	        this.form.updateModel(this.id, this.getValue());
	        this.hiddenEl.value = this.valueToString();
	        this.validate();
	        this._onChangeVal(evt, this);
	    },

	    /**
	     * validates if the checkbox is selected
	     */
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

	    /**
	     * adds the selected item into the value of the control
	     */
	    selectItem: function(key, value) {
	        var valObj = {};

	        if(!this.isSelected(key)) {
	            valObj.key = key;
	            valObj[this.dataType] = value;

	            this.value[this.value.length] = valObj;
	        }
	    },

	    /**
	     * removes the unselect item from the value of the control
	     */
	    unselectItem: function(key) {
	        var index = this.getIndex(key);

	        if(index != -1) {
	            this.value.splice(index, 1);
	        }
	    },

	    /**
	     * returns the current value of the control
	     */
	    getValue: function() {
	        return this.value;
	    },

	    updateDataType: function (valObj) {
	        if (this.dataType) {
	            for (var prop in valObj) {
	                if (prop.match(/value/)) {
	                    if (prop !== this.dataType) {
	                        // Rename the property (e.g. "value") to the current data type ("value_s")
	                        valObj[this.dataType] = valObj[prop];
	                        delete valObj[prop];
	                    }
	                }
	            }
	            return valObj;
	        } else {
	            throw new TypeError("Function updateDataType (checkbox-group.js) : module variable dataType is undefined");
	        }
	    },

	    /**
	     * sets the value of the control
	     */
	    setValue: function(value) {
	        if(value === "") {
	            value = [];
	        }

	        this.value = value;
	        this.form.updateModel(this.id, this.getValue());
	        this.render(this.config, this.containerEl, true);
	        this.hiddenEl.value = this.valueToString();
	    },

	    /**
	     * sets the value of the control to string
	     */
	    valueToString: function() {
	        var strValue = "[";
	        var values = this.getValue();
	        var item = null;
	        if(values === '')
	            values = [];

	        for(var i = 0; i < values.length; i++){
	            item = values[i];
	            strValue += '{ "key": "' + item.key + '", "' + this.dataType + '":"' + item[this.dataType] + '"}';
	            if( i != values.length -1){
	                strValue += ",";
	            }
	        }

	        strValue += "]";
	        return strValue;
	    },

	    /**
	     * return a string that represents the kind of control (this is the same as the file name)
	     */
	    getName: function() {
	        return "checkbox-group";
	    },

	    /**
	     * return a list of properties supported by the control.
	     * properties is an array of objects with the following structure { label: "", name: "", type: "" }
	     */  
	    getSupportedProperties: function() {
	        return [
	            { label: CMgs.format(langBundle, "datasource"), name: "datasource", type: "datasource:item" },
	            { label: CMgs.format(langBundle, "showSelectAll"), name: "selectAll", type: "boolean" },
	            { label: CMgs.format(langBundle, "readonly"), name: "readonly", type: "boolean" }
	        ];
	    },

	    /**
	     * return a list of constraints supported by the control.
	     * constraints is an array of objects with the following structure { label: "", name: "", type: "" }
	     */ 
	    getSupportedConstraints: function() {
	        return [
	            { label:CMgs.format(langBundle, "minimumSelection"), name:"minSize", type: "int"}
	        ];
	    }

	});

	CStudioAuthoring.Module.moduleLoaded("cstudio-forms-controls-checkbox-group", CStudioForms.Controls.CheckBoxGroup);


----------------------------------------------------
Configuring the Control to show up in Crafter Studio
----------------------------------------------------

Add the control's name to the list of controls in the content type editor configuration

**Location (In Repository) SITENAME/config/studio/administration/tools.xml**

.. code-block:: xml
    :linenos:
    :emphasize-lines: 7

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
