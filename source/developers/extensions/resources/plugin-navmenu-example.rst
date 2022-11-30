:is-up-to-date: True
:last-updated: 4.0.1

.. index:: Crafter Studio Navigation Menu Plugin Example, Studio Plugins, Plugins

.. _plugin-navmenu-example:

=============================================
Crafter Studio Navigation Menu Plugin Example
=============================================

The Navigation Menu contains tools that are used for daily activities by users.
For more information on the Navigation Menu, see :ref:`here <navigating-main-menu>`

.. image:: /_static/images/developer/plugins/project-plugins/open-dashboard-from-launcher.webp
   :align: center
   :alt: Navigation Menu
   :width: 80%

|

Let's take a look at an example of creating a Navigation Menu plugin in Studio using a project called ``My Editorial`` created using the **Website Editorial** blueprint.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our navigation menu project plugin.  We'll follow the convention listed in :ref:`ui-plugin-directory-structure`.  For our example, CATEGORY is ``navmenu`` and the NAME is ``test-navmenu``

   In a local folder, create the descriptor file for your project plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin.examplenavmenu``, then create the following folder structure:

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
                       examplenavmenu/
                         navmenu/
                           test-navmenu/

   |

   We will be placing the JS file implementing the toolbar project plugin under the ``test-navmenu`` folder
   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/navmenu-plugin``

#. We'll create the javascript file for our plugin by following the instructions in the plugin example
   `here <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-component-library>`__ which will generate the
   ``index.js`` file.

   Inside the ``test-navmenu`` folder, create two empty files, ``index.css`` and ``script.js``,
   and place the ``index.js`` file in it.


#. To setup our navigation menu project plugin to be automatically wired in the corresponding configuration file in Studio (which for the navigation menu, is the User Interface Configuration file) during the installation, add the following to your ``craftercms-plugin.yaml`` descriptor file

   .. code-block:: yaml
      :linenos:
      :caption: *craftercms-plugin.yaml*
      :emphasize-lines: 18-19

      installation:
        - type: preview-app
          parentXpath: //widget[@id='craftercms.components.Launcher']
          elementXpath: //plugin[@id='org.craftercms.sampleNavMenuPlugin.components.reactComponent']
          element:
            name: configuration
            children:
            - name: widgets
              children:
              - name: widget
                children:
                - name: configuration
                  children:
                  - name: widgets
                    children:
                    - name: widget
                      attributes:
                      - name: id
                        value: org.craftercms.sampleNavMenuPlugin.components.reactComponent
                      children:
                      - name: plugin
                        attributes:
                        - name: id
                          value: org.craftercms.plugin.examplenavmenu
                        - name: type
                          value: navmenu
                        - name: name
                          value: test-navmenu
                        - name: file
                          value: index.js

       |

   Remember to use the same value used in ``plugin.id`` (found at the top of the descriptor file) for the installation section *plugin.id* which for our example is ``org.craftercms.plugin``

#. After placing your plugin files and setting up auto-wiring, the project plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/project-plugins/navmenu-plugin-files.webp
      :align: center
      :alt: Navigation Menu project plugin directory/files
      :width: 80%

   |

   When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the project ``my-editorial`` by running the following:

      ..  code-block:: bash

          ./crafter-cli copy-plugin -e local -s my-editorial --path /users/myuser/myplugins/navmenu-plugin

      |

#. Let's take a look at our plugin in action by clicking on the Navigation Menu icon on the top right:

   .. image:: /_static/images/developer/plugins/project-plugins/navmenu-plugin-in-action.webp
      :align: center
      :alt: Navigation Menu project plugin in action

   |

   Here's the auto-wired section in the configuration after installing the plugin:

   .. code-block:: xml
      :linenos:
      :emphasize-lines: 21-27

      <siteUi>
        ...
        <widget id="craftercms.components.Launcher">
          <configuration>
            <widgets>
              <widget id="craftercms.components.LauncherSection">
                <configuration>
                  <title id="launcher.siteSectionTitle">
                    <defaultMessage><![CDATA[
    					Site <muted>• {siteName}</muted>]]></defaultMessage>
                  </title>
                  <widgets>
                    <widget id="craftercms.components.LauncherLinkTile">
                      <configuration>
                        <title id="words.dashboard" defaultMessage="Dashboard"/>
                        <systemLinkId>siteDashboardDialog</systemLinkId>
                        <icon id="@mui/icons-material/DashboardRounded"/>
                      </configuration>
                    </widget>
                    ...
                    <widget id="craftercms.components.LauncherPublishingStatusTile"/>
                    <widget id="org.craftercms.sampleNavMenuPlugin.components.reactComponent">
                      <plugin id="org.craftercms.plugin.examplenavmenu"
                              type="navmenu"
                              name="test-navmenu"
                              file="index.js"/>
                    </widget>
                    ...

   |
