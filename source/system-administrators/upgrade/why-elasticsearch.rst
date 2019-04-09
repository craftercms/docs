.. index:: Why Elasticsearch

.. _why-elasticsearch:

=================
Why Elasticsearch
=================

The default search engine used by Crafter CMS is now Elasticsearch.  The motivation for having Elasticsearch as the default search engine for Crafter CMS is the following:

1. Solr doesn't cluster well
2. AWS doesn't support Solr

-------------------------------
Crafter CMS Search Architecture
-------------------------------

.. image:: /_static/images/search/search-arch.png
   :alt: Crafter CMS Search Architecture
   :align: center


With this arch update, users can now take advantage of ElasticSearch's superior clustering capabilities, AWS ElasticSearch Service, and a direct/unabstracted interface to ES.

We remain backward compatible with Crafter Search and Solr.  You can choose to keep existing sites without changes on Crafter Search and Solr, by following :ref:`this<using-crafter-search-and-solr>` after upgrading.

