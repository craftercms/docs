:is-up-to-date: True
:last-updated: 4.2.3

.. _engine-config:

====================
Engine Configuration
====================
.. contents::
    :local:
    :depth: 1

.. _setup-project-for-delivery:

---------------------------------
Setup Engine to Deliver a Project
---------------------------------
^^^^^^^^^^^^^^^^^^^^^
Server-based Delivery
^^^^^^^^^^^^^^^^^^^^^
In this section, we will be working in the delivery environment of CrafterCMS and describing how to setup your project for a delivery environment.

"""""""""""""""""""""""""""""
Setup Crafter Deployer Target
"""""""""""""""""""""""""""""
CrafterCMS out of the box has a script to help you create your deployer target for the delivery environment.

In the ``bin`` folder in your CrafterCMS delivery environment, we will use the script ``init-site.sh`` to help us create the deployer target.

From your command line, navigate to your ``{Crafter-CMS-delivery-environment-directory}/bin/`` , and execute the init-site script. The following output of ``init-site.sh -h``
explains how to use the script:

  .. code-block:: bash
    :force:

    usage: init-site [options] [site] [repo-path]
     -a,--notification-addresses <addresses>   A comma-separated list of email
                                               addresses that should receive
                                               deployment notifications
     -b,--branch <branch>                      The name of the branch to clone
                                               (live by default)
     -f,--passphrase <passphrase>              The passphrase of the private
                                               key (when the key is passphrase
                                               protected)
     -h,--help                                 Show usage information
     -k,--private-key <path>                   The path to the private key, when
                                               using private-key authentication
                                               through SSH to the remote Git repo
     -p,--password <password>                  The password for the remote Git
                                               repo, when using basic
                                               authentication
     -u,--username <username>                  The username for the remote Git
                                               repo, when using basic
                                               authentication
     --addresses <>                            A comma-separated list of email
                                               addresses that should receive deployment notifications

    EXAMPLES:
     Init a site from the default repo path (../../crafter-authoring/data/repos/sites/{sitename}/published)
         init-site mysite
     Init a site from a specific local repo path
         init-site mysite /opt/crafter/authoring/data/repos/sites/mysite/published
     Init a site from a specific local repo path, cloning a specific branch of the repo
         init-site -b master mysite /opt/crafter/authoring/data/repos/sites/mysite/published
     Init a site that is in a remote HTTPS repo with username/password authentication
         init-site -u jdoe -p jdoe1234 mysite https://github.com/jdoe/mysite.git
     Init a site that is in a remote SSH repo with public/private key authentication (specific private key path
     with no passphrase)
         init-site -k ~/.ssh/jdoe_key mysite ssh://myserver/opt/crater/sites/mysite
     Init a site that is in a remote SSH repo with public/private key authentication (specific private key path
     with passphrase)
         init-site -k ~/.ssh/jdoe_key -f jdoe123 mysite ssh://myserver/opt/crater/sites/mysite

.. include:: /includes/ssh-private-key.rst

We recommend using Secure Shell (SSH) with your project's published repo Git URL and for authentication, to use either username/password authentication or public/private key
authentication.

The SSH Git URL format is: ``ssh://[user@]host.xz[:port]/path/to/repo/`` where sections between **[]** are optional.

Example #1: ``ssh://server1.example.com/path/to/repo``

Example #2: ``ssh://jdoe@server2.example.com:63022/path/to/repo``

.. note::
  .. include:: /includes/setup-ssh-keys.rst

If you are just working on another directory on disk for your delivery, you can just use the filesystem. When your repository is local, make sure to use the absolute path.
Here is an example project's published repo Git url when using a local repository:

  .. code-block:: bash

      /opt/crafter/authoring/data/repos/sites/my-project/published

.. note::
  * When using ``ssh``, you might see in the logs ``com.jcraft.jsch.JSchException: UnknownHostKey`` errors. These errors are common in Ubuntu, and are caused by known host keys being stored in non-RSA format. Please follow the instructions in :ref:`debugging-deployer-issues` under ``SSH Unknown Host`` to resolve them.

  * ``Git`` needs to be installed in authoring when using SSH to connect the delivery to the authoring.

    If you see the following error in the delivery Deployer: `Caused by: java.io.IOException: bash: git-upload-pack: command not found` you'll need to add the location of git (usually **/usr/bin**) to your non-login shell startup file (e.g. **~/.bashrc**).

    To get the location of Git, run the following command: ``which git-upload-pack``
  * You can limit SSH access by using Git Shell, see https://git-scm.com/docs/git-shell for more information.

"""""""""""""""""""""""""""""
Viewing your Site for Testing
"""""""""""""""""""""""""""""
To test viewing your project, open a browser and type in the URL of your project.

If you have multiple projects setup, to view a certain project, in your browser, enter the following:

.. code-block:: sh

    {Server URL}?crafterSite={siteName}

Here we have an example of a delivery setup in another directory on disk (local), where there are two projects, ``my-awesome-editorial`` and ``hello-world``

.. image:: /_static/images/system-admin/project-list.webp
    :width: 80 %
    :align: center
    :alt: Setup Project for Delivery - Project List

To set ``crafterSite`` to the ``hello-world`` project, in your browser, type in

.. code-block:: sh

    http://localhost:9080?crafterSite=helloworld

.. image:: /_static/images/system-admin/project-hello.webp
    :width: 80 %
    :align: center
    :alt: Setup Project for Delivery - Hello World Project

To set the site to the ``myawesomesite``, in your browser, type in

.. code-block:: sh

    http://localhost:9080?crafterSite=myawesomesite

.. image:: /_static/images/system-admin/project-awesome.webp
    :width: 80 %
    :align: center
    :alt: Setup Site for Delivery - My Awesome Site

|

Aside from the ``crafterSite`` parameter, a header can be sent to specify the site name, called
``X-Crafter-Site`` for changing the current site. This is very useful when Crafter Engine is used
together with CDNs that can send headers, like AWS CloudFront

.. WARNING::
   Using this configuration you need to be sure that the first request specifies the site name by
   including the ``crafterSite`` parameter (or the ``X-Crafter-Site`` header) so that the site value
   is set in the cookie for the next requests.

.. note::
     Crafter Engine identifies which project to render by the mechanisms (in this order of precedence):
        - Headers (``X-Crafter-Site={site}``)
        - QSA (Query String Parameters: ``crafterSite={site}``)
        - Cookie (``crafterSite={site}``)

     Additionally, if the cookie is not aligned with other parameters, the cookie will be reset to what precedes it.
     The above is only true when Crafter Engine is not in Preview mode.

.. _setup-serverless-delivery:

^^^^^^^^^^^^^^^^^^^
Serverless Delivery
^^^^^^^^^^^^^^^^^^^
CrafterCMS can be configured to serve sites directly from AWS services, following this guide you will:

- Create a AWS OpenSearch domain (optional)
- Configure a Crafter Studio in an authoring environment to call the Crafter Deployer to create an AWS CloudFormation
  with a CloudFront and S3 bucket for each site
- Configure a Crafter Engine in a delivery environment to read files from the S3 bucket and query to AWS OpenSearch (optional)

"""""""""""""
Prerequisites
"""""""""""""
- An AWS account
- A CrafterCMS authoring environment
- A CrafterCMS delivery environment

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Step 1: Create an OpenSearch Domain for Delivery (optional)
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Since serverless delivery requires a single OpenSearch endpoint readable by all Engine instances, we recommend you
create an AWS OpenSearch domain for delivery. If you don't want to use an AWS OpenSearch domain then you should
create and maintain your own OpenSearch cluster.

To create an AWS OpenSearch domain please do the following:

.. important::
    The following are settings used in common Crafter deployments with AWS OpenSearch, and by no means should be 
    considered the only way to configure AWS OpenSearch with Crafter.

#. In the top navigation bar of your AWS console, on the search bar, enter ``Amazon OpenSearch Service``.
#. Click on ``Create domain``.
#. Select ``Standard Create`` on ``Domain creation method``.
#. On ``Templates``, select ``Dev/test``.

.. important::
    Even for Production deployments, we recommend you pick the ``Dev/test`` template. We do this because that's the only
    way to avoid setting dedicated master nodes. AWS recommends in all Production environments to use dedicated master 
    nodes. From experience, most Crafter Production deployments don't need dedicated master nodes, but that will depend
    on your project's search utilization.

#. On ``Deployment Options``, select ``Domain without standby`` and ``3-AZ``.
#. On the ``Engine options`` section, select ``Include older versions`` and pick ``2.9`` as the version.
#. On ``Data Nodes``, pick a configuration for the nodes like the one showed in the image below. For volume size, most Crafter installations
   should be ok with 20 GB per node, but you can adjust the size based on ``number of projects * average project size in GB * 3 (for preview,
   authoring and delivery indices)``.

   .. image:: /_static/images/system-admin/serverless/os-data-nodes-config.webp
       :alt: Serverless Site - OpenSearch Data Nodes Configuration
       :align: center

   |

#. On ``Network``, we recommend you pick the VPC and subnets where your delivery nodes reside. Make sure that the security group
   only allows access to port 443 from the delivery nodes. If they're not running on an Amazon VPC, then pick ``Public Access``
#. On the ``Fine-grained access control``, select ``Create master user``, and specify a username and password (save this for later).
#. Select ``Only use fine-grained access control`` in ``Access Policy``. 
#. Adjust any other setting to your preferences, and click on ``Create`` on the right sidebar.

   .. image:: /_static/images/system-admin/serverless/os-domain-summary.webp
       :alt: Serverless Site - OpenSearch Domain Summary
       :align: center

   |

#. Wait until the domain has been created, then copy the ``Domain Endpoint``.

""""""""""""""""""""""""""""""""""""""""""""""""""
Step 2: Configure the Delivery for Serverless Mode
""""""""""""""""""""""""""""""""""""""""""""""""""
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

   |

