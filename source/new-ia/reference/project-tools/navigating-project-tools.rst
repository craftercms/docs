:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:

.. index:: Navigating Project Tools

.. _newIa-navigating-project-tools:

========================
Navigating Project Tools
========================

In this section, we discuss the available modules in the |projectTools| dialog from any of the available out-of-the-box blueprints.  The modules available in the Project Tools can be configured by following :ref:`newIa-user-interface-configuration`

To get to |projectTools|, click on the **Toggle Sidebar** icon (CrafterCMS logo with hamburger next to it) at the top left of your browser, if it's not yet open.

.. image:: /_static/images/site-admin/open-sidebar.webp
    :alt: Site Admin - Open Sidebar
    :align: center
    :width: 40%

|

Once the **Sidebar** is open, click on |projectTools|

.. image:: /_static/images/site-admin/open-project-tools.webp
    :alt: Site Admin - Click on Project Tools
    :align: center
    :width: 25%

|

Here are the modules you can access from |projectTools|

.. image:: /_static/images/site-admin/project-tools-menu.webp
    :alt: Site Admin - Project Tools Modules
    :align: center
    :width: 25%

|

-------------
Content Types
-------------
Content Types contains the following:

* Model: The content pieces that will be captured from the content authors for the page or component
* View: The view template that will render the content, typically to HTML markup
* Controller: The controller that handles the incoming request for the page or component

The Content Types module under **Project Tools** allows the user to view existing content types and to create new content types

.. image:: /_static/images/site-admin/project-tools-content-types.webp
    :alt: Site Administrator - Project Tools Content Types
    :align: center
    :width: 60%

|

For more information on content modeling and content types, see :ref:`newIa-content-modeling` in the Developer section

---------------
Encryption Tool
---------------

The ``Encryption Tool`` allows the user to encrypt sensitive data such as access keys and passwords, that shouldn't be publicly available to anyone but developers and administrators

.. image:: /_static/images/site-admin/project-tools-encryption-tool.webp
   :alt: Site Administrator - Project Tools Encryption Tool
   :align: center
   :width: 60%

|

For more information on how to use the encryption tool, see :ref:`newIa-studio-encryption-tool`.

-------------
Configuration
-------------

Configuration allows the user to configure the different settings in CrafterCMS for the project.

.. image:: /_static/images/site-admin/project-tools-configuration.webp
    :alt: Site Admin - Project Tools Configuration
    :align: center
    :width: 60%

|

For more information on what settings can be configured, see :ref:`newIa-configuration`

-----
Audit
-----

Audit logs displays the date, time, user and action performed to content in the project:

.. image:: /_static/images/site-admin/project-tools-audit.webp
    :alt: Site Admin - Project Tools Audit
    :align: center
    :width: 60%

|

See :ref:`newIa-studio-logging` for some more information on viewing logs.

---------------
Workflow States
---------------

Workflow States allows the user to manually set the workflow state of every file in the project.

.. image:: /_static/images/site-admin/project-tools-workflow-states.webp
    :alt: Site Admin - Project Tools Workflow States
    :align: center
    :width: 60%

|

For more details on manually setting workflow states, see :ref:`newIa-setting-workflow-states`

-----------
Log Console
-----------

The **Log Console** allows the user to view messages depending on what log levels and what Java packages have been set for tracking.

.. image:: /_static/images/site-admin/project-tools-log-console.webp
    :alt: Site Admin - Project Tools Log Console
    :align: center
    :width: 60%

|

See :ref:`newIa-studio-log-console` for some more information on viewing logs.

----------
Publishing
----------

The **Publishing** module under **Project Tools** allows the user to view the publishing status, perform a bulk publish or to publish content using commit ID(s)

.. image:: /_static/images/site-admin/project-tools-publishing.webp
    :alt: Site Admin - Project Tools Publishing
    :align: center
    :width: 60%

|

For more information on Publishing, see :ref:`newIa-publishing-and-status`

---
Git
---

The **Git** under **Project Tools** allows the user to perform Git operations such as viewing remote repositories linked to the project and options to pull and push to the listed remote repositories.  It also allows the user to add a remote repository to the project.

.. image:: /_static/images/site-admin/project-tools-git.webp
    :alt: Site Admin - Project Tools Git
    :align: center
    :width: 60%

|

For more information on Git under |projectTools|, see :ref:`newIa-project-tools-git`

-------
GraphQL
-------

CrafterCMS provides built-in support for GraphQL to query content in any project without writing additional code.  **GraphiQL** is a simple GraphQL client that you can use in Crafter Studio to run GraphQL queries and explore the schema documentation for a project without the need of any other tool.

.. image:: /_static/images/site-admin/project-tools-graphql.webp
    :alt: Site Admin - Project Tools GraohiQL
    :align: center
    :width: 70%

|

For more information on Studio support for GraphQL, see :ref:`newIa-graphql`

-----------------
Plugin Management
-----------------

Project plugins extend Crafter Studio (authoring) and Crafter Engine and the site/web application (delivery).
The Project Tools **Plugin Management** allows the user to install and to view currently installed, project plugins

.. image:: /_static/images/site-admin/project-tools-plugin-mgmt.webp
   :alt: Site Admin - Project Tools Plugin Management
   :align: center
   :width: 70%

For more information on managing project plugins, see :ref:`newIa-plugin-management`
