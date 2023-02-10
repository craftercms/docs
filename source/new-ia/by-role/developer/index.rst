:is-up-to-date: True
:last-updated: 4.0.3

:nosearch:

..  _newIa-developer:

**********
Developers
**********

This section focuses on how to build content rich applications backed by CrafterCMS.  It covers
the basic topics you need to define a content type and render that content as part of a page,
component or service.  It also covers topics like building queries, accessing services and extending
the core platforms and the developer workflow (DevContentOps).

Developers need to be comfortable with Content Modeling (how to represent content in CrafterCMS
for your application to retrieve said content), and how to access content items from your application/project.

The following gets you started with content modeling, content retrieval, and more:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   composable/index
   headless/index
   templated/index
   devcontentops/index
   upgrade/index

|

.. raw:: html

   <hr>


**Content Inheritance**

CrafterCMS also supports content inheritance out of the box, and supports it via a pluggable mechanism
that allows developers to augment or override what’s out of the box. Below is more information on
content inheritance:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   content-inheritance

|

.. raw:: html

   <hr>

**Content Search**

To search for content in your project:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   content-search

|

.. raw:: html

   <hr>

**Targeting**

CrafterCMS allows content targeting by providing the ability to render content adapted to specific users,
depending on different aspects like geographical location, language, preferences, etc.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   targeting

|
|

.. raw:: html

   <hr>

**Logs**

While developing your project, there are times when you’d like to see more log details, to figure out what
is happening and address it as needed.  Overriding the logging levels allows you to see more or less
details depending on your needs.

These logs/data may also be moved to another location if desired.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   override-logging-levels
   resources/change-log-data-folder-location

|

.. raw:: html

   <hr>

**Developer Workflow (DevContentOps)**

CrafterCMS supports content authoring, publishing and developer workflow and how to configure
and implement it, the basic mechanics of DevContentOps.

The following looks at the developer workflow in depth:

.. toctree::
   :maxdepth: 2
   :titlesonly:

   developer-workflow/index

|

.. raw:: html

   <hr>

**Extending Studio**

While much of Crafter Studio is configurable, projects sometimes want to change or add functionality that
does not exist in the base platform.Crafter Studio is designed as a framework that supports extensions.
To extend Studio, use :ref:`plugins <newIa-plugins>`.

.. raw:: html

   <hr>

**More Resources**

Below is a short set of links to other documentation for technology that CrafterCMS leverages:

+----------------+------------------------------+-----------------------------------------------+
| Attribute Name |             Usage            | Links                                         |
+================+==============================+===============================================+
|| Spring Beans  || Server App Framework        || https://spring.io/docs                       |
|| Spring MVC    ||                             ||                                              |
+----------------+------------------------------+-----------------------------------------------+
|| Freemarker    || Server side templates       || http://freemarker.org/                       |
||               ||                             ||                                              |
+----------------+------------------------------+-----------------------------------------------+
|| Groovy        || Server side scripting       || http://groovy-lang.org/documentation.html    |
||               ||                             ||                                              |
+----------------+------------------------------+-----------------------------------------------+
|| Elasticsearch || Search and content query    || https://www.elastic.co/products/elasticsearch|
||               ||                             ||                                              |
+----------------+------------------------------+-----------------------------------------------+
|| MongoDB       || Crafter Profile and Social  || https://docs.mongodb.com                     |
||               || data store                  ||                                              |
+----------------+------------------------------+-----------------------------------------------+
|| GIT           || Repository Implementation   || https://git-scm.com/docs                     |
+----------------+------------------------------+-----------------------------------------------+
|| RST           || Documentation source format || http://docutils.sourceforge.net/rst.html     |
||               ||                             ||                                              |
+----------------+------------------------------+-----------------------------------------------+

.. note::
   CrafterCMS is a Git-based CMS.  Please note that **your system's global git ignore file (list of
   rules for ignoring files in every Git repository on your computer) is respected by CrafterCMS**.
   In case you find some of your content not being committed into CrafterCMS, check your global
   git ignore file to verify the content you're committing is not being ignored.
