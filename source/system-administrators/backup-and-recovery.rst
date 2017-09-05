.. _backup-and-recovery:

===================
Backup and Recovery
===================

Crafter CMS out of the box comes with a script to backup and restore your environment.  When backing up, there is no need to stop Crafter CMS.  The script provided will backup your environment including indexes, repos, mongodb, etc.  You can then use your favorite backup tools for backing up the script generated Crafter CMS environment backup file.

------
Backup
------
To backup your authoring or delivery environment, go to ``{Crafter-CMS-install-directory}/crafter-{env}/bin``, where ``{env}`` is the environment (either authoring or delivery) then run the following:

    * Unix/Linux systems:

      .. code-block:: bash

          ./crafter.sh backup {filename}

    * Windows:

      .. code-block:: bat

          ./crafter.bat backup {filename}


where ``{filename}`` is optional.

Your backup file will be located in ``{Crafter-CMS-install-directory}/crafter-{env}-env/``. If a filename has been specified, your backup file will be named ``{filename}-{yyyy-MM-dd-hh-mm-ss}.zip`` where:
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
To restore your backup, make sure that Crafter CMS is not running.  To restore your authoring or delivery environment, go to ``{Crafter-CMS-install-directory}/crafter-{env}-env/bin``, where ``{env}`` is the environment (either auth or delivery) then run the following:

    * Unix/Linux systems:

      .. code-block:: bash

          ./crafter.sh restore {backup-file}

    * Windows:

      .. code-block:: bat

          ./crafter.bat restore {backup-file}

