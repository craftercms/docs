:is-up-to-date: True

.. _newIa-running-craftercms-in-docker:

=========================================
Running Crafter CMS in a Docker Container
=========================================

   .. note::
      The preferred method of installing and running Crafter CMS is via the archive download or via the archive built by the Gradle environment builder.  See the :ref:`newIa-installing-craftercms-on-wsl` for more information on the preferred methods of installation.

To run Crafter CMS in a Docker container using Docker Compose, make sure the following are installed in your local system:

* Docker (https://docs.docker.com/install/)
* Docker Compose (https://docs.docker.com/compose/install/)
* Git 2.x+

**For Windows and Mac, we recommend you give Docker Desktop at least 8GB of RAM and 4 CPUs. To do this, go to Docker Desktop's Preferences > Resources > Advanced, and then change the resource limits.**

.. image:: /_static/images/quick-start/docker-advanced-settings.png
    :alt: Docker Desktop Advanced Settings
    :width: 80%
    :align: center

#. Clone the Crafter CMS Docker Compose repo from GitHub

   .. code-block:: bash

      ➜ git clone https://github.com/craftercms/docker-compose.git

   |

#. If you are a developer and want to use your local IDE and other tools, follow :ref:`this <newIa-configuring-crafter-on-docker-for-local-dev-tools>` documentation to configure your docker container to support access to your sites via local IDE.

#. Go into the authoring folder, then start the container by running ``docker-compose up``

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
          tomcat_1         | 02-Jun-2020 14:25:53.134 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server version name:   Apache Tomcat/8.5.54
          tomcat_1         | 02-Jun-2020 14:25:53.136 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server built:          Apr 3 2020 14:06:10 UTC
          tomcat_1         | 02-Jun-2020 14:25:53.138 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server version number: 8.5.54.0
          tomcat_1         | 02-Jun-2020 14:25:53.139 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log OS Name:               Linux
          tomcat_1         | 02-Jun-2020 14:25:53.140 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log OS Version:            4.19.76-linuxkit
          tomcat_1         | 02-Jun-2020 14:25:53.140 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Architecture:          amd64
          tomcat_1         | 02-Jun-2020 14:25:53.140 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Java Home:             /usr/local/openjdk-8/jre
          ...
          tomcat_1         | 02-Jun-2020 14:26:47.429 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
          tomcat_1         | 02-Jun-2020 14:26:47.448 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in 54120 ms


You may now follow the instructions listed in the guide for getting started with Crafter CMS starting from the step :ref:`Access Crafter Studio <accessing-crafter-studio>` to start using Crafter CMS.

The console output when you start the container (as shown above) contains useful information that you can use to debug or monitor the status of Crafter CMS.  To view more of the logs, the Docker Desktop Dashboard provides a runtime view of all your containers and applications, including logs for monitoring/debugging Crafter CMS.  To access the Docker Desktop Dashboard, from the **Docker menu**, select **Dashboard**.

.. image:: /_static/images/quick-start/docker-desktop-open-dashboard.jpg
   :alt: Open Docker Desktop Dashboard
   :width: 25%
   :align: center

This will open a dialog displaying the running application with a list of containers running inside the application when you expand the application

.. image:: /_static/images/quick-start/docker-desktop-dashboard-list.png
   :alt: Docker Desktop Dashboard Container List
   :width: 80%
   :align: center

When the ``authoring`` application displayed above is selected, the application view will open and list all the containers running on the application and display a detailed logs view

.. image:: /_static/images/quick-start/docker-desktop-dashboard.jpg
   :alt: Docker Desktop Dashboard
   :width: 80%
   :align: center


.. toctree::
   :maxdepth: 1

   configure-crafter-on-docker-for-local-dev-tools

For more information on Docker Desktop Dashboard, see https://docs.docker.com/desktop/dashboard/

For more information on Crafter CMS Docker Compose, please see: https://github.com/craftercms/docker-compose.
