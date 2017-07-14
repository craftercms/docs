:orphan:

==============
Install Studio
==============

.. todo:: Article needs to be updated for 3.0.  To install Studio, just follow the directions listed in the quick start guide under the Getting Started section

The following guide explains how to install a Crafter Studio instance in a QA or production Unix-based server.

----------------
Before You Start
----------------
Crafter Studio relies on two underlying stores: a repository and a RDBMS Database.  The content itself, the versions and other core metadata are stored in the repository.  Operational data concerning dependencies, workflow and deployment are stored in the RDBMS database.  

When you install Crafter CMS via the zip file and start up Crafter Studio it starts up with an in-memory database.  This is meant to facilitate local developer environments and evaluation.  For production, you will want to use an external database.  Crafter supports a number of popular RDBMS databases.  

The steps below assume you have setup and configured an external database, created a schema and provisioned a user for that schema.

------------------
Installation Steps
------------------
#.  Download the crafter-studio-install-Studio.zip. This file already contains Tomcat 7 with the Studio, Search and
    Preview Engine WARs, the Crafter Deployer and the necessary configuration files.
#.  Download the database JDBC driver.
#.  Unzip the crafter-studio-install-Studio.zip to any folder (from now on this folder will be referred to as
    INSTALL_DIR). The recommended INSTALL_DIR is /opt/crafter/bin/authoring.
#.  Copy the JDBC driver jar to INSTALL_DIR/apache-tomcat/lib.
#.  Add the ``JAVA_HOME`` variable to INSTALL_DIR/apache-tomcat/bin/setenv.sh.
#.  Add the ``JAVA_OPTS`` variable to INSTALL_DIR/apache-tomcat/bin/setenv.sh (e.g. ``JAVA_OPTS="$JAVA_OPTS -server
    -Xms2G -Xmx8G -XX:MaxPermSize=512M"``).
#.  Remove the ``JAVA_OPTS`` variable from INSTALL_DIR/bin/startup.sh.
#.  Change the Studio configuration to connect to the database and to specify the environment:

    #.  Go to INSTALL_DIR/apache-tomcat/shared/classes/crafter/cstudio/extension/server-config.properties.
    #.  Add the database connection properties, depending on your database engine (remember to replace the ``{}`` with
        the actual values, except for ``${}``):

            - MYSQL Properties

                .. code-block:: properties

                    studio.db.platform=mysql
                    studio.db.name=crafter
                    studio.db.username=crafter
                    studio.db.password=crafter
                    studio.db.driver=org.gjt.mm.mysql.Driver
                    studio.db.url=jdbc:mysql://{DB_HOST}:{DB_PORT}/${studio.db.name}?useUnicode=yes&characterEncoding=UTF-8

            - Oracle Properties

                .. code-block:: properties

                    studio.db.platform=oracle
                    studio.db.name=crafter
                    studio.db.username=crafter
                    studio.db.password=crafter
                    studio.db.driver=oracle.jdbc.OracleDriver
                    studio.db.url=jdbc:oracle:thin:@{DB_HOST}:{DB_PORT}:{DB_SID}

            - Postgres Properties

                .. code-block:: properties

                    studio.db.platform=postgres
                    studio.db.name=crafter
                    studio.db.username=crafter
                    studio.db.password=crafter
                    studio.db.driver=org.postgresql.Driver
                    studio.db.url=jdbc:postgresql://{DB_HOST}:{DB_PORT}/${studio.db.name}

            - MS SQL Server Properties

                .. code-block:: properties

                    studio.db.platform=sqlserver
                    studio.db.name=crafter
                    studio.db.username=crafter
                    studio.db.password=crafter
                    studio.db.driver=com.microsoft.sqlserver.jdbc.SQLServerDriver
                    studio.db.url=jdbc:sqlserver://{DB_HOST}:{DB_PORT};databaseName=${studio.db.name};user=${studio.db.username};password=${studio.db.password};

    #.  Add the following properties to specify the environment (the string value of these properties can be anything,
        just make sure that when site administrators specify environment overrides in the site configuration, they do
        it under a folder with the same name):

        .. code-block:: properties

            environment=prod
            environmentConfig.environment=prod

#.  Change the path where the preview content will be stored. A good path for this directory is
    /opt/crafter/data/preview-content.

    #.  In INSTALL_DIR/crafter-deployer/conf/preview-target-context.xml, under the ``PreviewTarget`` bean configuration,
        change ``<value>target/preview</value>`` to the new preview content dir.
    #.  In INSTALL_DIR/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties, update the value
        of the ``crafter.engine.site.default.rootFolder.path`` property, e.g.
        ``file:/opt/crafter/data/preview-content/{siteName}/{siteName}/work-area`` (don’t replace ``{siteName}``).

#.  Change the path where the preview Solr search indexes will be stored, e.g. /opt/crafter/data/preview-indexes:

    #.  In INSTALL_DIR/apache-tomcat/solr-crafter/conf/solrconfig.xml, update the value of ``<dataDir>`` to the
        preview indexes folder path (e.g. ``<dataDir>/opt/crafter/data/preview-indexes</dataDir>``).

#.  Change the path where the Tomcat and deployer logs will be stored. A good path is /opt/crafter/logs:

    #.  In INSTALL_DIR/apache-tomcat/conf/logging.properties, change the values of
        ``1catalina.org.apache.juli.FileHandler.directory``, ``2localhost.org.apache.juli.FileHandler.directory``,
        ``3manager.org.apache.juli.FileHandler.directory`` and ``4host-manager.org.apache.juli.FileHandler.directory``
        to the logs folder path.
    #.  In INSTALL_DIR/crafter-deployer/log4j.xml, change the value of ``File`` param of the file appender to include
        the logs folder path (e.g. /opt/crafter/logs/deployment.log).


