:orphan:

:is-up-to-date: True
:last-updated: 4.0.3

.. _plugin-descriptor-file:

============================
CrafterCMS Plugin Descriptor
============================

The ``craftercms-plugin.yaml`` file contains information for use in CrafterCMS.  This descriptor file contains
information about your extension, such as the license, the versions of CrafterCMS supported, and other
configurations and metadata.  In this section, we'll take a look at a plugin descriptor file.

.. code-block:: yaml
     :linenos:
     :caption: *Sample plugin descriptor file*

     # This file describes a plugin for use in CrafterCMS

     # The version of the format for this file
     descriptorVersion: 2

     # Describe the plugin
     plugin:
       type: site
       id: org.craftercms.plugin.test
       name: Project Plugin Example
       tags:
         - test
       version:
         major: 3
         minor: 0
         patch: 1
       description: A simple example for project plugins
       documentation: "https://raw.githubusercontent.com/craftercms/site-plugin-example/master/readme.md"
       website:
         name: Plugin Example
         url: https://github.com/craftercms/site-plugins-example
       media:
         screenshots:
           - title: CrafterCMS
             description: CrafterCMS Example Plugin
             url: "https://raw.githubusercontent.com/craftercms/site-plugin-example/master/.crafter/screenshots/default.png"
       developer:
         company:
           name: CrafterCMS
           email: info@craftercms.com
           url: https://craftercms.com
       license:
         name: MIT
         url: https://opensource.org/licenses/MIT
       crafterCmsVersions:
         - major: 4
           minor: 0
           patch: 0
       crafterCmsEditions:
         - community
         - enterprise
       # Option auto-wiring section
       # installation:

Here are some things to note in the descriptor file:

.. list-table:: Descriptor file fields
   :widths: 25 25 50
   :header-rows: 1

   * - Field
     - Required
     - Description
   * - descriptorVersion
     - |checkmark|
     - The version of the format for this file which is currently 2
   * - plugin.type
     - |checkmark|
     - Set the value to ``site``
   * - plugin.id
     - |checkmark|
     - A unique Id that is meaningful/recognizable to people who will be using the plugin
   * - plugin.name
     - |checkmark|
     - The name displayed in the Crafter Marketplace. |br|
       Pick a unique name for your plugin. You can check in the Crafter Marketplace if |br|
       the name you picked does not exist yet.  It's also a best practice to provide a name |br|
       for your plugin that is meaningful or recognizable to users. |br|
       The name can be multiple words such as ``Contact Form``
   * - plugin.version
     - |checkmark|
     - The version number for the plugin
   * - plugin.description
     -
     - Contains a short description of the plugin and is displayed underneath the plugin name in |br|
       the Crafter Marketplace
   * - plugin.documentation
     -
     - Serves as the help block for the plugin. It contains a URL to the plugin's documentation file |br|
       (must be in Markdown) containing information on how to use/configure the plugin. The documentation |br|
       will appear alongside the plugin in Crafter Studio and the Crafter Marketplace
   * - plugin.website.url
     -
     - Can be a page for more information on your plugin or for announcing updates, reporting bugs, etc. |br|
       from your user community.
   * - plugin.media.url
     -
     - The path to look for a representative image of the plugin. |br|
       CrafterCMS uses a default path for CrafterCMS to look for a default representative image of a plugin,|br|
       the url ``../.crafter/screenshots/``.
   * - plugin.license
     -
     - The license supported by the plugin
   * - plugin.crafterCmsVersions
     - |checkmark|
     - Contains the CrafterCMS version/s that the plugin is compatible with |br|
       (look in the :ref:`release-notes` section for the versions available), and you'll need to keep |br|
       this up to date

.. note::

  For the images to be used for the ``screenshots`` in the ``craftercms-plugin.yaml`` file, we recommend
  using images with approximately a ``4:3`` aspect ratio (width to height), such as an image sized at 1200x800


-----------
Auto-wiring
-----------
CrafterCMS supports automatically wiring your plugin to the corresponding configuration
file in Studio during your plugin installation.

To setup a plugin to be automatically wired in the corresponding configuration file in
Studio (for example, a form control, will be wired to the Content Type Editor Configuration file)
during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

.. code-block:: yaml
   :linenos:
   :caption: *Setup auto-wiring to Studio in descriptor file*

   installation:
    - type: preview-app
      parentXpath: //widget[@id='craftercms.components.ToolsPanel']
      elementXpath: //plugin[@id='org.craftercms.sampleComponentLibraryPlugin.components.reactComponent']
      element:
        name: configuration
        children:
        - name: widgets
          children:
          - name: widget
            attributes:
            - name: id
              value: org.craftercms.sampleComponentLibraryPlugin.components.reactComponent
            children:
            - name: plugin
              attributes:
              - name: id
                value: org.craftercms.plugin.sidebar
              - name: type
                value: sidebar
              - name: name
                value: react-sample
              - name: file
                value: index.modern.js