#. Edit the properties override file to point Engine to consume the site content from S3
   (``DELIVERY_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``). The
   properties you need to update are the following:

   - ``crafter.engine.site.default.rootFolder.path``
   - ``crafter.engine.s3.region``
   - ``crafter.engine.s3.accessKey``
   - ``crafter.engine.s3.secretKey``

   An example of how the :ref:`server-config.properties <engine-configuration-files>` would look with configuration to read from an S3 bucket per site
   (which is the most common use case), is the following (values in ``X`` are not displayed since they're sensitive):

   .. code-block:: properties
      :caption: *DELIVERY_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
      :force:

      # Content root folder when using S3 store. Format is s3://<BUCKET_NAME>/<SITES_ROOT>/{siteName}
      crafter.engine.site.default.rootFolder.path=s3://serverless-delivery-test-site-{siteName}
      ...

      # S3 Serverless properties
      # S3 region
      crafter.engine.s3.region=us-east-1
      # AWS access key
      crafter.engine.s3.accessKey=XXXXXXXXXX
      # AWS secret key
      crafter.engine.s3.secretKey=XXXXXXXXXXXXXXXXXXXX

   |

   As you can see, the bucket name portion of the root folder S3 URL contains a prefix and then the site name. This
   prefix is mentioned also as a "namespace" later on in the Studio serverless configuration.

   .. important:: You can also provide the AWS region, access key and secret key without having to edit the config file
                  properties. Please see
                  `Set up AWS Credentials and Region for Development <https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html>`_.

#. We recommend that the AWS credentials configured belong to a user with just the following permission policy (all
   strings like ``$VAR`` are placeholders and need to be replaced):

   .. code-block:: json
      :caption: aws-serverless-engine-policy.json
      :linenos:

      {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Effect": "Allow",
                  "Action": "s3:ListAllMyBuckets",
                  "Resource": "*"
              },
              {
                  "Effect": "Allow",
                  "Action": [
                      "s3:ListBucket",
                      "s3:GetBucketLocation",
                      "s3:GetObject"
                  ],
                  "Resource": "arn:aws:s3:::$BUCKET_NAME_PREFIX-*"
              }
          ]
      }

   |

#. Edit the ``SEARCH_URL`` in ``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh`` to point to the OpenSearch endpoint you
   created in the previous step, and provide the OpenSearch master credentials:

   .. code-block:: bash

      export SEARCH_URL="https://search-serverless-delivery-test-wyz36fsmutzsw2evgroc47lvve.us-east-1.es.amazonaws.com"
      export SEARCH_USERNAME="*****"
      export SEARCH_PASSWORD="**********"

   |

"""""""""""""""""""""""""""""""""""""""""""""""""""""
Step 3: Configure Authoring for Serverless Deployment
"""""""""""""""""""""""""""""""""""""""""""""""""""""
Instead of having one Crafter Deployer per node in delivery, for serverless you just need a single Deployer uploading
files to S3. The authoring preview Deployer thus can also be used for serverless deployment.

.. note::
    In a Studio cluster, only one preview Deployer is active at a time and indexing (the one belonging to the primary). 
    When using the preview Deployers for serverless, that also means only one Deployer will be pushing files to S3 at a 
    time, so you don't need to worry about multiple deployers stepping over each other

You will need to configure Studio to call the preview Deployer to create the serverless targets on site creation.
You can find this configuration under ``AUTHORING_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml``. 
The properties are well documented in the file so they won't be explained here, but there are still some important things to
notice:

- You can provide the URL of the OpenSearch domain created in a previous step under
  ``studio.serverless.delivery.deployer.target.template.params.search_url``, but there's no current property to pass the credentials, which is why we 
  recommend you to use ``SEARCH_URL``, ``SEARCH_USERNAME`` and  ``SEARCH_PASSWORD`` environment variables in ``AUTHORING_INSTALL_DIR/bin/crafter-setenv.sh``:

   .. code-block:: bash

      export SEARCH_URL="https://search-serverless-delivery-test-wyz36fsmutzsw2evgroc47lvve.us-east-1.es.amazonaws.com"
      export SEARCH_USERNAME="*****"
      export SEARCH_PASSWORD="**********"

   |

- When using the ``aws-cloudformed-s3`` target template (the default one), the Deployer creates first an AWS
  CloudFormation stack with an S3 bucket where the site content will be uploaded and a CloudFront that will serve
  ``/static-assets`` directly and will redirect any other requests to the Delivery Engine Load Balancer (which you specify in
  ``studio.serverless.delivery.deployer.target.template.params.aws.cloudformation.deliveryLBDomainName``).
- The ``aws.cloudformation.namespace`` is basically the prefix of the S3 bucket mentioned in the previous step. This
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

    |

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

    |

- We recommend that the AWS credentials configured belong to a user with just the following permission policy (all
  strings like ``$VAR`` are placeholders and need to be replaced):

  .. code-block:: json
     :caption: aws-serverless-deployer-policy.json
     :linenos:

     {
         "Version": "2012-10-17",
         "Statement": [
             {
                 "Effect": "Allow",
                 "Action": [
                     "cloudformation:CreateStack",
                     "cloudformation:DescribeStacks",
                     "cloudformation:DeleteStack"
                 ],
                 "Resource": "arn:aws:cloudformation:$REGION:$ACCOUNT_ID:stack/$CLOUDFORMATION_NAMESPACE-*/*"
             },
             {
                 "Effect": "Allow",
                 "Action": [
                     "cloudfront:CreateDistribution",
                     "cloudfront:GetDistribution",
                     "cloudfront:GetDistributionConfig",
                     "cloudfront:UpdateDistribution",
                     "cloudfront:DeleteDistribution",
                     "cloudfront:CreateInvalidation",
                     "cloudfront:TagResource",
                     "cloudfront:UntagResource"
                 ],
                 "Resource": "arn:aws:cloudfront::$ACCOUNT_ID:distribution/*"
             },
             {
                 "Effect": "Allow",
                 "Action": [
                     "cloudfront:CreateCloudFrontOriginAccessIdentity",
                     "cloudfront:GetCloudFrontOriginAccessIdentityConfig",
                     "cloudfront:GetCloudFrontOriginAccessIdentity",
                     "cloudfront:DeleteCloudFrontOriginAccessIdentity"
                 ],
                 "Resource": "*"
             },
             {
                 "Effect": "Allow",
                 "Action": [
                     "s3:CreateBucket",
                     "s3:ListBucket",
                     "s3:DeleteBucket",
                     "s3:GetBucketLocation",
                     "s3:GetBucketPolicy",
                     "s3:PutBucketPolicy",
                     "s3:DeleteBucketPolicy",
                     "s3:PutBucketCORS",
                     "s3:GetObject",
                     "s3:PutObject",
                     "s3:DeleteObject",
                     "s3:PutBucketPublicAccessBlock",
                     "s3:GetBucketAcl",
                     "s3:PutBucketAcl",
                     "s3:PutBucketVersioning",
                     "s3:PutReplicationConfiguration",
                     "s3:ListBucketVersions",
                     "s3:GetObjectVersion",
                     "s3:DeleteObjectVersion"
                 ],
                 "Resource": "arn:aws:s3:::$CLOUDFORMATION_NAMESPACE-*"
             }
         ]
     }

  |

- By default, the CloudFront created by Deployer will have a ``*.cloudfront.net`` domain name. To have CloudFront use
  additional domain name(s) please specify the AWS ARN of the domain SSL certificate (``cloudfrontCertificateArn``) and
  the alternate domain name(s) (``alternateCloudFrontDomainNames``):

  .. code-block:: yaml

     studio.serverless.delivery.deployer.target.template.params:
       aws:
         cloudformation:
           ...
           # The SSL certificate ARN the CloudFront CDN should use (optional when target template is aws-cloudformed-s3)
           cloudfrontCertificateArn: arn:aws:acm:...
           # The alternate domains names (besides *.cloudfront.net) for the CloudFront CDN (optional when target template is aws-cloudformed-s3)
           alternateCloudFrontDomainNames: myawesomesite.com,www.myawesomesite.com

  |

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
   # The template name for serverless deployer targets (supported: aws-s3, aws-cloudformed-s3)
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
   # disable_deploy_cron, local_repo_path, repo_url
   studio.serverless.delivery.deployer.target.template.params:
      aws:
        # AWS region (optional if specified through default AWS chain)
        region: us-east-1
        # AWS access key (optional if specified through default AWS chain)
        default_access_key: XXXXXXXXXX
        # AWS secret key (optional if specified through default AWS chain)
        default_secret_key: XXXXXXXXXXXXXXXXXXXX
        cloudformation:
          # Namespace to use for CloudFormation resources (required when target template is aws-cloudformed-s3)
          namespace: serverless-delivery-test
          # The domain name of the serverless delivery LB (required when target template is aws-cloudformed-s3)
          deliveryLBDomainName: serverless-delivery-test-lb-1780491458.us-east-1.elb.amazonaws.com

|

""""""""""""""""""""""""""""""""""""""""""""""""""""
Step 4: Create the Site in the Authoring Environment
""""""""""""""""""""""""""""""""""""""""""""""""""""
#. Login to the Crafter Studio in the authoring environment from your browser.
#. Click the ``Create Site`` button
#. Choose the ``Editorial`` blueprint, enter the ``Site Id`` (e.g. ``editorial``), and then review and create.
#. Go to your AWS console in your browser and on the ``Services`` dropdown search for CloudFormation. You should then
   see  the CloudFormation for the site you just created with the status ``CREATE_IN_PROGRESS``. After several minutes,
   the status should change to ``CREATE_COMPLETE``, which tells the Crafter Deployer that it is able to start
   uploading files to S3.

   .. image:: /_static/images/system-admin/serverless/cloudformation-created.webp
       :alt: Serverless Site - CloudFormation Created
       :align: center

   |

