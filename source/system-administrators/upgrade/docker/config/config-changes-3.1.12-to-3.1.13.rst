:is-up-to-date: True

.. _docker-config-changes-3-1-12-to-3-1-13:

===========================================================================
Configuration changes between CrafterCMS version 3.1.12 and version 3.1.13
===========================================================================

The following is the list of configuration files that have changed from 3.1.12 to 3.1.13 (all are relative to the Crafter
installation path ``/opt/crafter`` inside the Docker images):

   - For the ``authoring_tomcat`` and ``authoring_tomcat_solr_compatible`` images:

      - ``bin/crafter-setenv.sh``:
      
         - 3.1.12: https://github.com/craftercms/craftercms/blob/v3.1.12/resources/env/authoring/bin/crafter-setenv.sh
         - 3.1.13: https://github.com/craftercms/craftercms/blob/v3.1.13/resources/env/authoring/bin/crafter-setenv.sh
