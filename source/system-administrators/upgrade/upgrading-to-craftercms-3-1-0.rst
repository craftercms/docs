:is-up-to-date: True

.. _upgrade-to-3-1-0:

=============================================================================
Instructions for Upgrading to Crafter CMS 3.1.0 from a previous 3.0.x version
=============================================================================
This section details how to upgrade your Crafter CMS installation.

----------------
Before Upgrading
----------------

Starting with version 3.1.0, Crafter CMS has an upgrade manager that automatically upgrades the system, some configuration files and blueprints.  Here's a list of items auto handled by the upgrade manager when you start Crafter CMS:

#. **Site Config updates**

   There are a number of updates that has been made to the tools available in |siteConfig|.

   Here's the upgraded |siteConfig| tools:

   .. image:: /_static/images/system-admin/upgrade/site-config-tools-sidebar.png
      :alt: Crafter Studio Site Config
      :align: center

   The following items are auto added/removed from your site after starting your new Crafter CMS install:

   * Remote Repository tool is auto added
   * Groups tool is auto removed
   * Log level setting is auto removed
   * GraphiQL is auto added

#. **Version File Added**

   Starting with version 3.1.0 Crafter CMS will use a special file studio_version.xml to track the version of each site and automatically apply upgrades for future releases.  The studio_version.xml file is auto installed and looks like this:

   .. code-block:: xml
       :caption: /config/studio/studio_version.xml

       <?xml version="1.0" encoding="UTF-8"?>
       <studio>
           <version>3.1.0</version>
       </studio>

   .. note::

       If your site is heavily customized and you would like to prevent Crafter CMS from trying to upgrade it in the future you can set the version value to any random string, for example <version>DISABLED</version>.

#. **Managed Configuration Files**

   Starting in version 3.1.0 Crafter CMS will also track an individual version for some configurations files
   in order to keep them up to date.  These configuration files are auto updated by the upgrade manager

   .. note::

       These upgrades can also be disabled by setting the version to a random string, just like the site version.

   .. important::

      If one of the files do not contain a version tag then all existing upgrades will be applied.

   This is the list of files currently managed by Crafter CMS:

   - ``/config/studio/role-mappings-config.xml``
     Current version: 2.
     In 3.0.x groups were handled by site and starting in 3.1.0 they became global, during the database upgrade existing
     groups will be renamed to ``{site}_{role}`` and this file needs to match.
   - ``/config/studio/administration/config-list.xml``
     Current version: 3.
     There are new configuration files for URL Rewrite and WebDAV Profiles.
   - ``/config/studio/administration/site-config-tools.xml``
     Current version: 2.
     There are new datasources for WebDAV file management.

   If you are certain that one of those files is already up to date in your site, you can add the version tag with the
   latest value to prevent the upgrades from being applied to it.

#. **Groups Update**

   Groups are now at the system level instead of per site.  As mentioned above, the Groups tool has been removed from |siteConfig| and is now in the Main Menu.  By default, Crafter CMS has the following groups available after a fresh install: ``system_admin``, ``site_admin``, ``site_author``, ``site_developer``, ``site_publisher``, and ``site_reviewer``.  Users added to the system_admin group has the role **system_admin** that has permissions to create users, create site, add users to groups, etc.  Users added to any of the default groups has permissions for all sites created in Studio.

#. **Site Membership Update**

   Site membership of a user is now determined by a mapping of group membership to roles within a site using the mapping file ``role-mappings.xml`` (see :ref:`role-mappings` on  how to configure the role mappings).  Note the new default groups when you create a site as noted above, these are automatically mapped to roles when using the built-in blueprints.

   When upgrading a site, the default groups in the site are auto updated as follows:

   +-------------------------------+------------------------------------------+
   || 3.0 Default Groups  ==>      || 3.1 Default Groups                      |
   +===============================+==========================================+
   || Admin                        || {site_name}_admin                       |
   +-------------------------------+------------------------------------------+
   || Author                       || {site_name}_author                      |
   +-------------------------------+------------------------------------------+
   || Developer                    || {site_name}_developer                   |
   +-------------------------------+------------------------------------------+
   || Publisher                    || {site_name}_publisher                   |
   +-------------------------------+------------------------------------------+
   || Reviewer                     || {site_name}_reviewer                    |
   +-------------------------------+------------------------------------------+

   For example, if user ``john`` is a member of group ``Developer`` (one of the default groups) in the site ``mysite``, after upgrading, user ``john`` will be a member of group ``mysite_developer``.

^^^^^^^^^^^^^^^^^^^^^^^^
Some More Things to Note
^^^^^^^^^^^^^^^^^^^^^^^^

There are a few more things to note when upgrading to Crafter CMS 3.1 from 3.0.

#. Studio authentication now uses a chain, with the internal database as the Studio default authentication.  For more information, see :ref:`configuring-studio-security`

#. The LDAP authentication configuration has been updated.  The attribute ``siteId`` has been removed and is no longer needed since site membership of a user is now determined by group membership.  Please see :ref:`crafter-studio-configure-ldap` for the updated configuration.

#. The headers based authentication configuration has been updated. The ``groups`` header value should just be a comma separated list of groups that a user belongs to.  In the previous version, 3.0.x, the ``groups`` header value contained a comma separated list of sites and groups.  Please update the ``groups`` header value of users to contain only a comma separated list of groups the user belongs to.  Please see :ref:`crafter-studio-configure-headers-based-auth` for the updated configuration.

