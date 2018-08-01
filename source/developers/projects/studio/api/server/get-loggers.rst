.. _crafter-studio-api-server-get-loggers:

===========
Get Loggers
===========

Get available languages.

--------------------
Resource Information
--------------------

+----------------------------+-------------------------------------------------------------------+
|| HTTP Verb                 || GET                                                              |
+----------------------------+-------------------------------------------------------------------+
|| URL                       || ``/studio/api/1/services/api/1/server/get-loggers.json``         |
+----------------------------+-------------------------------------------------------------------+
|| Response Formats          || ``JSON``                                                         |
+----------------------------+-------------------------------------------------------------------+
|| Required Role             ||                                                                  |
+----------------------------+-------------------------------------------------------------------+


-------
Example
-------

.. code-block:: guess

	GET .../api/1/services/api/1/server/get-loggers.json

.. code-block:: json
  :linenos:

        [
            {
                "name": "ch.vorburger.exec.ManagedProcess",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.config.ListFactoryBean",
                "level": "info"
            },
            {
                "name": "org.apache.commons.configuration.interpol.ConstantLookup",
                "level": "info"
            },
            {
                "name": "org.springframework.core.env.PropertySource$ComparisonPropertySource",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.engine.groups.ValidationOrderGenerator",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.renameContent",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.execchain.ProtocolExec",
                "level": "info"
            },
            {
                "name": "org.springframework.http.converter.ResourceHttpMessageConverter",
                "level": "info"
            },
            {
                "name": "org.springframework.security.authentication.DefaultAuthenticationEventPublisher",
                "level": "info"
            },
            {
                "name": "org.quartz.simpl.SimpleThreadPool",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.view.ContentNegotiatingViewResolver",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.updateObjectMetadata",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.deleteGroup",
                "level": "info"
            },
            {
                "name": "org.springframework.util.PropertyPlaceholderHelper",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.annotation.InjectionMetadata",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.HttpMethodBase",
                "level": "info"
            },
            {
                "name": "org.quartz.simpl.PropertySettingJobFactory",
                "level": "info"
            },
            {
                "name": "org.springframework.web",
                "level": "info"
            },
            {
                "name": "org.quartz.utils.UpdateChecker",
                "level": "info"
            },
            {
                "name": "org.craftercms.commons.http.CookieManager",
                "level": "info"
            },
            {
                "name": "org.springframework.http.converter.StringHttpMessageConverter",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.PageNotFound",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.i18n.LocaleChangeInterceptor",
                "level": "info"
            },
            {
                "name": "org.apache.http.conn.ssl.AllowAllHostnameVerifier",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.transport.PacketLineOut",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.deleteUser",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.getAuditLogForSiteTotal",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.view.UserAgentAwareCrafterPageView",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.setUserPassword",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.util.FS",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.Cache",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.getItemsBySiteAndStates",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.annotation.ResponseStatusExceptionResolver",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.getChangeSetForSubtree",
                "level": "info"
            },
            {
                "name": "org.springframework.context.support.PropertySourcesPlaceholderConfigurer$1",
                "level": "info"
            },
            {
                "name": "org.springframework.jdbc.datasource.DataSourceUtils",
                "level": "info"
            },
            {
                "name": "org.springframework.ui.context.support.UiApplicationContextUtils",
                "level": "info"
            },
            {
                "name": "org.springframework.web.method.annotation.ModelAttributeMethodProcessor",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.config.Configuration",
                "level": "info"
            },
            {
                "name": "org.springframework.core.task.SimpleAsyncTaskExecutor$ConcurrencyThrottleAdapter",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.context.SecurityContextPersistenceFilter",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.transport.PacketLineIn",
                "level": "info"
            },
            {
                "name": "org.apache.http.headers",
                "level": "info"
            },
            {
                "name": "org.apache.ibatis.io.DefaultVFS",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.internal.storage.file.GC",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.transaction.manager.DefaultTransactionManagerLookup",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getUserDetails",
                "level": "info"
            },
            {
                "name": "org.springframework.aop.framework.autoproxy.BeanFactoryAdvisorRetrievalHelper",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.getProperties",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.DependencyMapper.deleteAllSourceDependencies",
                "level": "info"
            },
            {
                "name": "org.mybatis.spring.mapper.ClassPathMapperScanner",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getGroupsPerSiteQuery",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.execchain.RedirectExec",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.cmis.CmisServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioAuthenticationTokenProcessingFilter",
                "level": "info"
            },
            {
                "name": "org.apache.commons.configuration.DefaultFileSystem",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getUserGroups",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.engine.resolver.DefaultTraversableResolver",
                "level": "info"
            },
            {
                "name": "org.springframework.jndi.support.SimpleJndiBeanFactory",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.repository.job.RebuildRepositoryMetadata",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.util.matcher.AntPathRequestMatcher",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.DmWorkflowProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.deleteActivitiesForSite",
                "level": "info"
            },
            {
                "name": "org.springframework.cache.annotation.AnnotationCacheOperationSource",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.DefaultSecurityFilterChain",
                "level": "info"
            },
            {
                "name": "org.springframework.http.converter.ResourceRegionHttpMessageConverter",
                "level": "info"
            },
            {
                "name": "org.springframework.web.context.support.ServletContextPropertySource",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.content.DmContentLifeCycleServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioPublishingAPIAccessDecisionVoter",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.support.SessionFlashMapManager",
                "level": "info"
            },
            {
                "name": "org.apache.http.wire",
                "level": "info"
            },
            {
                "name": "org.springframework.core.io.support.PathMatchingResourcePatternResolver",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.controller.rest.RestScriptsController",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getGroupsPerSiteQueryTotal",
                "level": "info"
            },
            {
                "name": "org.springframework.core.env.PropertySource$StubPropertySource",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.insertActivityFeed",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getGroupsPerSiteData",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.updateObjectPath",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.client.DefaultRedirectStrategy",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getAllGroupsData",
                "level": "info"
            },
            {
                "name": "org.apache.ibatis.io.JBoss6VFS",
                "level": "info"
            },
            {
                "name": "org.springframework.aop.aspectj.annotation.AnnotationAwareAspectJAutoProxyCreator",
                "level": "info"
            },
            {
                "name": "org.springframework.core.SpringProperties",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.handler.SimpleUrlHandlerMapping",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getAllUsersQueryTotal",
                "level": "info"
            },
            {
                "name": "org.springframework.web.client.RestTemplate",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.setObjectState",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.enableUser",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.internal.storage.file.RefDirectory",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.getSites",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.controller.rest.CacheRestController",
                "level": "info"
            },
            {
                "name": "org.springframework.context.support.PostProcessorRegistrationDelegate$BeanPostProcessorChecker",
                "level": "info"
            },
            {
                "name": "org.springframework.core.LocalVariableTableParameterNameDiscoverer",
                "level": "info"
            },
            {
                "name": "org.springframework.http.converter.xml.SourceHttpMessageConverter",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.updateLastCommitId",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.http.impl.ViewNotResolvedExceptionHandler",
                "level": "info"
            },
            {
                "name": "org.springframework.core.env.MutablePropertySources",
                "level": "info"
            },
            {
                "name": "org.mybatis.spring.SqlSessionUtils",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.BeanUtils",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.cancelWorkflow",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.header.writers.HstsHeaderWriter",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.util.predicates.ExpiredItemPredicate",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.client.TargetAuthenticationStrategy",
                "level": "info"
            },
            {
                "name": "org.mybatis.spring.mapper.MapperFactoryBean",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getGroupObject",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.selectUserFeedEntriesHideLive",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.content.ContentTypeServiceImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.access.intercept.FilterSecurityInterceptor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.BaseContentProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.freemarker.CrafterFreeMarkerTemplateLoader",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.PageNavigationOrderMapper.deleteSequencesForSite",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.TypeConverterDelegate",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.FileFolderPathProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.getSitesPerUserQueryTotal",
                "level": "info"
            },
            {
                "name": "org.apache.ibatis.logging.LogFactory",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.dependency.DmDependencyServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.getSite",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.util.sha1.SHA1",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.ChunkedInputStream",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.resource.ResourceHttpRequestHandler",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.freemarker.RenderComponentDirective",
                "level": "info"
            },
            {
                "name": "org.craftercms.search.service.impl.AbstractRestClientSearchService",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.cancelDeployment",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioAccessDecisionManager",
                "level": "info"
            },
            {
                "name": "org.springframework.http.converter.json.MappingJackson2HttpMessageConverter",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.repository.git.GitContentRepository",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.countEntries",
                "level": "info"
            },
            {
                "name": "org.springframework.security.config.http.DefaultFilterChainValidator",
                "level": "info"
            },
            {
                "name": "org.springframework.core.io.support.ResourceArrayPropertyEditor",
                "level": "info"
            },
            {
                "name": "org.springframework.beans",
                "level": "info"
            },
            {
                "name": "org.springframework.security.config.http.AuthenticationConfigBuilder",
                "level": "info"
            },
            {
                "name": "ch.vorburger.mariadb4j.Util",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.processors.impl.SavedRequestAwareProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getAllUsersData",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.params.HttpMethodParams",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.setLockOwner",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.deleteObjectStatesForSite",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.metadata.provider.AnnotationMetaDataProvider",
                "level": "info"
            },
            {
                "name": "org.springframework.ldap.core.LdapTemplate",
                "level": "info"
            },
            {
                "name": "org.springframework.security.config.http.HttpSecurityBeanDefinitionParser",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.FormNavOrderProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.isPublishingBlocked",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.setObjectStateForSiteAndPaths",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.HttpState",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.terracotta.TerracottaClient",
                "level": "info"
            },
            {
                "name": "httpclient.wire.header",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.controller.HttpProxyRequestHandler",
                "level": "info"
            },
            {
                "name": "org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.config.DiskStoreConfiguration",
                "level": "info"
            },
            {
                "name": "org.springframework.security.core.SpringSecurityCoreVersion",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.scripting.impl.GroovyScript",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.service.context.SiteContextManager",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.store.MemoryStoreEvictionPolicy",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.authentication.impl.LoginFailureHandlerImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.method.annotation.ServletModelAttributeMethodProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.processors.impl.MellonAutoLoginProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.core",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.FormDmContentProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.getItemsReadyForDeployment",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.view.freemarker.CrafterFreeMarkerView",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.xml.DefaultNamespaceHandlerResolver",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.xml.mergers.DescriptorMergeStrategy",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.deleteSite",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.scripting.impl.SiteItemScriptResolverImpl",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.engine.ValidatorImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.getObjectStateBySiteAndPath",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioAuthenticationEntryPoint",
                "level": "info"
            },
            {
                "name": "org.springframework.web.method.support.HandlerMethodReturnValueHandlerComposite",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.CacheManager",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.insertItemForDeployment",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.cookie.CookiePolicy",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.auth.HttpAuthenticator",
                "level": "info"
            },
            {
                "name": "org.springframework.ldap.core.support.AbstractContextSource",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.PageNavigationOrderMapper.insert",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.deployment.DeploymentServiceImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.context.annotation.ConfigurationClassParser",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.enablePublishing",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.updateActivityFeed",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.controller.rest.SiteCacheRestController",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.store.disk.DiskStorageFactory",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.store.disk.ods.FileAllocationTree",
                "level": "info"
            },
            {
                "name": "org.apache.commons.dbcp2.PoolableConnectionFactory",
                "level": "info"
            },
            {
                "name": "org.springframework.context.event.EventListenerMethodProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.processors.impl.ReturnCurrentAuthenticationProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.getScheduledItems",
                "level": "info"
            },
            {
                "name": "org.terracotta.context.ContextManager",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.conn.CPool",
                "level": "info"
            },
            {
                "name": "org.mybatis.spring.transaction.SpringManagedTransaction",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getUsersPerSiteData",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.processors.impl.UrlAccessRestrictionCheckingProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.core.type.classreading.RecursiveAnnotationArrayVisitor",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.http.impl.HttpStatusCodeAwareExceptionHandler",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.createUser",
                "level": "info"
            },
            {
                "name": "org.springframework.web.util.UrlPathHelper",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.TransactionController",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.updatePublishingStatusMessage",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.AssetDmContentProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.configuration.ServicesConfigImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.createSite",
                "level": "info"
            },
            {
                "name": "org.springframework.aop.aspectj.annotation.ReflectiveAspectJAdvisorFactory",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.lib.Repository",
                "level": "info"
            },
            {
                "name": "org.springframework.ldap.odm.core.impl.DefaultObjectDirectoryMapper",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.DependencyMapper.deleteDependenciesForSite",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.getSitesPerUserData",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.store.disk.Segment",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.xml.DefaultBeanDefinitionDocumentReader",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.xml.ResourceEntityResolver",
                "level": "info"
            },
            {
                "name": "freemarker.jsp",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.HeaderElement",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.client.ProxyAuthenticationStrategy",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.getDeletedActivity",
                "level": "info"
            },
            {
                "name": "freemarker.runtime",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.execchain.MainClientExec",
                "level": "info"
            },
            {
                "name": "org.quartz.impl.SchedulerDetailsSetter",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.freemarker.ExecuteControllerDirective",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.controller.rest.RestControllerBase",
                "level": "info"
            },
            {
                "name": "org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean$MethodInvokingJob",
                "level": "info"
            },
            {
                "name": "org.springframework.web.context.support.StandardServletEnvironment",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.security.SecurityServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.getCountUserContentFeedEntries",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.security.MappedSecurityProvider",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.selectUserFeedEntries",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.core.env.MapPropertySource",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.savedrequest.HttpSessionRequestCache",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.util.spring.mvc.BinaryView",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.ExtendedBeanInfo",
                "level": "info"
            },
            {
                "name": "org.apache.http.client.protocol.RequestAddCookies",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.security.config.SecurityNamespaceHandler",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ActivityFeedMapper.getAuditLogForSite",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.url.impl.ReplacePatternAllUrlTransformer",
                "level": "info"
            },
            {
                "name": "org.springframework.web.context.ContextLoader",
                "level": "info"
            },
            {
                "name": "org.springframework.ui.context.support.ResourceBundleThemeSource",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.view.json.MappingJackson2JsonView",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.processors.impl.AddSecurityCookiesProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.context.support.PropertySourcesPlaceholderConfigurer",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.util.predicates.DisabledItemPredicate",
                "level": "info"
            },
            {
                "name": "org.springframework.context.support.ApplicationListenerDetector",
                "level": "info"
            },
            {
                "name": "org.quartz.core.QuartzSchedulerThread",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.addUserToGroup",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.activity.ActivityServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.util.spring.context.StudioSchedulerFactoryBean",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.config.ConfigurationFactory",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.controller.PageRenderController",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.SimpleHttpConnectionManager",
                "level": "info"
            },
            {
                "name": "org.apache.http.client.protocol.ResponseProcessCookies",
                "level": "info"
            },
            {
                "name": "org.springframework.security.authentication.ProviderManager",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.processors.impl.CurrentAuthenticationResolvingProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.jndi.JndiTemplate",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.methods.ExpectContinueMethod",
                "level": "info"
            },
            {
                "name": "org.quartz.core.JobRunShell",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.dircache.DirCacheCheckout",
                "level": "info"
            },
            {
                "name": "org.quartz.simpl.RAMJobStore",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.internal.storage.file.ObjectDirectory",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.InvalidateCacheProcessor",
                "level": "info"
            },
            {
                "name": "org.apache.commons.configuration.XMLConfiguration",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.access.DefaultWebInvocationPrivilegeEvaluator",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.checkPublishingStatus",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioGroupAPIAccessDecisionVoter",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.support.DefaultListableBeanFactory",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getAllGroupsQuery",
                "level": "info"
            },
            {
                "name": "org.springframework.jndi.JndiPropertySource",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.service.impl.ContentStoreServiceImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.FilterChainProxy",
                "level": "info"
            },
            {
                "name": "org.springframework.web.context.request.async.WebAsyncManager",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.config.ConfigurationHelper",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getGroup",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.util.PropertyUtil",
                "level": "info"
            },
            {
                "name": "org.springframework.web.filter.DelegatingFilterProxy",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.transaction.manager.selector.ClassSelector",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.parsing.FailFastProblemReporter",
                "level": "info"
            },
            {
                "name": "org.craftercms.commons.rest.HttpMessageConvertingResponseWriter",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.util.config.impl.MultiConfigurationBuilder",
                "level": "info"
            },
            {
                "name": "org.apache.http.client.protocol.RequestClientConnControl",
                "level": "info"
            },
            {
                "name": "org.springframework.context.annotation.CommonAnnotationBeanPostProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.AbstractNestablePropertyAccessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.commons.crypto.impl.NoOpTextEncryptor",
                "level": "info"
            },
            {
                "name": "org.apache.commons.dbcp2.PoolingDataSource",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.support.DisposableBeanAdapter",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.ebus.DeploymentEventLoggerListener",
                "level": "info"
            },
            {
                "name": "org.springframework.scheduling.quartz.ResourceLoaderClassLoadHelper",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.lib.RepositoryCache",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.utils.SecurityUtils",
                "level": "info"
            },
            {
                "name": "freemarker.cache",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.statistics.extended.ExtendedStatisticsImpl",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.conn.DefaultManagedHttpClientConnection",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.getLastDeployedItem",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getUsersPerSiteQueryTotal",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.userExists",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.updateItemDeploymentState",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.access.ExceptionTranslationFilter",
                "level": "info"
            },
            {
                "name": "org.springframework.context.support.DefaultLifecycleProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.userExistsInGroup",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.util.cache.impl.DefaultCacheTemplate",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping",
                "level": "info"
            },
            {
                "name": "net.sf.json.JSONObject",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.clipboard.ClipboardServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.site.SiteServiceImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.social.connect.web.ConnectSupport",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.deployment.EnvironmentDeployer",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.checkIfItemWasPublished",
                "level": "info"
            },
            {
                "name": "org.springframework.aop.framework.CglibAopProxy",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v2.service.notification.NotificationServiceImpl",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.xml.ValidationBootstrapParameters",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.createGroup",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.groupExists",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.dependency.DeploymentDependencyRule",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.job.EmailMessageSender",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.getObjectStateByStates",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.util.XmlUtils",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.config.MapFactoryBean",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.CheckImageSizeProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.view.CrafterPageView",
                "level": "info"
            },
            {
                "name": "org.quartz.core.QuartzScheduler",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.updateCommitId",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.servlet.filters.RequestSecurityFilter",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.authentication.impl.AuthenticationManagerImpl",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.engine.constraintvalidation.ConstraintValidatorManager",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.xml.XmlBeanDefinitionReader",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.DependencyMapper.deleteDependenciesForSiteAndPath",
                "level": "info"
            },
            {
                "name": "org.quartz.impl.StdSchedulerFactory",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.view.freemarker.CrafterFreeMarkerViewResolver",
                "level": "info"
            },
            {
                "name": "org.springframework.security.config.ldap.LdapServerBeanDefinitionParser",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter",
                "level": "info"
            },
            {
                "name": "freemarker.runtime.attempt",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.DependencyMapper.insertList",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.isFolderLive",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.search.SearchServiceImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.cache.ehcache.EhCacheManagerFactoryBean",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.security.MappedSecurityProviderRegistration",
                "level": "info"
            },
            {
                "name": "org.apache.commons.configuration.XMLConfiguration$XMLFileConfigurationDelegate",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.dependency.RegexDependencyResolver",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.header.HeaderWriterFilter",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioAbstractAccessDecisionVoter",
                "level": "info"
            },
            {
                "name": "org.jboss.logging",
                "level": "info"
            },
            {
                "name": "org.springframework.aop.aspectj.AspectJExpressionPointcut",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioUserAPIAccessDecisionVoter",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.controller.StaticAssetsRequestHandler",
                "level": "info"
            },
            {
                "name": "org.springframework.context.support.DelegatingMessageSource",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.ignore.FastIgnoreRule",
                "level": "info"
            },
            {
                "name": "org.apache.http.client.protocol.RequestAuthCache",
                "level": "info"
            },
            {
                "name": "org.springframework.security.config.ldap.LdapProviderBeanDefinitionParser",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.HandlerExecutionChain",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.deployment.job.DeployContentToEnvironmentStore",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.condition.ProducesRequestCondition$ProduceMediaTypeExpression",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.dependency.SubmitToApproveDependencyRule",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.processors.impl.template.TemplateProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.DispatcherServlet",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.ContentLifeCycleProcessor",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.conn.PoolingHttpClientConnectionManager",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.HttpParser",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.config.ObjectFactoryCreatingFactoryBean",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.content.ObjectMetadataManagerImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.aop.framework.ObjenesisCglibAopProxy",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.getSitesPerUserQuery",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.DependencyMapper.getDependencies",
                "level": "info"
            },
            {
                "name": "org.springframework.http.converter.xml.MarshallingHttpMessageConverter",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.repository.git.TreeCopier",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.Element",
                "level": "info"
            },
            {
                "name": "org.craftercms.security",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.params.DefaultHttpParams",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.access.expression.ExpressionBasedFilterInvocationSecurityMetadataSource",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.HttpClient",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.view.xml.MarshallingView",
                "level": "info"
            },
            {
                "name": "org.springframework.web.context.support.XmlWebApplicationContext",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.checkIfItemWasPublishedForEnvironment",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getUser",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getAllUsersQuery",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.methods.EntityEnclosingMethod",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.util.UpdateChecker",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.xml.BeansDtdResolver",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.xml.ValidationXmlParser",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.removeUserFromGroup",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.freemarker.CrafterFreeMarkerConfigurer",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.transaction.manager.selector.WeblogicSelector",
                "level": "info"
            },
            {
                "name": "net.sf.json.AbstractJSON",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.metadata.core.AnnotationProcessingOptionsImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.cache.interceptor.CacheInterceptor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.deployment.DmPublishServiceImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.transaction.support.TransactionSynchronizationUtils",
                "level": "info"
            },
            {
                "name": "org.springframework.context.annotation.ConfigurationClassUtils",
                "level": "info"
            },
            {
                "name": "org.springframework.core.env.StandardEnvironment",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.targeting.impl.ConfigAwareCookieLocaleResolver",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.conn.HttpClientConnectionOperator",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.CleanWorkContentProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.context.annotation.ConfigurationClassPostProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.util.EncodingUtil",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.repository.git.GitContentRepositoryHelper",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioAuthenticationProvider",
                "level": "info"
            },
            {
                "name": "org.springframework.core.type.classreading.AnnotationAttributesReadingVisitor",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.xml.PluggableSchemaResolver",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.filter.StudioSecurityFilter",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.isSystemUser",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.store.cachingtier.CountBasedBackEnd",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.CleanPreviewContentProcessor",
                "level": "info"
            },
            {
                "name": "org.springframework.security.config.method.GlobalMethodSecurityBeanDefinitionParser",
                "level": "info"
            },
            {
                "name": "org.springframework.transaction.support.TransactionSynchronizationManager",
                "level": "info"
            },
            {
                "name": "org.craftercms.commons.http.RequestContextBindingFilter",
                "level": "info"
            },
            {
                "name": "org.springframework.web.method.HandlerMethod",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.xml.BeanDefinitionParserDelegate",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.resourceloading.PlatformResourceBundleLocator",
                "level": "info"
            },
            {
                "name": "org.springframework.core.io.support.SpringFactoriesLoader",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getUsersPerGroup",
                "level": "info"
            },
            {
                "name": "org.springframework.http.converter.xml.Jaxb2RootElementHttpMessageConverter",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.util.spring.ExtendedLog4jConfigListener",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.resource.PathResourceResolver",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.terracotta.TerracottaCacheCluster",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.updateObjectPath",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.CachedIntrospectionResults",
                "level": "info"
            },
            {
                "name": "org.springframework.web.accept.PathExtensionContentNegotiationStrategy",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.DiskStorePathManager",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.content.DmPageNavigationOrderServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.configuration.SiteEnvironmentConfigImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.cache.impl.TopologicalCacheItemSorterImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.repository.job.SyncDatabaseWithRepository",
                "level": "info"
            },
            {
                "name": "org.quartz.core.SchedulerSignalerImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.core.env.PropertySourcesPropertyResolver",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter",
                "level": "info"
            },
            {
                "name": "org.apache.ibatis.executor.loader.javassist.JavassistProxyFactory",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.HttpMethodDirector",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.processors.impl.LoginProcessor",
                "level": "info"
            },
            {
                "name": "org.apache.ibatis.session.AutoMappingUnknownColumnBehavior",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.util.Contracts",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.util.spring.AbstractBeanIdBasedRegistry",
                "level": "info"
            },
            {
                "name": "org.springframework.jndi.JndiLocatorDelegate",
                "level": "info"
            },
            {
                "name": "org.springframework.ldap.support.LdapUtils",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.ContentProcessorPipelineImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.exists",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.access.AccessDeniedHandlerImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.web.accept.FixedContentNegotiationStrategy",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.setSystemProcessingBySiteAndPath",
                "level": "info"
            },
            {
                "name": "org.springframework.web.cors.DefaultCorsProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.service.ServicesManager",
                "level": "info"
            },
            {
                "name": "org.springframework.context.annotation.ConfigurationClassBeanDefinitionReader",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.service.context.SiteContextFactory",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.GeneralLockServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.ExtractAssetDependencyProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.getObjectStateForSiteAndPaths",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.workflow.WorkflowServiceImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.method.annotation.HttpEntityMethodProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.commons.rest.RestTemplate",
                "level": "info"
            },
            {
                "name": "org.springframework.beans.factory.xml.DefaultDocumentLoader",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.deleteEntry",
                "level": "info"
            },
            {
                "name": "org.springframework.http.converter.ByteArrayHttpMessageConverter",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.navigation.impl.NavTreeBuilderImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.ExtractParamsProcessor",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.config.CacheConfiguration",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.authentication.AnonymousAuthenticationFilter",
                "level": "info"
            },
            {
                "name": "org.quartz.core.ErrorLogger",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.updateUser",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SiteFeedMapper.getLastCommitId",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.deployment.PreviewDeployerImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.PathMatchProcessor",
                "level": "info"
            },
            {
                "name": "org.apache.ibatis.executor.BaseExecutor",
                "level": "info"
            },
            {
                "name": "org.springframework.web.context.support.ServletContextResourcePatternResolver",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.util.privilegedactions.LoadClass",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.transaction.manager.selector.JndiSelector",
                "level": "info"
            },
            {
                "name": "org.apache.ibatis.io.ResolverUtil",
                "level": "info"
            },
            {
                "name": "org.springframework.core.env.PropertiesPropertySource",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.transaction.manager.selector.FactorySelector",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getUsersPerGroupTotal",
                "level": "info"
            },
            {
                "name": "freemarker.beans",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.cache.impl.CacheImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.DependencyMapper.getDependant",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioCmisDSAPIAccessDecisionVoter",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.util.Version",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.content.ImportServiceImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.security.core.SpringSecurityMessageSource",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.service.context.SiteContextResolverImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.commons.crypto.SimpleDigest",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.security.DbWithLdapExtensionSecurityProvider",
                "level": "info"
            },
            {
                "name": "org.springframework.security.access.expression.DenyAllPermissionEvaluator",
                "level": "info"
            },
            {
                "name": "org.eclipse.jgit.util.FS_POSIX",
                "level": "info"
            },
            {
                "name": "org.springframework.aop.framework.JdkDynamicAopProxy",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.method.annotation.RequestPartMethodArgumentResolver",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.model.SiteItem",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.methods.PostMethod",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.util.ContentUtils",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.ImportDmContentProcessor",
                "level": "info"
            },
            {
                "name": "org.apache.ibatis.io.VFS",
                "level": "info"
            },
            {
                "name": "org.apache.http.conn.ssl.StrictHostnameVerifier",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.metadata.core.ConstraintHelper",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.store.MemoryStore",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.xml.XmlParserHelper",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.xml.ResourceLoaderHelper",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.transaction.manager.selector.BitronixSelector",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.authorization.impl.AccessDeniedHandlerImpl",
                "level": "info"
            },
            {
                "name": "org.springframework.web.method.support.HandlerMethodArgumentResolverComposite",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.authentication.impl.AuthenticationRequiredHandlerImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.deleteObjectState",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.content.pipeline.ExtractDependencyProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.util.ContentFormatUtils",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.workflow.WorkflowProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioGeneralAccessDecisionVoter",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.insertEntry",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.getUsersPerSiteQuery",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.targeting.impl.TargetedContentStoreAdapter",
                "level": "info"
            },
            {
                "name": "org.springframework.web.context.support.ServletConfigPropertySource",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.setSystemProcessingBySiteAndPathBulk",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.engine.ConfigurationImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.objectstate.ObjectStateServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.event.EventServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.setStateForSiteContent",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.engine.groups.DefaultValidationOrder",
                "level": "info"
            },
            {
                "name": "org.apache.http.conn.ssl.BrowserCompatHostnameVerifier",
                "level": "info"
            },
            {
                "name": "org.apache.commons.dbcp2.BasicDataSource",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.DependencyMapper.getDependenciesByType",
                "level": "info"
            },
            {
                "name": "org.springframework.context",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.PageNavigationOrderMapper.getPageNavigationOrderForSiteAndPath",
                "level": "info"
            },
            {
                "name": "org.springframework.security.web.servletapi.HttpServlet3RequestFactory",
                "level": "info"
            },
            {
                "name": "ch.vorburger.mariadb4j.DB",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.setProperties",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.HttpConnection",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.processors.impl.LogoutProcessor",
                "level": "info"
            },
            {
                "name": "org.apache.commons.configuration.ConfigurationUtils",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.cache.impl.CacheRefresherImpl",
                "level": "info"
            },
            {
                "name": "freemarker.security",
                "level": "info"
            },
            {
                "name": "org.springframework.security.config.http.FilterInvocationSecurityMetadataSourceParser",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.deleteObjectMetadataForSite",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.auth.AuthChallengeProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.SecurityMapper.updateGroup",
                "level": "info"
            },
            {
                "name": "httpclient.wire.content",
                "level": "info"
            },
            {
                "name": "org.hibernate.validator.internal.engine.ValidatorFactoryImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.http.impl.DefaultExceptionHandler",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.configuration.ContentTypesConfigImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.deployment.PublishingManagerImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.executor.ProcessContentExecutorImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.url.impl.UrlTransformationEngineImpl",
                "level": "info"
            },
            {
                "name": "net.sf.ehcache.config.BeanHandler",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.security.DbSecurityProvider",
                "level": "info"
            },
            {
                "name": "org.craftercms.security.processors.impl.SecurityExceptionProcessor",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.content.ContentServiceImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectMetadataMapper.insertEntry",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.service.content.ContentItemIdGeneratorImpl",
                "level": "info"
            },
            {
                "name": "org.craftercms.core.util.xml.marshalling.xstream.CrafterXStreamMarshaller",
                "level": "info"
            },
            {
                "name": "org.apache.commons.httpclient.cookie.CookieSpec",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.CopyToEnvironmentMapper.deleteDeploymentDataForSite",
                "level": "info"
            },
            {
                "name": "org.springframework.web.servlet.mvc.method.annotation.ResponseBodyEmitterReturnValueHandler",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.client.InternalHttpClient",
                "level": "info"
            },
            {
                "name": "org.springframework.core.env.SystemEnvironmentPropertySource",
                "level": "info"
            },
            {
                "name": "org.apache.http.impl.execchain.RetryExec",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.controller.MonitoringController",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.ObjectStateMapper.deleteObjectStateForSiteAndPath",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.impl.v1.web.security.access.StudioSiteAPIAccessDecisionVoter",
                "level": "info"
            },
            {
                "name": "org.craftercms.engine.view.CrafterPageViewResolver",
                "level": "info"
            },
            {
                "name": "org.craftercms.studio.api.v1.dal.PageNavigationOrderMapper.update",
                "level": "info"
            },
            {
                "name": "org.mybatis.spring.SqlSessionFactoryBean",
                "level": "info"
            }
        ]

--------
Response
--------

+---------+-------------------------------------------+---------------------------------------------------+
|| Status || Location                                 || Response Body                                    |
+=========+===========================================+===================================================+
|| 200    ||                                          || See example above.                               |
+---------+-------------------------------------------+---------------------------------------------------+
