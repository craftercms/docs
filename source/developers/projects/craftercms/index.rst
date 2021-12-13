:is-up-to-date: True

.. index:: Projects; Crafter CMS

.. _crafter-cms:

###########
Crafter CMS
###########

This project is the parent project that builds everything and prepares deployable binaries and a developer's environment.

***********
Source Code
***********

Crafter CMS's source code is managed in GitHub: https://github.com/craftercms/craftercms

*************
Documentation
*************

===============
Getting Started
===============

To get started, please review: https://github.com/craftercms/craftercms/blob/master/README.md

For every Crafter CMS repository, there are two long-running branches:

    * ``develop``: this is where development activities happen, and this branch is not meant to be stable
    * ``master``: this is stable and deployable

If you're building deployable Crafter CMS binaries, you'll need to clone the master branch:

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

+-------------------------+------------------------------------------------------------------------+
|| **Script**             || ``crafter.sh``                                                        |
+-------------------------+------------------------------------------------------------------------+
|| **Description**        || Main Script to start and stop all needed Services to have a           |
||                        || functional Crafter CMS *Authoring/Delivery Environment*               |
+-------------------------+------------------------------------------------------------------------+
|| **Synopsis**           || ``crafter.sh start|stop|debug|help``                                  |
+-------------------------+------------------------------------------------------------------------+
|| **Arguments**          || * ``start [withMongoDB] [skipElasticsearch] [skipMongoDB]``           |
||                        ||   Starts all Crafter CMS services in this order                       |
||                        ||   Crafter Deployer, Elasticsearch, Apache Tomcat                      |
||                        ||   If withMongoDB is specified MongoDB will be started.                |
||                        ||   If skipElasticsearch is specified Elasticsearch will not be started.|
||                        ||   If skipMongoDB is specified MongoDB will not bestarted even if the  |
||                        ||   Crafter Profile war is present.                                     |
||                        || * ``stop``  Stops all Crafter CMS services in the same order as       |
||                        ||    they start.                                                        |
||                        || * ``debug [withMongoDB] [skipElasticsearch] [skipMongoDB]``           |
||                        ||   Starts all Crafter CMS services with the JAVA remote                |
||                        ||   debug port 5000 for Crafter Deployer, and 8000                      |
||                        ||   for Apache Tomcat for the *Authoring Environment*                   |
||                        ||   Starts all Crafter CMS services with the JAVA remote debug port     |
||                        ||   5001 for Crafter Deployer, and 9000 for Apache                      |
||                        ||   Tomcat for the *Delivery Environment*                               |
||                        ||   If withMongoDB is specified MongoDB will be started.                |
||                        ||   If skipElasticsearch is specified Elasticsearch will not be started.|
||                        ||   If skipMongoDB is specified MongoDB will not bestarted even if the  |
||                        ||   Crafter Profile war is present.                                     |
||                        || * ``start_deployer``  Starts Deployer                                 |
||                        || * ``stop_deployer``  Stops Deployer                                   |
||                        || * ``debug_deployer``  Starts Deployer in debug mode                   |
||                        || * ``start_elasticsearch``  Starts Elasticsearch                       |
||                        || * ``stop_elasticsearch``  Stops Elasticsearch                         |
||                        || * ``debug_elasticsearch``  Starts Elasticsearch in debug mode         |
||                        || * ``start_tomcat``  Starts Apache Tomcat                              |
||                        || * ``stop_tomcat``  Stops Apache Tomcat                                |
||                        || * ``debug_tomcat``  Starts Apache Tomcat in debug mode                |
||                        || * ``start_mongodb``  Starts MongoDB                                   |
||                        || * ``stop_mongodb``  Stops MongoDB                                     |
||                        || * ``status``  Prints the status of all Crafter CMS subsystems         |
||                        || * ``status_engine``  Prints the status of Crafter Engine              |
||                        || * ``status_studio``  Prints the status of Crafter Studio              |
||                        || * ``status_profile``  Prints the status of Crafter Profile            |
||                        || * ``status_social``  Prints the status of Crafter Social              |
||                        || * ``status_deployer``  Prints the status of Crafter Deployer          |
||                        || * ``status_search``  Prints the status of Crafter Search              |
||                        || * ``status_elasticsearch``  Prints the status of Elasticsearch        |
||                        || * ``status_mariadb``  Prints the status of MariaDb                    |
||                        || * ``status_mongodb``  Prints the status of MongoDB                    |
||                        || * ``backup <name>``  Perform a backup of all data                     |
||                        || * ``restore <file>``  Perform a restore of all data                   |
||                        || * ``upgradedb``  Perform database upgrade (mysql_upgrade)             |
+-------------------------+------------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``startup.sh``                                                      |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || Crafter CMS *Authoring/Delivery Environment*                        |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``shutdown.sh``                                                     |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Stops all needed Services to have a functional                      |
||                        || Crafter CMS *Authoring/Delivery Environment*                        |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``debug.sh``                                                        |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Starts all needed Services to have a functional                     |
||                        || Crafter CMS *Authoring/Delivery Environment* with the JAVA remote   |
||                        || debug ports open and listening port 5000/5001 for Crafter Deployer, |
||                        || and 8000/9000 for Apache Tomcat                                     |
+-------------------------+----------------------------------------------------------------------+

