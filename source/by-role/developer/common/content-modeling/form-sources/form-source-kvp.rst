:is-up-to-date: True
:last-updated: 4.0.0

.. _form-source-kvp:

==================================
Static Key Value Pairs Data Source
==================================
Data source where key/value pairs can be added for its use on a control.

.. figure:: /_static/images/form-sources/form-source-kvp.webp
    :width: 20%
    :alt: Source Control Static Key Value Pairs

|

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-kvp-conf.webp
    :width: 40%
    :alt: Form Static Key Value Pairs
    :align: left


.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+---------------------------------------------------------------------------+
|| Properties            || - Data Type: Key Value pairs type (String, Integer, Float, Date, HTML).  |
||                       || - Options: Key Value pairs to be added on the datasource.                |
||                       || - Show keys:                                                             |
+------------------------+---------------------------------------------------------------------------+

--------------
Adding Options
--------------

When creating a static Key Value Pairs data source you can add the options by clicking on the "Options" input on the
datasource configuration. That will display a dialog with the necessary features to manage the data.

.. image:: /_static/images/form-sources/form-source-kvp-options.webp
    :width: 50%
    :alt: Form Static Key Value Pairs Options
    :align: center

|

- Fill the ``Key`` and ``Value`` fields.
- Clicking on ``Add another`` adds a new key value pair.
- Clicking on the ``Delete`` button removes the pair.
- ``Save & Close`` or ``Cancel`` to finish editing the pairs.
