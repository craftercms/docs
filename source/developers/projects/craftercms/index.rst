.. index:: Projects; Crafter CMS

.. _crafter-cms:

###########
Crafter CMS
###########

This project is the parent project that builds everything and prepares a deployable bundle and a developer's environment.

***********
Source Code
***********

Crafter CMS's source code is managed in github: https://github.com/craftercms/craftercms

*************
Documentation
*************

===============
Getting Started
===============

To get started, please review: https://github.com/craftercms/craftercms/blob/master/README.md

For every Crafter CMS repository, there are two long-running branches:

    * develop: this is where development activities happen, and this branch is not meant to be stable
    * master: this is stable and deployable

If you're building a deployable Crafter CMS bundle, you'll need to clone the master branch:

    .. code-block:: bash

        git clone https://github.com/craftercms/craftercms.git

OR

If you would like to contribute to Crafter CMS, to build a developer's environment, you'll need to to clone the develop branch:

    .. code-block:: bash

        git clone https://github.com/craftercms/craftercms.git -b develop

For more information on Crafter CMS Git Workflow, please review: https://github.com/craftercms/craftercms/blob/master/GIT_WORKFLOW.md

====================
More Advanced Topics
====================

Crafter CMS has two environments, the Authoring Environment and the Delivery Environment.

The authoring environment provides all the content management services, enabling authoring, managing and publishing of all content.  It provides a comprehensive set of user-friendly features for managing and optimizing your experiences.

The delivery environment provides content delivery services.  It consumes content published from your authoring environment and provides developers with the foundation for quickly building high-performance, flexible experiences.

In this section we will be discussing the scripts for the authoring and delivery environments.

------------------------------------------
Authoring and Delivery Environment Scripts
------------------------------------------

The Crafter CMS Authoring and Delivery scripts will help you on the basic startup and shutdown of the services needed to run a healthy *Authoring environment* and *Delivery environment* with the following scripts:

+-------------------------+----------------------------------------------------------------------+
|| **Script**             || ``crafter(.sh/bat)``                                                |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Main Script to start and stop all needed Services to have a         |
||                        || functional Crafter CMS *Authoring/Delivery Environment*             |
+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``crafter.(sh/bat) start|stop|debug|help``                          |
+-------------------------+----------------------------------------------------------------------+
|| **Arguments**          || * ``start`` Starts all Crafter CMS services in this order           |
||                        ||    Crafter Deployer, Solr, Apache Tomcat                            |
||                        || * ``stop``  Stops all Crafter CMS services in the same order as     |
||                        ||    they start.                                                      |
||                        || * ``debug`` Starts all Crafter CMS services with the JAVA remote    |
||                        ||    debug port 5000 for Crafter Deployer, 5005 for Solr and 8000     |
||                        ||    for Apache Tomcat for the *Authoring Environment*                |
||                        ||    Starts all Crafter CMS services with the JAVA remote debug port  |
||                        ||    5001 for Crafter Deployer, 5006 for Solr and 9000 for Apache     |
||                        ||    Tomcat for the *Delivery Environment*                            |
||                        || * ``status`` Prints the status of Solr, Crafter Deployer and        |
||                        ||    Crafter Studio (uptime, process id and version if applicable)    |
||                        || * ``help``  Prints all options available                            |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``startup(.sh|bat)``                                                |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || Crafter CMS *Authoring/Delivery Environment*                        |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``shutdown(.sh|bat)``                                               |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Stops all needed Services to have a functional                      |
||                        || Crafter CMS *Authoring/Delivery Environment*                        |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``debug(.sh|bat)``                                                  |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || Crafter CMS *Authoring/Delivery Environment* with the JAVA remote   |
||                        || debug ports open and listening port 5000/5001 for Crafter Deployer, |
||                        || 5005/5006 for Solr and 8000/9000 for Apache Tomcat                  |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Script**             || ``deployer(.sh/bat)``                                               |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Script located in *$CRAFTER_HOME/crafter-deployer* which will       |
||                        || start,stop Crafter Deployer for the *Authoring/Delivery* environment|
+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``deployer.(sh/bat) start|stop|debug|help``                         |
+-------------------------+----------------------------------------------------------------------+
|| **Arguments**          || * ``start`` Starts all Crafter CMS services in this order           |
||                        ||    Crafter Deployer, Solr, Apache Tomcat                            |
||                        || * ``stop``  Stops all Crafter CMS services in the same order as     |
||                        ||    they start.                                                      |
||                        || * ``debug`` Start all Crafter CMS services with the JAVA remote     |
||                        ||    debug port 5000 for Crafter Deployer, 5005 for Solr and 8000     |
||                        ||    for Apache Tomcat for the *Authoring Environment*                |
||                        ||    Starts all Crafter CMS services with the JAVA remote debug port  |
||                        ||    5001 for Crafter Deployer, 5006 for Solr and 9000 for Apache     |
||                        ||    Tomcat for the *Delivery Environment*                            |
||                        || * ``help``  Prints script help                                      |
+-------------------------+----------------------------------------------------------------------+

