.. _migrate-site-to-elasticsearch:

===========================================
Migrating a site from Solr to ElasticSearch
===========================================

When upgrading to Crafter CMS 3.1 you can choose to keep existing sites without changes or update your code to use 
ElasticSearch. For new sites it is highly recommended to always use ElasticSearch instead of Solr.

-----------------------------
Using Crafter Search and Solr
-----------------------------

All Crafter Search related services have been kept unchanged to assure that existing sites will work without any
code change, however as Solr is no longer the default search engine it will not be started by default in any of the
provided bundles.

To start Solr you will need to add an extra parameter during startup:

If you are using Gradle to start your environment you need to add a new parameter:

``./gradlew start -PwithSolr=true``

If you are using the startup, debug or crafter script you need to add a new parameter:

``INSTALL_DIR/bin/startup.sh withSolr``

``INSTALL_DIR/bin/debug.sh withSolr``

``INSTALL_DIR/bin/crafter.sh start withSolr``

Another option is to start Solr by itself using the crafter script:

``INSTALL_DIR/bin/crafter.sh start_solr``

Making sure that Solr is always started is the only requirement to keep existing sites unchanged.

-------------------------
Updating to ElasticSearch
-------------------------

In case you decide to update your site to use ElasticSearch instead of Solr you can follow these steps:

1. Find all references to ``searchService`` in your FreeMarker templates and move them to Groovy scripts
2. Find all references to ``searchService`` in your Groovy scripts and replace them with the ElasticSearch service

Because both Solr and ElasticSearch are based on Lucene, you will be able to keep your queries unchanged, however
features like sorting, facets and highlighting will require code changes.

.. note:: If you are using any customization or any advance feature from Solr, you might not be able to easily update
  your code to work with ElasticSearch, in this case you might need to consider running Solr as described before.

To update your code you can follow these steps:

1. Instead of using a Query object from Crafter Search, use a 
   `SearchRequest <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html>`_ 
   and a `SearchSourceBuilder <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#_using_the_searchsourcebuilder>`_
   from ElasticSearch
2. Instead of using the Solr parameters for sorting, use a 
   `SortBuilder <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#_specifying_sorting>`_
   from ElasticSearch
3. Instead of using the Solr parameters for facets, use the 
   `AggregationBuilders <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#java-rest-high-search-request-building-aggs>`_ 
   from ElasticSearch
4. Instead of using the Solr parameters for highlighting, use a 
   `HighlightBuilder <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#java-rest-high-search-request-highlighting>`_
   from ElasticSearch
5. Instead of using the Solr names to process the response, use a 
   `SearchResponse <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#java-rest-high-search-response>`_
   from ElasticSearch

^^^^^^^
Example
^^^^^^^

This is a basic example of replacing Crafter Search service with ElasticSearch

.. code-block:: groovy
  :caption: Existing Groovy code

  def q = "${userTerm}~1 OR *${userTerm}*"

  def query = searchService.createQuery()
        query.setQuery(q)
        query.setStart(start)
        query.setRows(rows)
        query.setHighlight(true)
        query.setHighlightFields(HIGHLIGHT_FIELDS)

  def result = searchService.search(query)
  
  def documents = result.response.documents
  def highlighting = result.highlighting
  

Using the ElasticSearch Java API the code will look like this:


.. code-block:: groovy
  :caption: ElasticSearch code

  // ElasticSearch imports
  import org.elasticsearch.action.search.SearchRequest
  import org.elasticsearch.index.query.QueryBuilders
  import org.elasticsearch.search.builder.SearchSourceBuilder

  ...

  // ElasticSearch highlight builder
  def highlighter = SearchSourceBuilder.highlight()
  HIGHLIGHT_FIELDS.each{ field -> highlighter.field(field) }
  
  def q = "${userTerm}~1 OR *${userTerm}*"
  
  // ElasticSearch source builder
  def builder = new SearchSourceBuilder()
      .query(QueryBuilders.queryStringQuery(q))
      .from(start)
      .size(rows)
      .highlighter(highlighter)
  
  // Execute the query
  def result = elasticSearch.search(new SearchRequest().source(builder))
  
  // ElasticSearch response (highlight results are part of each SearchHit object)
  def documents = result.hits.hits
  

Notice in the given example that the query string didn't change, you will need to update only the code
that builds and executes the query. However ElasticSearch provides new query types and features that you
can use directly from your Groovy scripts.

For additional information you can read the official 
`ElasticSearch documentation <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html>`_.
