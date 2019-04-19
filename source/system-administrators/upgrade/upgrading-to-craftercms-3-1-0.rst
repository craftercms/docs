.. _upgrade-to-3-1-0:

=============================================================================
Instructions for Upgrading to Crafter CMS 3.1.0 from a previous 3.0.x version
=============================================================================
This section details how to upgrade your Crafter CMS installation.

----------------
Before Upgrading
----------------

There are a few things to note when upgrading to Crafter CMS 3.1 from 3.0:

   #. Groups are now at the system level instead of per site.  By default, Crafter CMS has the following groups available after a fresh install: ``system_admin``, ``site_admin``, ``site_author``, ``site_developer``, ``site_publisher``, and ``site_reviewer``.  Users added to the system_admin group has the role **system_admin** that has permissions to create users, create site, add users to groups, etc.  Users added to any of the default groups has permissions for all sites created in Studio.

   #. Site membership of a user is now determined by a mapping of group membership to roles within a site using the mapping file ``role-mappings.xml`` (see :ref:`role-mappings` on  how to configure the role mappings).  Note the new default groups when you create a site as noted above, these are automatically mapped to roles when using the built-in blueprints.

      When upgrading a site, the default groups in the site are updated as follows:

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


   #. Studio authentication now uses a chain, with the internal database as the Studio default authentication.  For more information, see :ref:`configuring-studio-security`

   #. The LDAP authentication configuration has been updated.  The attribute ``siteId`` has been removed and is no longer needed since site membership of a user is now determined by group membership.  Please see :ref:`crafter-studio-configure-ldap` for the updated configuration.

   #. The headers based authentication configuration has been updated. The ``groups`` header value should just be a comma separated list of groups that a user belongs to.  In the previous version, 3.0.x, the ``groups`` header value contained a comma separated list of sites and groups.  Please update the ``groups`` header value of users to contain only a comma separated list of groups the user belongs to.  Please see :ref:`crafter-studio-configure-headers-based-auth` for the updated configuration.

   #. The default search engine used is now Elasticsearch, see :ref:`why-elasticsearch` for more information.

Let's begin upgrading your Crafter CMS install.

-------------------
Upgrade Crafter CMS
-------------------

#. Review the release notes for the version you are upgrading to, which contains specific information on the changes that have been made and how it may affect you when upgrading to that specific version.
#. In your Crafter CMS 3.0.x install, copy the data folder ``CRAFTER_3.0.x_INSTALLATION/data``
#. Download the Crafter CMS 3.1.0 bundle version and extract the files
#. Paste the data folder copied from the first step to your new ``CRAFTER_3.1.0_INSTALLATION`` install folder
#. Migrate sites to Elasticsearch (recommended) by following this guide: :ref:`migrate-site-to-elasticsearch`. You can continue using Crafter Search and Solr as the search engine, by following :ref:`using-crafter-search-and-solr`
#. Start your upgraded Crafter CMS, depending on your installation, follow the steps below as needed then verify that the authoring and delivery environments are functioning as intended.


--------------------
Upgrading Solr Cores
--------------------

Because Elasticsearch is now the default search engine, the Deployer targets need to be updated to include a new
parameter for using Solr:

.. code-block:: bash
  :linenos:

  curl --request POST \
    --url http://localhost:9191/api/1/target/create \
    --header 'content-type: application/json' \
    --data '{
    "replace": true,
    "site_name": "SITE_NAME",

     ... existing configuration ...

     "use_crafter_search": true
  }'

.. include:: /includes/upgrading-to-solr-7.rst

--------------------------
Creating Authoring Targets
--------------------------

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


After upgrading your Crafter CMS install, update the following site configurations depending on the previous version you were running:

------------
Sample files
------------

It is possible to copy all the sample files from any of the included blueprints, for
example from ``$CRAFTER_HOME/crafter-authoring/data/repos/global/blueprints/empty/config/studio/administration/samples``
into your site ``/config/studio/administration/samples``.

-----------------------
Adding the version file
-----------------------

