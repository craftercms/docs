:is-up-to-date: True

.. index:: Building Form Engine Data Source Site Plugins, Form  Data Source Site Plugin, Site Plugins

.. _building-plugins-form-ds:

=============================================
Building Form Engine Data Source Site Plugins
=============================================

In :ref:`form-engine-data-source`, we learned how to build form engine data sources placed in the Studio war file.  Crafter Studio also allows site plugins for form engine data sources through the ``getPluginFile`` API found here :studio_swagger_url:`#/plugin/getPluginFile`

----------------------------------------
The anatomy of a Data Source Site Plugin
----------------------------------------

Data Sources consist of (at a minimum)

* A single javascript file which implements the data source interface.

	* Unlike in the previous section :ref:`form-engine-data-source`, the JS file name and the data source name in the configuration does not need to be the same.  The JS file name can be any meaningful name, different from the data source name in the configuration.

* Configuration in a Crafter Studio project to make that data source available for use.

---------
Interface
---------

See :ref:`data-source-interface` for more information on form engine data source interface.

.. _plugin-ds-directory-structure:

-------------------------------
Site Plugin Directory Structure
-------------------------------

When creating site plugins, the JS files location for the site plugins uses a convention where the data source files needs to go in the following location:

* **Data Sources** : authoring/static-assets/plugins/{yourPluginId}/datasource/{yourPluginName}/JS_FILE.js

where:

- **yourPluginName** : Name of form engine data source plugin
- **JS_FILE.js** : JavaScript file containing the data source interface implementation

-------------------------------------------
Form Engine Data Source Site Plugin Example
-------------------------------------------

Let's take a look at an example of a data source site plugin.  We will be adding a data source named ``parent-content``.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Form Engine Data Source Code
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The first thing we have to do is to create the folder structure where we will be placing the JS file for our data source.  We'll follow the convention listed above in :ref:`plugin-ds-directory-structure`

In a local folder, create the descriptor file for your site plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin.exampleds``, then create the folder ``authoring``.  Under the ``authoring`` folder, create the ``static-assets`` folder.  Under the ``static-assets`` folder, create the folder ``plugins``.

We will now create the folders following the plugin id path name, ``org.craftercms.plugin.exampleds``.  Under the ``plugins`` folder, create the folder ``org``.  Under the ``org`` folder, create the folder ``craftercms``.  Under the ``craftercms`` folder, create the folder ``plugin``.  Next, we'll create the folder for the plugin type, ``datasource``.  Under the ``plugin`` folder, create the folder ``datasource``.  Under the ``datasource`` folder, create the folder ``parent-content``, which is the name of the data source we're building.  We will be placing the JS file implementing the data source interface under the ``parent-content`` folder.  In the example below, the JS file is ``main.js``

.. code-block:: text
      :caption: *Form Engine Data Source Plugin Directory Structure*

      <plugin-folder>/
        craftercms-plugin.yaml
        authoring/
          static-assets/
            plugins/
              org/
                craftercms/
                  plugin/
                    exampleds/
                      datasource/
                        parent-content/
                          main.js

|


For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/form-datasource-plugin``

In the JS file, please note that the ``CStudioAuthoring.Module`` is required and that the prefix for ``CStudioAuthoring.Module.moduleLoaded`` must be the name of the data source.  For our example, the prefix is ``parent-content`` as shown in the example.

.. code-block:: js
    :linenos:
    :emphasize-lines: 73
    :caption: *authoring/static-assets/plugins/org/craftercms/plugin/exampleds/datasource/parent-content/main.js*

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

|

Here's the complete example form data source plugin file for the ``parent-content`` data source (Click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample form data source plugin file "main.js".</a></summary>

.. literalinclude:: /_static/code/plugins/datasource/main.js
   :language: js
   :linenos:

.. raw:: html

   </details>

|
|

.. _configure-descriptor-file-for-autowiring-datasource:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring the Descriptor File to Wire the Plugin
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To setup our form control to be automatically wired in the corresponding configuration file in Studio (which for a form control, is the Site Config Tools Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

.. code-block:: yaml
   :linenos:
   :caption: *craftercms-plugin.yaml*

   installation:
    - type: form-datasource
      elementXpath: //control/plugin[pluginId='org.craftercms.plugin.exampleds']
      element:
        name: datasource
        children:
          - name: plugin
            children:
              - name: pluginId
                value: org.craftercms.plugin.exampleds
              - name: type
                value: datasource
              - name: name
                value: parent-content
              - name: filename
                value: main.js
          - name: icon
            children:
              - name: class
                value: fa-pencil-square-o

|

See :ref:`site-plugin-descriptor-file` for more information on setting up automatic wiring of your site plugin in Studio

^^^^^^^^^^^^^^^
Test the Plugin
^^^^^^^^^^^^^^^

After placing your JS file, the site plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the site ``mysite`` by running the following:

   ..  code-block:: bash

       ./crafter-cli copy-plugin -e local -s mysite --path /users/myuser/myplugins/form-datasource-plugin

   |


Let's take a look at the auto-wiring performed during installation of the plugin.  Form data sources are setup in the ``site-config-tools.xml``  file.

The items we setup in the descriptor file for auto-wiring :ref:`above <configure-descriptor-file-for-autowiring-datasource>` should now be in the ``Site Config Tools`` configuration file, which can be accessed  by opening the ``Sidebar``, then clicking  on ``Site Tools`` -> ``Configuration``  ->  ``Site Config Tools``

**Location (In Repository) SITENAME/config/studio/administration/site-config-tools.xml**

.. code-block:: xml
    :linenos:
    :emphasize-lines: 10,11,12,13,14,15

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
                <pluginId>org.craftercms.plugin.exampleds</pluginId>
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

Here's our site plugin data source added to the list of data sources in content types

.. image:: /_static/images/form-sources/datasource-plugin-added.png
    :width: 50 %
    :alt: Form Engine Data Source Site Plugin Added to Content Type
    :align: center
