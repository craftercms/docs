:is-up-to-date: True
:last-updated: 4.1.2
:orphan:

.. highlight:: xml

.. _crafter-studio:

==============
Crafter Studio
==============
.. figure:: /_static/images/architecture/crafter-studio.webp
    :alt: Crafter Studio
    :width: 75%
    :align: center

|

Crafter Studio provides all the content management services and integrates with repositories like Git, Alfresco and other CMIS based platforms to enable authoring, management, and publishing of all content.

|hr|

.. _studio-config:

-------------
Configuration
-------------

Crafter Studio is primarily configured via a single configuration file, ``studio-config.yaml``, and 2 override files that can be used to override the settings in the core configuration file.

The core configuration file for Crafter Studio ``studio-config.yaml`` is located under ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/classes/crafter/studio`` and contains pre-configured settings.

.. warning:: Do not change the ``studio-config.yaml`` file directly; override the settings you want to change in one of the override files.

The override files are:

* Studio Configuration Override file **studio-config-override.yaml** located under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` can be accessed by opening the file using your favorite editor
* Global Studio Configuration Override file **studio-config-override.yaml** located under ``CRAFTER_HOME/data/repos/global/configuration`` can be accessed from Studio from the ``Navigation Menu`` under ``Global Config``

The configuration loading order is as follows:

* ``studio-config.yaml`` from the WAR file is loaded first
* ``studio-config-override.yaml`` from the shared folder is loaded next (if it exists)
* ``studio-config-override.yaml`` from the global configuration folder is loaded last (if it exists)

If the same property is present in multiple files, the value from the last configuration file will be used.

You'll note that the first override file from the ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` folder resides on the local file system. This makes it easy for system admins but will not replicate across a cluster. The second override file from the ``CRAFTER_HOME/data/repos/global/configuration`` folder is a repository item and will replicate across a cluster. Furthermore, the second override file can be managed from Studio without the need to access the file system. See :ref:`nav-menu-global-config` for more information on how to access the global configuration file from Studio.

.. note:: Changing the configuration files requires a restart of Crafter Studio for the changes to take effect.
.. note:: Environment variables can be used to override any property defined as ``${env:ENVIRONMENT_VARIABLE}`` in the configuration files. This allows you to inject these properties into a vanilla installation without modifying any actual files, which is especially useful when using Docker or Kubernetes. See :ref:`here <environment-variables>` for a list of environment variables used by CrafterCMS.

-------------------------------
Studio Configuration Properties
-------------------------------
In this section, we will highlight some of the more commonly used properties in the configuration of Crafter Studio. For a complete list of all the properties, see the ``studio-config.yaml`` file.

.. list-table:: Configuration Properties
    :header-rows: 1

    * - Property
      - Purpose

    * - :ref:`SMTP Configuration (Email) <studio-smtp-config>`
      - Configure the SMTP server to be used by Crafter Studio when sending emails
    * - :ref:`CORS <studio-cors>`
      - Configure CORS
    * - :ref:`Blob Stores <blob-stores>`
      - Configure internally managed static asset stores to handle very large files
    * - :ref:`Project Policy <project-policy-configuration>`
      - Configure constraints for content being added to the project
    * - :ref:`Editable Mime Types <editable-mime-types>`
      - Configure the MIME-types that are editable directly in Crafter Studio
    * - :ref:`Project/Site Configuration <studio-project-config>`
      - Configure your project/site configuration
    * - :ref:`UI Configuration <user-interface-configuration>`
      - Configure the Studio UI
    * - :ref:`RTE Configuration <rte-configuration>`
      - Configure the default RTE
    * - :ref:`Preview Deployer Configuration <studio-preview-deployer-config>`
      - Configure your deployer URLs
    * - :ref:`Preview Search Configuration <studio-preview-search-config>`
      - Configure your search URLs
    * - :ref:`Search <studio-search>`
      - Configure Studio search
    * - :ref:`Cache Settings <cache-settings>`
      - Configure the cache control settings for templates and assets
    * - :ref:`Forwarded Headers <studio-forwarded-headers>`
      - Configure forwarded headers
    * - :ref:`Policy Headers <studio-policy-headers>`
      - Configure policy headers
    * - :ref:`crafterSite Cookie Domain <studio-crafterSite-cookie-domain>`
      - Configure the ``crafterSite`` cookie domain
    * - :ref:`Deployer HTTP Requests <studio-deployer-http-request-timeout>`
      - Configure timeout for Deployer HTTP requests
    * - :ref:`Serverless Delivery Targets <studio-serverless-delivery-targets>`
      - Configure serverless delivery
    * - :ref:`CloudFormation Capabilities <studio-cloudformation-capabilities>`
      - Configure capabilities for CloudFormation stack
    * - :ref:`Validations Regex <studio-validations-regex>`
      - Configure the regex used for validating various inputs
    * - :ref:`Workflow Notification Configuration <notifications-configuration>`
      - Configure the workflow notifications
    * - :ref:`Commit Message <studio-commit-message>`
      - Configure the commit messages used by Crafter Studio
    * - :ref:`Audit Log <studio-audit-log>`
      - Configure whether to enable/disable the Studio audit log job for operations not performed through Crafter Studio
    * - :ref:`Publishing Blacklist <publishing-blacklist>`
      - Configure the publishing blacklist
    * - :ref:`Configuration Files Maximum <configuration-files-maximum>`
      - Configure the maximum length of configuration content
    * - :ref:`Content Type Editor Configuration <content-type-editor-config>`
      - Configure the content types
    * - :ref:`Dependency Resolver Configuration <dependency-resolver-config>`
      - Configure the dependency resolver
    * - :ref:`Project Tools Configuration <project-tools-configuration>`
      - Configure the project tools
    * - :ref:`Asset Processing Configuration <asset-processing-configuration>`
      - Configure asset processing
    * - :ref:`AWS Profiles Configuration <aws-profile-configuration>`
      - Configure AWS integration
    * - :ref:`Box Profiles Configuration <box-profile-configuration>`

	.. version_tag::
		:label: Until
		:version: 4.2

      - Configure Box integration
    * - :ref:`WebDAV Profiles Configuration <webdav-profiles-configuration>`
      - Configure WebDAV integration

.. TODO Add more configuration properties

|

|hr|

.. _studio-smtp-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^
SMTP Configuration (Email)
^^^^^^^^^^^^^^^^^^^^^^^^^^
This section allows the user to set up a mail client by configuring the SMTP server to send emails from Crafter Studio, such as when authors request to publish content or when a request to publish has been approved.

.. code-block:: yaml
    :linenos:
    :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

    ##################################################
    ##        SMTP Configuration (Email)            ##
    ##################################################
    # Default value for from header when sending emails.
    # studio.mail.from.default: admin@example.com
    # SMTP server name to send emails.
    # studio.mail.host: ${env:MAIL_HOST}
    # SMTP port number to send emails.
    # studio.mail.port: ${env:MAIL_PORT}
    # SMTP username for authenticated access when sending emails.
    # studio.mail.username:
    # SMTP password for authenticated access when sending emails.
    # studio.mail.password:
    # Turn on/off (value true/false) SMTP authenaticated access protocol.
    # studio.mail.smtp.auth: false
    # Enable/disable (value true/false) SMTP TLS protocol when sending emails.
    # studio.mail.smtp.starttls.enable: false
    # Enable/disable (value true/false) SMTP EHLO protocol when sending emails.
    # studio.mail.smtp.ehlo: true
    # Enable/disable (value true/false) debug mode for email service. Enabling debug mode allows tracking/debugging communication between email service and SMTP server.
    # studio.mail.debug: false

|

|hr|

.. _studio-cors:

^^^^
CORS
^^^^
The following section of Studio's configuration overrides allows you to set CORS

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:
    :emphasize-lines: 10

    ################################################################
    ##                             CORS                           ##
    ################################################################
    # This is configured as permissive by default for ease of deployment
    # Remember to tighten this up for production

    # Disable CORS headers completely
    # studio.cors.disable: false
    # Value for the Access-Control-Allow-Origin header
    # studio.cors.origins: '*'
    # Value for the Access-Control-Allow-Headers header
    # studio.cors.headers: '*'
    # Value for the Access-Control-Allow-Methods header
    # studio.cors.methods: '*'
    # Value for the Access-Control-Allow-Credentials header
    # studio.cors.credentials: true
    # Value for the Access-Control-Max-Age header
    # studio.cors.maxage: -1

The CORS origins accept regex patterns. Values are split using ``,``. Remember that commas inside
patterns need to be escaped with a ``\`` like:
``studio.cors.origins: 'http://localhost:[8000\,3000],http://*.other.domain'``

|

|hr|

^^^^^^^^^^^
Blob Stores
^^^^^^^^^^^
Configure internally managed static asset stores to handle very large files using the Blob Stores configuration. To learn more, read the article :ref:`blob-stores`.

|hr|

^^^^^^^^^^^^^^
Project Policy
^^^^^^^^^^^^^^
The project policy configuration file allows the administrator to configure conditions for adding content to the project.
(via uploads), such as filename constraints, minimum/maximum size of files, permitted content types or file types (MIME-types), etc.

Learn more about project policy in the article :ref:`project-policy-configuration`.


|hr|

.. _editable-mime-types:

^^^^^^^^^^^^^^^^^^^
Editable Mime Types
^^^^^^^^^^^^^^^^^^^
Here's the default list of MIME-types editable in Studio:

.. code-block:: yaml

    # Item MIME-types that are editable directly in Crafter Studio
    studio.content.item.editableTypes:
    - text/plain
    - text/html
    - text/css
    - text/x-freemarker
    - application/javascript
    - application/json
    - application/xml
    - application/xhtml+xml

These can be updated as needed by overriding the property in one of the override files.

|

|hr|

.. _studio-project-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^
Project/Site Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio allows to configure many aspects of a project/site. Learn more about project/site configuration in the article :ref:`project-configuration`.


|hr|

^^^^^^^^^^^^^^^^
UI Configuration
^^^^^^^^^^^^^^^^
Crafter Studio's UI is highly configurable and allows you to customize the look and feel of the UI per project to suit your needs. Learn more about Studio UI configuration in the article :ref:`user-interface-configuration`.


|hr|

.. _studio-rte-config:

^^^^^^^^^^^^^^^^^
RTE Configuration
^^^^^^^^^^^^^^^^^
RTEs are more effective/productive for authors when they are configured properly for the specific type of content the author is managing. A properly and effectively configured RTE has the right styles, menu options and so on.
Learn more about configuring Studio's default RTE in the article :ref:`rte-configuration`.

|hr|

.. _studio-preview-deployer-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Preview Deployer Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following section of Studio's configuration overrides allows you to setup your deployer URLs

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ############################################################
    ##                    Preview Deployer                    ##
    ############################################################

    # Default preview deployer URL (can be overridden per site)
    studio.preview.defaultPreviewDeployerUrl: ${env:DEPLOYER_URL}/api/1/target/deploy/{siteEnv}/{siteName}
    # Default preview create target URL (can be overridden per site)
    studio.preview.createTargetUrl: ${env:DEPLOYER_URL}/api/1/target/create_if_not_exists
    # Default preview create target URL (can be overridden per site)
    studio.preview.deleteTargetUrl: ${env:DEPLOYER_URL}/api/1/target/delete-if-exists/{siteEnv}/{siteName}
    # URL to the preview repository (aka Sandbox) where authors save work-in-progress
    studio.preview.repoUrl: ${env:CRAFTER_DATA_DIR}/repos/sites/{siteName}/sandbox

|

|hr|

.. _studio-preview-search-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Preview Search Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following section of Studio's configuration overrides allows you to set URLs for search in preview.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ############################################################
    ##                   Preview Search                       ##
    ############################################################

    studio.preview.search.createUrl: ${env:SEARCH_URL}/api/2/admin/index/create
    studio.preview.search.deleteUrl: ${env:SEARCH_URL}/api/2/admin/index/delete/{siteName}

|

|hr|

.. _studio-search:

^^^^^^
Search
^^^^^^
The following section of Studio's configuration overrides allows you to setup the url for search

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ################################################################
    ##                           Search                           ##
    ################################################################
    # URLs to connect to Search
    studio.search.urls: ${env:SEARCH_URL}
    # The username for Search
    studio.search.username: ${env:SEARCH_USERNAME}
    # The password for Search
    studio.search.password: ${env:SEARCH_PASSWORD}
    # The connection timeout in milliseconds, if set to -1 the default will be used
    studio.search.timeout.connect: -1
    # The socket timeout in milliseconds, if set to -1 the default will be used
    studio.search.timeout.socket: -1
    # The number of threads to use, if set to -1 the default will be used
    studio.search.threads: -1
    # Indicates if keep alive should be enabled for sockets used by the search client, defaults to false
    studio.search.keepAlive: false

|

|hr|

.. _cache-settings:

^^^^^^^^^^^^^^
Cache Settings
^^^^^^^^^^^^^^
Here are the cache control settings for templates and assets:

