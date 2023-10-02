:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Performance Tuning; Delivery

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

-------------------------
Engine Performance Tuning
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

.. include:: /includes/deployer-performance-tuning.rst

.. include:: /includes/performance-anti-patterns.rst