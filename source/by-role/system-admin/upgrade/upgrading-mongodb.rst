:is-up-to-date: True
:last-updated: 4.1.3

.. _upgrading-mongodb:

=================
Upgrading MongoDB
=================
Crafter Profile and Social version 4.1.3 have updated MongoDB in the install.
This section describes how to upgrade MongoDB in your Crafter Profile and Social installed on a server.

Please read through the upgrade instructions :ref:`here <upgrading-craftercms-on-a-server>` first.
The steps for upgrading MongoDB in your Crafter Profile and Social install follows almost exactly
the same steps as listed in that document.

.. important::
    Remember to **manually shut down and backup CrafterCMS** before beginning your upgrades!

|hr|

-------------------------------------------
Upgrading 3.1.x -> 4.1.3 (from MongoDB 3.x)
-------------------------------------------
#. Download CrafterCMS version 4.1.3, and extract the files.
#. Run the ``upgrade-search.sh`` script from your newly extracted files.

   .. code-block:: bash
       :caption: *Run the upgrade-search script*
       :emphasize-lines: 1

       > ./upgrade-search.sh /path/of/install/to/be/upgraded --stay-alive
       ========================================================================
       Search upgrade started
       ========================================================================
       Downloading Elasticsearch 7 from https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.0-linux-x86_64.tar.gz
       ...
       All indices reindex complete
       Reindex finished in 12.843 seconds
       'stay-alive' flag on, hit enter to stop Elasticsearch
       >
       End process. Stop Elasticsearch
       Move indexes from 'data/indexes-es' to 'indexes'
       ========================================================================
       Search upgrade completed
       ========================================================================

   |

   See :ref:`upgrading-search` for more information on upgrading search.

#. Upgrade using the ``upgrade-target.sh`` script from your newly extracted files. First, we'll need to set ``MONGODB_HOME`` so that the backup script will run with the ``mongod`` version ``3.4.4`` in the old installation before running the ``upgrade-target.sh``:

   .. code-block:: bash
       :caption: *Set MONGODB_HOME and Run the upgrade-target script from the newly extracted files*

       > MONGODB_HOME=/path/of/3.1.x/install/bin/mongodb ./upgrade-target.sh /path/of/install/to/be/upgraded
       ...
       [o] Overwriting file apache-tomcat/LICENSE with the new release version
       [o] Overwriting file apache-tomcat/BUILDING.txt with the new release version
       ========================================================================
       Upgrade completed
       ========================================================================
       !!! Please read the release notes and make any necessary manual changes, then run the post upgrade script:

  |

#. Manually upgrade MongoDB from version ``3.4.4`` to version ``6.0.12``.
   We need to upgrade from each release version and run the ``setFeatureCompatibilityVersion`` command against the admin database.

   Please see https://www.mongodb.com/docs/manual/release-notes/6.0-upgrade-standalone/ for more information on upgrading MongoDB.

   Download and extract the following MongoDB versions available from https://www.mongodb.com/try/download/community:

   - 3.6.23 (http://downloads.mongodb.org/linux/mongodb-linux-x86_64-3.6.0.tgz)
   - 4.0.28 (http://downloads.mongodb.org/linux/mongodb-linux-x86_64-4.0.28.tgz)
   - 4.2.25 (https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1804-4.2.25.tgz)
   - 4.4.26 (https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2004-4.4.26.tgz)
   - 5.0.23 (https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2004-5.0.23.tgz)
   - 6.0.12 (https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2204-6.0.12.tgz)

   Run ``mongod`` from each release version ``/extracted/location/of/mongodb-version-to-be-upgraded-to/bin/mongod`` starting from the oldest one:

   .. code-block:: bash
       :caption: *Run mongod from MongoDB version to be upgraded to*
       :emphasize-lines: 9

       $ /extracted/location/of/mongodb-linux-x86_64-3.6.23/bin/mongod --dbpath=/path/of/3.1.x/install/data/mongodb --directoryperdb --journal --port 27020
       ...
       2023-12-20T02:38:20.546-0500 I CONTROL  [initandlisten] db version v3.6.23
       2023-12-20T12-03T02:38:20.546-0500 I CONTROL  [initandlisten] git version: d352e6a4764659e0d0350ce77279de3c1f243e5c
       2023-12-20T02:38:20.546-0500 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.1.1g  21 Apr 2020
       2023-12-20T02:38:20.546-0500 I CONTROL  [initandlisten] allocator: system
       ...
       2023-12-20T02:38:21.687-0500 I NETWORK  [initandlisten] listening via socket bound to /tmp/mongodb-27020.sock
       2023-12-20T02:38:21.687-0500 I NETWORK  [initandlisten] waiting for connections on port 27020
       2023-12-20T02:38:21.687-0500 I STORAGE  [LogicalSessionCacheRefresh] createCollection: config.system.sessions with generated UUID: fee195e0-b337-498f-8ad9-1c410748bce1

   |

   Then login as user admin in mongoDB in your 3.1.x install and set the compatibility version using the command
   ``db.adminCommand( { setFeatureCompatibilityVersion: "{version}" } )``

   .. code-block:: bash
       :caption: *Set compatibility version from /path/of/3.1.x/install/bin/mongodb/bin/*
       :emphasize-lines: 1,7

       > ./mongosh mongodb://localhost:27020/admin
       Current Mongosh Log ID:	659511008267cb24aff1427e
       Connecting to:		mongodb://localhost:27020/admin?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0
       Using MongoDB:		3.6.23
       Using Mongosh:		1.8.0

       admin> db.adminCommand( { setFeatureCompatibilityVersion: "3.6" } )
       { ok: 1 }
       admin>

   |

   Repeat the steps above for all the other versions of MongoDB downloaded in ascending order of version, e.g.
   run ``mongod`` version ``4.0.28``, then set the feature compatibility version to ``4.0``.  Next run
   ``mongod`` version ``4.2.25``, then set the feature compatibility version to ``4.2``, and so on and so forth

#. Before starting CrafterCMS, you'll need to configure the installation root directory to use Java version 17.  Remember to read the release notes or any relevant upgrade articles and make any necessary manual changes before running the `post-upgrade.sh`` script as described next

#. Run the ``post-upgrade.sh`` script. This will:

   - Remove old *data/indexes-es* directory (old indexes are not usable by OpenSearch)
   - Start CrafterCMS and ask for signal to continue
   - Once started and CrafterCMS is up (including UM execution), let the post-upgrade continue by typing ``Y``:

     .. code-block:: bash

         Please make sure Crafter has started successfully before continuing
         > Continue? [(Y)es/(N)o]:

   - Post-upgrade will continue to trigger the reindex of all targets by calling the Deployer API ``/api/1/target/deploy-all``

#. Your install is now upgraded and you may login to Studio to check the version.

|hr|
