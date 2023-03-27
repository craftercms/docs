:is-up-to-date: True
:last-updated: 4.0.3

.. index:: Engine's Configuration Overrides, Configuration Overrides, Overrides

.. _engine-config-override:

================================
Engine's Configuration Overrides
================================

Crafter Engine comes with pre-configured settings that you may want to override.  To view the pre-configured settings in Crafter Engine, in your installation, go to ``CRAFTER_HOME/bin/apache-tomcat/webapps/ROOT/WEB-INF/classes/crafter/engine`` and open the file ``server-config.properties``.

To override any of the pre-configured settings, in your installation, go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension`` and add the settings you would like to configure in the file ``server-config.properties``.   The override file have some settings already listed that you may want to override in Crafter Engine:

----------
Properties
----------

The following allows you to configure the following:

* ``crafter.engine.site.default.rootFolder.path`` allows you to set the content root folder
* ``crafter.engine.elasticsearch.timeout.connect``, ``crafter.engine.elasticsearch.timeout.socket`` and ``crafter.engine.elasticsearch.threads`` allows you to configure the Elasticsearch client connection timeout, socket timeout and number of threads

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Content root folder. The {siteName} variable will be automatically replaced.
   crafter.engine.site.default.rootFolder.path=file:${CRAFTER_DATA_DIR}/repos/sites/{siteName}/sandbox/
   # The URL of Crafter Search
   crafter.engine.search.server.url=${SEARCH_URL}
   # The value for the access token for Crafter Search
   crafter.engine.search.server.accessToken.value=${SEARCH_ACCESS_TOKEN}
   # The URL of Crafter Profile
   crafter.profile.rest.client.url.base=${PROFILE_URL}
   # If the Security Provider is enabled
   crafter.security.enabled=true
   # The Elasticsearch hosts to use
   crafter.engine.elasticsearch.urls=${ES_URL}
   # The username for Elasticsearch
   crafter.engine.elasticsearch.username=${ES_USERNAME}
   # The password for Elasticsearch
   crafter.engine.elasticsearch.password=${ES_PASSWORD}
   # The connection timeout in milliseconds, if set to -1 the default will be used
   crafter.engine.elasticsearch.timeout.connect=-1
   # The socket timeout in milliseconds, if set to -1 the default will be used
   crafter.engine.elasticsearch.timeout.socket=-1
   # The number of threads to use, if set to -1 the default will be used
   crafter.engine.elasticsearch.threads=-1
   # Indicates if keep alive should be enabled for sockets used by the search client, defaults to false
   crafter.engine.elasticsearch.keepAlive=false

   # Engine management authorization token
   crafter.engine.management.authorizationToken=${ENGINE_MANAGEMENT_TOKEN}

   # The key used for encryption of configuration properties
   crafter.security.encryption.key=${CRAFTER_ENCRYPTION_KEY}
   # The salt used for encryption of configuration properties
   crafter.security.encryption.salt=${CRAFTER_ENCRYPTION_SALT}

   # The prefix used for all header names
   crafter.security.header.names.prefix=CRAFTER_
   # The name of the header containing the username
   crafter.security.header.names.username=username
   # The name of the header containing the email
   crafter.security.header.names.email=email
   # The name of the header containing the groups
   crafter.security.header.names.groups=groups
   # The name of the header containing the token
   crafter.security.header.names.token=secure_key

   # The current environment the Engine instance is running in (e.g. default, dev, qa, prod)
   crafter.engine.environment=${CRAFTER_ENVIRONMENT}

|

.. _engine-forwarded-headers:

-----------------
Forwarded Headers
-----------------

The following section allows you to configure forwarded headers to resolve the actual hostname and protocol when it is behind a load balancer or reverse proxy. Forwarded headers are disabled by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if Forwarded or X-Forwarded headers should be used when resolving the client-originated protocol and
   # address. Enable when Engine is behind a reverse proxy or load balancer that sends these
   crafter.engine.forwarded.headers.enabled=false

|


----------------------
Content-Length Headers
----------------------

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

--------------------------
Spring Expression Language
--------------------------

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

----------------------------
Groovy Sandbox Configuration
----------------------------

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

|

For more information on configuring the Groovy sandbox, see :ref:`here <script-sandbox-configuration>`

--------------------------------------
Static Methods in Freemarker Templates
--------------------------------------

The following allows you to configure access to static methods in Freemarker templates.
Access to static methods in Freemarker templates is disabled by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if access for static methods should be allowed in Freemarker templates
   crafter.engine.freemarker.statics.enable=false

-----
Cache
-----

^^^^^^^^^
Max Items
^^^^^^^^^

The following allows you to configure the maximum number of objects in Engine's cache:

.. code-block:: properties

   # The max number of items that each site cache can have
   crafter.engine.site.default.cache.maxAllowedItems=250000

^^^^^^^^^^^^^^^^^^^
URL Transformations
^^^^^^^^^^^^^^^^^^^

The following allows you to configure whether the URL transformation performed by the view resolver will be cached:

.. code-block:: properties

   # Flag that indicates if the URL transformations performed by the view resolver should be cached
   crafter.engine.page.view.resolver.url.transformation.cache=false

^^^^^^^^^^^^^^^^^
Preloaded Folders
^^^^^^^^^^^^^^^^^

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

For all projects, the cache is preloaded using the above configuration. CrafterCMS warms up the cache on every publish and startup.  Note also that what's cache warmed will be warmed on every publish and startup and will live as long as nothing kicks it out of the cache due to least recently used (LRU) cache.
