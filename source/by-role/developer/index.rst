:is-up-to-date: False
:last-updated: 4.1.0

..  _developer:

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
   :maxdepth: 2
   :titlesonly:

   headless/index
   templated/index
   composable/index
   devcontentops/index
   upgrade/index

|

Credentials may be required in some cases when accessing content. For more information on how to manage/encode your secrets such as
AWS credentials, please see :ref:`managing-secrets`

.. raw:: html

   <hr>


**Content Inheritance**

CrafterCMS also supports content inheritance out of the box, and supports it via a pluggable mechanism
that allows developers to augment or override what’s out of the box. Below is more information on
content inheritance:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   common/content-modeling/content-inheritance

|

.. raw:: html

   <hr>

**Targeting**

CrafterCMS allows content targeting by providing the ability to render content adapted to specific users,
depending on different aspects like geographical location, language, preferences, etc.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   templated/targeting

|
|

.. raw:: html

   <hr>

**Logs**

While developing your project, there are times when you’d like to see more log details, to figure out what
is happening and address it as needed.  Overriding the logging levels allows you to see more or less
details depending on your needs.

Learn more about :ref:`logging`.

|

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