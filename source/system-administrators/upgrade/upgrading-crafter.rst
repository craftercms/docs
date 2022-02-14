:is-up-to-date: True

.. index:: Upgrading CrafterCMS, Upgrading

=====================
Upgrading CrafterCMS
=====================

This section details how to upgrade CrafterCMS installed on a server.

CrafterCMS provides a couple of scripts for upgrading your installation.

* :ref:`Running the upgrade script (upgrade-target) from a new binary archive <upgrade-using-new-binary-archive>`
* :ref:`Running the upgrade script (start-upgrade) from your current installation <upgrade-using-current-install>`

The upgrade script allows you to do an upgrade, where your bin directory is upgraded, keeping only Tomcat's shared folder, Tomcat's conf folder, the Elasticsearch config, the Deployer config folder, and the crafter-setenv scripts.

When performing an upgrade, CrafterCMS is shut down, then the script asks if the user wants to backup the ``data`` folder.  It will then ask if the user wants to backup the ``bin`` folder, then perform the upgrade.  After  running  the upgrade script (either *upgrade-target*  or *start-upgrade*), run the ``post-upgrade`` script.  Finally, you can :ref:`start your CrafterCMS  <start-crafter-after-upgrade>` install again.

Depending on how recent the version you are upgrading from, there may be files that do not exist in the new release and the script will give the user the option to delete or keep the files.

   .. code-block:: bash
      :force:
      :caption: *Example option to delete or keep files when running upgrade-target script*

       ------------------------------------------------------------------------------------------------------------
        Config file [elasticsearch/config/elasticsearch.keystore] doesn't exist in the new release. Delete the file?
         - (N)o
         - (Y)es
         - (A)lways delete files absent from new release and don't ask again
         - (Q)uit the upgrade script (this will stop the upgrade at this point)
        ------------------------------------------------------------------------------------------------------------
        > Enter your choice:

   |

For config files that are different in the new release, the script gives you the option to overwrite the config files with their new versions.  When the script overwrites a file, it creates a backup version of the file with a timestamp and a bak file extension.

   .. code-block:: bash
      :force:
      :caption: *Example option to overwrite config files when running upgrade-target script*

      -------------------------------------------------------------------------------
      Config file [crafter-setenv.sh] is different in the new release. Please choose:
       - (D)iff file versions to see what changed
       - (E)dit the original file (with $EDITOR)
       - (K)eep the original file
       - (O)verwrite the file with the new version
       - (A)lways overwrite config files and don't ask again
       - (Q)uit the upgrade script (this will stop the upgrade at this point)
      -------------------------------------------------------------------------------
      > Enter your choice:

|

   .. note::
      When upgrading to CrafterCMS version 4.0.0 from a 3.1.x version, the environment variable `MARIADB_SOCKET_TIMEOUT <https://github.com/craftercms/craftercms/blob/develop/resources/env/authoring/bin/crafter-setenv.sh#L85>`__ in the ``{Crafter-CMS-install-directory}/bin/crafter-setenv.sh`` file of the CrafterCMS install you're running the upgrade script from may need to be increased depending on the size of the existing sites.

      Here's an example where we increased it to 3x the default value:

         .. code-block:: sh
            :caption: *{Crafter-CMS-install-directory}/bin/crafter-setenv.sh*

            export MARIADB_SOCKET_TIMEOUT=${MARIADB_SOCKET_TIMEOUT:="180000"}

         |

----------------
Before Upgrading
----------------

Before starting your upgrade:

#. **Review the** :ref:`release notes<release-notes>` **for the version you are upgrading to**. It contains specific information on the changes that have been made and how it may affect you when upgrading to that specific version.

#. **Backup CrafterCMS** just in case something goes wrong with the upgrade.

   When upgrading CrafterCMS installed on a server, the upgrade scripts performs an automated backup of CrafterCMS, but it's recommended not to rely on the automated backup, just in case.  See :ref:`backup-and-recovery` for details on how to perform the backup of CrafterCMS

#. **Manually shut down CrafterCMS**   For CrafterCMS installed on a server, the upgrade scripts shuts down CrafterCMS as one of the first steps, but it's also recommended not to rely on the automated shutting down just in case.

   To shutdown CrafterCMS, run the ``shutdown.sh`` script from the ``{Crafter-CMS-install-directory}/bin`` directory


