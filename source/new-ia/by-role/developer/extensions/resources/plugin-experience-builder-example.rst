:is-up-to-date: True
:last-updated: 4.0.1

.. index:: Crafter Studio Experience Builder Panel Plugin Example, Studio Plugins, Plugins

.. _newIa-plugin-experience-builder-plugin-example:

================================================
Crafter Studio Experience Builder Plugin Example
================================================

The Experience Builder panel is the panel on the right of Studio that is enabled by clicking on
``Edit mode`` (pencil icon) or ``Move mode`` (two vertical ellipsis icon) on the top right of
Studio or, by hitting the ``e`` or ``m`` key on your keyboard

.. image:: /_static/images/developer/plugins/project-plugins/experience-builder-panel.webp
   :align: center
   :alt: Experience Builder Panel
   :width: 80%

|

Let's take a look at an example of creating an experience builder panel plugin in Studio using
a project called ``My Editorial`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our experience builder plugin.  We'll follow the convention listed in :ref:`newIa-ui-plugin-directory-structure`.  For our example, CATEGORY is ``experiencebuilder`` and the NAME is ``test-experiencebuilder``

   In a local folder, create the descriptor file for your plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin.experiencebuilder``, then create the following folder structure:

   .. code-block:: text
         :caption: *Experience Builder Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             static-assets/
               plugins/
                 org/
                   craftercms/
                     plugin/
                       experiencebuilder/
                         experiencebuilder/
                           test-experiencebuilder/

   |

   We will be placing the JS file implementing the toolbar plugin under the
   ``test-experiencebuilder`` folder.  For our example, the <plugin-folder> is located here:
   ``/users/myuser/myplugins/experiencebuilder-plugin``

   |

   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/experiencebuilder-plugin``

#. We'll create the javascript file for our plugin by following the instructions in the plugin example
   `here <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-component-library>`__ which will generate the
   ``index.js`` file.

   Inside the ``test-experiencebuilder`` folder, create two empty files, ``index.css`` and ``script.js``,
   and place the ``index.js`` file in it.

#. To setup our experience builder plugin to be automatically wired in the corresponding configuration file in Studio (which for an experience builder, is the User Interface Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

   .. code-block:: yaml
      :linenos:
      :caption: *craftercms-plugin.yaml*
      :emphasize-lines: 17-18

      installation:
        - type: preview-app
          parentXpath: //widget[@id='craftercms.components.ICEToolsPanel']
          testXpath: //plugin[@id='org.craftercms.plugin.experience.builder']
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
                    value: experiencebuilder
                  - name: name
                    value: test-experiencebuilder
                  - name: file
                    value: index.js

   |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the installation section *plugin.id* which for our example is ``org.craftercms.plugin``

#. After placing your plugin files and setting up auto-wiring, the plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/project-plugins/experiencebuilder-plugin-files.webp
      :align: center
      :alt: Experience Builder plugin directory/files
      :width: 80%

   |

   When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the :ref:`add-environment <newIa-crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the project ``my-editorial`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s my-editorial --path /users/myuser/myplugins/experiencebuilder-plugin

      |

#. Let's take a look at our plugin in action by clicking on the pencil icon at the top right of your browser to open the experience builder panel

   .. image:: /_static/images/developer/plugins/project-plugins/experiencebuilder-plugin-in-action.webp
      :align: center
      :alt: Experience Builder plugin in action
      :width: 30%

   |

   Here's the auto-wired section in the configuration after installing the plugin:

   .. code-block:: xml
      :linenos:
      :emphasize-lines: 17-22

      <siteUi>
        ...
        <widget id="craftercms.components.ICEToolsPanel">
          <configuration>
            <widgets>
              <widget id="craftercms.components.ToolsPanelPageButton">
                <configuration>
                  <target id="icePanel"/>
                  <title id="previewSearchPanel.title" defaultMessage="Search"/>
                  <icon id="@mui/icons-material/SearchRounded"/>
                  <widgets>
                    <widget id="craftercms.components.PreviewSearchPanel"/>
                  </widgets>
                </configuration>
              </widget>
              ...
              <widget id="org.craftercms.sampleExperienceBuilderPlugin.components.reactComponent">
                <plugin id="org.craftercms.plugin"
                        type="experiencebuilder"
                        name="test-experiencebuilder"
                        file="index.js"/>
              </widget>
             </widgets>
          </configuration>
         </widget>
         ...

   |
