:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Input

.. _form-input:

=============
Input Control
=============

-------
Example
-------

.. image:: /_static/images/form-control-input-example.png
        :width: 50%
        :alt: Form Control Input 1
        :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-control-input-1.png
        :width: 50%
        :alt: Form Control Input 1
        :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Simple text input control.                                           |
+------------------------+-----------------------------------------------------------------------+
||                       || * Display Size: How much of the input to show on the author input    |
||                       ||   form.                                                              |
|| Properties            || * Max Length: Maximum number of characters to accept as input.       |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
||                       || * Tokenize for Indexing: Make the object searchable by this field.   |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
||                       || * Match Pattern: Field must match a regex to be accepted.            |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * None.                                                              |
+------------------------+-----------------------------------------------------------------------+

.. todo:: link the above to the Pencil Tool and other subjects to help with cross navigation
.. seealso:: Links to Pencil Tool, other relevant topics
