:is-up-to-date: False

===========
Scalability
===========

.. Horizontal and Geo

Website scaling is a way to handle additional workloads by adjusting your infrastructure.  The increased workload could be anything from an influx of users to a large volume of simultaneous transactions or anything else that pushes the software beyond its designed capacity.

With Crafter CMS, scalability is a fundamental part of the architecture. The software uses a Git-based repository, eliminating the bottlenecks a traditional database causes. It's also cloud-native and stateless, with a microservices architecture that makes scaling specific services with a platform like Kubernetes straightforward. It's also serverless, so components are completely decoupled from each other. The shared-nothing architecture means that everything can be scaled independently - up or down - so that you have a truly scalable and elastic CMS solution. With Crafter CMS, scaling your website performance is as simple as spinning up new instances - locally within a single region or globally across multiple regions.

------------
Planet-scale
------------

To support content authors and end-users across the globe, it's best to deploy Crafter CMS services close to the users. This guarantees fast, yet dynamic, responses to the users (CDNs are great, but they won't help you with dynamic or personalized responses).

The authoring clusters are typically deployed closest to the content authors, whereas delivery clusters are spread across geographies where you have end-users. Delivery nodes can pull content from an arbitrary number of authoring nodes, and are typically deployed in geographies where your end-users are.

.. image:: /_static/images/architecture/global-delivery.jpg
    :width: 100%
    :alt: Crafter CMS Geo Distributed Deployment
    :align: center

|

Horizontal Scaling
To scale horizontally, you provision new servers to run your software on - for example, with additional instances. With more instances of your software running, the workload can be distributed across them to process more of the workload at the same time.
