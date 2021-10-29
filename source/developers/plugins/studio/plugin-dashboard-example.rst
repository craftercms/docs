:is-up-to-date: False

.. index:: Crafter Studio Dashboard Plugin Example, Studio Plugins, Plugins

.. _plugin-dashboard-example:

=======================================
Crafter Studio Dashboard Plugin Example
=======================================

The site dashboard contains different dashlets that show at a glance all items currently in workflow, all items recently modified by the current user, etc. Dashlets shown vary depending on the user's role.
For more information on the Dashboard, see :ref:`here <site-dashboard>`

.. image:: /_static/images/content-author/site-dashboard.jpg
   :align: center
   :alt: Studio Dashboard
   :width: 80%

|

Let's take a look at an example of creating a Dashboard plugin in Studio using a site called ``My Site`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our dashboard site plugin.  We'll follow the convention listed in :ref:`plugin-directory-structure`.  For our example, PLUGIN_TYPE is ``dashboard`` and the PLUGIN_NAME is ``test-dashboard``

   In a local folder, create the descriptor file for your site plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin``, then create the folder ``authoring``.  Under the ``authoring`` folder, create the ``js`` folder.  Under the ``js`` folder, create the folder ``dashboard``.  Under the ``dashboard`` folder, create the folder ``test-dashboard``, which is the name of the dashboard site plugin we're building.  We will be placing the JS file implementing the dashboard site plugin under the ``react-sample`` folder.  In the example below, the JS file is ``main.js``

   .. code-block:: text
         :caption: *Dashboard Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             js/
               dashboard/
                 test-dashboard/
                   main.js

   |

   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/dashboard-plugin``

#. Inside the ``test-dashboard`` folder, create two empty files, ``index.css`` and ``script.js``, then create the javascript file for our plugin, by using this plugin example https://github.com/rart/craftercms-ui-plugin-sample which will generate the ``index.modern.js`` file:

   .. code-block:: js
      :linenos:
      :caption: *config/studio/plugins/dashboard/test-dashboard/index.modern.js*

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

#. To setup our dashboard site plugin to be automatically wired in the corresponding configuration file in Studio (which for a dashboard, is the User Interface Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

   .. todo: update yaml

   .. code-block:: yaml
      :linenos:
      :caption: *craftercms-plugin.yaml*
      :emphasize-lines: 17-18

      installation:
        - type: preview-app
          parentXpath: /siteUi/widget[@id='craftercms.components.Dashboard']
          testXpath: //plugin[@id='org.craftercms.plugin.dashboard']
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
                    value: org.craftercms.plugin.dashboard
                  - name: type
                    value: dashboard
                  - name: name
                    value: test-dashboard
                  - name: file
                    value: index.modern.js

       |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the installation section *plugin.id* which for our example is ``org.craftercms.plugin``

#. After placing your plugin files and setting up auto-wiring, the site plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/site-plugins/dashboard-plugin-files.png
      :align: center
      :alt: Dashboard site plugin directory/files
      :width: 50%

   |

   When running a ``crafter-cli`` command, the connection to Crafter CMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the site ``mysite`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s mysite --path /users/myuser/myplugins/dashboard-plugin

      |

#. Let's take a look at our plugin in action by clicking on the Crafter CMS logo at the top left of your browser to open the sidebar, then click on ``Dashboard``:

   .. image:: /_static/images/developer/plugins/site-plugins/dashboard-plugin-in-action.jpg
      :align: center
      :alt: Dashboard site plugin in action

   |

   You may also open the Dashboard anywhere via the Launcher, which is opened by clicking the ``apps`` icon on the top right:

   .. image:: /_static/images/developer/plugins/site-plugins/open-dashboard-from-launcher.jpg
      :align: center
      :alt: Open Dashboard from the Launcher

   |


   Here's the auto-wired section in the configuration after installing the plugin:

   .. code-block:: xml
      :linenos:
      :emphasize-lines: 14-19

      <siteUi>
        ...
        <widget id="craftercms.components.Dashboard">
          <configuration>
            <widgets>
              <widget id="craftercms.components.AwaitingApprovalDashlet">
                <permittedRoles>
                  <role>admin</role>
                  <role>developer</role>
                  <role>publisher</role>
                </permittedRoles>
              </widget>
              ...
              <widget id="org.craftercms.sampleComponentLibraryPlugin.components.reactComponent">
                <plugin id="org.craftercms.plugin.dashboard"
                        type="dashboard"
                        name="test-dashboard"
                        file="index.modern.js"/>
              </widget>
              ...

   |