.. code-block:: yaml

    # If Studio should cache its FreeMarker templates
    studio.cache.templates: true
    # Indicates if the browser should cache responses for static-assets
    studio.cache.assets.enabled: true
    # The max age in seconds that the browser should cache responses for requests matching `studio.cache.assets.maxAge.includeUrls`
    studio.cache.assets.maxAge: 3600
    # The urls that should include max-age=<studio.cache.assets.maxAge> in Cache-Control header. Other urls will be set to default max-age=0, must-revalidate
    studio.cache.assets.maxAge.includeUrls: /static-assets/**,/1/plugin/file/**

|

|hr|

.. _studio-forwarded-headers:

^^^^^^^^^^^^^^^^^
Forwarded Headers
^^^^^^^^^^^^^^^^^
The following section of Studio's configuration overrides allows you to configure forwarded headers to resolve the actual hostname and protocol when it is behind a load balancer or reverse proxy. This is especially useful when setting up Studio behind a load balancer in AWS.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ##################################################
    ##             Forwarded Headers                ##
    ##################################################
    # Indicates if Forwarded or X-Forwarded headers should be used when resolving the client-originated protocol and
    # address. Enable when Studio is behind a reverse proxy or load balancer that sends these.
    studio.forwarded.headers.enabled: false

|

|hr|

.. _studio-policy-headers:

^^^^^^^^^^^^^^
Policy Headers
^^^^^^^^^^^^^^
"""""""""""""""""""""""
Content Security Policy
"""""""""""""""""""""""
.. version_tag::
	:label: Since
	:version: 4.1.2

The following allows you to configure which resources can be loaded (e.g. JavaScript, CSS, Images, etc.)
and the URLs that they can be loaded from.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    # Value for the Content-Security-Policy header
    studio.security.headers.contentSecurityPolicy.value: default-src 'unsafe-inline'
    # Set to true to enable the Content-Security-Policy-Report-Only header (this will report in the user agent console instead of actually blocking the requests)
    studio.security.headers.contentSecurityPolicy.reportOnly: true

To block offending requests, set ``studio.security.headers.contentSecurityPolicy.reportOnly`` to ``false``.
This property is set to ``true`` by default

"""""""""""""""""""""""""""""""""
X-Permitted-Cross-Domain-Policies
"""""""""""""""""""""""""""""""""
The following allows you to configure what other domains you want to allow access to your domain.
The X-PERMITTED-CROSS-DOMAIN-POLICIES header is set to ``none`` (do not allow any embedding) by default.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    # Value for the X-PERMITTED-CROSS-DOMAIN-POLICIES header
    studio.security.headers.permittedCrossDomainPolicies.value: none


|

|hr|

.. _studio-crafterSite-cookie-domain:

^^^^^^^^^^^^^^^^^^^^^^^^^
crafterSite Cookie Domain
^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
	:label: Since
	:version: 4.0.1

The following section of Studio's configuration overrides allows you to set the ``crafterSite`` cookie at the base domain instead of a subdomain to allow visibility of the ``crafterSite`` cookie across subdomains.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    # Use base domain instead of subdomain for the crafterSite cookie
    studio.cookie.useBaseDomain: false

|

|hr|

.. _studio-deployer-http-request-timeout:

^^^^^^^^^^^^^^^^^^^^^^
Deployer HTTP Requests
^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
	:label: Since
	:version: 4.2.0

The following section of Studio's configuration overrides allows you to set the timeout for Deployer HTTP requests.
The default timeout is 5 minutes.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    # Response timeout in seconds for deployer http requests
    studio.deployer.request.timeoutSeconds: 300

|

|hr|

.. _studio-serverless-delivery-targets:

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Serverless Delivery Targets
^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following section of Studio's configuration overrides allows you to set up serverless delivery.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ##########################################################
    ##                 Serverless Delivery                  ##
    ##########################################################
    # Indicates if serverless delivery is enabled
    # studio.serverless.delivery.enabled: false
    # The URL for the serverless delivery deployer create URL
    # studio.serverless.delivery.deployer.target.createUrl: ${studio.preview.createTargetUrl}
    # The URL for the serverless delivery deployer delete URL
    # studio.serverless.delivery.deployer.target.deleteUrl: ${studio.preview.deleteTargetUrl}
    # The template name for serverless deployer targets
    # studio.serverless.delivery.deployer.target.template: aws-cloudformed-s3
    # Replace existing target configuration if one exists?
    # studio.serverless.delivery.deployer.target.replace: false
    # The URL the deployer will use to clone/pull the site's published repo. When the deployer is in a separate node
    # (because of clustering), this URL should be an SSH/HTTP URL to the load balancer in front of the Studios
    # studio.serverless.delivery.deployer.target.remoteRepoUrl: ${env:CRAFTER_DATA_DIR}/repos/sites/{siteName}/published
    # The deployer's local path where it will store the clone of the published site. This property is not needed if
    # the deployer is not the preview deployer, so you can leave an empty string ('') instead
    # studio.serverless.delivery.deployer.target.localRepoPath: ${env:CRAFTER_DATA_DIR}/repos/aws/{siteName}
    # Parameters for the target template. Please check the deployer template documentation for the possible parameters.
    # The following parameters will be sent automatically, and you don't need to specify them: env, site_name, replace,
    # disable_deploy_cron, local_repo_path, repo_url, use_crafter_search
    # studio.serverless.delivery.deployer.target.template.params:
    #   # The delivery search endpoint (optional is authoring is using the same one, specified in the SEARCH_URL env variable)
    #   search_url:
    #   aws:
    #     # AWS region (optional if specified through default AWS chain)
    #     region: us-east-1
    #     # AWS access key (optional if specified through default AWS chain)
    #     default_access_key:
    #     # AWS secret key (optional if specified through default AWS chain)
    #     default_secret_key:
    #     cloudformation:
    #       # AWS access key (optional if aws.accessKey is specified)
    #       access_key:
    #       # AWS secret key (optional if aws.secretKey is specified)
    #       secret_key:
    #       # Namespace to use for CloudFormation resources (required when target template is aws-cloudformed-s3)
    #       namespace: myorganization
    #       # The domain name of the serverless delivery LB (required when target template is aws-cloudformed-s3)
    #       deliveryLBDomainName:
    #       # The SSL certificate ARN the CloudFront CDN should use (optional when target template is aws-cloudformed-s3)
    #       cloudfrontCertificateArn:
    #       # The alternate domains names (besides *.cloudfront.net) for the CloudFront CDN (optional when target template is aws-cloudformed-s3)
    #       alternateCloudFrontDomainNames:

|

|hr|

.. _studio-cloudformation-capabilities:

^^^^^^^^^^^^^^^^^^^^^^^^^^^
CloudFormation Capabilities
^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
	:label: Since
	:version: 4.2.0

The following section of Studio's configuration overrides allows you to configure CloudFormation capabilities.
This allows users to pass in the capabilities from the Deployer target configuration in ``custom-serverless-site-stack.yaml``
See :ref:`aws-cloudformation-target` for more information.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    # # A comma-separated string listing the required capabilities for the CloudFormation stack. Ex: CAPABILITY_IAM,CAPABILITY_NAMED_IAM,CAPABILITY_AUTO_EXPAND (optional)
    # stackCapabilities:

|

Here's an example of configuring the ``CAPABILITY_IAM``, ``CAPABILITY_NAMED_IAM`` and ``CAPABILITY_AUTO_EXPAND`` stack
capabilities:

.. code-block:: yaml
    :emphasize-lines: 6
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

    studio.serverless.delivery.deployer.target.template.params:
      aws:
        ...
        cloudformation:
        ...
          stackCapabilities: CAPABILITY_IAM,CAPABILITY_NAMED_IAM,CAPABILITY_AUTO_EXPAND

|


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Workflow Notifications Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio provides a simple workflow option that includes submission, review, approve or reject, and
publish immediately or publish on a schedule.

Learn more about Crafter Studio's workflow in the article :ref:`notifications-configuration`.

.. toctree::
    :hidden:

    notification-configuration


|hr|

.. _studio-validations-regex:

^^^^^^^^^^^^^^^^^
Validations Regex
^^^^^^^^^^^^^^^^^
.. version_tag::
	:label: Since
	:version: 4.0.3

CrafterCMS validates API requests related to users and groups through regex restrictions to avoid malicious payloads.

The following section of Studio's configuration overrides allows you to configure the regex used for validating user names and group names to suit your needs.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

    ##########################################################
    ##                  Input Validations                   ##
    ##########################################################
    # These properties override default validation regex patterns
    # from crafter common validations.
    # Key should have the form `studio.validation.regex.KEY_NAME`
    # Value should be a valid java regex.
    #
    # studio.validation.regex.HTTPParameterName: "^[a-zA-Z0-9_\\-]{1,32}$"
    # studio.validation.regex.SITEID: "^[a-z0-9\-_]*$"
    # studio.validation.regex.EMAIL: "^([\\w\\d._\\-#])+@([\\w\\d._\\-#]+[.][\\w\\d._\\-#]+)+$"
    # studio.validation.regex.USERNAME: "^[a-zA-Z][\\w.\\-@+]+$"
    # studio.validation.regex.GROUP_NAME: "^[a-zA-Z][\\w.\\-]*$"
    # studio.validation.regex.ALPHANUMERIC: "^[a-zA-Z0-9]*$"
    # studio.validation.regex.SEARCH_KEYWORDS: "^[\\w\\s\\-\\\"\\.\\*]*$"
    # studio.validation.regex.CONTENT_PATH_WRITE: "^/?([\\w\\- ]+/?)*(((crafter\\-level\\-descriptor\\.level)|([\\w\\- ]))+\\.[\\w]+)?$"
    # studio.validation.regex.CONTENT_PATH_READ: "^/?([\\w\\p{IsLatin}@$%^&{}\\[\\]()+\\-=,.:~'`]+(\\s*[\\w\\p{IsLatin}/@$%^&{}\\[\\]()+\\-=,.:~'`])*(/?))*$"
    # studio.validation.regex.CONTENT_FILE_NAME_WRITE: "^((crafter\\-level\\-descriptor\\.level)|([a-z0-9_\\-])+)\\.xml$"
    # studio.validation.regex.CONFIGURATION_PATH: "^([a-z0-9\\-_/]+([.]*[a-z0-9\\-_])+)*(\\.[\w]+)?/?$"

|

|hr|

.. _studio-commit-message:

^^^^^^^^^^^^^^
Commit Message
^^^^^^^^^^^^^^
Here are the default commit messages when someone makes content changes and can be customized by overriding them
using one of the override files.

.. code-block:: yaml
    :linenos:

    # Repository commit prologue message
    studio.repo.commitMessagePrologue:
    # Repository commit postscript message
    studio.repo.commitMessagePostscript:
    # Sandbox repository write commit message
    studio.repo.sandbox.write.commitMessage: "User {username} wrote content {path}"
    # Published repository commit message
    studio.repo.published.commitMessage: "Publish event triggered by {username} on {datetime} via {source}.\n\nPublish note from user: \"{message}\"\n\nCommit ID: {commit_id}\n\nPackage ID: {package_id}"
    # Commit message to mark commit not to process when syncing database
    studio.repo.syncDB.commitMessage.noProcessing: "STUDIO: NO PROCESSING"
    # Create new repository commit message
    studio.repo.createRepository.commitMessage: "Create new repository."
    # Create sandbox branch commit message
    studio.repo.createSandboxBranch.commitMessage: "Create {sandbox} branch."
    # Initial commit message
    studio.repo.initialCommit.commitMessage: "Initial commit."
    # Create as orphan commit message
    studio.repo.createAsOrphan.commitMessage: "Created as orphan."
    # Blueprints updated commit message
    studio.repo.blueprintsUpdated.commitMessage: "Blueprints updated."
    # Create folder commit message
    studio.repo.createFolder.commitMessage: "Created folder site: {site} path: {path}"
    # Delete content commit message
    studio.repo.deleteContent.commitMessage: "Delete file {path}"
    # Move content commit message
    studio.repo.moveContent.commitMessage: "Moving {fromPath} to {toPath}"
    # Copy content commit message
    studio.repo.copyContent.commitMessage: "Copying {fromPath} to {toPath}"

|

|hr|

.. _studio-audit-log:

^^^^^^^^^
Audit Log
^^^^^^^^^
.. version_tag::
	:label: Since
	:version: 4.1.3

CrafterCMS allows disabling the job for populating the audit log from external git changes. When disabled, the audit table will not log external operations synced from git. Crafter Studio updates and changes are always audited. Disabling this job improves performance for large git pull operations.

To disable populating the audit log, set the ``studio.clockJob.task.auditLogProcessing.disableAudit`` property to ``true``.

.. code-block:: yaml
    :caption: *studio-config-override.yaml*

    # Disable the db audit log population
    studio.clockJob.task.auditLogProcessing.disableAudit: false

|

|hr|

.. _publishing-blacklist:

^^^^^^^^^^^^^^^^^^^^
Publishing Blacklist
^^^^^^^^^^^^^^^^^^^^
CrafterCMS allows the creation of a publishing blacklist to prevent certain unwanted items from being published.

A comma-separated list of regexes is used to configure items that should not be published.

To configure the publishing blacklist, using your favorite editor open ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml`` or open the Global Studio Configuration Override file **studio-config-override.yaml** located under ``CRAFTER_HOME/data/repos/global/configuration`` that can be accessed from Studio from the ``Main Menu`` under ``Global Config``.

Add the following lines with the regex for the item you wish not to be published. By default, ``.keep`` files are not published by CrafterCMS. Just add a ``,`` then your regex after ``.*/\.keep``:

.. code-block:: yaml
    :caption: *studio-config-override.yaml*

    # Publishing blacklist configuration, items matching regexes on this list will never be published
    studio.configuration.publishing.blacklist.regex: >-
        .*/\.keep

|

Items in the publishing blacklist will not be published but will instead be marked as published and logged (debug level) in the tomcat log, why the item was not published.

   .. code-block:: text

      [DEBUG] 2021-04-22T08:16:01,023 [studio.clockTaskExecutor-42] [deployment.PublishingManagerImpl] | File /static-assets/css/.keep of the site mysite will not be published because it matches the configured publishing blacklist regex patterns.

"""""""
Example
"""""""
Let's take a look at an example.

Create a site using the website editorial blueprint, then create the folder ``mytempimages`` under ``/static-assets/images``.

Say, you do not want files under ``/static-assets/images/mytempimages`` to be published when a user performs a bulk publish or *Approve & Publish* of multiple items from the dashboard. We'll add to the ``studio.configuration.publishing.blacklist.regex`` the regex for items under ``/static-assets/images/mytempimages``

.. code-block:: yaml
    :caption: *studio-config-override.yaml*

    # Publishing blacklist configuration, items matching regexes on this list will never be published
    studio.configuration.publishing.blacklist.regex: >-
        .*/\.keep,\/static-assets\/images\/mytempimages\/.*

|

Save your changes and restart Studio.

Upload an image under ``/static-assets/images/mytempimages``

.. image:: /_static/images/system-admin/studio/publishing-blacklist-example.webp
   :alt: System Administrator - Publishing blacklist example file uploaded that will not be published"
   :width: 30 %
   :align: center

Publish the uploaded image by right-clicking on the image, then select **Approve & Publish**. The **Approve for Publish** dialog will open up. Select **Items should be published now**, then click on the **Submit** button.

After publishing, open the **Sidebar** again and navigate to ``/static-assets/images/mytempimages``. Notice that your file has been marked published.

.. image:: /_static/images/system-admin/studio/publishing-blacklist-example-published.webp
   :alt: System Administrator - Publishing blacklist example file published"
   :width: 45 %
   :align: center

Let's take a look at the tomcat log, notice that it was logged that the file we uploaded will not be published because it is in the publishing blacklist:

.. code-block:: text
   :caption: *Tomcat log of item in publishing blacklist*
   :emphasize-lines: 3

   [INFO] 2021-04-22T12:48:24,903 [studio.clockTaskExecutor-36] [job.StudioPublisherTask] | Starting publishing on environment live for site mysite
   [DEBUG] 2021-04-22T12:48:28,990 [studio.clockTaskExecutor-36] [deployment.PublishingManagerImpl] | Environment is live, transition item to LIVE state mysite:/static-assets/images/mytempimages/26072150271_848c0008f0_o.jpg
   [DEBUG] 2021-04-22T12:48:28,992 [studio.clockTaskExecutor-36] [deployment.PublishingManagerImpl] | File /static-assets/images/mytempimages/26072150271_848c0008f0_o.jpg of the site mysite will not be published because it matches the configured publishing blacklist regex patterns.
   [INFO] 2021-04-22T12:48:29,014 [studio.clockTaskExecutor-36] [job.StudioPublisherTask] | Finished publishing environment live for site mysite

|

|hr|

.. _configuration-files-maximum:

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configuration Files Maximum
^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
	:label: Since
	:version: 4.1.4

To set the maximum size of a project/site configuration file for the `write_configuration <../../../../_static/api/studio.html#tag/configuration/operation/writeConfiguration>`__ API, set the following property:

.. code-block:: yaml
    :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

    # The maximum length of configuration content for the configuration service. Default to 512kB -> 512 * 1024
    studio.configuration.maxContentSize: 524288

