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

|hr|

-------------------------
Engine Performance Tuning
-------------------------
.. include:: /includes/application-performance-tuning.rst

|hr|

.. include:: /includes/deployer-performance-tuning.rst

|hr|

.. include:: /includes/performance-anti-patterns.rst