:is-up-to-date: False

============
Availability
============

Crafter CMS supports geo-distributed deployments with multiple data-centers per geography making the uptime of
the delivery tier near 100%. Traffic to the content delivery system flows to the nearest healthy data-center providing
speed and availability.

Availability can be divided into High-Availability (HA) and Disaster Recovery (DR). Since CrafterCMS is two
separate subsystems, delivery and authoring, then will describe HA and DR in the context of content delivery
and then in the context of content authoring.

--------
Delivery
--------

Content Delivery in CrafterCMS is based on the principals of Shared Nothing Architecture. This means delivery nodes
don't intercommunicate, are not backed by a single database nor file system. As such, adding new nodes increases
reliability since the failure of one node doesn't result in a failure in content delivery.

Ideally, an installation would follow an N+1 delivery allocation, where N is the number of nodes required to handle
the delivery load and the extra node is in case of a single node failure.

Distributing nodes across geographies (multi-region) means automatic Disaster Recovery is built-in. A failure of
a data center or several data centers in a region will not bring down content delivery.

---------
Authoring
---------

Content Authoring is the tier used by the few authors to generate content (XML, code, and static assets) to be
published to the delivery tier. As such, there are much less stringent availability requirements for the authoring
tier.

The authoring application has built-in primary/replica clustering. Being a stateful application, the clustering
is based on replicas following the primary with a fronting load-balancer that directs traffic to the primary
while the primary node is healthy. Fail-over is automatic with the replica becoming a primary and switching its
health status so the load-balancer directs traffic to it instead of the defunct primary.

.. add a link to the studio clustering docs