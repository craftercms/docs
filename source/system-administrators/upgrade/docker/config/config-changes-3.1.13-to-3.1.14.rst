:is-up-to-date: True

.. _docker-config-changes-3-1-13-to-3-1-14:

===========================================================================
Configuration changes between Crafter CMS version 3.1.13 and version 3.1.14
===========================================================================

The following is the list of configuration files that have changed from 3.1.13 to 3.1.14 (all are relative to the Crafter
installation path ``/opt/crafter`` inside the Docker images):

  - For the ``authoring_tomcat`` and ``authoring_tomcat_solr_compatible`` images:

    - ``bin/crafter-setenv.sh``:

      - 3.1.13: https://github.com/craftercms/craftercms/blob/v3.1.13/resources/env/authoring/bin/crafter-setenv.sh
      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/authoring/bin/crafter-setenv.sh

    - ``bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``:

      - 3.1.13: https://github.com/craftercms/craftercms/blob/v3.1.13/resources/env/authoring/tomcat-config/crafter/studio/extension/studio-config-override.yaml
      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/authoring/tomcat-config/crafter/studio/extension/studio-config-override.yaml

    - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``:

      - 3.1.13: https://github.com/craftercms/craftercms/blob/v3.1.13/resources/env/authoring/tomcat-config/crafter/engine/extension/server-config.properties
      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/authoring/tomcat-config/crafter/engine/extension/server-config.properties

  - For the ``delivery_tomcat`` and ``delivery_tomcat_solr_compatible`` images:

    - ``bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``:
    
      - 3.1.13: https://github.com/craftercms/craftercms/blob/v3.1.13/resources/env/delivery/tomcat-config/crafter/engine/extension/server-config.properties
      - 3.1.14: https://github.com/craftercms/craftercms/blob/v3.1.14/resources/env/delivery/tomcat-config/crafter/engine/extension/server-config.properties

