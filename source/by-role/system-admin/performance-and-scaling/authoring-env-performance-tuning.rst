:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Performance Tuning; Authoring

.. _authoring-env-performance-tuning:

========================================
Authoring Environment Performance Tuning
========================================
.. contents::
    :local:

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

-------------------------
Studio Performance Tuning
-------------------------

.. TODO Please populate the following sections with the appropriate information
.. JVM Level
.. ---------
.. [Path to setenv and how to set the -Xms/Xmx]


.. TODO Please populate the following sections with the appropriate information
.. Tomcat Application Server Level
.. -------------------------------
.. ^^^^^^^^^^^^^^^^^^^^^^
.. Connector Thread Count
.. ^^^^^^^^^^^^^^^^^^^^^^
.. Update the Tomcat Connector thread count to correlate to the number of CPU cores available on the server. This will ensure that the server is able to handle the maximum number of concurrent requests.
.. [add an example of Tomcat Connector configuration and set it to 600 threads]

.. TODO Please populate the following sections with the appropriate information
.. Crafter Studio Application Level
.. --------------------------------
.. DB Connection Pool
.. [Show where that is set and how to set it]

.. include:: /includes/deployer-performance-tuning.rst

.. include:: /includes/performance-anti-patterns.rst