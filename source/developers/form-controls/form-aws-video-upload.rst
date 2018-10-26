:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; AWS Video Upload

.. _form-aws-video-upload:

================
AWS Video Upload
================

-------
Example
-------
.. image:: /_static/images/form-controls/aws-video-upload-example.png
    :width: 80%
    :alt: Form Control AWS Video Upload Example
    :align: center

-------------
Configuration
-------------
.. image:: /_static/images/form-controls/AWS-video-upload-prop.png
    :width: 50%
    :alt: Form Control AWS Video Upload Properties
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Video selector to upload to AWS                                      |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Service: transcoding service to be used when uploading video       |
||                       || * Profile ID: AWS Profile ID to be used for transcoding              |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+

