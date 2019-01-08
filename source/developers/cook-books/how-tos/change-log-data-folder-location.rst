.. index:: Changing the Data and Logs Folder Location, Change Data Folder Location, Change Log Folder Location

.. _change-log-data-folder-location:

==========================================
Changing the Data and Logs Folder Location
==========================================

The data folder and logs folder is by default located in **{Crafter-CMS-install-directory}/{Crafter-ENV}/data** and **{Crafter-CMS-install-directory}/{Crafter-ENV}/logs**.  To change the location of the data and logs folder,

**Linux/Unix:**

    Open the file **{Crafter-CMS-install-directory}/{Crafter-ENV}/crafter-setenv.sh**

    Change the following lines to your desired location for your data ("$CRAFTER_ROOT/data") and logs ("$CRAFTER_ROOT/logs") folder:

    .. code-block:: bash

        # Locations variables
        export CRAFTER_LOGS_DIR=${CRAFTER_LOGS_DIR:="$CRAFTER_ROOT/logs"}
        export CRAFTER_DATA_DIR=${CRAFTER_DATA_DIR:="$CRAFTER_ROOT/data"}


**Windows:**

    Open the file **{Crafter-CMS-install-directory}/{Crafter-ENV}/crafter-setenv.bat**

    Change the following lines to your desired location for your data ("%CRAFTER_ROOT%\data") and logs ("%CRAFTER_ROOT%\logs") folder:

    .. code-block:: bat

        REM Locations variables
        IF NOT DEFINED CRAFTER_LOGS_DIR SET CRAFTER_LOGS_DIR="%CRAFTER_ROOT%\logs"
        IF NOT DEFINED CRAFTER_DATA_DIR SET CRAFTER_DATA_DIR="%CRAFTER_ROOT%\data"
