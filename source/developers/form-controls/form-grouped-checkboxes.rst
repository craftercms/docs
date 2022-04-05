:is-up-to-date: True
:last-updated: 4.0.0

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
    :width: 60%
    :alt: Form Control Grouped Checkboxes Example
    :align: center

|

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-grouped-checkboxes.png
    :width: 40%
    :alt: Form Control Grouped Checkboxes Properties
    :align: center

|

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Several checkboxes (true/false).                                     |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Data Source: Source that will populate the checkboxes.             |
||                       || * Show Select All: To select/unselect all options.                   |
||                       || * List Direction: To display the options horizontally or vertically  |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Minimum Selection: Set a minimum amount of checkboxes to be        |
||                       ||   selected.                                                          |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * |projectComponent|                                                 |
||                       || * |keyValuePair|                                                     |
||                       || * |sharedContent|                                                    |
+------------------------+-----------------------------------------------------------------------+

.. |projectComponent| replace:: :ref:`Project Component <form-source-project-component>`
.. |keyValuePair| replace:: :ref:`Static Key Value Pairs <form-source-kvp>`
.. |sharedContent| replace:: :ref:`Shared Content <form-source-shared-content>`
