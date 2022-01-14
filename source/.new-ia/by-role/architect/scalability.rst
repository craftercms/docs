:is-up-to-date: False

===========
Scalability
===========

.. Horizontal and Geo

Fundamental to scalability is:
- Horizontal scalability
- Minimizing bottlenecks
- Maximizing concurrency

With CrafterCMS, scalability is a fundamental part of the architecture. CrafterCMS has a several core principals when
it comes to content delivery:
- Shared-nothing architecture
- Stateless and Cloud Native
- Minimal locking

Let's elaborate the above.

CrafterCMS delivery nodes share nothing. They don't share a database, a file system, memory, nor keep in sync with
one another. They're completely independent. Therefore, these nodes can be added arbitrarily and can be in different
datacenters and in different geographies regardless of the latency between the nodes since they don't communicate
with one another.

CrafterCMS delivery nodes are also stateless and cloud native. CrafterCMS delivery nodes run as a stateless set in
Kubernetes and can pull content artifacts from remote storage for dynamic delivery.

Finally, CrafterCMS delivery nodes try to avoid locks to maximize thread throughput. This makes the system scale both,
vertically and horizontally very well.

------------
Planet-scale
------------

For global deployments where your users are spread across the planet, it's best to deploy CrafterCMS services
close to the users where possible. This guarantees fast, yet dynamic, responses to the users (CDNs are great,
but they won't help you with dynamic nor personalized responses).

Because CrafterCMS is made up of two main systems: authoring (content authors work here), delivery (content consumers
consume from this tier), you can deploy different services in different regions depending on where the users are.

The authoring clusters are typically deployed closest to the content authors, whereas delivery clusters are spread
across geographies where you have end-users. Delivery nodes can pull content from an arbitrary number of authoring
nodes, and are typically deployed in geographies where your end-users are.

.. image:: /_static/images/architecture/global-delivery.jpg
    :width: 100%
    :alt: CrafterCMS Geo Distributed Deployment
    :align: center

|