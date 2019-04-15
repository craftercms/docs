.. _setup-serverless-site:

=======================
Setup a Serverless Site
=======================

Crafter CMS can be configured to serve sites directly from AWS services, following this guide you will:

- Configure the Crafter Deployer of an authoring environment to upload files to AWS S3 and index to AWS Elasticsearch.
- Configure the Crafter Engine of a delivery environment to read files from AWS S3 and query to AWS Elasticsearch.

-------------
Prerequisites
-------------

- An AWS account
- A Crafter CMS authoring environment
- A Crafter CMS delivery environment

----------------------------------------------------
Step 1: Create the site in the authoring environment
----------------------------------------------------

.. note:: You can skip this step if you already have an existing site.

#. Start the authoring environment: ``AUTHORING_INSTALL_DIR/bin/startup.sh``
#. Login to Crafter Studio at `<http://localhost:8080/studio>`_
#. Click the ``Create Site`` button
#. Choose the ``Editorial`` blueprint, enter the ``Site Id`` (e.g. ``editorial``), and then review and create.

--------------------------------
Step 2: Create the AWS resources
--------------------------------

.. important:: You might need to wait several minutes before the CloudFront distribution and the Elasticsearch domain
               are available to continue with the next steps.

.. important:: If you already have a serverless site set up, and are in the process of setting up another one, you
               can reuse the S3 Bucket and Elasticsearch. You will need to create a new CloudFront distribution
               though, since each site needs its own distribution.

Login to the `AWS Management Console <https://aws.amazon.com/console/>`_ to create the following resources:

^^^^^^^^^
S3 Bucket
^^^^^^^^^

#. In the top navigation bar click the ``Services`` dropdown menu, and search for ``S3``.
#. Click on ``Create bucket``.
#. Enter the ``Bucket name`` (for example, ``craftercms-sites``), choose the region, leave the defaults on the 
   next 2 steps and finally click on ``Create``.

   .. image:: /_static/images/system-admin/serverless/create-bucket.png
      :alt: Serverless Site - Create S3 Bucket
      :align: center

#. After the bucket is created, select the bucket, go to ``Permissions`` and in the ``CORS Configuration`` enter the 
   following:

   .. code-block:: xml

      <?xml version="1.0" encoding="UTF-8"?>
      <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <CORSRule>
          <AllowedOrigin>*</AllowedOrigin>
          <AllowedMethod>GET</AllowedMethod>
          <AllowedMethod>HEAD</AllowedMethod>
          <MaxAgeSeconds>3000</MaxAgeSeconds>
          <AllowedHeader>*</AllowedHeader>
        </CORSRule>
      </CORSConfiguration>

   .. important:: For production and to tighten up security, we recommend you specify a fixed origin in ``AllowedOrigin``.

^^^^^^^^^^^^^
Elasticsearch
^^^^^^^^^^^^^

#. In the top navigation bar click the ``Services`` dropdown menu, and search for ``Elasticsearch Service``.
#. Click on ``Create a new domain``.
#. Select a ``Deployment Type`` and on the Elasticsearch version, pick the latest ``6.x`` (currently it's ``6.5``).

   .. image:: /_static/images/system-admin/serverless/es-deployment-type.png
      :alt: Serverless Site - Elasticsearch Deployment Type
      :align: center

#. On the next screen, enter the domain name. Leave the defaults on the rest of the settings or change as needed, 
   and then click on ``Next``.
#. On ``Network Configuration``, we recommend you pick the VPC where your authoring and delivery nodes reside. If
   they're not running on an Amazon VPC, then pick ``Public Access``.

   .. image:: /_static/images/system-admin/serverless/es-network-access.png
      :alt: Serverless Site - Elasticsearch Network Access
      :align: center

#. Select the ``Access Policy`` that fits your Crafter environment, and click on ``Next``.

   .. image:: /_static/images/system-admin/serverless/es-access-policy.png
      :alt: Serverless Site - Elasticsearch Access Policy
      :align: center

#. Review the settings and click on ``Confirm``.
#. Wait for a few minutes until the domain is ready. Copy the ``Endpoint``. You'll need this URL later to configure
   the Deployer and Delivery Engine which will need access to the Elasticsearch.

   .. image:: /_static/images/system-admin/serverless/es-endpoint.png
      :alt: Serverless Site - Elasticsearch Endpoint
      :align: center

^^^^^^^^^^^^^^^^^^^^^^^
CloudFront Distribution
^^^^^^^^^^^^^^^^^^^^^^^

#. In the top navigation bar click the ``Services`` dropdown menu, and search for ``CloudFront``.
#. Click on ``Create Distribution``.
#. In ``Select a delivery method for your content``, click on ``Get Started`` under ``Web``.

   .. image:: /_static/images/system-admin/serverless/cf-delivery-method.png
      :alt: Serverless Site - CloudFront Delivery Method
      :align: center

#. In the ``Origin Settings`` section do the following:

   #. In ``Origin Domain Name``, select the S3 bucket domain.
   #. In ``Origin Path``, enter the site base path (e.g. ``/editorial``)
   #. Select ``Yes`` in ``Restrict Bucket Access``.
   #. Select ``Create a New Identity`` in ``Origin Access Identity``.
   #. Select ``Yes, Update Bucket Policy`` in ``Grant Read Permissions on Bucket``.

   .. image:: /_static/images/system-admin/serverless/cf-origin-settings.png
      :alt: Serverless Site - CloudFront Origin Settings
      :align: center

