:is-up-to-date: True
:last-updated: 4.0.0
:nosearch:
:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Data Sources; Project Component

.. _newIa-form-source-project-component:

=============================
Project Component Data Source
=============================

.. image:: /_static/images/form-sources/form-source-project-component.webp
    :width: 30%
    :alt: Form Control Data Source Project Component
    :align: center

|

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-project-component-conf.webp
    :width: 50%
    :alt: Form Control Data Source Project Component Configuration
    :align: center

|

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

The Project Component Data Source uses xml files to get the components that are going to be used. You can
create your own component to use as data source by following the instructions on :ref:`newIa-creating a component<content-type-component>` and just skip creating the view and controller part of the content type if needed.

.. image:: /_static/images/form-sources/form-source-project-component-example.webp
    :width: 65%
    :alt: Form Control Data Source Project Component Example
    :align: center

|

Here's a sample xml snippet of a project component data source file:

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

