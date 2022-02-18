:is-up-to-date: True

.. index:: Navigating Site Tools

.. _navigating-site-tools:

=====================
Navigating Site Tools
=====================

In this section, we discuss the available modules in the |siteConfig| **Sidebar** from any of the available out-of-the-box blueprints.  The modules available in the Site Tools Sidebar can be configured by following :ref:`site-config-tools`

To get to |siteConfig|, click on the **Toggle Sidebar** icon (CrafterCMS logo with hamburger next to it) at the top left of your browser, if it's not yet open.

.. image:: /_static/images/site-admin/open-sidebar.png
    :alt: Site Admin - Open Sidebar
    :align: center
    :width: 25%

Once the **Sidebar** is open, click on |siteConfig|

.. image:: /_static/images/site-admin/open-site-config.png
    :alt: Site Admin - Click on Site Tools
    :align: center
    :width: 25%

Here are the modules you can access from |siteConfig|

.. image:: /_static/images/site-admin/site-config-menu.png
    :alt: Site Admin - Site Tools Modules
    :align: center
    :width: 25%

-------------
Content Types
-------------
Content Types contains the following:

* Model: The content pieces that will be captured from the content authors for the page or component
* View: The view template that will render the content, typically to HTML markup
* Controller: The controller that handles the incoming request for the page or component

The Content Types module under **Site Tools** allows the user to view existing content types and to create new content types

.. image:: /_static/images/site-admin/site-config-content-types.jpg
    :alt: Site Administrator - Site Tools Content Types
    :align: center
    :width: 60%

For more information on content modeling and content types, see :ref:`content-modeling` in the Developer section

---------------
Encryption Tool
---------------

The ``Encryption Tool`` allows the user to encrypt sensitive data such as access keys and passwords, that shouldn't be publicly available to anyone but developers and administrators

.. image:: /_static/images/site-admin/site-tools-encryption-tool.png
   :alt: Site Administrator - Site Tools Encryption Tool
   :align: center
   :width: 60%

For more information on how to use the encryption tool, see :ref:`nav-menu-encryption-tool`.

-------------
Configuration
-------------

Configuration allows the user to configure the different settings in CrafterCMS for the site.

.. image:: /_static/images/site-admin/site-config-configuration.jpg
    :alt: Site Admin - Site Config Configuration
    :align: center
    :width: 60%

For more information on what settings can be configured, see :ref:`configuration`

-----
Audit
-----

Audit logs displays the date, time, user and action performed to content in the site:

.. image:: /_static/images/site-admin/site-config-audit.jpg
    :alt: Site Admin - Site Config Audit
    :align: center
    :width: 60%

See :ref:`studio-logging` for some more information on viewing logs.

---------------
Workflow States
---------------

Workflow States allows the user to manually set the workflow state of every file in the site.

.. image:: /_static/images/site-admin/site-config-workflow-states.png
    :alt: Site Admin - Site Config Workflow States
    :align: center
    :width: 60%



For more details on manually setting workflow states, see :ref:`setting-workflow-states`

-----------
Log Console
-----------

The **Log Console** allows the user to view messages depending on what log levels and what Java packages have been set for tracking.

.. image:: /_static/images/site-admin/site-config-log-console.png
    :alt: Site Admin - Site Config Log Console
    :align: center
    :width: 60%

See :ref:`studio-log-console` for some more information on viewing logs.

----------
Publishing
----------

The **Publishing** module under **Site Config** allows the user to view the publishing status, perform a bulk publish or to publish content using commit ID(s)

.. image:: /_static/images/site-admin/site-config-publishing.jpg
    :alt: Site Admin - Site Config Publishing
    :align: center
    :width: 60%

For more information on Publishing, see :ref:`publishing-and-status`

-------------------
Remote Repositories
-------------------

The **Remote Repositories** under **Site Config** allows the user to view remote repositories linked to the site and options to pull and push to the listed remote repositories.  It also allows the user to add a remote repository to the site.

.. image:: /_static/images/site-admin/site-config-remote-repositories.png
    :alt: Site Admin - Site Config Remote Repositories
    :align: center
    :width: 60%

For more information on Remote Repositories under |siteConfig|, see :ref:`remote-repositories`

--------
GraphiQL
--------

CrafterCMS provides built-in support for GraphQL to query content in any site without writing additional code.  **GraphiQL** is a simple GraphQL client that you can use in Crafter Studio to run GraphQL queries and explore the schema documentation for a site without the need of any other tool.

.. image:: /_static/images/site-admin/site-config-graphiql.jpg
    :alt: Site Admin - Site Config GraohiQL
    :align: center
    :width: 60%

For more information on Studio support for GraphQL, see :ref:`working_with_graphql`

-----------------
Plugin Management
-----------------

Site plugins extend Crafter Studio (authoring) and Crafter Engine and the site/web application (delivery).
The Site Tools **Plugin Management** allows the user to install and to view currently installed, site plugins

.. image:: /_static/images/site-admin/site-config-plugin-mgmt.png
   :alt: Site Admin - Site Config Plugin Management
   :align: center
   :width: 60%

For more information on managing site plugins, see :ref:`plugin-management`
