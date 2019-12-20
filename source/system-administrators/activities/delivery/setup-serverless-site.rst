:is-up-to-date: True

.. _setup-serverless-site:

=========================
Setup Serverless Delivery
=========================

Crafter CMS can be configured to serve sites directly from AWS services, following this guide you will:

- Create a AWS Elasticsearch domain (optional)
- Configure a Crafter Studio in an authoring environment to call the Crafter Deployer to create an AWS CloudFormation 
  with a CloudFront and S3 bucket for each site
- Configure a Crafter Engine in a delivery environment to read files from the S3 bucket and query to AWS Elasticsearch (optional)

-------------
Prerequisites
-------------

- An AWS account
- A Crafter CMS authoring environment
- A Crafter CMS delivery environment

--------------------------------------------------------------
Step 1: Create an Elasticsearch Domain for Delivery (optional)
--------------------------------------------------------------

Since serverless delivery requires a single Elasticsearch endpoint readable by all Engine instances, we recommed you
create an AWS Elasticsearch domain for delivery. If you don't want to use an AWS Elasticsearch domain then you should
create and mantain your own Elasticsearch cluster.

.. important:: Authoring can also use an Elasticsearch domain, but be aware that in a clustered authoring environment
               each authoring instance requires a separate Elasticsearch instance. If you try to use the same ES domain
               then you will have multiple preview deployers writing to the same index.

To create an AWS Elasticsearch domain please do the following:

#. In the top navigation bar of your AWS console, click the ``Services`` dropdown menu, and search for 
   ``Elasticsearch Service``.
#. Click on ``Create a new domain``.
#. Select a ``Deployment Type`` and on the Elasticsearch version, pick ``6.7``.

   .. image:: /_static/images/system-admin/serverless/es-deployment-type.png
      :alt: Serverless Site - Elasticsearch Deployment Type
      :align: center

#. On the next screen, enter the domain name. Leave the defaults on the rest of the settings or change as needed per
   your environment requirements, then click on ``Next``.
#. On ``Network Configuration``, we recommend you pick the VPC where your delivery nodes reside. If they're not running 
   on an Amazon VPC, then pick ``Public Access``.

   .. image:: /_static/images/system-admin/serverless/es-network-access.png
      :alt: Serverless Site - Elasticsearch Network Access
      :align: center

#. Select the ``Access Policy`` that fits your Crafter environment, and click on ``Next`` (if on the same VPC as 
   delivery, we recommend ``Do not require signing request with IAM credential``).

   .. image:: /_static/images/system-admin/serverless/es-access-policy.png
      :alt: Serverless Site - Elasticsearch Access Policy
      :align: center

#. Review the settings and click on ``Confirm``.
#. Wait for a few minutes until the domain is ready. Copy the ``Endpoint``. You'll need this URL later to configure
   the Deployer and Delivery Engine which will need access to the Elasticsearch.

   .. image:: /_static/images/system-admin/serverless/es-endpoint.png
      :alt: Serverless Site - Elasticsearch Endpoint
      :align: center

--------------------------------------------------
Step 2: Configure the Delivery for Serverless Mode
--------------------------------------------------

#. Edit the services override file to enable the Serverless S3 mode
   (``DELIVERY_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/services-context.xml``):

   .. code-block:: xml
   
      <?xml version="1.0" encoding="UTF-8"?>
      <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

        <import resource="classpath*:crafter/engine/mode/multi-tenant/simple/services-context.xml" />
        <!-- S3 Serverless Mode -->
        <import resource="classpath*:crafter/engine/mode/serverless/s3/services-context.xml" />

      </beans>