.. _upgrade-using-new-binary-archive:

---------------------------------------------------------------
Upgrade by running the upgrade script from a new binary archive
---------------------------------------------------------------

Download the CrafterCMS version you'd like to upgrade to, and extract the files.

To upgrade your CrafterCMS, we will use the ``upgrade-target`` script.  The upgrade script  is located in ``{Crafter-CMS-install-directory}/bin/upgrade`` of your newly downloaded binary archive.  Here's the description for the script we are going to use:

    .. code-block:: bash

        usage: upgrade-target [options] <target-installation-path>
        -h,--help   Show usage information

|

where:
    ``<target-installation-path>`` is the path of your CrafterCMS install to be upgraded

    ``[options]`` is optional

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Steps for upgrading using the upgrade script from a new binary archive
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Here are the steps for upgrading your CrafterCMS install version from a new binary archive:

#. Download the CrafterCMS binary archive version you'd like to upgrade to
#. Extract the binary archive from the previous step and go into the ``bin/upgrade`` folder
#. Run the ``upgrade-target`` script
#. Change to the target folder and run the ``post-upgrade.sh`` script

Here's an example of running the upgrade script ``upgrade-target`` from  a new binary archive:

    .. code-block:: bash

        ./upgrade-target.sh /path/of/install/to/be/upgraded

|

Here's an example of running the ``post-upgrade.sh`` script:

    .. code-block:: bash

       ./post-upgrade.sh

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Example upgrading using the upgrade script from a new binary archive
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Let's take a look at an example of upgrading a CrafterCMS version 3.1.17 install (located in ``/Users/myuser/crafter``) to version 4.0.0 using the upgrade script from 4.0.0

After downloading and extracting CrafterCMS version 4.0.0 to ``/Users/myuser/crafter-4.0.0``, we are now ready to start upgrading by running the ``upgrade-target`` script from the 4.0.0 binary archive.

    .. code-block:: bash
        :force:
        :emphasize-lines: 2,24-25,34-42,52-62,74

        ➜  cd crafter-4.0.0/bin/upgrade
        ➜  ./upgrade-target.sh /Users/myuser/crafter
        hostname: illegal option -- i
        usage: hostname [-fs] [name-of-host]
        ========================================================================
        Shutting down Crafter
        ========================================================================

         ██████╗ ██████╗   █████╗  ███████╗ ████████╗ ███████╗ ██████╗      ██████╗ ███╗   ███╗ ███████╗
        ██╔════╝ ██╔══██╗ ██╔══██╗ ██╔════╝ ╚══██╔══╝ ██╔════╝ ██╔══██╗    ██╔════╝ ████╗ ████║ ██╔════╝
        ██║      ██████╔╝ ███████║ █████╗      ██║    █████╗   ██████╔╝    ██║      ██╔████╔██║ ███████╗
        ██║      ██╔══██╗ ██╔══██║ ██╔══╝      ██║    ██╔══╝   ██╔══██╗    ██║      ██║╚██╔╝██║ ╚════██║
        ╚██████╗ ██║  ██║ ██║  ██║ ██║         ██║    ███████╗ ██║  ██║    ╚██████╗ ██║ ╚═╝ ██║ ███████║
         ╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝         ╚═╝    ╚══════╝ ╚═╝  ╚═╝     ╚═════╝ ╚═╝     ╚═╝ ╚══════╝

        ------------------------------------------------------------------------
        Stopping Tomcat
        ------------------------------------------------------------------------
        Tomcat already shutdown or pid /Users/myuser/crafter-4.0.0/bin/apache-tomcat/tomcat.pid file not found
        ------------------------------------------------------------------------
        Stopping Deployer
        ------------------------------------------------------------------------
        Crafter Deployer already shutdown or pid /Users/myuser/crafter-3.1.17/bin/crafter-deployer/crafter-deployer.pid file not found
        > Backup the data folder before upgrade? [(Y)es/(N)o]:
        > Backup the bin folder before upgrade? [(Y)es/(N)o]:
        ========================================================================
        Upgrading Crafter 3.1.17 -> 4.0.0
        ========================================================================
        Synching files from /Users/myuser/crafter-3.1.17/bin to /Users/myuser/crafter/bin...
        [-] Deleting file migration/resources/site-template/config/studio/environment/environment-config.xml that doesn't exist in the new release
        [-] Deleting file migration/resources/site-template/config/studio/environment that doesn't exist in the new release
        [-] Deleting file elasticsearch/logs/gc.log.0.current that doesn't exist in the new release

        ------------------------------------------------------------------------------------------------------------
        Config file [elasticsearch/config/elasticsearch.keystore] doesn't exist in the new release. Delete the file?
         - (N)o
         - (Y)es
         - (A)lways delete files absent from new release and don't ask again
         - (Q)uit the upgrade script (this will stop the upgrade at this point)
        ------------------------------------------------------------------------------------------------------------
        > Enter your choice: y

        [-] Deleting file elasticsearch/config/elasticsearch.keystore that doesn't exist in the new release
        [-] Deleting file dbms/share/ukrainian/errmsg.sys that doesn't exist in the new release
        .
        .
        .
        [o] Overwriting file grapes/commons-beanutils/commons-beanutils/ivydata-1.9.3.properties with the new release version
        [o] Overwriting file craftercms-utils.jar with the new release version
        [o] Overwriting file crafter.sh with the new release version

        -------------------------------------------------------------------------------
        Config file [crafter-setenv.sh] is different in the new release. Please choose:
         - (D)iff file versions to see what changed
         - (E)dit the original file (with $EDITOR)
         - (K)eep the original file
         - (O)verwrite the file with the new version
         - (A)lways overwrite config files and don't ask again
         - (Q)uit the upgrade script (this will stop the upgrade at this point)
        -------------------------------------------------------------------------------
        > Enter your choice: o

        [o] Overwriting config file crafter-setenv.sh with the new release version (backup of the old one will be at crafter-setenv.sh.20210427113558.bak)
        [o] Overwriting file crafter-deployer/deployer.sh with the new release version
        [o] Overwriting file crafter-deployer/crafter-deployer.jar with the new release version

        .
        .
        .

        ========================================================================
        Upgrade completed
        ========================================================================
        !!! Please read the release notes and make any necessary manual changes, then run the post upgrade script: /Users/myuser/crafter/bin/upgrade/post-upgrade.sh !!!

    |

