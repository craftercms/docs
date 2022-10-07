:is-up-to-date: True
:last-updated: 4.0.1

.. index:: Crafter Studio Dashboard Plugin Example, Studio Plugins, Plugins

.. _newIa-plugin-dashboard-example:

=======================================
Crafter Studio Dashboard Plugin Example
=======================================

The dashboard contains different dashlets that show at a glance all items currently in workflow, all items recently modified by the current user, etc. Dashlets shown vary depending on the user's role.
For more information on the Dashboard, see :ref:`here <newIa-project-dashboard>`

.. image:: /_static/images/content-author/project-dashboard.webp
   :align: center
   :alt: Studio Dashboard
   :width: 80%

|

Let's take a look at an example of creating a Dashboard plugin in Studio using a project called ``My Editorial`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our dashboard plugin.  We'll follow the convention listed in :ref:`newIa-ui-plugin-directory-structure`.  For our example, CATEGORY is ``dashboard`` and the NAME is ``test-dashboard``

   In a local folder, create the descriptor file for your plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin.exampletoolbar``, then create the following folder structure:

   .. code-block:: text
         :caption: *Dashboard Plugin Directory Structure*

         <plugin-folder>/
           craftercms-plugin.yaml
           authoring/
             static-assets/
               plugins/
                 org/
                   craftercms/
                     plugin/
                       exampledashboard/
                         dashboard/
                           test-dashboard/

   |

   We will be placing the JS file implementing the toolbar plugin under the ``test-toolbar`` folder
   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/toolbar-plugin``

#. We'll create the javascript file for our plugin by following the instructions in the plugin example
   `here <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-component-library>`__ which will generate the
   ``index.js`` file.

   Inside the ``test-dashboard`` folder, create two empty files, ``index.css`` and ``script.js``,
   and place the ``index.js`` file in it.


#. To setup our dashboard plugin to be automatically wired in the corresponding configuration file in Studio (which for a dashboard, is the User Interface Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

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
                    value: index.js

       |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the installation section *plugin.id* which for our example is ``org.craftercms.plugin``

#. After placing your plugin files and setting up auto-wiring, the plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/project-plugins/dashboard-plugin-files.webp
      :align: center
      :alt: Dashboard plugin directory/files
      :width: 80%

   |

   When running a ``crafter-cli`` command, the connection to Crafter CMS needs to be setup via the :ref:`add-environment <newIa-crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the project ``my-editorial`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s my-editorial --path /users/myuser/myplugins/dashboard-plugin

      |

#. Let's take a look at our plugin in action by clicking on the CrafterCMS logo at the top left of your browser to open the sidebar, then click on ``Dashboard``:

   .. image:: /_static/images/developer/plugins/project-plugins/dashboard-plugin-in-action.webp
      :align: center
      :alt: Dashboard plugin in action

   |

   You may also open the Dashboard anywhere via the Launcher, which is opened by clicking the ``apps`` icon on the top right:

   .. image:: /_static/images/developer/plugins/project-plugins/open-dashboard-from-launcher.webp
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
                        file="index.js"/>
              </widget>
              ...

   |
