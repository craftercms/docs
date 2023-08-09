:is-up-to-date: False
:last-updated: 4.1.1

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now


.. index:: Using the Proxy Configuration

.. _using-the-proxy-configuration:

=============================
Using the Proxy Configuration
=============================

CrafterCMS supports a proxy system to proxy GraphQL, Engine, NodeJS or other application delivery systems. Whenever Crafter Engine receives a request, it is matched against the patterns of each server and the first match would then get the request sent to the server with the matching pattern. In some systems, multiple servers are used for Elasticsearch, Studio, etc. Using the proxy helps simplify the system.

One of the benefits of using the proxy in CrafterCMS is that it can connect to any remote server as the preview server, which allows for easier authoring of projects built with other programming languages and technology. For example, you would like to work on a React application within Studio. What is normally included inside Studio is the build output of the React application, so that a user making edits to the React code would need to build the React code then copy it into Studio in order to preview the changes. This becomes cumbersome when developing, as many edits are normally done before reaching the final version of the React app. Using the proxy, the user can preview the React app in Studio and is able to work on both the React app and CrafterCMS.

Let's take a look at an example of setting up the proxy for a React application.

-------
Example
-------

We'll look at the video center blueprint, a React application available from the public marketplace, that runs on ``localhost:3000``, then setup the Studio proxy so we can preview the React application inside Studio. Finally, we'll make some changes in the React application and view the changes made inside Studio.

Let's begin:

#. Setup the React application.

   * Clone the video center blueprint by running ``git clone https://github.com/craftercms/video-center-blueprint.git``

       .. code-block:: sh

          ➜ git clone https://github.com/craftercms/video-center-blueprint.git
          Cloning into 'video-center-blueprint'...
          remote: Enumerating objects: 6433, done.
          remote: Total 6433 (delta 0), reused 0 (delta 0), pack-reused 6433
          Receiving objects: 100% (6433/6433), 77.12 MiB | 4.92 MiB/s, done.
          Resolving deltas: 100% (4041/4041), done.

   * Run the React application

     Inside the video center blueprint folder that we just cloned above, navigate to ``video-center-blueprint/sources/app``.
     We need ``yarn`` installed in your system. Running ``yarn`` with no command will run ``yarn install``. In the example below, yarn is already installed in the system

       .. code-block:: sh

          ➜  app git:(master) yarn
          yarn install v1.22.4
          [1/4] 🔍  Resolving packages...
          success Already up-to-date.
          ✨  Done in 0.68s.

     Build the React application by running ``yarn start``

       .. code-block:: sh

          ➜  app git:(master) yarn start
          yarn run v1.22.4
          $react-scripts start

          Compiled successfully!

          You can now view video-center-blueprint in the browser.

          Local:            http://localhost:3000/
          On Your Network:  http://192.168.1.135:3000/

          Note that the development build is not optimized.
          To create a production build, use yarn build.

     The command above will open a browser window where we can view the app

     .. image:: /_static/images/site-admin/vcbp-preview.webp
        :alt: Video Center Blueprint preview on "localhost:3000"
        :width: 70 %
        :align: center

     |

   * Edit the base url in your React app to the server we are using for development, which in our case, is the Studio server, on ``localhost:8080``, and the websocket port for hot module reloading (Crafter does not proxy websocket so you will need to point to the origin server of the websocket), then save the changes and restart the React server.

     To edit the base url, navigate to ``video-center-blueprint/sources/app`` then open the ``.env.development`` file using your favorite editor and set the following variables: ``REACT_APP_BASE_URL`` and ``WDS_SOCKET_PORT``

       .. code-block:: text
          :emphasize-lines: 6,12
          :caption: *video-center-blueprint/sources/app/.env.development*

          # A blank REACT_APP_SITE_NAME variable will make the app
          # try to find the crafterSite cookie which, provided you're
          # running both your local crafter and node dev web server for
          # the app are the same, it should be set for you when you created
          # the project. Manually set the here otherwise.
          REACT_APP_BASE_URL=http://localhost:8080

          # If you're using the CrafterCMS's Preview Proxy to view the dev mode app inside Preview,
          # configuring the port makes live reload work inside the CrafterCMS Preview frame.
          # If you're using any other port to run your webpack dev server, you should adjust this to
          # that port too.
          WDS_SOCKET_PORT=3000

     For Windows users on Docker, add ``DANGEROUSLY_DISABLE_HOST_CHECK=true`` to the ``.env.development`` file. |br|
     Setting the environment variable ``DANGEROUSLY_DISABLE_HOST_CHECK`` to ``true`` disables the host check, which allows us to pretend that the the host header of the request and the listening address of the host are running on the same host and port which is important since browsers block cross-origin requests. If not set, the user will see an ``Invalid Host header`` message in Studio. Remember that **disabling the host check is insecure and should only be used in a development environment**.

     Remember to restart the React server for the settings to take effect.

       .. note:: If you're using the create-react-app, please note that ``react-scripts`` versions earlier than 3.4.0 does not support custom sockjs pathname for hot reloading the server. Make sure that your ``react-scripts`` version used is 3.4.0 or above for the live reload work inside CrafterCMS to work.

