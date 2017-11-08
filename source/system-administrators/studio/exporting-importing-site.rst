.. _exporting_importing_site:

==========================
Exporting/Importing a Site
==========================

Exporting a site from one Studio and importing it into another one is very easy if you follow these steps:

#. In the Crafter installation with the Studio that has the site you want to export, from the command line or file explorer, navigate to
   ``data/repos/sites/{siteName}/sandbox``. Copy all the folders under there except ``.git``.
#. Navigate to the same path but now in the Crafter installation where you're importing the site, and delete all folders except the ``.git``
   folder.
#. Copy the folders you exported into the ``sandbox`` folder. From now on all operations are done in this installation.
#. Again in the ``sandbox``, execute a ``git add .`` and then a ``git commit``. Add any message you want to the commit.
#. In your browser, login to Studio and follow the steps on :ref:`sync_studio_database_with_repo`. With this, Studio should be able to
   recognize all the imported files.

In the case you want to publish your entire site, follow these optional steps:

#. In the ``sandbox`` folder, run ``git log`` and copy the commit ID of the commit you just did on the steps above.
#. Navigate one level up to the ``published`` directory.
#. Do a ``git fetch origin master`` and then a ``git cherry-pick -x COMMIT_ID_YOU_COPIED``. This will basically publish the site.
#. In your browser, login to Studio and follow the steps on :ref:`sync_studio_database_with_repo`.
#. Now in the filesystem again, navigate to the DBMS bin folder (``AUTHORING_INSTALL/bin/dbms/bin``) and run the following to login to the
   MariaDB (password is ``crafter``):

		.. code-block:: guess

			./mysql -u crafter -p --socket=/tmp/MariaDB4j.33306.sock

#. In the MySQL console enter ``use crafter;`` to switch to the crafter DB, and then run the following SQL update command to set all items to the published
   state:

		.. code-block:: sql

			UPDATE cstudio_objectstate SET state = 'EXISTING_UNEDITED_UNLOCKED', system_processing = 0 WHERE site = '{siteName}';
