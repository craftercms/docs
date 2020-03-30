:is-up-to-date: True

.. index:: Engine Site Configuration

.. _engine-site-configuration:

=========================
Engine Site Configuration
=========================

Crafter Engine provides a flexible configuration system that allows site administrators to change
the behavior of the site without the need to modify any code. Some properties are used by Crafter
Engine itself, but developers can also add any custom property they need for their code. All
properties will be available for developers in the Freemarker templates and Groovy scripts using the
``siteConfig`` variable.

XML Configuration Files
 - ``/config/engine/site-config.xml``
   Main XML configuration for the site, this file will always be loaded by Crafter Engine. This file can
   be accessed easily from any site created through the out-of-the-box blueprints, by navigating from the
   Studio dashboard to ``Site Config`` > ``Configuration``, and finally picking up the ``Engine Site
   Configuration`` option from the dropdown.

	 .. image:: /_static/images/site-admin/engine-site-config.jpg
			 :alt: Engine Site Configuration


 - ``/config/engine/{crafterEnv}-site-config.xml``
   Environment specific XML configuration, these files will be loaded only when the value of the
   ``crafter.engine.environment`` property matches the `crafterEnv` placeholder in the file name.
 - ``$TOMCAT/shared/classes/crafter/engine/extension/sites/{siteName}/site-config.xml``
   External XML configuration, this file will be always loaded by Crafter Engine when present and
   will allow to change configurations without having to modify the files in the site repository.

.. NOTE ::
  Properties will be overridden according to the order the files are loaded which is the same as
  the list above: main site-config.xml, environment site-config.xml, external site-config.xml
  If the same property is present in all files the value from the external file will be used.

