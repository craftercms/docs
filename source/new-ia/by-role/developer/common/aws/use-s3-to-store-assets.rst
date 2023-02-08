:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:

.. index:: Use S3 to Store Assets

.. _newIa-use-s3-to-store-assets:

======================
Use S3 to store assets
======================

AWS S3 is recommended when you need to store media and documents that are quite large. The following guide
explains how to:

* Configure Studio to use an S3 bucket.
* Upload documents to the S3 bucket using the AWS data sources and item selector control in Studio.
* Generate public links that users can use to access these documents.

|
|

   .. note::
      The preferred way to store S3 files is to use the Blob Store since it can handle multiple buckets and is completely integrated in Crafter Studio, allowing you to upload and publish files in S3 as if they were in the local repo.

      For more information on Blob Store, see :ref:`newIa-blob-stores-configuration`

      For an example of setting up a blob store, see :ref:`here <newIa-publishing-assets-in-external-storage-example>`

-------------
Prerequisites
-------------

* Create an AWS S3 bucket to upload the assets.
* Create a site based on the Editorial blueprint.

------------------------------------------
Step 1: Add the S3 configuration in Studio
------------------------------------------

Go to |projectTools| > ``Configurations`` and in the dropdown select ``AWS Profiles``. If you click on
``View Sample``, you'll see the available configuration profiles. In particular, the configuration for an S3
profile is the following:

.. code-block:: xml
   :linenos:

   <profile>
    <id/>
    <credentials>
      <accessKey/>
      <secretKey/>
    </credentials>
    <region/>
    <bucketName/>
   </profile>

|

Where:

- **profile.id:** the ID that AWS data sources will use to refer to this profile.
- **credentials:** the AWS credentials (access key and secret key) use to access the S3 bucket.
- **region:** the AWS region where the bucket resides.
- **bucketName:** the name of the bucket where the assets will be put.

For this guide, the ``AWS Profiles`` should look like this (replace the ``X's`` for actual AWS credentials and
bucket name for the actual bucket where you're storing the documents):

.. code-block:: xml
   :linenos:

   <?xml version="1.0" encoding="UTF-8"?>
   <aws>
     <version>2</version>
     <s3>
       <profile>
         <id>s3-default</id>
         <credentials>
           <accessKey>XXXXXXXXXX</accessKey>
           <secretKey>XXXXXXXXXXXXXXXXXXXX</secretKey>
         </credentials>
         <region>us-east-1</region>
         <bucketName>mybucket</bucketName>
       </profile>
     </s3>
   </aws>

|

--------------------------------------------------------------------------------------------------
Step 2: Add the controls and data source for uploading files to your S3 bucket to the content type
--------------------------------------------------------------------------------------------------

For our example, we'll add an ``Attachment`` field, which is of type ``node-selector`` that is bound to an AWS file upload
data source, to the ``Page - Article`` content type. To do this:

#. Go to |projectTools| and open the ``Page - Article`` content type definition.
#. We'll add a data source where to upload our files.  At the end of the **Data Sources** section, add a ``File Uploaded to S3 Repository`` data source with Title **S3 Upload** and Name **s3Upload**.  In the **Profile Id** property, enter the name of ``profile.id`` configured in step 1.

   .. image:: /_static/images/guides/s3/attachments-datasource.webp
      :alt: AWS S3 Assets - Attachments Data Sources
      :align: center
      :width: 65%

   |

#. At the end of the **Content** section, add a ``Repeating Group`` control with Title **Attachments** and Name
   **attachments**.
#. Add an ``Input`` control inside the repeating group with Title **Attachment Name** and Name **attachmentName**.
#. Add an ``Item Selector`` control with Title **Attachment** and Name **attachment**.  We will bind the data source we added above to the ``Item Selector`` control by opening the Properties, then scroll to ``Item Manager`` and check the box next to the data source we added earlier, **S3 Upload**

   .. image:: /_static/images/guides/s3/attachments-controls.webp
      :alt: AWS S3 Assets - Attachments Controls
      :align: center
      :width: 65%

|

.. note::

    If you're using Freemarker as your view layer, follow the steps below after adding the data source and controls for uploading files to your S3 bucket to the content type:

    We need to add the Freemarker code that will render the URLs. In
    the ``Templates`` > ``web`` > ``pages`` > ``article.ftl``, add the following lines after the
    ``<#list contentModel.sections.item as item>...</#list>`` lines:

    .. code-block:: html
       :force:
       :linenos:

       <#if contentModel.attachments??>
         <h2>Attachments</h2>
         <ul>
           <#list contentModel.attachments.item as a>
             <li><a href="${a.attachment.item.key}">${a.attachmentName}</a></li>
           </#list>
         </ul>
       </#if>

|

-------------------------------------------------
Step 3: Add some attachments and test the changes
-------------------------------------------------

If all the previous steps have been done correctly, you should be able to add any number of attachments and they
should appear underneath the last content sections when the page is rendered. For example, after adding a couple of
PDF catalogs in the *Men Styles For Winter* article:

.. image:: /_static/images/guides/s3/attachments-form.webp
   :alt: AWS S3 Assets - Attachments Form
   :align: center

|

The bottom of the page looks like this when you preview your page:

.. image:: /_static/images/guides/s3/attachments-view.webp
   :alt: AWS S3 Assets - Attachments View
   :align: center

|

---------------------------
Step 4: Publish the changes
---------------------------

The next step is to publish the changes.  Remember to publish not just the page where we added the S3 assets,
but also the ``article.ftl`` and the ``aws.xml`` files too.

.. image:: /_static/images/guides/s3/attachments-publish.webp
   :alt: AWS S3 Assets - Publish Changes
   :align: center
