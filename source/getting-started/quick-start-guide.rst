:is-up-to-date: True

.. index:: Quick Start Guide

..  _quick_start_guide:

*****************
Quick Start Guide
*****************

This section describes how to quickly install Crafter CMS and start crafting your experiences.  The steps listed below is intended to help the user start using Crafter CMS for development or evaluation only.

   .. note:: **Windows support is now via Docker.**  If you are on a Windows operating system, please follow the guide :ref:`running-craftercms-in-docker` to start using Crafter CMS.

.. _installing-crafter-cms-from-archive-download:

------------------------------------------------
Installing Crafter CMS from the Archive Download
------------------------------------------------

Here are the steps to start using Crafter CMS for development or evaluation by installing Crafter CMS from the archive download:

#. **Download and install Java 8**

   Download and install Java JDK 1.8 (either `Oracle <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_  or `OpenJDK <http://openjdk.java.net/>`_).

   Make sure that you have a ``JAVA_HOME`` environment variable that points to the root of the JDK install directory.  See :ref:`here<verify-java-home-env-var>` for more information on the ``JAVA_HOME`` environment variable

#. **Download Crafter CMS archive**

   Download the Crafter CMS install archive file from http://craftercms.org/downloads

   Select ``crafter-cms-authoring-3.1.X.tar.gz``.  The ``.tar.gz`` file will install a fully functional Crafter Studio instance and a Crafter Engine in Preview Mode. Out of the box, the Studio instance uses a local directory as the repository and an embedded database, which allows a quick and easy set up for local development.

#. **Extract the Crafter CMS archive**

   Extract the contents in any directory.

   .. code-block:: none

      {Crafter-CMS-unzip-directory}
      |--crafter/
         |--LICENSE
         |--README.txt
         |--bin/

   |

#. **Start Crafter CMS**

   **To start Crafter CMS:**

   From the command line, navigate to the ``{Crafter-CMS-unzip-directory}/crafter/bin/`` directory, and execute the startup script:

   .. code-block:: sh

      ./startup.sh

   |

      .. note::

         *It takes a few seconds for Crafter CMS to startup and takes longer to startup the very first time you startup Crafter CMS.*


   **To stop Crafter CMS:**

   From the command line, navigate to the ``{Crafter-CMS-unzip-directory}/crafter/bin/`` directory, and execute the shutdown script:

   .. code-block:: sh

      ./shutdown.sh

   |

   .. _accessing-crafter-studio:

#. **Access Crafter Studio**

   In your browser, go to

   .. code-block:: none

      http://localhost:8080/studio

   |

   * Login with the following:

      * **username:** admin
      * **password:** admin


   After logging in, you should be redirected to the ``Sites`` screen, and you're now ready to create your first experience!

.. _installing-craftercms-from-gradle:

---------------------------------------------------------------------------
Installing Crafter CMS From Archive Built By the Gradle Environment Builder
---------------------------------------------------------------------------

#. **Download and install required items for creating archives**

   To create the archives(``*.tar.gz``) for installing Crafter CMS, the following must be installed in your system:

   * Java 8
   * Git 2.x+
   * Maven 3.3.x+
   * make and GCC

   For more information on installing the required items and other prerequisites, see :ref:`Installing and verifying prerequisites<installing-and-verifying-prerequisites>`

#. **Clone the Crafter CMS repo from GitHub**

    .. code-block:: bash

        git clone https://github.com/craftercms/craftercms.git

    |

#. **Build a deployable bundle**

   Build a deployable bundle using the Gradle Environment Builder to generate the archives ``crafter-cms-authoring-3.1.X.tar.gz`` inside the *bundle* folder

   .. code-block:: bash

      ./gradlew clone build deploy bundle

   |

#. Unpack the file (``crafter-cms-authoring-3.1.X.tar.gz``) into any directory.  You may now follow the instructions listed :ref:`above<installing-crafter-cms-from-archive-download>` starting from the step to ``Extract the Crafter CMS archive`` to start using Crafter CMS

For more details on using the Gradle environment builder, please review: https://github.com/craftercms/craftercms/blob/master/README.md


.. _running-craftercms-in-docker:

-----------------------------------------
Running Crafter CMS in a Docker Container
-----------------------------------------

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


You may now follow the instructions listed in the guide :ref:`above:<installing-crafter-cms-from-archive-download>` starting from the step :ref:`Access Crafter Studio <accessing-crafter-studio>` to start using Crafter CMS.

The console output when you start the container (as shown above) contains useful information that you can use to debug or monitor the status of Crafter CMS.  To view more of the logs, the Docker Desktop Dashboard provides a runtime view of all your containers and applications, including logs for monitoring/debugging Crafter CMS.  To access the Docker Desktop Dashboard, from the **Docker menu**, select **Dashboard**.

.. image:: /_static/images/quick-start/docker-desktop-open-dashboard.png
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

For more information on Docker Desktop Dashboard, see https://docs.docker.com/desktop/dashboard/


For more information on Crafter CMS Docker Compose, please see: https://github.com/craftercms/docker-compose.  For more information on working with sites in Docker based installs, see :ref:`working-with-docker-based-installs`