+-------------------------+----------------------------------------------------------------------+
|| **Script**             || ``deployer.sh``                                                     |
+-------------------------+----------------------------------------------------------------------+
|| **Description**        || Script located in *$CRAFTER_HOME/bin/crafter-deployer* which will   |
||                        || start,stop Crafter Deployer for the *Authoring/Delivery* environment|
+-------------------------+----------------------------------------------------------------------+
|| **Synopsis**           || ``deployer.sh start|stop|debug|help``                               |
+-------------------------+----------------------------------------------------------------------+
|| **Arguments**          || * ``start`` Starts all Crafter CMS services in this order           |
||                        ||    Crafter Deployer, Elasticsearch, Apache Tomcat                   |
||                        || * ``stop``  Stops all Crafter CMS services in the same order as     |
||                        ||    they start.                                                      |
||                        || * ``debug`` Start all Crafter CMS services with the JAVA remote     |
||                        ||    debug port 5000 for Crafter Deployer, and 8000                   |
||                        ||    for Apache Tomcat for the *Authoring Environment*                |
||                        ||    Starts all Crafter CMS services with the JAVA remote debug port  |
||                        ||    5001 for Crafter Deployer, and 9000 for Apache Tomcat            |
||                        ||    for the *Delivery Environment*                                   |
||                        || * ``help``  Prints script help                                      |
+-------------------------+----------------------------------------------------------------------+

