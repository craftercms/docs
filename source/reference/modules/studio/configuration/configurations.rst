:is-up-to-date: True
:last-updated: 4.1.1

.. highlight:: xml

.. _project-tools-configuration:

===========================
Project Tools Configuration
===========================
The ``Configurations`` configuration file allows you to specify which items can be accessed from the list in **Project Tools** -> **Configuration**.

To find this configuration XML through studio follow the next instructions:

#. Click on |projectTools| located in the Sidebar.
#. Choose **Configuration** from the menu.
#. Select **Configurations**.

.. image:: /_static/images/site-admin/configuration.webp
    :alt: Configurations - Open Configurations
    :width: 45%
    :align: center

|

------
Sample
------
Here's a sample ``config-list.xml`` file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "config-list.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/support/4.1.x/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-config-list.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/administration/config-list.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|
|

-----------
Description
-----------

List of available configuration tags

+-----------------+-------------------------------------------------------------------------------+
|| Tag            || Description                                                                  |
+=================+===============================================================================+
|| files          || This tag contains each  file.                                                |
+-----------------+-------------------------------------------------------------------------------+
|| file           || This tag contains the configuration of each file.                            |
+-----------------+-------------------------------------------------------------------------------+
|| module         || CrafterCMS module                                                            |
+-----------------+-------------------------------------------------------------------------------+
|| path           || Path where the system will find the specific xml file                        |
+-----------------+-------------------------------------------------------------------------------+
|| title          || This tag refers to file title. It will be shown in the configuration         |
||                || list on the left side of the page. See #1 in the image above                 |
+-----------------+-------------------------------------------------------------------------------+
|| description    || This tag refers to file description. It will be shown to explain the file    |
||                || functionality. See #2 in the image above                                     |
+-----------------+-------------------------------------------------------------------------------+
|| samplePath     || Path where the system will find an example of the specific xml.              |
+-----------------+-------------------------------------------------------------------------------+

-----------
Sample File
-----------
You can click on the **View Sample** button to see a configuration file example.

.. image:: /_static/images/site-admin/basic-configuration-sample.webp
    :align: center
    :alt: Basic Configuration Sample