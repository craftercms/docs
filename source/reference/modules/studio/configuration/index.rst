:is-up-to-date: True
:last-updated: 4.3.1

.. Grammar Checked 2023-10-06

.. _studio-config:

====================
Studio Configuration
====================
.. contents::
    :local:
    :depth: 1

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

.. toctree::
    :hidden:

    blob-stores


|hr|

^^^^^^^^^^^^^^
Project Policy
^^^^^^^^^^^^^^
The project policy configuration file allows the administrator to configure conditions for adding content to the project.
(via uploads), such as filename constraints, minimum/maximum size of files, permitted content types or file types (MIME-types), etc.

Learn more about project policy in the article :ref:`project-policy-configuration`.

.. toctree::
    :hidden:

    project-policy-configuration


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

.. toctree::
    :hidden:

    project-configuration


|hr|

^^^^^^^^^^^^^^^^
UI Configuration
^^^^^^^^^^^^^^^^
Crafter Studio's UI is highly configurable and allows you to customize the look and feel of the UI per project to suit your needs. Learn more about Studio UI configuration in the article :ref:`user-interface-configuration`.

.. toctree::
    :hidden:

    user-interface-configuration


|hr|

.. _studio-rte-config:

^^^^^^^^^^^^^^^^^
RTE Configuration
^^^^^^^^^^^^^^^^^
RTEs are more effective/productive for authors when they are configured properly for the specific type of content the author is managing. A properly and effectively configured RTE has the right styles, menu options and so on.
Learn more about configuring Studio's default RTE in the article :ref:`rte-configuration`.

.. toctree::
    :hidden:

    rte-configuration

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

"""""""""""""""
Referrer Policy
"""""""""""""""
.. version_tag::
    :label: Since
    :version: 4.3.1

The following allows you to limit the information available in the Referer header or to not send the Referer header.
The referrer policy header is set to ``NO_REFERRER`` (Never send the Referer header) by default.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    # Value for Referrer-Policy header.
    # Possible values are defined in org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter.ReferrerPolicy
    studio.security.headers.referrerPolicy.value: NO_REFERRER

.. note:: Possible values are defined in `org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter.ReferrerPolicy <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/header/writers/ReferrerPolicyHeaderWriter.ReferrerPolicy.html>`__

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
