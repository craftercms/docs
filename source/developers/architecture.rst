.. index:: Architecture

.. _architecture:

========================
Crafter CMS Architecture
========================

Crafter CMS distinguishes itself by its modern architecture, in turn this enables:

* Truly Decoupled CMS (disconnected global delivery),  composed of independent microservice-based components
* Dynamic / personalized delivery of every request at speed
* API first CMS (content as a service via GraphQL & REST)
* Git-based CMS (allows for excellent developer cadence)
* Share-nothing, serverless, delivery architecture (planet-scale)
* Front-end agnostic (bring your favorite UI framework or use as a headless CMS)
* Equal support for all three CMS stakeholders: content authors, developers and system administrators
* Build new apps or weave into existing apps and sites

Modern Decoupled Architecture
=============================

Crafter CMS is a truly decoupled content management system, yet it supports dynamic and personalized content
delivery. To understand this better, Crafter's decoupled architecture is as follows:

.. image:: /_static/images/architecture/decoupled-overview.png
        :width: 100%
        :alt: Crafter CMS Decoupled Overview
        :align: center

You'll note that Crafter doesn't share a database between the authoring and delivery systems. Instead, the authoring system reduces the content to XML and static assets, and the delivery system rehydrates those for personalized, planet-scale, disconnected, and fast delivery.

In contrast, many coupled CMSs do claim to be decoupled. These systems allow you to have an authoring tier that's separate from the delivery tier, however, these are connected via a database sync. That means that the delivery tiers cannot run without some level of connectivity to the authoring master, and indeed has limits on scale of the delivery tier.

A truly decoupled system will support disconnected delivery (think of a delivery tier that's running in a submarine or on a cruise ship). While running disconnected delivery nodes is an extreme example, it's a good test of the true scalability of the delivery tier of a CMS.

.. image:: /_static/images/architecture/traditional-modern-decoupled.png
        :width: 100%
        :alt: Crafter CMS Modern Decoupled
        :align: center

How can Crafter CMS deliver a dynamic experience? During ingestion, the delivery tier indexes the content into a local search engine and builds in-memory representation of content items to help drive the dynamic behavior. The search engine and in-memory store are local and therefore share nothing with other nodes, however, you're now able to search and build dynamic responses. These dynanmic responses can be driven by defined user personas along with user identity or prior user behavior. If you have a user store, behavior stream, or social media profile access, you can then tailor the content dynamically in real time. Crafter CMS has two *optional* modules that support this and can be combined/layered with other systems; Crafter Profile (user identity and behavior store), and Crafter Social (User-generated-content store).

Application Development
=======================

.. image:: /_static/images/architecture/application-development.png
		:width: 100%
		:alt: Application Development on Crafter CMS
		:align: center

Crafter CMS is a very flexible platform, and features:

* Content access via API (GraphQL / REST)
* Modern SPAs (Single Page Applications) support, like React, Angular, Vue

   * Support for in-context editing via content edit pencils, drag and drop component management, etc.

* Server-side business logic developed in

   * Groovy/Java if backed by Crafter Engine
   * Any language if backed by an external service

* Simple HTML5 sites
* Mobile applications and other headless use-cases

Deployment Architecture
=======================

Serverless Deployment
^^^^^^^^^^^^^^^^^^^^^

Starting with Crafter CMS 3.1, serverless delivery is supported via Docker, Kubernetes, and S3 or S3-compatible storage tier. This allows for very fast scaling up/down and a true planet-scale deployment.

.. image:: /_static/images/architecture/serverless-deployment-architecture.png
        :width: 100%
        :alt: Crafter CMS Serverless Deployment
        :align: center

Traditional Deployment
^^^^^^^^^^^^^^^^^^^^^^

If you're not quite ready for serverless deployment, Crafter CMS deploys quite nicely in a traditional server/scale-group architecture. Here is a typical deployment at a high-level:

.. image:: /_static/images/architecture/typical-deployment.png
        :width: 100%
        :alt: Crafter CMS Typical Real-life Deployment
        :align: center

Planet-scale
============

To support content authors and end-users across the globe, it's best to deploy Crafter CMS services close to the users. This guarantees fast, yet dynamic, responses to the users (CDNs are great, but they won't help you with dynamic/personalized responses).

The authoring clusters are typically deployed closest to the content authors, whereas delivery clusters are spread across geographies where you have end-users. Delivery nodes can pull content from an arbitrary number of authoring nodes, and are typically deployed in geographies where your end-users are.

.. image:: /_static/images/architecture/global-delivery.png
        :width: 100%
        :alt: Crafter CMS Geo Distributed Deployment
        :align: center


Equality Between Stakeholders
=============================
Crafter CMS tries to be fair to the three primary stakeholders:

* Developers
* Operations
* Authors

It's quite hard to provide a good experience to all three stakeholders, and the CMS architecture plays a crucial role in creating the necessary balance. Consider:

.. image:: /_static/images/architecture/stakeholder-fairness.png
        :width: 100%
        :alt: Crafter CMS Stakeholder Equality
        :align: center

Traditional CMSs cater to content authors and web editors, and do so very well. However, developers are then forced to develop in outdated or proprietary frameworks using difficult workflows. Additionally, operations has a hard time supporting these workflows, especially when it comes to code deployments or moving production content back to lower environments.

More modern headless CMSs do a much better job supporting developer's choice of development framework. Operations can be simpler with SaaS-based headless CMSs, but that means up-time is now in the hands of a third part, same for global distribution. If the headless CMS is on-premises, then potentially similar workflow problems may exist. Authors are simply underserved here as they can't manage the content in-context and are left to edit headless forms without the ability to drag-and-drop, or see the content they're editing change the site/application in real time.

Crafter CMS, on the other hand, provides:

* Content authors with in-context editing tools and full CMS workflow.
* Developers get to choose their framework, and get to use their own tools.
* Operations get to deploy the system in a modern and scalable manner (Kubernetes), and workflow is much easier thanks to being databaseless and Git-based

   * Code flows forward from lower environments to production, and content flows back from production to lower environments

Git-based CMS
=============

Crafter CMS is Git-based. That means that Crafter applications/sites are actually stored in Git repositories from the outset (except for large binaries that go to bucket storage), and that enables some very effective workflows. Consider:

* Developers work against the Git repo that holds the site/app directly using their IDEs and tools
* Authors work against the same Git repo using a GUI (Crafter Studio), without being aware of Git
* Operations maintains well-known and proven foundational persistence tier, Git, and use that to flow content and code forward and back

.. image:: /_static/images/architecture/git-data-flow.png
        :width: 100%
        :alt: Crafter CMS Git-based Workflow
        :align: center


Enterprise Content Platform
===========================

Crafter CMS can be further leveraged as an enterprise-wide content as a service provider. Thanks to being a multi-tenant CMS, any number of authors can manage content for any number of sites/applications, and Crafter can either deliver the applications, or simply provide content snippets to existing applications.

.. image:: /_static/images/architecture/enterprise-content-platform.png
        :width: 100%
        :alt: Crafter CMS Enterprise Content Platform
        :align: center


Content Enable Existing Applications
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It's also not an all or nothing. Existing applications/sites can leverage Crafter to retrieve content as:

* JSON
* XML
* HTML snippets
* iFrame tiles

The application/site can then be delivered using whatever technology, and simply use Crafter to deliver specific content tiles and assets.

.. image:: /_static/images/architecture/partial-delivery.png
        :width: 100%
        :alt: Crafter CMS Partial Delivery
        :align: center

Crafter CMS Services
====================

Crafter CMS comprises a number of services that work together to deliver the solution. At a high level:

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
