:is-up-to-date: True
:nosearch:
:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Dropdown

.. _newIa-form-dropdown:

================
Dropdown Control
================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-dropdown-example.webp
    :width: 30%
    :alt: Form Control Dropdown Example
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-dropdown.webp
    :width: 50%
    :alt: Form Control Dropdown Properties
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Simple Dropdown control                                              |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Data Source: Source that will populate the dropdown.               |
||                       || * Allow Empty Value: To enable/disable allowing to leave the field   |
||                       ||   empty.                                                             |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * Configured List of Pairs                                           |
||                       || * Static Key Value Pairs                                             |
+------------------------+-----------------------------------------------------------------------+