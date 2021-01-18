:is-up-to-date: True

.. highlight:: groovy
   :linenothreshold: 5

.. index:: Custom Services and Controllers, Services, Controllers, Groovy API

.. _groovy-api:

==========
Groovy API
==========

A lot of functionality and site customization can be done through Groovy scripts in Crafter, no need to code in Java! By using Groovy
scripts, you can create RESTful services, MVC controllers, code that runs before a page or component is rendered, servlet filters and
scheduled jobs. Crafter also provides a bunch of useful global variables that can be used in all the different types of scripts available:

.. include:: /includes/global-groovy-variables.rst

There are also several other variables available to scripts that are executed during the scope of a request (REST scripts, controller
scripts, page/component scripts and filter scripts):

.. include:: /includes/request-groovy-variables.rst

All scripts are executed in a sandbox to prevent insecure code from running, to change the configuration see 
:ref:`script-sandbox-configuration`

-------------------------
Create a Script in Studio
-------------------------

.. todo:: Write how to create a script in Studio

----------------
Types of Scripts
----------------

There are different types of scripts you can create, depending on the subfolder under Scripts where they're placed. The following are
the ones currently supported:

REST Scripts
============

REST scripts function just like RESTful services. They just need to return the object to serialize back to the caller, and depending on
the extension of the call (either .json or .xml), the result will be marshalled to JSON or XML. REST scripts must be placed in any folder
under Scripts > rest.

A REST script URL has the following format: it starts with /api/1/services, then contains all the folders that are part of the hierarchy
for the particular script, and ends with the script name, the HTTP method and the .groovy extension. So, a script file at
Scripts > rest > myfolder > myscript.get.groovy will respond to GET method calls at http://mysite/api/1/services/myfolder/myscript.json.

The following is a very simple sample script that returns a date attribute saved in the session. If no attribute is set yet, the current
date is set as the attribute. Assume that the REST script exists under Scripts > rest > session_date.get.groovy
::

    import java.util.Date

    if (!session) {
    	session = request.getSession(true)
    }

    def date = session.getAttribute("date")
    if (!date) {
    	date = new Date()

    	session.setAttribute("date", date)
    }

    return ["date": date]

Controller Scripts
==================

Controller scripts are very similar to REST scripts. They have the same variables available, but instead of returning an object,
they return a string with the view to render. Most of the time, this is just the template path, like in the following snippet:
::

    return "/templates/web/registration.ftl"

Controller scripts basically work like a controller in the MVC pattern. They should be put under Scripts > controllers,
and similarly to REST scripts, the URL is made up of the directory hierarchy, the script name and the HTTP method. For example,
a script at Scripts > controllers > myfolder > mycontroller.get.groovy will respond to GET calls at http://mysite/myfolder/mycontroller.

The following is a very simple example script that will do the sum of 2 parameters, put the result in the ``templateModel`` and return
the path of the FTL template that will render the result:
::

    templateModel.result = Integer.parseInt(params.num1) + Integer.parseInt(params.num2)

    return "/templates/web/sum.ftl"

One very common controller script is the sitemap.groovy. A sitemap is used by search engines to have a better idea of how to "crawl"
a website. A sitemap is an XML with references to most of the site's pages, and basically looks like this:

.. code-block:: xml
    :linenos:

    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>http://www.domain.com /</loc>
            <lastmod>2008-01-01</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>http://www.domain.com/catalog?item=vacation_hawaii</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>http://www.domain.com/catalog?item=vacation_new_zealand</loc>
            <lastmod>2008-12-23</lastmod>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>http://www.domain.com/catalog?item=vacation_newfoundland</loc>
            <lastmod>2008-12-23T18:00:15+00:00</lastmod>
            <priority>0.3</priority>
        </url>
        <url>
            <loc>http://www.domain.com/catalog?item=vacation_usa</loc>
            <lastmod>2008-11-23</lastmod>
        </url>
    </urlset>

Search engines look for the sitemap just after the domain, so a sitemap URL would look like www.domain.com/sitemap. The sitemap
controller then must be placed in Scripts > controllers > sitemap.groovy. The code would be similar to this:
::

    import groovy.xml.MarkupBuilder
    import groovy.xml.MarkupBuilderHelper

    def sitemap = []
    def excludeContentTypes = ['/component/level-descriptor']

    parseSiteItem = { siteItem ->
        if (siteItem.isFolder()) {
            def children = siteItem.childItems;
            children.each { child ->
                parseSiteItem(child);
            }
        } else {
            def contentType = siteItem.queryValue('content-type')
            if (!excludeContentTypes.contains(contentType)) {
                def storeUrl = siteItem.getStoreUrl();
                def location = urlTransformationService.transform('storeUrlToFullRenderUrl', storeUrl);
                sitemap.add(location);
            }
        }
    }

    def siteTree = siteItemService.getSiteTree("/site/website", -1)
    if (siteTree) {
        def items = siteTree.childItems;
        items.each { siteItem ->
            parseSiteItem(siteItem);
        }
    }

    response.setContentType("application/xml;charset=UTF-8")

    def writer = response.getWriter()
    def xml = new MarkupBuilder(writer)
    def xmlHelper = new MarkupBuilderHelper(xml)

    xmlHelper.xmlDeclaration(version:"1.0", encoding:"UTF-8")

    xml.urlset(xmlns:"http://www.sitemaps.org/schemas/sitemap/0.9") {
        sitemap.each { location ->
            url {
                loc(location)
                changefreq("daily")
            }
        }
    }

    response.flush()

    return null


