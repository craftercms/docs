:is-up-to-date: True
:last-updated: 4.0.3
:nosearch:
:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Rich Text Editor

.. _form-rte:

========================
Rich Text Editor Control
========================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-rte-example.webp
    :width: 50%
    :alt: RTE Example
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-rte-properties.webp
    :width: 50%
    :alt: RTE
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Rich Text Area field.                                                |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Height: Height of the Rich Text Area.                              |
||                       || * Force Root Block p Tag.                                            |
||                       || * Force p tags New Lines: Adds a p tag on every new line.            |
||                       || * Force br New Lines: Adds br for each new line.                     |
||                       || * Supported Channels.                                                |
||                       || * RTE Configuration: Configuration to be loaded on the rte.          |
||                       || * Image Manager.                                                     |
||                       || * Video Manager.                                                     |
||                       || * File Manager.                                                      |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || Image Manager                                                        |
||                       || * |imgUploadFromDesktop|                                             |
||                       || * |imgFromRepo|                                                      |
||                       || * |imgFromWebDAV|                                                    |
||                       || * |imgUploadToWebDAV|                                                |
||                       || * |imgFromS3|                                                        |
||                       || * |imgUploadToS3|                                                    |
||                       || Video Manager                                                        |
||                       || * |vidUploadFromDesktop|                                             |
||                       || * |vidFromRepo|                                                      |
||                       || * |vidFromWebDAV|                                                    |
||                       || * |vidUploadToWebDAV|                                                |
||                       || * |vidFromS3|                                                        |
||                       || * |vidUploadToS3|                                                    |
||                       || File Manager                                                         |
||                       || * |fileUploadFromDesktop|                                            |
||                       || * |fileFromRepo|                                                     |
||                       || * |fileFromWebDAV|                                                   |
||                       || * |fileUploadToWebDAV|                                               |
||                       || * |fileFromS3|                                                       |
||                       || * |fileUploadToS3|                                                   |
||                       || * |sharedContent|                                                    |
||                       || * |embeddedContent|                                                  |
+------------------------+-----------------------------------------------------------------------+

.. |imgUploadFromDesktop| replace:: :ref:`Image Uploaded from Desktop <form-source-image-desktop>`
.. |imgFromRepo| replace:: :ref:`Image from Repository <form-source-image-repo>`
.. |imgFromWebDAV| replace:: :ref:`Image from WebDAV Repository <form-source-webdav-image-repo>`
.. |imgUploadToWebDAV| replace:: :ref:`Image Uploaded to WebDAV Repository <form-source-webdav-image-upload>`
.. |imgFromS3| replace:: :ref:`Image From S3 Repository <form-source-s3-image-repo>`
.. |imgUploadToS3| replace:: :ref:`Image Uploaded to S3 Repository <form-source-s3-image-upload>`

.. |vidUploadFromDesktop| replace:: :ref:`Video Uploaded From Desktop <form-source-video-desktop>`
.. |vidFromRepo| replace:: :ref:`Video from Repository <form-source-video-repo>`
.. |vidFromWebDAV| replace:: :ref:`Video from WebDAV Repository <form-source-webdav-video-repo>`
.. |vidUploadToWebDAV| replace:: :ref:`Video Uploaded to WebDAV Repository <form-source-webdav-video-upload>`
.. |vidFromS3| replace:: :ref:`Video From S3 Repository <form-source-s3-video-repo>`
.. |vidUploadToS3| replace:: :ref:`Video Uploaded to S3 Repository <form-source-s3-video-upload>`

.. |fileUploadFromDesktop| replace:: :ref:`File Uploaded From Desktop <form-source-file-desktop>`
.. |fileFromRepo| replace:: :ref:`File from Repository <form-source-file-browse>`
.. |fileFromWebDAV| replace:: :ref:`File from WebDAV Repository <form-source-webdav-file-repo>`
.. |fileUploadToWebDAV| replace:: :ref:`File Uploaded to WebDAV Repository <form-source-webdav-file-upload>`
.. |fileFromS3| replace:: :ref:`File From S3 Repository <form-source-s3-file-repo>`
.. |fileUploadToS3| replace:: :ref:`File Uploaded to S3 Repository <form-source-s3-file-upload>`
.. |sharedContent| replace:: :ref:`Shared Content <form-source-shared-content>`
.. |embeddedContent| replace:: :ref:`Embedded Content <form-source-embedded-content>`