|

|hr|

.. _content-type-editor-configuration:

^^^^^^^^^^^^^^^^^^^^^^^^^^
Content Type Editor Config
^^^^^^^^^^^^^^^^^^^^^^^^^^
The Content Type Editor Config configuration file defines what tools are available in the Content Type Editor. Learn more about Content Type Editor configuration in the article :ref:`content-type-editor-config`.

.. toctree::
    :hidden:

    content-type-editor-config


|hr|

.. _dependency-resolver-configuration:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Dependency Resolver Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio extracts and tracks dependencies between content items to assist authors with publishing, workflow, and core content operations like copy and delete. Learn more about configuring the dependency resolver in the article :ref:`dependency-resolver-config`.

.. toctree::
    :hidden:

    dependency-resolver


|hr|

.. _project-tools-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Project Tools Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^
Studio's Project Tools can be configured to list/de-list configuration files. Learn more about this in the article :ref:`project-tools-configuration`.

.. toctree::
    :hidden:

    configurations


|hr|

.. _asset-processing-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Asset Processing Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Asset processing allows you to define transformations for static assets (currently only images), through a series of processor pipelines that are executed when the assets are uploaded to Studio. Learn more about asset processing configuration in the article :ref:`asset-processing-configuration`.

.. toctree::
    :hidden:

    asset-processing-config


|hr|

.. _aws-profile-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^
AWS Profiles Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^
CrafterCMS has many integrations with AWS. Learn how to configure AWS Profiles in the article :ref:`aws-profile-configuration`.

.. toctree::
    :hidden:

    aws-profiles-configuration


|hr|

.. _box-profile-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^
Box Profiles Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
	:label: Until
	:version: 4.2

CrafterCMS integrates with Box. Learn how to configure Box Profiles in the article :ref:`box-profile-configuration`.

.. toctree::
    :hidden:

    box-profiles-configuration


|hr|

.. _webdav-profiles-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
WebDAV Profiles Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
CrafterCMS integrates with WebDAV. Learn how to configure WebDAV Profiles in the article :ref:`webdav-profiles-configuration`.

.. toctree::
    :hidden:

    webdav-profiles-configuration

|hr|

.. _studio-multi-environment-support:

--------------------------------
Studio Multi-environment Support
--------------------------------
To set up a Studio environment, do the following:

#. Create a folder under ``CRAFTER_HOME/data/repos/sites/${site}/sandbox/config/studio`` called ``env``
#. Inside the folder, create a directory called ``myenv`` (or whatever you want to call the environment)
#. Copy the configuration file you want to override in the new environment you are setting up, inside your ``myenv`` folder
   following the folder structure under ``config/studio``.
#. Remember to commit the files copied so Studio will pick it up.
#. In the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` set the
   following property to desired environment:

      .. code-block:: bash
         :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=myenv}

      |

#. Restart Studio

.. note::
    All configuration files under ``CRAFTER_HOME/data/repos/sites/${site}/sandbox/config/studio`` can be overridden by environment, except for the Project Policy Configuration (site-policy-config.xml) and Content Types (items under the ``content-types`` folder).

^^^^^^^
Example
^^^^^^^

Let's take a look at an example of creating a new environment, called ``mycustomenv`` with the ``rte-setup-tinymce5.xml`` file overridden in the new environment:

#. We'll create a folder called ``env`` under ``CRAFTER_HOME/data/repos/site/my-awesome-editorial/sandbox/config/studio``

      .. code-block:: text
         :linenos:
         :emphasize-lines: 12

         data/
           repos/
             sites/
               my-awesome-editorial/
                 sandbox/
                   config/
                     studio/
                       administration/
                       content-types/
                       data-sources/
                       dependency/
                       env/
                       permission-mappings-config.xml
                       role-mappings-config.xml
                       site-config.xml
                       studio_version.xml
                       translation-config.xml
                       ui.xml
                       workflow/

      |

#. Inside the ``env`` folder, create a directory called ``mycustomenv``
#. We will now copy the configuration file for the ``ui.xml`` that we want to override in the new environment we are setting up, inside our ``mycustomenv`` folder, following the folder structure under ``config/studio``. For our example, the ``ui.xml`` file is under ``config/studio/``:

      .. code-block:: text
         :emphasize-lines: 3

         env/
           mycustomenv/
             ui.xml

      |

#. Remember to commit the files copied so Studio will pick it up.

      .. code-block:: bash

         ➜  sandbox git:(master) ✗ git add .
         ➜  sandbox git:(master) ✗ git commit -m "Add updated ui.xml file for mycustomenv"

      |

#. Open the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` and set the value of ``CRAFTER_ENVIRONMENT`` to the
   environment we setup above to make it the active environment:

      .. code-block:: bash
         :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=mycustomenv}

      |

#. Restart Studio. To verify our newly setup environment, open the ``Sidebar`` and click on |projectTools|, then select ``Configuration``. Notice that the active environment ``mycustomenv`` will be displayed on top of the configurations list:

   .. image:: /_static/images/site-admin/env-custom-configurations.webp
      :align: center
      :alt: Active Environment Displayed in Project Config Configuration

.. _studio-access-and-permissions:

----------------------
Access and Permissions
----------------------

To configure access to Crafter Studio beyond adding groups and users, you'll need to configure the system-wide configuration files:

.. _global-role-mappings-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Global Role Mappings Config
^^^^^^^^^^^^^^^^^^^^^^^^^^^
The global role mappings configuration file maps user :ref:`groups <groups-management>` to one or more roles and serves
as the base for every project in your CrafterCMS installation. All role mappings configured here are in addition to what
is configured in the project role mappings.

Role mappings per project are managed within Crafter Studio's UI. See :ref:`project-role-mappings` for more information.

To access the global role mappings config file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/``
then open the file ``global-role-mappings-config.xml``. Remember to restart Crafter so your changes to the file will take effect.

Here's the default global role mappings configuration (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "global-role-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/support/4.x/src/main/webapp/repo-bootstrap/global/configuration/global-role-mappings-config.xml
       :language: xml
       :caption: *CRAFTER_HOME/data/repos/global/configuration/global-role-mappings-config.xml*
       :linenos:


.. raw:: html

   </details>

|

"""""""""""""""""""
Default Global Role
"""""""""""""""""""
CrafterCMS comes with a predefined global role ``system_admin`` out of the box.

Users with the ``system_admin`` role have access to everything in the CMS such as all the modules in the Main Menu for managing users, groups, etc., all the sites and configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow.

See :ref:`global-permission-mappings-config` for more information on all items accessible for the ``system_admin`` role.

|

|hr|

.. _global-permission-mappings-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Global Permission Mappings Config
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The global permission mappings configuration file lets you configure the permissions to a role globally for the entire application.

Permissions per project are managed within Crafter Studio's UI. See :ref:`permission-mappings` for more information on project permissions.

Here's the default global permissions configuration (click on the triangle on the left to expand/collapse). It contains the permissions mappings for the roles defined in the :ref:`global role mappings configuration <global-role-mappings-config>` file. To access the file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/`` then open the file ``global-permission-mappings-config.xml``. Remember to restart CrafterCMS so your changes to the file will take effect.

.. raw:: html

   <details>
   <summary><a>Sample "global-permission-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/support/4.x/src/main/webapp/repo-bootstrap/global/configuration/global-permission-mappings-config.xml
       :language: xml
       :caption: *CRAFTER_HOME/data/repos/global/configuration/global-permission-mappings-config.xml*
       :linenos:


.. raw:: html

   </details>

|

"""""""""""""""""""""""
Permission Descriptions
"""""""""""""""""""""""
.. include:: /includes/available-permissions-system-scope.rst

.. _global-menu-config:

------------------
Global Menu Config
------------------
The Global Menu Config configuration file defines what modules are available for administration use when clicking on the ``Navigation Menu`` from the top bar.

To see the default modules available from the ``Navigation Menu``, see :ref:`navigating-main-menu`

Here is the default Global Menu Config configuration file (click on the triangle on the left to expand/collapse).
To access the file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/``and then
open the file ``global-menu-config.xml``. Remember to restart Crafter so your changes to the file will take effect.

.. raw:: html

   <details>
   <summary><a>Sample "global-menu-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/support/4.x/src/main/webapp/repo-bootstrap/global/configuration/global-menu-config.xml
   :caption: *CRAFTER_HOME/data/repos/global/configuration/global-menu-config.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|

|hr|

.. _studio-security:

--------
Security
--------

--------------
Authentication
--------------
Users are authenticated by Studio through the internal database by default. CrafterCMS can be configured so that users are authenticated using an external authentication protocol such as Lightweight Directory Access Protocol (LDAP), Security Assertion Markup Language (SAML), or integrate with any Single-Sign-On (SSO) solution that can provide headers to Studio to indicate successful authentication.

Here's a list of security providers supported by CrafterCMS for accessing the repository:

- :ref:`Studio SAML security <crafter-studio-configure-studio-saml>` |enterpriseOnly|
- :ref:`Header-Based (use when authenticating via headers) <crafter-studio-configure-header-based-auth>` |enterpriseOnly|
- :ref:`LDAP (users are imported from LDAP into the database) <crafter-studio-configure-ldap>` |enterpriseOnly|
- Internal database (users are stored in database)

To configure an external authentication method, please follow one of the guides below:

When using an external authentication method, user accounts are automatically created in the internal database upon each user's first successful login, using the attributes from the responses received. Users added to the internal database after the user's first successful login through external authentication are marked as **Externally Managed**.

.. _configure-authentication-chain:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Authentication Chain
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
CrafterCMS supports multiple security providers and allows configuration of multiple authentication providers in a chain that are then iterated through until either the user is authenticated and granted access or authentication fails and an HTTP 401 Unauthorized is returned to the user. This allows Studio to support multiple security providers that appears like a single authentication module to users.

The following authentication providers can be configured in a chain:

    - Headers
    - LDAP
    - Internal database

.. note:: SAML2 authentication cannot be configured in a chain. SAML2 authentication is a standalone authentication provider.

When an authentication chain is configured when a user logs in, Studio will try to authenticate the user using the first security provider in the chain as defined in the ``studio-config-override.yaml`` file. If authentication fails, it will then move on to the next authentication provider in the list and try to authenticate the user again. It will continue moving on to the next security provider in the chain until the user is authenticated or the authentication fails.

To set up the authentication chain, open the file ``studio-config-override.yaml`` under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension``. Another way to access the ``studio-config-override.yaml`` file is by clicking on the |mainMenu| **Navigation Menu** from the context nav in Studio, then clicking on ``Global Config``.

Below is a sample configuration for the authentication chain. There are four authentication providers in the example below: (1) Headers Authentication, (2) LDAP1, (3) LDAP2 (4) Internal Database.

.. code-block:: yaml
    :linenos:

      # Studio authentication chain configuration
      studio.authentication.chain:
      # Authentication provider type
      - provider: HEADERS
      # Authentication via headers enabled
        enabled: true
        # Authentication header for secure key
        secureKeyHeader: secure_key
        # Authentication headers secure key that is expected to match secure key value from headers
        # Typically this is placed in the header by the authentication agent
        secureKeyHeaderValue: secure
        # Authentication header for username
        usernameHeader: username
        # Authentication header for first name
        firstNameHeader: firstname
        # Authentication header for last name
        lastNameHeader: lastname
        # Authentication header for email
        emailHeader: email
        # Authentication header for groups: comma separated list of groups
        #   Example:
        #   site_author,site_xyz_developer
        groupsHeader: groups
        # Enable/disable logout for headers authenticated users (SSO)
        # logoutEnabled: false
        # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
        # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
        # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
        # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}
      # Authentication provider type
      - provider: LDAP
        # Authentication via LDAP enabled
        enabled: false
        # LDAP Server url
        ldapUrl: ldap://localhost:389
        # LDAP bind DN (user)
        ldapUsername: cn=Manager,dc=my-domain,dc=com
        # LDAP bind password
        ldapPassword: secret
        # LDAP base context (directory root)
        ldapBaseContext: dc=my-domain,dc=com
        # LDAP username attribute
        usernameLdapAttribute: uid
        # LDAP first name attribute
        firstNameLdapAttribute: cn
        # LDAP last name attribute
        lastNameLdapAttribute: sn
        # Authentication header for email
        emailLdapAttribute: mail
        # LDAP groups attribute
        groupNameLdapAttribute: crafterGroup
        # LDAP groups attribute name regex
        groupNameLdapAttributeRegex: .*
        # LDAP groups attribute match index
        groupNameLdapAttributeMatchIndex: 0
      # Authentication provider type
      - provider: LDAP
        # Authentication via LDAP enabled
        enabled: false
        # LDAP Server url
        ldapUrl: ldap://localhost:390
        # LDAP bind DN (user)
        ldapUsername: cn=Manager,dc=my-domain,dc=com
        # LDAP bind password
        ldapPassword: secret
        # LDAP base context (directory root)
        ldapBaseContext: dc=my-domain,dc=com
        # LDAP username attribute
        usernameLdapAttribute: uid
        # LDAP first name attribute
        firstNameLdapAttribute: cn
        # LDAP last name attribute
        lastNameLdapAttribute: sn
        # Authentication header for email
        emailLdapAttribute: mail
        # LDAP groups attribute
        groupNameLdapAttribute: crafterGroup
        # LDAP groups attribute name regex
        groupNameLdapAttributeRegex: .*
        # LDAP groups attribute match index
        groupNameLdapAttributeMatchIndex: 0
      # Authentication provider type
      - provider: DB
        # Authentication via DB enabled
        enabled: true

|

In the configuration above, when a user tries to authenticate, the user's credentials will be passed first to the headers authentication provider. If the authentication succeeds, the processing in the chain is done and the user is allowed to proceed. If the authentication fails, the user credentials will then be passed to LDAP1. If authentication is successful, processing in the chain is done, otherwise, the user credentials are then passed on to LDAP2. LDAP2 will then try to authenticate user. If successful, processing in the chain is done, otherwise, the user credentials are then passed to the final provider in the chain, the internal database. The final provider in the chain then determines whether the user is successfully authenticated or rejected and sent an HTTP 401 Unauthorized message. Below is a diagram showing the authentication chain process using the above configuration:

.. image:: /_static/images/system-admin/auth-chain-example.webp
    :alt: Static Assets - Example Authentication Chain Process
    :width: 55%
    :align: center

.. _crafter-studio-configure-studio-saml:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Studio SAML2 Configuration |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
	:label: Since
	:version: 4.0.3

Crafter Studio can be configured to support SAML2 SSO out of the box without using any additional plugins.

.. important::
   *This document only applies to* **CrafterCMS version 4.0.3 and later** |br|
   *Please see* :ref:`here <crafter-studio-configure-studio-saml-up-to-4-0-2>` *for version 4.0.2 and earlier.*

""""""""""""
Requirements
""""""""""""
#. A SAML2-compatible Identity Provider (IdP) properly configured; this configuration will not be covered here
#. A private key and certificate. This can be generated like so:

    ``openssl req -newkey rsa:2048 -nodes -keyout rp-private.key -x509 -days 365 -out rp-certificate.crt``

    Take note of the values of the following options used to generate your key and certificate that will be used later for configuring Studio:

    * **keyout**: The value used for this option wil be used in the ``studio.security.saml.rp.privateKey.location`` property
    * **out**: The value used for this option will be used in the ``studio.security.saml.rp.certificate.location`` property

