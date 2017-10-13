.. index:: Architecture

=======================
High Level Architecture
=======================

.. image:: /_static/images/crafter-high-level-arch.jpg
        :width: 100%
        :alt: Admin Console Link
        :align: center

----------------------
Decoupled Architecture
----------------------

A decoupled CMS architecture separates content authoring capabilities and infrastructure from the delivery capabilities and infrastructure

* Native multi-channel support via publishing.
* Authoring and delivery components typically have different

    * Authentication and authorization requirements (internal vs external)
    * Service Level Agreements (SLA)
    * Scalability requirements

* Decoupled architectures also demonstrate the separation of concerns principal which makes upgrading and maintaining software easier.

-------------
Multi-Tenancy
-------------

Crafter CMS was built from the ground up to scale for the cloud.  Crafter Studio for authoring and the Crafter Engine, Profile and Social on the delivery side are multi-tenant platforms.  Crafter Software leverages this capability in its Software as a Service (SaaS) offering http://craftercloud.io.  You can also use multi-tenancy with on-premise installations and private cloud deployments.

-----------------------------------------
High Performance Dynamic Content Delivery
-----------------------------------------

In the age of hyper-personalized digital experiences and content rich applications raw scalability is key.  Sole reliance on CDN technology is no longer a real alternative.

* Crafter CMS is able to serve 1 to 5 million requests per hour through a single instance of Crafter Engine (4 core CPU.)
* Crafter Engine's performance is a direct result of it's disk and in-memory based architecture.  We're able to serve more per node than any other CMS and we're able to scale out easier than any other CMS because we don't sit on top of a traditional data store like a database or a JCR repository.

----------------------
Best of Breed Approach
----------------------

Many CMS platforms choose to roll their own or acquire capabilities for adjacent capabilities like analytics, marketing automation, CRM and so on.  This is what is called a suite based architecture by the industry.  While suites tend to do well in product evaluations because the "check all the boxes" they tend to fall down in practice during operation.

* The various subsystems are not integrated. This is especially true if the subsystem was acquired.
* You tend to get more subsystems than you need (and pay for it too)
* You are forced to use the subsystem provided rather than the one your team is already using, knows, likes and so on.
Crafter CMS rejects the suite based approach in favor of a best of breed approach. Analytics, CRM, Marketing automation, social monitoring and so on are all available to your team through the CMS through integration with Crafter CMS APIs but are provided by the best of breed platforms in each space you choose.  Examples are Google Analytics and Omniture for Analytics, Digital River for eCommerce, Salesforce for CRM, Marketo for marketing automation and so on.

-----------
Integration
-----------

Crafter CMS provides the best support for integration of any CMS on the market today. Crafter's modern Java technology stack based on Spring Framework and the Groovy scripting language and the wide adoption of web based service orientation (RESTful APIs) has changed the equation for integration. 

Easily integrate with 3rd party services via Groovy
---------------------------------------------------

* Full, powerful server side scripting language
* Access to all major Java libraries via built in library dependency management
* Easily consume 3rd party RESTful services
* Easily produce RESTful services for 3rd party consumers
* Sandboxed per tenant
* Sandboxed/secured access to underlying system calls and resources
