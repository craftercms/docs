.. index:: Use S3 to Store Assets

======================
Use S3 to Store Assets
======================

AWS S3 is recommended when you need to store media and documents that are quite large. The following guide
explains how to:

* Configure Studio and Engine to use an S3 bucket.
* Upload documents to the S3 bucket using the ``aws-file-upload`` control in Studio.
* Generate public links in Engine that users can use to access these documents.

-------------
Prerequisites
-------------

* Create an AWS S3 bucket to upload the assets.
* Create a site based on the Editorial blueprint.

------------------------------------------
Step 1: Add the S3 configuration in Studio
------------------------------------------

Go to ``Site Config`` > ``Configurations`` and in the dropdown select ``AWS Profiles``. If you click on
``View Sample``, you'll see the available configuration profiles. In particular, the configuration for an S3
profile is the following:

.. code-block:: xml

  <profile>
   <id/>
   <credentials>
     <accessKey/>
     <secretKey/>
   </credentials>
   <region/>
   <bucketName/>
  </profile>

Where:

- **profile.id:** the ID that ``aws-file-upload`` controls will use to refer to this profile.
- **credentials:** the AWS credentials (access key and secret key) use to access the S3 bucket.
- **region:** the AWS region where the bucket resides.
- **bucketName:** the name of the bucket where the assets will be put.

For this guide, the ``AWS Profiles`` should look like this (replace the ``X's`` for actual AWS credentials and
bucket name for the actual bucket where you're storing the documents):

.. code-block:: xml

  <?xml version="1.0" encoding="UTF-8"?>
  <aws>
    <profile>
      <id>s3-default</id>
      <credentials>
        <accessKey>XXXXXXXXXX</accessKey>
        <secretKey>XXXXXXXXXXXXXXXXXXXX</secretKey>
      </credentials>
      <region>us-east-1</region>
      <bucketName>mybucket</bucketName>
    </profile>
  </aws>

------------------------------------------
Step 2: Add the S3 configuration in Engine
------------------------------------------

Engine's S3 configuration is completely flexible, since it depends on your Groovy code that generates the S3 pre-signed
URLs. Nevertheless, at least for this guide, we recommend that (from Studio) you create the following configuration in
``Site Config`` > ``Configurations`` > ``Engine Site Configuration`` (again replace the ``X's`` for the actual
credentials):

.. code-block:: xml

  <?xml version="1.0" encoding="UTF-8"?>
  <site>
    <aws>
      <region>US_EAST_1</region>
      <accessKey>XXXXXXXXXX</accessKey>
      <secretKey>XXXXXXXXXXXXXXXXXXXX</secretKey>
      <urlExpiration>60</urlExpiration> <!-- Expiration in seconds -->
    </aws>
  </site>

------------------------------------------
Step 3: Enable the AWS File Upload Control
------------------------------------------

In ``Site Config`` > ``Configurations`` > ``Site Config Tools``, in the ``<controls>`` section, enable the AWS
File Upload by adding the following lines:

.. code-block:: xml

  <control>
    <name>aws-file-upload</name>
    <icon>
      <class>fa-upload</class>
      <stackedclass>fa-magic</stackedclass>
    </icon>
  </control>

-----------------------------------------------------------
Step 4: Add the AWS File Upload Control to the content type
-----------------------------------------------------------

For our example, we'll add an ``Attachments`` field, which is of type ``aws-file-upload``, to the ``Page - Article``
content type. To do this:

#. Go to ``Site Config`` > ``Content Types`` > ``Open Existing Type`` and open the ``Page - Article`` content type definition.
#. At the end of the *Content* section, add a ``Repeating Group`` control with Title *Attachments* and Name
   *attachments*.
#. Add an ``Input`` control inside the repeating group with Title *Attachment Name* and Name *attachmentName*.
#. Add an ``AWS File Upload`` control with Title *Attachment* and Name *attachment* (the control has a property
   called Profile ID. If you changed the name of ``profile.id`` in step 1, you need to change it in the property too).