After the ``upgrade-target`` script is finished running, the next step is to run the ``post-upgrade`` script from our target install ``/Users/myuser/crafter/bin/upgrade``

   .. code-block:: bash
      :force:
      :caption: *Example output when running the post-upgrade script*
      :emphasize-lines: 2,11

      ➜ cd /Users/myuser/crafter/bin/upgrade
      ➜ ./post-upgrade.sh
      hostname: illegal option -- i
      usage: hostname [-fs] [name-of-host]
      ========================================================================
      Post-upgrade 3.1.17 -> 4.0.0
      ========================================================================
      ========================================================================
      Post-upgrade completed
      ========================================================================
      !!! Crafter has not been started, please run /Users/myuser/crafter/bin/startup.sh to start it !!!

   |

You may now :ref:`start CrafterCMS <start-crafter-after-upgrade>` again

..  _upgrade-using-current-install:

---------------------------------------------------------------
Upgrade by running the upgrade script from your current install
---------------------------------------------------------------

CrafterCMS version 3.1.x, excluding version 3.1.0,  contain the upgrade scripts required to upgrade your install.  Here's the description for the script we are going to use:

    .. code-block:: bash

        usage: start-upgrade [options]
        -h,--help                 Show usage information
        -p,--bundle-path <path>   The path of the Crafter binary archive in the
                                  filesystem. If you specify this path the URL
                                  and version parameter will be ignored
        -u,--bundle-url <url>     The URL of the Crafter binary archive to download. If
                                  you specify this URL the version parameter will
                                  be ignored
        -v,--version <version>    The community version of the Crafter binary archive to
                                  download

|

where:
   ``[options]`` is optional.

The ``start-upgrade`` script downloads the CrafterCMS version that you specify that you would like to upgrade to, then creates a script ``upgrade`` in ``{Crafter-CMS-install-directory}/temp/upgrade`` that performs the upgrade.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Steps for upgrading using the upgrade script from your current install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To upgrade your current CrafterCMS install:

