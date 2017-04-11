.. index:: Projects; Crafter CMS

.. _crafter-cms:

============
Crafter CMS
============

This project is the parent project that builds everything and prepares a deployable bundle and a developer's environment.

-----------
Source Code
-----------

Crafter CMS's source code is managed in github: https://github.com/craftercms/craftercms

-------------
Documentation
-------------

^^^^^^^^^^^^^^^
Getting Started
^^^^^^^^^^^^^^^
To get started, please review: https://github.com/craftercms/craftercms/blob/master/README.md

^^^^^^^^^^^^^^^^^^^^
More Advanced Topics
^^^^^^^^^^^^^^^^^^^^

Gradle Authoring and Live Environment Scripts
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**GENERAL**

Gradle command formats

.. code-block:: bash

	./gradlew command [-Penv={env}] [-Pmodule={module}]

+-----------+-------------------------------------------+--------------+-----------------+
|| Command  || Description                              || Env Options || Module Options |
+===========+===========================================+==============+=================+
|| `build`  || Build a module or an entire              || `authoring` || - None         |
||          || environment                              ||             || - `studio`     |
||          ||                                          ||             || - `deployer`   |
||          ||                                          ||             || - `engine`     |
||          ||                                          ||             || - `search`     |
||          ||                                          ||             || - `??????`     |
||          ||                                          +--------------+-----------------+
||          ||                                          || `delivery`  || - `??????`     |
||          ||                                          ||             || - `??????`     |
+-----------+-------------------------------------------+--------------+-----------------+

Where ``command`` is one of:

- ``build``
- ``start``
- ``stop``

Where ``env`` is one of:

- ``authoring``
- ``delivery``

And ``module`` is one of:

- ``studio``
- ``engine``
- ``deployer``

**BUILD**

.. code-block:: bash

  ./gradlew build

The Gradle task above will:

#. Delete any existing environments
#. Download Apache Tomcat and Apache Solr (check the Gradle section on how to specify a version of Apache Tomcat and Apache Solr)
#. Build all Crafter CMS modules from the source (check the :ref:`git` section on how to update the source)
#. Create the environment folders and copy all needed resources

	- ``crafter-auth-env``
	- ``crafter-delivery-env``

**START**

Starting an environment or a module using Gradle looks like this:

.. code-block:: bash

  ./gradlew start [-PmoduleName={module}] [-Penv={env}]

What this does under the hood is:

.. code-block:: bash

  cd crafter-{env}-env
  ./startups.sh

Both of those options will:

* Start Apache tomcat on default ports (8080, 8009, 8005) [See :ref:`gradle-tasks` on how to change default ports]

* Start Solr server on port 8984

* Start Crafter Deployer on port 


Authoring Environment Scripts
-----------------------------

The Crafter CMS Authoring scripts will help you on the basic startup and shutdown of the services needed to run a healthy *Authoring environment*
with the following scripts:

+-------------------------+----------------------------------------------------------------------+
|| **Script**             || ``crafter(.sh/bat)``                                                |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Main Script to start and stop all needed Services to have a         |
||                        || functional Crafter CMS *Authoring Environment*                      |
+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``crafter.(sh/bat) start|stop|debug|tail|help``                     |
+-------------------------+----------------------------------------------------------------------+
|| **Arguments**          || * ``start`` Starts all Crafter CMS services in this order           |
||                        ||    Crafter Deployer,Solr,Apache Tomcat                              |
||                        || * ``stop``  Stops all Crafter CMS services in the same order as     |
||                        ||    they start.                                                      |
||                        || * ``debug`` Start all Crafter CMS services with the JAVA remote     |
||                        ||    debug port 5005 for Crafter Deployer, 1044 for Solr and 8000     |
||                        ||    for Apache Tomcat                                                |
||                        || * ``help``  Prints script help                                      |
+-------------------------+----------------------------------------------------------------------+


``crafter(.sh/bat)`` **Environment Variables**

