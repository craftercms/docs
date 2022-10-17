:is-up-to-date: True
:last-update: 4.0.1

.. index:: Building Form Engine Controls Project Plugins, Form Control Project Plugins, Project Plugins

.. _building-plugins-controls:

============================================
Building Form Engine Control Project Plugins
============================================

Crafter Studio allows plugins for form engine controls through the ``getPluginFile`` API found here :studio_swagger_url:`#/plugin/getPluginFile`

-----------------
What is a Control
-----------------

A form control is a UX element to help authors capture and edit content and metadata properties.
Crafter Studio form controls should be written in a way that makes them independent of the data they allow the user to select so that they can be (re)used across a wide range of data sets.

.. image:: /_static/images/content-model/create-content-type-2.webp
   :width: 75 %
   :alt: Content Type Editor
   :align: center

Form Engine controls are #4 in the image above.

Out of the box controls are:

.. include:: ../../form-controls/list-form-controls.rst

---------------------------------------
The anatomy of a Control Project Plugin
---------------------------------------

Form Engine Control consist of (at a minimum)

* A single javascript file which implements the control interface.

    * The JS file name and the control name in the configuration does not need to be the same.  The JS file name can be any meaningful name, different from the control name in the configuration.

* Configuration in a Crafter Studio project to make that control available for use

.. _control-interface:

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

.. _plugin-directory-structure:

----------------------------------
Project Plugin Directory Structure
----------------------------------

When creating plugins, the JS files location for the plugins uses a convention where the files needs to go in the following location:

* **Controls** : authoring/static-assets/plugins/{yourPluginId}/control/{yourPluginName}/JS_FILE.js

where:

- **{yourPluginName}** : Name of form engine control plugin
- **JS_FILE.js** : JavaScript file containing the control interface implementation

------------------------------------------
Form Engine Control Project Plugin Example
------------------------------------------
Let's take a look at an example of a control plugin.  We will be adding a control named ``text-input`` to the ``My Editorial``.

^^^^^^^^^^^^^^^^^^^^^^^^
Form Engine Control Code
^^^^^^^^^^^^^^^^^^^^^^^^

The first thing we have to do is to create the folder structure where we will be placing the JS file for our control.  We'll follow the convention listed above in :ref:`plugin-directory-structure`

In a local folder, create the descriptor file for your plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin.excontrol``, then create the folder ``authoring``.  Under the ``authoring`` folder, create the ``static-assets`` folder.  Under the ``static-assets`` folder, create the folder ``plugins``.

We will now create the folders following the plugin id path name, ``org.craftercms.plugin.excontrol``.  Under the ``plugins`` folder, create the folder ``org``.  Under the ``org`` folder, create the folder ``craftercms``.  Under the ``craftercms`` folder, create the folder ``plugin``.  Under the ``plugin`` folder, create the folder ``excontrol``.  Next, we'll create the folder for the plugin type, ``control``.  Under the ``excontrol`` folder, create the folder ``control``.  Under the ``control`` folder, create the folder ``text-input``, which is the name of the control we're building.  We will be placing the JS file implementing the control interface under the ``text-input`` folder.  In the example below, the JS file is ``main.js``

   .. code-block:: text
      :caption: *Form Engine Control Plugin Directory Structure*

      <plugin-folder>/
        craftercms-plugin.yaml
        authoring/
          static-assets/
            plugins/
              org/
                craftercms/
                  plugin/
                    excontrol/
                      control/
                        text-input/
                          main.js

   |

For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/form-control-plugin``

In the JS file, please note that the ``CStudioAuthoring.Module`` is required and that the prefix for ``CStudioAuthoring.Module.moduleLoaded`` must be the name of the control.  For our example, the prefix is ``text-input`` as shown in the example.

.. code-block:: js
    :linenos:
    :emphasize-lines: 51
    :caption: *authoring/js/control/text-input/main.js*

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

Here's the complete example form control plugin file for the ``text-input`` control (Click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample form control plugin file "main.js".</a></summary>

.. literalinclude:: /_static/code/plugins/control/main.js
    :language: js
    :linenos:

.. raw:: html

   </details>

|
|


Saving additional form control elements to XML
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To save additional elements from your form control into the XML content, call ``registerDynamicField`` from the form when initializing the form control.  When ``updateField`` is called, your element will be saved into the XML content.

 .. code-block:: js

    this.form.registerDynamicField(this.timezoneId);

|

See `here <https://github.com/craftercms/studio-ui/tree/develop/static-assets/components/cstudio-forms/controls/date-time.js#L865>`__ for an example of calling ``registerDynamicField`` in the date-time form control code.

.. _configure-descriptor-file-for-autowiring:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuring the Descriptor File to Wire the Plugin
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To setup our form control to be automatically wired in the corresponding configuration file in Studio (which for a form control, is the Project Config Tools Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

.. code-block:: yaml
   :linenos:
   :caption: *craftercms-plugin.yaml*

   installation:
    - type: form-control
      elementXpath: //control/plugin[pluginId='org.craftercms.plugin.excontrol']
      element:
        name: control
        children:
          - name: plugin
            children:
              - name: pluginId
                value: org.craftercms.plugin.excontrol
              - name: type
                value: control
              - name: name
                value: text-input
              - name: filename
                value: main.js
          - name: icon
            children:
              - name: class
                value: fa-pencil-square-o

|

See :ref:`plugin-descriptor-file` for more information on setting up automatic wiring of your plugin in Studio

^^^^^^^^^^^^^^^
Test the Plugin
^^^^^^^^^^^^^^^

After placing your JS file, the plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the project ``my-editorial`` by running the following:

   ..  code-block:: bash

       ./crafter-cli copy-plugin -e local -s my-editorial --path /users/myuser/myplugins/form-control-plugin

   |


Let's take a look at the auto-wiring performed during installation of the plugin.  Form controls are setup in the ``site-config-tools.xml``  file.

The items we setup in the descriptor file for auto-wiring :ref:`above <configure-descriptor-file-for-autowiring>` should now be in the ``Project Config Tools`` configuration file, which can be accessed  by opening the ``Sidebar``, then clicking  on ``Project Tools`` -> ``Configuration``  ->  ``Project Config Tools``

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
                <pluginId>org.craftercms.plugin.excontrol</pluginId>
                <type>control</type>
                <name>text-input</name>
                <filename>main.js</filename>
            </plugin>
            <icon>
                <class>fa-pencil-square-o</class>
            </icon>
        </control>
    </controls>


Here's our plugin control added to the list of controls in content types

.. image:: /_static/images/form-controls/control-plugin-added.webp
    :width: 50 %
    :alt: Form Engine Control Project Plugin Added to Content Type
    :align: center