#. Go to your ``bin/upgrade`` folder
#. Run the ``start-upgrade`` script.  The ``start-upgrade`` script downloads the CrafterCMS binary archive version you would like to upgrade to.  This will create a script ``upgrade.sh`` in ``{Crafter-CMS-install-directory}/temp/upgrade``.
#. Go to ``{Crafter-CMS-install-directory}/temp/upgrade`` and run the ``upgrade.sh`` script
#. Go to ``{Crafter-CMS-install-directory}/bin/upgrade`` and run the ``post-upgrade.sh`` script

      .. note::
         CrafterCMS 4.0.0 requires Java JDK 11.  When upgrading to CrafterCMS version 4.0.0 from a 3.1.x version, remember to switch your JAVA_HOME environment variable to point to Java JDK 11 before running the ``post-upgrade`` script

#. Delete the``{Crafter-CMS-install-directory}/temp/upgrade`` once your upgrade has been completed successfully

Here's an example to perform an upgrade of your current install to a certain version

    .. code-block:: bash

        $ ./start-upgrade.sh -v 4.0.0
        $ cd ../../temp/upgrade
        $ ./upgrade.sh


|

Here's an example to perform an upgrade of your current install using a binary archive  url

    .. code-block:: bash

        $ ./start-upgrade.sh -u https://download/url/to/binary/archive
        $ cd ../../temp/upgrade
        $ ./upgrade.sh

|

Here's an example to perform an upgrade of your current install using the path where your binary archive was downloaded

    .. code-block:: bash

        $ ./start-upgrade.sh -p /path/to/binary/archive
        $ cd ../../temp/upgrade
        $ ./upgrade.sh

|

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Example running the upgrade script from your current install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Let's take a look at an example of upgrading a CrafterCMS version 3.1.17 install (located in ``/Users/myuser/crafter``) to version 4.0.0 using the upgrade script in 3.1.17

We'll perform an upgrade of 3.1.17 (current install) to 4.0.0

   .. code-block:: bash
      :emphasize-lines: 1,18
      :caption: *Example output running the start-upgrade script*

      ➜  ./start-upgrade.sh -v 4.0.0
      ============================================================
      Downloading Bundle
      ============================================================
      Downloading bundle @ https://downloads.craftercms.org/4.0.0/crafter-cms-authoring-4.0.0.tar.gz...
      Downloading md5sum @ https://downloads.craftercms.org/4.0.0/crafter-cms-authoring-4.0.0.tar.gz.md5...
      Doing checksum...
      ============================================================
      Extracting Bundle
      ============================================================
      Extracting bundle to folder /Users/myuser/crafter/temp/upgrade
      ============================================================
      Setting up upgrade script
      ============================================================
      ========================================================================
      Start upgrade completed
      ========================================================================
      !!! Please execute /Users/myuser/crafter/temp/upgrade/upgrade.sh to continue with upgrade !!!

   |

