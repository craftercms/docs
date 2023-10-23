:is-up-to-date: True
:last-updated: 4.0.0

.. _form-transcoded-video:

========================
Transcoded Video Control
========================
Transcoded Video selector for Video Transcoding Data Source.

-------
Example
-------
.. figure:: /_static/images/form-controls/form-control-transcoded-video-example.webp
    :width: 60%
    :alt: Form Control Transcoded Video Example

-------------
Configuration
-------------
.. image:: /_static/images/form-controls/form-control-transcoded-video.webp
    :width: 30%
    :alt: Form Control Transcoded Video
    :align: left

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Data Source: Source that will populate the transcoded video picker.|
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * |mediaConvertTranscode|                                            |
+------------------------+-----------------------------------------------------------------------+

.. |mediaConvertTranscode| replace:: :ref:`Video Transcoding From S3 Repository <form-source-mediaconvert-transcode>`
