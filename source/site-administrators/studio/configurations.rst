:is-up-to-date: True
:last-updated: 4.0.0

.. index:: Configurations

.. highlight:: xml

.. _project-config-configuration:

==============
Configurations
==============

The Configurations configuration file allows you to specify which items can be accessed from the dropdown list in **Project Tools** -> **Configuration**.

To find this configuration xml through studio follow the next instructions:

#. Click on |projectTools| located in the Sidebar.
#. Choose **Configuration** from the menu.
#. Select **Configurations**.

.. image:: /_static/images/site-admin/configuration.jpg
    :alt: Configurations - Open Configurations
    :width: 55 %
    :align: center

|

------
Sample
------

Here's a sample config-list.xml file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample "config-list.xml"</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-config-list.xml
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
|| path           || Path where the system will find the specific xml file                        |
+-----------------+-------------------------------------------------------------------------------+
|| title          || This tag refers to file title. It will be showed in the configuration        |
||                || dropdown at the top of the page. See #1 in the image above                   |
+-----------------+-------------------------------------------------------------------------------+
|| description    || This tag refers to file description. It will be showed to explain the file   |
||                || functionality. See #2 in the image above                                     |
+-----------------+-------------------------------------------------------------------------------+
|| samplePath     || Path where the system will find an example of the specific xml.              |
||                || See #3 in the image above                                                    |
+-----------------+-------------------------------------------------------------------------------+

-----------
Sample File
-----------

You can click on the **View Sample** button to see a configuration file example.

.. image:: /_static/images/site-admin/basic-configuration-sample.jpg
    :align: center
    :alt: Basic Configuration Sample

|


-------------------------------
Adding a new configuration file
-------------------------------

To add a new configuration file please follow the steps below.

#. Add file tags to the ``Configurations`` list xml file (config-list.xml).

   .. code-block:: xml
      :caption: *CRAFTER_HOME/data/repos/sites/sandbox/SITENAME/sandbox/config/studio/administration/config-list.xml*

      <file>
        <module>studio</module>
        <path>/workflow-config.xml</path>
        <title>Workflow Configuration</title>
        <description>Defines workflows available in the system</description>
        <samplePath>/administration/samples/sample-workflow-config.xml</samplePath>
      </file>


   .. image:: /_static/images/site-admin/basic-configuration-step1.jpg
            :align: center
            :alt: Basic Configuration Step 1

   |

#. Click on the **Save** button

    .. image:: /_static/images/site-admin/basic-configuration-step2.jpg
        :align: center
        :alt: Basic Configuration Step 2

    |

#. Go to ``Configuration``, then finally look for your new configuration file

    .. image:: /_static/images/site-admin/basic-configuration-step3.jpg
        :width: 70%
        :align: center
        :alt: Basic Configuration Step 3

    |