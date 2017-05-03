+----------------------+---------------------------------------+--------------------------------+
| Name                 | Description                           | API                            |
+======================+=======================================+================================+
| siteItemService      || Allows access to the site content.   || `SiteItemService`_            |
+----------------------+---------------------------------------+--------------------------------+
| |UrlTransform|       || Service for transforming URLs, like  || |UrlTransform|_               |
|                      || transforming the content URL of a    ||                               |
|                      || page to the web or render URL.       ||                               |
+----------------------+---------------------------------------+--------------------------------+
| searchService        || Service that can be used to execute  || `SearchService`_              |
|                      || search queries against               ||                               |
|                      || Crafter Search.                      ||                               |
+----------------------+---------------------------------------+--------------------------------+
| applicationContext   || Provides access to the Crafter       || `ApplicationContextAccessor`_ |
|                      || Engine's Spring beans and site beans ||                               |
|                      || defined in                           ||                               |
|                      || config/spring/application-context.xml||                               |
+----------------------+---------------------------------------+--------------------------------+
| globalProperties     || Provides access to global            || |PropertySources|_            |
|                      || configuration properties defined in  ||                               |
|                      || server-config.properties.            ||                               |
+----------------------+---------------------------------------+--------------------------------+
| breadcrumbBuilder    || Helper class that returns the list of|| `BreadcrumbBuilder`_          |
|                      || path components in an URL, to create ||                               |
|                      || navigation breadcrumbs.              ||                               |
+----------------------+---------------------------------------+--------------------------------+
| tenantsResolver      || Can be used to retrieve the          || `TenantsResolver`_            |
|                      || Profile tenants associated to the    ||                               |
|                      || current site.                        ||                               |
+----------------------+---------------------------------------+--------------------------------+
| profileService       || Provides access to the Crafter       || `ProfileService`_             |
|                      || Profile API for profiles.            ||                               |
+----------------------+---------------------------------------+--------------------------------+
| tenantService        || Provides access to the Crafter       || `TenantService`_              |
|                      || Profile API for tenants.             ||                               |
+----------------------+---------------------------------------+--------------------------------+
| authenticationService|| Provides access to the Crafter       || `AuthenticationService`_      |
|                      || Profile API for authentication.      ||                               |
+----------------------+---------------------------------------+--------------------------------+
| authenticationManager|| Manages Crafter Security Provider    || `AuthenticationManager`_      |
|                      || based authentications.               ||                               |
+----------------------+---------------------------------------+--------------------------------+
| textEncryptor        || Utility class for encrypting/        || `TextEncryptor`_              |
|                      || decrypting text with AES.            ||                               |
+----------------------+---------------------------------------+--------------------------------+
| logger               || The GroovyUtils SLF4J logger         || `Logger`_                     |
+----------------------+---------------------------------------+--------------------------------+
| siteConfig           || The current site Configuration,      || `XMLConfiguration`_           |
|                      || loaded from /config/site.xml.        ||                               |
+----------------------+---------------------------------------+--------------------------------+
| siteContext          || The current SiteContext              || `SiteContext`_                |
+----------------------+---------------------------------------+--------------------------------+

.. _SiteItemService: http://downloads.craftersoftware.com/javadoc/engine/org/craftercms/engine/service/SiteItemService.html
.. _UrlTransformationService: http://downloads.craftersoftware.com/javadoc/engine/org/craftercms/engine/service/UrlTransformationService.html
.. _SearchService: http://downloads.craftersoftware.com/javadoc/search/org/craftercms/search/service/SearchService.html
.. _ApplicationContextAccessor: http://downloads.craftersoftware.com/javadoc/engine/org/craftercms/engine/util/spring/ApplicationContextAccessor.html
.. _PropertySourcesPropertyResolver: https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/core/env/PropertySourcesPropertyResolver.html
.. _BreadcrumbBuilder: http://downloads.craftersoftware.com/javadoc/engine/org/craftercms/engine/util/breadcrumb/BreadcrumbBuilder.html
.. _TenantsResolver: http://downloads.craftersoftware.com/javadoc/profile/org/craftercms/security/utils/tenant/TenantsResolver.html
.. _ProfileService: http://downloads.craftersoftware.com/javadoc/profile/org/craftercms/profile/api/services/ProfileService.html
.. _TenantService: http://downloads.craftersoftware.com/javadoc/profile/org/craftercms/profile/api/services/TenantService.html
.. _AuthenticationService: http://downloads.craftersoftware.com/javadoc/profile/org/craftercms/profile/api/services/AuthenticationService.html
.. _AuthenticationManager: http://downloads.craftersoftware.com/javadoc/profile/org/craftercms/security/authentication/AuthenticationManager.html
.. _TextEncryptor: http://docs.spring.io/autorepo/docs/spring-security/4.0.3.RELEASE/apidocs/org/springframework/security/crypto/encrypt/TextEncryptor.html
.. _Logger: http://www.slf4j.org/api/org/slf4j/Logger.html
.. _XMLConfiguration: https://commons.apache.org/proper/commons-configuration/javadocs/v1.10/apidocs/org/apache/commons/configuration/XMLConfiguration.html
.. _SiteContext: http://downloads.craftersoftware.com/javadoc/engine/

.. |UrlTransform| replace:: urlTransformationService
.. _UrlTransform: http://downloads.craftersoftware.com/javadoc/engine/org/craftercms/engine/service/UrlTransformationService.html

.. |PropertySources| replace:: PropertySourcesPropertyResolver
.. _PropertySources: https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/core/env/PropertySourcesPropertyResolver.html
