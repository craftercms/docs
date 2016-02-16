=============
Configuration
=============

Default Studio configuration values:

.. code-block:: properties
    :caption: CLASSPATH:crafter/engine/studio-server-config.properties

    ##########################
    # Database configuration #
    ##########################
    # database platform
    studio.db.platform=derby
    # database name
    studio.db.name=CRAFTER
    # database user
    studio.db.username=crafter
    # database password
    studio.db.password=crafter
    # database driver
    studio.db.driver=org.apache.derby.jdbc.EmbeddedDriver
    # default database path (embedded derby)
    studio.db.derby.path=data/derby/${studio.db.name}
    # database jdbc url
    studio.db.url=jdbc:derby:${studio.db.derby.path};databaseName=${studio.db.name};create=true;user=${studio.db.username};password=${studio.db.password}

    ########################
    # Environment settings #
    ########################
    # Environment configuration (environment overrides)
    environment=local
    environmentConfig.environment=local

    ############################
    # Repository configuration #
    ############################
    # Repository type (valid values: default, alfresco, alfrescoext)
    repositoryType=default
    # Security provider (valid values: default, alfresco, alfrescoext)
    securityType=default
    # Disk repository root path
    repository.diskImplementation.path=./crafter/data/repo
    # Alfresco repository url
    alfrescoUrl=http://127.0.0.1:8080/alfresco
    # Enable repository bootstrap
    crafter.repository.bootstrapEnabled=true
    # Preview content root path for alfrescoext
    crafter.repository.previewRootPath=./crafter/data/repo

    ##########################
    # Services Configuration #
    ##########################
    # Site configuration root path
    serviceConfig.configPath=/cstudio/config/sites/{site}
    # Site configuration file name
    serviceConfig.configFileName=site-config.xml

    ######################################
    # Dependencies Service configuration #
    ######################################
    # Ignore dependency rules for paths defined by comma separated regular expressions
    dmDependenciesService.ignoreDependenciesRules=/templates/system/common/cstudio-support.*\\.ftl,/templates/web/navigation/.*\\.ftl

    ################################
    # Content Type Filter patterns #
    ################################
    # Pages
    cstudioPagesFilter.includePattern=^/page/.*
    # Components
    cstudioComponentsFilter.includePattern=^/component/.*
    # Documents
    cstudioDocumentsFilter.includePattern=^/document.*

    #####################################
    # Permissions Service configuration #
    #####################################
    # Site configuration root path
    permissionService.configPath=/cstudio/config/sites/{site}
    # Role mappings configuration file name
    permissionService.roleMappingFileName=role-mappings-config.xml
    # Permissions mappings configuration file name
    permissionService.permissionMappingFileName=permission-mappings-config.xml
    # Global permissions configuration location
    permissionService.globalConfigPath=/cstudio/config
    # Global role mappings configuration file name
    permissionService.globalRoleMappingFileName=global-role-mappings-config.xml
    # Global permissions mappings configuration file name
    permissionService.globalPermissionMappingFileName=global-permission-mappings-config.xml


    ######################################
    # Content Type Service configuration #
    ######################################
    # the location of content type configuration files
    contentTypesConfig.configPath=/cstudio/config/sites/{site}/content-types/{content-type}
    # the file name pattern of content type configuration files
    contentTypesConfig.configFileName=config.xml
    # Content type service configuration files location
    contentTypeService.configPath=/cstudio/config/sites/{site}/content-types
    # Content type service configuration file name
    contentTypeService.configFileName=config.xml

    ##################################
    # Activity Service configuration #
    ##################################
    # Case sensitive usernames
    user.name.caseSensitive=false

    ####################################
    # Content Processors configuration #
    ####################################
    # Extract metadata processor groovy script location
    ExtractMetadataProcessor.scriptLocation=/cstudio/config/sites/{site}/content-types/{content-type}/extract.groovy
    # Content lifecycle processor script location
    ContentLifeCycleProcessor.scriptLocation=/cstudio/config/sites/{site}/content-types/{content-type}/controller.groovy
    # Assets content processor system path pattern
    AssetsContentProccessot.assetsSystemPath=/static-assets/system

    ###############################################
    # Page Navigation Order Service configuration #
    ###############################################
    # Page navigation order increment for new items
    PageNavigationOrderService.increment=1000

    ##############################
    # Site Service configuration #
    ##############################
    # Site configuration root path
    siteService.sitesConfigPath=/cstudio/config/sites
    # Global configuration root path
    siteService.configPath=/cstudio/config

    ##########################################
    # Site Environment Service configuration #
    ##########################################
    # Environment configuration location pattern
    environmentConfig.configPath=/cstudio/config/sites/{site}/environment-overrides/{environment}
    # Environment configuration file name
    environmentConfig.configFileName=environment-config.xml

    ####################################
    # Deployment Service configuration #
    ####################################
    # Deployment configuration location
    deploymentConfig.configPath=/cstudio/config/sites/{site}/deployment
    # Deployment configuration file name
    deploymentConfig.configFileName=endpoints-config.xml

    ######################################
    # Notification Service configuration #
    ######################################
    # Notification configuration location
    notificationService.configPath=/cstudio/config/sites/{site}
    # Notification configuration file name
    notificationService.configFileName=notification-config.xml
    # Notifications for custom content paths enabled
    notificationService.customContentPathNotification=false
    # Notifications for custom content paths regular expression pattern
    notificationService.customContentPathNotificationPattern=

    ####################################
    # Crafter Default Preview Deployer #
    ####################################
    # Deployer server
    crafter.deployer.server=localhost
    # Deployer port number
    crafter.deployer.port=9191
    # Deployer target name
    crafter.deployer.target=sample
    # Deployer password
    crafter.deployer.password=admin

    ###################################
    # Environment Store configuration #
    ###################################
    # Environment store location
    crafter.deployer.environmentStoreRoot=crafter-environments-store

    ####################################
    # Publishing Manager configuration #
    ####################################
    # Publishing manager index file name
    publishingManager.indexFile=index.xml
    # Enable import mode (skip creating versions when publishing)
    publishingManager.importModeEnabled=false

    ################################
    # Repository Job configuration #
    ################################
    # Repository job default password
    repositoryJob.password=root
    # Repository job default username
    repositoryJob.username=admin

    ###################################################
    # Deploy Content To Environment Job configuration #
    ###################################################
    # Chunk size for big deployment packages
    deployContentToEnvironmentJob.processingChunkSize=1000
    # Enable mandatory dependencies check
    deployContentToEnvironmentJob.mandatoryDependenciesCheckEnabled=true

    ##########################################################
    # Publish Content To Deployment Target Job Configuration #
    ##########################################################
    # Maximum number of retries in case of failure
    syncTargetsJob.maxTolerableRetries=30

    #################################
    # Deployment Jobs configuration #
    #################################
    # Master publishing node in clustered environment (when false disables publishing)
    deploymentWorkers.masterPublishingNode=true

    ###############################
    # Email Service configuration #
    ###############################
    # Default from header
    crafter.studio.mail.from.default=default@mail.com
    # SMTP server
    crafter.studio.mail.host=localhost
    # SMTP port number
    crafter.studio.mail.port=25
    # SMTP username for authenticated access
    crafter.studio.mail.username=
    # SMTP password for authenticated access
    crafter.studio.mail.password=
    # Enable SMTP authenaticated access
    crafter.studio.mail.smtp.auth=false
    # Enable SMTP TLS
    crafter.studio.mail.smtp.starttls.enable=true
    # Enable SMTP EHLO protocol
    crafter.studio.mail.smtp.ehlo=true
    # Enable debug mode for email service
    crafter.studio.mail.debug=false

    #######################################
    # Studio Groovy Scripts configuration #
    #######################################
    # Classpath for studio script engine
    crafter.studio.scripts.groovy.classpath=${crafter-studio}/default-site

    #############################
    # Studio Ebus configuration #
    #############################
    # List of studio peers in clustered environment
    crafter.studio.ebus.peers=
    # Ebus port number for cluster environment
    crafter.studio.ebus.tcpserver.port=19191

    ################################
    # Import Service configuration #
    ################################
    # Content processor chain name for xml content
    importService.xmlChainName=importContent
    # Content processor chain name for assets
    importService.assetChainName=assetContent
    # Content processor assignee for import process
    importService.assignee=admin

    ################################
    # Studio Cluster configuration #
    ################################
    # Enable Studio cluster
    crafter.studio.cluster.enabled=false

To override any of default configuration values create new properties file in ``TOMCAT/shared/classes/crafter/engine/extension/studio-server-config.properties`` and override value of any property by setting new value.
