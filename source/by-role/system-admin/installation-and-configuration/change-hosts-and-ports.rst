:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Change hosts and ports

.. _change-hosts-and-ports:

======================================================
Change Hosts and Ports in Your CrafterCMS Installation
======================================================
There are times when you need to change the hosts and ports in your CrafterCMS installation.
Changes to the hosts and/or ports may be required in the following cases:

- If you need to change the port that an application in the current installation binds to. |br|
  To change the port, update the respective port variable.
- If you need the applications in the current installation to communicate with another application that's in a
  different host (and port) |br|
  To change the host (and port as required), update the host (and port) variable of the external application.

.. _authoring-environment-installation-hosts-and-ports:

--------------------------------------------------
Authoring Environment Installation Hosts and Ports
--------------------------------------------------
You can change all the hosts and ports used for communication by the CrafterCMS authoring applications in
``AUTHORING_INSTALL_DIR/bin/crafter-setenv.sh``:

.. code-block:: bash
    :caption: *AUTHORING_INSTALL_DIR/bin/crafter-setenv.sh hosts and ports with defaults*
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

.. _delivery-environment-installation-hosts-and-ports:

=================================================
Delivery Environment Installation Hosts and Ports
=================================================
You can change all the hosts and ports used for communication by the CrafterCMS delivery applications in
``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh``:

.. code-block:: bash
    :caption: *DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh hosts and ports with defaults*
    :linenos:

    # -------------------- Hosts and ports --------------------
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
