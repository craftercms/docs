:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Data Sources; S3 Repository Video Upload

.. _newIa-form-source-s3-video-upload:

===========================
S3 Video Upload Data Source
===========================

.. image:: /_static/images/form-sources/form-source-s3-video-upload-repo.png
    :width: 50%
    :alt: Source Control File Upload S3
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-webdav-conf.png
    :width: 50%
    :alt: Source Control File Upload S3
    :align: center

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+-----------------------------------------------------------------------------+
|| Description/Purpose   || Data source to upload videos to WebDav repository                          |
+------------------------+-----------------------------------------------------------------------------+
|| Properties            || - Repository Path: S3 repository path where to store the new               |
||                       ||                    uploaded video                                          |
||                       || - Profile ID: S3 profile id to be used setup in aws.xml                    |
+------------------------+-----------------------------------------------------------------------------+