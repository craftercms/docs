:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, and is only accessible via searching.
   This document is deprecated and is provided as a reference only
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now


.. index:: Installing and verifying prerequisites, Prerequisites

.. _installing-and-verifying-prerequisites:

===============================================
Verifying Java Installs and Other Prerequisites
===============================================

This section lists various prerequisites needed depending on the operating system and how to verify Java installs.  Please note that this section only applies to Linux/Unix/OS X operating systems

------------
Install Java
------------
Download and install Java JDK 1.8 (either `Oracle <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_  or `OpenJDK <http://openjdk.java.net/>`_).

^^^^^^^^^^^^^^^^^^^
Verify Java Version
^^^^^^^^^^^^^^^^^^^

Ensure that you are running Java 1.8.  To check,
run the following command at the command prompt and make sure that the version displayed is Java 1.8:

.. code-block:: sh

    java -version

|

The command above should output something like this:

.. code-block:: sh

    java version "1.8.0_91"

|

.. _verify-java-home-env-var:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Verify JAVA_HOME environment variable is set correctly
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Make sure that you have a JAVA_HOME environment variable that points to the root of the JDK install directory.
To check the value set for JAVA_HOME, enter the following command at the command prompt:

.. code-block:: sh

    env | grep JAVA_HOME

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
How to set the JAVA_HOME environment variable
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**To set JAVA_HOME on a Unix/Linux System**

    - Korn and bash shells:

      .. code-block:: bash

          export JAVA_HOME=jdk-install-dir
          export PATH=$JAVA_HOME/bin:$PATH

    - Bourne shell:

      .. code-block:: sh

          JAVA_HOME=jdk-install-dir
          export JAVA_HOME
          PATH=$JAVA_HOME/bin:$PATH
          export PATH

    - C shell:

      .. code-block:: csh

          setenv JAVA_HOME jdk-install-dir
          setenv PATH $JAVA_HOME/bin:$PATH
          export PATH=$JAVA_HOME/bin:$PATH

|

-----------------
OS X Prerequisite
-----------------

For OS X users, the latest ``openssl`` formula needs to be installed via homebrew:

.. code-block:: sh

    brew install openssl

|

.. _prerequisites:

------------------
Linux Prerequisite
------------------

#. The library ``libaio`` is required by the embedded database MariaDB4j in the Authoring install.  Please note that some Linux distributions does not install the library ``libaio`` by default and so, may need to be installed.  You may get the following error when starting up Studio:

   **error while loading shared libraries: libaio.so.1: cannot open shared object file: No such file or directory**

   To install ``libaio`` for Debian-based Linux distros: ``sudo apt install libaio1``

   To install ``libaio`` for RedHat-based Linux distros: ``yum install libaio``

#. For Linux users, some of the scripts uses ``lsof``.  Please note that some Linux distributions does not come with ``lsof`` pre-installed and so, may need to be installed.

   To install ``lsof`` for Debian-based Linux distros: ``apt-get install lsof``

   To install ``lsof`` for RedHat-based Linux distros: ``yum install lsof``

#. The library ``libncurses5`` is required for the Authoring install and the restore script.  You may get the following error when running an Authoring install or the restore script without the ``libncurses5`` library installed:

   **error while loading shared libraries: libncurses.so.5: cannot open shared object file: No such file or directory**

   To install the library ``libncurses5``, use the following commands:

   On Debian-based Linux distros: ``sudo apt-get install libncurses5-dev libncursesw5-dev``

   On RHEL, CentOS:  ``sudo yum install ncurses-devel``

   On Fedora 22 and newer version: ``sudo dnf install ncurses-devel``


----------------------------------
Building with Gradle Prerequisites
----------------------------------

For building with Gradle for installing Crafter CMS, the following must be installed in your system:

^^^^^^^^
On Linux
^^^^^^^^
* Java 8
* Git 2.x+
* Maven 3.3.x+
* make and GCC

  * For **Debian** based distributions (such as Ubuntu), ``make`` and ``GCC`` can be installed through ``build-essential``

      .. code-block:: sh

         sudo apt install build-essential

      |

  * For **RHEL** based distributions (such as CentOS), ``make`` and ``GCC`` can be installed through "Development Tools"

      .. code-block:: sh

         yum groupinstall "Development Tools"

      |

^^^^^^^^
On macOS
^^^^^^^^
* Java 8
* Git 2.x+
* Maven 3.3.x+
* make and GCC, which can be installed from ``XCode Command Line Tools``

    .. code-block:: sh

       xcode-select --install

    |

  * For **macOS Catalina**, a failure may occur with ``node-gyp`` when building like below:

      .. code-block:: text

         [ERROR] Building: /Users/myuser/craftercms/src/studio/target/node/node /Users/myuser/craftercms/src/studio-ui/ui/scss/node_modules/node-gyp/bin/node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags= --libsass_ldflags= --libsass_library=

    |

    See https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md for more information on resolving the issue.
