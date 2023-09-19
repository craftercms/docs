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
The main configuration files for a project/site can be edited within Crafter Studio or via Git. These files are:

.. list-table:: Engine Project Configuration Files
    :header-rows: 1

    * - Configuration File
      - Description
      - More Information
    * - Engine Project Configuration (``config/engine/site-config.xml``)
      - Contains project properties used by Crafter Engine
      - - :ref:`engine-project-configuration`
        - :ref:`engine-headers-authentication`
        - :ref:`Configure MongoDB URI <engine-mongodb-configuration>`
        - :ref:`engine-crafter-profile-configuration`
    * - Engine Project Application Context (``config/engine/application-context.xml``)
      - Contains bean definitions for the site context associated with the webapp
      - - :ref:`engine-project-spring-configuration`
        - :ref:`Configure a GMongo client <engine-mongodb-configuration>`
    * - URL Rewrite Configuration (XML Style) (``config/engine/urlrewrite.xml``)
      - Contains URL rewrite rules
      - - :ref:`engine-url-rewrite-configuration`
    * - Proxy Config (``config/engine/proxy-config.xml``)
      - Configures the proxy servers for preview
      - - :ref:`proxy-configuration`
        - :ref:`using-the-proxy-configuration`

These project configuration files are located under ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine`` where ``CRAFTER_HOME`` is the install directory of your CrafterCMS and ``SITENAME`` is the name of the site being configured.

These files can be accessed by navigating from the Studio Sidebar to |projectTools| ➜ ``Configuration``, then selecting the desired Engine configuration option from the dropdown.

|hr|

.. _engine-instance-configuration-files:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Instance-level Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The main files for configuring Crafter Engine at the instance level are:

.. list-table:: Engine Instance Level Configuration Files
    :header-rows: 1

    * - Configuration File
      - Description
      - More Information
    * - ``server-config.properties``
      - Contains server configurable parameters such as urls, paths, etc.
      - - :ref:`engine-config`
        - :ref:`configure-multi-tenancy-in-engine`
        - :ref:`engine-saml2-configuration`
        - :ref:`engine-turn-off-show-error`
    * - ``services-context.xml``
      - Contains the bean definition for services layer
      - - :ref:`Example configuration in services-context.xml <configure-multi-tenancy-in-engine>`
    * - ``rendering-context.xml``
      - Contains the bean definition for rendering
      - - :ref:`Example configuration in rendering-context.xml <configure-multi-tenancy-in-engine>`
    * - ``logging.xml``
      - Contains loggers, appenders, etc.
      - - :ref:`Setting log levels <permanently-set-logging-levels>`

These configuration files for Crafter Engine is located under  ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension``, where ``CRAFTER_HOME`` is the install directory of your CrafterCMS authoring or delivery environment.

The files can be accessed by opening the files using your favorite editor. Any changes made to any of the files listed above will require a restart of CrafterCMS.

|hr|

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
    * - Search Timeouts
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

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    crafter.engine.site.default.rootFolder.path=file:/opt/crafter/data/site-content/{siteName}/content


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

.. .. include:: /includes/engine-project-security-guide.rst

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

.. Content from /includes/engine-project-configuration

.. _engine-project-configuration:

----------------------------
Engine Project Configuration
----------------------------

Crafter Engine provides a flexible configuration system that allows site administrators to change
the behavior of the project without the need to modify any code. Some properties are used by Crafter
Engine itself, but developers can also add any custom property they need for their code. All
properties will be available for developers in the Freemarker templates and Groovy scripts using the
``siteConfig`` variable.

**XML Configuration Files**

 - ``/config/engine/site-config.xml``
   Main XML configuration for the project, this file will always be loaded by Crafter Engine. This file can
   be accessed easily from any project created through the out-of-the-box blueprints, by navigating from the
   Studio sidebar to ``Project Tools`` > ``Configuration``, and finally picking up the ``Engine Project
   Configuration`` option from the list.

	 .. image:: /_static/images/site-admin/engine-project-config.webp
			 :alt: Engine Project Configuration

     |


 - ``/config/engine/{crafterEnv}-site-config.xml``
   Environment specific XML configuration, these files will be loaded only when the value of the
   ``crafter.engine.environment`` property matches the `crafterEnv` placeholder in the file name.
 - ``$TOMCAT/shared/classes/crafter/engine/extension/sites/{siteName}/site-config.xml``
   External XML configuration, this file will be always loaded by Crafter Engine when present and
   will allow to change configurations without having to modify the files in the project repository.

.. NOTE::
   Properties will be overridden according to the order the files are loaded which is the same as
   the list above: main site-config.xml, environment site-config.xml, external site-config.xml
   If the same property is present in all files the value from the external file will be used.

.. NOTE::
   Apache Commons Configuration (https://commons.apache.org/proper/commons-configuration/) is used
   to read all configuration files. The ``siteConfig`` variable is an instance of the
   `XMLConfiguration <https://commons.apache.org/proper/commons-configuration/apidocs/org/apache/commons/configuration2/XMLConfiguration.html>`_
   class.

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

.. End of content from /includes/engine-project-configuration

.. Start of content from /includes/engine-project-spring-configuration

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

.. End of content from /includes/engine-project-spring-configuration