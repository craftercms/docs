:is-up-to-date: False
:last-updated: 4.1.0

.. index:: Static Assets, Static Content Access, S3, Transcode Video

.. _static-content-access:

=====================
Static Content Access
=====================

Static content comprises text and binary assets not part of the actual content, templates and scripts. These include:
- Rich media assets, like images, videos, and documents (PDFs, Word, Excel, etc.)
- CSS, JavaScript, and HTML files
- Other binary files
- SPA application files and related artifacts

These files are typically stored in `/static-assets` in the Studio project's Git repository.

--------------------------------
Internally Managed Static Assets
--------------------------------

Static assets can be internal to the project (site) and managed by Studio. While Git is wonderful for managing and tracking textual content, it's not ideal for binary files. That's why CrafterCMS provides a blob store for managing binary files.

^^^^^^^^^^^^^^^^
Blob Store Files
^^^^^^^^^^^^^^^^

The blob store is a Git-like repository for binary files. It's managed by Studio and is part of the project's Git repository. The blob store is a great way to manage binary files that are part of the project's workflow and publishing processes.

The blob store is normally configured for all ``static-assets`` files, except for developer managed assets like ``/static-assets/app`` which are best kept in Git.

Learn more about configuring the blob store for your project by reading :ref:`blob-stores`.

""""""""""""""""""""""""""""""""
Externally Managed Static Assets
""""""""""""""""""""""""""""""""

Some static assets have their lifecycle in a different system, but are required to be surfaced/used by the CrafterCMS project/site. CrafterCMS provides a way to reference these assets in your content and templates.

^^^^^^^^^^^^^^^^
AWS Asset Access
^^^^^^^^^^^^^^^^
AWS provide a number of useful services that ultimately produce content or store content that needs to be used by the CrafterCMS project/site. We will cover S3 and Video Transcoding as two examples.

.. _use-s3-to-store-assets:

"""""""""""""""
S3 Asset Access
"""""""""""""""

For very large externally managed artifacts, AWS S3 is a great option.

.. note::
    This mechanism allows CrafterCMS to _point_ to assets in S3, but not manage it. This is _not_ the same as the blob store. While the blob store is backed by S3, it's still an _internally managed_ store that supports the project's workflow and publishing processes.

The following guide is an example to illustrate how to:

* Configure Studio to use an S3 bucket (this is not the same as the blob store).
* Optionally upload documents to the S3 bucket using the AWS data sources
* Select the S3 object using the item selector control in Studio.
* Generate public links that users can use to access these documents.

|

~~~~~~~~~~~~~
Prerequisites
~~~~~~~~~~~~~

* Create an AWS S3 bucket to upload the assets.
* Create a site based on the Editorial blueprint.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Step 1: Add the S3 configuration in Studio
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

Please see :ref:`managing-secrets` for more information on how to manage/encode your AWS credentials.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Step 2: Add the controls and data source for uploading files to your S3 bucket to the content type
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For our example, we'll add an ``Attachment`` field, which is of type ``node-selector`` that is bound to an AWS file upload
data source, to the ``Page - Article`` content type. To do this:

#. Go to |projectTools| and open the ``Page - Article`` content type definition.
#. We'll add a data source where to upload our files. At the end of the **Data Sources** section, add a ``File Uploaded to S3 Repository`` data source with Title **S3 Upload** and Name **s3Upload**. In the **Profile Id** property, enter the name of ``profile.id`` configured in step 1.

   .. image:: /_static/images/guides/s3/attachments-datasource.webp
      :alt: AWS S3 Assets - Attachments Data Sources
      :align: center
      :width: 65%

   |

#. At the end of the **Content** section, add a ``Repeating Group`` control with Title **Attachments** and Name
   **attachments**.
#. Add an ``Input`` control inside the repeating group with Title **Attachment Name** and Name **attachmentName**.
#. Add an ``Item Selector`` control with Title **Attachment** and Name **attachment**. We will bind the data source we added above to the ``Item Selector`` control by opening the Properties, then scroll to ``Item Manager`` and check the box next to the data source we added earlier, **S3 Upload**

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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Step 3: Add some attachments and test the changes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

~~~~~~~~~~~~~~~~~~~~~~~~~~~
Step 4: Publish the changes
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The next step is to publish the changes. Remember to publish not just the page where we added the S3 assets,
but also the ``article.ftl`` and the ``aws.xml`` files too.