.. note::
   ``IdP`` is the asserting party and ``SP`` is the relying party (Studio)

"""""""""
Configure
"""""""""
To configure Studio SAML2, in your Authoring installation, we need to enable SAML security then we'll setup the required SAML configuration properties.

To enable SAML security, go to ``CRAFTER_HOME/bin``, open the ``crafter-setenv.sh`` file, and uncomment the line ``export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity``:

.. code-block:: sh
   :caption: *CRAFTER_HOME/bin/crafter-setenv.sh*

   # -------------------- Spring Profiles --------------------
   ...
   # Uncomment to enable Crafter Studio SAML2 security
   export SPRING_PROFILES_ACTIVE=crafter.studio.samlSecurity
   # For multiple active spring profiles, create comma separated list

|

Next, we'll set up SAML configuration properties. Go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add/uncomment the following lines to ``studio-config-override.yaml`` (of course, make any appropriate configuration changes according to your system):

.. code-block:: yaml
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
   :linenos:

   ###############################################################
   ##               SAML Security                               ##
   ###############################################################
   # SAML attribute name for email
   # studio.security.saml.attributeName.email: email
   # SAML attribute name for first name
   # studio.security.saml.attributeName.firstName: givenName
   # SAML attribute name for last name
   # studio.security.saml.attributeName.lastName: surname
   # SAML attribute name for group
   # studio.security.saml.attributeName.group: Role
   ###############################################################
   ##         SAML Security Relying Party (SP) configuration    ##
   ###############################################################
   # {baseUrl} and {registrationId} are pre-defined macros and should not be modified
   # SAML relying party (SP) registration ID. {registrationId} macro will be replaced with this value
   # studio.security.saml.rp.registration.id: SSO
   # SAML relying party (SP) entity ID
   # studio.security.saml.rp.entity.id: "{baseUrl}/saml/metadata"
   # SAML relying party (SP) login processing url. Must end with {registrationId}
   # studio.security.saml.rp.loginProcessingUrl: "/saml/{registrationId}"
   # SAML relying party (SP) assertion consumer service location. Must end with {registrationId}
   # studio.security.saml.rp.assertion.consumer.service.location: "{baseUrl}/saml/{registrationId}"
   # SAML relying party (SP) assertion consumer service biding (POST or REDIRECT)
   # studio.security.saml.rp.assertion.consumer.service.binding: POST
   # SAML logout URL without prefix /studio
   # studio.security.saml.rp.logoutUrl: /saml/logout
   # SAML relying party (SP) single logout service location
   # studio.security.saml.rp.logout.service.location: "{baseUrl}/saml/logout"
   # SAML relying party (SP) logout service binding (POST or REDIRECT)
   # studio.security.saml.rp.logout.service.binding: POST
   # SAML relying party (SP) metadata endpoint
   # studio.security.saml.rp.metadata.endpoint: /saml/metadata
   # SAML relying party (SP) private key location
   # studio.security.saml.rp.privateKey.location: classpath:crafter/studio/extension/saml/rp-private.key
   # SAML relying party (SP) certificate location
   # studio.security.saml.rp.certificate.location: classpath:crafter/studio/extension/saml/rp-certificate.crt
   ###############################################################
   ##      SAML Security Asserting Party (IdP) configuration    ##
   ###############################################################
   # SAML asserting party (IdP) entity ID:
   # studio.security.saml.ap.entityId: https://ap.example.org/ap-entity-id
   # SAML asserting party (IdP) single sign on service location
   # studio.security.saml.ap.single.signOn.service.location: https://ap.example.org/sso/saml
   # SAML asserting party (IdP) single sign on service binding (POST or REDIRECT)
   # studio.security.saml.ap.single.signOn.service.binding: POST
   # SAML asserting party (IdP) logout service location
   # studio.security.saml.ap.single.logout.service.location: https://ap.example.org/slo/saml
   # SAML asserting party (IdP) logout service binding (POST or REDIRECT)
   # studio.security.saml.ap.single.logout.service.binding: POST
   # SAML asserting party (IdP) want authn request signed
   # studio.security.saml.ap.want.authn.request.signed: false
   # SAML asserting party (IdP) certificate location
   # studio.security.saml.ap.certificate.location: classpath:crafter/studio/extension/saml/idp-certificate.crt
   ###############################################################
   ##            SAML Security other configuration              ##
   ###############################################################
   # SAML Web SSO profile options: authenticate the user silently
   # studio.security.saml.webSSOProfileOptions.passive: false
   # SAML Web SSO profile options: force user to re-authenticate
   # studio.security.saml.webSSOProfileOptions.forceAuthn: false

|

where

- ``studio.security.saml.enabled``: Indicates if SAML2 is enabled or not
- The following are attributes that Studio expects from the Identity Provider:

     - ``studio.security.saml.attributeName.email``
     - ``studio.security.saml.attributeName.firstName``
     - ``studio.security.saml.attributeName.lastName``
     - ``studio.security.saml.attributeName.group``

- ``studio.security.saml.rp.privateKey.location``: The path of the relying party (SP) private key in the classpath
- ``studio.security.saml.rp.certificate.location``: The path of the relying party (SP) certificate in the classpath
- ``studio.security.saml.ap.entityId``: The asserting party (IdP) entity ID
- ``studio.security.saml.ap.single.signOn.service.location``: The asserting party (IdP) single sign on URL
- ``studio.security.saml.ap.single.logout.service.location``: The asserting party (IdP) single logout URL
- ``studio.security.saml.ap.certificate.location``:  The path of the asserting party (IdP) certificate in the classpath
- ``studio.security.saml.webSSOProfileOptions.passive``: Indicates if user is authenticated silently
- ``studio.security.saml.webSSOProfileOptions.forceAuthn``: Indicates if user will be forced to re-authenticate

The classpath is located in your Authoring installation, under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes``. As shown in the example above, the relying party private key is located in your Authoring installation under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/saml`` folder.

.. code-block:: yaml
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

   # SAML relying party (SP) private key location
   studio.security.saml.rp.privateKey.location: classpath:crafter/studio/extension/saml/rp-private.key

|

Restart your Authoring installation after configuring the above.

|hr|

.. _crafter-studio-configure-header-based-auth:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Header-Based Authentication |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Studio can integrate with any authentication system that sends custom HTTP headers containing information that will be used to authenticate the user in Studio. This section details how to set up Studio for header-based authentication.

""""""""""""""""""""""""""""""""""""""""""""""""
Configure Studio for Header-Based Authentication
""""""""""""""""""""""""""""""""""""""""""""""""
Configuring Studio for header-based authentication is very simple: in your Authoring installation, go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and add the following lines to ``studio-config-override.yaml`` (of course, make any appropriate configuration changes according to your system):

.. code-block:: properties
    :linenos:
    :emphasize-lines: 6,8,13,15,17,19,23,25

    # Studio authentication chain configuration
    # studio.authentication.chain:
      # Authentication provider type
      # - provider: HEADERS
        # Authentication via headers enabled
        # enabled: true
        # Authentication header for secure key
        # secureKeyHeader: secure_key
        # Authentication headers secure key that is expected to match secure key value from headers
        # Typically this is placed in the header by the authentication agent
        # secureKeyHeaderValue: secure
        # Authentication header for username
        # usernameHeader: username
        # Authentication header for first name
        # firstNameHeader: firstname
        # Authentication header for last name
        # lastNameHeader: lastname
        # Authentication header for email
        # emailHeader: email
        # Authentication header for groups: comma separated list of sites and groups
        #   Example:
        #   site_author,site_xyz_developer
        # groupsHeader: groups
        # (Optional) All authentication header values are in this JWT header's claims.
        # jwtAuthTokenHeader: x-crafter-oidc-data
        # Enable/disable logout for headers authenticated users (SSO)
        # logoutEnabled: false
        # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
        # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
        # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
        # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}

The attribute ``enabled`` enables/disables headers authentication; make sure this is set to **true** for header-based authentication |br|

The ``secure_key`` attribute is a secret shared between the authentication agent and Studio via this header. Note that this ``secure_key`` is
**required** and header-based authentication will not proceed unless the ``secure_key`` sent to Studio matches this configuration.

Upon matching the ``secure_key`` header, Studio will then look for the principal. This can come in one of two formats:

#. A set of loose headers indicate the principal's attributes: ``username``, ``firstname``, ``lastname``, ``email``, and ``groups``; or
#. A JWT-wrapped principal's attributes as specified by ``x-crafter-oidc-data``

Depending on your authentication agent, configure Studio to look for either the loose attributes or JWT.

~~~~~~~~~~~~~~~~~~
Configuring Logout
~~~~~~~~~~~~~~~~~~
The **Sign out** button link is disabled/hidden by default when header-based authentication is enabled.

To enable **Sign out** for users signed in using header-based authentication, change the following lines (as described from the above configuration) in your ``studio-config-override.yaml`` file (of course, make any appropriate configuration changes according to your system):

.. code-block:: yaml

    # Enable/disable logout for headers authenticated users (SSO)
    # logoutEnabled: false
    # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
    # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
    # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
    # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}

|

|hr|

.. _crafter-studio-configure-ldap:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure LDAP Authentication |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To configure LDAP authentication, in your Authoring installation, go to ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` and uncomment the
following lines to the ``studio-config-override.yaml`` file.

.. note:: The values for the parameters listed below are just examples. Remember to make any appropriate configuration changes according to your directory service in use.

.. code-block:: properties
    :linenos:
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

    # Studio authentication chain configuration
    studio.authentication.chain:
      # Authentication provider type
      - provider: LDAP
        # Authentication via LDAP enabled
        enabled: true
        # LDAP Server url
        ldapUrl: ldap://localhost:389
        # LDAP bind DN (user)
        ldapUsername: cn=Manager,dc=my-domain,dc=com
        # LDAP bind password
        ldapPassword: secret
        # LDAP base context (directory root)
        ldapBaseContext: dc=my-domain,dc=com
        # LDAP username attribute
        usernameLdapAttribute: uid
        # LDAP first name attribute
        firstNameLdapAttribute: cn
        # LDAP last name attribute
        lastNameLdapAttribute: sn
        # LDAP email attribute
        emailLdapAttribute: mail
        # LDAP groups attribute
        groupNameLdapAttribute: crafterGroup
        # LDAP groups attribute name regex
        groupNameLdapAttributeRegex: .*
        # LDAP groups attribute match index
        groupNameLdapAttributeMatchIndex: 0

|

Some notes on the properties above:

- ``enabled`` enables/disables LDAP authentication, make sure this is set to **true** for LDAP authentication
- ``serverUrl`` is just the URL where the LDAP server is listening for requests.
- ``bindDN`` and ``bindPassword`` are basically the credentials used to connect initially to the LDAP server.
- ``baseContext`` is the LDAP tree root where the user entries can be located.
- ``username``, ``firstName``, ``lastName`` and ``email`` are basic user attributes.
- ``groupName`` indicates the groups the user belongs to (can have multiple values). You can specify a regex to extract the group name of a user.

Studio will then do a query against the LDAP server whenever a user attempts to log in and the user is not yet in the DB. If there's a match in LDAP, the user is
created in the database with the imported LDAP attributes, and finally added to the groups specified in LDAP.

Also, please note that Studio needs all the attributes listed in the config to be present in the LDAP user's attributes, otherwise, Studio is not able to authenticate the user. When an attribute is missing, an error message will be displayed in the login screen: ``A system error has occurred. Please wait a few minutes or contact an administrator``. Please look at the tomcat log to check which attribute was not found. Here's an example log:

.. code-block:: none

    [WARN] 2017-10-11 12:42:57,487 [http-nio-8080-exec-2] [security.DbWithLdapExtensionSecurityProvider] | No LDAP attribute crafterGroup found for username jbloggs

|

Here are a few things to take note of when configuring LDAP authentication in Studio:

Make sure that at least one of the **groupName** attribute of the LDAP user exists in Studio and has Roles and Permission setup. If there is no **groupName** attribute setup in Studio with Roles and Permissions, please make sure that the system administrator assigns a role to at least one group in Studio so the user can access the site, otherwise, once the user gets into the **Sites** screen and tries to Preview the site or view the dashboard, the user will get a notification that the site is invalid.

    .. image:: /_static/images/system-admin/ldap-user-group-no-role-assigned.webp
        :alt: System Admin LDAP Config - LDAP user group attribute not assigned to a role
        :width: 25%
        :align: center

|

To assign a role to a group, please follow the guide :ref:`project-role-mappings`. To assign permissions to a role, please see :ref:`permission-mappings`

For an example of setting up LDAP, see :ref:`setting-up-simple-ldap-server`

|hr|

-------------
Authorization
-------------
.. _project-role-mappings:

^^^^^^^^^^^^^
Role Mappings
^^^^^^^^^^^^^
Users are allowed to perform actions on the items that they have been granted access to based on the permissions granted
to the role they have been assigned to. Note that site members have read permission to the entire project/site
regardless of the role that they are assigned.

The role mappings configuration file maps user groups to one or more roles which then get a set of permissions within a project.

To modify the role mappings, click on |projectTools| from the bottom of the *Sidebar*, then click on **Configuration**
and select **Role Mappings** from the list.

.. image:: /_static/images/site-admin/config-open-role-mappings.webp
    :alt: Configurations - Open Role Mappings
    :width: 40%
    :align: center

To configure the role mappings for groups created in CrafterCMS that need global permissions see :ref:`global-role-mappings-config`

""""""
Sample
""""""
Here's a sample Role Mappings Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample role mappings configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/support/4.x/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-role-mappings-config.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/role-mappings-config.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|

"""""""""""
Description
"""""""""""
    ``/role-mappings/groups/group@name``
        Name of the user group

    ``/role-mappings/groups/role``
        Name of authoring role that the group will map to

"""""""""""""""""""""
Default Project Roles
"""""""""""""""""""""
CrafterCMS comes with predefined roles out of the box for projects.
Here's a list of predefined roles for projects:

* **admin**: Users with the ``admin`` role have access to project configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow

* **developer**: Users with the ``developer`` role have access to project configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow

* **reviewer**: Users with the ``reviewer`` role have the ability to approve and reject workflow. They also have access to a number of actions in the dashboard that are not available to content contributors (users with the role ``author``), including ``Pending Approval`` and ``Scheduled Publish``. They do not have access to edit content.

* **publisher**: Users with the ``publisher`` role have the ability to approve and reject workflow. They also have access to a number of actions in the dashboard that are not available to content contributors (users with the role ``author``), including ``Pending Approval`` and ``Scheduled Publish``. In addition, they also have access to create, edit, and submit content like the ``author`` role.

* **author**: Users with the role ``author`` have access to create, edit and submit content

See :ref:`permission-mappings` for more information on all items accessible for each role in a project.

|hr|

.. _permission-mappings:

^^^^^^^^^^^^^^^^^^^
Permission Mappings
^^^^^^^^^^^^^^^^^^^
The permission mappings configuration file allows you to assign permissions to folders and objects in a project/site giving specific Roles rights to the object. The permission mappings config file contains the permissions mappings for the roles defined in the role mappings config file. When applying permissions to Roles, rights are granted by adding permissions inside the tag ``<allowed-permissions>``. The absence of permissions means the permission is denied. Rules have a regex expression that governs the scope of the permissions assigned. A list of available permissions that can be granted to Roles is available after the sample configuration file.

Permissions are defined per:
    project/site > role > rule

For example, to grant the role component_author the ability to read/write
components and read-only to everything else:

.. code-block:: xml
      :linenos:

      <role name="component_author">
        <rule regex="/site/website/.*">
          <allowed-permissions>
            <permission>content_read</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/site/components/.*">
          <allowed-permissions>
            <permission>content_read</permission>
            <permission>content_write</permission>
            <permission>content_create</permission>
            <permission>folder_create</permission>
          </allowed-permissions>
        </rule>
        <rule regex="/static-assets/.*">
          <allowed-permissions>
            <permission>content_read</permission>
          </allowed-permissions>
        </rule>
      </role>

|

To modify/view the permission mappings for your project/site in Studio, click on |projectTools| at the bottom of the *Sidebar*, then click on **Configurations** and select **Permissions Mapping** from the list.

.. image:: /_static/images/site-admin/config-open-permission-mappings.webp
    :alt: Configurations - Open Permission Mappings
    :width: 40%
    :align: center

Note that permissions assigned is a union, so a user can perform the action as long as:

- The list of permissions contains the requested ACTION.
- OR the list of permissions contains "*"

To configure the permissions to a role globally for the entire application, see :ref:`global-permission-mappings-config`.

""""""
Sample
""""""
Here's a sample Permission Mappings Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "permission-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/support/4.x/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-permission-mappings-config.xml
       :language: xml
       :linenos:


.. raw:: html

   </details>

|

where:

- ``/permissions/site/role@name``
  Role name
- ``/permissions/site/role/rule@regex``
  Regular expression to filter paths where permission is applied.
- ``/permissions/site/role/rule/allowed-permissions/permission``
  Allowed permission for role and rule (possible values given in the table above)

"""""""""""""""""""""""""""""""""
System (Global) Scope Permissions
"""""""""""""""""""""""""""""""""
.. include:: /includes/available-permissions-system-scope.rst

"""""""""""""""""""""""""
Project Scope Permissions
"""""""""""""""""""""""""
.. include:: /includes/available-permissions-project-scope.rst

""""""""""""""""""""""
Path Scope Permissions
""""""""""""""""""""""
.. include:: /includes/available-permissions-path-scope.rst

|hr|

----------------------------
Other Security Configuration
----------------------------
.. _studio-password-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Studio Password Requirements
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Password requirements validation allows the admin to setup rules that ensures users create passwords based on an organization’s password security policy.

Crafter Studio uses `zxcvbn <https://github.com/dropbox/zxcvbn>`__ for password strength management.

