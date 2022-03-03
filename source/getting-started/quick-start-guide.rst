:is-up-to-date: True

.. index:: Quick Start Guide

..  _quick_start_guide:

*****************
Quick Start Guide
*****************

This section describes how to quickly install CrafterCMS and start crafting your experiences.  The steps listed below is intended to help the user start using CrafterCMS for development or evaluation only.

To setup CrafterCMS:

* :ref:`Install from prebuilt binaries download <installing-crafter-cms-from-prebuilt-binaries>`

   .. note::
      **For Windows Users** |br|
      Windows users needs to install Windows Subsystem for Linux (WSL) by following the instructions `here <https://docs.microsoft.com/en-us/windows/wsl/install>`__ which will enable the required optional components, download the latest Linux kernel, set WSL 2 as your default, and install Ubuntu Linux for you. |br|

      All commands below needs to be executed in a WSL 2 terminal.  Also, all items that needs to be downloaded and installed needs to be in WSL 2. |br|

      .. figure:: /_static/images/quick-start/wsl2-ubuntu-window.png
         :alt: Quick start - WSL 2 Ubuntu terminal
          :width: 70 %
          :align: center

      |

      See `here <https://docs.microsoft.com/en-us/windows/wsl/>`__ for more information on WSL.

      All the steps below applies to installing CrafterCMS via the WSL terminal.  See :ref:`here <installing-craftercms-on-wsl>` for detailed instructions on installing CrafterCMS on Windows via WSL

      CrafterCMS may also be run via :ref:`Docker <running-craftercms-in-docker>`.  Note that the preferred method of installing and running CrafterCMS is via the binary archive through WSL 2 as described here.

.. _installing-crafter-cms-from-prebuilt-binaries:

---------------------------------------------
Installing CrafterCMS from Prebuilt Binaries
---------------------------------------------

Here are the steps to start using CrafterCMS for development or evaluation by installing CrafterCMS from the binary archive download:

#. **Download and install Java 8**

   Download and install Java JDK 1.8 (either `Oracle <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_  or `OpenJDK <http://openjdk.java.net/>`_).

   Make sure that you have a ``JAVA_HOME`` environment variable that points to the root of the JDK install directory.  See :ref:`here<verify-java-home-env-var>` for more information on the ``JAVA_HOME`` environment variable

#. **Download CrafterCMS binaries**

   Download the CrafterCMS install binary archive from https://craftercms.org/downloads

   Select ``crafter-cms-authoring-VERSION.tar.gz``.  The ``.tar.gz`` file will install a fully functional authoring instance. Out of the box, the authoring instance uses a local directory as the repository and an embedded database, which allows a quick and easy set up for local development.

#. **Extract the CrafterCMS binaries**

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

#. **Start CrafterCMS**

   **To start CrafterCMS:**

   From the command line, navigate to the ``{Crafter-CMS-unzip-directory}/crafter/bin/`` directory, and execute the startup script:

   .. code-block:: sh

      ./startup.sh

   |

      .. note::

         *It takes a few seconds for CrafterCMS to startup and takes longer to startup the very first time you startup CrafterCMS.*


   **To stop CrafterCMS:**

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
