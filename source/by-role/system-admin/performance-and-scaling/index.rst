:is-up-to-date: True
:last-updated: 4.1.2

.. index:: Performance and Scaling, Optimization, Clustering, CDN, Multi-region, Global Delivery

=======================
Performance and Scaling
=======================
Thanks to its architecture, CrafterCMS can be scaled to accommodate any size traffic load. CrafterCMS can also be geographically distributed allowing for local delivery of personalized content.

^^^^^^^^
Delivery
^^^^^^^^
CrafterCMS's delivery tier is designed to be perfectly horizontally scalable. The delivery tier is a shared-nothing architecture, meaning that each node in the delivery tier is independent of the other nodes. This allows for the delivery tier to be scaled horizontally by simply adding more nodes to the delivery tier. The delivery tier can also be scaled vertically by adding more resources.

Therefore, there is never a need to build traditional clusters for the delivery tier.

Global distribution of delivery nodes is then a matter of deploying Crafter Engine nodes in different regions, and using a DNS service to route traffic to the region closest to the user. Crafter Deployer is capable of deploying content to multiple regions, and enabling region specific search engines to be used as well to completely decentralize the delivery tier.

Finally, a Content Delivery Network (CDN) can be used to front the delivery tier. CDNs mostly help with static content delivery, and mitigation of DDOS attacks.

.. TODO Add a link to cache headers in Engine in the Engine > Configuration article

""""""""""""""""""""""""
Basic Performance Tuning
""""""""""""""""""""""""
It's critical to performance tune CrafterCMS for real production, the article :ref:`delivery-env-performance-tuning` covers the basics of performance tuning CrafterCMS for delivery.

^^^^^^^^^
Authoring
^^^^^^^^^
The authoring tier is used by the few to create and workflow content to be consumed by the many. Therefore, the content authoring tier scales vertically (by adding more resources to the authoring node), can be sharded (more nodes added to serve different projects), and clustered for high-availability.

""""""""""""""""""""""""
Basic Performance Tuning
""""""""""""""""""""""""
The authoring tier must be tuned carefully to get the most out of the infrastructure and for Crafter Studio to perform well. The article :ref:`authoring-env-performance-tuning` covers the basics of performance tuning CrafterCMS for authoring.

"""""""""""""""""""""""""""
Clustering |enterpriseOnly|
"""""""""""""""""""""""""""
If the authoring environment goes down, content management cannot happen. While that's not going to stop the end-users from using the delivery tier and consuming content, it will stop the content authors from creating and managing content. Therefore, it's often critical to cluster the authoring tier for high-availability. The article, :ref:`clustering`, elaborates on how to cluster Crafter Studio and achieve high-availability in the authoring tier.