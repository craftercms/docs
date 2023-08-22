:is-up-to-date: False
:last-updated: 4.1.2

:orphan:

.. document does not appear in any toctree, and is only accessible via searching.
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. index:: Translation Configuration

.. _translation-configuration:

=========================
Translation Configuration
=========================

  .. warning::

     **This feature is not yet supported. It will be available in a future release**

The translation configuration defines supported languages and how to resolve them

To modify the translation configuration, click on |projectTools| from the *Sidebar*, then click on **Configuration**
and select **Translation Configuration** from the list.

.. image:: /_static/images/site-admin/config-open-translation-config.webp
   :alt: Configurations - Open Translation Configuration
   :width: 55 %
   :align: center

|

------
Sample
------

Here's a sample Translation Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample translation configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-translation-config.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/translation-config.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>
