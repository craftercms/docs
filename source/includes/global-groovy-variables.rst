+------------------------+---------------------------------------+--------------------------------+
| Name                   | Description                           | Type                           |
+========================+=======================================+================================+
|| siteItemService       || Allows access to the site content.   || `SiteItemService`_            |
+------------------------+---------------------------------------+--------------------------------+
|| |UrlTransform|        || Service for transforming URLs, like  || |UrlTransform|_               |
||                       || transforming the content URL of a    ||                               |
||                       || page to the web or render URL.       ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| searchService         || Service that can be used to execute  || `SearchService`_              |
||                       || search queries against               ||                               |
||                       || Crafter Search.                      ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| applicationContext    || Provides access to the Crafter       || `ApplicationContextAccessor`_ |
||                       || Engine's Spring beans and site beans ||                               |
||                       || defined in                           ||                               |
||                       || config/spring/application-context.xml||                               |
+------------------------+---------------------------------------+--------------------------------+
|| globalProperties      || Provides access to global            || |PropertySources|_            |
||                       || configuration properties defined in  ||                               |
||                       || server-config.properties.            ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| navBreadcrumbBuilder  || Helper class that returns the list of|| `BreadcrumbBuilder`_          |
||                       || path components in an URL, to create ||                               |
||                       || navigation breadcrumbs.              ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| navTreeBuilder        || Helper class that creates navigation || `NavTreeBuilder`_             |
||                       || trees to facilitate rendering        ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| tenantsResolver       || Can be used to retrieve the          || `TenantsResolver`_            |
||                       || Profile tenants associated to the    ||                               |
||                       || current site.                        ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| profileService        || Provides access to the Crafter       || `ProfileService`_             |
||                       || Profile API for profiles.            ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| tenantService         || Provides access to the Crafter       || `TenantService`_              |
||                       || Profile API for tenants.             ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| authenticationService || Provides access to the Crafter       || `AuthenticationService`_      |
||                       || Profile API for authentication.      ||                               |
+------------------------+---------------------------------------+--------------------------------+
|| authenticationManager || Manages Crafter Security Provider    || `AuthenticationManager`_      |
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
|| siteContext           || The current SiteContext              || `SiteContext`_                |
+------------------------+---------------------------------------+--------------------------------+

.. _SiteItemService: :javadoc_base_url:`engine/org/craftercms/engine/service/SiteItemService.html`
.. _UrlTransformationService: :javadoc_base_url:`engine/org/craftercms/engine/service/UrlTransformationService.html`
.. _SearchService: :javadoc_base_url:`search/org/craftercms/search/service/SearchService.html`
.. _ApplicationContextAccessor: :javadoc_base_url:`engine/org/craftercms/engine/util/spring/ApplicationContextAccessor.html`
.. _PropertySourcesPropertyResolver: https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/core/env/PropertySourcesPropertyResolver.html
.. _BreadcrumbBuilder: :javadoc_base_url:`engine/org/craftercms/engine/navigation/NavBreadcrumbBuilder.html`
.. _NavTreeBuilder: :javadoc_base_url:`engine/org/craftercms/engine/navigation/NavTreeBuilder.html`
.. _TenantsResolver: :javadoc_base_url:`profile/org/craftercms/security/utils/tenant/TenantsResolver.html`
.. _ProfileService: :javadoc_base_url:`profile/org/craftercms/profile/api/services/ProfileService.html`
.. _TenantService: :javadoc_base_url:`profile/org/craftercms/profile/api/services/TenantService.html`
.. _AuthenticationService: :javadoc_base_url:`profile/org/craftercms/profile/api/services/AuthenticationService.html`
.. _AuthenticationManager: :javadoc_base_url:`profile/org/craftercms/security/authentication/AuthenticationManager.html`
.. _TextEncryptor: http://docs.spring.io/autorepo/docs/spring-security/4.0.3.RELEASE/apidocs/org/springframework/security/crypto/encrypt/TextEncryptor.html
.. _Logger: http://www.slf4j.org/api/org/slf4j/Logger.html
.. _XMLConfiguration: https://commons.apache.org/proper/commons-configuration/javadocs/v1.10/apidocs/org/apache/commons/configuration/XMLConfiguration.html
.. _SiteContext: :javadoc_base_url:`engine/org/craftercms/engine/service/context/SiteContext.html`

.. |UrlTransform| replace:: urlTransformationService
.. _UrlTransform: :javadoc_base_url:`engine/org/craftercms/engine/service/UrlTransformationService.html`

.. |PropertySources| replace:: PropertySourcesPropertyResolver
.. _PropertySources: https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/core/env/PropertySourcesPropertyResolver.html