#. Wait at least 2 minutes for the Crafter Deployer to finish uploading the files and for the delivery Crafter Engine
   to warm up the new site in cache.

   .. code-block:: none
      :caption: deployer.log
      :linenos:

      2024-01-24 15:58:15.121  INFO 899353 --- [deployment-3] llCloudFormationStackUsableLifecycleHook : CloudFormation stack 'serverless-delivery-test-site-editorial' is usable (status 'CREATE_COMPLETE')
      2024-01-24 15:58:15.122  INFO 899353 --- [deployment-3] org.craftercms.deployer.impl.TargetImpl  : Creating deployment pipeline for target 'editorial-serverless-delivery'
      2024-01-24 15:58:15.169  INFO 899353 --- [deployment-3] org.craftercms.deployer.impl.TargetImpl  : Checking if deployments need to be scheduled for target 'editorial-serverless-delivery'
      2024-01-24 15:58:15.169  INFO 899353 --- [deployment-3] org.craftercms.deployer.impl.TargetImpl  : Deployments for target 'editorial-serverless-delivery' scheduled with cron 0 * * * * *
      2024-01-24 15:59:00.002  INFO 899353 --- [deployment-6] org.craftercms.deployer.impl.TargetImpl  : ============================================================
      2024-01-24 15:59:00.002  INFO 899353 --- [deployment-6] org.craftercms.deployer.impl.TargetImpl  : Deployment for editorial-serverless-delivery started
      2024-01-24 15:59:00.002  INFO 899353 --- [deployment-6] org.craftercms.deployer.impl.TargetImpl  : ============================================================
      ...
      ...
      ...
      2024-01-24 16:04:00.039  INFO 899353 --- [deployment-1] org.craftercms.deployer.impl.TargetImpl  : ============================================================
      2024-01-24 16:04:00.039  INFO 899353 --- [deployment-1] org.craftercms.deployer.impl.TargetImpl  : Deployment for editorial-serverless-delivery finished in 0.004 secs
      2024-01-24 16:04:00.039  INFO 899353 --- [deployment-1] org.craftercms.deployer.impl.TargetImpl  : ===========================================================

   |

   .. code-block:: none
      :caption: engine.log
      :linenos:

      [INFO] 2019-12-20T20:50:00,061 [pool-3-thread-10] [] [context.SiteContextManager] | ==================================================
      [INFO] 2019-12-20T20:50:00,061 [pool-3-thread-10] [] [context.SiteContextManager] | <Creating site context: editorial>
      [INFO] 2019-12-20T20:50:00,061 [pool-3-thread-10] [] [context.SiteContextManager] | ==================================================
      ...
      ...
      ...
      [INFO] 2019-12-20T20:50:04,393 [pool-3-thread-10] [] [context.SiteContextManager] | ==================================================
      [INFO] 2019-12-20T20:50:04,393 [pool-3-thread-10] [] [context.SiteContextManager] | </Creating site context: editorial>
      [INFO] 2019-12-20T20:50:04,393 [pool-3-thread-10] [] [context.SiteContextManager] | ==================================================

   |

""""""""""""""""""""""""""""""
Step 5: Test the Delivery Site
""""""""""""""""""""""""""""""
Open a browser and go to ``https://DOMAIN_OF_YOUR_CLOUDFRONT``. You should be able to see your Editorial site!

.. image:: /_static/images/system-admin/serverless/editorial-screenshot.webp
   :alt: Serverless Site - Editorial Screenshot
   :align: center
   :width: 80%

|

.. note::

   The following error appears in the deployer logs (*CRAFTER_HOME/logs/deployer/crafter-deployer.out*) when a site hasn't been published:

      .. code-block:: text

         2020-07-07 15:33:00.004 ERROR 22576 --- [deployment-9] l.processors.AbstractDeploymentProcessor : Processor 'gitDiffProcessor' for target 'ed-serverless-delivery' failed
         org.craftercms.deployer.api.exceptions.DeployerException: Failed to open Git repository at /home/ubuntu/craftercms/crafter-authoring/data/repos/sites/ed/published;

   Once the site has been published, the error above will go away.

|

|hr|

.. _engine-configuration-files:

-------------------
Configuration Files
-------------------
Crafter Engine can be configured at the project/site level or at the instance level.

.. _engine-site-configuration-files:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Project-level/Site-level Configuration Files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Crafter Engine provides a flexible configuration system that allows site administrators to change
the behavior of the project without the need to modify any code. Some properties are used by Crafter
Engine itself, but developers can also add any custom property they need for their code.

The main configuration files for a project/site can be edited within Crafter Studio's Project Tools > Configuration UI or via Git. These files are:

.. list-table:: Engine Project Configuration Files
    :header-rows: 1

    * - Configuration File
      - Description
    * - Engine Project Configuration (``config/engine/site-config.xml``)
      - Contains project properties used by Crafter Engine
    * - Engine Project Application Context (``config/engine/application-context.xml``)
      - Contains bean definitions for the site context associated with the Webapp
    * - URL Rewrite Configuration (XML Style) (``config/engine/urlrewrite.xml``)
      - Contains URL rewrite rules
    * - Proxy Config (``config/engine/proxy-config.xml``)
      - Configures the proxy servers for the Preview server (Crafter Engine in Preview Mode)

.. note:: All configuration files can be overridden by environment. Learn more about multi-environment support in :ref:`engine-multi-environment-support`.

The configuration file ``site-config.xml`` has some additional considerations. This file can be defined in:

- ``/config/engine/env/{envName}/site-config.xml``: This is the environment override, and is loaded first if present.
- ``/config/engine/site-config.xml``: This is the main configuration file for the project/site. This file is loaded if the environment override is not present.

.. note:: All properties will be available for developers in the Freemarker templates and Groovy scripts using the ``siteConfig`` variable. The ``siteConfig`` variable is an instance of the `XMLConfiguration <https://commons.apache.org/proper/commons-configuration/apidocs/org/apache/commons/configuration2/XMLConfiguration.html>`_ class.

.. _engine-instance-configuration-files:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Instance-level Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The main files for configuring Crafter Engine at the instance level are:

.. list-table:: Engine Instance Level Configuration Files
    :header-rows: 1

    * - Configuration File
      - Description
    * - ``server-config.properties``
      - Contains server configurable parameters such as URLs, paths, etc.
    * - ``services-context.xml``
      - Contains the bean definition for services layer
    * - ``rendering-context.xml``
      - Contains the bean definition for rendering
    * - ``logging.xml``
      - Contains loggers, appenders, etc.

These configuration files for Crafter Engine is located under  ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension``, where ``CRAFTER_HOME`` is the install directory of your CrafterCMS authoring or delivery environment.

The files can be accessed by opening the files using a text editor. Any changes made to any of the files listed above will require a restart of Crafter Engine.

|hr|

-------------------------------
Engine Configuration Properties
-------------------------------
In this section we will highlight some of the more commonly used properties in the configuration of Crafter Engine. For most properties, please see the  ``server-config.properties`` file, and for additional configuration files and properties, see :ref:`engine-configuration-files`.

.. list-table:: Common Configuration Properties
    :header-rows: 1

    * - Property
      - Purpose
    * - :ref:`engine-root-folder`
      - Allows you to set the content root folder
    * - :ref:`engine-turn-off-show-error`
      - Allows you to turn off showing errors in line with content
    * - :ref:`engine-http-response-headers`
      - Allows you to add headers to responses, such as caching policies
    * - :ref:`engine-url-rewrite-configuration`
      - Allows you to configure URL rewriting
    * - :ref:`engine-single-page-application`
      - Allows you to configure SPA
    * - :ref:`engine-cors`
      - Allows you to configure CORS headers
    * - :ref:`proxy-configuration`
      - Allows you to configure the proxy for the Preview server (Crafter Engine in Preview Mode)
    * - :ref:`engine-cache`
      - Allows you to configure various cache related items such as items to be preloaded in cache, etc.
    * - :ref:`request-filtering-configuration`
      - Allows you to configure request filtering
    * - :ref:`engine-forwarded-headers`
      - Allows you to configure forwarded headers
    * - :ref:`engine-policy-headers`
      - Allows you to configure policy headers
    * - :ref:`engine-custom-healthcheck`
      - Allows you to configure a custom health check script
    * - :ref:`engine-navigation`
      - Allows you to configure additional fields for dynamic navigation items
    * - :ref:`engine-search-timeouts`
      - Allows you to configure the search client connection timeout, socket timeout and number of threads
    * - :ref:`engine-content-length-headers`
      - Allows you to configure the content-length header
    * - :ref:`engine-static-methods-in-freemarker-templates`
      - Allows you to configure static methods in Freemarker templates
    * - :ref:`engine-spring-expression-language`
      - Allows you to configure SpEL expressions for custom app contexts
    * - :ref:`Setting log levels <permanently-set-logging-levels>`
      - Allows you to configure logging levels
    * - :ref:`engine-project-spring-configuration`
      - Allows you to configure Spring application context
    * - :ref:`engine-mongodb-configuration`
      - Allows you to configure Crafter Engine access to MongoDB
    * - :ref:`engine-crafter-profile-configuration`
      - Allows you to configure Crafter Engine access to Crafter Profile APIs

.. TODO  * - :ref:`adding-custom-properties`
        - Allows you to add custom properties to the project configuration

|

|hr|

.. _engine-root-folder:

^^^^^^^^^^^^^^^^^^
Engine Root Folder
^^^^^^^^^^^^^^^^^^
Crafter Engine requires a root folder path to be configured if the defaults are not used.

The default root folder path has the pattern: ``crafter.engine.site.default.rootFolder.path=file:${CRAFTER_DATA_DIR}/repos/sites/{siteName}/`` This relies on the ``CRAFTER_DATA_DIR`` environment variable being set. Crafter Engine will then resolve the ``{siteName}`` variable to the name of the site being requested.

