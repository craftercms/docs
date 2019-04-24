:is-up-to-date: True

.. index:: How to change hosts and ports on your Crafter CMS Delivery install; How to change ports

.. _how-to-change-hosts-ports-on-your-crafter-delivery-install:

=======================================================================================
How To Change the Hosts and Ports on Your Crafter CMS Delivery Environment Installation
=======================================================================================

You can change all the hosts and ports used for communication by the Crafter applications in 
``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh``:

.. code-block:: bash

   # -------------------- Hosts and ports --------------------
   export MAIL_HOST=${MAIL_HOST:="localhost"}
   export MAIL_PORT=${MAIL_PORT:="25"}
   export SOLR_HOST=${SOLR_HOST:="localhost"}
   export SOLR_PORT=${SOLR_PORT:="8695"}
   export ES_HOST=${ES_HOST:="localhost"}
   export ES_PORT=${ES_PORT:="9202"}
   export DEPLOYER_HOST=${DEPLOYER_HOST:="localhost"}
   export DEPLOYER_PORT=${DEPLOYER_PORT:="9192"}
   export MONGODB_HOST=${MONGODB_HOST:="localhost"}
   export MONGODB_PORT=${MONGODB_PORT:="28020"}
   export TOMCAT_HOST=${TOMCAT_HOST:="localhost"}
   export TOMCAT_HTTP_PORT=${TOMCAT_HTTP_PORT:="9080"}
   export TOMCAT_HTTPS_PORT=${TOMCAT_HTTPS_PORT:="9443"}
   export TOMCAT_AJP_PORT=${TOMCAT_AJP_PORT:="9009"}
   export TOMCAT_SHUTDOWN_PORT=${TOMCAT_SHUTDOWN_PORT:="9005"}

|

You will need to change the hosts and/or ports for the following cases:

- If you need to change the port that an application in the current installation binds to, update the respective port
  variable.
- If you need the applications in the current installation to communicate with another application that's in a 
  different host (and port), update the host (and port) variable of the external application.