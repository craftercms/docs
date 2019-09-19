:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-1-3:

===============================================================================
Docker/Kuber Instructions for Upgrading to Crafter CMS 3.1.3 from 3.1.0 version
===============================================================================

To upgrade 3.1.0 Docker/Kuber deployments to 3.1.3:

#. Compare the custom shared/classes volume-mounted config files with the ones from 3.1.3, and make any necessary changes:

   * For authoring_tomcat: https://github.com/craftercms/craftercms/tree/v3.1.3/resources/env/authoring/tomcat-config/crafter
   * For delivery_tomcat: https://github.com/craftercms/craftercms/tree/v3.1.3/resources/env/delivery/tomcat-config/crafter

   |

#. Change the image version to 3.1.3 and restart containers.
#. Wait for the containers to come up, the ``authoring_tomcat`` log should show some DB errors.

   .. code-block:: guess

      tomcat_1         | Caused by: org.craftercms.studio.api.v2.exception.UpgradeException: Error executing sql script upgrade-3.1.0.34-to-3.1.0.35.sql
      ...
      tomcat_1         | Caused by: org.apache.ibatis.jdbc.RuntimeSqlException: Error executing: DROP PROCEDURE IF EXISTS addColumnIfNotExists
      tomcat_1         | .  Cause: java.sql.SQLException: (conn:10) Column count of mysql.proc is wrong. Expected 21, found 20. Created with MariaDB 100134, now running 100406. Please use mysql_upgrade to fix this error
      tomcat_1         | Query is : DROP PROCEDURE IF EXISTS addColumnIfNotExists
      ...
      tomcat_1         | Caused by: java.sql.SQLException: (conn:10) Column count of mysql.proc is wrong. Expected 21, found 20. Created with MariaDB 100134, now running 100406. Please use mysql_upgrade to fix this error
      tomcat_1         | Query is : DROP PROCEDURE IF EXISTS addColumnIfNotExists
      ...
      tomcat_1         | Caused by: org.mariadb.jdbc.internal.util.dao.QueryException: Column count of mysql.proc is wrong. Expected 21, found 20. Created with MariaDB 100134, now running 100406. Please use mysql_upgrade to fix this error
      tomcat_1         | Query is : DROP PROCEDURE IF EXISTS addColumnIfNotExists
      ...

   |

#. Run ``/opt/crafter/bin/crafter.sh upgradedb`` inside the authoring_tomcat container. (Below is a docker example)

   .. code-block:: sh

      docker-compose exec tomcat gosu crafter /opt/crafter/bin/crafter.sh upgradedb

#. Restart the authoring_tomcat container. The DB errors shouldn't appear anymore.
