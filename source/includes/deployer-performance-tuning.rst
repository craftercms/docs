---------------------------
Deployer Performance Tuning
---------------------------
Crafter Deployer is responsible for many operations including publishing content, updating search indexes, updating metadata about content and more. The faster the disk type, network connectivity, and available memory, the better the performance you will observe.
For larger installations with a lot to index, the Deployer can run out of resources or be too slow for smooth operation of the system.

To configure the heap size, etc for the JVM, open ``CRAFTER_HOME/bin/crafter-setenv.sh`` and update the environment
variable ``DEPLOYER_JAVA_OPTS`` to desired value like below:

.. code-block:: bash
    :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

    export DEPLOYER_JAVA_OPTS=${DEPLOYER_JAVA_OPTS:="-server -Xss1024K -Xmx1G -Dlog4j2.formatMsgNoLookups=true"}

|

