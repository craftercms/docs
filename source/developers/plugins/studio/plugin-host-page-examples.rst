:is-up-to-date: False

.. index:: Crafter Studio Plugin Host Page Examples, Studio Plugins, Plugins

.. _plugin-host-page-examples:

========================================
Crafter Studio Plugin Host Page Examples
========================================

The plugin host page is a full screen plugin with its own route.  As noted in :ref:`studio-plugins`, the steps listed there will load your plugin in the page, but you will need to manage the UI yourself.

There are three examples available each with a different setup:

* **Vanilla**: the simplest possible plugin with a single JavaScript file, ``index.js``
* **React**: a ``create-react-app`` React application. This is one of the most popular set ups for React apps and one of the advantages is that people can run their own little dev server to run the app out side of Studio — because of this, developers wouldn't need to commit every single change so Studio can view the changes like in the other two setups.
* **Modern**: also a react-based app that does not use the ``create-react-app``, but uses a modern setup (transpilation and bundling). This one has a watch mode that transpiles, bundles and commits on every change; it’s quite nice but git log will get a fair amount of history since, when developing and testing, developers do loads of changes/saves. This can be mitigated by, developing, doing all the work and once you’re in a happy place ``git reset {commit}`` to clean the log and only commit the significant milestones.


To view the three sample setups listed above, we'll need to create a site from a remote Git repository with **Site ID** ``editorial``, which contains the source for the three examples.  We would then build and deploy the plugins using the provided script.  The script builds or copies a Studio plugin depending on what is in the root, places it according to the plugin directory structure, then commits the files in the ``plugins`` directory so Studio can see the changes.  After running the script, the plugin page is now available for viewing.

Let's begin:

#. From **Sites**, click on **Create Site**, then select ``Remote Git Repository`` from the *Private Blueprints* tab.
#. Fill in the following fields with the values listed below:

   * **Site ID**: editorial
   * **Git Repo URL**: https://github.com/rart/craftercms-editorial-ice

#. Make the ``plugin_deploy.sh`` file executable under the *CRAFTER_HOME/data/repos/sites/SITE_NAME/sandbox/sources* folder.  This is the script that builds and deploys the plugins.

     .. code-block:: bash
        :caption: *CRAFTER_HOME/data/repos/sites/SITE_NAME/sandbox/sources*

        chmod +x plugin_deploy.sh

     |

#. Deploy the plugins ``react-app``, ``modern`` and ``vanilla``

     .. code-block:: bash
        :caption: *CRAFTER_HOME/data/repos/sites/SITE_NAME/sandbox/sources*

        ./plugin_deploy.sh --target=studio-plugin-cra --name=react-app
        ./plugin_deploy.sh --target=studio-plugin-modern --name=modern
        ./plugin_deploy.sh --target=studio-plugin-vanilla --name=vanilla

     |

   Here's the output when deploying the vanilla plugin using the ``plugin_deploy.sh`` script:

     .. code-block:: bash

        ➜  sources git:(master) ./plugin_deploy.sh --target=studio-plugin-vanilla --name=vanilla
        ============>
        [INFO] Category not supplied, assuming `apps` as the category.
               You may call this script with `--category={categoryName}` to modify.
        [INFO] Your plugin will be at deployed at `{site}/config/studio/plugins/apps/vanilla`.
        • Beginning app build & deploy
        • Plugin directory does not exist. Creating "{site}/config/studio/plugins/apps/vanilla".
        • No `package.json` found. Assuming the source is same as build.
        • Copying {site}/sources/studio-plugin-vanilla/* into {site}/config/studio/plugins/apps/vanilla.
        • Adding stuff to git (so studio can see changes)
        • Committing changes
        [master d860213] Plugin build
         2 files changed, 127 insertions(+)
         create mode 100644 config/studio/plugins/apps/vanilla/craftercms-plugin.yaml
         create mode 100644 config/studio/plugins/apps/vanilla/index.js


        All done. Arrivederci!️ 🙂
        <============

     |

#. Visit the plugin page with the respective URL for the plugin to view

   To view the **vanilla** plugin, visit: ``/studio/plugin?site=editorial&type=apps&name=vanilla``

   .. image:: /_static/images/developer/plugins/plugin-vanilla.png
      :align: center
      :width: 85%
      :alt: Vanilla Plugin Page Example

   |

   To view the **react-app** plugin, visit ``/studio/plugin?site=editorial&type=apps&name=react-app&file=index.html``.  Notice that for the ``react-app`` plugin, the entry file is not ``index.js``, so the entry file was specified in the call by adding ``&file=index.html``

   .. image:: /_static/images/developer/plugins/plugin-react-app.png
      :align: center
      :width: 85%
      :alt: Modern Plugin Page Example

   |

   To view the **modern** plugin, visit ``/studio/plugin?site=editorial&type=apps&name=modern``

   .. image:: /_static/images/developer/plugins/plugin-modern.png
      :align: center
      :width: 85%
      :alt: Modern Plugin Page Example

   |

