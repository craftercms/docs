:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Data Sources; Video Upload then Transcode Video from S3 Repository using MediaConvert

.. _form-source-mediaconvert-transcode:

==================================================================
Video Upload then Transcode from S3 using MediaConvert Data Source
==================================================================

.. image:: /_static/images/form-sources/form-source-s3-transcode.png
    :width: 50%
    :alt: Source Control Video Transcoding from S3 Repository
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-s3-transcode-conf.png
    :width: 50%
    :alt: Source Control Video Transcoding from S3 Repository Properties
    :align: center

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+-----------------------------------------------------------------------------+
|| Description/Purpose   || Data source to upload videos to AWS MediaConvert repository                |
+------------------------+-----------------------------------------------------------------------------+
|| Properties            || - Input Profile ID: AWS profile id (MediaConvert) to be used for uploading |
||                       ||                     and triggering the transcode job, setup in aws.xml     |
||                       || - Output Profile ID: S3 profile id to be used to access the files generated|
||                       ||                      by the transcode job, setup in aws.xml                |
+------------------------+-----------------------------------------------------------------------------+