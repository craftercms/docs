:is-up-to-date: True
:last-updated: 4.0.3

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Video

.. _form-video:

=============
Video Control
=============

-------
Example
-------
.. image:: /_static/images/form-controls/form-control-video-example.webp
    :width: 80%
    :alt: Form Control Video Example
    :align: center

-------------
Configuration
-------------
.. image:: /_static/images/form-controls/form-control-video.webp
    :width: 50%
    :alt: Form Control Video
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Video selector from a Data Source.                                   |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Data Source: Source that will populate the video picker.           |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * |vidUploadFromDesktop|                                             |
||                       || * |vidFromRepo|                                                      |
||                       || * |vidFromWebDAV|                                                    |
||                       || * |vidUploadToWebDAV|                                                |
||                       || * |vidFromS3|                                                        |
||                       || * |vidUploadToS3|                                                    |
+------------------------+-----------------------------------------------------------------------+

.. |vidUploadFromDesktop| replace:: :ref:`Video Uploaded From Desktop <form-source-video-desktop>`
.. |vidFromRepo| replace:: :ref:`Video from Repository <form-source-video-repo>`
.. |vidFromWebDAV| replace:: :ref:`Video from WebDAV Repository <form-source-webdav-video-repo>`
.. |vidUploadToWebDAV| replace:: :ref:`Video Uploaded to WebDAV Repository <form-source-webdav-video-upload>`
.. |vidFromS3| replace:: :ref:`Video From S3 Repository <form-source-s3-video-repo>`
.. |vidUploadToS3| replace:: :ref:`Video Uploaded to S3 Repository <form-source-s3-video-upload>`
