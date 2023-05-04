:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Proxy Configuration

.. _proxy-configuration:

###################
Proxy Configuration
###################

The proxy configuration file contains configuration for the preview proxy servers.
To modify the proxy configuration, click on |projectTools| from the bottom of the *Sidebar*, then click on **Configuration** and select **Proxy Config** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-proxy-config.webp
    :alt: Configurations - Open Proxy Configuration
    :width: 45 %
    :align: center

******
Sample
******
Here's a sample Proxy Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "proxy-config.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-proxy-config.xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/proxy-config.xml*
    :language: xml
    :linenos:

.. raw:: html

   </details>

|
|

   .. note::
      Deleting the config file (*proxy-config.xml*) from the repo completely disables the proxy feature.

See :ref:`using-the-proxy-configuration` for an example of configuring the proxy with a React application.
