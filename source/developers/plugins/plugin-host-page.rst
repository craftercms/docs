
.. _plugin-host-page:

===========
Plugin Host
===========

The Plugin Host (PH) is a special route within Studio that provides an empty canvas for custom
authoring apps to render.

Apps developed to run on the PH are solely responsible for rendering the entire UI of the page and
are able to access all of Studio UI components and apis through the ``window.craftercms`` global
variable on the browser or when using a development stack, through the ``@craftercms/studio-ui`` npm package.

The PH can be accessed when logged in to Studio at ``/studio/plugin``. For example,
in your local environment, http://localhost:8080/studio/plugin. In order to render a plugin,
the PH requires three to five query string arguments.

.. table:: Plugin Host Arguments
   :widths: auto

   ============ ========== ==========
   Name         Default    Description
   ============ ========== ==========
   ``site``     (required) The id of the project where the plugin is installed
   ``type``     (required) The name of the category directory inside `{sandbox}/config/studio/plugins` directory
   ``name``     (required) The name of the plugin directory inside `{sandbox}/config/studio/plugins/{type}` directory
   ``file``     index.js   The name of the file you want the PH to load. Can be either an HTML or JavaScript file
   ``pluginId``            The plugin id when the app is nested under a plugin id directory
   ============ ========== ==========

Visiting this page without any arguments would show a message stating the arguments are missing. You must
supply the above arguments for it to load and run your plugin.

The PH loads a single file which can either be a JavaScript (JS) or an HTML file. This single file is
responsible for bootstrapping the application.

- JS entry file

  - When loading a JS file, the PH loads Studio UI runtime scripts followed by your entry file. Your
    JS file is able to access all of Studio's runtime through ``window.craftercms``.
  - You can do plain JS or you can have some sort of dev stack with transpilation that outputs the final
    JS that will be loaded to the browser. For example if you wanted to use JSX or Typescript.