Starting with version 3.1.0 Crafter CMS will use a special file ``studio_version.xml`` to track the version of 
each site and automatically apply upgrades for future releases. When migrating a site from any previous version
this file has to be added and committed in the site repository.

.. code-block:: xml
  :caption: /config/studio/studio_version.xml

  <?xml version="1.0" encoding="UTF-8"?>
  <studio>
    <version>3.1.0</version>
  </studio>
  
.. note::

  If your site is heavily customized and you would like to prevent Crafter CMS from trying to upgrade
  it in the future you can set the version value to any random string, for example ``<version>DISABLED</version>``.

-----------------------------
Upgrading Site Configurations
-----------------------------

.. note::

  Some of the changes may not be needed depending on the Crafter CMS version in which your site was created.

All files in the folder ``/config/studio/search/`` are no longer used it can be completely removed.

To add the dependency resolver configuration file in the SiteConfig configuration file ``config-list.xml``, add the 
following:

.. code-block:: xml
  :caption: /config/studio/administration/config-list.xml
  
  <file>
    <path>/studio/dependency/resolver-config.xml</path>
    <title>Dependency Resolver Configuration</title>
    <description>Dependency Resolver Configuration</description>
    <samplePath>/studio/administration/samples/sample-resolver-config.xml</samplePath>
  </file>

In your ``site-config-tools.xml`` configuration file, you will need to remove the groups tool, then add the repositories tool.
``/config/studio/administration/site-config-tools.xml``

Remove the groups tool

.. code-block:: xml
  :caption: /config/studio/administration/site-config-tools.xml

  <tool>
    <name>groups</name>
    <label>Groups</label>
  </tool>


Add the repositories tool

.. code-block:: xml
  :caption: /config/studio/administration/site-config-tools.xml

  <tool>
    <name>repository</name>
    <label>Remote Repositories</label>
    <icon>
      <class>fa-database</class>
    </icon>
  </tool>


In your dependency resolver configuration file ``/config/studio/dependency/resolver-config.xml``, replace the following 
regular expressions:

- ``<find-regex>/static-assets/([^&lt;"'\)]+)</find-regex>`` with ``<find-regex>/static-assets/([^&lt;"'\)\?]+)</find-regex>``
- ``<path-pattern>/static-assets/([^&lt;"'\)]+)</path-pattern>`` with
    .. code-block:: xml
      :caption: /config/studio/dependency/resolver-config.xml

      <path-pattern>/static-assets/([^&lt;"'\)]+)\.css</path-pattern>
      <path-pattern>/static-assets/([^&lt;"'\)]+)\.js</path-pattern>
      <path-pattern>/static-assets/([^&lt;"'\)]+)\.html</path-pattern>
      <path-pattern>/static-assets/([^&lt;"'\)]+)\.xml</path-pattern>
      <path-pattern>/static-assets/([^&lt;"'\)]+)\.json</path-pattern>
      <path-pattern>/static-assets/([^&lt;"'\)]+)\.scss</path-pattern>
      <path-pattern>/static-assets/([^&lt;"'\)]+)\.sass</path-pattern>
      <path-pattern>/static-assets/([^&lt;"'\)]+)\.hbs</path-pattern>

- ``<find-regex>/templates/([^&lt;"]+)\.ftl</find-regex>`` with
    .. code-block:: xml
      :caption: /config/studio/dependency/resolver-config.xml

      <pattern>
        <find-regex>/templates/([^&lt;"]+)\.ftl</find-regex>
      </pattern>

``/config/studio/site-config.xml``

Add the published repository configuration

.. code-block:: xml

  <published-repository>
    <enable-staging-environment>false</enable-staging-environment>
    <staging-environment>staging</staging-environment>
    <live-environment>live</live-environment>
  </published-repository>

Remove the following property

.. code-block:: xml

  <sandbox-branch>master</sandbox-branch>

---------------------------
Managed configuration files
---------------------------

Starting in version 3.1.0 Crafter CMS will also track an individual version for some configurations files
in order to keep them up to date.

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
