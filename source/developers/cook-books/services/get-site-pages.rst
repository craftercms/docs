==========================
Get Pages for a Given Site
==========================

In this example we create a simple RESTful service that returns the list of Pages in a site.
The service is parameterized to allow the caller to set a starting point and depth.

-------------
Prerequisites
-------------
* None

--------------------------------
Step 1: Create a REST Controller
--------------------------------
* Under Scripts/rest right click and click create controller
    * Enter get-pages.get as the controller name

* Add the following code to the controller.

.. code-block:: groovy

    def pathParam = (params.path != null) params.path : ""
    def depthParam = (params.depth != null) params.depth.toInteger() : 0

    def path = "/site/website" + pathParam
    def depth = depthParam != 0 ? depthParam : 2

    def navItems = [:]
    def siteDir = siteItemService.getSiteTree(path, depth)

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

    return navItems

---------------------------
Step 2: Execute the Service
---------------------------

* Open a browser and hit the following URL:
    * http://localhost:8080/api/1/services/get-pages.json
    * See results
