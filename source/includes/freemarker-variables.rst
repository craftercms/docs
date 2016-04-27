========================= ====================================== ==================================
Name                      Description                            API
========================= ====================================== ==================================
siteItemService           Allows access to the site content.     `SiteItemService`_

urlTransformationService  Service for transforming URLs, like    `UrlTransformationService`_
                          transforming the content URL of a
                          page to the web or render URL.

searchService             Service that can be used to execute    `SearchService`_
                          search queries against Crafter
                          Search.

applicationContext        Provides access to the Crafter         `ApplicationContextAccessor`_
                          Engine's Spring beans and site beans
                          defined in config/spring/application-
                          context.xml.

globalProperties          Provides access to global              `PropertySourcesPropertyResolver`_
                          configuration properties defined in
                          server-config.properties.

breadcrumbBuilder         Helper class that returns the list of  `BreadcrumbBuilder`_
                          path components in an URL, to create
                          navigation breadcrumbs.

tenantsResolver           Can be used to retrieve the            `TenantsResolver`_
                          Profile tenants associated to the
                          current site.

siteConfig                The current site Configuration,        `XMLConfiguration`_
                          loaded from /config/site.xml.

siteContext               The current SiteContext                `SiteContext`_

application               The servlet context                    `ServletContextHashModel`_

request                   The current request                    `HttpRequestHashModel`_

requestParameters         The parameter values for the current   `HttpRequestParametersHashModel`_
                          request

cookies                   The cookie values for the current      `Map`_
                          request

session                   The current session                    `HttpSessionHashModel`_

locale                    The current locale for the current     `Locale`_
                          user

authentication            The current authentication (if the     `Authentication`_
                          user has logged in), created by the
                          Crafter Security Provider

profile                   The current profile (if the user       `Profile`_
                          has logged in), created by the
                          Crafter Security Provider
========================= ====================================== ==================================

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
.. _SiteContext: http://downloads.craftersoftware.com/javadoc/engine/org/craftercms/engine/service/context/SiteContext.html
.. _ServletContextHashModel: http://downloads.craftersoftware.com/javadoc/engine/org/craftercms/engine/freemarker/ServletContextHashModel.html
.. _HttpRequestHashModel: http://downloads.craftersoftware.com/javadoc/engine/org/craftercms/engine/util/freemarker/HttpRequestHashModel.html
.. _HttpRequestParametersHashModel: http://freemarker.org/docs/api/freemarker/ext/servlet/HttpRequestParametersHashModel.html
.. _HttpSessionHashModel: http://freemarker.org/docs/api/freemarker/ext/servlet/HttpSessionHashModel.html
.. _Map: https://docs.oracle.com/javase/7/docs/api/java/util/Map.html
.. _Locale: https://docs.oracle.com/javase/7/docs/api/java/util/Locale.html
.. _Authentication: http://downloads.craftersoftware.com/javadoc/profile/org/craftercms/security/authentication/Authentication.html
.. _Profile: http://downloads.craftersoftware.com/javadoc/profile/org/craftercms/profile/api/Profile.html
