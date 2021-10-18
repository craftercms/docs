:is-up-to-date: True

.. index:: Crafter Studio Site Tools Plugin Example, Studio Plugins, Plugins

.. _plugin-site-tools-example:

========================================
Crafter Studio Site Tools Plugin Example
========================================

|siteConfig| contains tools that site administrators use for daily activities.  For more information on the available tools in |siteConfig|, see :ref:`navigating-site-tools`

.. image:: /_static/images/developer/plugins/site-plugins/studio-site-tools.jpg
   :align: center
   :alt: Studio Site Tools
   :width: 80%

|

Let's take a look at an example of creating a Site Tools tool plugin in Studio using a site called ``My Site`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our site tools tool site plugin.  We'll follow the convention listed in :ref:`plugin-directory-structure`.  For our example, PLUGIN_TYPE is ``site-tools`` and the PLUGIN_NAME is ``test-site-tools``

   In a local folder, create the descriptor file for your site plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin``, then create the folder ``authoring``.  Under the ``authoring`` folder, create the ``js`` folder.  Under the ``js`` folder, create the folder ``site-tools``.  Under the ``site-tools`` folder, create the folder ``test-site-tools``, which is the name of the site tools site plugin we're building.  We will be placing the JS file implementing the site tools site plugin under the ``test-site-tools`` folder.  In the example below, the JS file is ``main.js``

   .. code-block:: text
         :caption: *Site Tools Tool Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             js/
               site-tools/
                 test-site-tools/
                   main.js

   |

   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/site-tools-plugin``

#. Inside the ``test-site-tools`` folder, create two empty files, ``index.css`` and ``script.js``, then create the javascript file for our plugin, by using this plugin example https://github.com/rart/craftercms-ui-plugin-sample which will generate the ``index.modern.js`` file:

   .. code-block:: js
      :linenos:
      :caption: *config/studio/plugins/site-tools/test-site-tools/index.modern.js*

      var { createElement } = craftercms.libs.React;
      var { makeStyles, createStyles, Typography } = craftercms.libs.MaterialUI;
      var { useIntl } = craftercms.libs.ReactIntl;
      var jss = craftercms.libs.jss && Object.prototype.hasOwnProperty.call(craftercms.libs.jss, 'default') ? craftercms.libs.jss['default'] : craftercms.libs.jss;

      ...

        apps: [
          {
            route: '/yada-yada',
            widget: { id: 'org.craftercms.sampleComponentLibraryPlugin.components.reactComponent' }
          }
        ],
        widgets: {
          'org.craftercms.sampleComponentLibraryPlugin.components.reactComponent': ReactComponent,
          'org.craftercms.sampleComponentLibraryPlugin.components.nonReactComponent': NonReactComponent
        },
        scripts: [
          {
            src: 'https://code.jquery.com/jquery-3.5.1.min.js',
            integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
            crossorigin: 'anonymous'
          },
          'script.js'
        ],
        stylesheets: ['index.css'],
        themes: []
      };

      export default plugin;


   |

#. To setup our site tools tool site plugin to be automatically wired in the corresponding configuration file in Studio (which for a site tools tool, is the User Interface Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

   .. code-block:: yaml
      :linenos:
      :caption: *craftercms-plugin.yaml*
      :emphasize-lines: 29-30

      installation:
        - type: preview-app
          parentXpath: //reference[@id='craftercms.siteTools']
          testXpath: //plugin[@id='org.craftercms.plugin.sampleTestSiteToolsPlugin']
          element:
            name: tools
            children:
            - name: tool
              children:
              - name: title
                attributes:
                - name: id
                  value: "test.sitetool"
                - name: defaultMessage
                  value: "Test Adding Site Tool"
              - name: icon
                attributes:
                - name: id
                  value: "@mui/icons-material/WidgetsOutlined"
              - name: url
                value: configuration
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
                      value: site-tool
                    - name: name
                      value: test-sitetool
                    - name: file
                      value: index.js

   |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the installation section *plugin.id* which for our example is ``org.craftercms.plugin``

#. After placing your plugin files and setting up auto-wiring, the site plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/site-plugins/site-tools-plugin-files.png
      :align: center
      :alt: Site Tools tool site plugin directory/files
      :width: 50%

   |

   When running a ``crafter-cli`` command, the connection to Crafter CMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the site ``mysite`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s mysite --path /users/myuser/myplugins/site-tools-plugin

      |

#. Let's take a look at our plugin in action by clicking on the Crafter CMS logo at the top left of your browser to open the sidebar, then click on ``Site Tools``:

   .. image:: /_static/images/developer/plugins/site-plugins/site-tools-plugin-in-action.jpg
      :align: center
      :alt: Site Tools site plugin in action

   |

   Here's the auto-wired section in the configuration after installing the plugin:

   .. code-block:: xml
      :linenos:
      :emphasize-lines: 13-18

      <siteUi>
        ...
        <references>
          <reference id="craftercms.siteTools">
            <tools>
              ...
              <tool>
                <title id="PluginManagement.title" defaultMessage="Plugin Management"/>
                <icon id="@mui/icons-material/ExtensionOutlined"/>
                <url>plugins</url>
                <widget id="craftercms.components.PluginManagement"/>
              </tool>
              <tool>
                <title id="test.sitetool" defaultMessage="Test Adding Site Tool"/>
                <icon id="@mui/icons-material/WidgetsOutlined"/>
                <url>configuration</url>
                <widget id="org.craftercms.sampleComponentLibraryPlugin.components.reactComponent"/>
              </tool>
            </tools>
          ...

   |