To change the root folder path, you can either set the ``CRAFTER_DATA_DIR`` environment variable or change the default root folder path in the ``server-config.properties`` file (see more about that file in :ref:`server-config.properties <engine-configuration-files>`. The variable to modify is:

    .. code-block:: properties
      :caption: *{delivery-env-directory}/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

      crafter.engine.site.default.rootFolder.path=file:${CRAFTER_DATA_DIR}/repos/sites/{siteName}/

    |

|hr|

.. _engine-turn-off-show-error:

^^^^^^^^^^^^^^^^^^^
Turn Off Show Error
^^^^^^^^^^^^^^^^^^^
Templates in CrafterCMS will display the errors in line with content as they encounter them to help the template developer during the coding process. On production environments, you do not want the errors to show up because it will highlight site issues and expose information that may be a security concern. To turn off showing errors in line with content, do the following:

#. Place the following property and value in the ``server-config.properties`` file

   .. code-block:: properties
       :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

	   crafter.engine.template.error.displayInView=false

#. Restart the Crafter Engine application or the Tomcat service.

#. Test by deploying an FTL file with an error in it.
   Note that the error will not show up but is printed out in the server's log file.

|

|hr|

.. _engine-http-response-headers:

^^^^^^^^^^^^^^^^^^^^^
HTTP Response Headers
^^^^^^^^^^^^^^^^^^^^^
CrafterCMS supports adding headers to responses when there are matched configuration patterns in
the Engine Project Configuration file |br|

To setup HTTP response headers, do the following:
- Configure the Ant path pattern to match for adding headers to response in **headerMappings.mapping.urlPattern**
- Configure the ``<header>`` element and the `<value>`` element ` with your desired values under **headerMappings.mapping.headers**.

.. code-block:: xml
    :emphasize-lines: 3, 6-7
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/site-config.xml*

    <headerMappings>
      <mapping>
        <urlPattern>/**/*.pdf</urlPattern>
        <headers>
          <header>
            <name>X-Crafter-Document</name>
            <value>true</value>
          </header>
        </headers>
      </mapping>
    </headerMappings>

.. _engine-cache-headers:

"""""""""""""""""""""
Setting Cache Headers
"""""""""""""""""""""
Cache headers allows specifying caching policies such as how an item is cached, maximum age before expiring, etc.
These headers are extremely useful for indicating cache TTLs to CDNs and browsers on certain requests.

To setup cache headers, do the following:

- Configure the Ant path pattern to match for adding headers to response in **headerMappings.mapping.urlPattern**
- Configure the ``<header>`` element with the value ``Cache-Control`` and the element ``<value>`` with your desired Cache-Control
  directive under **headerMappings.mapping.headers**.

  See `here <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control>`__ for a list of available directives
  to use with ``Cache-Control``.

Your configuration should look something like below:

.. code-block:: xml
    :emphasize-lines: 3, 6-7
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/site-config.xml*

    <headerMappings>
      <mapping>
        <urlPattern>/articles/**</urlPattern>
        <headers>
          <header>
            <name>Cache-Control</name>
            <value>max-age=60\, s-maxage=300</value>
          </header>
        <headers>
      </mapping>
    </headerMappings>


Please note that the ``Cache-Control`` header inserted to responses by default is set to ``No-Cache``.

|

|hr|

.. _engine-url-rewrite-configuration:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Engine URL Rewrite Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
URL rewriting turns hard to remember, long and complicated URLs into easier to remember URLs.

CrafterCMS comes with the Tuckey URLRewrite filter, a Java Web Filter with functionality like Apache's mod_rewrite,
that lets you setup rewrite rules for your site.

To add a URL rewrite rule, in Studio, open the **Sidebar** then click on |projectTools|. Click on **Configuration**
then select **Engine URL Rewrite Configuration (XML Style)**.

.. image:: /_static/images/site-admin/config-urlrewrite-select.webp
    :alt: Configurations - Open URL Rewrite Configuration
    :width: 45 %
    :align: center

|

""""""
Sample
""""""
Here's a sample urlrewrite.xml file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "urlrewrite.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-urlrewrite.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/urlrewrite.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|

After making your changes and saving the configuration, remember to publish the configuration file just saved
(``urlrewrite.xml`` file).  To publish the configuration file, from the **Sidebar**, click on **Dashboard**.
In the **Unpublished Work** dashlet, check the box next to the ``urlrewrite.xml`` file, and click **Publish**
from the context nav to publish.

.. image:: /_static/images/site-admin/publish-urlrewrite.webp
    :alt: Configurations - Publish URL Rewrite Config File from Dashboard
    :width: 85 %
    :align: center

|

For more information on the UrlRewriteFilter, see http://tuckey.org/urlrewrite/

|hr|

.. _engine-single-page-application:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Single Page Application (SPA)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following section allows you to configure Single Page Application (SPA) mode and view name.


.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/site-config.xml*

    (Single Page Application Properties (React JS, Angular, Vue.js, etc.))
    <spa>
        <enabled /> (Enable/disable SPA mode, default is false)
        <viewName /> (The view name for the SPA (Single Page Application). Current view names can be a page URL (like /) or a template name (like /template/web/app.ftl). Default is /)
    </spa>

|

|hr|

.. _engine-cors:

^^^^
CORS
^^^^
The following section allows you to configure CORS headers in REST API responses when not in preview mode.

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/site-config.xml*

    (CORS Properties)
    <cors>
        <enable>true</enable> (Enable/disable CORS headers, default is false)
        (Values for each of the headers that will be added to responses)
        <accessControlMaxAge>3600</accessControlMaxAge>
        <accessControlAllowOrigin>*</accessControlAllowOrigin>
        <accessControlAllowMethods>GET\, OPTIONS</accessControlAllowMethods>
        <accessControlAllowHeaders>Content-Type</accessControlAllowHeaders>
        <accessControlAllowCredentials>true</accessControlAllowCredentials>
    </cors>

where:

- ``<enable>`` Enable/disable CORS headers, default is false. When enabled, :ref:`preview token <preview-token>`
  validation is skipped for CORS requests.

- ``<accessControlAllowOrigin>`` values are split using ``,``. Remember that
  commas inside patterns need to be escaped with a ``\``,
  like this: ``<accessControlAllowOrigin>http://localhost:[8000\,3000],http://*.other.domain</accessControlAllowOrigin>``

- ``<accessControlAllowMethods>`` and ``<accessControlAllowHeaders>`` values are split using ``,``. Remember to escape the commas ``,`` separating
  the values like this: ``<accessControlAllowHeaders>X-Custom-Header\, Content-Type</accessControlAllowHeaders>`` or
  ``<accessControlAllowMethods>GET\, OPTIONS</accessControlAllowMethods>``

.. note::
    When engine is in preview mode, it is a proxy and therefore will not add CORS headers to REST API responses even if CORS is enabled.

Here's an example of using patterns in ``accessControlAllowOrigin``:

.. code-block:: xml
    :caption: *Sample CORS configuration for using patterns in accessControlAllowOrigin*
    :emphasize-lines: 4

    <cors>
        <enable>true</enable>
        <accessControlMaxAge>3600</accessControlMaxAge>
        <accessControlAllowOrigin>http://localhost:[8081\,8082],http://*.other.domain</accessControlAllowOrigin>
        <accessControlAllowMethods>*</accessControlAllowMethods>
        <accessControlAllowHeaders>*</accessControlAllowHeaders>
        <accessControlAllowCredentials>true</accessControlAllowCredentials>
    </cors>

|

|hr|

.. _proxy-configuration:

^^^^^^^^^^^^^^^^^^^
Proxy Configuration
^^^^^^^^^^^^^^^^^^^
CrafterCMS supports a proxy system to proxy GraphQL, Engine, NodeJS or other application delivery systems. Whenever Crafter Engine receives a request, it is matched against the patterns of each server and the first match would then get the request sent to the server with the matching pattern. In some systems, multiple servers are used for search, Studio, etc. Using the proxy helps simplify the system.

One of the benefits of using the proxy in CrafterCMS is that it can connect to any remote server as the preview server, which allows for easier authoring of projects built with other programming languages and technology, React, Angular, or Vue for example.

The proxy configuration file contains configuration for the preview proxy servers.
To modify the proxy configuration, click on |projectTools| from the bottom of the *Sidebar*, then click on **Configuration** and select **Proxy Config** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-proxy-config.webp
    :alt: Configurations - Open Proxy Configuration
    :width: 45 %
    :align: center

Here's a sample Proxy Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "proxy-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-proxy-config.xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/asset-processing/proxy-config.xml*
    :language: xml
    :linenos:

.. raw:: html

   </details>

|
|

   .. note::
      Deleting the config file (*proxy-config.xml*) from the repo completely disables the proxy feature.

.. _using-the-proxy-configuration:

""""""""""""""""""""
Proxy Example: React
""""""""""""""""""""
For example, you would like to work on a React application within Studio. What is normally included inside Studio is the build output of the React application, so that a user making edits to the React code would need to build the React code then copy it into Studio in order to preview the changes. This becomes cumbersome when developing, as many edits are normally done before reaching the final version of the React app. Using the proxy, the user can preview the React app in Studio and is able to work on both the React app and CrafterCMS.

Let's take a look at an example of setting up the proxy for a React application.

We'll look at the Video Center Blueprint, a React application available from the public marketplace, that runs on ``localhost:3000``, then setup the Studio proxy so we can preview the React application inside Studio. Finally, we'll make some changes in the React application and view the changes made inside Studio.

Let's begin:

#. Setup the React application.

   * Clone the video center blueprint by running ``git clone https://github.com/craftercms/video-center-blueprint.git``

       .. code-block:: sh

          ➜ git clone https://github.com/craftercms/video-center-blueprint.git
          Cloning into 'video-center-blueprint'...
          remote: Enumerating objects: 6433, done.
          remote: Total 6433 (delta 0), reused 0 (delta 0), pack-reused 6433
          Receiving objects: 100% (6433/6433), 77.12 MiB | 4.92 MiB/s, done.
          Resolving deltas: 100% (4041/4041), done.

   * Run the React application

     Inside the video center blueprint folder that we just cloned above, navigate to ``video-center-blueprint/sources/app``.
     We need ``yarn`` installed in your system. Running ``yarn`` with no command will run ``yarn install``. In the example below, yarn is already installed in the system

       .. code-block:: sh
          :emphasize-lines: 1

          ➜  app git:(master) yarn
          yarn install v1.22.4
          [1/4] 🔍  Resolving packages...
          success Already up-to-date.
          ✨  Done in 0.68s.

     Build the React application by running ``yarn start``

       .. code-block:: sh
          :emphasize-lines: 1

          ➜  app git:(master) yarn start
            VITE v4.5.0  ready in 242 ms

            ➜  Local:   http://localhost:3000/
            ➜  Network: http://192.168.1.8:3000/

            ➜  press h to show help

     The command above will open a browser window where we can view the app

     .. image:: /_static/images/site-admin/vcbp-preview.webp
        :alt: Video Center Blueprint preview on "localhost:3000"
        :width: 70 %
        :align: center

     |

#. Setup Studio

   * Create a project using the video center blueprint from the Public Marketplace.

     From the **Main Menu**, click on **Project**, then click on the **Create Project** button. This will open the **Create Project** dialog. Look for **Video Center**, then click on the **Use** button, fill in the required information then click on the **Review** button, then finally the **Create Project** button. This **Video Center** blueprint we selected from the Marketplace is the same react application

     .. image:: /_static/images/site-admin/vcbp-marketplace.webp
        :alt: Select Video Center blueprint from the Public Marketplace
        :width: 70 %
        :align: center

     |


   * Setup the proxy for the video center React application we started above

     Open the **Sidebar**, click on |projectTools|, then click on **Configuration**. Select **Proxy Config** from the dropdown menu.

     .. image:: /_static/images/site-admin/config-open-proxy-config.webp
        :alt: Configurations - Open Proxy Configuration
        :width: 45%
        :align: center

     |

     Copy and paste the configuration below.  Scroll down to the ``preview`` server and notice that ``url`` points to the url used for the React application (``localhost:3000``) we setup in the beginning. Save your changes.

       .. code-block:: xml
          :caption: *CRAFTER_HOME/data/repos/sites/sandbox/SITENAME/sandbox/config/engine/proxy-config.xml*
          :emphasize-lines: 27

          <proxy-config>
            <version>4.0.1</version>
            <servers>
              <server>
                <id>static-assets</id>
                <url />
                <patterns>
                  <pattern>/static-assets/.*</pattern>
                </patterns>
              </server>
              <server>
                <id>graphql</id>
                <url />
                <patterns>
                  <pattern>/api/1/site/graphql.*</pattern>
                </patterns>
              </server>
              <server>
                <id>engine</id>
                <url />
                <patterns>
                  <pattern>/api/.*</pattern>
                </patterns>
              </server>
              <server>
                <id>preview</id>
                <url>http://localhost:3000</url>
                <patterns>
                  <pattern>.*</pattern>
                </patterns>
              </server>
            </servers>
          </proxy-config>

     For users running Studio on Docker, use ``http://host.docker.internal:3000`` for the ``url`` of the React application. Docker containers can access local services running on the host by connecting to ``host.docker.internal``. See https://docs.docker.com/docker-for-windows/networking/#use-cases-and-workarounds for more information on connecting from a container to a service on the host.

     At this point, the preview we are seeing in Studio should be the one from our React application.

   * Modify the React application then verify that we can preview the changes made inside Studio.

     For this part, we'll change the text ``Featured Channels`` in the home page to ``My Featured Channels``. Using your favorite editor, in your React app, navigate to ``video-center-blueprint/sources/app/src/containers/Home`` and open the ``Home.jsx`` file. Scroll down to the line with ``key: 'featured-channels'`` and edit the ``value``:

       .. code-block:: js
          :emphasize-lines: 3

          {
            key: 'featured-channels',
            value: 'My Featured Channels',
            type: 'channel-card-alt',
            ...

     Save your changes. Notice that in the React app preview (localhost:3000), the page is reloaded with our changes now visible. Now let's take a look at Studio. Notice that Studio preview has reloaded and the changes we made in the React app is now visible.

     .. image:: /_static/images/site-admin/vcbp-react-app-edited.webp
        :alt: Changes made in the React app now visible in the Studio preview
        :width: 70 %
        :align: center

     |

""""""""""""""""""""""
Proxy Example: Next.js
""""""""""""""""""""""
Let’s take a look at another example of setting up the proxy, this time for a Next.js application.

We’ll look at the Next.js Blueprint, a Next.js application available from the public marketplace, that runs on localhost:3000, then setup the Studio proxy so we can preview the Next.js application inside Studio. Finally, we’ll make some changes in the Next.js application and view the changes made inside Studio.

#. Setup Studio

   * Create a project using the Next.js blueprint from the Public Marketplace.

     From the **Main Menu**, click on **Project**, then click on the **Create Project** button. This will open the **Create Project** dialog. Look for **Next.js**, then click on the **Use** button, fill in the required information then click on the **Review** button, then finally the **Create Project** button. This **Next.js** blueprint we selected from the Marketplace contains the Next.js application that we will be proxying to Studio and the instructions for configuring the proxy.

     .. image:: /_static/images/site-admin/nextjsbp-marketplace.webp
        :alt: Select Next.js blueprint from the Public Marketplace
        :width: 70 %
        :align: center

     |

   * Follow the instructions listed in the README to run the Next.js application

     .. code-block:: text

         1. In the CrafterCMS site sandbox directory, you'll find a directory called app, which is the Next.js app. Visit that directory on your terminal and run ``yarn``
         2. Create a copy of ``app/.env.local.example`` to produce ``app/.env.local``. If you named your project ``nextjs`` and CrafterCMS is running on ``localhost:8080``, no further edits are necessary; otherwise, change the file accordingly.
         3. Run ``yarn dev`` to start the node server on localhost:3000

     In your terminal, navigate to ``CRAFTER_HOME/data/repos/sites/nextjs/sandbox/app`` then run ``yarn``

     .. code-block:: sh
          :caption: *CRAFTER_HOME/data/repos/sites/nextjs/sandbox/app*
          :emphasize-lines: 1

          ➜  app git:(master) yarn
          yarn install v1.22.4
          [1/4] 🔍  Resolving packages...
          success Already up-to-date.
          ✨  Done in 0.68s.

     Create a copy of ``app/.env.local.example`` to produce ``app/.env.local``

     .. code-block:: sh
         :caption: *CRAFTER_HOME/data/repos/sites/nextjs/sandbox/app*

         ➜ cp .env.local.example .env.local

     Start the node server on ``localhost:3000`` by running ``yarn dev``

       .. code-block:: sh
          :caption: *CRAFTER_HOME/data/repos/sites/nextjs/sandbox/app*
          :emphasize-lines: 1

          ➜ yarn dev
             ▲ Next.js 14.0.1
             - Local:        http://localhost:3000
             - Environments: .env.local

          ✓ Ready in 9.6s

     If you point your browser to ``http://localhost:3000`` we can view the app

     .. image:: /_static/images/site-admin/nextjs-preview.webp
        :alt: Next.js Blueprint preview on "localhost:3000"
        :width: 70 %
        :align: center

     |

   * Setup the proxy for the Next.js application we started above

     .. code-block:: text

         4. Open Project Tools (on the sidebar on the left) and select "Configuration"
         5. Search for "Proxy Config"
         6. Comment line 58 and uncomment line 59
         7. Close the pop-up and refresh the page. You'll now see the next.js application in this area.

     Open the **Sidebar**, click on |projectTools|, then click on **Configuration**. Select **Proxy Config** from the dropdown menu.
     The proxy configuration included in the Next.js blueprint is very similar to the proxy configuration listed in the React example above. Comment line 58 and uncomment line 59 in the configuration:

     .. code-block:: xml
         :emphasize-lines: 3,4

         <server>
           <id>preview</id>
           <!--url/-->
           <url>http://localhost:3000</url>
           <patterns>
             <pattern>.*</pattern>
           </patterns>
         </server>

     After saving your changes in the configuration file, close the dialog and refresh the page. You will now see the next.js application inside Studio.

|hr|

.. _engine-cache:

^^^^^
Cache
^^^^^
Crafter Engine sports a built-in cache engine with an LRU (least recently used) cache eviction policy. The cache is used to store an active set to help render content from memory whenever possible.

.. note:: When running in Preview Mode (inside Studio for preview purposes), Crafter Engine's cache is disabled to help authors see their changes immediately.

"""""""""
Max Items
"""""""""
The following allows you to configure the maximum number of objects in Engine's cache:

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    # The max number of items that each site cache can have
    crafter.engine.site.default.cache.maxAllowedItems=250000

"""""""""""""
Cache Warming
"""""""""""""
The following allows you to configure items to be warmed up (preloaded) in the cache:

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
    :emphasize-lines: 7,10,13

    #################
    # Cache Warm Up #
    #################
    # Indicates if cache warming should be enabled. This means the site cache will be warmed up (according to a list of
    # cache warmers) on context init and instead of cache clear, a new cache will be warmed up and switched with the
    # current one
    crafter.engine.site.cache.warmUp.enabled=false
    # The descriptor folders that need to be preloaded in cache, separated by comma. Specify the preload depth with
    # :{depth} after the path. If no depth is specified, the folders will be fully preloaded.
    crafter.engine.site.cache.warmUp.descriptor.folders=/site:3
    # The content folders that need to be preloaded in cache, separated by comma. Specify the preload depth with
    # :{depth} after the path. If no depth is specified, the folders will be fully preloaded.
    crafter.engine.site.cache.warmUp.content.folders=/scripts,/templates

where:

  - The descriptor folders are paths that contain XML that needs to be parsed, loaded and merged e.g. for inheritance.
    Most of the time this would be folders under ``/site``

  - The content folders are mostly static, non-processed content, e.g. scripts, templates, static-assets

For all projects, the cache is preloaded using the above configuration. CrafterCMS warms up the cache on every publish and startup. Note also that what's cache warmed will be warmed on every publish and startup and will live as long as nothing kicks it out of the cache due to least recently used (LRU) cache.

"""""""""""""""""""""""""
URL Transformations Cache
"""""""""""""""""""""""""
The following allows you to configure whether the URL transformation performed by the view resolver will be cached:

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    # Flag that indicates if the URL transformations performed by the view resolver should be cached
    crafter.engine.page.view.resolver.url.transformation.cache=false

.. _s3-object-caching:

"""""""""
S3 Object
"""""""""
.. version_tag::
    :label: Since
    :version: 4.1.0

The following allows you to configure a white list of paths for caching in memory when using S3 store and also the maximum content length for S3 objects allowed to be cached in memory

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    # Maximum content length (in bytes) for S3 objects to be cached in memory. Larger files will be retrieved
    # directly from S3 every time they are requested.
    # Default set to 10M = 10 * 1024 * 1024
    crafter.engine.store.s3.cache.contentMaxLength=10485760
    # White list of paths to be cached in memory when using S3 store.
    crafter.engine.store.s3.cache.allowedPaths=\
      /config/.*,\
      /site/.*,\
      /scripts/.*,\
      /templates/.*,\
      /static-assets/css/.*,\
      /static-assets/js/.*,\
      /static-assets/fonts/.*

|

|hr|

.. _request-filtering-configuration:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Request Filtering Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.1.0

The following allows you to setup a filter to deny access to any request matching the value/s defined in the property.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

    crafter.security.forbidden.urls=/templates/**

|

|hr|

.. _engine-forwarded-headers:

^^^^^^^^^^^^^^^^^
Forwarded Headers
^^^^^^^^^^^^^^^^^
The following section allows you to configure forwarded headers to resolve the actual hostname and protocol when it is behind a load balancer or reverse proxy. Forwarded headers are disabled by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if Forwarded or X-Forwarded headers should be used when resolving the client-originated protocol and
   # address. Enable when Engine is behind a reverse proxy or load balancer that sends these
   crafter.engine.forwarded.headers.enabled=false

|

|hr|

.. _engine-policy-headers:

^^^^^^^^^^^^^^
Policy Headers
^^^^^^^^^^^^^^
.. version_tag::
    :label: Since
    :version: 4.1.2

""""""""""""""
Referer Policy
""""""""""""""
The following allows you to configure what information is made available in the Referer header in a request.
This can be set to a different value as needed.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
    :linenos:

    # The value of the Referer-Policy header that should be set in all requests. Supported
    # values are: no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin,
    # origin-when-cross-origin, strict-origin-when-cross-origin, unsafe-url
    crafter.security.headers.referrerPolicy.value=no-referrer

"""""""""""""""""""""""
Content Security Policy
"""""""""""""""""""""""
The following allows you to configure which resources can be loaded (e.g. JavaScript, CSS, Images, etc.)
and the URLs that they can be loaded from. This should be tuned to the specific requirements of each project.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
    :linenos:

    # The value of the Content-Security-Policy header that should be set in all requests.
    crafter.security.headers.contentSecurityPolicy.value=default-src 'self' 'unsafe-inline'
    # Set to true to enable the Content-Security-Policy-Report-Only header (this will report in the user agent console instead of actually blocking the requests)
    crafter.security.headers.contentSecurityPolicy.reportOnly=true

To block offending requests, set ``crafter.security.headers.contentSecurityPolicy.reportOnly`` to ``false``.
This property is set to ``true`` by default.

"""""""""""""""""""""""""""""""""
X-Permitted-Cross-Domain-Policies
"""""""""""""""""""""""""""""""""
The following allows you to configure what other domains you want to allow access to your domain.
The X-PERMITTED-CROSS-DOMAIN-POLICIES header is set to ``none`` (do not allow any embedding) by default.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
    :linenos:

    # The value of the X-PERMITTED-CROSS-DOMAIN-POLICIES header that should be set in all requests
    crafter.security.headers.permittedCrossDomainPolicies.value=none

|

|hr|

.. _engine-custom-healthcheck:

^^^^^^^^^^^^^^^^^^^
Custom Health Check
^^^^^^^^^^^^^^^^^^^
Each project can be configured to provide a custom health check script.  By default, Engine will look for a file
``/scripts/health-check.groovy`` containing your custom script for a health check in your project that will run
when `status <../../../_static/api/engine.html#tag/monitoring/operation/status>`_ is checked for the project. The
location of your health check custom script, is configured in your project's ``site-config.xml`` file as seen below:

.. code-block::
    :caption: *CRAFTER_HOME/data/repos/site/PROJECT_NAME/sandbox/config/engine/site-config.xml*

    # The path of the Groovy script for site health check
    crafter.engine.site.default.health-check.script.path=/scripts/health-check.groovy

|

|hr|

.. _engine-navigation:

^^^^^^^^^^
Navigation
^^^^^^^^^^
The following section allows you to configure additional fields for dynamic navigation items

.. code-block:: xml
    :caption: *CRAFTER_HOME/data/repos/site/PROJECT_NAME/sandbox/config/engine/site-config.xml*

    (Navigation Properties)
    <navigation>
        <additionalFields /> (List of additional fields to include for dynamic navigation items)
    </navigation>

|

|hr|

.. _engine-search-timeouts:

^^^^^^^^^^^^^^^
Search Timeouts
^^^^^^^^^^^^^^^
The following allows you to configure the search client connection timeout, socket timeout and number of threads.

.. code-block:: properties
    :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*
    :linenos:

    # The connection timeout in milliseconds, if set to -1 the default will be used
    crafter.engine.search.timeout.connect=-1
    # The socket timeout in milliseconds, if set to -1 the default will be used
    crafter.engine.search.timeout.socket=-1
    # The number of threads to use, if set to -1 the default will be used
    crafter.engine.search.threads=-1

|

|hr|

.. _engine-content-length-headers:

^^^^^^^^^^^^^^^^^^^^^^
Content-Length Headers
^^^^^^^^^^^^^^^^^^^^^^
The following allows you to configure the content-length header sent for responses.
The content-length header is sent for all responses by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if the 'etag' header should be added
   crafter.engine.header.etag.enable=false
   # Indicates the urls that will have the 'etag' header (comma separated ant matchers)
   crafter.engine.header.etag.include.urls=/**

|

|hr|

.. _engine-static-methods-in-freemarker-templates:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Static Methods in Freemarker Templates
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The following allows you to configure access to static methods in Freemarker templates.
Access to static methods in Freemarker templates is disabled by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if access for static methods should be allowed in Freemarker templates
   crafter.engine.freemarker.statics.enable=false

|

|hr|

.. _engine-spring-expression-language:

^^^^^^^^^^^^^^^^^^^^^^^^^^
Spring Expression Language
^^^^^^^^^^^^^^^^^^^^^^^^^^
The following allows you to configure SpEL expressions for custom app contexts.
SpEL expressions support is disabled by default.

.. code-block:: properties
   :linenos:
   :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

   # Indicates if the custom site application contexts should support SpEL expressions
   crafter.engine.context.expressions.enable=false
   # Indicates if the whole servlet & spring context should be available for templates & scripts
   crafter.engine.disableVariableRestrictions=false
   # Patterns for beans that should always be accessible from the site application context
   crafter.engine.defaultPublicBeans=crafter\\.(targetIdManager|targetedUrlStrategy)

|

|hr|

.. _engine-project-spring-configuration:

^^^^^^^^^^^^^^^^^^^^
Spring Configuration
^^^^^^^^^^^^^^^^^^^^
Each project can have it's own Spring application context. Just as with ``site-config.xml``, beans
can be overwritten using the following locations:

Spring Configuration Files
 - ``/config/engine/application-context.xml`` (This file can be accessed easily from any project created
   through the out-of-the-box blueprints, by navigating from the Studio sidebar to ``Project Tools``
   > ``Configuration``, and finally picking up the ``Engine Project Application Context`` option from the dropdown).

	 .. image:: /_static/images/site-admin/engine-project-application-context.webp
			 :alt: Engine Project Application Context

 - ``/config/engine/env/{envName}/application-context.xml``

The application context inherits from Engine's own service-context.xml, and any class in Engine's
classpath can be used, including Groovy classes declared under ``/scripts/classes/*``.

As an example, assuming you have defined a Groovy class under ``/scripts/classes/mypackage/MyClass.groovy``,
you can define a bean like this:

.. code-block:: xml
  :caption: */config/engine/application-context.xml*
  :linenos:

	<?xml version="1.0" encoding="UTF-8"?>
	<beans xmlns="http://www.springframework.org/schema/beans"
	       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean class="org.springframework.context.support.PropertySourcesPlaceholderConfigurer" parent="crafter.properties"/>

    <bean id="greeting" class="mypackage.MyClass">
      <property name="myproperty" value="${myvalue}"/>
    </bean>

  </beans>

A ``org.springframework.context.support.PropertySourcesPlaceholderConfigurer`` (like above) can be
specified in the context so that the properties of ``site-config.xml`` can be used as placeholders,
like ``${myvalue}``. By making the placeholder configurer inherit from crafter.properties, you'll
also have access to Engine's global properties (like ``crafter.engine.preview``).

.. note::
    Crafter Engine will not be able to load your Project Context if your context file contains invalid XML,
    incorrect configuration or if your beans do not properly handle their own errors on initialization.

|

|hr|

.. _engine-mongodb-configuration:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Engine to use MongoDB
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
There are times when you may need access to MongoDB. This section details how you can access MongoDB by configuring Engine.

Here are the steps for configuring Engine to use mongoDB:

"""""""""""""""""""""""""
Configure the MongoDB URI
"""""""""""""""""""""""""
To define the connection between MongoDB and Engine, add the URI in the config file `/config/engine/site-config.xml`. (This file can be accessed easily from any project created through the out-of-the-box blueprints, by navigating from the Studio sidebar to Project Tools > Configuration, and finally picking up the **Engine Project Configuration** option from the dropdown).

.. code-block:: xml
    :caption: */config/engine/site-config.xml*

    <site>
      <db>
          <uri>mongodb://{host}:{port}/{database}?readPreference=primary&amp;maxPoolSize=50&amp;minPoolSize=5&amp;maxIdleTimeMS=1000&amp;waitQueueMultiple=200&amp;waitQueueTimeoutMS=100&amp;w=1&amp;journal=true</uri>
      </db>
    </site>

where:
   * {host} - required, server address to connect to
   * {port} - optional, with a default value of :27020 in CrafterCMS Authoring
   * {database} - optional, name of the database to authenticate if the connection string includes authentication credentials.

For more details on the Connection String URI format, see https://docs.mongodb.com/manual/reference/connection-string/

""""""""""""""""""""""
Create a GMongo Client
""""""""""""""""""""""
To access Mongo from Groovy, we'll use a GMongo client. We'll need to add some beans in `/config/engine/application-context.xml`. (This file can be accessed easily from any project created through the out-of-the-box blueprints, by navigating from the Studio sidebar to Project Tools > Configuration, and finally picking up the **Engine Site Application Context** option from the dropdown).

.. code-block:: xml
    :caption: */config/engine/application-context.xml*
    :linenos:

    <beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

       <bean class="org.springframework.context.support.PropertySourcesPlaceholderConfigurer" parent="crafter.properties"/>

       <bean id="mongoUri" class="com.mongodb.MongoClientURI">
         <constructor-arg value="${db.uri}"/>
       </bean>

       <bean id="mongoClient" class="com.gmongo.GMongoClient">
         <constructor-arg ref="mongoUri"/>
       </bean>

    </beans>

"""""""""""""""""""""""""""""""""""
Use the Client From a Groovy Script
"""""""""""""""""""""""""""""""""""
We can now use the client from a Groovy script. Here's a simple script that runs a query:

.. code-block:: groovy
    :linenos:

    def mongo = applicationContext.mongoClient
    def db = mongo.getDB("{database}")
    def result = null
    def record = db.{collection}.findOne(_id: "{some id}")
    if (record) {
        result = record.name
    }
    return result

where:
    * {database} - the name of an existing database
    * {collection} - collection name
    * {some id} - id you're searching for depending on your database

"""""""""""""""""""""""""""""""""
Publish Configuration to Delivery
"""""""""""""""""""""""""""""""""
Until this point all changes have been made from Crafter Studio so they will only affect immediately
the authoring environment, for a delivery environment you will need to publish the changed files.

This can be done from the Studio project dashboard with the following steps:

1. Go to Studio's project dashboard via the Navigation Menu on the top right or via the Sidebar

   .. image:: /_static/images/content-author/project-dashboard-sidebar.webp
       :width: 65 %
       :align: center
       :alt: Studio - Project Dashboard from Sidebar

2. Locate the ``Unpublished Work`` dashlet

   .. image:: /_static/images/site-admin/mongo/my-recent-activity.webp
      :alt: Studio Project Dashboard - My Recent Activity
      :width: 70 %
      :align: center

3. Select all configuration files updated in the previous sections

   .. image:: /_static/images/site-admin/mongo/my-recent-activity-config.webp
      :alt: Studio Project Dashboard - My Recent Activity
      :width: 70 %
      :align: center

4. Click ``Publish`` from the contextual menu

   .. image:: /_static/images/site-admin/mongo/approve-and-publish-context-menu.webp
      :alt: Studio Project Dashboard - Contextual Menu
      :width: 70 %
      :align: center

5. Click ``Publish`` to close the publish dialog

   .. image:: /_static/images/site-admin/mongo/publish-dialog.webp
      :alt: Studio Project Dashboard - Publish Dialog
      :width: 60%
      :align: center

Once the files are deployed to the delivery node and the project context is reloaded the new
Configuration will take effect.

""""""""""""""""""""""""""""""""
Delivery Specific Configurations
""""""""""""""""""""""""""""""""
If you need to manage different values for the configuration files depending on the environment
you can find more detailed information in the :ref:`engine-multi-environment-support` section.

|

|hr|


.. TODO: Add a section to show how to include your own properties
    .. _adding-custom-properties:
    ^^^^^^^^^^^^^^^^^^^^^^^^
    Adding Custom Properties
    ^^^^^^^^^^^^^^^^^^^^^^^^
    Crafter Engine allows developers to add custom properties to the ``/config/engine/site-config.xml`` file. This is useful when you want to add properties that are specific to your project.
    """""""
    Example
    """""""

.. _engine-multi-environment-support:

--------------------------------
Engine Multi-Environment Support
--------------------------------
The following engine configuration files can be setup for different environments:

* ``site-config.xml``
* ``application-context.xml``
* ``urlrewrite.xml``

To setup an environment for engine configuration files, do the following:

#. Create a folder under ``data/repos/sites/${site}/sandbox/config/engine`` called ``env``
#. Inside the folder, create a directory called ``myenv`` (or whatever you want to call the environment)
#. Copy the configuration file you want to override in the new environment you are setting up, inside your ``myenv`` folder
#. Remember to commit the files copied so Studio will pick it up.
#. In the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` set the
   following property to desired environment:

      .. code-block:: bash
         :caption: *bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=myenv}

      |

