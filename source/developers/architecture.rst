.. _architecture:

.. index:: Architecture

=======================
High Level Architecture
=======================

.. image:: /_static/images/crafter-cloud-v8-Detailed.png
        :width: 100%
        :alt: Crafter CMS Architecture
        :align: center

The Crafter CMS architecture at a high level consists of the Authoring Environment and the Delivery Environment.

In the authoring environment, Crafter Studio provides all the content management services and integrates with repositories like Git, Alfresco and other CMIS based platforms to enable authoring, management, and publishing of all content. Crafter Studio provides a comprehensive set of user-friendly features for managing and optimizing of experiences.

In the delivery environment, Crafter Engine provides content delivery services to power any type of Web or mobile application.  It consumes content published through Crafter Studio and provides developers with the foundation for quickly building high-performance, flexible Web and mobile applications. Crafter Engine provides out-of-the-box integration with numerous data sources and application services. Crafter Engine can easily be integrated with other applications such as CRM and sales force automation, marketing and email campaign management, and other enterprise systems required for optimizing the Web experience for your audience.

The management and delivery of content is decoupled and separate, allowing each system to be optimized for its purpose, audience and scalability requirements. Multi-channel publishing is naturally supported, and mobile devices and applications are enabled by means of both native device support (iOS and Android) and HTML5 support.

For more information on all the components inside the Authoring environment, the Delivery environment and the Deployer, please see the following sections:

    * :ref:`crafter-cms`
    * :ref:`crafter-core`
    * :ref:`crafter-engine`
    * :ref:`crafter-studio`
    * :ref:`crafter-search`
    * :ref:`crafter-deployer`
    * :ref:`crafter-profile`
    * :ref:`crafter-social`

----------------------
Decoupled Architecture
----------------------

A decoupled CMS architecture separates content authoring capabilities and infrastructure, from the delivery capabilities and infrastructure.

    * Native multi-channel support via publishing.
    * Authoring and delivery components typically have different

        * Authentication and authorization requirements (internal vs external)
        * Service Level Agreements (SLA)
        * Scalability requirements

    * Decoupled architectures also demonstrate the separation of principal concerns which makes upgrading and maintaining software easier.

.. image:: /_static/images/crafter-cloud-v8-Decoupled.png
        :width: 100%
        :alt: Crafter CMS Decoupled Overview
        :align: center

Crafter CMS is a decoupled CMS that separates authoring and publishing capabilities into their own subsystems.  Content is written and published once but can be requested and presented uniquely by any number of different channels / content consumers.  The process of making content live is done through a publishing mechanism where content is pushed from the authoring platform (and underlying content repository) to a content delivery infrastructure.

    * Easier to scale for high traffic websites, and to handle multi-site management.
    * SLAs are decoupled.  Authoring can be down for upgrades without impacting delivery. The reverse is also true.
    * Scale only the components that you need.  If you are not adding more authors then there is no need to scale out authoring.  This affects the complexity of the solution and also license costs where they are involved.
    * Code complexity is isolated within each of the two components (authoring and delivery).  Each piece can be as simple or complex as is needed without impacting the other.
    * Integration is a built in concept, as content is natively published to the remote delivery system, it is generally straightforward to push to other systems as well. Also note, integration takes place on the authoring tier safely away from the live site protecting stability and performance.
    * Content migration and sharing with other systems is generally much more innate to the architecture.
    * Multi-channel support by nature, as publishing to mobile apps, social channels, and other digital channels is a natural extension of the native publishing capability.
    * Content sharing and syndication are more naturally supported.
    * When complexity is isolated and scaling is simple, it’s easier to develop and deploy rich features to your users.
    * Integrating with devOps is much easier.  When you need to integrate your development tools, process/automation and source code repository you are inherently entering in to a discussion about security and systems administration — all of which are significantly more approachable if authoring and delivery systems are separated.