.. NOTE ::
  Apache Commons Configuration (https://commons.apache.org/proper/commons-configuration/) is used
  to read all configuration files. The ``siteConfig`` variable is an instance of the
  `XMLConfiguration <https://commons.apache.org/proper/commons-configuration/apidocs/org/apache/commons/configuration2/XMLConfiguration.html>`_
  class.

------------------------
Configuration Properties
------------------------

This example file contains the properties used by Crafter Engine:

.. code-block:: xml
  :caption: site-config.xml
  :linenos:

  <?xml version="1.0" encoding="UTF-8"?>
  <site>
    <!-- General properties -->
    <indexFileName>index.xml</indexFileName>
    <defaultLocale>en</defaultLocale>

    <!-- Compatibility properties -->
    <compatibility>
        <disableFullModelTypeConversion>false</disableFullModelTypeConversion>
    </compatibility>

    <!-- Filter properties -->
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

    <!-- CORS headers for REST API -->
    <cors>
      <enable>true</enable>
      <accessControlMaxAge>3600</accessControlMaxAge>
      <accessControlAllowOrigin>*</accessControlAllowOrigin>
      <accessControlAllowMethods>GET\, POST\, PUT</accessControlAllowMethods>
      <accessControlAllowHeaders>Content-Type</accessControlAllowHeaders>
      <accessControlAllowCredentials>true</accessControlAllowCredentials>
    </cors>

    <!-- Content targeting properties -->
    <targeting>
      <enabled>true</enabled>
      <rootFolders>/site/website</rootFolders>
      <excludePatterns>/site/website/index\.xml</excludePatterns>
      <availableTargetIds>en,ja,ja_JP,ja_JP_JP</availableTargetIds>
      <fallbackTargetId>en</fallbackTargetId>
      <mergeFolders>true</mergeFolders>
      <redirectToTargetedUrl>false</redirectToTargetedUrl>
    </targeting>

    <!-- Profile properties -->
    <profile>
      <api>
        <accessTokenId>${enc:q3l5YNoKH38RldAkg6EAGjxlI7+K7Cl4iEmMJNlemNOjcuhaaQNPLwAB824QcJKCbEeLfsg+QSfHCYNcNP/yMw==}</accessTokenId>
      </api>
    </profile>

    <!-- Security properties -->
    <security>
      <login>
        <formUrl>/signin</formUrl>
        <defaultSuccessUrl>/home</defaultSuccessUrl>
        <alwaysUseDefaultSuccessUrl>true</alwaysUseDefaultSuccessUrl>
        <failureUrl>/signin?error=loginFailure</failureUrl>
      </login>
      <logout>
        <successUrl>/home</successUrl>
      </logout>
      <accessDenied>
        <errorPageUrl>/signin?error=accessDenied</errorPageUrl>
      </accessDenied>
      <urlRestrictions>
        <restriction>
          <url>/*</url>
          <expression>hasRole('USER')</expression>
        </restriction>
      </urlRestrictions>
    </security>

    <!-- Social properties -->
    <socialConnections>
      <facebookConnectionFactory>
        <appId>${enc:Nk4ZJWGGNIf9tt0X8BudixQhHekkBbG1AJE6myeqxp8=}</appId>
        <appSecret>${enc:JOqVSAHHPYmIO8dC5VCz4KDBbKK466zKeAEowuDRqDammJ+07XmRbB+2ob5T8mg6gAEjDs5WxMuMiMPaDr4wOg==}</appSecret>
      </facebookConnectionFactory>
    </socialConnections>

    <!-- Job properties -->
    <jobs>
      <jobFolder>
        <path>/scripts/jobs/morejobs</path>
        <cronExpression>0 0/15 * * * ?</cronExpression>
      </jobFolder>
      <job>
        <path>/scripts/jobs/testJob.groovy</path>
        <cronExpression>0 0/15 * * * ?</cronExpression>
      </job>
    </jobs>

     <!-- Cache Warm Up properties -->
    <cache>
      <warmUp>
        <descriptorFolders>/site:3</descriptorFolders>
        <contentFolders>/scripts,/templates</contentFolders>
      </warmUp>
    </cache>
  </site>

Crafter Engine Properties
 * **indexFileName:** The name of a page's index file (default is ``index.xml``).
 * **defaultLocale:** The default locale for the site. Used with content targeting through localization.
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
 * **cors.enable**:``true`` if CORS headers should be added to REST API responses. Defaults to false.
   The elements ``<accessControlMaxAge>``, ``<accessControlAllowOrigin>``, ``<accessControlAllowMethods>``,
   ``<accessControlAllowHeaders>`` and ``<accessControlAllowCredentials>`` have the values that will be
   copied to each response.
 * **targeting.enabled**:``true`` if content targeting should be enabled. Defaults to false.
 * **targeting.rootFolders:** The root folders that should be handled for content targeting.
 * **targeting.excludePatterns:** Regex patterns that are used to exclude certain paths from content targeting.
 * **targeting.availableTargetIds:** The valid target IDs for content targeting (see :doc:`/site-administrators/engine/content-targeting-guide`).
 * **targeting.fallbackTargetId:** The target ID that should be used as last resort when resolving targeted content.
   (see :doc:`/site-administrators/engine/content-targeting-guide`).
 * **targeting.mergeFolders:** ``true`` if the content of folders that have the same "family" of target IDs should be merged.
   (see :doc:`/site-administrators/engine/content-targeting-guide`).
 * **targeting.redirectToTargetedUrl:** ``true`` if the request should be redirected when the targeted URL is different from the current URL.
   (see :doc:`/site-administrators/engine/content-targeting-guide`).
 * **profile.api.accessToken:** The access token to use for the Profile REST calls. This parameter should be always specified on
   multi-tenant configurations.
 * **security.login.formUrl:** The URL of the login form page. The default is /login.
 * **security.login.defaultSuccessUrl:** The URL to redirect to if the login was successful and the user couldn't be redirected to the
   previous page. The default is /.
 * **security.login.alwaysUseDefaultSuccessUrl:** ``true`` if after successful login always redirect to the default success URL. The default is
   false.
 * **security.login.failureUrl:** The URL to redirect to if the login fails. The default is /login?login_error=true.
 * **security.logout.successUrl:** The URL to redirect after a successful logout. The default is /.
 * **security.accessDenied.errorPageUrl:** The URL of the page to show when access has been denied to a user to a certain resource. The
   default is /access-denied.
 * **security.urlRestrictions:** Contains any number of restriction elements. Each restriction is formed by a URL pattern (``<url>``)
   and a Spring EL expression (``<expression>``) executed against the current profile. If a request matches the URL, and the expression
   evaluates to false, access is denied. For more information, check
   :javadoc_base_url:`UrlAccessRestrictionCheckingProcessor.java <profile/org/craftercms/security/processors/impl/UrlAccessRestrictionCheckingProcessor.html>`
   and :javadoc_base_url:`AccessRestrictionExpressionRoot.java <profile/org/craftercms/security/utils/spring/el/AccessRestrictionExpressionRoot.html>`
 * **socialConnections.facebookConnectionFactory.appId:** The Facebook app ID required for establishing connections with Facebook.
 * **socialConnections.facebookConnectionFactory.appSecret:** The Facebook app secret required for establishing connections with Facebook.
 * **jobs.jobFolder:** Specifies a folder which will be looked up for scripts to be scheduled using a certain cron expression. The folder
   path should be specified with ``<path>``, and should be absolute to the site root. The cron expressions is specified in
   ``<cronExpression>``.
 * **jobs.job:** Specifies a single script job to be scheduled. The job path should be specified in ``<path>``, and the cron expression
   in ``<cronExpression>``.
 * **cache.warmUp.descriptor.folders:** The descriptor folders that need to be preloaded in cache, separated by comma. Specify the preload depth with ``:{depth}`` after the path. If no depth is specified, the folders will be fully preloaded.
 * **cache.warmUp.content.folders:** The content folders that need to be preloaded in cache, separated by comma. Specify the preload depth with ``:{depth}`` after the path. If no depth is specified, the folders will be fully preloaded.

.. note::
    Crafter Engine will not be able to load your Site Context if your configuration contains invalid XML
    or incorrect configuration.

.. _engine-site-configuration-spring-configuration:

--------------------
Spring Configuration
--------------------

Each site can also have it's own Spring application context. Just as with site-config.xml, beans
can be overwritten using the following locations:

Spring Configuration Files
 - ``/config/engine/application-context.xml`` (This file can be accessed easily from any site created
   through the out-of-the-box blueprints, by navigating from the Studio dashboard to ``Site Config``
   > ``Configuration``, and finally picking up the ``Engine Site Application Context`` option from the dropdown).

	 .. image:: /_static/images/site-admin/engine-site-application-context.jpg
			 :alt: Engine Site Application Context

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
    Crafter Engine will not be able to load your Site Context if your context file contains invalid XML,
    incorrect configuration or if your beans do not properly handle their own errors on initialization.
