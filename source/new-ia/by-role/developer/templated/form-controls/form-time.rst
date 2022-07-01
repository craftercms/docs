:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Time Control

.. _newIa-form-time:

============
Time Control
============

-------
Example
-------

.. image:: /_static/images/form-controls/form-control-time-example.png
    :width: 65%
    :alt: Form Control Time Example 1
    :align: center

|

.. image:: /_static/images/form-controls/form-control-time-example2.png
    :width: 65%
    :alt: Form Control Time Example 2
    :align: center



-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-time-properties.png
    :width: 35%
    :alt: Form Control Time Properties
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Date and Time field with a picker.                                   |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Show Clear Value: Display link to clear value                      |
||                       || * Set Now Link: Display link to set time to now                      |
||                       || * Populated: Put in values in the date/time based on                 |
||                       ||   populate expression                                                |
||                       || * Populate Expression: Populate date/time control using the following|
||                       ||   expressions: now [+ or -][number][days or weeks or years or hours  |
||                       ||   or minutes]                                                        |
||                       || * Use Custom Timezone: Allows user to select a timezone              |
||                       || * Readonly: Make field read-only (can't be changed by the author).   |
||                       || * Readonly on Edit:                                                  |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Required: Make field required to fill out.                         |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * None.                                                              |
+------------------------+-----------------------------------------------------------------------+