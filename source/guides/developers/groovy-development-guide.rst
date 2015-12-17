===========
Groovy Development Guide
===========

A lot of functionality and site customization can be done through Groovy scripts in Crafter, no need to code in Java! By using Groovy
scripts, you can create RESTful services, MVC controllers, code that runs before a page or component is rendered, servlet filters and
scheduled jobs.

---------------
Create a Script in Studio
---------------

.. todo:: Write how to create a script in Studio

---------------
Types of Scripts
---------------

There are different types of scripts you can create, depending on the subfolder under Scripts where they're placed. The following are
the ones currently supported:

REST Scripts
===============

REST scripts function just like RESTful services. They just need to return the object to serialize back to the caller, and depending on
the extension of the call (either .json or .xml), the result will be marshalled to JSON or XML. REST scripts must be placed in any folder
under Scripts > rest.

A REST script URL has the following format: it starts with /api/1/services, then contains all the folders that are part of the hierarchy
for the particular script, and ends with the script name, the HTTP method and the .groovy extension. So, a script file at
Scripts > rest > myfolder > myscript.get.groovy will respond to GET method calls at http://mysite/api/1/services/myfolder/myscript.json.

Controller Scripts
===============

Controller scripts are very similar to REST scripts. They have the same variables available, but instead of returning an object,
they return a string with the view to render. Most of the time, this is just the template path, like in the following snippet:
::

    return "/templates/web/registration.ftl"

Controller scripts basically work like a controller in the MVC pattern. They should be put under Scripts > controllers,
and similarly to REST scripts, the URL is made up of the directory hierarchy, the script name and the HTTP method. For example,
a script at Scripts > controllers > myfolder > mycontroller.get.groovy will respond to GET calls at http://mysite/myfolder/mycontroller.

Page and Component Scripts
===============

Crafter page and components can have their own controller scripts too, that are executed before the page or component is rendered, and
that can contribute to the model of the template. These scripts, besides the common variables, have the ``model`` and the
``crafterModel`` available. The model is the actual map model of the template, and any variable put in it will be accessible directly in
the template, eg. if the script has the line ``model.var = 5``, then in the template the var's value can be printed with ``${var}``. The
``crafterModel`` is the XML descriptor content, of type SiteItem. The scripts don't have to return any result, just populate the model.
There are 2 ways in which you can "bind" a script to a page or component:

*   Put the script under Scripts > pages or Scripts > components, and name it after the page or component content type.
*   When creating the content type for the page or component, add a Item Selector with the variable name ``scripts``.Later when creating
    a page or component of that type, you can select multiple scripts that will be associated to the page or component.

Filter Scripts
===============

Crafter Engine can handle special Groovy filters that work basically in the same way as Servlet filters. These are scripts very similar to
page scripts, and have basically the same variables available (except the ``model`` and ``crafterModel`` variables), but instead of updating
the template model, they call ``filterChain.doFilter(request, response)``, just like in Java Servlet filters, to continue with the filter
chain. You can even stop the request filtering and return the response directly, like in this example:
::

    if (!authentication) {
        response.sendError(400, "You're not a subscriber")
    } else {
        filterChain.doFilter(request, response)
    }

All this filter scripts should be put under Scripts > filters, and their mappings should be defined in Config > site.xml. The order in
which the mappings appear is the order in which the filters will be applied.

.. code-block:: xml

    <filters>
        <filter>
            <script>/scripts/filters/testFilter1.groovy</script>
            <mapping>
                <include>/**</include>
            </mapping>
        </filter>
        <filter>
            <script>/scripts/filters/testFilter2.groovy</script>
            <mapping>
                <include>/**</include>
            </mapping>
        </filter>
        <filter>
            <script>/scripts/filters/testFilter3.groovy</script>
            <mapping>
                <include>/**</include>
                <exclude>/static-assets/**</exclude>
            </mapping>
        </filter>
    </filters>

Scheduled Script Jobs
===============

Scripts can also be scheduled as jobs in Crafter Engine. These scripts only have the common global variables and the logger variable.
They don't need to return any result. Engine allows 3 different ways to configure script jobs:

*   By placing the scripts under one of the following folders in Scripts > jobs: hourly, daily, weekly and monthly. As the names imply,
    scripts under these folders will be scheduled to run every hour (hourly), at 12:00 am every day (daily), at 12:00 am every Monday
    (weekly), or at 12:00 am every first day of the month (monthly).
*   By adding one or more ``<jobFolder>`` configuration elements under ``<jobs>`` in Config > site.xml. Under ``<jobFolder>`` you can
    specify a ``<path>`` and a ``<cronExpression>``, and every script under that folder will be scheduled using the cron expression.

    .. code-block:: xml

        <jobs>
            <jobFolder>
                <path>/scripts/jobs/morejobs</path>
                <cronExpression>0 0/15 * * * ?</cronExpression>
            </jobFolder>
        </jobs>

*   By adding one or more ``<job>`` configuration elements under ``<jobs>`` in Config > site.xml. With the ``<path>`` and
    ``<cronExpression>`` elements, you specify the job script path and the cron expression for scheduling.

    .. code-block:: xml

        <jobs>
            <jobFolder>
                <path>/scripts/jobs/morejobs</path>
                <cronExpression>0 0/15 * * * ?</cronExpression>
            </jobFolder>
        </jobs>
