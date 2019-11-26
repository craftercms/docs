:is-up-to-date: True

.. _crafter-deployer-templates-guide:

======================
Target Templates Guide
======================

When you are creating a target in Crafter Deployer, you can use one of the included templates that can be easily
customized with additional parameters during the creation.

------------------
Built-in Templates
------------------

All target templates support the following parameters:

+-------------+-----------+-----------------------------------+
|Name         |Required   |Description                        |
+=============+===========+===================================+
|``env``      ||checkmark||The target’s environment (e.g dev) |
+-------------+-----------+-----------------------------------+
|``site_name``||checkmark||The target’s site name (e.g mysite)|
+-------------+-----------+-----------------------------------+
|``repo_url`` ||checkmark||The target's repository URL        |
+-------------+-----------+-----------------------------------+

^^^^^^^^^^^^^^^^
Authoring Target
^^^^^^^^^^^^^^^^

This is one of the templates used by Crafter Studio when a new site is created, this template will setup a target for 
Studio's search features including: indexing all xml files, binary files and indexing additional Git metadata from the
site repository.

This target will:

- Identify the changed files according to the local Git repository history
- Index all site content in Elasticsearch (even if the site uses Crafter Search with Solr)

**Parameters**

This target has no additional parameters.

.. note:: When this target is used, the value of ``repo_url`` must be a local filesystem path

^^^^^^^^^^^^
Local Target
^^^^^^^^^^^^

This is the other template used by Crafter Studio when a new site is created, this template will setup a target for
previewing the site.

This target will:

- Identify the changed files according to the local Git repository history
- Index all site content in the appropriate search engine, Elasticsearch or Crafter Search with Solr
- Rebuild Crafter Engine's site context when there are changes in configuration files or Groovy scripts
- Clear Crafter Engine's cache
- Rebuild Crafter Engine's site GraphQL schema when there are changes in content-type definitions
- Send email notifications if enabled

**Parameters**

+--------------------------+----------+------------------------------------------------------------------------+
|Name                      |Required  |Description                                                             |
+==========================+==========+========================================================================+
|``use_crafter_search``    |          |Indicates if the target should use Crafter Search with Solr instead of  |
|                          |          |Elasticsearch                                                           |
+--------------------------+----------+------------------------------------------------------------------------+
|``disable_deploy_cron``   |          |Disables the cron job that runs deployments every certain amount of time|
+--------------------------+----------+------------------------------------------------------------------------+
|``notification_addresses``|          |The email addresses that should receive deployment notifications        |
+--------------------------+----------+------------------------------------------------------------------------+

.. note:: When this target is used, the value of ``repo_url`` must be a local filesystem path

^^^^^^^^^^^^^
Remote Target
^^^^^^^^^^^^^

This is the default template used for Crafter Engine in delivery environments, it is very similar to the Local Target 
but it adds support for remote Git repositories.

This target will:

- Clone the remote repository if needed
- Pull the latest changes from the remote repository (discarding any local uncommitted or conflicting files)
- Identify the changed files according to the Git repository history
- Index all site content in the appropriate search engine, Elasticsearch or Crafter Search with Solr
- Rebuild Crafter Engine's site context when there are changes in configuration files or Groovy scripts
- Clear Crafter Engine's cache
- Rebuild Crafter Engine's site GraphQL schema when there are changes in content-type definitions
- Send email notifications if enabled

**Parameters**

+------------------------------+----------+------------------------------------------------------------------------+
|Name                          |Required  |Description                                                             |
+==============================+==========+========================================================================+
|``use_crafter_search``        |          |Indicates if the target should use Crafter Search with Solr instead of  |
|                              |          |Elasticsearch                                                           |
+------------------------------+----------+------------------------------------------------------------------------+
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

^^^^^^^^^^^^^
AWS S3 Target
^^^^^^^^^^^^^

This template is used for Crafter Engine in serverless delivery environments, it is very similar to the Remote Target
but it adds support for syncing files to an AWS S3 bucket and also handles AWS Cloudfront invalidations.

This target will:

- Clone the remote repository if needed
- Pull the latest changes from the remote repository (discarding any local uncommitted or conflicting files)
- Identify the changed files according to the Git repository history
- Index all site content in Elasticsearch
- Sync all new, updated and deleted files to an AWS S3 bucket
- Execute an invalidation for all updated files in one or more AWS Cloudfront distributions
- Submit deployments events for all Crafter Engine instances:

  - Rebuild the site context when there are changes in configuration files or Groovy scripts
  - Clear the site cache
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

.. note:: For more details about setting up a serverless delivery see :ref:`setup-serverless-site`

^^^^^^^^^^^^^^^^^^^^^^
AWS Cloudformed Target
^^^^^^^^^^^^^^^^^^^^^^

This template is used to provide a serverless delivery environment without the need to manually create all required 
resources in AWS. It works similar to the AWS S3 Target but uses an AWS CloudFormation template to create the AWS 
resources on target creation: the S3 bucket where the site content will be stored and a CloudFront distribution that 
will front an Engine load balancer and deliver the static assets directly from the S3 bucket. These resources will be 
deleted when the target is deleted.

This target will:

- Clone the remote repository if needed
- Pull the latest changes from the remote repository (discarding any local uncommitted or conflicting files)
- Identify the changed files according to the Git repository history
- Index all site content in Elasticsearch
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

