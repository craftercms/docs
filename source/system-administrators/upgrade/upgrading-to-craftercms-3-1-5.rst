:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-1-5:

===============================================================================
Docker/Kuber Instructions for Upgrading to Crafter CMS 3.1.5 from 3.1.4 version
===============================================================================

.. important::

    If you're trying to upgrade from 3.1.0, please follow the instructions in :ref:`upgrade-to-3-1-3` first

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

If you have overwritten any of them in a volume mount, we recommend you do this:

#. Run a diff between original 3.1.4 configuration files and the files you have overwritten, so you know what are the 
   changes you have made. 
#. Copy your changes to the new 3.1.5 version of the configuration file, then mount the new file.
