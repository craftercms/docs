.. index:: Why Elasticsearch

.. _why-elasticsearch:

=================
Why Elasticsearch
=================

Starting version 3.1, the default search engine used by Crafter CMS is Elasticsearch. The motivation for having Elasticsearch as the default search engine for Crafter CMS is the following:

1. Solr doesn't cluster and scale as well as Elasticsearch and that would have held back Crafter CMS's serverless mode
2. AWS doesn't directly support Solr (AWS CloudSearch, while based on Solr, has an AWS specific API). Whereas Elasticsearch is the same on AWS or elsewhere.

-------------------------------
Crafter CMS Search Architecture
-------------------------------

.. image:: /_static/images/search/search-arch.png
   :alt: Crafter CMS Search Architecture
   :align: center


With this arch update, users can now take advantage of Elasticsearch's superior clustering capabilities, AWS ElasticSearch Service, and a direct/unabstracted interface to Elasticsearch.

We remain backward compatible with Crafter Search and Solr. You can choose to keep existing sites without changes on Crafter Search and Solr, by following :ref:`this<using-crafter-search-and-solr>` after upgrading.

