:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:
:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Data Sources; Video from S3 Repository

.. _newIa-form-source-s3-video-repo:

====================================
Video from S3 Repository Data Source
====================================

.. image:: /_static/images/form-sources/form-source-s3-video-repo.webp
    :width: 30%
    :alt: Source Control Video From S3 Repository
    :align: center

|

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-webdav-conf.webp
    :width: 50%
    :alt: Source Control Video From S3 Repository Configuration
    :align: center

|

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+--------------------------------------------------------------------------+
|| Description/Purpose   || Data source to select videos from repository.                           |
+------------------------+--------------------------------------------------------------------------+
|| Properties            || - Repository Path: Path where to browse the S3 repository.              |
||                       || - Profile ID: S3 profile id to be used setup in aws.xml                 |
+------------------------+--------------------------------------------------------------------------+