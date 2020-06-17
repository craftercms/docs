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
        export CRAFTER_ENCRYPTION_KEY=${CRAFTER_ENCRYPTION_KEY:="default_encryption_key"}
        export CRAFTER_ENCRYPTION_SALT=${CRAFTER_ENCRYPTION_SALT:="default_encryption_salt"}

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

* Replace default values for the DB root password and the DB ``crafter`` user password before starting Crafter CMS.  Remember that these values should **not** be changed after the DB has been installed

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- MariaDB variables --------------------
        ...
        export MARIADB_ROOT_PASSWD=${MARIADB_ROOT_PASSWD:="root"}
        ...
        export MARIADB_PASSWD=${MARIADB_PASSWD:="crafter"}

     |

* Replace the default values for the cipher key and salt before starting Crafter CMS.  Remember that these values should **not** be changed after Crafter CMS has been started.

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

        # Salt for encrypting
        # studio.security.cipher.salt: s0meDefaultSalt
        # Key for encrypting
        # studio.security.cipher.key: s0meDefaultKey

     |

* Change the default Studio ``admin`` user password either by randomizing the ``admin`` password for a fresh install of Crafter Studio or by changing the password after logging in as user ``admin``.  For more information on randomizing the admin password for a fresh install, see :ref:`randomize-admin-password`.  For more information on changing user passwords, see :ref:`user-passwords`
