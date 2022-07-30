:is-up-to-date: True
:nosearch:

.. index:: Crafter Studio Toolbar Plugin Example, Studio Plugins, Plugins

.. _newIa-plugin-toolbar-example:

=====================================
Crafter Studio Toolbar Plugin Example
=====================================

The toolbar is a fixed element at the top of Studio.  It provides contextual workflow and other options relative to the page you are looking at, content you have selected or tool you are using.


.. image:: /_static/images/developer/plugins/project-plugins/studio-toolbar.png
   :align: center
   :alt: Studio Toolbar
   :width: 80%

|

Let's take a look at an example of creating a toolbar plugin in Studio using a project called ``My Editorial`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our toolbar project plugin.  We'll follow the convention listed in :ref:`newIa-plugin-directory-structure`.  For our example, PLUGIN_TYPE is ``toolbar`` and the PLUGIN_NAME is ``test-toolbar``

   In a local folder, create the descriptor file for your project plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin.exampletoolbar``, then create the following folder structure:

   .. code-block:: text
         :caption: *Toolbar Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             static-assets/
               plugins/
                 org/
                   craftercms/
                     plugin/
                       exampletoolbar/
                         toolbar/
                           test-toolbar/

   |

   We will be placing the JS file implementing the toolbar project plugin under the ``test-toolbar`` folder
   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/toolbar-plugin``

#. We'll create the javascript file for our plugin by following the instructions in the plugin example
   `here <https://github.com/craftercms/craftercms-ui-plugin-sample>`__ which will generate the
   ``index.modern.js`` file.

   Inside the ``test-toolbar`` folder, create two empty files, ``index.css`` and ``script.js``,
   and place the ``index.modern.js`` file in it.

#. To setup our toolbar project plugin to be automatically wired in the corresponding configuration file in Studio (which for a toolbar tool, is the User Interface Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

   .. code-block:: yaml
      :linenos:
      :caption: *craftercms-plugin.yaml*
      :emphasize-lines: 19-20

      installation:
        - type: preview-app
          parentXpath: //widget[@id='craftercms.components.PreviewToolbar']
          elementXpath: //plugin[@id='org.craftercms.sampleToolbarPlugin.components.reactComponent']
          element:
            name: configuration
            children:
            - name: rightSection
              children:
              - name: widgets
                children:
                - name: widget
                  attributes:
                  - name: id
                    value: org.craftercms.sampleToolbarPlugin.components.reactComponent
                  children:
                  - name: plugin
                    attributes:
                    - name: id
                      value: org.craftercms.plugin.exampletoolbar
                    - name: type
                      value: toolbar
                    - name: name
                      value: test-toolbar
                    - name: file
                      value: index.modern.js

   |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the installation section *plugin.id* which for our example is ``org.craftercms.plugin``

#. After placing your plugin files and setting up auto-wiring, the project plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/project-plugins/toolbar-plugin-files.png
      :align: center
      :alt: Toolbar project plugin directory/files
      :width: 80%

   |

   When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the :ref:`add-environment <newIa-crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the project ``my-editorial`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s my-editorial --path /users/myuser/myplugins/toolbar-plugin

      |

#. Let's take a look at our plugin in action by refreshing your browser:

   .. image:: /_static/images/developer/plugins/project-plugins/toolbar-plugin-in-action.png
      :align: center
      :alt: Toolbar project plugin in action
      :width: 100%

   |

   Here's the auto-wired section in the configuration after installing the plugin:

   .. code-block:: xml
      :linenos:
      :emphasize-lines: 31-36

      <siteUi>
      ...
        <widget id="craftercms.components.PreviewToolbar">
          <configuration>
            <leftSection>
              <widgets>
                <widget id="craftercms.components.SiteSwitcherSelect"/>
                <widget id="craftercms.components.QuickCreate"/>
              </widgets>
            </leftSection>
            <middleSection>
              <widgets>
                <widget id="craftercms.components.PreviewAddressBar"/>
              </widgets>
            </middleSection>
            <rightSection>
              <widgets>
                <widget id="craftercms.components.EditModesSwitcher"/>
                <widget id="craftercms.components.PublishingStatusButton">
                  <configuration>
                    <variant>icon</variant>
                  </configuration>
                </widget>
                <widget id="craftercms.components.WidgetDialogIconButton">
                  <configuration>
                    <title id="words.search" defaultMessage="Search"/>
                    <icon id="@mui/icons-material/SearchRounded"/>
                    <widget id="craftercms.components.EmbeddedSearchIframe"/>
                  </configuration>
                </widget>
                <widget id="org.craftercms.sampleToolbarPlugin.components.reactComponent">
                  <plugin id="org.craftercms.plugin"
                          type="toolbar"
                          name="test-toolbar"
                          file="index.modern.js"/>
                </widget>
              </widgets>
            </rightSection>
          </configuration>
        </widget>

        ...

   |
