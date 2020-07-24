:is-up-to-date: True

===============================
Active Cache a RESTful Response
===============================

This cookbook will demonstrate how to create a RESTful service in Crafter Engine that has predictable performance
and reliability when your service relies on an external service.

Any time your services depend on another service there is a cause for concern.  You can't control the performance or
the availability of the external service. Further, if the response of the external service is not unique across calls
then there may be no real need to call out to it on each request you receive.

In this case what you want to do is cache the request from the external service and have your service attempt to get the content from the cache.
Active cache is a built in Crafter CMS capability that makes building these sort of solutions much easier.
You tell Active Cache what you want, how to get it and how often to refresh it in the background.  From there on, you
simply ask Active cache for whatever the current response is.

-------------
Prerequisites
-------------

**Enable active cache**

Active cache is disabled by default.  To enable active cache, in the ``crafter-setenv.sh`` file under ``CRAFTER_HOME/bin``, set the Spring profile ``crafter.core.activeCache``

   .. code-block:: yaml
      :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

      export SPRING_PROFILES_ACTIVE=crafter.core.activeCache


---------------------------------------
Step 1: Specify the Cache Tick Duration
---------------------------------------

Crafter's cache implementation uses "ticks" to handle item expiration or refresh of items. A tick is an arbitrary period of time that is
completely configurable, and by default it's 1 hour. So if an item is refreshed every 5 ticks, that means that it will be refreshed every 5 hours.
If you need constant refreshment/expiration of items, we recommend each tick to be 1 minute. To change this go to your Crafter installation,
and then in ``bin/apache-tomcat/shared/classes/crafter/engine/extension`` edit the :ref:`server-config.properties <engine-configuration-files>` and add the following property:

.. code-block:: properties

	# The timespan of a single "tick". 60 000 == 1 minute
	crafter.core.cache.tick.frequency=60000

--------------------------------
Step 2: Create a REST Controller
--------------------------------

* Under Scripts/rest right click and click create controller
    * Enter my-data.get as the controller name

* Add the following code to the controller.

.. code-block:: groovy

	import org.craftercms.core.service.CachingOptions
	import org.craftercms.commons.lang.Callback
	import org.springframework.http.MediaType
	import org.springframework.http.RequestEntity
	import org.springframework.web.client.RestTemplate
	import java.util.Map

	def cacheTemplate = applicationContext["crafter.cacheTemplate"]
	def cacheContext = siteContext.context
	def cacheKey = "externalData"
	def cachingOptions = new CachingOptions()
	def callback = new ExternalServiceCallback()

	// Sets the refresh frequency to be every 5 ticks, or every 5 minutes
	cachingOptions.refreshFrequency = 5

	// Get the object. If the object has not yet being loaded into the cache the method
	// will call the callback first and then will put the result in the cache. Refresh
	// is done in the background.
	return cacheTemplate.getObject(cacheContext, cachingOptions, callback, cacheKey)

	/**
	 * Define a a callback that will be used to prime and then periodically refresh
	 * the cache with the latest data from an external service.
	 */
	class ExternalServiceCallback implements Callback {

	  Object execute() {
	    // The REST client that will make the call
	    def restTemplate = new RestTemplate()
	    // The service URL
	    def url = "http://api.population.io:80/1.0/population/United%20States/today-and-tomorrow"
	    // Creates the request, specifying that the response should be application/json
	    def request = RequestEntity.get(url.toURI()).accept(MediaType.APPLICATION_JSON).build()

	    // Calls the service
	    return restTemplate.exchange(request, Map.class).body
	  }

	}

---------------------------
Step 3: Execute the Service
---------------------------

* Open a browser and hit the following URL:
    * http://localhost:8080/api/1/services/my-data.json
    * Note that your host name, ports and pageId values may differ than the example
    * See results
