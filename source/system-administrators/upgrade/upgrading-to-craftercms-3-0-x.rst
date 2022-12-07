:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now


.. index:: Instructions for Upgrading to CrafterCMS 3.0.x from 2.5.x, Upgrading CrafterCMS to 3.0.x

.. _upgrading-craftercms-to-3-0-x:

=========================================================
Instructions for Upgrading to CrafterCMS 3.0.x from 2.5.x
=========================================================
This section details how to upgrade your CrafterCMS installation to 3.0.x

.. WARNING::
   This guide assumes that you're trying to upgrade a site from a stock 2.5.x Studio and with some slight Studio configuration changes. If your site configuration is heavily customized or your Studio is a custom overlay you might need additional work that is not specified here.

----------------
Before Upgrading
----------------
Here are the steps for upgrading your CrafterCMS install to 3.0.x.  Please review the steps listed below before starting your upgrade.

#. Review the release notes for the version you are upgrading to, which contains specific information on the changes that have been made and how it may affect you when upgrading to that specific version.
#. Backup your existing CrafterCMS installation.  For more information on how to perform the backup, please see the documentation on :ref:`backup-and-recovery`
#. Upgrade your CrafterCMS to the new version by following the instructions listed for the version you are upgrading to.
#. Start your upgraded CrafterCMS, and verify that the authoring and delivery environments are functioning as intended.

.. note::
   There are a few things to note with Crafter Studio when upgrading to CrafterCMS 3.0.0 from 2.5.x.  Repository changes have been made and the following now applies:

    #. **Structure**

       The entire repository is now divided in two separate spaces. One space is for global content and configurations, and the other is for sites content and configurations.
       Global space contains site blueprints and studio (global) configuration.
       Sites space is further divided into separate spaces for each site. Site subspace contains content and configuration. Major difference from previous versions is that site specific configuration is part of site content (site content and configuration are unified within same space)
       Example:
       Content types configuration in previous version was stored in following location: ``/cstudio/config/sites/{SITENAME}/content-types/{CONTENT_TYPE}``. Since 3.0.0 content types are stored in: ``repos/sites/{SITENAME}/sandbox/config/studio/content-types/{CONTENT_TYPE}``

    #. **Source control**

       Git is used as the source control system. Regarding new repository structure, multiple Git repositories are used for the entire studio repository. One Git repository is used for global space, and for sites, two Git repositories are used per site (one for sandbox and one for published content).

Let's begin upgrading our CrafterCMS install.

---------
Authoring
---------

^^^^^^^^^^^^^^^^^^^^^
Export the 2.5.x Site
^^^^^^^^^^^^^^^^^^^^^

#. Export the site's Studio config (``cstudio/config/sites/{siteName}``) and the site's content (``wem_projects/{siteName}/{siteName}/work-area``
   from your Crafter 2.5 installation:

   - If your Crafter 2.5 uses Alfresco as the repository, login to Alfresco Share and download the folders as zips from the
     ``Repository`` tab, or copy them using WebDav.
   - If your Crafter 2.5 uses the local filesystem as the repository, go to ``CRAFTER_INSTALLATION/data/repo`` and there you'll find
     the aforementioned folders.

#. Then, copy the folders (or extract the zip) under any location on the machine with Crafter 3.0 installed.

^^^^^^^^^^^^^^^^^^^^^^^^
Run the Migration Script
^^^^^^^^^^^^^^^^^^^^^^^^

Before running the script, make sure:

  - ``curl`` and ``git`` are installed.

Run the ``migrate.sh``, which is located under ``crafter-authoring/bin/migration`` directory. The script takes 3 parameters:

  - The name of the new 3.0 site where the original site will be migrated.
  - The location of the 2.5 Studio configuration (where the content-types reside).
  - The root of the 2.5 site (where the site, scripts, static-assets and template folders reside).

Example:

.. code-block:: sh

  ./migrate.sh mysite ~/crafter/crafter-2.5.x/authoring/data/repo/cstudio/config/mysite ~/crafter/crafter-2.5.x/authoring/data/repo/wem-projects/mysite/mysite/work-area

|

The script will basically attempt to execute these operations:

**Setup a migrate repo:**

#. Create a Git repo from 3.0 site skeleton under the ``crafter-authoring/data/migrate`` directory. All migration work will be done under this
   directory.

**Import content types:**

#. Copy the content types from the 2.5 Studio config.
#. Remove any old controllers from the copied content types (``controller.js``, ``extract.js``, ``extract.groovy`` and ``controller.groovy``) and copy
   the current ``controller.groovy`` into each content type. The script will ask you first if you want to do this, since you might have code in this
   controllers. If that's the case, we recommend you to migrate this code manually.

**Import configured lists:**

#. Copy the ``form-control-config/configured-lists`` from the 2.5.x Studio config.

**Import content:**

#. Copy the ``scripts``, ``site``, ``static-assets`` and ``templates`` folders from the 2.5.x content.
#. Copy ``classes/groovy`` folder and rename it to ``scripts/classes``.
#. Copy ``config/site.xml`` file and rename it to ``config/engine/site-config.xml``.
#. Upgrade old ``<i10n>`` configuration to ``<targeting>`` configuration (:ref:`targeting-guide`) in ``config/engine/site-config.xml``.
#. Copy ``config/spring/application-context.xml`` file and rename it to ``config/engine/application-context.xml``.

**Update Engine config:**

