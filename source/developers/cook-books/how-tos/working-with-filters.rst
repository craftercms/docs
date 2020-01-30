:is-up-to-date: True

.. index:: Working With URL Interceptor/Servlet Filters in Crafter CMS

.. _working-with-url-filters:

===========================================================
Working With URL Interceptor/Servlet Filters in Crafter CMS
===========================================================

In this section, we’ll learn the specific mechanics of creating and configuring a filter in Crafter CMS.

A filter in Crafter CMS is a Groovy-based controller that allows you to intercept inbound requests for content and API responses and dynamically apply rules, modify the request or transform the response. A Crafter CMS Filter has the same interface and mechanics as a Java J2EE Servlet Filter. Some examples of filter use are:

* **Apply security rules:** Check for SAML2, Site Minder, or other security tokens before allowing the request to proceed.
* **Active Record:** Example: before serving the requested resource, look up and load the user’s profile into the request so it is available to all components of the system.
* **Apply compression:** Gzip all of the data returned by the requested resource (page, API, etc)

-----------------------------
Step 1: Create the Controller
-----------------------------
Let’s start simple. We’ll create a controller that prints a message before processing the request (or subsequent filters in the chain) and a message after control is returned to the filter.

Here’s the code:

    .. code-block:: groovy

       logger.info("Handling the request")
       filterChain.doFilter(request, response)
       logger.info("Control returned to filter/controller")

|

The key here is that you can put code before and after **doFilter**. That code can do just about anything. Typically, it's actions like inspecting the request and making decisions, modifying the request for further downstream processing, wrapping the response object.

-------------------------------------
Step 2: Install the Filter in the CMS
-------------------------------------

Open the **Sidebar** and navigate to a folder called **scripts**

.. image:: /_static/images/developer/working-with-filters/sidebar-scripts-folder.png
   :width: 45 %
   :align: center
   :alt: Working with Filters - "scripts" Folder


Right-click on the **scripts** folder and click **Create Folder**. Enter “filters” as the folder name.  Right-click on the new filters folder and click **Create Controller**.

.. image:: /_static/images/developer/working-with-filters/sidebar-create-filter.png
   :width: 45 %
   :align: center
   :alt: Working with Filters - Create Filter

Enter “MyFilter” as the name and click **Create**

.. image:: /_static/images/developer/working-with-filters/create-controller-filter.png
   :width: 100 %
   :align: center
   :alt: Working with Filters - Create Controller

Add the code from **Step 1** above and click “Update.”

.. image:: /_static/images/developer/working-with-filters/add-filter-script.png
   :width: 100 %
   :align: center
   :alt: Working with Filters - Add filter script

At this point, you should see your filter in the Sidebar and we’re ready to configure it to run when a user requests a resource.

.. image:: /_static/images/developer/working-with-filters/sidebar-filter-created.png
   :width: 45 %
   :align: center
   :alt: Working with Filters - Sidebar with the filter created


---------------------------------------
Step 3: Configure the Filter to Execute
---------------------------------------

Now we need to tell the filter which resources to execute for by configuring the order of execution, the URL resource patterns it should execute on and the request method types that it should apply to. To do this we modify the Crafter Engine /Config/site.xml.

From the **Sidebar**, click on |siteConfig|.  Click on **Configuration**.  Select **Engine Site Configuration** from the dropdown.

.. image:: /_static/images/developer/working-with-filters/select-engine-site-config.png
   :width: 75 %
   :align: center
   :alt: Working with Filters - Open Engine Site Configuration

Add the following filters tags to your site.xml. This will run your filter on every kind of request for all URLs.

    .. code-block:: xml

        <?xml version="1.0" encoding="UTF-8"?>
        <site>
            <filters>
                <filter>
                    <script>/scripts/filters/MyFilter.groovy</script>
                    <mapping>
                        <include>/**</include>
                    </mapping>
                </filter>
            </filters>
        </site>

|

Once the Engine config is updated we have to tell Crafter Engine to reload it. To do this execute this simple API: ``http://localhost:8080/studio/preview/#/?page=/api/1/site/context/rebuild.json``

------------
Step 4: Test
------------

Since our simple example prints messages into the log, you will need to “watch” your log files. The log is located at ``INSTALL_DIRECTORY/logs/tomcat/catalina.out``.

In the console, watch the logs by printing it out as it is appended:

`tail -f ./logs/tomcat/catalina.out`

Simply reload a page: ``http://localhost:8080/studio/preview/#/?page=/``

Then, you should see your log entries in the log file every time you view a page or access any other resource.  The log will look something like this:

    .. code-block:: xml

       [INFO] 2019-06-19T11:26:57,991 [http-nio-8080-exec-7] [examplecom] [impl.GroovyScript] [/scripts/filters/MyFilter.groovy] | Handling the request
       [INFO] 2019-06-19T11:26:58,012 [http-nio-8080-exec-7] [examplecom] [impl.GroovyScript] [/scripts/filters/MyFilter.groovy] | Control returned to filter/controller


