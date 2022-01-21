+---------------------------+---------------------------------------+------------------------------------+
|| Name                     || Description                          || Type                              |
+===========================+=======================================+====================================+
|| siteItemService          || Allows access to the site            || |SiteItemService|                 |
||                          || content.                             ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| urlTransformationService || Service for transforming URLs,       || |UrlTransformationService|        |
||                          || like transforming the content        ||                                   |
||                          || URL of a page to the web or          ||                                   |
||                          || render URL.                          ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| searchService            || Service that can be used to          || |SearchService|                   |
||                          || execute search queries against       ||                                   |
||                          || Crafter Search.                      ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| applicationContext       || Provides access to the Crafter       || |ApplicationContextAccessor|      |
||                          || Engine's Spring beans and site       ||                                   |
||                          || beans defined in                     ||                                   |
||                          || config/spring/application-           ||                                   |
||                          || context.xml.                         ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| globalProperties         || Provides access to global            || `PropertySourcesPropertyResolver`_|
||                          || configuration properties             ||                                   |
||                          || defined in                           ||                                   |
||                          || server-config.properties.            ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| navBreadcrumbBuilder     || Helper class that returns the        || |BreadcrumbBuilder|               |
||                          || list of path components in an        ||                                   |
||                          || URL, to create navigation            ||                                   |
||                          || breadcrumbs.                         ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| navTreeBuilder           || Helper class that creates            || |NavTreeBuilder|                  |
||                          || navigation trees to                  ||                                   |
||                          || facilitate rendering.                ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| tenantsResolver          || Can be used to retrieve the          || |TenantsResolver|                 |
||                          || Profile tenants associated to        ||                                   |
||                          || the current site.                    ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| modePreview              || Flag that indicates that Engine is   || Boolean                           |
||                          || being executed in preview mode       ||                                   |
||                          || (also the value of the               ||                                   |
||                          || ``crafter.engine.preview`` property) ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| crafterEnv               || Indicates the value of the           || String                            |
||                          || ``crafter.engine.environment``       ||                                   |
||                          || property                             ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| siteConfig               || The current site Configuration       || `XMLConfiguration`_               |
||                          || loaded from /config/site.xml.        ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| siteContext              || The current SiteContext              || |SiteContextHashModel|            |
+---------------------------+---------------------------------------+------------------------------------+
|| request                  || The current request                  || |HttpRequestHashModel|            |
+---------------------------+---------------------------------------+------------------------------------+
|| requestParameters        || The parameter values for the         || `HttpRequestParametersHashModel`_ |
||                          || current request                      ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| cookies                  || The cookie values for the            || `Map`_                            |
||                          || current request                      ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| session                  || The current session                  || `HttpSessionHashModel`_           |
+---------------------------+---------------------------------------+------------------------------------+
|| locale                   || The current locale for the           || `Locale`_                         |
||                          || current user                         ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| authToken                || The current authentication (if       || `Authentication`_                 |
||                          || the user has logged in),             ||                                   |
||                          || created by Spring Security           ||                                   |
+---------------------------+---------------------------------------+------------------------------------+

The following variables are provided for backward compatibility when using Crafter Profile, should be replaced
with ``authToken`` if possible:

+---------------------------+---------------------------------------+------------------------------------+
|| Name                     || Description                          || Type                              |
+===========================+=======================================+====================================+
|| authentication           || The current authentication (if       || |Authentication|                  |
||                          || the user has logged in),             ||                                   |
||                          || created by the                       ||                                   |
||                          || Crafter Security Provider            ||                                   |
+---------------------------+---------------------------------------+------------------------------------+
|| profile                  || The current profile (if the          || |Profile|                         |
||                          || user has logged in), created         ||                                   |
||                          || by the                               ||                                   |
||                          || Crafter Security Provider            ||                                   |
+---------------------------+---------------------------------------+------------------------------------+

   .. note::
      The variables ``profile`` and ``authentication`` listed  above will be null in most cases and should not be used anymore


The following variables are restricted by default, to use them see :ref:`access-to-services`

