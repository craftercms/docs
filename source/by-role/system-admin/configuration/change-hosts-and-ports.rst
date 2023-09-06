:is-up-to-date: False
:last-updated: 4.1.2

:orphan:

.. index:: Ports, Hostnames

.. _ports-and-hostnames:

======================================
CrafterCMS Default Ports and Hostnames
======================================
CrafterCMS uses the following default ports and hostnames:

.. list-table::
    :header-rows: 1

    * - Module
      - Port
      - Hostname
    * - Studio
      - 8080 |br| 33306 |br| 5701
      - localhost
    * - Engine
      - 8080 |br| 9080
      - localhost
    * - Deployer
      - 9191 |br| 9192
      - localhost
    * - Search
      - 9201 |br| 9202
      - localhost
    * - Profile
      - 8080 |br| 9080
      - localhost
    * - Social
      - 8080 |br| 9080
      - localhost

.. _change-ports-and-hostnames:

==========================
Change Ports and Hostnames
==========================
There are times when you need to change the ports and/or hostnames in your CrafterCMS installation.
Changes to the ports and/or hostnames may be required in the following cases:

- If you need to change the port that an application in the current installation binds to. |br|
  To change the port, update the respective port variable.
- If you need the applications in the current installation to communicate with another application that's in a
  different host and/or port |br|
  To change the hostname (and port as required), update the hostname (and port) variable of the external application.

.. _authoring-environment-ports-and-hostnames:

-----------------------------------------
Authoring Environment Ports and Hostnames
-----------------------------------------
You can change all the hostnames and ports used for communication by the CrafterCMS authoring applications in
``AUTHORING_INSTALL_DIR/bin/crafter-setenv.sh``:

.. code-block:: bash
    :caption: *AUTHORING_INSTALL_DIR/bin/crafter-setenv.sh hostnames and ports with defaults*
    :linenos:

    export MAIL_HOST=${MAIL_HOST:="localhost"}
    export MAIL_PORT=${MAIL_PORT:="25"}
    export SEARCH_HOST=${SEARCH_HOST:="localhost"}
    export SEARCH_PORT=${SEARCH_PORT:="9201"}
    export DEPLOYER_HOST=${DEPLOYER_HOST:="localhost"}
    export DEPLOYER_PORT=${DEPLOYER_PORT:="9191"}
    export MONGODB_HOST=${MONGODB_HOST:="localhost"}
    export MONGODB_PORT=${MONGODB_PORT:="27020"}
    export MARIADB_HOST=${MARIADB_HOST:="127.0.0.1"}
    export MARIADB_PORT=${MARIADB_PORT:="33306"}
    export TOMCAT_HOST=${TOMCAT_HOST:="localhost"}
    export TOMCAT_HTTP_PORT=${TOMCAT_HTTP_PORT:="8080"}
    export TOMCAT_HTTPS_PORT=${TOMCAT_HTTPS_PORT:="8443"}
    export TOMCAT_AJP_PORT=${TOMCAT_AJP_PORT:="8009"}
    export TOMCAT_SHUTDOWN_PORT=${TOMCAT_SHUTDOWN_PORT:="8005"}
    export TOMCAT_DEBUG_PORT=${TOMCAT_DEBUG_PORT:="8000"}

|

.. _delivery-environment-ports-and-hostnames:

----------------------------------------
Delivery Environment Ports and Hostnames
----------------------------------------
You can change all the hostnames and ports used for communication by the CrafterCMS delivery applications in
``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh``:

.. code-block:: bash
    :caption: *DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh hostnames and ports with defaults*
    :linenos:

    # -------------------- hostnames and ports --------------------
    export MAIL_HOST=${MAIL_HOST:="localhost"}
    export MAIL_PORT=${MAIL_PORT:="25"}
    export SEARCH_HOST=${SEARCH_HOST:="localhost"}
    export SEARCH_PORT=${SEARCH_PORT:="9202"}
    export DEPLOYER_HOST=${DEPLOYER_HOST:="localhost"}
    export DEPLOYER_PORT=${DEPLOYER_PORT:="9192"}
    export MONGODB_HOST=${MONGODB_HOST:="localhost"}
    export MONGODB_PORT=${MONGODB_PORT:="28020"}
    export TOMCAT_HOST=${TOMCAT_HOST:="localhost"}
    export TOMCAT_HTTP_PORT=${TOMCAT_HTTP_PORT:="9080"}
    export TOMCAT_HTTPS_PORT=${TOMCAT_HTTPS_PORT:="9443"}
    export TOMCAT_AJP_PORT=${TOMCAT_AJP_PORT:="9009"}
    export TOMCAT_SHUTDOWN_PORT=${TOMCAT_SHUTDOWN_PORT:="9005"}
    export TOMCAT_DEBUG_PORT=${TOMCAT_DEBUG_PORT:="9000"}


|
