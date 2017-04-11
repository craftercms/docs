:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Form Controls; Item Selector

.. _form-item-selector:

=====================
Item Selector Control
=====================

-------
Example
-------

.. image:: /_static/images/form-control-item-selector-example.png
    :width: 50%
    :alt: Form Control Item Selector
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-control-item-selector.png
    :width: 50%
    :alt: Form Control Item Selector
    :align: center

.. include:: /includes/form-controls/form-control-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Item Selector control.                                               |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || * Min Size: Minimum amount of items selected.                        |
||                       || * Max Size: Maximum amount of items selected.                        |
||                       || * Item Manager: Source where the items will be selected/created.     |
||                       || * Read Only: Make field read-only (can't be changed by the author).  |
||                       || * Disable Flattening for Search.                                     |
||                       || * Use single value filename.                                         |
+------------------------+-----------------------------------------------------------------------+
|| Constraints           || * Allow Duplicate: Allows adding the same item more than once.       |
+------------------------+-----------------------------------------------------------------------+
|| Related Data Sources  || * Child Content.                                                     |
+------------------------+-----------------------------------------------------------------------+

