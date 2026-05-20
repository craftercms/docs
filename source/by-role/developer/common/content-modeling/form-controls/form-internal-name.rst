:is-up-to-date: True
:last-updated: 4.1.0

.. meta::
   :description: CrafterCMS Internal Name form control reference — configure the internal name text input with max length, tokenize for indexing, and escape content options.
   :keywords: internal name, form control, CrafterCMS, content type, tokenize, indexing, content modeling

.. _form-internal-name:

=====================
Internal Name Control
=====================
Simple text internal name

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-internal-name-properties.webp
    :width: 30%
    :alt: Form Control Internal Name Properties
    :align: left

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+------------------------------------------------------------------------+
|| Properties            || * Display Size: How much of the input to show on the author input form|
||                       || * Max Length: Maximum number of characters to accept as input.        |
||                       || * Readonly: Make field read-only (can't be changed by the author).    |
||                       || * Tokenize for Indexing: Make the object searchable by this field.    |
||                       || * Escape Content: Make the object escape script tags.                 |
+------------------------+------------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                          |
||                       || * Match Pattern: Field must match a regex to be accepted.             |
+------------------------+------------------------------------------------------------------------+
|| Related Data Sources  || None                                                                  |
+------------------------+------------------------------------------------------------------------+
