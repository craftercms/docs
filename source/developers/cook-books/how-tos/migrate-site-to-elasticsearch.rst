.. _migrate-site-to-elasticsearch:

===========================================
Migrating a site from Solr to Elasticsearch
===========================================

When upgrading to Crafter CMS 3.1 you can choose to keep existing sites without changes or update your code to use 
Elasticsearch. For new sites it is highly recommended to always use Elasticsearch instead of Solr.

.. _using-crafter-search-and-solr:

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
Updating to Elasticsearch
-------------------------

In case you decide to update your site to use Elasticsearch instead of Solr you can follow these steps:

#. Overwrite the target in the Deployer to use Elasticsearch instead of Solr
#. Index all existing content in Elasticsearch
#. Find all references to ``searchService`` in your FreeMarker templates and replace them with the Elasticsearch service
#. Find all references to ``searchService`` in your Groovy scripts and replace them with the Elasticsearch service
#. Delete the unused Solr core if needed (can be done using the Solr Admin UI or the ``data/indexes`` folder)

^^^^^^^^^^^^^^^^^^^^
Overwrite the target
^^^^^^^^^^^^^^^^^^^^

For authoring environments:

.. code-block:: bash
  :linenos:

  curl --request POST \
    --url http://DEPLOYER_HOST:DEPLOYER_PORT/api/1/target/create \
    --header 'content-type: application/json' \
    --data '{
      "env": "preview",
      "site_name": "SITE_NAME",
      "template_name": "local",
      "repo_url": "INSTALL_DIR/data/repos/sites/SITE_NAME/sandbox",
      "disable_deploy_cron": true,
      "replace": true
    }'

For delivery environments:

.. code-block:: bash
  :linenos:

  curl --request POST \
    --url http://DEPLOYER_HOST:DEPLOYER_PORT/api/1/target/create \
    --header 'content-type: application/json' \
    --data '{
      "env": "default",
      "site_name": "SITE_NAME",
      "template_name": "remote",
      "repo_url": "INSTALL_DIR/data/repos/sites/SITE_NAME/published",
      "repo_branch": "live",
      
      ... any additional settings like git credentials ...
    
      "replace": true
    }'

.. note::
  For a detailed list of parameters see :ref:`crafter-deployer-api-target-create`

The create target operation will also create the new index in Elasticsearch.

^^^^^^^^^^^^^^^^^^^^^^
Index all site content
^^^^^^^^^^^^^^^^^^^^^^

To reindex all existing content execute the following command:

.. code-block:: bash
  :linenos:

  curl --request POST \
    --url http://DEPLOYER_HOST:DEPLOYER_PORT/api/1/target/deploy/ENVIRONMENT/SITE_NAME \
    --header 'content-type: application/json' \
    --data '{
      "reprocess_all_files": true
    }'

^^^^^^^^^^^^^^^^^^^^
Update the site code
^^^^^^^^^^^^^^^^^^^^

Because both Solr and Elasticsearch are based on Lucene, you will be able to keep your queries unchanged, however
features like sorting, facets and highlighting will require code changes.

.. note:: If you are using any customization or any advance feature from Solr, you might not be able to easily update
  your code to work with Elasticsearch, in this case you might need to consider running Solr as described before.

To update your code there are two possible approaches:

#. Use the Elasticsearch Java API:

  - Instead of using a Query object from Crafter Search, use a 
    `SearchRequest <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html>`_ 
    and a `SearchSourceBuilder <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#_using_the_searchsourcebuilder>`_
    from Elasticsearch
  - Instead of using the Solr parameters for sorting, use a 
    `SortBuilder <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#_specifying_sorting>`_
    from Elasticsearch
  - Instead of using the Solr parameters for facets, use the 
    `AggregationBuilders <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#java-rest-high-search-request-building-aggs>`_ 
    from Elasticsearch
  - Instead of using the Solr parameters for highlighting, use a 
    `HighlightBuilder <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#java-rest-high-search-request-highlighting>`_
    from Elasticsearch

#. Use the Elasticsearch DSL Query:

  - Instead of using a Query object from Crafter Search, use a simple Groovy map object

In both approaches the result will be a `SearchResponse <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html#java-rest-high-search-response>`_
object from Elasticsearch

**Examples**

This is a basic example of replacing Crafter Search service with Elasticsearch

.. code-block:: groovy
  :linenos:
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

Using the Elasticsearch Java API the code will look like this:

.. code-block:: groovy
  :linenos:
  :caption: Elasticsearch Java API

  // Elasticsearch imports
  import org.elasticsearch.action.search.SearchRequest
  import org.elasticsearch.index.query.QueryBuilders
  import org.elasticsearch.search.builder.SearchSourceBuilder

  ...

  // Elasticsearch highlight builder
  def highlighter = SearchSourceBuilder.highlight()
  HIGHLIGHT_FIELDS.each{ field -> highlighter.field(field) }
  
  def q = "${userTerm}~1 OR *${userTerm}*"
  
  // Elasticsearch source builder
  def builder = new SearchSourceBuilder()
      .query(QueryBuilders.queryStringQuery(q))
      .from(start)
      .size(rows)
      .highlighter(highlighter)
  
  // Execute the query
  def result = elasticsearch.search(new SearchRequest().source(builder))
  
  // Elasticsearch response (highlight results are part of each SearchHit object)
  def documents = result.hits.hits

For additional information you can read the official 
`API documentation <https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html>`_.  

Using the Elasticsearch Query DSL the code will look like this:

.. code-block:: groovy
  :linenos:
  :caption: Elasticsearch Query DSL

  // No additional imports are needed

  def highlighter = []
  HIGHLIGHT_FIELDS.each{ field -> highlighter[field] = [:] }
  
  def q = "${userTerm}~1 OR *${userTerm}*"
  
  // Execute the query
  def result = elasticsearch.search([
    query: [
      query_string: [
        query: q as String
      ]
    ],
    from: start,
    size: rows,
    highlight: [
      fields: highlighter
    ]
  ])
  
  // Elasticsearch response (highlight results are part of each SearchHit object)
  def documents = result.hits.hits

For additional information you can read the official 
`DSL documentation <https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html>`_.

Notice in the given example that the query string didn't change, you will need to update only the code
that builds and executes the query. However Elasticsearch provides new query types and features that you
can use directly from your Groovy scripts.