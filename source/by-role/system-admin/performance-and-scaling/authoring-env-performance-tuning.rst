:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Performance Tuning; Authoring

.. _authoring-env-performance-tuning:

========================================
Authoring Environment Performance Tuning
========================================
.. contents::
    :local:
    :depth: 2

This section describes ways on how to enhance the authoring environment performance by tuning authoring environment settings and recommendations for hardware configurations.

-------------------
Server Requirements
-------------------
Minimum Installation (~1-10 concurrent users, ~10 sites)

	* 16GB of RAM + 16GB Swap Space or Virtual Memory
	* 8GB JVM Memory (-Xms 1G -Xmx 8G)
	* 4 CPU Cores

Medium Installations (~11-25 concurrent users, ~25 sites)

	* 32GB+ of RAM + 32GB Swap Space or Virtual Memory
	* 16GB+ JVM Memory (-Xms 2G -Xmx 16G)
	* 8+ CPU Cores

Larger Installations (~26-50 concurrent user, ~50 sites)

	* 64GB+ of RAM + 64GB Swap Space or Virtual Memory
	* 32GB+ of JVM Memory (-Xms 4G -Xmx 32G)
	* 16+ CPU Cores

Vertical scaling can be very effective in scaling out Crafter Studio.

.. include:: /includes/server-performance-tuning.rst

|hr|

-------------------------
Studio Performance Tuning
-------------------------
^^^^^^^^^
JVM Level
^^^^^^^^^
To configure the heap size, etc for the JVM, open ``CRAFTER_HOME/bin/crafter-setenv.sh`` and update the environment
variable ``CATALINA_OPTS`` to desired value like below:

.. code-block:: bash
    :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

    export CATALINA_OPTS=${CATALINA_OPTS:="-server -Xss1024K -Xms1G -Xmx4G -Dlog4j2.formatMsgNoLookups=true"}

|

.. include:: /includes/application-performance-tuning.rst

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio Application Level
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
""""""""""""""""""
DB Connection Pool
""""""""""""""""""
To configure the DB connection pool, override the properties listed below as needed in the ``studio-config-oveeride.yaml`` file in the ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/`` folder, or via the ``GlobaL Config`` in the Studio |mainMenu| Navigation Menu

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

    # Defines initial number of database connections in database connection pool
    studio.db.pool.initialConnections: 10
    # Defines maximum number of active database connections in database connection pool
    studio.db.pool.maxActiveConnections: 100
    # Defines maximum number of idle database connections to retain in database connection pool.
    studio.db.pool.maxIdleConnections: 30
    # Defines minimum number of idle database connections to retain in database connection pool.
    studio.db.pool.minIdleConnections: 10

|hr|

.. include:: /includes/deployer-performance-tuning.rst

|hr|

.. include:: /includes/performance-anti-patterns.rst