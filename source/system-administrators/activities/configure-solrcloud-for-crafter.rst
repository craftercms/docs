.. index:: Configure SolrCloud for Crafter; SolrCloud

.. _configure-solrcloud-for-crafter:

===============================
Configure SolrCloud for Crafter
===============================

Crafter Search allows defining a CloudSolrClient in Spring config.  This section details how to configure SolrCloud for Crafter CMS.

------------
In Authoring
------------
#. Zip up (with tar.gz) the directory https://github.com/craftercms/search/tree/master/crafter-search-provider/solr/configsets/crafter_configs/conf.
#. Copy the zip to one of the Solr servers and unzip it
#. Go to **SOLR_INSTALL_DIR/server/scripts/cloud-scripts**.
#. Run the command  ``./zkcli.sh -zkhost ZOOKEEPER_HOST:ZOOKEEPER_PORT -cmd upconfig -confname crafter_configs -confdir PATH_TO_UNZIPPED_CONFIGS`` (make sure the folder at PATH_TO_UNZIPPED_CONFIGS contains the ``solrconfig.xml`` file).
#. Go to one of the Solr Admin Consoles.
#. Go to **Collections** and click on **Add Collection**.
#. Make the name of the collection the same as your site name, pick ``crafter_configs`` in config set and then click on **Add Collection**.
#. Stop Authoring if it’s running.
#. Go to **CRAFTER_INSTALL/bin/apache-tomcat/conf/Catalina/localhost** and create the file ``crafter-search-solrcloud.xml`` with the following content:

   .. code-block:: xml

       <?xml version="1.0" encoding="UTF-8"?>
       <Context>
           <Environment name="crafter.search.extension.base" value="classpath*:crafter/search-solrcloud/extension" type="java.lang.String" override="false"/>
       </Context>

   |

#. Go to **CRAFTER_INSTALL/bin/apache-tomcat/webapps** and duplicate the ``crafter-search.war`` with the name ``crafter-search-solrcloud.war``.
#. Go to **CRAFTER_INSTALL/bin/apache-tomcat/shared/classes/crafter**, create the folders **search-solrcloud/extension**, and inside create the file ``services-context.xml`` with the following content:

   .. code-block:: xml
       :linenos:

       <?xml version="1.0" encoding="UTF-8"?>
       <beans xmlns="http://www.springframework.org/schema/beans"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
           xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
			       http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
           <bean id="crafter.solrClient" class="org.craftercms.search.utils.spring.CloudSolrClientFactoryBean">
                <property name="zkHost" value="ZOOKEEPER_HOST:ZOOKEEPER_PORT"/>
           </bean>
       </beans>

   |

#. Go to **CRAFTER_INSTALL/data/deployer/targets** and create a new target with the name of your site, followed by -solrcloud (e.g. ``editorial-solrcloud.yaml``). Add the following content (changing the SITE_NAME and the SITE_REPOS_PATH):

   .. code-block:: yaml
       :linenos:

       target:
       env: solrcloud
       siteName: SITE_NAME
       localRepoPath: SITES_REPOS_PATH/published
       search:
         serverUrl: http://localhost:8080/crafter-search-solrcloud
       deployment:
         scheduling:
            enabled: true
         pipeline:
           - processorName: gitDiffProcessor
           - processorName: searchIndexingProcessor
           - processorName: fileOutputProcessor

   |

#. Start Authoring again. After a scheduling period (normally 1 minute), the Deployer will send the published site content for indexing to the SolrCloud.

-----------
In Delivery
-----------

#. Stop Delivery if it’s running.
#. Copy the same configuration in step 11 of the previous section under **CRAFTER_INSTALL/bin/apache-tomcat/shared/classes/crafter/search/extension/services-context.xml**.
#. Go into the Deployer target of the site: **CRAFTER_INSTALL/data/deployer/targets/SITE_NAME-default.yaml**, and comment the line with the searchIndexingProcessor (e.g. ``#- processorName: searchIndexingProcessor``).
#. Start Delivery again. Crafter Search should now read from the SolrCloud, and the Deployer won’t index changes since the processor is now commented.
