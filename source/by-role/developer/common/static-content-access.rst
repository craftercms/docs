:is-up-to-date: True
:last-updated: 4.1.0

.. index:: Static Assets, Static Content Access, S3, Transcode, Transcode Video, Box, WebDAV, Transform, Transform Image, Renditions

.. _static-content-access:

=====================
Static Content Access
=====================
.. contents::

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

--------------------------------
Externally Managed Static Assets
--------------------------------

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
    This mechanism allows CrafterCMS to *point* to assets in S3, but not manage it. This is *not* the same as the blob store. While the blob store is backed by S3, it's still an *internally managed* store that supports the project's workflow and publishing processes.

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

^^^^^^^^^^^^^^^^
Box Asset Access
^^^^^^^^^^^^^^^^

Box is a good option when you need to store media and documents that are quite large. The following guide explains how to:

* Configure Studio to use Box.
* Upload documents to Box using the ``box-file-upload`` control in Studio.
* Generate public links in Engine that users can use to access these documents.

"""""""""""""
Prerequisites
"""""""""""""

* Create a Box profile to upload the assets.
* Create a project based on the Editorial blueprint.

"""""""""""""""""""""""""""""""""""""""""""
Step 1: Add the Box configuration in Studio
"""""""""""""""""""""""""""""""""""""""""""

Go to |projectTools| > ``Configuration`` and in the dropdown select Box Profiles. If you click on View Sample, you’ll see the available configuration profiles. In particular, the configuration for a Box profile is the following:

.. code-block:: xml
    :linenos:

    <profile>
        <id/>
        <clientId/>
        <clientSecret/>
        <enterpriseId/>
        <publicKeyId/>
        <privateKey/>
        <privateKeyPassword/>
        <uploadFolder/>
    </profile>

|

**where:**

* **id:** the ID that ``box-file-upload`` controls will use to refer to this profile.
* **clientId:** Box client id
* **clientSecret:** Box client secret
* **enterpriseId:** Box enterprise id
* **publicKeyId:** Box public key id
* **privateKey:** Actual private key text in a CDATA
* **privateKeyPassword:** Password used to decrypt the private key (passphrase)
* **uploadFolder:** Name of the folder where files will be uploaded in Box