.. image:: /_static/images/guides/s3/attachments-publish.webp
   :alt: AWS S3 Assets - Publish Changes
   :align: center

.. _upload-transcode-video-to-aws:

"""""""""""""""""""""""""""
Transcoding Videos with AWS
"""""""""""""""""""""""""""

Crafter Studio allows users to upload and transcode videos using AWS MediaConvert using a data source in the content type. The following guide explains how to:

* Configure Studio to use AWS MediaConvert and S3 for uploading and transcoding video.
* Upload video to AWS using the transcoded video picker control and AWS data sources in Studio that then triggers a transcoding job.
* Generate public links that users can use to display the transcoded videos.

~~~~~~~~~~~~~
Prerequisites
~~~~~~~~~~~~~

* Create an AWS S3 bucket for uploading the transcoded videos.
* Create an AWS Elemental MediaConvert Job template

  For development purposes, the following permissions work but you may want to use less in your production setting: |br|
  *MediaConvert IAM role* with ``AmazonS3FullAccess`` and ``AmazonAPIGatewayInvokeFullAccess``

  For more information on available permissions for AWS Elemental MediaConvert, see https://aws.permissions.cloud/iam/mediaconvert
* Create a site based on the Website Editorial blueprint.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Step 1: Add the S3 and MediaConvert configuration in Studio
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Go to |projectTools| > ``Configuration`` and in the dropdown select ``AWS Profiles``. If you click on
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


We also need an S3 profile where the transcoded videos will be uploaded. See :ref:`use-s3-to-store-assets` on how to configure the profile for AWS S3.

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

Please see :ref:`managing-secrets` for more information on how to manage/encode your AWS credentials.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Step 2: Add the control and data source for uploading video to AWS for transcoding, to the content type
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For our example, we'll add the Video Transcoding from S3 datasource and a Transcoded Video picker control to the ``Page - Article`` content type. To do this:

#. Go to |projectTools| -> **Content Types** and open the ``Page - Article`` content type definition.
#. We'll add a data source where to upload a video that will be transcoded. At the end of the **Data Sources** section, add a ``Video Transcoding from S3`` data source with Title **Transcode** and Name **transcode**. In the **Input Profile Id** property, enter the MediaConvert ``profile.id`` configured in step 1, used for uploading and triggering the transcode job (``mediaconvert-default`` from the example in step 1). In the **Output Profile Id** property, note the S3 ``profile.id`` configured in step 1, used to access the files generated by the transcode job (``s3-default`` from the example in step 1).

   .. image:: /_static/images/guides/s3/mediaConvert-datasource.webp
      :alt: AWS MediaConvert  - Video Transcoding from S3 Data Sources
      :align: center
      :width: 65%

   |

   .. image:: /_static/images/guides/s3/mediaConvert-datasource-prop.webp
      :alt: AWS MediaConvert  - Video Transcoding from S3 Data Sources
      :align: center
      :width: 65%

   |

#. At the end of the **Content** section, add a ``Transcoded Video`` control with Title **Transcoded Video** and Name
   **transcodedVideo_o**.

   .. image:: /_static/images/guides/s3/mediaConvert-video-picker.webp
      :alt: AWS MediaConvert - Video picker
      :align: center
      :width: 65%

   |


  .. note::

     If you're using FreeMarker as your view layer, follow the steps below after adding the data source and control for uploading video to AWS for transcoding, to the content type:


     We need to add the FreeMarker code that will render the URLs. In the example below, we will display one of the transcoded videos.

     In the ``Templates`` > ``web`` > ``pages`` > ``article.ftl``, add the following lines after the
     ``<section><header class="main" <@studio.iceAttr iceGroup="subject"/>>...</#section>`` lines:

     .. code-block:: html
        :force:
        :linenos:

        <!-- AWSVideoTranscoding -->
        <section id="transcodedVideos">
           <h2>Videos</h2>
           <video width="400" controls>
             <source src="${ contentModel.transcodedVideo_o.item[0].url }" type="video/mp4">
               Your browser does not support HTML5 video.
           </video>
        </section>

     |

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Step 3: Upload a video and test the changes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If all the previous steps have been done correctly, you should be able to add a video that will be transcoded into the formats specified in your job template, and in the case of our example, one of the videos will be available for viewing when the page is rendered.