#. Restart Crafter

^^^^^^^^
Examples
^^^^^^^^

"""""""""""""""""""""""""""""""""""""
Creating a Custom Environment Example
"""""""""""""""""""""""""""""""""""""
Let's take a look at an example of creating a new environment, called ``mycustomenv`` with the ``urlrewrite.xml``
file overridden in the new environment for a project created using the Website Editorial blueprint.  This example
is very similar to the example shown above for Studio except for the location of the custom configuration file:

#. We'll create a folder called ``env`` under ``data/repos/sites/my-editorial/sandbox/config/engine``

      .. code-block:: text
         :linenos:
         :emphasize-lines: 8

         data/
           repos/
             sites/
               my-editorial/
                 sandbox/
                   config/
                     engine/
                       env/

      |

#. Inside the ``env`` folder, create a directory called ``mycustomenv``
#. We will now create the configuration file for the ``urlrewrite.xml`` that we want to override in the new environment we are setting up, inside our ``mycustomenv`` folder:

      .. code-block:: text
         :emphasize-lines: 3

             env/
               mycustomenv/
                 urlrewrite.xml

     |

   We will redirect the page to ``/articles/2021/12/Top Books For Young Women`` when the page ``/articles/2020/12/Top Books For Young Women`` is previewed. Copy the following inside the ``urlrewrite.xml`` file.

     .. code-block:: xml
        :linenos:
        :caption: *Urlrewrite.xml file for environment mycustomenv*

        <?xml version="1.0" encoding="utf-8"?>
        <urlrewrite>
          <rule>
            <from>/articles/2020/12/(.*)$</from>
            <to type="redirect">/articles/2021/12/$1</to>
          </rule>
        </urlrewrite>

     |

   For our example, the folder ``articles/2020/12`` was copied to ``articles/2021`` with the page under ``articles/2021/12``, modified to display the title as a dupe. This was done so when we click on the page under ``articles/2020/12``, we can easily tell that it's being redirected to the page under ``articles/2021/12``. Of course, you can also just look at the url of the page previewed to verify that it was redirected to the right page.

   .. image:: /_static/images/site-admin/env-copy-page-for-urlrewrite.webp
       :align: center
       :width: 25%
       :alt: Folder with page copied from 2020 to 2021

   |

   Here's the original page:

   .. image:: /_static/images/site-admin/env-original-page.webp
      :align: center
      :alt: Original page before being redirected

   |

   Here's the page we want to be redirected to when previewing the page above:

   .. image:: /_static/images/site-admin/env-redirect-page.webp
      :align: center
      :alt: Page we want to be redirected to

   |

