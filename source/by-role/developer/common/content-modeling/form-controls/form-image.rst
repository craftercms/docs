:is-up-to-date: True
:last-updated: 4.1.0

.. _form-image:

=============
Image Control
=============
Image selector from a Data Source.

-------
Example
-------

.. figure:: /_static/images/form-controls/form-control-image-example.webp
    :width: 40%
    :alt: Form Control Image Example

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-image.webp
    :width: 30%
    :alt: Form Control Image
    :align: left

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Width: Min/max width of image.                                     |
||                       || * Height: Min/max height of image.                                   |
||                       || * Thumbnail Width: Width of thumbnail image.                         |
||                       || * Thumbnail Height: Height of thumbnail image.                       |
||                       || * Data Source: Source where the image will be loaded.                |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * |imgUploadFromDesktop|                                             |
||                       || * |imgFromRepo|                                                      |
||                       || * |imgFromWebDAV|                                                    |
||                       || * |imgUploadToWebDAV|                                                |
||                       || * |imgFromS3|                                                        |
||                       || * |imgUploadToS3|                                                    |
+------------------------+-----------------------------------------------------------------------+

.. |imgUploadFromDesktop| replace:: :ref:`Image Uploaded from Desktop <form-source-image-desktop>`
.. |imgFromRepo| replace:: :ref:`Image from Repository <form-source-image-repo>`
.. |imgFromWebDAV| replace:: :ref:`Image from WebDAV Repository <form-source-webdav-image-repo>`
.. |imgUploadToWebDAV| replace:: :ref:`Image Uploaded to WebDAV Repository <form-source-webdav-image-upload>`
.. |imgFromS3| replace:: :ref:`Image From S3 Repository <form-source-s3-image-repo>`
.. |imgUploadToS3| replace:: :ref:`Image Uploaded to S3 Repository <form-source-s3-image-upload>`
