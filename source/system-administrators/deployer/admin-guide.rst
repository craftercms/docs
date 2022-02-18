:is-up-to-date: True

.. _crafter-deployer-administration-guide:

====================================
Deployer System Administration Guide
====================================

------------------------------
How to Start/Stop the Deployer
------------------------------

If you're using CrafterCMS installed on a server, starting and stopping the Deployer is very easy. From the command line, navigate to the
{env-directory}, authoring or delivery environment folder, and then inside the ``bin`` folder, run ``./crafter.sh start_deployer`` to start
the Deployer or ``./crafter.sh stop_deployer`` to stop the Deployer.

-------------
Configuration
-------------

^^^^^^^^^^^^^^^^^^^^
Global Configuration
^^^^^^^^^^^^^^^^^^^^

Crafter Deployer has two main property configuration files found in ``{env-directory}/bin/crafter-deployer/config``:

* **application.yaml:** contains the global application properties, like the server port and the locations of other configuration files.
* **base-target.yaml:** contains the common properties for all targets. In here you can find properties for configuring indexing with
  Crafter Search and deployment email notifications.

The ``application.yaml`` file is loaded automatically by Spring Boot, so its properties can be overridden in the standard external locations
defined by Spring Boot:

#. ``application.yaml`` in a ``config`` directory under the current directory.
#. ``application.yaml`` in the the current directory.
#. ``application.yaml`` in a ``config`` directory in the classpath.
#. ``application.yaml`` in the classpath root.

You can also override the ``application.yaml`` properties by specifying them as System properties, e.g. ``-Dserver.port=7171``.

The ``base-target.yaml`` file is handled a little bit different. This file is loaded by Crafter Deployer every time a new target is
being added, and is merged with the specific properties of the target, with the target's properties taking precedence. By default, the override
location for this configuration file is ``./config/base-target.yaml``, but it can be changed through the ``application.yaml`` property
``deployer.main.targets.config.baseYaml.overrideLocation``.

^^^^^^^^^^^^^^^^^^^^
Target Configuration
^^^^^^^^^^^^^^^^^^^^

