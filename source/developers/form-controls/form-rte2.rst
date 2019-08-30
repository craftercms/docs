:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Rich Text Editor (TinyMCE 5)

.. _form-rte2:

====================================
Rich Text Editor (TinyMCE 5) Control
====================================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-rte2-example.png
    :width: 50%
    :alt: RTE (TinyMCE 5)
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-rte2-properties.png
    :width: 50%
    :alt: RTE (TinyMCE 5)
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
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * Image and Video.                                                   |
+------------------------+-----------------------------------------------------------------------+

