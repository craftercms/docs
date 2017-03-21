.. index:: Form Controls; Date/Time Control

.. _form-date-time:

=================
Date/Time Control
=================

-------
Example
-------

.. image:: /_static/images/form-control-date-time-example.png
    :width: 50%
    :alt: Form Control Input 1
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-control-date-time-properties.png
    :width: 50%
    :alt: Form Control Input 1
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Date and Time field with a picker.                                   |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Display Size: How much of the input to show on the author input    |
||                       ||   form.                                                              |
||                       || * Max Length: Maximum number of characters to accept as input.       |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
||                       || * Tokenize for Indexing: Make the object searchable by this field.   |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
||                       || * Match Pattern: Field must match a regex to be accepted.            |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * None.                                                              |
+------------------------+-----------------------------------------------------------------------+