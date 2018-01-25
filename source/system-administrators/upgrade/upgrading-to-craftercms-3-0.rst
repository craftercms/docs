=========================================
Upgrading to Crafter CMS 3.0.x from 2.5.x
=========================================

.. WARNING::
  This guide assumes that you're trying to upgrade a site from a stock 2.5.x Studio and with some slight Studio configuration changes. If your site
  configuration is heavily customized or your Studio is a custom overlay you might need additional work that is not specified here.

---------
Authoring
---------

^^^^^^^^^^^^^^^^^^^^^
Export the 2.5.x Site
^^^^^^^^^^^^^^^^^^^^^

Export the site's Studio config (``cstudio/config/sites/{siteName}``) and the site's content (``wem_projects/{siteName}/{siteName}/work-area`` folders
from Alfresco or from your local 2.5.x repository. Then, copy this folders into a location in the system with Crafter 3.0.x installed.

^^^^^^^^^^^^^^^^^^^^^
Run the Import Script
^^^^^^^^^^^^^^^^^^^^^

#. From your 3.0.x Studio, create a new site based on the ``empty`` blueprint.
#. Shutdown Studio (``crafter-authoring/bin/shutdown.sh``).
#. Run the ``import-2.5-site.sh``, which is located under ``crafter-authoring/bin`` directory. The script takes 3 parameters:

  - The location of the ``sandbox`` repository of the 3.0.x site you just created (should generally be under ``crafter-authoring/data/repos/sites/{siteName}/sandbox``).
  - The location of the site's Studio config you just exported.
  - The location of the site's content you just exported.

The script will basically attempt to execute these operations:

**Import content types:**

#. Remove the original content types from the 3.0.x site.
#. Copy the content types from the 2.5.x Studio config.
#. Remove any old controllers from the copied content types (``controller.js``, ``extract.js``, ``extract.groovy`` and ``controller.groovy``) and copy
   the current ``controller.groovy`` into each content type. The script will ask you first if you want to do this, since you might have code in this
   controllers. If that's the case, we recommend you to migrate this code manually.

**Import configured lists:**

#. Copy the ``form-control-config/configured-lists`` from the 2.5.x Studio config.

**Import content:**

#. Delete the ``scripts``, ``site``, ``static-assets`` and ``templates`` folders from the ``sandbox``.
#. Copy the ``scripts``, ``site``, ``static-assets`` and ``templates`` folders from the 2.5.x content.
#. Copy ``classes/groovy`` folder and rename it to ``scripts/classes``.
#. Copy ``config/site.xml`` folder and rename it to ``config/engine/site-config.xml``.
#. Copy ``config/spring/application-context.xml`` folder and rename it to ``config/engine/application-context.xml``.

**Update the date format:**

#. Update the date format of the XML descriptors under ``site``, from ``MM/dd/yyyy HH:mm:ss`` to ``yyyy-MM-ddTHH:mm:ss.SSSZ``.**

^^^^^^^^^^^^^^^^
Manual Migration
^^^^^^^^^^^^^^^^

Depending on your site and its configuration, you might need to manually do this additional steps:

#. Migrate old Studio configuration, which includes:

  - **Permission and role mappings:** the permission and role models have changed slightly. Please check the documentation on the new 3.0 mappings
    here: :ref:`permission-mappings` and :ref:`role-mappings`.
  - **Site dropdown configuration:** ``config/studio/context-nav/site-dropdown.xml`` is now ``config/studio/context-nav/sidebar.xml`` in 3.0.
  - **Tools configuration:** ``config/studio/administration/tools.xml`` has been renamed to ``config/studio/administration/site-config-tools.xml``.
  - **Personas:** the way Personas are handled has changed. In order to understand and migrate 2.5 Personas to 3.0 Targeting, please check
    :ref:`targeting`.

#. Migrate code from the old content type controllers into the new ``controller.groovy`` (like mentioned above).
#. Search for references to ``_dt`` in Freemarker and Groovy files. Since Engine now automatically converts ``SiteItem`` fields with ``_dt``
   suffix to ``Date`` objects when referenced, you'll no longer need to parse this fields yourself. For example, inn Freemarker, expressions like
   ``${contentModel.date_dt?date("MM/dd/yyyy")?string.short}`` should be changed to ``${contentModel.date_dt?date?string.short}``. In Groovy,
   expressions like ``format.parse(contentModel.date_dt.text)`` can now be ``contentModel.date_dt``.
#. Migrate Engine's old localization configuration to Engine's new targeting configuration (see :ref:`targeting-guide` for more info). Example,
   old localization configuration that looks like this:

  .. code-block:: xml

    <i10n>
      <enabled>true</enabled>
      <localizedPaths>/site/website</localizedPaths>
      <forceCurrentLocale>false</forceCurrentLocale>
      <defaultLocale>en</defaultLocale>
      <mergeFolders>true</mergeFolders>
    </i10n>

  With the new targeting configuration format, it should look like this:

  .. code-block:: xml

    <defaultLocale>en</defaultLocale>

    <!-- Content targeting properties -->
    <targeting>
      <enabled>true</enabled>
      <rootFolders>/site/website</rootFolders> <!-- instead of localizedPaths -->
      <redirectToTargetedUrl>true</redirectToTargetedUrl> <!-- instead of forceCurrentLocale -->
      <fallbackTargetId>en</fallbackTargetId> <!-- instead of defaultLocale -->
      <mergeFolders>true</mergeFolders> <!-- instead of mergeFolders -->
    </targeting>

^^^^^^^^^^^
Final Steps
^^^^^^^^^^^

After all the previous steps, ``git commit`` any pending changes you have and start Studio again (``crafter-authoring/bin/startup.sh``). After a couple of minutes,
Studio will start synchronizing the new commits with its database, and messages like the following will appear in the logs.

.. code-block:: guess

  [INFO] 2017-11-30 11:59:36,111 [studioSchedulerFactoryBean_Worker-4] [site.SiteServiceImpl] | Syncing database with repository for site: myawesomesite   fromCommitId = deffff55157664a0895f495f472c73fbaab50f02
  [INFO] 2017-11-30 11:59:36,172 [studioSchedulerFactoryBean_Worker-4] [site.SiteServiceImpl] | Done syncing database with repository for site: myawesomesite fromCommitId = deffff55157664a0895f495f472c73fbaab50f02 with a final result of: true

After you see the ``Done syncing database`` in the logs, you should easily be able to publish the entire site by going in Studio to *Site Config* >
*Bulk Operations* and then *Bulk Publish* the root path (/).

.. WARNING::
  The database synchronization process and the publishing process might take some time depending on the size of your site.

--------
Delivery
--------

If you have custom Engine configuration, specially if your Delivery is set up as multi tenant, you will need to do some slight changes to migrate your
configuration under ``apache-tomcat/shared/classes/crafter/engine/extension`` to a 3.0.x compatible configuration:

#. In ``rendering-context.xml`` and ``services-context.xml``, change the import paths with ``classpath*:crafter/engine/mode/multi-tenant`` to
   ``classpath*:crafter/engine/mode/multi-tenant/mapped``.
#. If you have any custom ``site.xml`` and ``spring/application-context.xml`` under ``sites/{siteName}``, make sure they're renamed to
   ``site-config.xml`` and ``application-context.xml`` respectively (``spring`` folder should be removed).
