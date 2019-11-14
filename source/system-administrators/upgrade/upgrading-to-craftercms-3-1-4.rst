:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-1-4:

===================================
Upgrade Notes for Crafter CMS 3.1.4
===================================

---------------------------------------------------------
Remove References to Outdated Studio Freemarker Templates
---------------------------------------------------------

When upgrading to Crafter CMS 3.1.4, outdated Studio Freemarker template files will be removed and is now replaced by templates provided by the Engine.  Here are the old template files that will be removed when upgrading to Crafter CMS 3.1.4:

- /templates/system/common/components-support.ftl
- /templates/system/common/crafter-support.ftl
- /templates/system/common/cstudio-support.ftl
- /templates/system/common/search-support.ftl
- /templates/system/common/craftercms-common.ftl
- /templates/system/common/craftercms-geo-lib.ftl

There are some sites that included the following template files ``craftercms-common.ftl``, ``craftercms-geo-lib.ftl`` and ``search-support.ftl`` (which is removed by the upgrader when upgrading to Crafter CMS 3.1.4) even though it is not being used.  After upgrading to Crafter CMS 3.1.4, **please remove references to those templates that have been removed through the upgrade as required**.


----------------------------------------------------------------------
Replace "overlayCallback" with "modePreview" in Freemarker/Groovy Code
----------------------------------------------------------------------

Some early Crafter sites used ``siteContext.overlayCallback`` to check if Engine was running in preview mode. In a later release, the ``modePreview`` boolean variable was introduced to more clearly indicate that Engine is in preview mode.

The ``overlayCallback`` has been removed in Crafter CMS 3.1.4. Please change your Freemarker/Groovy code to use ``modePreview`` instead. For example, if a Freemarker code snippet contains the following: ``<#if siteContext.overlayCallback??>``, change it to ``<#if modePreview>``.  See the first note :ref:`here <in-context-editing>` for more information.