The next step is to run the ``upgrade`` script under the ``temp/upgrade`` folder

   .. code-block:: bash
      :emphasize-lines: 2,24-25,34-42,48-57,67
      :caption: *Example running the upgrade script from the temp directory*

      ➜ cd ../../temp/upgrade
      ➜ ./upgrade.sh
      hostname: illegal option -- i
      usage: hostname [-fs] [name-of-host]
      ========================================================================
      Shutting down Crafter
      ========================================================================

       ██████╗ ██████╗   █████╗  ███████╗ ████████╗ ███████╗ ██████╗      ██████╗ ███╗   ███╗ ███████╗
      ██╔════╝ ██╔══██╗ ██╔══██╗ ██╔════╝ ╚══██╔══╝ ██╔════╝ ██╔══██╗    ██╔════╝ ████╗ ████║ ██╔════╝
      ██║      ██████╔╝ ███████║ █████╗      ██║    █████╗   ██████╔╝    ██║      ██╔████╔██║ ███████╗
      ██║      ██╔══██╗ ██╔══██║ ██╔══╝      ██║    ██╔══╝   ██╔══██╗    ██║      ██║╚██╔╝██║ ╚════██║
      ╚██████╗ ██║  ██║ ██║  ██║ ██║         ██║    ███████╗ ██║  ██║    ╚██████╗ ██║ ╚═╝ ██║ ███████║
       ╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝         ╚═╝    ╚══════╝ ╚═╝  ╚═╝     ╚═════╝ ╚═╝     ╚═╝ ╚══════╝

      ------------------------------------------------------------------------
      Stopping Tomcat
      ------------------------------------------------------------------------
      Tomcat already shutdown or pid /Users/myuser/crafter/temp/upgrade/crafter/bin/apache-tomcat/tomcat.pid file not found
      ------------------------------------------------------------------------
      Stopping Deployer
      ------------------------------------------------------------------------
      Crafter Deployer already shutdown or pid /Users/myuser/crafter/temp/upgrade/crafter/bin/crafter-deployer/crafter-deployer.pid file not found
      > Backup the data folder before upgrade? [(Y)es/(N)o]:
      > Backup the bin folder before upgrade? [(Y)es/(N)o]:
      ========================================================================
      Upgrading Crafter 3.1.17 -> 4.0.0
      ========================================================================
      Synching files from /Users/myuser/crafter/temp/upgrade/crafter/bin to /Users/myuser/crafter/bin...
      [-] Deleting file migration/resources/site-template/config/studio/environment/environment-config.xml that doesn't exist in the new release
      [-] Deleting file migration/resources/site-template/config/studio/environment that doesn't exist in the new release
      [-] Deleting file elasticsearch/logs/gc.log.0.current that doesn't exist in the new release

      ------------------------------------------------------------------------------------------------------------
      Config file [elasticsearch/config/elasticsearch.keystore] doesn't exist in the new release. Delete the file?
       - (N)o
       - (Y)es
       - (A)lways delete files absent from new release and don't ask again
       - (Q)uit the upgrade script (this will stop the upgrade at this point)
      ------------------------------------------------------------------------------------------------------------
      > Enter your choice: y

      [-] Deleting file elasticsearch/config/elasticsearch.keystore that doesn't exist in the new release
      [-] Deleting file dbms/share/ukrainian/errmsg.sys that doesn't exist in the new release
      .
      .
      .
      -------------------------------------------------------------------------------
      Config file [crafter-setenv.sh] is different in the new release. Please choose:
       - (D)iff file versions to see what changed
       - (E)dit the original file (with $EDITOR)
       - (K)eep the original file
       - (O)verwrite the file with the new version
       - (A)lways overwrite config files and don't ask again
       - (Q)uit the upgrade script (this will stop the upgrade at this point)
      -------------------------------------------------------------------------------
      > Enter your choice: o
      [o] Overwriting config file crafter-setenv.sh with the new release version (backup of the old one will be at crafter-setenv.sh.20210428035057.bak)
      [o] Overwriting file crafter-deployer/deployer.sh with the new release version
      [o] Overwriting file crafter-deployer/crafter-deployer.jar with the new release version
      .
      .
      .
      ========================================================================
      Upgrade completed
      ========================================================================
      !!! Please read the release notes and make any necessary manual changes, then run the post upgrade script: /Users/myuser/crafter/bin/upgrade/post-upgrade.sh !!!

      If the upgrade was completed successfully, please delete the upgrade temp/upgrade directory (rm -rf /Users/myuser/crafter/temp/upgrade)

   |

Finally we'll  run the ``post-upgrade`` script.  Remember to switch your JAVA_HOME environment variable to point to Java JDK 11 before running the ``post-upgrade`` script if you're upgrading from a 3.1.x release.

   .. code-block:: bash
      :emphasize-lines: 2,11

      ➜ cd ../../bin/upgrade
      ➜ ./post-upgrade.sh
      hostname: illegal option -- i
      usage: hostname [-fs] [name-of-host]
      ========================================================================
      Post-upgrade 3.1.17 -> 4.0.0
      ========================================================================
      ========================================================================
      Post-upgrade completed
      ========================================================================
      !!! Crafter has not been started, please run /Users/myuser/crafter/bin/startup.sh to start it !!!

   |

You may now :ref:`start CrafterCMS <start-crafter-after-upgrade>` again

