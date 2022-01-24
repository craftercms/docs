:is-up-to-date: False

.. _newIa-general-architecture:

====================
General Architecture
====================

CrafterCMS distinguishes itself by its modern architecture, which in turn enables:

* Truly decoupled content management (and disconnected global delivery), composed of independent microservice-based components
* Dynamic, personalized content delivery of every request at speed
* API first CMS (content as a service via extensible GraphQL & REST)
* Git-based CMS (allows for excellent developer cadence)
* Shared-nothing, serverless, delivery architecture (planet-scale)
* Front-end agnostic (bring your favorite UI framework or use as a headless CMS)
* Equal support for all three CMS stakeholders: content authors, developers and system administrators
* Build new apps or weave into existing apps and sites

-----------------------------
Modern Decoupled Architecture
-----------------------------

CrafterCMS is a truly decoupled content management system, yet it supports dynamic and personalized content
delivery. To understand this better, Crafter's decoupled architecture is as follows:

.. image:: /_static/images/architecture/decoupled-overview.png
    :width: 100%
    :alt: CrafterCMS Decoupled Overview
    :align: center

|

You'll note that Crafter doesn't share a database between the authoring and delivery systems. Instead, the authoring system reduces the content to XML and static assets, and the delivery system rehydrates those for personalized, planet-scale, disconnected, and fast delivery.

In contrast, many coupled CMSs do claim to be decoupled, but are really not. These systems allow you to have an authoring tier that's separate from the delivery tier; however, these are connected via a database sync. That means that the delivery tiers cannot run without some level of connectivity to the authoring master, and indeed has limits on scale of the delivery tier.

A truly decoupled system will support disconnected delivery (think of a delivery tier that's running in a submarine or on a cruise ship). While running disconnected delivery nodes is an extreme example, it's a good test of the true scalability of the delivery tier of a CMS.

.. image:: /_static/images/architecture/traditional-modern-decoupled.png
    :width: 100%
    :alt: CrafterCMS Modern Decoupled
    :align: center

|

How can CrafterCMS deliver a dynamic experience? During ingestion, the delivery tier indexes the content into a local search engine and builds in-memory representation of content items to help drive the dynamic behavior. The search engine and in-memory store are local and therefore share nothing with other nodes, however, you're now able to search and build dynamic responses. These dynamic responses can be driven by defined user personas along with user identity or prior user behavior. If you have a user store, behavior stream, or social media profile access, you can then tailor the content dynamically in real time. CrafterCMS has two *optional* modules that support this and can be combined/layered with other systems; Crafter Profile (user identity and behavior store), and Crafter Social (User-generated-content store).

-----------------------
Application Development
-----------------------

.. image:: /_static/images/architecture/application-development.jpg
    :width: 100%
    :alt: Application Development on CrafterCMS
    :align: center

|

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