Here are the general environment variables used by ``crafter(.sh/bat)``:

+--------------------------+---------------------------------------------------------------------+
|| Variable Name           || Description                                                        |
||                         +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| CRAFTER_HOME            || Crafter CMS *Authoring/Delivery* path                              |
||                         +---------------------------------------------------------------------+
||                         || {Crafter-CMS-install-directory}/crafter-{env}/bin                  |
+--------------------------+---------------------------------------------------------------------+
|| CRAFTER_ROOT            || Crafter CMS path                                                   |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/..                                                   |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_HOME           || Crafter Deployer jar files path                                    |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/crafter-deployer                                     |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for Tomcat in ``crafter(.sh/bat)``:

+--------------------------+---------------------------------------------------------------------+
|| Tomcat                  || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| CATALINA_HOME           || Apache Tomcat files path                                           |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/apache-tomcat                                        |
+--------------------------+---------------------------------------------------------------------+
|| CATALINA_PID            || Tomcat process id file save path                                   |
||                         +---------------------------------------------------------------------+
||                         || $CATALINA_HOME/tomcat.pid                                          |
+--------------------------+---------------------------------------------------------------------+
|| CATALINA_LOGS_DIR       || Tomcat file logs path                                              |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_ROOT/logs/tomcat                                          |
+--------------------------+---------------------------------------------------------------------+
|| CATALINA_OUT            || Tomcat main log file                                               |
||                         +---------------------------------------------------------------------+
||                         || $CATALINA_LOGS_DIR/catalina.out                                    |
+--------------------------+---------------------------------------------------------------------+
|| CATALINA_OPTS           || Tomcat options                                                     |
||                         +---------------------------------------------------------------------+
||                         || -Dcatalina.logs=$CATALINA_LOGS_DIR -server -Xss1024K -Xms1G -Xmx4G |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for Solr in ``crafter(.sh/bat)``:

+--------------------------+---------------------------------------------------------------------+
|| Solr                    || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| SOLR_PORT               || Solr port                                                          |
||                         +---------------------------------------------------------------------+
||                         || 8694                                                               |
+--------------------------+---------------------------------------------------------------------+
|| SOLR_INDEXES_DIR        || Solr indexes directory                                             |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_ROOT/data/indexes                                         |
+--------------------------+---------------------------------------------------------------------+
|| SOLR_LOGS_DIR           || Solr log files directory                                           |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_ROOT/logs/solr                                            |
+--------------------------+---------------------------------------------------------------------+
|| SOLR_JAVA_OPTS          || Solr Java options                                                  |
||                         +---------------------------------------------------------------------+
||                         || "-server -Xss1024K -Xmx1G"                                         |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for the Deployer in ``crafter(.sh/bat)``:

