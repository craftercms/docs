:is-up-to-date: False

============
Availability
============

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
