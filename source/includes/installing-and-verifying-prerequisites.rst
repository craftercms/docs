
^^^^^^^^^^^^
Install Java
^^^^^^^^^^^^
Download and install Java JDK 1.8 (either `Oracle <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_  or `OpenJDK <http://openjdk.java.net/>`_).

^^^^^^^^^^^^^^^^^^^
Verify Java Version
^^^^^^^^^^^^^^^^^^^

Ensure that you are running Java 1.8.  To check,
run the following command at the command prompt and make sure that the version displayed is Java 1.8:

.. code-block:: sh

    java -version

|
|

The command above should output something like this:

.. code-block:: sh

    java version "1.8.0_91"

|

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

^^^^^^^^^^^^^^^^^^^^^^^
OS X extra prerequisite
^^^^^^^^^^^^^^^^^^^^^^^

For OS X users, the latest ``openssl`` formula needs to be installed via homebrew:

.. code-block:: sh

    brew install openssl

|

^^^^^^^^^^^^^^^^^^
Linux prerequisite
^^^^^^^^^^^^^^^^^^

#. For Linux users, some of the scripts uses ``lsof``.  Please note that some Linux distributions does not come with ``lsof`` pre-installed and so, may need to be installed.

   To install ``lsof`` for Debian-based Linux distros: ``apt-get install lsof``

   To install ``lsof`` for RedHat-based Linux distros: ``yum install lsof``

#. The library ``libncurses5`` is required for running the restore script.  You may get the following error when running the restore script without the ``libncurses5`` library installed:

   **error while loading shared libraries: libncurses.so.5: cannot open shared object file: No such file or directory**

   To install the library ``libncurses5``, use the following commands:

   On Debian-based Linux distros: ``sudo apt-get install libncurses5-dev libncursesw5-dev``

   On RHEL, CentOS:  ``sudo yum install ncurses-devel``

   On Fedora 22 and newer version: ``sudo dnf install ncurses-devel``

