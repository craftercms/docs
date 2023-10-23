:is-up-to-date: True
:last-updated: 4.1.0

.. _form-item-selector:

=====================
Item Selector Control
=====================
Item Selector control.

-------
Example
-------

.. figure:: /_static/images/form-controls/form-control-item-selector-example.webp
    :width: 50%
    :alt: Form Control Item Selector Example

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-item-selector.webp
    :width: 30%
    :alt: Form Control Item Selector Properties
    :align: left

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Min Size: Minimum amount of items selected.                        |
||                       || * Max Size: Maximum amount of items selected.                        |
||                       || * Item Manager: Source where the items will be selected/created.     |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
||                       || * Disable Flattening for Search.                                     |
||                       || * Use single value filename.                                         |
||                       || * Use _mvs postfix.                                                  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Allow Duplicate: Allows adding the same item more than once.       |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * |sharedContent|                                                    |
||                       || * |embeddedContent|                                                  |
||                       || * |fileUploadFromDesktop|                                            |
||                       || * |fileFromRepo|                                                     |
||                       || * |fileFromWebDAV|                                                   |
||                       || * |fileUploadToWebDAV|                                               |
||                       || * |fileFromS3|                                                       |
||                       || * |fileUploadToS3|                                                   |
+------------------------+-----------------------------------------------------------------------+

.. |fileUploadFromDesktop| replace:: :ref:`File Uploaded From Desktop <form-source-file-desktop>`
.. |fileFromRepo| replace:: :ref:`File from Repository <form-source-file-browse>`
.. |fileFromWebDAV| replace:: :ref:`File from WebDAV Repository <form-source-webdav-file-repo>`
.. |fileUploadToWebDAV| replace:: :ref:`File Uploaded to WebDAV Repository <form-source-webdav-file-upload>`
.. |fileFromS3| replace:: :ref:`File From S3 Repository <form-source-s3-file-repo>`
.. |fileUploadToS3| replace:: :ref:`File Uploaded to S3 Repository <form-source-s3-file-upload>`
.. |sharedContent| replace:: :ref:`Shared Content <form-source-shared-content>`
.. |embeddedContent| replace:: :ref:`Embedded Content <form-source-embedded-content>`
