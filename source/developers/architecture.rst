.. _architecture:

.. index:: Architecture

========================
Crafter CMS Architecture
========================

Crafter CMS distinguishes itself by its modern architecture, in turn this enables:

* Truly Decoupled CMS (disconnected global delivery),  composed of independent microservice-based components
* Dynamic / personalized delivery of every request at speed
* API first CMS (content as a service)
* Git-based CMS (allows for excellent developer cadence)
* Share-nothing delivery architecture (extreme scale)
* Front-end agnostic (bring your favorite UI framework or use as a headless CMS)
* Equal support for all three CMS stakeholders: content authors, developers and system administrators

Crafter CMS is a true decoupled content management system, yet it supports dynamic and personalized content
delivery. To understand this better, typical decoupled content management systems have the following general
architecture:

.. image:: /_static/images/architecture/decoupled-overview.png
        :width: 100%
        :alt: Crafter CMS Decoupled Overview
        :align: center

Most decoupled content management systems compile the content into the final artifacts and push that to the delivery tier. While this allows for disconnected delivery, and extreme scalability (just add servers on the delivery tier that deliver the content, or use a CDN), this approach doesn't allow for dynamic/personalized delivery of content.

Many actually coupled CMSs do claim to be decoupled. These systems allow you to have an authoring tier that's separate from the delivery tier, however, these are indeed connected via a database sync. That means that the delivery tiers cannot run without some level of connectivity to the authoring master, and indeed has limits on scale of the delivery tier.

A truly decoupled system will support disconnected delivery (think of a delivery tier that's running in a submarine or on a cruise ship). While running disconnected delivery nodes is an extreme example, it's a good test of the true scalability of the delivery tier of a CMS.

Crafter CMS is truly decoupled and only assets are published from the authoring tier to the publishing tier. These assets comprise XML files and static assets (like images, CSS, Groovy code, etc.). The delivery tier ingests these artifacts and can then deliver the desired experience.

How can Crafter CMS deliver a dynamic experience? During ingestion, the delivery tier indexes the content into a local search engine and builds in-memory representation of content items to help drive the dynamic behavior. The search engine and in-memory store are local and therefore share nothing with other nodes, however, you're now able to search and build dynamic responses.

What about personalization and targeting? Crafter CMS has two subsystems that are backed by a NoSQL database to help with personalization and UGC (User Generated Content): Crafter Profile and Crafter Social. These collected information about the user (logged in or not), and can drive dynamic behavior, and allow the user to engage with the site (comments, ratings, etc.).

Hang on, you said disconnected delivery!? Crafter Profile and Crafter Social do indeed need a database, but: 1) the CMS doesn't mandate these, you can deliver content without these capabilities, 2) the choice NoSQL helps with geo-distribution, high-scale, and some disconnection for eventual consistency.

Below is a diagram showing Crafter CMS including all microservices for authoring and delivery:

.. image:: /_static/images/architecture/detailed.png
        :width: 100%
        :alt: Crafter CMS Architecture
        :align: center

You'll quickly note that the authoring tier has very different SLAs, scalability, and geo-location requirements when compared to the delivery tier. It's very likely that you'll only need the authoring environment present in one data-center (per set of sites), and will have a bounded set of users and less stringent SLA. Whereas for delivery, you'll likely to need the delivery tier to be geographically distributed for faster personalized response time to end-users, unbounded users and very high SLAs.

A typical deployment of Crafter CMS on Amazon AWS will have 1 region for authoring, and 3 regions for delivery that will result in sub-one-second HTML response time to end-users globally.

Here is a typical AWS deployment at a high-level:

.. image:: /_static/images/architecture/typical-deployment.png
        :width: 100%
        :alt: Crafter CMS Typical Real-life AWS Deployment
        :align: center

The authoring cluster is typically deployed closest to the content authors, whereas delivery clusters are spread across geographies where you have end-users. If content authors are also globally distributed, authoring clusters are deployed near the authors to speed up their experience as well. Delivery nodes can pull content from an arbitrary number of authoring nodes.

.. image:: /_static/images/architecture/global-delivery.png
        :width: 100%
        :alt: Crafter CMS Typical Real-life Global Deployment
        :align: center


For more information on most of the components inside the Authoring environment and the Delivery environment, please see the following sections:

    * :ref:`crafter-studio`
    * :ref:`crafter-engine`
    * :ref:`crafter-search`
    * :ref:`crafter-deployer`
    * :ref:`crafter-profile`
    * :ref:`crafter-social`
