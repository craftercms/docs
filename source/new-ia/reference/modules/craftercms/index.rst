:is-up-to-date: True
:last-updated: 4.0.3

:nosearch:

.. index:: Projects; CrafterCMS

.. _newIa-crafter-cms:

==========
CrafterCMS
==========

This project is the parent project that builds CrafterCMS from source and can also prepare deployable bundles.

-----------
Source Code
-----------

CrafterCMS's source code is managed in GitHub: https://github.com/craftercms/craftercms

.. TODO Clean this up

To get started, please review: https://github.com/craftercms/craftercms/blob/master/README.md

.. TODO Move below to the craftercms/README.md

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
|| clone        || Clones CrafterCMS                        || - None      || - None         |
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
||              ||                                          ||             || - studio-ui    |
||              ||                                          ||             || - plugin-maker |
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
|| bundle       || Build deployable and distributable       || authoring   || - None         |
||              || binaries                                 +--------------+                 |
||              ||                                          || delivery    ||                |
+---------------+-------------------------------------------+--------------+-----------------+
|| start        || Start CrafterCMS                         || authoring   || - None         |
||              ||                                          +--------------+                 |
||              ||                                          || delivery    ||                |
+---------------+-------------------------------------------+--------------+-----------------+
|| stop         || Stop CrafterCMS                          || authoring   || - None         |
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
||              ||                                          ||             || - studio-ui    |
||              ||                                          ||             || - plugin-maker |
+---------------+-------------------------------------------+--------------+-----------------+
|| upgrade      || Upgrades the installed Tomcat version,   || - None      || - None         |
||              || etc, without deleting your data then     ||             ||                |
||              || builds and deploys                       ||             ||                |
+---------------+-------------------------------------------+--------------+-----------------+
|| selfupdate   || Updates the CrafterCMS project (gradle)  || - None      || - None         |
+---------------+-------------------------------------------+--------------+-----------------+
|| clean        || Delete all compiled objects              || - None      || - None         |
+---------------+-------------------------------------------+--------------+-----------------+

.. note::

    * If you don't specify the ``env`` parameter, it means all environments (where applicable).
    * In the current version of CrafterCMS, some services run in the same Web container, and that implies the stopping/starting of one of these services will cause other services to stop/start as well.
    * The Gradle task property ``moduleName`` accepts one or multiple module/s, separated by commas like this: ``./gradlew build -PmoduleName=search,studio``
    * The ``clean`` command does not delete previously built environment folders ``crafter-authoring`` and ``crafter-delivery``. To build a fresh copy of these two, backup your custom data and delete both folders manually.

Let's see some examples of running Gradle tasks here.

^^^^^
BUILD
^^^^^

To build the authoring and delivery environments, run the following:

    .. code-block:: bash

       ./gradlew build

The Gradle task above will:

#. Delete any existing environments/module
#. Download Apache Tomcat, Elasticsearch, and MongoDB (check the Gradle section on how to specify a version for each component)
#. Build all CrafterCMS modules from the source (check the :ref:`newIa-git` section on how to update the source)
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

* Start Apache tomcat on default ports (8080, 8009, 8005) [See :ref:`newIa-gradle-tasks` on how to change default ports]
* Start Elasticsearch on port 9201
* Start Crafter Deployer on port 9191

For the *Delivery Environment*:

* Start Apache tomcat on default ports (9080, 9009, 9005) [See :ref:`newIa-gradle-tasks` on how to change default ports]
* Start ElasticSEarch server on port 9202
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

The Gradle task ``bundle`` will build deployable and distributable binaries of CrafterCMS for the authoring and/or delivery environments.  This will generate tar files ready to be unarchived and run.

    .. code-block:: bash

       ./gradlew bundle [-Penv={env}]

Binaries will be saved as ``crafter-cms-authoring-VERSION.tar`` for the *Authoring Environment* and ``crafter-cms-delivery-VERSION.tar`` for the *Delivery Environment* in the ``bundles`` folder

Using the common task property ``env`` lets you select what environment (authoring or delivery) will be generated.

Let's look at an example using the task property mentioned above:

    .. code-block:: bash

        ./gradlew bundle -Penv=authoring

The command above will generate an authoring binary archive in the bundles folder named ``crafter-cms-authoring-VERSION.tar.gz``.

.. _newIa-gradle-tasks:

^^^^^^^^^^^^
Gradle Tasks
^^^^^^^^^^^^

In the section above, we discussed some of the Gradle tasks used for building, starting, stopping and bundling our authoring and delivery environments.  To get more information about all tasks used, run the following:

    .. code-block:: bash

       ./gradlew tasks --all

Let's take a look at some examples of running a task.

downloadTomcat
^^^^^^^^^^^^^^
Downloads the configured Tomcat version and also verifies that the zip file is ok against a sha1 signature.

    .. code-block:: bash

       ./gradlew downloadTomcat



.. _newIa-common-task-properties:

Common Task Properties
^^^^^^^^^^^^^^^^^^^^^^

Aside from the tasks that we can run, there are also some properties defined in CrafterCMS that allows us to configure our environment.  Below are the available task properties

