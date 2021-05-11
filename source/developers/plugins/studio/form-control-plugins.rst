:is-up-to-date: True

.. index:: Building Form Engine Controls Site Plugins, Form Control Site Plugins, Site Plugins

.. _building-plugins-controls:

=========================================
Building Form Engine Control Site Plugins
=========================================

In :ref:`form-engine-control`, we learned how to build form engine controls placed in the Studio war file.  Crafter Studio also allows site plugins for form engine controls through the ``getPluginFile`` API found here :studio_swagger_url:`#/plugin/getPluginFile`

------------------------------------
The anatomy of a Control Site Plugin
------------------------------------

Form Engine Control consist of (at a minimum)

* A single javascript file which implements the control interface.

    * Unlike in the previous section :ref:`form-engine-control`, the JS file name and the control name in the configuration does not need to be the same.  The JS file name can be any meaningful name, different from the control name in the configuration.

* Configuration in a Crafter Studio project to make that control available for use


---------
Interface
---------

See :ref:`control-interface` for more information on form engine control interface.

.. _plugin-directory-structure:

-------------------------------
Site Plugin Directory Structure
-------------------------------

When using site plugins, the JS files location for the site plugins uses a convention where the files needs to go in the following location:

* **Controls** : authoring/js/control/CONTROL_NAME/JS_FILE.js

where:

- **CONTROL_NAME** : Name of form engine control site plugin
- **JS_FILE.js** : JavaScript file containing the control/data source interface implementation

---------------------------------------
Form Engine Control Site Plugin Example
---------------------------------------
Let's take a look at an example of a control site plugin.  We will be adding a control named ``text-input`` to the site ``mysite``.

^^^^^^^^^^^^^^^^^^^^^^^^
Form Engine Control Code
^^^^^^^^^^^^^^^^^^^^^^^^

The first thing we have to do is to create the folder structure where we will be placing the JS file for our control.  We'll follow the convention listed above in :ref:`plugin-directory-structure`

In a local folder, create the descriptor file for your site plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin``, then create the folder ``authoring``.  Under the ``authoring`` folder, create the ``js`` folder.  Under the ``js`` folder,  create the folder ``control``.  Under the ``control`` folder, create the folder ``text-input``, which is the name of the control we're building.  We will be placing the JS file implementing the control interface under the ``text-input`` folder.  In the example below, the JS file is ``main.js``

   .. code-block:: text
      :caption: *Form Engine Control Plugin Directory Structure*

      <plugin-folder>/
        craftercms-plugin.yaml
        authoring/
          js/
            control/
              text-input/
                main.js

For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/form-control-plugin``

In the JS file, please note that the ``CStudioAuthoring.Module`` is required and that the prefix for ``CStudioAuthoring.Module.moduleLoaded`` must be the name of the control.  For our example, the prefix is ``text-input`` as shown in the example.

.. code-block:: js
    :linenos:
    :emphasize-lines: 51

    CStudioForms.Controls.textInput = CStudioForms.Controls.textInput ||
    function(id, form, owner, properties, constraints, readonly)  {
    	this.owner = owner;
    	this.owner.registerField(this);
    	this.errors = [];
    	this.properties = properties;
    	this.constraints = constraints;
    	this.inputEl = null;
    	this.patternErrEl = null;
    	this.countEl = null;
    	this.required = false;
    	this.value = "_not-set";
    	this.form = form;
    	this.id = id;
    	this.readonly = readonly;

    	return this;
    }

    YAHOO.extend(CStudioForms.Controls.textInput, CStudioForms.CStudioFormField, {

        getLabel: function() {
            return CMgs.format(langBundle, "Text Input");
        },
        .
        .
        .

        getName: function() {
    	    	return "text-input";
        },

        getSupportedProperties: function() {
    	    return [
    		    { label: CMgs.format(langBundle, "displaySize"), name: "size", type: "int", defaultValue: "50" },
    		    { label: CMgs.format(langBundle, "maxLength"), name: "maxlength", type: "int",  defaultValue: "50" },
    		    { label: CMgs.format(langBundle, "readonly"), name: "readonly", type: "boolean" },
    		    { label: "Tokenize for Indexing", name: "tokenize", type: "boolean",  defaultValue: "false" }
    	    ];
        },

        getSupportedConstraints: function() {
    	    return [
    		    { label: CMgs.format(langBundle, "required"), name: "required", type: "boolean" },
    		    { label: CMgs.format(langBundle, "matchPattern"), name: "pattern", type: "string" },
    	    ];
        }

    });

    CStudioAuthoring.Module.moduleLoaded("text-input", CStudioForms.Controls.textInput);

|

After placing your JS file, the site plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

When running a ``crafter-cli`` command, the connection to Crafter CMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the site ``mysite`` by running the following:

   ..  code-block:: bash

       ./crafter-cli copy-plugin -e local -s mysite --path /users/myuser/myplugins/form-control-plugin

   |

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring the Control to show up in Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add the site plugin control's name to the list of controls in the content type editor configuration after installing

**Location (In Repository) SITENAME/config/studio/administration/site-config-tools.xml**

.. code-block:: xml
    :linenos:
    :emphasize-lines: 10-18

    <controls>
        <control>
            <name>auto-filename</name>
            .
            .
        </control>
        .
        .
        <control>
            <plugin>
                <pluginId>org.craftercms.plugin</pluginId>
                <type>control</type>
                <name>text-input</name>
                <filename>main.js</filename>
            </plugin>
            <icon>
                <class>fa-pencil-square-o</class>
            </icon>
        </control>
    </controls>


Here's our site plugin control added to the list of controls in the site content types

.. image:: /_static/images/form-controls/control-plugin-added.png
    :width: 50 %
    :alt: Form Engine Control Site Plugin Added to Content Type
    :align: center

