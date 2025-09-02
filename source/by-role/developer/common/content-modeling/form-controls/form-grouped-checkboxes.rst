:is-up-to-date: True
:last-updated: 4.1.0

.. _form-grouped-checkboxes:

==========================
Grouped Checkboxes Control
==========================
Several checkboxes (true/false).

-------
Example
-------

.. figure:: /_static/images/form-controls/form-control-grouped-checkboxes-example.webp
    :width: 30%
    :alt: Form Control Grouped Checkboxes Example

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-grouped-checkboxes.webp
    :width: 30%
    :alt: Form Control Grouped Checkboxes Properties
    :align: left

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Data Source: Source that will populate the checkboxes.             |
||                       || * Show Select All: To select/unselect all options.                   |
||                       || * List Direction: Display list horizontally or vertically            |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Minimum Selection: Set a minimum amount of checkboxes to be        |
||                       ||   selected.                                                          |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * :ref:`Simple Taxonomy <form-source-simple-taxonomy>`               |
||                       || * :ref:`Static Key Value Pairs <form-source-kvp>`                    |
+------------------------+-----------------------------------------------------------------------+