#. Migrate old ``<i10n>`` tags to new ``<targeting>`` tags (see :ref:`targeting-guide`).
#. Set ``<disableFullModelTypeConversion>`` as true. This basically disables the full content model type conversion, in order to be
   compatible with 2.5 sites.

   .. NOTE::
     Up to and including 2.5, Crafter Engine, in the FreeMarker host only, converts model elements based on a suffix type hint, but only
     for the first level in the model, and not for ``_dt``, ``_s``, ``_t`` and ``_html``. For example, for ``contentModel.myvalue_i``
     Integer is returned, but for ``contentModel.repeater.myvalue_i`` and ``contentModel.date_dt`` a String is returned. In the Groovy
     host no type of conversion was performed.

     In version 3 onwards, Crafter Engine converts elements with any suffix type hints (including ``_dt``, ``_s``, ``_t`` and ``_html``)
     at any level in the content model and for both Freemarker and Groovy hosts.

**Update the date format:**

#. Change the format of stored dates in XML descriptors under ``site``, from ``MM/dd/yyyy HH:mm:ss`` to ``yyyy-MM-dd'T'HH:mm:ss.SSSX.**``

**Commit the files:**

#. Commit the added files in chunks (by default of 1000), to avoid generating a single giant commit that would slow down Git.

**Check for old date format in code:**

#. Search for old date patterns (``MM/dd/yyyy HH:mm:ss``) in Groovy and Freemarker files and ask the user to change them if necessary.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Manual Steps After Migration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Depending on your site customizations, you might want to do these additional steps, after the site has been migrated. You can find the migrated
repository under ``crafter-authoring/data/migration/{siteName}``, and perform the changes there.

#. Migrate old Studio configuration, which includes:

   - **Permission and role mappings:** the permission and role models have changed slightly. Please check the documentation on the new 3.0 mappings
     here: :ref:`permission-mappings` and :ref:`role-mappings`.
   - **Site dropdown configuration:** ``config/studio/context-nav/site-dropdown.xml`` is now ``config/studio/context-nav/sidebar.xml`` in 3.0.
   - **Tools configuration:** ``config/studio/administration/tools.xml`` has been renamed to ``config/studio/administration/site-config-tools.xml``.
   - **Personas:** the way Personas are handled has changed. In order to understand and migrate 2.5 Personas to 3.0 Targeting, please check
     :ref:`targeting`.

#. Migrate code from the old content type controllers into the new ``controller.groovy`` (like mentioned above).
#. Change the date pattern from ``MM/dd/yyyy HH:mm:ss`` to ``yyyy-MM-dd'T'HH:mm:ss.SSSX``, when parsing a ``_dt`` field extracted from the content model
   (make sure ``<disableFullModelTypeConversion>`` is set as true, which the script should have done automatically).

After you've made any necessary changes, commit them by doing ``git add .`` and then ``git commit -m "Manual changes for migration"``.

^^^^^^^^^^^^^^^^^^^^^
Run the Import Script
^^^^^^^^^^^^^^^^^^^^^

This is the last step of the migration/import, and basically involves importing the migrated site into Studio. Before continuing, make sure:

  - Studio 3.0.x is running.
  - There's no site in Studio with the same name as the one you're migrating.

.. tip:: *Very large sites may take a long time to import and can, in some cases, last longer than the user session timeout settings. We suggest increasing the session timeout to 180 minutes (3 hours) when importing/upgrading very large sites.  To increase the session time follow the instructions here:* :ref:`changing-session-timeout`


Run the ``import.sh``, which is located under ``crafter-authoring/bin/migration`` directory. The script takes 1 parameter, the name of the site,
which should be the same one that you used on the migration process.

Example:

.. code-block:: sh

  ./import.sh mysite

|

The import script will basically attempt to execute these operations:

**Create 3.0 site:**

#. Call studio to create the 3.0 site and to clone the site from the work repository. The script will ask you for Studio's username and password.

After this, you just need to wait for the site creation process to complete. You can tail the ``crafter-authoring/logs/tomcat/catalina.out`` meanwhile to
watch the progress. The site should be ready when you see the following line in the log:

.. code-block:: text

  [INFO] 2018-03-29 11:54:42,063 [studioSchedulerFactoryBean_Worker-1] [site.SiteServiceImpl] | Done syncing database with repository for site: mysite fromCommitId = a1f2f8beba50da9cc75fcd3aa97d412750ef5225 with a final result of: true
  [INFO] 2018-03-29 11:54:42,063 [studioSchedulerFactoryBean_Worker-1] [site.SiteServiceImpl] | Last commit ID for site: mysite is 069f82a4bb3bce1e8cb3c2abc030f9a2cb68e9a9

|

--------
Delivery
--------

If you have custom Engine configuration, specially if your Delivery is set up as multi tenant, you will need to do some slight changes to migrate your
configuration under ``apache-tomcat/shared/classes/crafter/engine/extension`` to a 3.0.x compatible configuration:

#. In ``rendering-context.xml`` and ``services-context.xml``, change the import paths with ``classpath*:crafter/engine/mode/multi-tenant`` to
   ``classpath*:crafter/engine/mode/multi-tenant/mapped``.
#. If you have any custom ``site.xml`` and ``spring/application-context.xml`` under ``sites/{siteName}``, make sure they're renamed to
   ``site-config.xml`` and ``application-context.xml`` respectively (``spring`` folder should be removed).