.. version_tag::
	:label: Since
	:version: 4.0.3

|

The password strength configured here is displayed to the user when resetting a password or creating a user.

.. image:: /_static/images/system-admin/password-requirements.webp
   :alt: System Administrator - Password Requirements Display
   :align: center
   :width: 55%

|

To configure the password strength, click on |mainMenu| **Main Menu** then click on ``Global Config``.
Scroll to the section ``Security`` and change the value of ``studio.security.passwordRequirements.minimumComplexity``
to desired minimum password complexity required:

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   # Password requirements minimum complexity
   # This is based on https://github.com/dropbox/zxcvbn
   # The minimum complexity corresponds to the password score
   # You can try this out here https://lowe.github.io/tryzxcvbn/
   #  score      # Integer from 0-4 (useful for implementing a strength bar)
   #  0 # too guessable: risky password. (guesses < 10^3)
   #  1 # very guessable: protection from throttled online attacks. (guesses < 10^6)
   #  2 # somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
   #  3 # safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
   #  4 # very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
   # The default value is 3
   studio.security.passwordRequirements.minimumComplexity: 3

|

Crafter Studio's default minimum password complexity required is set to 3 (which translate to a score
of 80 in the UI), and until the user setting/changing the password has met the minimum required,
the ``Submit`` button will not be enabled. Also, once the minimum password strength score has been
reached, the score will be displayed in green.

.. image:: /_static/images/system-admin/password-reqts-80-score.webp
    :alt: System Administrator - Password Requirements Display Score 80
    :align: center
    :width: 35%

|

Below, are some of the messages displayed as a user is inputting a new password:

.. image:: /_static/images/system-admin/password-reqts-20-score.webp
    :alt: System Administrator - Password Requirements Display Score 20
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-40-score.webp
    :alt: System Administrator - Password Requirements Display Score 40
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-60-score.webp
    :alt: System Administrator - Password Requirements Display Score 60
    :align: center
    :width: 35%

|

.. image:: /_static/images/system-admin/password-reqts-100-score.webp
    :alt: System Administrator - Password Requirements Display Score 100
    :align: center
    :width: 35%

|

|hr|

.. _randomize-admin-password:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Randomize Authoring's "admin" Password for CrafterCMS Fresh Install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
CrafterCMS gives you the option to randomize the **admin** password on a fresh install. To randomize the **admin** password, before starting CrafterCMS for the very first time, in your Authoring installation, go to  the following folder: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/`` and add the following to the ``studio-config-override.yaml`` file:

.. code-block:: yaml
       :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
       :linenos:

       ##################################################
       ##                   Security                   ##
       ##################################################
       # Enable random admin password generation
       studio.db.initializer.randomAdminPassword.enabled: false
       # Random admin password length
       studio.db.initializer.randomAdminPassword.length: 16
       # Random admin password allowed chars
       studio.db.initializer.randomAdminPassword.chars: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_=+-/

To enable the random admin password generation, just set ``studio.db.initializer.randomAdminPassword.enabled`` to ``true`` and specify your desired password length and allowed characters for the password. Save the file after making your changes.

After saving the ``studio-config-override.yaml`` file, start CrafterCMS. You'll then need to look at the authoring tomcat log, and search for the following string to get the random password generated for user **admin**: `*** Admin Account Password:`

Here's a sample password generated for the admin as listed in the Tomcat log:

    ``INFO: *** Admin Account Password: "WXOIK$O$yGixio2h" ***``

You can now log in as the user **admin** using the randomly generated password listed in the Tomcat log.

|hr|

.. _studio-timeout:

^^^^^^^^^^^^^^^
Studio Timeouts
^^^^^^^^^^^^^^^
.. _changing-session-timeout:

""""""""""""""""""""""""""""
Changing the Session Timeout
""""""""""""""""""""""""""""
CrafterCMS has configurable timeouts for session lifetime and session inactivity.

Session lifetime timeout is the amount of time a session is valid before requiring the user to re-authenticate.

Session inactivity timeout is the amount of time of user inactivity before requiring the user to re-authenticate.

In some cases, some operations in CrafterCMS may last longer than the user session inactivity timeout settings.
For this scenario, the session inactivity timeout will need to be modified to allow the operation to finish
without the session timing out. Also, you may want to change the timeouts from the default settings.

Here's a summary of the session timeouts available in CrafterCMS:

.. list-table::
   :widths: 1 1 8
   :header-rows: 1

   * - Timeout Name
     - Default Value |br|
       *(in minutes)*
     - Description
   * - ``sessionTimeout``
     - 480
     - **Studio session lifetime timeout** |br|
       *Location:* |br|
       *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml* |br| |br|
       The amount of time a session is valid counting from when a user is logged in. |br|
       After this amount of time,a session timeout will be forced in the application layer even if the user is active.
   * - ``inactivityTimeout``
     - 30
     - **Studio session inactivity timeout** |br|
       *Location:* |br|
       *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml* |br| |br|
       The amount of time of user inactivity, tracked by Studio, before requiring the user to re-authenticate. |br|
       Remember to set the ``inactivityTimeout`` value less than the ``session-timeout`` value in the ``web.xml`` file. |br|
       The session inactivity time tracked by Studio is different from the session inactivity time tracked by Tomcat. |br|
       This is because there are some API calls that are not tracked as active by Studio.
   * - ``session-timeout``
     - 30
     - **Tomcat session timeout** |br|
       *Location:* |br|
       *CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml* |br| |br|
       The amount of time of user inactivity, tracked by Tomcat, before requiring the user to re-authenticate. |br|
       This value must be greater than or equal to ``inactivityTimeout`` since that timeout can and does kick in |br|
       before this one.

"""""""""""""""""""""""""""""""
Change Session Lifetime Timeout
"""""""""""""""""""""""""""""""
To change the session lifetime timeout, in your
``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``,
change the value for ``studio.security.sessionTimeout`` to desired amount of time the session is valid
in minutes for users.

.. code-block:: properties

   # Time in minutes after which active users will be required to login again
   # studio.security.sessionTimeout: 480

|

Make sure to stop and **restart Studio** after making your changes.

"""""""""""""""""""""""""""""""""
Change Session Inactivity Timeout
"""""""""""""""""""""""""""""""""
There are two timeouts you can configure for the session inactivity timeout as described in the above table.

- ``session-timeout`` in the Tomcat ``web.xml`` file
  This is the default Tomcat timeout for handling idle connections (inactive)
- ``inactivityTimeout`` in the Studio override configuration file
  This is the Studio session inactivity timeout

To change the session inactivity timeout, follow the instructions below:

#. In your ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``,
   change the value for ``studio.security.inactivityTimeout`` to set the amount of time in minutes the amount of
   time a user can be inactive before the user's session times out.

   .. code-block:: properties

      # Time in minutes after which inactive users will be required to login again
      # studio.security.inactivityTimeout: 30

   |

#. In your ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml`` file, change the value in
   between the ``session-timeout`` tags to desired amount of time the session will exist in minutes:

   .. code-block:: xml

      <session-config>
        <session-timeout>30</session-timeout>
        <tracking-mode>COOKIE</tracking-mode>
	  </session-config>

   |


Remember to keep the Studio session inactivity timeout ``inactivityTimeout`` from the ``studio-config-override.yaml`` file less than the Tomcat ``session-timeout`` from the ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/web.xml`` file.

Make sure to stop and **restart Studio after making your changes**.

You can also change the Studio session timeouts from the |mainMenu| **Main Menu** in Studio under ``Global Config``

|

|hr|

.. _studio-cipher-configuration:

^^^^^^^^^^^^^^^^^^^^
Cipher Configuration
^^^^^^^^^^^^^^^^^^^^
.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ##################################################
    ##                   Security                   ##
    ##################################################
    # Time in minutes after which active users will be required to login again
    # studio.security.sessionTimeout: 480
    # Time in minutes after which inactive users will be required to login again
    # studio.security.inactivityTimeout: 30
    #
    # Salt for encrypting
    studio.security.cipher.salt: ${env:CRAFTER_SYSTEM_ENCRYPTION_SALT}
    # Key for encrypting
    studio.security.cipher.key: ${env:CRAFTER_SYSTEM_ENCRYPTION_KEY}

    # The key used for encryption of configuration properties
    studio.security.encryption.key: ${env:CRAFTER_ENCRYPTION_KEY}
    # The salt used for encryption of configuration properties
    studio.security.encryption.salt: ${env:CRAFTER_ENCRYPTION_SALT}

    # The path of the folder used for the SSH configuration
    studio.security.ssh.config: ${env:CRAFTER_SSH_CONFIG}

    # Defines name used for environment specific configuration. It is used for environment overrides in studio. Default value is default.
    studio.configuration.environment.active: ${env:CRAFTER_ENVIRONMENT}

|

|hr|

.. _studio-access-tokens:

^^^^^^^^^^^^^
Access Tokens
^^^^^^^^^^^^^
.. version_tag::
	:label: Since
	:version: 4.0.0

The following section of Studio's configuration overrides allows you to configure settings for the Studio access tokens.
Access tokens can then be used to invoke `Crafter Studio's REST APIs <../../../_static/api/studio.html>`_ from the out
of the box UI as well as any customized JavaScript, CURL commands, or used in :ref:`crafter-cli` to perform operations on Studio.

Studio access tokens uses JWT tokens for authentication. The following environment variables are used to customize the
default behavior of the JWT token that is used.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ##################################################
    ##               Access Tokens                  ##
    ##################################################

    # Issuer for the generated access tokens
    studio.security.token.issuer: ${env:STUDIO_TOKEN_ISSUER}
    # List of accepted issuers for validation of access tokens (separated by commas)
    studio.security.token.validIssuers: ${env:STUDIO_TOKEN_VALID_ISSUERS}
    # The audience for generation and validation of access tokens (if empty the instance id will be used)
    studio.security.token.audience: ${env:STUDIO_TOKEN_AUDIENCE}
    # Time in minutes for the expiration of the access tokens
    studio.security.token.timeout: ${env:STUDIO_TOKEN_TIMEOUT}
    # Password for signing the access tokens (needs to be equal or greater than 512 bits in length)
    studio.security.token.password.sign: ${env:STUDIO_TOKEN_SIGN_PASSWORD}
    # Password for encrypting the access tokens
    studio.security.token.password.encrypt: ${env:STUDIO_TOKEN_ENCRYPT_PASSWORD}
    # Name of the cookie to store the refresh token
    studio.security.token.cookie.name: ${env:STUDIO_REFRESH_TOKEN_NAME}
    # Time in seconds for the expiration of the refresh token cookie
    studio.security.token.cookie.maxAge: ${env:STUDIO_REFRESH_TOKEN_MAX_AGE}
    # Indicates if the refresh token cookie should be secure (should be true for production environments behind HTTPS)
    studio.security.token.cookie.secure: ${env:STUDIO_REFRESH_TOKEN_SECURE}

where:

- ``STUDIO_TOKEN_ISSUER``, ``STUDIO_TOKEN_VALID_ISSUERS``, ``STUDIO_TOKEN_AUDIENCE`` |br|
  These variables are used in the JWT claims set. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1 for more
  information on JWT claims set.

- ``STUDIO_TOKEN_TIMEOUT`` |br|
  This variable sets the expiration of the JWT token in minutes (default is 5 minutes). The expiration value is also
  injected into the JWT claims when a token is published. This cannot be changed after the token is published.
  After the expiration time, the token is invalid and a new token must be published to use for API calls. (This can be
  done automatically with the ``refresh_token`` in the UI)

- ``STUDIO_TOKEN_SIGN_PASSWORD`` |br|
  This variable is used for the Signature part of the JWT token. The signature is used to verify the message wasn't
  changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of
  the JWT is who it says it is. For Studio, we use HMAC_SHA512 algorithm for the signature.

- ``STUDIO_TOKEN_ENCRYPT_PASSWORD`` |br|
  This variable is used for encrypting the JWT token itself so that it won't be decrypted without a password.

