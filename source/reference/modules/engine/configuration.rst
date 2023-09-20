:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Engine Configuration

.. _engine-config:

====================
Engine Configuration
====================
.. contents::
    :local:
    :depth: 2

.. _engine-configuration-files:

-------------------
Configuration Files
-------------------
Crafter Engine can be configured at the project/site level or at the instance level.

.. _engine-site-configuration-files:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Project-level/Site-level Configuration Files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Engine provides a flexible configuration system that allows site administrators to change
the behavior of the project without the need to modify any code. Some properties are used by Crafter
Engine itself, but developers can also add any custom property they need for their code.

The main configuration files for a project/site can be edited within Crafter Studio's Project Tools > Configuration UI or via Git. These files are:

.. list-table:: Engine Project Configuration Files
    :header-rows: 1

    * - Configuration File
      - Description
    * - Engine Project Configuration (``config/engine/site-config.xml``)
      - Contains project properties used by Crafter Engine
    * - Engine Project Application Context (``config/engine/application-context.xml``)
      - Contains bean definitions for the site context associated with the Webapp
    * - URL Rewrite Configuration (XML Style) (``config/engine/urlrewrite.xml``)
      - Contains URL rewrite rules
    * - Proxy Config (``config/engine/proxy-config.xml``)
      - Configures the proxy servers for the Preview server (Crafter Engine in Preview Mode)

.. note:: All configuration files can be overridden by environment. Learn more about multi-environment support in :ref:`engine-multi-environment-support`.

The configuration file ``site-config.xml`` has some additional considerations. This file can be defined in:
    - ``/config/engine/env/{envName}/site-config.xml``: This is the environment override, and is loaded first if present.
    - ``/config/engine/site-config.xml``: This is the main configuration file for the project/site. This file is loaded if the environment override is not present.

.. note:: All properties will be available for developers in the Freemarker templates and Groovy scripts using the ``siteConfig`` variable. The ``siteConfig`` variable is an instance of the `XMLConfiguration <https://commons.apache.org/proper/commons-configuration/apidocs/org/apache/commons/configuration2/XMLConfiguration.html>`_ class.

.. _engine-instance-configuration-files:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Instance-level Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The main files for configuring Crafter Engine at the instance level are:

.. list-table:: Engine Instance Level Configuration Files
    :header-rows: 1

    * - Configuration File
      - Description
    * - ``server-config.properties``
      - Contains server configurable parameters such as URLs, paths, etc.
    * - ``services-context.xml``
      - Contains the bean definition for services layer
    * - ``rendering-context.xml``
      - Contains the bean definition for rendering
    * - ``logging.xml``
      - Contains loggers, appenders, etc.

These configuration files for Crafter Engine is located under  ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension``, where ``CRAFTER_HOME`` is the install directory of your CrafterCMS authoring or delivery environment.

The files can be accessed by opening the files using your favorite editor. Any changes made to any of the files listed above will require a restart of CrafterCMS.

|hr|

.. TODO
          - - :ref:`engine-project-configuration`
            - :ref:`engine-headers-authentication`
            - :ref:`Configure MongoDB URI <engine-mongodb-configuration>`
            - :ref:`engine-crafter-profile-configuration`

          - - :ref:`engine-project-spring-configuration`
            - :ref:`Configure a GMongo client <engine-mongodb-configuration>`
          - - :ref:`engine-url-rewrite-configuration`

          - - :ref:`proxy-configuration`
            - :ref:`using-the-proxy-configuration`

    .. instance level

        - - :ref:`engine-config`
        - :ref:`configure-multi-tenancy-in-engine`
        - :ref:`engine-saml2-configuration`
        - :ref:`engine-turn-off-show-error`
          - - :ref:`Example configuration in services-context.xml <configure-multi-tenancy-in-engine>`
          - - :ref:`Example configuration in rendering-context.xml <configure-multi-tenancy-in-engine>`
          - - :ref:`Setting log levels <permanently-set-logging-levels>`

