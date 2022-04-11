:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Navigating Project Tools

.. _navigating-project-tools:

========================
Navigating Project Tools
========================

In this section, we discuss the available modules in the |projectTools| dialog from any of the available out-of-the-box blueprints.  The modules available in the Project Tools can be configured by following :ref:`user-interface-configuration`

To get to |projectTools|, click on the **Toggle Sidebar** icon (CrafterCMS logo with hamburger next to it) at the top left of your browser, if it's not yet open.

.. image:: /_static/images/site-admin/open-sidebar.png
    :alt: Site Admin - Open Sidebar
    :align: center
    :width: 40%

|

Once the **Sidebar** is open, click on |projectTools|

.. image:: /_static/images/site-admin/open-project-tools.png
    :alt: Site Admin - Click on Project Tools
    :align: center
    :width: 25%

|

Here are the modules you can access from |projectTools|

.. image:: /_static/images/site-admin/project-tools-menu.png
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

.. image:: /_static/images/site-admin/project-tools-content-types.jpg
    :alt: Site Administrator - Project Tools Content Types
    :align: center
    :width: 60%

|

For more information on content modeling and content types, see :ref:`content-modeling` in the Developer section

---------------
Encryption Tool
---------------

The ``Encryption Tool`` allows the user to encrypt sensitive data such as access keys and passwords, that shouldn't be publicly available to anyone but developers and administrators

.. image:: /_static/images/site-admin/project-tools-encryption-tool.png
   :alt: Site Administrator - Project Tools Encryption Tool
   :align: center
   :width: 60%

|

For more information on how to use the encryption tool, see :ref:`nav-menu-encryption-tool`.

-------------
Configuration
-------------

Configuration allows the user to configure the different settings in CrafterCMS for the project.

.. image:: /_static/images/site-admin/project-tools-configuration.jpg
    :alt: Site Admin - Project Tools Configuration
    :align: center
    :width: 60%

|

For more information on what settings can be configured, see :ref:`configuration`

-----
Audit
-----

Audit logs displays the date, time, user and action performed to content in the project:

.. image:: /_static/images/site-admin/project-tools-audit.jpg
    :alt: Site Admin - Project Tools Audit
    :align: center
    :width: 60%

|

See :ref:`studio-logging` for some more information on viewing logs.

---------------
Workflow States
---------------

Workflow States allows the user to manually set the workflow state of every file in the project.

.. image:: /_static/images/site-admin/project-tools-workflow-states.jpg
    :alt: Site Admin - Project Tools Workflow States
    :align: center
    :width: 60%

|

For more details on manually setting workflow states, see :ref:`setting-workflow-states`

-----------
Log Console
-----------

The **Log Console** allows the user to view messages depending on what log levels and what Java packages have been set for tracking.

.. image:: /_static/images/site-admin/project-tools-log-console.jpg
    :alt: Site Admin - Project Tools Log Console
    :align: center
    :width: 60%

|

See :ref:`studio-log-console` for some more information on viewing logs.

----------
Publishing
----------

The **Publishing** module under **Project Tools** allows the user to view the publishing status, perform a bulk publish or to publish content using commit ID(s)

.. image:: /_static/images/site-admin/project-tools-publishing.jpg
    :alt: Site Admin - Project Tools Publishing
    :align: center
    :width: 60%

|

For more information on Publishing, see :ref:`publishing-and-status`

---
Git
---

The **Git** under **Project Tools** allows the user to perform Git operations such as viewing remote repositories linked to the project and options to pull and push to the listed remote repositories.  It also allows the user to add a remote repository to the project.

.. image:: /_static/images/site-admin/project-tools-git.png
    :alt: Site Admin - Project Tools Git
    :align: center
    :width: 60%

|

For more information on Git under |projectTools|, see :ref:`project-tools-git`

--------
GraphiQL
--------

CrafterCMS provides built-in support for GraphQL to query content in any project without writing additional code.  **GraphiQL** is a simple GraphQL client that you can use in Crafter Studio to run GraphQL queries and explore the schema documentation for a project without the need of any other tool.

.. image:: /_static/images/site-admin/project-tools-graphiql.jpg
    :alt: Site Admin - Project Tools GraohiQL
    :align: center
    :width: 60%

|

For more information on Studio support for GraphQL, see :ref:`working_with_graphql`

-----------------
Plugin Management
-----------------

Project plugins extend Crafter Studio (authoring) and Crafter Engine and the site/web application (delivery).
The Project Tools **Plugin Management** allows the user to install and to view currently installed, project plugins

.. image:: /_static/images/site-admin/project-tools-plugin-mgmt.jpg
   :alt: Site Admin - Project Tools Plugin Management
   :align: center
   :width: 70%

For more information on managing project plugins, see :ref:`plugin-management`
