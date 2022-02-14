:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Data Sources; Configured List of Pairs

.. _newIa-form-source-list-pairs:

====================================
Configured List of Pairs Data Source
====================================

.. image:: /_static/images/form-sources/form-source-list-pairs.png
    :width: 50%
    :alt: Source Control Configured List of Pairs
    :align: center

-------------
Configuration
-------------

.. image:: /_static/images/form-sources/form-source-list-pairs-conf.png
    :width: 50%
    :alt: Source Control Configured List of Pairs Configuration
    :align: center

.. include:: /includes/form-sources/form-source-field-basics.rst

+------------------------+----------------------------------------------------------------------------------+
|| Description/Purpose   || Data source that loads pairs from external xml file.                            |
+------------------------+----------------------------------------------------------------------------------+
|| Properties            || - Data Type: Key Value pairs type (String, Integer, Float, Date, HTML).         |
||                       || - List Name: Name of the xml file with the pairs to be used by the data source. |
||                       || - Sort: Sort pairs when displaying on form.                                     |
+------------------------+----------------------------------------------------------------------------------+

----------------------------------------
Creating an XML file for the data source
----------------------------------------

The Configured List of Pairs Data Source uses xml files to get the list of pairs that are going to be used. You can
create your own list and save it into the repository at "/cstudio/config/sites/{SITE_NAME}/form-control-config/configured-lists"

.. code-block:: xml

   <list>
        <values>
            <item>
                <key>blue</key>
                <value>Blue</value>
            </item>
            <item>
                <key>red</key>
                <value>Red</value>
            </item>
        </values>
    </list>

colors.xml