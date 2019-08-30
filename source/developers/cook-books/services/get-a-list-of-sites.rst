:is-up-to-date: True

================================================
Get the Names of Sites Running in Crafter Engine
================================================

In this example we create a simple RESTful service that returns the list of sites running in Crafter Engine.
You can find the API for the Context Manager `HERE <https://github.com/craftercms/engine/blob/2.5.x/src/main/java/org/craftercms/engine/service/context/SiteContextManager.java>`_

-------------
Prerequisites
-------------
* None

--------------------------------
Step 1: Create a REST Controller
--------------------------------
* Under Scripts/rest right click and click create controller
    * Enter get-sites.get as the controller name

* Add the following code to the controller. 

.. code-block:: groovy
    :linenos:

    def siteContextManager = applicationContext["crafter.siteContextManager"]
    def siteContextList = siteContextManager.listContexts()
    def siteNames = []

    siteContextList.each { siteContext ->
        def name = siteContext.getSiteName()
        siteNames.add(name)
    }

    return siteNames

---------------------------
Step 2: Execute the Service
---------------------------

* Open a browser and hit the following URL:
    * http://localhost:8080/api/1/services/get-sites.json
    * See results