+--------------------------+---------------------------------------------------------------------+
|| Deployer                || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| DEPLOYER_PORT           || Deployer port                                                      |
||                         +---------------------------------------------------------------------+
||                         || 9191                                                               |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_DATA_DIR       || Deployer data files directory                                      |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_ROOT/data/deployer                                        |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_LOGS_DIR       || Deployer log files directory                                       |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_ROOT/logs/deployer                                        |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_DEPLOYMENTS_DIR|| Deployer deployments files directory                               |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_ROOT/data/repos/sites                                     |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_SDOUT          || Deployer SDOUT path                                                |
||                         +---------------------------------------------------------------------+
||                         || $DEPLOYER_LOGS_DIR/crafter-deployer.out                            |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_JAVA_OPTS      || Deployer Java options                                              |
||                         +---------------------------------------------------------------------+
||                         || "-server -Xss1024K -Xmx1G"                                         |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for MongoDB in ``crafter(.sh/bat)``:

+--------------------------+---------------------------------------------------------------------+
|| MongoDB                 || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| MONGODB_PORT            || MongoDB port                                                       |
||                         +---------------------------------------------------------------------+
||                         || 27020                                                              |
+--------------------------+---------------------------------------------------------------------+
|| MONGODB_HOME            || MongoDB files path                                                 |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/mongodb                                              |
+--------------------------+---------------------------------------------------------------------+
|| MONGODB_PID             || MongoDB process id file save path                                  |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_ROOT/data/mongodb/mongod.lock                             |
+--------------------------+---------------------------------------------------------------------+
|| MONGODB_DATA_DIR        || MongoDB data directory                                             |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_ROOT/data/mongodb                                         |
+--------------------------+---------------------------------------------------------------------+
|| MONGODB_LOGS_DIR        || MongoDB log files directory                                        |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_ROOT/logs/mongodb                                         |
+--------------------------+---------------------------------------------------------------------+

Let's look at an example on how to start an authoring environment using the scripts we discussed above.  To start the authoring environment, go to your Crafter CMS install folder then run the following:

.. code-block:: bash

   cd crafter-authoring
   ./startup.sh

What the above does is go to your authoring environment folder, then run the startup script.

To stop the authoring environment:

.. code-block:: bash

   ./shutdown.sh

^^^^^^^^^^^^^
Other Scripts
^^^^^^^^^^^^^

