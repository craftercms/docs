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

      ./gradlew init build deploy bundle

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

**For Windows and Mac, we recommend you give Docker Desktop at least 8GB of RAM and 4 CPUs. To do this, go to Docker Desktop's Preferences > Advanced, and then change the resource limits.**

.. image:: /_static/images/quick-start/docker-advanced-settings.png
    :alt: Docker Desktop Advanced Settings
    :scale: 100%
    :align: center

#. Clone the Crafter CMS Docker Compose repo from GitHub

   .. code-block:: bash

      git clone https://github.com/craftercms/docker-compose.git

   |

#. Go into the authoring folder, then start the container

   .. code-block:: bash

      cd authoring
      docker-compose up

You may now follow the instructions listed in the guide :ref:`above:<installing-crafter-cms-from-archive-download>` starting from the step ``Access Crafter Studio`` to start using Crafter CMS.

For more information on Crafter CMS Docker Compose, please see: https://github.com/craftercms/docker-compose.  For more information on working with sites in Docker based installs, see :ref:`here<working-with-docker-based-installs>`
