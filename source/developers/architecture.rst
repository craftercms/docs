:is-up-to-date: True

.. index:: Architecture

.. _architecture:

=======================
CrafterCMS Architecture
=======================

CrafterCMS distinguishes itself by its modern architecture, which in turn enables:

* Truly decoupled content management (and disconnected global delivery), composed of independent microservice-based components
* Dynamic, personalized content delivery of every request at speed
* API first CMS (content as a service via extensible GraphQL & REST)
* Git-based CMS (allows for excellent developer cadence)
* Shared-nothing, serverless, delivery architecture (planet-scale)
* Front-end agnostic (bring your favorite UI framework or use as a headless CMS)
* Equal support for all three CMS stakeholders: content authors, developers and system administrators
* Build new apps or weave into existing apps and projects

Modern Decoupled Architecture
=============================

CrafterCMS is a truly decoupled content management system, yet it supports dynamic and personalized content
delivery. To understand this better, Crafter's decoupled architecture is as follows:

.. image:: /_static/images/architecture/decoupled-overview.webp
        :width: 100%
        :alt: CrafterCMS Decoupled Overview
        :align: center

You'll note that Crafter doesn't share a database between the authoring and delivery systems. Instead, the authoring system reduces the content to XML and static assets, and the delivery system rehydrates those for personalized, planet-scale, disconnected, and fast delivery.

In contrast, many coupled CMSs do claim to be decoupled, but are really not. These systems allow you to have an authoring tier that's separate from the delivery tier; however, these are connected via a database sync. That means that the delivery tiers cannot run without some level of connectivity to the authoring master, and indeed has limits on scale of the delivery tier.

A truly decoupled system will support disconnected delivery (think of a delivery tier that's running in a submarine or on a cruise ship). While running disconnected delivery nodes is an extreme example, it's a good test of the true scalability of the delivery tier of a CMS.

.. image:: /_static/images/architecture/traditional-modern-decoupled.webp
        :width: 100%
        :alt: CrafterCMS Modern Decoupled
        :align: center

How can CrafterCMS deliver a dynamic experience? During ingestion, the delivery tier indexes the content into a local search engine and builds in-memory representation of content items to help drive the dynamic behavior. The search engine and in-memory store are local and therefore share nothing with other nodes, however, you're now able to search and build dynamic responses. These dynanmic responses can be driven by defined user personas along with user identity or prior user behavior. If you have a user store, behavior stream, or social media profile access, you can then tailor the content dynamically in real time. CrafterCMS has two *optional* modules that support this and can be combined/layered with other systems; Crafter Profile (user identity and behavior store), and Crafter Social (User-generated-content store).

Application Development
=======================

.. image:: /_static/images/architecture/application-development.webp
		:width: 100%
		:alt: Application Development on CrafterCMS
		:align: center

CrafterCMS is a very flexible platform, and features:

* Content access via API (extensible GraphQL / REST)

   * Extend GraphQL with your own schema and pull data from any external source to augment what's in the CMS
   * Quickly build REST end-points with small snippets of Groovy

* Modern SPAs (Single Page Applications) support, like React, Angular, Vue

   * Support for in-context editing via content edit pencils, drag and drop component management, etc.

* Server-side business logic developed in

   * Groovy/Java if backed by Crafter Engine
   * Any language if backed by an external service

* HTML5 sites
* Mobile applications and other headless use-cases

Deployment Architecture
=======================

Serverless Deployment
^^^^^^^^^^^^^^^^^^^^^

Starting with CrafterCMS 3.1, serverless delivery is supported via Docker, Kubernetes, and S3 or S3-compatible storage tier. This allows for very fast scaling up/down and a true planet-scale deployment.

.. image:: /_static/images/architecture/serverless-deployment-architecture.webp
        :width: 100%
        :alt: CrafterCMS Serverless Deployment
        :align: center

Traditional Deployment
^^^^^^^^^^^^^^^^^^^^^^

If you're not quite ready for serverless deployment, CrafterCMS deploys quite nicely in a traditional server/scale-group architecture. Here is a typical deployment at a high-level:

.. image:: /_static/images/architecture/typical-deployment.webp
        :width: 100%
        :alt: CrafterCMS Typical Real-life Deployment
        :align: center

Planet-scale
============

To support content authors and end-users across the globe, it's best to deploy CrafterCMS services close to the users. This guarantees fast, yet dynamic, responses to the users (CDNs are great, but they won't help you with dynamic or personalized responses).

