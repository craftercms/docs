:is-up-to-date: True

.. index:: Delivery Environment Performance Tuning

.. _delivery-env-performance-tuning.rst:

=======================================
Delivery Environment Performance Tuning
=======================================

This section describes ways on how to enhance a traditional delivery environment setup (non-serverless) performance by tuning delivery environment settings and recommendations for hardware configurations.

-------------------
Server Requirements
-------------------
Minimum Installation

    * 4GB of RAM + 4GB Swap Space or Virtual Memory
    * 3GB JVM Memory (-Xms 1G -Xmx 3G)
    * 4 CPU Cores

Medium Installation

    * 8GB of RAM + 8GB Swap Space or Virtual Memory
    * 4GB JVM Memory (-Xms 1G -Xmx 4G)
    * 4 CPU Cores

Large Installations

	* 16GB+ of RAM + 16GB Swap Space or Virtual Memory
	* 8GB+ JVM Memory (-Xms 2G -Xmx 8G)
	* 8+ CPU Cores

Extra Large Installations

	* 32GB+ of RAM + 16GB Swap Space or Virtual Memory
	* 16GB+ of JVM Memory (-Xms 2G -Xmx 16G)
	* 16+ CPU Cores

Horizontal scaling can be very effective in scaling out delivery of content.

.. [TBD: add request ranges for the installations listed above]

-------------------------------------
High-level Performance Considerations
-------------------------------------
Crafter Engine operations can be I/O intensive. Optimizing your installation for better I/O performance will typically pay the biggest dividends in performance gains early on. These general guidelines help address these considerations:

* Fast raw storage performance (fast concurrent reads and writes)
* Different storage devices are used for different concerns (logging, Git, search index, swap etc.)
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
Crafter Engine’s job is to provide content delivery services. A high volume of concurrent reads (requests) and writes(for the logs) should be expected. The faster the disk type and connection to the computer, the better the performance you will observe.

Testing Raw Performance
^^^^^^^^^^^^^^^^^^^^^^^

* Non-concurrent quick test or the raw device performance can be achieved with ``sudo hdparm -tT /dev/{device}``

	* Example

      .. code-block:: bash
          :linenos:

          Timing cached reads:   24486 MB in  1.99 seconds = 12284.28 MB/sec
          Timing buffered disk reads: 3104 MB in  3.00 seconds = 1033.84 MB/sec

|

* Test IOPS using ``fio`` https://github.com/axboe/fio

	* Example

      .. code-block:: bash
         :linenos:

         $ fio --randrepeat=1 --ioengine=libaio --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw --rwmixread=75
	     test: (g=0): rw=randrw, bs=4K-4K/4K-4K/4K-4K, ioengine=libaio, iodepth=64
	     fio-2.2.10
	     Starting 1 process
	     Jobs: 1 (f=1): [m(1)] [100.0% done] [495.2MB/164.7MB/0KB /s] [127K/42.2K/0 iops] [eta 00m:00s]
	     test: (groupid=0, jobs=1): err= 0: pid=9071: Mon Apr 23 10:49:08 2018
  		 read : io=3071.7MB, bw=485624KB/s, iops=121406, runt=  6477msec
  		 write: io=1024.4MB, bw=161945KB/s, iops=40486, runt=  6477msec
  		 cpu          : usr=12.04%, sys=87.77%, ctx=32, majf=0, minf=8
  		 IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=0.1%, >=64=100.0%
     	 submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     	 complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.1%, >=64=0.0%
     	 issued    : total=r=786347/w=262229/d=0, short=r=0/w=0/d=0, drop=r=0/w=0/d=0
     	 latency   : target=0, window=0, percentile=100.00%, depth=64

	     Run status group 0 (all jobs):
   		     READ: io=3071.7MB, aggrb=485624KB/s, minb=485624KB/s, maxb=485624KB/s, mint=6477msec, maxt=6477msec
  		     WRITE: io=1024.4MB, aggrb=161944KB/s, minb=161944KB/s, maxb=161944KB/s, mint=6477msec, maxt=6477msec

      .. Note:: Notice the ``IOPS`` for READ and WRITE

* Test latency with ``ioping`` https://github.com/koct9i/ioping

	* Example

      .. code-block:: bash
         :linenos:

	     $ ioping -c 10 .
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=1 time=179 us
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=2 time=602 us
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=3 time=704 us
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=4 time=600 us
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=5 time=597 us
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=6 time=612 us
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=7 time=599 us
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=8 time=659 us
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=9 time=652 us
	     4 KiB from . (ext4 /dev/nvme0n1p3): request=10 time=742 us

	     --- . (ext4 /dev/nvme0n1p3) ioping statistics ---
	     10 requests completed in 9.01 s, 1.68 k iops, 6.57 MiB/s
	     min/avg/max/mdev = 179 us / 594 us / 742 us / 146 us

Recommendations
^^^^^^^^^^^^^^^
**Prefer multiple devices to a single device**

Crafter must update content, metadata about the content, search indexes and more on every write. By storing each kind of data on its own storage device, you better enable these activities to occur concurrently and hence vastly improve performance.

**Prefer faster disk**

Not all storage devices are created equal. The fast the read/write speeds and the more concurrency and lower latency the device supports, the better the performance will be. As a general rule of thumb, use the highest IOPS devices for the most demanding storage concerns, by order of importance:

|    {CRAFTER_HOME}/data/repos (high-concurrency, important)
|    {CRAFTER_HOME}/data/indexes
|    {CRAFTER_HOME}/data/indexes_es
|    {CRAFTER_HOME}/data/mongodb (if in use)
|    {CRAFTER_HOME}/data/logs

|

**Avoid high latency connections to disk**

High latency connectivity such as Network-Attached Storage (NAS) will typically lead to performance problems. Local disk or Storage Array Network will yield much better performance.
NFS or similar protocols will increase latency and cause performance issues.

**Use a device for each storage concern when possible**

One optimization to raise effective IOPS of a system without buying very expensive storage devices is to distribute the load across many devices. Crafter CMS performs multiple reads/writes to disk from various concerns such as the database, the repository, logs, etc. with very different I/O patterns. For optimal performance, the server should have different storage systems (disks) mounted for different concerns, for example:

|    /dev/{dev0} -> /
|    /dev/{dev1} -> /opt/crafter/data/repos
|    /dev/{dev2} -> /opt/crafter/data/indexes
|    /dev/{dev3} -> /opt/crafter/data/indexes_es
|    /dev/{dev4} -> /opt/crafter/logs
|    /dev/{dev5} -> /opt/crafter/data/mongodb
|    /dev/{dev6} -> /var
|    /dev/{dev7} -> /home
|    /dev/{dev8} -> /usr

|

OS Level
--------

^^^^^^^^^^^^
Linux Ulimit
^^^^^^^^^^^^
Crafter CMS includes many subsystems that require additional file-handles be available at the operating system level.

Our limits are:

.. code-block:: none
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
Studio stores content in Git, Metadata about workflow and content in an embedded database and indexes in Elasticsearch. All of these stores are updated on each write. Putting them on the same disk can lead to slower access times due to contention in high throughput scenarios.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using Default Settings for Larger Installations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Installations are pre-configured with settings that assume an average/smaller sized machines. Further OS defaults are not managed by Crafter. To get the best performance you should consider and adjust for your specific environment, hardware, business needs and best practices.

