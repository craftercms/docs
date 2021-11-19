:is-up-to-date: True

.. _backup-and-recovery:

===================
Backup and Recovery
===================

Crafter CMS out of the box comes with a script to backup and restore your environment.  The script provided will backup your environment including indexes, repos, mongodb, etc.  You can then use your favorite backup tools for backing up the script-generated Crafter CMS environment backup file.

------
Backup
------
To backup your authoring or delivery environment, go to ``{Crafter-CMS-install-directory}/crafter-{env}/bin``, where ``{env}`` is the environment (either authoring or delivery) then run the following:

    .. code-block:: bash

       ./crafter.sh backup {filename}


where ``{filename}`` is optional.

Your backup file will be located in ``$CRAFTER_HOME/backups/`` by default (where ``$CRAFTER_HOME`` is ``{Crafter-CMS-install-directory}/crafter-{env}``).

You can change the backup file location by opening **{Crafter-CMS-install-directory}/{Crafter-ENV}/bin/crafter-setenv.sh** and change ``$CRAFTER_HOME/backups`` in the following line to your desired location:

   .. code-block:: bash

      export CRAFTER_BACKUPS_DIR=${CRAFTER_BACKUPS_DIR:="$CRAFTER_HOME/backups"}

   |

If a filename has been specified, your backup file will be named ``{filename}-{yyyy-MM-dd-hh-mm-ss}.zip`` where:

    - ``yyyy`` is the year, ex. 2017
    - ``MM`` is the month, from 01 to 12 ex. 07 for July
    - ``dd`` is the day, from 00 to 30 or 31 ex. 28
    - ``hh`` is the hour from 00 to 23
    - ``mm`` is the minutes from 00 to 59
    - ``ss`` is the seconds from 00 to 59

If no filename has been specified, the backup file will be named either ``crafter-authoring-backup-{yyyy-MM-dd-hh-mm-ss}.zip`` or ``crafter-delivery-backup-{yyyy-MM-dd-hh-mm-ss}.zip``, depending on which environment you are backing up.

--------
Recovery
--------
To restore your backup, make sure that Crafter CMS is not running.  To restore your authoring or delivery environment, go to ``{Crafter-CMS-install-directory}/crafter-{env}/bin``, where ``{env}`` is the environment (either authoring or delivery) then run the following:

    .. code-block:: bash

       ./crafter.sh restore {backup-file}


It will then prompt you with the following message:

   .. code-block:: text

       Warning, you're about to restore CrafterCMS from a backup, which will wipe the existing sites and associated database and replace everything with the restored data. If you care about the existing state of the system then stop this process, backup the system, and then attempt the restore. Are you sure you want to proceed? (yes/no)

Enter ``yes`` if you want to proceed with the restore, otherwise, enter ``no``.

If you're restoring the authoring environment, Studio will be started by the restore process.  If you're restoring the delivery environment, you will need to start the delivery environment after the restore process is done.

.. important::
    **When restoring the authoring environment, to avoid conflicts, please make sure you do one of the following for the delivery environment:**

        * Restore the delivery environment by following the steps listed above

        **OR**

        * Re-initialize the delivery environment by deleting the ``data`` folder under ``{Crafter-CMS-install-directory}/crafter-delivery/`` and running the init-site.sh script for all sites

