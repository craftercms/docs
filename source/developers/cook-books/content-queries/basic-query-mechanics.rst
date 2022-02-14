:is-up-to-date: True

.. _basic-query-mechanics:

=====================
Basic Query Mechanics
=====================

This cook book is intended to help you understand the types of content queries you can make in CrafterCMS.

-------------
Prerequisites
-------------
* None
* Knowledge of Lucene query language and XPATH helpful


------------------------
Types of Content Queries
------------------------

CrafterCMS supports 4 specific types of content queries:

* Cross content Elasticsearch queries. This enables you to query any/all content objects, by any group of properties)
* Filtered Structural Queries. This enables you to query against the repository structure e.g. "Get all articles by author XYZ"
* Content Item specific query.  This enables you to write queries inside of a given content item

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Make an Elasticsearch Query
^^^^^^^^^^^^^^^^^^^^^^^^^^^

To perform content queries in Elasticsearch you need to use the client provided by Crafter Engine, the bean name is
``elasticsearch`` and it can be used from any Groovy script.

You can find the interface for this service :javadoc_base_url:`here <search/org/craftercms/search/elasticsearch/ElasticsearchWrapper.html>`

This client provides two ways for running queries:

**Query Builders**

You can use all classes available in the official Elasticsearch client package to build your queries. This method
allow you to use builder objects to develop complex logic for building the queries.

.. code-block:: groovy
  :linenos:
  :caption: Elasticsearch query using builders

  // Import the required classes
  import org.elasticsearch.action.search.SearchRequest
  import org.elasticsearch.index.query.QueryBuilders
  import org.elasticsearch.search.builder.SearchSourceBuilder
  
  def queryStatement = 'content-type:"/component/article" AND author:"My User"'
  
  // Use the appropriate builders according to your query
  def builder = new SearchSourceBuilder()
      .query(QueryBuilders.queryStringQuery(queryStatement))
  
  // Execute the query
  def executedQuery = elasticsearch.search(new SearchRequest().source(builder))
  
  def itemsFound = executedQuery.hits.totalHits
  def items = executedQuery.hits.hits

  return items

.. note::
  You can find detailed information for each builder in the 
  `java documentation <https://www.elastic.co/guide/en/elasticsearch/client/java-api/current/java-query-dsl.html>`_

**Query DSL**

Instead of using the builders you can also provide a query as a single map following using the same structure that
Elasticsearch uses for the REST API. This method is suitable for constant or simple queries that don't require too
much configuration.

.. code-block:: groovy
  :linenos:
  :caption: Elasticsearch query using the DSL

  // No imports are required for this method
  
  // Execute the query as a single map object
  def executedQuery = elasticsearch.search([
    query: [
      bool: [
        should: [
          [ match: [ 'content-type': "/component/article" ] ],
          [ match: [ author : "My User" ] ]
        ]
      ]
    ]
  ])
  
  def itemsFound = executedQuery.hits.totalHits
  def items = executedQuery.hits.hits

  return items

.. note::
  You can find detailed information for the JSON DSL in the 
  `query documentation <https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html>`_


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Make a Query for Content Based on Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The following code examples use the Site Item Service in Crafter Engine to get content.
You can find the interface for this service :javadoc_base_url:`HERE <engine/org/craftercms/engine/service/SiteItemService.html>`

.. code-block:: groovy

    def topNavItems = [:]
    def siteDir = siteItemService.getSiteTree("/site/website", 2)

    if(siteDir) {
        def dirs = siteDir.childItems
        dirs.each { dir ->
                def dirName = dir.getStoreName()
                def dirItem = siteItemService.getSiteItem("/site/website/${dirName}/index.xml")
                if (dirItem != null) {
                    def dirDisplayName = dirItem.queryValue('internal-name')
                       topNavItems.put(dirName, dirDisplayName)
                }
       }
    }

    return topNavItems


Make a Query for Content Based on Structure with Filter
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The following code examples use the Site Item Service in Crafter Engine to get content.
In the example we build on the Site Item Service of getting objects under a specific tree in the repository by supplying a filter that will be applied to each object first to determine if it should be part of the result.
Filters can make their determination based on the path or the content or even "outside" influence.

    * You can find the interface for this service :javadoc_base_url:`HERE <engine/org/craftercms/engine/service/SiteItemService.html>`
    * Note in the example below we define our own filter based on the ItemFilter interface found :javadoc_base_url:`HERE <core/org/craftercms/core/service/ItemFilter.html>`
    * However, you may use out of the box filters as well if they meet your needs.  These are found :javadoc_base_url:`HERE <engine/org/craftercms/engine/service/filter/package-frame.html>`
    * Finally be aware that for simple filename patterns, methods for this already exist in the Site Item Service and no filter is required (but they make for an simple to understand example.)

.. code-block:: groovy

    import org.craftercms.core.service.ItemFilter
    import org.craftercms.core.service.Item
    import java.util.List


    def result = [:]
    def navItems = [:]
    def siteDir = siteItemService.getSiteTree("/site/website", 2, new StartsWithAItemFilter(), null)

    if(siteDir) {
        def dirs = siteDir.childItems
        dirs.each { dir ->
                def dirName = dir.getStoreName()
                def dirItem = siteItemService.getSiteItem("/site/website/${dirName}/index.xml")
                if (dirItem != null) {
                    def dirDisplayName = dirItem.queryValue('internal-name')
                       navItems.put(dirName, dirDisplayName)
                }
       }
    }
    result.navItems = navItems

    return result


    /**
     * Define a filter that returns only items that have a name that starts with "A" or "a"
     */
    class StartsWithAItemFilter implements ItemFilter {

        public boolean runBeforeProcessing() {
            return true
        }

        public boolean runAfterProcessing() {
            return false
        }

        public boolean accepts(Item item, List acceptedItems, List rejectedItems, boolean runBeforeProcessing) {

          if (item.getName().toLowerCase().startsWith("a")) {
              return true
          }

          return false
        }
     }


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Make a Query Against Fields in a Content Object
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The following code examples use the Site Item Service in Crafter Engine to get content.
You can find the interface for this service :javadoc_base_url:`HERE <engine/org/craftercms/engine/service/SiteItemService.html>`

.. code-block:: groovy

    def result = [:]
    def segment = "a segment value" // could come from profile, query param etc

    // load a specific content object
    def itemDom = siteItemService.getSiteItem("/site/components/sliders/default.xml")

    // query specific values from the object
    result.header = itemDom.queryValue("/component/targetedSlide//segment[contains(.,'" +  segment + "')]../label")
    result.image = itemDom.queryValue("/component/targetedSlide//segment[contains(.,'" +  segment + "')]/../image")

    return result
