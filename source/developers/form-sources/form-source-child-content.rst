:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Data Sources; Child Content

.. _form-source-child-content:

======================================
Child Content Data Source (Deprecated)
======================================

.. image:: /_static/images/form-sources/form-source-child-content.png
    :width: 50%
    :alt: Form Control Input 1
    :align: center

.. important::
    This data source is deprecated and provided only as a reference. For components that need to be shared across pages or components, please use :ref:`Shared Content<form-source-shared-content>` instead. For components that belong exclusively to a content object, please use :ref:`Embedded Content<form-source-embedded-content>`.

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-child-content-conf.png
    :width: 50%
    :alt: Form Control Input 1
    :align: center

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+-----------------------------------------------------------------------+
|| Description/Purpose   || Data source to select or create content to be used on the form.      |
+------------------------+-----------------------------------------------------------------------+
|| Properties            || - Enable Create New: Allows user to create a new item                |
||                       || - Enable Browse Existing: Allows user to browse existing items       |
||                       || - Repository Path: Path where to store new content created.          |
||                       || - Browse Path: Path where to browse the datasource items.            |
||                       || - Default Type: Default type of datasource items.                    |
+------------------------+-----------------------------------------------------------------------+