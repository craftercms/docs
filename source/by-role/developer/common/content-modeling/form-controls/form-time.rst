:is-up-to-date: True
:last-update: 4.0.0

.. _form-time:

============
Time Control
============
Date and Time field with a picker.

-------
Example
-------

.. figure:: /_static/images/form-controls/form-control-time-example.webp
    :width: 60%
    :alt: Form Control Time Example 1
    :align: left

|

.. figure:: /_static/images/form-controls/form-control-time-example2.webp
    :width: 60%
    :alt: Form Control Time Example 2
    :align: left

-------------
Configuration
-------------

.. image:: /_static/images/form-controls/form-control-time-properties.webp
    :width: 30%
    :alt: Form Control Time Properties
    :align: left

.. include:: /includes/form-controls/form-control-field-basics.rst

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