.. _start-crafter-after-upgrade:

-----------------
Start CrafterCMS
-----------------

After performing the upgrade steps listed above (either by running the upgrade script from a new binary archive or, by running the upgrade script from your current install) you may now start CrafterCMS by running the ``startup.sh`` script.

   .. code-block:: bash

      ➜ ./startup.sh
      hostname: illegal option -- i
      usage: hostname [-fs] [name-of-host]

       ██████╗ ██████╗   █████╗  ███████╗ ████████╗ ███████╗ ██████╗      ██████╗ ███╗   ███╗ ███████╗
      ██╔════╝ ██╔══██╗ ██╔══██╗ ██╔════╝ ╚══██╔══╝ ██╔════╝ ██╔══██╗    ██╔════╝ ████╗ ████║ ██╔════╝
      ██║      ██████╔╝ ███████║ █████╗      ██║    █████╗   ██████╔╝    ██║      ██╔████╔██║ ███████╗
      ██║      ██╔══██╗ ██╔══██║ ██╔══╝      ██║    ██╔══╝   ██╔══██╗    ██║      ██║╚██╔╝██║ ╚════██║
      ╚██████╗ ██║  ██║ ██║  ██║ ██║         ██║    ███████╗ ██║  ██║    ╚██████╗ ██║ ╚═╝ ██║ ███████║
       ╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝         ╚═╝    ╚══════╝ ╚═╝  ╚═╝     ╚═════╝ ╚═╝     ╚═╝ ╚══════╝

      ------------------------------------------------------------------------
      Starting Deployer
      ------------------------------------------------------------------------
      ------------------------------------------------------------------------
      Starting Elasticsearch
      ------------------------------------------------------------------------
      ------------------------------------------------------------------------
      Starting Tomcat
      ------------------------------------------------------------------------
      Using CATALINA_BASE:   /Users/myuser/crafter/bin/apache-tomcat
      Using CATALINA_HOME:   /Users/myuser/crafter/bin/apache-tomcat
      Using CATALINA_TMPDIR: /Users/myuser/crafter/temp/tomcat
      Using JRE_HOME:        /Users/myuser/.jenv/versions/11
      Using CLASSPATH:       /Users/myuser/crafter/bin/apache-tomcat/bin/bootstrap.jar:/Users/myuser/crafter/bin/apache-tomcat/bin/tomcat-juli.jar
      Using CATALINA_PID:    /Users/myuser/crafter/bin/apache-tomcat/tomcat.pid
      Tomcat started.

      Log files live here: "/Users/myuser/crafter/logs".
      To follow the main tomcat log, you can "tail -f /Users/myuser/crafter/logs/tomcat/catalina.out"

   |

Once you start up CrafterCMS, in the logs, notice the lines mentioning ``Checking upgrades for the...`` like below:

   .. code-block:: text

      [INFO] 2020-10-05T13:53:23,033 [localhost-startStop-1] [upgrade.DefaultUpgradeManagerImpl] | Checking upgrades for the blueprints
      ...
      [INFO] 2020-10-05T13:53:25,509 [localhost-startStop-1] [upgrade.DefaultUpgradeManagerImpl] | Checking upgrades for the database and configuration
      [INFO] 2020-10-05T13:53:25,665 [localhost-startStop-1] [upgrade.DefaultUpgradeManagerImpl] | Checking upgrades for site mysite
      [INFO] 2020-10-05T13:53:25,719 [localhost-startStop-1] [upgrade.DefaultUpgradeManagerImpl] | Checking upgrades for configuration in site mysite
      ...

   |

CrafterCMS has an upgrade manager that automatically upgrades the system, some configuration files and blueprints on startup.  It uses a pipeline of handlers to upgrade various subsystems.

Note that the Elasticsearch index will be automatically updated by the CrafterCMS upgrade manager whenever the Elasticsearch index settings are updated, for example, a new field has been added for a release.
The updated index containing the new settings will be named the current index version name incremented by 1, e.g. let’s say the current index is ``mysite-authoring_v1``, after the upgrade, the new index will now be ``mysite-authoring_v2``.

To learn more about the upgrade manager and how to add upgrade scripts for your customizations, see :ref:`here <add-to-upgrade-scripts>`