..  TODO Configure the Root Folder Path

    The root folder path, as shown below, needs to be configured to include a substitution variable ``{siteName}`` in the :ref:`server-config.properties <engine-configuration-files>` file:

    .. code-block:: properties
      :caption: *{delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

      crafter.engine.site.default.rootFolder.path=file:/opt/crafter/data/site-content/{siteName}/content

    |

    This variable will be resolved by Crafter Engine for each request. To resolve this value, simply configure
    simple multi-tenancy, with an Apache HTTP server, NGINX, or CDN proxying Crafter Engine.
    These project configuration files are located under ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine`` where ``CRAFTER_HOME`` is the install directory of your CrafterCMS and ``SITENAME`` is the name of the site being configured.

    These files can be accessed by navigating from the Studio Sidebar to |projectTools| ➜ ``Configuration``, then selecting the desired Engine configuration option from the dropdown.

-------------------------------
Engine Configuration Properties
-------------------------------
In this section we will highlight some of the more commonly used properties in the configuration of Crafter Engine. For most properties, please see the  ``server-config.properties`` file, and for additional configuration files and properties, see :ref:`engine-configuration-files`.

.. TODO
.. list-table:: Configuration Properties
    :header-rows: 1

    * - Property
      - Purpose

    * - :ref:`engine-root-Folder`
      - Allows you to set the content root folder
    * - :ref:`engine-turn-off-show-error`
      - Allows you to turn off showing errors in line with content
    * - Groovy Sandbox Configuration
      -
    * - :ref:`request-filtering-configuration`
      - Allows you to configure request filtering
    * - :ref:`engine-forwarded-headers`
      - Allows you to configure forwarded headers
    * - :ref:`engine-policy-headers`
      - Allows you to configure policy headers
    * - :ref:`engine-search-timeouts`
      - Allows you to configure the search client connection timeout, socket timeout and number of threads
    * - :ref:`engine-content-length-headers`
      - Allows you to configure the content-length header
    * - :ref:`engine-static-methods-in-freemarker-templates`
      - Allows you to configure static methods in Freemarker templates
    * - :ref:`engine-spring-expression-language`
      - Allows you to configure SpEL expressions for custom app contexts

|

.. _engine-root-folder:

^^^^^^^^^^^^^^^^^^
Engine Root Folder
^^^^^^^^^^^^^^^^^^
The following allows you to set the content root folder.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    crafter.engine.site.default.rootFolder.path=file:${CRAFTER_DATA_DIR}/repos/sites/{siteName}/sandbox/


.. _engine-turn-off-show-error:

^^^^^^^^^^^^^^^^^^^
Turn Off Show Error
^^^^^^^^^^^^^^^^^^^
Templates in CrafterCMS will display the errors in line with content as they encounter them to help the template developer during the coding process. On production environments, you do not want the errors to show up because it will highlight site issues and expose information that may be a security concern. To turn off showing errors in line with content, do the following:

#. Place the following property and value in the ``server-config.properties`` file

   .. code-block:: properties
       :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

	   crafter.engine.template.error.displayInView=false

#. Restart the Crafter Engine application or the Tomcat service.

#. Test by deploying an FTL file with an error in it.
   Note that the error will not show up but is printed out in the server's log file.

|

|hr|

.. _request-filtering-configuration:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Request Filtering Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.1.0

The following allows you to setup a filter to deny access to any request matching the value/s defined in the property.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    crafter.security.forbidden.urls=/templates/**

|

|hr|

.. _engine-forwarded-headers:

^^^^^^^^^^^^^^^^^
Forwarded Headers
^^^^^^^^^^^^^^^^^
The following section allows you to configure forwarded headers to resolve the actual hostname and protocol when it is behind a load balancer or reverse proxy. Forwarded headers are disabled by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if Forwarded or X-Forwarded headers should be used when resolving the client-originated protocol and
   # address. Enable when Engine is behind a reverse proxy or load balancer that sends these
   crafter.engine.forwarded.headers.enabled=false

|

|hr|

.. _engine-search-timeouts:

^^^^^^^^^^^^^^^
Search Timeouts
^^^^^^^^^^^^^^^
The following allows you to configure the search client connection timeout, socket timeout and number of threads.

.. code-block:: properties
    :linenos:

    # The connection timeout in milliseconds, if set to -1 the default will be used
    crafter.engine.search.timeout.connect=-1
    # The socket timeout in milliseconds, if set to -1 the default will be used
    crafter.engine.search.timeout.socket=-1
    # The number of threads to use, if set to -1 the default will be used
    crafter.engine.search.threads=-1

|

|hr|

.. _engine-content-length-headers:

^^^^^^^^^^^^^^^^^^^^^^
Content-Length Headers
^^^^^^^^^^^^^^^^^^^^^^
The following allows you to configure the content-length header sent for responses.
The content-length header is sent for all responses by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if the 'etag' header should be added
   crafter.engine.header.etag.enable=false
   # Indicates the urls that will have the 'etag' header (comma separated ant matchers)
   crafter.engine.header.etag.include.urls=/**

|

|hr|

.. _engine-policy-headers:

^^^^^^^^^^^^^^
Policy Headers
^^^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.1.2

""""""""""""""
Referer Policy
""""""""""""""
The following allows you to configure what information is made available in the Referer header in a request.
This can be set to a different value as needed.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
    :linenos:

    # The value of the Referer-Policy header that should be set in all requests. Supported
    # values are: no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin,
    # origin-when-cross-origin, strict-origin-when-cross-origin, unsafe-url
    crafter.security.headers.referrerPolicy.value=no-referrer

"""""""""""""""""""""""
Content Security Policy
"""""""""""""""""""""""
The following allows you to configure which resources can be loaded (e.g. JavaScript, CSS, Images, etc.)
and the URLs that they can be loaded from. This should be tuned to the specific requirements of each project.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
    :linenos:

    # The value of the Content-Security-Policy header that should be set in all requests.
    crafter.security.headers.contentSecurityPolicy.value=default-src 'self' 'unsafe-inline'
    # Set to true to enable the Content-Security-Policy-Report-Only header (this will report in the user agent console instead of actually blocking the requests)
    crafter.security.headers.contentSecurityPolicy.reportOnly=true

To block offending requests, set ``crafter.security.headers.contentSecurityPolicy.reportOnly`` to ``false``.
This property is set to ``true`` by default.

"""""""""""""""""""""""""""""""""
X-Permitted-Cross-Domain-Policies
"""""""""""""""""""""""""""""""""
The following allows you to configure what other domains you want to allow access to your domain.
The X-PERMITTED-CROSS-DOMAIN-POLICIES header is set to ``none`` (do not allow any embedding) by default.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
    :linenos:

    # The value of the X-PERMITTED-CROSS-DOMAIN-POLICIES header that should be set in all requests
    crafter.security.headers.permittedCrossDomainPolicies.value=none

|

|hr|

.. _engine-spring-expression-language:

^^^^^^^^^^^^^^^^^^^^^^^^^^
Spring Expression Language
^^^^^^^^^^^^^^^^^^^^^^^^^^
The following allows you to configure SpEL expressions for custom app contexts.
SpEL expressions support is disabled by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if the custom site application contexts should support SpEL expressions
   crafter.engine.context.expressions.enable=false
   # Indicates if the whole servlet & spring context should be available for templates & scripts
   crafter.engine.disableVariableRestrictions=false
   # Patterns for beans that should always be accessible from the site application context
   crafter.engine.defaultPublicBeans=crafter\\.(targetIdManager|targetedUrlStrategy)

|

|hr|

.. _engine-static-methods-in-freemarker-templates:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Static Methods in Freemarker Templates
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following allows you to configure access to static methods in Freemarker templates.
Access to static methods in Freemarker templates is disabled by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if access for static methods should be allowed in Freemarker templates
   crafter.engine.freemarker.statics.enable=false

|

|hr|

.. _engine-cache:

^^^^^
Cache
^^^^^
"""""""""
Max Items
"""""""""
The following allows you to configure the maximum number of objects in Engine's cache:

.. code-block:: properties

   # The max number of items that each site cache can have
   crafter.engine.site.default.cache.maxAllowedItems=250000

"""""""""""""""""""
URL Transformations
"""""""""""""""""""
The following allows you to configure whether the URL transformation performed by the view resolver will be cached:

.. code-block:: properties

   # Flag that indicates if the URL transformations performed by the view resolver should be cached
   crafter.engine.page.view.resolver.url.transformation.cache=false

"""""""""""""""""
Preloaded Folders
"""""""""""""""""
The following allows you to configure folders to be preloaded in the cache:

.. code-block:: properties
    :emphasize-lines: 7,10,13

    #################
    # Cache Warm Up #
    #################
    # Indicates if cache warming should be enabled. This means the site cache will be warmed up (according to a list of
    # cache warmers) on context init and instead of cache clear, a new cache will be warmed up and switched with the
    # current one
    crafter.engine.site.cache.warmUp.enabled=false
    # The descriptor folders that need to be preloaded in cache, separated by comma. Specify the preload depth with
    # :{depth} after the path. If no depth is specified, the folders will be fully preloaded.
    crafter.engine.site.cache.warmUp.descriptor.folders=/site:4
    # The content folders that need to be preloaded in cache, separated by comma. Specify the preload depth with
    # :{depth} after the path. If no depth is specified, the folders will be fully preloaded.
    crafter.engine.site.cache.warmUp.content.folders=/scripts,/templates

where:

  - The descriptor folders are paths that contain XML that needs to be parsed, loaded and merged e.g. for inheritance.
    Most of the time this would be folders under ``/site``

  - The content folders are mostly static, non-processed content, e.g. scripts, templates, static-assets

For all projects, the cache is preloaded using the above configuration. CrafterCMS warms up the cache on every publish and startup. Note also that what's cache warmed will be warmed on every publish and startup and will live as long as nothing kicks it out of the cache due to least recently used (LRU) cache.

.. _s3-object-caching:

"""""""""
S3 Object
"""""""""
.. version_tag::
    :label: Since
    :version: 4.1.0

The following allows you to configure a white list of paths for caching in memory when using S3 store and also the maximum content length for S3 objects allowed to be cached in memory

.. code-block:: properties

    # Maximum content length (in bytes) for S3 objects to be cached in memory. Larger files will be retrieved
    # directly from S3 every time they are requested.
    # Default set to 10M = 10 * 1024 * 1024
    crafter.engine.store.s3.cache.contentMaxLength=10485760
    # White list of paths to be cached in memory when using S3 store.
    crafter.engine.store.s3.cache.allowedPaths=\
      /config/.*,\
      /site/.*,\
      /scripts/.*,\
      /templates/.*,\
      /static-assets/css/.*,\
      /static-assets/js/.*,\
      /static-assets/fonts/.*

|

|hr|

.. _access-to-services:

-------------------------------------------------
Configuration Related to Building Custom Services
-------------------------------------------------
When developing templates or scripts only a small list of services are available to use. You can expose other
services with the following steps.

^^^^^^^^^^^^^^^^^^^
CrafterCMS Services
^^^^^^^^^^^^^^^^^^^
If your project/site includes a custom application context with services, you can make them available by adding them to the
comma-separated list in the :ref:`server-config.properties <engine-configuration-files>` configuration file:

.. code-block:: none
  :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``

  # Patterns for beans that should be accessible from the site application context
  crafter.engine.defaultPublicBeans=crafter\\.(targetIdManager|targetedUrlStrategy),someOtherBean

.. note:: The value from the configuration is used as a regular expression, if the value contains special
          characters you will need to escape them with backslashes ``\\``.

^^^^^^^^^^^^^^^
System Services
^^^^^^^^^^^^^^^
.. warning:: This setting will disable restrictions for all projects/sites

|

System objects like ``servletContext`` cannot be exposed by adding them to a list, instead you will need to change
the following configuration in the :ref:`server-config.properties <engine-configuration-files>` file:

.. code-block:: none
  :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``

  # Expose all services
  crafter.engine.disableVariableRestrictions=true

|hr|


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding Dependencies with Grape
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If your Groovy code need to use external dependencies you can use Grapes, however, when the Groovy sandbox is enabled
dependencies can only be downloaded during the initial compilation and not during runtime. For this reason it is
required to add an extra parameter ``initClass=false`` in the annotations to prevent them to be copied to the classes:

.. code-block:: groovy
  :caption: Example grapes annotations

  @Grab(group='org.apache.commons', module='commons-pool2', version='2.8.0', initClass=false)
  @Grab(value='org.apache.commons:commons-pool2:2.8.0', initClass=false)


.. TODO: Link `Disabling the Sandbox Blacklist`
.. TODO: Link `Disabling the Groovy Sandbox

|hr|

.. _script-sandbox-configuration:

----------------------------
Script Sandbox Configuration
----------------------------
When a script is executed all code is validated against a blacklist of insecure expressions to prevent code that could
compromise the system. When you try to execute a script that contains insecure expressions you will see an error
similar to this:

.. code-block:: none

  UnsupportedOperationException: Insecure call staticMethod java.lang.Runtime getRuntime ...

|

It is recommended to keep the default configuration if possible. However, if access to one or more of the blacklisted expressions
is required, it is possible to override the blacklist configuration. Configuration is global and affects all scripts on the server.

.. warning:: When you allow a script to make an insecure call you should make sure it can only be executed with known
             arguments and **never** with unverified user input.

|

^^^^^^^^^^^^^^^^^^^^^^^^
Using a Custom Blacklist
^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Engine includes a default blacklist that you can find
`here <https://github.com/craftercms/engine/blob/develop/src/main/resources/crafter/engine/groovy/blacklist>`_. Make sure you review the branch/tag you're using.

To use a custom blacklist follow these steps:

#. Copy the default blacklist file to your classpath, for example:

    ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/groovy/blacklist``

#. Remove or comment (adding a ``#`` at the beginning of the line) the expressions that your scripts require
#. Update the :ref:`server-config.properties <engine-configuration-files>` configuration file to load the custom blacklist:

    .. code-block:: none
      :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``

      # The location of the blacklist to use for all sites (this will have no effect if the sandbox is disabled)
      crafter.engine.groovy.sandbox.blacklist.path=classpath:crafter/engine/extension/groovy/blacklist

    .. note::
      In CrafterCMS v3.1.14 and prior, the name of the property is ``crafter.engine.groovy.sandbox.blacklist``

#. Restart CrafterCMS

Now you can execute the same script without any issues.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Groovy Sandbox Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following allows you to configure the Groovy sandbox.
The Groovy sandbox is enabled by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if the sandbox should be enabled for all sites
   crafter.engine.groovy.sandbox.enable=true
   # Indicates if the blacklist should be enabled for all sites (this will have no effect if the sandbox is disabled)
   crafter.engine.groovy.sandbox.blacklist.enable=true
   # The location of the default blacklist to use for all sites (this will have no effect if the sandbox is disabled)
   crafter.engine.groovy.sandbox.blacklist.path=classpath:crafter/engine/groovy/blacklist

For more information on configuring the Groovy sandbox, see :ref:`here <script-sandbox-configuration>`

|

|hr|


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Disabling the Sandbox Blacklist
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
It is possible to disable the blacklist to allow the execution of most expressions, in
case you need to use a considerable number of the expression included in the blacklist while keeping some basic
restrictions. To disable the blacklist for all projects/sites update the server configuration file
:ref:`server-config.properties <engine-configuration-files>`:

.. code-block:: none
  :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

  # Indicates if the blacklist should be enabled for all sites (this will have no effect if the sandbox is disabled)
  crafter.engine.groovy.sandbox.blacklist.enable=false

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Disabling the Groovy Sandbox
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
It is possible to completely disable the Groovy sandbox for all scripts. To disable the sandbox for all sites update the server configuration file :ref:`server-config.properties <engine-configuration-files>`:

.. code-block:: none
  :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

  # Indicates if the sandbox is enabled for all sites
  crafter.engine.groovy.sandbox.enable=false

^^^^^^^^^^^^^^^
Important Notes
^^^^^^^^^^^^^^^
There are some limitations that should be noted when working with the Groovy Sandbox.

One limitation is that an exception is thrown during execution when a Groovy class has a property and a getter method for the property. Here's an example code that throws an exception during execution:
   .. code-block::

      class Test {
        private String message

        public String getMessage() {
           return this.message
        }
      }

      def t = new Test()
      t.message = "this is a test"

      return t.getMessage()

   |

Here's the error thrown in the logs by the code above:

.. code-block:: text

   Caused by: java.lang.StackOverflowError
	at groovy.lang.GroovyClassLoader.loadClass(GroovyClassLoader.java:693)
	at groovy.lang.GroovyClassLoader$InnerLoader.loadClass(GroovyClassLoader.java:450)
	at groovy.lang.GroovyClassLoader.loadClass(GroovyClassLoader.java:812)
	at groovy.lang.GroovyClassLoader.loadClass(GroovyClassLoader.java:800)
	at sun.reflect.GeneratedMethodAccessor340.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)
	at groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)
	at groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:1845)
	at groovy.lang.MetaClassImpl.getProperty(MetaClassImpl.java:3773)
	at Test.getProperty(test.get.groovy)
	at org.codehaus.groovy.runtime.InvokerHelper.getProperty(InvokerHelper.java:190)
	at org.codehaus.groovy.runtime.ScriptBytecodeAdapter.getProperty(ScriptBytecodeAdapter.java:469)
	at org.kohsuke.groovy.sandbox.impl.Checker$7.call(Checker.java:392)
	at org.kohsuke.groovy.sandbox.GroovyInterceptor.onGetProperty(GroovyInterceptor.java:68)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.SandboxInterceptor.onGetProperty(SandboxInterceptor.java:297)
	at org.kohsuke.groovy.sandbox.impl.Checker$7.call(Checker.java:390)
	at org.kohsuke.groovy.sandbox.impl.Checker.checkedGetProperty(Checker.java:394)
	at org.kohsuke.groovy.sandbox.impl.Checker$checkedGetProperty$1.callStatic(Unknown Source)
	at Test.getMessage(test.get.groovy:5)

|

**Workarounds**

There are a couple of things you can do to get around the exception being thrown:

* Do not use getter methods and instead access the property directly |br|
  Using the example above, we'll access the property directly:

     .. code-block::

        class Test {
          private String message
        }

        def t = new Test()
        t.message = "this is a test"

        return t.message

     |

* Use a different name for the property and the getter method |br|
  Again, using the example above, we'll use a different name from the property for the getter method:

     .. code-block::

        class Test {
          private String theMessage

          public String getMessage() {
             return this.theMessage
          }
        }

        def t = new Test()
        t.theMessage = "this is a test"

        return t.getMessage()

     |

|hr|


^^^^^^^^^^^^^^^^^^^^^^^^
Configuration Properties
^^^^^^^^^^^^^^^^^^^^^^^^

This example file contains the properties used by Crafter Engine (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample file containing the properties used by Crafter Engine</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-engine-site-config.xml
   :language: xml
   :linenos:

.. raw:: html

   </details>

|
|

**Crafter Engine Properties**
 * **indexFileName:** The name of a page's index file (default is ``index.xml``).
 * **defaultLocale:** The default locale for the project. Used with content targeting through localization.
 * **navigation.additionalFields:**  List of additional fields to include for dynamic navigation items (Example: *<additionalFields>myTitle_s,myAuthor_s,...</additionalFields>*)
 * **spa:** Used for Single Page Application (SPA) Properties (React JS, Angular, Vue.js, etc.). Contains ``<enabled>`` element which enables/disables SPA mode (default is false) and ``<viewName>`` element, the view name for the SPA (Single Page Application. Current view names can be a page URL (like ``/``) or a template name (like ``/template/web/app.ftl``). Default is ``/``)
 * **compatibility.disableFullModelTypeConversion:** Disables full content model type conversion for backwards compatibility mode (false by default)

   Up to and including version 2:
   Crafter Engine, in the FreeMarker host only, converts model elements based on a suffix type hint, but only for the first level in
   the model, and not for _dt. For example, for contentModel.myvalue_i Integer is returned, but for contentModel.repeater.myvalue_i
   and contentModel.date_dt a String is returned. In the Groovy host no type of conversion was performed.

   In version 3 onwards:
   Crafter Engine converts elements with any suffix type hints (including _dt) at at any level in the content
   model and for both Freemarker and Groovy hosts.
 * **filters:** Used to define the filter mappings. Each ``<filter>`` element must contain a ``<script>`` element that specifies the complete
   path to the filter script, and a ``<mapping>`` element. In the ``<mapping>`` element, the ``<include>`` element contains the Ant
   patterns (separated by comma) that request URLs should match for the filter to be executed, while the ``<exclude>`` element contains
   the patterns that requests shouldn't match.
 * **cors.enable**:``true`` if CORS headers should be added to REST API responses when not in preview mode. Defaults to false. |br|.
   The elements ``<accessControlMaxAge>``, ``<accessControlAllowOrigin>``, ``<accessControlAllowMethods>``,
   ``<accessControlAllowHeaders>`` and ``<accessControlAllowCredentials>`` have the values that will be
   copied to each response.

   ``<accessControlAllowOrigin>`` values are split using ``,``. Remember that
   commas inside patterns need to be escaped with a ``\``,
   like this: ``<accessControlAllowOrigin>http://localhost:[8000\,3000],http://*.other.domain</accessControlAllowOrigin>``

   ``<accessControlAllowMethods>`` and ``<accessControlAllowHeaders>`` values are split using ``,``. Remember to escape the commas ``,`` separating
   the values like this: ``<accessControlAllowHeaders>X-Custom-Header\, Content-Type</accessControlAllowHeaders>`` or
   ``<accessControlAllowMethods>GET\, OPTIONS</accessControlAllowMethods>``

   .. note::
      When engine is in preview mode, it is a proxy and therefore will not add CORS headers to REST API responses even if CORS is enabled.

 * **targeting.enabled**:``true`` if content targeting should be enabled. Defaults to false.
 * **targeting.rootFolders:** The root folders that should be handled for content targeting.
 * **targeting.excludePatterns:** Regex patterns that are used to exclude certain paths from content targeting.
 * **targeting.availableTargetIds:** The valid target IDs for content targeting (see :ref:`targeting-guide`).
 * **targeting.fallbackTargetId:** The target ID that should be used as last resort when resolving targeted content.
   (see :ref:`targeting-guide`).
 * **targeting.mergeFolders:** ``true`` if the content of folders that have the same "family" of target IDs should be merged.
   (see :ref:`targeting-guide`).
 * **targeting.redirectToTargetedUrl:** ``true`` if the request should be redirected when the targeted URL is different from the current URL.
   (see :ref:`targeting-guide`).
 * **profile.api.accessToken:** The access token to use for the Profile REST calls. This parameter should be always specified on
   multi-tenant configurations.
 * **security.saml.token:** The expected value for the secure key request header
 * **security.saml.groups:** Contains any number of ``<group>`` elements. Each ``<group>`` element contains a ``<name>`` element (The name of the group from the request header) and a ``<role>`` element (The value to use for the role in the profile).
 * **security.saml.attributes:** Contains any number of ``<attribute>`` elements. Each ``<attribute>`` element contains a ``<name>`` element (The name of the request header for the attribute) and a ``<field>`` element (The name of the field to use in the profile).
 * **security.login.formUrl:** The URL of the login form page. The default is /login.
 * **security.login.defaultSuccessUrl:** The URL to redirect to if the login was successful and the user couldn't be redirected to the
   previous page. The default is /.
 * **security.login.alwaysUseDefaultSuccessUrl:** ``true`` if after successful login always redirect to the default success URL. The default is
   false.
 * **security.login.failureUrl:** The URL to redirect to if the login fails. The default is /login?login_error=true.
 * **security.logout.successUrl:** The URL to redirect after a successful logout. The default is /.
 * **security.accessDenied.errorPageUrl:** The URL of the page to show when access has been denied to a user to a certain resource. The
   default is /access-denied.
 * **security.urlRestrictions:** Contains any number of restriction elements. Each restriction is formed by an Ant-style path pattern (``<url>``)
   and a Spring EL expression (``<expression>``) executed against the current profile. If a request matches the URL, and the expression
   evaluates to false, access is denied. For more information, check
   :javadoc_base_url:`UrlAccessRestrictionCheckingProcessor.java <profile/org/craftercms/security/processors/impl/UrlAccessRestrictionCheckingProcessor.html>`
   and :javadoc_base_url:`AccessRestrictionExpressionRoot.java <profile/org/craftercms/security/utils/spring/el/AccessRestrictionExpressionRoot.html>`

     .. note::
       For the ``<url>`` Ant-style path pattern, ``<url>/*</url>`` indicates just one level of the URL and ``<url>/**</url>`` indicates all urls. For more information on Ant-style path pattern matching, see https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html

 * **socialConnections.facebookConnectionFactory.appId:** The Facebook app ID required for establishing connections with Facebook.
 * **socialConnections.facebookConnectionFactory.appSecret:** The Facebook app secret required for establishing connections with Facebook.
 * **jobs.jobFolder:** Specifies a folder which will be looked up for scripts to be scheduled using a certain cron expression. The folder
   path should be specified with ``<path>``, and should be absolute to the project root. The cron expressions is specified in
   ``<cronExpression>``.
 * **jobs.job:** Specifies a single script job to be scheduled. The job path should be specified in ``<path>``, and the cron expression
   in ``<cronExpression>``.
 * **cache.warmUp.descriptorFolders:** The descriptor folders (paths that contain XML that needs to be parsed, loaded and merged e.g. for inheritance. Most of the time this would be folders under ``/site``) that need to be pre-loaded in cache, separated by comma, when not in preview mode. Specify the preload depth with ``:{depth}`` after the path. If no depth is specified, the folders and all their sub-folders will be fully preloaded. Example: *<descriptorFolders>/site:3</descriptorFolders>*
 * **cache.warmUp.contentFolders:** The content folders (mostly static, non-processed content, e.g. scripts, templates, static-assets) that need to be pre-loaded in cache, separated by comma, when not in preview mode. Specify the preload depth with ``:{depth}`` after the path. If no depth is specified, the folders and all their sub-folders will be fully pre-loaded. Example: *<contentFolders>/scripts,/templates</contentFolders>*

   .. note::
      Cache and ActiveCache do not function the same way as specified above when engine is in preview because the preview server does not cache to ensure the latest updates are seen immediately.

 * **headerMappings.mapping.urlPattern** Ant path pattern to match for adding headers to response
 * **headerMappings.mapping.headers** The headers that will be added to responses. Each ``<header>`` element must contain a ``<name>``
   element that specifies the name of the header e.g. ``Cache-Control``, and a ``<value>`` element containing directives, etc. (separated by an escaped comma)
   e.g. ``max-age=60\, s-maxage=300``.

.. note::
    Crafter Engine will not be able to load your Project Context if your configuration contains invalid XML
    or incorrect configuration.

"""""""""""""""""""""""""""""
Setting HTTP Response Headers
"""""""""""""""""""""""""""""
CrafterCMS supports adding headers to responses when there are matched configuration patterns in
the Engine Project Configuration file |br|

To setup HTTP response headers, do the following:
- Configure the Ant path pattern to match for adding headers to response in **headerMappings.mapping.urlPattern**
- Configure the ``<header>`` element and the `<value>`` element ` with your desired values under **headerMappings.mapping.headers**.

.. code-block:: xml
    :emphasize-lines: 3, 6-7

    <headerMappings>
      <mapping>
        <urlPattern>/**/*.pdf</urlPattern>
        <headers>
          <header>
            <name>X-Crafter-Document</name>
            <value>true</value>
          </header>
        </headers>
      </mapping>
    </headerMappings>

~~~~~~~~~~~~~~~~~~~~~
Setting Cache Headers
~~~~~~~~~~~~~~~~~~~~~
Cache headers allows specifying caching policies such as how an item is cached, maximum age before expiring, etc.
These headers are extremely useful for indicating cache TTLs to CDNs and browsers on certain requests.

To setup cache headers, do the following:

- Configure the Ant path pattern to match for adding headers to response in **headerMappings.mapping.urlPattern**
- Configure the ``<header>`` element with the value ``Cache-Control`` and the element ``<value>`` with your desired Cache-Control
  directive under **headerMappings.mapping.headers**.

  See `here <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control>`__ for a list of available directives
  to use with ``Cache-Control``.

Your configuration should look something like below:

.. code-block:: xml
    :emphasize-lines: 3, 6-7

    <headerMappings>
      <mapping>
        <urlPattern>/articles/**</urlPattern>
        <headers>
          <header>
            <name>Cache-Control</name>
            <value>max-age=60\, s-maxage=300</value>
          </header>
        <headers>
      </mapping>
    </headerMappings>


Please note that the ``Cache-Control`` header inserted to responses by default is set to ``No-Cache``.

.. _engine-project-spring-configuration:

^^^^^^^^^^^^^^^^^^^^
Spring Configuration
^^^^^^^^^^^^^^^^^^^^
Each project can also have it's own Spring application context. Just as with site-config.xml, beans
can be overwritten using the following locations:

Spring Configuration Files
 - ``/config/engine/application-context.xml`` (This file can be accessed easily from any project created
   through the out-of-the-box blueprints, by navigating from the Studio sidebar to ``Project Tools``
   > ``Configuration``, and finally picking up the ``Engine Project Application Context`` option from the dropdown).

	 .. image:: /_static/images/site-admin/engine-project-application-context.webp
			 :alt: Engine Project Application Context

 - ``/config/engine/{crafterEnv}-application-context.xml``
 - ``$TOMCAT/shared/classes/crafter/engine/extension/sites/{siteName}/application-context.xml``

The application context inherits from Engine's own service-context.xml, and any class in Engine's
classpath can be used, including Groovy classes declared under ``/scripts/classes/*``.

As an example, assuming you have defined a Groovy class under ``/scripts/classes/mypackage/MyClass.groovy``,
you can define a bean like this:

.. code-block:: xml
  :caption: application-context.xml
  :linenos:

	<?xml version="1.0" encoding="UTF-8"?>
	<beans xmlns="http://www.springframework.org/schema/beans"
	       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean class="org.springframework.context.support.PropertySourcesPlaceholderConfigurer" parent="crafter.properties"/>

    <bean id="greeting" class="mypackage.MyClass">
      <property name="myproperty" value="${myvalue}"/>
    </bean>

  </beans>

A ``org.springframework.context.support.PropertySourcesPlaceholderConfigurer`` (like above) can be
specified in the context so that the properties of ``site-config.xml`` can be used as placeholders,
like ``${myvalue}``. By making the placeholder configurer inherit from crafter.properties, you'll
also have access to Engine's global properties (like ``crafter.engine.preview``).

.. note::
    Crafter Engine will not be able to load your Project Context if your context file contains invalid XML,
    incorrect configuration or if your beans do not properly handle their own errors on initialization.

.. _engine-multi-environment-support:

--------------------------------
Engine Multi-Environment Support
--------------------------------
The following engine configuration files can be setup for different environments:

* ``site-config.xml``
* ``application-context.xml``
* ``urlrewrite.xml``

To setup an environment for engine configuration files, do the following:

#. Create a folder under ``data/repos/sites/${site}/sandbox/config/engine`` called ``env``
#. Inside the folder, create a directory called ``myenv`` (or whatever you want to call the environment)
#. Copy the configuration file you want to override in the new environment you are setting up, inside your ``myenv`` folder
#. Remember to commit the files copied so Studio will pick it up.
#. In the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` set the
   following property to desired environment:

      .. code-block:: bash
         :caption: *bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=myenv}

      |

#. Restart Crafter

^^^^^^^^
Examples
^^^^^^^^

"""""""""""""""""""""""""""""""""""""
Creating a Custom Environment Example
"""""""""""""""""""""""""""""""""""""
Let's take a look at an example of creating a new environment, called ``mycustomenv`` with the ``urlrewrite.xml``
file overridden in the new environment for a project created using the Website Editorial blueprint.  This example
is very similar to the example shown above for Studio except for the location of the custom configuration file:

#. We'll create a folder called ``env`` under ``data/repos/sites/my-editorial/sandbox/config/engine``

      .. code-block:: text
         :linenos:
         :emphasize-lines: 8

         data/
           repos/
             sites/
               my-editorial/
                 sandbox/
                   config/
                     engine/
                       env/

      |

#. Inside the ``env`` folder, create a directory called ``mycustomenv``
#. We will now create the configuration file for the ``urlrewrite.xml`` that we want to override in the new environment we are setting up, inside our ``mycustomenv`` folder:

      .. code-block:: text
         :emphasize-lines: 3

             env/
               mycustomenv/
                 urlrewrite.xml

     |

   We will redirect the page to ``/articles/2021/12/Top Books For Young Women`` when the page ``/articles/2020/12/Top Books For Young Women`` is previewed. Copy the following inside the ``urlrewrite.xml`` file.

     .. code-block:: xml
        :linenos:
        :caption: *Urlrewrite.xml file for environment mycustomenv*

        <?xml version="1.0" encoding="utf-8"?>
        <urlrewrite>
          <rule>
            <from>/articles/2020/12/(.*)$</from>
            <to type="redirect">/articles/2021/12/$1</to>
          </rule>
        </urlrewrite>

     |

   For our example, the folder ``articles/2020/12`` was copied to ``articles/2021`` with the page under ``articles/2021/12``, modified to display the title as a dupe. This was done so when we click on the page under ``articles/2020/12``, we can easily tell that it's being redirected to the page under ``articles/2021/12``. Of course, you can also just look at the url of the page previewed to verify that it was redirected to the right page.

   .. image:: /_static/images/site-admin/env-copy-page-for-urlrewrite.webp
       :align: center
       :width: 35%
       :alt: Folder with page copied from 2020 to 2021

   |

   Here's the original page:

   .. image:: /_static/images/site-admin/env-original-page.webp
      :align: center
      :alt: Original page before being redirected

   |

   Here's the page we want to be redirected to when previewing the page above:

   .. image:: /_static/images/site-admin/env-redirect-page.webp
      :align: center
      :alt: Page we want to be redirected to

   |

#. Remember to commit the files copied so Studio will pick it up.

      .. code-block:: bash

         ➜  sandbox git:(master) ✗ git add .
         ➜  sandbox git:(master) ✗ git commit -m "Add urlrewrite.xml file for mycustomenv"

      |

#. Open the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` and set the value of ``CRAFTER_ENVIRONMENT`` to the
   environment we setup above (*myenv*) to make it the active environment:

      .. code-block:: bash
         :caption: *bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=mycustomenv}

      |

#. Restart Crafter. To verify our newly setup environment, open the ``Sidebar`` and click on |projectTools|, then select ``Configuration``. Notice that the active environment ``mycustomenv`` will be displayed on top of the configurations drop-down box and when you select the *Engine URL Rewrite Configuration (XML Style)*, it should display the file we created in one of the previous step:

   .. image:: /_static/images/site-admin/env-custom-configurations.webp
      :align: center
      :alt: Active Environment Displayed in Project Tools Configuration

   |

   Let's verify that our *urlrewrite.xml* is in effect. From the *Sidebar*, click on *Home* -> *Entertainment* -> *Top Books For Young Women*  or, navigate to */articles/2020/12/* and click on *Top Books For Young Women*.

   .. image:: /_static/images/site-admin/env-preview-page.webp
      :align: center
      :alt: Preview the page mentioned in the urlrewrite.xml that will be redirected

   |

   The preview page should take you to */articles/2021/12/Top Books For Young Women*

"""""""""""""""""""""""""""""""""""""""""""
Environment Specific Configurations Example
"""""""""""""""""""""""""""""""""""""""""""
Environments are useful for managing values such as paths or database connections without the need to
change any code directly in the servers.

In this example, we show how to manage a database connection that will change depending on the server
where the project is deployed. We will have three environments ``dev``, ``auth`` and ``delivery``

#. First create the environments by following the example above for creating the environments.
   We'll then have the following folders called ``dev``, ``auth`` and ``delivery`` under ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/env``

#. Next, include the appropriate connection string for each environment in the ``site-config.xml`` file:

   .. code-block:: xml
      :caption: *Local Development Configuration: /config/engine/env/dev/site-config.xml*
      :linenos:

      <?xml version="1.0" encoding="UTF-8"?>
      <site>
        <db>
          <uri>mongodb://localhost:27017/mydb?maxPoolSize=1&amp;minPoolSize=0&amp;maxIdleTimeMS=10000</uri>
        </db>
      </site>


   .. code-block:: xml
       :caption: *Authoring Configuration: /config/engine/env/auth/site-config.xml*
       :linenos:

       <?xml version="1.0" encoding="UTF-8"?>
       <site>
         <db>
           <uri>mongodb://localhost:27020/mydb?maxPoolSize=5&amp;minPoolSize=2&amp;maxIdleTimeMS=10000</uri>
         </db>
       </site>


   .. code-block:: xml
      :caption: *Delivery Configuration: /config/engine/env/delivery/site-config.xml*
      :linenos:

      <?xml version="1.0" encoding="UTF-8"?>
      <site>
        <db>
          <uri>mongodb://delivery-db-server:27020/delivery-db?maxPoolSize=10&amp;minPoolSize=5&amp;maxIdleTimeMS=1000</uri>
        </db>
      </site>

   Remember to commit the files copied so Studio will pick it up.

#. Finally, notice when using this approach the code is completely independent of the environment so we only need one
   bean that will always connect to the right database:

   .. code-block:: xml
      :caption: *Default Application Context: /config/engine/application-context.xml (shared by all environments)*
      :linenos:

      <?xml version="1.0" encoding="UTF-8"?>
      <beans xmlns="http://www.springframework.org/schema/beans"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

        <bean class="org.springframework.context.support.PropertySourcesPlaceholderConfigurer" parent="crafter.properties"/>

        <bean id="mongoUri" class="com.mongodb.MongoClientURI">
           <constructor-arg value="${db.uri}"/>
        </bean>

        <bean id="mongoClient" class="com.gmongo.GMongoClient">
          <constructor-arg ref="mongoUri"/>
        </bean>

      </beans>


|hr|


.. _saml2-multi-environment-support:

------------------------------------------------
SAML2 Multi-Environment Support |enterpriseOnly|
------------------------------------------------

When configuring SAML2 in an environment-specific project configuration file (*site-config.xml*), since the
SAML2 configuration folder sits outside the environment folder, you can point to environment-specific SAML2
files in the SAML2 folder for the following path/file configuration of SAML2:

+------------------------------------+-------------------------------------------+-------------------------------------+
|| Property                          || Description                              || Default Value                      |
+====================================+===========================================+=====================================+
|``keystore.path``                   |The path of the keystore file in the repo  |``/config/engine/saml2/keystore.jks``|
+------------------------------------+-------------------------------------------+-------------------------------------+
|``identityProviderDescriptor``      |The path of the identity provider metadata |``/config/engine/saml2/idp.xml``     |
|                                    |XML descriptor in the repo                 |                                     |
+------------------------------------+-------------------------------------------+-------------------------------------+
|``serviceProviderDescriptor``       |The path of the service provider metadata  |``/config/engine/saml2/sp.xml``      |
|                                    |XML descriptor in the repo                 |                                     |
+------------------------------------+-------------------------------------------+-------------------------------------+

Use the format ``/config/engine/saml2/saml2-path-file-config-{myCustomEnv}.***`` for naming your SAML2 environment
specific configuration files where ``{myCustomEnv}`` is the name of your environment.

^^^^^^^
Example
^^^^^^^

Say we're setting up SAML2 files for an environment named ``dev``. Using the format mentioned above, our environment
specific SAML2 files will be the following:

- ``/config/engine/saml2/keystore-dev.jks``
- ``/config/engine/saml2/idp-dev.xml``
- ``/config/engine/saml2/sp-dev.xml``

Below is the SAML2 configuration using the above files in the project configuration file:

.. code-block:: xml
   :caption: *Example SAML2 configuration for a custom environment*
   :emphasize-lines: 5,15,17

   <saml2>
     ...
     <keystore>
       <defaultCredential>abc-crafter-saml</defaultCredential>
       <path>/config/engine/saml2/keystore-dev.jks</path>
       <password encrypted="true">${enc:value}</password>
       <credentials>
         <credential>
           <name>abc-crafter-saml</name>
           <password encrypted="true">${enc:value}</password>
         </credential>
       </credentials>
     </keystore>
     <identityProviderName>http://www.okta.com/abc</identityProviderName>
     <identityProviderDescriptor>/config/engine/saml2/idp-dev.xml</identityProviderDescriptor>
     <serviceProviderName>https://intranet.abc.org/saml/SSO</serviceProviderName>
     <serviceProviderDescription>/config/engine/saml2/sp-dev.xml</serviceProviderDescription>
   </saml2>


See :ref:`engine-saml2-configuration` for more information on configuring SAML2.

.. _engine-multi-target-configurations:

---------------------------
Engine Multi-target Support
---------------------------
There are some cases where the Engine configuration files need to have different values per publishing target. Say for a production environment where you have **staging** to test out your project and **live** , the project to be used by end users, you may need different SAML authentication mechanics or different URL rewrites.

The :ref:`engine-multi-environment-support` section detailed how to setup Engine configuration files per environment. CrafterCMS
supports overriding Engine configuration files, not just per environment, but also per publishing target.
It supports a base configuration per environment with the ability to override per publishing target.

The following engine configuration files can be setup for different publishing targets:

* site-config.xml
* application-context.xml
* urlrewrite.xml

Here are the available publishing targets for the configuration files listed above:

* preview
* staging
* live

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Overriding Engine Configuration Files per Publishing Target
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To override a configuration file in any of the publishing targets

#. Add the new configuration file/s for overriding to **Configurations** under |projectTools| -> **Configuration**

   .. image:: /_static/images/site-admin/configuration.webp
      :alt: Multi-target Configuration - Open Configurations
      :width: 45 %
      :align: center

   |

   The overriding configuration file should be named **configuration-to-be-overridden.publishing-target.xml**. Depending on the publishing target you wish the configuration file to override, the files should look like one of the following:

   - *configuration-to-be-overridden.preview.xml*
   - *configuration-to-be-overridden.staging.xml*
   - *configuration-to-be-overridden.live.xml*

   |

   Say, to add a ``urlrewrite.xml`` file override for **staging**, add the following in the **Configurations**

     .. code-block:: xml
        :caption: *Configurations* - *SITENAME/config/studio/administration/config-list.xml*
        :emphasize-lines: 3

        <file>
          <module>engine</module>
          <path>urlrewrite.staging.xml</path>
          <title>Engine URL Rewrite (XML Style) Staging</title>
          <description>Engine URL Rewrite (XML Style) Staging</description>
          <samplePath>sample-urlrewrite.xml</samplePath>
        </file>

     |

   For more information on **Configurations** config file, see :ref:`project-config-configuration`

#. Fill in your desired additions/modifications to the override configuration file. Refresh your browser. The configuration file you added from above should now be available from |projectTools| -> **Configuration**. Open the new configuration file and make the necessary additions/modifications for the override file then save your changes.

   .. image:: /_static/images/site-admin/new-configuration-added.webp
      :alt: Multi-target Configuration - New configuration files added to dropdown list
      :width: 55 %
      :align: center

   |

#. If the configuration file to be overridden is not for preview, publish the configuration file to the intended publishing target, **staging** or **live**

"""""""
Example
"""""""

Let's take a look at an example of overriding the Project Configuration used by Engine ``site-config.xml`` for the **staging** and **live** publishing targets so that each target has a different SAML authentication mechanics (different identity provider in ``staging`` and ``live``). In our example, we will use a project created using the Website Editorial blueprint named **mysite**

#. Add the new configuration file/s for overriding to **Configurations** under |projectTools| -> **Configuration**. We will be overriding the ``site-config.xml`` file in the **staging** and **live** publishing targets, so we will add to the configuration a ``site-config.staging.xml`` and ``site-config.live.xml`` files.

   .. code-block:: xml
      :caption: *Configurations* - *SITENAME/sandbox/config/studio/administration/config-list.xml*
      :linenos:
      :emphasize-lines: 3,10

      <file>
        <module>engine</module>
        <path>site-config.staging.xml</path>
        <title>Engine Project Configuration Staging</title>
        <description>Project Configuration used by Engine for the Staging publishing target</description>
        <samplePath>sample-engine-site-config.xml</samplePath>
      </file>
      <file>
        <module>engine</module>
        <path>site-config.live.xml</path>
        <title>Engine Project Configuration Live</title>
        <description>Project Configuration used by Engine for the Live publishing target</description>
        <samplePath>sample-engine-site-config.xml</samplePath>
      </file>

   |

#. The configurations we added above will now be available from |projectTools| -> **Configuration**.

   .. image:: /_static/images/site-admin/project-config-override-added.webp
      :alt: Multi-target Configuration - Project Tools override configuration files now listed in "Project Tools" -> "Configuration"
      :width: 55 %
      :align: center

   |

   Enable SAML2 in the configuration with identity provider *My IDP1* for the ``site-config.staging.xml`` and use identity provider *My IDP2* for the ``site-config.live.xml``.

   .. code-block:: xml
      :linenos:
      :caption: *SITENAME/sandbox/config/engine/site-config.staging.xml*

      <site>
        <version>4.0.1</version>

        <security>
          <saml2>
            <enable>true</enable>
            <attributes>
              <mappings>
                <mapping>
                  <name>DisplayName</name>
                  <attribute>fullName</attribute>
                </mapping>
              </mappings>
            </attributes>
            <role>
               <mappings>
                  <mapping>
                     <name>editor</name>
                     <role>ROLE_EDITOR</role>
                  </mapping>
               </mappings>
            </role>
            <keystore>
               <defaultCredential>my-site</defaultCredential>
               <password>superSecretPassword</password>
               <credentials>
                  <credential>
                     <name>my-site</name>
                     <password>anotherSecretPassword</password>
                  </credential>
               </credentials>
            </keystore>
            <identityProviderName>My IDP1</identityProviderName>
            <serviceProviderName>Crafter Engine</serviceProviderName>
         </saml2>
        </security>

      </site>

   |

   For more information on SAML2 configuration, see :ref:`engine-saml2-configuration`

#. Publish ``site-config.live.xml`` to live and ``site-config.staging.xml`` to staging.

   To publish the override configuration files setup above, open the **Dashboard** via the Navigation Menu on the top right or via the Sidebar.  Scroll to the **Unpublished Work** dashlet.

   .. image:: /_static/images/site-admin/view-override-config-on-dashboard.webp
      :alt: Multi-target Configuration - New configuration files listed in the "Unpublished Work" dashlet in the Dashboard
      :width: 85 %
      :align: center

   |

   To publish the ``site-config.live.xml`` configuration file to publishing target ``live``, put a check mark next to the file in the dashlet, then click on ``Publish`` from the context nav. Remember to set the ``Publishing Target`` to **live** in the ``Publish`` dialog

   .. image:: /_static/images/site-admin/publish-override-file.webp
      :alt: Multi-target Configuration - Set "Publishing Target" to "live" in dialog for site-config.live.xml
      :width: 55 %
      :align: center

   |

   To publish the ``site-config.staging.xml`` file to publishing target ``staging`` put a check mark next to the file in the dashlet, then click on ``Publish`` from the context nav. Remember to set the ``Publishing Target`` to **staging** in the ``Publish`` dialog.

   The Engine ``site-config.live.xml`` configuration will now be loaded when viewing your project in ``live`` and the Engine ``site-config.staging.xml`` configuration will now be loaded when viewing your project in ``staging`` instead of the default Engine ``site-config.xml`` files





