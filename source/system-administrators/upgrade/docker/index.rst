:is-up-to-date: True

.. index:: Upgrading Crafter CMS; Upgrading; Docker; Kubernetes

.. _upgrading-dockers:

===================================================
Docker/Kuber Instructions for Upgrading Crafter CMS
===================================================

This section details how to upgrade your Crafter CMS installations in Kubernetes or Docker Compose.

------------------------
Upgrading Docker Compose
------------------------

These upgrade instructions are for both ``authoring`` and ``delivery`` compose projects:

#. Run ``docker-compose down`` to fully stop the environment.
#. If you are using a clone of https://github.com/craftercms/docker-compose, then just pull the latest changes. If 
   you're using your own Docker Compose files, then remember to update the versions of the Crafter CMS Docker images. 
#. Check the release notes of the new Crafter CMS version (:ref:`release-notes`) for upgrades to Elasticsearch (and 
   Solr if you're using the Crafter CMS images with Solr support). If there has been an upgrade, then also update the 
   Elasticsearch/Solr image versions.
#. Check the configuration file changes between the previous version and the new version: :ref:`docker-config-changes`.
   If you have overwritten any of them in a volume, we recommend you do the following:

   #. Compare the original configuration files and the files you have overwritten, so you know what are the 
      changes you have made (for example, if you're currently in 3.1.4, then run a diff between the original 3.1.4 
      configuration files and your overwritten versions).
   #. Copy your changes to the new version of the configuration file.
   #. Replace the file in the volume with the new configuration file with your changes.

#. Check the :ref:`release-notes` for any other additional tasks you need to perform.
#. Run ``docker-compose up`` and monitor the Docker logs for any upgrade errors.

--------------------------------
Upgrading Kubernetes Deployments
--------------------------------

These upgrade instructions are for both Authoring and Delivery deployments:

#. Update the Crafter CMS image versions in your deployment files. 
#. Check the release notes of the new Crafter CMS version (:ref:`release-notes`) for upgrades to Elasticsearch (and 
   Solr if you're using the Crafter CMS images with Solr support). If there has been an upgrade, the also update the 
   Elasticsearch/Solr image versions in your deployment files.
#. Check the configuration file changes between the previous version and the new version: :ref:`docker-config-changes`.
   If you have overwritten any of them in a ``ConfigMap`` or ``Secret``, we recommend you do the following:

   #. Compare the original configuration files and the files you have overwritten, so you know what are the 
      changes you have made (for example, if you're currently in 3.1.4, then run a diff between the original 3.1.4 
      configuration files and your overwritten versions).
   #. Copy your changes to the new version of the configuration file.
   #. Replace the file in the ``ConfigMap`` or ``Secret`` with the new configuration file with your changes.

#. Check the :ref:`release-notes` for any other additional tasks you need to perform.
#. Apply the updated deployment files so the containers are restarted and detect the configuration changes, and monitor 
   the Kubernetes logs for any upgrade errors.