Each deployment target has it's own YAML configuration file, where the properties of the target and it's entire deployment pipeline is specified.
Without this file the Deployer doesn't know of the existence of the target. By default these configuration files reside under
``./config/targets`` (in the case of the CrafterCMS installed on a server, they're under ``CRAFTER_HOME/data/deployer/targets``).

Target configurations vary a lot between authoring and delivery, since an authoring target works on a local repository while a delivery target
pulls the files from a remote repository. But target configurations between the same environment don't change a lot. Having said that, the
following two examples can be taken as a base for most authoring/delivery target configuration files:

.. code-block:: yaml
  :caption: Authoring Target Configuration Example (editorial-preview.yaml)
  :linenos:

  target:
    # Environment name
    env: preview
    # Site name
    siteName: editorial
    # Crafter Engine base URL
    engineUrl: http://localhost:8080
    # Path to the sandbox repository of the site
    localRepoPath: /opt/crafter/authoring/data/repos/sites/editorial/sandbox
    deployment:
      scheduling:
        # Scheduling is disabled since Studio will call deploy on file save
        enabled: false
      pipeline:
        # Calculates the Git differences with the latest commit processed
        - processorName: gitDiffProcessor
        # Performs Crafter Search indexing
        - processorName: searchIndexingProcessor
        # Calls Rebuild Context when a file under /scripts is changed
        - processorName: httpMethodCallProcessor
          includeFiles: ["^/?scripts/.*$"]
          method: GET
          url: ${target.engineUrl}/api/1/site/context/rebuild.json?crafterSite=${target.siteName}
        # Calls Clear Cache
        - processorName: httpMethodCallProcessor
          method: GET
          url: ${target.engineUrl}/api/1/site/cache/clear.json?crafterSite=${target.siteName}
        # Generates a deployment output file
        - processorName: fileOutputProcessor

.. code-block:: yaml
  :caption: Delivery Target Configuration Example (editorial-dev.yaml)
  :linenos:

  target:
    # Environment name
    env: dev
    # Site name
    siteName: editorial
    # Crafter Engine base URL
    engineUrl: http://localhost:9080
    deployment:
      pipeline:
        # Pulls the remote Git repository of the site
        - processorName: gitPullProcessor
          remoteRepo:
            # URL of the remote repo
            url: /opt/crafter/authoring/data/repos/sites/editorial/published
            # Live of the repo to pull
            branch: live
        # Calculates the Git differences with the latest commit processed
        - processorName: gitDiffProcessor
        # Performs Crafter Search indexing
        - processorName: searchIndexingProcessor
        # Calls Rebuild Context when a file under /scripts is changed
        - processorName: httpMethodCallProcessor
          includeFiles: ["^/?scripts/.*$"]
          method: GET
          url: ${target.engineUrl}/api/1/site/context/rebuild.json?crafterSite=${target.siteName}
        # Calls Clear Cache
        - processorName: httpMethodCallProcessor
          method: GET
          url: ${target.engineUrl}/api/1/site/cache/clear.json?crafterSite=${target.siteName}
        # Generates a deployment output file
        - processorName: fileOutputProcessor

As you can see from the examples above, most of the configuration belongs to the deployment pipeline section. Each
of the YAML list entries is an instance of a ``DeploymentProcessor`` prototype Spring bean that is already defined
in the ``base-context.xml`` file. If you want to define your own set of ``DeploymentProcessor`` beans you can add
them on a new Spring context file based on the target's YAML file name. Using the authoring example above, since
the YAML file name is ``editorial-preview.yaml``, the corresponding Spring context would be ``editorial-preview-context.xml``.
The Deployer out of the box provides the following processor beans:

* **gitPullProcessor:** Clones a remote repository into a local path. If the repository has been cloned already, it performs
  a Git pull. Useful for delivery targets which need to reach out to the authoring server to retrieve the changes on
  deployment. Must be the first processor in the list, since the rest of the processors all work on the local repository.

* **gitDiffProcessor:** Calculates the diff between the latest commit in the local repository and the last commit processed,
  which is usually stored under ``./processed-commits`` (in the folder ``CRAFTER_HOME/data/deployer/processed-commits``). This diff is then used to build the change set of the deployment, so
  this processor should be the second one in the list.

* **searchIndexingProcessor:** grabs the files from the change set and sends them to Crafter Search for indexing. It
  also does some XML processing before submitting the files like flattening (recursive inclusion of components), merging
  of inherited XML and metadata extraction for structured document files like PDFs, Word Docs, etc.

* **httpMethodCallProcessor:** executes an HTTP method call to a specified URL.

* **fileOutputProcessor:** generates the output of the deployment and saves it in a CSV file.

* **mailNotificationProcessor:** sends an email notification when there's a successful deployment with file changes or when
  a deployment failed.

--------------
Manage Targets
--------------

^^^^^^^^^^^^^^^
Create a Target
^^^^^^^^^^^^^^^

There are two different ways in which a target configuration file can be created:

* By calling the API endpoint :ref:`crafter-deployer-api-target-create`, which creates a new target based on a template. The Deployer comes out
  of the box with two templates: one for local repositories (useful for authoring environments) and one for remote repositories (useful for
  delivery environments). You can also specify your own templates under ``./config/templates/targets``, and use the same API endpoint to create
  targets based on those templates.
* By placing the YAML target configuration file under ``./config/targets`` (or ``CRAFTER_HOME/data/deployer/targets``, like indicated
  above). The Deployer will automatically load the file on a schedule, and whenever there's a change it will re-load it.

^^^^^^^^^^^^^^^
Update a Target
^^^^^^^^^^^^^^^

Updating a target is very similar to creating one:

* Call the same API endpoint as create, but be sure that the ``replace`` parameter is ``true``. OR
* Make the changes directly in the target configuration file. On the next scheduled scan of targets, the Deployer will detect that the file has
  been modified and it will re-load it.

^^^^^^^^^^^^^^^
Delete a Target
^^^^^^^^^^^^^^^

There are two options for deleting a target:

* Call the API endpoint :ref:`crafter-deployer-api-target-delete`.

* Delete the target configuration file in the filesystem.

---------------
Run Deployments
---------------

Crafter Deployer has an option of running scheduled deployments for a target (``deployment.scheduling.enabled``), which is enabled by default, but if you
want to manually trigger a deployment, you just need to call the API endpoint :ref:`crafter-deployer-api-target-deploy` (or
:ref:`crafter-deployer-api-target-deploy-all`). This will start the deployment if the request is correct. To watch the progress of a scheduled or a manually
triggered deployment, check the Deployer log. When the deployment has finished, and the target has a ``fileOutputProcessor`` in the deployment pipeline, a
CSV file with the final result of that particular deployment will be written under ``./logs`` (or ``CRAFTER_HOME/logs/deployer``).

-----------------
Processed Commits
-----------------

Crafter Deployer keeps track of the most recent commit id that was processed in the last deployment
for each target, during a deployment it will use this commit id to get the list of files that have been
changed in the repository.
By default the processed commits are stored in a folder (``CRAFTER_HOME/data/deployer/processed-commits``)
as an individual file for each target (for example ``editorial-preview.commit``). Each file contains
only the commit id that will be used to track the changes during deployments:

.. code-block:: none
  :caption: Example of a processed commit file
  :linenos:
  
  0be0d2e52283c17b834901e9cda6332d06fb05b6

If the repository is changed manually using Git commands instead of updating files using Crafter
Studio it is possible that a deployment may found a conflict, for example if a specific commit is
deleted from the repository. In most cases Crafter Deployer should be able to detect those conflicts
and solve them automatically, however if a deployment does not finish successfully you can follow
the steps described in :ref:`crafter-studio-debugging-deployer-issues`

.. warning::
  Changing or deleting a processed commit file could cause unchanged files to be indexed again and
  it should be done as a last resort in case of errors.
