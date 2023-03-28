:is-up-to-date: False
:nosearch:

.. _newIa-project-admin:

============================
Project (Site) Administrator
============================

This section details activities related to project administration in CrafterCMS. The content is oriented towards CrafterCMS administration primarily through Crafter Studio.

Most configuration files can be accessed through Crafter Studio through the **Sidebar ->** |projectTools| **-> Configuration**. but can also be modified by accessing the configuration files directly.  Please note that it is recommended that changes to configuration files be done through the Crafter Studio UI.

-----------------------
What is a Project/Site?
-----------------------

A project or a site is a collection of related pages/components and assets.

.. include anatomy of a craftercms repository



.. Start introducing topics of interest and then link deeper into how to configure/work with these
    Authoring
        Security
            Role mapping
            Permission mapping
            Authentication with JWT
            Additional authentication mechanisms, ref Sys Admin auth
        UI
            Sidebar
            Top Nav Bar
            Dashboards
            Localization
            ...
        Content
            Large Assets and External Stores
                Blob store
                AWS S3
                Box
                WebDAV
            Rich media processing
                Images
                Video (transcoding)
            Rich Text Editor (RTE)
            Localization
        Preview
            Proxy configuration
        Publishing
        Notifications
        Staging
        Multi-environment Configuration
        ...
    Delivery
        URL Rewrites and Vanity URLs
        Security, reference Sys Admin

------------
Localization
------------

.. todo: add description here on what is localization, and move the articles to this location

To configure localized content based on language:
:ref:`newIa-language-based-localized-content`

To customize how dates & times get displayed on Studio UI for a project
:ref:`newIa-studio-project-time-zone`

-------------
Project Tools
-------------

|projectTools| contains project administration tools such as Configurations, Plugin Management, Encryption Tool, etc.
The following contains more information on administration tools

.. toctree::
   :maxdepth: 3

   /new-ia/reference/project-tools/index