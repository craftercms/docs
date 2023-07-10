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
          Starting authoring_elasticsearch_1 ... done
          Starting authoring_deployer_1      ... done
          Starting authoring_tomcat_1        ... done
          Attaching to authoring_elasticsearch_1, authoring_deployer_1, authoring_tomcat_1
          elasticsearch_1  | OpenJDK 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated in version 9.0 and will likely be removed in a future release.
          tomcat_1         | 02-Jun-2023 14:25:53.134 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server version name:   Apache Tomcat/8.5.54
          tomcat_1         | 02-Jun-2023 14:25:53.136 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server built:          Apr 3 2020 14:06:10 UTC
          tomcat_1         | 02-Jun-2023 14:25:53.138 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server version number: 8.5.54.0
          tomcat_1         | 02-Jun-2023 14:25:53.139 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log OS Name:               Linux
          tomcat_1         | 02-Jun-2023 14:25:53.140 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log OS Version:            4.19.76-linuxkit
          tomcat_1         | 02-Jun-2023 14:25:53.140 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Architecture:          amd64
          tomcat_1         | 02-Jun-2023 14:25:53.140 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Java Home:             /usr/local/openjdk-8/jre
          ...
          tomcat_1         | 02-Jun-2023 14:26:47.429 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
          tomcat_1         | 02-Jun-2023 14:26:47.448 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in 54120 ms


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