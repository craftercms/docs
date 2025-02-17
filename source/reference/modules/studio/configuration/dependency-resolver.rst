:is-up-to-date: True
:last-updated: 4.2.0
:orphan:

.. _dependency-resolver-config:

=================================
Dependency Resolver Configuration
=================================
Crafter Studio extracts and tracks dependencies between content items to assist authors with publishing, workflow and core content operations like copy and delete. This file configures what file paths Crafter considers a dependency and how they should be extracted.

To modify the Dependency Resolver configuration, click on |projectTools| from the bottom of the Sidebar, then click on **Configuration** and select **Dependency Resolver** from the list.

.. image:: /_static/images/site-admin/config-open-dependency-config.webp
    :alt: Configurations - Open Dependency Resolver Configuration
    :width: 45%
    :align: center

------
Sample
------
Here's a sample Dependency Resolver Configuration file (click on the triangle on the left to expand/collapse):

.. raw:: html

   <details>
   <summary><a>Sample dependency resolver configuration</a></summary>

.. rli:: https://raw.githubusercontent.com/craftercms/studio/support/4.x/src/main/webapp/repo-bootstrap/global/configuration/samples/sample-resolver-config.xml
   :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/studio/dependency/resolver-config.xml*
   :language: xml
   :linenos:

.. raw:: html

   </details>

|
|

-------------------------------
Soft Dependencies Configuration
-------------------------------
.. version_tag::
    :label: Since
    :version: 4.2.0

Soft dependencies are referenced items that are in a modified state and are optional. When calculating soft
dependencies, CrafterCMS follows dependencies recursively. To set the depth of soft dependencies calculated, configure
the maximum recursion iterations property ``studio.db.maxRecursiveIterations`` with a value between 0 and 20.
The default value is 10.

.. code-block:: yaml
    :caption: *bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml*

    # DB max_recursive_iterations value. This property should be set to a value between 0 and 20 (hard limit)
    studio.db.maxRecursiveIterations: 10

