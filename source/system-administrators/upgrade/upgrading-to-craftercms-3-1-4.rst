:is-up-to-date: True

:orphan:

.. document does not appear in any toctree, this file is referenced
   use :orphan: File-wide metadata option to get rid of WARNING: document isn't included in any toctree for now

.. _upgrade-to-3-1-4:

===================================
Upgrade Notes for Crafter CMS 3.1.4
===================================

When upgrading to Crafter CMS 3.1.4, outdated Studio Freemarker template files will be removed and is now replaced by templates provided by the Engine.  Here are the old template files that will be removed when upgrading to Crafter CMS 3.1.4:

- /templates/system/common/components-support.ftl
- /templates/system/common/crafter-support.ftl
- /templates/system/common/cstudio-support.ftl
- /templates/system/common/search-support.ftl
- /templates/system/common/craftercms-common.ftl
- /templates/system/common/craftercms-geo-lib.ftl

There are some sites that included the following template files ``craftercms-common.ftl``, ``craftercms-geo-lib.ftl`` and ``search-support.ftl`` (which is removed by the upgrader when upgrading to Crafter CMS 3.1.4) even though it is not being used.  After upgrading to Crafter CMS 3.1.4, **please remove references to those templates that have been removed through the upgrade as required**.

