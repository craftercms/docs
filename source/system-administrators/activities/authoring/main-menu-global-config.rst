:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now


.. index:: Navigation Menu Global Config, Global Config

.. _nav-menu-global-config:

=============================
Navigation Menu Global Config
=============================

CrafterCMS allows the user to edit the system settings for Studio without access to the physical server through ``Global Config`` under the ``Navigation Menu`` in Studio.
This global configuration file overrides the :ref:`core configuration of Crafter Studio <studio-core-configuration>`, ``studio-config.yaml``,  found in your Authoring installation, under ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/classes/crafter/studio``, and the Studio configuration override file ``studio-config-override.yaml`` under ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension`` in your Authoring installation (for more information on this file, see :ref:`studio-config-override`.

Changes made to this file will spread to all nodes in a Studio cluster automatically. Please note that not all changes to this file can/will take effect without a restart, so expect to have to **restart Studio for most changes to take effect**. If in a cluster, you'll need a rolling restart for all nodes to pick up the changes.

To access the Global Config, click on the ``Navigation Menu`` icon at the top right corner, then click on ``Global Config`` in the Global panel

.. image:: /_static/images/system-admin/main-menu/main-menu-global-config.jpg
    :alt: System Administrator - Navigation Menu Global Config
    :align: center
    :width: 100%

Let's take a look at what we can configure from the Global Config.

--------------------------
SMTP Configuration (Email)
--------------------------

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

--------
Security
--------

^^^^^^^^^^^^^^^
Session Timeout
^^^^^^^^^^^^^^^

This section allows the user to set the Studio session timeout, the amount of time of user inactivity in Studio before requiring the user to re-authenticate.

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   # HTTP Session timeout for studio (value is in minutes).
   # studio.security.sessionTimeout: 60

Remember to keep the Studio session timeout less than the Tomcat ``session-timeout``.  The default Tomcat ``session-timeout`` is ``75`` minutes.  See :ref:`changing-session-timeout` for more information.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Security Provider for Accessing Repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The following section of Studio's global config allows you to define security provider for accessing repository.

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   # Defines security provider for accessing repository. Possible values
   # - db (users are stored in database)
   # - ldap (users are imported from LDAP into the database)
   # - headers (use when authenticating via headers)
   # studio.security.type: ldap


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Password Requirements Validation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Password requirements validation allows the admin to setup rules that ensures users create passwords based on an organizations password security policy.

The following section of Studio's global config allows you to setup password requirements validation through a regular expression

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   # Password requirements validation regular expression
   # The supported capture group keys are:
   #   hasNumbers
   #   hasLowercase
   #   hasUppercase
   #   hasSpecialChars
   #   noSpaces
   #   minLength
   #   maxLength
   #   minMaxLength
   # studio.security.passwordRequirements.validationRegex: ^(?=(?<hasNumbers>.*[0-9]))(?=(?<hasLowercase>.*[a-z]))(?=(?<hasUppercase>.*[A-Z]))(?=(?<hasSpecialChars>.*[~|!`,;\/@#$%^&+=]))(?<minLength>.{8,})$


For more information, see :ref:`crafter-studio-configure-password-requirements`

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Authentication Chain
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

CrafterCMS allows configuration of multiple authentication providers in a chain that are then iterated through until either the user is authenticated and granted access or authentication fails and an *HTTP 401 Unauthorized* is returned to the user.

The following section of Studio's global config allows you to configure an authentication chain.

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   # Studio authentication chain configuration
   # studio.authentication.chain:
     # Authentication provider type
     # - provider: HEADERS
       # Authentication via headers enabled
       # enabled: false
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
       # Enable/disable logout for headers authenticated users (SSO)
       # logoutEnabled: false
       # If logout is enabled for headers authenticated users (SSO), set the endpoint of the SP or IdP logout, which should
       # be called after local logout. The {baseUrl} macro is provided so that the browser is redirected back to Studio
       # after logout (https://STUDIO_SERVER:STUDIO_PORT/studio)
       # logoutUrl: /YOUR_DOMAIN/logout?ReturnTo={baseUrl}
     # Authentication provider type
     # - provider: LDAP
       # Authentication via LDAP enabled
       # enabled: false
       # LDAP Server url
       # ldapUrl: ldap://localhost:389
       # LDAP bind DN (user)
       # ldapUsername: cn=Manager,dc=my-domain,dc=com
       # LDAP bind password
       # ldapPassword: secret
       # LDAP base context (directory root)
       # ldapBaseContext: dc=my-domain,dc=com
       # LDAP username attribute
       # usernameLdapAttribute: uid
       # LDAP first name attribute
       # firstNameLdapAttribute: cn
       # LDAP last name attribute
       # lastNameLdapAttribute: sn
       # Authentication header for email
       # emailLdapAttribute: mail
       # LDAP groups attribute
       # groupNameLdapAttribute: crafterGroup
       # LDAP groups attribute name regex
       # groupNameLdapAttributeRegex: .*
       # LDAP groups attribute match index
       # groupNameLdapAttributeMatchIndex: 0
     # Authentication provider type
     # - provider: DB
       # Authentication via DB enabled
       # enabled: true

For more information, see :ref:`configure-authentication-chain`

----
CORS
----

The following section of Studio's global config allows you to setup Cross-Origin Resource Sharing (CORS)

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

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
   # The active environment for multi environment configuration, e.g. qa, prod, dev
   # studio.configuration.environment.active: ENV

----------
Clustering
----------

The following section of Studio's global config allows you to setup Studio clustering.

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   ##################################################
   ##                 Clustering                   ##
   ##################################################
   #-----------------------------------------------------------------------------
   # IMPORTANT: To enable clustering, please specify the environment variable
   # SPRING_PROFILES_ACTIVE=crafter.studio.dbCluster in your crafter-setenv.sh
   # (or Docker/Kubernetes env variables).
   # Also configure the appropiate MARIADB env variables
   # -----------------------------------------------------------------------------

   # Cluster Git URL format for synching members.
   # - Typical SSH URL format: ssh://{username}@{localAddress}{absolutePath}
   # - Typical HTTPS URL format: https://{localAddress}/repos/sites
   # studio.clustering.sync.urlFormat: ssh://{username}@{localAddress}{absolutePath}

   # Cluster Syncers
   # Sandbox Sync Job interval in milliseconds which is how often to sync the work-area
   # studio.clustering.sandboxSyncJob.interval: 2000
   # Published Sync Job interval in milliseconds which is how often to sync the published repos
   # studio.clustering.publishedSyncJob.interval: 60000
   # Global Repo Sync Job interval in milliseconds which is how often to sync the global repo
   # studio.clustering.globalRepoSyncJob.interval: 45000
   # Cluster member after heartbeat stale for amount of minutes will be declared inactive
   # studio.clustering.heartbeatStale.timeLimit: 5
   # Cluster member after being inactive for amount of minutes will be removed from cluster
   # studio.clustering.inactivity.timeLimit: 5

   # Cluster member registration, this registers *this* server into the pool
   # Cluster node registration data, remember to uncomment the next line
   # studio.clustering.node.registration:
   #  This server's local address (reachable to other cluster members). You can also specify a different port by
   #  attaching :PORT to the adddress (e.g 192.168.1.200:2222)
   #  localAddress: ${env:CLUSTER_NODE_ADDRESS}
   #  Authentication type to access this server's local repository
   #  possible values
   #   - none (no authentication needed)
   #   - basic (username/password authentication)
   #   - key (ssh authentication)
   #  authenticationType: none
   #  Username to access this server's local repository
   #  username: user
   #  Password to access this server's local repository
   #  password: SuperSecurePassword
   #  Private key to access this server's local repository (multiline string)
   #  privateKey: |
   #    -----BEGIN PRIVATE KEY-----
   #    privateKey
   #    -----END PRIVATE KEY-----

For more information, see :ref:`clustering`

------------------
Content Repository
------------------

The following section of Studio's global config allows you to setup a prologues and postscript message when committing.

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   ##################################################
   ##              Content Repository              ##
   ##################################################
   # Repository commit prologue message
   # studio.repo.commitMessagePrologue:
   # Repository commit postscript message
   # studio.repo.commitMessagePostscript:

-------------------
Serverless Delivery
-------------------

The following section of Studio's global config allows you to setup serverless delivery.

.. code-block:: yaml
   :linenos:
   :caption: *CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml*

   ##########################################################
   ##                 Serverless Delivery                  ##
   ##########################################################
   # Indicates if serverless delivery is enabled
   # studio.serverless.delivery.enabled: true
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
   #   aws:
   #     cloudformation:
   #       namespace: myorganization


