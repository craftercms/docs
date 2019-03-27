.. _setting-up-a-serverless-site:

============================
Setting up a serverless site
============================

Crafter CMS can be configured to serve sites directly from AWS services, following this guide you will:

- Configure Crafter Deployer to upload files to AWS S3 and index to AWS Elasticsearch
- Configure Crafter Engine to read files from AWS S3 and query to AWS Elasticsearch


-------------
Prerequisites
-------------

- An AWS account
- A local Crafter CMS authoring environment or a Git repository containing a site
- A local Crafter CMS delivery environment

----------------------------------------------------
Step 1: Create the site in the authoring environment
----------------------------------------------------

.. note:: You can skip this step if you already have an existing site or will use a remote Git repository to deploy to
          AWS, just make sure to use the right name in the following steps.

1. Start the authoring environment
   ``AUTHORING_INSTALL_DIR/bin/startup.sh``
2. Login to Crafter Studio at `<http://localhost:8080/studio>`_
3. Click the ``Create Site`` button
4. Type ``mysite`` in the ``Site Id`` field, choose the ``Editorial`` blueprint and click the ``Create`` button

--------------------------------
Step 2: Create the AWS resources
--------------------------------

.. important:: You might need to wait several minutes before the CloudFront distribution and the Elasticsearch domain
               are available to continue with the next steps.

Login to the `AWS Management Console <https://aws.amazon.com/console/>`_ to create the following resources:

^^^^^^^^^
S3 Bucket
^^^^^^^^^

1. In the top navigation bar click the ``Services`` dropdown menu
   
   .. image:: /_static/images/developer/serverless/top-navigation.png
      :alt: How-Tos - AWS Top Navigation
      :width: 70 %
      :align: center
   
2. In the ``Storage`` section click ``S3``

   .. image:: /_static/images/developer/serverless/storage.png
      :alt: How-Tos - AWS S3
      :width: 30 %
      :align: center

3. Click the ``Create bucket`` button

   .. image:: /_static/images/developer/serverless/create-bucket.png
      :alt: How-Tos - AWS S3 Create Bucket
      :width: 70 %
      :align: center

4. Type ``crafter-sites`` in the ``Bucket name`` field, choose the region and click the ``Create`` button

   .. image:: /_static/images/developer/serverless/bucket-settings.png
      :alt: How-Tos - AWS S3 Bucket settings
      :width: 70 %
      :align: center

^^^^^^^^^^^^^
Elasticsearch
^^^^^^^^^^^^^

1. In the top navigation bar click the ``Services`` dropdown menu

   .. image:: /_static/images/developer/serverless/top-navigation.png
      :alt: How-Tos - AWS Top Navigation
      :width: 70 %
      :align: center

2. In the ``Analytics`` section click ``Elasticsearch Service``

   .. image:: /_static/images/developer/serverless/analytics.png
      :alt: How-Tos - AWS Analytics
      :width: 30 %
      :align: center

3. Click the ``Create a new domain`` button

.. image:: /_static/images/developer/serverless/create-new-domain.png
   :alt: How-Tos - AWS Elasticsearch Create New Domain
   :width: 70 %
   :align: center

4. Select the appropriate ``Deployment type`` and ``Elasticsearch version`` and click the ``Next`` button

   .. image:: /_static/images/developer/serverless/es-type.png
      :alt: How-Tos - AWS Elasticsearch Type
      :width: 70 %
      :align: center

5. Type ``crafter-sites`` for the ``Elasticsearch domain name`` field, select the appropriate settings for 
   ``Data instances`` and ``Storage`` and click the ``Next`` button
   
   .. image:: /_static/images/developer/serverless/es-domain.png
      :alt: How-Tos - AWS Elasticsearch Domain settings
      :width: 70 %
      :align: center
   
6. Select the appropriate ``Network configuration`` and click the ``Next`` button
7. Click the ``Confirm`` button
8. Take note of the ``Endpoint`` URL for the next steps

   .. image:: /_static/images/developer/serverless/es-endpoint.png
      :alt: How-Tos - AWS Elasticsearch endpoint
      :width: 70 %
      :align: center


^^^^^^^^^^^^^^^^^^^^^^^
CloudFront Distribution
^^^^^^^^^^^^^^^^^^^^^^^

1. In the top navigation bar click the ``Services`` dropdown menu

   .. image:: /_static/images/developer/serverless/top-navigation.png
      :alt: How-Tos - AWS Top Navigation
      :width: 70 %
      :align: center

2. In the ``Networking & Content Delivery`` section click ``CloudFront``

   .. image:: /_static/images/developer/serverless/networking-and-cdn.png
      :alt: How-Tos - AWS Networking and CDN
      :width: 30 %
      :align: center

3. Click the ``Create Distribution`` button

   .. image:: /_static/images/developer/serverless/create-distribution.png
      :alt: How-Tos - AWS CloudFront Create Distribution
      :width: 70 %
      :align: center

