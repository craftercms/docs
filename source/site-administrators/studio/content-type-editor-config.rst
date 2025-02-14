:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Content Type Editor Config

.. _content-type-editor-config:

==========================
Content Type Editor Config
==========================

The Content Type Editor Config configuration file defines what tools are available in the Content Type Editor.
This configuration is unique in that a configuration file exists in the following location of
each project: ``SITENAME/config/studio/administration/site-config-tools.xml``

.. image:: /_static/images/site-admin/configuration-tool-config.webp
    :align: center
    :width: 25%
    :alt: Content Type Editor Config

To modify the Content Type Editor Config configuration, click on |projectTools| from the bottom of the *Sidebar*,
then click on **Configuration** and select **Content Type Editor Config** from the list.

.. image:: /_static/images/site-admin/config-open-content-type-editor-config.webp
    :alt: Configurations - Open Content Type Editor Config Tools
    :width: 65 %
    :align: center

------
Sample
------
Here is a sample Content Type Editor Config configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample Content Type Editor Config configuration file</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/support/4.0.x/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-site-config-tools.xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/administration/site-config-tools.xml*
    :language: xml
    :linenos:

.. raw:: html

   </details>

|
|

-----------
Description
-----------

Content Type Specific tool configuration
----------------------------------------

    ``/config/tools/tool/controls``
        List of available content type form controls
    ``/config/tools/tool/controls/control``
        Control name (JavaScript control module name)
    ``/config/tools/tool/datasources``
        List of available datasources for content type form controls
    ``/config/tools/tool/datasources/datasource``
        Datasource name (JavaScript datasource module name)
    ``/config/tools/tool/objectTypes``
        List of available object types
    ``/config/tools/tool/objectTypes/type``
        Type configuration (Page or Component) - name, label, properties


List of available content type form controls
--------------------------------------------

.. include:: /developers/form-controls/list-form-controls.rst

List of available content type data sources
-------------------------------------------

.. include:: /developers/form-sources/list-form-sources.rst