where:

- ``installation.type`` is the type of plugin for auto-wiring in Studio.
  Available values are **form-control**, **form-datasource**, **preview-app**, **site-filter** and **site-context**
- ``installation.parentXpath`` is an XPath selector for the element where the plugin will be added,
  required when installation-type is *preview-app*
- ``installation.elementXpath`` is an XPath selector to check if the plugin is already present in the configuration and used to remove the config when the plugin is uninstalled
- ``installation.element.name`` is the element name to be wired in your project configuration file so the plugin will
  show up in Studio
  Available values are **control** (for *form-control* installation type), **datasource** (for *form-datasource* installation type) and for *preview-app* installation type, the start of the section the plugin needs to be inserted in, e.g. *configuration*, etc.
- ``installation.element.children`` contains any number of **name** and **children** describing your plugin, such
  as the icon to be used by your plugin if applicable, or the plugin location, where:

  - ``name`` is the name of what's being described, e.g. **plugin** or **icon**
  - ``children`` contains any number of **name** and **value** and can contain the class (icon), plugin id, plugin
    type, plugin name and plugin files/folders (plugin location) and its corresponding  values

|

.. _plugin-descriptor-servlet-filter:

Below are examples on how to setup auto-wiring in Studio for various plugin types:

.. tabs::
   .. tab:: form-control

      Below is a sample auto-wiring setup for a form control.

      .. code-block:: yaml
         :caption: *Example installation for a form-control*
         :linenos:

         installation:
           - type: form-control
             elementXpath: //control/plugin[pluginId='org.craftercms.plugin.control']
             element:
               name: control
               children:
                 - name: plugin
                   children:
                     - name: pluginId
                       value: org.craftercms.plugin.control
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

   .. tab:: datasource

      Below is a sample auto-wiring setup for a data source.

      .. code-block:: yaml
         :caption: *Example installation for a data source*
         :linenos:

         installation:
           - type: form-datasource
             elementXpath: //datasource/plugin[pluginId='org.craftercms.plugin.datasource']
             element:
               name: datasource
               children:
                 - name: plugin
                   children:
                     - name: pluginId
                       value: org.craftercms.plugin.datasource
                     - name: type
                       value: datasource
                     - name: name
                       value: text-input
                     - name: filename
                       value: main.js
                     - name: icon
                       children:
                     - name: class
                       value: fa-pencil-square-o

   .. tab:: preview-app

      Below is a sample auto-wiring setup for a preview-app.

      .. code-block:: yaml
         :caption: *Example installation for a preview-app*
         :linenos:

         installation:
           - type: preview-app
             parentXpath: //widget[@id='craftercms.components.ToolsPanel']
             elementXpath: //plugin[@id='org.craftercms.sampleComponentLibraryPlugin.components.reactComponent']
             element:
               name: configuration
               children:
               - name: widgets
                 children:
                 - name: widget
                   attributes:
                   - name: id
                     value: org.craftercms.sampleComponentLibraryPlugin.components.reactComponent
                   children:
                   - name: plugin
                     attributes:
                     - name: id
                       value: org.craftercms.plugin
                     - name: type
                       value: sidebar
                     - name: name
                       value: react-sample
                     - name: file
                       value: index.modern.js

   .. tab:: servlet-filter

      Below is a sample auto-wiring setup for a site filter.

      .. code-block:: yaml
         :caption: *Example installation for a site-filter*
         :linenos:

         installation:
           - type: site-filter
             elementXpath: //filter/script[text()='/scripts/filters/plugins/org/craftercms/plugin/filter/myFilter.groovy']
             element:
               name: filter
               children:
                 - name: script
                   value: '/scripts/filters/plugins/org/craftercms/plugin/filter/myFilter.groovy'
                 - name: mapping
                   children:
                     - name: include
                       value: '/**'

   .. tab:: site-context

      Below is a sample auto-wiring setup for the site context.

      .. code-block:: yaml
         :caption: *Example installation for the site-context*
         :linenos:

         installation:
           - type: site-context
             elementXpath: //bean[@id='myBean']
             element:
               name: bean
               attributes:
                 - name: id
                   value: myBean
                 - name: class
                   value: plugins.org.craftercms.plugin/context/MyClass
               children:
                 - name: property
                   attributes:
                     - name: name
                       value: siteItemService
                     - name: ref
                       value: crafter.siteItemService


See :ref:`here <plugins-authoring-guides>` for examples of plugins auto-wired in Studio.
