:is-up-to-date: False
:last-updated: 4.1.0

.. index:: Java API, Groovy API

.. _java-api:

========
Java API
========

.. TODO: Outline
- Introduce in-process/java API
- Point to javadoc
- Elaborate with examples on XPath content queries
- Elaborate with examples on Structure queries and filtering


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Make a Query for Content Based on Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The following code examples use the Site Item Service in Crafter Engine to get content.
You can find the interface for this service :javadoc_base_url:`HERE <engine/org/craftercms/engine/service/SiteItemService.html>`

.. code-block:: groovy

    def topNavItems = [:]
    def siteDir = siteItemService.getSiteTree("/site/website", 2)

    if (siteDir) {
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

"""""""""""""""""""""""""""""""""""""""""""""""""""""""
Make a Query for Content Based on Structure with Filter
"""""""""""""""""""""""""""""""""""""""""""""""""""""""

The following code examples use the Site Item Service in Crafter Engine to get content.
In the example we build on the Site Item Service of getting objects under a specific tree in the repository by supplying a filter that will be applied to each object first to determine if it should be part of the result.
Filters can make their determination based on the path or the content or even "outside" influence.

    * You can find the interface for this service at :javadoc_base_url:`Site Item Service JavaDoc <engine/org/craftercms/engine/service/SiteItemService.html>`
    * Note in the example below we define our own filter based on the ItemFilter interface found :javadoc_base_url:`HERE <core/org/craftercms/core/service/ItemFilter.html>`
    * However, you may use out of the box filters as well if they meet your needs. These are found :javadoc_base_url:`HERE <engine/org/craftercms/engine/service/filter/package-frame.html>`
    * Finally be aware that for simple filename patterns, methods for this already exist in the Site Item Service and no filter is required (but they make for an simple to understand example.)

.. code-block:: groovy

    import org.craftercms.core.service.ItemFilter
    import org.craftercms.core.service.Item
    import java.util.List


    def result = [:]
    def navItems = [:]
    def siteDir = siteItemService.getSiteTree("/site/website", 2, new StartsWithAItemFilter(), null)

    if (siteDir) {
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

.. --------------------------------------------------------------------------------------------------
