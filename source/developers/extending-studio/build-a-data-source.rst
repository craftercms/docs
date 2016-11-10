.. _form-engine-data-source:

===============================
Build a Form Engine Data Source
===============================

---------------------
What is a Data Source
---------------------

Crafter Studio form controls should be written in a way that makes them independent of the data they allow the user to select so that they can be (re)used across a wide range of data sets. To accomplish this objective we use a data source pattern where by the form control widget code is concerned with rendering and facilitating the data capture/selection process but delegates the retrieval of the content to a separate swappable component interface known as a data source.

.. image:: /_static/images/create-content-type-2.png
        :height: 800px
        :width: 800 px
        :scale: 75 %
        :alt: Content Type Editor
        :align: center

Form Engine datasources are #5 in the image above.

Out of the box data sources are:

.. include:: ../form-sources/list-form-sources.rst

-----------------------------------
The anatomy of a Data Source Plugin
-----------------------------------

Data Sources consist of (at a minimum)

* A single javascript file which implements the data source interface.
	* The file name of the data source is important as the system uses a convention whereby the JS file name and the data source name in the configuration must be the same.
	* The module name must also be the same as the data source name with "cstudio-forms-controls-" prepended to the front of it Ex: "cstudio-forms-controls-configured-list."
* Configuration in a Crafter Studio project to make that data source available for use.

---------------------
Data Source Interface
---------------------

**Data Source Interface**

.. code-block:: javascript

	/** 
	 * Constructor: Where .X is substituted with your class name
	 */
	CStudioForms.Datasources.ConfiguredList = CStudioForms.Datasources.X ||  
	function(id, form, properties, constraints)  {
	}

	/**
	 * Extension of the base class
	 */
	YAHOO.extend(CStudioForms.Datasources.X, CStudioForms.CStudioFormDatasource, {

		/**
	         * Return a user friendly name for the data source (will show up in content type builder UX
	         */
		getLabel: function() {  },
		
	        /**
	         * return a string that represents the type of data returned by the data source
	         * This is often of type "item"
	         */
		getInterface: function() { },
		
	        /**
	         * return a string that represents the kind of data source (this is the same as the file name)
		getName: function() { },
		
	        /**
	         * return a list of properties supported by the data source.
	         * properties is an array of objects with the following structure { label: "", name: "", type: "" }
	         */
		getSupportedProperties: function() { },

	        /** 
	         * method responsible for getting the actual values.  Caller must pass callback which meets interface:
	         * { success: function(list) {}, failure: function(exception) }
	         */
		getList: function(cb) { }
	});

------------------
Coding an example
------------------

Our example is a data source that gets values from an XML file stored in the Alfresco Repository. This is a simple data source that allows administrators to define common taxonomies or lists and then to re-use those across many forms without having to redefine them every time.

^^^^^^^^^^^^^^^^^
Data Source Code
^^^^^^^^^^^^^^^^^

.. image:: /_static/images/data-source-example.png
	:height: 500px
	:width: 432 px
	:scale: 50 %
	:alt: Form Engine Control Example

**Location /STUDIO-WAR/components/cstudio-forms/data-sources/configured-list.js**

.. code-block:: javascript

	/**
	 * Constructor.  This data source can take time to retrieve the content from the repository.  
	 * For this reason when a caller asks for data we look to see if the data has already been returned.  
	 * If not we register the request to call back later. Otherwise, we returned the cached data.  
	 * The constructor initializes the data source and then immediately starts working on retrieving and caching the data.  
	 * Once the data is returned waiting controls are called back.
	 */ 
	CStudioForms.Datasources.ConfiguredList = CStudioForms.Datasources.ConfiguredList ||  
	function(id, form, properties, constraints)  {
	   	this.id = id;
	   	this.form = form;
	   	this.properties = properties;
	   	this.constraints = constraints;
		this.callbacks = [];
		var _self = this;
		
		for(var i=0; i<properties.length; i++) {
			var property = properties[i]
			if(property.name == "listName") {
				var cb = { 
					success: function(config) {
						var values = config.values;
						if(!values.length) {
							values = [ values.value ];
						}
						
						_self.list = values;
						
						for(var j=0; j<_self.callbacks.length; j++) {
							_self.callbacks[j].success(values);
						}
					},
					failure: function() {
					}
				};
				
				CStudioAuthoring.Service.lookupConfigurtion(
						CStudioAuthoringContext.site, 
						"/form-control-config/configured-lists/" + property.value + ".xml",
						cb);
					
			}
		}
		
		return this;
	}

	/** 
	 * extend the base class and override required methods
	 */
	YAHOO.extend(CStudioForms.Datasources.ConfiguredList, CStudioForms.CStudioFormDatasource, {

	    getLabel: function() {
	        return "Configured List of Values";
	    },

	   	getInterface: function() {
	   		return "item";
	   	},

		getName: function() {
			return "configured-list";
		},
		
		getSupportedProperties: function() {
			return [
				{ label: "List Name", name: "listName", type: "string" }
			];
		},

		
	        /**
	         * if the list is cached return it otherwise register the request for a callback when it is available
	         */
		getList: function(cb) {
			if(!this.list) {
				this.callbacks[this.callbacks.length] = cb;
			}
			else {
				cb.success(this.list);
			}
		},
		

	});

	CStudioAuthoring.Module.moduleLoaded("cstudio-forms-controls-configured-list", CStudioForms.Datasources.ConfiguredList);

