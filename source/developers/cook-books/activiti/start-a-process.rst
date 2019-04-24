:is-up-to-date: True

=========================================
Start an Activiti Process via Rest Script
=========================================

This cook book is designed to provide the most straight forward example of a Crafter CMS REST service being used to start an Activiti Process.

-------------
Prerequisites
-------------
* You have Activiti (http://www.activiti.org/) installed
    * The authentication and process are hard coded to simplify the example


--------------------------------
Step 1: Create a REST Controller
--------------------------------
* Under Scripts/rest right click and click create controller
    * Enter start-process.get as the controller name

* Add the following code to the controller.  This code assumes Activiti is deployed in to the same container as engine.

.. code-block:: groovy

    @Grab('org.codehaus.groovy.modules.http-builder:http-builder:0.7')
    @Grab('oauth.signpost:signpost-core:1.2.1.2')
    @Grab('oauth.signpost:signpost-commonshttp4:1.2.1.2')


    import groovyx.net.http.HTTPBuilder
    import groovyx.net.http.ContentType
    import groovyx.net.http.Method
    import groovyx.net.http.RESTClient

    def http = new HTTPBuilder("http://localhost:8080")
    def user = "kermit"
    def password = "kermit"
    def authPair = user + ":" + password
    def authEncoded = authPair.bytes.encodeBase64().toString()

    http.setHeaders([Authorization: "Basic "+authEncoded])

    def ret = null

    http.request( Method.POST ) {
        uri.path = "/activiti-rest/service/runtime/process-instances"
        // ACTIVITI ENTERPRISE URL
        // uri.path = "/activiti-app/api/enterprise/process-instances"

        requestContentType = ContentType.JSON
        body =  [ processDefinitionKey: "vacationRequest", variables:[  [name:"employeeName", value: "Russ"], [name:"numberOfDays", value: "5"],[name:"startDate", value:"10-08-2015 11:11"],[name:"vacationMotivation", value: "rest"]    ]]

        response.success = { resp, reader ->
            ret = reader
        }
    }

    return ret

---------------------------
Step 2: Execute the Service
---------------------------

* Open a browser and hit the following URL:
    * http://localhost:8080/api/1/services/start-process.json
    * Note that every time

-----------------------------------------------------------
Step 3: Verify that a new process instance has been started
-----------------------------------------------------------
* Open a browser and hit the following URL:
    * http://localhost:8080/activiti-rest/service/runtime/process-instances
    * Every time you run your Crafter REST service the instance count returned in the above Activiti service will increase
