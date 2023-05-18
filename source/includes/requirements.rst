.. TODO Make this about running, not building
.. TODO Building the project should go in the main README file on CrafterCMS

------------
Requirements
------------

To run CrafterCMS, the following are required:

    - Java 17
    - 8+ Gig of memory to JVM (additional memory may be required depending on the size and number of your web experiences)
    - Git 2.20.1 and later
    - Docker if running on Mac or Windows

Please note that CrafterCMS does not require any external databases for the core system to run and deliver fully dynamic experiences.  MongoDB is used by Crafter Profile and Crafter Social which are optional components that provide user management and social features.

^^^^^^^^^^^^^^^^^^^
Supported Platforms
^^^^^^^^^^^^^^^^^^^

"""""""""""""""""""
OS (All components)
"""""""""""""""""""

The following Operating Systems are supported (64Bit only for all OSs)

    - Linux (Ubuntu, RHEL)
    - macOS (10.12 and later)
    - Windows via WSL

"""""""""""""""""""""
JVMs (All components)
"""""""""""""""""""""

The following JVMs are supported:

    - OpenJDK 17
    - Oracle JDK (HotSpot) 17

~~~~~~~~~~~~~~~~~~~
Verify Java Version
~~~~~~~~~~~~~~~~~~~

Ensure that you are running Java 17.  To check,
run the following command at the command prompt and make sure that the version displayed is Java 11:

.. code-block:: sh

    java -version

|

The command above should output something like this:

.. code-block:: sh

    openjdk version "17.0.6"

|

.. _verify-java-home-env-var:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Verify JAVA_HOME environment variable is set correctly
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Make sure that you have a JAVA_HOME environment variable that points to the root of the JDK install directory.
To check the value set for JAVA_HOME, enter the following command at the command prompt:

.. code-block:: sh

    env | grep JAVA_HOME

|

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
How to set the JAVA_HOME environment variable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**To set JAVA_HOME**

- Korn and bash shells:

  .. code-block:: bash

      export JAVA_HOME=jdk-install-dir
      export PATH=$JAVA_HOME/bin:$PATH

  |

- Bourne shell:

  .. code-block:: sh

      JAVA_HOME=jdk-install-dir
      export JAVA_HOME
      PATH=$JAVA_HOME/bin:$PATH
      export PATH

  |

- C shell:

  .. code-block:: csh

     setenv JAVA_HOME jdk-install-dir
     export JAVA_HOME
     PATH=$JAVA_HOME/bin:$PATH
     export PATH
     setenv PATH $JAVA_HOME/bin:$PATH
     export PATH=$JAVA_HOME/bin:$PATH

  |

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Browsers (Crafter Studio & Crafter Social/Profile Admin Consoles)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following browsers are supported:

    - Chrome and Chromium-based Browsers
    - Firefox
    - MS Edge

.. _prerequisites:

^^^^^^^^^^^^^
Prerequisites
^^^^^^^^^^^^^
"""""""""""""""""
OS X Prerequisite
"""""""""""""""""

For OS X users, the latest ``openssl`` formula needs to be installed via homebrew:

.. code-block:: sh

    brew install openssl

|

""""""""""""""""""
Linux Prerequisite
""""""""""""""""""

#. The library ``libaio`` is required by the Authoring install.  Please note that some Linux distributions does not install the library ``libaio`` by default and so, may need to be installed.  You may get the following error when starting up Studio:

   **error while loading shared libraries: libaio.so.1: cannot open shared object file: No such file or directory**

   To install ``libaio`` for Debian-based Linux distros: ``sudo apt install libaio1``

   To install ``libaio`` for RedHat-based Linux distros: ``yum install libaio``

#. For Linux users, some of the scripts uses ``lsof``.  Please note that some Linux distributions does not come with ``lsof`` pre-installed and so, may need to be installed.

   To install ``lsof`` for Debian-based Linux distros: ``apt-get install lsof``

   To install ``lsof`` for RedHat-based Linux distros: ``yum install lsof``

#. The library ``libncurses5`` is required for the Authoring install and the restore script.  You may get the following error when running an Authoring install or the restore script without the ``libncurses5`` library installed:

   **error while loading shared libraries: libncurses.so.5: cannot open shared object file: No such file or directory**

   To install the library ``libncurses5``, use the following commands:

   On Debian-based Linux distros: ``sudo apt install libncurses5``

   On RHEL, CentOS:  ``sudo yum install ncurses-compat-libs``

   On Fedora 22 and newer version: ``sudo dnf install ncurses-compat-libs``

""""""""""""""""""""
Windows Prerequisite
""""""""""""""""""""

For Windows users, WSL 2 needs to be installed.  All CrafterCMS scripts/commands to be executed and items that needs to be downloaded and installed needs to be in WSL 2.

Follow the instructions `here <https://docs.microsoft.com/en-us/windows/wsl/install>`__ to install WSL 2.

