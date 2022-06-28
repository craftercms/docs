:is-up-to-date: True

.. index:: Building Form Engine Controls Project Plugins, Form Control Project Plugins, Project Plugins

.. _newIa-building-plugins-controls:

============================================
Building Form Engine Control Project Plugins
============================================

In :ref:`newIa-form-engine-control`, we learned how to build form engine controls placed in the Studio war file.  Crafter Studio also allows project plugins for form engine controls through the ``getPluginFile`` API found here :studio_swagger_url:`#/plugin/getPluginFile`

---------------------------------------
The anatomy of a Control Project Plugin
---------------------------------------

Form Engine Control consist of (at a minimum)

* A single javascript file which implements the control interface.

    * Unlike in the previous section :ref:`newIa-form-engine-control`, the JS file name and the control name in the configuration does not need to be the same.  The JS file name can be any meaningful name, different from the control name in the configuration.

* Configuration in a Crafter Studio project to make that control available for use


---------
Interface
---------

See :ref:`newIa-control-interface` for more information on form engine control interface.

.. _newIa-plugin-directory-structure:

----------------------------------
Project Plugin Directory Structure
----------------------------------

When creating project plugins, the JS files location for the project plugins uses a convention where the files needs to go in the following location:

* **Controls** : authoring/static-assets/plugins/{yourPluginId}/control/{yourPluginName}/JS_FILE.js

where:

- **{yourPluginName}** : Name of form engine control project plugin
- **JS_FILE.js** : JavaScript file containing the control interface implementation

------------------------------------------
Form Engine Control Project Plugin Example
------------------------------------------
Let's take a look at an example of a control project plugin.  We will be adding a control named ``text-input`` to the project ``My Editorial``.

^^^^^^^^^^^^^^^^^^^^^^^^
Form Engine Control Code
^^^^^^^^^^^^^^^^^^^^^^^^

The first thing we have to do is to create the folder structure where we will be placing the JS file for our control.  We'll follow the convention listed above in :ref:`newIa-plugin-directory-structure`

In a local folder, create the descriptor file for your project plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin.excontrol``, then create the folder ``authoring``.  Under the ``authoring`` folder, create the ``static-assets`` folder.  Under the ``static-assets`` folder, create the folder ``plugins``.

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

.. _newIa-configure-descriptor-file-for-autowiring:

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

See :ref:`newIa-project-plugin-descriptor-file` for more information on setting up automatic wiring of your project plugin in Studio

^^^^^^^^^^^^^^^
Test the Plugin
^^^^^^^^^^^^^^^

After placing your JS file, the project plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the :ref:`add-environment <newIa-crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the project ``my-editorial`` by running the following:

   ..  code-block:: bash

       ./crafter-cli copy-plugin -e local -s my-editorial --path /users/myuser/myplugins/form-control-plugin

   |


Let's take a look at the auto-wiring performed during installation of the plugin.  Form controls are setup in the ``site-config-tools.xml``  file.

The items we setup in the descriptor file for auto-wiring :ref:`above <newIa-configure-descriptor-file-for-autowiring>` should now be in the ``Project Config Tools`` configuration file, which can be accessed  by opening the ``Sidebar``, then clicking  on ``Project Tools`` -> ``Configuration``  ->  ``Project Config Tools``

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


Here's our project plugin control added to the list of controls in content types

.. image:: /_static/images/form-controls/control-plugin-added.png
    :width: 50 %
    :alt: Form Engine Control Project Plugin Added to Content Type
    :align: center