+---------------------------+---------------------------------------+------------------------------------+
|| Name                     || Description                          || Type                              |
+===========================+=======================================+====================================+
|| application              || The servlet context                  || |ServletContextHashModel|         |
+---------------------------+---------------------------------------+------------------------------------+
|| siteContext              || The current SiteContext              || |SiteContext|                     |
+---------------------------+---------------------------------------+------------------------------------+

.. |SiteItemService| replace:: :javadoc_base_url:`SiteItemService <engine/org/craftercms/engine/service/SiteItemService.html>`
.. |UrlTransformationService| replace:: :javadoc_base_url:`UrlTransformationService <engine/org/craftercms/engine/service/UrlTransformationService.html>`
.. |SearchService| replace:: :javadoc_base_url:`SearchService <search/org/craftercms/search/service/SearchService.html>`
.. |ApplicationContextAccessor| replace:: :javadoc_base_url:`ApplicationContextAccessor <engine/org/craftercms/engine/util/spring/ApplicationContextAccessor.html>`
.. _PropertySourcesPropertyResolver: https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/core/env/PropertySourcesPropertyResolver.html
.. |BreadcrumbBuilder| replace:: :javadoc_base_url:`BreadcrumbBuilder <engine/org/craftercms/engine/navigation/NavBreadcrumbBuilder.html>`
.. |NavTreeBuilder| replace:: :javadoc_base_url:`NavTreeBuilder <engine/org/craftercms/engine/navigation/NavTreeBuilder.html>`
.. |TenantsResolver| replace:: :javadoc_base_url:`TenantsResolver <profile/org/craftercms/security/utils/tenant/TenantsResolver.html>`
.. |ProfileService| replace:: :javadoc_base_url:`ProfileService <profile/org/craftercms/profile/api/services/ProfileService.html>`
.. |TenantService| replace:: :javadoc_base_url:`TenantService <profile/org/craftercms/profile/api/services/TenantService.html>`
.. |AuthenticationService| replace:: :javadoc_base_url:`AuthenticationService <profile/org/craftercms/profile/api/services/AuthenticationService.html>`
.. |AuthenticationManager| replace:: :javadoc_base_url:`AuthenticationManager <profile/org/craftercms/security/authentication/AuthenticationManager.html>`
.. _TextEncryptor: http://docs.spring.io/autorepo/docs/spring-security/4.0.3.RELEASE/apidocs/org/springframework/security/crypto/encrypt/TextEncryptor.html
.. _Logger: http://www.slf4j.org/api/org/slf4j/Logger.html
.. _XMLConfiguration: https://commons.apache.org/proper/commons-configuration/javadocs/v1.10/apidocs/org/apache/commons/configuration/XMLConfiguration.html
.. |SiteContext| replace:: :javadoc_base_url:`SiteContext <engine/org/craftercms/engine/service/context/SiteContext.html>`
.. |ServletContextHashModel| replace:: :javadoc_base_url:`ServletContextHashModel <engine/org/craftercms/engine/freemarker/ServletContextHashModel.html>`
.. |SiteContextHashModel| replace:: :javadoc_base_url:`ServletContextHashModel <engine/org/craftercms/engine/util/freemarker/SiteContextHashModel.html>`
.. |HttpRequestHashModel| replace:: :javadoc_base_url:`HttpRequestHashModel <engine/org/craftercms/engine/util/freemarker/HttpRequestHashModel.html>`
.. _HttpRequestParametersHashModel: http://freemarker.org/docs/api/freemarker/ext/servlet/HttpRequestParametersHashModel.html
.. _HttpSessionHashModel: http://freemarker.org/docs/api/freemarker/ext/servlet/HttpSessionHashModel.html
.. _Map: https://docs.oracle.com/javase/7/docs/api/java/util/Map.html
.. _Locale: https://docs.oracle.com/javase/7/docs/api/java/util/Locale.html
.. |Authentication| replace:: :javadoc_base_url:`Authentication <profile/org/craftercms/security/authentication/Authentication.html>`
.. |Profile| replace:: :javadoc_base_url:`Profile <profile/org/craftercms/profile/api/Profile.html>`
.. _Authentication: https://docs.spring.io/spring-security/site/docs/4.0.x/apidocs/org/springframework/security/core/Authentication.html