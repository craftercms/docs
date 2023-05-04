:is-up-to-date: False
:last-updated: 4.0.3

:nosearch:

.. Section Outline
   14.2.1 Prereq
   14.2.2 Install via Bundle

.. index:: Installing CrafterCMS on Linux

.. _installing-craftercms-on-linux:

==============================
Installing CrafterCMS on Linux
==============================

This section describes in detail how to install/setup CrafterCMS on Linux.

.. _linux-prerequisites:

-------------
Prerequisites
-------------

#. **Download and install Java 11**

   Download and install Java JDK 11 (either `Oracle <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_
   or `OpenJDK <http://openjdk.java.net/>`_).

   Make sure that you have a ``JAVA_HOME`` environment variable that points to the root of the
   JDK install directory.  See :ref:`here <verify-java-home-env-var>` for more information on
   the ``JAVA_HOME`` environment variable

#. **Download and install Git 2.20.1 or later+**

   ``Git`` 2.20.1 or later is required by CrafterCMS and may need to be installed if not already
   installed in the server.

--------------------------------------------
Installing CrafterCMS from Prebuilt Binaries
--------------------------------------------

Here are the steps to start using CrafterCMS for development or evaluation by installing CrafterCMS from the binary archive download:

#. **Download CrafterCMS binary**

   Download the CrafterCMS install binary file from https://craftercms.org/downloads

   Select ``crafter-cms-authoring-VERSION-linux-x86_64.tar.gz``.  The ``.tar.gz`` file will install a fully functional authoring instance. Out of the box, the authoring instance uses a local directory as the repository and an embedded database, which allows a quick and easy set up for local development.

#. **Extract the CrafterCMS binaries**

   Extract the contents in any directory.

   .. code-block:: sh

      tar -zxvf crafter-cms-authoring-VERSION-linux-x86_64.tar.gz -C /tmp/extract_to_some_directory/

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


   After logging in, you should be redirected to the ``Projects`` screen, and you're now ready to create your first experience!

