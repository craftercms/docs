:is-up-to-date: True
:last-updated: 4.1.1

.. index:: Upgrade CrafterCMS, Upgrade Docker, Upgrade Kubernetes

.. _upgrading-dockers:

====================================
Upgrading CrafterCMS on Docker/Kuber
====================================
This section details how to upgrade your CrafterCMS installations in Kubernetes or Docker Compose.

------------------------
Upgrading Docker Compose
------------------------
These upgrade instructions are for both ``authoring`` and ``delivery`` compose projects:

#. Run ``docker-compose down`` to fully stop the environment.
#. If you are using a clone of https://github.com/craftercms/docker-compose, then just pull the latest changes. If 
   you're using your own Docker Compose files, then remember to update the versions of the CrafterCMS Docker images.
#. Check the release notes of the new CrafterCMS version (:ref:`release-notes`) for upgrades to OpenSearch. If there has been an upgrade, then also update the OpenSearch image versions.
#. Check the configuration file changes between the previous version and the new version.
   If you have overwritten any of them in a volume, we recommend you do the following:

   #. Compare the original configuration files and the files you have overwritten, so you know what are the 
      changes you have made (for example, if you're currently in 4.1.0, then run a diff between the original 4.1.0
      configuration files and your overwritten versions).
   #. Copy your changes to the new version of the configuration file (for example, if the new version you're 
      upgrading to is 4.1.1, then copy your configuration overrides to the 4.1.1 version of the file).
   #. Replace the file in the volume with the new configuration file with your changes.

#. Check the :ref:`release-notes` for any other additional tasks you need to perform.
#. Run ``docker-compose up``.
#. Monitor the Docker logs for any upgrade errors.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Upgrading 4.0.x -> 4.1.x (from ES)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Please read through the upgrade instructions above first. The steps for upgrading to 4.1.x follows almost exactly the
same steps as listed above. When upgrading from version 4.0.x to version 4.1.x, we need to reindex and recreate the
Deployer targets, in addition to performing the steps listed above.

#. Run ``docker-compose down`` to fully stop the environment.
#. Run ``docker compose up elasticsearch``, to startup Elasticsearch only
#. Run ``curl -X GET http://localhost:9201/_cat/indices\?v`` to verify the ES indexes
#. Run ``curl -X DELETE "localhost:9201/_all?pretty"`` to remove all ES indexes (if custom indexes are used in elasticsearch,
   please remove only the CrafterCMS indexes one by one)
#. The next step is to update the images. If you are using a clone of https://github.com/craftercms/docker-compose, then
   just pull the latest changes. If you're using your own Docker Compose files, then remember to update the versions of
   the CrafterCMS Docker images, and the search images and corresponding items in the Docker Compose files to use OpenSearch.
#. Check the configuration file changes between the previous version and the new version.
   If you have overwritten any of them in a volume, we recommend you do the following:

   #. Compare the original configuration files and the files you have overwritten, so you know what are the
      changes you have made (for example, if you're currently in 4.1.0, then run a diff between the original 4.1.0
      configuration files and your overwritten versions).
   #. Copy your changes to the new version of the configuration file (for example, if the new version you're
      upgrading to is 4.1.1, then copy your configuration overrides to the 4.1.1 version of the file).
   #. Replace the file in the volume with the new configuration file with your changes.

#. Check the :ref:`release-notes` for any other additional tasks you need to perform.
#. Run ``docker-compose up``.
#. Monitor the Docker logs for any upgrade errors.
#. Run ``curl -X POST http://localhost:9191/api/1/target/deploy-all -d '{"reprocess_all_files":true}' -H 'content-type: application/json'``
   to do a reprocess.
#. Your installation is now upgraded and ready.


--------------------------------
Upgrading Kubernetes Deployments
--------------------------------
These upgrade instructions are for both Authoring and Delivery deployments:

#. Update the CrafterCMS image versions in your deployment files.
#. Check the release notes of the new CrafterCMS version (:ref:`release-notes`) for upgrades to OpenSearch.
   If there has been an upgrade, then also update the OpenSearch image versions in your deployment files.
#. Check the configuration file changes between the previous version and the new version.
   If you have overwritten any of them in a ``ConfigMap`` or ``Secret``, we recommend you do the following:

   #. Compare the original configuration files and the files you have overwritten, so you know what are the
      changes you have made (for example, if you're currently in 4.1.0, then run a diff between the original 4.1.0
      configuration files and your overwritten versions).
   #. Copy your changes to the new version of the configuration file (for example, if the new version you're
      upgrading to is 4.1.1, then copy your configuration overrides to the 4.1.1 version of the file).
   #. Replace the file in the ``ConfigMap`` or ``Secret`` with the new configuration file with your changes.

#. Check the :ref:`release-notes` for any other additional tasks you need to perform.
#. Apply the updated deployment files (``kubectl apply``) so the containers are restarted and the configuration 
   changes detected. 
#. Monitor the Kubernetes logs for any upgrade errors.

-------------------------------------------------
Configuration changes between CrafterCMS versions
-------------------------------------------------
None at this time.

.. Leave file in place for future configuration changes between CrafterCMS versions starting 4.0.0