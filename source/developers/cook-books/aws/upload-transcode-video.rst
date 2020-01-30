:is-up-to-date: True

.. index:: Upload and Transcode Video to AWS

.. _upload-transcode-video-to-aws:

===========================================================
Upload and Transcode Video using AWS Elemental MediaConvert
===========================================================

Crafter Studio allows users to upload and transcode videos using AWS MediaConvert using a data source in the content type. The following guide explains how to:

* Configure Studio to use AWS MediaConvert and S3 for uploading and transcoding video.
* Upload video to AWS using the video picker control and AWS data sources in Studio that then triggers a transcoding job.
* Generate public links that users can use to display the transcoded videos.

-------------
Prerequisites
-------------

* Create an AWS S3 bucket for uploading the transcoded videos.
* Create an AWS Elemental MediaConvert Job template
* Create a site based on the Website Editorial blueprint.

-----------------------------------------------------------
Step 1: Add the S3 and MediaConvert configuration in Studio
-----------------------------------------------------------

Go to |siteConfig| > ``Configuration`` and in the dropdown select ``AWS Profiles``. If you click on
``View Sample``, you'll see the available configuration profiles.

In particular, the configuration for the AWS MediaConvert profile is the following:

.. code-block:: xml
   :linenos:

       <mediaConvert>
            <profile>
                <id>mediaconvert-default</id>
                <credentials>
                    <accessKey>xxxxxxxxx</accessKey>
                    <secretKey>xxxxxxxxx</secretKey>
                </credentials>
                <region>us-west-1</region>
                <endpoint>https://XXXXXXXX.mediaconvert.us-east-1.amazonaws.com</endpoint>
                <role>arn:aws:iam::XXXXXXXXXXXX:role/...</role>
                <queue>arn:aws:mediaconvert:us-east-1:XXXXXXXXXXXX:queues/...</queue>
                <inputPath>example-bucket/folder/videos</inputPath>
                <template>Example Template</template>
            </profile>
        </mediaConvert>

|

Where:

- **profile.id:** the ID that AWS data sources will use to refer to this profile.
- **credentials:** the AWS credentials (access key and secret key) use to access the S3 bucket.
- **region:** the AWS region where the bucket resides.
- **endpoint:** URL specific for the account, can be found in the AWS MediaConvert dashboard
- **role:** ARN of the role used to create transcoding jobs found in the AWS MediaConvert dashboard
- **queue:** ARN of the queue used to create transcoding jobs found in the AWS MediaConvert dashboard
- **inputPath:** Name of the S3 bucket and optional path to upload files
- **template:** Name of the Job Template used to create transcoding jobs found in the AWS MediaConvert dashboard


We also need an S3 profile where the transcoded videos will be uploaded.  See :ref:`use-s3-to-store-assets` on how to configure the profile for AWS S3.

For this guide, the ``AWS Profiles`` should look like this (replace the ``X's`` for actual AWS credentials,
``mybucket`` for the actual bucket where you're storing the transcoded videos, ``mybucket/folder/videos`` for the actual folder setup in AWS where the transcoded videos will be stored, ``Example Template`` for the actual AWS MediaConvert job template name):

.. code-block:: xml
   :linenos:

       <?xml version="1.0" encoding="UTF-8"?>
       <aws>
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

         <mediaConvert>
           <profile>
             <id>mediaconvert-default</id>
             <credentials>
               <accessKey>xxxxxxxxx</accessKey>
               <secretKey>xxxxxxxxx</secretKey>
             </credentials>
             <region>us-east-1</region>
             <endpoint>https://XXXXXXXX.mediaconvert.us-east-1.amazonaws.com</endpoint>
             <role>arn:aws:iam::XXXXXXXXXXXX:role/...</role>
             <queue>arn:aws:mediaconvert:us-east-1:XXXXXXXXXXXX:queues/...</queue>
             <inputPath>mybucket/folder/videos</inputPath>
             <template>Example Template</template>
           </profile>
         </mediaConvert>
       </aws>

|

-------------------------------------------------------------------------------------------------------
Step 2: Add the control and data source for uploading video to AWS for transcoding, to the content type
-------------------------------------------------------------------------------------------------------

For our example, we'll add the Video Transcoding from S3 datasource and a Video picker control to the ``Page - Article`` content type.  To do this:

#. Go to |siteConfig| -> **Content Types** and open the ``Page - Article`` content type definition.
#. We'll add a data source where to upload a video that will be transcoded.  At the end of the **Data Sources** section, add a ``Video Transcoding from S3`` data source with Title **MediaConvert Transcode** and Name **mediaConvertTranscode**.  In the **Input Profile Id** property, enter the MediaConvert ``profile.id`` configured in step 1, used for uploading and triggering the transcode job (``mediaconvert-default`` from the example in step 1).  In the **Output Profile Id** property, enter the S3 ``profile.id`` configured in step 1, used to access the files generated by the transcode job (``s3-default`` from the example in step 1).

   .. image:: /_static/images/guides/s3/mediaConvert-datasource.png
      :alt: AWS MediaConvert  - Video Transcoding from S3 Data Sources
      :align: center
      :width: 65%

   |

#. At the end of the **Content** section, add a ``Video`` control with Title **Video** and Name
   **video**.

   .. image:: /_static/images/guides/s3/mediaConvert-video-picker.png
      :alt: AWS MediaConvert - Video picker
      :align: center
      :width: 65%

   |


.. note::

    If you're using Freemarker as your view layer, follow the steps below after adding the data source and control for uploading video to AWS for transcoding, to the content type:


    We need to add the Freemarker code that will render the URLs. In the example below, we will display one of the transcoded videos.

    In the ``Templates`` > ``web`` > ``pages`` > ``article.ftl``, add the following lines after the
    ``<section><header class="main" <@studio.iceAttr iceGroup="subject"/>>...</#section>`` lines:

    .. code-block:: html
       :force:
       :linenos:

       <!-- AWSVideoTranscoding -->
       <section id="transcodedVideos">
           <h2>Videos</h2>
           <video width="400" controls>
               <source src="${ contentModel.video.item[0].url }" type="video/mp4">
               Your browser does not support HTML5 video.
           </video>
       </section>

|

-------------------------------------------
Step 3: Upload a video and test the changes
-------------------------------------------

If all the previous steps have been done correctly, you should be able to add a video that will be transcoded into the formats specified in your job template, and in the case of our example, one of the videos will be available for viewing when the page is rendered.

To upload a video, click on the **Add** button.  We will be uploading the video ``demoVideo.mp4``:

.. image:: /_static/images/guides/s3/mediaConvert-upload-video-form.png
   :alt: AWS MediaConvert - Form Edit Add Video
   :align: center

|

Here's how it will look like in the form edit after uploading a video and the transcoding job is finished.  Notice that in the job template, the uploaded video will be transcoded into 5 formats:

.. image:: /_static/images/guides/s3/mediaConvert-transcoded-form.png
   :alt: AWS MediaConvert - Form Edit Transcoding Job Finished
   :align: center

|

Here's how it will look like when we preview the page where we added the video:

.. image:: /_static/images/guides/s3/mediaConvert-video-preview.png
   :alt: AWS MediaConvert - Video Preview on Page
   :align: center

|

---------------------------
Step 4: Publish the changes
---------------------------

The next step is to publish the changes.  Remember to publish not just the page where we added the AWS MediaConvert data source,
but also the ``article.ftl`` and the ``aws.xml`` files too.

.. image:: /_static/images/guides/s3/attachments-publish.png
   :alt: AWS MediaConvert - Publish Changes
   :align: center
