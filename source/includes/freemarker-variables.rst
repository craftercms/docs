+--------------------------+--------------------------------+------------------------------------+
|| Name                    || Description                   || API                               |
+==========================+================================+====================================+
|| siteItemService         || Allows access to the site     || `SiteItemService`_                |
||                         || content.                      ||                                   |                        
+--------------------------+--------------------------------+------------------------------------+
|| urlTransformationService|| Service for transforming URLs,|| `UrlTransformationService`_       |
||                         || like transforming the content ||                                   |
||                         || URL of a page to the web or   ||                                   |
||                         || render URL.                   ||                                   |
+--------------------------+--------------------------------+------------------------------------+
|| searchService           || Service that can be used to   || `SearchService`_                  |
||                         || execute search queries against||                                   |
||                         || Crafter Search.               ||                                   |
+--------------------------+--------------------------------+------------------------------------+
|| applicationContext      || Provides access to the Crafter|| `ApplicationContextAccessor`_     |
||                         || Engine's Spring beans and site||                                   |
||                         || beans defined in              ||                                   |
||                         || config/spring/application-    ||                                   |
||                         || context.xml.                  ||                                   | 
+--------------------------+--------------------------------+------------------------------------+
|| globalProperties        || Provides access to global     || `PropertySourcesPropertyResolver`_|
||                         || configuration properties      ||                                   |
||                         || defined in                    ||                                   |
||                         || server-config.properties.     ||                                   |
+--------------------------+--------------------------------+------------------------------------+
|| navBreadcrumbBuilder    || Helper class that returns the || `BreadcrumbBuilder`_              | 
||                         || list of path components in an ||                                   |
||                         || URL, to create navigation     ||                                   |
||                         || breadcrumbs.                  ||                                   |
+--------------------------+--------------------------------+------------------------------------+
|| navTreeBuilder          || Helper class that creates     || `NavTreeBuilder`_                 | 
||                         || navigation trees to           ||                                   |
||                         || facilitate rendering.         ||                                   |
+--------------------------+--------------------------------+------------------------------------+
|| tenantsResolver         || Can be used to retrieve the   || `TenantsResolver`_                |
||                         || Profile tenants associated to ||                                   |
||                         || the current site.             ||                                   | 
+--------------------------+--------------------------------+------------------------------------+
|| siteConfig              || The current site Configuration|| `XMLConfiguration`_               |
||                         || loaded from /config/site.xml. ||                                   | 
+--------------------------+--------------------------------+------------------------------------+
|| siteContext             || The current SiteContext       || `SiteContext`_                    |
+--------------------------+--------------------------------+------------------------------------+
|| application             || The servlet context           || `ServletContextHashModel`_        |
+--------------------------+--------------------------------+------------------------------------+
|| request                 || The current request           || `HttpRequestHashModel`_           |
+--------------------------+--------------------------------+------------------------------------+
|| requestParameters       || The parameter values for the  || `HttpRequestParametersHashModel`_ |
||                         || current request               ||                                   |
+--------------------------+--------------------------------+------------------------------------+
|| cookies                 || The cookie values for the     || `Map`_                            |
||                         || current request               ||                                   |
+--------------------------+--------------------------------+------------------------------------+
|| session                 || The current session           || `HttpSessionHashModel`_           |
+--------------------------+--------------------------------+------------------------------------+
|| locale                  || The current locale for the    || `Locale`_                         |
||                         || current user                  ||                                   |
+--------------------------+--------------------------------+------------------------------------+
|| authentication          || The current authentication (if|| `Authentication`_                 |
||                         || the user has logged in),      ||                                   |
||                         || created by the                ||                                   |
||                         || Crafter Security Provider     ||                                   |
+--------------------------+--------------------------------+------------------------------------+
|| profile                 || The current profile (if the   || `Profile`_                        |
||                         || user has logged in), created  ||                                   |
||                         || by the                        ||                                   |
||                         || Crafter Security Provider     ||                                   |
+--------------------------+--------------------------------+------------------------------------+

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
.. _ServletContextHashModel: :javadoc_base_url:`engine/org/craftercms/engine/freemarker/ServletContextHashModel.html`
.. _HttpRequestHashModel: :javadoc_base_url:`engine/org/craftercms/engine/util/freemarker/HttpRequestHashModel.html`
.. _HttpRequestParametersHashModel: http://freemarker.org/docs/api/freemarker/ext/servlet/HttpRequestParametersHashModel.html
.. _HttpSessionHashModel: http://freemarker.org/docs/api/freemarker/ext/servlet/HttpSessionHashModel.html
.. _Map: https://docs.oracle.com/javase/7/docs/api/java/util/Map.html
.. _Locale: https://docs.oracle.com/javase/7/docs/api/java/util/Locale.html
.. _Authentication: :javadoc_base_url:`profile/org/craftercms/security/authentication/Authentication.html`
.. _Profile: :javadoc_base_url:`profile/org/craftercms/profile/api/Profile.html`
