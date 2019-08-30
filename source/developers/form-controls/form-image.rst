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
|| Related Data Sources  || * Image Uploaded from Desktop.                                       |
||                       || * Image from Repository                                              |
+------------------------+-----------------------------------------------------------------------+