#. Edit the properties override file to point Engine to consume the site content from S3
   (``DELIVERY_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``). The
   properties you need to update are the following:

   - ``crafter.engine.site.default.rootFolder.path``
   - ``crafter.engine.s3.region``
   - ``crafter.engine.s3.accessKey``
   - ``crafter.engine.s3.secretKey``

   An example of how the ``server-config.properties`` would look with configuration to read from an S3 bucket per site
   (which is the most common use case), is the following (values in ``X`` are not displayed since they're sensitive):

   .. code-block:: properties

      # Content root folder when using S3 store. Format is s3://<BUCKET_NAME>/<SITES_ROOT>/{siteName}
      crafter.engine.site.default.rootFolder.path=s3://serverless-test-site-{siteName}/{siteName}
      ...

      # S3 Serverless properties
      # S3 region
      crafter.engine.s3.region=us-east-1
      # AWS access key
      crafter.engine.s3.accessKey=XXXXXXXXXX
      # AWS secret key
      crafter.engine.s3.secretKey=XXXXXXXXXXXXXXXXXXXX

   As you can see, the bucket name portion of the root folder S3 URL contains a prefix and then the site name. This
   prefix is mentioned also as a "namespace" later on in the Studio serverless configuration.

   .. important:: You can also provide the AWS region, access key and secret key without having to edit the config file 
                  properties. Please see 
                  `Set up AWS Credentials and Region for Development <https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html>`_.

#. Edit the ``ES_URL`` in ``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh`` to point to the Elasticsearch endpoint you 
   created in the previous step:
      
   .. code-block:: bash

      export ES_URL=https://vpc-serverless-test-jpwyav2k43bb4xebdrzldjncbq.us-east-1.es.amazonaws.com

#. Make sure that the you have an application load balancer (ALB) fronting the Delivery Engine instances and that it's 
   accessible by AWS CloudFront.

-----------------------------------------------------
Step 3: Configure Authoring for Serverless Deployment
-----------------------------------------------------

Instead of having one Crafter Deployer per node in delivery, for serverless you just need a single Deployer uploading
files to S3. The authoring preview deployer can be used also for serverless deployment, when there's only one 
authoring node. When there's multiple authoring nodes (a cluster), then you'll need to have a separate deployer pulling
from a load balanced SSH/HTTPS URL fronting the Studio Git repos.

In both cases you still need to configure Studio to call the Deployer to create the serverless targets on site creation. 
You can find this configuration under ``shared/classes/crafter/studio/extension/studio-config-override.yaml``. The 
properties are well documented in the file so they won't be explained here, but there are still some important things to 
notice:

- You need to add the URL of the Elasticsearch domain created in a previous step under
  ``studio.serverless.delivery.deployer.target.template.params.elasticsearch_url``:

  .. code-block:: yaml
    
    studio.serverless.delivery.deployer.target.template.params:
      # The delivery Elasticsearch endpoint (optional is authoring is using the same one, specified in the ES_URL env variable)
      elastic_search_url: https://vpc-serverless-test-jpwyav2k43bb4xebdrzldjncbq.us-east-1.es.amazonaws.com    

- When using the ``aws-cloudformed-s3`` target template (the default one), the Deployer creates first an AWS 
  CloudFormation stack with an S3 bucket where the site content will be uploaded and a CloudFront that will serve 
  ``/static-assets`` directly and will redirect any other requests to the Delivery Engine LB (which you specify in 
  ``studio.serverless.delivery.deployer.target.template.params.aws.cloudformation.deliveryLBDomainName``).
- The ``aws.cloudformation.namespace`` is basically the prefix of the S3 bucket mentioned in hte previous step. This 
  prefix will be part of the name of most of the AWS resources created by the serverless deployer.
- You need to specify proper AWS credentials for creating the CloudFormation stack and uploading files to S3, which can
  be done in the following ways:

  - As environment variables or under the default AWS credentials path, like explained in
    `Set up AWS Credentials and Region for Development <https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html>`_.
  - In the ``aws.default_access_key`` and ``aws.default_secret_key`` properties under 
    ``studio.serverless.delivery.deployer.target.template.params``:

    .. code-block:: yaml

       studio.serverless.delivery.deployer.target.template.params:
         aws:
           # AWS access key (optional if specified through default AWS chain)
           default_access_key: XXXXXXXXXX
           # AWS secret key (optional if specified through default AWS chain)
           default_secret_key: XXXXXXXXXXXXXXXXXXXX

  - In ``aws.cloudformation.access_key`` and ``aws.cloudformation.secret_key`` properties under 
    ``studio.serverless.delivery.deployer.target.template.params``, when specific CloudFormation credentials are needed:

    .. code-block:: yaml

       studio.serverless.delivery.deployer.target.template.params:
         aws:
           ...
           cloudformation:
             # AWS access key (optional if aws.accessKey is specified)
             access_key: XXXXXXXXXX
             # AWS secret key (optional if aws.secretKey is specified)
             secret_key: XXXXXXXXXXXXXXXXXXXX

- By default, the CloudFront created by Deployer will have a ``*.cloudfront.net`` domain name. To have CloudFront use 
  additional domain name(s) please specify the AWS ARN of the domain SSL certificate (``cloudfrontCertificateArn``) and 
  the altername domain name(s) (``alternateCloudFrontDomainNames``):

  .. code-block:: yaml

     studio.serverless.delivery.deployer.target.template.params:
       aws:
         cloudformation:
           ...
           # The SSL certificate ARN the CloudFront CDN should use (optional when target template is aws-cloudformed-s3)
           cloudfrontCertificateArn: arn:aws:acm:...
           # The alternate domains names (besides *.cloudfront.net) for the CloudFront CDN (optional when target template is aws-cloudformed-s3)
           alternateCloudFrontDomainNames: myawesomesite.com,www.myawesomesite.com

An example of serverless deployment configuration where there's a single authoring instance and no specific domain
name requirements is the following:

.. code-block:: yaml

   ##########################################################
   ##                 Serverless Delivery                  ##
   ##########################################################
   # Indicates if serverless delivery is enabled
   studio.serverless.delivery.enabled: true
   # The URL for the serverless delivery deployer create URL
   studio.serverless.delivery.deployer.target.createUrl: ${studio.preview.createTargetUrl}
   # The URL for the serverless delivery deployer delete URL
   studio.serverless.delivery.deployer.target.deleteUrl: ${studio.preview.deleteTargetUrl}
   # The template name for serverless deployer targets
   studio.serverless.delivery.deployer.target.template: aws-cloudformed-s3
   # Replace existing target configuration if one exists?
   studio.serverless.delivery.deployer.target.replace: false
   # The URL the deployer will use to clone/pull the site's published repo. When the deployer is in a separate node
   # (because of clustering), this URL should be an SSH/HTTP URL to the load balancer in front of the Studios
   studio.serverless.delivery.deployer.target.remoteRepoUrl: ${env:CRAFTER_DATA_DIR}/repos/sites/{siteName}/published
   # The deployer's local path where it will store the clone of the published site. This property is not needed if
   # the deployer is not the preview deployer, so you can leave an empty string ('') instead
   studio.serverless.delivery.deployer.target.localRepoPath: ${env:CRAFTER_DATA_DIR}/repos/aws/{siteName}
   # Parameters for the target template. Please check the deployer template documentation for the possible parameters.
   # The following parameters will be sent automatically, and you don't need to specify them: env, site_name, replace,
   # disable_deploy_cron, local_repo_path, repo_url, use_crafter_search
   studio.serverless.delivery.deployer.target.template.params:
      # The delivery Elasticsearch endpoint (optional if authoring is using the same one, specified in the ES_URL env variable)
      elastic_search_url: https://vpc-serverless-test-jpwyav2k43bb4xebdrzldjncbq.us-east-1.es.amazonaws.com
      aws:
        # AWS access key (optional if specified through default AWS chain)
        default_access_key: XXXXXXXXXX
        # AWS secret key (optional if specified through default AWS chain)
        default_secret_key: XXXXXXXXXXXXXXXXXXXX
        cloudformation:
          # Namespace to use for CloudFormation resources (required when target template is aws-cloudformed-s3)
          namespace: serverless-test
          # The domain name of the serverless delivery LB (required when target template is aws-cloudformed-s3)
          deliveryLBDomainName: serverless-test-lb-1780491458.us-east-1.elb.amazonaws.com


----------------------------------------------------
Step 4: Create the Site in the Authoring Environment
----------------------------------------------------

#. Login to the Crafter Studio in the authoring environment from your browser.
#. Click the ``Create Site`` button
#. Choose the ``Editorial`` blueprint, enter the ``Site Id`` (e.g. ``editorial``), and then review and create.
#. Go to your AWS console in your browser and on the ``Services`` dropdown search for CloudFormation. You should then 
   see  the CloudFormation for the site you just created with the status ``CREATE_IN_PROGRESS``. After a several
   minutes, the status should change to ``CREATE_COMPLETE``, which tells the Crafter Deployer that the it is able to 
   start uploading files to S3.

   .. image:: /_static/images/system-admin/serverless/cloudformation.png
      :alt: Serverless Site - CloudFormation
      :align: center

#. Wait at least 2 minutes for the Crafter Deployer to finish uploading the files and for the delivery Crafter Engine
   to warm up the new site in cache.

   .. code-block:: none
      :caption: deployer.log
      :linenos:

      2019-12-20 20:48:58.780  INFO 18846 --- [deployment-3] llCloudFormationStackUsableLifecycleHook : CloudFormation stack 'serverless-test-site-editorial' is usable (status 'CREATE_COMPLETE')
      2019-12-20 20:48:58.781  INFO 18846 --- [deployment-3] org.craftercms.deployer.impl.TargetImpl  : Creating deployment pipeline for target 'editorial-serverless-delivery'
      2019-12-20 20:48:58.854  INFO 18846 --- [deployment-3] org.craftercms.deployer.impl.TargetImpl  : Checking if deployments need to be scheduled for target 'editorial-serverless-delivery'
      2019-12-20 20:48:58.855  INFO 18846 --- [deployment-3] org.craftercms.deployer.impl.TargetImpl  : Deployments for target 'editorial-serverless-delivery' scheduled with cron 0 * * * * *
      2019-12-20 20:49:00.001  INFO 18846 --- [deployment-8] org.craftercms.deployer.impl.TargetImpl  : ============================================================
      2019-12-20 20:49:00.001  INFO 18846 --- [deployment-8] org.craftercms.deployer.impl.TargetImpl  : Deployment for editorial-serverless-delivery started
      2019-12-20 20:49:00.001  INFO 18846 --- [deployment-8] org.craftercms.deployer.impl.TargetImpl  : ============================================================
      2019-12-20 20:49:00.002  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < gitPullProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:00.003  INFO 18846 --- [deployment-8] eployer.impl.processors.GitPullProcessor : Executing git pull for repository /home/ubuntu/code/craftercms/crafter-authoring/data/repos/aws/editorial...
      2019-12-20 20:49:01.179  INFO 18846 --- [deployment-8] eployer.impl.processors.GitPullProcessor : Changes successfully pulled from remote repo /home/ubuntu/code/craftercms/crafter-authoring/data/repos/sites/editorial/published into local repo /home/ubuntu/code/craftercms/crafter-authoring/data/repos/aws/editorial (merge result with status Merged)
      2019-12-20 20:49:01.181  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ gitPullProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:01.181  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < gitDiffProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:01.183  INFO 18846 --- [deployment-8] eployer.impl.processors.GitDiffProcessor : Calculating change set from commits: {empty} -> 94779a9ef038b497be74f3614fb0170a1242c685
      2019-12-20 20:49:01.228  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ gitDiffProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:01.664  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < elasticsearchIndexingProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:01.664  INFO 18846 --- [deployment-8] ocessors.AbstractSearchIndexingProcessor : Performing search indexing...
      2019-12-20 20:49:04.055  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ elasticsearchIndexingProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:04.056  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < s3SyncProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:04.056  INFO 18846 --- [deployment-8] oyer.impl.processors.aws.S3SyncProcessor : Performing S3 sync with bucket s3://serverless-test-site-editorial/...
      2019-12-20 20:49:04.157  INFO 18846 --- [deployment-8] oyer.impl.processors.aws.S3SyncProcessor : Uploading 204 files
      2019-12-20 20:49:05.717  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ s3SyncProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:05.717  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < delayProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:05.717  INFO 18846 --- [deployment-8] .deployer.impl.processors.DelayProcessor : Delaying pipeline execution for 10 seconds
      2019-12-20 20:49:15.717  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ delayProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.718  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < cloudfrontInvalidationProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.718  INFO 18846 --- [deployment-8] sors.aws.CloudFrontInvalidationProcessor : Performing Cloudfront invalidation...
      2019-12-20 20:49:15.841  INFO 18846 --- [deployment-8] sors.aws.CloudFrontInvalidationProcessor : No actual files that need to be invalidated
      2019-12-20 20:49:15.841  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ cloudfrontInvalidationProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.842  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < fileBasedDeploymentEventProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.843  INFO 18846 --- [deployment-8] essors.FileBasedDeploymentEventProcessor : Event events.deployment.rebuildContext=2019-12-20T20:49:15.842Z saved to deployment-events.properties
      2019-12-20 20:49:15.843  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ fileBasedDeploymentEventProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.843  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < fileBasedDeploymentEventProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.844  INFO 18846 --- [deployment-8] essors.FileBasedDeploymentEventProcessor : Event events.deployment.clearCache=2019-12-20T20:49:15.843Z saved to deployment-events.properties
      2019-12-20 20:49:15.844  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ fileBasedDeploymentEventProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.844  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < fileBasedDeploymentEventProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.844  INFO 18846 --- [deployment-8] essors.FileBasedDeploymentEventProcessor : Event events.deployment.rebuildGraphQL=2019-12-20T20:49:15.844Z saved to deployment-events.properties
      2019-12-20 20:49:15.844  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ fileBasedDeploymentEventProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.845  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < s3SyncProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.845  INFO 18846 --- [deployment-8] oyer.impl.processors.aws.S3SyncProcessor : Performing S3 sync with bucket s3://serverless-test-site-editorial/...
      2019-12-20 20:49:15.846  INFO 18846 --- [deployment-8] oyer.impl.processors.aws.S3SyncProcessor : Uploading 1 files
      2019-12-20 20:49:15.880  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ s3SyncProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.880  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- < fileOutputProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.881  INFO 18846 --- [deployment-8] oyer.impl.processors.FileOutputProcessor : Successfully wrote deployment output to /home/ubuntu/code/craftercms/crafter-authoring/logs/deployer/editorial-serverless-delivery-deployments.csv
      2019-12-20 20:49:15.882  INFO 18846 --- [deployment-8] l.processors.AbstractDeploymentProcessor : ----- </ fileOutputProcessor @ editorial-serverless-delivery > -----
      2019-12-20 20:49:15.882  INFO 18846 --- [deployment-8] org.craftercms.deployer.impl.TargetImpl  : ============================================================
      2019-12-20 20:49:15.882  INFO 18846 --- [deployment-8] org.craftercms.deployer.impl.TargetImpl  : Deployment for editorial-serverless-delivery finished in 15.878 secs
      2019-12-20 20:49:15.882  INFO 18846 --- [deployment-8] org.craftercms.deployer.impl.TargetImpl  : ============================================================

   .. code-block:: none
      :caption: engine.log
      :linenos:

      [INFO] 2019-12-20T20:50:00,061 [pool-3-thread-10] [] [context.SiteContextManager] | ================================================== 
      [INFO] 2019-12-20T20:50:00,061 [pool-3-thread-10] [] [context.SiteContextManager] | <Creating site context: editorial> 
      [INFO] 2019-12-20T20:50:00,061 [pool-3-thread-10] [] [context.SiteContextManager] | ================================================== 
      [INFO] 2019-12-20T20:50:00,115 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,115 [pool-3-thread-10] [] [context.SiteContextFactory] | <Loading configuration for site: editorial> 
      [INFO] 2019-12-20T20:50:00,115 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,115 [pool-3-thread-10] [] [config.MultiResourceConfigurationBuilder] | Loading XML configurations in the order in which the properties will be resolved 
      [INFO] 2019-12-20T20:50:00,146 [pool-3-thread-10] [] [config.MultiResourceConfigurationBuilder] | XML configuration loaded from editorial:/config/engine/site-config.xml 
      [INFO] 2019-12-20T20:50:00,146 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,146 [pool-3-thread-10] [] [context.SiteContextFactory] | </Loading configuration for site: editorial> 
      [INFO] 2019-12-20T20:50:00,146 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,146 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,146 [pool-3-thread-10] [] [context.SiteContextFactory] | <Loading application context for site: editorial> 
      [INFO] 2019-12-20T20:50:00,146 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,164 [pool-3-thread-10] [] [xml.XmlBeanDefinitionReader] | Loading XML bean definitions from editorial:/config/engine/application-context.xml 
      [INFO] 2019-12-20T20:50:00,178 [pool-3-thread-10] [] [support.GenericApplicationContext] | Refreshing org.springframework.context.support.GenericApplicationContext@1c0f754a: startup date [Fri Dec 20 20:50:00 UTC 2019]; parent: Root WebApplicationContext 
      [INFO] 2019-12-20T20:50:00,178 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,178 [pool-3-thread-10] [] [context.SiteContextFactory] | </Loading application context for site: editorial> 
      [INFO] 2019-12-20T20:50:00,179 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,179 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,179 [pool-3-thread-10] [] [context.SiteContextFactory] | <Loading URL rewrite engine for site: editorial> 
      [INFO] 2019-12-20T20:50:00,179 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,214 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,214 [pool-3-thread-10] [] [context.SiteContextFactory] | </Loading URL rewrite engine for site: editorial> 
      [INFO] 2019-12-20T20:50:00,214 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,214 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,214 [pool-3-thread-10] [] [context.SiteContextFactory] | <Scheduling job scripts for site: editorial> 
      [INFO] 2019-12-20T20:50:00,214 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,260 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,260 [pool-3-thread-10] [] [context.SiteContextFactory] | </Scheduling job scripts for site: editorial> 
      [INFO] 2019-12-20T20:50:00,260 [pool-3-thread-10] [] [context.SiteContextFactory] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,260 [pool-7-thread-1] [editorial] [context.SiteContext] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,261 [pool-7-thread-1] [editorial] [context.SiteContext] | <Initializing context site: editorial> 
      [INFO] 2019-12-20T20:50:00,261 [pool-7-thread-1] [editorial] [context.SiteContext] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:00,261 [pool-7-thread-1] [editorial] [cache.SiteCacheWarmerImpl] | Starting warm up for cache of site 'editorial' 
      [INFO] 2019-12-20T20:50:00,261 [pool-7-thread-1] [editorial] [cache.ContentStoreAdapterPreloadedFoldersBasedCacheWarmer] | Starting preload of folder [/templates] with depth -1 
      [INFO] 2019-12-20T20:50:00,731 [pool-7-thread-1] [editorial] [cache.ContentStoreAdapterPreloadedFoldersBasedCacheWarmer] | Preload of folder [/templates] with depth -1 completed in 0 secs 
      [INFO] 2019-12-20T20:50:00,731 [pool-7-thread-1] [editorial] [cache.ContentStoreAdapterPreloadedFoldersBasedCacheWarmer] | Starting preload of folder [/scripts] with depth -1 
      [INFO] 2019-12-20T20:50:01,301 [pool-7-thread-1] [editorial] [cache.ContentStoreAdapterPreloadedFoldersBasedCacheWarmer] | Preload of folder [/scripts] with depth -1 completed in 0 secs 
      [INFO] 2019-12-20T20:50:01,301 [pool-7-thread-1] [editorial] [cache.ContentStoreAdapterPreloadedFoldersBasedCacheWarmer] | Starting preload of folder [/site] with depth 3 
      [INFO] 2019-12-20T20:50:02,734 [pool-7-thread-1] [editorial] [cache.ContentStoreAdapterPreloadedFoldersBasedCacheWarmer] | Preload of folder [/site] with depth 3 completed in 1 secs 
      [INFO] 2019-12-20T20:50:02,734 [pool-7-thread-1] [editorial] [cache.ContentStoreServiceTreeBasedContextCacheWarmer] | Starting preload of tree [/site] with depth 3 
      [INFO] 2019-12-20T20:50:02,743 [pool-7-thread-1] [editorial] [cache.ContentStoreServiceTreeBasedContextCacheWarmer] | Preload of tree [/site] with depth 3 completed in 0 secs 
      [INFO] 2019-12-20T20:50:02,744 [pool-7-thread-1] [editorial] [cache.SiteCacheWarmerImpl] | Warm up for cache of site 'editorial' completed in 2 secs 
      [INFO] 2019-12-20T20:50:02,744 [pool-7-thread-1] [editorial] [context.SiteContext] | Starting GraphQL schema build for site 'editorial' 
      [INFO] 2019-12-20T20:50:04,360 [pool-7-thread-1] [editorial] [graphql.GraphQLFactory] | No custom GraphQL schema found for site 'editorial' 
      [INFO] 2019-12-20T20:50:04,368 [pool-7-thread-1] [editorial] [context.SiteContext] | GraphQL schema build completed for site 'editorial' in 1 secs 
      [INFO] 2019-12-20T20:50:04,368 [pool-7-thread-1] [editorial] [context.SiteContext] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:04,368 [pool-7-thread-1] [editorial] [context.SiteContext] | </Initializing context site: editorial> 
      [INFO] 2019-12-20T20:50:04,368 [pool-7-thread-1] [editorial] [context.SiteContext] | -------------------------------------------------- 
      [INFO] 2019-12-20T20:50:04,393 [pool-3-thread-10] [] [context.SiteContextManager] | Site context created: SiteContext{siteName='editorial', context=S3Context{id='1e6ab45b41978c4e0fa43ec37e1fc0ef', rootFolderPath='s3://serverless-test-site-editorial/editorial'}, fallback=false, staticAssetsPath='/static-assets', templatesPath='/', restScriptsPath='/scripts/rest', controllerScriptsPath='/scripts/controllers'} 
      [INFO] 2019-12-20T20:50:04,393 [pool-3-thread-10] [] [context.SiteContextManager] | ================================================== 
      [INFO] 2019-12-20T20:50:04,393 [pool-3-thread-10] [] [context.SiteContextManager] | </Creating site context: editorial> 
      [INFO] 2019-12-20T20:50:04,393 [pool-3-thread-10] [] [context.SiteContextManager] | ==================================================   

------------------------------
Step 5: Test the Delivery Site
------------------------------

Open a browser and go to ``https://DOMAIN_OF_YOUR_CLOUDFRONT``. You should be able to see your Editorial site!

.. image:: /_static/images/system-admin/serverless/editorial-screenshot.png
   :alt: Serverless Site - Editorial Screenshot
   :align: center

