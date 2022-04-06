:is-up-to-date: True
:last-updated: 4.0.0

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Dropdown

.. _form-dropdown:

================
Dropdown Control
================

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-dropdown-example.png
    :width: 50%
    :alt: Form Control Dropdown Example
    :align: center

|

.. image:: /_static/images/form-controls/form-control-dropdown-example2.png
    :width: 50%
    :alt: Form Control Dropdown Expanded Example
    :align: center

|

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-dropdown.png
    :width: 40%
    :alt: Form Control Dropdown Properties
    :align: center

|

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
|| Related Data Sources  || * |projectComponent|                                                 |
||                       || * |keyValuePair|                                                     |
||                       || * |sharedContent|                                                    |
+------------------------+-----------------------------------------------------------------------+

.. |projectComponent| replace:: :ref:`Project Component <form-source-project-component>`
.. |keyValuePair| replace:: :ref:`Static Key Value Pairs <form-source-kvp>`
.. |sharedContent| replace:: :ref:`Shared Content <form-source-shared-content>`


