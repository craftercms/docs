:is-up-to-date: True

.. index:: Quick Start Guide

..  _quick_start_guide:

*****************
Quick Start Guide
*****************

This section describes how to quickly install Crafter CMS and start crafting your experiences.  The steps listed below is intended to help the user start using Crafter CMS for development or evaluation only.

To setup Crafter CMS:

* :ref:`Install from the prebuilt binaries download <installing-crafter-cms-from-prebuilt-binaries>`

   .. note::
      **For Windows Users** |br|
      Windows users needs to install Windows Subsystem for Linux (WSL) by following the instructions `here <https://docs.microsoft.com/en-us/windows/wsl/install>`__ which will enable the required optional components, download the latest Linux kernel, set WSL 2 as your default, and install Ubuntu Linux for you. |br|

      All commands below needs to be executed in a WSL 2 terminal.  Also, all items that needs to be downloaded and installed needs to be in WSL 2. |br|

      .. figure:: /_static/images/quick-start/wsl2-ubuntu-window.png
         :alt: Quick start - WSL 2 Ubuntu terminal
         :width: 70 %
         :align: center

      |

      All the steps below applies to installing Crafter CMS via the WSL terminal.  See :ref:`here <installing-craftercms-on-wsl>` for detailed instructions on installing Crafter CMS on Windows via WSL

      Crafter CMS may also be run via :ref:`Docker <running-craftercms-in-docker>`.  Note that the preferred method of installing and running Crafter CMS is via the binary archive through WSL as described :ref:`here <installing-craftercms-on-wsl>`.

.. _installing-crafter-cms-from-prebuilt-binaries:

---------------------------------------------
Installing Crafter CMS from Prebuilt Binaries
---------------------------------------------

Here are the steps to start using Crafter CMS for development or evaluation by installing Crafter CMS from the binary archivedownload:

#. **Download and install Java 11**

   Download and install Java JDK 1.11 (either `Oracle <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_  or `OpenJDK <http://openjdk.java.net/>`_).

   Make sure that you have a ``JAVA_HOME`` environment variable that points to the root of the JDK install directory.  See :ref:`here<verify-java-home-env-var>` for more information on the ``JAVA_HOME`` environment variable

#. **Download Crafter CMS binary**

   Download the Crafter CMS install binary file from https://craftercms.org/downloads

   Select ``crafter-cms-authoring-VERSION.tar.gz``.  The ``.tar.gz`` file will install a fully functional authoring instance. Out of the box, the authoring instance uses a local directory as the repository and an embedded database, which allows a quick and easy set up for local development.

#. **Extract the Crafter CMS binaries**

   Extract the contents in any directory.

   .. code-block:: sh

      tar -zxvf crafter-cms-authoring-VERSION.tar.gz -C /tmp/extract_to_some_directory/

   |

   The extracted files should look like this:

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