- HTML entry file

  - When you load a HTML file the page is exactly the HTML file you specified and hence, the CrafterCMS
    runtime is not available (e.g. you can't access ``window.craftercms``) unless you add it yourself.
    If you want to leverage UI apis or components, you should use the ``@craftercms/studio-ui``
    npm package. It is not recommended to manually copy and print Studio ``<script src="" />`` tags since
    these change with CrafterCMS version upgrades.
  - When using an HTML entry file, you can load additional scripts, stylesheets, images, etc. using
    the plugin file loader api in combination with regular the HTML tags. For example, to load a JS
    file you can simply use the ``script`` tag:
    ``<script src="/studio/1/plugin/file?siteId={SITE_ID}&type={CATEGORY}&name={NAME}&filename={FILE_NAME}"></script>``

If you have an app that requires building (e.g. transpilation), you can keep your sources inside your
CrafterCMS project or in a separate repository — up to you. The important piece is that the final build
of your plugin is placed into the plugins directory ``{sandbox}/config/studio/plugins/{category}/{pluginName}``.

   .. note::
      Any changes performed to plugin sources must be committed to the CrafterCMS project repo in order
      to view them. If you refresh the PH page and don't see the changes, chances are you didn't commit
      a change.

------------------------
Using Front-end Development Toolchain
------------------------

When you develop your application using a toolchain such as webpack (e.g. including `CRA <https://create-react-app.dev/>`_)
or similarly, you should note that the `base url` of your application isn't just ``/`` as it would
typically be. Consider the following structure for a site called "Skateboard Shop" and a plugin
called "bulk-edit"...

.. code-block::

    skakeboard-shop/sandbox/config/studio/plugins/   <== Plugins root directory
      apps/                                          <== Category directory
        bulk-edit/                                   <== Plugin root directory
          static/
            index.js
            css/
              index.css
            index.html

In order to load the ``index.js`` file, a build tool might print out ``static/index.js`` which would result in a 404.
You need to configure your tool's base url to be ``/studio/1/plugin/file?siteId=skakeboard-shop&type=apps&name=bulk-edit&filename=``
so that the final url would become ``/studio/1/plugin/file?siteId=skakeboard-shop&type=apps&name=bulk-edit&filename=static/index.js``
for the file load to succeed.

When using `CRA <https://create-react-app.dev/docs/advanced-configuration>`_, you can do the above by adding a ``.env.production``
and using the ``PUBLIC_URL`` configuration to specify the base url.

.. code-block::

    PUBLIC_URL=/studio/1/plugin/file?siteId=skakeboard-shop&type=apps&name=bulk-edit&filename=

We recommend using `React <https://reactjs.org>`_ and `Material UI <https://mui.com>`_ to develop your
apps and widgets since these will provide the most coherent integration and seamless experience for the
end user provided that CrafterCMS' UI is developed in those technologies. This will also allow you to
leverage all of Studio UI components, utilities and apis. See examples below for sample apps developed
using these technologies.

When you build an app using `@craftercms/studio-ui` package, don't be surprised if the build is large.
You're essentially building another Studio. 🙂

------
Displaying a PH App in Studio
------

At times your requirements demand the use of a standalone app but it may come useful for end-users to be
able to display the App in a modal dialog without leaving Studio UI.

CrafterCMS exports a special component named ``PluginHostIFrame`` which allows displaying an iFrame
showing the PH with a specified app. This plugin in conjunction with the ``WidgetDialog``, allows
displaying a pop up with your PH app at a time of your choosing in Studio UI.

.. tabs::

  .. code-tab:: javascript Using Npm Package

    import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
    import { useDispatch } from 'react-redux';

    const dispatch = useDispatch();
    dispatch(
      showWidgetDialog({
        title: 'Bulk Edit',
        widget: {
          id: 'craftercms.components.PluginHostIFrame',
          configuration: {
            plugin: { type: 'apps', name: 'bulk-edit', file: 'index.html' }
          }
        }
      })
    );

  .. code-tab:: javascript Using Browser Runtime

    const dispatch = craftercms.getStore().dispatch;
    dispatch({
      type: 'SHOW_WIDGET_DIALOG',
      payload: {
        title: 'Bulk Edit',
        widget: {
          id: 'craftercms.components.PluginHostIFrame',
          configuration: {
            plugin: { type: 'apps', name: 'bulk-edit', file: 'index.html' }
          }
        }
      }
    });

By default, ``PluginHostIFrame`` will use the active project but it can also receive a `site` argument
if you wish to show an iFrame with a PH app from a specific project.

------
Case Study
------

Consider a site called "Skateboard Shop", whose id is ``skateboard-shop``. We create a plugin *category*
called ``apps`` (i.e. ``{sandbox}/config/studio/plugins/apps``) and deployed an app to perform bulk content
edits at a directory called ``bulk-edit`` (i.e. ``{sandbox}/config/studio/plugins/apps/bulk-edit``). At this point,
our app is fairly simply, consisting of a single JavaScript file called ``index.js`` which does everything we need.

We can view the Bulk Edit plugin at ``/studio/plugin?site=skateboard-shop&type=apps&name=bulk-edit``.

As the app requirements evolved, and the UI became more complex, we might decide to use Create React App,
the Angular CLI, etc. to convert our simple plugin to a full application with hash routing. At this point,
the entry point will become an ``index.html`` which these tools tend to generate. In order to run this application
now, we'll want to load the ``index.html`` instead of the ``index.js``.

We can now view the Bulk Edit plugin at ``/studio/plugin?site=skateboard-shop&type=apps&name=bulk-edit&file=index.html``.

------
Examples
------

- `CRA example <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-cra>`_: illustrates a PH app using a dev toolchain with dev server.
- `Vanilla example <https://github.com/craftercms/authoring-ui-plugin-examples/tree/master/packages/example-vanilla>`_: illustrates the simplest use of a single JS entry point without transpilation or anything special.
