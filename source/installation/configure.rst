===============================
Crafter CMS Configuration Guide
===============================

----------------------
Configure the Database
----------------------

*   Derby embedded (configured by default for evaluation)

    .. code-block:: properties
        :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

        studio.db.platform=derby
        studio.db.name=CRAFTER
        studio.db.username=crafter
        studio.db.password=crafter
        studio.db.driver=org.apache.derby.jdbc.EmbeddedDriver
        studio.db.derby.path=data/derby/${studio.db.name}
        studio.db.url=jdbc:derby:${studio.db.derby.path}

..
    *   Derby standalone
        .. code-block:: none

*   MySQL

    .. code-block:: properties
        :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

        studio.db.platform=mysql
        studio.db.name=crafter
        studio.db.username=crafter
        studio.db.password=crafter
        studio.db.driver=org.gjt.mm.mysql.Driver
        studio.db.url=jdbc:mysql://localhost:3306/${studio.db.name}?useUnicode=yes&characterEncoding=UTF-8

*   Postgres

    .. code-block:: properties
        :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

        studio.db.platform=postgres
        studio.db.name=crafter
        studio.db.username=crafter
        studio.db.password=crafter
        studio.db.driver=org.postgresql.Driver
        studio.db.url=jdbc:postgresql://localhost:5432/${studio.db.name}

*   Oracle

    .. code-block:: properties
        :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

        studio.db.platform=oracle
        studio.db.name=crafter
        studio.db.username=crafter
        studio.db.password=crafter
        studio.db.driver=oracle.jdbc.OracleDriver
        studio.db.url=jdbc:oracle:thin:@localhost:1521:orcl

*   MS SQL Server

    .. code-block:: properties
        :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

        studio.db.platform=sqlserver
        studio.db.name=crafter
        studio.db.username=crafter
        studio.db.password=crafter
        studio.db.driver=com.microsoft.sqlserver.jdbc.SQLServerDriver
        studio.db.url=jdbc:sqlserver://localhost:1433;databaseName=${studio.db.name};user=${studio.db.username};password=${studio.db.password};

--------------------------------
Configure the Content Repository
--------------------------------

*   Disk Repository (configured by default for evaluation)

    .. code-block:: properties
        :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

        repositoryType=default
        securityType=default
        repository.diskImplementation.path=INSTALLATION_PATH/crafter/data/repo

*   Alfresco Repository

    .. code-block:: properties
        :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

        repositoryType=alfresco
        securityType=alfresco
        alfrescoUrl=http://ALFRESCO_SERVER_NAME_GOES_HERE:ALFRESCO_PORT_GOES_HERE/alfresco
        repositoryJob.password=MYUSER
        repositoryJob.username=MYPASSWORD

.. note::
    Crafter will bootstrap 2 folders in to your Alfresco repository:

        #.  **cstudio:** Where your project configuration is stored
        #.  **wem-projects:** Where your project content is stored

.. warning::
    Your Content Repository and your Crafter Studio Database need to be in sync.  When you connect to Alfresco for the first time,
    it's recommended that you bring these up to sync or that you clear your studio database.

-------------------
Configure JAVA_HOME
-------------------

.. code-block:: properties
    :caption: TOMCAT/bin/setenv.sh

    export JAVA_HOME=/usr

------------------------
Configure the JVM Memory
------------------------

.. code-block:: properties
    :caption: TOMCAT/bin/setenv.sh

    JAVA_OPTS="$JAVA_OPTS -server -Xms1G -Xmx4G -XX:MaxPermSize=512M"

----------------------
Configure Tomcat Ports
----------------------

#.  Assuming Tomcat as the server, update the ports the server runs on:

.. code-block:: xml
    :caption: TOMCAT/conf/server.xml

    <Server port="9005" shutdown="SHUTDOWN">
    ...
    <Connector port="9090" URIEncoding="UTF-8" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="9443"
    ...
    <Connector port="9009" protocol="AJP/1.3" redirectPort="8443" />
    <Connector port="9443" protocol="org.apache.coyote.http11.Http11Protocol" SSLEnabled="true"...

#.  Update Crafter Search endpoint configuration (this URL points to the Crafter Search instance supporting preview)

.. code-block:: properties
    :caption: TOMCAT/shared/classes/crafter/engine/extension/server-config.properties

    crafter.engine.search.server.url=http://localhost:9090/crafter-search

.. code-block:: properties
    :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

    crafter.engine.search.server.url=http://localhost:9090/crafter-search

----------------------------------------------
Configure Email for Workflow and Notifications
----------------------------------------------

.. code-block:: properties
    :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

    crafter.studio.mail.from.default=default@mail.com
    crafter.studio.mail.host=smtp.mail.com
    crafter.studio.mail.port=25
    crafter.studio.mail.username=USERNAME
    crafter.studio.mail.password=PASSWORD
    crafter.studio.mail.smtp.auth=false
    crafter.studio.mail.smtp.starttls.enable=false

------------------------------------
Configure the Preview Deployer Ports
------------------------------------

In some cases (when you want to run more than one full studio install side by side) you need to change the ports on the deployer.
To do this, update the following:

#.  Tell Studio where to look for it's deployer by setting the properties below. If you're just changing the port, set only the port
    property. Other properties are listed in case you would like to change them as well.

    .. code-block:: properties
        :caption: TOMCAT/shared/classes/crafter/cstudio/extension/server-config.properties

        crafter.deployer.server=localhost
        crafter.deployer.port=9595
        crafter.deployer.target=preview
        crafter.deployer.password=admin

#.  Configure the deployer to run on the specified port

    .. code-block:: properties
        :caption: INSTALL_DIR/crafter-deployer/conf/custom-receiver.properties

        receiver.port=9595
