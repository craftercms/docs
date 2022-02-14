:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Data Sources; S3 Repository File Upload

.. _newIa-form-source-s3-file-upload:

==========================
S3 File Upload Data Source
==========================

.. image:: /_static/images/form-sources/form-source-s3-file-upload-repo.png
    :width: 50%
    :alt: Source Control File Upload S3
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-webdav-conf.png
    :width: 50%
    :alt: Source Control S3 Repository Configuration
    :align: center

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+-----------------------------------------------------------------------------+
|| Description/Purpose   || Data source to upload files to S3 repository                               |
+------------------------+-----------------------------------------------------------------------------+
|| Properties            || - Repository Path: S3 repository path where to store the new               |
||                       ||                    uploaded file                                           |
||                       || - Profile ID: S3 profile id to be used setup in aws.xml                    |
+------------------------+-----------------------------------------------------------------------------+