:orphan:

:is-up-to-date: False

.. index:: Crafter Studio Project Plugins, Studio Project Plugins, Project Plugins

.. _studio-plugins:

==============================
Crafter Studio Project Plugins
==============================

Crater Studio project plugins allow users to replace, extend or even create stand alone experiences to serve a particular use case or set of use cases.
Studio project plugins extend the authoring environment and can be pieces within Studio UI or have their own devoted page inside Studio, in which case plugin authors have a blank canvas to design their full plugin experience.

Stand alone project plugins can make use of Studio UI components using various possible mechanisms described below.

The Crafter Studio API that gets a file for a given plugin, the ``getPluginFile`` API found here :studio_swagger_url:`#/plugin/getPluginFile` facilitates extending Studio through project plugins.

----------------------------------
Project Plugin Directory Structure
----------------------------------

When using project plugins, the JavaScript files and folders location for the plugins uses a convention where the files/folders needs to go in the following location:

* **Plugin** : authoring/static-assets/plugins/PLUGIN_ID/PLUGIN_TYPE/PLUGIN_NAME/PLUGIN_FILES_FOLDERS

where:

- **PLUGIN_ID**   : A folder structure representing the plugin id
- **PLUGIN_TYPE** : Type of plugin, e.g. control, datasource, sidebar, app, etc.
- **PLUGIN_NAME** : Name of  plugin
- **PLUGIN_FILES_FOLDERS** : JavaScript and/or plugin build output files/folders containing the plugin implementation

----------------------------------------
Creating a Crafter Studio Project Plugin
----------------------------------------
Let'a take a look at how to create a Crafter Studio project plugin.

#. Create your project plugin e.g. a JavaScript file or React app
#. Create the required directory structure as outlined above, and configure the descriptor file ``craftercms-plugin.yaml`` file for the plugin

      .. code-block:: text
         :linenos:

         {your_plugin_folder}/
           craftercms-plugin.yaml
           authoring/
             static-assets/
               plugins/
                 {yourPluginId}/
                   {yourPluginType}/
                     {yourPluginName}/

      |

   Place your project plugin under the {yourPluginName} folder.

#. If your project plugin is inside Studio, setup automatic wiring of your plugin to the corresponding configuration file through the descriptor file for supported installation types, otherwise, setup needed configuration files.   See :ref:`project-plugin-descriptor-file`  for more information on auto-wiring your plugin in Studio.
#. See your project plugin in action by installing your plugin via the ``crafter-cli`` command ``copy-plugin`` if your project plugin is inside Studio, otherwise visit: ``/studio/plugin?site={site}&pluginId={yourPluginIdName}&type={yourPluginType}&name={yourPluginName}``

   Installing your project plugin to your project using the ``crafter-cli`` command ``copy-plugin`` will install your Studio
   project plugin under the ``config/studio/static-assets/plugins/{yourPluginId}/{yourPluginType}/{yourPluginName}``
   directory

      .. code-block:: text
         :linenos:

             {projectRoot}/
               config/
                 studio/
                   static-assets/
                     plugins/
                       {yourPluginId}/
                         {yourPluginType}/
                           {yourPluginName}/

          |

.. note::

   Here are some things to keep in mind when creating your full screen plugins with its own route:

   - If your entry file is not called ``index.js``, you must add ``&file={yourFile}`` to the above url to see your project plugin in action
   - The steps listed above will load your project plugin in the page. Your project plugin would need to bootstrap and do whatever it needs to do when loaded i.e.  it should render itself and for that, it may need to create a root element and append it to the body.
   - Some of our components, services and utils — including the ``AuthMonitor`` — are published via the ``CrafterCMSNext`` (window.CrafterCMSNext) global variable. This means you could use them in your project plugin.


-----------------------------------
Using React To Develop Your Plugins
-----------------------------------

React is already present in the Studio client runtime. You may access the lib(s) via ``CrafterCMSNext`` (window.CrafterCMSNext).

.. code-block:: js
   :linenos:
   :emphasize-lines: 3, 7, 8

   (function () {

     const { React, ReactDOM } = CrafterCMSNext;

     CStudioAuthoring.Module.moduleLoaded('react-sample', {
       initialize(config) {
         ReactDOM.render(
           React.createElement(
             'div',
             {
               style: { margin: '10px 0' },
               onClick() {
                 console.log(config);
               }
             },
             'Hello, this is a custom react plugin on the sidebar. ' +
             'Click me to print my config values on the browser console.'
           ),
           config.containerEl
         );
       }
     });

   })();

|


You can use ``JSX``, ``TypeScript`` or any form of transpiling when developing your project plugin. In this case, we
suggest the following directory structure for your files:  ``sources/{pluginSource}`` for the project plugin source and
``{yourPluginFolder}/authoring/static-assets/plugins/{pluginId}/{type}/{name}`` for the JavaScript and/or project plugin
build output files/folders containing the project plugin implementation

.. code-block:: none

   {yourPluginFolder}/
     authoring/
       static-assets/
         plugins/
           {yourPluginId}/
             {yourPluginType}/     <= Your plugin "type"
               {yourPluginName}/   <= Your plugin name
                 main.js           <= Your transpiled main/index plugin entry point
   sources/
     {pluginSource}            <= Your plugin source


|

Your project plugin's build script would then transpile your app and write the output in the project plugin folder.  You can then install
your newly created project plugin to test using the ``crafter-cli`` command ``copy-plugin``.  If your project plugin size allows,
it is preferable to have a single bundled file. If you do need multiple files (e.g. more JS files, CSS files, other),
you may have them; simply bear in mind that loading them into the page would need to be done through the ``getPluginFile``
API found here :studio_swagger_url:`#/plugin/getPluginFile` (i.e. it's not a regular web resource loaded via it's physical path).

To load a file, the URL would look like:

  `/studio/1/plugin/file?siteId={siteId}&pluginId=(yourPluginId)&type={yourPluginType}&name={yourPluginName}&file={fileName}`

For the above example directory structure, the URL for loading a file would look like:

  `/studio/1/plugin/file?siteId={siteId}&pluginId=(yourPluginId)&type={yourPluginType}&name={yourPluginName}&file=main.js`

.. note::
  - In runtime, you may get the current project id by running `CStudioAuthoringContext.site`
  - Note the ``file`` is `build/main.js` instead of just `main.js` to account for the addition in directory structure


--------
Examples
--------

Here are some examples of plugins that run inside the Studio UI, and plugins that runs a separate app outside of Studio UI

.. toctree::
   :maxdepth: 1
   :titlesonly:

   studio/plugin-sidebar-example
   studio/plugin-experience-builder-example
   studio/plugin-toolbar-example
   studio/plugin-dashboard-example
   studio/plugin-projecttools-example
   studio/plugin-navmenu-example
   studio/form-control-plugins
   studio/form-data-source-plugins
   studio/plugin-host-page-examples
