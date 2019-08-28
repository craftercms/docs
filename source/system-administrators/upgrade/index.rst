:is-up-to-date: True

.. index:: Upgrading Crafter CMS; Upgrading

.. _upgrading-craftercms:

=====================
Upgrading Crafter CMS
=====================

This section details the steps required to upgrade your Crafter CMS install.


.. WARNING::
    This guide assumes that you're trying to upgrade a site from a stock 3.0.x Studio and with some slight Studio configuration changes. If your site configuration is heavily customized or your Studio is a custom overlay you might need additional work that is not specified here.

|

----------------
Before Upgrading
----------------

Before starting your upgrade, please review the :ref:`release notes<release-notes>` for the version you are upgrading to, which contains specific information on the changes that have been made and how it may affect you when upgrading to that specific version.

--------------------------------------------
Upgrading Crafter CMS installed using gradle
--------------------------------------------

If you installed Crafter CMS using gradle, you can upgrade your install by following the steps below:

#. Stop your Crafter CMS
     `./gradlew stop`
#. Perform a ``selfupdate`` to check if there has been updates to the Crafter CMS project
     `./gradlew selfupdate`
#. Upgrade the installed Tomcat version, Solr scripts, etc., update all the Crafter CMS components then build and deploy
     `./gradlew upgrade`
#. Restart your Crafter CMS
     `./gradlew start`

---------------------------------------------
Upgrading Crafter CMS installed from a bundle
---------------------------------------------

If you installed Crafter CMS from a bundle, Crafter CMS provides a couple of scripts for upgrading your installation.  The upgrade script allows you  do an upgrade, where your bin directory is upgraded, keeping only Tomcat's shared folder, Tomcat's conf folder, the Crafter Solr config, the Deployer config folder, and the crafter-setenv scripts.

Running the upgrade script from a new bundle
--------------------------------------------

Download the Crafter CMS version you'd like to upgrade to, and extract the files.  To upgrade your Crafter CMS bundle, we will use the ``upgrade-target`` script.  The upgrade script  is located in ``{Crafter-CMS-install-directory}/bin/upgrade`` of your newly downloaded bundle.  Here's the description for the script we are going to use:

    .. code-block:: bash

        usage: upgrade-target [options] <target-installation-path>
        -h,--help   Show usage information

|

where:
    ``<target-installation-path>`` is the path of your Crafter CMS install to be upgraded

    ``[options]`` is optional

Here are the steps for upgrading your Crafter CMS install version from a new bundle:

#. Download the Crafter CMS bundle version you'd like to upgrade to
#. Extract the bundle from the previous step and go into the ``bin/upgrade`` folder
#. Run the ``upgrade-target`` script
#. Run the ``post-upgrade.sh`` script

Here's an example to perform an upgrade of your current installation:

    .. code-block:: bash

        $ ./upgrade-target.sh /path/of/install/to/be/upgraded

|

When performing an upgrade, the script creates a backup of your ``data`` folder then shuts down Crafter CMS.  It will then backup your ``bin`` folder, then perform the upgrade.  Finally, it will start your Crafter CMS install again.

Depending on how recent the version you are upgrading from, there may be files that does not exist in the new release and the script will give you options on what to do with the files.

After the ``upgrade-target`` script is done with the upgrade, you will need to run the ``post-upgrade.sh`` script,

Below is a sample output when you start the upgrade-target script:

    .. code-block:: guess

        > Backup the data folder before upgrade? [(Y)es/(N)o]:

        > Backup the bin folder before upgrade? [(Y)es/(N)o]:

        --------------------------------------------------------------------------------------------
        Config file [upgrade/upgrade.sh.template] doesn't exist in the new release. Delete the file?
        - (N)o
        - (Y)es
        - (A)lways delete files absent from new release and don't ask again
        - (Q)uit the upgrade script (this will stop the upgrade at this point)
        --------------------------------------------------------------------------------------------
        > Enter your choice:

        .
        .
        .

        ========================================================================
        Upgrade completed
        ========================================================================
        !!! Please read the release notes and make any necessary manual changes, then run the post upgrade script: /Users/myuser/crafter-3-0-18/bin/upgrade/post-upgrade.sh !!!

|

Upgrading Crafter CMS bundle versions prior to 3.0.15
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter CMS installs prior to 3.0.15 does not contain the upgrade scripts required to upgrade and will need to use the ``upgrade-target`` script from the new bundle to upgrade your bundle install.  Please follow the steps above to upgrade your current Crafter CMS install.

|
|

Running the upgrade script from your current install
----------------------------------------------------

Crafter CMS version 3.0.15 and up contain the upgrade scripts required to upgrade your install.  Here's the description for the script we are going to use:

    .. code-block:: bash

        usage: start-upgrade [options]
        -h,--help                 Show usage information
        -p,--bundle-path <path>   The path of the Crafter bundle in the
                                  filesystem. If you specify this path the URL
                                  and version parameter will be ignored
        -u,--bundle-url <url>     The URL of the Crafter bundle to download. If
                                  you specify this URL the version parameter will
                                  be ignored
        -v,--version <version>    The community version of the Crafter bundle to
                                  download

|

where:
   ``[options]`` is optional.

The ``start-upgrade`` script downloads the Crafter CMS version that you specify that you would like to upgrade to, then creates a script ``upgrade`` script in ``{Crafter-CMS-install-directory}/temp/upgrade`` that performs the upgrade.


To upgrade your current Crafter CMS install:

#. Go to your ``bin/upgrade`` folder
#. Run the ``start-upgrade`` script.  The ``start-upgrade`` script downloads the Crafter CMS bundle version you would like to upgrade to.  This will create a script ``upgrade.sh`` in ``{Crafter-CMS-install-directory}/temp/upgrade``.
#. Go to ``{Crafter-CMS-install-directory}/temp/upgrade`` and run the ``upgrade.sh`` script
#. Go to ``{Crafter-CMS-install-directory}/bin/upgrade`` and run the ``post-upgrade.sh`` script

Here's an example to perform an upgrade of your current install to a certain version

    .. code-block:: bash

        $ ./start-upgrade.sh -v 3.1.0
        $ cd ../../temp/upgrade
        $ ./upgrade.sh


|

Here's an example to perform an upgrade of your current install using a bundle url

    .. code-block:: bash

        $ ./start-upgrade.sh -u https://download/url/to/bundle
        $ cd ../../temp/upgrade
        $ ./upgrade.sh

|

Here's an example to perform an upgrade of your current install using the path where your bundle was downloaded

    .. code-block:: bash

        $ ./start-upgrade.sh -p /path/to/bundle
        $ cd ../../temp/upgrade
        $ ./upgrade.sh

|
