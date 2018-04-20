.. _authoring-env-performance-tuning.rst:

========================================
Authoring Environment Performance Tuning
========================================

This section describes ways on how to enhance the authoring environment performance by tuning authoring environment settings and recommendations for hardware configurations.

----------------------------------
Crafter Studio Server Requirements
----------------------------------
Minimum Installation

    * 8GB of RAM + 8GB Swap Space or Virtual Memory
    * 4GB JVM Memory (-Xms 1G -Xmx 4G)
    * 2 CPU Cores

Recommended for Medium Installations (number of users/sites)

	* 16GB+ of RAM + 16GB Swap Space or Virtual Memory
	* 8GB+ JVM Memory (-Xms 2G -Xmx 8G)
	* 4+ CPU Cores

Recommended for Larger Installations (number of users/sites)

	* 32GB+ of RAM + 16GB Swap Space or Virtual Memory
	* 16GB+ of JVM Memory (-Xms 2G -Xmx 16G)
	* 16+ CPU Cores

Vertical scaling can be very effective in scaling out Crafter Studio.

-------------------------------------
High-level Performance Considerations
-------------------------------------
The majority of Studio operations are I/O intensive. Optimizing your installation for better I/O performance will typically pay the biggest dividends in performance gains early on. These general guidelines help address these considerations:

* Fast raw storage performance (fast concurrent reads and writes)
* Different storage devices are used for different concerns (logging, git, search index, swap etc.)
* Data organization on disk (using different devices for each repos, indexes, etc)
* Leave half the RAM for the OS and non-JVM processes

------------------
Performance Tuning
------------------

Server/Hardware Level
---------------------

^^^^^^^^^^^^^^^^^^^^
Disk/Storage Devices
^^^^^^^^^^^^^^^^^^^^
Crafter Studio’s job is to manage content. A high volume of concurrent reads and writes should be expected. The faster the disk type and connection to the computer, the better the performance you will observe.

.. Testing Raw Performance
.. [TODO: controller/raw device: hdparm -tT /dev/{device}]
.. Indicate that this test is a single concurrency test and is a good start, but insufficient]
.. [TODO: consider using this https://www.binarylane.com.au/support/solutions/articles/1000055889-how-to-benchmark-disk-i-o]

Recommendations
^^^^^^^^^^^^^^^
**Prefer multiple devices to a single device**

Crafter must update content, metadata about the content, search indexes and more on every write. By storing each kind of data on its own storage device, you better enable these activities to occur concurrently and hence vastly improve performance.

**Prefer faster disk**

Not all storage devices are created equal. The fast the read/write speeds and the more concurrency and lower latency the device supports, the better the performance will be. As a general rule of thumb, use the highest IOPS devices for the most demanding storage concerns, by order of importance:

|    {CRAFTER_HOME}/data/repos (high-concurrency, important)
|    {CRAFTER_HOME}/data/db (high-concurrency, important)
|    {CRAFTER_HOME}/data/indexes
|    {CRAFTER_HOME}/data/mongodb (if in use)
|    {CRAFTER_HOME}/data/logs

|

**Avoid high latency connections to disk**

High latency connectivity such as Network-Attached Storage (NAS) will typically lead to performance problems. Local disk or Storage Array Network will yield much better performance.
NFS or similar protocols will increase latency and cause performance issues.

**Use a device for each storage concern when possible**

One optimization to raise effective IOPS of a system without buying very expensive storage devices is to distribute the load across many devices. Crafter CMS performs multiple reads/writes to disk from various concerns such as the database, the repository, logs, etc. with very different I/O patterns. For optimal performance, the server should have different storage systems (disks) mounted for different concerns, for example:

|    /dev/{dev0} -> /
|    /dev/{dev1} -> /opt/crafter/data/db
|    /dev/{dev2} -> /opt/crafter/data/repos
|    /dev/{dev3} -> /opt/crafter/data/indexes
|    /dev/{dev4} -> /opt/crafter/logs
|    /dev/{dev5} -> /opt/crafter/data/mongodb
|    /dev/{dev6} -> /var
|    /dev/{dev7} -> /home
|    /dev/{dev8} -> /usr

|

OS Level
--------

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Linux or Windows Operating System
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter supports both Linux and Windows based operating systems. All of the concepts in this document apply to both platforms. That said, Linux and Window handle basic operations like reads, writes, permissions and file locking differently. It’s important to tune specifically for the operating system you are on.

Does Crafter CMS have a Linux or Windows preference?  Crafter CMS is a server based platform. The majority of Crafter CMS users deploy on Linux. While Crafter is tested and deployed on both Linux and Windows, all things being equal, we would recommend you deploy in Linux.

^^^^^^^^^^^^
Linux Ulimit
^^^^^^^^^^^^
Crafter CMS includes many subsystems that require additional file-handles be available at the operating system level.

.. Here is a list of recommended ``ulimit`` updates:
.. [todo: do something like this: https://docs.mongodb.com/manual/reference/ulimit/ for different OSs and distros and such]

Our limits are:

.. code-block:: guess
    :linenos:

    [Service]
    # Other directives omitted
    # (file size)
    LimitFSIZE=infinity
    # (cpu time)
    LimitCPU=infinity
    # (virtual memory size)
    LimitAS=infinity
    # (locked-in-memory size)
    LimitMEMLOCK=infinity
    # (open files)
    LimitNOFILE=64000
    # (processes/threads)
    LimitNPROC=64000


.. JVM Level
.. ---------
.. Path to setenv and how to set the -Xms/Xmx


.. Tomcat Application Server Level
.. -------------------------------
.. ^^^^^^^^^^^^^^^^^^^^^^
.. Connector Thread Count
.. ^^^^^^^^^^^^^^^^^^^^^^
.. [todo: differentiate between HTTP/s and AJP if fronting by Apache HTTPd]
.. [todo: indicate how to tune and set limits based on usage patterns, defaults are good, go up if you need to]


.. Crafter Studio Application Level
.. --------------------------------
.. DB Connection Pool
.. [todo: Defaults are good, push up as needed]

Anti Patterns
-------------
Here are some things we recommend **NOT TO DO** when setting up/configuring your authoring environment:

^^^^^^^^^^^^^^^^^^^^^^^^^^
Slow network based storage
^^^^^^^^^^^^^^^^^^^^^^^^^^
Simple network storage such as NAS connected over copper network to compute is known to produce slow performance due to latency across many small operations.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Use of NFS as a mounting protocol
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
NFS is a particularly slow and unreliable network storage protocol, especially when mounts are configured with default settings.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Putting all data on the same disk
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Studio stores content in Git, Metadata about workflow and content in an embedded database and indexes in Solr. All of these stores are updated on each write. Putting them on the same disk can lead to slower access times due to contention in high throughput scenarios.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using Default Settings for Larger Installations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Installations are pre-configured with settings that assume an average/smaller sized machines. Further OS defaults are not managed by Crafter. To get the best performance you should consider and adjust for your specific environment, hardware, business needs and best practices.

