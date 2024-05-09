:is-up-to-date: True
:last-updated: 4.1.2
:orphan:

.. index:: Modules; Crafter Deployer

.. _crafter-deployer:

================
Crafter Deployer
================
.. figure:: /_static/images/architecture/crafter-deployer.webp
   :alt: Crafter Deployer
   :width: 75%
   :align: center

.. contents::
    :local:
    :depth: 2

Crafter Deployer is the deployment agent for CrafterCMS.

.. TODO: We need a bigger/better description of this.


.. _crafter-deployer-administration:

--------------
Administration
--------------
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
How to Start/Stop the Deployer
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're using CrafterCMS installed on a server, starting and stopping the Deployer is very easy. From the command line, navigate to the
{env-directory}, authoring or delivery environment folder, and then inside the ``bin`` folder, run ``./crafter.sh start_deployer`` to start
the Deployer or ``./crafter.sh stop_deployer`` to stop the Deployer.

^^^^^^^^^^^^^
Configuration
^^^^^^^^^^^^^
""""""""""""""""""""
Global Configuration
""""""""""""""""""""
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

Here's a sample ``application.yaml`` file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample application.yaml file</a></summary>

.. code-block:: yaml
    :linenos:

    deployer:
      main:
        config:
          environment:
            active: ${CRAFTER_ENVIRONMENT}
        targets:
          config:
            folderPath: ${targets.dir}
        deployments:
          folderPath: ${deployments.dir}
          output:
            folderPath: ${logs.dir}
          processedCommits:
            folderPath: ${processedCommits.dir}
        logging:
          folderPath: ${logs.dir}
        management:
          # Deployer management authorization token
          authorizationToken: ${DEPLOYER_MANAGEMENT_TOKEN}
        security:
          encryption:
            # The key used for encryption of configuration properties
            key: ${CRAFTER_ENCRYPTION_KEY}
            # The salt used for encryption of configuration properties
            salt: ${CRAFTER_ENCRYPTION_SALT}
          ssh:
            # The path of the folder used for the SSH configuration
            config: ${CRAFTER_SSH_CONFIG}

.. raw:: html

   </details>

|

The ``base-target.yaml`` file is handled a little bit different. This file is loaded by Crafter Deployer every time a new target is
being added, and is merged with the specific properties of the target, with the target's properties taking precedence. By default, the override
location for this configuration file is ``./config/base-target.yaml``, but it can be changed through the ``application.yaml`` property
``deployer.main.targets.config.baseYaml.overrideLocation``.

Here's a sample ``base-target.yaml`` file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample base-target.yaml file</a></summary>

.. code-block:: yaml
    :linenos:

    target:
      localRepoPath: ${deployer.main.deployments.folderPath}/${target.siteName}
      engineUrl: ${env:ENGINE_URL}
      engineManagementToken: ${env:ENGINE_MANAGEMENT_TOKEN}
      studioUrl: ${env:STUDIO_URL}
      studioManagementToken: ${env:STUDIO_MANAGEMENT_TOKEN}
      translation:
        # Indicates if the translation features should be enabled for the target
        enable: false
      search:
        openSearch:
          # Single Cluster
          urls:
            - ${env:SEARCH_URL}
          username: ${env:SEARCH_USERNAME}
          password: ${env:SEARCH_PASSWORD}
          timeout:
            # The connection timeout in milliseconds, if set to -1 the default will be used
            connect: -1
            # The socket timeout in milliseconds, if set to -1 the default will be used
            socket: -1
          # The number of threads to use, if set to -1 the default will be used
          threads: -1
          # Indicates if keep alive should be enabled for sockets used by the search client, defaults to false
          keepAlive: false

          # Multiple Clusters
          #      readCluster:
          #        urls:
          #        username:
          #        password:
          #      writeClusters:
          #        - urls:
          #          username:
          #          password:
          #        - urls:
          #          username:
          #          password:

          # Settings used for all indices
          indexSettings:
            - key: "index.mapping.total_fields.limit"
              value : 3000
            - key: "index.mapping.depth.limit"
              value: 40

          notifications:
            mail:
              server:
                host: ${env:MAIL_HOST}
                port: ${env:MAIL_PORT}

.. raw:: html

   </details>

|

where:

  - ``engineURL`` and ``engineManagementToken`` is used for calling Engine APIs, and the environment variables (*env:VARIABLE_NAME*) values are set in the ``crafter-setenv.sh`` file
  - ``studioURL`` and ``studioManagementToken`` is required for calling Studio APIs, and the environment variables (*env:VARIABLE_NAME*) values are set in the ``crafter-setenv.sh`` file

