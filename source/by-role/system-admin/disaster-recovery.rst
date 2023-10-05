:is-up-to-date: False
:last-updated: 4.1.1

.. index:: Disaster Recovery, DR

.. _system-admin-disaster-recovery:

=================
Disaster Recovery
=================
CrafterCMS is an enterprise-grade content management system. As such, it is capable, if correctly configured, of providing nearly 100% availability for content delivery and 99.95% or better availability for content authoring. This section describes the steps necessary to configure CrafterCMS for high availability and disaster recovery.

-----------
Delivery DR
-----------
CrafterCMS Delivery is a stateless, shared-nothing, and geo-distributable application. Achieving high-availability Delivery is as simple as adding more delivery nodes and geo-distributing them.

The minimum high-availability setup is two nodes in two different data centers (e.g. two availability zones in AWS). The nodes can be configured to use a load balancer to distribute the load between them. The load balancer can be configured to use a health check to determine whether a node is available. If a node is unavailable, the load balancer will stop sending requests to that node until it becomes available again. Learn more about health checks and custom health checks in the article :ref:`engine-custom-healthcheck`.

Adding two more nodes in a different geography (e.g. a different region in AWS) will significantly increase the system's availability. Using a latency-based DNS with health check capability will route the end-user to the nearest healthy geography.

.. TODO Add diagrams

To summarize, it's possible to get CrafterCMS delivery to be near 100% availability by spreading delivery nodes across geographies. As an added bonus, the content will render much closer to the end user, which will improve the user experience.

What if you don't have multi-region capability? You'll end up with an availability equal to the availability of the region and data centers you're in. To achieve disaster recovery, however, you must backup and shuttle those backups to another region/data center. Disk snapshotting will work well in this case. When restoring from back up to your DR site, you must get Engine running off the restored content, and you must get Deployer and the Search Engine also restored to deliver the whole experience.

------------
Authoring DR
------------
CrafterCMS Authoring is a stateful application. It uses a database to store metadata and a file system to store content and assets. Therefore, achieving high availability Authoring requires a different approach than Delivery. Clustering is used for high availability, and the clustering approach is based on a Primary/Replica model.

Clustering the authoring environment is detailed in the article :ref:`studio-clustering`.

The most effective approach to clustering the authoring environment is to cluster Studio across two data centers in the same geography (two availability zones in the same region in AWS, for example).

Recovering from a disaster in the primary region is done by restoring DR from a backup. Backups can be done by simple disk snapshotting and shuttling to the DR region/site. Then, the authoring environment is restored from the backups.