For more information about Apache Tomcat and Solr, please refer to the following:

 * [Tomcat Script documentation](https://tomcat.apache.org/tomcat-8.5-doc/RUNNING.txt)
 * [Solr Script documentation](https://cwiki.apache.org/confluence/display/solr/Running+Solr)


-------------------------------------------------
Gradle Authoring and Delivery Environment Scripts
-------------------------------------------------

As we have seen in the getting started section above, to run a gradle task, we run the following from the root of the project:

.. code-block:: bash

   ./gradlew command [-Penv={env}] [-PmoduleName={module}]


Here's a list of commands (Gradle tasks) available:

+---------------+-------------------------------------------+--------------+-----------------+
|| Command      || Description                              || Env Options || Module Options |
|| ``command``  ||                                          || ``env``     || ``module``     |
+===============+===========================================+==============+=================+
|| init         || Clones Crafter CMS                       || - None      || - None         |
+---------------+-------------------------------------------+--------------+-----------------+
|| build        || Build a module or an entire              || authoring   || - None         |
||              || environment                              ||             || - studio       |
||              ||                                          ||             || - deployer     |
||              ||                                          ||             || - engine       |
||              ||                                          ||             || - search       |
||              ||                                          ||             || - social       |
||              ||                                          ||             || - profile      |
||              ||                                          ||             || - core         |
||              ||                                          ||             || - commons      |
||              ||                                          ||             || - studio2-ui   |
||              ||                                          +--------------+                 |
||              ||                                          || delivery    ||                |
+---------------+-------------------------------------------+--------------+-----------------+
|| deploy       || Deploy a module or an entire             || authoring   || - None         |
||              || environment                              ||             || - studio       |
||              ||                                          ||             || - deployer     |
||              ||                                          ||             || - engine       |
||              ||                                          ||             || - search       |
||              ||                                          ||             || - social       |
||              ||                                          ||             || - profile      |
||              ||                                          +--------------+-----------------+
||              ||                                          || delivery    || - None         |
||              ||                                          ||             || - deployer     |
||              ||                                          ||             || - engine       |
||              ||                                          ||             || - search       |
||              ||                                          ||             || - social       |
||              ||                                          ||             || - profile      |
+---------------+-------------------------------------------+--------------+-----------------+
|| bundle       || Build a deployable and distributable     || authoring   || - None         |
||              || bundle                                   +--------------+                 |
||              ||                                          || delivery    ||                |
+---------------+-------------------------------------------+--------------+-----------------+
|| start        || Start Crafter CMS                        || authoring   || - None         |
||              ||                                          +--------------+                 |
||              ||                                          || delivery    ||                |
+---------------+-------------------------------------------+--------------+-----------------+
|| stop         || Stop Crafter CMS                         || authoring   || - None         |
||              ||                                          +--------------+                 |
||              ||                                          || delivery    ||                |
+---------------+-------------------------------------------+--------------+-----------------+
|| update       || Update a module or modules               || - None      || - None         |
||              ||                                          ||             || - studio       |
||              ||                                          ||             || - deployer     |
||              ||                                          ||             || - engine       |
||              ||                                          ||             || - search       |
||              ||                                          ||             || - social       |
||              ||                                          ||             || - profile      |
||              ||                                          ||             || - core         |
||              ||                                          ||             || - commons      |
||              ||                                          ||             || - studio2-ui   |
+---------------+-------------------------------------------+--------------+-----------------+
|| upgrade      || Upgrades the installed Tomcat version,   || - None      || - None         |
||              || Solr scripts, etc, without deleting your ||             ||                |
||              || data then builds and deploys             ||             ||                |
+---------------+-------------------------------------------+--------------+-----------------+
|| selfupdate   || Updates the Crafter CMS project (gradle) || - None      || - None         |
+---------------+-------------------------------------------+--------------+-----------------+
|| clean        || Delete all compiled objects              || - None      || - None         |
+---------------+-------------------------------------------+--------------+-----------------+

**Note:**

If you don't specify the ``env`` parameter, it means all environments (where applicable).
In the current version of Crafter CMS, some services run in the same Web container, and that implies the stopping/starting of one of these services will cause other services to stop/start as well.


Let's see some examples of running Gradle tasks here.

^^^^^
BUILD
^^^^^

To build the authoring and delivery environments, run the following:

.. code-block:: bash

   ./gradlew build

The Gradle task above will:

#. Delete any existing environments/module
#. Download Apache Tomcat, Apache Solr and MongoDB (check the Gradle section on how to specify a version of Apache Tomcat and Apache Solr)
#. Build all Crafter CMS modules from the source (check the :ref:`git` section on how to update the source)
#. Create the environment folders and copy all needed resources

    - ``crafter-authoring``
    - ``crafter-delivery``

To build a module (all module options for task ``build`` are listed in the table above), run the following (we'll build the module *studio* in the example below):

.. code-block:: bash

   ./gradlew build -PmoduleName=studio


To build an environment, run the following (we'll build the authoring environment in the example below:

.. code-block:: bash

   ./gradlew build -Penv=authoring

^^^^^
START
^^^^^

To start an environment, run the following:

.. code-block:: bash

   ./gradlew start [-Penv={env}]

What this does under the hood is:

.. code-block:: bash

   cd crafter-{env}
   ./startup.sh

The options above will:

For the *Authoring Environment*:

* Start Apache tomcat on default ports (8080, 8009, 8005) [See :ref:`gradle-tasks` on how to change default ports]
* Start Solr server on port 8684
* Start Crafter Deployer on port 9191

For the *Delivery Environment*:

* Start Apache tomcat on default ports (9080, 9009, 9005) [See :ref:`gradle-tasks` on how to change default ports]
* Start Solr server on port 8685
* Start Crafter Deployer on port 9192

Here's an example starting an authoring environment:

.. code-block:: bash

   ./gradlew start -Penv=authoring


^^^^
STOP
^^^^

To stop an environment, run the following:

.. code-block:: bash

   ./gradlew stop [-Penv={env}]

What this does under the hood is:

.. code-block:: bash

   cd crafter-{env}
   ./shutdown.sh


^^^^^^
BUNDLE
^^^^^^

The Gradle task ``bundle`` will build a deployable and distributable bundle of Crafter CMS for the authoring and/or delivery environments.  This will generate zip and tar files ready to be unarchived and run.

.. code-block:: bash

   ./gradlew bundle [-Penv={env}]

Archives will be saved as ``crafter-cms-authoring.tar`` and ``crafter-cms-authoring.zip`` for the *Authoring Environment* and ``crafter-cms-delivery.tar`` and ``crafter-cms-delivery.zip`` for the *Delivery Environment* in the ``bundles`` folder


.. _gradle-tasks:

^^^^^^^^^^^^
Gradle Tasks
^^^^^^^^^^^^

In the section above, we discussed some of the Gradle tasks used for building, starting, stopping and bundling our authoring and delivery environments.  To get more information about all tasks used, run the following:

.. code-block:: bash

   ./gradlew tasks --all

Let's take a look at some examples of running a task.

downloadSolr
^^^^^^^^^^^^
Downloads the configured Solr version and also verifies that the war file is ok against a sha1 signature.

.. code-block:: bat

   gradlew.bat downloadSolr


downloadTomcat
^^^^^^^^^^^^^^
Downloads the configured Tomcat version and also verifies that the zip file is ok against a sha1 signature.

.. code-block:: bash

   ./gradlew downloadTomcat


Aside from the tasks that we can run, there are also some properties defined in Crafter CMS that allows us to configure our environment.  Below are the available task properties

Common task properties
^^^^^^^^^^^^^^^^^^^^^^
+------------------------------------------------------------------------------------------------+
|| Unzip Properties                                                                              |
+-------------------------+----------------------------------------------------------------------+
|| Property               || Description                                                         |
+=========================+======================================================================+
|| ``tomcat.version``     || Sets the tomcat version to be downloaded used by                    |
||                        || *downloadTomcat* task                                               |
+-------------------------+----------------------------------------------------------------------+
|| ``solr.version``       || Sets the Solr version to be downloaded used by *downloadSolr* task. |
+-------------------------+----------------------------------------------------------------------+
|| ``downloadDir``        || Path were all downloads will be saved. Used by *downloadTomcat* and |
||                        || *downloadSolr*. Default value is *./target/downloads*               |
+-------------------------+----------------------------------------------------------------------+

+------------------------------------------------------------------------------------------------+
|| Environment Building Properties                                                               |
+-------------------------+----------------------------------------------------------------------+
|| Property               || Description                                                         |
+=========================+======================================================================+
|| ``authoring.root``     || Path were a development environment will be generated.              |
||                        || Default value is *./crafter-authoring/*                             |
+-------------------------+----------------------------------------------------------------------+
|| ``delivery.root``      || Path were a delivery environment will be generated.                 |
||                        || Default value is *./crafter-delivery/*                              |
+-------------------------+----------------------------------------------------------------------+
|| ``crafter.profile``    || Includes Profile in the generation of the development environment.  |
||                        || Default value is false. **If true,mongodb is required**             |
+-------------------------+----------------------------------------------------------------------+
|| ``crafter.social``     || Includes Social in the generation of the development environment.   |
||                        || Default value is false,                                             |
||                        || **If true, *includeProfile* will be set to true**                   |
+-------------------------+----------------------------------------------------------------------+

+------------------------------------------------------------------------------------------------+
|| Authoring Environment Properties                                                              |
+-------------------------------------+----------------------------------------------------------+
|| Property                           || Description                                             |
+=====================================+==========================================================+
|| ``authoring.tomcat.http.port``     || Authoring Tomcat Http port. Default value is 8080       |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.tomcat.shutdown.port`` || Authoring Tomcat shutdown port. Default value is 8005   |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.tomcat.ajp.port``      || Authoring Tomcat AJP port. Default value is 8009        |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.tomcat.https.port``    || Authoring Tomcat SSL(https) port. Default value is 8443 |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.tomcat.debug.port``    || Authoring Tomcat debug port. Default value is 8000      |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.mongo.port``           || Authoring MongoDb port. Default value is 27020          |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.solr.port``            || Authoring Solr port. Default value is 8694              |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.solr.debug.port``      || Authoring Solr debug port. Default value is 5005        |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.mariadb.port``         || Authoring MariaDb port. Default value is 33306          |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.deployer.port``        || Authoring Deployer port. Default value is 9191          |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.deployer.debug.port``  || Authoring Deployer debug port. Default value is 5000    |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.deployment.dir``       || Authoring deployment directory.                         |
||                                    || Default value is "data/repos/sites"                     |
+-------------------------------------+----------------------------------------------------------+

+------------------------------------------------------------------------------------------------+
|| Delivery Environment Properties                                                               |
+------------------------------------+-----------------------------------------------------------+
|| Property                          || Description                                              |
+====================================+===========================================================+
|| ``delivery.tomcat.http.port``     || Delivery Tomcat Http port. Default value is 9080         |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.tomcat.shutdown.port`` || Delivery Tomcat Shutdown port. Default value is 9005     |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.tomcat.ajp.port``      || Delivery Tomcat AJP port. Default value is 9009          |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.tomcat.https.port``    || Delivery Tomcat SSL(https) port. Default value is 9443   |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.tomcat.debug.port``    || Delivery Tomcat debug port. Default value is 9000        |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.mongodb.port``         || Delivery Mongo DB port. Default value is 28020           |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.solr.port``            || Delivery Solr port. Default value is 8695                |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.solr.debug.port``      || Delivery Solr debug port. Default value is 5006          |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.deployer.port``        || Delivery Deployer port. Default value is 9192            |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.deployer.debug.port``  || Delivery Deployer debug port. Default value is 5001      |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.deployment.dir``       || Delivery Deployment directory.                           |
||                                   || Default value is "data/repos/sites"                      |
+------------------------------------+-----------------------------------------------------------+

.. _git-properties:

+------------------------------------------------------------------------------------------------+
|| Git Properties                                                                                |
+-----------------------------+------------------------------------------------------------------+
|| Property                   || Description                                                     |
+=============================+==================================================================+
|| ``crafter.git.url``        || Git URL                                                         |
||                            || Default value is "https://github.com/craftercms/"               |
+-----------------------------+------------------------------------------------------------------+
|| ``crafter.git.branch``     || Git source branch. Default value is "master"                    |
+-----------------------------+------------------------------------------------------------------+
|| ``crafter.git.remote``     || Git repository. Default value is "origin"                       |
+-----------------------------+------------------------------------------------------------------+
|| ``crafter.ui.repo``        || Is Studio UI from repository? Default value is false            |
+-----------------------------+------------------------------------------------------------------+
|| ``forceDeploy``            || Force deploy? Default value is false                            |
+-----------------------------+------------------------------------------------------------------+

Here's an example using one of the task properties, ``gitRepo``,  to get the latest code from Crafter CMS, in order to have the latest updates from the community:

.. code-block:: bash

    ./gradlew update -Pcrafter.git.remote=upstream

Here's another example on how to init, build and bundle from a given tag/branch.  Remember to clone the desired branch/tag of craftercms (As described in the next section :ref:`git`),  before running the command below:

.. code-block:: bash

   ./gradlew init build deploy bundle -Pcrafter.git.branch={BRANCH}/{TAG NAME}

Replace {BRANCH} or {TAG NAME} with the branch and tag you'd like to build.

Here's yet another example of building and deploying the authoring environment of Crafter CMS with Crafter Profile included:

.. code-block:: bash

   ./gradlew build deploy -Pcrafter.profile=true -Penv=authoring


.. _git:

-------------------
Useful Git Commands
-------------------

Here are some useful Git commands for setting up our Crafter CMS project.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Copy Crafter CMS repository and initialize submodules
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   git clone https://github.com/craftercms/craftercms.git
   cd craftercms
   git submodule init

.. _update-submodules:

^^^^^^^^^^^^^^^^^
Update Submodules
^^^^^^^^^^^^^^^^^
1. Run

.. code-block:: bash

   git submodule update --force --recursive --remote

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Change Project URL to a fork
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Change the url on the _.gitmodules_ file
2. Run

.. code-block:: bash

   git submodule sync --recursive

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Change the branch/tag of a project (manual way)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Change the `branch` value in the desire project to valid branch,tag or commit id
2. Run

.. code-block:: bash

   git submodule sync --recursive

3. Run :ref:`update-submodules`

^^^^^^^^^^^^^^^^^^
Clone a branch/tag
^^^^^^^^^^^^^^^^^^

To clone the branch/tag of craftercms that you want to work with, run:

.. code-block:: bash

    git clone -b<branch> https://github.com/craftercms/craftercms/

Replace {BRANCH} or {TAG NAME} with the branch and tag you'd like to build.  After cloning the desired branch, you can now init, build and bundle from a given tag/branch using the property `crafter.git.branch` as described in an earlier section :ref:`Git Properties<git-properties>`



.. _build-crafter-cms-in-windows:

===============================
Building Crafter CMS in Windows
===============================

This section will give you information/tips on how to setup your environment in order to build Crafter CMS on Windows.

----------------------------
Installing the prerequisites
----------------------------

The first thing we need to do is install the prerequisites.  We need to install the following:

    - Java 8
    - Git 2.x+
    - Maven 3.3.x+

We'll describe two ways of installing the prerequisites:

#. Installing the prerequisites one by one
#. Installing the prerequisites using `chocolatey <https://chocolatey.org/>`_

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Installing the prerequisites one by one
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Below are the links to install the prerequisites one by one:

Installing Java
^^^^^^^^^^^^^^^

The :ref:`quick_start_guide` has information on how to install Java and setup your JAVA_HOME environment variable.


Installing Git
^^^^^^^^^^^^^^

There are a few ways to install git on Windows.

#. One way is to install Git for Windows, download available here:  http://git-scm.com/download/win
#. Another way is to install `GitHub for Windows <https://git-for-windows.github.io/>`_

You can find more information on installing git on Windows `here <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_

Installing Maven
^^^^^^^^^^^^^^^^

#. To install maven on Windows, follow the guide `Maven on Windows <https://maven.apache.org/guides/getting-started/windows-prerequisites.html>`_


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Installing the prerequisites using Chocolatey
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Chocolatey is a package manager for Windows that helps you install packages in one line.  To install chocolatey, please follow the instructions listed here: https://chocolatey.org/install . Below are the steps to install the prerequisites using chocolatey.

.. note::

    Remember to use an administrative shell when installing and running chocolatey.  One way to run an administrative shell is by searching for `cmd` or `command prompt`  in the search box, then right click on the match, and select `Run as administrator` to get an administrator shell.

.. note::

    Notice that you do not have to install Java, because when you install Maven, since Java is one of its dependencies, choco will install it for you and add the necessary environment variables.

Installing Git
^^^^^^^^^^^^^^
To install git, just run the following from your command line:

   .. code-block:: bat

       choco install git

Installing Maven
^^^^^^^^^^^^^^^^

To install Maven, just run the following from your command line:

   .. code-block:: bat

       choco install maven

--------------------
Building Crafter CMS
--------------------

To build Crafter CMS after installing the prerequisites, you can follow the instructions listed here: https://github.com/craftercms/craftercms/blob/master/README.md

Also, please note that depending on your machine, Crafter CMS may take around half an hour or so to build.

