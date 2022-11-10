:is-up-to-date: True
:last-updated: 4.0.3

:orphan:

.. index:: Studio's Configuration

.. _studio-core-configuration:

===========================
Studio's Core Configuration
===========================

The core configuration file for Crafter Studio ``studio-config.yaml`` is located under ``CRAFTER_HOME/bin/apache-tomcat/webapps/studio/WEB-INF/classes/crafter/studio`` and contains pre-configured settings.

Remember that we **do not recommend** making changes to the core configuration file ``studio-config.yaml``.
There are two override files available to make changes to the pre-configured settings in the core configuration
file for Crafter Studio:

* :ref:`CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml <studio-config-override>`
* :ref:`CRAFTER_HOME/data/repos/global/configuration/studio-config-override.yaml <nav-menu-global-config>`

The above override configuration articles lists some settings that you may want to override in Crafter Studio.

Let's take a look at some of the pre-configured settings in ``studio-config.yaml`` that you may want to override
using the two files mentioned above.

---------------
Commit Messages
---------------
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

.. _server-time-zone:

-------------------------------------
Server Time Zone for Date Time Format
-------------------------------------

The default server time zone used by Studio is UTC and can be overridden using one of the override files.

.. code-block:: yaml

   # Default studio server time zone for date time format
   studio.configuration.defaultTimeZone: UTC

|

See :ref:`studio-project-time-zone` for more information on how to customize site dates & times displayed on Studio UI

.. _editable-mime-types:

-------------------
Editable Mime Types
-------------------

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

.. _cache-settings:

--------------
Cache Settings
--------------

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
