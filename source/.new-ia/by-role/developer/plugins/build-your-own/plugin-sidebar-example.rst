:is-up-to-date: True

.. index:: Crafter Studio Sidebar Plugin Example, Studio Plugins, Plugins

.. _newIa-plugin-sidebar-example:

=====================================
Crafter Studio Sidebar Plugin Example
=====================================

Let's take a look at an example of creating a Sidebar plugin in Studio using a site called ``mysite`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our sidebar site plugin.  We'll follow the convention listed in :ref:`newIa-plugin-directory-structure`.  For our example, PLUGIN_TYPE is ``sidebar`` and the PLUGIN_NAME is ``react-sample``

   In a local folder, create the descriptor file for your site plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin``, then create the folder ``authoring``.  Under the ``authoring`` folder, create the ``js`` folder.  Under the ``js`` folder, create the folder ``sidebar``.  Under the ``sidebar`` folder, create the folder ``react-sample``, which is the name of the sidebar site plugin we're building.  We will be placing the JS file implementing the sidebar site plugin under the ``react-sample`` folder.  In the example below, the JS file is ``main.js``

   .. code-block:: text
         :caption: *Form Engine Data Source Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             static-assets/
               plugins/
                 org/
                   craftercms/
                     plugin/
                      sidebar/
                        react-sample/
                          main.js

   |

   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/sidebar-plugin``

#. Inside the ``react-sample`` folder, create two empty files, ``index.css`` and ``script.js``, then create the javascript file for our plugin, by using this plugin example https://github.com/rart/craftercms-ui-plugin-sample which will generate the ``index.modern.js`` file:

   .. code-block:: js
      :linenos:
      :caption: *config/studio/plugins/sidebar/react-sample/index.modern.js*

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

#. To setup our sidebar site plugin to be automatically wired in the corresponding configuration file in Studio (which for a sidebar, is the User Interface Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

   .. code-block:: yaml
      :linenos:
      :caption: *craftercms-plugin.yaml*
      :emphasize-lines: 17-18

      installation:
      - type: preview-app
        parentXpath: //widget[@id='craftercms.components.ToolsPanel']
        testXpath: //plugin[@id='org.craftercms.plugin.sidebar']
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

   |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the installation section *plugin.id* which for our example is ``org.craftercms.plugin``

#. After placing your plugin files and setting up auto-wiring, the site plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/site-plugins/sidebar-plugin-files.png
      :align: center
      :alt: Sidebar site plugin directory/files
      :width: 30%

   |

   When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the :ref:`add-environment <newIa-crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the site ``mysite`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s mysite --path /users/myuser/myplugins/sidebar-plugin

      |

#. Let's take a look at our plugin in action by clicking on the CrafterCMS logo at the top left of your browser to open the sidebar:

   .. image:: /_static/images/developer/plugins/site-plugins/sidebar-plugin-in-action.jpg
      :align: center
      :alt: Sidebar site plugin in action

   |

   Here's the auto-wired section in the configuration after installing the plugin:

   .. code-block:: xml
      :linenos:
      :emphasize-lines: 31-36

      <siteUi>
        <widget id="craftercms.components.ToolsPanel">
          <configuration>
          <widgets>
            <widget id="craftercms.components.ToolsPanelEmbeddedAppViewButton">
               <configuration>
                  <title id="words.dashboard" defaultMessage="Dashboard"/>
                  <icon id="@material-ui/icons/DashboardRounded"/>
                  <widget id="craftercms.components.Dashboard"/>
               </configuration>
            </widget>
            <widget id="craftercms.components.ToolsPanelPageButton">
               <configuration>
                  <title id="previewSiteExplorerPanel.title" defaultMessage="Site Explorer"/>
                  <icon id="craftercms.icons.SiteExplorer"/>
               ...
            </widget>
            <widget id="craftercms.components.ToolsPanelPageButton">
               <permittedRoles>
                  <role>admin</role>
                  <role>developer</role>
               </permittedRoles>
               <configuration>
                  <title id="siteTools.title" defaultMessage="Site Tools"/>
                  <icon id="@material-ui/icons/TuneRounded"/>
                  <widgets>
                     <widget id="craftercms.components.SiteToolsPanel"/>
                  </widgets>
               </configuration>
            </widget>
            <widget id="org.craftercms.sampleComponentLibraryPlugin.components.reactComponent">
               <plugin id="org.craftercms.plugin"
                       type="sidebar"
                       name="react-sample"
                       file="index.modern.js"/>
            </widget>
          </widgets>
        </configuration>
      </widget>
      ...

   |
