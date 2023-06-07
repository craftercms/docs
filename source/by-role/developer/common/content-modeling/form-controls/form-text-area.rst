:is-up-to-date: True
:last-updated: 4.1.0

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Text Area

.. _form-text-area:

=================
Text Area Control
=================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-text-area-example.webp
    :width: 50%
    :alt: Form Control Text Area Example
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-text-area-properties.webp
    :width: 50%
    :alt: Form Control Text Area
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Simple text-area input.                                              |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Columns: Number of columns of the text area to show.               |
||                       || * Rows: Number of rows of the text area to show.                     |
||                       || * Max Length: Maximum number of characters to accept as input.       |
||                       || * Allow Resize: Allows the resizing feature of the text area.        |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
||                       || * Escape Content: Allows escaping of script tags.                    |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * None.                                                              |
+------------------------+-----------------------------------------------------------------------+