#. Remember to commit the files copied so Studio will pick it up.

      .. code-block:: bash

         ➜  sandbox git:(master) ✗ git add .
         ➜  sandbox git:(master) ✗ git commit -m "Add urlrewrite.xml file for mycustomenv"

      |

#. Open the ``crafter-setenv.sh`` file in ``TOMCAT/bin`` and set the value of ``CRAFTER_ENVIRONMENT`` to the
   environment we setup above (*myenv*) to make it the active environment:

      .. code-block:: bash
         :caption: *bin/crafter-setenv.sh*

         # -------------------- Configuration variables --------------------
         export CRAFTER_ENVIRONMENT=${CRAFTER_ENVIRONMENT:=mycustomenv}

      |

#. Restart Crafter. To verify our newly setup environment, open the ``Sidebar`` and click on |projectTools|, then select ``Configuration``. Notice that the active environment ``mycustomenv`` will be displayed on top of the configurations drop-down box and when you select the *Engine URL Rewrite Configuration (XML Style)*, it should display the file we created in one of the previous step:

   .. image:: /_static/images/site-admin/env-custom-configurations.webp
      :align: center
      :alt: Active Environment Displayed in Project Tools Configuration

   |

   Let's verify that our *urlrewrite.xml* is in effect. From the *Sidebar*, click on *Home* -> *Entertainment* -> *Top Books For Young Women*  or, navigate to */articles/2020/12/* and click on *Top Books For Young Women*.

   .. image:: /_static/images/site-admin/env-preview-page.webp
      :align: center
      :alt: Preview the page mentioned in the urlrewrite.xml that will be redirected

   |

   The preview page should take you to */articles/2021/12/Top Books For Young Women*

