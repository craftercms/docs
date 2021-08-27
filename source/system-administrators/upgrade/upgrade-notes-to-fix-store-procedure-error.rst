:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-notes-to-fix-stored-procedure-error:

===============================================
Upgrade Notes for Fixing Stored Procedure Error
===============================================

After upgrading to Crafter CMS 3.1.10 or later versions it is possible that the stored procedures created by
Crafter Studio are missing the right user and the startup process will be stopped with an error similar to this:

.. code-block:: bash

    [INFO] 2021-04-06T09:16:25,632 [localhost-startStop-1] [db.DbScriptUpgradeOperation] | Executing db script upgrade-3.1.10.5-to-3.1.11.1.sql
    Error executing: call addColumnIfNotExists('crafter', 'site', 'sync_repo_lock_owner', 'VARCHAR(255) NULL')
    .  Cause: java.sql.SQLException: (conn:21) The user specified as a definer (''@'') does not exist
    Query is : call addColumnIfNotExists('crafter', 'site', 'sync_repo_lock_owner', 'VARCHAR(255) NULL')

|

To get the authoring install working, do the following:

.. note::
  If it is possible to start the previous version of Crafter CMS you can skip the step to start the database

|

#. Start the database
#. Login to the database
#. Find the affected stored procedures
#. Update the affected stored procedures

After performing the steps above, you may now startup the authoring install.

#. The first thing that needs to be done is to start the database.  To start the database, run the following:

      .. code-block:: bash

         CRAFTER_HOME/bin/dbms/bin/mysqld --no-defaults --console --max_allowed_packet=64M --basedir=CRAFTER_HOME/bin/dbms --datadir=CRAFTER_HOME/data/db --port=33306 --socket=/tmp/MariaDB4j.33306.sock

      |

   This is the output when running the command above:

      .. code-block:: bash

         ➜  bin CRAFTER_HOME/bin/dbms/bin/mysqld --no-defaults --console --max_allowed_packet=64M --basedir=CRAFTER_HOME/bin/dbms --datadir=CRAFTER_HOME/data/db --port=33306 --socket=/tmp/MariaDB4j.33306.sock
         2020-06-04  6:21:50 0 [Note] /Users/myuser/craftercms/crafter-authoring/bin/dbms/bin/mysqld (mysqld 10.4.6-MariaDB) starting as process 70558 ...
         2020-06-04  6:21:50 0 [Warning] Setting lower_case_table_names=2 because file system for /Users/myuser/craftercms/crafter-authoring/data/db/ is case insensitive
         2020-06-04  6:21:50 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
         ...
         2020-06-04  6:21:50 0 [Note] Added new Master_info '' to hash table
         2020-06-04  6:21:50 0 [Note] /Users/myuser/craftercms/crafter-authoring/bin/dbms/bin/mysqld: ready for connections.
         Version: '10.4.6-MariaDB'  socket: '/tmp/MariaDB4j.33306.sock'  port: 33306  CrafterCms

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

#. Find the affected stored procedures by running the following command:

      .. code-block:: bash

         SELECT routine_name, definer FROM information_schema.routines WHERE routine_type = 'PROCEDURE';

      |

   Here's the sample:

      .. code-block:: bash

          +----------------------+----------------+
          | routine_name         | definer        |
          +----------------------+----------------+
          | addColumnIfNotExists | @              |
          | addIndexIfNotExists  | @              |
          | addUniqueIfNotExists | @              |
          | dropColumnIfExists   | @              |
          | dropIndexIfExists    | @              |
          | AddGeometryColumn    | root@localhost |
          | DropGeometryColumn   | root@localhost |
          +----------------------+----------------+

      |

#. Update the affected stored procedures by running the following command:

      .. code-block:: bash

         UPDATE `mysql`.`proc` p SET definer = 'root@localhost' WHERE definer='@';

      |

After performing the steps above, stop the database then startup your authoring install as usual.