+-------------------------+-----------------------------------+----------------------------------+
|| **Variable Name**      || **Description**                  || **Default Value**               |
+-------------------------+-----------------------------------+----------------------------------+
|| CRAFTER_HOME           || Crafter CMS path                 || _Current Working directory\_    |
+-------------------------+-----------------------------------+----------------------------------+
|| DEPLOYER_JAVA_OPTS     || Java Options to be passed to     || empty                           |
||                        || Crafter Deployer                 ||                                 |
+-------------------------+-----------------------------------+----------------------------------+
|| CRAFTER_DEPLOYER_HOME  || Crafter Deployer jar file path   || _Current Working directory\_/   |
||                        ||                                  || crafter-deployer                |
+-------------------------+-----------------------------------+----------------------------------+
|| CATALINA_HOME          || Apache Tomcat files path         ||  _Current Working directory\_/  |
||                        ||                                  ||  apache-tomcat                  |
+-------------------------+-----------------------------------+----------------------------------+
|| CATALINA_PID           || Tomcat process id file save Path ||  CATALINA_HOME/tomcat.pid       |
+-------------------------+-----------------------------------+----------------------------------+
|| CRAFTER_DEPLOYER_SDOUT || Crafter Deployer SDOUT path      ||  _Current Working directory\_/  |
||                        ||                                  ||  crafter-deployer/              |
||                        ||                                  ||  crafter-deployer.log           |
+-------------------------+-----------------------------------+----------------------------------+
|| DEPLOYER_PID           || Crafter Deployer process id file ||  _Current Working directory\_/  |
||                        || save path                        ||  crafter-deployer/              |
||                        ||                                  ||  crafter-deployer.pid           |
+-------------------------+-----------------------------------+----------------------------------+


+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``startup(.sh|bat)``                                                |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || Crafter CMS *Authoring Environment*                                 |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``shutdown(.sh|bat)``                                               |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Stops all needed Services to have a functional                      |
||                        || Crafter CMS *Authoring Environment*                                 |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``debug(.sh|bat)``                                                  |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || Crafter CMS *Authoring Environment* with the JAVA remote debug      |
||                        || ports open and listing port 5005 for Crafter Deployer,              |
||                        || 1044 for Solr and 8000 for Apache Tomcat                            |
+-------------------------+----------------------------------------------------------------------+


+-------------------------+----------------------------------------------------------------------+
|| **Script**             || ``deployer(.sh/bat)``                                               |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Script located in *crafter-auth-env/crafter-deployer* which will    |
||                        || start,stop Crafter Deployer                                         |
+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``deployer.(sh/bat) start|stop|debug|tail``                         |
+-------------------------+----------------------------------------------------------------------+
|| **Arguments**          || * ``start`` Starts all Crafter CMS services in this order           |
||                        ||    Crafter Deployer, Solr, Apache Tomcat                            |
||                        || * ``stop``  Stops all Crafter CMS services in the same order as     |
||                        ||    they start.                                                      |
||                        || * ``debug`` Start all Crafter CMS services with the JAVA remote     |
||                        ||    debug port 5005 for Crafter Deployer, 1044 for Solr and 8000     |
||                        ||    for Apache Tomcat                                                |
||                        || * ``help``  Prints script help                                      |
+-------------------------+----------------------------------------------------------------------+


``deployer(.sh/bat)`` **Environment Variables**


**Note** If any of this variables are set using the ``crafter.(sh|bat)`` script the *default value of ``crafter.(sh|bat)``
is the one that will be used.*


+-------------------------+-----------------------------------+----------------------------------+
|| Variable Name          || Description                      || Default Value                   |
+=========================+===================================+==================================+
|| DEPLOYER_JAVA_OPTS     || Java Options to be passed to     || empty                           |
||                        || Crafter Deployer                 ||                                 |
+-------------------------+-----------------------------------+----------------------------------+
|| CRAFTER_DEPLOYER_HOME  || Crafter Deployer jar file path   || _Current Working directory\_/   |
||                        ||                                  || crafter-deployer                |
+-------------------------+-----------------------------------+----------------------------------+
|| CRAFTER_DEPLOYER_SDOUT || Crafter Deployer SDOUT path      ||  _Current Working directory\_/  |
||                        ||                                  ||  crafter-deployer/              |
||                        ||                                  ||  crafter-deployer.log           |
+-------------------------+-----------------------------------+----------------------------------+
|| DEPLOYER_PID           || Crafter Deployer process id file ||  _Current Working directory\_/  |
||                        || save path                        ||  crafter-deployer/              |
||                        ||                                  ||  crafter-deployer.pid           |
+-------------------------+-----------------------------------+----------------------------------+

**Other Scripts**

