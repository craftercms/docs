:orphan:

:is-up-to-date: True

.. _craftercms-plugin-yaml-file:

============================
CrafterCMS Plugin Descriptor
============================

The ``craftercms-plugin.yaml`` file contains information for use in CrafterCMS.  We'll take a look at a file used for
a blueprint and for a project plugin.

**On this page**

- :ref:`craftercms-blueprint-descriptor-file`
- :ref:`project-plugin-descriptor-file`

.. _craftercms-blueprint-descriptor-file:

-------------------------
Blueprint Descriptor File
-------------------------

.. code-block:: yaml
    :caption: *Sample blueprint plugin descriptor file*
    :linenos:

    # This file describes a plugin for use in CrafterCMS

    # The version of the format for this file
    descriptorVersion: 2

    # Describe the plugin
    plugin:
      type: blueprint
      id: org.craftercms.blueprint.empty
      name: Empty Blueprint
      tags:
        - blueprint
        - website
      version:
        major: 1
        minor: 0
        patch: 0
      description: |
        Simple empty blueprint
      website:
        name: Empty Blueprint
        url: https://craftercms.org
      media:
        screenshots:
          - title: Home Page
            description: Screenshot of the homepage
            url: /studio/static-assets/images/blueprints/empty/bp_empty.png
      developer:
        company:
          name: CrafterCMS
          email: info@craftercms.com
          url: https://craftercms.com/
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

The following fields are required:

- ``descriptorVersion`` - The version of the format for this file which is currently 2
- ``plugin.type`` - ``blueprint`` or ``site`` depending on the type of plugin you're building.
  Remember to set the value to ``blueprint`` for blueprints and ``site`` for project plugins
- ``plugin.id`` - a unique Id that is meaningful/recognizable to people who will be using the blueprint/plugin
- ``plugin.name`` - blueprint/plugin name (For our blueprint example, it is the blueprint name shown in the
  **Choose Blueprint** screen of **Create Project**)
- ``plugin.version`` - a version number for the blueprint/project plugin
- ``plugin.crafterCmsVersions`` - CrafterCMS versions that the plugin is compatible with (look in the :ref:`release-notes`
  section for the versions available), and you'll need to keep this up to date

For ``plugin.media.screenshots``, the url ``../.crafter/screenshots/default.png`` is the default path for CrafterCMS to look for a default representative image of a plugin or blueprint.  For more information on adding a default representative image for your blueprint see :ref:`adding-default-image-for-bp` and :ref:`project-plugins-create-your-plugin` for project plugins.

.. note::

  For the images to be used for the ``screenshots`` in the ``craftercms-plugin.yaml`` file, we recommend
  using images with approximately a ``4:3`` aspect ratio (width to height), such as an image sized at 1200x800

.. _project-plugin-descriptor-file:

------------------------------
Project Plugin Descriptor File
------------------------------

  .. code-block:: yaml
     :linenos:
     :caption: *Sample extension plugin descriptor file*

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
         name: Project Plugin Example
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

Note:

* ``plugin.type`` should be set to ``site`` for project plugins
* ``plugin.id`` is a unique Id that is meaningful/recognizable to people who will be using the project plugin
* ``plugin.name`` is the name displayed in the CrafterCMS Marketplace.  Pick a unique name for your plugin.  You can check in the CrafterCMS Marketplace if the name you picked does not exist yet.  It's also a best practice to provide a name for your plugin that is meaningful or recognizable to users.  The name can be multiple words such as ``Project Plugin Example``
* ``plugin.version`` is a version number for the project plugin
* ``plugin.description`` should contain a short description of the plugin and is displayed underneath the plugin name in the CrafterCMS Marketplace
* ``plugin.documentation`` serves as the help block for the plugin. It contains a URL to the plugin's documentation file (must be in Markdown) containing information on how to use/configure the plugin. The documentation will appear alongside the plugin in Crafter Studio and the CrafterCMS Marketplace
* ``plugin.website.url`` can be a page for more information on your project plugin or for announcing updates, reporting bugs, etc. from your user community.
* ``plugin.media.url`` is the path to look for a representative image of the project plugin.
* ``plugin.license`` is the license supported by the plugin
* ``plugin.crafterCmsVersions`` contains the CrafterCMS version/s that the plugin is compatible with (look in the :ref:`release-notes` section for the versions available), and you'll need to keep this up to date

^^^^^^^^^^^
Auto-wiring
^^^^^^^^^^^

CrafterCMS supports automatically wiring your project plugin to the corresponding configuration
file in Studio during your project plugin installation.

To setup a project plugin to be automatically wired in the corresponding configuration file in
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
                value: index.js

Note:

- ``installation.type`` is the type of project plugin for auto-wiring in Studio.
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

"""""""""""""""""""""""""""""""
Form control auto-wiring sample
"""""""""""""""""""""""""""""""

Below is a sample ``craftercms-plugin.yaml`` for a form control plugin descriptor.

.. code-block:: yaml
   :caption: *Example craftercms-plugin.yaml file for a form-control project plugin*
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

"""""""""""""""""""""""""""""
Datasource auto-wiring sample
"""""""""""""""""""""""""""""

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

""""""""""""""""""""""""""""""
Preview-app auto-wiring sample
""""""""""""""""""""""""""""""

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
                 value: index.js

|

.. _plugin-descriptor-servlet-filter:

""""""""""""""""""""""""""""""
Site filter auto-wiring sample
""""""""""""""""""""""""""""""

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

"""""""""""""""""""""""""""""""
Site context auto-wiring sample
"""""""""""""""""""""""""""""""

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

|

For project plugins, the ``plugin.documentation`` serves as the help block for the plugin. It contains a URL to the plugin's documentation file (must be in Markdown) containing information on how to use/configure the plugin. The documentation will appear alongside the plugin in Crafter Studio and the CrafterCMS Marketplace.

See :ref:`studio-plugins` for examples of plugins auto-wired in Studio.
