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

-------------
Project Tools
-------------

|projectTools| contains project administration tools such as Configurations, Plugin Management, Encryption Tool, etc.
The following contains more information on administration tools

.. toctree::
   :maxdepth: 3

   project-tools/index

.. Start introducing topics of interest and then link deeper into how to configure/work with these
    Authoring
        Security
            Role mapping
            Permission mapping
        Sidebar
        External stores?
            AWS
            Box
            WebDAV
        Rich media processing
            Images
            Video (transcoding)
        Publishing
        UI
        Notifications
        RTE
        ...
    Delivery
        Security
        URL Rewrites and Vanity URLs




----------------
Sidebar Cabinets
----------------

.. todo: insert picture here of sidebar cabinets and description

--------
Security
--------

----------
Composable
----------

^^^^^^^^^^^^^^^^^^^^^^^
Experience Builder (XB)
^^^^^^^^^^^^^^^^^^^^^^^

------------
Localization
------------

.. todo: add description here on what is localization

To configure localized content based on language:
:ref:`newIa-language-based-localized-content`

To customize how dates & times get displayed on Studio UI for a project
:ref:`newIa-studio-project-time-zone`