To upload a video, click on the **Add** button. We will be uploading the video ``remoteRepos.mp4``:

.. image:: /_static/images/guides/s3/mediaConvert-upload-video-form.webp
   :alt: AWS MediaConvert - Form Edit Add Video
   :align: center
   :width: 65%

|

Here's how it will look like in the form edit after uploading a video and the transcoding job is finished. Notice that in the job template, the uploaded video will be transcoded into 5 formats:

.. image:: /_static/images/guides/s3/mediaConvert-transcoded-form.webp
   :alt: AWS MediaConvert - Form Edit Transcoding Job Finished
   :align: center
   :width: 65%

|

Here's how it will look like when we preview the page where we added the video:

.. image:: /_static/images/guides/s3/mediaConvert-video-preview.webp
   :alt: AWS MediaConvert - Video Preview on Page
   :align: center

|

~~~~~~~~~~~~~~~~~~~~~~~~~~~
Step 4: Publish the changes
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The next step is to publish the changes. Remember to publish not just the page where we added the AWS MediaConvert data source,
but also the ``article.ftl`` and the ``aws.xml`` files too.

.. image:: /_static/images/guides/s3/attachments-publish.webp
   :alt: AWS MediaConvert - Publish Changes
   :align: center

^^^^^^^^^^^^^^^^
Box Asset Access
^^^^^^^^^^^^^^^^
box/use-box-to-store-assets

^^^^^^^^^^^^^^^^^^^
WebDAV Asset Access
^^^^^^^^^^^^^^^^^^^

.. explain webdav

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Referencing Externally Managed Assets
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The ``Site Administrators`` section
contains information on how to configure CrafterCMS to access services used for storing assets remotely
here: :ref:`studio-configuration`.

Browser access to remote assets on your site is provided by Crafter Engine's remote assets controller
via the URL pattern ``/remote-assets/STORE-TYPE/PROFILE-ID/PATH-TO-ASSET``, where:

   * **STORE-TYPE** the remote repository storage used, for our example above, **S3**
   * **PROFILE-ID** ID used to refer to remote repository profile
   * **PATH-TO-ASSET**  path to asset in the remote repository

"""""""""""""""""""""""""""""""""""
Disabling ``/remote-assets`` Access
"""""""""""""""""""""""""""""""""""

Sometimes you may want to disable access to remote repositories. To do this, in your authoring or delivery
install, open the file ``rendering-context.xml`` under ``apache-tomcat/shared/classes/crafter/engine/extension/``
and edit the file to define a set of ``crafter.urlMappings`` without the remote-asset controller, like this:

.. code-block:: xml
    :caption: {CRAFTER-INSTALL}/bin/apache-tomcat/shared/classes/crafter/engine/extension/rendering-context.xml
    :linenos:

    <util:map id="crafter.urlMappings">
        <entry key="/api/**" value-ref="crafter.restScriptsController"/>
        <entry key="/api/1/services/**" value-ref="crafter.restScriptsController"/> <!-- Deprecated mapping, might be removed in a later version -->
        <entry key="/static-assets/**" value-ref="crafter.staticAssetsRequestHandler"/>
        <!--entry key="/remote-assets/**" value-ref="crafter.remoteAssetsRequestHandler"/-->
        <entry key="/*" value-ref="crafter.pageRenderController"/>
    </util:map>

.. note:: Please take note that if you disable /remote-access in your authoring install, preview of remote
          assets will be broken.

""""""""""""""""""""""""""""""""""""""""""""""""
By-passing /remote-assets in Delivery for WebDAV
""""""""""""""""""""""""""""""""""""""""""""""""

To avoid proxying the WebDav ``/remote-assets`` in Delivery, the Delivery Deployer target should be configured
to have a find and replace processor that changes the ``/remote-assets`` URL to an actual Apache static asset
delivery URL.

.. code-block:: yaml
  :linenos:
  :caption: {CRAFTER-DELIVERY-INSTALL}/data/deployer/targets/SITE-NAME-default.yaml

  - processorName: findAndReplaceProcessor
    textPattern: /remote-assets/webdav(/([^&quot;&lt;]+)
    replacement: 'http://apache.static-asset.delivery.url$1'