For this guide, the Box Profiles should look like this (replace the ``...``'s for actual Box credentials and ``videos`` for the actual upload folder where you’re storing the documents):

.. code-block:: xml
    :linenos:

    <box>
      <box>
        <profile>
          <id>box-default</id>
          <clientId>...</clientId>
          <clientSecret>...</clientSecret>
          <enterpriseId>...</enterpriseId>
          <publicKeyId>...</publicKeyId>
          <privateKey>
    <![CDATA[...]]>
          </privateKey>
          <privateKeyPassword>...</privateKeyPassword>
          <uploadFolder>videos</uploadFolder>
        </profile>
      </box>
    </box>

|

Please see :ref:`managing-secrets` for more information on how to manage/encode your Box credentials

""""""""""""""""""""""""""""""""""""""""""
Step 2: Enable the Box File Upload Control
""""""""""""""""""""""""""""""""""""""""""

In |projectTools| > Configuration > Project Config Tools, in the <controls> section, enable the Box File Upload by adding the following lines:

.. code-block:: xml
    :linenos:

    <control>
      <name>box-file-upload</name>
      <icon>
        <class>fa-square-o</class>
        <stackedclass>fa-upload</stackedclass>
      </icon>
    </control>

|

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Step 3: Add the Box File Upload Control to the content type
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

For our example, we'll add an ``Attachments`` field, which is of type ``box-file-upload``, to the ``Article``
content type. To do this:

#. Go to ``Project Tools`` and open the ``Article`` content type definition.
#. At the end of the *Content* section, add a ``Box File Upload`` control with Title *Attachments* and Name *attachments* (the control has a property called Profile ID. If you changed the name of ``profile.id`` in step 1, you need to change it in the property too). Remember to put a check mark on the ``Enable Upload`` and ``Enable Multiple Selection`` properties of the **Box File Upload** control so the users will be able to upload assets to Box and be able to select multiple assets.


.. image:: /_static/images/guides/box/attachments-controls.webp
    :alt: Box Assets - Attachments Controls
    :align: center

""""""""""""""""""""""""""""""""""""""""""""""
Step 4: Add Freemarker code to render the URLs
""""""""""""""""""""""""""""""""""""""""""""""

We need to add the Freemarker code that will render the URLs. In the ``Templates`` > ``web`` > ``pages`` > ``article.ftl``, add the following lines after the ``<#list contentModel.sections.item as item>...</#list>`` lines:

.. code-block:: html
  :force:

  <#if contentModel.attachments??>
     <h2>Attachments</h2>
     <ul>
       <#list contentModel.attachments.item as a>
         <li><a href="${a.url}">${a.name}</a></li>
       </#list>
     </ul>
  </#if>

"""""""""""""""""""""""""""""""""""""""""""""""""
Step 5: Add some attachments and test the changes
"""""""""""""""""""""""""""""""""""""""""""""""""

If all the previous steps have been done correctly, you should be able to add any number of attachments and they
should appear underneath the last content sections when the page is rendered. To upload files to Box, click on the ``+`` button in the Box widget and select ``Upload``, then drag or browse for the files you want to upload. Click on the ``Upload`` button after selecting the files you want to upload. After the upload finishes, click on the ``Close`` button on the left side of the Box widget and you'll be able to see the files you just uploaded to Box. You'd then put a check mark next to the files that you want to add as attachment for the page, then click on the ``Choose`` button.

For example, after adding a couple of PDF catalogs in the *Men Styles For Winter* article:

.. image:: /_static/images/guides/box/attachments-form.webp
   :alt: Box Assets - Attachments Form
   :align: center

|

The bottom of the page looks like this when you preview your page:

.. image:: /_static/images/guides/box/attachments-view.webp
   :alt: Box - Attachments View
   :align: center

|

"""""""""""""""""""""""""""
Step 6: Publish the changes
"""""""""""""""""""""""""""

The next step is to publish the changes. Remember to publish not just the page where we added the Box assets,
but also the ``article.ftl`` and the ``box.xml`` files too.

.. image:: /_static/images/guides/box/attachments-publish.webp
   :alt: Box Assets - Publish Changes
   :align: center

^^^^^^^^^^^^^^^^^^^
WebDAV Asset Access
^^^^^^^^^^^^^^^^^^^

.. TODO explain webdav

TODO: explain how to access assets via webdav

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

.. _asset-processing:

----------------
Asset Processing
----------------

Most projects contains images that are viewed in different display sizes (desktops/laptops, mobile phones,
tablets, of which comes in different sizes, etc.), or videos at different bit-rates, resolutions, and size. CrafterCMS supports image and video renditioning as detailed below.

^^^^^^^^^^^^^^^^^^^^
Image Transformation
^^^^^^^^^^^^^^^^^^^^
To ensure the same experience on your project through
various display sizes, the images would need to be converted to different sizes and formats. CrafterCMS
supports automatic image processing that allows you to upload just one image that gets converted to the
different sizes or formats required by your project for various display sizes. This automatic image
processing is one form of asset processing and can be configured in Studio through the **Asset Processing**
configuration file.

Asset processing allows you to define transformations for static assets (currently only images), through a
series of processor pipelines that are executed when the assets are uploaded to Studio. A processor is an
application that can manipulate your assets to your desired formats such as compress and optimize JPEG and
PNG images, etc. Each processor pipeline in the configuration let's you manipulate the asset to a desired
format/size. You can specify just one or as many processors as needed. You can also specify just one or as
many pipelines as required by your project. (Say, you want an image appropriate for mobile devices and an image
appropriate for desktop browsers, you'll have two pipelines setup in the configuration.)

""""""""""""""""""""""""""""
Configuring Image Processing
""""""""""""""""""""""""""""
The pipelines can be configured by going to the Sidebar in Studio, then from the Sidebar, go to
``Project Tools > Configurations > Asset Processing``.  Each pipeline has the following structure:

.. code-block:: xml

    <pipeline>
      <inputPathPattern/>
      <keepOriginal/>
      <processors>
        <processor>
          <type/>
          <params/>
          <outputPathFormat/>
        </processor>
      </processors>
    </pipeline>

|

**Where:**

- ``inputPathPattern:`` regex that the assets need to match in order to be processed by the pipeline. Groups that are
  captured by this regex are available later to the ``outputPathFormat``.
- ``keepOriginal (optional):`` if the original asset (without changes) should be saved.
- ``type:`` the type of the processor. Right now 2 types are supported: ``ImageMagickTransformer`` and
  ``TinifyTransformer``:

    - ``ImageMagickTransformer``: runs ImageMagick from the command line, with ``params.options`` as the command line
      params [#]_.
    - ``TinifyTransformer``: uses the Java client of TinyPNG to compress JPEG/PNG images [#]_.

- ``outputPathFormat (optional)``: the format of the output path. Variables that have a dollar sign ($) and an index
  are later replaced by groups that resulted during input path matching, to form the final output path. If not
  specified, then the same input path is used as the output path.

.. note::
    Please note the following:

    - We currently support 2 types of image processors, **ImageMagickTransformer** and **TinifyTransformer**
    - You can have one or multiple pipelines setup, but, a pipeline must have at least one processor configured.

|

""""""""""""""""""""""""""""
Image Transformation Example
""""""""""""""""""""""""""""

The following example specifies 2 different asset processing pipelines: the first one converts any image put
under ``/static-assets/images/upload/`` into another one that's compressed and suitable to be displayed in a desktop
browser, while the second one converts the same image for display on mobile devices:

.. code-block:: xml

  <assetProcessing>
      <pipelines>

          <!-- Web transformer pipeline -->
          <pipeline>
              <inputPathPattern>^/static-assets/images/upload/(.+)\.jpg$</inputPathPattern>
              <keepOriginal>false</keepOriginal>
              <processors>
                  <processor>
                      <type>ImageMagickTransformer</type>
                      <params>
                          <options>-level 0,100%,1.3 -gaussian-blur 0.05 -quality 20% -strip</options>
                      </params>
                      <outputPathFormat>/static-assets/images/compressed/web/$1-compressed.jpg</outputPathFormat>
                  </processor>
              </processors>
          </pipeline>

          <!-- Mobile transformer pipeline -->
          <pipeline>
              <inputPathPattern>^/static-assets/images/upload/(.+)\.jpg$</inputPathPattern>
              <keepOriginal>false</keepOriginal>
              <processors>
                  <processor>
                      <type>ImageMagickTransformer</type>
                      <params>
                          <options>-level 0,100%,1.3 -gaussian-blur 0.05 -quality 20% -strip -resize 226x164</options>
                      </params>
                      <outputPathFormat>/static-assets/images/compressed/mobile/$1-compressed.png</outputPathFormat>
                  </processor>
                  <processor>
                      <type>TinifyTransformer</type>
                  </processor>
              </processors>
          </pipeline>

      </pipelines>
  </assetProcessing>

|

Using the above example, if an image called ``logo.jpg`` would be put under ``/static-assets/images/upload``,
Studio would generate 2 files: the web version, under ``/static-assets/images/compressed/web/logo-compressed.jpg``,
and the mobile version, under ``/static-assets/images/compressed/mobile/logo-compressed.png``. The original file
would be discarded.

.. rubric:: Footnotes

.. [#] You need to have image ImageMagick installed in the machine, with the ``convert`` command in the path. For more information on ImageMagick options, please see https://imagemagick.org/script/command-line-options.php
.. [#] The Tinify API key must be specified in the ``studio-config-overrides.yaml`` file (found in your Authoring installation, under ``shared/classes/crafter/studio/extension``). Add the line below and remember to replace ``<your Tinify API key>`` with the actual value of your Tinify API key:
       ``studio.configuration.asset.processing.tinify.apiKey:<your Tinify API key>``. For more information on Tinify, please see https://tinypng.com/developers/reference/java

^^^^^^^^^^^^^^^^^
Video Transcoding
^^^^^^^^^^^^^^^^^

Crafter Studio allows users to upload and transcode videos using AWS MediaConvert using a data source in the content type. The following guide explains how to:

* Configure Studio to use AWS MediaConvert and S3 for uploading and transcoding video.
* Upload video to AWS using the transcoded video picker control and AWS data sources in Studio that then triggers a transcoding job.
* Generate public links that users can use to display the transcoded videos.

"""""""""""""
Prerequisites
"""""""""""""

* Create an AWS S3 bucket for uploading the transcoded videos.
* Create an AWS Elemental MediaConvert Job template

  For development purposes, the following permissions work but you may want to use less in your production setting: |br|
  *MediaConvert IAM role* with ``AmazonS3FullAccess`` and ``AmazonAPIGatewayInvokeFullAccess``

  For more information on available permissions for AWS Elemental MediaConvert, see https://aws.permissions.cloud/iam/mediaconvert
* Create a site based on the Website Editorial blueprint.

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Step 1: Add the S3 and MediaConvert configuration in Studio
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

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

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Step 2: Add the control and data source for uploading video to AWS for transcoding, to the content type
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
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

"""""""""""""""""""""""""""""""""""""""""""
Step 3: Upload a video and test the changes
"""""""""""""""""""""""""""""""""""""""""""
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

"""""""""""""""""""""""""""
Step 4: Publish the changes
"""""""""""""""""""""""""""
The next step is to publish the changes. Remember to publish not just the page where we added the AWS MediaConvert data source,
but also the ``article.ftl`` and the ``aws.xml`` files too.

.. image:: /_static/images/guides/s3/attachments-publish.webp
   :alt: AWS MediaConvert - Publish Changes
   :align: center

