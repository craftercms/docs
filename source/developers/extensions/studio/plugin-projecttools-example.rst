:is-up-to-date: True

.. index:: Crafter Studio Project Tools Plugin Example, Studio Plugins, Plugins

.. _plugin-project-tools-example:

===========================================
Crafter Studio Project Tools Plugin Example
===========================================

|projectTools| contains tools that site administrators use for daily activities.  For more information
on the available tools in |projectTools|, see :ref:`navigating-project-tools`

.. image:: /_static/images/developer/plugins/project-plugins/studio-project-tools.webp
   :align: center
   :alt: Studio Project Tools
   :width: 80%

|

Let's take a look at an example of creating a ``Project Tools`` tool plugin in Studio using a project
called ``My Editorial`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file
   for our project tools tool project plugin.  We'll follow the convention listed in :ref:`plugin-directory-structure`.
   For our example, PLUGIN_TYPE is ``project-tools`` and the PLUGIN_NAME is ``test-project-tools``

   In a local folder, create the descriptor file for your project plugin ``craftercms-plugin.yaml`` with
   the ``plugin.id`` set to ``org.craftercms.plugin.exampleprojecttools``, then create the following
   folder structure:

   .. code-block:: text
         :caption: *Project Tools Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             static-assets/
               plugins/
                 org/
                   craftercms/
                     plugin/
                       exampleprojecttools/
                         project-tool/
                           test-project-tools/

   |

   We will be placing the JS file implementing the toolbar project plugin under the ``test-project-tools``
   folder.  For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/projecttools-plugin``

#. We'll create the javascript file for our plugin by following the instructions in the plugin example
   `here <https://github.com/craftercms/craftercms-ui-plugin-sample>`__ which will generate the
   ``index.modern.js`` file.

   Inside the ``test-project-tools`` folder, create two empty files, ``index.css`` and ``script.js``,
   and place the ``index.modern.js`` file in it.


#. To setup our ``Project Tools`` tool project plugin to be automatically wired in the corresponding configuration file in Studio (which for a project tools tool, is the User Interface Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

   .. code-block:: yaml
      :linenos:
      :caption: *craftercms-plugin.yaml*
      :emphasize-lines: 29-30

      installation:
        - type: preview-app
          parentXpath: //reference[@id='craftercms.siteTools']
          elementXpath: //plugin[@id='org.craftercms.sampleProjectToolsPlugin.components.reactComponent']
          element:
            name: tools
            children:
            - name: tool
              children:
              - name: title
                attributes:
                - name: id
                  value: "test.projecttool"
                - name: defaultMessage
                  value: "Test Adding Project Tool"
              - name: icon
                attributes:
                - name: id
                  value: "@mui/icons-material/WidgetsOutlined"
              - name: url
                value: test
              - name: widget
                attributes:
                - name: id
                  value: org.craftercms.sampleProjectToolsPlugin.components.reactComponent
                children:
                - name: plugin
                  attributes:
                  - name: id
                    value: org.craftercms.plugin.exampleprojecttools
                  - name: type
                    value: project-tool
                  - name: name
                    value: test-project-tools
                  - name: file
                    value: index.modern.js

   |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the installation section *plugin.id* which for our example is ``org.craftercms.plugin.exampleprojecttools``

#. After placing your plugin files and setting up auto-wiring, the project plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/project-plugins/project-tools-plugin-files.webp
      :align: center
      :alt: Project Tools tool project plugin directory/files
      :width: 80%

   |

   When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the project ``my-editorial`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s my-editorial --path /users/myuser/myplugins/project-tools-plugin

      |

#. Let's take a look at our plugin in action by clicking on the CrafterCMS logo at the top left of your browser to open the sidebar, then click on ``Project Tools``:

   .. image:: /_static/images/developer/plugins/project-plugins/project-tools-plugin-in-action.webp
      :align: center
      :alt: Project Tools project plugin in action

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
                <title id="test.sitetool" defaultMessage="Test Adding Project Tool"/>
                <icon id="@mui/icons-material/WidgetsOutlined"/>
                <url>test</url>
                <widget id="org.craftercms.sampleProjectToolsPlugin.components.reactComponent">
                   <plugin id="org.craftercms.plugin.exampleprojecttools"
                           type="project-tool"
                           name="test-project-tools"
                           file="index.modern.js"/>
                </widget>
              </tool>
            </tools>
          ...

   |
