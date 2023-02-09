:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:
:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Data Sources; Static Key Value Pairs

.. _newIa-form-source-kvp:

==================================
Static Key Value Pairs Data Source
==================================

.. image:: /_static/images/form-sources/form-source-kvp.webp
    :width: 30%
    :alt: Source Control Static Key Value Pairs
    :align: center

|

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-kvp-conf.webp
    :width: 50%
    :alt: Form Static Key Value Pairs
    :align: center

|

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+---------------------------------------------------------------------------+
|| Description/Purpose   || Data source where key/value paris can be added for its use on a control. |
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

- Fill the Key and Value fields.
- Clicking on "Add another" adds a new key value pair.
- Clicking on the "X" removes the pair.
- "Save" or "Cancel" to finish editing the pairs.
