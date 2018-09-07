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

For Unix/Linux Systems:

.. code-block:: sh

    env | grep JAVA_HOME

|

For Windows Systems:

.. code-block:: bat

    set JAVA_HOME

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

**To set JAVA_HOME on a Windows System**

    * Do one of the following:

      * Windows 7 – Right click **My Computer** and select **Properties > Advanced**
      * Windows 10 - Type **advanced system settings** in the search box (beside the Windows start button) and click on the match

    * Click the **Environment Variables** button

    * Under System Variables, click **New**

    * In the Variable Name field, enter: ``JAVA_HOME``

    * In the Variable Value field, enter your JDK installation path

    * Click on **OK** and **Apply Changes** as prompted

    .. note::

        For Windows users, the path specified in your ``JAVA_HOME`` variable should not contain spaces.  If the path contains spaces, use the shortened path name. For example, ``C:\Progra~1\Java\jdk1.8.0_91``

    .. note::

        For Windows users on 64-bit systems:

            * ``Progra~1`` = ``Program Files``
            * ``Progra~2`` = ``Program Files(x86)``

.. note::

    Windows users using older operating systems may experience issues when Crafter CMS starts up MongoDB and see the following error:

    *The program can't start because api-ms-win-crt-runtime-l1-1-0.dll is missing from your computer. Try reinstalling the program to fix this problem.*


    For MongoDB to startup properly, a Microsoft update may be needed for older operating systems including:

        - Windows 7
        - Windows Server 2012 R2
        - Windows Server 2012

    To install the update, download the Universal C Runtime update from Microsoft ( https://support.microsoft.com/en-us/kb/2999226 )
    When the update is installed, please try to start Crafter CMS again.

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

For Linux users, some of the scripts uses ``lsof``.  Please note that some Linux distributions does not come with ``lsof`` pre-installed and so, may need to be installed.

To install ``lsof`` for Debian-based Linux distros: ``apt-get install lsof``

To install ``lsof`` for RedHat-based Linux distros: ``yum install lsof``
