:is-up-to-date: True

.. index:: Building Form Engine Data Source Plugins

.. _building-plugins-ds:

========================================
Building Form Engine Data Source Plugins
========================================

In :ref:`form-engine-data-source`, we learned how to build form engine data sources placed in the Studio war file.  Crafter Studio also allows plugins for form engine data sources through the ``getPluginFile`` API found here :studio_swagger_url:`#/plugin/getPluginFile`

-----------------------------------
The anatomy of a Data Source Plugin
-----------------------------------

Data Sources consist of (at a minimum)

* A single javascript file which implements the data source interface.

	* Unlike in the previous section :ref:`form-engine-data-source`, the JS file name and the data source name in the configuration does not need to be the same.  The JS file name can be any meaningful name, different from the data source name in the configuration.

* Configuration in a Crafter Studio project to make that data source available for use.

---------
Interface
---------

See :ref:`data-source-interface` for more information on form engine data source interface.

.. _plugin-ds-directory-structure:

--------------------------
Plugin Directory Structure
--------------------------

When using plugins, the JS files location for the plugins uses a convention where the data source files needs to go in the following location:

* **Data Sources** : CRAFTER_INSTALL/data/repos/sites/SITE_NAME/sandbox/config/studio/plugins/datasource/DATA_SOURCE_NAME/JS_FILE.js

where:

- **CRAFTER_INSTALL** : Studio location
- **SITE_NAME** : Name of site where the plugin is to be added
- **DATA_SOURCE_NAME** : Name of form engine data source plugin
- **JS_FILE.js** : JavaScript file containing the data source interface implementation

.. note:: When using an out-of-the-box blueprint to create your site, the ``plugins/datasource`` folder does not exist under ``CRAFTER_INSTALL/data/repos/sites/SITE_NAME/sandbox/config/studio/`` and will need to be created by the user creating the plugins.

-------------------------------
Form Engine Data Source Example
-------------------------------

Let's take a look at an example of an data source plugin.  We will be adding a data source named ``parent-content``.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Form Engine Data Source Code
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The first thing we have to do is to create the folder structure where we will be placing the JS file for our data source.  We'll follow the convention listed above in :ref:`plugin-ds-directory-structure`

Under ``CRAFTER_INSTALL/data/repos/sites/SITE_NAME/sandbox/config/studio``, create the folder ``plugins``.  Under the ``plugins`` folder, create the folder ``datasource``.  Under the ``datasource`` folder, create the folder ``parent-content``, which is the name of the data source we're building.  We will be placing the JS file implementing the data source interface under the ``parent-content`` folder.  In the example below, the JS file is ``main.js``

.. image:: /_static/images/form-sources/datasource-plugin-directory-struct.png
    :width: 75 %
    :alt: Form Engine Data Source Plugin Directory Structure
    :align: center

In the JS file, please note that the ``CStudioAuthoring.Module`` is required and that the prefix for ``CStudioAuthoring.Module.moduleLoaded`` must be the name of the data source.  For our example, the prefix is ``parent-content`` as shown in the example.

.. code-block:: js
    :linenos:
    :emphasize-lines: 73

    CStudioForms.Datasources.ParentContent= CStudioForms.Datasources.ParentContent ||
    function(id, form, properties, constraints)  {
       	this.id = id;
       	this.form = form;
       	this.properties = properties;
       	this.constraints = constraints;
    	this.selectItemsCount = -1;
    	this.type = "";
        this.defaultEnableCreateNew = true;
        this.defaultEnableBrowseExisting = true;
        this.countOptions = 0;

       	for(var i=0; i<properties.length; i++) {
       		if(properties[i].name == "repoPath") {
     			this.repoPath = properties[i].value;
       		}
       		if(properties[i].name == "browsePath") {
     			this.browsePath = properties[i].value;
       		}

    		if(properties[i].name == "type"){
    			this.type = (Array.isArray(properties[i].value))?"":properties[i].value;
    		}

            if(properties[i].name === "enableCreateNew"){
                this.enableCreateNew = properties[i].value === "true" ? true : false;
                this.defaultEnableCreateNew = false;
                properties[i].value === "true" ? this.countOptions ++ : null;
            }

            if(properties[i].name === "enableBrowseExisting"){
                this.enableBrowseExisting = properties[i].value === "true" ? true : false;
                this.defaultEnableBrowseExisting = false;
                properties[i].value === "true" ? this.countOptions ++ : null;
            }
       	}

        if(this.defaultEnableCreateNew){
            this.countOptions ++;
        }
        if(this.defaultEnableBrowseExisting){
            this.countOptions ++;
        }

    	return this;
    }

    YAHOO.extend(CStudioForms.Datasources.ParentContent, CStudioForms.CStudioFormDatasource, {
        .
        .
        .
        getName: function() {
    		return "parent-content";
    	},

    	getSupportedProperties: function() {
    		return [
                { label: CMgs.format(langBundle, "Enable Create New"), name: "enableCreateNew", type: "boolean", defaultValue: "true"  },
                { label: CMgs.format(langBundle, "Enable Browse Existing"), name: "enableBrowseExisting", type: "boolean", defaultValue: "true" },
    			{ label: CMgs.format(langBundle, "repositoryPath"), name: "repoPath", type: "string" },
    			{ label: CMgs.format(langBundle, "browsePath"), name: "browsePath", type: "string" },
    			{ label: CMgs.format(langBundle, "defaultType"), name: "type", type: "string" }
    		];
    	},

    	getSupportedConstraints: function() {
    		return [
    		];
    	}

    });

    CStudioAuthoring.Module.moduleLoaded("parent-content", CStudioForms.Datasources.ParentContent);



^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring the Data Source to show up in Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add the plugin data source's name to the list of data sources in the content type editor configuration

**Location (In Repository) SITENAME/config/studio/administration/site-config-tools.xml**

.. code-block:: xml
    :linenos:
    :emphasize-lines: 10,11,12,13,14

    <datasources>
        <datasource>
            <name>img-desktop-upload</name>
            .
            .
        </datasource>
        .
        .
        <datasource>
            <plugin>
                <type>datasource</type>
                <name>parent-content</name>
                <filename>main.js</filename>
            </plugin>
            <icon>
                <class>fa-users</class>
            </icon>
        </datasource>
    </datasources>

|

Here's our plugin data source added to the list of data sources in the site content types

.. image:: /_static/images/form-sources/datasource-plugin-added.png
    :width: 50 %
    :alt: Form Engine Data Source Plugin Added to Content Type
    :align: center

