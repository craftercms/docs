:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Asset Processing

.. _asset-processing-config:

==============================
Asset Processing Configuration
==============================

Asset processing allows you to define transformations for static assets (currently only images), through a series of processor pipelines that are executed when the assets are uploaded to Studio.

To modify the Asset Processing configuration, click on |projectTools| from the bottom of the Sidebar, then click on **Configuration** and select **Asset Processing** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-asset-proc-config.webp
    :alt: Configurations - Open Asset Processing Configuration
    :width: 65 %
    :align: center

------
Sample
------

Here's a sample Asset Processing Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "asset-processing-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-asset-processing-config.xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/asset-processing/asset-processing-config.xml*
    :language: xml
    :linenos:

.. raw:: html

   </details>

|
|

For more details on asset processing, see :ref:`asset-processing`
