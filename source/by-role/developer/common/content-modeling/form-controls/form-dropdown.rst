:is-up-to-date: True
:last-updated: 4.1.0

.. meta::
   :description: CrafterCMS Dropdown form control reference — configure dropdown selects with Simple Taxonomy or Static Key Value Pairs data sources in content types.
   :keywords: dropdown, form control, CrafterCMS, content type, simple taxonomy, key value pairs, data source, content modeling

.. _form-dropdown:

================
Dropdown Control
================
Simple Dropdown control

-------
Example
-------

.. figure:: /_static/images/form-controls/form-control-dropdown-example.webp
    :width: 50%
    :alt: Form Control Dropdown Example


-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-dropdown.webp
    :width: 50%
    :alt: Form Control Dropdown Properties
    :align: left

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Data Source: Source that will populate the dropdown.               |
||                       || * Allow Empty Value: To enable/disable allowing to leave the field   |
||                       ||   empty.                                                             |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * :ref:`Simple Taxonomy <form-source-simple-taxonomy>`               |
||                       || * :ref:`Static Key Value Pairs <form-source-kvp>`                    |
+------------------------+-----------------------------------------------------------------------+