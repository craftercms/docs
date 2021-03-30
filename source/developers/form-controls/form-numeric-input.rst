:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Numeric Input

.. _form-numeric-input:

=====================
Numeric Input Control
=====================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-numeric-input-example.png
        :width: 60%
        :alt: Form Control Numeric Input Example
        :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-numeric-input.png
        :width: 45%
        :alt: Form Control Numeric Input Properties
        :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Simple numeric input control.                                        |
+------------------------+-----------------------------------------------------------------------+
||                       || * Display Size: How much of the input to show on the author input    |
||                       ||   form.                                                              |
|| Properties            || * Max Length: Maximum number of numeric characters to accept as input|
||                       || * Min Length: Minimum number of numeric characters to accept as input|
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
||                       || * Tokenize for Indexing: Make the object searchable by this field.   |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
||                       || * Match Pattern: Field must match a regex to be accepted.            |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * None.                                                              |
+------------------------+-----------------------------------------------------------------------+

.. .. todo:: link the above to the Pencil Tool and other subjects to help with cross navigation
.. .. seealso:: Links to Pencil Tool, other relevant topics