"""""""""""""""""""""""""""""""""""""""""""
Environment Specific Configurations Example
"""""""""""""""""""""""""""""""""""""""""""
Environments are useful for managing values such as paths or database connections without the need to
change any code directly in the servers.

In this example, we show how to manage a database connection that will change depending on the server
where the project is deployed. We will have three environments ``dev``, ``auth`` and ``delivery``

#. First create the environments by following the example above for creating the environments.
   We'll then have the following folders called ``dev``, ``auth`` and ``delivery`` under ``CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/env``

#. Next, include the appropriate connection string for each environment in the ``site-config.xml`` file:

   .. code-block:: xml
      :caption: *Local Development Configuration: /config/engine/env/dev/site-config.xml*
      :linenos:

      <?xml version="1.0" encoding="UTF-8"?>
      <site>
        <db>
          <uri>mongodb://localhost:27017/mydb?maxPoolSize=1&amp;minPoolSize=0&amp;maxIdleTimeMS=10000</uri>
        </db>
      </site>


   .. code-block:: xml
       :caption: *Authoring Configuration: /config/engine/env/auth/site-config.xml*
       :linenos:

       <?xml version="1.0" encoding="UTF-8"?>
       <site>
         <db>
           <uri>mongodb://localhost:27020/mydb?maxPoolSize=5&amp;minPoolSize=2&amp;maxIdleTimeMS=10000</uri>
         </db>
       </site>


   .. code-block:: xml
      :caption: *Delivery Configuration: /config/engine/env/delivery/site-config.xml*
      :linenos:

      <?xml version="1.0" encoding="UTF-8"?>
      <site>
        <db>
          <uri>mongodb://delivery-db-server:27020/delivery-db?maxPoolSize=10&amp;minPoolSize=5&amp;maxIdleTimeMS=1000</uri>
        </db>
      </site>

   Remember to commit the files copied so Studio will pick it up.

