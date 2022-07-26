:is-up-to-date: True
:since-version: 4.0.0

.. index:: Project Policy Configuration

.. _project-policy-configuration:

############################
Project Policy Configuration
############################
.. version_tag::
   :label: Since
   :version: 4.0.0

The project policy configuration file allows the user to configure conditions for content being added to the site, such as
minimum/maximum size of files, etc.

CrafterCMS supports the following site policies:

- Filename allowed patterns and automatic renaming rules
- File size limits
- MIME-type limits
- Content-type limits

To modify the project policy configuration, click on |projectTools| from the *Sidebar*, then click on **Configuration** and
select **Project Policy Configuration** from the dropdown list.

.. image:: /_static/images/site-admin/config-open-project-policy-config.jpg
   :alt: Configurations - Open Project Policy Configuration
   :width: 35 %
   :align: center


******
Sample
******
Here's a sample Project Policy Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample project policy configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/develop/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-site-policy-config.xml
    :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/site-policy-config.xml*
    :language: xml
    :linenos:

.. raw:: html

   </details>

|
|

