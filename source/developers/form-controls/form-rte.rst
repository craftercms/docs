:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Rich Text Editor (TinyMCE 2)

.. _form-rte:

====================================
Rich Text Editor (TinyMCE 2) Control
====================================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-rte-example.png
    :width: 50%
    :alt: RTE (TinyMCE2) Example
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-rte-properties.png
    :width: 50%
    :alt: RTE (TinyMCE2)
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Rich Text Area field.                                                |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Width: Width of the Rich Text Area.                                |
||                       || * Height: Height of the Rich Text Area.                              |
||                       || * Max Length: Maximum number of characters to accept as input.       |
||                       || * Allow Resize: Allows to resize the field.                          |
||                       || * Force Root Block p Tag.                                            |
||                       || * Force p tags New Lines: Adds a p tag on every new line.            |
||                       || * Force br New Lines: Adds br for each new line.                     |
||                       || * Require Image Alt Tag: When inserting image, requires alternative  |
||                       ||   tag.                                                               |
||                       || * Supported Channels.                                                |
||                       || * RTE Configuration: Configuration to be loaded on the rte.          |
||                       || * Image Manager.                                                     |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * Image.                                                             |
+------------------------+-----------------------------------------------------------------------+