#. Under the ``Default Cache Behavior Settings`` section, in ``Cache Based on Selected Request Headers``, select
   ``Whitelist`` and add the following headers: ``Access-Control-Request-Headers``, ``Access-Control-Request-Method`` 
   and ``Origin``.

   .. image:: /_static/images/system-admin/serverless/cf-whitelist-headers.png
      :alt: Serverless Site - CloudFront Whitelist Headers
      :align: center

#. Leave or change the rest of the settings as you see fit, and finally click on ``Create Distribution``.
#. On the left sidebar, click on ``Distributions``. You should see the distribution been created (``In Progress``
   status). Take note of the distribution ``ID`` and ``Domain Name`` for the next steps.

   .. image:: /_static/images/system-admin/serverless/cf-domain.png
      :alt: Serverless Site - CloudFront ID and Domain Name
      :align: center

-----------------------------------------------------------
Step 3: Create the AWS Target in Authoring Crafter Deployer
-----------------------------------------------------------

The Deployer target you're about to create will allow the authoring Deployer to push the content to the S3 bucket and 
index the files in the AWS Elasticsearch any time you do a publish in the site.

#. Copy the following content in a file in the authoring node/server. Please also edit the values in ``<>``.

   .. code-block:: yaml

     {
        "env": "aws",
        "site_name": "<SITE_NAME>",
        "template_name": "aws-s3",
        "local_repo_path": "${env:CRAFTER_DATA_DIR}/repos/aws/<SITE_NAME>",
        "elastic_search_url": "<ELASTICSEARCH_URL>",
        "repo_url": "${env:CRAFTER_DATA_DIR}/repos/sites/<SITE_NAME>/published",
        "aws": {
          "region": "<AWS_REGION>",
          "access_key": "<AWS_ACCESS_KEY>",
          "secret_key": "<AWS_SECRET_KEY",
          "s3": {
            "url": "s3://<BUCKET_NAME>/<SITES_ROOT>/{siteName}"
          },
          "distribution": {
            "url": "http://<CLOUDFRONT_DISTRIBUTION_DOMAIN_NAME>",
            "ids": [ "<CLOUDFRONT_DISTRIBUTION_ID>" ]
          }
        },
        "delay": 10
     }

#. Call the Deployer create target API with the file you created in the previous step as the request body. You can do
   do this in ``curl`` with the following command (replace <> for the actual filename):

   .. code-block:: bash

      curl --request POST --url http://localhost:9191/api/1/target/create --header 'content-type: application/json' --data '@<CREATE_TARGET_REQUEST_BODY_FILE>'

#. If you ``tail`` the Deployer log file (``AUTHORING_INSTALL_DIR/logs/deployer/crafter-deployer.out``), after a minute,
   you should see indications that the site was uploaded to S3 and the files were indexed.

-----------------------------------------------------------------
Step 4: Configure the Delivery Crafter Engine for Serverless Mode
-----------------------------------------------------------------

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

#. Edit the properties override file to point the content store to the AWS services
   (``DELIVERY_INSTALL_DIR/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties``). The
   properties you need to update are the following:

   - ``crafter.engine.site.default.rootFolder.path``
   - ``crafter.engine.s3.region``
   - ``crafter.engine.s3.accessKey``
   - ``crafter.engine.s3.secretKey``

   An example of how the ``server-config.properties`` would look with these properties configured (values in 
   ``*`` are not displayed since they're sensitive):

   .. code-block:: properties

      # Content root folder when using S3 store. Format is s3://<BUCKET_NAME>/<SITES_ROOT>/{siteName}
      crafter.engine.site.default.rootFolder.path=s3://craftercms-sites/{siteName}
      # The URL of Crafter Search
      crafter.engine.search.server.url=${SEARCH_URL}
      # The URL of Crafter Profile
      crafter.profile.rest.client.url.base=${PROFILE_URL}
      # If the Security Provider is enabled
      crafter.security.enabled=true
      # The Elasticsearch hosts to use
      crafter.engine.elasticsearch.urls=${ES_URL}

      # S3 Serverless properties
      # S3 region
      crafter.engine.s3.region=us-east-1
      # AWS access key
      crafter.engine.s3.accessKey=**********
      # AWS secret key
      crafter.engine.s3.secretKey=********************

   You can also provide the AWS region, access key and secret key without having to edit the config file properties.
   Please see 
   `Set up AWS Credentials and Region for Development <https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html>`_. 

#. Edit the ``ES_URL`` in ``DELIVERY_INSTALL_DIR/bin/crafter-setenv.sh`` to point to the Elasticsearch endpoint:
      
   .. code-block:: bash

      export ES_URL=https://search-craftercms-sites-kvbatu2vr4nioxpwmktlpvq3jm.us-east-1.es.amazonaws.com

------------------------------
Step 5: Test the Delivery Site
------------------------------

#. Start the delivery environment: ``DELIVERY_INSTALL_DIR/bin/startup.sh``
#. Open a browser and go to `<http://localhost:9080?crafterSite=editorial>`_.

   .. image:: /_static/images/system-admin/serverless/editorial-screenshot.png
      :alt: Serverless Site - Editorial Screenshot
      :align: center

#. Verify that the static-assets are being served from the CloudFront distribution (in Chrome, you can do this by 
   right-clicking an image and then clicking on ``Inspect``).

   .. image:: /_static/images/system-admin/serverless/static-asset-inspect.png
      :alt: Serverless Site - Static Asset Inspect
      :align: center

