:is-up-to-date: False

.. Section Outliine
   14.2.1 Prereq
   14.2.2 Install via Bundle

.. index:: Installing Crafter CMS on MacOS

.. _newIa-installing-craftercms-on-macos:

===============================
Installing Crafter CMS on MacOS
===============================

This section describes in detail how to install/setup Crafter CMS on MacOS.

-------------
Prerequisites
-------------

#. **Download and install Java 11**

   Download and install Java JDK 11 (either `Oracle <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_  or `OpenJDK <http://openjdk.java.net/>`_).

   Make sure that you have a ``JAVA_HOME`` environment variable that points to the root of the JDK install directory.  See :ref:`here<verify-java-home-env-var>` for more information on the ``JAVA_HOME`` environment variable

---------------------------------------------
Installing Crafter CMS from Prebuilt Binaries
---------------------------------------------

Here are the steps to start using Crafter CMS for development or evaluation by installing Crafter CMS from the binary archive download:

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


