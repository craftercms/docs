:is-up-to-date: True

..  _newIa-developers:

**********
Developers
**********

This section focuses on how to build content rich applications backed by CrafterCMS.  It covers
the basic topics you need to define a content type and render that content as part of a page,
component or service.  It also covers topics like building queries, accessing services and extending
the core platforms and the developer workflow (DevContentOps).

Developers need to be comfortable with Content Modeling (how to represent content in CrafterCMS
for your application to retrieve said content), and how to access content items from your application/site.

The following gets you started with content modeling, content retrieval, and more:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   headless/index
   templated/index
   plugins/index

|

   .. include:: /includes/scripts-templates-security.rst

CrafterCMS also supports content inheritance out of the box, and supports it via a pluggable mechanism
that allows developers to augment or override what’s out of the box. Below is more information on
content inheritance:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   content-inheritance

|

To search for content in your project:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   content-search

|
|

While developing your project, there are times when you’d like to see more log details, to figure out what
is happening and address it as needed.  Overriding the logging levels allows you
to see more or less details depending on your needs.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   override-logging-levels




CrafterCMS supports content authoring, publishing and developer workflow and how to configure
and implement it, the basic mechanics of DevContentOps.

The following looks at the developer workflow in depth:

.. toctree::
   :maxdepth: 2
   :titlesonly:

   developer-workflow/index


Crafter Studio is designed as a framework that supports extension.  There are a couple of ways
to extend Studio.  One way is via :ref:`plugins <newIa-studio-plugins>` and another way is via
code based extension points as described :ref:`here <newIa-extending-crafter-studio>`

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
