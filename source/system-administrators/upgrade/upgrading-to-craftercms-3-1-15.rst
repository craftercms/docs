:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-1-15:

====================================
Upgrade Notes for Crafter CMS 3.1.15
====================================

^^^^^^^^^^^^^^^^^^^^^^^^
Template not found error
^^^^^^^^^^^^^^^^^^^^^^^^
When upgrading, if a user encounters the following error:

  .. code-block:: text

     freemarker.template.TemplateNotFoundException: Template not found for name "static-assets/app/js/js.hash"

This means your application is using templates that are outside of the ``templates`` folder.

The following Engine Site configuration property or global server-config.properties property needs to be added to allow templates to be loaded outside of the ``templates`` folder:

* For files that applies to  all your sites in  Crafter  CMS, add your file/s path to the ``crafter.engine.site.default.templates.allowed.paths`` property in the ``server-config.properties`` file

    .. code-block:: properties
       :caption: *CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/engine/extension/server-config.properties*

       # List of regular expressions to allow templates to be loaded outside of the templates folder, separated by comma
       crafter.engine.site.default.templates.allowed.paths=/?static-assets/app/js/js\\.hash

    |

* For site specific files, add your file/s path to your Engine site configuration file

    .. code-block:: xml
       :caption: *CRAFTER_HOME/data/repos/sites/SITENAME/sandbox/config/engine/site-config.xml*

       <templates>
         <allowed>/?static-assets/app/js/js\\.hash,....</allowed>
       </templates>

    |