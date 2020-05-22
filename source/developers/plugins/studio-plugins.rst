:is-up-to-date: True

.. index:: Crafter Studio Plugins, Studio Plugins, Plugins

.. _studio-plugins:

======================
Crafter Studio Plugins
======================

Crater Studio plugins allow users to replace, extend or even create stand alone experiences to serve a particular use case or set of use cases.
Studio plugins extend the authoring environment and can be pieces within Studio UI or have their own devoted page inside Studio, in which case plugin authors have a blank canvas to design their full plugin experience.

Stand alone plugins can make use of Studio UI components using various possible mechanisms described below.

The Crafter Studio API that gets a file for a given plugin, the ``getPluginFile`` API found here :studio_swagger_url:`#/plugin/getPluginFile` facilitates extending Studio through plugins.

--------------------------
Plugin Directory Structure
--------------------------

When using plugins, the JavaScript files and folders location for the plugins uses a convention where the files/folders needs to go in the following location:

* **Plugin** : $CRAFTER_HOME/data/repos/sites/SITE_NAME/sandbox/config/studio/plugins/PLUGIN_TYPE/PLUGIN_NAME/PLUGIN_FILES_FOLDERS

where:

- **CRAFTER_INSTALL** : Studio location
- **SITE_NAME** : Name of site where the plugin is to be added
- **PLUGIN_TYPE** : Type of plugin, e.g. control, datasource, sidebar, app, etc.
- **PLUGIN_NAME** : Name of  plugin
- **PLUGIN_FILES_FOLDERS** : JavaScript and/or plugin build output files/folders containing the plugin implementation

.. note:: When using an out-of-the-box blueprint to create your site, the ``plugins`` folder does not exist under ``CRAFTER_INSTALL/data/repos/sites/SITE_NAME/sandbox/config/studio/`` and will need to be created by the user creating the plugins.


--------------------------------
Creating a Crafter Studio Plugin
--------------------------------
Let'a take a look at how to create a Crafter Studio plugin.

#. Create your plugin e.g. a JavaScript file or React app
#. Create the required directory structure as outlined above then add your plug-in to your site under the ``config/studio/plugins/{yourPluginType}/{yourPluginName}`` directory

      .. code-block:: text
         :linenos:

         {siteRoot}/
           config/
             studio/
               plugins/
                 {yourPluginType}/
                   {yourPluginName}/

      |

#. Commit the new files added so it will be picked up by Studio
#. If your plugin is inside Studio, setup needed configuration files, etc.
#. See your plugin in action by refreshing your Studio browser if your plugin is inside Studio, otherwise visit: ``/studio/plugin?site={site}&type={yourPluginType}&name={yourPluginName}``

.. note::

   Here are some things to keep in mind when creating your full screen plugins with its own route:

   - If your entry file is not called ``index.js``, you must add ``&file={yourFile}`` to the above url to see your plugin in action
   - The steps listed above will load your plugin in the page. Your plugin would need to bootstrap and do whatever it needs to do when loaded i.e.  it should render itself and for that, it may need to create a root element and append it to the body.
   - Some of our components, services and utils — including the ``AuthMonitor`` — are published via the ``CrafterCMSNext`` (window.CrafterCMSNext) global variable. This means you could use them in your plugin.


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


You can use ``JSX``, ``TypeScript`` or any form of transpiling when developing your plugin. In this case, we suggest the following directory structure for your files:  ``{sandbox}/sources/{pluginSource}`` for the plugin source and ``{sandbox}/config/studio/plugins/{type}/{name}/(pluginBuild)`` for the JavaScript and/or plugin build output files/folders containing the plugin implementation

.. code-block:: none

   {sanbox}/
     config/
       studio/
         plugins/
           {yourPluginType}/     <= Your plugin "type"
             {yourPluginName}/   <= Your plugin name
               {pluginBuild}/
                 main.js         <= Your transpiled main/index plugin entry point
     sources/
       {pluginSource}            <= Your plugin source


|

Your plugin's build script would then transpile your app and write the output on the ``pluginBuild`` folder and commit that
output so Studio can see it. If your plugin size allows, it is preferable to have a single bundled file. If you do
need multiple files (e.g. more JS files, CSS files, other), you may have them; simply bear in mind that loading them
into the page would need to be done through the ``getPluginFile`` API found here :studio_swagger_url:`#/plugin/getPluginFile` (i.e. it's not a regular web resource loaded
via it's physical path).

To load a file, the URL would look like:

  `/studio/api/2/plugin/file?siteId={siteId}&type={yourPluginType}&name={yourPluginName}&file={fileName}`

For the above example directory structure, the URL for loading a file would look like:

  `/studio/api/2/plugin/file?siteId={siteId}&type={yourPluginType}&name={yourPluginName}&file={pluginBuild}/main.js`

.. note::
  - In runtime, you may get the current site id by running `CStudioAuthoringContext.site`
  - Note the ``file`` is `build/main.js` instead of just `main.js` to account for the addition in directory structure


--------
Examples
--------

Here are some examples of plugins that run inside the Studio UI, and plugins that runs a separate app outside of Studio UI

.. toctree::
   :maxdepth: 1
   :titlesonly:

   studio/plugin-sidebar-example
   studio/form-control-plugins
   studio/form-data-source-plugins
   studio/plugin-host-page-examples