- ``STUDIO_REFRESH_TOKEN_NAME``, ``STUDIO_REFRESH_TOKEN_MAX_AGE``, ``STUDIO_REFRESH_TOKEN_SECURE`` |br|
  These variables are used for customizing the refresh token cookie. JWT token is short lived in general and we use a
  refresh token to exchange for a new JWT token when the old one is expired. By default the cookie name is ``refresh_token``.
  When creating a new access token, the backend will validate if the refresh token cookie is valid. You should find
  this from the cookies in the browser while logging in with Studio.

For more information on JWT tokens in general, see https://jwt.io/introduction.
For information on creating access tokens in Studio, see :ref:`here <access-tokens>`.

.. _studio-preview-cookie:

^^^^^^^^^^^^^^
Preview Cookie
^^^^^^^^^^^^^^
.. version_tag::
	:label: Since
	:version: 4.2.0

The following section of Studio's configuration overrides allows you to configure settings for the Preview cookie.
Studio adds a short-lived encrypted cookie called ``crafterPreview`` with the current preview site. This cookie gets
re-issued along with the JWT auth token (if ``crafterSite`` is already set).

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ##############################################################
    ##                      Preview Cookie                      ##
    ##############################################################
    # Name of the preview
    studio.security.token.previewCookie.name: crafterPreview
    # Time in seconds for the expiration of the preview cookie
    studio.security.token.previewCookie.maxAge: 600
    # The path used to set the preview cookie
    studio.security.token.previewCookie.path: /
    # The domain used to set the preview cookie (if set to null or empty the domain will be detected from the request)
    studio.security.token.previewCookie.domain: null
    # Indicates if the preview cookie should be secure (should be true for production environments behind HTTPS)
    studio.security.token.previewCookie.secure: false
    # Indicates if the preview cookie should be HTTPOnly
    studio.security.token.previewCookie.httpOnly: true
    Password requirements validation allows the admin to setup rules that ensures users create passwords based on an organization’s password security policy.

The Preview cookie  ``crafterPreview`` is encrypted using the encryption option for configuration files (which are
shared between Studio and Engine) and admins will need to update the default configurations for the encryption key and
salt in :ref:`Studio <studio-cipher-configuration>` and in :ref:`Engine <engine-configuration-properties-encryption>`.

Use the API `switchPreviewSite <../../../_static/api/studio.html#tag/users/operation/getCurrentUserSites>`__ to refresh
the ``crafterPreview`` cookie. This API must be called whenever the ``crafterSite`` cookie value is updated

|hr|

.. _studio-groovy-sandbox-configuration:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Groovy Sandbox Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. include:: /includes/groovy-sandbox-configuration.rst

"""""""""""""""""""""""""
Groovy Sandbox Properties
"""""""""""""""""""""""""
The following allows you to configure the Groovy sandbox.
The Groovy sandbox is enabled by default and can be disabled by changing the property ``studio.scripting.sandbox.enable`` to ``false``.

.. code-block:: yaml
    :linenos:
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

    # Indicates if the sandbox should be enabled
    studio.scripting.sandbox.enable: true
    # Indicates if the blacklist should be enabled (this will have no effect if the sandbox is disabled)
    studio.scripting.sandbox.blacklist.enable: true
    # The location of the default blacklist to use (this will have no effect if the sandbox is disabled)
    studio.scripting.sandbox.blacklist.path: classpath:crafter/studio/groovy/blacklist

|

"""""""""""""""""""""""""
Using a Custom Blacklist
"""""""""""""""""""""""""
Crafter Studio includes a default blacklist that you can find
`here <https://github.com/craftercms/studio/blob/support/4.x/src/main/resources/crafter/studio/groovy/blacklist>`_.
Make sure you review the branch/tag you're using.

To use a custom blacklist follow these steps:

#. Copy the default blacklist file to your classpath, for example:

    ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/groovy/blacklist``

#. Remove or comment (adding a ``#`` at the beginning of the line) the expressions that your scripts require
#. Update the ``studio-config-override.yaml`` configuration file to load the custom blacklist:

    .. code-block:: yaml
        :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

        # The location of the default blacklist to use (this will have no effect if the sandbox is disabled)
        studio.scripting.sandbox.blacklist.path: classpath:crafter/studio/groovy/blacklist

#. Restart CrafterCMS

Now you can execute the same script without any issues.

"""""""""""""""""""""""""""""""
Disabling the Sandbox Blacklist
"""""""""""""""""""""""""""""""
It is possible to disable the blacklist to allow the execution of most expressions, in case you need to use a
considerable number of the expression included in the blacklist while keeping some basic restrictions. To disable
the blacklist for all projects/sites update the ``studio-config-override.yaml`` configuration file:

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

    # Indicates if the blacklist should be enabled (this will have no effect if the sandbox is disabled)
    studio.scripting.sandbox.blacklist.enable: false

|

"""""""""""""""""""
Grape Configuration
"""""""""""""""""""
.. include:: /includes/groovy-grape-configuration.rst

"""""""""""""""
Important Notes
"""""""""""""""
.. include:: /includes/groovy-sandbox-important-notes.rst


|hr|

.. _studio-admin:

--------------
Administration
--------------

Much of the administration of Crafter Studio can be done via the UI. This section describes how to perform these basic tasks.

.. _navigating-main-menu:

------------------------------
Navigating the Navigation Menu
------------------------------
In this section, we discuss the Navigation Menu tools available in Studio. To access, click the ``Navigation Menu`` icon from the top right of the browser

.. image:: /_static/images/system-admin/main-menu/open-main-menu.webp
    :alt: System Administrator - Open Navigation Menu
    :align: center
    :width: 100%

|

Here are the list of tools available when using an out of the box blueprint. The ``Navigation Menu`` tools described below are available to users belonging to the ``system_admin`` group.

.. image:: /_static/images/system-admin/main-menu/main-menu.webp
    :alt: System Administrator - Navigation Menu
    :align: center
    :width: 20%

|

The configuration files for the Navigation Menu is located in ``CRAFTER_HOME/data/repos/global/configuration/`` where:

* :ref:`global-menu-config.xml <global-menu-config>` lets you setup the list of tools available from the Navigation Menu sidebar
* :ref:`global-permission-mappings-config.xml <global-permission-mappings-config>` lets you configure the permissions to a role globally for the entire application
* :ref:`global-role-mappings-config.xml <global-role-mappings-config>` lets you configure the mapping between the group and the role

The tools available in the Navigation Menu is configured similar to how the Project Tools Sidebar is configured :ref:`here <project-tools-ui-configuration>` using the :ref:`global menu config <global-menu-config>` configuration file mentioned above.

.. _main-menu-tool-projects:

^^^^^^^^
Projects
^^^^^^^^
``Projects`` contains a list of all the projects the logged in user has access to. The section :ref:`author-screens` in ``Content Authors`` contains descriptions on some of the actions that can be performed from the Projects screen.  This also allows users with the system admin role to create new projects either from a :ref:`blueprint <your-first-editorial-project>`, a :ref:`remote repository <create-project-with-link-to-remote-repo>` or an :ref:`existing project <duplicate-project>`.

.. image:: /_static/images/system-admin/main-menu/main-menu-sites.webp
    :alt: System Administrator - Navigation Menu Projects
    :align: center
    :width: 85%

|

.. _users-management:

^^^^^
Users
^^^^^
A user is anybody who uses CrafterCMS. The ``Users`` management console lets the administrator manage who has access to
Crafter Studio.

For information on managing users and groups, see :ref:`user-group-management`.

"""""""""""
Description
"""""""""""
The ``Users`` management console allows you to control and set up who can access and manage the sites. All users are listed on
this console.

To find the ``Users`` management console follow the next instructions:

1. Click on the **Navigation Menu** |mainMenu| option located at the top right of the browser, then click on
   **Users** in the sidebar located on the left side of the browser:

   .. image:: /_static/images/users/users-manage-access.webp
       :alt: Users - Manage Access
       :align: center
       :width: 65%

   |

2. Here's the screen that will appear after clicking on **Users**

   .. image:: /_static/images/system-admin/main-menu/main-menu-users.webp
       :alt: Users Dialog
       :align: center
       :width: 65%

   |

"""""""
Actions
"""""""
You can list, search, add or delete users, as well as view specific information.

~~~~~~~~~~~~~
Listing Users
~~~~~~~~~~~~~
To see a list of all existing users, make sure that there are no search terms entered in the search bar. You can also change the number of users listed per page by selecting a different number in the dropdown box at the bottom right of the screen

.. image:: /_static/images/users/users-list-all.webp
    :alt: Users - List All
    :align: center
    :width: 65%

|

'''''''''''''''
Searching Users
'''''''''''''''
You can search for a specific user. To search users, click on the magnifying glass icon on the top right then go
to the search field and type user name, last name, user name or mail.
In the following example we typed "jane", we obtained only one related user: "Jane".

.. image:: /_static/images/users/users-search.webp
    :alt: Users - Search
    :align: center
    :width: 65%

|

.. _creating-a-user:

~~~~~~~~~~~~~~~~~~~
Creating a New User
~~~~~~~~~~~~~~~~~~~
To create a new user, please click on the "Create User" button at the top of the page.

.. image:: /_static/images/users/users-add-new.webp
    :alt: Users - Add New
    :align: center
    :width: 65%

|

A modal dialog will be displayed, please fill out all the fields and finally click on the "**Submit**" button.
If you do not want to create a new user, please click on the "**Cancel**" button.

.. image:: /_static/images/users/users-add.webp
    :alt: Users - Add
    :align: center
    :width: 65%

|

A notification will appear on the screen for a few seconds on successful creation of a new user

.. image:: /_static/images/users/users-create-notification.webp
    :alt: Users - Created Notification
    :align: center

|

.. _editing-a-user:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Viewing and Editing an Existing User
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To view/edit a specific user, please click on the row of the name you want to edit:

.. image:: /_static/images/users/users-view-btn.webp
    :alt: Users - Click on Name to View Details
    :align: center

|

A modal dialog will be displayed with the user information. To finish viewing, click on the "**X**" (close icon) button.

.. image:: /_static/images/users/users-view.webp
    :alt: Users - View User Info
    :align: center
    :width: 65%

|

Once the dialog is displayed, to edit a specific user, simply click on the field that you want to change.
In the above dialog the **Externally Managed** label is displayed which indicates that the user is externally
managed such as the case in LDAP. Notice that since the user is externally managed, the only change that
can be made for the user is the group membership.

For the user dialog displayed below, since the user is not externally managed, all the fields can be changed
for the user. In this dialog, you can modify the user information such as email, first name, last name and
user name, group membership, reset the user's password and delete the user. You can also activate/de-activate
the user currently being viewed by clicking on the slider labeled **Enabled**. Edit the fields you
want to change and then click on the "**Save**" button. If you do not want to edit the user, please click
on the "Cancel" button.

.. image:: /_static/images/users/users-edit.webp
    :alt: Users - Edit
    :align: center
    :width: 65%

|

'''''''''''''''''''''''''''''''''''''
Resetting an Existing User's Password
'''''''''''''''''''''''''''''''''''''
To reset the password of a specific user, please click on the key icon in the user modal dialog as shown in
the following example.

.. image:: /_static/images/users/users-reset-btn.webp
    :alt: Users - Reset Password Icon
    :width: 65%
    :align: center

|

A modal dialog will be displayed, where the admin can reset the users password. Click on ``Save`` to reset the password.

.. image:: /_static/images/users/users-reset.webp
    :alt: Users - Reset Password
    :align: center
    :width: 55%

|

.. _deleting-a-user:

'''''''''''''''''''''''''
Removing an Existing User
'''''''''''''''''''''''''
To remove a specific user, please click on the trash can icon located in the user modal dialog as shown in
the following example.

.. image:: /_static/images/users/users-remove-btn.webp
    :alt: Users - Remove Icon
    :align: center
    :width: 65%

|

A confirmation pop up will be displayed, please click on "**Yes**" to remove the user and click on "**No**" if you do not want to remove it.

.. image:: /_static/images/users/users-remove.webp
    :alt: Users - Remove
    :align: center
    :width: 50%

|

A notification will appear on the screen for a few seconds on successful deletion of a user

.. image:: /_static/images/users/users-delete-notification.webp
    :alt: Users - Deleted Notification
    :align: center

|

.. important::
   When a user is deleted, the deleted user cannot be re-created. Instead of deleting a user,
   we recommend disabling the user, which prevents them from connecting to the system.

   To disable a user, simply click the ``Enabled`` slider to turn it off and a notification snack
   bar at the bottom will appear informing you that the user has been disabled successfully.

   .. image:: /_static/images/users/user-disabled-notification.webp
      :alt: Users - Deleted Notification
      :width: 25%
      :align: center

   |

.. _groups-management:

^^^^^^
Groups
^^^^^^
A group consists of a collection of users. The ``Groups`` management console lets the administrator manage groups,
members belonging to a group, etc.

For information on managing users and groups, see :ref:`user-group-management`.

"""""""""""
Description
"""""""""""
The ``Groups`` management console allows you to administrate the groups created on CrafterCMS. You can add, remove,
edit, and manage the users that will belong to the groups and you can also add and remove groups.

Here's a list of predefined groups and roles in CrafterCMS:

+---------------------+------------------------+----------------+
|| Group              || Description           || Role          |
+=====================+========================+================+
|| system_admin       || System administrator  || system_admin  |
+---------------------+------------------------+----------------+
|| site_admin         || Site administrator    || admin         |
+---------------------+------------------------+----------------+
|| site_author        || Site author           || author        |
+---------------------+------------------------+----------------+
|| site_developer     || Site developer        || developer     |
+---------------------+------------------------+----------------+
|| site_reviewer      || Site reviewer         || reviewer      |
+---------------------+------------------------+----------------+
|| site_publisher     || Site publisher        || publisher     |
+---------------------+------------------------+----------------+

You can add more groups defined whenever needed. The list above is just a starting point for when you first
create your project. The following sections will give you more details on users and groups. The next sections,
Permission Mappings and Role Mappings describes how to setup/assign permissions and roles.

To find this section through studio follow the next instructions:

#. Click on ``Navigation Menu`` |mainMenu| at the top right of your browser.
#. Click on **Groups** from the main menu on the left side of your browser.

.. image:: /_static/images/system-admin/main-menu/main-menu-groups.webp
    :width: 70%
    :alt: Groups Management
    :align: center

|

""""""""""""""""
Searching Groups
""""""""""""""""
You can search for groups by their properties (Display Name, Description), simply enter your search term
into the search bar by clicking on the magnifying glass icon on the top right and it will show results
that match your search term.

.. image:: /_static/images/groups/groups-search.webp
    :width: 60%
    :alt: Groups Management Search
    :align: center

|

.. _create-a-new-group:

""""""""""""""""""
Adding a New Group
""""""""""""""""""
To create a new group, you just need to click on the "**Create Group**" button,

.. image:: /_static/images/groups/groups-new-btn.webp
    :width: 60%
    :alt: Main Menu - Groups New
    :align: center

|

then, a modal dialog will show up with the required fields for the group creation.
Enter a display name and a short description for the new group.
After filling the form, click on **Save**, and the new group will show in the groups table.

.. image:: /_static/images/groups/groups-create.webp
    :width: 60%
    :alt: Main Menu - Groups Create Dialog
    :align: center

