:is-up-to-date: True

.. _docker-config-changes-3-1-4-to-3-1-5:

=========================================================================
Configuration changes between CrafterCMS version 3.1.4 and version 3.1.5 
=========================================================================

The following is the list of configuration files that have changed from 3.1.4 to 3.1.5 (all are relative to the Crafter 
installation path ``/opt/crafter`` inside the Docker images):

   - For the ``authoring_tomcat`` and ``authoring_tomcat_solr_compatible`` images:
   
      - ``bin/crafter-setenv.sh``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/env/authoring/bin/crafter-setenv.sh
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/bin/crafter-setenv.sh

      - ``bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/env/authoring/tomcat-config/crafter/studio/extension/studio-config-override.yaml
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/tomcat-config/crafter/studio/extension/studio-config-override.yaml

      - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/env/authoring/tomcat-config/crafter/engine/extension/server-config.properties
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/tomcat-config/crafter/engine/extension/server-config.properties     

   - For the ``authoring_tomcat_solr_compatible`` image:

      - ``bin/apache-tomcat/shared/classes/crafter/search/extension/server-config.properties``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/env/authoring/tomcat-config/crafter/search/extension/server-config.properties
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/authoring/tomcat-config/crafter/search/extension/server-config.properties

   - For the ``delivery_tomcat`` and ``delivery_tomcat_solr_compatible`` images:

      - ``bin/crafter-setenv.sh``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/env/delivery/bin/crafter-setenv.sh
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/delivery/bin/crafter-setenv.sh

      - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/env/delivery/tomcat-config/crafter/engine/extension/server-config.properties
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/delivery/tomcat-config/crafter/engine/extension/server-config.properties

   - For the ``delivery_tomcat_solr_compatible`` image:

      - ``bin/apache-tomcat/shared/classes/crafter/search/extension/server-config.properties``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/env/delivery/tomcat-config/crafter/search/extension/server-config.properties
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/delivery/tomcat-config/crafter/search/extension/server-config.properties

   - For the ``deployer`` image:
   
      - ``bin/crafter-setenv.sh``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/env/delivery/bin/crafter-setenv.sh
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/env/delivery/bin/crafter-setenv.sh

      - ``bin/crafter-deployer/config/application.yaml``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/deployer/config/application.yaml
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/deployer/config/application.yaml         

      - ``bin/crafter-deployer/config/base-target.yaml``:
      
         - 3.1.4: https://github.com/craftercms/craftercms/blob/v3.1.4/resources/deployer/config/base-target.yaml
         - 3.1.5: https://github.com/craftercms/craftercms/blob/v3.1.5/resources/deployer/config/base-target.yaml