+------------------------------------------------------------------------------------------------+
|| Download Properties                                                                           |
+---------------------------+--------------------------------------------------------------------+
|| Property                 || Description                                                       |
+===========================+====================================================================+
|| ``tomcat.version``       || Sets the tomcat version to be downloaded used by                  |
||                          || *downloadTomcat* task                                             |
+---------------------------+--------------------------------------------------------------------+
|| ``groovy.version``       || Sets the groovy version to be downloaded used by                  |
||                          || *downloadGroovy* task                                             |
+---------------------------+--------------------------------------------------------------------+
|| ``elasticsearch.version``|| Sets the Elasticsearch version to be downloaded used by           |
||                          || *downloadElasticsearch* task.                                     |
+---------------------------+--------------------------------------------------------------------+
|| ``mariadb4j.version``    || Sets the MariaDb version to be downloaded used by                 |
||                          || *downloadMariaDB4j* task                                          |
+---------------------------+--------------------------------------------------------------------+
|| ``downloadDir``          || Path were all downloads will be saved.                            |
||                          || Default value is *./target/downloads*                             |
+---------------------------+--------------------------------------------------------------------+

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
||                        || Default value is false. **If true, MongoDB is required**            |
+-------------------------+----------------------------------------------------------------------+
|| ``crafter.social``     || Includes Social in the generation of the development environment.   |
||                        || Default value is false,                                             |
||                        || **If true, *includeProfile* will be set to true**                   |
+-------------------------+----------------------------------------------------------------------+

.. _newIa-authoring-default-ports:

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
|| ``authoring.elasticsearch.port``   || Authoring Elasticsearch port. Default value is 9201     |
+-------------------------------------+----------------------------------------------------------+
|| ``authoring.smtp.port``            || Authoring SMTP port. Default value is 25                |
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

.. _newIa-delivery-default-ports:

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
|| ``delivery.elasticsearch.port``   || Delivery Elasticsearch port. Default value is 9202       |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.deployer.port``        || Delivery Deployer port. Default value is 9192            |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.deployer.debug.port``  || Delivery Deployer debug port. Default value is 5001      |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.deployment.dir``       || Delivery Deployment directory.                           |
||                                   || Default value is "data/repos/sites"                      |
+------------------------------------+-----------------------------------------------------------+
|| ``delivery.smtp.port``            || Delivery SMTP port. Default value is 25                  |
+------------------------------------+-----------------------------------------------------------+

.. _newIa-other-properties:

+------------------------------------------------------------------------------------------------+
|| Other Properties                                                                              |
+-------------------------------+----------------------------------------------------------------+
|| Property                     || Description                                                   |
+===============================+================================================================+
|| ``overwriteConfig``          || Overwrite configurations. Default value is false              |
+-------------------------------+----------------------------------------------------------------+
|| ``backupAndReplaceConfig``   || Backup and replace configurations. Default value is false     |
+-------------------------------+----------------------------------------------------------------+

.. _newIa-git-properties:

+------------------------------------------------------------------------------------------------+
|| Git Properties                                                                                |
+-------------------------------+----------------------------------------------------------------+
|| Property                     || Description                                                   |
+===============================+================================================================+
|| ``crafter.git.url``          || Git URL                                                       |
||                              || Default value is "https://github.com/craftercms/"             |
+-------------------------------+----------------------------------------------------------------+
|| ``crafter.git.branch``       || Git source branch. Default value is "master"                  |
+-------------------------------+----------------------------------------------------------------+
|| ``crafter.git.remote``       || Git repository. Default value is "origin"                     |
+-------------------------------+----------------------------------------------------------------+
|| ``crafter.git.shallowClone`` || Perform a shallow clone. Default value is false               |
+-------------------------------+----------------------------------------------------------------+
|| ``crafter.ui.repo``          || Is Studio UI from repository? Default value is false          |
+-------------------------------+----------------------------------------------------------------+

Here's an example using one of the task properties, ``gitRepo``,  to get the latest code from CrafterCMS, in order to have the latest updates from the community:

    .. code-block:: bash

        ./gradlew update -Pcrafter.git.remote=upstream

Here's another example on how to clone, build and bundle from a given tag/branch.  Remember to clone the desired branch/tag of craftercms (As described in the next section :ref:`newIa-git`),  before running the command below:

    .. code-block:: bash

       ./gradlew clone build deploy bundle -Pcrafter.git.branch={BRANCH}/{TAG NAME}

Replace {BRANCH} or {TAG NAME} with the branch and tag you'd like to build.

Here's yet another example of building and deploying the authoring environment of CrafterCMS with Crafter Profile included:

    .. code-block:: bash

       ./gradlew build deploy -Pcrafter.profile=true -Penv=authoring


.. _newIa-git:

-------------------
Useful Git Commands
-------------------

Here are some useful Git commands for setting up our CrafterCMS project.

  .. note::

     You may notice a few ``.keep`` files in your repository.  Those ``.keep`` files are automatically generated by Studio when empty folders are created, since Git doesn't keep track of folders (and Studio does). It's best if you just leave them there and don't add them to ``.gitignore``


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Copy CrafterCMS repository and clone submodules
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    .. code-block:: bash

       git clone https://github.com/craftercms/craftercms.git
       cd craftercms
       git submodule clone

.. _newIa-update-submodules:

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

3. Run :ref:`newIa-update-submodules`

^^^^^^^^^^^^^^^^^^
Clone a branch/tag
^^^^^^^^^^^^^^^^^^

To clone the branch/tag of craftercms that you want to work with, run:

    .. code-block:: bash

        git clone -b<branch> https://github.com/craftercms/craftercms/

Replace {BRANCH} or {TAG NAME} with the branch and tag you'd like to build.  After cloning the desired branch, you can now clone, build and bundle from a given tag/branch using the property `crafter.git.branch` as described in an earlier section :ref:`Git Properties<newIa-git-properties>`


