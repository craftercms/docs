:is-up-to-date: True
:last-updated: 4.0.0

.. meta::
   :description: CrafterCMS Video Transcoding from S3 using MediaConvert data source reference — upload and transcode videos with AWS MediaConvert input/output S3 profiles.
   :keywords: MediaConvert, video transcode, S3, data source, CrafterCMS, AWS, video upload, form sources, content modeling

.. _form-source-mediaconvert-transcode:

==================================================================
Video Upload then Transcode from S3 using MediaConvert Data Source
==================================================================
Data source to upload videos to AWS MediaConvert repository.

.. figure:: /_static/images/form-sources/form-source-s3-transcode.webp
    :width: 25%
    :alt: Source Control Video Transcoding from S3 Repository

|

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-s3-transcode-conf.webp
    :width: 40%
    :alt: Source Control Video Transcoding from S3 Repository Properties
    :align: left

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+-----------------------------------------------------------------------------+
|| Properties            || - Input Profile ID: AWS profile id (MediaConvert) to be used for uploading |
||                       ||                     and triggering the transcode job, setup in aws.xml     |
||                       || - Output Profile ID: S3 profile id to be used to access the files generated|
||                       ||                      by the transcode job, setup in aws.xml                |
+------------------------+-----------------------------------------------------------------------------+