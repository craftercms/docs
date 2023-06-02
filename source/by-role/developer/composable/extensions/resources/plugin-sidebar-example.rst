:is-up-to-date: True
:last-updated: 4.0.1

.. index:: Crafter Studio Sidebar Plugin Example, Studio Plugins, Plugins

.. _plugin-sidebar-example:

=====================================
Crafter Studio Sidebar Plugin Example
=====================================

Let's take a look at an example of creating a Sidebar plugin in Studio using a project called ``My Editorial``
created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for
   our sidebar project plugin. We'll follow the convention listed in :ref:`ui-plugin-directory-structure`.
   For our example, CATEGORY is ``sidebar`` and the NAME is ``react-sample``

   In a local folder, create the descriptor file for your project plugin ``craftercms-plugin.yaml`` with
   the ``plugin.id`` set to ``org.craftercms.plugin.examplesidebar``, then create the following folder structure:

   .. code-block:: text
         :caption: *Sidebar Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             static-assets/
               plugins/
                 org/
                   craftercms/
                     plugin/
                       examplesidebar/
                         sidebar/
                           reaact-sample/

   |

   We will be placing the JS file implementing the toolbar project plugin under the ``react-sample`` folder
   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/sidebar-plugin``

#. We'll create the JavaScript file for our plugin by following the instructions in the plugin example
   `here <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-component-library>`__
   which will generate the ``index.js`` file.

   Inside the ``react-sample`` folder, create two empty files, ``index.css`` and ``script.js``,
   and place the ``index.js`` file in it.


#. To setup our sidebar project plugin to be automatically wired in the corresponding configuration file
   in Studio (which for a sidebar, is the User Interface Configuration file) during the installation, add
   the following to your ``craftercms-plugin.yaml`` descriptor file

   .. code-block:: yaml
      :linenos:
      :caption: *craftercms-plugin.yaml*
      :emphasize-lines: 17-18

      installation:
        - type: preview-app
          parentXpath: //widget[@id='craftercms.components.ToolsPanel']
          elementXpath: //plugin[@id='org.craftercms.sampleSidebarPlugin.components.reactComponent']
          element:
            name: configuration
            children:
            - name: widgets
              children:
              - name: widget
                attributes:
                - name: id
                  value: org.craftercms.sampleSidebarPlugin.components.reactComponent
                children:
                - name: plugin
                  attributes:
                  - name: id
                    value: org.craftercms.plugin.examplesidebar
                  - name: type
                    value: sidebar
                  - name: name
                    value: react-sample
                  - name: file
                    value: index.js

   |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the
   installation section *plugin.id* which for our example is ``org.craftercms.plugin``

#. After placing your plugin files and setting up auto-wiring, the project plugin may now be installed for
   testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/project-plugins/sidebar-plugin-files.webp
      :align: center
      :alt: Sidebar project plugin directory/files
      :width: 70%

   |

   When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the
   :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established,
   we can now install the plugin to the project ``my-editorial`` by running the following:

      .. code-block:: bash

          ./crafter-cli copy-plugin -e local -s my-editorial --path /users/myuser/myplugins/sidebar-plugin

      |

#. Let's take a look at our plugin in action by clicking on the CrafterCMS logo at the top left of your browser
   to open the sidebar:

   .. image:: /_static/images/developer/plugins/project-plugins/sidebar-plugin-in-action.webp
      :align: center
      :alt: Sidebar project plugin in action
      :width: 30%

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
                  <title id="siteTools.title" defaultMessage="Project Tools"/>
                  <icon id="@material-ui/icons/TuneRounded"/>
                  <widgets>
                     <widget id="craftercms.components.SiteToolsPanel"/>
                  </widgets>
               </configuration>
            </widget>
            <widget id="org.craftercms.sampleSidebarPlugin.components.reactComponent">
               <plugin id="org.craftercms.plugin"
                       type="sidebar"
                       name="react-sample"
                       file="index.js"/>
            </widget>
          </widgets>
        </configuration>
      </widget>
      ...

   |
