:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Grouped Checkboxes

.. _form-grouped-checkboxes:

==========================
Grouped Checkboxes Control
==========================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-grouped-checkboxes-example.png
    :width: 50%
    :alt: Form Control Grouped Checkboxes Example
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-grouped-checkboxes.png
    :width: 50%
    :alt: Form Control Grouped Checkboxes Properties
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Several checkboxes (true/false).                                     |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Data Source: Source that will populate the checkboxes.             |
||                       || * Show Select All: To select/unselect all options.                   |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Minimum Selection: Set a minimum amount of checkboxes to be        |
||                       ||   selected.                                                          |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * Configured List of Pairs.                                          |
||                       || * Static Key Value Pairs.                                            |
+------------------------+-----------------------------------------------------------------------+