.. _setup-serverless-delivery:

=========================================
Setup AWS Serverless Delivery Environment
=========================================

Crafter CMS can be configured to provide a delivery environment that is seamlessly integrated with AWS services like
S3 and CloudFront.

-----------------------------------
Crafter Engine AWS S3 Content Store
-----------------------------------

When Crafter Engine is configured to use the AWS S3 Content Store it will serve files directly from a given bucket
instead of the local file system.

.. warning:: To achieve the best performance it is recommended to avoid serving large binary files from S3 and use
          a CDN such as AWS CloudFront instead.

^^^^^^^^^^^^^
Configuration
^^^^^^^^^^^^^

1. Add an XML import to enable the AWS S3 Content Store in the service context override file:
   
   ``INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/services-context.xml``
   
   .. code-block:: xml
   
     <import resource="classpath*:crafter/engine/store/s3/store-context.xml"/>

2. Update the properties with the following values:
   
   +-----------------------------------------------+---------------------------------------------------------------+
   | Property                                      | Description                                                   |
   +===============================================+===============================================================+
   |``crafter.engine.site.default.rootFolder.path``| The root folder for sites, it should be set to a valid S3 URI |
   |                                               | Example: ``s3://my_bucket/my_sites/{siteName}``               |
   +-----------------------------------------------+---------------------------------------------------------------+
   |``crafter.engine.s3.region``                   | The region for the bucket, if no value is provided the        |
   |                                               | ``DefaultAwsRegionProviderChain`` will be used                |
   +-----------------------------------------------+---------------------------------------------------------------+
   |``crafter.engine.s3.accessKey``                | The access key for the bucket, if no value is provided the    |
   |                                               | ``DefaultAWSCredentialsProviderChain`` will be used           |
   +-----------------------------------------------+---------------------------------------------------------------+
   |``crafter.engine.s3.secretKey``                | The secret key for the bucket, if no value is provided the    |
   |                                               | ``DefaultAWSCredentialsProviderChain`` will be used           |
   +-----------------------------------------------+---------------------------------------------------------------+

----------------------------
Crafter Deployer AWS Targets
----------------------------

When a new target is created in Crafter Deployer, it can use the ``aws-s3`` template that includes:

- A processor that replaces local static-assets URLs with external URLs
- A processor that syncs changed files with an S3 bucket
- A processor that invalidates changed files in AWS CloudFront distributions

^^^^^^^^^^^^^
Configuration
^^^^^^^^^^^^^

To create an AWS target you can use the Crafter Deployer REST API as described :ref:`crafter-deployer-api-target-create`
using the following additional parameters in the request body:

+------------------------+------------------------------------------------------------------------------------------+
| Parameter              | Description                                                                              |
+========================+==========================================================================================+
|``aws.region``          |The region for all services, if no value is provided the ``DefaultAwsRegionProviderChain``|
|                        | will be used                                                                             |
+------------------------+------------------------------------------------------------------------------------------+
|``aws.access_key``      |The access key for all services, if no value is provided the                              |
|                        |``DefaultAWSCredentialsProviderChain`` will be used                                       |
+------------------------+------------------------------------------------------------------------------------------+
|``aws.secret_key``      |The secret key for all services, if no value is provided the                              |
|                        |``DefaultAWSCredentialsProviderChain`` will be used                                       |
+------------------------+------------------------------------------------------------------------------------------+
|``aws.s3.url``          |The S3 URI of the bucket for syncing changed files                                        |
+------------------------+------------------------------------------------------------------------------------------+
|``aws.distribution.url``|The CloudFront URL that will be used to replace local URLs                                |
+------------------------+------------------------------------------------------------------------------------------+
|``aws.distribution.ids``|The ids of any CloudFront distribution for cache invalidation                             |
+------------------------+------------------------------------------------------------------------------------------+
|``engine_urls``         |The list of URLs to clear cache & reload site context after deploy                        |
+------------------------+------------------------------------------------------------------------------------------+
|``delay``               |The number of seconds to wait after syncing to S3                                         |
+------------------------+------------------------------------------------------------------------------------------+

Example Request:

.. code-block:: json

  {
    "env": "aws",
    "site_name": "mysite",
    "template_name" : "aws-s3",
    "repo_url" : "/opt/crafter/data/repos/sites/mysite/sandbox",
    "aws": {
      "s3": {
        "url" : "s3://my_bucket/my_sites/"
      },
      "distribution" : {
        "url": "http://d111111abcdef8.cloudfront.net",
        "ids": [
          "E15UHQPTKROC8Z"
        ]
      }
    }
  }

.. note:: 
  Using the ``DefaultAwsRegionProviderChain`` and ``DefaultAWSCredentialsProviderChain`` means Crafter can be deployed 
  to an AWS EC2 instance and use the appropriate region and credentials without any additional configuration. For more
  information see the 
  `official documentation <https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default>`_.
