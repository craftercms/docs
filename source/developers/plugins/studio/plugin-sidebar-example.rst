:is-up-to-date: True

.. index:: Crafter Studio Sidebar Plugin Example, Studio Plugins, Plugins

.. _plugin-sidebar-example:

=====================================
Crafter Studio Sidebar Plugin Example
=====================================

Let's take a look at an example of creating a Sidebar plugin in Studio using a site called ``mysite`` created using the **Website Editorial** blueprint.

#. Create a folder under ``data/repos/site/mysite/sandbox/config/studio`` called ``plugins``
#. Inside the ``plugins`` folder, create a directory called ``sidebar`` (or whatever your plugin type {yourPluginType} is)
#. Inside the ``sidebar`` folder, create a directory called ``react-sample`` (or whatever your plugin name {yourPluginName} is)

      .. code-block:: text
         :linenos:
         :emphasize-lines: 8,9,10

         data/
           repos/
             sites/
               mysite/
                 sandbox/
                   config/
                     studio/
                       plugins/
                         sidebar/
                           react-sample/

      |

#. Inside the ``react-sample`` folder, create the javascript file for our plugin, ``main.js`` and copy the following into the file:

   .. code-block:: js
      :linenos:
      :caption: *config/studio/plugins/sidebar/react-sample/main.js*

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

#. Remember to commit the files copied so Studio will pick it up.  Whenever you edit directly in the filesystem, you need to commit your changes to ensure they are properly reflected.

      .. code-block:: bash

         ➜  sandbox git:(master) ✗ git add config/studio/plugins/
         ➜  sandbox git:(master) ✗ git commit -m "Add plugin file for sidebar"

      |

#. The example we are working on is a plugin for the Studio Sidebar.  We'll now add our plugin to the sidebar configuration of our site.
   Open the **Sidebar**, click on |siteConfig|, then **Configuration**.  From the dropdown box, select **Sidebar Configuration** and add the following:

      .. code-block:: xml
          :caption: *Sidebar Configuration*
          :linenos:

          <!-- Sample React Sidebar Widget -->
          <modulehook>
            <plugin>
              <type>sidebar</type>
              <name>react-sample</name>
              <file>main.js</file>
            </plugin>
            <params>
              <!--
                Any config params you specify here, will
                be passed to the "initialize" function of your plugin.
              -->
            </params>
          </modulehook>

#. Let's take a look at our plugin in action by viewing the **Dashboard** by clicking on the site name or the CrafterCMS logo at the top left of your browser:

   .. image:: /_static/images/developer/plugins/sidebar-plugin-in-action.png
      :align: center
      :alt: Active Environment Displayed in Site Config Configuration

.. note::
   Make sure the first parameter sent to ``moduleLoaded`` in your JavaScript file matches the value of the tag on the Sidebar Configuration XML file. If everything works but the plugin doesn't show, this could be the reason.

