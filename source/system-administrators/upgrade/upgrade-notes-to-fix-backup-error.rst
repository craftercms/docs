:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-notes-to-fix-backup-error:

=====================================
Upgrade Notes for Fixing Backup Error
=====================================

After upgrading to Crafter CMS 3.1.7 or later versions, when using the backup script, the ``crafter`` embedded database user is not backed up and causes an error when starting up Crafter Studio after running the restore script.  To get the authoring install to work, the ``crafter`` embedded database user needs to be manually added to the database after running the restore script. (Instructions on using the backup and restore scripts are available here: :ref:`backup-and-recovery`)

After running the restore script, when the authoring install is started, you may see the following error in the tomcat logs:

   .. code-block:: bash

      [ERROR] 2020-06-03T14:11:41,650 [localhost-startStop-1] [context.ContextLoader] | Context initialization failed
      ...
      Caused by: org.mariadb.jdbc.internal.util.dao.QueryException: Could not connect: Access denied for user 'crafter'@'localhost' (using password: YES)

   |

To get the authoring install working, do the following:

#. Start the database
#. Login to the database
#. Add user ``crafter``

After performing the steps above, you may now startup the authoring install.

Let's begin adding the ``crafter`` user after backing up and running the restore script.

#. The first thing that needs to be done is to start the database.  To start the database, run the following:

      .. code-block:: bash

         CRAFTER_HOME/bin/dbms/bin/mysqld --no-defaults --console --max_allowed_packet=64M --basedir=CRAFTER_HOME/bin/dbms --datadir=CRAFTER_HOME/data/db --port=33306 --socket=/private/tmp/MariaDB4j.33306.sock

      |

   This is the output when running the command above:

      .. code-block:: bash

         ➜  bin CRAFTER_HOME/bin/dbms/bin/mysqld --no-defaults --console --max_allowed_packet=64M --basedir=CRAFTER_HOME/bin/dbms --datadir=CRAFTER_HOME/data/db --port=33306 --socket=/private/tmp/MariaDB4j.33306.sock
         2020-06-04  6:21:50 0 [Note] /Users/myuser/craftercms/crafter-authoring/bin/dbms/bin/mysqld (mysqld 10.4.6-MariaDB) starting as process 70558 ...
         2020-06-04  6:21:50 0 [Warning] Setting lower_case_table_names=2 because file system for /Users/myuser/craftercms/crafter-authoring/data/db/ is case insensitive
         2020-06-04  6:21:50 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
         ...
         2020-06-04  6:21:50 0 [Note] Added new Master_info '' to hash table
         2020-06-04  6:21:50 0 [Note] /Users/myuser/craftercms/crafter-authoring/bin/dbms/bin/mysqld: ready for connections.
         Version: '10.4.6-MariaDB'  socket: '/private/tmp/MariaDB4j.33306.sock'  port: 33306  CrafterCms

      |

#. Login to the database by running the following command then entering the database root password:

      .. code-block:: bash

         CRAFTER_HOME/bin/dbms/bin/mysql -u <db_root_user> -p --socket=/tmp/MariaDB4j.33306.sock

      |

   The <db_root_user> by default is ``root`` with password set to ``root`` or empty.  Remember to replace <db_root_user> with the actual ``root`` user (MARIADB_ROOT_USER) value and enter the actual password (MARIADB_ROOT_PASSWD) value used in your system, which can be found in the ``crafter-setenv.sh`` file under the ``CRAFTER_HOME/bin`` folder.

   In the sample run below, the default root user ``root`` is used and password <empty> is used:

      .. code-block:: bash

         ➜  CRAFTER_HOME/bin/dbms/bin/mysql -u root -p --socket=/tmp/MariaDB4j.33306.sock
         Enter password:
         Welcome to the MariaDB monitor.  Commands end with ; or \g.
         Your MariaDB connection id is 9
         Server version: 10.4.6-MariaDB CrafterCms

         Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

         Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

         MariaDB [(none)]>

      |

#. Add the user ``crafter`` and grant permissions by running the following commands:

      .. code-block:: bash

         CREATE USER 'crafter'@'localhost' IDENTIFIED BY 'crafter' ;
         GRANT ALL PRIVILEGES ON <crafter_schema_name>.* TO 'crafter'@'localhost' WITH GRANT OPTION ;

         CREATE USER 'crafter'@'%' IDENTIFIED BY 'crafter' ;
         GRANT ALL PRIVILEGES ON <crafter_schema_name>.* TO 'crafter'@'%' WITH GRANT OPTION ;

      |

   The schema name by default is ``crafter``.  Remember to replace <crafter_schema_name> with the actual schema name (MARIADB_SCHEMA) used in your system (if the default value is not used), which can be found in the ``crafter-setenv.sh`` file under the ``CRAFTER_HOME/bin`` folder.

   Here's the sample run with the schema name ``crafter``:

      .. code-block:: bash

         MariaDB [(none)]> CREATE USER 'crafter'@'localhost' IDENTIFIED BY 'crafter' ;
         Query OK, 0 rows affected (0.012 sec)

         MariaDB [(none)]>       GRANT ALL PRIVILEGES ON crafter.* TO 'crafter'@'localhost' WITH GRANT OPTION ;
         Query OK, 0 rows affected (0.010 sec)

         MariaDB [(none)]>
         MariaDB [(none)]>       CREATE USER 'crafter'@'%' IDENTIFIED BY 'crafter' ;
         Query OK, 0 rows affected (0.011 sec)

         MariaDB [(none)]>       GRANT ALL PRIVILEGES ON crafter.* TO 'crafter'@'%' WITH GRANT OPTION ;
         Query OK, 0 rows affected (0.011 sec)

      |

   After performing the steps above, stop the database then startup your authoring install as usual.