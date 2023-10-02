--------------------------------
Anti Patterns (Things NOT to do)
--------------------------------
Here are some things we recommend **NOT TO DO** when setting up/configuring your authoring environment:

^^^^^^^^^^^^^^^^^^^^^^^^^^
Slow Network Based Storage
^^^^^^^^^^^^^^^^^^^^^^^^^^
Simple network storage such as NAS connected over copper network to compute is known to produce slow performance due to latency across many small operations. Avoid NAS storage.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Use of NFS as a Mounting Protocol
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
NFS is a particularly slow and unreliable network storage protocol, especially when mounts are configured with default settings.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Putting All Data on the Same Disk
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Studio stores content in Git, Metadata about workflow and content in an embedded database and indexes in OpenSearch. All of these stores are updated on each write. Putting them on the same disk can lead to slower access times due to contention in high throughput scenarios.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using Default Settings for Larger Installations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Installations are pre-configured with settings that assume an average/smaller sized machines. Further OS defaults are not managed by Crafter. To get the best performance you should consider and adjust for your specific environment, hardware, business needs and best practices.