Here are the location environment variables used by ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| Variable Name           || Description                                                        |
||                         +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| CRAFTER_HOME            || Crafter CMS *Authoring/Delivery* path                              |
||                         +---------------------------------------------------------------------+
||                         || {Crafter-CMS-install-directory}/crafter-{env}/                     |
+--------------------------+---------------------------------------------------------------------+
|| CRAFTER_LOGS_DIR        || Crafter CMS logs file path                                         |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/logs                                                 |
+--------------------------+---------------------------------------------------------------------+
|| CRAFTER_DATA_DIR        || Crafter CMS data file path                                         |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/data                                                 |
+--------------------------+---------------------------------------------------------------------+
|| CRAFTER_TEMP_DIR        || Crafter CMS temporary directory path                               |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/temp                                                 |
+--------------------------+---------------------------------------------------------------------+
|| CRAFTER_BACKUPS_DIR     || Crafter CMS backup directory path                                  |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/backups                                              |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for hosts and ports in ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| Hosts and Ports         || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| MAIL_HOST               || Crafter CMS mail host                                              |
||                         +---------------------------------------------------------------------+
||                         || localhost                                                          |
+--------------------------+---------------------------------------------------------------------+
|| MAIL_PORT               || Crafter CMS mail port                                              |
||                         +---------------------------------------------------------------------+
||                         || 25                                                                 |
+--------------------------+---------------------------------------------------------------------+
|| ES_HOST                 || Elasticsearch host                                                 |
||                         +---------------------------------------------------------------------+
||                         || localhost                                                          |
+--------------------------+---------------------------------------------------------------------+
|| ES_PORT                 || Elasticsearch port                                                 |
||                         +---------------------------------------------------------------------+
||                         || 9201                                                               |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_HOST           || Deployer host                                                      |
||                         +---------------------------------------------------------------------+
||                         || localhost                                                          |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_PORT           || Deployer port                                                      |
||                         +---------------------------------------------------------------------+
||                         || 9201                                                               |
+--------------------------+---------------------------------------------------------------------+
|| MONGODB_HOST            || MongoDB host                                                       |
||                         +---------------------------------------------------------------------+
||                         || localhost                                                          |
+--------------------------+---------------------------------------------------------------------+
|| MONGODB_PORT            || MongoDB port                                                       |
||                         +---------------------------------------------------------------------+
||                         || 27020                                                              |
+--------------------------+---------------------------------------------------------------------+
|| MARIADB_HOST            || MariaDb host                                                       |
||                         +---------------------------------------------------------------------+
||                         || 127.0.0.1                                                          |
+--------------------------+---------------------------------------------------------------------+
|| MARIADB_PORT            || MariaDb port                                                       |
||                         +---------------------------------------------------------------------+
||                         || 33306                                                              |
+--------------------------+---------------------------------------------------------------------+
|| TOMCAT_HOST             || Tomcat host                                                        |
||                         +---------------------------------------------------------------------+
||                         || localhost                                                          |
+--------------------------+---------------------------------------------------------------------+
|| TOMCAT_HTTP_PORT        || Tomcat Http port                                                   |
||                         +---------------------------------------------------------------------+
||                         || 8080                                                               |
+--------------------------+---------------------------------------------------------------------+
|| TOMCAT_HTTPS_PORT       || Tomcat SSL (https) port                                            |
||                         +---------------------------------------------------------------------+
||                         || 8443                                                               |
+--------------------------+---------------------------------------------------------------------+
|| TOMCAT_AJP_PORT         || Tomcat AJP port                                                    |
||                         +---------------------------------------------------------------------+
||                         || 8009                                                               |
+--------------------------+---------------------------------------------------------------------+
|| TOMCAT_SHUTDOWN_PORT    || Tomcat shutdown port                                               |
||                         +---------------------------------------------------------------------+
||                         || 8005                                                               |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for URLs in ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| URLs                    || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| ES_URL                  || Elasticsearch URL                                                  |
||                         +---------------------------------------------------------------------+
||                         || "http://$ES_HOST:$ES_PORT"                                         |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_URL            || Crafter Deployer URL                                               |
||                         +---------------------------------------------------------------------+
||                         || "http://$DEPLOYER_HOST:$DEPLOYER_PORT"                             |
+--------------------------+---------------------------------------------------------------------+
|| STUDIO_URL              || Crafter Studio URL                                                 |
||                         +---------------------------------------------------------------------+
||                         || "http://$TOMCAT_HOST:$TOMCAT_HTTP_PORT/studio"                     |
+--------------------------+---------------------------------------------------------------------+
|| ENGINE_URL              || Crafter Engine URL                                                 |
||                         +---------------------------------------------------------------------+
||                         || "http://$TOMCAT_HOST:$TOMCAT_HTTP_PORT/studio"                     |
+--------------------------+---------------------------------------------------------------------+
|| SEARCH_URL              || Crafter Search URL                                                 |
||                         +---------------------------------------------------------------------+
||                         || "http://$TOMCAT_HOST:$TOMCAT_HTTP_PORT/crafter-search"             |
+--------------------------+---------------------------------------------------------------------+
|| PROFILE_URL             || Crafter Profile URL                                                |
||                         +---------------------------------------------------------------------+
||                         || "http://$TOMCAT_HOST:$TOMCAT_HTTP_PORT/crafter-profile"            |
+--------------------------+---------------------------------------------------------------------+
|| SOCIAL_URL              || Crafter Social URL                                                 |
||                         +---------------------------------------------------------------------+
||                         || "http://$TOMCAT_HOST:$TOMCAT_HTTP_PORT/crafter-social"             |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for Java options in ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| Java options            || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| ES_JAVA_OPTS            || Elasticsearch Java options                                         |
||                         +---------------------------------------------------------------------+
||                         || "-server -Xss1024K -Xmx1G"                                         |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_JAVA_OPTS      || Deployer Java options                                              |
||                         +---------------------------------------------------------------------+
||                         || "-server -Xss1024K -Xmx1G"                                         |
+--------------------------+---------------------------------------------------------------------+
|| CATALINA_OPTS           || Tomcat options                                                     |
||                         +---------------------------------------------------------------------+
||                         || "-server -Xss1024K -Xms1G -Xmx4G"                                  |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for Tomcat in ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| Tomcat                  || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| CATALINA_HOME           || Apache Tomcat files path                                           |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/bin/apache-tomcat                                    |
+--------------------------+---------------------------------------------------------------------+
|| CATALINA_PID            || Tomcat process id file save path                                   |
||                         +---------------------------------------------------------------------+
||                         || $CATALINA_HOME/bin/tomcat.pid                                      |
+--------------------------+---------------------------------------------------------------------+
|| CATALINA_LOGS_DIR       || Tomcat file logs path                                              |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_LOGS_DIR/tomcat                                           |
+--------------------------+---------------------------------------------------------------------+
|| CATALINA_OUT            || Tomcat main log file                                               |
||                         +---------------------------------------------------------------------+
||                         || $CATALINA_LOGS_DIR/catalina.out                                    |
+--------------------------+---------------------------------------------------------------------+
|| CATALINA_TMPDIR         || Tomcat temporary directory                                         |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_TEMP_DIR/tomcat                                           |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for Elasticsearch in ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| Elasticsearch           || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| ES_HOME                 || Elasticsearch home directory                                       |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_BIN_DIR/elasticsearch/bin                                 |
+--------------------------+---------------------------------------------------------------------+
|| ES_INDEXES_DIR          || Elasticsearch indexes directory                                    |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_DATA_DIR/indexes-es                                       |
+--------------------------+---------------------------------------------------------------------+
|| ES_LOGS_DIR             || Elasticsearch log files directory                                  |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_LOGS_DIR/logs/elasticsearch                               |
+--------------------------+---------------------------------------------------------------------+
|| ES_PID                  || Elasticsearch process Id                                           |
||                         +---------------------------------------------------------------------+
||                         || $ES_HOME/elasticsearch.pid                                         |
+--------------------------+---------------------------------------------------------------------+
|| ES_USERNAME             || Elasticsearch username                                             |
||                         +---------------------------------------------------------------------+
||                         ||                                                                    |
+--------------------------+---------------------------------------------------------------------+
|| ES_PASSWORD             || Elasticsearch password                                             |
||                         +---------------------------------------------------------------------+
||                         ||                                                                    |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for the Deployer in ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| Deployer                || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| DEPLOYER_HOME           || Crafter Deployer jar files path                                    |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_HOME/bin/crafter-deployer                                 |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_DATA_DIR       || Deployer data files directory                                      |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_DATA_DIR/deployer                                         |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_LOGS_DIR       || Deployer log files directory                                       |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_LOGS_DIR/deployer                                         |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_DEPLOYMENTS_DIR|| Deployer deployments files directory                               |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_DATA_DIR/repos/sites                                      |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_SDOUT          || Deployer SDOUT path                                                |
||                         +---------------------------------------------------------------------+
||                         || $DEPLOYER_LOGS_DIR/crafter-deployer.out                            |
+--------------------------+---------------------------------------------------------------------+
|| DEPLOYER_PID            || Deployer process id file                                           |
||                         +---------------------------------------------------------------------+
||                         || $DEPLOYER_HOME/crafter-deployer.pid                                |
+--------------------------+---------------------------------------------------------------------+


