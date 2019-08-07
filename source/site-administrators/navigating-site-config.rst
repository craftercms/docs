:is-up-to-date: True

.. index:: Navigating Site Config

.. _navigating-site-config:

======================
Navigating Site Config
======================

In this section, we discuss the available modules in the |siteConfig| **Sidebar** from any of the available out-of-the-box blueprints.  The modules available in the Site Config Sidebar can be configured by following :ref:`site-config-tools`

To get to |siteConfig|, click on **Sidebar** at the top left of your browser, if it's not yet open.

.. image:: /_static/images/site-admin/open-sidebar.png
    :alt: Site Admin - Open Sidebar
    :align: center
    :width: 55%

Once the **Sidebar** is open, click on |siteConfig|

.. image:: /_static/images/site-admin/open-site-config.png
    :alt: Site Admin - Click on Site Config
    :align: center

Here are the modules you can access from |siteConfig|

.. image:: /_static/images/site-admin/site-config-menu.png
    :alt: Site Admin - Site Config Modules
    :align: center

-------------
Content Types
-------------
Content Types contains the following:

* Model: The content pieces that will be captured from the content authors for the page or component
* View: The view template that will render the content, typically to HTML markup
* Controller: The controller that handles the incoming request for the page or component

The Content Types module under **Site Config** allows the user to view existing content types and to create new content types

.. image:: /_static/images/site-admin/site-config-content-types.png
    :alt: Site Admin - Site Config Content Types
    :align: center

For more information on content modeling and content types, see :ref:`content-modeling` in the Developer section

-------------
Configuration
-------------

Configuration allows the user to configure the different settings in Crafter CMS for the site.

.. image:: /_static/images/site-admin/site-config-configuration.png
    :alt: Site Admin - Site Config Configuration
    :align: center

For more information on what settings can be configured, see :ref:`configuration`

-----
Audit
-----

Audit logs displays the date, time, user and action performed to content in the site:

.. image:: /_static/images/site-admin/site-config-audit.png
    :alt: Site Admin - Site Config Audit
    :align: center

See :ref:`studio-logging` for some more information on viewing logs.

---------------
Workflow States
---------------

Workflow States allows the user to manually set the workflow state of every file in the site.

.. image:: /_static/images/site-admin/site-config-workflow-states.jpg
    :alt: Site Admin - Site Config Workflow States
    :align: center

For more details on manually setting workflow states, see :ref:`setting-workflow-states`

-----------
Log Console
-----------

The **Log Console** allows the user to view messages depending on what log levels and what Java packages have been set for tracking.

.. image:: /_static/images/site-admin/site-config-log-console.png
    :alt: Site Admin - Site Config Log Console
    :align: center

See :ref:`studio-log-console` for some more information on viewing logs.

----------
Publishing
----------

The **Publishing** module under **Site Config** allows the user to view the publishing status, perform a bulk publish or to publish content using commit ID(s)

.. image:: /_static/images/site-admin/site-config-publishing.png
    :alt: Site Admin - Site Config Publishing
    :align: center

For more information on Publishing, see :ref:`publishing-and-status`

-------------------
Remote Repositories
-------------------

The **Remote Repositories** under **Site Config** allows the user to view remote repositories linked to the site and options to pull and push to the listed remote repositories.  It also allows the user to add a remote repository to the site.

.. image:: /_static/images/site-admin/site-config-remote-repositories.png
    :alt: Site Admin - Site Config Remote Repositories
    :align: center

For more information on Remote Repositories under |siteConfig|, see :ref:`remote-repositories`

--------
GraphiQL
--------

Crafter CMS provides built-in support for GraphQL to query content in any site without writing additional code.  **GraphiQL** is a simple GraphQL client that you can use in Crafter Studio to run GraphQL queries and explore the schema documentation for a site without the need of any other tool.

.. image:: /_static/images/site-admin/site-config-graphiql.png
    :alt: Site Admin - Site Config GraohiQL
    :align: center

For more information on Studio support for GraphQL, see :ref:`working_with_graphql`