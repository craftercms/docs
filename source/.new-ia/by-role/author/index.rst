:is-up-to-date: False

.. _newIa-author:

======
Author
======

.. Section Outline
   4.1 Authoring Screens
   4.2 Authoring Tools
   4.3 Examples

Authors creates, edits and submits content for experiences.  CrafterCMS's Crafter Studio provides the author an easy to use
authoring and management system for developing and optimizing the content and dynamic site visitor experience for any
and all of your Web properties.

The :ref:`site administrator <newIa-site-admin>` and the :ref:`developer <newIa-developer>` sets things up before an
author begins contributing content for the web experience being built. This section contains information on the
authoring environment and how authors manages content.

.. include:: /includes/how-craftercms-works.rst

* Authors work in Crafter Studio

  * It is a web based application. There is nothing to install.
  * It is multi-tenant so you can manage as many sites as you need to
  * It provides a safe environment to make and preview content changes
  * All changes are versioned and audited
  * Once ready, content is submitted to workflow for approval

* On approval, content is published to the live environment.

  * Content can be published immediately
  * Or on a schedule

* Crafter Studio can publish to anywhere including social networks however, we often Publish to Crafter Engine.

  * Crafter Engine is a high performance, Spring MVC based content delivery engine.
  * Crafter Engine delivers highly personalized HTML (and other markup) based content and Content APIS (Content as a Service).
  * Crafter Engine is multi-channel.  It supports Responsive Design and Adaptive Design as well as Content as API(s)
  * Crafter Engine is multi-tenant so you can deliver as many sites as you need to.

-----------------
Authoring Screens
-----------------
.. toctree::
   :maxdepth: 2

   author-screens

---------------
Authoring Tools
---------------


--------
Examples
--------

In this section we'll take a closer look on how authors uses the tools available in Crafter Studio for creating content.

.. toctree::
   :maxdepth: 2

   authors-pages
   authors-assets
   authors-search
   authors-targeting
   authors-workflows
   authors-xb
