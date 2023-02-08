:is-up-to-date: True
:last-updated: 4.0.3

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Item Selector

.. _form-item-selector:

=====================
Item Selector Control
=====================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-item-selector-example.webp
    :width: 60%
    :alt: Form Control Item Selector Example
    :align: center

|

.. image:: /_static/images/form-controls/form-control-item-selector-example2.webp
    :width: 60%
    :alt: Form Control Item Selector Example
    :align: center

|

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-item-selector.webp
    :width: 40%
    :alt: Form Control Item Selector Properties
    :align: center

|

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Item Selector control.                                               |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Min Size: Minimum amount of items selected.                        |
||                       || * Max Size: Maximum amount of items selected.                        |
||                       || * Item Manager: Source where the items will be selected/created.     |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
||                       || * Disable Flattening for Search.                                     |
||                       || * Use single value filename (backward compat).                       |
||                       || * Use ``_mvs`` postfix (backward compat).                            |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Allow Duplicate: Allows adding the same item more than once.       |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * |sharedContent|                                                    |
||                       || * |embeddedContent|                                                  |
||                       || * |simpleTaxonomy|                                                   |
||                       || * |components|                                                       |
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
.. |simpleTaxonomy| replace:: :ref:`Project Component <form-source-simple-taxonomy>`
.. |components| replace:: :ref:`Drop Targets <form-source-components>`