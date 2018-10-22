.. _upgrade-to-3-1-0:

=============================================================================
Instructions for Upgrading to Crafter CMS 3.1.0 from a previous 3.0.x version
=============================================================================

After upgrading your Crafter CMS install, you will need to update the following site configurations
depending on the previous version you were running.


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
