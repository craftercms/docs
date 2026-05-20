:is-up-to-date: True
:last-updated: 4.0.0

.. meta::
   :description: CrafterCMS S3 Repository data source reference — browse and select files from AWS S3 storage using a configured S3 profile in content type forms.
   :keywords: S3 repository, data source, CrafterCMS, AWS S3, file browse, profile ID, form sources, content modeling

.. _form-source-s3-file-repo:

=========================
S3 Repository Data Source
=========================
Data source to select files from S3 repository.

.. figure:: /_static/images/form-sources/form-source-s3-file-repo.webp
    :width: 20%
    :alt: Source Control S3 Repository

-------------
Configuration
-------------
.. image:: /_static/images/form-sources/form-source-webdav-conf.webp
    :width: 40%
    :alt: Source Control S3 Repository Configuration
    :align: left


.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+--------------------------------------------------------------------------+
|| Properties            || - Repository Path: Path where to browse the S3 repository.              |
||                       || - Profile ID: S3 profile id to be used setup in aws.xml                 |
+------------------------+--------------------------------------------------------------------------+