4. Click the ``Get Started`` button for Web distribution

   .. image:: /_static/images/developer/serverless/web-distribution.png
      :alt: How-Tos - AWS CloudFront Web Distribution
      :width: 70 %
      :align: center

5. Choose the ``crafter-sites`` bucket for the ``Origin Domain Name`` field, type ``/sites/mysite`` for the 
   ``Origin Path`` field
    
   .. image:: /_static/images/developer/serverless/distribution-origin.png
      :alt: How-Tos - AWS CloudFront Distribution settings
      :width: 70 %
      :align: center
    
6. Select the appropriate security options under ``Restrict Bucket Access`` and click the ``Create Distribution`` 
   button at the bottom of the page
7. Take note of the distribution ``ID`` and ``Domain Name`` for the next steps

   .. image:: /_static/images/developer/serverless/distribution-settings.png
      :alt: How-Tos - AWS CloudFront Distribution information
      :width: 70 %
      :align: center

---------------------------------------------------
Step 3: Configure Crafter Engine & Crafter Deployer
---------------------------------------------------

1. Edit the services override file to enable the S3 content store
   ``DELIVERY_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/services-context.xml``
   
   .. code-block:: xml
   
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

      <import resource="classpath*:crafter/engine/mode/multi-tenant/simple/services-context.xml" />
      <import resource="classpath*:crafter/engine/store/s3/store-context.xml"/>
    </beans>

2. Edit the properties override file to point the content store to the AWS services
   ``DELIVERY_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``
   
   .. code-block:: properties
  
     crafter.engine.site.default.rootFolder.path=s3://crafter-sites/sites/{siteName}
     crafter.engine.s3.region=<YOUR AWS REGION>
     crafter.engine.s3.accessKey=<YOUR AWS ACCESS KEY>
     crafter.engine.s3.secretKey=<YOUR AWS SECRET KEY>
     crafter.engine.elasticsearch.urls=<YOUR AWS ELASTICSEARCH ENDPOINT>

3. Edit the base target override file to point to AWS Elasticsearch
   ``DELIVERY_INSTALL_DIR/bin/crafter-deployer/conf/base-target.yaml``

   .. code-block:: yaml
   
     target:
      localRepoPath: ${deployer.main.deployments.folderPath}/${target.siteName}
      engineUrl: http://${sys:tomcat.host}:${sys:tomcat.http.port}
      search:
        serverUrl: http://${sys:tomcat.host}:${sys:tomcat.http.port}/crafter-search
        elasticsearch:
          urls:
            - <YOUR AWS ELASTICSEARCH ENDPOINT>
      notifications:
        mail:
          server:
            host: ${sys:mail.host}
            port: ${sys:mail.port}

-------------------------------------------------
Step 4: Create the AWS target in Crafter Deployer
-------------------------------------------------

1. Start the delivery environment (Crafter Engine & Crafter Deployer)
   ``DELIVERY_INSTALL_DIR/bin/startup.sh skipElasticsearch``
2. Create a new target using the REST API:
   
   .. code-block:: bash
   
     curl --request POST \
        --url http://localhost:9192/api/1/target/create \
        --header 'content-type: application/json' \
        --data '{
          "env": "aws",
          "site_name": "mysite",
          "template_name": "aws-s3",
          "repo_url": "INSTALL_DIR/data/repos/sites/mysite/published",
          "aws": {
            "region": "<YOUR AWS REGION>",
            "access_key": "<YOUR AWS ACCESS KEY>",
            "secret_key": "<YOUR AWS SECRET KEY>",
            "s3": {
              "url": "s3://crafter-sites/sites"
            },
            "distribution": {
              "url": "http://<YOUR DISTRIBUTION DOMAIN NAME>",
              "ids": [ "<YOUR DISTRIBUTION ID>" ]
            }
          },
          "engine_urls": [ "http://localhost:9080" ],
          "delay": 10
        }'

----------------------
Step 5: Test your site
----------------------

1. Open a browser and go to `<http://localhost:8090?crafterSite=mysite>`_

   .. image:: /_static/images/developer/serverless/mysite.png
      :alt: How-Tos - Crafter Engine using a S3 bucket
      :width: 70 %
      :align: center

2. Verify that the static-assets are being served from the CloudFront distribution

.. image:: /_static/images/developer/serverless/static-assets.png
   :alt: How-Tos - Crafter Engine using a CloudFront distribution
   :width: 70 %
   :align: center

.. note::
   For this configuration to work properly it is required for the CloudFront distribution to have read access to
   the S3 bucket, this can be managed in the AWS Management Console using security policies.
   
   Some assets like fonts require to setup CORS in the S3 bucket and whitelist the CORS headers in the CloudFront 
   distribution to work properly.

Additional information about the settings used in the guide can be found in :ref:`setup-serverless-delivery`