#. The default search engine for Crafter CMS is now Elasticsearch as opposed to Solr, learn more at :ref:`why-elasticsearch`.

   * If you're happy with Solr, you can keep using it as it is fully supported. However, please bear in mind:

      * New features, like GraphQL support, require Elasticsearch.
      * Studio requires Elasticsearch for authoring search, so that will get installed and used regardless.

   * If you'd like to switch to Elasticsearch, please read :ref:`migrate-site-to-elasticsearch`.

Let's begin upgrading your Crafter CMS install.

-------------------
Upgrade Crafter CMS
-------------------

#. Review the release notes for the version you are upgrading to, which contains specific information on the changes 
   that have been made and how it may affect you when upgrading to that specific version.
#. Backup your Crafter CMS 3.0.x install
#. Download the Crafter CMS 3.1.0 bundle version and extract the files
#. In your Crafter CMS 3.0.x install, copy/paste or move the data folder ``CRAFTER_3.0.x_INSTALLATION/data`` to your new ``CRAFTER_3.1.0_INSTALLATION`` install folder
#. Migrate sites to Elasticsearch (recommended) by following this guide: :ref:`migrate-site-to-elasticsearch`.
   You can continue using Crafter Search and Solr as the search engine, by following :ref:`using-crafter-search-and-solr`
#. Start your upgraded Crafter CMS, then follow the steps below for :ref:`create-authoring-targets`, :ref:`update-index-format-preview-targets` and :ref:`update-paths-in-targets` for all upgraded sites.

   * If a site has not been migrated to Elasticsearch, follow additionally the steps under :ref:`updates-for-solr`.
   * If a site uses a default dependency resolver configuration file from a previous Crafter CMS installation version, consider deleting your dependency resolver configuration file and it will then use the default dependency resolver configuration with rules matching what's in this sample ``CRAFTER_3.1.0_INSTALLATION/data/repos/global/configuration/dependency/resolver-config.xml``
   * If a site has a customized dependency resolver configuration file, please compare your dependency resolver configuration with the default dependency resolver file ``CRAFTER_3.1.0_INSTALLATION/data/repos/global/configuration/dependency/resolver-config.xml`` and make changes as required.

#. Verify that the authoring and delivery environments are functioning as intended.

.. _create-authoring-targets:

------------------------
Create Authoring Targets
------------------------
Starting with Crafter CMS 3.1.0, Studio will use Elasticsearch to index all sites to provide the new features in the
authoring search. For all existing sites a new target must be created using the Deployer API:

#.  Create the new target:

    .. code-block:: bash
      :linenos:

      curl --request POST \
        --url http://localhost:9191/api/1/target/create \
        --header 'content-type: application/json' \
        --data '{
        "env": "authoring",
        "site_name": "SITE_NAME",
        "template_name": "authoring",
        "repo_url": "INSTALL_DIR/data/repos/sites/SITE_NAME/sandbox"
      }'

#.  Index all content

    .. code-block:: bash
      :linenos:

      curl --request POST \
        --url http://localhost:9191/api/1/target/deploy/authoring/SITE_NAME \
        --header 'content-type: application/json' \
        --data '{
        "reprocess_all_files": true
      }'

.. _update-index-format-preview-targets:

----------------------------------------------
Update the Index Format of the Preview Targets
----------------------------------------------

The preview Deployer targets in the Authoring environment need to be updated to include the new preview index format:

#. Go to ``AUTHORING_INSTALL_DIR/data/deployer/targets``.
#. For each target YAML file ending in ``-preview``, below the ``localRepoPath`` property, add the following property 
   with the same indentation:

   .. code-block:: yaml

      search:
        indexIdFormat: '%s-preview'

.. _update-paths-in-targets:

-------------------------------
Update the Paths in the Targets
-------------------------------

The Deployer targets needs the repository path to be updated to point to the new local repository path:

For Authoring environments, to update the local repository path:

#. Go to ``AUTHORING_INSTALL_DIR/data/deployer/targets``.
#. For each target YAML file ending in ``-preview``, modify the ``localRepoPath`` property value
   with the new path of the site sandbox repository:

   .. code-block:: yaml
      :linenos:

      localRepoPath: AUTHORING_INSTALL_DIR/data/repos/sites/SITE_NAME/sandbox

For Delivery environments, to update the repository path:

#. Go to ``DELIVERY_INSTALL_DIR/data/deployer/targets``.
#. For each target YAML file ending in ``-default``, modify the ``deployment:pipeline:remoteRepo:url:`` property value
   with the new path of the site published repository:

   .. code-block:: yaml
      :linenos:
      :emphasize-lines: 5

      deployment:
        pipeline:
          - processorName: gitPullProcessor
            remoteRepo:
              url: AUTHORING_INSTALL_DIR/data/repos/sites/SITE_NAME/published


.. _updates-for-solr:

----------------
Updates for Solr
----------------

The following are updates **only** required if you're going to keep using Solr as your search engine.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Enable Crafter Search in the Targets
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You need to update the Authoring and Delivery Deployer targets to enable Crafter Search use:

#. Go to ``CRAFTERCMS_INSTALL_DIR/data/deployer/targets``.
#. For each target YAML file ending in ``-preview`` in case of Authoring, or in ``-default.yaml`` in case of Delivery, 
   below the ``localRepoPath`` property, add the following property with the same indentation:

   .. code-block:: yaml

      crafterSearchEnabled: true

^^^^^^^^^^^^^^^^^^
Upgrade Solr Cores
^^^^^^^^^^^^^^^^^^

.. include:: /includes/upgrading-to-solr-7.rst
