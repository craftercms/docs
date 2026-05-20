:is-up-to-date: True
:last-updated: 4.0.0

.. meta::
   :description: CrafterCMS S3 Image Upload data source reference — upload images directly to AWS S3 storage using a configured S3 profile in content type forms.
   :keywords: S3 image upload, data source, CrafterCMS, AWS S3, image upload, profile ID, form sources, content modeling

.. _form-source-s3-image-upload:

===========================
S3 Image Upload Data Source
===========================
Data source to upload images to S3 repository.

.. figure:: /_static/images/form-sources/form-source-s3-image-upload-repo.webp
    :width: 25%
    :alt: Source Control File Upload S3

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
||                       ||                    uploaded image                                          |
||                       || - Profile ID: S3 profile id to be used setup in aws.xml                    |
+------------------------+-----------------------------------------------------------------------------+