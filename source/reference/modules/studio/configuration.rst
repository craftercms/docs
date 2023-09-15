:is-up-to-date: False
:last-updated: 4.1.2

.. index:: Studio Configuration, Studio Configuration Override

.. _studio-config:

====================
Studio Configuration
====================
.. contents::
    :local:
    :depth: 2

Crafter Studio is primarily configured via a single configuration file, ``studio-config.yaml``, and 2 override files that can be used to override the settings in the core configuration file.

The core configuration file for Crafter Studio ``studio-config.yaml`` is located under ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/classes/crafter/studio`` and contains pre-configured settings.

.. warning:: Do not change the ``studio-config.yaml`` file directly, simply override the settings you want to change in one of the override files.

The override files are:

* Studio Configuration Override file **studio-config-override.yaml** located under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` can be accessed by opening the file using your favorite editor
* Global Studio Configuration Override file **studio-config-override.yaml** located under ``CRAFTER_HOME/data/repos/global/configuration`` can be accessed from Studio from the ``Navigation Menu`` under ``Global Config``

The configuration loading order is as follows:

* ``studio-config.yaml`` from the WAR file is loaded first
* ``studio-config-override.yaml`` from the shared folder is loaded next (if it exists)
* ``studio-config-override.yaml`` from the global configuration folder is loaded last (if it exists)

If the same property is present in more than one file, the value from the last configuration file will be used.

You'll note that the first override file from the ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` folder resides on the local file system. This makes it easy for system admins, but it will not replicate across a cluster. The second override file from the ``CRAFTER_HOME/data/repos/global/configuration`` folder is a repository item and will replicate across a cluster. Furthermore, the second override file can be managed from Studio without need to the operating system's file system. See :ref:`nav-menu-global-config` for more information on how to access the global configuration file from Studio.

.. note:: Changing the configuration files requires a restart of Crafter Studio for the changes to take effect.

-------------------------------
Studio Configuration Properties
-------------------------------
In this section we will highlight some of the more commonly used properties in the configuration of Crafter Studio. For a complete list of all the properties, see the ``studio-config.yaml`` file.

.. list-table:: Configuration Properties
    :header-rows: 1

    * - Property
      - Purpose

    * - :ref:`SMTP Configuration (Email) <studio-smtp-config>`
      - Configure the SMTP server to be used by Crafter Studio when sending emails
    * - :ref:`Commit Message <studio-commit-message>`
      - Configure the commit messages used by Crafter Studio
    * - :ref:`Editable Mime Types <editable-mime-types>`
      - Configure the MIME-types that are editable directly in Crafter Studio
    * - :ref:`Cache Settings <cache-settings>`
      - Configure the cache control settings for templates and assets
    * - :ref:`Project/Site Configuration <studio-project-config>`
      - Configure your project/site configuration
    * - :ref:`Preview Deployer Configuration <studio-preview-deployer-config>`
      - Configure your deployer URLs
    * - :ref:`Preview Search Configuration <studio-preview-search-config>`
      - Configure your search URLs
    * - :ref:`Password Configuration <studio-password-config>`
      - Configure password complexity to be used
    * - :ref:`CORS <studio-cors>`
      - Configure CORS
    * - :ref:`Search <studio-search>`
      - Configure Studio search
    * - :ref:`Serverless Delivery Targets <studio-serverless-delivery-targets>`
      - Configure serverless delivery
    * - :ref:`Forwarded Headers <studio-forwarded-headers>`
      - Configure forwarded headers
    * - :ref:`Access Tokens <studio-access-tokens>`
      - Configure access tokens
    * - :ref:`crafterSite Cookie Domain <studio-crafterSite-cookie-domain>`
      - Configure the ``crafterSite`` cookie domain
    * - :ref:`Validations Regex <studio-validations-regex>`
      - Configure the regex used for validating various inputs
    * - :ref:`Publishing Blacklist <publishing-blacklist>`
      - Configure the publishing blacklist

.. _studio-smtp-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^
SMTP Configuration (Email)
^^^^^^^^^^^^^^^^^^^^^^^^^^
This section allows the user to setup a mail client by configuring the SMTP server to be used for sending emails from Crafter Studio, such as when authors request to publish content, or when a request to publish has been approved.

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

|hr|

.. _cache-settings:

^^^^^^^^^^^^^^
Cache Settings
^^^^^^^^^^^^^^
Here's the cache control settings for templates and assets:

