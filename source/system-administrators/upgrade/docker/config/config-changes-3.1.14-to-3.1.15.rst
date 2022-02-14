:is-up-to-date: True

.. _docker-config-changes-3-1-14-to-3-1-15:

===========================================================================
Configuration changes between CrafterCMS version 3.1.14 and version 3.1.15
===========================================================================

The following is the list of configuration files that have changed from 3.1.14 to 3.1.15 (all are relative to the Crafter
installation path ``/opt/crafter`` inside the Docker images):

  - For the ``authoring_tomcat``, ``authoring_tomcat_with_imagemagick``, ``authoring_tomcat_solr_compatible``,
    ``delivery_tomcat`` and ``delivery_tomcat_solr_compatible`` images:

    - ``bin/apache-tomcat/conf/web.xml``:
      
      - 3.1.14: https://github.com/apache/tomcat/blob/8.5.53/conf/web.xml
      - 3.1.15: https://github.com/apache/tomcat/blob/8.5.66/conf/web.xml  

    - ``bin/apache-tomcat/conf/tomcat-users.xsd``:

      - 3.1.14: https://github.com/apache/tomcat/blob/8.5.53/conf/tomcat-users.xsd
      - 3.1.15: https://github.com/apache/tomcat/blob/8.5.66/conf/tomcat-users.xsd

    - ``bin/apache-tomcat/conf/catalina.policy``:

      - 3.1.14: https://github.com/apache/tomcat/blob/8.5.53/conf/catalina.policy
      - 3.1.15: https://github.com/apache/tomcat/blob/8.5.66/conf/catalina.policy     

  - For the ``authoring_tomcat`` and ``authoring_tomcat_solr_compatible`` images:

    - ``bin/crafter-setenv.sh``:

      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/authoring/bin/crafter-setenv.sh
      - 3.1.15: https://github.com/craftercms/craftercms/blob/v3.1.15/resources/env/authoring/bin/crafter-setenv.sh

    - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``:
    
      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/authoring/tomcat-config/crafter/engine/extension/server-config.properties
      - 3.1.15: https://github.com/craftercms/craftercms/blob/v3.1.15/resources/env/authoring/tomcat-config/crafter/engine/extension/server-config.properties       

  - For the ``authoring_tomcat_solr_compatible`` image:

    - ``bin/apache-tomcat/shared/classes/crafter/search/extension/server-config.properties``:

      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/authoring/tomcat-config/crafter/search/extension/server-config.properties
      - 3.1.15: https://github.com/craftercms/craftercms/blob/v3.1.15/resources/env/authoring/tomcat-config/crafter/search/extension/server-config.properties       

  - For the ``delivery_tomcat`` and ``delivery_tomcat_solr_compatible`` images:

    - ``bin/crafter-setenv.sh``:

      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/delivery/bin/crafter-setenv.sh
      - 3.1.15: https://github.com/craftercms/craftercms/blob/v3.1.15/resources/env/delivery/bin/crafter-setenv.sh

    - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``:
    
      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/delivery/tomcat-config/crafter/engine/extension/server-config.properties
      - 3.1.15: https://github.com/craftercms/craftercms/blob/v3.1.15/resources/env/delivery/tomcat-config/crafter/engine/extension/server-config.properties

  - For the ``authoring_tomcat_solr_compatible`` image:

    - ``bin/apache-tomcat/shared/classes/crafter/search/extension/server-config.properties``:

      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/delivery/tomcat-config/crafter/search/extension/server-config.properties
      - 3.1.15: https://github.com/craftercms/craftercms/blob/v3.1.15/resources/env/delivery/tomcat-config/crafter/search/extension/server-config.properties

  - For the ``deployer`` image:       

    - ``bin/crafter-deployer/config/base-target.yaml``:

      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/deployer/config/base-target.yaml
      - 3.1.15: https://github.com/craftercms/craftercms/blob/v3.1.15/resources/deployer/config/base-target.yaml

