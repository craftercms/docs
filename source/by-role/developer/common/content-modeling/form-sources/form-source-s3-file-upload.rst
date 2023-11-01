:is-up-to-date: True
:last-updated: 4.0.0

.. _form-source-s3-file-upload:

==========================
S3 File Upload Data Source
==========================
Data source to upload files to S3 repository.

.. figure:: /_static/images/form-sources/form-source-s3-file-upload-repo.webp
    :width: 25%
    :alt: Source Control File Upload S3

|

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-webdav-conf.webp
    :width: 40%
    :alt: Source Control S3 Repository Configuration
    :align: left

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+-----------------------------------------------------------------------------+
|| Properties            || - Repository Path: S3 repository path where to store the new               |
||                       ||                    uploaded file                                           |
||                       || - Profile ID: S3 profile id to be used setup in aws.xml                    |
+------------------------+-----------------------------------------------------------------------------+