#. Finally, notice when using this approach the code is completely independent of the environment so we only need one
   bean that will always connect to the right database:

   .. code-block:: xml
      :caption: *Default Application Context: /config/engine/application-context.xml (shared by all environments)*
      :linenos:

      <?xml version="1.0" encoding="UTF-8"?>
      <beans xmlns="http://www.springframework.org/schema/beans"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

        <bean class="org.springframework.context.support.PropertySourcesPlaceholderConfigurer" parent="crafter.properties"/>

        <bean id="mongoUri" class="com.mongodb.MongoClientURI">
           <constructor-arg value="${db.uri}"/>
        </bean>

        <bean id="mongoClient" class="com.gmongo.GMongoClient">
          <constructor-arg ref="mongoUri"/>
        </bean>

      </beans>


|hr|

.. _engine-multi-target-configurations:

---------------------------
Engine Multi-target Support
---------------------------
There are some cases where the Engine configuration files need to have different values per publishing target. Say for a production environment where you have **staging** to test out your project and **live** , the project to be used by end users, you may need different SAML authentication mechanics or different URL rewrites.

The :ref:`engine-multi-environment-support` section detailed how to setup Engine configuration files per environment. CrafterCMS
supports overriding Engine configuration files, not just per environment, but also per publishing target.
It supports a base configuration per environment with the ability to override per publishing target.

The following engine configuration files can be setup for different publishing targets:

* site-config.xml
* application-context.xml
* urlrewrite.xml

Here are the available publishing targets for the configuration files listed above:

* preview
* staging
* live

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Overriding Engine Configuration Files per Publishing Target
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To override a configuration file in any of the publishing targets

#. Add the new configuration file/s for overriding to **Configurations** under |projectTools| -> **Configuration**

   .. image:: /_static/images/site-admin/configuration.webp
      :alt: Multi-target Configuration - Open Configurations
      :width: 45 %
      :align: center

   |

   The overriding configuration file should be named **configuration-to-be-overridden.publishing-target.xml**. Depending on the publishing target you wish the configuration file to override, the files should look like one of the following:

   - *configuration-to-be-overridden.preview.xml*
   - *configuration-to-be-overridden.staging.xml*
   - *configuration-to-be-overridden.live.xml*

   |

   Say, to add a ``urlrewrite.xml`` file override for **staging**, add the following in the **Configurations**

     .. code-block:: xml
        :caption: *Configurations* - *SITENAME/config/studio/administration/config-list.xml*
        :emphasize-lines: 3

        <file>
          <module>engine</module>
          <path>urlrewrite.staging.xml</path>
          <title>Engine URL Rewrite (XML Style) Staging</title>
          <description>Engine URL Rewrite (XML Style) Staging</description>
          <samplePath>sample-urlrewrite.xml</samplePath>
        </file>

     |

   For more information on **Configurations** config file, see :ref:`project-tools-configuration`

#. Fill in your desired additions/modifications to the override configuration file. Refresh your browser. The configuration file you added from above should now be available from |projectTools| -> **Configuration**. Open the new configuration file and make the necessary additions/modifications for the override file then save your changes.

   .. image:: /_static/images/site-admin/new-configuration-added.webp
      :alt: Multi-target Configuration - New configuration files added to dropdown list
      :width: 55 %
      :align: center

   |

#. If the configuration file to be overridden is not for preview, publish the configuration file to the intended publishing target, **staging** or **live**

"""""""
Example
"""""""

Let's take a look at an example of overriding the Project Configuration used by Engine ``site-config.xml`` for the **staging** and **live** publishing targets so that each target has a different SAML authentication mechanics (different identity provider in ``staging`` and ``live``). In our example, we will use a project created using the Website Editorial blueprint named **mysite**

#. Add the new configuration file/s for overriding to **Configurations** under |projectTools| -> **Configuration**. We will be overriding the ``site-config.xml`` file in the **staging** and **live** publishing targets, so we will add to the configuration a ``site-config.staging.xml`` and ``site-config.live.xml`` files.

   .. code-block:: xml
      :caption: *Configurations* - *SITENAME/sandbox/config/studio/administration/config-list.xml*
      :linenos:
      :emphasize-lines: 3,10

      <file>
        <module>engine</module>
        <path>site-config.staging.xml</path>
        <title>Engine Project Configuration Staging</title>
        <description>Project Configuration used by Engine for the Staging publishing target</description>
        <samplePath>sample-engine-site-config.xml</samplePath>
      </file>
      <file>
        <module>engine</module>
        <path>site-config.live.xml</path>
        <title>Engine Project Configuration Live</title>
        <description>Project Configuration used by Engine for the Live publishing target</description>
        <samplePath>sample-engine-site-config.xml</samplePath>
      </file>

   |

#. The configurations we added above will now be available from |projectTools| -> **Configuration**.

   .. image:: /_static/images/site-admin/project-config-override-added.webp
      :alt: Multi-target Configuration - Project Tools override configuration files now listed in "Project Tools" -> "Configuration"
      :width: 55 %
      :align: center

   |

   Enable SAML2 in the configuration with identity provider *My IDP1* for the ``site-config.staging.xml`` and use identity provider *My IDP2* for the ``site-config.live.xml``.

   .. code-block:: xml
      :linenos:
      :caption: *SITENAME/sandbox/config/engine/site-config.staging.xml*

      <site>
        <version>4.0.1</version>

        <security>
          <saml2>
            <enable>true</enable>
            <attributes>
              <mappings>
                <mapping>
                  <name>DisplayName</name>
                  <attribute>fullName</attribute>
                </mapping>
              </mappings>
            </attributes>
            <role>
               <mappings>
                  <mapping>
                     <name>editor</name>
                     <role>ROLE_EDITOR</role>
                  </mapping>
               </mappings>
            </role>
            <keystore>
               <defaultCredential>my-site</defaultCredential>
               <password>superSecretPassword</password>
               <credentials>
                  <credential>
                     <name>my-site</name>
                     <password>anotherSecretPassword</password>
                  </credential>
               </credentials>
            </keystore>
            <identityProviderName>My IDP1</identityProviderName>
            <serviceProviderName>Crafter Engine</serviceProviderName>
         </saml2>
        </security>

      </site>

   |

   For more information on SAML2 configuration, see :ref:`engine-saml2-configuration`

#. Publish ``site-config.live.xml`` to live and ``site-config.staging.xml`` to staging.

   To publish the override configuration files setup above, open the **Dashboard** via the Navigation Menu on the top right or via the Sidebar.  Scroll to the **Unpublished Work** dashlet.

   .. image:: /_static/images/site-admin/view-override-config-on-dashboard.webp
      :alt: Multi-target Configuration - New configuration files listed in the "Unpublished Work" dashlet in the Dashboard
      :width: 85 %
      :align: center

   |

   To publish the ``site-config.live.xml`` configuration file to publishing target ``live``, put a check mark next to the file in the dashlet, then click on ``Publish`` from the context nav. Remember to set the ``Publishing Target`` to **live** in the ``Publish`` dialog

   .. image:: /_static/images/site-admin/publish-override-file.webp
      :alt: Multi-target Configuration - Set "Publishing Target" to "live" in dialog for site-config.live.xml
      :width: 55 %
      :align: center

   |

   To publish the ``site-config.staging.xml`` file to publishing target ``staging`` put a check mark next to the file in the dashlet, then click on ``Publish`` from the context nav. Remember to set the ``Publishing Target`` to **staging** in the ``Publish`` dialog.

   The Engine ``site-config.live.xml`` configuration will now be loaded when viewing your project in ``live`` and the Engine ``site-config.staging.xml`` configuration will now be loaded when viewing your project in ``staging`` instead of the default Engine ``site-config.xml`` files

|hr|

.. TODO Review and clean up below

.. _configure-custom-services:

-------------------------
Configure Custom Services
-------------------------
When developing templates or scripts only a small list of services are available to use. You can expose other
services with the following steps.

^^^^^^^^^^^^^^^^^^^
CrafterCMS Services
^^^^^^^^^^^^^^^^^^^
If your project/site includes a custom application context with services, you can make them available by adding them to the
comma-separated list in the :ref:`server-config.properties <engine-configuration-files>` configuration file:

.. code-block:: none
  :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``

  # Patterns for beans that should be accessible from the site application context
  crafter.engine.defaultPublicBeans=crafter\\.(targetIdManager|targetedUrlStrategy),someOtherBean

.. note:: The value from the configuration is used as a regular expression, if the value contains special
          characters you will need to escape them with backslashes ``\\``.

^^^^^^^^^^^^^^^
System Services
^^^^^^^^^^^^^^^
.. warning:: This setting will disable restrictions for all projects/sites

|

System objects like ``servletContext`` cannot be exposed by adding them to a list, instead you will need to change
the following configuration in the :ref:`server-config.properties <engine-configuration-files>` file:

.. code-block:: none
  :caption: ``CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``

  # Expose all services
  crafter.engine.disableVariableRestrictions=true

|hr|


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Adding Dependencies with Grape
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If your Groovy code need to use external dependencies you can use Grapes, however, when the Groovy sandbox is enabled
dependencies can only be downloaded during the initial compilation and not during runtime. For this reason it is
required to add an extra parameter ``initClass=false`` in the annotations to prevent them to be copied to the classes:

.. code-block:: groovy
  :caption: Example grapes annotations

  @Grab(group='org.apache.commons', module='commons-pool2', version='2.8.0', initClass=false)
  @Grab(value='org.apache.commons:commons-pool2:2.8.0', initClass=false)