.. code-block:: yaml

    # If Studio should cache its FreeMarker templates
    studio.cache.templates: true
    # Indicates if the browser should cache responses for static-assets
    studio.cache.assets.enabled: true
    # The max age in seconds that the browser should cache responses for requests matching `studio.cache.assets.maxAge.includeUrls`
    studio.cache.assets.maxAge: 3600
    # The urls that should include max-age=<studio.cache.assets.maxAge> in Cache-Control header. Other urls will be set to default max-age=0, must-revalidate
    studio.cache.assets.maxAge.includeUrls: /static-assets/**,/1/plugin/file/**


.. TODO Add more configuration properties

|hr|

.. _studio-project-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^
Project/Site Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^
.. TODO Env vars

The following section of Studio's configuration overrides allows you to setup your project configuration

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ############################################################
    ##                   Site Configuration                   ##
    ############################################################
    # Destroy site context url for preview engine
    studio.configuration.site.preview.destroy.context.url: ${env:ENGINE_URL}/api/1/site/context/destroy.json?crafterSite={siteName}&token=${studio.configuration.management.previewAuthorizationToken}
    # Default preview URL
    studio.configuration.site.defaultPreviewUrl: ^https?://localhost:8080/?
    # Default authoring URL
    studio.configuration.site.defaultAuthoringUrl: ^https?://localhost:8080/studio/?
    # Default GraphQL server URL
    studio.configuration.site.defaultGraphqlServerUrl: ^https?://localhost:8080/?
    # Studio management authorization token.
    studio.configuration.management.authorizationToken: ${env:STUDIO_MANAGEMENT_TOKEN}
    # Preview engine management authorization token.
    studio.configuration.management.previewAuthorizationToken: ${env:ENGINE_MANAGEMENT_TOKEN}
    # Protected URLs with preview engine management authorization token.
    # Coma separated list of preview engine urls
    studio.configuration.management.previewProtectedUrls: >-
      /api/1/monitoring/log.json,
      /api/1/monitoring/memory.json,
      /api/1/monitoring/status.json,
      /api/1/monitoring/version.json,
      /api/1/site/context/id,
      /api/1/site/context/destroy,
      /api/1/site/context/rebuild,
      /api/1/site/context/graphql/rebuild,
      /api/1/site/cache/clear,
      /api/1/site/cache/statistics

|hr|

.. _studio-preview-deployer-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Preview Deployer Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. TODO Remove this section? This is too slow to configure this way. Move to the bottom and explain why not

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

|hr|

.. _studio-preview-search-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Preview Search Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. TODO Indicate that you should use Env vars, otherwise, modify this.


The following section of Studio's configuration overrides allows you to setup urls for search in preview

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ############################################################
    ##                   Preview Search                       ##
    ############################################################

    studio.preview.search.createUrl: ${env:SEARCH_URL}/api/2/admin/index/create
    studio.preview.search.deleteUrl: ${env:SEARCH_URL}/api/2/admin/index/delete/{siteName}

|hr|

.. _studio-password-config:

^^^^^^^^^^^^^^^^^^^^^^
Password Configuration
^^^^^^^^^^^^^^^^^^^^^^
.. TODO Indicate that env vars are to be used

The following section of Studio's configuration overrides allows you to configure encryption and configure authentication method to be used (for more information, see: :ref:`configuring-studio-security`), configure password requirements validation (for more information see: :ref:`crafter-studio-configure-password-requirements`).

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

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
    # studio.security.passwordRequirements.minimumComplexity: 3

|hr|

^^^^^^^^
Security
^^^^^^^^
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

|hr|

.. _studio-cors:

^^^^
CORS
^^^^
The following section of Studio's configuration overrides allows you to setup CORS

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

The CORS origins accepts regex patterns. Values are split using ``,``. Remember that commas inside
patterns need to be escaped with a ``\`` like:
``studio.cors.origins: 'http://localhost:[8000\,3000],http://*.other.domain'``

|hr|

.. _studio-search:

^^^^^^
Search
^^^^^^
.. TODO Env vars

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

|hr|

.. _studio-serverless-delivery-targets:

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Serverless Delivery Targets
^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. TODO tells deployer to create serverless delivery sites

The following section of Studio's configuration overrides allows you to setup serverless delivery

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

|hr|

.. _studio-forwarded-headers:

^^^^^^^^^^^^^^^^^
Forwarded Headers
^^^^^^^^^^^^^^^^^
.. TODO we set this to true in AWS since we're behind a load balancer

The following section of Studio's configuration overrides allows you to configure forwarded headers to resolve the actual hostname and protocol when it is behind a load balancer or reverse proxy.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    ##################################################
    ##             Forwarded Headers                ##
    ##################################################
    # Indicates if Forwarded or X-Forwarded headers should be used when resolving the client-originated protocol and
    # address. Enable when Studio is behind a reverse proxy or load balancer that sends these
    studio.forwarded.headers.enabled: false

|hr|

.. _studio-access-tokens:

^^^^^^^^^^^^^
Access Tokens
^^^^^^^^^^^^^
.. TODO env vars

.. version_tag::
    :label: Since
    :version: 4.0.0

The following section of Studio's configuration overrides allows you to configure settings for the Studio access tokens. Access tokens can then be used to invoke `Crafter Studio's REST APIs <../../../../../_static/api/studio.html>`_, or used in :ref:`Crafter CLI <cli-access-to-crafter-studio>` to perform operations on Studio.

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

|hr|

.. _studio-crafterSite-cookie-domain:

^^^^^^^^^^^^^^^^^^^^^^^^^
crafterSite Cookie Domain
^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.0.1

The following section of Studio's configuration overrides allows you to set the ``crafterSite`` cookie at the base domain instead of a subdomain, to allow visibility of the ``crafterSite`` cookie across subdomains.

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*
    :linenos:

    # Use base domain instead of subdomain for the crafterSite cookie
    studio.cookie.useBaseDomain: false

|hr|

.. _studio-validations-regex:

^^^^^^^^^^^^^^^^^
Validations Regex
^^^^^^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.0.3

CrafterCMS validates API requests related with users and groups through regex restrictions to avoid malicious payloads.

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

|hr|

.. _publishing-blacklist:

^^^^^^^^^^^^^^^^^^^^
Publishing Blacklist
^^^^^^^^^^^^^^^^^^^^
CrafterCMS allows creating a publishing blacklist to prevent certain unwanted items from being published.

A comma separated list of regexes is used to configure items that should not be published.

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

|hr|

.. _studio-timeout:

^^^^^^^^
Timeouts
^^^^^^^^
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

|hr|

.. _studio-access-and-permissions:

----------------------
Access and Permissions
----------------------

.. TODO Configure access to Crafter Studio

.. _global-permission-mappings-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Global Permission Mappings Config
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The global permission mappings configuration file lets you configure the permissions to a role globally for the entire application

Permissions per project are managed within Crafter Studio's UI. See :ref:`permission-mappings` for more information on project permissions.

Here's the default global permissions configuration (click on the triangle on the left to expand/collapse). It contains the permissions mappings for the roles defined in the :ref:`global role mappings configuration <global-role-mappings-config>` file. To access the file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/`` then open the file ``global-permission-mappings-config.xml``. Remember to restart CrafterCMS so your changes to the file will take effect.

.. raw:: html

   <details>
   <summary><a>Sample "permission-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/global-permission-mappings-config.xml
       :language: xml
       :caption: *CRAFTER_HOME/data/repos/global/configuration/global-permission-mappings-config.xml*
       :linenos:


.. raw:: html

   </details>

"""""""""""
Description
"""""""""""
.. include:: /includes/available-permissions.rst

.. _global-role-mappings-config:

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Global Role Mappings Config
^^^^^^^^^^^^^^^^^^^^^^^^^^^
The global role mappings config contains the role mappings for groups created in CrafterCMS that needs global permissions. For more information on groups, see :ref:`groups-management`

To access the global role mappings config file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/`` then open the file ``global-role-mappings-config.xml``. Remember to restart Crafter so your changes to the file will take effect.

Here's the default global role mappings configuration (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "global-role-mappings-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/global-role-mappings-config.xml
       :language: xml
       :caption: *CRAFTER_HOME/data/repos/global/configuration/global-role-mappings-config.xml*
       :linenos:


.. raw:: html

   </details>

"""""""""""""""""""
Default Global Role
"""""""""""""""""""
CrafterCMS comes with a predefined global role ``system_admin`` out of the box.

Users with the ``system_admin`` role have access to everything in the CMS such as all the modules in the Main Menu for managing users, groups, etc., all the sites and configuration files, creating/editing layouts, templates, taxonomies, content types, scripts, etc. in addition to creating and editing content, as well as the ability to approve and reject workflow.

See :ref:`global-permission-mappings-config` for more information on all items accessible for the ``system_admin`` role.

|hr|

.. _global-menu-config:

------------------
Global Menu Config
------------------
The Global Menu Config configuration file defines what modules are available for administration use when clicking on the ``Navigation Menu`` from the top bar.

To see the default modules available from the ``Navigation Menu``, see :ref:`navigating-main-menu`

Here is the default Global Menu Config configuration file (click on the triangle on the left to expand/collapse).
To access the file, using your favorite editor, navigate to ``CRAFTER_HOME/data/repos/global/configuration/`` then
open the file ``global-menu-config.xml``. Remember to restart Crafter so your changes to the file will take effect.

.. raw:: html

   <details>
   <summary><a>Sample "global-menu-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/global-menu-config.xml
   :caption: *CRAFTER_HOME/data/repos/global/configuration/global-menu-config.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|
