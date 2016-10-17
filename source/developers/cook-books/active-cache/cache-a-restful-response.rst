===============================
Active Cache a RESTful Response
===============================

This cookbook will demonstrate how to create a RESTful service in Crafter Engine that has predictable performance
and reliability when your service on an relies on external service.

Any time your services depend on another service there is a cause for concern.  You can't control the performance or
the availability of the external service. Further the if the response of the external service is not unique across calls
then there may be no real need to call out to it on each request you receive.

In this case what you want to do is cache the request from the external service and have your service attempt to get the content from the cache.
Active cache is a built in Crafter capability that makes building these sort of solutions much easier.
You tell Active Cache what you want, how to get it and how often to refresh it in the background.  From there on, you
simply ask Active cache for whatever the current response is.

-------------
Prerequisites
-------------
* None

--------------------------------
Step 1: Create a REST Controller
--------------------------------
* Under Scripts/rest right click and click create controller
    * Enter my-data.get as the controller name

* Add the following code to the controller. 

.. code-block:: groovy
    import org.craftercms.core.cache.CacheLoader
    import org.craftercms.core.service.CachingOptions
    import groovy.json.JsonSlurper

    def cacheService = applicationContext["crafter.cacheService"]
    def cacheContext = siteContext.getContext()
    def myCacheKey = "aServiceCallResponse"
    def loader = new ExternalServiceLoader()

    def value = ""
    def responseItem = cacheService.get(cacheContext, myCacheKey)

    if(responseItem == null) {
        // item is not cached, get the value
        def myObject = loader.load()
        value = myObject

        // cache the value with a loader to periodically refresh its value
        def cachingOptions = CachingOptions.DEFAULT_CACHING_OPTIONS
        // def cachingOptions = new CachingOptions()  // define your own options
        // cachingOptions.setRefreshFrequency(1)      // set the number of ticks for refresh

        try {
            cacheService.put(cacheContext, myCacheKey, myObject, [], cachingOptions, loader)
        }
        catch(err) {
            logger.error("error adding ${myCacheKey} to cache: ${err}")
        }
    }
    else {
        value = responseItem
    }

    return value

    /**
     * Define an active cache loader that will be used to prime and then
     * periodically refresh the cache with the latest data from an external
     * service.
     */
    class ExternalServiceLoader implements CacheLoader {
        Object load(Object... parameters) throws Exception {
            def externalServiceHost = "http://api.population.io/1.0"
            def externalServiceURL = "/population/United%20States/today-and-tomorrow/"

            // call the service
            def response = (externalServiceHost+externalServiceURL).toURL().getText()

            // parse service's the JSON response to an object
            def result = new JsonSlurper().parseText( response )

            return result
        }
    }

---------------------------
Step 2: Execute the Service
---------------------------

* Open a browser and hit the following URL:
    * http://localhost:8080/api/1/services/my-data.json
    * Not that your host name, ports and pageId values may differ than the example
    * See results