.. image:: /_static/images/guides/s3/attachments-controls.png
   :alt: AWS S3 Assets - Attachments Controls
   :align: center

---------------------------------------------------------
Step 5: Add the Groovy script to generate the public URLs
---------------------------------------------------------

In order for the article attachments to be publicly accessible, we need a Groovy script that will be executed every
time an Article page is about be be rendered, that will generate pre-signed URLs for every one of the article
attachments, and that will put the URLs in the template model so that they can be shown in the view. To do this, create
a controller under ``Scripts`` > ``pages`` and name it ``article.groovy``. The controller must have the following code:

.. code-block:: groovy
  :linenos:

  @Grab(group='com.amazonaws', module='aws-java-sdk-s3', version='1.11.428')
  import com.amazonaws.services.s3.AmazonS3ClientBuilder
  import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration
  import com.amazonaws.regions.Regions
  import com.amazonaws.auth.AWSStaticCredentialsProvider
  import com.amazonaws.auth.BasicAWSCredentials
  import com.amazonaws.HttpMethod

  def createS3Client() {
      def region = siteConfig.getString("aws.region")
      def accessKey = siteConfig.getString("aws.accessKey")
      def secretKey = siteConfig.getString("aws.secretKey")

      return AmazonS3ClientBuilder.standard()
          .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
          .withRegion(Regions.valueOf(region))
          .build()
  }

  def generatePublicUrl(client, bucket, key) {
      def urlExpiration = siteConfig.getInt("aws.urlExpiration")
      def expiration = new Date(System.currentTimeMillis() + urlExpiration * 1000)

      return client.generatePresignedUrl(bucket, key, expiration, HttpMethod.GET)
  }

  def addAttachment(client, attachmentElement, attachments) {
      def name = attachmentElement.attachmentName.text
      def bucket = attachmentElement.attachment.item.bucket.text
      def key = attachmentElement.attachment.item.key.text
      def url = generatePublicUrl(client, bucket, key)

     attachments[name] = url
  }

  def attachmentElements = contentModel.attachments?.item
  def attachments = [:]

  if (attachmentElements) {
      def client = createS3Client()

      if (attachmentElements instanceof Collection) {
          attachmentElements.each { elem ->
              addAttachment(client, elem, attachments)
          }
      } else {
          // This means there's a single attachment
          addAttachment(client, attachmentElements, attachments)
      }
  }

  templateModel.attachments = attachments

|

----------------------------------------------
Step 6: Add Freemarker code to render the URLs
----------------------------------------------

Now that we have the Groovy code to generate the URLs, we need the Freemarker code that will render the URLs. In
the ``Templates`` > ``web`` > ``pages`` > ``article.ftl``, add the following lines after the
``<#list contentModel.sections.item as item>...</#list>`` lines:

.. code-block:: guess

  <#if attachments??>
    <h2>Attachments</h2>
    <ul>
    <#list attachments?keys as name>
      <li><a href="${attachments[name]}">${name}</a></li>
    </#list>
    </ul>
  </#if>

-------------------------------------------------
Step 7: Add some attachments and test the changes
-------------------------------------------------

If all the previous steps have been done correctly, you should be able to add any number of attachments and they
should appear underneath the last content sections when the page is rendered. For example, after adding a couple of
PDF catalogs in the *Men Styles For Winter* article:

.. image:: /_static/images/guides/s3/attachments-form.png
   :alt: AWS S3 Assets - Attachments Form
   :align: center

The bottom of the page looks like this:

.. image:: /_static/images/guides/s3/attachments-view.png
   :alt: AWS S3 Assets - Attachments View
   :align: center

---------------------------
Step 8: Publish the changes
---------------------------
The next step is to publish the changes. Remember to publish not just the page where we added the Box assets, but also the ``article.ftl``, ``article.groovy``, ``engine/site-config.xml`` and the ``aws.xml`` files too.