Here are the environment variables used for MongoDB in ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| MongoDB                 || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| MONGODB_HOME            || MongoDB files path                                                 |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_BIN_DIR/mongodb                                           |
+--------------------------+---------------------------------------------------------------------+
|| MONGODB_PID             || MongoDB process id file save path                                  |
||                         +---------------------------------------------------------------------+
||                         || $MONGODB_DATA_DIR/mongod.lock                                      |
+--------------------------+---------------------------------------------------------------------+
|| MONGODB_DATA_DIR        || MongoDB data directory                                             |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_DATA_DIR/mongodb                                          |
+--------------------------+---------------------------------------------------------------------+
|| MONGODB_LOGS_DIR        || MongoDB log files directory                                        |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_LOGS_DIR/mongodb                                          |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for MariaDb in ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| MariaDb                 || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| MARIADB_HOME            || MariaDb files path                                                 |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_BIN_DIR/dbms                                              |
+--------------------------+---------------------------------------------------------------------+
|| MARIADB_DATA_DIR        || MariaDb data directory                                             |
||                         +---------------------------------------------------------------------+
||                         || $CRAFTER_DATA_DIR/db                                               |
+--------------------------+---------------------------------------------------------------------+
|| MARIADB_ROOT_PASSWD     || MariaDb root password                                              |
||                         +---------------------------------------------------------------------+
||                         ||                                                                    |
+--------------------------+---------------------------------------------------------------------+
|| MARIADB_USER            || MariaDb username                                                   |
||                         +---------------------------------------------------------------------+
||                         || crafter                                                            |
+--------------------------+---------------------------------------------------------------------+
|| MARIADB_PASSWD          || MariaDb user password                                              |
||                         +---------------------------------------------------------------------+
||                         || crafter                                                            |
+--------------------------+---------------------------------------------------------------------+
|| MARIADB_PID             || MariaDB process id file                                            |
||                         +---------------------------------------------------------------------+
||                         || $MARIADB_HOME/$HOSTNAME.pid                                        |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for Git in ``crafter.sh``:

