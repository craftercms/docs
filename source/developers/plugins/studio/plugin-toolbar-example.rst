:is-up-to-date: True

.. index:: Crafter Studio Toolbar Plugin Example, Studio Plugins, Plugins

.. _plugin-toolbar-example:

=====================================
Crafter Studio Toolbar Plugin Example
=====================================

The toolbar is a fixed element at the top of Studio.  It provides contextual workflow and other options relative to the page you are looking at, content you have selected or tool you are using.


.. image:: /_static/images/developer/plugins/site-plugins/studio-toolbar.jpg
   :align: center
   :alt: Studio Toolbar
   :width: 80%

|

Let's take a look at an example of creating a toolbar plugin in Studio using a site called ``My Site`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our toolbar site plugin.  We'll follow the convention listed in :ref:`plugin-directory-structure`.  For our example, PLUGIN_TYPE is ``toolbar`` and the PLUGIN_NAME is ``react-sample``

   In a local folder, create the descriptor file for your site plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin``, then create the folder ``authoring``.  Under the ``authoring`` folder, create the ``js`` folder.  Under the ``js`` folder, create the folder ``toolbar``.  Under the ``toolbar`` folder, create the folder ``test-toolbar``, which is the name of the toolbar site plugin we're building.  We will be placing the JS file implementing the toolbar site plugin under the ``react-sample`` folder.  In the example below, the JS file is ``main.js``

   .. code-block:: text
         :caption: *Toolbar Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             js/
               toolbar/
                 test-toolbar/
                   main.js

   |

   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/toolbar-plugin``

#. Inside the ``test-toolbar`` folder, create two empty files, ``index.css`` and ``script.js``, then create the javascript file for our plugin, by using this plugin example https://github.com/rart/craftercms-ui-plugin-sample which will generate the ``index.modern.js`` file:

   .. code-block:: js
      :linenos:
      :caption: *config/studio/plugins/toolbar/test-toolbar/index.modern.js*

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

#. To setup our toolbar site plugin to be automatically wired in the corresponding configuration file in Studio (which for a site tools tool, is the User Interface Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

   .. code-block:: yaml
      :linenos:
      :caption: *craftercms-plugin.yaml*
      :emphasize-lines: 19-20

      installation:
        - type: preview-app
          parentXpath: //widget[@id='craftercms.components.PreviewToolbar']
          testXpath: //plugin[@id='org.craftercms.plugin.sampleTestToolbarPlugin']
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
                    value: org.craftercms.sampleComponentLibraryPlugin.components.reactComponent
                  children:
                  - name: plugin
                    attributes:
                    - name: id
                      value: org.craftercms.plugin
                    - name: type
                      value: toolbar
                    - name: name
                      value: test-toolbar
                    - name: file
                      value: index.modern.js

   |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the installation section *plugin.id* which for our example is ``org.craftercms.plugin``

#. After placing your plugin files and setting up auto-wiring, the site plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/site-plugins/toolbar-plugin-files.png
      :align: center
      :alt: Toolbar site plugin directory/files
      :width: 40%

   |

   When running a ``crafter-cli`` command, the connection to Crafter CMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the site ``mysite`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s mysite --path /users/myuser/myplugins/toolbar-plugin

      |

#. Let's take a look at our plugin in action by refreshing your browser:

   .. image:: /_static/images/developer/plugins/site-plugins/toolbar-plugin-in-action.png
      :align: center
      :alt: Toolbar site plugin in action

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
                <widget id="org.craftercms.sampleComponentLibraryPlugin.components.reactComponent">
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
