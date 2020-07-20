:is-up-to-date: True

:orphan:

.. index:: Securing Your Crafter CMS Install, Change Defaults in Crafter CMS

.. _securing-your-crafter-cms-install:

=================================
Securing Your Crafter CMS Install
=================================

Crafter CMS installations are pre-configured with default passwords, tokens, keys, etc.  These default values are intended for initial testing, installation and configuration.  We recommend changing the default values for the following parameters to secure your Crafter CMS installation:

* Replace default values for configuration files encryption key and salt

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- Encryption variables --------------------
        # These variables are used to encrypt and decrypt values inside the configuration files.
        export CRAFTER_ENCRYPTION_KEY=${CRAFTER_ENCRYPTION_KEY:="default_encryption_key"}
        export CRAFTER_ENCRYPTION_SALT=${CRAFTER_ENCRYPTION_SALT:="default_encryption_salt"}

     |

* Replace the default values for database values encryption key and salt before starting Crafter CMS for the very first time.  Remember that these values should **not** be changed after Crafter CMS has been started.

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # These variables are used by Studio to encrypt and decrypt values in the database.
        export CRAFTER_SYSTEM_ENCRYPTION_KEY=${CRAFTER_SYSTEM_ENCRYPTION_KEY:="s0meDefaultKey"}
        export CRAFTER_SYSTEM_ENCRYPTION_SALT=${CRAFTER_SYSTEM_ENCRYPTION_SALT:="s0meDefaultSalt"}

     |

* Replace default values for the management tokens used by Studio, Engine, Deployer, Search, Profile and Social

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- Management tokens ----------------
        # Please update this per installation and provide these tokens to the status monitors.
        export STUDIO_MANAGEMENT_TOKEN=${STUDIO_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export ENGINE_MANAGEMENT_TOKEN=${ENGINE_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export DEPLOYER_MANAGEMENT_TOKEN=${DEPLOYER_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export SEARCH_MANAGEMENT_TOKEN=${SEARCH_MANAGEMENT_TOKEN:="defaultManagementToken"}
        export PROFILE_MANAGEMENT_TOKEN=${PROFILE_MANAGEMENT_TOKEN:="defaultManagementToken"}/*
        export SOCIAL_MANAGEMENT_TOKEN=${SOCIAL_MANAGEMENT_TOKEN:="defaultManagementToken"}

     |

* Replace default values for the DB root password and the DB ``crafter`` user password before starting Crafter CMS for the very first time.

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- MariaDB variables --------------------
        ...
        export MARIADB_ROOT_PASSWD=${MARIADB_ROOT_PASSWD:="root"}
        ...
        export MARIADB_PASSWD=${MARIADB_PASSWD:="crafter"}

     |

  To change the values after the initial start of Crafter CMS, do the following:

  #. Manually change the DB passwords

     First, login to the database as root.  From the command line in the server, go to ``CRAFTER_HOME/bin/dbms/bin`` and run the following command:

       .. code-block:: bash

          /mysql -u root -p --socket=/tmp/MariaDB4j.33306.sock

       |

     To change the ``root`` password, run the following command:

       .. code-block:: bash

          ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';

       |

     Remember to replace ``MyNewPass`` with the actual password you want to set, and if you are connecting to the DB from another host, change ``localhost`` with the remote hostname or IP address.

     To change the ``crafter`` user password, run the following command, similar to changing the root password.

       .. code-block:: bash

          ALTER USER 'crafter'@'localhost' IDENTIFIED BY 'MyNewCrafterPass';

       |

     Again, remember to replace ``MyNewCrafterPass`` with the actual password you want to set, and if you are connecting to the DB from another host, change ``localhost`` with the remote hostname or IP address.

  #. Stop Studio
  #. Update the values in the configuration file ``crafter-setenv.sh`` with the new password used in the previous step

       .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- MariaDB variables --------------------
        ...
        export MARIADB_ROOT_PASSWD=${MARIADB_ROOT_PASSWD:="MyNewPass"}
        ...
        export MARIADB_PASSWD=${MARIADB_PASSWD:="MyNewCrafterPass"}

     |

  #. Restart Studio

* Change the default Studio ``admin`` user password either by randomizing the ``admin`` password for a fresh install of Crafter Studio or by changing the password after logging in as user ``admin``.  For more information on randomizing the admin password for a fresh install, see :ref:`randomize-admin-password`.  For more information on changing user passwords, see :ref:`user-passwords`