""""""""""""""""""""
Target Configuration
""""""""""""""""""""
Each deployment target has it's own YAML configuration file, where the properties of the target and it's entire deployment pipeline is specified.
Without this file the Deployer doesn't know of the existence of the target. By default these configuration files reside under
``./config/targets`` (in the case of the CrafterCMS installed on a server, they're under ``CRAFTER_HOME/data/deployer/targets``).

Target configurations vary a lot between authoring and delivery, since an authoring target works on a local repository while a delivery target
pulls the files from a remote repository. But target configurations between the same environment don't change a lot. Having said that, the
following two examples can be taken as a base for most authoring/delivery target configuration files:

.. code-block:: yaml
  :caption: *Authoring Target Configuration Example (editorial-preview.yaml)*
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
  :caption: *Delivery Target Configuration Example (editorial-dev.yaml)*
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

^^^^^^^^^^^^^^
Manage Targets
^^^^^^^^^^^^^^
"""""""""""""""
Create a Target
"""""""""""""""
There are two different ways in which a target configuration file can be created:

* By calling the API endpoint `createTarget <../../../_static/api/deployer.html#tag/target/operation/createTarget>`_, which creates a new target based on a template. The Deployer comes out
  of the box with two templates: one for local repositories (useful for authoring environments) and one for remote repositories (useful for
  delivery environments). You can also specify your own templates under ``./config/templates/targets``, and use the same API endpoint to create
  targets based on those templates.
* By placing the YAML target configuration file under ``./config/targets`` (or ``CRAFTER_HOME/data/deployer/targets``, like indicated
  above). The Deployer will automatically load the file on a schedule, and whenever there's a change it will re-load it.

"""""""""""""""
Update a Target
"""""""""""""""
Updating a target is very similar to creating one:

* Call the same API endpoint as create, but be sure that the ``replace`` parameter is ``true``. OR
* Make the changes directly in the target configuration file. On the next scheduled scan of targets, the Deployer will detect that the file has
  been modified and it will re-load it.

"""""""""""""""
Delete a Target
"""""""""""""""
There are two options for deleting a target:

* Call the API endpoint `deleteTarget <../../../_static/api/deployer.html#tag/target/operation/deleteTarget>`_.

* Delete the target configuration file in the filesystem.

^^^^^^^^^^^^^^^
Run Deployments
^^^^^^^^^^^^^^^
Crafter Deployer has an option of running scheduled deployments for a target (``deployment.scheduling.enabled``), which is enabled by default, but if you
want to manually trigger a deployment, you just need to call the API endpoint `deployTarget <../../../_static/api/deployer.html#tag/target/operation/deployTarget>`_ (or
`deployAllTargets <../../../_static/api/deployer.html#tag/target/operation/deployAllTargets>`_). This will start the deployment if the request is correct. To watch the progress of a scheduled or a manually
triggered deployment, check the Deployer log. When the deployment has finished, and the target has a ``fileOutputProcessor`` in the deployment pipeline, a
CSV file with the final result of that particular deployment will be written under ``./logs`` (or ``CRAFTER_HOME/logs/deployer``).

^^^^^^^^^^^^^^^^^
Processed Commits
^^^^^^^^^^^^^^^^^
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
the steps described in :ref:`debugging-deployer-issues`

.. warning::
  Changing or deleting a processed commit file could cause unchanged files to be indexed again and
  it should be done as a last resort in case of errors.

.. _jacket:

^^^^^^
Jacket
^^^^^^
Indexing rich document content into a single search entry greatly improves searchability in your project.
Crafter Deployer is able to index the content of a rich document (e.g. PDF, DOC, DOCX, PTT, etc.) along with metadata
and content found in an associated descriptor item (the items that reference the rich document).
This descriptor item is called a ``jacket``.

Jackets are identified by their path and a regex that is configured at the Deployer configuration's target level.
Below is a sample ``base-target.yaml`` file showing how jackets are configured:

.. code-block:: yaml
    :caption: *CRAFTER_HOME/bin/crafter-deployer/config/base-target.yaml*
    :linenos:

    binary:
      # The list of binary file mime types that should be indexed
      supportedMimeTypes:
        - application/pdf
        - application/msword
        - application/vnd.openxmlformats-officedocument.wordprocessingml.document
        - application/vnd.ms-excel
        - application/vnd.ms-powerpoint
        - application/vnd.openxmlformats-officedocument.presentationml.presentation
      # The regex path patterns for the metadata ("jacket") files of binary/document files
      metadataPathPatterns:
        - ^/?site/documents/.+\.xml$
      # The regex path patterns for binary/document files that are store remotely
      remoteBinaryPathPatterns: &remoteBinaryPathPatterns
        # HTTP/HTTPS URLs are only indexed if they contain the protocol (http:// or https://). Protocol relative
        # URLs (like //mydoc.pdf) are not supported since the protocol is unknown to the back-end indexer.
        - ^(http:|https:)//.+$
        - ^/remote-assets/.+$
      # The regex path patterns for binary/document files that should be associated to just one metadata file and are
      # dependant on that parent metadata file, so if the parent is deleted the binary should be deleted from the index
      childBinaryPathPatterns: *remoteBinaryPathPatterns
      # The XPaths of the binary references in the metadata files
      referenceXPaths:
        - //item/key
        - //item/url

Administrators must configure where jackets are located via the ``base-target.yaml`` configuration file as described
above. For Crafter Cloud users, deployment target configurations must be submitted to Crafter Cloud Ops.

|hr|

.. _crafter-deployer-processors-guide:

-------------------
Deployer Processors
-------------------
Crafter Deployer includes an extensive list of deployment processors that can be easily added to any target
to meet specific requirements. Some examples of the use cases that can be addressed with deployment processors are:

- Pushing content created/edited in Crafter Studio to an external service
- Pulling content created/edited from an external service
- Execute actions every time a deployment succeeds or fails

.. note::
  When adding processors or changing the deployment pipeline for a target keep in mind that the processors will be
  executed following the order defined in the configuration file and some processors require a specific position in the
  pipeline


.. |failDep| replace:: ``failDeploymentOnFailure``

^^^^^^^^^^^^^^^^^^^^^^^^^^
Main Deployment Processors
^^^^^^^^^^^^^^^^^^^^^^^^^^
The main deployment processors can do any task related to detect changed files or process changed files that were
detected by other processors. To process changed files a processor may interact with any external service as needed.

All deployment processors support the following properties:

.. list-table::
    :header-rows: 1
    :widths: 20 10 10 60

    * - Name
      - Required
      - Default Value
      - Description
    * - ``processorLabel``
      -
      - None
      - Label that other processors can use to jump to this one
    * - ``jumpTo``
      -
      - None
      - The label of the processor to jump to after a successful execution
    * - ``includeFiles``
      -
      - None
      - List of regular expressions to check the files that should be included
    * - ``excludeFiles``
      -
      - None
      - List of regular expressions to check the files that should be excluded
    * - ``alwaysRun``
      -
      - false
      - Indicates if the processor should run even if there are no changes in the current deployment
    * - ``failDeploymentOnFailure``
      -
      - false
      - Enables failing a deployment when there’s a processor failure
    * - ``runInClusterMode``

        .. version_tag::
            :label: Since
            :version: 4.1.1

      -
      - ``PRIMARY``
      - Indicates the current ClusterMode the processor should run.
        Available values are:

        - ``PRIMARY``: Run in primary instance only
        - ``REPLICA``: Run in replica instances only
        - ``ALWAYS``: Run in both primary and replica instances

        *The default value* ``ALWAYS`` *is used by the following processors*

        - *gitPullProcessor*
        - *gitDiffProcessor*
        - *gitUpdateCommitIdProcessor*

.. |lBranch| replace:: ``localRepoBranch``
.. |URL| replace:: ``remoteRepo.url``
.. |Name| replace:: ``remoteRepo.name``
.. |Branch| replace:: ``remoteRepo.branch``
.. |username| replace:: ``remoteRepo.username``
.. |password| replace:: ``remoteRepo.password``

.. |path| replace:: ``remoteRepo.ssh.privateKey.path``
.. |passphrase| replace:: ``remoteRepo.ssh.privateKey.passphrase``


""""""""""""""""""
Git Pull Processor
""""""""""""""""""
Processor that clones/pulls a remote Git repository into a local path in the filesystem.

.. note:: This needs to be the first processor in the pipeline

**Properties**

+------------+-----------+-------------------------------+-------------------------------------------------------------+
|Name        |Required   |Default Value                  |Description                                                  |
+============+===========+===============================+=============================================================+
||URL|       ||checkmark||                               |The URL of the remote Git repo to pull                       |
+------------+-----------+-------------------------------+-------------------------------------------------------------+
||Name|      |           |``origin``                     |The name to use for the remote repo when pulling from it     |
+------------+-----------+-------------------------------+-------------------------------------------------------------+
||Branch|    |           |The default branch in the repo |The branch of the remote Git repo to pull                    |
+------------+-----------+-------------------------------+-------------------------------------------------------------+
||username|  |           |                               |The username for authentication with the remote Git repo.    |
|            |           |                               |Not needed when SSH with RSA key pair authentication is used |
+------------+-----------+-------------------------------+-------------------------------------------------------------+
||password|  |           |                               |The password for authentication with the remote Git repo.    |
|            |           |                               |Not needed when SSH with RSA key pair authentication is used |
+------------+-----------+-------------------------------+-------------------------------------------------------------+
||path|      |           |                               |The SSH private key path, used only with SSH with RSA key    |
|            |           |                               |pair authentication                                          |
+------------+-----------+-------------------------------+-------------------------------------------------------------+
||passphrase||           |                               |The SSH private key passphrase, used only with SSH withRSA   |
|            |           |                               |key pair authentication                                      |
+------------+-----------+-------------------------------+-------------------------------------------------------------+
||failDep|   |           |``true``                       |Enables failing a deployment when there's a processor failure|
+------------+-----------+-------------------------------+-------------------------------------------------------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Git Pull Processor using basic auth*

  - processorName: gitPullProcessor
    remoteRepo:
      url: https://github.com/myuser/mysite.git
      branch: live
      username: myuser
      password: mypassword

.. code-block:: yaml
  :linenos:
  :caption: *Git Pull Processor using SSH with RSA key pair*

  - processorName: gitPullProcessor
    remoteRepo:
      url: https://github.com/myuser/mysite.git
      branch: live
      ssh:
        privateKey:
          path: /home/myuser/myprivatekey
          passphrase: mypassphrase

.. _deployer-git-diff-processor:

""""""""""""""""""
Git Diff Processor
""""""""""""""""""
Processor that, based on a previous processed commit that's stored, does a diff with the current commit of the
deployment, to find out the change set. If there is no previous processed commit, then the entire repository becomes
the change set.

.. note::
  This processor needs to be placed after the ``gitPullProcessor`` and before any other processor like the
  ``searchIndexingProcessor``

**Properties**

+---------------------+---------+-------------+---------------------------------------------------------------------+
|Name                 |Required |Default Value|Description                                                          |
+=====================+=========+=============+=====================================================================+
|``includeGitLog``    |         |``false``    |Indicates if the git log details should be included in the change set|
+---------------------+---------+-------------+---------------------------------------------------------------------+
|``updateCommitStore``|         |``true``     |Indicates if the processed commit value should be modified           |
+---------------------+---------+-------------+---------------------------------------------------------------------+
||failDep|            |         |``true``     |Enables failing a deployment when there's a processor failure        |
+---------------------+---------+-------------+---------------------------------------------------------------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Git Diff Processor*

  - processorName: gitDiffProcessor
    includeGitLog: true


.. _deployer-git-push-processor:

""""""""""""""""""
Git Push Processor
""""""""""""""""""
Processor that pushes a local repo to a remote Git repository.

**Properties**

+------------+-----------+-------------------------------+------------------------------------------------------------+
|Name        |Required   |Default Value                  |Description                                                 |
+============+===========+===============================+============================================================+
||lBranch|   ||checkmark||                               |The branch of the local repo to push                        |
+------------+-----------+-------------------------------+------------------------------------------------------------+
||URL|       ||checkmark||                               |The URL of the remote Git repo to push to                   |
+------------+-----------+-------------------------------+------------------------------------------------------------+
||Branch|    |           |The default branch in the repo |The branch of the remote Git repo to push to                |
+------------+-----------+-------------------------------+------------------------------------------------------------+
||username|  |           |                               |The username for authentication with the remote Git repo.   |
|            |           |                               |Not needed when SSH with RSA key pair authentication is used|
+------------+-----------+-------------------------------+------------------------------------------------------------+
||password|  |           |                               |The password for authentication with the remote Git repo.   |
|            |           |                               |Not needed when SSH with RSA key pair authentication is used|
+------------+-----------+-------------------------------+------------------------------------------------------------+
||path|      |           |                               |The SSH private key path, used only with SSH with RSA key   |
|            |           |                               |pair authentication                                         |
+------------+-----------+-------------------------------+------------------------------------------------------------+
||passphrase||           |                               |The SSH private key passphrase, used only with SSH withRSA  |
|            |           |                               |key pair authentication                                     |
+------------+-----------+-------------------------------+------------------------------------------------------------+
|``force``   |           |``false``                      |Sets the force preference for the push                      |
+------------+-----------+-------------------------------+------------------------------------------------------------+
|``pushAll`` |           |``false``                      |If all local branches should be pushed to the remote        |
+------------+-----------+-------------------------------+------------------------------------------------------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Git Push Processor using basic auth*

  - processorName: gitPushProcessor
    remoteRepo:
      url: https://github.com/myuser/mysite.git
      branch: deployed
      username: myuser
      password: mypassword

.. code-block:: yaml
  :linenos:
  :caption: *Git Push Processor using SSH with RSA key pair*

  - processorName: gitPushProcessor
    remoteRepo:
      url: https://github.com/myuser/mysite.git
      branch: deployed
      ssh:
        privateKey:
          path: /home/myuser/myprivatekey
          passphrase: mypassphrase

.. _deployer-git-update-commit-id-processor:

""""""""""""""""""""""""""""""
Git Update Commit Id Processor
""""""""""""""""""""""""""""""
Processor that updates the processed commits value with the current commit

**Example**

.. code-block:: yaml
    :linenos:
    :caption: *Git Update Commit Id Processor*

    - processorName: gitUpdateCommitIdProcessor

.. _deployer-script-processor:

"""""""""""""""""""""""
Groovy Script Processor
"""""""""""""""""""""""
A custom Groovy processor that can process published content.

**Properties**

+------------+-----------+-------------------------------+------------------------------------------------------------+
|Name        |Required   |Default Value                  |Description                                                 |
+============+===========+===============================+============================================================+
|scriptPath  ||checkmark||                               |The relative path of the script to execute                  |
+------------+-----------+-------------------------------+------------------------------------------------------------+

  .. note::  The default path scripts are loaded from is ``$CRAFTER_HOME/bin/crafter-deployer/processors/scripts``

**Example**

.. code-block:: yaml
    :linenos:
    :caption: *Groovy Script Processor*

    - processorName: scriptProcessor
      scriptPath: 'myscripts/mychanges.groovy'

|

The following variables are available for use in your scripts:

==================  ===========
Variable Name       Description
==================  ===========
logger              The processor's logger, http://www.slf4j.org/api/org/slf4j/Logger.html
applicationContext  The application context of the current target, https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/ApplicationContext.html
deployment          The current deployment, :javadoc_base_url:`deployer/org/craftercms/deployer/api/Deployment.html`
execution           The execution for this processor, :javadoc_base_url:`deployer/org/craftercms/deployer/api/ProcessorExecution.html`
filteredChangeSet   A subset of ``originalChangeSet`` that matches the ``includeFiles`` pattern and not the ``excludeFiles`` pattern for this processor, :javadoc_base_url:`deployer/org/craftercms/deployer/api/ChangeSet.html`
originalChangeSet   The original change set returned by the previous processors in the pipeline, :javadoc_base_url:`deployer/org/craftercms/deployer/api/ChangeSet.html`
==================  ===========

|
|

Let's take a look at an example script that you can use for the Groovy script processor.
Below is a script that only includes a file from the change set if a parameter is present in the deployment:

.. code-block:: groovy
   :caption: *Example Groovy script to be run by a script processor*
   :linenos:

   import org.craftercms.deployer.api.ChangeSet

   logger.info("starting script execution")

   def specialFile = "/site/website/expensive-page-to-index.xml"

   // if the file has been changed but the param was not sent then remove it from the change set
   if (originalChangeSet.getUpdatedFiles().contains(specialFile) && !deployment.getParam("index_expensive_page")) {
       originalChangeSet.removeUpdatedFile(specialFile)
   }

   // return the new change set
   return originalChangeSet


"""""""""""""""""""""""""""""""""""""
File Based Deployment Event Processor
"""""""""""""""""""""""""""""""""""""
Processor that triggers a deployment event that consumers of the repository (Crafter Engines) can subscribe to by
reading a file from the repository.

**Properties**

+---------------------------+-----------+--------------------------------+-------------------------------------------+
|Name                       |Required   |Default Value                   |Description                                |
+===========================+===========+================================+===========================================+
|``deploymentEventsFileUrl``|           |``deployment-events.properties``|Relative path of the deployment events file|
+---------------------------+-----------+--------------------------------+-------------------------------------------+
|``eventName``              ||checkmark||                                |Name of the event to trigger               |
+---------------------------+-----------+--------------------------------+-------------------------------------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *File Based Deployment Event Processor*

  - processorName: fileBasedDeploymentEventProcessor
    eventName: 'events.deployment.rebuildContext'

.. _deployer-command-line-processor:

""""""""""""""""""""""
Command Line Processor
""""""""""""""""""""""
Processor that runs a command line process.

**Properties**

+----------------------+-----------+--------------------+-------------------------------------------------------+
|Name                  |Required   |Default Value       |Description                                            |
+======================+===========+====================+=======================================================+
|``workingDir``        |           |Deployer's directory|The directory from which the process will run          |
+----------------------+-----------+--------------------+-------------------------------------------------------+
|``command``           ||checkmark||                    |The full command that the process will run             |
+----------------------+-----------+--------------------+-------------------------------------------------------+
|``processTimeoutSecs``|           |``30``              |The amount of seconds to wait for the process to finish|
+----------------------+-----------+--------------------+-------------------------------------------------------+
|``includeChanges``    |           |``false``           |Additional parameters will be added to the command     |
|                      |           |                    |                                                       |
|                      |           |                    ||includeChangesTrue|                                   |
+----------------------+-----------+--------------------+-------------------------------------------------------+

.. |includeChangesTrue| replace:: **Example:** script.sh SITE_NAME OPERATION (CREATE | UPDATE | DELETE) FILE (relative path of the file)

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Command Line Processor*

  - processorName: commandLineProcessor
    workingDir: '/home/myuser/myapp/bin'
    command: 'myapp -f --param1=value1'


.. _deployer-search-indexing-processor:

"""""""""""""""""""""""""
Search Indexing Processor
"""""""""""""""""""""""""
Processor that indexes the files on the change set, using one or several BatchIndexer. After the files have been
indexed it submits a commit.

**Properties**

+----------------------------------+--------+---------------------+---------------------------------------------------+
|Name                              |Required|Default Value        |Description                                        |
+==================================+========+=====================+===================================================+
|``ignoreIndexId``                 |        |``false``            |If the index ID should be ignored                  |
+----------------------------------+--------+---------------------+---------------------------------------------------+
|``indexId``                       |        |Value of ``siteName``|The specific index ID to use                       |
+----------------------------------+--------+---------------------+---------------------------------------------------+
|``reindexItemsOnComponentUpdates``|        |``true``             |Flag that indicates that if a component is updated,|
|                                  |        |                     |all other pages and components that include it     |
|                                  |        |                     |should be updated too                              |
+----------------------------------+--------+---------------------+---------------------------------------------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Search Indexing Processor*

  - processorName: searchIndexingProcessor

""""""""""""""""""""""""""
HTTP Method Call Processor
""""""""""""""""""""""""""
Processor that does a HTTP method call.

**Properties**

+----------+-----------+-------------+---------------+
|Name      |Required   |Default Value|Description    |
+==========+===========+=============+===============+
|``url``   ||checkmark||             |The URL to call|
+----------+-----------+-------------+---------------+
|``method``||checkmark||             |The HTTP method|
+----------+-----------+-------------+---------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *HTTP Method Call Processor*

  - processorName: httpMethodCallProcessor
    method: GET
    url: 'http://localhost:8080/api/1/site/cache/clear.json?crafterSite=mysite'

"""""""""""""""
Delay Processor
"""""""""""""""
Processor that stops the pipeline execution for a given number of seconds.

**Properties**

+-----------+--------+-------------+-------------------------+
|Name       |Required|Default Value|Description              |
+===========+========+=============+=========================+
|``seconds``|        |``5``        |Amount of seconds to wait|
+-----------+--------+-------------+-------------------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Delay Processor*

  - processorName: delayProcessor
    seconds: 10

.. _deployer-target-find-replace-processor:

""""""""""""""""""""""""""
Find And Replace Processor
""""""""""""""""""""""""""
Processor that replaces a pattern on the content of the created or updated files.

.. note::
  The files changed by this processor will not be committed to the git repository and will be discarded when the next
  deployment starts

**Properties**

+---------------+-----------+-------------+--------------------------------------------------------------+
|Name           |Required   |Default Value|Description                                                   |
+===============+===========+=============+==============================================================+
|``textPattern``||checkmark||             |Regular expression to search in files                         |
+---------------+-----------+-------------+--------------------------------------------------------------+
|``replacement``||checkmark||             |Expression to replace the matches                             |
+---------------+-----------+-------------+--------------------------------------------------------------+
||failDep|      |           |``true``     |Enables failing a deployment when there's a processor failure |
+---------------+-----------+-------------+--------------------------------------------------------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Find And Replace Processor*

  - processorName: findAndReplaceProcessor
    textPattern: (/static-assets/[^&quot;&lt;]+)
    replacement: 'http://mycdn.com$1'

""""""""""""""
AWS Processors
""""""""""""""
All deployment processors related to AWS services support the following properties:

+-------------+-----------+---------------------------+-------------------------------------------------------------+
|Name         |Required   |Default Value              |Description                                                  |
+=============+===========+===========================+=============================================================+
|``region``   |           |If not provided the AWS SDK|The AWS Region                                               |
+-------------+-----------+                           +-------------------------------------------------------------+
|``accessKey``|           |default providers will be  |The AWS Access Key                                           |
+-------------+-----------+                           +-------------------------------------------------------------+
|``secretKey``|           |used                       |The AWS Secret Key                                           |
+-------------+-----------+---------------------------+-------------------------------------------------------------+
|``url``      ||checkmark||                           |AWS S3 bucket URL to upload files                            |
+-------------+-----------+---------------------------+-------------------------------------------------------------+
||failDep|    |           |``true``                   |Enables failing a deployment when there's a processor failure|
+-------------+-----------+---------------------------+-------------------------------------------------------------+

|

.. _deployer-s3-sync-processor:

~~~~~~~~~~~~~~~~~
S3 Sync Processor
~~~~~~~~~~~~~~~~~
Processor that syncs files to an AWS S3 Bucket.


**Example**

.. code-block:: yaml
  :linenos:
  :caption: *S3 Sync Processor*

  - processorName: s3SyncProcessor
    url: s3://serverless-sites/site/mysite


.. |defaultS3E| replace:: ``deployment-events.properties``

.. _deployer-s3-deployment-events-processor:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
S3 Deployment Events Processor
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Processor that uploads the deployment events to an AWS S3 Bucket

**Properties**

+---------------------------+-----------+------------------+----------------------------------------------------------+
|Name                       |Required   |Default Value     |Description                                               |
+===========================+===========+==================+==========================================================+
|``deploymentEventsFileUrl``|           ||defaultS3E|      |URL of the deployment events file, relative to the local  |
|                           |           |                  |git repo                                                  |
+---------------------------+-----------+------------------+----------------------------------------------------------+

**Example**

.. code-block:: yaml
    :linenos:
    :caption: *S3 Deployment Events Processor*

    - processorName: s3DeploymentEventsProcessor
      region: ${aws.region}
      accessKey: ${aws.accessKey}
      secretKey: ${aws.secretKey}
      url: {{aws.s3.url}}



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Cloudfront Invalidation Processor
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Processor that invalidates the changed files in the given AWS Cloudfront distributions.

**Properties**

+-----------------+-----------+-------------+-------------------------+
|Name             |Required   |Default Value|Description              |
+=================+===========+=============+=========================+
|``distributions``||checkmark||             |List of distributions ids|
+-----------------+-----------+-------------+-------------------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Cloud Front Invalidation Processor*

  - processorName: cloudfrontInvalidationProcessor
    distributions:
      - E15UHQPTKROC8Z

^^^^^^^^^^^^^^^^^^^^^^^^^^
Post Deployment Processors
^^^^^^^^^^^^^^^^^^^^^^^^^^
The post deployment processors assume that all changed files have been handled and the result of the deployment is
already known (either successful or failed) and take actions based on those results, because of that they need to be
placed after all main deployment processors to work properly.

"""""""""""""""""""""
File Output Processor
"""""""""""""""""""""
Post processor that writes the deployment result to an output CSV file under ``CRAFTER_HOME/logs/deployer`` for later access, whenever a deployment fails or
files were processed.

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *File Output Processor*

  - processorName: fileOutputProcessor

.. _deployer-mail-notification-processor:

"""""""""""""""""""""""""""
Mail Notification Processor
"""""""""""""""""""""""""""
Post processor that sends an email notification with the result of a deployment, whenever a deployment fails or files
were processed. The output file generated by the ``fileOutputProcessor`` is attached if it's available.

**Properties**

+-------------------+-----------+-------------------------------+-----------------------------------------------------+
|Name               |Required   |Default Value                  |Description                                          |
+===================+===========+===============================+=====================================================+
|``templateName``   |           |``default``                    |The name of the Freemarker template used for email   |
|                   |           |                               |creation                                             |
+-------------------+-----------+-------------------------------+-----------------------------------------------------+
|``from``           |           |``noreply@example.com``        |The value of the From field in the emails            |
+-------------------+-----------+-------------------------------+-----------------------------------------------------+
|``to``             ||checkmark||                               |The value of the To field in the emails              |
+-------------------+-----------+-------------------------------+-----------------------------------------------------+
|``subject``        |           |``Deployment Report``          |The value of the Subject field in the emails         |
+-------------------+-----------+-------------------------------+-----------------------------------------------------+
|``html``           |           |``true``                       |Whether the emails are HTML                          |
+-------------------+-----------+-------------------------------+-----------------------------------------------------+
|``serverName``     |           |Current local host name        |The hostname of the email server                     |
+-------------------+-----------+-------------------------------+-----------------------------------------------------+
|``dateTimePattern``|           |``MM/dd/yyyy hh:mm:ss.SSS a z``|The date time pattern to use when specifying a date  |
|                   |           |                               |in the email                                         |
+-------------------+-----------+-------------------------------+-----------------------------------------------------+
|``status``         |           |``ON_ANY_STATUS``              |Indicates for which deployment status emails should  |
|                   |           |                               |be sent                                              |
+-------------------+-----------+-------------------------------+-----------------------------------------------------+
|``status``         |           |``ON_ANY_STATUS``              |Indicates for which deployment status emails         |
|                   |           |                               |should be sent.                                      |
|                   |           |                               |                                                     |
|                   |           |                               |Possible values:                                     |
|                   |           |                               |                                                     |
|                   |           |                               |- **ON_ANY_STATUS** Notifications sent for all       |
|                   |           |                               |  deployments                                        |
|                   |           |                               |- **ON_ANY_FAILURE** Notifications sent for          |
|                   |           |                               |  deployments where at least one processor has failed|
|                   |           |                               |- **ON_TOTAL_FAILURE** Notifications will be sent    |
|                   |           |                               |  for deployments in which the general status        |
|                   |           |                               |  indicates failure                                  |
+-------------------+-----------+-------------------------------+-----------------------------------------------------+

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Mail Notification Processor for any failure*

  - processorName: mailNotificationProcessor
    to:
      - admin@example.com
      - author@example.com
    status: ON_ANY_FAILURE

^^^^^^^^^^^^^^^^^^^^^
Full Pipeline Example
^^^^^^^^^^^^^^^^^^^^^
The following example shows how the deployment processors work together to deliver a serverless site using AWS services.

.. code-block:: yaml
  :linenos:
  :caption: *Serverless Delivery Pipeline*

  pipeline:
    # -------------------- START OF MAIN PIPELINE --------------------

    # First clone or update the local repository from github
    - processorName: gitPullProcessor
      remoteRepo:
        url: https://github.com/myuser/mysite.git
        branch: live
        username: myuser
        password: my_secret_password

    # Then find the added/changed/deleted files since the previous pull (if any)

    - processorName: gitDiffProcessor

    # Change all references to static-assets to use a CDN URL instead of the local URL
    - processorName: findAndReplaceProcessor
      includeFiles: ['^/site/.*$', '^/templates/.*$', '^/static-assets/.*(js|css|html)$']
      textPattern: (/static-assets/[^&quot;&lt;]+)
      replacement: 'http://d111111abcdef8.cloudfront.net$1'

    # Index the changes in search
    - processorName: searchIndexingProcessor

    # Sync the changes in a S3 bucket
    - processorName: s3SyncProcessor
      url: s3://serverless-sites/site/mysite

    # Add a small delay to allow the S3 changes to propagate
    - processorName: delayProcessor

    # Invalidate the changed files in the CDN
    - processorName: cloudfrontInvalidationProcessor
      includeFiles: ['^/static-assets/.*$']
      distributions:
        - E15UHQPTKROC8Z

    # Trigger deployment events so any Crafter Engine listening can update accordingly:
    # Rebuild the site context if any config or script has changed
    - processorName: fileBasedDeploymentEventProcessor
      includeFiles: ["^/?config/.*$", "^/?scripts/.*$"]
      excludeFiles: ['^/config/studio/content-types/.*$']
      eventName: 'events.deployment.rebuildContext'

    # Clear the cache if any static-asset has changed
    - processorName: fileBasedDeploymentEventProcessor
      excludeFiles: ['^/static-assets/.*$']
      eventName: 'events.deployment.clearCache'

    # Rebuild the GraphQL schema if any content-type has changed
    - processorName: fileBasedDeploymentEventProcessor
      includeFiles: ['^/config/studio/content-types/.*$']
      eventName: 'events.deployment.rebuildGraphQL'

    # Push the updated events to the S3 bucket
    - processorName: s3SyncProcessor
      includeFiles: ['^/?deployment-events\.properties$']
      url: s3://serverless-sites/site/mysite

    # -------------------- END OF MAIN PIPELINE --------------------
    # Only Post Processors can be in this section

    # Record the result of the deployment to a CSV file
    - processorName: fileOutputProcessor

    # Notify the site admin & an author if there were any failures during the deployment
    - processorName: mailNotificationProcessor
      to:
        - admin@example.com
        - author@example.com
      status: ON_ANY_FAILURE

|hr|

.. _custom-processors:

^^^^^^^^^^^^^^^^^
Custom Processors
^^^^^^^^^^^^^^^^^
Crafter Deployer can be easily configured to match different needs but in case additional features are needed it is
also possible to include custom libraries by following this guide:

"""""""""""""""""""""""""""""""""""
Step 1: Create the custom processor
"""""""""""""""""""""""""""""""""""
Custom processors are completely free to use any third party library or SDK, the only requisite is to define a class
that implements the ``DeploymentProcessor`` interface.

.. note::
    It is highly recommended to extend ``AbstractDeploymentProcessor`` or ``AbstractMainDeploymentProcessor`` instead of
    just implementing the interface.

These classes can be accessed by adding a dependency in your project:

.. code-block:: xml

    <dependency>
      <groupId>org.craftercms</groupId>
      <artifactId>crafter-deployer</artifactId>
      <version>${craftercms.version}</version>
    </dependency>

""""""""""""""""""""""""""""""""
Step 2: Add the custom processor
""""""""""""""""""""""""""""""""
Custom processors are included to the Crafter Deployer classpath by adding all the required jar files in the following
folder:

  ``INSTALL_DIR/bin/crafter-deployer/lib``

.. note::
    Make sure to carefully review all other dependencies in your project to make sure there are no conflicts with
    the libraries used by Crafter Deployer or any other custom processor.

""""""""""""""""""""""""""""""""""""""
Step 3: Configure the custom processor
""""""""""""""""""""""""""""""""""""""
Once the custom processor is placed in the classpath, the only remaining step is to create o update a target to use it.
All configuration files for targets will be placed in the following folder:

  ``INSTALL_DIR/data/deployer/targets``

First you need to create or update a context file to define all beans required by the custom processor, the file should
be have the name ``{site}-{env}-context.xml``:

.. code-block:: xml

    <bean id="externalService" class="com.example.Service">
      <property name="url" value="${service.url}"/>
      <property name="port" value="${service.port}"/>
    </bean>

    <bean id="myCustomProcessor" class="com.example.CustomProcessor" parent="deploymentProcessor">
      <property name="service" ref="externalService"/>
    </bean>

.. note::
    The parent bean is provided by Crafter Deployer and it includes common configuration used by the
    ``AbstractDeploymentProcessor`` and ``AbstractMainDeploymentProcessor`` classes.

Once the bean has been defined it can be added to the target's pipeline in the yaml file with the matching name
``{site}-{env}.yaml``:

.. code-block:: yaml

    target:
      env: preview
      siteName: mySite
      deployment:
        scheduling:
          enabled: false
        pipeline:
          - processorName: myCustomProcessor
            username: john
            password: passw0rd!
    service:
      url: http://www.example.com
      port: 8080


Any change in the classpath will require a restart of Crafter Deployer, changes in configuration files will be
applied when the target is reloaded.

|hr|

.. _crafter-deployer-templates-guide:

----------------
Target Templates
----------------
When you are creating a target in Crafter Deployer, you can use one of the included templates that can be easily
customized with additional parameters during the creation.

^^^^^^^^^^^^^^^^^^
Built-in Templates
^^^^^^^^^^^^^^^^^^
All target templates support the following parameters:

+-------------+-----------+------------------------------------+
|Name         |Required   |Description                         |
+=============+===========+====================================+
|``env``      ||checkmark||The target’s environment (e.g. dev) |
+-------------+-----------+------------------------------------+
|``site_name``||checkmark||The target’s site name (e.g. mysite)|
+-------------+-----------+------------------------------------+
|``repo_url`` ||checkmark||The target's repository URL         |
+-------------+-----------+------------------------------------+

""""""""""""""""
Authoring Target
""""""""""""""""
This is one of the templates used by Crafter Studio when a new project/site is created, this template will setup a target for
Studio's search features including: indexing all xml files, binary files and indexing additional Git metadata from the
site repository.

This target will:

- Identify the changed files according to the local Git repository history
- Index all site content in search

**Parameters**

This target has no additional parameters.

.. note:: When this target is used, the value of ``repo_url`` must be a local filesystem path

""""""""""""
Local Target
""""""""""""
This is the other template used by Crafter Studio when a new project is created, this template will setup a target for
previewing the project.

This target will:

- Identify the changed files according to the local Git repository history
- Index all project content in search
- Rebuild Crafter Engine's site context when there are changes in configuration files or Groovy scripts
- Clear Crafter Engine's cache
- Rebuild Crafter Engine's project GraphQL schema when there are changes in content-type definitions
- Send email notifications if enabled

**Parameters**

+--------------------------+----------+------------------------------------------------------------------------+
|Name                      |Required  |Description                                                             |
+==========================+==========+========================================================================+
|``disable_deploy_cron``   |          |Disables the cron job that runs deployments every certain amount of time|
+--------------------------+----------+------------------------------------------------------------------------+
|``notification_addresses``|          |The email addresses that should receive deployment notifications        |
+--------------------------+----------+------------------------------------------------------------------------+

.. note:: When this target is used, the value of ``repo_url`` must be a local filesystem path

"""""""""""""
Remote Target
"""""""""""""
This is the default template used for Crafter Engine in delivery environments, it is very similar to the Local Target
but it adds support for remote Git repositories.

This target will:

- Clone the remote repository if needed
- Pull the latest changes from the remote repository (discarding any local uncommitted or conflicting files)
- Identify the changed files according to the Git repository history
- Index all project content in the appropriate search engine
- Rebuild Crafter Engine's site context when there are changes in configuration files or Groovy scripts
- Clear Crafter Engine's cache
- Rebuild Crafter Engine's project GraphQL schema when there are changes in content-type definitions
- Send email notifications if enabled

**Parameters**

+------------------------------+----------+------------------------------------------------------------------------+
|Name                          |Required  |Description                                                             |
+==============================+==========+========================================================================+
|``disable_deploy_cron``       |          |Disables the cron job that runs deployments every certain amount of time|
+------------------------------+----------+------------------------------------------------------------------------+
|``repo_branch``               |          |The branch name of the remote Git repo to pull from                     |
+------------------------------+----------+------------------------------------------------------------------------+
|``repo_username``             |          |Username to access remote repository                                    |
+------------------------------+----------+------------------------------------------------------------------------+
|``repo_password``             |          |Password to access remote repository                                    |
+------------------------------+----------+------------------------------------------------------------------------+
|``ssh_private_key_path``      |          |The path for the private key to access remote repository                |
+------------------------------+----------+------------------------------------------------------------------------+
|``ssh_private_key_passphrase``|          |The passphrase for the private key to access remote repository (only if |
|                              |          |the key is passphrase-protected)                                        |
+------------------------------+----------+------------------------------------------------------------------------+
|``notification_addresses``    |          |The email addresses that should receive deployment notifications        |
+------------------------------+----------+------------------------------------------------------------------------+

.. note:: When this target is used, the value of ``repo_url`` must be a supported Git URL (HTTP or SSH)

"""""""""""""
AWS S3 Target
"""""""""""""
This template is used for Crafter Engine in serverless delivery environments, it is very similar to the Remote Target
but it adds support for syncing files to an AWS S3 bucket and also handles AWS Cloudfront invalidations.

This target will:

- Clone the remote repository if needed
- Pull the latest changes from the remote repository (discarding any local uncommitted or conflicting files)
- Identify the changed files according to the Git repository history
- Index all project content in search
- Sync all new, updated and deleted files to an AWS S3 bucket
- Execute an invalidation for all updated files in one or more AWS Cloudfront distributions
- Submit deployments events for all Crafter Engine instances:

  - Rebuild the site context when there are changes in configuration files or Groovy scripts
  - Clear the project cache
  - Rebuild the site GraphQL schema when there are changes in content-type definitions

- Send email notifications if enabled

**Parameters**

+------------------------------+-----------+------------------------------------------------------------------------+
|Name                          |Required   |Description                                                             |
+==============================+===========+========================================================================+
|``aws.region``                |           |The AWS Region to use                                                   |
+------------------------------+-----------+------------------------------------------------------------------------+
|``aws.access_key``            |           |The AWS Access Key to use                                               |
+------------------------------+-----------+------------------------------------------------------------------------+
|``aws.secret_key``            |           |The AWS Secret Key to use                                               |
+------------------------------+-----------+------------------------------------------------------------------------+
|``aws.distribution.ids``      |           |An array of AWS Cloudfront distribution ids to execute invalidations    |
+------------------------------+-----------+------------------------------------------------------------------------+
|``aws.s3.url``                ||checkmark||The full AWS S3 URI of the folder to sync files                         |
+------------------------------+-----------+------------------------------------------------------------------------+
|``disable_deploy_cron``       |           |Disables the cron job that runs deployments every certain amount of time|
+------------------------------+-----------+------------------------------------------------------------------------+
|``local_repo_path``           |           |The local path where to put the remote Git repo clone                   |
+------------------------------+-----------+------------------------------------------------------------------------+
|``repo_branch``               |           |The branch name of the remote Git repo to pull from                     |
+------------------------------+-----------+------------------------------------------------------------------------+
|``repo_username``             |           |Username to access remote repository                                    |
+------------------------------+-----------+------------------------------------------------------------------------+
|``repo_password``             |           |Password to access remote repository                                    |
+------------------------------+-----------+------------------------------------------------------------------------+
|``ssh_private_key_path``      |           |The path for the private key to access remote repository                |
+------------------------------+-----------+------------------------------------------------------------------------+
|``ssh_private_key_passphrase``|           |The passphrase for the private key to access remote repository (only if |
|                              |           |the key is passphrase-protected)                                        |
+------------------------------+-----------+------------------------------------------------------------------------+
|``notification_addresses``    |           |The email addresses that should receive deployment notifications        |
+------------------------------+-----------+------------------------------------------------------------------------+

.. note:: When this target is used, the value of ``repo_url`` must be a supported Git URL (HTTP or SSH)

.. note:: For more details about setting up a serverless delivery see :ref:`setup-serverless-delivery`

"""""""""""""""""""""""""
AWS CloudFormation Target
"""""""""""""""""""""""""
This template is used to provide a serverless delivery environment without the need to manually create all required
resources in AWS. It works similar to the AWS S3 Target but uses an AWS CloudFormation template to create the AWS
resources on target creation: the S3 bucket where the site content will be stored and a CloudFront distribution that
will front an Engine load balancer and deliver the static assets directly from the S3 bucket. These resources will be
deleted when the target is deleted.

This target will:

- Clone the remote repository if needed
- Pull the latest changes from the remote repository (discarding any local uncommitted or conflicting files)
- Identify the changed files according to the Git repository history
- Index all project content in search
- Sync all new, updated and deleted files to an AWS S3 bucket
- Execute an invalidation for all updated files in the AWS CloudFront distribution
- Submit deployments events for all Crafter Engine instances:

  - Rebuild the site context when there are changes in configuration files or Groovy scripts
  - Clear the site cache
  - Rebuild the site GraphQL schema when there are changes in content-type definitions

- Send email notifications if enabled

**Parameters**

+-----------------------------------------------------+-----------+----------------------------------------------------+
|Name                                                 |Required   |Description                                         |
+=====================================================+===========+====================================================+
|``aws.region``                                       |           |The AWS Region to use                               |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``aws.default_access_key``                           |           |The AWS Access Key to use for S3 and CloudFront     |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``aws.default_secret_key``                           |           |The AWS Secret Key to use for S3 and CloudFront     |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``aws.cloudformation.namespace``                     ||checkmark||Prefix to use for CloudFormation resource names     |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``aws.cloudformation.deliveryLBDomainName``          ||checkmark||The domain name of the Engine delivery LB           |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``aws.cloudformation.cloudfrontCertificateArn``      |           |The ARN of the CloudFront SSL certificate           |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``aws.cloudformation.alternateCloudFrontDomainNames``|           |The alternate domain names for the CloudFront to use|
|                                                     |           |(must match the valid certificate domain names)     |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``aws.cloudformation.access_key``                    |           |The AWS Access Key to use for CloudFormation        |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``aws.cloudformation.secret_key``                    |           |The AWS Secret Key to use for CloudFormation        |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``disable_deploy_cron``                              |           |Disables the cron job that runs deployments every   |
|                                                     |           |certain amount of time                              |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``local_repo_path``                                  |           |The local path where to put the remoe Git repo clone|
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``repo_branch``                                      |           |The branch name of the remote Git repo to pull from |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``repo_username``                                    |           |Username to access remote repository                |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``repo_password``                                    |           |Password to access remote repository                |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``ssh_private_key_path``                             |           |The path for the private key to access remote       |
|                                                     |           |repository                                          |
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``ssh_private_key_passphrase``                       |           |The passphrase for the private key to access remote |
|                                                     |           |repository (only if the key is passphrase-protected)|
+-----------------------------------------------------+-----------+----------------------------------------------------+
|``notification_addresses``                           |           |The email addresses that should receive deployment  |
|                                                     |           |notifications                                       |
+-----------------------------------------------------+-----------+----------------------------------------------------+

.. note:: When this target is used, the value of ``repo_url`` must be a supported Git URL (HTTP or SSH)

|hr|

.. _crafter-deployer-search-configuration-guide:

--------------------
Search Configuration
--------------------
Crafter Deployer provides two ways to use search:

^^^^^^^^^^^^^^^^^^^^^
Single Search Cluster
^^^^^^^^^^^^^^^^^^^^^
This is the most common configuration used, all operations will be performed on a single search cluster:

.. code-block:: yaml
  :linenos:
  :caption: Target configuration for a single search cluster

    target:
      search:
        openSearch:
          # Single cluster
          urls:
            - ${env:SEARCH_URL}
          username: ${env:SEARCH_USERNAME}
          password: ${env:SEARCH_PASSWORD}
          timeout:
            # The connection timeout in milliseconds, if set to -1 the default will be used
            connect: -1
            # The socket timeout in milliseconds, if set to -1 the default will be used
            socket: -1
          # The number of threads to use, if set to -1 the default will be used
          threads: -1
          # Indicates if keep alive should be enabled for sockets used by the search client, defaults to false
          keepAlive: false

^^^^^^^^^^^^^^^^^^^^^^^^
Multiple Search Clusters
^^^^^^^^^^^^^^^^^^^^^^^^
Using this configuration all read operations will be performed on one search cluster but write operations will
be performed on multiple search clusters:

.. code-block:: yaml
  :linenos:
  :caption: Target configuration for multiple search clusters

    target:
      search:
        openSearch:
          # Global auth, used for all clusters
          username: search
          password: passw0rd
          # Cluster for read operations
          readCluster:
            urls:
              - 'http://read-cluster-node-1:9200'
              - 'http://read-cluster-node-2:9200'
              # This cluster will use the global auth
          # Clusters for write operations
          writeClusters:
            - urls:
              - 'http://write-cluster-1-node-1:9200'
              - 'http://write-cluster-1-node-2:9200'
              # This cluster will use the global auth
            - urls:
              - 'http://write-cluster-2-node-1:9200'
              - 'http://write-cluster-2-node-2:9200'
              # Override the global auth for this cluster
              username: search2
              password: passw0rd2

^^^^^^^^^^^^^^^^^^^
Configuration Files
^^^^^^^^^^^^^^^^^^^
The search configuration can be changed in two places:

#. Global configuration file ``$CRAFTER_HOME/bin/crafter-deployer/config/base-target.yaml``, this will be applied to
   all targets loaded.

#. Individual target configuration file ``$CRAFTER_HOME/data/deployer/targets/{siteName}-{environment}.yaml``

|hr|

.. _crafter-deployer-api:

--------
REST API
--------
To view the Crafter Deployer REST APIs:

.. open_iframe_modal_button::
   :label: Open here
   :url: ../../../_static/api/deployer.html
   :title: Deployer API

.. raw:: html

    or <a href="../../../_static/api/deployer.html" target="_blank">in a new tab</a>

|

|hr|

-----------
Source Code
-----------
Crafter Deployer's source code is managed in GitHub: https://github.com/craftercms/deployer
