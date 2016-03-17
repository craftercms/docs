========================= ====================================== ========================================================== ==================
Name                      Description                            Example                                                    API
========================= ====================================== ========================================================== ==================
siteItemService           Allows access to the site content.     siteItemService.getSiteItem("/site/website/index.xml")     `SiteItemService`_

urlTransformationService  Service for transforming URLs, like    urlTransformationService.transform("storeUrlToRenderUrl",  `UrlTransformationService`_
                          transforming the content URL of a      "/site/website/index.xml")
                          page to the web or render URL.

searchService             Service that can be used to execute    def queryResults = searchService.search(query)             `SearchService`_
                          search queries against Crafter
                          Search.

applicationContext        Provides access to the Crafter         applicationContext.myBean                                  `ApplicationContextAccessor`_
                          Engine's Spring beans and site beans
                          defined in config/spring/application-
                          context.xml.

globalProperties          Provides access to global              globalProperties.getProperty("crafter.engine.preview")     `PropertySourcesPropertyResolver`_
                          configuration properties defined in    == "true"
                          server-config.properties.

breadcrumbBuilder         Helper class that returns the list of  breadcrumbBuilder.buildBreadcrumb("/site/website/company   `BreadcrumbBuilder`_
                          path components in an URL, to create   /about-us/index.xml")
                          navigation breadcrumbs.

tenantsResolver           Can be used to retrieve the            tenantsResolver.getTenants()                               `TenantsResolver`_
                          Profile tenants associated to the
                          current site.

profileService            Provides access to the Crafter         profileService.getProfile(id)                              `ProfileService`_
                          Profile API for profiles.

tenantService             Provides access to the Crafter         tenantService.getTenant("mysite")                          `TenantService`_
                          Profile API for tenants.

authenticationService     Provides access to the Crafter         authenticationService.authenticate("mysite", "jdoe",       `AuthenticationService`_
                          Profile API for authentication.        "1234")

authenticationManager     Manages Crafter Security Provider      authenticationManager.authenticateUser(profile)            `AuthenticationManager`_
                          based authentications.

textEncryptor             Utility class for encrypting/          textEncryptor.encrypt("Hello world!")                      `TextEncryptor`_
                          decrypting text with AES.

logger                    The GroovyUtils SLF4J logger           logger.info("This is an info message")                     `Logger`_

siteConfig                The current site Configuration,        siteConfig.getString("siteProperty")                       `XMLConfiguration`_
                          loaded from /config/site.xml.

siteContext               The current SiteContext                siteContext.siteName                                       `SiteContext`_
========================= ====================================== ========================================================== ==================

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