+--------------------------+---------------------------------------------------------------------+
|| Git                     || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| GIT_CONFIG_NOSYSTEM     || Ignore Git system wide configuration file                          |
||                         +---------------------------------------------------------------------+
||                         || true                                                               |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used for Management Tokens.
Remember to update these per installation and provide these tokens to the status monitors:

+----------------------------+-------------------------------------------------------------------+
|| Management Token          || Description                                                      |
|| Variable Name             +-------------------------------------------------------------------+
||                           || Default Value                                                    |
+============================+===================================================================+
|| STUDIO_MANAGEMENT_TOKEN   || Authorization token for Studio                                   |
||                           +-------------------------------------------------------------------+
||                           || defaultManagementToken                                           |
+----------------------------+-------------------------------------------------------------------+
|| ENGINE_MANAGEMENT_TOKEN   || Authorization token for Engine                                   |
||                           +-------------------------------------------------------------------+
||                           || defaultManagementToken                                           |
+----------------------------+-------------------------------------------------------------------+
|| DEPLOYER_MANAGEMENT_TOKEN || Authorization token for Deployer                                 |
||                           +-------------------------------------------------------------------+
||                           || defaultManagementToken                                           |
+----------------------------+-------------------------------------------------------------------+
|| SEARCH_MANAGEMENT_TOKEN   || Authorization token for Search                                   |
||                           +-------------------------------------------------------------------+
||                           || defaultManagementToken                                           |
+----------------------------+-------------------------------------------------------------------+
|| PROFILE_MANAGEMENT_TOKEN  || Authorization token for Profile                                  |
||                           +-------------------------------------------------------------------+
||                           || defaultManagementToken                                           |
+----------------------------+-------------------------------------------------------------------+
|| SOCIAL_MANAGEMENT_TOKEN   || Authorization token for Social                                   |
||                           +-------------------------------------------------------------------+
||                           || defaultManagementToken                                           |
+----------------------------+-------------------------------------------------------------------+

Here are the environment variables used to encrypt and decrypt values inside configuration files:

+--------------------------+---------------------------------------------------------------------+
|| Encryption              || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| CRAFTER_ENCRYPTION_KEY  || Key used for encrypting properties                                 |
||                         +---------------------------------------------------------------------+
||                         || default_encryption_key                                             |
+--------------------------+---------------------------------------------------------------------+
|| CRAFTER_ENCRYPTION_SALT || Salt used for encrypting properties                                |
||                         +---------------------------------------------------------------------+
||                         || default_encryption_salt                                            |
+--------------------------+---------------------------------------------------------------------+

Here are the environment variables used to encrypt and decrypt values in the database:

+---------------------------------+---------------------------------------------------------------------+
|| Encryption                     || Description                                                        |
|| Variable Name                  +---------------------------------------------------------------------+
||                                || Default Value                                                      |
+=================================+=====================================================================+
|| CRAFTER_SYSTEM_ENCRYPTION_KEY  || Key used for encrypting database values                            |
||                                +---------------------------------------------------------------------+
||                                || <someDefaultKeyValue>                                              |
+---------------------------------+---------------------------------------------------------------------+
|| CRAFTER_SYSTEM_ENCRYPTION_SALT || Salt used for encrypting database values                           |
||                                +---------------------------------------------------------------------+
||                                || <someDefaultSaltValue>                                             |
+---------------------------------+---------------------------------------------------------------------+

Here are the configuration variables used in Crafter CMS:

+--------------------------+---------------------------------------------------------------------+
|| Configuration           || Description                                                        |
|| Variable Name           +---------------------------------------------------------------------+
||                         || Default Value                                                      |
+==========================+=====================================================================+
|| CRAFTER_ENVIRONMENT     || Name used for environment specific configurations in               |
||                         || Studio, Engine and Deployer                                        |
||                         +---------------------------------------------------------------------+
||                         || default                                                            |
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

