:is-up-to-date: True

.. _crafter-deployer-processors-guide:

=========================
Deployer Processors Guide
=========================

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

--------------------------
Main Deployment Processors
--------------------------

The main deployment processors can do any task related to detect changed files or process changed files that were
detected by other processors. To process changed files a processor may interact with any external service as needed.

All deployment processors support the following properties:

+-------------------+--------+-------------+----------------------------------------------------------------------+
|Name               |Required|Default Value|Description                                                           |
+===================+========+=============+======================================================================+
|``processorLabel`` |        |None         |Label that other processors can use to jump to this one               |
+-------------------+--------+-------------+----------------------------------------------------------------------+
|``jumpTo``         |        |None         |The label of the processor to jump to after a successful execution    |
+-------------------+--------+-------------+----------------------------------------------------------------------+
|``includeFiles``   |        |None         |List of regular expressions to check the files that should be included|
+-------------------+--------+-------------+----------------------------------------------------------------------+
|``excludeFiles``   |        |None         |List of regular expressions to check the files that should be excluded|
+-------------------+--------+-------------+----------------------------------------------------------------------+
|``alwaysRun``      |        |``false``    |Indicates if the processor should run even if there are no changes in |
|                   |        |             |the current deployment                                                |
+-------------------+--------+-------------+----------------------------------------------------------------------+
||failDep|          |        |``false``    |Enables failing a deployment when there's a processor failure         |
+-------------------+--------+-------------+----------------------------------------------------------------------+

.. |lBranch| replace:: ``localRepoBranch``
.. |URL| replace:: ``remoteRepo.url``
.. |Name| replace:: ``remoteRepo.name``
.. |Branch| replace:: ``remoteRepo.branch``
.. |username| replace:: ``remoteRepo.username``
.. |password| replace:: ``remoteRepo.password``

.. |path| replace:: ``remoteRepo.ssh.privateKey.path``
.. |passphrase| replace:: ``remoteRepo.ssh.privateKey.passphrase``


^^^^^^^^^^^^^^^^^^
Git Pull Processor
^^^^^^^^^^^^^^^^^^

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

^^^^^^^^^^^^^^^^^^
Git Diff Processor
^^^^^^^^^^^^^^^^^^

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

^^^^^^^^^^^^^^^^^^
Git Push Processor
^^^^^^^^^^^^^^^^^^

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

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Git Update Commit Id Processor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Processor that updates the processed commits value with the current commit

**Example**

.. code-block:: yaml
    :linenos:
    :caption: *Git Update Commit Id Processor*

    - processorName: gitUpdateCommitIdProcessor


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
File Based Deployment Event Processor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

^^^^^^^^^^^^^^^^^^^^^^
Command Line Processor
^^^^^^^^^^^^^^^^^^^^^^

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

^^^^^^^^^^^^^^^^^^^^^^^^^
Search Indexing Processor
^^^^^^^^^^^^^^^^^^^^^^^^^

Processor that indexes the files on the change set, using one or several BatchIndexer. After the files have been
indexed it submits a commit.

.. note::
  This processor uses the Crafter Search API to index in Apache Solr, it should be used only for sites from ``3.0.x``
  that will not be migrated to Elasticsearch.

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

.. _deployer-es-indexing-processor:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Elasticsearch Search Indexing Processor
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
  :caption: *Elasticsearch Indexing Processor*

  - processorName: elasticsearchIndexingProcessor

^^^^^^^^^^^^^^^^^^^^^^^^^^
HTTP Method Call Processor
^^^^^^^^^^^^^^^^^^^^^^^^^^

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

^^^^^^^^^^^^^^^
Delay Processor
^^^^^^^^^^^^^^^

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

^^^^^^^^^^^^^^^^^^^^^^^^^^
Find And Replace Processor
^^^^^^^^^^^^^^^^^^^^^^^^^^

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

^^^^^^^^^^^^^^
AWS Processors
^^^^^^^^^^^^^^

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

--------------------------
Post Deployment Processors
--------------------------

The post deployment processors assume that all changed files have been handled and the result of the deployment is 
already known (either successful or failed) and take actions based on those results, because of that they need to be
placed after all main deployment processors to work properly.

^^^^^^^^^^^^^^^^^^^^^
File Output Processor
^^^^^^^^^^^^^^^^^^^^^

Post processor that writes the deployment result to an output CSV file under ``CRAFTER_HOME/logs/deployer`` for later access, whenever a deployment fails or
files were processed.

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *File Output Processor*

  - processorName: fileOutputProcessor

^^^^^^^^^^^^^^^^^^^^^^^^^^^
Mail Notification Processor
^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

**Example**

.. code-block:: yaml
  :linenos:
  :caption: *Mail Notification Processor for any failure*

  - processorName: mailNotificationProcessor
    to:
      - admin@example.com
      - author@example.com
    status: ON_ANY_FAILURE

---------------------
Full Pipeline Example
---------------------

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
      
    # Index the changes in Elasticsearch
    - processorName: elasticsearchIndexingProcessor
    
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
