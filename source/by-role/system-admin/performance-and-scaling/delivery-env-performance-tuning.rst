:is-up-to-date: True
:last-updated: 4.1.4

.. _delivery-env-performance-tuning:

=======================================
Delivery Environment Performance Tuning
=======================================
.. contents::
    :local:
    :backlinks: none

This section describes ways on how to enhance a traditional delivery environment setup (non-serverless) performance by tuning delivery environment settings and recommendations for hardware configurations.

-------------------
Server Requirements
-------------------
Minimum Installation

	* 8GB of RAM + 8GB Swap Space or Virtual Memory
	* 4GB JVM Memory (-Xms 1G -Xmx 4G)
	* 4 CPU Cores

Medium Installations

	* 16GB+ of RAM + 16GB Swap Space or Virtual Memory
	* 8GB+ JVM Memory (-Xms 2G -Xmx 8G)
	* 8+ CPU Cores

Large Installations

	* 32GB+ of RAM + 16GB Swap Space or Virtual Memory
	* 16GB+ of JVM Memory (-Xms 4G -Xmx 16G)
	* 16+ CPU Cores

Horizontal scaling can be very effective in scaling out delivery of content.

.. include:: /includes/server-performance-tuning.rst

|hr|

.. _engine-performance-tuning:

-------------------------
Engine Performance Tuning
-------------------------
^^^^^^^^^
JVM Level
^^^^^^^^^
To configure the heap size, etc for the JVM, open ``CRAFTER_HOME/bin/crafter-setenv.sh`` and update the environment
variable ``CATALINA_OPTS`` to desired value like below:

.. code-block:: bash
    :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

    export CATALINA_OPTS=${CATALINA_OPTS:="-server -Xss1024K -Xms1G -Xmx2G -Dlog4j2.formatMsgNoLookups=true"}

|

.. include:: /includes/application-performance-tuning.rst

|hr|

.. include:: /includes/deployer-performance-tuning.rst

|hr|

.. include:: /includes/performance-anti-patterns.rst