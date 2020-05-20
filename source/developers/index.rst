:is-up-to-date: True

..  _developers:

**********
Developers
**********

This section focuses on how to build content rich applications backed by Crafter CMS.  It covers the basic topics you need to define a content type and render that content as part of a page, component or service.  It also covers topics like building queries, accessing services and extending the core platforms.

Developers need to be comfortable with Content Modeling (how to represent content in Crafter CMS for your application to retrieve said content), and how to access content items from your application/site.

**Define Content**

To get started with content modeling, read: :ref:`content-modeling`.

**Retrieve Content**

To get started with content access/APIs, read: :ref:`crafter-engine`.

In depth concepts and guides follow.

.. toctree::
      :maxdepth: 1
      :titlesonly:

      architecture
      content-modeling
      content-inheritance
      assets
      templates
      search-elasticsearch
      cook-books/graphql/index
      plugins/index
      targeting
      redirect
      testing
      errors
      extending-studio/index
      developer-workflow/index

|

  .. include:: /includes/scripts-templates-security.rst


################################
Subsystems and API Documentation
################################

Crafter CMS comprises a number of projects, below are the project specific documentations including APIs.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   projects/craftercms/index
   projects/docker-compose/index
   projects/core/index
   projects/commons/index
   projects/engine/index
   projects/studio/index
   projects/search/index
   projects/deployer/index
   projects/profile/index
   projects/social/index

####################
Cookbook / Tutorials
####################

.. toctree::
   :maxdepth: 2
   :titlesonly:

   cook-books/index

Below is a short set of links to other documentation for technology that Crafter CMS leverages:

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
|| Solr          || Search and content query    || http://lucene.apache.org/solr/resources.html |
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
    Crafter CMS is a Git-based CMS.  Please note that **your system's global git ignore file (list of rules for ignoring files in every Git repository on your computer) is respected by Crafter CMS**.  In case you find some of your content not being committed into Crafter CMS, check your global git ignore file to verify the content you're committing is not being ignored.