.. _page-and-component-scripts:

Page and Component Scripts
==========================

Crafter page and components can have their own controller scripts too, that are executed before the page or component
is rendered, and that can contribute to the model of the template. These scripts, besides the common variables, have
the ``templateModel`` and the ``contentModel`` available. The ``templateModel`` is the actual map model of the
template, and any variable put in it will be accessible directly in the template, eg. if the script has the line
``templateModel.var = 5``, then in the template the var's value can be printed with ``${var}``. The ``contentModel``
is the XML descriptor content, of type SiteItem. The scripts don't have to return any result, just populate the
``templateModel``.

There are 2 ways in which you can "bind" a script to a page or component:

#.  Put the script under Scripts > pages or Scripts > components, and name it after the page or component content type.
#.  When creating the content type for the page or component, add an Item Selector with the variable name ``scripts``. Later when creating
    a page or component of that type, you can select multiple scripts that will be associated to the page or component.

The following is an example of a component script. The component content type is ``/component/upcoming-events``. We can then place the
script in Scripts > components > upcoming-events.groovy so that it is executed for all components of that type.
::

    import org.craftercms.engine.service.context.SiteContext

    import utils.DateUtils

    def now = DateUtils.formatDateAsIso(new Date())
    def queryStr = "crafterSite:\"${siteContext.siteName}\" AND content-type:\"/component/event\" AND disabled:\"false\" AND date_dt:[${now} TO *]"
    def start = 0
    def rows = 1000
    def sort = "date_dt asc"
    def query = searchService.createQuery()

    query.setQuery(queryStr)
    query.setStart(start)
    query.setRows(rows)
    query.addParam("sort", sort)
    query.addParam("fl", "localId")

    def events = []
    def searchResults = searchService.search(query)
    if (searchResults.response) {
        searchResults.response.documents.each {
            def event = [:]
            def item = siteItemService.getSiteItem(it.localId)

            event.image = item.image.text
            event.title = item.title_s.text
            event.date = DateUtils.parseModelValue(item.date_dt.text)
            event.summary = item.summary_html.text

            events.add(event)
        }
    }

    contentModel.events = events


In the above example, you will see that we're importing a ``utils.DateUtils`` class. This class is not part of Crafter CMS, but instead it is a site specific class written in Groovy.
The class is/needs to be located at the following path ``scripts > classes > utils``. It's placed in a file called ``DateUtils.groovy``
::

    package utils

    import java.text.SimpleDateFormat

    class DateUtils {

        static def parseModelValue(value){
            def dateFormat = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss")
                dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"))
            return dateFormat.parse(value)
        }

        static def formatDateAsIso(date) {
            def dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
                dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"))
            return dateFormat.format(date)
        }

    }

Filter Scripts
==============

Crafter Engine can handle special Groovy filters that work basically in the same way as Servlet filters. These are
scripts very similar to page scripts, and have basically the same variables available (except the ``templateModel``
and ``contentModel`` variables), but instead of updating the template model, they call ``filterChain.doFilter
(request, response)``, just like in Java Servlet filters, to continue with the filter chain. You can even stop the
request filtering and return the response directly, like in this example:
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

The following is an example script that adds a display name attribute to the current profile if the attribute doesn't exist yet. Assume
that the script is placed in Scripts > filters > addDisplayName.groovy.
::

    if (profile) {
        def displayName = profile.getAttribute("displayName")
        if (!displayName) {
            def id = profile.id.toString()
            def firstName = profile.getAttribute("firstName")
            def lastName = profile.getAttribute("lastName")
            def newAttributes = [:]

            newAttributes["displayName"] = "${firstName} ${lastName}".toString()

            profileService.updateAttributes(id, newAttributes)

            logger.info("Display name added to profile '${id}'")
        }
    }

    filterChain.doFilter(request, response)

To enable this filter, we need to configure its mapping in Config > site.xml. The mapping would look as the following.

.. code-block:: xml

    <?xml version="1.0" encoding="UTF-8"?>
    <site>
        <filters>
            <filter>
                <script>/scripts/filters/addDisplayName.groovy</script>
                <mapping>
                    <include>/**</include>
                </mapping>
            </filter>
        </filters>
    </site>

Scheduled Script Jobs
=====================

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
            <job>
                <path>/scripts/jobs/testJob.groovy</path>
                <cronExpression>0 0/15 * * * ?</cronExpression>
            </job>
        </jobs>
