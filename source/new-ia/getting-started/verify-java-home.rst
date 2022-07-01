:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, and is only accessible via searching.
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now


.. index:: Installing and verifying prerequisites, Prerequisites

.. _newIa-installing-and-verifying-prerequisites:

=======================
Verifying Java Installs
=======================

This section lists how to verify Java installs.

------------
Install Java
------------
Download and install Java JDK 11 (either `Oracle <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_  or `OpenJDK <http://openjdk.java.net/>`_).

^^^^^^^^^^^^^^^^^^^
Verify Java Version
^^^^^^^^^^^^^^^^^^^

Ensure that you are running Java 11.  To check,
run the following command at the command prompt and make sure that the version displayed is Java 11:

.. code-block:: sh

    java -version

|

The command above should output something like this:

.. code-block:: sh

    openjdk version "11.0.11

|

.. _newIa-verify-java-home-env-var:

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