The authoring clusters are typically deployed closest to the content authors, whereas delivery clusters are spread across geographies where you have end-users. Delivery nodes can pull content from an arbitrary number of authoring nodes, and are typically deployed in geographies where your end-users are.

.. image:: /_static/images/architecture/global-delivery.webp
        :width: 100%
        :alt: CrafterCMS Geo Distributed Deployment
        :align: center


Equal Support for all Stakeholders
==================================

CrafterCMS tries to be fair to all three primary stakeholders:

* Developers
* Operations
* Authors

It's quite hard to provide a good experience to all three stakeholders, and the CMS architecture plays a crucial role in creating the necessary balance. Consider:

.. image:: /_static/images/architecture/stakeholder-fairness.webp
        :width: 100%
        :alt: CrafterCMS Stakeholder Equality
        :align: center

Traditional CMSs cater to content authors and web editors, and some do so very well. However, developers are then forced to develop in outdated or proprietary frameworks using difficult workflows. Additionally, operations has a hard time supporting these workflows, especially when it comes to code deployments or moving production content back to lower environments.

Some modern headless CMSs do a better job supporting developer's choice of development framework. Operations can be simpler with SaaS-based headless CMSs, but that means up-time, performance, security, etc. is now in the hands of a third party; same for global distribution. If the headless CMS is on-premises, then potentially similar workflow problems may exist. More importantly, authors are simply underserved here as they can't manage the content in-context and are left to edit headless forms without the ability to drag and drop, nor can they see the content they're editing change the project/application in real time.

CrafterCMS, on the other hand, provides:

* Content authors with in-context editing tools and full CMS workflow.
* Developers get to choose their framework, and get to use their own tools.
* Operations get to deploy the system in a modern and scalable manner (Kubernetes), and workflow is much easier thanks to being Git-based and without the need for any database.

   * Code flows forward from lower environments to production, and content flows back from production to lower environments

Git-based CMS
=============

CrafterCMS is Git-based. That means that Crafter applications/projects are actually stored in Git repositories from the outset (except for large binaries that go to bucket storage), and that enables some very effective workflows. Consider:

* Developers work against the Git repo that holds the project/app directly using their IDEs and tools
* Authors work against the same Git repo using a GUI (Crafter Studio), without being aware of Git
* Operations maintains well-known and proven foundational persistence tier, Git, and use that to flow content and code forward and back

.. image:: /_static/images/architecture/git-data-flow.webp
        :width: 100%
        :alt: CrafterCMS Git-based Workflow
        :align: center


Enterprise Content Platform
===========================

CrafterCMS can be further leveraged as an enterprise-wide, content-as-a-service provider. Thanks to being a multi-tenant CMS, any number of authors can manage content for any number of projects/applications, and Crafter can either deliver the applications, or simply provide content snippets to existing applications.

.. image:: /_static/images/architecture/enterprise-content-platform.webp
        :width: 100%
        :alt: CrafterCMS Enterprise Content Platform
        :align: center


Content Enable Existing Applications
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It's also not an all or nothing. Existing applications/projects can leverage Crafter to retrieve content as:

* JSON
* XML
* HTML snippets
* iFrame tiles

The application/project can then be delivered using whatever technology, and simply use Crafter to deliver specific content tiles and assets.

.. image:: /_static/images/architecture/partial-delivery.webp
        :width: 100%
        :alt: CrafterCMS Partial Delivery
        :align: center

CrafterCMS Services
===================

CrafterCMS comprises a number of services that work together to deliver the solution. At a high level:

+------------------+-----------------------------------------------------------------+
|| Subsystem       || High-level Description                                         |
+------------------+-----------------------------------------------------------------+
| Crafter Studio   | Provides the UI and workflow for content authors.               |
+------------------+-----------------------------------------------------------------+
| Crafter Engine   | Delivers the content as HTML or API, honoring inheritance and   |
|                  | localization.                                                   |
+------------------+-----------------------------------------------------------------+
| Crafter Deployer | Handles shuttling the content from authoring to delivery,       |
|                  | content indexing and other publishing related functionality.    |
+------------------+-----------------------------------------------------------------+
| Crafter Profile  | User store and identity augmentation.                           |
+------------------+-----------------------------------------------------------------+
| Crafter Social   | User-generated-content services.                                |
+------------------+-----------------------------------------------------------------+

For more information on most of the components inside the Authoring environment and the Delivery environment, please see the following sections:

    * :ref:`crafter-studio`
    * :ref:`crafter-engine`
    * :ref:`crafter-deployer`
    * :ref:`crafter-profile`
    * :ref:`crafter-social`
