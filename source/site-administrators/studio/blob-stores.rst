:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Blob Stores Configuration

.. _blob-stores-configuration:

=========================
Blob Stores Configuration
=========================

The Blob Stores configuration file allows you to configure 0 or more stores for assets with the corresponding information required by the store being used.
To modify the Blob Stores configuration, click on |projectTools| from the bottom of the *Sidebar*, then click on **Configuration** and select **Blob Stores** from the list.

.. image:: /_static/images/site-admin/config-open-blob-stores.jpg
    :alt: Configurations - Open Blob Stores Configuration
    :width: 65 %
    :align: center


------
Sample
------

Here's a sample Blob Stores Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "blob-stores-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-blob-stores-config.xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/blob-stores-config.xml*
    :language: xml
    :linenos:

.. raw:: html

   </details>

|
|

See :ref:`publishing-assets-in-external-storage` for an example of using the blob stores configuration
