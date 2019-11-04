:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Image

.. _form-image:

=============
Image Control
=============

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-image-example.png
    :width: 50%
    :alt: Form Control Image Example
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-image.png
    :width: 50%
    :alt: Form Control Image
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst


+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Image selector from a Data Source.                                   |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Width: Min/max width of image.                                     |
||                       || * Height: Min/max height of image.                                   |
||                       || * Thumbnail Width: Width of thumbnail image.                         |
||                       || * Thumbnail Height: Height of thumbnail image.                       |
||                       || * Data Source: Source where the image will be loaded.                |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Read Only: Make field read-only (can't be changed by the author).  |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * |imgUploadFromDesktop|                                             |
||                       || * |imgFromRepo|                                                      |
||                       || * |imgFromCMIS|                                                      |
||                       || * |imgUploadToCMIS|                                                  |
||                       || * |imgFromWebDAV|                                                    |
||                       || * |imgUploadToWebDAV|                                                |
||                       || * |imgFromS3|                                                        |
||                       || * |imgUploadToS3|                                                    |
+------------------------+-----------------------------------------------------------------------+

.. |imgUploadFromDesktop| replace:: :ref:`Image Uploaded from Desktop <form-source-image-desktop>`
.. |imgFromRepo| replace:: :ref:`Image from Repository <form-source-image-repo>`
.. |imgFromCMIS| replace:: :ref:`Image from CMIS Repository <form-source-cmis-image-repo>`
.. |imgUploadToCMIS| replace:: :ref:`Image Uploaded to CMIS Repository <form-source-cmis-image-upload>`
.. |imgFromWebDAV| replace:: :ref:`Image from WebDAV Repository <form-source-webdav-image-repo>`
.. |imgUploadToWebDAV| replace:: :ref:`Image Uploaded to WebDAV Repository <form-source-webdav-image-upload>`
.. |imgFromS3| replace:: :ref:`Image From S3 Repository <form-source-s3-image-repo>`
.. |imgUploadToS3| replace:: :ref:`Image Uploaded to S3 Repository <form-source-s3-image-upload>`
