:is-up-to-date: False

.. index:: Crafter Studio Full Screen Plugin Example, Studio Plugins, Plugins

.. _full-screen-plugin-example:

=========================================
Crafter Studio Full Screen Plugin Example
=========================================
Here we'll take a look at an example of creating a Full Screen Plugin for the plugin host page using the
`Vanilla example <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-vanilla>`__

For more information on the plugin host, see :ref:`here <plugin-host>`

For this example, as outlined in the vanilla example referenced above, we will need a project created using the
``Website  Editorial Blueprint``.  We'll name the project ``editorial-neue``.

#. The first thing we have to do is to create the folder structure where we will be placing the JS file for our vanilla  plugin.  We'll follow the convention listed in :ref:`ui-plugin-directory-structure`.  For our example, CATEGORY is ``apps`` and the NAME is ``example-vanilla``

   In a local folder, create the descriptor file for your plugin ``craftercms-plugin.yaml`` with the ``plugin.id`` set to ``org.craftercms.plugin.vanilla``, then create the following folder structure:

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
                       vanilla/
                         apps/
                           example-vanilla/

   |

   We will be placing the JS file implementing the plugin host page plugin under the ``vanilla-plugin`` folder.
   For our example, the <plugin-folder> is located here: ``/users/myuser/myplugins/vanilla-plugin``

   Here's the plugin descriptor file we'll be using (click on the triangle on the left to expand/collapse):

   .. raw:: html

      <details>
      <summary><a>Plugin descriptor file for vanilla example.</a></summary>

   .. literalinclude:: /_static/code/plugins/vanilla/craftercms-plugin.yaml
        :language: yaml
        :linenos:

   .. raw:: html

      </details>


#. We'll copy the JavaScript file ``index.js`` found `here <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-vanilla>`__
   for our plugin

#. After placing your plugin file, the plugin may now be installed for testing/debugging using the ``crafter-cli`` command ``copy-plugin``.

   .. image:: /_static/images/developer/plugins/project-plugins/vanilla-plugin-files.webp
      :align: center
      :alt: Vanilla plugin host page plugin directory/files
      :width: 60%

   |

   When running a ``crafter-cli`` command, the connection to CrafterCMS needs to be setup via the :ref:`add-environment <crafter-cli-add-environment>` command. Once the connection has been established, we can now install the plugin to the project ``editorial-neue`` by running the following:

   ..  code-block:: console

       ./crafter-cli copy-plugin -e local -s editorial-neue --path /users/myuser/myplugins/vanilla-plugin



#. Let's take a look at our plugin in action by entering in your browser the following:

   .. code-block:: text

      http://localhost:8080/studio/plugin?site=editorial-neue&type=apps&name=example-vanilla&pluginId=org.craftercms.plugin.vanilla

  Below is our plugin host page:

   .. image:: /_static/images/developer/plugins/project-plugins/vanilla-plugin-in-action.webp
      :align: center
      :alt: Vanilla plugin host page in action
      :width: 100%

   |
