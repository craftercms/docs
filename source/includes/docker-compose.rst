To run CrafterCMS in a set of Docker containers using Docker Compose, make sure the following are installed in your local system:

* Docker (https://docs.docker.com/install/)
* Docker Compose (https://docs.docker.com/compose/install/)
* Git 2.x+

**For Windows and Mac, we recommend you give Docker Desktop at least 12GB of RAM (6GB of RAM per environment) and 4 CPUs. To do this, go to Docker Desktop's Preferences > Resources > Advanced, and then change the resource limits.**

.. image:: /_static/images/quick-start/docker-advanced-settings.webp
    :alt: Docker Desktop Advanced Settings
    :width: 80%
    :align: center

#. Clone the CrafterCMS Docker Compose repo from GitHub

   .. code-block:: bash

      ➜ git clone https://github.com/craftercms/docker-compose.git

   |

.. TODO check if the local dev with Docker Compose is viable

#. If you are a developer and want to use your local IDE and other tools, follow :ref:`this <local-dev-with-docker>` documentation to configure your docker container to support access to your projects via local IDE.

#. Go into the authoring folder, then start the container by running ``docker-compose up``

.. TODO update the logs

   .. code-block:: bash
      :caption: *Console output when starting the container*
      :emphasize-lines: 2

          ➜  docker-compose git:(master) cd authoring
          ➜  authoring git:(master) docker-compose up
          [+] Running 9/9
           ✔ Network authoring_default               Created                                                                                                                          0.1s
           ✔ Volume "crafter_authoring_temp"         Created                                                                                                                          0.0s
           ✔ Volume "crafter_authoring_data_search"  Created                                                                                                                          0.0s
           ✔ Volume "crafter_authoring_logs_search"  Created                                                                                                                          0.0s
           ✔ Volume "crafter_authoring_data"         Created                                                                                                                          0.0s
           ✔ Volume "crafter_authoring_logs"         Created                                                                                                                          0.0s
           ✔ Container authoring-search-1            Created                                                                                                                          0.1s
           ✔ Container authoring-deployer-1          Created                                                                                                                          0.1s
           ✔ Container authoring-tomcat-1            Created                                                                                                                          0.1s
          Attaching to authoring-deployer-1, authoring-search-1, authoring-tomcat-1
          ...
          authoring-tomcat-1    | 11-Aug-2023 11:28:25.535 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
          authoring-tomcat-1    | 11-Aug-2023 11:28:25.579 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in [68028] milliseconds

You may now login to Crafter Studio at http://localhost:8080/studio. The default username is ``admin`` and the default password is ``admin``.

The console output when you start the container (as shown above) contains useful information that you can use to debug or monitor the status of CrafterCMS. To view more of the logs, the Docker Desktop Dashboard provides a runtime view of all your containers and applications, including logs for monitoring/debugging CrafterCMS. To access the Docker Desktop Dashboard, from the **Docker menu**, select **Dashboard**.

.. image:: /_static/images/quick-start/docker-desktop-open-dashboard.webp
   :alt: Open Docker Desktop Dashboard
   :width: 25%
   :align: center

This will open a dialog displaying the running application with a list of containers running inside the application when you expand the application

.. image:: /_static/images/quick-start/docker-desktop-dashboard-list.webp
   :alt: Docker Desktop Dashboard Container List
   :width: 80%
   :align: center

When the ``authoring`` application displayed above is selected, the application view will open and list all the containers running on the application and display a detailed logs view

.. image:: /_static/images/quick-start/docker-desktop-dashboard.webp
   :alt: Docker Desktop Dashboard
   :width: 80%
   :align: center

To configure working on projects in Docker via a local IDE follow the instructions :ref:`here <local-dev-with-docker>`

For more information on Docker Desktop Dashboard, see https://docs.docker.com/desktop/dashboard/

For more information on CrafterCMS Docker Compose, please see: https://github.com/craftercms/docker-compose.