For more information about Apache Tomcat, and Elasticsearch please refer to the following:

 * [Tomcat Script documentation](https://tomcat.apache.org/tomcat-8.5-doc/RUNNING.txt)
 * [ElasticSEarch Script documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/starting-elasticsearch.html)


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
|| clone        || Clones Crafter CMS                       || - None      || - None         |
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
||              ||                                          ||             || - studio-ui    |
||              ||                                          ||             || - plugin-maker |
+---------------+-------------------------------------------+--------------+-----------------+
|| upgrade      || Upgrades the installed Tomcat version,   || - None      || - None         |
||              || etc, without deleting your data then     ||             ||                |
||              || builds and deploys                       ||             ||                |
+---------------+-------------------------------------------+--------------+-----------------+
|| selfupdate   || Updates the Crafter CMS project (gradle) || - None      || - None         |
+---------------+-------------------------------------------+--------------+-----------------+
|| clean        || Delete all compiled objects              || - None      || - None         |
+---------------+-------------------------------------------+--------------+-----------------+

.. note::

    * If you don't specify the ``env`` parameter, it means all environments (where applicable).
    * In the current version of Crafter CMS, some services run in the same Web container, and that implies the stopping/starting of one of these services will cause other services to stop/start as well.
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
* Start Elasticsearch on port 9201
* Start Crafter Deployer on port 9191

For the *Delivery Environment*:

* Start Apache tomcat on default ports (9080, 9009, 9005) [See :ref:`gradle-tasks` on how to change default ports]
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

The Gradle task ``bundle`` will build deployable and distributable binaries of Crafter CMS for the authoring and/or delivery environments.  This will generate tar files ready to be unarchived and run.

    .. code-block:: bash

       ./gradlew bundle [-Penv={env}]

Binaries will be saved as ``crafter-cms-authoring-VERSION.tar`` for the *Authoring Environment* and ``crafter-cms-delivery-VERSION.tar`` for the *Delivery Environment* in the ``bundles`` folder

Using the common task property ``env`` lets you select what environment (authoring or delivery) will be generated.

Let's look at an example using the task property mentioned above:

    .. code-block:: bash

        ./gradlew bundle -Penv=authoring

The command above will generate an authoring binary archive in the bundles folder named ``crafter-cms-authoring-VERSION.tar.gz``.

.. _gradle-tasks:

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



.. _common-task-properties:

Common Task Properties
^^^^^^^^^^^^^^^^^^^^^^

Aside from the tasks that we can run, there are also some properties defined in Crafter CMS that allows us to configure our environment.  Below are the available task properties

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

.. _authoring-default-ports:

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

.. _delivery-default-ports:

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

.. _other-properties:

+------------------------------------------------------------------------------------------------+
|| Other Properties                                                                              |
+-------------------------------+----------------------------------------------------------------+
|| Property                     || Description                                                   |
+===============================+================================================================+
|| ``overwriteConfig``          || Overwrite configurations. Default value is false              |
+-------------------------------+----------------------------------------------------------------+
|| ``backupAndReplaceConfig``   || Backup and replace configurations. Default value is false     |
+-------------------------------+----------------------------------------------------------------+

.. _git-properties:

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

Here's an example using one of the task properties, ``gitRepo``,  to get the latest code from Crafter CMS, in order to have the latest updates from the community:

    .. code-block:: bash

        ./gradlew update -Pcrafter.git.remote=upstream

Here's another example on how to clone, build and bundle from a given tag/branch.  Remember to clone the desired branch/tag of craftercms (As described in the next section :ref:`git`),  before running the command below:

    .. code-block:: bash

       ./gradlew clone build deploy bundle -Pcrafter.git.branch={BRANCH}/{TAG NAME}

Replace {BRANCH} or {TAG NAME} with the branch and tag you'd like to build.

Here's yet another example of building and deploying the authoring environment of Crafter CMS with Crafter Profile included:

    .. code-block:: bash

       ./gradlew build deploy -Pcrafter.profile=true -Penv=authoring


.. _git:

-------------------
Useful Git Commands
-------------------

Here are some useful Git commands for setting up our Crafter CMS project.

  .. note::

     You may notice a few ``.keep`` files in your repository.  Those ``.keep`` files are automatically generated by Studio when empty folders are created, since Git doesn't keep track of folders (and Studio does). It's best if you just leave them there and don't add them to ``.gitignore``


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Copy Crafter CMS repository and clone submodules
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    .. code-block:: bash

       git clone https://github.com/craftercms/craftercms.git
       cd craftercms
       git submodule clone

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

Replace {BRANCH} or {TAG NAME} with the branch and tag you'd like to build.  After cloning the desired branch, you can now clone, build and bundle from a given tag/branch using the property `crafter.git.branch` as described in an earlier section :ref:`Git Properties<git-properties>`


