:orphan:

.. not valid for 3.0 anymore

.. index:: Installation; Crafter Engine

.. _install-engine:

==============
Install Engine
==============

The following guide explains how to install a Crafter Engine instance in a QA or production Unix-based server.

#.  Download the crafter-studio-install-Engine.zip. This file contains already Tomcat 7 with the Engine and Search WARs.
#.  Unzip the crafter-studio-install-Engine.zip to any folder (from now on this folder will be referred as
    INSTALL_DIR). The recommended INSTALL_DIR is /opt/crafter/bin/delivery.
#.  Add the ``JAVA_HOME`` variable to INSTALL_DIR/apache-tomcat/bin/setenv.sh.
#.  Add the ``JAVA_OPTS`` variable to INSTALL_DIR/apache-tomcat/bin/setenv.sh (e.g. ``JAVA_OPTS="$JAVA_OPTS -server
    -Xms2G -Xmx8G -XX:MaxPermSize=512M"``).
#.  Remove the ``JAVA_OPTS`` variable from INSTALL_DIR/bin/startup.sh.
#.  If you need Engine to serve multiple sites, follow the guide :ref:`engine-site-configuration-multi-tenancy`.
#.  If you didn't follow the multi tenancy guide, remember to change the root path of the site content:

    #.  In INSTALL_DIR/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties, update the value
        of ``crafter.engine.site.default.rootFolder.path``
        (e.g. ``crafter.engine.site.default.rootFolder.path=/opt/crafter/data/site-content/site1``).

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