---------------------------------------------------------
Configuring the Data source to show up in Crafter Studio
---------------------------------------------------------

Add the datasources name to the list of data sources in the content type editor

**Location (In Repository) /company-home/cstudio/config/sites/SITENAME/administration/tools.xml**

.. code-block:: xml

	<config>
		<tools>
			<tool>
				<name>content-types</name>
				<label>Content Types</label>
				<controls>
					...
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

-----------------------------------------------------------------
Complext Example that uses AJAX to get data from external source:
-----------------------------------------------------------------

.. code-block:: javascript

	CStudioForms.Datasources.ConfiguredList = CStudioForms.Datasources.ConfiguredList ||  
	function(id, form, properties, constraints)  {
	       this.id = id;
	       this.form = form;
	       this.properties = properties;
	       this.constraints = constraints;
	    this.callbacks = [];
	    var _self = this;
	     
	    for(var i=0; i<properties.length; i++) {
	        var property = properties[i]
	        if(property.name == "listName") {
	            var cb = { 
	                success: function(config) {
	                    var values = config.values;
	                    if(!values.length) {
	                        values = [ values.value ];
	                    }
	                     
	                    _self.list = values;
	                     
	                    for(var j=0; j<_self.callbacks.length; j++) {
	                        _self.callbacks[j].success(values);
	                    }
	                },
	                failure: function() {
	                }
	            };
	             
	            CStudioAuthoring.Service.lookupConfigurtion(
	                    CStudioAuthoringContext.site, 
	                    "/form-control-config/configured-lists/" + property.value + ".xml",
	                    cb);
	                 
	        }
	    }
	     
	    return this;
	}
	YAHOO.extend(CStudioForms.Datasources.ConfiguredList, CStudioForms.CStudioFormDatasource, {
	    getLabel: function() {
	        return "Configured List of Values";
	    },
	       getInterface: function() {
	           return "item";
	       },
	       /*
	     * Datasource controllers don't have direct access to the properties controls, only to their properties and their values.
	     * Because the property control (dropdown) and the dataType property share the property value, the dataType value must stay
	     * as an array of objects where each object corresponds to each one of the options of the control. In order to know exactly
	     * which of the options in the control is currently selected, we loop through all of the objects in the dataType value 
	     * and check their selected value.
	     */
	    getDataType : function getDataType () {
	        var val = null;
	        this.properties.forEach( function(prop) {
	            if (prop.name == "dataType") {
	                // return the value of the option currently selected
	                prop.value.forEach( function(opt) {
	                    if (opt.selected) {
	                        val = opt.value;
	                    }
	                });
	            }
	        });
	        return val;
	    },
	    getName: function() {
	        return "configured-list";
	    },
	     
	    getSupportedProperties: function() {
	        return [{
	            label: "Data Type",
	            name: "dataType",
	            type: "dropdown",
	            defaultValue: [{ // Update this array if the dropdown options need to be updated
	                value: "value",
	                label: "",
	                selected: true
	            }, {
	                value: "value_s",
	                label: "String",
	                selected: false
	            }, {
	                value: "value_i",
	                label: "Integer",
	                selected: false
	            }, {
	                value: "value_f",
	                label: "Float",
	                selected: false
	            }, {
	                value: "value_dt",
	                label: "Date",
	                selected: false
	            }, {
	                value: "value_html",
	                label: "HTML",
	                selected: false
	            }]
	        }, {
	            label: "List Name",
	            name: "listName",
	            type: "string"
	        }];
	    },    
	    getSupportedConstraints: function() {
	        return [
	            { label: "Required", name: "required", type: "boolean" }
	        ];
	    },
	     
	    getList: function(cb) {
	        if(!this.list) {
	            this.callbacks[this.callbacks.length] = cb;
	        }
	        else {
	            cb.success(this.list);
	        }
	    },
	     
	});
	CStudioAuthoring.Module.moduleLoaded("cstudio-forms-controls-configured-list", CStudioForms.Datasources.ConfiguredList);

---------------------------------------------------------
Summary
---------------------------------------------------------

A good place to start is looking at the control you want to use, for example the video picker. 

**Location /STUDIO-WAR/components/cstudio-forms/controls/video-picker.js**

When you want to build a data source there is a method called get interface. This method tells the system what the data source can help with. So using the same example, a video upload it returns video and thus the video picker can use that data source.

**Location /STUDIO-WAR/components/cstudio-forms/data-sources/video-desktop-upload.js**
  
If you want to create a new datasource for the video picker, you basically copy and paste a similar datasource, then change the object class name, label and interface. Then in the project go to the the administration panel and change the configuration to load the new javascript file.