|

A notification of successful group creation will pop up for a few seconds after clicking on the **Create** button.

.. image:: /_static/images/groups/groups-created-notification.webp
   :width: 40%
   :alt: Main Menu - Groups Created Notification
   :align: center

|

.. _deleting-a-group:

""""""""""""""""
Removing a Group
""""""""""""""""
To remove a group, select a group from the list which will open a dialog for the selected group.
Click on the trash can icon on the top right of the group dialog.

.. image:: /_static/images/groups/groups-remove-icon.webp
   :width: 60%
   :alt: Main Menu - Groups Remove Icon
   :align: center

|

A confirmation popup will appear asking you if you want to delete the group, as seen above.
Click on **Yes** to remove the group.

On successful removal of the group, a notification will appear for a few seconds that the group has been deleted.

.. image:: /_static/images/groups/groups-removed-notification.webp
   :width: 40%
   :alt: Main Menu - Groups Removed Notification
   :align: center

|

"""""""""""""""""""""""""
Editing an Existing Group
"""""""""""""""""""""""""
To edit a group, select a group from the list which will open a dialog for the selected group.
In this dialog, you can modify the group description, just click on the **Save** button after making your
changes. You can also add/remove users from the group. Finally, you'll see a list of all users that belong to the group. To return to the list of all groups in your project, click on the **X** at the top right of the dialog.

.. image:: /_static/images/groups/groups-edit.webp
    :width: 60%
    :alt: Main Menu - Groups Edit
    :align: center

|

.. _adding-users-to-a-group:

"""""""""""""""""""""""
Adding Users to a Group
"""""""""""""""""""""""
To add a user to a group, click on the group you want to add users. In the ``Users`` column found on the left
in the ``Edit Group Members`` section, you can click on the search box then type in the name, username or
email of the user you want to add to the group.

.. image:: /_static/images/groups/groups-add-user-search.webp
    :width: 60%
    :alt: Main Menu - Groups Add User Search
    :align: center

|

Notice that it will give you a list of matching users, select the user you want to add by clicking on the
checkbox next to it, and if you want to add some more users to the group, just type in the names, and put
a checkmark next to them, then click on the **>** (greater than icon) button.

.. image:: /_static/images/groups/groups-add-members.webp
    :width: 60%
    :alt: Main Menu - Groups Add Members
    :align: center

|

It will then give you a notification that the user(s) has been successfully added to the group.

.. image:: /_static/images/groups/groups-users-added-notification.webp
    :width: 30%
    :alt: Main Menu - Groups Members Added Notification
    :align: center

|

"""""""""""""""""""""""""""
Removing Users from a Group
"""""""""""""""""""""""""""
To remove a user from a group, click on the group you want to remove users. In the ``Members`` column
found on the right in the ``Edit Group Members`` section, you can click on the search box then type in
the name, username or email of the user you want to remove from the group. Select the user you want to
remove from the group by clicking on the checkbox next to it, and if you want to remove some more users
from the group, just type in the names and put a checkmark next to them, then click on
the **<** (less than icon) button.

.. image:: /_static/images/groups/groups-remove-user.webp
    :width: 60%
    :alt: Main Menu - Groups Remove Members
    :align: center

|

It will then give you a notification that the user(s) has been successfully deleted from the group.

.. image:: /_static/images/groups/groups-remove-user-confirm.webp
    :width: 30%
    :alt: Main Menu - Groups Members Removed Notification
    :align: center

|

.. _main-menu-tool-cluster:

^^^^^^^^^^^^^^^^^^^^^^^^
Cluster |enterpriseOnly|
^^^^^^^^^^^^^^^^^^^^^^^^
``Cluster`` lets the administrator manage Studio clusters. See :ref:`studio-clustering` for more information on how to setup clustering and available actions from ``Cluster`` from the Main Menu

.. image:: /_static/images/system-admin/main-menu/main-menu-cluster.webp
    :alt: System Administrator - Navigation Menu Cluster
    :align: center
    :width: 85%

|

.. _nav-menu-audit:

^^^^^
Audit
^^^^^
Audit logs displays the date, time, user and action performed to content in all the projects available as well as actions
performed in Studio such as logins/logouts, user removal, group addition, etc.

"""""""""""
Description
"""""""""""
CrafterCMS tracks the date, time, user and action performed to content and the system through an audit log.

To view the audit logs, from the top right of your browser, click on the ``Navigation Menu`` icon, then click on ``Audit``.

.. image:: /_static/images/system-admin/main-menu/main-menu-audit.webp
    :alt: System Administrator - Main Menu Audit
    :align: center
    :width: 85%

|

You can filter the logs displayed based on the following:

"""""""""""""""""""""""""
Audit Logs Project Filter
"""""""""""""""""""""""""
``Project`` filters the log by project . Clicking on ``Project`` gives you a list of all the projects in Studio and the option to see system logs or logs for all the projects.

.. image:: /_static/images/system-admin/main-menu/audit-site-filter.webp
    :alt: System Administrator - Main Menu Audit Project Filter
    :align: center
    :width: 65%

|

""""""""""""""""""""""
Audit Logs User Filter
""""""""""""""""""""""
``Username`` filters the log by username. Clicking on ``Username`` gives you a list of all the users in Studio and the option to see logs for all users.

.. image:: /_static/images/system-admin/main-menu/audit-user-filter.webp
    :alt: System Administrator - Main Menu Audit User Filter
    :align: center
    :width: 65%

|

""""""""""""""""""""""""""""
Audit Logs Operations Filter
""""""""""""""""""""""""""""
``Operation`` filters the log by operations. Clicking on ``Operation`` gives you a list of all operations logged.

.. image:: /_static/images/system-admin/main-menu/audit-operations-filter.webp
    :alt: System Administrator - Main Menu Audit Operations Filter
    :align: center
    :width: 65%

|

"""""""""""""""""""""""""""
Audit Logs Timestamp Filter
"""""""""""""""""""""""""""
``Timestamp`` filters the log based on date range

.. image:: /_static/images/system-admin/main-menu/audit-options-filter.webp
    :alt: System Administrator - Main Menu Audit Timestamp Filter
    :align: center
    :width: 65%

|

.. _main-menu-tool-logging-levels:

^^^^^^^^^^^^^^
Logging Levels
^^^^^^^^^^^^^^
There are 6 log levels defined in CrafterCMS. These levels determine what messages will be logged and displayed in the **Logging Console**.

.. image:: /_static/images/site-admin/logs-logging-levels.webp
    :alt: System Administrator - Navigation Menu Logging Levels
    :align: center
    :width: 85%

|

For more information on logging levels, see :ref:`override-logging-levels`

.. _main-menu-tool-log-console:

^^^^^^^^^^^
Log Console
^^^^^^^^^^^
The ``Log Console`` allows the user to view messages depending on what log levels and what Java packages have been set for tracking.

.. image:: /_static/images/system-admin/main-menu/main-menu-log-console.webp
    :alt: System Administrator - Navigation Menu Log Console
    :align: center
    :width: 85%

|

:ref:`override-logging-levels` contains more information on how to track Java packages with the corresponding log levels desired.

The ``Log Console`` here in the Main Menu is similar to a project ``Log Console`` described :ref:`here <studio-log-console>`. The difference is the ``Log Console`` from the Main Menu can display logs for all the projects inside Studio, not just one project.

.. _nav-menu-global-config:

