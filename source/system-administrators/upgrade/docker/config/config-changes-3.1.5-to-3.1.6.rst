:is-up-to-date: True

.. _docker-config-changes-3-1-5-to-3-1-6:

=========================================================================
Configuration changes between Crafter CMS version 3.1.5 and version 3.1.6 
=========================================================================

The following is the list of configuration files that have changed from 3.1.5 to 3.1.6 (all are relative to the Crafter 
installation path ``/opt/crafter`` inside the Docker images):

   - For the ``authoring_tomcat`` and ``authoring_tomcat_solr_compatible`` images:
   
      - ``bin/crafter-setenv.sh``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/bin/crafter-setenv.sh
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/authoring/bin/crafter-setenv.sh

      - ``bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/tomcat-config/crafter/studio/extension/studio-config-override.yaml
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/authoring/tomcat-config/crafter/studio/extension/studio-config-override.yaml

      - ``bin/apache-tomcat/shared/classes/crafter/studio/extension/logging.xml``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/tomcat-config/crafter/studio/extension/logging.xml
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/authoring/tomcat-config/crafter/studio/extension/logging.xml    

      - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/tomcat-config/crafter/engine/extension/server-config.properties
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/authoring/tomcat-config/crafter/engine/extension/server-config.properties

      - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/logging.xml``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/tomcat-config/crafter/engine/extension/logging.xml
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/authoring/tomcat-config/crafter/engine/extension/logging.xml

      - ``bin/apache-tomcat/conf/web.xml``:
      
         - 3.1.5: https://github.com/apache/tomcat/blob/8.5.51/conf/web.xml
         - 3.1.6: https://github.com/apache/tomcat/blob/8.5.53/conf/web.xml        

   - For the ``authoring_tomcat_solr_compatible`` image:

      - ``bin/apache-tomcat/shared/classes/crafter/search/extension/logging.xml``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/tomcat-config/crafter/search/extension/logging.xml
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/authoring/tomcat-config/crafter/search/extension/logging.xml  

   - For the ``delivery_tomcat`` and ``delivery_tomcat_solr_compatible`` images:

      - ``bin/crafter-setenv.sh``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/delivery/bin/crafter-setenv.sh
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/delivery/bin/crafter-setenv.sh

      - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/logging.xml``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/delivery/tomcat-config/crafter/engine/extension/logging.xml
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/delivery/tomcat-config/crafter/engine/extension/logging.xml

      - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/delivery/tomcat-config/crafter/engine/extension/server-config.properties
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/delivery/tomcat-config/crafter/engine/extension/server-config.properties

      - ``bin/apache-tomcat/conf/web.xml``:
      
         - 3.1.5: https://github.com/apache/tomcat/blob/8.5.51/conf/web.xml
         - 3.1.6: https://github.com/apache/tomcat/blob/8.5.53/conf/web.xml    

   - For the ``delivery_tomcat_solr_compatible`` image:

      - ``bin/apache-tomcat/shared/classes/crafter/search/extension/logging.xml``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/delivery/tomcat-config/crafter/search/extension/logging.xml
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/delivery/tomcat-config/crafter/search/extension/logging.xml  

   - For the ``deployer`` image:
   
      - ``bin/crafter-setenv.sh``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/delivery/bin/crafter-setenv.sh
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/delivery/bin/crafter-setenv.sh

      - ``bin/crafter-deployer/logging.xml``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/deployer/logging.xml
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/deployer/logging.xml    

      - ``bin/crafter-deployer/config/application.yaml``:
      
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/deployer/config/application.yaml
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/deployer/config/application.yaml

