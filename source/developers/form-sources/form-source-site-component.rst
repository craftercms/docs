:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Data Sources; Site Component

.. _form-source-site-component:

==========================
Site Component Data Source
==========================

.. image:: /_static/images/form-source-site-component.png
    :width: 50%
    :alt: Form Control Data Source Site Component
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-source-site-component-conf.png
    :width: 50%
    :alt: Form Control Data Source Site Component Configuration
    :align: center

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+--------------------------------------------------------------------------+
|| Description/Purpose   || Data source to select or create content to be used on the form.         |
+------------------------+--------------------------------------------------------------------------+
|| Properties            || - Data Type: Key Value pairs type (String, Integer, Float, Date, HTML). |
||                       || - Component Path: Path where to browse the datasource items.            |
+------------------------+--------------------------------------------------------------------------+

----------------------------------------
Creating an XML file for the data source
----------------------------------------

The Site Component Data Source uses xml files to get the components that are going to be used. You can
create your own component to use as data source by following the instructions on :ref:`creating a component<template-component>` and just skip creating the view and controller part of the content type if needed.

.. image:: /_static/images/form-source-site-component-example.png
    :width: 80%
    :alt: Form Control Data Source Site Component Example
    :align: center

Here's a sample xml snippet of a site component data source file:

.. code-block:: xml

    <items>
        <item>
            <key>guy</key>
	        <value>Guy</value>
	    </item>
	    <item>
	        <key>gal</key>
	        <value>Gal</value>
	    </item>
    </items>
	<file-name>segments.xml</file-name>

