:is-up-to-date: True

.. index:: Building Form Engine Controls Plugins, Form Control Plugins

.. _building-plugins-controls:

====================================
Building Form Engine Control Plugins
====================================

In :ref:`form-engine-control`, we learned how to build form engine controls placed in the Studio war file.  Crafter Studio also allows plugins for form engine controls through the ``getPluginFile`` API found here :studio_swagger_url:`#/plugin/getPluginFile`

-------------------------------
The anatomy of a Control Plugin
-------------------------------

Form Engine Control consist of (at a minimum)

* A single javascript file which implements the control interface.

    * Unlike in the previous section :ref:`form-engine-control`, the JS file name and the control name in the configuration does not need to be the same.  The JS file name can be any meaningful name, different from the control name in the configuration.

* Configuration in a Crafter Studio project to make that control available for use


---------
Interface
---------

See :ref:`control-interface` for more information on form engine control interface.

.. _plugin-directory-structure:

--------------------------
Plugin Directory Structure
--------------------------

When using plugins, the JS files location for the plugins uses a convention where the files needs to go in the following location:

* **Controls** : CRAFTER_HOME/data/repos/sites/SITE_NAME/sandbox/config/studio/plugins/control/CONTROL_NAME/JS_FILE.js

where:

- **CRAFTER_HOME** : Studio location
- **SITE_NAME** : Name of site where the plugin is to be added
- **CONTROL_NAME** : Name of form engine control plugin
- **JS_FILE.js** : JavaScript file containing the control/data source interface implementation

.. note:: When using an out-of-the-box blueprint to create your site, the ``plugins/control`` folder does not exist under ``CRAFTER_HOME/data/repos/sites/SITE_NAME/sandbox/config/studio/`` and will need to be created by the user creating the plugins.

---------------------------
Form Engine Control Example
---------------------------
Let's take a look at an example of a control plugin.  We will be adding a control named ``text-input``.

^^^^^^^^^^^^^^^^^^^^^^^^
Form Engine Control Code
^^^^^^^^^^^^^^^^^^^^^^^^

The first thing we have to do is to create the folder structure where we will be placing the JS file for our control.  We'll follow the convention listed above in :ref:`plugin-directory-structure`

Under ``CRAFTER_HOME/data/repos/sites/SITE_NAME/sandbox/config/studio``, create the folder ``plugins``.  Under the ``plugins`` folder, create the folder ``control``.  Under the ``control`` folder, create the folder ``text-input``, which is the name of the control we're building.  We will be placing the JS file implementing the control interface under the ``text-input`` folder.  In the example below, the JS file is ``main.js``

.. image:: /_static/images/form-controls/control-plugin-directory-struct.png
    :width: 75 %
    :alt: Form Engine Control Plugin Directory Structure
    :align: center

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

After placing your JS file, we need to commit the new file to the repo (``{CRAFTER_HOME}/data/repos/sites/SITENAME/sandbox/``) by using ``git`` so the control will appear in the site content types.

Crafter uses a vanilla version of Git, so regular Git commands work as intended. To commit your changes so Crafter can see it, head to ``{CRAFTER_HOME}/data/repos/sites/SITENAME/sandbox/`` and git add your new files like this

.. code-block:: sh

    git add <filename>

for each filename. Or, if multiple controls were added, to add all at once use:

.. code-block:: sh

    git add --all

And once you are done, commit them with the following command:

.. code-block:: sh

    git commit -m "<the commit’s description>"

You can also use any Git client. Now, it will be available when you edit or create a new content type in your site.
Remember that whenever you edit directly in the filesystem, you need to commit your changes to ensure they are properly reflected.

Saving additional form control elements to XML
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To save additional elements from your form control into the XML content, call ``registerDynamicField`` from the form when initializing the form control.  When ``updateField`` is called, your element will be saved into the XML content.

 .. code-block:: js

    this.form.registerDynamicField(this.timezoneId);

|

See `here <https://github.com/craftercms/studio-ui/blob/support/3.1.x/static-assets/components/cstudio-forms/controls/date-time.js#L821>`__ for an example of calling ``registerDynamicField`` in the date-time form control code.



^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring the Control to show up in Crafter Studio
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Add the plugin control's name to the list of controls in the content type editor configuration

**Location (In Repository) SITENAME/config/studio/administration/site-config-tools.xml**

.. code-block:: xml
    :linenos:
    :emphasize-lines: 10,11,12,13,14

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
                <type>control</type>
                <name>text-input</name>
                <filename>main.js</filename>
            </plugin>
            <icon>
                <class>fa-pencil-square-o</class>
            </icon>
        </control>
    </controls>


Here's our plugin control added to the list of controls in the site content types

.. image:: /_static/images/form-controls/control-plugin-added.png
    :width: 50 %
    :alt: Form Engine Control Plugin Added to Content Type
    :align: center

