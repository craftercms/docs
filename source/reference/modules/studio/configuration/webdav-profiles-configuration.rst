:is-up-to-date: True
:last-updated: 4.1.1

.. index:: WebDAV Profiles Configuration

.. _webdav-profiles-configuration:

=============================
WebDAV Profiles Configuration
=============================
The WebDAV Profiles configuration file allows you to configure profiles with the information required to connect to a WebDAV server.
To modify the WebDAV Profiles configuration, click on |projectTools| from the bottom of the *Sidebar*, then click on **Configuration** and select **WebDAV Profiles** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-webdav-config.webp
    :alt: Configurations - Open WebDAV Profiles Configuration
    :width: 35 %
    :align: center

------
Sample
------
Here's a sample WebDAV Profiles Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample WebDAV profiles configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-webdav.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/webdav/webdav.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|
|

  .. note:: Preemptive authentication may be needed if network timeouts are happening during uploads. To enable preemptive authentication, simply set the option ``preemptiveAuth`` to ``true`` in the configuration file.
