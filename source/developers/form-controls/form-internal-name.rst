:is-up-to-date: True
:last-updated: 4.0.0

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Internal Name

.. _form-internal-name:

=====================
Internal Name Control
=====================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-internal-name-example.png
    :width: 60%
    :alt: Form Control Internal Name Example
    :align: center

|

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-internal-name-properties.png
    :width: 40%
    :alt: Form Control Internal Name Properties
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+------------------------------------------------------------------------+
|| Description/Purpose   || Simple text internal name                                             |
+------------------------+------------------------------------------------------------------------+
|| Properties            || * Display Size: How much of the input to show on the author input form|
||                       || * Max Length: Maximum number of characters to accept as input.        |
||                       || * Readonly: Make the object searchable by this field.                 |
||                       || * Tokenize for Indexing: Make the object searchable by this field.    |
||                       || * Escape Content: Escape special characters in this field             |
+------------------------+------------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                          |
||                       || * Match Pattern: Field must match a regex to be accepted.             |
+------------------------+------------------------------------------------------------------------+
|| Related Data Sources  || None                                                                  |
+------------------------+------------------------------------------------------------------------+
