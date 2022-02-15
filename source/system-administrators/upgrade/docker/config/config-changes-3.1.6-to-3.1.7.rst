:is-up-to-date: True

.. _docker-config-changes-3-1-6-to-3-1-7:

=========================================================================
Configuration changes between CrafterCMS version 3.1.6 and version 3.1.7 
=========================================================================

The following is the list of configuration files that have changed from 3.1.6 to 3.1.7 (all are relative to the Crafter 
installation path ``/opt/crafter`` inside the Docker images):

   - For the ``authoring_tomcat`` and ``authoring_tomcat_solr_compatible`` images:
   
      - ``bin/crafter-setenv.sh``:
      
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/authoring/bin/crafter-setenv.sh
         - 3.1.7: https://github.com/craftercms/craftercms/blob/v3.1.7/resources/env/authoring/bin/crafter-setenv.sh

      - ``bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``:
      
         - 3.1.6: https://github.com/craftercms/craftercms/blob/v3.1.6/resources/env/authoring/tomcat-config/crafter/studio/extension/studio-config-override.yaml
         - 3.1.7: https://github.com/craftercms/craftercms/blob/v3.1.7/resources/env/authoring/tomcat-config/crafter/studio/extension/studio-config-override.yaml      


