:orphan:

==========================
Configure Solr Replication
==========================

This guide explains how to configure Solr replication between a master Solr in an authoring server, and several
slave Solrs in delivery servers. It's assumed you already have installed Studio in the authoring server
(:doc:`install-studio`) and Engine in the delivery servers (:doc:`install-engine`).

-----------------------
Authoring Configuration
-----------------------

#.  In your Studio INSTALL_DIR, go to apache-tomcat/webapps, duplicate the solr.war and rename the new file to
    as solr-crafter-live.war.
#.  In the same folder, duplicate the crafter-search.war and rename the file to crafter-search-live.war.
#.  Go to INSTALL_DIR/apache-tomcat/conf/Catalina/localhost and create the solr-crafter-live.xml file with
    the following content:

    .. code-block:: xml

        <?xml version="1.0" encoding="utf-8"?>
        <Context docBase="./apache-tomcat/webapps/solr-crafter-live.war" debug="0" crossContext="true">
            <Environment name="solr/home" type="java.lang.String" value="./apache-tomcat/solr-crafter-live" override="true"/>
            <Loader className="org.apache.catalina.loader.VirtualWebappLoader" virtualClasspath="./apache-tomcat/solr-crafter-live/lib/ext/*.jar;./apache-tomcat/solr-crafter-live/lib/ext/;./apache-tomcat/solr-crafter-live/lib/extraction/*.jar"/>
        </Context>

#.  Under the same directory, create a crafter-search-live.xml file with the following content:

    .. code-block:: xml

        <?xml version="1.0" encoding="utf-8"?>
        <Context docBase="./apache-tomcat/webapps/crafter-search-live.war" debug="0" crossContext="true">
            <Environment name="crafter.search.extension.base" type="java.lang.String" value="classpath*:crafter/search-live/extension" override="false"/>
        </Context>

#.  Under INSTALL_DIR/apache-tomcat, duplicate the solr-crafter directory and rename it as solr-crafter-live. Delete
    the data directory under it.
#.  Under the new solr-crafter-live directory:

    #.  Duplicate the solrconfig.xml and rename it as solrconfig_slave.xml. This solrconfig_slave.xml is the Solr
        configuration that will be propagated to all the slaves.
    #.  Open solrconfig.xml and look for the line that has ``<requestHandler name="/replication"
        class="solr.ReplicationHandler">``. Replace the entire <requestHandler> tag for the following:

        .. code-block:: xml

            <requestHandler name="/replication" class="solr.ReplicationHandler" >
                <lst name="master">
                    <str name="replicateAfter">commit</str>
                    <str name="replicateAfter">startup</str>
                    <str name="confFiles">solrconfig_slave.xml:solrconfig.xml,schema.xml,stopwords.txt</str>
                </lst>
            </requestHandler>

    #.  Change also the ``<dataDir>`` value in solrconfig.xml to a more appropriate path, like how it was done
        in :doc:`install-studio`. An example would be ``<dataDir>/opt/crafter/data/live-indexes</dataDir>``
    #.  Open the solrconfig_slave.xml file and replace the same <requestHandler> tag for the following (please change
        the {STUDIO_SERVER_HOST} and {STUDIO_SERVER_PORT}):

        .. code-block:: xml

            <requestHandler name="/replication" class="solr.ReplicationHandler" >
                <lst name="slave">
                    <str name="masterUrl">http://{STUDIO_SERVER_HOST}:{STUDIO_SERVER_PORT}/solr-crafter-live</str>
                    <!--The following values are used when the slave connects to the master to
                    download the index files.
                    Default values implicitly set as 5000ms and 10000ms respectively. The user DOES
                    NOT need to specify
                    these unless the bandwidth is extremely low or if there is an extremely high
                    latency-->
                    <str name="httpConnTimeout">5000</str>
                    <str name="httpReadTimeout">10000</str>
                </lst>
            </requestHandler>

    #.  Still in the same file, change the ``<dataDir>`` to match the path in the delivery servers.

#.  Go to /opt/crafter/authoring/apache-tomcat/shared/classes/crafter, and create the folder structure
    search-live/extension. Under search-live/extension, create a file called server-config.properties and add the
    following text:

    .. code-block:: properties

        crafter.search.solr.server.url=http://localhost:8080/solr-crafter-live

----------------------
Delivery Configuration
----------------------

So that the Solr config can be correctly replicated between the master and slaves, the solrconfig_slave.xml must be
initially copied manually. Copy it from the authoring server to each of the delivery servers, to the
INSTALL_DIR/apache-tomcat/solr-crafter/conf folder, and rename it to solrconfig.xml (delete the previous
solrconfig.xml).
