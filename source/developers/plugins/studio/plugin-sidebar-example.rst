:is-up-to-date: False

.. index:: Crafter Studio Sidebar Plugin Example, Studio Plugins, Plugins

.. _plugin-sidebar-example:

=====================================
Crafter Studio Sidebar Plugin Example
=====================================

Let's take a look at an example of creating a Sidebar plugin in Studio using a site called ``mysite`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our sidebar site plugin.  We'll follow the convention listed in :ref:`studio-plugins` under the ``Site Plugin Directory Structure``.  For our example, PLUGIN_TYPE is ``sidebar`` and the PLUGIN_NAME is ``react-sample``

   In a local folder, create the descriptor file for your site plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin``, then create the folder ``authoring``.  Under the ``authoring`` folder, create the ``js`` folder.  Under the ``js`` folder, create the folder ``sidebar``.  Under the ``sidebar`` folder, create the folder ``react-sample``, which is the name of the sidebar site plugin we're building.  We will be placing the JS file implementing the sidebar site plugin under the ``react-sample`` folder.  In the example below, the JS file is ``main.js``

   .. code-block:: text
         :caption: *Form Engine Data Source Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             js/
               sidebar/
                 react-sample/
                   main.js

   |

   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/sidebar-plugin``

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

   |

#. After placing your JS file, the site plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   When running a ``crafter-cli`` command, the connection to Crafter CMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the site ``mysite`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s mysite --path /users/myuser/myplugins/form-datasource-plugin

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

      |

#. Let's take a look at our plugin in action by viewing the **Dashboard** or by clicking on the site name or the Crafter CMS logo at the top left of your browser:

   .. image:: /_static/images/developer/plugins/sidebar-plugin-in-action.png
      :align: center
      :alt: Active Environment Displayed in Site Config Configuration

.. note::
   Make sure the first parameter sent to ``moduleLoaded`` in your JavaScript file matches the value of the tag on the Sidebar Configuration XML file. If everything works but the plugin doesn't show, this could be the reason.

