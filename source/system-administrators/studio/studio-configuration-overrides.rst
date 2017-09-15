.. _studio-config-override:

================================
Studio's Configuration Overrides
================================

Crafter Studio comes with pre-configured settings that you may want to override.  To view the pre-configured settings in Crafter Studio, in your Authoring installation, go to ``webapps/studio/WEB-INF/classes/crafter/studio`` and open the file ``studio-config.yaml``.

To override any of the pre-configured settings, in your Authoring installation, go to ``shared/classes/crafter/studio/extension`` and add the settings you would like to configure in the file ``studio-config-override.yaml``.   The override file have some settings already listed that you may want to override in Crafter Studio:

--------------------------------
Content Repository Configuration
--------------------------------

   The following section of Studio's configuration overrides allows you to set your repository base

.. code-block:: yaml
   :caption: shared/classes/crafter/studio/extension/studio-config-override.yaml
   :linenos:

   ##################################################
   ##              Content Repository              ##
   ##################################################
   # Absolute or relative path to repository base (all actual repositories will be under this)
   studio.repo.basePath: ../data/repos

------------------------------
Preview Deployer Configuration
------------------------------

   The following section of Studio's configuration overrides allows you to setup your deployer urls

.. code-block:: yaml
   :caption: shared/classes/crafter/studio/extension/studio-config-override.yaml
   :linenos:

   ############################################################
   ##                    Preview Deployer                    ##
   ############################################################

   # Default preview deployer URL (can be overridden per site)
   studio.preview.defaultPreviewDeployerUrl: http://localhost:9191/api/1/target/deploy/preview/{siteName}
   # Default preview create target URL (can be overridden per site)
   studio.preview.createTargetUrl: http://localhost:9191/api/1/target/create
   # Default preview create target URL (can be overridden per site)
   studio.preview.deleteTargetUrl: http://localhost:9191/api/1/target/delete/{siteEnv}/{siteName}
   # URL to the preview Crafter Engine
   studio.preview.engineUrl: http://localhost:8080
   # URL to the preview repository (aka Sandbox) where authors save work-in-progress
   studio.preview.repoUrl: ../data/repos/sites/{siteName}/sandbox

----------------------------
Preview Search Configuration
----------------------------

   The following section of Studio's configuration overrides allows you to setup urls for search in preview

.. code-block:: yaml
   :caption: shared/classes/crafter/studio/extension/studio-config-override.yaml
   :linenos:

   ############################################################
   ##                   Preview Search                       ##
   ############################################################

   studio.preview.search.createUrl: http://localhost:8080/crafter-search/api/2/admin/index/create
   studio.preview.search.deleteUrl: http://localhost:8080/crafter-search/api/2/admin/index/delete/{siteName}

----------------------
Database Configuration
----------------------

   The following section of Studio's configuration overrides allows you to setup the database url, port number, connection string to initialize the database and path

.. code-block:: yaml
   :caption: shared/classes/crafter/studio/extension/studio-config-override.yaml
   :linenos:

   ##################################################
   ##                   Database                   ##
   ##################################################

   # Format:
   # jdbc:DATABASE_PLATFORM;databaseName=DATABASE_NAME;create=true;user=DATABASE_USERNAME;password=DATABASE_USER_PASSWORD
   # Note that a relative path is not suitable for a production deployment
   studio.db.url: jdbc:mariadb://127.0.0.1:33306/crafter?user=crafter&password=crafter

   # Connection string used to initialize database
   studio.db.initializer.url: jdbc:mariadb://127.0.0.1:33306?user=root&password=
   # Port number for the embedded database (note this must match what's in the connection URLs in this config file)
   studio.db.port: 33306
   # Data folder for the embedded database
   studio.db.dataPath: ../data/db

------------------
Mail Configuration
------------------

   The following section of Studio's configuration overrides allows you to setup the SMTP server to be used by Crafter CMS when sending emails

.. code-block:: yaml
   :caption: shared/classes/crafter/studio/extension/studio-config-override.yaml
   :linenos:

   ##################################################
   ##        SMTP Configuration (Email)            ##
   ##################################################

   # Default value for from header when sending emails.
   # studio.mail.from.default: admin@example.com
   # SMTP server name to send emails.
   # studio.mail.host: localhost
   # SMTP port number to send emails.
   # studio.mail.port: 25
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