^^^^^^^^^^^^^
Global Config
^^^^^^^^^^^^^
CrafterCMS allows the user to edit the system settings for Studio without access to the physical server through ``Global Config`` under the ``Navigation Menu`` in Studio.
This global configuration file overrides the core configuration of Crafter Studio, ``studio-config.yaml``,  found in your Authoring installation, under ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/classes/crafter/studio``, and the Studio configuration override file ``studio-config-override.yaml`` under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` in your Authoring installation (for more information on this file, see :ref:`studio-config`.

Changes made to this file will spread to all nodes in a Studio cluster automatically. Please note that not all changes to this file can/will take effect without a restart, so expect to have to **restart Studio for most changes to take effect**. If in a cluster, you'll need a rolling restart for all nodes to pick up the changes.

To access the Global Config, click on the ``Navigation Menu`` icon at the top right corner, then click on ``Global Config`` in the Global panel

.. image:: /_static/images/system-admin/main-menu/main-menu-global-config.webp
    :alt: System Administrator - Navigation Menu Global Config
    :align: center
    :width: 100%

|

To find out more on what you can configure from the Global Config, see :ref:`studio-config`.


.. _main-menu-tool-encryption-tool:

^^^^^^^^^^^^^^^
Encryption Tool
^^^^^^^^^^^^^^^
The ``Encryption Tool`` allows the user to encrypt sensitive data such as access keys and passwords, that shouldn't be publicly available to anyone but developers and administrators

.. image:: /_static/images/system-admin/main-menu/main-menu-encryption-tool.webp
    :alt: System Administrator - Navigation Menu Encryption Tool
    :align: center
    :width: 100%

|

For more information on how to use the encryption tool, see :ref:`studio-encryption-tool`.

.. _nav-menu-token-management:

^^^^^^^^^^^^^^^^
Token Management
^^^^^^^^^^^^^^^^
The ``Token Management Tool`` allows the user to manage access tokens used to make API requests on behalf of the user and
create tokens for accessing a project/site in Preview.

.. image:: /_static/images/system-admin/main-menu/main-menu-token-management.webp
    :alt: System Administrator - Navigation Menu Token Management Tool
    :align: center
    :width: 70%

|

"""""""""
API Token
"""""""""
API tokens authorize the user to access APIs as a particular user with a particular role.

To create a new API access token, click on ``Token Management`` from the Main Menu, then click on the ``API Token`` button.
The only required field for the access token is the label to identify it, however, it is also recommended to set
an expiration date to minimize the risk of lost or stolen tokens being used without being noticed.

.. figure:: /_static/images/jwt/create-token.webp
    :width: 70%
    :alt: Crafter Studio - Create API Access Token
    :align: center

|

Once the expiration date is reached the access token will stop working automatically. Click on the ``Submit`` button to
create the token.

.. figure:: /_static/images/jwt/create-token-2.webp
    :width: 70%
    :alt: Crafter Studio - Access Token Expiration
    :align: center

|

The next step is to copy the value of the access token. The value of the access token will not be stored on the server,
so it needs to be stored by the user in a safe place as it is impossible to recover it after it is created.

.. figure:: /_static/images/system-admin/main-menu/access-token-created.webp
    :width: 70%
    :alt: Crafter Studio - Access Token Created
    :align: center

|

If an access token is lost or exposed in any way it should be disabled or completely deleted to avoid any
possible use. To delete a token, simply click on the trash can icon to the right of the token you want to delete.

.. figure:: /_static/images/system-admin/main-menu/delete-token-1.webp
    :width: 70%
    :alt: Crafter Studio - Delete a Token
    :align: center

|

You can also delete multiple tokens at once by placing a checkmark on the tokens you want to delete, then clicking on
``Delete Selected``.

.. figure:: /_static/images/system-admin/main-menu/delete-token-2.webp
    :width: 70%
    :alt: Crafter Studio - Delete Multiple Tokens
    :align: center

|

To disable/enable a token, simply click on the slider on the right side of the token next to the trash can icon.

.. figure:: /_static/images/system-admin/main-menu/token-disable.webp
    :width: 70%
    :alt: Crafter Studio - Disable/Enable Token
    :align: center

|

For an example of how to use the generated API token, see :ref:`crafter-cli`.

.. note:: Users needs the ``manage_access_token`` permission to create access tokens

.. _preview-token:

"""""""""""""
Preview Token
"""""""""""""
.. version_tag::
	:label: Since
	:version: 4.2.0

Preview tokens allow preview applications to access delivery APIs in preview mode from within the authoring environment.
This extra layer of security is required in authoring because the environment contains unpublished projects and content.

To create a Preview Token, click on ``Token Management`` from the Main Menu, then click on the ``Preview Token`` button.

.. figure:: /_static/images/system-admin/main-menu/create-preview-token.webp
    :width: 70%
    :alt: Crafter Studio - Create Preview Access Token
    :align: center

|

The only required fields for the preview token is the dropdown for selecting projects to grant preview access, and the
date/time fields to set an expiration date for the token, which is pre-populated to a date in the near future. The expiration
date is set to minimize the risk of lost or stolen tokens being used without being noticed. Click on the ``Generate``
button to create the token.

.. figure:: /_static/images/system-admin/main-menu/create-preview-token-2.webp
    :width: 70%
    :alt: Crafter Studio - Create Preview Access Token
    :align: center

|

The next step is to copy the value of the preview token. The value of the preview token is not stored on the server,
so it needs to be stored by the user in a safe place as it is impossible to recover it after it is created.

.. figure:: /_static/images/system-admin/main-menu/preview-token-created.webp
    :width: 70%
    :alt: Crafter Studio - Create Preview Access Token
    :align: center

|

You can now use the preview token in one of the following ways:

- Set a header with the name X-Crafter-Preview, or
- Add a query string argument with the name crafterPreview, or
- Set a cookie with the name crafterPreview

Here's an example of using the token with Curl, where ``{Generated-Preview-Token}`` is the token just created:

.. code-block:: bash

    curl --header "cookie: crafterPreview={Generated-Preview-Token};" "http://localhost:8080/api/1/site/content_store/item.json?url=/site/website/index.xml&crafterSite=ed"


The dialog above that shows the preview token generated also shows other examples on how to use the preview token.

^^^^^^^
Account
^^^^^^^
The ``Account Tool`` allows the user to change the user's personal Crafter Studio settings like language or to change the user's password or to clear your Studio UI preferences from the browser cache.

.. image:: /_static/images/system-admin/main-menu/main-menu-account.webp
    :alt: System Administrator - Navigation Menu Account Tool
    :align: center
    :width: 100%

|

For more information on how to use the Account tool, see :ref:`account-management`.

|hr|

.. _user-group-management:

---------------------
User/Group Management
---------------------
This section describes managing user accounts and groups.

A user is anybody who uses CrafterCMS. A user account holds a user name and password. A group consists of a collection of users. Users can be assigned to a group for a project/site. Through the groups, roles are assigned to users to certain areas of the site (access rights/ permissions). Each role represents a set of activities allowed. Groups are  used to simplify management as changes made to the rights of the group applies to all the users belonging to that group.

When you work in Crafter Studio, you need to login as a user. Your CrafterCMS administrator sets up user accounts, group memberships, roles and permissions. The sections below goes into more detail on how users, groups, permissions and roles are administered/setup.


.. _roles-and-permissions:

^^^^^^^^^^^^^^^^^^^^^
Roles and Permissions
^^^^^^^^^^^^^^^^^^^^^
To access CrafterCMS, a user must be allowed access rights to certain areas of the project (access rights/ permissions). For example, if a user wants to create, edit or submit content, the user needs to have those specific permissions. Here, we see that the user requires multiple permissions. For simplicity, permissions are grouped together into **roles**. A role is a set of allowed actions/activities. An **author** role, for example, has access to create, edit and submit content.

To define permissions for users, they need to be a member of a group. A group is a collection of users with a role assigned. Groups are used to simplify management as changes made to the rights of the group applies to all the users belonging to that group. For our example above of a user that wants to create, edit or submit content, the user should be assigned to a group with the **author** role.

Out of the box, CrafterCMS supports the following roles/groups:

============== ================= =========================================================
Role           Group             Description
============== ================= =========================================================
system_admin   system_admin      Has access to everything in the CMS, such as all the projects, users, groups, etc. in addition to the admin role
admin          site_admin        Has access to everything in the project such as project configurations, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to the publisher role
author         site_author       Has access to create, edit or submit content in a project
developer      site_developer    Has access to access to creating/editing layouts, templates, taxonomies, content types, scripts, etc., project configurations in addition to the publisher role in a project
reviewer       site_reviewer     Has the ability to approve and reject workflow, but don't have access to the author role in a project
publisher      site_publisher    Has the ability to approve and reject workflow, in addition to the author role in a project
============== ================= =========================================================

Permissions and roles can be setup for each project, and for the entire application itself. Note that the ``system_admin`` role applies to the entire application and the rest of the default roles applies to a project.

See :ref:`groups-management` for more information on administrating groups.

""""""""
Projects
""""""""
To edit permissions for a project role, in Studio, from the *Sidebar*, click on |projectTools| -> *Configuration* -> *Permission Mapping*. See :ref:`permission-mappings` for more information on permissions and the default permissions assigned to roles.

To add/edit a role for a project, in Studio, from the *Sidebar*, click on |projectTools| -> *Configuration* -> *Role Mapping*. See :ref:`project-role-mappings` for more information.

The items for interaction/tools available from the **Sidebar** depending on the user role can be configured in Studio, from the *Sidebar*, click on |projectTools| -> *Configuration* -> *User Interface Configuration*. See :ref:`user-interface-configuration` for more information.

""""""
Global
""""""
To add/edit a global role/group, see :ref:`global-role-mappings-config` for more information.

To add/edit global permissions for a role, see :ref:`global-permission-mappings-config` for more information.

The items for interaction/tools available from the |mainMenu| *Main Menu* depending on the user role can be configured by opening the :ref:`global-menu-config.xml <global-menu-config>` file under ``CRAFTER_HOME/data/repos/global/configuration`` using your favorite editor.

.. _putting-it-all-together:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Putting it all together - Users, Groups, Roles and Permissions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
In this section, we'll see how users, groups, roles and permissions work together in giving users access to
certain folders in a project.

We'll create a new role, group and user, add permissions for the new role and finally assign the newly
created user to the new group setup.

In preparation for our example, we will be using the Website editorial blueprint. We'll add a **news** folder
under **Home**, by navigating to **Pages** -> **Home**, then right click on **Home** and select **New Folder**.
Enter *news* in the **Folder Name** field. We will be using the **news** folder for our example in setting up
permissions to folders based on roles. Users assigned to the **newseditor** role will then have access to
publish and add/edit content in the **news** folder.

""""""""""""""""""
Create a new group
""""""""""""""""""
Let's begin by creating a new group.

#. To create a new group, click on |mainMenu| **Navigation Menu** from the top right, then click on **Groups**.
#. Click on the **Create Group** button.
#. Enter a name for the new group being created in the **Display Name** field.
#. Enter a description of the new group being created in the **Description** field.
#. Click on the **Save** button. A notification will appear that your new group has been created.

Below are the information used to create a new group:

.. image:: /_static/images/site-admin/new-group.webp
     :alt: Group - Create a New Group
     :width: 65%
     :align: center

|

For more information on adding a new group to a project, please see :ref:`create-a-new-group`

"""""""""""""""""
Create a new role
"""""""""""""""""
We'll now create a new role for the new group we just created.

#. To create a new role, click on |projectTools| from the **Sidebar**, then click on **Configuration**.
#. From the list, select **Role Mappings**
#. Add your new group and role in the editor

   .. code-block:: xml
       :linenos:
       :emphasize-lines: 18,19,20

       <role-mappings>
         <groups>
           <group name="Admin">
               <role>admin</role>
           </group>
           <group name="Developer">
               <role>developer</role>
           </group>
           <group name="Author">
               <role>author</role>
           </group>
           <group name="Publisher">
               <role>publisher</role>
           </group>
           <group name="Reviewer">
               <role>reviewer</role>
           </group>
           <group name="NewsEditor">
               <role>newseditor</role>
           </group>
         </groups>
       </role-mappings>

#. Click on the **Save** button.

For more information about role mappings, please see: :ref:`project-role-mappings`

""""""""""""""""""
Adding permissions
""""""""""""""""""
#. To add permissions to the new role we just created, click on |projectTools| from the **Sidebar**, then click on **Configuration**.
#. From the dropdown box, select **Permissions Mappings**
#. Add in the permissions that you would like to give to the new role that we just created. For our example below, we are giving the role **newseditor** permission to publish from the dashboard and the following permissions for the **news** folder and **assets** folder:

      - read
      - write
      - create content
      - create folder
      - publish

   .. code-block:: xml
      :linenos:

      <role name="newseditor">
         <rule regex="/site/website/news/.*">
           <allowed-permissions>
             <permission>content_read</permission>
             <permission>content_write</permission>
             <permission>content_create</permission>
             <permission>folder_create</permission>
             <permission>publish</permission>
           </allowed-permissions>
         </rule>
         <rule regex="/static-assets/.*">
           <allowed-permissions>
             <permission>content_read</permission>
             <permission>content_write</permission>
             <permission>content_create</permission>
             <permission>folder_create</permission>
             <permission>publish</permission>
           </allowed-permissions>
         </rule>
       </role>

#. Click on the **Save** button to save your changes.

For more information about permission mappings, please see: :ref:`permission-mappings`

""""""""""""""""""""""""
Adding users to the role
""""""""""""""""""""""""
We can now add users to the role by adding the users to the group mapped to the role. In the role mappings configuration file, we mapped the role **newseditor** to the group NewsEditor. To add users to the group NewsEditor,

#. Click on |mainMenu| from the top right of Studio, then select **Groups** on the left hand side
#. Click on the pencil (edit icon) next to the group name you want to edit. In our example, the group **NewsEditor**
#. Click on the box for the field **Add new members**, enter the users you'd like to add, then click on the **Add members** button.

For more information about adding users to a group, please see: :ref:`adding-users-to-a-group`

Your new role with users and permissions assigned are now ready!

.. _user-passwords:

^^^^^^^^^^^^^^
User passwords
^^^^^^^^^^^^^^
""""""""""""""""""""""
Changing Your Password
""""""""""""""""""""""
Every user logged in to CrafterCMS can change their own password.

#. To change your own password, click on the **Navigation Menu** |mainMenu| option at the top right of Studio,
   then select **Account**

   .. image:: /_static/images/users/your-passwd-open.webp
       :alt: Users - Open Dialog with User Name
       :width: 65%
       :align: center

   |

#. In the **Change Password** section of the dialog, enter your current password in the **Current Password** field.

   .. image:: /_static/images/users/your-passwd-change.webp
       :alt: Users - User Settings Dialog to Change Password
       :width: 50%
       :align: center

   |

#. Next, enter the new password into the **New Password** field.
#. Re-enter the new password into the **Confirm Password** field.
#. Click on the **Save** button. A notification will appear that the profile has been updated.

   .. image:: /_static/images/users/change-passwd-notification.webp
       :alt: Users - Password Change Notification
       :width: 30%
       :align: center

   |

After changing your password, you will be logged out of the system and will have to log back in using the new password you set before continuing your work in Studio.

""""""""""""""""""""""""
Changing a User Password
""""""""""""""""""""""""
The Crafter admin can change passwords for other users.

#. To change a user's password, login as crafter admin in Studio.
#. Click on **Users** at the top right of Studio
#. Click on the pencil (edit icon) next to the user you would like to change/reset the password.
#. Enter a new password in the **Reset Password** field.
#. Click on the **Save** button. A notification will appear that the user has been edited.

For more information on editing a user, see :ref:`editing-a-user`

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Setting a User's Initial Password
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The Crafter admin must set an initial password when creating a new user. To create a new user, please see :ref:`creating-a-user`

|hr|

.. _create-project-with-link-to-remote-repo:

-----------------------------------------
Project Creation with Remote Repositories
-----------------------------------------
Crafter Studio supports project creation with remote repositories and provides two options:

- Create project based on remote Git repository
- Create project based on a blueprint then add a remote Git repository

To start creating a project with a remote repository, from the **Projects** screen, click on the **Create Project** button.
A **Create Project** dialog will be launched. For both options, there will be a screen where the **Remote Git Repository Name** and **Remote Git Repository URL** needs to be filled out and the rest is optional and only needs to be filled out if required by the remote git repository being used.

Let's take a look at the fields where the remote repository details needs to be filled in:

.. image:: /_static/images/system-admin/remote-repo-info.webp
   :alt: System Administrator - Remote Repository Details
   :width: 55 %
   :align: center

|

#. In the **Git Repo URL** field you must provide the link to the Git repository you would like to use
#. In the **Authentication** field you must select the authentication method to be used to access the Git repository in the previous field.

   CrafterCMS supports the following authentication types to use to access remote repository:

   - **Authentication not required (Public URL)** - no credentials needed to access remote repository
   - **Username & Password** - for this method, you will be asked for a **Remote Git Repository Username** and a **Remote Git Repository Password**. Supply your username and password
   - **Token** - for this method, you will be asked for a **Remote Git Repository Username** (if required) and a **Remote Git Repository Token**. This method is usually used when two-factor authentication is configured on the remote repository to be accessed. Supply your username if required and token.
   - **Private Key** - for this method, you will be asked for a **Remote Git Repository Private Key**. This method is a key-based authentication. Supply your private key.

#. In the **Git Branch** field, you can supply a branch name, but can be left blank, which in turn would default to the ``master`` branch.
#. In the **Git Remote Name** field you want to provide a repository name that makes sense. It’s common to use “origin” or “upstream.”

.. _create-project-based-on-a-blueprint-then-add-a-remote-bare-git-repository:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Create project based on a blueprint then add a remote bare Git repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To create a project based on a blueprint then add a remote bare git repository, click on **Create Project** from
**Projects**, then select the blueprint you would like to use

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-1.webp
    :alt: Create Project Dialog in Crafter Studio, select a blueprint
    :width: 65 %
    :align: center

|

The next step is to fill in the **Project ID** and **Project Name**, then click on the **Review** button, then finally  click on the **Create Project** button to create your project. Your project should be created in a short while.

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-2.webp
    :alt: Create Project Dialog in Crafter Studio, fill in Site ID
    :width: 65 %
    :align: center

|

Once your project is created, the next step is to add a remote repository to your newly created project. Open the
**Sidebar** then click on **Project Tools** -> **Git**, then click on the **New Remote** on the top.
This will open up a dialog where we can fill in all the information for our remote repository as described above.
Click on the **Create** button after filling in the required information.

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-3.webp
    :alt: Create Repository dialog to fill in information of remote repository being added to the project
    :width: 65 %
    :align: center

|

Your project should now have a remote repository listed in the **Remote Repositories** tab

.. image:: /_static/images/developer/dev-cloud-platforms/create-project-then-push-4.webp
    :alt: Remotes screen displaying newly added remote repository to project
    :width: 65 %
    :align: center

|

Remember that the remote repository needs to be a bare git repository, since we are pushing our newly created project to the remote repository. To push our newly create project to the remote repository, click on the ``Push`` button (button with the up arrow) next to the remote repository

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Create project based on a remote Git repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Creating a project based on a remote Git repository is basically exporting a project from one Studio and importing it into another one.

To create a project based on remote Git repository, after clicking on **Create Project**, Click on **Remote Git Repository** in the create project screen

.. figure:: /_static/images/first-project/create-project-choose-bp.webp
    :alt: Developer How Tos - Setting up to work locally against the upstream
    :width: 65 %
    :align: center

|

Click on the **Site ID** field where you'll need to give your project an ID. Scroll down to see where you can fill in all the information for the remote repository we are importing. The ``Git Repo URL`` is the import project's sandbox repository git url (the project you want to bring over to your Studio). Below are sample urls for the project being imported:

Here is a sample Git url from GitHub:
`https://github.com/username/hello-test.git`
Here is a sample Git url using ssh:
`ssh://[user@]host.xz[:port]/path/to/repo/`
or alternatively for ssh:
`[user@]host.xz:path/to/repo/`

.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-1.webp
   :alt: Developer How Tos - Setting up to work locally against the upstream
   :width: 65 %
   :align: center

|

Click on the **Review** button, then finally, the **Create Project** button.


.. figure:: /_static/images/developer/dev-cloud-platforms/craftercms-github-clone-2.webp
   :alt: Developer How Tos - Setting up to work locally against the upstream review entries
   :width: 65 %
   :align: center

|

After a short while, your project will be imported.

**In case you want to publish the entire project**, follow these optional steps:

#. In the project you just imported, click on **Project Tools**, then click on **Publishing**

   .. image:: /_static/images/system-admin/publishing.webp
      :alt: System Administrator - Bulk Publishing"
      :width: 20 %
      :align: center

   |

#. In the **Publishing** screen, scroll down to ``Publish on Demand`` then click on the **Publish Entire Project**
   button to publish the whole project.

   .. image:: /_static/images/system-admin/bulk-publish-project.webp
      :alt: System Administrator - Bulk Publish the whole project filled in"
      :width: 65 %
      :align: center

   |

|hr|

.. _duplicate-project:

---------------------
Duplicating a Project
---------------------
Crafter Studio supports creating a new project by duplicating an existing project.
To duplicate a project, from ``Projects``, click on the ``Create Project`` button.

.. image:: /_static/images/first-project/create-project-choose-bp.webp
   :width: 65 %
   :align: center
   :alt: Studio Administration - Create Project

|

Next, click on ``Duplicate Project``. It will then prompt you to select the project to be duplicated by clicking
on the dropdown arrow in the ``Project`` field.  Give it a good ``Project Name`` and ``Project ID``, then click on the
``Review`` button

.. image:: /_static/images/system-admin/duplicate-project-screen.webp
   :width: 65 %
   :align: center
   :alt: Studio Administration - Duplicate Project Screen

|

When duplicating a project that uses S3 buckets (blob stores), the S3 buckets may be copied over to the new project and the
configuration updated if separate S3 buckets from the source project are required.

|hr|

----------
Clustering
----------
Learn about clustering Crafter Studio in the :ref:`Crafter Studio Clustering Guide <studio-clustering>`.

.. toctree::
   :hidden:

   /by-role/system-admin/performance-and-scaling/clustering

|hr|

.. _crafter-studio-api:

--------
REST API
--------
To view the Crafter Studio REST APIs:

.. open_iframe_modal_button::
   :label: Open here
   :url: ../../../_static/api/studio.html
   :title: Studio API

.. raw:: html

    or <a href="../../../_static/api/studio.html" target="_blank">in a new tab</a>


|hr|

-----------
Source Code
-----------
Crafter Studio's source code is managed in GitHub: https://github.com/craftercms/studio