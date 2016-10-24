=====================
Basic Query Mechanics
=====================

This cook book is intended to help you understand the types of contentqueries you can make in Crafter CMS.

-------------
Prerequisites
-------------
* None
* Knowledge of Lucene query language and XPATH helpful


------------------------
Types of Content Queries
------------------------

Crafter CMS supports 3 specific types of content queries:

* Cross content Lucene/Solr queries. This enables you to query any/all content objects, by any group of properties)
* Filtered Structural Queries. This enables you to query against the repository structure e.g. "Get all articles by author XYZ"
* Content Item specific query.  This enables you to write queries inside of a given content item

^^^^^^^^^^^^^^^^^^^^^^^^
Make a Lucene/Solr Query
^^^^^^^^^^^^^^^^^^^^^^^^

The following code examples use the Crafter Search Service in Crafter Egnine to get content.
You can find the interface for this service `HERE <https://github.com/craftercms/engine/blob/2.5.xhttps://github.com/craftercms/search/blob/2.5.x/crafter-search-api/src/main/java/org/craftercms/search/service/SearchService.java>`_

.. code-block:: groovy

    def queryStatement = 'content-type:"/component/article" AND author:"Russ Danner"'

    def query = searchService.createQuery()
    query = query.setQuery(queryStatement)

    def executedQuery = searchService.search(query)
    def itemsFound = executedQuery.response.numFound
    def items = executedQuery.response.documents

    return items

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Make a Query for Content Based on Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The following code examples use the Site Item Service in Crafter Egnine to get content.
You can find the interface for this service `HERE <https://github.com/craftercms/engine/blob/2.5.x/src/main/java/org/craftercms/engine/service/SiteItemService.java>`_

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

The following code examples use the Site Item Service in Crafter Egnine to get content.
You can find the interface for this service `HERE <https://github.com/craftercms/engine/blob/2.5.x/src/main/java/org/craftercms/engine/service/SiteItemService.java>`_

.. todo:: add custom filter example


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Make a Query Against Fields in a Content Object
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The following code examples use the Site Item Service in Crafter Egnine to get content.
You can find the interface for this service `HERE <https://github.com/craftercms/engine/blob/2.5.x/src/main/java/org/craftercms/engine/service/SiteItemService.java>`_

.. code-block:: groovy

    def result = [:]
    def segment = "a segment value" // could come from profile, query param etc

    // load a specific content object
    def itemDom = siteItemService.getSiteItem("/site/components/sliders/default.xml")

    // query specific values from the object
    result.header = itemDom.queryValue("/component/targetedSlide//segment[contains(.,'" +  segment + "')]../label")
    result.image = itemDom.queryValue("/component/targetedSlide//segment[contains(.,'" +  segment + "')]/../image")

    return result


