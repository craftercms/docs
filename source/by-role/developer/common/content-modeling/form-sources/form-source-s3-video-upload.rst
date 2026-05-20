:is-up-to-date: True
:last-updated: 4.0.0

.. meta::
   :description: CrafterCMS S3 Video Upload data source reference — upload videos directly to AWS S3 storage using a configured S3 profile in content type forms.
   :keywords: S3 video upload, data source, CrafterCMS, AWS S3, video upload, profile ID, form sources, content modeling

.. _form-source-s3-video-upload:

===========================
S3 Video Upload Data Source
===========================
Data source to upload videos to WebDav repository.

.. figure:: /_static/images/form-sources/form-source-s3-video-upload-repo.webp
    :width: 25%
    :alt: Source Control File Upload S3

|

-------------
Configuration
-------------
.. image:: /_static/images/form-sources/form-source-webdav-conf.webp
    :width: 40%
    :alt: Source Control File Upload S3
    :align: left

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+-----------------------------------------------------------------------------+
|| Properties            || - Repository Path: S3 repository path where to store the new               |
||                       ||                    uploaded video                                          |
||                       || - Profile ID: S3 profile id to be used setup in aws.xml                    |
+------------------------+-----------------------------------------------------------------------------+