#. Setup Studio

   * Create a project using the video center blueprint from the Public Marketplace.

     From the **Main Menu**, click on **Project**, then click on the **Create Project** button. This will open the **Create Site** dialog. Look for **Video Center**, then click on the **Use** button, fill in the required information then click on the **Review** button, then finally the **Create Site** button. This **Video Center** blueprint we selected from the Marketplace is the same react application

     .. image:: /_static/images/site-admin/vcbp-marketplace.webp
        :alt: Select Video Center blueprint from the Public Marketplace
        :width: 70 %
        :align: center

     |


   * Setup the proxy for the video center React application we started above

     Open the **Sidebar**, click on |projectTools|, then click on **Configuration**. Select **Proxy Config** from the dropdown menu.

     .. image:: /_static/images/site-admin/config-open-proxy-config.webp
        :alt: Configurations - Open Proxy Configuration
        :width: 55 %
        :align: center

     |

     Scroll down to the ``preview`` server and edit the ``url`` to point to the url used for the React application (``localhost:3000``) we setup in the beginning. Save your changes.

       .. code-block:: xml
          :caption: *CRAFTER_HOME/data/repos/sites/sandbox/SITENAME/sandbox/config/engine/proxy-config.xml*
          :emphasize-lines: 3

          <server>
            <id>preview</id>
            <url>http://localhost:3000</url>
            <patterns>
              <pattern>.*</pattern>
            </patterns>
          </server>

     For users running Studio on Docker, use ``http://host.docker.internal:3000`` for the ``url`` of the React application. Docker containers can access local services running on the host by connecting to ``host.docker.internal``. See https://docs.docker.com/docker-for-windows/networking/#use-cases-and-workarounds for more information on connecting from a container to a service on the host.

     At this point, the preview we are seeing in Studio should be the one from our React application.

   * Modify the React application then verify that we can preview the changes made inside Studio.

     For this part, we'll change the text ``Featured Channels`` in the home page to ``My Featured Channels``. Using your favorite editor, in your React app, navigate to ``video-center-blueprint/sources/app/src/containers/Home`` and open the ``Home.js`` file. Scroll down to the line with ``key: 'featured-channels'`` and edit the ``value``:

       .. code-block:: js
          :emphasize-lines: 3

          {
            key: 'featured-channels',
            value: 'My Featured Channels',
            type: 'channel-card-alt',
            ...

     Save your changes. Notice that in the React app preview (localhost:3000), the page is reloaded with our changes now visible. Now let's take a look at Studio. Notice that Studio preview has reloaded and the changes we made in the React app is now visible.

     .. image:: /_static/images/site-admin/vcbp-react-app-edited.webp
        :alt: Changes made in the React app now visible in the Studio preview
        :width: 70 %
        :align: center

     |