For more information about Apache Tomcat and SOLR, please refer to the following:

 * [Tomcat Script documentation](https://tomcat.apache.org/tomcat-8.5-doc/RUNNING.txt)
 * [Solr Script documentation](https://cwiki.apache.org/confluence/display/solr/Running+Solr)

                
**Distribute Crater CMS Live Environment**

To Distribute a Crafter CMS Environment there is a task ``livePack`` that will generate a Zip and a Tar file with
a **Clean** Live environment.  This means that it will trigger the ``liveEnv`` task and make sure that your distributable
files are clean and ready to be unarchived.

Archives will be saved in as ``crafter-live-env.tar`` and ``crafter-live-env.zip`` in the ``distributables`` folder
[Check the :ref:`gradle-tasks` for more information about the livePack task]


.. code-block:: bash

     ./gradlew livePack

                
                
Create a Live Environment
==========================

Building a Crafter CMS Live environment
---------------------------------------

**TBA: Live Environment Definition**

Once all the sources have been downloaded, you can run

.. code-block:: bash

    ./gradlew liveEnv


The Gradle task above will:

1. Delete any existing *Live environment* in the ``crafter-live-env`` folder. *It will always make a clean Live environment*

2. Download Apache Tomcat and Solr. (Check the Gradle section on how to specify a version of Apache Tomcat an Solr)

3. Build all Crafter CMS modules from the source (check the :ref:`git` section on how to update the source).

4. Create a folder name ``crafter-live-env`` and copy all needed resources for a *clean* and functional Live environment.


Running a Crafter CMS Live environment
--------------------------------------

To run the *Live environment* you can:

* Run the gradle task

.. code-block:: bash

    ./gradlew runLive

or
 
* Run it manually 

.. code-block:: bash

    cd crafter-live-env
    ./startup.sh


Both of those options will:

* Start Apache tomcat on default ports (9080, 9009, 9005) [See :ref:`gradle-tasks` on how to change default ports]

* Start Solr server on port 8985

* Start Crafter Deployer on port 


Live Environment Scripts
------------------------

The Crafter CMS Live scripts will help you on the basic startup and shutdown of the services needed to run a healthy *Live environment*
with the following scripts:

+-------------------------+----------------------------------------------------------------------+
|| **Script**             || ``crafter(.sh/bat)``                                                |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Main Script to start,and stop all needed Services to have a         |
||                        || functional Crafter CMS *Live Environment*                           |
+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``crafter.(sh/bat) start|stop|debug|tail|help``                     |
+-------------------------+----------------------------------------------------------------------+
|| **Arguments**          || * ``start`` Starts all Crafter CMS services in this order           |
||                        ||    Crafter Deployer, Solr, Apache Tomcat                            |
||                        || * ``stop``  Stops all Crafter CMS services in the same order as     |
||                        ||    they start.                                                      |
||                        || * ``debug`` Start all Crafter CMS services with the JAVA remote     |
||                        ||    debug port 6005 for Crafter Deployer, 2044 for Solr and 9000     |
||                        ||    for Apache Tomcat                                                |
||                        || * ``tail``  **OSX or Linux only** Tails Apache Tomcat log,          |
||                        ||    Crafter Deployer Log and Solr log.                               |
||                        || * ``help``  Prints script help                                      |
+-------------------------+----------------------------------------------------------------------+

``crafter(.sh/bat)`` **Environment Variables**

+-------------------------+-----------------------------------+----------------------------------+
|| Variable Name          || Description                      || Default Value                   |
+=========================+===================================+==================================+
|| CRAFTER_HOME           || Crafter CMS path                 || _Current Working directory\_    |
+-------------------------+-----------------------------------+----------------------------------+
|| DEPLOYER_JAVA_OPTS     || Java Options to be passed to     || empty                           |
||                        ||    Crafter Deployer              ||                                 |
+-------------------------+-----------------------------------+----------------------------------+
|| CRAFTER_DEPLOYER_HOME  || Crafter Deployer jar file path   || _Current Working directory\_/   |
||                        ||                                  ||       crafter-deployer          |
+-------------------------+-----------------------------------+----------------------------------+
|| CATALINA_HOME          || Apache Tomcat files path         ||  _Current Working directory\_/  |
||                        ||                                  ||       apache-tomcat             |
+-------------------------+-----------------------------------+----------------------------------+
|| CATALINA_PID           || Tomcat process id file save Path ||  CATALINA_HOME/tomcat.pid       |
+-------------------------+-----------------------------------+----------------------------------+
|| CRAFTER_DEPLOYER_SDOUT || Crafter Deployer SDOUT path      ||  _Current Working directory\_/  |
||                        ||                                  ||        crafter-deployer/        |
||                        ||                                  ||        crafter-deployer.log     |
+-------------------------+-----------------------------------+----------------------------------+
|| DEPLOYER_PID           || Crafter Deployer process id file ||  _Current Working directory\_/  |
||                        ||    save path                     ||        crafter-deployer/        |
||                        ||                                  ||        crafter-deployer.pid     |
+-------------------------+-----------------------------------+----------------------------------+


+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``startup(.sh|bat)``                                                |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || Crafter CMS *Live Environment*                                      |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``shutdown(.sh|bat)``                                               |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Stops all needed Services to have a functional                      |
||                        || Crafter CMS *Live Environment*                                      |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``debug(.sh|bat)``                                                  |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || Crafter CMS *Live Environment* with the JAVA remote debug           |
||                        || ports open and listing port 6005 for Crafter Deployer,              |
||                        || 2044 for Solr and 9000 for Apache Tomcat                            |
+-------------------------+----------------------------------------------------------------------+


+-------------------------+----------------------------------------------------------------------+
|| **Script**             || ``deployer(.sh/bat)``                                               |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Script located in *crafter-live-env/crafter-deployer* which will    |
||                        || start and stop Crafter Deployer                                     |
+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``deployer.(sh/bat) start|stop|debug|tail``                         |
+-------------------------+----------------------------------------------------------------------+
|| **Arguments**          || * ``start`` Starts all Crafter CMS services in this order           |
||                        ||    Crafter Deployer, Solr, Apache Tomcat                            |
||                        || * ``stop``  Stops all Crafter CMS services in the same order as     |
||                        ||    they start.                                                      |
||                        || * ``debug`` Start all Crafter CMS services with the JAVA remote     |
||                        ||    debug port 6005 for Crafter Deployer, 2044 for Solr and 9000     |
||                        ||    for Apache Tomcat                                                |
||                        || * ``tail``  **OSX or Linux only** Tails Apache Tomcat log,          |
||                        ||    Crafter Deployer Log and Solr log.                               |
||                        || * ``help``  Prints script help                                      |
+-------------------------+----------------------------------------------------------------------+

``deployer(.sh/bat)`` **Environment Variables**

**Note**  If any of this variables are set using the `crafter.(sh|bat)` script the *default value of `crafter.(sh|bat)`  
is the one that will be used.*

+-------------------------+-----------------------------------+----------------------------------+
|| Variable Name          || Description                      || Default Value                   |
+=========================+===================================+==================================+
|| DEPLOYER_JAVA_OPTS     || Java Options to be passed to     || empty                           |
||                        || Crafter Deployer                 ||                                 |
+-------------------------+-----------------------------------+----------------------------------+
|| CRAFTER_DEPLOYER_HOME  || Crafter Deployer jar file path   || _Current Working directory\_    |
+-------------------------+-----------------------------------+----------------------------------+
|| CRAFTER_DEPLOYER_SDOUT || Crafter Deployer SDOUT path      ||  _Current Working directory\_   |
+-------------------------+-----------------------------------+----------------------------------+
|| DEPLOYER_PID           || Crafter Deployer process id file ||  _Current Working directory\_/  |
||                        || save path                        ||  crafter-deployer.pid           |
+-------------------------+-----------------------------------+----------------------------------+

Other Scripts
-------------

For more information about Apache Tomcat and SOLR, please refer to the following:

    * Tomcat Script documentation (https://tomcat.apache.org/tomcat-8.5-doc/RUNNING.txt)
    * Solr Script documentation (https://cwiki.apache.org/confluence/display/solr/Running+Solr)

                

.. _gradle-tasks:

Gradle Tasks
============

Common task properties
----------------------
+-------------------------+----------------------------------------------------------------------+
|| tomcatVersion          || Sets the tomcat version to be downloaded used by                    |
||                        || *downloadTomcat* task                                               |
+-------------------------+----------------------------------------------------------------------+
|| solrVersion            || Sets the Solr version to be download used by *downloadSolr* task.   |
+-------------------------+----------------------------------------------------------------------+
|| downloadDir            || Path were all downloads will be saved.  Used by *downloadTomat* and |
||                        || *downloadSolr*. Default value is *./target/dowloads*                |
+-------------------------+----------------------------------------------------------------------+
|| authEnv                || Path were a development environment will be generated.              |
||                        || Default value is *./crafter-auth-env/*                              |
+-------------------------+----------------------------------------------------------------------+
|| liveEnv                || Path were a development environment will be generated.              |
||                        || Default value is *./crafter-live-env/*                              |
+-------------------------+----------------------------------------------------------------------+
|| includeProfile         || Includes profile in the generation of the development environment.  |
||                        || Default value is false. **If true,mongodb is required**             |
+-------------------------+----------------------------------------------------------------------+
|| includeSocial          || Includes Social in the generation of the development environment.   |
||                        || Default value is false,                                             |
||                        || **If true, *includeProfile* will be set to true**                   |
+-------------------------+----------------------------------------------------------------------+
|| authTomcatPort         || Authoring Tomcat Http port. Default value is 8080                   |
+-------------------------+----------------------------------------------------------------------+
|| authTomcatShutdownPort || Authoring Tomcat Shutdown port. Default value is 8005               |
+-------------------------+----------------------------------------------------------------------+
|| authTomcatAJPPort      || Authoring Tomcat AJP port. Default value is 8009                    |
+-------------------------+----------------------------------------------------------------------+
|| authTomcatSSLPort      || Authoring Tomcat SSL(https) port. Default value is 8443             |
+-------------------------+----------------------------------------------------------------------+
|| liveTomcatPort         || Live Tomcat Http port. Default value is 9080                        |
+-------------------------+----------------------------------------------------------------------+
|| liveTomcatShutdownPort || Live Tomcat Shutdown port. Default value is 9005                    |
+-------------------------+----------------------------------------------------------------------+
|| liveTomcatAJPPort      || Live Tomcat AJP port. Default value is 9009                         |
+-------------------------+----------------------------------------------------------------------+
|| liveTomcatSSLPort      || Live Tomcat SSL(https) port. Default value is 9443                  |
+-------------------------+----------------------------------------------------------------------+

Tasks
-----

To get more information about all tasks used:

.. code-block:: bash

    ./gradlew tasks --all

**build**

Builds all the projects from source.

.. code-block:: bash

    ./gradlew build


**build+ProjectName**

Builds the given project, possible values are:

* commons
* core
* search
* profile
* social
* studio
* deployer
* engine

Example:

.. code-block:: bash

    ./gradlew buildStudio

**clean**

Cleans all projects build results

.. code-block:: bat

    gradlew.bat clean

**clean+ProjectName**
Clean the build results of the given project possible values are:
* Commons
* Core
* Search
* Profile
* Social
* Studio
* Deployer
* Engine

Example:

.. code-block:: bat

    gradlew.bat cleanCore


**downloadSolr**

Downloads the given configure Solr version also verifies that the war file is ok agains a sha1 signature.

.. code-block:: bat

    gradlew.bat downloadSolr


**downloadTomcat**

Downloads the given configure Tomcat version also verifies that the zip file is ok agains a sha1 signature.

.. code-block:: bash

    ./gradlew downloadTomcat


**authEnv**

Builds a **Clean** (Delete all the contents of *authEnv* defaults to crafter-auth-env folder) authoring environment for Studio, uses the build results of *build*,*downloadSolr* and *downloadTomcat*
uses the *authEnv* property as the output of the it.
**Note:**
This task will delete the *authEnv* folder.

.. code-block:: bat

    gradlew.bat buildEnv



**liveEnv**

Builds a **Clean** (Delete all the contents of *liveEnv* defaults to crafter-live-env folder) live environment for Studio, uses the build results of *build*,*downloadSolr* and *downloadTomcat*
uses the *liveEnv* property as the output of the it.
**Note:**
This task will delete the *liveEnv* folder.

.. code-block:: bat

    gradlew.bat buildEnv


**authPack**
Packages the *authEnv* in a zip and tar files to be distribute.

.. _git:

Git
===

Copy Crafter CMS repository and initialize submodules
-----------------------------------------------------

.. code-block:: bash

    git clone https://github.com/craftercms/craftercms.git
    cd craftercms
    git submodule init

.. _update-submodules:

Update Submodules
-----------------
1. Run

.. code-block:: bash

    git submodule update --force --recursive --remote


Change Project URL to a fork
----------------------------

1. Change the url on the _.gitmodules_ file
2. Run

.. code-block:: bash

    git submodule sync --recursive


Change the branch/tag of a project (manual way)
-----------------------------------------------

1. Change the `branch` value in the desire project to valid branch,tag or commit id
2. Run

.. code-block:: bash

    git submodule sync --recursive

3. Run :ref:`update-submodules`
