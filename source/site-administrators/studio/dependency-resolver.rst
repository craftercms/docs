:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Dependency Resolver Configuration, Dependency Resolver, Dependency

.. _dependency-resolver-config:

=================================
Dependency Resolver Configuration
=================================

Crafter Studio extracts and tracks dependencies between content items to assist authors with publishing, workflow and core content operations like copy and delete.  This file configures what file paths Crafter considers a dependency and how they should be extracted.

To modify the Dependency Resolver configuration, click on |projectTools| from the bottom of the Sidebar, then click on **Configuration** and select **Dependency Resolver** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-dependency-config.webp
    :alt: Configurations - Open Dependency Resolver Configuration
    :width: 65 %
    :align: center

------
Sample
------
Here's a sample Dependency Resolver Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample dependency resolver configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-resolver-config.xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/dependency/resolver-config.xml*
    :language: xml
    :linenos:

.. raw:: html

   </details>

|
|


