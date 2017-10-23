+------------------------+---------------------------------------+--------------------------------+
| Name                   | Description                           | Type                           |
+========================+=======================================+================================+
|| siteItemService       || Allows access to the site content.   || |SiteItemService|             |
+------------------------+---------------------------------------+--------------------------------+
|| |UrlTransform|        || Service for transforming URLs, like  || |UrlTransformationService|    |
||                       || transforming the content URL of a    ||                               |
||                       || page to the web or render URL.       ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| searchService         || Service that can be used to execute  || |SearchService|               |
||                       || search queries against               ||                               |
||                       || Crafter Search.                      ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| applicationContext    || Provides access to the Crafter       || |ApplicationContextAccessor|  |
||                       || Engine's Spring beans and site beans ||                               |
||                       || defined in                           ||                               |
||                       || config/spring/application-context.xml||                               |
+------------------------+---------------------------------------+--------------------------------+
|| globalProperties      || Provides access to global            || |PropertySources|_            |
||                       || configuration properties defined in  ||                               |
||                       || server-config.properties.            ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| navBreadcrumbBuilder  || Helper class that returns the list of|| |BreadcrumbBuilder|           |
||                       || path components in an URL, to create ||                               |
||                       || navigation breadcrumbs.              ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| navTreeBuilder        || Helper class that creates navigation || |NavTreeBuilder|              |
||                       || trees to facilitate rendering        ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| tenantsResolver       || Can be used to retrieve the          || |TenantsResolver|             |
||                       || Profile tenants associated to the    ||                               |
||                       || current site.                        ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| profileService        || Provides access to the Crafter       || |ProfileService|              |
||                       || Profile API for profiles.            ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| tenantService         || Provides access to the Crafter       || |TenantService|               |
||                       || Profile API for tenants.             ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| authenticationService || Provides access to the Crafter       || |AuthenticationService|       |
||                       || Profile API for authentication.      ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| authenticationManager || Manages Crafter Security Provider    || |AuthenticationManager|       |
||                       || based authentications.               ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| textEncryptor         || Utility class for encrypting/        || `TextEncryptor`_              |
||                       || decrypting text with AES.            ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| modePreview           || Flag that indicates that Engine is   || Boolean                       |
||                       || being executed in preview mode       ||                               |
||                       || (also the value of the               ||                               |
||                       || ``crafter.engine.preview`` property) ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| crafterEnv            || Indicates the value of the           || String                        |
||                       || ``crafter.engine.environment``       ||                               |
||                       || property                             ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| logger                || The GroovyUtils SLF4J logger         || `Logger`_                     |
+------------------------+---------------------------------------+--------------------------------+
|| siteConfig            || The current site Configuration,      || `XMLConfiguration`_           |
||                       || loaded from /config/site.xml.        ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| siteContext           || The current SiteContext              || |SiteContext|                 |
+------------------------+---------------------------------------+--------------------------------+

.. |SiteItemService| replace:: :javadoc_base_url:`SiteItemService <engine/org/craftercms/engine/service/SiteItemService.html>`
.. |UrlTransform| replace:: urlTransformationService
.. |PropertySources| replace:: PropertySourcesPropertyResolver
.. _PropertySources: https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/core/env/PropertySourcesPropertyResolver.html
.. |UrlTransformationService| replace:: :javadoc_base_url:`UrlTransformationService <engine/org/craftercms/engine/service/UrlTransformationService.html>`
.. |SearchService| replace:: :javadoc_base_url:`SearchService <search/org/craftercms/search/service/SearchService.html>`
.. |ApplicationContextAccessor| replace:: :javadoc_base_url:`ApplicationContextAccessor <engine/org/craftercms/engine/util/spring/ApplicationContextAccessor.html>`
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
