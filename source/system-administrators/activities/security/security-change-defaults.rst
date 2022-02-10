:is-up-to-date: True

:orphan:

.. index:: Securing Your CrafterCMS Install, Change Defaults in CrafterCMS

.. _securing-your-crafter-cms-install:

================================
Securing Your CrafterCMS Install
================================

CrafterCMS installations are pre-configured with default passwords, tokens, keys, etc.  These default values are intended for initial testing, installation and configuration.  We recommend changing the default values for the following parameters to secure your CrafterCMS installation:

* Replace default values for configuration files encryption key and salt

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- Encryption variables --------------------
        # These variables are used to encrypt and decrypt values inside the configuration files.
        export CRAFTER_ENCRYPTION_KEY=${CRAFTER_ENCRYPTION_KEY:="default_encryption_key"}
        export CRAFTER_ENCRYPTION_SALT=${CRAFTER_ENCRYPTION_SALT:="default_encryption_salt"}

     |

* Replace the default values for database values encryption key and salt. Remember that these values should **not** be changed after CrafterCMS has been started if the installation has one or more of the following:

  * Remote repository passwords and keys
  * Cluster passwords and keys

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

* Replace default values for the DB root password, the DB ``crafter`` user password and the DB replication user password (if running in a primary/replica cluster) before starting CrafterCMS for the very first time.

     .. code-block:: sh
        :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

        # -------------------- MariaDB variables --------------------
        ...
        export MARIADB_ROOT_PASSWD=${MARIADB_ROOT_PASSWD:="root"}
        ...
        export MARIADB_PASSWD=${MARIADB_PASSWD:="crafter"}
        ...
        export MARIADB_REPLICATION_PASSWD=${MARIADB_REPLICATION_PASSWD:="crafter_replication"}

     |

  To change the values after the initial start of CrafterCMS, do the following:

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

     To change the ``crafter_replication`` replication user password, run the following command, similar to changing the root password.

       .. code-block:: bash

          ALTER USER 'crafter_replication'@'localhost' IDENTIFIED BY 'MyNewReplicationPass';

       |

     Again, remember to replace ``MyNewReplicationPass`` with the actual password you want to set, and if you are connecting to the DB from another host, change ``localhost`` with the remote hostname or IP address.

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

* Set session cookies as ``HTTP Only`` and ``Secure`` by setting the flags to ``true`` in your tomcat ``web.xml`` file

  .. code-block:: xml
     :caption: *CRAFTER_HOME/bin/apache-tomcat/conf/web.xml*
     :emphasize-lines: 3-6
     :linenos:

     <session-config>
       <session-timeout>1</session-timeout>
       <cookie-config>
         <http-only>true</http-only>
         <secure>true</secure>
       </cookie-config>
     </session-config>

* Replace default values for all the variables used to control the access tokens used for Studio's API

  .. code-block:: sh
     :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*
     :linenos:
     :emphasize-lines: 16-19

     # -------------------- Studio's access tokens ---------------------
     # *************************************************************************************
     # ************************* IMPORTANT *************************************************
     # The following variables are used to control the access tokens used for Studio's API,
     # please replace all default values to properly secure your installation
     # *************************************************************************************

     # Issuer for the generated access tokens
     export STUDIO_TOKEN_ISSUER=${STUDIO_TOKEN_ISSUER:="Crafter Studio"}
     # List of accepted issuers for validation of access tokens (separated by commas)
     export STUDIO_TOKEN_VALID_ISSUERS=${STUDIO_TOKEN_VALID_ISSUERS:="Crafter Studio"}
     # The audience for generation and validation of access tokens (if empty the instance id will be used)
     export STUDIO_TOKEN_AUDIENCE=${STUDIO_TOKEN_AUDIENCE:=""}
     # Time in minutes for the expiration of the access tokens
     export STUDIO_TOKEN_TIMEOUT=${STUDIO_TOKEN_TIMEOUT:=5}
     # Password for signing the access tokens (needs to be equal or greater than 512 bits in length)
     export STUDIO_TOKEN_SIGN_PASSWORD=${STUDIO_TOKEN_SIGN_PASSWORD:="s0meDefaultTokenSignPasswd"}
     # Password for encrypting the access tokens
     export STUDIO_TOKEN_ENCRYPT_PASSWORD=${STUDIO_TOKEN_ENCRYPT_PASSWORD:="s0meDefaultTokenEncryptPasswd"}
     # Name of the cookie to store the refresh token
     export STUDIO_REFRESH_TOKEN_NAME=${STUDIO_REFRESH_TOKEN_NAME:="refresh_token"}
     # Time in seconds for the expiration of the refresh token cookie
     export STUDIO_REFRESH_TOKEN_MAX_AGE=${STUDIO_REFRESH_TOKEN_MAX_AGE:=300}
     # Indicates if the refresh token cookie should be secure (should be true for production environments behind HTTPS)
     export STUDIO_REFRESH_TOKEN_SECURE=${STUDIO_REFRESH_TOKEN_SECURE:="false"}
