.. _upgrading-to-crafter-cms-3-0:

=======================================
Upgrading to Crafter CMS 3.0 from 2.5.x
=======================================

.. DANGER::
	This guide assumes that you're trying to upgrade a site from a stock 2.5.x Studio and with some slight Studio configuration changes. If your site
	configuration is heavily customized or your Studio is a custom overlay you might need additional work that is not specified here.

---------
Authoring
---------

Follow the next steps to import a site built in Crafter Studio 2.5.x to Crafter Studio 3.0.

#. Export the ``cstudio/config/sites/{siteName}`` and ``wem_projects/{siteName}`` folders from Alfresco or from your local 2.5.x repository.
#. In your Crafter 3.0 installation, create a new site based on the ``empty`` blueprint.
#. From the filesystem, navigate to the ``sandbox`` repository of the new site (``AUTHORING_INSTALL/data/repos/site/{siteName}/sandbox``).
#. Import the 2.5.x Studio configuration into ``sandbox``:

	#. Most of the non-content-type configuration doesn't need to be imported, except for the following if it has been modified:

		- **Permission and role mappings:** the permission and role models have changed slightly, although the file paths are still the same. Please check
		  the documentation on the new 3.0 mappings here: :ref:`permission-mappings` and :ref:`role-mappings`.
		- **Site dropdown configuration:** ``config/studio/context-nav/site-dropdown.xml`` is now ``config/studio/context-nav/sidebar.xml`` in 3.0.
		- **Tools configuration:** ``config/studio/administration/tools.xml`` has been renamed to ``config/studio/administration/site-config-tools.xml``.
		- **Configured lists:** copy your configured list under ``form-control-config/configured-lists`` to the same path in ``config/studio``.

	#. Import the content types:

		#. Remove all current content types in the new 3.0 site by deleting everything under ``config/studio/content-types``.
		#. Copy the 2.5.x content types.
		#. Create a ``controller.groovy`` on every content type that's missing it.
		#. Migrate any custom code you have in the ``extract.groovy`` or ``extract.js`` files to ``controller.groovy``.

#. Import the 2.5.x site content into ``sandbox``:

	#. Delete the ``scripts``, ``site``, ``static-assets`` and ``templates`` folders from the ``sandbox``.
	#. Copy the folders under the 2.5.x ``wem-projects`` into ``sandbox``.
	#. If you have any files under ``classes/groovy``, move them under ``scripts/classes``.
	#. Rename the Engine site configuration files:

		#. Move ``config/site.xml`` to ``config/engine/site-config.xml``.
		#. Move ``config/spring/application-context.xml`` to ``config/engine/application-context.xml``.

#. Do a ``git add .`` and then a ``git commit``. Add any message you want to the commit.
#. Run ``git log`` and copy the commit ID of the commit you just did.
#. Navigate one level up to the ``published`` directory.
#. Do a ``git fetch origin master`` and then a ``git cherry-pick -x COMMIT_ID_YOU_COPIED``. This will basically publish the site.
#. In your browser, login to Studio. Then go to the site's dashboard, *Site Config*, and click on *Sync From Repository*. This will sync the database
   with the files you just imported. You can then tail the ``catalina.out`` until you see a line like the following: ``Done syncing database.``, which
   will indicate that the sync is complete. You still need to set all files as published, though, which is done in the last few steps.
#. Now in the filesystem again, navigate to the DBMS bin folder (``AUTHORING_INSTALL/bin/dbms/bin``) and run the following to login to the
   MariaDB (password is ``crafter``):

		.. code-block:: guess

			./mysql -u crafter -p --socket=/tmp/MariaDB4j.33306.sock

#. In the MySQL console enter ``use crafter;`` to switch to the crafter DB, and then run the following SQL update command to set all items to the published
   state:

		.. code-block:: sql

			UPDATE cstudio_objectstate SET state = 'EXISTING_UNEDITED_UNLOCKED', system_processing = 0 WHERE site = '{siteName}';

--------
Delivery
--------

If you have custom Engine configuration, specially if your Delivery is set up as multi tenant, you will need to do some slight changes to migrate your
configuration under ``apache-tomcat/shared/classes/crafter/engine/extension`` to a 3.0 compatible configuration:

#. In ``rendering-context.xml`` and ``services-context.xml``, change the import paths with ``classpath*:crafter/engine/mode/multi-tenant`` to
   ``classpath*:crafter/engine/mode/multi-tenant/mapped``.
#. If you have any custom ``site.xml`` and ``spring/application-context.xml`` under ``sites/{siteName}``, make sure they're renamed to
   ``site-config.xml`` and ``application-context.xml`` respectively (``spring`` folder should be removed).
